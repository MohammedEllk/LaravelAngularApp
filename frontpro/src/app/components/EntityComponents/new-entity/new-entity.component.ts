import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EntityService} from '../../../services/EntityServices/entity.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-entity',
  templateUrl: './new-entity.component.html',
  styleUrls: ['./new-entity.component.css']
})
export class NewEntityComponent implements OnInit {
  EntityForm : FormGroup;
  constructor(private fb: FormBuilder,private EntityService: EntityService,private Router: Router) {
    this.EntityForm  = this.fb.group(
      {
        id : ['',Validators.required],
        title : ['',Validators.required],
        created_at :['',Validators.required],
        updated_at : ['',Validators.required]
      }
    );
   }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.EntityForm  = this.fb.group({
      id : ['',Validators.required],
      title: ['',Validators.required],
      created_at :['',Validators.required],
      updated_at : ['',Validators.required]
    });

    

  }
  onSubmitForm(){
    const formData:any = new FormData();
    formData.append('title', this.EntityForm?.get('title')?.value);
    this.EntityService.addEntity(formData)
      .subscribe(
        data=>{
          alert('success!');
        }
      );

  }

}
