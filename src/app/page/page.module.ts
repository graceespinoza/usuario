import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PageRoutingModule } from './page-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { InmuebleModule } from './inmueble/inmueble.module';
import { ReservaComponent } from './reserva/reserva.component';

@NgModule({
  declarations: [
    ReservaComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule, 
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    InmuebleModule,
    
  ]
})
export class PageModule { }
