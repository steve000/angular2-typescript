"use strict";
var shared_1 = require('../../shared');
var password_component_1 = require('./password.component');
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=password.route.js.map