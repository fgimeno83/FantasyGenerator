import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/check.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personal-container',
  templateUrl: './personal-container.component.html',
  styleUrls: ['./personal-container.component.css']
})
export class PersonalContainerComponent implements OnInit {

  private checkService: CheckService;
  private formBuilder: FormBuilder;
  public options: FormGroup;

  constructor(checkService: CheckService, formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.checkService = checkService;
    // checkService.checkPersonalTreasure(1, 's');
  }

  ngOnInit(): void {
    this.options = this.formBuilder.group({
    });
  }

}
