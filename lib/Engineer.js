const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, github){
        //pass parameters to the Employee class to set name, id, and email
        super(name, id, email)
        
        this.role='Engineer';
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    
}
module.exports = Engineer;