import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlbumsPageComponent,
  },
  {
    path: ':id',
    component: AlbumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
