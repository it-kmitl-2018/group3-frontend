import sum from './sum';

test('sum should plus two args', () => {
  expect(sum(3)(4)).toBe(7);
});
