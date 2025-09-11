const { somar } = require('./app');

test('somar 2 + 3 deve retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});
