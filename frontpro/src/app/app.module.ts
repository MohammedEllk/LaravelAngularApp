import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenubComponent } from './components/menub/menub.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CourrierComponent } from './components/CourriersComponents/courrier/courrier.component';
import { CourrierlistComponent } from './components/CourriersComponents/courrierlist/courrierlist.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import { NewcourrierComponent } from './components/CourriersComponents/newcourrier/newcourrier.component';
import {CourrierService} from './services/CourrierService/courrier.service';
import { HttpClientModule } from '@angular/common/http';
import { EditcourrierComponent } from './components/CourriersComponents/editcourrier/editcourrier.component';
import { ViewPDFComponentComponent } from './components/CourriersComponents/view-pdfcomponent/view-pdfcomponent.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SigninComponent } from './components/UsersComponents/signin/signin.component';
import { SignupComponent } from './components/UsersComponents/signup/signup.component';
import { UserProfileComponent } from './components/UsersComponents/user-profile/user-profile.component';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/shared/auth.interceptor';
import {AuthGuard} from './guard/auth.guard';
import { NewEntityComponent } from './components/EntityComponents/new-entity/new-entity.component';





@NgModule({
  declarations: [
    AppComponent,
    MenubComponent,
    CourrierComponent,
    CourrierlistComponent,
    NewcourrierComponent,
    EditcourrierComponent,
    ViewPDFComponentComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    NewEntityComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    
    
    
  ],
  providers: [CourrierService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
