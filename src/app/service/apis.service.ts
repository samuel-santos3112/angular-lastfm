import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Albuns, Artists} from '../model/albuns.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

url = 'http://ws.audioscrobbler.com/2.0/';
  constructor(private httpClient: HttpClient) { }

  getAlbuns(): Observable<Albuns> {
    return this.httpClient.get<Albuns>(this.url + '?method=user.gettopalbums&user=' +
      'yasminio' +
      '&limit=12&api_key=997d8d682dd5f5a5205b0f7e9aa9e75f&format=json')
  }

  getArtists(): Observable<Artists> {
    return this.httpClient.get<Artists>(this.url + '?method=artist.getinfo&artist=eminem&api_key=997d8d682dd5f5a5205b0f7e9aa9e75f&format=json')
  }


}
