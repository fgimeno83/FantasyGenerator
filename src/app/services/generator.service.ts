import { Injectable } from '@angular/core';
import { ConversorService } from './conversor.service';
import { CheckService } from './check.service';
import { TreasureFormModel } from '../model/treasure-form.model';
import { element } from 'protractor';
import { ShopFormModel } from '../model/shop-form.model';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private conversorService: ConversorService;

  private checkService: CheckService;

  private magicItemShopMap = [
    {id: 1, range: '1-5', value: '1d6:A'},
    {id: 2, range: '6-10', value: '1d3:B'},
    {id: 3, range: '11-15', value: '1d4:C'},
    {id: 4, range: '16-20', value: '1d4:D'},
    {id: 5, range: '21-25', value: '1d4:E'},
    {id: 6, range: '26-30', value: '1d4:F'},
    {id: 7, range: '31-35', value: '1d4:G'},
    {id: 8, range: '36-40', value: '1d4:H'},
    {id: 9, range: '41-100', value: '1d4:I'}
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

  public generateMagicShop(shopForm: ShopFormModel) {
    const totalValue = 0;
    const itemShopId = shopForm.checkSel;
    let itemList: string[];

    if (!shopForm.isStatic) {
      const itemShopCheck = this.checkService.randomCheck(1, 20) + this.generateBonusCheck(shopForm.weeks, shopForm.gold);
      itemList = this.checkForMagicShopTreasure(itemShopCheck);
    } else {
      itemList = this.checkForStaticMagicShopTreasure(itemShopId);
    }

    const result = {
      totalValue,
      itemList
    };
    return result;
  }

  private generateBonusCheck(weeks: number, gold: number) {
    const goldBonus = parseInt((gold / 100).toFixed(), 10);
    const result = (weeks - 1) + (goldBonus - 1);

    return (result >= 0) ? result : 0;
  }

  private checkForStaticMagicShopTreasure(id: number) {
    const itemShopResult = this.magicItemShopMap.filter(itemShopElement => itemShopElement.id === id).map(item => item.value);
    return this.checkService.checkMagicItem(itemShopResult[0]);
  }

  private checkForMagicShopTreasure(check: number) {
    const itemShopResult = this.magicItemShopMap.filter(itemShopElement =>
      this.checkService.isNumberInRange(check, itemShopElement.range)).map(item => item.value);
    return this.checkService.checkMagicItem(itemShopResult[0]);
  }
}
