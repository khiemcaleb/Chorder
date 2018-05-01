import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CellComponent } from './cell/cell.component';
import { LineComponent } from './line/line.component';
import { PartComponent } from './part/part.component';
import { SongComponent } from './song/song.component';
import { SongManagerComponent } from './song-manager/song-manager.component';
import { SongsService } from './songs.service';

@NgModule({
  declarations: [
    CellComponent,
    LineComponent,
    PartComponent,
    SongComponent,
    SongManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      // { path: 'songs/:id/:title', component: SongComponent },
       { path: 'songs', component: SongManagerComponent }
    ])
  ],
  providers:[
    SongsService
  ],
  exports:[
    RouterModule
    // CellComponent,
    // LineComponent,
    // PartComponent,
    // SongComponent,
    // SongManagerComponent
  ]
  
})
export class SongModule { }
