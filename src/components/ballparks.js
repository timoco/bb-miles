// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {parse, calcDist} from '../utils'

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
        let locations = [];

        for (let i = 0; i < data.features.length; i++) {
            locations.push( {
                    lat: data.features[i].geometry.coordinates[1],
                    lon: data.features[i].geometry.coordinates[0],
                    ballpark: data.features[i].properties.ballpark,
                    team: data.features[i].properties.team_id
                }
            )
        }

        const circles = d3.select('.map')
            .selectAll('.ballparks')
            .data(locations)
            .enter()
            .append('circle')
            .classed('ballparks', true)
            .attr('cx', d => projection([d.lon, d.lat])[0])
            .attr('cy', d => projection([d.lon, d.lat])[1])
            .attr('r', 3)
            .attr('fill', 'red');


    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Ballparks;

// creating projection
