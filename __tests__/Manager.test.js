const Employee = require('../lib/Employee');
const engineer = require('../lib/engineer');

test('creates a new Engineer object', () =>{
    //Create new Engineer
    const engineer = new Engineer('Dave', 1, 'dave@gg.com', 1);

    //Check all inherited properties to confirm they are receiving the correct info from args
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('dave@gg.com');
});

test('confirm role is overwritten on engineer creation', () =>{
    const employee = new Employee('Dave', 1, 'dave@gg.com', 1);
    //Confirm role is being set to Employee from the parent still
    expect(employee.getRole()).toBe('Employee');

    //Create new Engineer
    const engineer = new Engineer('Steve', 2, 'steve@gg.com', 1);
    //Confirm that role gets overwritten to engineer
    expect(engineer.getRole()).toBe('engineer');

});

test('confirm office number property is being created', () =>{
    const engineer = new Engineer('Steve', 1, 'steve@gg.com', 1);
    //check that assigned arg for officeNumber assigns correctly
    expect(engineer.officeNumber).toEqual(1);

    const engineerTwo = new Engineer('bob', 4, 'bob@gg.com',2);

    expect(engineerTwo.officeNumber).toEqual(2);
});

test('confirm getOfficeNumber returns the officeNumber property', () => {
    const engineer = new Engineer('Steve', 1, 'steve@gg.com', 5544);

    expect(engineer.getOfficeNumber()).toEqual(5544)
})