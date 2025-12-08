import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-about",
    template: "<h3>About Component</h3>",
    styleUrl: "./about.component.css",
    imports: [],
    providers:[],
    encapsulation:ViewEncapsulation.None

})
export class AboutComponent{

}