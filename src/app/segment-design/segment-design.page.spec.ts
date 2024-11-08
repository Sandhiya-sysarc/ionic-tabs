import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegmentDesignPage } from './segment-design.page';

describe('SegmentDesignPage', () => {
  let component: SegmentDesignPage;
  let fixture: ComponentFixture<SegmentDesignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
