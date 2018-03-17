// importing d3.js
import * as d3 from 'd3';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importing stylesheets
import './style/main.css';
import './style/map.css';

// importing parsing functions from utils
import {parse, fetchJson, fetchCsv} from './utils.js';

// importing modules
import Metrics from './components/metrics';
import Mapping from './components/map'
import Slider from './components/slider';
import Ballparks from './components/ballparks';

// calling factories and setting'em up
const metrics = Metrics();
const map = Mapping();
const slider = Slider();
const ballparks = Ballparks();

// TO DO: importing data using the Promise interface
Promise.all([
    fetchJson('./data/cb_2016_us_state_20m.json'),
    fetchJson('./data/mlb-ballparks.geojson'),
    fetchCsv('./data/distance-from-fenway.csv', parse)
]).then(([data, locations, trips]) => {

    d3.select('.main-container')
        .datum(data)
        .each(map);

    d3.select('.main-container')
        .datum(locations)
        .each(ballparks);

    // d3.select('.main-container')
    //     .datum(locations)
    //     .each(ballparks);

});
