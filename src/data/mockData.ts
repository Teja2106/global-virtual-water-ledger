import { WaterTransaction, CountryWaterData } from '../types';

export const transactions: WaterTransaction[] = [
  {
    id: '1',
    date: '2024-03-15',
    source: 'United States',
    destination: 'Mexico',
    amount: 1500000,
    type: 'agriculture',
    status: 'completed'
  },
  {
    id: '2',
    date: '2024-03-14',
    source: 'Brazil',
    destination: 'Argentina',
    amount: 800000,
    type: 'industrial',
    status: 'completed'
  },
  // Add more transactions as needed
];

export const countryData: CountryWaterData[] = [
  {
    country: 'United States',
    totalConsumption: 322000000,
    agriculture: 70,
    industrial: 20,
    domestic: 10,
    trend: [310000000, 315000000, 318000000, 320000000, 322000000]
  },
  {
    country: 'China',
    totalConsumption: 362000000,
    agriculture: 65,
    industrial: 25,
    domestic: 10,
    trend: [340000000, 345000000, 350000000, 355000000, 362000000]
  },
  // Add more country data as needed
];