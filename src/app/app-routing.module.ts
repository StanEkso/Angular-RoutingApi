import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainPageComponent,
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: UsersPageComponent,
          },
          {
            path: ':id',
            component: UserPageComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: '404',
      },
      {
        path: '404',
        component: NotFoundPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
