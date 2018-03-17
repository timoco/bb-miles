import {csv, json} from 'd3';

export const parse = d => {
	return d
};

export const fetchJson = (url) => {
	return new Promise((resolve, reject) => {
		json(url, (err, data) => {
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		})
	});
};

export const fetchCsv = (url, parse) => {
	return new Promise((resolve, reject) => {
		csv(url, parse, (err, data) => {
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		})
	});
};

export const calcDist = function(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	return dist
}
