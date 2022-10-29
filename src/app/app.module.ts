import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainPageComponent,
    UsersPageComponent,
    NotFoundPageComponent,
    UserPageComponent,
    UserCardComponent,
    AlbumListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
