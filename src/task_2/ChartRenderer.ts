import { IChart } from "./Interfaces.js";

export default class ChartRenderer {
    constructor(private chart:IChart){}
    public render( data: number[]){
        this.chart.render(data)
    }
};
