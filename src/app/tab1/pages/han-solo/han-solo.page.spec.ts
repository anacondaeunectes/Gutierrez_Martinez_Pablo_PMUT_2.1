import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HanSoloPage } from './han-solo.page';

describe('HanSoloPage', () => {
  let component: HanSoloPage;
  let fixture: ComponentFixture<HanSoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanSoloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HanSoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
