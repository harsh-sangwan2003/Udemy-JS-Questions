var Employee = function (id,name) {

    if (!id || !name)
        throw new Error("Please provide id and name.");

    this.id = id;
    this.name = name;

}

Employee.prototype.setSalary = function (salary) {

    this.salary = salary;
}

Employee.prototype.getSalary = function () {

    return this.salary;
}

Employee.prototype.getId = function () {

    return this.id;
}

Employee.prototype.getName = function () {

    return this.name;
}

var Manager = function (params) {

    Employee.apply(this, arguments);
}

Manager.prototype.setDepartment = function (name) {

    this.name = name;
}

Manager.prototype.getDepratment = function () {

    return this.name;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Employee;

const employee = new Employee(1, 'Rahul');
console.log(employee.getName());