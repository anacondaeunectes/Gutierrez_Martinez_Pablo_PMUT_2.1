import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeiaPage } from './leia.page';

describe('LeiaPage', () => {
  let component: LeiaPage;
  let fixture: ComponentFixture<LeiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
