import { Injectable } from '@angular/core';
import {entity} from '../../models/Entity/entity'
import {Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'jquery';
import { User } from '../shared/auth.service';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  

  private entities: entity[];

  entitySubject = new Subject<entity[]>();
  constructor(private httpClient: HttpClient) { 
    this.entities = [];
  }
  emitEntity(){
    this.entitySubject.next(this.entities.slice());
  }
  getEntitiesFromServer():Observable<entity[]> {
      return this.httpClient.get<entity[]>("http://127.0.0.1:8000/api/Entities");
  }

  getEntitiesUsersFromServer():Observable<entity[]> {
    return this.httpClient.get<entity[]>("http://127.0.0.1:8000/api/EntitiesUsers");
  }

  getUsersFromServer():Observable<User[]> {
    return this.httpClient.get<User[]>("http://127.0.0.1:8000/api/Users");
  }
 



  

  addEntity(ent : entity):Observable<entity>{
      console.log(ent);
      const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
  

  return this.httpClient.post<entity>("http://127.0.0.1:8000/api/Entities/",ent,requestOptions);
  }
  getEntityId(id:number):Observable<entity>{
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

    return this.httpClient.get<entity>("http://127.0.0.1:8000/api/Entities/"+id,requestOptions);

  }
  editEntity(ent : entity){
    const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.httpClient.put<entity>("http://127.0.0.1:8000/api/Entities/"+ent.id,ent,requestOptions);
  }
  deleteEntity(ent : entity){
    const headerDict = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials' : 'true',
    }   
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    let id = ent.id;
    return this.httpClient
    .delete<entity>("http://127.0.0.1:8000/api/Courriers/"+id,requestOptions);
  }
  
}
