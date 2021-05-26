import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from 'src/app/services/spotify.service';
import {Terms} from 'src/app/services/terms';

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.scss']
})
export class AllStatsComponent implements OnInit {

  items: any[] = [];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
    route.params.subscribe(paramsValue => {
      let term: Terms;
      switch (paramsValue.range) {
        case Terms.LONG_TERM.valueOf():
          term = Terms.LONG_TERM;
          break;
        case Terms.MED_TERM.valueOf():
          term = Terms.MED_TERM;
          break;
        default:
          term = Terms.SHORT_TERM;
          break;
      }
      if (paramsValue.type === 'artists') {
        spotifyService.getTopArtist(term).subscribe(artist => {
          artist.items.forEach((element: any) => {
            this.items.push(element);
          });
          if (artist.next != null) {
            this.startLoading(artist.next);
          }
        });
      } else if (paramsValue.type === 'tracks') {
        spotifyService.getTopTrack(term).subscribe((result: any) => {
          result.items.forEach((element: any) => {
            this.items.push(element);
          });
          if (result.next != null) {
            this.startLoading(result.next);
          }
        });
      }
    });
  }

  startLoading(link: string): void {
    this.spotifyService.getTracksByUrl(link).subscribe((result: any) => {
      result.items.forEach((element: any) => {
        this.items.push(element);
      });

      if (result.next != null) {
        this.startLoading(result.next);
      }
    });
  }

  ngOnInit(): void {}
}
