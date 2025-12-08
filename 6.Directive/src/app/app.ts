import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Renklendir } from './renklendir';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Renklendir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('6.Directive');

  checkInputValidation(event:any){
    console.log(event);
  }

}
