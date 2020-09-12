import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  @Input() public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  public getErrorMessage() {
    let message = 'Sólo se permiten valores numéricos';
    if(this.parentForm.get('numberSel').hasError('required')) {
      message = 'Este valor es obligatorio';
    }

    return message;
  }
}
