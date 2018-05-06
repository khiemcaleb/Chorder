import { Injectable } from '@angular/core';

@Injectable()
export class SongsService {

  constructor() { }
  getSongById(id: number) {
    var json = {
      "title": "How great Thou art",
      "key": "A",
      "artist":"Chis Tomlin",
      "author":"Carl Boberg",
      "year":1885,
      "parts": [{ "name": "Verse 1", "lines": [{ "cells": [{ "word": "", "chord": "" }, { "word": "O", "chord": "" }, { "word": "", "chord": "" }, { "word": "Lord,", "chord": "" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "God,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "when", "chord": "" }, { "word": "", "chord": "" }, { "word": "I", "chord": "" }, { "word": "", "chord": "" }, { "word": "in", "chord": "" }, { "word": "", "chord": "" }, { "word": "awesome", "chord": "D" }, { "word": "", "chord": "" }, { "word": "wonder", "chord": "" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "Consider", "chord": "" }, { "word": "", "chord": "" }, { "word": "all", "chord": "A" }, { "word": "", "chord": "" }, { "word": "the", "chord": "" }, { "word": "", "chord": "" }, { "word": "worlds", "chord": "E" }, { "word": "", "chord": "" }, { "word": "Thy", "chord": "" }, { "word": "", "chord": "" }, { "word": "Hands", "chord": "" }, { "word": "", "chord": "" }, { "word": "have", "chord": "" }, { "word": "", "chord": "" }, { "word": "made", "chord": "A" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "I", "chord": "" }, { "word": "", "chord": "" }, { "word": "see", "chord": "" }, { "word": "", "chord": "" }, { "word": "the", "chord": "" }, { "word": "", "chord": "" }, { "word": "stars,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "I", "chord": "" }, { "word": "", "chord": "" }, { "word": "hear", "chord": "" }, { "word": "", "chord": "" }, { "word": "the", "chord": "" }, { "word": "", "chord": "" }, { "word": "rolling", "chord": "D" }, { "word": "", "chord": "" }, { "word": "thunder", "chord": "" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "Thy", "chord": "" }, { "word": "", "chord": "" }, { "word": "power", "chord": "" }, { "word": "", "chord": "" }, { "word": "throughout", "chord": "A" }, { "word": "", "chord": "" }, { "word": "the", "chord": "" }, { "word": "", "chord": "" }, { "word": "universe", "chord": "E" }, { "word": "", "chord": "" }, { "word": "displayed", "chord": "A" }, { "word": "", "chord": "" }] }], "lyrics": "O Lord, my God, when I in awesome wonder\nConsider all the worlds Thy Hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed" }, { "lines": [{ "cells": [{ "word": "", "chord": "" }, { "word": "Then", "chord": "" }, { "word": "", "chord": "" }, { "word": "sings", "chord": "" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "soul,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "Saviour", "chord": "D" }, { "word": "", "chord": "" }, { "word": "God,", "chord": "" }, { "word": "", "chord": "" }, { "word": "to", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thee", "chord": "A" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "F#m" }, { "word": "How", "chord": "" }, { "word": "", "chord": "" }, { "word": "great", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thou", "chord": "" }, { "word": "", "chord": "" }, { "word": "art,", "chord": "Bm" }, { "word": "", "chord": "E" }, { "word": "how", "chord": "" }, { "word": "", "chord": "" }, { "word": "great", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thou", "chord": "" }, { "word": "", "chord": "" }, { "word": "art", "chord": "A" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "E" }, { "word": "Then", "chord": "" }, { "word": "", "chord": "" }, { "word": "sings", "chord": "" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "soul,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "Saviour", "chord": "D" }, { "word": "", "chord": "" }, { "word": "God,", "chord": "" }, { "word": "", "chord": "" }, { "word": "to", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thee", "chord": "A" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "F#m" }, { "word": "How", "chord": "" }, { "word": "", "chord": "" }, { "word": "great", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thou", "chord": "" }, { "word": "", "chord": "" }, { "word": "art,", "chord": "Bm" }, { "word": "", "chord": "E" }, { "word": "how", "chord": "" }, { "word": "", "chord": "" }, { "word": "great", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thou", "chord": "" }, { "word": "", "chord": "" }, { "word": "art", "chord": "A" }, { "word": "", "chord": "" }] }], "lyrics": "Then sings my soul, my Saviour God, to Thee\nHow great Thou art, how great Thou art\nThen sings my soul, my Saviour God, to Thee\nHow great Thou art, how great Thou art", "name": "Chorus" }, { "lines": [{ "cells": [{ "word": "", "chord": "" }, { "word": "And", "chord": "" }, { "word": "", "chord": "" }, { "word": "when", "chord": "" }, { "word": "", "chord": "" }, { "word": "I", "chord": "" }, { "word": "", "chord": "" }, { "word": "think", "chord": "A" }, { "word": "", "chord": "" }, { "word": "of", "chord": "" }, { "word": "", "chord": "" }, { "word": "God,", "chord": "" }, { "word": "", "chord": "" }, { "word": "His", "chord": "" }, { "word": "", "chord": "" }, { "word": "Son", "chord": "" }, { "word": "", "chord": "" }, { "word": "not", "chord": "" }, { "word": "", "chord": "" }, { "word": "sparing", "chord": "D" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "Sent", "chord": "" }, { "word": "", "chord": "" }, { "word": "Him", "chord": "" }, { "word": "", "chord": "" }, { "word": "to", "chord": "" }, { "word": "", "chord": "" }, { "word": "die,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "I", "chord": "" }, { "word": "", "chord": "" }, { "word": "scarce", "chord": "E" }, { "word": "", "chord": "" }, { "word": "can", "chord": "" }, { "word": "", "chord": "" }, { "word": "take", "chord": "" }, { "word": "", "chord": "" }, { "word": "it", "chord": "" }, { "word": "", "chord": "" }, { "word": "in", "chord": "A" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "That", "chord": "" }, { "word": "", "chord": "" }, { "word": "on", "chord": "" }, { "word": "", "chord": "" }, { "word": "the", "chord": "" }, { "word": "", "chord": "" }, { "word": "Cross,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "burden", "chord": "" }, { "word": "", "chord": "" }, { "word": "gladly", "chord": "" }, { "word": "", "chord": "" }, { "word": "bearing", "chord": "D" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "He", "chord": "" }, { "word": "", "chord": "" }, { "word": "bled", "chord": "" }, { "word": "", "chord": "" }, { "word": "and", "chord": "" }, { "word": "", "chord": "" }, { "word": "died", "chord": "A" }, { "word": "", "chord": "" }, { "word": "to", "chord": "" }, { "word": "", "chord": "" }, { "word": "take", "chord": "E" }, { "word": "", "chord": "" }, { "word": "away", "chord": "" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "sin", "chord": "A" }, { "word": "", "chord": "" }] }], "lyrics": "And when I think of God, His Son not sparing\nSent Him to die, I scarce can take it in\nThat on the Cross, my burden gladly bearing\nHe bled and died to take away my sin", "name": "Verse 2" }, { "lines": [{ "cells": [{ "word": "", "chord": "" }, { "word": "When", "chord": "" }, { "word": "", "chord": "" }, { "word": "Christ", "chord": "" }, { "word": "", "chord": "" }, { "word": "shall", "chord": "" }, { "word": "", "chord": "" }, { "word": "come", "chord": "A" }, { "word": "", "chord": "" }, { "word": "with", "chord": "" }, { "word": "", "chord": "" }, { "word": "shout", "chord": "" }, { "word": "", "chord": "" }, { "word": "of", "chord": "" }, { "word": "", "chord": "" }, { "word": "acclamation", "chord": "D" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "And", "chord": "" }, { "word": "", "chord": "" }, { "word": "lead", "chord": "" }, { "word": "", "chord": "" }, { "word": "me", "chord": "" }, { "word": "", "chord": "" }, { "word": "home,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "what", "chord": "" }, { "word": "", "chord": "" }, { "word": "joy", "chord": "E" }, { "word": "", "chord": "" }, { "word": "shall", "chord": "" }, { "word": "", "chord": "" }, { "word": "fill", "chord": "" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "heart", "chord": "A" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "Then", "chord": "" }, { "word": "", "chord": "" }, { "word": "I", "chord": "" }, { "word": "", "chord": "" }, { "word": "shall", "chord": "" }, { "word": "", "chord": "" }, { "word": "bow", "chord": "A" }, { "word": "", "chord": "" }, { "word": "with", "chord": "" }, { "word": "", "chord": "" }, { "word": "humble", "chord": "" }, { "word": "", "chord": "" }, { "word": "adoration", "chord": "D" }, { "word": "", "chord": "" }] }, { "cells": [{ "word": "", "chord": "" }, { "word": "And", "chord": "" }, { "word": "", "chord": "" }, { "word": "then", "chord": "" }, { "word": "", "chord": "" }, { "word": "proclaim,", "chord": "A" }, { "word": "", "chord": "" }, { "word": "my", "chord": "" }, { "word": "", "chord": "" }, { "word": "God,", "chord": "E" }, { "word": "", "chord": "" }, { "word": "how", "chord": "" }, { "word": "", "chord": "" }, { "word": "great", "chord": "" }, { "word": "", "chord": "" }, { "word": "Thou", "chord": "" }, { "word": "", "chord": "" }, { "word": "art", "chord": "A" }, { "word": "", "chord": "" }] }], "lyrics": "When Christ shall come with shout of acclamation\nAnd lead me home, what joy shall fill my heart\nThen I shall bow with humble adoration\nAnd then proclaim, my God, how great Thou art", "name": "Verse 3" }]
    };

    return json;
  }
}
