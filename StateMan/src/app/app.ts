import { Component, signal } from '@angular/core';
import { EmployeCreate, Employee } from './employe-create/employe-create';
import { Employes } from './employes/employes';

@Component({
  selector: 'app-root',
  imports: [EmployeCreate,Employes],
  template: `
    <app-employe-create (myEventt)="save($event)"></app-employe-create>
    <h1></h1>
    <app-employes [employees]="employees"></app-employes>
  `
})
export class App {
  employee = new Employee();
  employees : Employee[] = [];
save(event:any){
  this.employee=event;
  this.employees.push({...this.employee});
}

}
