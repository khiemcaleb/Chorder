
import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { Part, PartComponent } from '../part/part.component';
import { Song, ViewMode, SongMode } from '../song';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song;
  @Input() mode: SongMode;
  @Input() view: ViewMode;

  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  @ViewChildren(PartComponent) partComponents: QueryList<PartComponent>;

  onPartTab(partComponent: PartComponent) {
    if (partComponent.index < this.partComponents.length - 1) {
      var nextPartComponent = this.partComponents.toArray()[partComponent.index + 1];
      var firstCell = nextPartComponent.lineComponents.first.cellComponents.first;
      firstCell.isFocus = false;
      firstCell.isEditing = true;
    }
  }
  
  addPart() {
    this.song.parts.push({
      lines: [],
      lyrics: '', // TODO: Need null validation
      name: 'Part name'
    });

  }
}