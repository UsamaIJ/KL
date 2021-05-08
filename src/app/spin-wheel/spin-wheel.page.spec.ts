import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpinWheelPage } from './spin-wheel.page';

describe('SpinWheelPage', () => {
  let component: SpinWheelPage;
  let fixture: ComponentFixture<SpinWheelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinWheelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinWheelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
