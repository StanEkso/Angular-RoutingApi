import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { AlbumListComponent } from './components/list/album-list.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [
    AlbumsPageComponent,
    AlbumComponent,
    AlbumListComponent,
    AlbumsPageComponent,
    AlbumsComponent,
  ],
  imports: [CommonModule, RouterModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
