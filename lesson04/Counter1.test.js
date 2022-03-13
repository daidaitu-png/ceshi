import Counter from "./Counter";

let counter = null;
// beforeAll(() => {
//   console.log('beforeAll');
// 	counter = new Counter();
// });

beforeEach(() => {
	console.log("beforeEach");
	counter = new Counter();
});

afterAll(() => {
	console.log("afterAll");
});

afterEach(() => {
	console.log("afterEach");
});

describe("测试 Counter 中的 add 方法", () => {
  beforeEach(() => {
    console.log("beforeEach add");
  });


	test("测试 Counter 中的 addOne 方法", () => {
		console.log("测试 Counter 中的 addOne 方法");
		counter.addOne();
		expect(counter.number).toBe(1);
	});
	test("测试 Counter 中的 addTwo 方法", () => {
		console.log("测试 Counter 中的 addTwo 方法");
		counter.addTwo();
		expect(counter.number).toBe(2);
	});
});

describe("测试 Counter 中的 minus 方法", () => {
	test("测试 Counter 中的 minusOne 方法", () => {
		console.log("测试 Counter 中的 minusOne 方法");
		counter.minusOne();
		expect(counter.number).toBe(-1);
	});
	test("测试 Counter 中的 minusTwo 方法", () => {
		console.log("测试 Counter 中的 minusTwo 方法");
		counter.minusTwo();
		expect(counter.number).toBe(-2);
	});
});
