import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'app-personal-container',
  templateUrl: './personal-container.component.html',
  styleUrls: ['./personal-container.component.css']
})
export class PersonalContainerComponent implements OnInit {

  private checkService: CheckService;

  constructor(checkService: CheckService) {
    this.checkService = checkService;
    // checkService.checkPersonalTreasure(1, 's');
  }

  ngOnInit(): void {
  }

}
