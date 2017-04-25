import { Route } from '@angular/router';

import { BlankComponent, CHILD_ROUTE } from './';

export const BLANK_ROUTE: Route = {
  path: 'blank-with-child',
  component: BlankComponent,
  data: {
    authorities: [],
    pageTitle: 'Blank Page'
  },
  children: [CHILD_ROUTE]
};
