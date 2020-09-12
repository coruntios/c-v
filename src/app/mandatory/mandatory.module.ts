import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent],
  exports: [
    LoginComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class MandatoryModule { }
