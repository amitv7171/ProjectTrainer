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

{path:'display-Trainer',component:DisplayTrainerComponent},
{path:'add-Trainer',component:AddTrainerComponent},
{path:'Trainer',component:TrainerComponent},
{path:'update',component:UpdateTrainerComponent},
{path:'update/:id',component:UpdateTrainerComponent},


{path:'DisplayTask',component:DisplayAllTaskComponent},
{path:'AcceptTaskDetails',component:AcceptTaskDetailsComponent},
{path:'UpdateTaskDetails',component:UpdateTaskDetailsComponent},
{path:'DeleteTaskDetails',component:DeleteTaskDetailsComponent},
{path:'UpdateTaskDetails/:id',component:UpdateTaskDetailsComponent},
{path:'start',component:StartupComponent},
{path:'taskDetails/:id',component:SpecificTaskComponent},

{path:'about',component:AboutUsComponent},
{path:'contact',component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
