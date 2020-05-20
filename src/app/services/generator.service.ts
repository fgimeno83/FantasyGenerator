import { Injectable } from '@angular/core';
import { ConversorService } from './conversor.service';
import { CheckService } from './check.service';

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

  public generatePersonalTreasure(numberOfChecks: number, challenge: string) {
    const personalValues = this.checkService.checkPersonalTreasure(numberOfChecks, challenge);

    return this.conversorService.convertFromString(personalValues.value);
  }
}
