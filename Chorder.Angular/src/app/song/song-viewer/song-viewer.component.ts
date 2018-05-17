import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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

  lyricsCheck: boolean = true;
  chordCheck: boolean = true;

  @ViewChild(SongComponent) songComponent: SongComponent;

  constructor(private route: ActivatedRoute, 
    private songsService: SongsService, 
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef) {
    
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

  onLyricsCheck($event){
    this.lyricsCheck = $event.source.checked;
    this.renderView();
  }

  onChordCheck($event){
    this.chordCheck = $event.source.checked;
    this.renderView();
  }

  renderView(){
    if (this.lyricsCheck == this.chordCheck){
      if (this.lyricsCheck)
        this.songComponent.view = ViewMode.FULL;
      else
        this.songComponent.view = ViewMode.NONE;
    }
    else if (this.lyricsCheck){
      this.songComponent.view = ViewMode.LYRICS;
    }
    else{
      this.songComponent.view = ViewMode.CHORD;
    }

    console.log({lyrics: this.lyricsCheck, chord: this.chordCheck});
  }

  deleteSong(){
    this.songsService.deleteSong(this.song.id)
      .subscribe(response =>{
        this.router.navigate(['/songs']);
      });
  }

}
