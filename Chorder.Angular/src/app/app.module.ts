import { SongsService } from './song/songs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { LineComponent } from './line/line.component';
import { PartComponent } from './part/part.component';
import { SongComponent } from './song/song.component';
import { FocusDirective } from './focus.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SongManagerComponent } from './song-manager/song-manager.component';
import { LyricsComponent } from './lyrics/lyrics.component';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    LineComponent,
    PartComponent,
    SongComponent,
    FocusDirective,
    NotFoundComponent,
    HomeComponent,
    SongManagerComponent,
    LyricsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'songs/:id/:title', component: SongComponent },
      { path: 'songs', component: SongManagerComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
