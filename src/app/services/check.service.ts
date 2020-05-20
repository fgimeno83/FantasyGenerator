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
  private DICE_SEPARATOR: string;
  // private conversorService: ConversorService;

  constructor(/*conversorService: ConversorService*/) {
    this.personalTreasure = personalTreasureJson;
    this.RANGE_SEPARATOR = '-';
    this.MAX_CHECK_VALUE = 100;
    this.MIN_CHECK_VALUE = 1;
    this.DICE_SEPARATOR = 'd';
    // this.conversorService = conversorService;
  }

  public checkPersonalTreasure(numberOfChecks: number, challenge: string) {
  //   console.log('in');
  //   console.log(this.personalTreasure);
    const personalChallengeSelected = this.personalTreasure.personal.find(personal =>
      this.isNumberInRange(parseInt(challenge, 10), personal.challenge));
    // console.log(personalChallengeSelected);
    const randomCheckResult = this.randomCheck(this.MIN_CHECK_VALUE, this.MAX_CHECK_VALUE);
    // console.log(randomCheckResult);
    return personalChallengeSelected.values.find(value => this.isNumberInRange(randomCheckResult, value.check));
    // console.log(valueSelected);

    // console.log(this.conversorService.convertFromString(valueSelected.value));
    // console.log('out');
  }

  // private isChallengeSelected(personal: Personal, challenge: string) {
  //   console.log(personal.challenge + ' - ' + challenge);
  //   // return personal.challenge === challenge;
  //   const result = this.isNumberInRange(parseInt(challenge, 10), personal.challenge);
  //   console.log(result);
  //   return result;
  // }

  private randomCheck(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public randomCheckFromString(check: string) {
    // 4d6
    let total: number;
    const checkArray = check.split(this.DICE_SEPARATOR);
    const numberOfChecks = checkArray[0];
    const dice = checkArray[1];
    for (let index = 0; index < parseInt(numberOfChecks, 10); index++) {
      total += this.randomCheck(1, parseInt(dice, 10));
    }
    return total;
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
