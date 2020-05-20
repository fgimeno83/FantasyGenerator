import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-container',
  templateUrl: './personal-container.component.html',
  styleUrls: ['./personal-container.component.css']
})
export class PersonalContainerComponent implements OnInit {

  private generatorService: GeneratorService;
  private formBuilder: FormBuilder;
  public options: FormGroup;

  constructor(generatorService: GeneratorService, formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.generatorService = generatorService;
  }

  ngOnInit(): void {
    this.options = this.formBuilder.group({
      levelSel: ['', Validators.required],
      numberSel: ['', Validators.required]
    });
  }

  public send() {
    // console.log(this.options.value);
    // console.log(this.options.status);
    // console.log(this.options.invalid);
    this.generatorService.generatePersonalTreasure(this.options.value.numberSel, this.options.value.levelSel);
  }

}
