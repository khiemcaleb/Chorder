import { Component, OnInit, ViewChild } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { SongsService } from '../songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Song, SongMode, ViewMode } from '../models/song';

@Component({
  selector: 'app-song-viewer',
  templateUrl: './song-viewer.component.html',
  styleUrls: ['./song-viewer.component.css']
})
export class SongViewerComponent implements OnInit {
  song: Song;
  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  @ViewChild(SongComponent) songComponent: SongComponent;

  constructor(private route: ActivatedRoute, private songsService: SongsService, private router: Router) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      let title = params.get('title');

      if (id > 0) {
        this.songsService.getSongById(id)
          .subscribe(response => {
            this.song = response.json();
          });
      }
      else {
        // TODO: Prevent this case
        // Cannot view a song which does not exist  
      }
    });
  }

  viewFull($event = null) {
    if ($event) $event.preventDefault();
    this.songComponent.view = ViewMode.FULL;
  }

  viewLyrics($event = null) {
    if ($event) $event.preventDefault();
    this.songComponent.view = ViewMode.LYRICS;
  }

  viewChord($event) {
    $event.preventDefault();
    this.songComponent.view = ViewMode.CHORD;
  }

  deleteSong(){
    this.songsService.deleteSong(this.song.id)
      .subscribe(response =>{
        this.router.navigate(['/songs']);
      });
  }

}
