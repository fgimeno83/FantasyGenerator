import { Injectable } from '@angular/core';
import { ConversorService } from './conversor.service';
import { CheckService } from './check.service';
import { FormArray } from '@angular/forms';
import { TreasureFormModel } from '../model/treasure-form.model';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private conversorService: ConversorService;

  private checkService: CheckService;

  constructor(conversorService: ConversorService, checkService: CheckService) {
    this.conversorService = conversorService;
    this.checkService = checkService;
   }

  public generatePersonalTreasure(options: TreasureFormModel[]) {
    let totalValue = 0;
    options.forEach(value => {
      const p = this.generateEachPersonalTreasure(value.numberSel, value.levelSel);
      console.log(p);
      totalValue += p;
    });

    return totalValue;
  }

  private generateEachPersonalTreasure(numberOfChecks: number, challenge: string) {
    let totalValue = 0;
    for (let index = 0; index < numberOfChecks; index++) {
      const personalValues = this.checkService.checkPersonalTreasure(challenge);
      totalValue +=  this.conversorService.convertFromString(personalValues.value);
    }

    return totalValue;
  }
}
