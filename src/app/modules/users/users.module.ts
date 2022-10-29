import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/list/users-page.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './pages/user/user-page.component';
import { UserCardComponent } from './components/card/user-card.component';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { AlbumsModule } from '../albums/albums.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersPageComponent,
    UserPageComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    SkeletonModule,
    AlbumsModule,
  ],
})
export class UsersModule {}
