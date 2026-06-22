import { ParkingFloor } from "../ParkingFloor";
import { ParkingSpot } from "../ParkingSpot";
import { Vehicle } from "../Vehicle";

export interface SpotAssignmentStrategy {
  assignSpot(floors: ParkingFloor[],spotType: SpotTy): ParkingSpot | null;
}
