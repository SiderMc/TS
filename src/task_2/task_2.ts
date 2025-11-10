// Задача 2. Побудова графіків:
// Клас ChartRenderer створює різні типи графіків: лінійний, стовпчиковий, круговий.
// Якщо потрібно додати новий тип графіка, код доведеться змінювати.
// ❌ Неправильна реалізація — порушення принципу відкритості/закритості
// class ChartRendererBad {
//   renderChart(type: string, data: number[]) {
//     if (type === "line") {
//       console.log("Rendering line chart with", data);
//     } else if (type === "bar") {

import BarChart from "./BarChart.js";
import ChartRenderer from "./ChartRenderer.js";
import LineChart from "./LineChart.js";
import PieChart from "./PieChart.js";

const lineChart = new ChartRenderer(new LineChart());
const barChart = new ChartRenderer(new BarChart());
const pieChart = new ChartRenderer(new PieChart());

lineChart.render([54, 12, 8]);
barChart.render([4, 18, 65]);
pieChart.render([66, 34, 93]);