import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html'
})
export class LevelComponent implements OnInit {

  @Input() public parentForm: FormGroup;

  public levels = [
    {name: '0-4'},
    {name: '5-10'},
    {name: '11-16'},
    {name: '17+'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
