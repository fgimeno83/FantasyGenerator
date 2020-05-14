import { Injectable } from '@angular/core';
import { CONVERSION_CONSTANTS } from '../model/conversor-constants';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private VALUE_SEPARATOR: string;
  private COIN_TYPE_SEPARATOR: string;
  private MULTIPLIER_SEPARATOR: string;

  constructor() {
    this.VALUE_SEPARATOR = ';';
    this.COIN_TYPE_SEPARATOR = ':';
    this.MULTIPLIER_SEPARATOR = 'x';
   }

  public convert(cuantity: number, source: CoinType, target: CoinType) {

  }

  public convertFromString(source: string) {
//4d6x100:pc;1d6x10:pe
    let values: string[];
    values = source.split(this.VALUE_SEPARATOR);

    // if (source.includes(this.VALUE_SEPARATOR)){
    // } else {
    //   values = source.;
    // }
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
