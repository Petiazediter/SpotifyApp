import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private route : ActivatedRoute, private spotifyService : SpotifyService, private router : Router) {
    this.route.queryParams.subscribe(params => {
      const hashString = window.location.hash.substring(1)
      const table = hashString.split("&")
      let x = []
      for ( let y of table){
        let v = y.split("=");
        x.push({key : v[0],value : v[1]})
      }
      if ( x[0].key == "access_token"){
        spotifyService.SetToken(x[0].value);
        
      } else {
        spotifyService.OnSignOut();
        return;
      }
      this.router.navigate(['/'],{skipLocationChange : false})
    });
  }

  ngOnInit(){}

}
