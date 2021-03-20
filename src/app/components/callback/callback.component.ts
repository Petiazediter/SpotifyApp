import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private httpClient : HttpClient, private route : ActivatedRoute, private spotifyService : SpotifyService) {
    this.route.queryParams.subscribe(params => {
      const hashString = window.location.hash.substring(1)
      const table = hashString.split("&")
      let x = []
      for ( let y of table){
        let v = y.split("=");
        x.push({key : v[0],value : v[1]})
      }
      console.log(x[0].key)
      console.log("Access token : ")
      if ( x[0].key == "access_token"){
        spotifyService.SetToken(x[0].key);
      } else {
        spotifyService.SetToken(null);
      }
      window.location.href = "http://localhost:4200/"
    });
  }

  ngOnInit(){}

}
