### Detail Design

- Identify the attributes of the entities
- Identify the behaviours of the entities
- Identify the relationships of the entities

Approches to pick the entities

- Bottom to top
- Evaluating the flow of the system:

#### Vehicle

- RegId
- type: ENUM ["2W", "4W", "3W"]
- make
- model

---

getter and setter

Relationship:
IS-A Relationship

#### VehicleType [Not Needed]

- BMW, MARUTI

#### ParkingSpot

- SpotType Enum ["2W", "3W", "4W"]
- SpotType Enum ["S", "M", "L"]
