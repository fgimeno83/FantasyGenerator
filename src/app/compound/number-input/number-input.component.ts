import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  @Input() public parentForm: FormGroup;

  // public matcher = new MyErrorStateMatcher();

  public hasRequiredError = true;

  public hasEmailError = true;

  public hasError = true;

  public matcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null) {
      const isSubmitted = form && form.submitted;
      if(control && control.invalid && (control.dirty || control.touched || isSubmitted)) {
        if (control.hasError('required')) {
          this.hasRequiredError = true;
        } else {
          this.hasRequiredError = false;
        }

        if(control.hasError('email') && !control.hasError('required')) {
          this.hasEmailError = true;
        } else {
          this.hasEmailError = false;
        }

        this.hasError = false;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  // public hasError(errorType: string): boolean {
  //   console.log('haserror');
  //   let result = false;
  //   if ('required' === errorType) {
  //     result = this.hasRequiredError;
  //   }

  //   if ('email' === errorType) {
  //     result = this.hasEmailError;
  //   }

  //   return result;
  // }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
