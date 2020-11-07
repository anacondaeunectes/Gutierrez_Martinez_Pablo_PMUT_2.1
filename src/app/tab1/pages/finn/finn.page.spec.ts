import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinnPage } from './finn.page';

describe('FinnPage', () => {
  let component: FinnPage;
  let fixture: ComponentFixture<FinnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
