function expect(result) {
	return {
		toBe: (actual) => {
			if (result !== actual) {
				throw new Error(
					`预期值与实际值不相等，预期${actual},结果却是${result}`
				);
			}
		},
	};
}

function test(desc, fn) {
	try {
		fn();
		console.log(`${desc} 通过测试`);
	} catch (error) {
		console.log(`${desc} 没有通过测试 ${error}`);
	}
}

test("测试加法3+3", () => {
	expect(add(3, 3)).toBe(6);
});
test("测试减法6-3", () => {
	expect(minus(6, 3)).toBe(3);
});
