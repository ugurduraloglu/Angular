import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]'
})
export class Renklendir {

  @Input("renklendir") color:string|undefined;
  @Input("test") testYakala:string|undefined;

  constructor(private el : ElementRef) { }

  @HostListener("mouseenter") method(){
    console.log(this.color);
    this.el.nativeElement.style="color:red";
    console.log("Mouse Element üzerine geldi.");
    this.el.nativeElement.innerHTML=this.testYakala

  }

  @HostListener("mouseleave") method2(){
    console.log(this.testYakala);
    this.el.nativeElement.style="color:black";
    console.log("Mouse Element üzerinden ayrıldı.");
    this.el.nativeElement.innerHTML="Directive";
  }
}
