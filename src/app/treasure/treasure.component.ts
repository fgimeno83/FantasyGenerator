import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css']
})
export class TreasureComponent implements OnInit {

  private formBuilder: FormBuilder;
  private generatorService: GeneratorService;
  public options: FormGroup;
  public checks = [
    {name: '1-5'},
    {name: '6-10'},
    {name: '11-15'},
    {name: '16-20'},
    {name: '21-25'},
    {name: '26-30'},
    {name: '31-35'},
    {name: '36-40'},
    {name: '41+'}
  ];

  constructor(generatorService: GeneratorService, formBuilder: FormBuilder) {
    this.generatorService = generatorService;
    this.formBuilder = formBuilder;
  }

  //+1 semana, +1 100po, max +10, percepcion
  ngOnInit(): void {
  }

  public send() {

  }
}
