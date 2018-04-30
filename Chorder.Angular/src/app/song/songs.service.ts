import { Injectable } from '@angular/core';

@Injectable()
export class SongsService {

  constructor() { }
  getSongById(id: number) {
    return {
      key: "C#m",
      title: 'This is the day',
      parts: [
        {
          name: "Verse",
          lines: [
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] }
          ],
          lyrics: "This is the day, this is the day\nThat the Lord has made, that the Lord has made\nI will rejoice, I will rejoice\nAnd be glad in it, and be glad in it."
        },
        {
          name: "Chorus",
          lines: [
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] },
            { cells: [{ chord: "CMaj7", word: "God" }, { chord: "", word: " " }, { chord: "G", word: "loves" }, { chord: "Am", word: "" }, { chord: "CMaj7", word: "you" }] }
          ],
          lyrics: "This is the day that the Lord has made\nI will rejoice and be glad in it.\nThis is the day, this is the day\nThat the Lord has made."
        }
      ]
    };
  }
}
