import { ValueHoardTreasure } from './value.model';

export interface Hoard {
  challenge: string;
  money: string;
  values: ValueHoardTreasure[];
}
