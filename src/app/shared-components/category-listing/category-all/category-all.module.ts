import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryAllPageRoutingModule } from './category-all-routing.module';

import { CategoryAllPage } from './category-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryAllPageRoutingModule
  ],
  declarations: [CategoryAllPage]
})
export class CategoryAllPageModule {}
