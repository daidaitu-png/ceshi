import timer from "./timer.js";

jest.useFakeTimers();

test("测试 timer", () => {
	const fn = jest.fn();
	timer(fn);
	jest.runAllTimers();
	expect(fn).toHaveBeenCalledTimes(2);
});

test("测试 timer", () => {
	const fn = jest.fn();
	timer(fn);
	jest.runOnlyPendingTimers();
	expect(fn).toHaveBeenCalledTimes(1);
});

test("测试 timer", () => {
	const fn = jest.fn();
	timer(fn);
	jest.advanceTimersByTime(3000);
	expect(fn).toHaveBeenCalledTimes(1);
	jest.advanceTimersByTime(3000);
	expect(fn).toHaveBeenCalledTimes(2);
});
