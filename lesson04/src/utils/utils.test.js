import Utils from "./utils";

let utils = null;
beforeAll(() => {
	utils = new Utils();
});

test("测试 a 方法", () => {
	expect(utils.a(1, 2)).toBe("123");
});
