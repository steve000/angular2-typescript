"use strict";
var shared_1 = require('../shared');
var _1 = require('./');
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=home.route.js.map