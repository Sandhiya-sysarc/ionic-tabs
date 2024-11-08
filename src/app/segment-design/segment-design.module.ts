import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentDesignPageRoutingModule } from './segment-design-routing.module';

import { SegmentDesignPage } from './segment-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentDesignPageRoutingModule
  ],
  declarations: [SegmentDesignPage]
})
export class SegmentDesignPageModule {}
