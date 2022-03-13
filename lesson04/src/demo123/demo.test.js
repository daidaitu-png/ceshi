import { runCallback, runCallback1, createObject, getData } from "./demo";
import axios from "axios";

jest.mock("axios");

test("测试 runCallback", () => {
	const func = () => {
		return "hello";
	};
	expect(runCallback(func)).toBe("hello");
});

test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	runCallback1(func);
	expect(func).toBeCalled();
});

test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test("测试 runCallback1", () => {
	const func = jest.fn(() => {
		return "456";
	}); // mock 函数, 捕获函数的调用
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});
test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	func.mockReturnValueOnce("Dell");
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	func.mockReturnValueOnce("Dell").mockReturnValueOnce("Hello");
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	func.mockReturnValue("Dell");
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test.only("测试 createObject", () => {
	const func = jest.fn();
	createObject(func);
	console.log(func.mock);
});

test.only("测试 getData", async () => {
	axios.get.mockResolvedValue({ data: "hi" });
	await getData().then((data) => {
		expect(data).toBe("hi");
	});
});

test.only("测试 getData", async () => {
	axios.get.mockResolvedValueOnce({ data: "hi" });
	axios.get.mockResolvedValueOnce({ data: "hello" });

	await getData().then((data) => {
		expect(data).toBe("hi");
	});

	await getData().then((data) => {
		expect(data).toBe("hello");
	});
});

test.only("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	func.mockReturnValue("Dell");
	func.mockImplementation(() => {
		console.log("123123");
		return "john";
	});
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test.only("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	// func.mockReturnValue("Dell");
	func.mockImplementationOnce(() => {
		console.log("123123");
		return "john";
	});

	func.mockImplementationOnce(() => {
		console.log("123123");
		return "lee";
	});
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	expect(func.mock.results[0].value).toBe("john");
	expect(func.mock.results[1].value).toBe("lee");
	console.log(func.mock);
});

test.only("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
	// func.mockReturnValue("Dell");
	func.mockImplementation(() => {
		console.log("123123");
		return this;
	});
	// func.mockReturnThis();
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	expect(func.mock.results[0].value).toBeUndefined();
	// expect(func.mock.results[1].value).toBe("lee");
	console.log(func.mock);
});
