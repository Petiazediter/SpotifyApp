import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.tracks)
  }

}
