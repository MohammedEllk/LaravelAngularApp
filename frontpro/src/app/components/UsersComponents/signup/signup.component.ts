import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/shared/auth.service';
import { EntityService } from '../../../services/EntityServices/entity.service';
import { entity } from 'src/app/models/Entity/entity';
import { AppDataState, DataStateEnum } from 'src/app/state/courrier.state';

import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errors : any;
  entities:Observable<AppDataState<entity[]>>|null=null;
  readonly DataStateEnum = DataStateEnum; 

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    public entityservice : EntityService,
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
      entity_id : [],
    })
  }

  ngOnInit():void{
    this.getentities();
    console.log("testtest")
    console.log(this.getentities());
   }

  getentities(){
    this.entities = this.entityservice.getEntitiesFromServer()
    .pipe(
      map((data)=>({dataState :DataStateEnum.LOADED,data:data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage: err.errormessage}))
      );
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result)
      },
      error => {
        this.errors = error.error;
        console.log(this.errors);
      },
      () => {
        this.registerForm.reset()
        this.router.navigate(['login']);
      }
    )
  }

}