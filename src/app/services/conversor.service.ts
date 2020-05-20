import { Injectable } from '@angular/core';
import { CONVERSION_CONSTANTS } from '../model/conversor-constants';
import { CoinType } from '../model/coin-enum.model';
import { CheckService } from './check.service';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private VALUE_SEPARATOR: string;
  private COIN_TYPE_SEPARATOR: string;
  private MULTIPLIER_SEPARATOR: string;
  private checkService: CheckService;

  constructor(checkService: CheckService) {
    this.VALUE_SEPARATOR = ';';
    this.COIN_TYPE_SEPARATOR = ':';
    this.MULTIPLIER_SEPARATOR = 'x';
    this.checkService = checkService;
   }

  public convert(cuantity: number, source: CoinType, target: CoinType) {

  }

  public convertFromString(source: string) {
    // 4d6x100:pc;1d6x10:pe
    const values = source.split(this.VALUE_SEPARATOR);

    values.map(value => value.split(this.COIN_TYPE_SEPARATOR));

    values.forEach(value => {
      const valueType = value.split(this.COIN_TYPE_SEPARATOR);
      let coinValue = valueType[0];
      let multiplier: string;
      if (coinValue.includes(this.MULTIPLIER_SEPARATOR)) {
        const coinValueArray = coinValue.split(this.MULTIPLIER_SEPARATOR);
        coinValue = coinValueArray[0];
        multiplier = coinValueArray[1];
      }

      // TODO
      // check dices
      // multiply
      // convert
      const checkTotal = this.checkService.randomCheckFromString(coinValue) * parseInt(multiplier, 10);
    });

    return values;
  }



  private convertCopper(cuantity: number, target: CoinType) {

    let result = 1;
    let conversionValue = 0;
    switch (target) {
      case CoinType.COPPER:
        conversionValue = CONVERSION_CONSTANTS.COPPER_SILVER;
        break;
      case CoinType.SILVER:
        conversionValue = CONVERSION_CONSTANTS.SILVER_ELECTRUM;
        break;
      case CoinType.ELECTRUM:
        conversionValue = CONVERSION_CONSTANTS.ELECTRUM_GOLD;
        break;
      case CoinType.PLATINUM:
        conversionValue = CONVERSION_CONSTANTS.GOLD_PLATINUM;
        break;
    }

    if (cuantity >= conversionValue) {
      result = cuantity / conversionValue;
      result += cuantity % conversionValue;
    }

    return result.toFixed();
  }
}
