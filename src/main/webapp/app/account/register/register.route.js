"use strict";
var shared_1 = require('../../shared');
var register_component_1 = require('./register.component');
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'Registration'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=register.route.js.map