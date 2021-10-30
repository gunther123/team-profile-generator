const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //pass parameters to the Employee class to set name, id, and email
        super(name, id, email)
        
        this.role='Manager';
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    
}
module.exports = Manager;