import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {courrier} from '../../../models/courrier';
import {CourrierService} from '../../../services/CourrierService/courrier.service';
import { AppDataState, DataStateEnum } from 'src/app/state/courrier.state';
import { EntityService} from 'src/app/services/EntityServices/entity.service';
import {Router} from '@angular/router';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { entity } from 'src/app/models/Entity/entity';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, tap } from 'rxjs/operators';
import { User } from 'src/app/services/shared/auth.service';
import { data } from 'jquery';


@Component({
  selector: 'app-newcourrier',
  templateUrl: './newcourrier.component.html',
  styleUrls: ['./newcourrier.component.css']
})
export class NewcourrierComponent implements OnInit {
  CourrierForm : FormGroup;
  Priorities : any;
  entities:Observable<AppDataState<entity[]>>|null=null;
  users? : Observable<AppDataState<User[]>>|null=null;
  readonly DataStateEnum = DataStateEnum; 
  file?: null;
  filecourriername?: File;
  userentity : any;

  constructor(private fb: FormBuilder,private CourrierService: CourrierService,private Router: Router,private entityservice : EntityService) {
    this.CourrierForm  = this.fb.group(
      {
        id : ['',Validators.required],
        title : ['',Validators.required],
        content : ['',Validators.required],
        priority : ['',Validators.required],
        file : ['',Validators.required],
        created_at :['',Validators.required],
        updated_at : ['',Validators.required],
        users : [[''],Validators.required]
      }
    );
    this.Priorities = ["normal","confidentiel","urgent"];
   }

  ngOnInit(): void {
    this.initForm();
    this.getentitiesUsers();
    this.getUsers();
    this.getUE();
  }

  getUsers(){
    this.users = this.entityservice.getUsersFromServer()
    .pipe(
      map((data)=>({dataState :DataStateEnum.LOADED,data:data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage: err.errormessage}))
      );
  }

  getUE(){
    this.entityservice.getEntitiesUsersFromServer()
    .subscribe(
      data => {
        this.userentity = data;
      }
    )
  }

  getentitiesUsers(){
    this.entities = this.entityservice.getEntitiesUsersFromServer()
    .pipe(
      map((data)=>({dataState :DataStateEnum.LOADED,data:data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage: err.errormessage}))
      );
  }

  initForm(){
    this.CourrierForm  = this.fb.group({
      id : ['',Validators.required],
      title: ['',Validators.required],
      content: ['',Validators.required],
      priority : ['',Validators.required],
      file : ['',Validators.required],
      created_at :['',Validators.required],
      updated_at : ['',Validators.required],
      users : [[''],Validators.required]
    });

    

  }

  onFileChange(event:any) {
    const up = event.target.files[0];

    this.CourrierForm.patchValue({
      file: up
    });
    this.CourrierForm.get('file')?.updateValueAndValidity()
    console.log(this.CourrierForm.get('file'));
  }

  
  onSubmitForm(){
      const formData:any = new FormData();
      console.log(this.CourrierForm.get('file')?.value);
      formData.append('title', this.CourrierForm.get('title')?.value);
      formData.append('content', this.CourrierForm.get('content')?.value);
      formData.append('priority', this.CourrierForm.get('priority')?.value);
      formData.append('file', this.CourrierForm.get('file')?.value);
      formData.append('users', this.CourrierForm.get('users')?.value);
      for (var value of formData.values()) {
        console.log(value);
     }
      
      this.CourrierService.addCourrier(formData)
      .subscribe(
        data=>{
          alert('success!');
        }
      );
      this.Router.navigate(['/courriers']);
  }
 

}
