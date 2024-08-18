import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'login',component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todo', component: ListToDosComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: '**', component: LoginComponent,
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
