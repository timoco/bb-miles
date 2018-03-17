// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {parse} from '../utils'

// importing stylesheets
import '../style/main.css';

const projection = d3.geoMercator();

// defining Factory function
function Ballparks(_) {

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
        const locations = data.features.map(d => {
            return {
                long: +d.long,
                lat: +d.lat,
                ballparks: d.Ballparks
            };
        })

        console.log(data.features);

    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Ballparks;

// creating projection
