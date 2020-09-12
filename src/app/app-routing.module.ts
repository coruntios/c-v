import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './mandatory/login/login.component';

const routes: Routes = [{
  path: '', component: AppComponent,
  children: [

    { path: 'todo/login', component: LoginComponent },
    // { path: 'main', component: MainComponent, canActivate: [TokenGuard] },
    { path: 'main', component: MainComponent},
    { path: '', redirectTo: "/main", pathMatch: 'full' },
    { path: 'todo', redirectTo: "/todo/login", pathMatch: 'full' },
    { path: '**', redirectTo: '/main', pathMatch: 'full' }
    
  ]
}];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
