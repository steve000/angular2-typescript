import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

// import { navbarRoute, sidebarRoute } from '../app.route';
import { errorRoute } from './';

let LAYOUT_ROUTES = [
    // navbarRoute,
    // sidebarRoute,
    ...errorRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {}
