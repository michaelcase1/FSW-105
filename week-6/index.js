










function employees (Name, JobTitle, Salary){
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = "Full Time"
    this.printEmployeeForm = function (){
  console.log(`
    Name: ${this.Name}
    Jobtitle: ${this.JobTitle}
    Salary: ${this.Salary}
    Status: ${this.Status}
  `)
    }
  }
  
  let jack = new employees ("Jack", "car salesman","17/hr")
  jack.printEmployeeForm()
  
  let michael = new employees ("Michael", "dollarstore", "15/hr")
  michael.printEmployeeForm()
  
  let melanie = new employees ("melanie", "doctor", "35/hr")
  melanie.Status = "Contract"
  melanie.printEmployeeForm()
  