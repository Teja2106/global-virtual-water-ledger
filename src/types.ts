export interface WaterTransaction {
  id: string;
  date: string;
  source: string;
  destination: string;
  amount: number;
  type: 'agriculture' | 'industrial' | 'domestic';
  status: 'completed' | 'pending' | 'failed';
}

export interface CountryWaterData {
  country: string;
  totalConsumption: number;
  agriculture: number;
  industrial: number;
  domestic: number;
  trend: number[];
}