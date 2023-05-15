import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private APIS = "http://localhost:8080/reserva";

  constructor(
    private httpClient:  HttpClient
  ) { }

  public obtener(): Observable<any>{
    return this.httpClient.get(this.APIS);
    }
   
    public save(add: any): Observable<any>{
      debugger
      return this.httpClient.post(this.APIS + "/add", add);
    }
  
    public update(id: any): Observable<any>{
      debugger
      return this.httpClient.put(this.APIS +"/id", id);
      
      }
    
    public delete(id: any): Observable<any>{
      debugger
      return this.httpClient.delete(this.APIS +"/" + encodeURIComponent(id));
      
      }
    
  
}
