import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { SongsService } from '../songs.service';
import { Song, SongMode, ViewMode } from '../models/song';
import { PartComponent } from '../part/part.component';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song;
  @Input() mode: SongMode;
  @Input() view: ViewMode;

  @Output() change = new EventEmitter();

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

  onChange($event){
    this.change.emit($event);
  }

  removePart(partComponent: PartComponent){
    if(this.song.parts.length > 1)
      this.song.parts.splice(partComponent.index,1);
  }

  pressArrowRight(partComponent: PartComponent){
    if (partComponent.index < this.partComponents.length - 1) {
      var nextPartComponent = this.partComponents.toArray()[partComponent.index + 1];
      var firstCell = nextPartComponent.lineComponents.first.cellComponents.first;// first cell of next part
      var lastCell = partComponent.lineComponents.last.cellComponents.last;//last cell of now part
      lastCell.isFocus = false;
      lastCell.isEditing = false;
      firstCell.isFocus = true;
      firstCell.isEditing = true;
    }
  }

  pressArrowLeft(partComponent: PartComponent){
    if(partComponent.index > 0){
      var previouspart = this.partComponents.toArray()[partComponent.index - 1]
      var lastCell = previouspart.lineComponents.last.cellComponents.last; // last cell of previous part 
      var nowCell = partComponent.lineComponents.last.cellComponents.last;
      nowCell.isFocus = false;
      lastCell.isEditing = true;
      lastCell.isFocus = true;
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