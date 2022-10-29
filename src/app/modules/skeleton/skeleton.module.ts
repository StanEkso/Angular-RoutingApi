import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringComponent } from './string/string.component';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    StringComponent,
    TitleComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SkeletonModule { }
