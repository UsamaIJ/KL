import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryDetailListPage } from './category-detail-list.page';

describe('CategoryDetailListPage', () => {
  let component: CategoryDetailListPage;
  let fixture: ComponentFixture<CategoryDetailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDetailListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryDetailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
