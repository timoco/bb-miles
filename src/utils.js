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
