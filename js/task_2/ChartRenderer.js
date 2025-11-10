export default class ChartRenderer {
    chart;
    constructor(chart) {
        this.chart = chart;
    }
    render(data) {
        this.chart.render(data);
    }
}
;
