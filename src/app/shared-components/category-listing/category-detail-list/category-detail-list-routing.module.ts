import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailListPage } from './category-detail-list.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryDetailListPageRoutingModule {}
