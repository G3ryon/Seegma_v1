import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

/*
PROPS: data : le set de donné
       xTitle : Legende axe des abscisses 
       yTitle : Legende axe des ordonnées
       
RETURN: Un graphique XY

*/

class Chart extends Component {

    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.data = this.props.data;
        chart.responsive.enabled = true;

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "x";
        categoryAxis.title.text = this.props.xTitle;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = this.props.yTitle;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "y";
        series.dataFields.categoryX = "x";
        series.dataFields.name = "unit";
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.propertyFields.stroke = "color";
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.stacked = true;
        
        chart.cursor = new am4charts.XYCursor();
        chart.scrollbarX = new am4core.Scrollbar();
        this.chart = chart;
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            
            this.chart.data = this.props.data;
    }}
    
    componentWillUnmount(){
        if (this.chart) {
            this.chart.dispose();
          }
    }

    render() {

        return (

            <div id="chartdiv">

            </div>
        );
    }
}
export default Chart;