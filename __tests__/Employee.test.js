const Employee = require('../lib/Employee')

//Tests Employee Object creation
test('creates a new employee object', () => {
    const employee = new Employee('Dave', 1, 'steve@yahoo.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('steve@yahoo.com')
});

//Test Employee getName function
test("get employee's name from the Employee object", () => {
    const employee = new Employee('Dave', 1, 'steve@yahoo.com');

    expect(employee.getName()).toHaveProperty('name');
});

//Test Employee getID function
test("get employee ID from the Employee object", () => {
    const employee = new Employee('Dave', 1, 'steve@yahoo.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

//Test Employee getEmail function
test("get employee email from the Employee object", () => {
    const employee = new Employee('Dave', 1, 'steve@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//Test Employee getRole function
test("get employee role from the Employee object", () => {
    const employee = new Employee('Dave', 1, 'steve@yahoo.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});