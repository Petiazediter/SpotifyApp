import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { Track } from 'src/app/models/Track';
import { TrackContainer } from 'src/app/models/TrackContainer';

@Component({
  selector: 'top-tracks-display',
  templateUrl: './stat-display.component.html',
  styleUrls: ['./stat-display.component.scss']
})
export class StatDisplayComponent implements OnInit {

  @Input() tracks : any;
  @Input() title : string;
  @Input() term : string;
  seeAllLink : string;

  constructor(private router : Router) { 
  }

  ngOnInit(): void {
    this.seeAllLink = '/stats/tracks/' + this.term //this.router.navigate([],{skipLocationChange : false})
  }

  onSeeAllClick() : void {
    this.router.navigate([this.seeAllLink],{skipLocationChange : false})
  }

}
