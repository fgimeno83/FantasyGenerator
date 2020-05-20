import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-presenter',
  templateUrl: './result-presenter.component.html',
  styleUrls: ['./result-presenter.component.css']
})
export class ResultPresenterComponent implements OnInit {

  @Input() public goldResult: number;

  constructor() { }

  ngOnInit(): void {
  }

}
