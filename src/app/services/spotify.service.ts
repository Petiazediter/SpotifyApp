import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTrackResponseObject } from '../models/UserTrackResponseObject';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public static token : any = null;
  private clientId : string = 'aaeea3eaae8940c1a35e4645a2028096'

  constructor(private location : Location, private httpClient : HttpClient) { 
    SpotifyService.token = localStorage.getItem("token")
  }

  generateLink(clientId : string, redirectUri : string){
    var scopes = 'user-read-private user-read-email user-library-read'
    var link = 'https://accounts.spotify.com/authorize'+
    '?response_type=token'+
    '&client_id=' + clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri) 
    window.location.href=link;
  }

  SetToken(token : any){
    SpotifyService.token = token
    localStorage.setItem("token",token)
  }

  OnSignOut(){
    SpotifyService.token = null;
    this.location.replaceState("/")
  }

  private GetHeaderOptions() {
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+ SpotifyService.token,
    } 
    return {headers : new HttpHeaders(headerDict)}
  }

  GetTracks(offset : number){
    const requestOptions = this.GetHeaderOptions();
    return this.httpClient.get<UserTrackResponseObject>("https://api.spotify.com/v1/me/tracks?offset="+offset,requestOptions).toPromise();
  }

  GetTracksByUrl(url : string){
    const requestOptions = this.GetHeaderOptions();
    return this.httpClient.get<UserTrackResponseObject>(url,requestOptions).toPromise();
  }

}
