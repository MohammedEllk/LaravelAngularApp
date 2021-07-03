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
    const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }
    console.log(headerDict);
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.httpClient.get<courrier[]>("http://127.0.0.1:8000/api/Courriers",requestOptions);
  }


  

  addCourrier(courr : courrier):Observable<courrier>{
      console.log(courr);
      const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
  

  return this.httpClient.post<courrier>("http://127.0.0.1:8000/api/Courriers",courr,requestOptions);
  }
  getCourrierId(id:number):Observable<courrier>{
    const headerDict = {
      'Content-Type' : '*',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.httpClient.get<courrier>("http://127.0.0.1:8000/api/Courriers/"+id,requestOptions);

  }
  editCourrier(courr : courrier){
    const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.httpClient.put<courrier>("http://127.0.0.1:8000/api/Courriers/"+courr.id,courr,requestOptions);
  }
  deleteCourrier(courr : courrier){
    const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let id = courr.id;
    return this.httpClient
    .delete<courrier>("http://127.0.0.1:8000/api/Courriers/"+id,requestOptions);
  }
  
}


