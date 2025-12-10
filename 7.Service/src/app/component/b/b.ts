import { Component, inject } from '@angular/core';
import { Example } from '../../services/example';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b',
  imports: [FormsModule],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {
  // constructor(
  //   public ex:Example
  // ){}
  ex = inject(Example);
}
