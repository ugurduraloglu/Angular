import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[renklendir]'
})
export class Renklendir {

  constructor() { }

  @HostListener("mauseenter") method1(){
    console.log("Mause elementin üzerine geldi");
  }

}
