// import React from "react";
// import { useD3 } from "../../hooks/useD3";
// import * as d3 from 'd3';

// const Chart = ({ data }: any) => {
//   const ref = useD3(
//     (svg: any) => {
//       const height = 300;
//       const width = 500;
//       const margin = { top: 20, right: 30, bottom: 30, left: 40 };

//       const x = d3
//         .scaleBand()
//         .domain(data.map((d: any) => d.year))
//         .rangeRound([margin.left, width - margin.right])
//         .padding(0.1);

//       const y1 = d3
//         .scaleLinear()
//         .domain([0, d3.max(data, (d: number) => d.sales)])
//         .rangeRound([height - margin.bottom, margin.top]);

//       const xAxis = (g) =>
//         g.attr("transform", `translate(0,${height - margin.bottom})`).call(
//           d3
//             .axisBottom(x)
//             .tickValues(
//               d3
//                 .ticks(...d3.extent(x.domain()), width / 40)
//                 .filter((v: any) => x(v) !== undefined)
//             )
//             .tickSizeOuter(0)
//         );

//       const y1Axis = (g) =>
//         g
//           .attr("transform", `translate(${margin.left},0)`)
//           .style("color", "green")
//           .call(d3.axisLeft(y1).ticks(null, "s"))
//           .call((g: any) => g.select(".domain").remove())
//           .call((g: any) =>
//             g
//               .append("text")
//               .attr("x", -margin.left)
//               .attr("y", 10)
//               .attr("fill", "currentColor")
//               .attr("text-anchor", "start")
//               .text(data.y1)
//           );

//       svg.select(".x-axis").call(xAxis);
//       svg.select(".y-axis").call(y1Axis);

//       svg
//         .select(".plot-area")
//         .attr("fill", "green")
//         .selectAll(".bar")
//         .data(data)
//         .join("rect")
//         .attr("class", "bar")
//         .attr("x", (d: any) => x(d.year))
//         .attr("width", x.bandwidth())
//         .attr("y", (d: any) => y1(d.sales))
//         .attr("height", (d: any) => y1(0) - y1(d.sales));
//     },
//     [data.length]
//   );

//   return (
//     <svg
//       ref={ref}
//       style={{
//         height: 300,
//         width: "100%",
//         marginRight: "0px",
//         marginLeft: "0px",
//       }}
//     >
//       <g className="plot-area" />
//       <g className="x-axis" />
//       <g className="y-axis" />
//     </svg>
//   );
// };

// export default Chart;

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: number[];
}

const Chart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const svg = d3.select(chartRef.current);

      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = +svg.attr("width") - margin.left - margin.right;
      const height = +svg.attr("height") - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(data.map((d, i) => i.toString()));

      const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(data) || 0]);

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      g.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", (d, i) => x(i.toString()) || 0)
        .attr("y", (d) => y(d))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d))
        .attr("fill", "steelblue");

      g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      g.append("g")
        .call(d3.axisLeft(y));
    }
  }, [chartRef, data]);

  return (
    <svg
      ref={chartRef}
      width={400}
      height={300}
    />
  );
};

export default Chart;
