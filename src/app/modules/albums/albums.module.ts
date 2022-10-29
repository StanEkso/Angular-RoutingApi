import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumListComponent } from './components/list/album-list.component';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumComponent } from './pages/album/album.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumsComponent,
    AlbumsPageComponent,
    AlbumComponent,
    PhotoListComponent,
    PhotoCardComponent,
  ],
  imports: [CommonModule, AlbumsRoutingModule, RouterModule],
})
export class AlbumsModule {}
