import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'Register', component: RegisterComponent},
  { path: 'HowTouse', component:HowtouseComponent},
  { path: 'Create', component:CreateComponent},
  { path: 'Manage', component:ManageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
