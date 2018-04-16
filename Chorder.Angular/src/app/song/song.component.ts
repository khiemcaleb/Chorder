import { Component, OnInit } from '@angular/core';
import { Part } from '../part/part.component';
import { Line } from '../line/line.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: String = 'This is the day';
  parts: Part[] =
  [
    {
      name: "Verse",
      lines: [
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]},
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]},
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]},
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]}
      ] 
    },
    {
      name: "Chorus",
      lines: [
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]},
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]},
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]},
        {cells: [{chord: "CMaj7", word: "God"}, {chord: "", word: " "}, {chord: "G", word: "loves"}, {chord: "Am", word: ""}, {chord: "CMaj7", word: "you"}]}
      ] 
    }
  ]

}
