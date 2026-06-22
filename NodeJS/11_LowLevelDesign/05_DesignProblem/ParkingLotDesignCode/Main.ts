import { ParkingLot } from "./ParkingLot";
import { ParkingFloor } from "./ParkingFloor";
import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "./Vehicle";
import { EntryPanel } from "./EntryPanel";
import { ExitPanel } from "./ExitPanel";
import { ParkingSpotSize } from "./Enum";
import { VehicleType } from "./Enum";
import { RazorPayGateway } from "./PaymentProcessor";

// ------------------------------
// Create Panels
// ------------------------------
const entryPanel = new EntryPanel();
const pg = new RazorPayGateway()
const exitPanel = new ExitPanel(pg);

// ------------------------------
// Create Parking Lot
// ------------------------------
const parkingLot = new ParkingLot(
  "PL1",
  "Downtown Parking",
  "123 Main St",
  5,
  entryPanel,
  exitPanel
);

// ------------------------------
// Create Parking Floors
// ------------------------------
const floor1 = new ParkingFloor("F1");
const floor2 = new ParkingFloor("F2");
const floor3 = new ParkingFloor("F3");
const floor4 = new ParkingFloor("F4");

// ------------------------------
// Create Parking Spots
// ------------------------------
[floor1, floor2, floor3, floor4].forEach((floor) => {
  for (let i=0; i< 10; i++) {
    floor.addSpot(ParkingSpotSize.SMALL);
    floor.addSpot(ParkingSpotSize.MEDIUM);
    floor.addSpot(ParkingSpotSize.COMPACT);
    floor.addSpot(ParkingSpotSize.MEDIUM);  
  }
});

// ------------------------------
// Add Floors to Parking Lot
// ------------------------------
parkingLot.addParkingFloor(floor1);
parkingLot.addParkingFloor(floor2);
parkingLot.addParkingFloor(floor3);
parkingLot.addParkingFloor(floor4);

// ------------------------------
// Create Vehicles
// ------------------------------
const vehicle1 = new Vehicle("V1", VehicleType.BICYCLE);
const vehicle2 = new Vehicle("V2", VehicleType.TRUCK);
const vehicle3 = new Vehicle("V3", VehicleType.BUS);
const vehicle4 = new Vehicle("V4", VehicleType.MOTORCYCLE);

// ------------------------------
// Park Vehicles
// ------------------------------
const ticket1 = parkingLot.parkVehicle(vehicle1);
const ticket2 = parkingLot.parkVehicle(vehicle2);
const ticket3 = parkingLot.parkVehicle(vehicle3);
const ticket4 = parkingLot.parkVehicle(vehicle4);

// ------------------------------
// Exit Vehicles
// ------------------------------
parkingLot.exitVehicle(ticket1);
parkingLot.exitVehicle(ticket2);
parkingLot.exitVehicle(ticket3);
parkingLot.exitVehicle(ticket4);
