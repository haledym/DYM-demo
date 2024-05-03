import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'heroes', component: MainpageComponent }
];
