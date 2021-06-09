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
  file?: null;
  filecourriername?: File;

  constructor(private fb: FormBuilder,private CourrierService: CourrierService,private Router: Router) {
    this.CourrierForm  = this.fb.group(
      {
        id : ['',Validators.required],
        title : ['',Validators.required],
        content : ['',Validators.required],
        priority : ['',Validators.required],
        file : ['',Validators.required],
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
      file : ['',Validators.required],
      created_at :['',Validators.required],
      updated_at : ['',Validators.required]
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
