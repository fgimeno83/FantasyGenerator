import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  @Input() public parentForm: FormGroup;
  @Input() public disableDelete: boolean;
  @Output() public indexComp = new EventEmitter<CompoundComponent>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

}
