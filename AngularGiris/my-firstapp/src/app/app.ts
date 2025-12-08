import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.componet';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,AboutComponent,RouterOutlet,ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-firstapp');
  helloWorld:string = "Hello World. Hi Angular !";
  className:string="red";

  clickMe(){
    alert("Beni Tıkladın...");
  }

  changeHelloWorldVariable(event:any){
    this.className = event.target.value;
  }

}

