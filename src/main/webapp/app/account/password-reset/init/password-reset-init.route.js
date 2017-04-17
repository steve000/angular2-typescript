"use strict";
var shared_1 = require('../../../shared');
var password_reset_init_component_1 = require('./password-reset-init.component');
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=password-reset-init.route.js.map