import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, EventEmitter, HostListener } from '@angular/core';
import { GeneratorService } from '../services/generator.service';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { CompoundComponent } from '../compound/compound.component';
import { TreasureFormModel } from '../model/treasure-form.model';

@Component({
  selector: 'app-personal-container',
  templateUrl: './personal-container.component.html',
  styleUrls: ['./personal-container.component.css']
})
export class PersonalContainerComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  private generatorService: GeneratorService;
  private formBuilder: FormBuilder;
  public options: FormArray;
  public goldResult: number;

  public components = [];

  constructor(generatorService: GeneratorService, formBuilder: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {
    this.formBuilder = formBuilder;
    this.generatorService = generatorService;
  }

  ngOnInit(): void {
    this.options = new FormArray([
      this.formBuilder.group({
        levelSel: ['', Validators.required],
        numberSel: ['', Validators.required]
      })
    ]);
  }

  public send() {
    const treasureForm: TreasureFormModel[] = this.options.value;
    this.goldResult = this.generatorService.generatePersonalTreasure(treasureForm);
    // this.goldResult = this.generatorService.generatePersonalTreasure(this.options.value.numberSel, this.options.value.levelSel);
  }

  public addComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompoundComponent);

    const componentRef = this.container.createComponent(componentFactory);

    this.options.push(this.formBuilder.group({
      levelSel: ['', Validators.required],
      numberSel: ['', Validators.required]
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
