// importing d3.js
import * as d3 from 'd3';

// importing gridData
import {gridData} from '../utils'

// importing stylesheets
import '../style/table.css';

// defining Factory function
function Metrics(_) {

    // TO DO: create getter-setter variables in factory scope

    function exports(data) {
        // selecting root element ==> table container, div where function is called in index.js
        const root = this;

        // declaring setup/layout variables
        const width = root.clientWidth;
        const height = root.clientHeight;
        const margin = {t:0, r:0, b:0, l:0};

        // data transformation

        // TO DO: draw map


    }

    // TO DO: create getter-setter pattern for customization

    // returning of module
    return exports;
}

// exporting factory function as default
export default Metrics;
