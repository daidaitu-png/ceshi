jest.mock("./demo.js");

import { fetchData } from "./demo";

const {getNumber} = jest.requireActual('./demo.js')

test("测试 fetchData", () => {
	return fetchData().then((data) => {
		expect(eval(data)).toEqual("123");
	});
});

test("测试 getNumber", () => {
	expect(getNumber()).toEqual(123);
});
