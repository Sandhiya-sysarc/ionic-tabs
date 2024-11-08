import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-segment-design',
  templateUrl: './segment-design.page.html',
  styleUrls: ['./segment-design.page.scss'],
})
export class SegmentDesignPage implements OnInit {
selectedSeg:any ="first";
  constructor(public anmiationCtrl: AnimationController) { }

  ngOnInit() {
  }

  segmentChg(event:any){
    console.log(event,"setment");
    console.log(event.target.value,"event.target.value");
    this.selectedSeg = event.target.value;

    const tabButton = document.querySelector(`ion-segment-button[value="${this.selectedSeg}"]`);
    const fadeInAnmiation = this.createFadeInAnimation(tabButton as HTMLElement);
  }

  createFadeInAnimation(baseEl: HTMLElement) {
    return this.anmiationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out')
    // .fromTo('opacity','0','1');
  }

}
