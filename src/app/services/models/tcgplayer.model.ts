export interface TcgplayerModel {
  url: string;
  updatedAt: string;
  prices: HolofoilPricesModel
}

interface HolofoilPricesModel {
  holofoil: {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number;
  }
}

