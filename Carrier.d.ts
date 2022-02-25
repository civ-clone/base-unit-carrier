import NavalTransport from '@civ-clone/base-unit-type-naval-transport/NavalTransport';
import Unit from '@civ-clone/core-unit/Unit';
export declare class Carrier extends NavalTransport {
  canStow(unit: Unit): boolean;
  capacity(): number;
}
export default Carrier;
