import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SignupComponent } from './page/signup/signup.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { InmuebleComponent } from './page/inmueble/inmueble.component';
import { NavComponent } from './page/nav/nav.component';
const routes: Routes = [
  {
    path:'',
    component:UsuariosComponent,
  // children:[
  //   {
  //     path:'',
  //     redirectTo:'/usuarios',
  //     pathMatch:'full'
  //   },
  //   {
  //     path:'page',
  //     loadChildren:()=> import ('./page/page.module').then(m=>m.PageModule)    },
    
  //   ]
  },
  {
    path:'singup',
    component:SignupComponent,
  },
  {
    path:'reserva',
    component:ReservaComponent,
  },
  {
    path:'inmueble',
    component:InmuebleComponent,
  },
  {
    path:'nav',
    component:NavComponent,
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
