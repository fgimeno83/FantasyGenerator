import { Injectable } from '@angular/core';
import { PersonalTreasure } from '../model/personal-treasure.model';
import { HoardTreasure } from '../model/hoard-treasure.model';
import { MagicItem } from '../model/magic-item.model';
import { Hoard } from '../model/hoard-treasure/hoard.model';
import personalTreasureJson from '../../assets/personalTreasure.json';
import hoardTreasureJson from '../../assets/hoardTreasure.json';
import magicItemsJson from '../../assets/magicItems.json';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private personalTreasure: PersonalTreasure;
  private hoardTreasure: HoardTreasure;
  private magicItems: MagicItem;
  private RANGE_SEPARATOR: string;
  private MIN_CHECK_VALUE: number;
  private MAX_CHECK_VALUE: number;
  private DICE_SEPARATOR: string;
  private ITEM_SEPARATOR: string;
  private MULTIPLE_ITEM_SEPARATOR: string;

  constructor() {
    this.personalTreasure = personalTreasureJson;
    this.hoardTreasure = hoardTreasureJson;
    this.RANGE_SEPARATOR = '-';
    this.ITEM_SEPARATOR = ':';
    this.MAX_CHECK_VALUE = 100;
    this.MIN_CHECK_VALUE = 1;
    this.DICE_SEPARATOR = 'd';
    this.MULTIPLE_ITEM_SEPARATOR = ';';
  }

  public checkPersonalTreasure(challenge: string) {
    const personalChallengeSelected = this.personalTreasure.personal.find(personal =>
    challenge === personal.challenge);
    const randomCheckResult = this.randomCheck(this.MIN_CHECK_VALUE, this.MAX_CHECK_VALUE);
    return personalChallengeSelected.values.find(value => this.isNumberInRange(randomCheckResult, value.check));

  }

  public getHoard(challenge: string) {
    return this.hoardTreasure.hoard.find(hoard => challenge === hoard.challenge);
  }

  public checkHoardTreasure(hoard: Hoard) {
    const randomCheckResult = this.randomCheck(this.MIN_CHECK_VALUE, this.MAX_CHECK_VALUE);
    return hoard.values.find(value => this.isNumberInRange(randomCheckResult, value.check));
  }

  public checkMagicItem(check: string) {
    const multipleValues = check.split(this.MULTIPLE_ITEM_SEPARATOR);
    const itemList = [];

    multipleValues.forEach(simpleValue => {
      const checkValues = simpleValue.split(this.ITEM_SEPARATOR);
      const itemValues = magicItemsJson.item.find(item => item.table === checkValues[1]);
      const numberOfChecksResult = this.randomCheckFromString(checkValues[0]);

      for (let index = 0; index < numberOfChecksResult; index++) {
        const randomCheckResult = this.randomCheck(this.MIN_CHECK_VALUE, this.MAX_CHECK_VALUE);
        itemList.push(itemValues.values.find(value => this.isNumberInRange(randomCheckResult, value.check)));
      }
    });

    return itemList;
  }

  public randomCheck(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public randomCheckFromString(check: string) {
    let total = 0;
    const checkArray = check.split(this.DICE_SEPARATOR);
    const numberOfChecks = checkArray[0];
    const dice = checkArray[1];
    for (let index = 0; index < parseInt(numberOfChecks, 10); index++) {
      total += this.randomCheck(1, parseInt(dice, 10));
    }

    return total;
  }

  public isNumberInRange(check: number, stringRange: string) {
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
