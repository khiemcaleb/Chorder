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
import { FocusDirective } from '../focus.directive';
import { LyricsComponent } from './lyrics/lyrics.component';

@NgModule({
  declarations: [
    SongManagerComponent,
    SongComponent,
    PartComponent,
    LineComponent,
    CellComponent,
    LyricsComponent,
    FocusDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'songs',
        children: [
          { path: ':id/:title', component: SongComponent },
          { path: '', component: SongManagerComponent }
        ]
      }
    ])
  ],
  providers: [
    SongsService
  ],
  exports: [
    RouterModule
  ]

})
export class SongModule { }
