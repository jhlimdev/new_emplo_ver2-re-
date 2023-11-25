/**
 * Sample for Cylindrical Column series
 */
import * as React from 'react';
import { useEffect } from "react";
import { ChartComponent, ColumnSeries, Category, DataLabel, Tooltip, SeriesDirective, SeriesCollectionDirective, Inject } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data = [
    // { x: 'China', y: 26, tooltipMappingName: 'China' },
    { x: 'Web', y: 8, tooltipMappingName: 'Web' },
    { x: 'Windows', y: 17, tooltipMappingName: 'Windows' },
    { x: 'Mac', y: 7, tooltipMappingName: 'Mac' },
    { x: 'Linux', y: 12, tooltipMappingName: 'Linux' },
    { x: 'A.I.', y: 46, tooltipMappingName: 'A.I.' }
];
const Cylindrical = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    return (<div className='control-pane'>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} chartArea={{ border: { width: 0 } }} title='The departmental revenue over the past month' primaryXAxis={{
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
            labelRotation: Browser.isDevice ? -45 : 0,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        }} primaryYAxis={{
            title: 'The departmental revenue(1M $)',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            maximum: 50,
            interval: 10
        }} tooltip={{
            enable: true,
            header: "<b>${point.tooltip}</b>",
            format: "US $: <b>${point.y}m$</b>"
        }} load={load.bind(this)} loaded={onChartLoad.bind(this)} width={Browser.isDevice ? '100%' : '75%'}>
                    <Inject services={[ColumnSeries, Category, DataLabel, Tooltip]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} columnFacet='Cylinder' type='Column' xName='x' yName='y' width={2} columnSpacing={0.1} tooltipMappingName='tooltipMappingName'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default Cylindrical;