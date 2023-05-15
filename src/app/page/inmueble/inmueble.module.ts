import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { InmuebleComponent } from './inmueble.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InmuebleComponent,
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class InmuebleModule { }
