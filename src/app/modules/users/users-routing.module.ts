import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/list/users-page.component';
import { UserPageComponent } from './pages/user/user-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersPageComponent,
  },
  {
    path: ':id',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
