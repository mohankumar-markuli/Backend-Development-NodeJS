### Detail Design 
- Identify the attributes of the entities
- Identify the behaviours of the entities
- Identify the relationships of the entities


Approches to pick the entities
- Bottom to top
- Evaluating the flow of the system: 


#### Vehicle
* RegId 
* type: ENUM ["2W", "4W", "3W"]
* make
* model

-------------------
getter and setter



Relationship: 
IS-A Relationship

#### VehicleType [Not Needed]
* BMW, MARUTI 

#### ParkingSpot
* SpotType Enum ["2W", "3W", "4W"]
* SpotType Enum ["S", "M", "L", "XL"]
* isAvailable
* isUnderMaintainence
* vehicle : Vehicle
------------------------
- parkVehicle(vehicle): void
- unparkVehicle(): void
- isSpotAvaialble(): boolean

Relationship: 
- ParkingSpot HAS-A (Weak) Relationship with Vehicle


#### ParkingFloor
floorNumber: Number
parkingSpots: ParkingSpot[]
isUnderMaintainence: Boolean

-----------------------------
getAvailableSpots(SpotType): Spot
addSpot(Spot): Boolean
removeSpot(Spot): Boolean

Relationship:
- ParkingFloor HAS-A (Strong) Relationship with ParkingSpot

Q. How do we update the display panel? 
- Keep a flag like vehicle Count or have a method which can iterate over all the parkingSpots on tthe parking Floor

Q. Putting ParkingFloor under maintainance
* Keep a flag, put all the spot under maintainence. 

#### DisplayPanel
display(message): Void

<!-- 
panelId
vehicleNnumber
Floor
SpotType
numberOfAvaialbleSpots

--------------------
updateAvialability()
numberOfAvailableSpots(SpotType) -->

ParkingLot
name:
locations
parkingFloors: ParkingFloor[]
entryGate: EntryGate
exitGate: ExitGate
displayPanel: DisplayPanel

------------------
- getAvaialableSpots(): Spot[]
+ refreshDisplay() : Void
+ park(Vehicle): Ticket
+ unpark(Ticket): Ticket

RelationsShips: 
* Has-A (Strong) with ParkingFloor
* Has-A (Strong) with EntryGate
* Has-A (Strong) with ExitGate
* Has-A (weak) with DisplayPanel
* Uses-A with Vehicle
* Uses-A with Ticket


EntryGate: 
- getSpotTypeBasedOnVehicleType(Vehicle): SpotType [Enum]
+ getSpotToParkOn(SpotType): Spot
* generateParkingTicket(Vehicle, Spot): Ticket

ExitGate: 
-paymentProcessor

checkout(Ticket): Ticket / void

Relationships: 
* Has-A (Weak) Paymentprocessor
* Uses-A ticket