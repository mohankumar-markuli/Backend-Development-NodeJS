import { ParkingFloor } from "../ParkingFloor";
import { ParkingSpot } from "../ParkingSpot";
import { ParkingSpotSize, VehicleType } from "../Enum";
import { Vehicle } from "../Vehicle";
import { SpotAssignmentStrategy } from "./SpotAssignmentStrategy";

export class ZoneBasedStrategy implements SpotAssignmentStrategy {
  constructor(
    private readonly floorToZone: Map<string, string>,
    private readonly preferredZonesByVehicleType: Partial<Record<VehicleType, string[]>> = {}
  ) {}

  assignSpot(floors: ParkingFloor[], vehicle: Vehicle): ParkingSpot | null {
    const requiredSpotSize = this.getSpotSizeForVehicle(vehicle.getVehicleType());
    const preferredZones = this.preferredZonesByVehicleType[vehicle.getVehicleType()] ?? [];

    for (const zone of preferredZones) {
      const spotInZone = this.tryAssignInZone(floors, zone, requiredSpotSize);
      if (spotInZone) {
        return spotInZone;
      }
    }

    for (const floor of floors) {
      const fallbackSpot = floor.getAvailableSpotForVehicle(requiredSpotSize);
      if (fallbackSpot) {
        return fallbackSpot;
      }
    }

    return null;
  }

  private tryAssignInZone(
    floors: ParkingFloor[],
    zone: string,
    spotSize: ParkingSpotSize
  ): ParkingSpot | null {
    for (const floor of floors) {
      const floorZone = this.floorToZone.get(floor.getFloorId());
      if (floorZone !== zone) {
        continue;
      }

      const spot = floor.getAvailableSpotForVehicle(spotSize);
      if (spot) {
        return spot;
      }
    }

    return null;
  }

  private getSpotSizeForVehicle(vehicleType: VehicleType): ParkingSpotSize {
    switch (vehicleType) {
      case VehicleType.MOTORCYCLE:
      case VehicleType.BICYCLE:
        return ParkingSpotSize.SMALL;
      case VehicleType.BUS:
      case VehicleType.TRUCK:
        return ParkingSpotSize.BIG;
      case VehicleType.CAR:
      default:
        return ParkingSpotSize.COMPACT;
    }
  }
}
