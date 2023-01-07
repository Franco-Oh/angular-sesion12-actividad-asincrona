import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from './mensaje/mensaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MensajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MensajeComponent
  ]
})
export class ComponentesModule { }
