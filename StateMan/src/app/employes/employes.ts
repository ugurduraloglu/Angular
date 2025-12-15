import { Component, Input } from '@angular/core';
import { Employee } from '../employe-create/employe-create';

@Component({
  selector: 'app-employes',
  imports: [],
  templateUrl: './employes.html',
})
export class Employes {
  @Input() employees : Employee[] = [];

}
