const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input',function(){
            output.textContent=salary.value;
        });


class EmployeePayrollData{
    get name(){
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Incorrect name";
    }
    get profile() {
        return this._profile;
    }
    set profile(profile) {
        this._profile = profile;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender != undefined) {
            let genderRegex = RegExp('^(male|female)$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else {
                throw "Gender incorrect";
            }
        }
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw "Salary should be non zero positive number";
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        if (notes == undefined || notes == "")
            notes = "NIL";
        this._notes = notes;
    }
    toString() {
        return " Name: " + this.name + " Salary: " + this.salary + " Gender: " + this.gender +
            " Start Date: " + this.startDate + " Department: " + this.department + " Profile Pic: " +
            this.profilePic + " Notes: " + this.notes;
    }
}
function save() {
    try {
        var name = document.querySelector('#name').value;
        var profilePic = document.querySelector('input[name=profile]:checked').value;
        var salary = document.querySelector('#salary').value;
        var gender = document.querySelector('input[name=gender]:checked').value;
        var year = document.querySelector('#year').value;
        var month = document.querySelector('#month').value;
        var day = document.querySelector('#day').value;
        var startDate = new Date(year, month, day);
        var department = [];
        var deptCheckboxes = document.querySelectorAll('input[name=department]:checked');
        var notes = document.querySelector('#notes').value;
        for (var i = 0; i < deptCheckboxes.length; i++) {
            department.push(deptCheckboxes[i].value);
        }
        var employee = new EmployeePayrollData();
        employee.name = name;
        employee.gender = gender;
        employee.notes = notes;
        employee.profilePic = profilePic;
        employee.department = department;
        employee.salary = salary;
        employee.startDate = startDate;

    alert("success " + employee.toString());

}catch(error)
{
    alert(error);
} 
}
    
