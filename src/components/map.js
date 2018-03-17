// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {parse} from '../utils'

// importing stylesheets
import '../style/main.css';

const projection = d3.geoMercator();
const path = d3.geoPath().projection(projection);



// defining Factory function
function Mapping(_) {

    // TO DO: create getter-setter variables in factory scope

    function exports(data) {
        // selecting root element ==> svg container, div where function is called in index.js
        const root = this;

        // declaring setup/layout variables
        const width = root.clientWidth;
        const height = root.clientHeight;
        const margin = {t:0, r:0, b:0, l:0};

        projection.center([-98,39])
            .scale(width);

        const svg = d3.select(root)
            .append('svg')
            .attr('width', width + margin.l + margin.r)
            .attr('height', height + margin.t + margin.b);

        const map = svg.append('g')
            .attr('transform', `translate(${margin.l},${margin.t})`)
            .classed('map', true)
            .selectAll('.base')
            .data(data.features)
            .enter()
            .append('path')
            .classed('base', true)
            .attr('d', path);

        // Data Transformation

    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Mapping;

// creating projection
