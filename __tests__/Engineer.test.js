const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates a new Engineer object', () =>{
    //Create new Engineer
    const engineer = new Engineer('Dave', 1, 'dave@gg.com', 'gunther123');

    //Check all inherited properties to confirm they are receiving the correct info from args
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('dave@gg.com');

    //Check engineer property specific to engineer object
    expect(engineer.github).toBe('gunther123')
});

test('confirm role is overwritten on engineer creation', () =>{
    const employee = new Employee('Dave', 1, 'dave@gg.com', 'gunther123');
    //Confirm role is being set to Employee from the parent still
    expect(employee.getRole()).toBe('Employee');

    //Create new Engineer
    const engineer = new Engineer('Steve', 2, 'steve@gg.com', 'gunther123');
    //Confirm that role gets overwritten to engineer
    expect(engineer.getRole()).toBe('Engineer');

});

test('confirm getOfficeNumber returns the github property', () => {
    const engineer = new Engineer('Steve', 1, 'steve@gg.com', 'gunther123');

    expect(engineer.getGithub()).toBe('gunther123')
})