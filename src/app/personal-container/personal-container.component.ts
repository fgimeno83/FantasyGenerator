import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { GeneratorService } from '../services/generator.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CompoundComponent } from '../compound/compound.component';

@Component({
  selector: 'app-personal-container',
  templateUrl: './personal-container.component.html',
  styleUrls: ['./personal-container.component.css']
})
export class PersonalContainerComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  private generatorService: GeneratorService;
  private formBuilder: FormBuilder;
  public options: FormGroup;
  public goldResult: number;

  public components = [];

  constructor(generatorService: GeneratorService, formBuilder: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {
    this.formBuilder = formBuilder;
    this.generatorService = generatorService;
  }

  ngOnInit(): void {
    this.options = this.formBuilder.group({
      levelSel: ['', Validators.required],
      numberSel: ['', Validators.required]
    });
  }

  public send() {
    this.goldResult = this.generatorService.generatePersonalTreasure(this.options.value.numberSel, this.options.value.levelSel);
  }

  public addComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompoundComponent);

    const componentRef = this.container.createComponent(componentFactory);
    (componentRef.instance as CompoundComponent).parentForm = this.options;
    this.components.push(componentRef);
  }

  public removeComponent(index: number) {
    console.log(index);
    const component = this.components.find((component) => component.instance instanceof CompoundComponent);
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  }

}
