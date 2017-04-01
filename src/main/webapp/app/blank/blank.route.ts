import { Route } from '@angular/router';

import { BlankComponent } from './';

export const BLANK_ROUTE: Route = {
  path: 'blank',
  component: BlankComponent,
  data: {
    authorities: [],
    pageTitle: 'Blank Page'
  }
};
