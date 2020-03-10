import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
height;
screenHeight;

  constructor() { }

  ngOnInit() {
    this.reSize();
  }

  // to make the footer display at the bottom of the screen always
  reSize() {
    this.height = window.innerHeight - (document.getElementById('footerId').offsetHeight+ document.getElementById('headerId').offsetHeight);
    this.screenHeight = (this.height) + 'px';
    document.getElementById('main1').style.minHeight = this.screenHeight;
  }
}
