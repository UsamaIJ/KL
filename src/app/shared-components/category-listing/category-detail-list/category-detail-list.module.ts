import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailListPageRoutingModule } from './category-detail-list-routing.module';

import { CategoryDetailListPage } from './category-detail-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryDetailListPageRoutingModule
  ],
  declarations: [CategoryDetailListPage]
})
export class CategoryDetailListPageModule {}
