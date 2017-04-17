import { Route } from '@angular/router';

import { ReservoirComponent } from './';

export const RESERVOIR_ROUTE: Route = {
  path: 'reservoir',
  component: ReservoirComponent,
  data: {
		authorities: [],
		pageTitle: '水库水情'
  }
};
