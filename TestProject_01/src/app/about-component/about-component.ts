import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
  constructor(
    private activated:ActivatedRoute
  ){
    this.activated.params.subscribe((res)=> {
    console.log(res['params']);
  })
  }
  @Input() id:number=0;
  @Input() name:string='';

  

}
