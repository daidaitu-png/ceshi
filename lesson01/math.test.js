// var result = add(3, 7);
// var expected = 10;

// if (result !== 10) {
// 	throw Error(`3+7应该等于${expected},结果却是${result}`);
// }

// var result = minus(3, 3);
// var expected = 0;

// if (result !== 0) {
// 	throw Error(`3-3应该等于${expected},结果却是${result}`);
// }

function expect(result) {
	return {
		toBe: (actual) => {
			if (result !== actual) {
				throw new Error(`预期值与实际值不相等`);
			}
		},
	};
}

expect(add(3, 3)).toBe(6);
expect(minus(6, 3)).toBe(3);
