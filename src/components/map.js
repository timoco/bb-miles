// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {parse} from '../utils'

// importing stylesheets
import '../style/main.css';

const projection = d3.geoMercator();
const path = d3.geoPath().projection(projection);
projection.center([-71,42])
    .scale(350000);

svg.append("g")
  .attr("class", "map-tile")
  .selectAll("path")               //make empty selection
  .data(dataIn.features)           //bind to the features array in the map data
  .enter()
  .append("path")                  //add the paths to the DOM
  .attr("d", path)                 //actually draw them
  .attr("class", "feature")
  .attr("id", function(d) { return d.properties.STUSPS })
  .attr("fill","#FFFFFF")
  .attr("stroke","#FFFFFF")
  .attr("stroke-width",1)
  .on("click", null);


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

        // Data Transformation

    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Mapping;

// creating projection
