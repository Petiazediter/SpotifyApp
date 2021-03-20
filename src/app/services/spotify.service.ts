import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';

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
    '?response_type=token'+
    '&client_id=' + clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri) 
    window.location.href=link;
  }

  OnFailCallback( code : string) : void { 
    window.location.href="http://localhost:4200"
  }

}
