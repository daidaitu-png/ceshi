import axios from "axios";

export const runCallback = (cb) => {
	return cb();
};

export const runCallback1 = (cb) => {
	cb("123");
};

export const createObject = (classItem) => {
	new classItem();
};

export const getData = () => {
	return axios.get("/api").then((res) => res.data);
};
