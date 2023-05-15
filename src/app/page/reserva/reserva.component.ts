import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/Model/Inmueble';
import { Reserva } from 'src/app/Model/Reserva';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { ReservaService } from 'src/app/Service/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reserForm!: FormGroup;
  inmub:Inmueble[]=[];
  reserva:any;
  pokemonSelect?:any;

  constructor(
    public fb: FormBuilder,
    public reseSer: ReservaService,
    private router: Router,
    public inmSer: InmuebleService,
   
  ) {}

    ngOnInit(): void {
      this.reserForm = this.fb.group({
        id_reserva: ['', Validators.required],
        tipo: ['', Validators.required],
        estado: ['', Validators.required],
        hora: ['', Validators.required],
        fecha: ['', Validators.required],
        inmueble: ['', Validators.required],
        usuario: ['', Validators.required],
      });;
      this.reseSer.obtener().subscribe(resp => {
        this.reserva = resp;
        console.log(resp);
      },
        error => { 
          console.error(error);
         }
  
      )
    }
    cargarCategorias() {
      this.inmSer.obtener().subscribe(resp => {
        this.inmub = resp;
      }, error => {
        console.error(error)
      })
    }

    guardar(event: Event): void {
      event.preventDefault();
      const pokemon : Reserva = this.reserForm.value;
      this.reseSer.save(this.reserForm.value).subscribe(resp => {
      this.reserForm.reset();
      this.reserva=this.reserva.filter((pokemon: { id_reserva: any; }) => {
        return resp.id_reserva !== pokemon.id_reserva;
      });
      this.reserva.push(resp);
      },
        error => {
          console.error(error)
        }
      )
    }

    
  update(rese:any){
    this.reserForm.patchValue({

      id_reserva: rese.id_reserva,
      tipo: rese.tipo,
      estado: rese.estado,
      hora: rese.hora,
      fecha: rese.fecha,
      inmueble: rese.inmueble,
      usuario: rese.usuario,
    

    })
    this.pokemonSelect =rese;
   console.log("pokemonSelect" , this.pokemonSelect);
  
   }
   delete(rese: any) {
     this.reseSer.delete(rese.id_reserva).subscribe(resp => {
       console.log(resp)
       if (resp === true) {
         this.reserva.pop(rese)
       }
     })
   }
}
