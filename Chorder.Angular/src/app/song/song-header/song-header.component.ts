import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/song';

@Component({
  selector: 'app-song-header',
  templateUrl: './song-header.component.html',
  styleUrls: ['./song-header.component.css']
})
export class SongHeaderComponent implements OnInit {

  @Input() song: Song;

  isEditingKey: boolean = false;
  isEditingTitle: boolean = false;
  isFocus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onKeyClick($event) {
    if (!this.isEditingKey)
      this.isEditingKey = true;
  }

  onTitleClick($event) {
    if (!this.isEditingTitle)
      this.isEditingTitle = true;
  }

  onKeyBlur($event) {
    if (this.isEditingKey)
      this.isEditingKey = false;
    $event.preventDefault();
  }

  onTitleBlur($event) {
    if (this.isEditingTitle)
      this.isEditingTitle = false;
    $event.preventDefault();
  }

}
