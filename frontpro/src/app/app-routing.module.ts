import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourrierComponent} from './components/CourriersComponents/courrier/courrier.component'
import {NewcourrierComponent} from './components/CourriersComponents/newcourrier/newcourrier.component'
import {EditcourrierComponent} from './components/CourriersComponents/editcourrier/editcourrier.component'
import { ViewPDFComponentComponent } from './components/CourriersComponents/view-pdfcomponent/view-pdfcomponent.component';
import { SignatureComponent } from './components/signature/signature.component';
import { SigninComponent } from './components/UsersComponents/signin/signin.component';
import { SignupComponent } from './components/UsersComponents/signup/signup.component';
import { UserProfileComponent } from './components/UsersComponents/user-profile/user-profile.component';
import {NewEntityComponent} from './components/EntityComponents/new-entity/new-entity.component'
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'courriers', component : CourrierComponent},
  { path: 'newcourrier', component: NewcourrierComponent},
  { path: 'editcourrier/:id', component: EditcourrierComponent},
  { path: 'viewpdf/:id', component: ViewPDFComponentComponent},
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'newentity', component: NewEntityComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
