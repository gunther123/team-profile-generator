class Employee {
    //Create Employee Object
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    //Function to return the name of the employee
    getName() {
        return {
            name: this.name
        }
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }


}

module.exports = Employee;