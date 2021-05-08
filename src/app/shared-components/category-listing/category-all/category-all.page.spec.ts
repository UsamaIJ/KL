import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryAllPage } from './category-all.page';

describe('CategoryAllPage', () => {
  let component: CategoryAllPage;
  let fixture: ComponentFixture<CategoryAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
