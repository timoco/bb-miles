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
import Ballparks from './components/ballparks';
import Mapping from './components/map'
import Travel from './components/travel'
import Metrics from './components/metrics';
import Slider from './components/slider';


// calling factories and setting'em up
const map = Mapping();
const ballparks = Ballparks();
const travel = Travel();

const metrics = Metrics();
// const slider = Slider();


// TO DO: importing data using the Promise interface
Promise.all([
    fetchJson('./data/cb_2016_us_state_20m.json'),
    fetchJson('./data/mlb-ballparks.geojson'),
    fetchCsv('./data/red_sox_2013_schedule_result.csv', parse)
]).then(([data, locations, games]) => {

    // d3.select('.main-container')
    //     .datum(data)
    //     .each(map);

    d3.select('.main-container')
        .datum(locations)
        .each(ballparks);

    d3.select('.side-container')
        .datum(games)
        .each(metrics);

    // travel(games,locations)

});
