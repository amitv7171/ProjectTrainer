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

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
