// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {gridData} from '../utils'

// importing stylesheets
import '../style/main.css';

// defining Factory function
function Metrics(_) {

    // TO DO: create getter-setter variables in factory scope

    function exports(data) {
        // selecting root element ==> table container, div where function is called in index.js
        const root = this;

        // declaring setup/layout variables
        const width = root.clientWidth;
        const height = root.clientHeight;
        const margin = {t:20, r:20, b:20, l:20};

        // data transformation

        data.forEach(
            d => {
                d.cumm_w = +d.w_l.split('-')[0];
                d.ogc_fid = +d.ogc_fid;
            }
        );

        data.sort((a,b) => a.ogc_fid - b.ogc_fid);

        const scaleX = d3.scaleLinear().domain([0,162]).range([20,width-20]);
        const scaleY = d3.scaleLinear().domain([0,90]).range([280,0]);

        console.log(data);

        const svg = d3.select(root)
            .append('svg')
            .attr('width', width)
            .attr('height', '320px');

        const path = d3.line()
            .curve(d3.curveStepAfter)
            .x(d => scaleX(d.ogc_fid))
            .y(d => scaleY(d.cumm_w));

        const plot = svg.append('g')
            // .attr("transform", `translate(${margin.l},${margin.t})`)
            .append('path')
            .data([data])
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr('stroke-width', 1.5)
            .attr('d', path);

        // Add the X Axis
        svg.append("g")
              .attr("transform", "translate(0,280)")
              .call(d3.axisBottom(scaleX));

        // Add the Y Axis
        svg.append("g")
              .attr("transform", "translate(20,0)")
              .call(d3.axisLeft(scaleY));

    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Metrics;


// const totalLength = path.node().getTotalLength();
//
// trip.attr("stroke-dasharray", totalLength + " " + totalLength)
//   .attr("stroke-dashoffset", totalLength)
//   .transition()
//   .duration(2000)
//   .ease("linear")
//   .attr("stroke-dashoffset", 0);
