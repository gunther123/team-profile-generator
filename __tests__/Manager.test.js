const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a new manager object', () =>{
    //Create new manager
    const manager = new Manager('Dave', 1, 'dave@gg.com', 1);

    //Check all inherited properties to confirm they are receiving the correct info from args
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('dave@gg.com');
});

test('confirm role is overwritten on Manager creation', () =>{
    const employee = new Employee('Dave', 1, 'dave@gg.com', 1);
    //Confirm role is being set to Employee from the parent still
    expect(employee.getRole()).toBe('Employee');

    //Create new manager
    const manager = new Manager('Steve', 2, 'steve@gg.com', 1);
    //Confirm that role gets overwritten to Manager
    expect(manager.getRole()).toBe('Manager');

});

test('confirm office number property is being created', () =>{
    const manager = new Manager('Steve', 1, 'steve@gg.com', 1);
    //check that assigned arg for officeNumber assigns correctly
    expect(manager.officeNumber).toEqual(1);

    const managerTwo = new Manager('bob', 4, 'bob@gg.com',2);

    expect(managerTwo.officeNumber).toEqual(2);
});

test('confirm getOfficeNumber returns the officeNumber property', () => {
    const manager = new Manager('Steve', 1, 'steve@gg.com', 5544);

    expect(manager.getOfficeNumber()).toEqual(5544)
})