test("测试10与10相匹配", () => {
	expect(10).toBe(10);
});

test("测试对象内容相等", () => {
	expect({ one: 1 }).toEqual({ one: 1 });
});

test("测试undefined===null", () => {
	const a = null;
	expect(a).toBeNull();
});
