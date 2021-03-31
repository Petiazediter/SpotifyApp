import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTrackResponseObject } from '../models/UserTrackResponseObject';
import { SpotifyServiceInterface } from './spotify_service_interface';
import { Terms } from './terms';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements SpotifyServiceInterface {

  public static LONG_TERM : string = "long_term"
  public static MED_TERM : string = "medium_term"
  public static SHORT_TERM : string = "short_term"

  public static token : any = null;
  private clientId : string = 'aaeea3eaae8940c1a35e4645a2028096'

  constructor(private location : Location, private httpClient : HttpClient) { 
    if ( this.isExpired()) {
      SpotifyService.token = null;
    } else {
      SpotifyService.token = localStorage.getItem("token")
    }
  }

  isExpired(){
    if ( localStorage.getItem("added")!=null){
      var t1 = new Date()
      var t2 = Date.parse(localStorage.getItem("added"))
      var dif = t1.getTime() - t2;
      var Seconds_from_T1_to_T2 = dif / 1000;
      var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
      console.log(Seconds_Between_Dates)
      if (Seconds_Between_Dates >= 3600){
        return true
      }
      return false;
    }
    return true;
  }

  generateLink(clientId : string, redirectUri : string){
    var scopes = 'user-read-private user-read-email user-library-read user-top-read'
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
    var date = new Date();
    localStorage.setItem ("added", date.toString())
  }

  OnSignOut(){
    SpotifyService.token = null;
    localStorage.removeItem("token")
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
    return this.httpClient.get<any>(url,requestOptions);
  }

  
  GetTopTrack(term : Terms){
    return this.httpClient.get<any>("https://api.spotify.com/v1/me/top/tracks?time_range=" + term.valueOf() + "&limit=5", this.GetHeaderOptions())
  } 

  GetTopTracksByUrl(url : string){
    return this.httpClient.get<any>(url, this.GetHeaderOptions()) 
  }

  GetTopArtist(term : Terms){
    return this.httpClient.get<any>("https://api.spotify.com/v1/me/top/artists?time_range=" + term.valueOf() + "&limit=5", this.GetHeaderOptions())
  } 

}
