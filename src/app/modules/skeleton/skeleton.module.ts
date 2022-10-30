import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringSkeleton } from './string/string.component';
import { TitleSkeleton } from './title/title.component';
import { ImageSkeleton } from './image/image.component';
import { IconComponent } from './icon/icon.component';
import { UserCardSkeleton } from './user-card/user-card.component';
import { AlbumListSkeleton } from './albumlist/list.component';
import { PhotoListSkeleton } from './photo-list/photo-list.component';
import { PhotoCardSkeleton } from './photo-card/photo-card.component';

@NgModule({
  declarations: [
    StringSkeleton,
    TitleSkeleton,
    ImageSkeleton,
    IconComponent,
    UserCardSkeleton,
    AlbumListSkeleton,
    PhotoListSkeleton,
    PhotoCardSkeleton,
  ],
  imports: [CommonModule],
  exports: [
    StringSkeleton,
    TitleSkeleton,
    ImageSkeleton,
    IconComponent,
    UserCardSkeleton,
    AlbumListSkeleton,
    PhotoListSkeleton,
  ],
})
export class SkeletonModule {}
