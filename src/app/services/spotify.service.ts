import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public token : any = null;
  private clientId : string = 'aaeea3eaae8940c1a35e4645a2028096'

  constructor(private location : Location, private httpClient : HttpClient) { 
    if ( localStorage.getItem("token") != null){
      this.token = localStorage.getItem("token")
    }
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
    this.token = token
    localStorage.setItem("token", token)
  }

  OnSignOut(){
    this.token = null;
    localStorage.removeItem("token")
    this.location.replaceState("/")
  }

  private GetHeaderOptions() {
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+ this.token,
    } 
    return {headers : new HttpHeaders(headerDict)}
  }

  GetTracks(offset : number){
    const requestOptions = this.GetHeaderOptions();
    return this.httpClient.get<any[]>("https://api.spotify.com/v1/me/tracks?offset="+offset,requestOptions).toPromise();
  }

}
