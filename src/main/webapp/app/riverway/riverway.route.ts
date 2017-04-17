import { Route } from '@angular/router';

import { RiverWayComponent } from './';

export const RiverWayRouting: Route = {
  path: 'riverway',
  component: RiverWayComponent,
  data: {
      authorities: [],
      pageTitle: '河道水情'
  }
};
