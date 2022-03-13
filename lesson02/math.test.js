const math = require("./math");
const { add, minus } = math;

test("测试加法3+3", () => {
	expect(add(3, 3)).toBe(6);
});
test("测试减法6-3", () => {
	expect(minus(6, 3)).toBe(3);
});
