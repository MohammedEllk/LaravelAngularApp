import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourrierComponent} from './components/courrier/courrier.component'
import {NewcourrierComponent} from './components/newcourrier/newcourrier.component'
import {EditcourrierComponent} from './components/editcourrier/editcourrier.component'

const routes: Routes = [
  { path: 'courriers', component : CourrierComponent},
  { path: 'newcourrier', component: NewcourrierComponent},
  { path: 'editcourrier/:id', component: EditcourrierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
