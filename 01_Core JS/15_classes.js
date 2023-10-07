class Employee {

    constructor(id, name) {

        if (!id || !name)
            throw new Error("Please provide id and name.");

        this.id = id;
        this.name = name;
    }

    setSalary(salary) {

        this.salary = salary;
    }

    getSalary() {

        return this.salary;
    }

    getId() {

        return this.id;
    }

    getName() {

        return this.name;
    }

}

class Manager extends Employee {

    constructor(id, name) {

        super(id, name);
    }

    setDepartment(name) {

        this.name = name;
    }

    getDepratment() {

        return this.name;
    }
}

const employee = new Employee(1, 'Rahul');
console.log(employee.getName());