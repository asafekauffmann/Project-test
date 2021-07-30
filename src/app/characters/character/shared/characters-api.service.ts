import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

    PUBLIC_KEY = '084e79ba11ba09a7e79c8f3e262b73bb';
    HASH = 'B277E711EE9518F79EC8FB3002EFDE44';
    URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=084e79ba11ba09a7e79c8f3e262b73bb`;


  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => {
      return data.data.results
    }))
  }


}


//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}
