import { SongsService } from './song/songs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { LineComponent } from './line/line.component';
import { PartComponent } from './part/part.component';
import { SongComponent } from './song/song.component';
import { InputSelectAllDirective } from './cell/input-select-all.directive';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    LineComponent,
    PartComponent,
    SongComponent,
    InputSelectAllDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
