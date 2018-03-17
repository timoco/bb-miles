// importing d3.js
import * as d3 from 'd3';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importing stylesheets
import './style/main.css';
import './style/table.css';

// importing parsing functions from utils
import {parse, fetchData} from './utils.js';

// importing modules
import Metrics from './components/metrics';
import Mapping from './components/map'
import Slider from './components/slider';

// calling factories and setting'em up
const metrics = Metrics();
const map = Mapping();
const slider = Slider();

// TO DO: importing data using the Promise interface
Promise.all([
    // fetchJson('./data/____/.json'),
    // fetchCsv('./data/____/.json'),
]).then(([data]) => {

});
