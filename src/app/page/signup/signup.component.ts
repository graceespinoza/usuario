import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
      
        },
        error => {
          console.error(error)
        });
        
  }

}

    
}
