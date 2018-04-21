import { Injectable } from '@angular/core';

@Injectable()
export class SongsService {

  constructor() { }
  getSongById() {
    return {
      title: 'This is the day',
      parts: [
        {
          name: "Verse",
          lines: [
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] }
          ]
        },
        {
          name: "Chorus",
          lines: [
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] }
          ]
        }
      ]
    };
  }
}
