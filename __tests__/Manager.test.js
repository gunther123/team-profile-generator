const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a new manager object', () =>{
    const manager = new Manager('Dave', 1, 'dave@gg.com')

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('steve@yahoo.com')
})