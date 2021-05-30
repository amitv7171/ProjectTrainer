import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdmimPanelComponent } from './admim-panel/admim-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AddTrainerComponent } from './Trainer/add-trainer/add-trainer.component';
import { DisplayTrainerComponent } from './Trainer/display-trainer/display-trainer.component';
import { UpdateTrainerComponent } from './Trainer/update-trainer/update-trainer.component';
import {TaskModule} from './task/task.module';
import { TaskService } from './shared/task.service';
import { StartupComponent } from './startup/startup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdmimPanelComponent,
    ForbiddenComponent,
    TrainerComponent,
    AddTrainerComponent,
    DisplayTrainerComponent,
    UpdateTrainerComponent,
    StartupComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [TaskService,UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
