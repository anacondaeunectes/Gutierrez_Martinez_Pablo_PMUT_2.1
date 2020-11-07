import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReyPage } from './rey.page';

describe('ReyPage', () => {
  let component: ReyPage;
  let fixture: ComponentFixture<ReyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
