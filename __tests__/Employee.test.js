const Employee = require('../lib/Employee')

//Tests employee Object creation
test('creates a new employee object', () => {
    const employee = new Employee('Dave', 1, 'steve@yahoo.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('steve@yahoo.com')
})