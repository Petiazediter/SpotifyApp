import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userToken : any = null;

  constructor(public service : SpotifyService,private location : Location) { 
    console.log(SpotifyService.token)
  }

  ngOnInit(): void {
  }

  getToken() : string{
    return SpotifyService.token;
  }

  onConnect(): void{
    this.service.generateLink("aaeea3eaae8940c1a35e4645a2028096","http://localhost:4200/callback/");
  }

  onSignOut() : void{
    this.service.OnSignOut();
  }

}
