import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.scss']
})
export class MainTextComponent implements OnInit {

  @Input() leftText : any = "";
  @Input() rightText : any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
