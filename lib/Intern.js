const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name, id, email, school){
        //pass parameters to the Employee class to set name, id, and email
        super(name, id, email)
        
        this.role='Intern';
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    
}
module.exports = Intern;