window.addEventListener('DOMContentLoaded' ,(event) => {
    const name=document.querySelector('#name');
    const nameOutput=document.querySelector('.name-error');
    name.addEventListener('input' , function() {
    if(name.value.length==0){
        nameOutput.textContent="";
        return;
    }
    try{
        new EmployeePayrollData().name=name.value;
        nameOutput.textContent="";
    }catch(e){
        nameOutput.textContent=e;
    }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
         output.textContent=salary.value;
    });
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
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate != undefined) {
            if (startDate <= new Date()) {
                const options = { year: "numeric", month: "short", day: "numeric" };
                const employeeDate = startDate.toLocaleDateString("en-GB", options);
                this._startDate = employeeDate;
            }
            else throw "Select valid date!";
        }
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
    createAndUpdateStorage(employee);

}catch(error)
{
    alert(error);
} 
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList!= undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList=[employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const resetForm=() =>{
    setValue('#name' , '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','january');
    setValue('#year','2020');
}

const unsetSelectedValues=(propertyValue)=>{
    let allItems= document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked=false;
    })
}

const setTextValue = (id,value)=>{
    const element = document.querySelector(id);
    element.textContent=value;
}

const setValue = (id,value)=>{
    const element = document.querySelector(id);
    element.value=value;
}
    
