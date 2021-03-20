import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId : string = 'aaeea3eaae8940c1a35e4645a2028096'
  private secretKey : string = '554b9e9fca874f1fa0a3ee5ff9913667'
  constructor() { }

  generateLink(clientId : string, redirectUri : string){
    var scopes = 'user-read-private user-read-email user-library-read'
    var link = 'https://accounts.spotify.com/authorize'+
    '?response_type=code'+
    '&client_id=' + clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri) 
    window.location.href=link;
  }

  OnCallback( code : string) : void { 
    if ( code == undefined){
      console.log("Redirect failed")
    } else{
      console.log("Redirect success")
    }
  }

}
