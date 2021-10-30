const Employee = require('../lib/Employee')

test('creates a new employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
})