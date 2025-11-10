import { IChart } from "./Interfaces";

export default class LineChart implements IChart{
   public render(data: number[]): void {
        console.log("Rendering line chart with", data);
    }
};
