const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email)
        this.office = office;
        this.role = 'Manager'
    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    };
}

module.exports = Manager;