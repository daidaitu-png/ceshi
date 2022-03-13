import Counter from "./Counter";

const counter = new Counter()

test('测试 Counter 中的 addOne 方法', () => {
  counter.addOne()
  expect(counter.number).toBe(1)
});

test('测试 Counter 中的 minusOne 方法', () => {
  counter.minusOne()
  expect(counter.number).toBe(0)
});