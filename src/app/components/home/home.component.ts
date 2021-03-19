import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service : SpotifyService) { }

  ngOnInit(): void {
  }

  onConnect(): void{
    console.log("Clicked")
    //this.service.generateLink("asd","/kaka");
  }

}
