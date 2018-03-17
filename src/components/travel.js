// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {parse} from '../utils'

// importing stylesheets
import '../style/main.css';

const projection = d3.geoMercator();

// defining Factory function
function Travel(_) {

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

        // Data Transformation
        const origin = projection([1,1]);// FENWAY COORD
        const pathData = d3.path();
        pathData.moveTo(origin[0],origin[1]); // fenway
        for (let i = 0; i < data.length; i++) {
            let coord = projection([1,1])
            pathData.lineTo(coord[0],coord[1]);
        }

        // TO DO: draw path on map
        const trip = d3.select('.map')
            .append('path')
            .attr('d', pathData.toString())
            .classed('line')
            .attr('fill', none)
            .attr('stroke', 'black')
            .attr('stroke-width', 1);




    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Travel;

// creating projection
