import { IChart } from './Interfaces.js';

export default class BarChart implements IChart {
  public render(data: number[]): void {
    console.log('Rendering bar chart with', data);
  }
}
