import { ParkingSpot } from "./ParkingSpot";
import { ParkingSpotSize } from "./Enum";

export class ParkingFloor {
  private spots: ParkingSpot[] = [];
  private readonly floorId: string;

  constructor(floorId: string) {
    this.floorId = floorId;
  }

  addSpot(spotSize: ParkingSpotSize): void {
    this.spots.push(new ParkingSpot(`SPOT_${this.spots.length + 1}`, spotSize));
  }

  getAvailableSpotForVehicle(spotSize: ParkingSpotSize): ParkingSpot | null {
    for (const spot of this.spots) {
        if (spot.getSpotSize() === spotSize && !(spot.isOccupied() || spot.getMaintenenceStatus())) {
          return spot;
        }
      }
      return null;
  }

  isFull(): boolean {
    return this.spots.length > 0 && this.spots.every((s) => s.isOccupied());
  }

  getFloorId(): string {
    return this.floorId;
  }

  getAllSpots(): ParkingSpot[] {
    return this.spots.slice();
  }

  getMaintenenceStatus(): Boolean {
    return this.spots.reduce((oldStatus,spot)  => oldStatus && spot.getMaintenenceStatus(), true);
  }
}
