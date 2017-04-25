"use strict";
var GatewayRoute = (function () {
    function GatewayRoute(path, serviceId, serviceInstances) {
        this.path = path;
        this.serviceId = serviceId;
        this.serviceInstances = serviceInstances;
    }
    return GatewayRoute;
}());
exports.GatewayRoute = GatewayRoute;
//# sourceMappingURL=gateway-route.model.js.map