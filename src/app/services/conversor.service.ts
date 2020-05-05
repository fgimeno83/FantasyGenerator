import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor() { }

  public convert(cuantity: number, source: CoinType, target: CoinType) {

  }

  private convertCopper(cuantity: number, target: CoinType) {
    let result = 1;
    switch (target) {
      case CoinType.SILVER:
        if (cuantity >= 10) {
          result = cuantity / 10;
          result += cuantity % 10;
        }
        break;
      case CoinType.ELECTRUM:
        if (cuantity >= 50) {
          result = cuantity / 50;
          result += cuantity % 50;
        }
        break;
      default:

    }
  }

  public convertCopper(cuantity: number, target: CoinType) {
    
  }

  public convertCopper(cuantity: number, target: CoinType) {
    
  }

  public convertCopper(cuantity: number, target: CoinType) {
    
  }
}
