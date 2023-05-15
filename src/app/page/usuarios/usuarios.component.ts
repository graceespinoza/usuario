import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Usuarios } from 'src/app/Model/Usuarios';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  pokemonSelect?:any;
  userForm!: FormGroup;

  poke: any;

  constructor(
    public fb: FormBuilder,
    public userSer: UsuarioServiceService,
    private router: Router,
  ) {
  
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required]
    });;

    this.userSer.obtener().subscribe(resp => {
      this.poke = resp;
      console.log(resp);
    },
      error => { 
        console.error(error);
       }

    )
  }

  guardar(event: Event): void {
    event.preventDefault();
   
    if(this.userForm.valid){
      const value = this.userForm.value;
        this.userSer.save(this.userForm.value).subscribe(resp => {

          this.userForm.reset();
          this.poke.push(resp);
        
          this.router.navigate(['/page/singup']);
        },
        error => {
          console.error(error)
        });
        
  }
}
  
  update(usuar:any){
   this.userForm.patchValue({
      codigo:usuar.codigo,
      nombre:usuar.nombre,
      cedula:usuar.cedula,
      celular:usuar.celular,
      direccion:usuar.direccion,
      email:usuar.email,
      contrasena:usuar.contrasena,
  })
   this.pokemonSelect =usuar;
   console.log("pokemonSelect" , this.pokemonSelect);
  }
  delete(usuar: any) {
    this.userSer.delete(usuar.codigo).subscribe(resp => {
      console.log(resp)
      if (resp === true) {
        this.poke.pop(usuar)
      }
    })
  }
}
