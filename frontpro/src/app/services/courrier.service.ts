import { Injectable } from '@angular/core';
import {courrier} from '../models/courrier'
import {Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'jquery';



@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  
  private courriers: courrier[];

  courrierSubject = new Subject<courrier[]>();
  constructor(private httpClient: HttpClient) { 
    this.courriers = [];
  }
  emitcourrier(){
    this.courrierSubject.next(this.courriers.slice());
  }
  getCourriersFromServer():Observable<courrier[]> {
   

    return this.httpClient.get<courrier[]>("http://127.0.0.1:8000/api/Courriers");
  

  }
  addCourrier(courr : courrier):Observable<courrier>{
    console.log(courr);
    return this.httpClient
    .post<courrier>("http://127.0.0.1:8000/api/Courriers",courr)
  }
  getCourrierId(id:number):Observable<courrier>{

    return this.httpClient.get<courrier>("http://127.0.0.1:8000/api/Courriers/"+id);

  }
  editCourrier(courr : courrier){
    return this.httpClient.put<courrier>("http://127.0.0.1:8000/api/Courriers/"+courr.id,courr)
  }
  deleteCourrier(courr : courrier){
    let id = courr.id;
    return this.httpClient
    .delete<courrier>("http://127.0.0.1:8000/api/Courriers/"+id)
  }
  
}


