const { test } = require('@jest/globals');
const Employee = require(`../lib/Employee`);

jest.mock(`../lib/Employee.js`);

test(`create an employee object`, () => {
  const employee = new Employee(`Charles`);

  expect(employee.name).toBe(`Charles`);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining(`@`));
});
