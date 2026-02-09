import { Routes } from "@angular/router";
import { HomeComponent } from "./comps/home/home.component";
import { ProfileComponent } from "./comps/profile/profile.component";
import { RegisterComponent } from "./comps/register/register.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'register', component: RegisterComponent}
];