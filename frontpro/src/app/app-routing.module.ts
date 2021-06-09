import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourrierComponent} from './components/courrier/courrier.component'
import {NewcourrierComponent} from './components/newcourrier/newcourrier.component'
import {EditcourrierComponent} from './components/editcourrier/editcourrier.component'
import { ViewPDFComponentComponent } from './components/view-pdfcomponent/view-pdfcomponent.component';
import { SignatureComponent } from './components/signature/signature.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'courriers', component : CourrierComponent},
  { path: 'newcourrier', component: NewcourrierComponent},
  { path: 'editcourrier/:id', component: EditcourrierComponent,canActivate: [AuthGuard]},
  { path: 'viewpdf/:id', component: ViewPDFComponentComponent},
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent},
  { path: 'user-profile', component: UserProfileComponent,canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
