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
  @Output() public indexComp = new EventEmitter<CompoundComponent>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

}
