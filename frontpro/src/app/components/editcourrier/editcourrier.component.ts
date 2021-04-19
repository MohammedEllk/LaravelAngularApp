import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {courrier} from '../../models/courrier';
import {CourrierService} from '../../services/courrier.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';  
@Component({
  selector: 'app-editcourrier',
  templateUrl: './editcourrier.component.html',
  styleUrls: ['./editcourrier.component.css']
})
export class EditcourrierComponent implements OnInit {
  EditCourrierForm : FormGroup;
  Priorities : any;
  courrierid : number;
  constructor(private fb: FormBuilder,private CourrierService: CourrierService,private Router: Router,route: ActivatedRoute) { 
    this.courrierid = route.snapshot.params.id;
    this.Priorities = ["normal","confidentiel","urgent"];
    this.EditCourrierForm  = this.fb.group({
      id : ["",Validators.required],
      title  :["",Validators.required],
      content  :["",Validators.required],
      priority : ["",Validators.required],
      filecourriername:["",Validators.required],
      created_at: ["",Validators.required],
      updated_at : ["",Validators.required]
    })
    
  }

  ngOnInit(): void {
    this.initForm();
  }

  

  initForm(){
    this.CourrierService.getCourrierId(this.courrierid)
    .subscribe(
      courrier =>{
        this.EditCourrierForm  = this.fb.group({
          id : [courrier.id,Validators.required],
          title  :[courrier.title,Validators.required],
          content  :[courrier.content,Validators.required],
          priority : [courrier.priority,Validators.required],
          filecourriername:[courrier.filecourriername,Validators.required],
          created_at: [courrier.created_at,Validators.required],
          updated_at : [courrier.updated_at,Validators.required]
        })
      }
    )

  }
  
  onEditForm(){
    console.log(this.EditCourrierForm.value);
    this.CourrierService.editCourrier(this.EditCourrierForm.value)
    .subscribe(
      data=>{
        alert('success!');
      }
    );
    this.Router.navigate(['/courriers']);
}

}
