import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';
import { TokenComponent } from './token/token.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:'dashboard/api/userMessage' , component : UserComponent },
{path:'dashboard/api/adminPage' , component : AdminComponent },
{path:'' , component : HomeComponent},
{path : 'dashboard/api/tokenPage' , component : TokenComponent},
{path : '**' , component : LostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
