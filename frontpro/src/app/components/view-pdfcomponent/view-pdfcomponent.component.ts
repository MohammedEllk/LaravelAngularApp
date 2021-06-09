import { Component, OnInit, SecurityContext } from '@angular/core';
import {CourrierService} from '../../services/courrier.service';
import { catchError, map, startWith } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'viewpdf-app',
  template: `
  <pdf-viewer *ngIf="pdfSrc" [src]="pdfSrc"
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `
})
export class ViewPDFComponentComponent implements OnInit {
  courrierid : number;
  public pdfSrc : any;
  public urloc = "http://127.0.0.1:8000/api/doc";
  constructor(private CourrierService: CourrierService,private httpClient: HttpClient,private Router: Router,route: ActivatedRoute,private sanitizer: DomSanitizer) {
   
    this.courrierid = route.snapshot.params.id;
    
  
   }
  
  ngOnInit(): void {
   this.fetchUrl();
  }
  /*getCourrierfromID(){
     this.pdfSrc = "http://127.0.0.1:8000/doc/"+this.courrierid;
  }*/
  fetchUrl(){
    this.CourrierService.getCourrierId(this.courrierid)
    .subscribe(
      courrier =>{
           this.pdfSrc = this.urloc+"/"+courrier.file;
           console.log(this.pdfSrc);
      }
    )
  }
}
  





