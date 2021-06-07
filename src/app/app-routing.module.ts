import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { HomeComponent} from './home/home.component';
import { AuthGuard} from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdmimPanelComponent } from './admim-panel/admim-panel.component';
import { DisplayTrainerComponent} from './trainer/display-trainer/display-trainer.component';
import { AddTrainerComponent} from './trainer/add-trainer/add-trainer.component';
import { TrainerComponent} from './trainer/trainer.component';
import { UpdateTrainerComponent} from './trainer/update-trainer/update-trainer.component';

import { DisplayAllTaskComponent } from './task/display-all-task/display-all-task.component';
import { AcceptTaskDetailsComponent } from './task/accept-task-details/accept-task-details.component';
import { UpdateTaskDetailsComponent } from './task/update-task-details/update-task-details.component';
import { DeleteTaskDetailsComponent } from './task/delete-task-details/delete-task-details.component';

import { AboutUsComponent} from './about-us/about-us.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { StartupComponent} from './startup/startup.component';
import { SpecificTaskComponent} from './task/specific-task/specific-task.component';
import {  UpdateFormTrackerComponent} from './tracker/update-form-tracker/update-form-tracker.component';
import { TrackerComponent} from './tracker/tracker.component';
import { MyDetailsComponent} from './my-details/my-details.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UpdateTaskReadyComponent} from './update-task-ready/update-task-ready.component';
import { AcceptInputToGetListOfStudentsComponentComponent} from './trainer/accept-input-to-get-list-of-students-component/accept-input-to-get-list-of-students-component.component';
import { DisplayDetailsBasedOnTrackComponentComponent} from './trainer/display-details-based-on-track-component/display-details-based-on-track-component.component';

const routes: Routes = [
  {path:'mainEntry',redirectTo:'/user/login',pathMatch:'full'},
{

  path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]
},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
{path:'forbidden',component:ForbiddenComponent},
{path:'adminpanel',component:AdmimPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
//{path: 'employe', component: EmployeeComponent}

{path:'display-Trainer',component:DisplayTrainerComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'add-Trainer',component:AddTrainerComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'Trainer',component:TrainerComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'update',component:UpdateTrainerComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'update/:id',component:UpdateTrainerComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},


{path:'DisplayTask',component:DisplayAllTaskComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'AcceptTaskDetails',component:AcceptTaskDetailsComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'UpdateTaskDetails',component:UpdateTaskDetailsComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'DeleteTaskDetails',component:DeleteTaskDetailsComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'UpdateTaskDetails/:id',component:UpdateTaskDetailsComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'start',component:StartupComponent},

{path:'taskDetails/:id',component:SpecificTaskComponent},

{path:'about',component:AboutUsComponent},
{path:'contact',component:ContactUsComponent},
{path:'UpdateTrackerStatus/:taskId/:userName',component:UpdateFormTrackerComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'AcceptInputsToUpdateTracker',component:TrackerComponent},
{path:'my-details',component:MyDetailsComponent},
{path:'dashboard/:name',component:DashboardComponent},
{path:'UpdateTaskReadyComponent/:taskId/:userName',component:UpdateTaskReadyComponent},
{path:'AcceptInputToGetEmployees',component:AcceptInputToGetListOfStudentsComponentComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
{path:'DisplayAllDetailsBaseOnTrace/:name',component:DisplayDetailsBasedOnTrackComponentComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
