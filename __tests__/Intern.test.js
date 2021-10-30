const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

test('creates a new intern object', () =>{
    //Create new intern
    const intern = new Intern('Dave', 1, 'dave@gg.com', 'Greenway HighSchool');

    //Check all inherited properties to confirm they are receiving the correct info from args
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('dave@gg.com');

    //Check intern property specific to intern object
    expect(intern.school).toBe('Greenway HighSchool')
});

test('confirm role is overwritten on intern creation', () =>{
    const employee = new Employee('Dave', 1, 'dave@gg.com', 'Greenway HighSchool');
    //Confirm role is being set to Employee from the parent still
    expect(employee.getRole()).toBe('Employee');

    //Create new intern
    const intern = new Intern('Steve', 2, 'steve@gg.com', 'Greenway HighSchool');
    //Confirm that role gets overwritten to intern
    expect(intern.getRole()).toBe('Intern');

});

test('confirm getOfficeNumber returns the School property', () => {
    const intern = new Intern('Steve', 1, 'steve@gg.com', 'Greenway HighSchool');

    expect(intern.getSchool()).toBe('Greenway HighSchool')
})