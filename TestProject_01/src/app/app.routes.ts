import { Routes, Route } from '@angular/router';
import { AboutComponent } from './about-component/about-component';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';
import { Layout } from './layout/layout';
import { Login } from './login/login';

export const homeRoute: Route = {
    path: "",
    component: HomeComponent
}
export const routes: Routes = [

    {
        path: "login",
        component: Login
    },
    {
        path: "",
        component: Layout,
        children: [
            homeRoute,
            {
                path: "home",
                component: HomeComponent
            },
            {
                path: "about",
                component: AboutComponent
            },
            {
                path: "about/:params",
                component: AboutComponent
            },
            {
                path: "contact",
                component: ContactComponent
            }
        ]
    }


];


