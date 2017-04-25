"use strict";
var shared_1 = require('../../shared');
var settings_component_1 = require('./settings.component');
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
//# sourceMappingURL=settings.route.js.map