import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-display',
  templateUrl: './artists-display.component.html',
  styleUrls: ['./artists-display.component.scss']
})
export class ArtistsDisplayComponent implements OnInit {

  @Input() artists : any;
  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
