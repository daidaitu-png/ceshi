import axios from "axios";

export const fetchData = (fn) => {
	axios.get(`http://www.dell-lee.com/react/api/demo.json`).then((response) => {
		fn(response.data);
	});
};

export const fetchData1 = (fn) => {
	return axios.get(`http://www.dell-lee.com/react/api/demo.json`);
};



export const fetchData2 = (fn) => {
	return axios.get(`http://www.dell-lee.com/react/api/demo-1.json`);
};

export const fetchData3 = (fn) => {
	return axios.get(`http://www.dell-lee.com/react/api/demo.json`);
};

export const fetchData4 = (fn) => {
	return axios.get(`http://www.dell-lee.com/react/api/demo-1.json`);
};