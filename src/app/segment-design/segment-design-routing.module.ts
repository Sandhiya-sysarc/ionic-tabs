import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentDesignPage } from './segment-design.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentDesignPageRoutingModule {}
