import { Route } from '@angular/router';

import { ChildComponent } from './child.component';

export const CHILD_ROUTE: Route = {
  path: 'child',
  component: ChildComponent,
  data: {
    authorities: [],
    pageTitle: 'Child Page'
  }
};
