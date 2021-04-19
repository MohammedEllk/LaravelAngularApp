import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {courrier} from '../../models/courrier';
import {CourrierService} from '../../services/courrier.service';
import {Router} from '@angular/router';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-newcourrier',
  templateUrl: './newcourrier.component.html',
  styleUrls: ['./newcourrier.component.css']
})
export class NewcourrierComponent implements OnInit {
  CourrierForm : FormGroup;
  Priorities : any;

  constructor(private fb: FormBuilder,private CourrierService: CourrierService,private Router: Router) {
    this.CourrierForm  = this.fb.group(
      {
        id : ['',Validators.required],
        title : ['',Validators.required],
        content : ['',Validators.required],
        priority : ['',Validators.required],
        filecourriername : ['',Validators.required],
        created_at :['',Validators.required],
        updated_at : ['',Validators.required]
      }
    );
    this.Priorities = ["normal","confidentiel","urgent"];
   }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.CourrierForm  = this.fb.group({
      id : ['',Validators.required],
      title: ['',Validators.required],
      content: ['',Validators.required],
      priority : ['',Validators.required],
      filecourriername : ['',Validators.required],
      created_at :['',Validators.required],
      updated_at : ['',Validators.required]
    });

  }
  
  onSubmitForm(){
      console.log(this.CourrierForm.value);
      this.CourrierService.addCourrier(this.CourrierForm.value)
      .subscribe(
        data=>{
          alert('success!');
        }
      );
      this.Router.navigate(['/courriers']);
  }
 

}
