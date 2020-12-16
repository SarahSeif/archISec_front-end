import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('myVideo', {static: true}) myVideo: ElementRef;
  public isPlay: boolean = false;

  constructor() { }

  ngOnInit() {
    this.myVideo.nativeElement.controls = false;
  }

  playVideo(video: any) {
    if (this.isPlay === false) {
      video.play();
      video.controls = true;
      this.isPlay = true;
    } else {
      video.pause();
      this.isPlay = false;
    }

  }


}
