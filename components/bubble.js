import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["ID", "Incidents", "Location", "Time"],
    ["HIG", 0, 80.66, 1],
    ["LOW", 2, 180.66, 3],
    ["MED", 1, 8.66, 1],
    ["LOW", 4, 10.66, 3],
    ["HIG", 0, 0.66, 1],
    ["MED", 1, 8.66, 1],
    ["MED", 1, 8.66, 1],

];

export const options = {
    title:
        "kjshskh ",
    hAxis: { title: "Time" },
    vAxis: { title: "Incidents" },
    bubble: { textStyle: { fontSize: 11 } },
    is3D: true
};

export function BubbleApp() {
    return (
        <Chart
            chartType="BubbleChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
