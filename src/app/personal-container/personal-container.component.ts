import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/check.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personal-container',
  templateUrl: './personal-container.component.html',
  styleUrls: ['./personal-container.component.css']
})
export class PersonalContainerComponent implements OnInit {

  private checkService: CheckService;
  options: FormGroup;

  constructor(checkService: CheckService, fb: FormBuilder) {
    this.options = fb.group({
    });
    this.checkService = checkService;
    // checkService.checkPersonalTreasure(1, 's');
  }

  ngOnInit(): void {
  }

}
