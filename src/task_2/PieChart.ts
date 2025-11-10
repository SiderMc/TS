import { IChart } from "./Interfaces.js";

export default class PieChart implements IChart {
    public render(data: number[]): void {
        console.log("Rendering pie chart with", data);
    }
};
