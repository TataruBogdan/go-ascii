import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsciiService {

  // make a connection with an API - https://asciified.thelicato.io/
  // make connection with http client
  constructor(private http: HttpClient) { 
  }

  // because get from API a string and not a JSON
  getAsciiArt(text: string, font: string) : Observable<string> {

    // to work must install this extention
    // https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

    // connection with the api
    const url: string = `https://asciified.thelicato.io/api/v2/ascii?text=${text}&font=${font}`;

    //because we don't get a JSON -> but a string from the API
    return this.http.get(url, {responseType: 'text'});
  }

}
