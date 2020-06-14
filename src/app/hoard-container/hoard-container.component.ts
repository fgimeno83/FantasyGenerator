import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { GeneratorService } from '../services/generator.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { TreasureFormModel } from '../model/treasure-form.model';
import { CompoundComponent } from '../compound/compound.component';

@Component({
  selector: 'app-hoard-container',
  templateUrl: './hoard-container.component.html',
  styleUrls: ['./hoard-container.component.css']
})
export class HoardContainerComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  private generatorService: GeneratorService;
  private formBuilder: FormBuilder;
  private components = [];
  public options: FormArray;
  public totalValue: number;
  public itemList: any[];


  constructor(generatorService: GeneratorService, formBuilder: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {
    this.formBuilder = formBuilder;
    this.generatorService = generatorService;
  }

  ngOnInit(): void {
    this.options = new FormArray([
      this.formBuilder.group({
        levelSel: ['', Validators.required],
        numberSel: ['', [Validators.required, Validators.email]]
      })
    ]);
  }

  public send() {
    const treasureForm: TreasureFormModel[] = this.options.value;
    const result = this.generatorService.generateHoardTreasure(treasureForm);
    this.totalValue = result.totalValue;
    this.itemList = result.itemList;
  }

  public addComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompoundComponent);

    const componentRef = this.container.createComponent(componentFactory);

    this.options.push(this.formBuilder.group({
      levelSel: ['', Validators.required],
      numberSel: ['', [
        Validators.required,
        Validators.email
      ]]
    }));

    (componentRef.instance as CompoundComponent).parentForm = this.options.controls[this.components.length + 1] as FormGroup;
    componentRef.instance.indexComp.subscribe(index => this.removeComponent(index));
    this.components.push(componentRef);
  }

  public removeComponent(deletedComp: CompoundComponent) {
    const component = this.components.find(component => component.instance === deletedComp);
    const componentIndex = this.components.indexOf(component);
    this.container.remove(componentIndex);
    this.components.splice(componentIndex, 1);
    this.options.removeAt(componentIndex);
  }

}
