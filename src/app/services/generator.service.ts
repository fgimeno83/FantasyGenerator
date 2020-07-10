import { Injectable } from '@angular/core';
import { ConversorService } from './conversor.service';
import { CheckService } from './check.service';
import { TreasureFormModel } from '../model/treasure-form.model';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private conversorService: ConversorService;

  private checkService: CheckService;

  private magicItemShopMap = [
    {id: 1, value: '1d6:A'},
    {id: 2, value: '1d3:B'},
    {id: 3, value: '1d4:C'},
    {id: 4, value: '1d4:D'},
    {id: 5, value: '1d4:E'},
    {id: 6, value: '1d4:F'},
    {id: 7, value: '1d4:G'},
    {id: 8, value: '1d4:H'},
    {id: 9, value: '1d4:I'}
  ];

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

  public generateHoardTreasure(options: TreasureFormModel[]) {
    const totalValue = 0;
    const itemList = [];
    const result = {
      totalValue,
      itemList
    };

    options.forEach(value => {
      const p = this.generateEachHoardTreasure(value.numberSel, value.levelSel);
      result.totalValue += p.totalValue;
      result.itemList = result.itemList.concat(p.itemList);
    });

    return result;
  }

  private generateEachHoardTreasure(numberOfChecks: number, challenge: string) {
    let totalValue = 0;
    let itemList = [];
    for (let index = 0; index < numberOfChecks; index++) {
      const hoard = this.checkService.getHoard(challenge);
      const hoardValue = this.checkService.checkHoardTreasure(hoard);
      totalValue +=  this.conversorService.convertFromString(hoard.money);
      totalValue +=  this.conversorService.convertFromString(hoardValue.gems);
      itemList = itemList.concat(this.checkService.checkMagicItem(hoardValue.objects));
    }

    const result = {
      totalValue,
      itemList
    };
    return result;
  }

  public generateMagicShop(weeks: number, gold: number, isStatic: boolean, selectionId: number) {
    const totalValue = 0;
    let itemShopId = selectionId;
    if (!isStatic) {
      this.checkService.randomCheck(1, 20) + this.generateBonusCheck(weeks, gold);
    }

    const itemList = this.checkForMagiShopTreasure(itemShopId);

    const result = {
      totalValue,
      itemList
    };
    return result;
  }

  private generateBonusCheck(weeks: number, gold: number) {
    const goldBonus = gold / 100;
    return (weeks - 1) + (goldBonus.toFixed() - 1);
  }

  private checkForMagiShopTreasure(id: number) {
    const itemShopResult = this.magicItemShopMap.filter(itemShopElement => itemShopElement.id = id).map(item => item.value);
    return this.checkService.checkMagicItem(itemShopResult[0]);
  }
}
