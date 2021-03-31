import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Terms } from 'src/app/services/terms';

@Component({
  selector: 'app-allstatscomponent',
  templateUrl: './allstatscomponent.component.html',
  styleUrls: ['./allstatscomponent.component.scss']
})
export class AllstatscomponentComponent implements OnInit {

  items : any[] = []

  constructor(private route : ActivatedRoute,private spotifyService : SpotifyService) {
    route.params.subscribe((x:any)=>{
        if ( x.type =="artists"){
          var term : Terms = Terms.SHORT_TERM;
          if ( Terms.LONG_TERM.valueOf() == x.range){
            term = Terms.LONG_TERM
          } else if (Terms.MED_TERM.valueOf() == x.range){
            term = Terms.MED_TERM
          }

          spotifyService.GetTopArtist(term).subscribe((result : any) => {
            result.items.forEach((element : any) => {
                this.items.push(element)
            });

            if ( result.next != null){
              this.startLoading(result.next)
            }
          })
        }
    })
  }

  startLoading(link : string) : void {
    this.spotifyService.GetTracksByUrl(link).subscribe((result : any) => {
        result.items.forEach((element : any) => {
            this.items.push(element)
        });

        if ( result.next != null){
          this.startLoading(result.next)
        } else {
          console.log("Final  :" + this.items[0])
        }
    })    
  }

  ngOnInit(): void {

  }

}
