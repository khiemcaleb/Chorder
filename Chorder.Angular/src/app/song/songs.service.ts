import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SongsService {
  private url = "http://localhost:5000/api/songs";

  constructor(private http: Http = null) { 
    
  }

  getSongs(){
    return this.http.get(this.url);
  }

  getSongById(id: number) {
    return this.http.get(this.url + `/${id}`);
  }
}
