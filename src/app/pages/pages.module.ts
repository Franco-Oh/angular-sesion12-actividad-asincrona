import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ValidacionDirective } from '../directives/validacion.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [
    HomeComponent,
    ValidacionDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule
  ],
  exports: [
    HomeComponent,
    ValidacionDirective
  ]
})
export class PagesModule { }
