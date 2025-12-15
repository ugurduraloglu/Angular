import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Employee {
  firstName: string = "";
  lastName: string = "";
  dateOfBirts: string = "";
}

@Component({
  selector: 'app-employe-create',
  imports: [FormsModule],
  templateUrl: './employe-create.html',
})
export class EmployeCreate {
  employee = new Employee();

  @Output() myEventt = new EventEmitter<Employee>();

  save() {
    console.log(this.employee);
    this.myEventt.emit(this.employee);
    this.employee = new Employee();

  }

}

