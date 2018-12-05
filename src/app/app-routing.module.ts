import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './web/layout.component';
import { FRONTEND_ROUTES } from './web/routes';
const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: FRONTEND_ROUTES
  },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
