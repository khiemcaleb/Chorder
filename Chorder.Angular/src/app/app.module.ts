import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { LineComponent } from './line/line.component';
import { PartComponent } from './part/part.component';
import { SongComponent } from './song/song.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    LineComponent,
    PartComponent,
    SongComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
