import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ValidacionDirective } from '../directives/validacion.directive';



@NgModule({
  declarations: [
    HomeComponent,
    ValidacionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ValidacionDirective
  ]
})
export class PagesModule { }
