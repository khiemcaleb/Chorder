import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatStepperModule, MatCardTitle, MatCardModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

import { RouterModule } from '@angular/router';
import { FocusDirective } from '../focus.directive';
import { CellComponent } from './cell/cell.component';
import { LineComponent } from './line/line.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { PartComponent } from './part/part.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { SongHeaderComponent } from './song-header/song-header.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { SongManagerComponent } from './song-manager/song-manager.component';
import { SongViewerComponent } from './song-viewer/song-viewer.component';
import { SongComponent } from './song/song.component';
import { SongsService } from './songs.service';


@NgModule({
  declarations: [
    SongManagerComponent,
    SongComponent,
    PartComponent,
    LineComponent,
    CellComponent,
    LyricsComponent,
    FocusDirective,
    SongEditorComponent,
    SongViewerComponent,
    SongInfoComponent,
    SongHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: 'songs',
        children: [
          { path: ':id/:title/edit', component: SongEditorComponent },
          { path: ':id/:title', component: SongViewerComponent },
          { path: '', component: SongManagerComponent }
        ]
      }
    ]),
    MatProgressSpinnerModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatCardModule
  ],
  providers: [
    SongsService
  ],
  exports: [
    RouterModule
  ]

})
export class SongModule { }
