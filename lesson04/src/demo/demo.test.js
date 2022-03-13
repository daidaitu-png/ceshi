import { runCallback, runCallback1 } from "./demo";

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
	const func = jest.fn(()=>{
    return '456'
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
  func.mockReturnValueOnce('Dell')
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
  func.mockReturnValueOnce('Dell').mockReturnValueOnce('Hello')
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});

test("测试 runCallback1", () => {
	const func = jest.fn(); // mock 函数, 捕获函数的调用
  func.mockReturnValue('Dell')
	runCallback1(func);
	runCallback1(func);
	runCallback1(func);

	expect(func.mock.calls.length).toBe(3);
	expect(func.mock.calls[0]).toEqual(["123"]);
	console.log(func.mock);
});