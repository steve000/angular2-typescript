"use strict";
var shared_1 = require('../../shared');
var error_component_1 = require('./error.component');
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
        canActivate: [shared_1.UserRouteAccessService]
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
//# sourceMappingURL=error.route.js.map