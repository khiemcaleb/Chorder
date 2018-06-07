import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { SongsService } from '../songs.service';
import { Song, SongMode, ViewMode } from '../models/song';
import { PartComponent } from '../part/part.component';

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

  onChange($event) {
    this.change.emit($event);
  }

  removePart(partComponent: PartComponent) {
    if (this.song.parts.length > 1)
      this.song.parts.splice(partComponent.index, 1);
  }

  pressArrowRight(partComponent: PartComponent) {
    if (partComponent.index < this.partComponents.length - 1) {
      var nextPartComponent = this.partComponents.toArray()[partComponent.index + 1];
      var firstCell = nextPartComponent.lineComponents.first.cellComponents.first;// first cell of next part
      var lastCell = partComponent.lineComponents.last.cellComponents.last;//last cell of now part
      lastCell.isEditing = false;
      firstCell.isEditing = true;
    }
  }

  pressArrowLeft(partComponent: PartComponent) {
    if (partComponent.index > 0) {
      var previouspart = this.partComponents.toArray()[partComponent.index - 1];
      var lastCell = previouspart.lineComponents.last.cellComponents.last; // last cell of previous part 
      var nowCell = partComponent.lineComponents.last.cellComponents.last;
      nowCell.isFocus = false;
      lastCell.isEditing = true;
      lastCell.isFocus = true;
    }
  }
  pressArrowDown(arrayIndex) {
    if (arrayIndex[2] < this.partComponents.length - 1) {
      var nextPart = this.partComponents.toArray()[arrayIndex[2] + 1];
      var nextLine = nextPart.lineComponents.first;
      var nowPart = this.partComponents.toArray()[arrayIndex[2]];
      var nowLine = nowPart.lineComponents.last;
      var nowCell = nowLine.cellComponents.toArray()[arrayIndex[0]];

      if (arrayIndex[0] > nextLine.cellComponents.length - 1) {
        var nextCell = nextLine.cellComponents.last;
        nowCell.isEditing = false;
        nextCell.isEditing = true;
      }
      else if (arrayIndex[0] <= nextLine.cellComponents.length - 1) {
        var nextCell = nextLine.cellComponents.toArray()[arrayIndex[0]];
        nowCell.isEditing = false;
        nextCell.isEditing = true;
      }
    }
  }

  pressArrowUp(arrayIndex) {
    if (arrayIndex[2] > 0) {
      var abovePart = this.partComponents.toArray()[arrayIndex[2] - 1];
      var aboveLine = abovePart.lineComponents.last;
      var nowPart = this.partComponents.toArray()[arrayIndex[2]];
      var nowLine = nowPart.lineComponents.last;
      var nowCell = nowLine.cellComponents.toArray()[arrayIndex[0]];

      if (arrayIndex[0] > aboveLine.cellComponents.length - 1) {
        var aboveCell = aboveLine.cellComponents.last;
        nowCell.isEditing = false;
        aboveCell.isEditing = true;
      }
      else if (arrayIndex[0] <= aboveLine.cellComponents.length - 1) {
        var aboveCell = aboveLine.cellComponents.toArray()[arrayIndex[0]];
        nowCell.isEditing = false;
        aboveCell.isEditing = true;
      }
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