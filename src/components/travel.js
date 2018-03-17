// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {parseDate} from '../utils'

// importing stylesheets
import '../style/main.css';

const projection = d3.geoMercator();


// defining Factory function
function Travel(_) {

    // TO DO: create getter-setter variables in factory scope

    function exports(games, locations) {
        // selecting root element ==> svg container, div where function is called in index.js
        const root = d3.select('.main-container');

        // declaring setup/layout variables
        const width = root.clientWidth;
        const height = root.clientHeight;
        const margin = {t:0, r:0, b:0, l:0};

        projection.center([-98,39])
            .scale(width);

        projection.center([-98,39])
            .scale(width);

        // Data Transformation
        games.forEach(
            d => {
                d.cumm_w = +d.w_l.split('-')[0];
                d.ogc_fid = +d.ogc_fid
            }
        );

        games.sort((a,b) => a.ogc_fid - b.ogc_fid);

        const gamesData = games.map(d => {
                return {
                    loc: d.gm_loc,
                    gm_nb: d.ogc_fid,
                    date: d.date
                }
            });

        console.log(gamesData);

        let ballparks = [];

        for (let i = 0; i < locations.features.length; i++) {
            ballparks.push( {
                    lat: locations.features[i].geometry.coordinates[1],
                    lon: locations.features[i].geometry.coordinates[0],
                    team: locations.features[i].properties.team_id
                }
            )
        }

        console.log(ballparks);

        const fenway_lon = ballparks.filter(d => { return d.team == 'BOS' })[0].lon
        const fenway_lat = ballparks.filter(d => { return d.team == 'BOS' })[0].lat

        const ballparksLocations = d3.map(ballparks, d => d.team);
        console.log(ballparksLocations);

        console.log(ballparksLocations.get("BOS"));

        const origin = [ballparksLocations.get("BOS").lon,ballparksLocations.get("BOS").lat]; // FENWAY COORD
        console.log(projection(origin)[0]);


        const pathData = d3.path();
        pathData.moveTo(origin[0],origin[1]); // fenway
        // for (let i = 0; i < data.length; i++) {
        //     let coord = projection([1,1])
        //     pathData.lineTo(coord[0],coord[1]);
        // }
        //
        // // TO DO: draw path on map
        // const trip = d3.select('.map')
        //     .append('path')
        //     .attr('d', pathData.toString())
        //     .classed('line')
        //     .attr('fill', 'none')
        //     .attr('stroke', 'black')
        //     .attr('stroke-width', 1);




    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Travel;

// creating projection
