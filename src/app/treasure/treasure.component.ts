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
  public totalValue: number;
  public itemList: any[];
  public checks = [
    {id: 1, name: '1-5'},
    {id: 2, name: '6-10'},
    {id: 3, name: '11-15'},
    {id: 4, name: '16-20'},
    {id: 5, name: '21-25'},
    {id: 6, name: '26-30'},
    {id: 7, name: '31-35'},
    {id: 8, name: '36-40'},
    {id: 9, name: '41+'}
  ];

  constructor(generatorService: GeneratorService, formBuilder: FormBuilder) {
    this.generatorService = generatorService;
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.options = this.formBuilder.group ({
      checkSel: [''],
      isStatic: ['false'],
      weeks: [''],
      gold: ['']
    });
  }

  public send() {
    const result = this.generatorService.generateMagicShop(this.options.value);
    this.totalValue = result.totalValue;
    this.itemList = result.itemList;
  }
}
