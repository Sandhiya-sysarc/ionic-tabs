import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectedTab: any;
  @ViewChild('animdiv')animdiv!:ElementRef;
  constructor(public anmiationCtrl: AnimationController) { }
  colors = ['30%','50%']
  ind = 0
  setCurrentab(event: any) {
    
    console.log(event, "event");
    this.selectedTab = event.tab;
    this.animdiv.nativeElement.style.left = this.colors[this.ind++]

    setTimeout(()=>{
      const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"] ion-label`);
      const fadeInAnmiation = this.createFadeInAnimation(tabButton as HTMLElement);
      fadeInAnmiation.keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ])
      fadeInAnmiation.play();
    },1000);
  }

  createFadeInAnimation(baseEl: HTMLElement) {
    return this.anmiationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out')
    // .fromTo('opacity','0','1');
  }

}
