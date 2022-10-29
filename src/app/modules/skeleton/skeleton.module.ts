import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringSkeleton } from './string/string.component';
import { TitleSkeleton } from './title/title.component';
import { ImageSkeleton } from './image/image.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [StringSkeleton, TitleSkeleton, ImageSkeleton, IconComponent],
  imports: [CommonModule],
  exports: [StringSkeleton, TitleSkeleton, ImageSkeleton, IconComponent],
})
export class SkeletonModule {}
