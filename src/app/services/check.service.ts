import { Injectable } from '@angular/core';
import { PersonalTreasure } from '../model/personal-treasure.model';
import { Personal } from '../model/personal-treasure/personal.model';
import personalTreasureJson from '../../assets/personalTreasure.json';
import { ConversorService } from './conversor.service';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private personalTreasure: PersonalTreasure;
  private RANGE_SEPARATOR: string;
  private MIN_CHECK_VALUE: number;
  private MAX_CHECK_VALUE: number;
  private conversorService: ConversorService;

  constructor(conversorService: ConversorService) {
    this.personalTreasure = personalTreasureJson;
    this.RANGE_SEPARATOR = '-';
    this.MAX_CHECK_VALUE = 100;
    this.MIN_CHECK_VALUE = 1;
    this.conversorService = conversorService;
  }

  public checkPersonalTreasure(numberOfChecks: number, challenge: string) {
    const personalChallengeSelected = this.personalTreasure.personal.find(personal => this.isChallengeSelected(personal, challenge));
    const valueSelected = personalChallengeSelected.values.find(value =>
      this.isNumberInRange(this.randomCheck(this.MIN_CHECK_VALUE, this.MAX_CHECK_VALUE), value.check));

    this.conversorService.convert(valueSelected.value);

    console.log(personalChallengeSelected.values.length);
  }

  private isChallengeSelected(personal: Personal, challenge: string) {
    return personal.challenge === challenge;
  }

  private randomCheck(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private isNumberInRange(check: number, stringRange: string) {
    let min: number;
    let max: number;
    if (stringRange.includes(this.RANGE_SEPARATOR)){
      const range = stringRange.split(this.RANGE_SEPARATOR);
      min = parseInt(range[0], 10);
      max = parseInt(range[1], 10);
    } else {
      min = parseInt(stringRange, 10);
      max = min;
    }

    return (check >= min && check <= max);
  }
}
