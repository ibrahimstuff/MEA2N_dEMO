import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {
    path: 'users',
    component : UsersComponent
  },
  {
    path: 'newuser',
    component : NewuserComponent
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
