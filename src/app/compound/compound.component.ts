import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  // @ViewChild('container2', {read: ViewContainerRef}) container: ViewContainerRef;

  @Input() public parentForm: FormGroup;
  @Input() public componentIndex: number;
  @Output() public indexComp = new EventEmitter<number>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  // public addComponent() {
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompoundComponent);
  //   const componentRef = this.container.createComponent(componentFactory);
  //   (componentRef.instance as CompoundComponent).parentForm = this.parentForm;
  // }

}
