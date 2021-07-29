import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

    PUBLIC_KEY = '084e79ba11ba09a7e79c8f3e262b73bb';
    HASH = '';
    URL_API = `http://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=084e79ba11ba09a7e79c8f3e262b73bb`;


  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }


}


//http://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}
