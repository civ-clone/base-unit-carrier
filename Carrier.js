"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrier = void 0;
const Air_1 = require("@civ-clone/base-unit-type-air/Air");
const NavalTransport_1 = require("@civ-clone/base-unit-type-naval-transport/NavalTransport");
class Carrier extends NavalTransport_1.default {
    canStow(unit) {
        return unit instanceof Air_1.default && super.canStow(unit);
    }
    capacity() {
        return 8;
    }
}
exports.Carrier = Carrier;
exports.default = Carrier;
//# sourceMappingURL=Carrier.js.map