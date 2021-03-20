import { Location } from '@angular/common';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public token : any = null;
  private clientId : string = 'aaeea3eaae8940c1a35e4645a2028096'ű

  constructor(private location : Location) { 
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

}
