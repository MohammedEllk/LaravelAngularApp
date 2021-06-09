import { Component,Input, OnInit } from '@angular/core';
import {courriers} from '../../models/courriers';
import {courrier} from '../../models/courrier';
import {Observable, of, Subscription} from 'rxjs';
import {CourrierService} from '../../services/courrier.service';
import { catchError, map, startWith } from 'rxjs/operators';
import {Router} from '@angular/router';
import { AppDataState, DataStateEnum } from 'src/app/state/courrier.state';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  Courriers$:Observable<AppDataState<courrier[]>>|null=null;
  readonly DataStateEnum = DataStateEnum; 
  courrierSubscription:Subscription|null=null; 
  

  Courrier = {
    id : 0,
    title : "",
    content : "",
    priority : "",
    file : null,
    created_at : new Date,
    updated_at : new Date,
    
  }
  isSelected : boolean;

  

  constructor(private CourrierService: CourrierService,private Router: Router) {
      this.isSelected = false;
      
      
   }


  ngOnInit(): void {
    this.OngetAllCourriersFromServer();
  }
  OngetAllCourriersFromServer(){
    this.Courriers$ = this.CourrierService.getCourriersFromServer()
    .pipe(
      map((data)=>({dataState :DataStateEnum.LOADED,data:data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage: err.errormessage}))
      );
        
}


onDelete(courrier : courrier){
       this.CourrierService.deleteCourrier(courrier).subscribe(
         data => alert('start')
       )
}

onEdit(courrier : courrier){
  this.Router.navigateByUrl("/editcourrier/"+courrier.id);
}
onVisualise(courrier : courrier){
  this.Router.navigateByUrl("/viewpdf/"+courrier.id);
}
    
  

  ngOnDestroy(){
    this.courrierSubscription?.unsubscribe();
  }

  onSelect(courrier:courrier){
    this.isSelected = true; 
    let id  = courrier.id;
    this.Courrier = courrier;
    
  }
  

}
