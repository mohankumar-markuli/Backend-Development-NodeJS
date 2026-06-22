// ParkingTicket.ts
import { Vehicle } from "./Vehicle";
import { ParkingSpot } from "./ParkingSpot";

/**
 * ParkingTicket Using Simple Class.
 *
 * Mandatory:
 *  - ticketId
 *  - vehicle
 *  - parkingSpot
 *  - floorId
 *  - entryTime
 *
 * Optional:
 *  - exitTime
 *  - amountPaid
 *  - isPaid
 *  - monthlyPassId
 */

export class SimpleParkingTicket {
  private readonly ticketId: string;
  private readonly vehicle: Vehicle;
  private readonly parkingSpot: ParkingSpot;
  private readonly floorId: string;
  private readonly entryTime: Date;

  private exitTime: Date | null;
  private amountPaid: number;
  private isPaid: boolean;
  private monthlyPassId: string | null;

  constructor(
    ticketId: string,
    vehicle: Vehicle,
    parkingSpot: ParkingSpot,
    floorId: string,
    entryTime: Date,
    exitTime?: Date,
    amountPaid?: number,
    isPaid?: boolean,
    monthlyPassId?: string
  ) {
    // Fail-fast validation
    if (!ticketId || !vehicle || !parkingSpot || !floorId || !entryTime) {
      throw new Error("Missing required fields for ParkingTicket");
    }

    this.ticketId = ticketId;
    this.vehicle = vehicle;
    this.parkingSpot = parkingSpot;
    this.floorId = floorId;
    this.entryTime = entryTime;

    // Defaults applied here
    this.exitTime = exitTime ?? null;
    this.amountPaid = amountPaid ?? 0;
    this.isPaid = isPaid ?? false;
    this.monthlyPassId = monthlyPassId ?? null;
  }

  getTicketId(): string { return this.ticketId; }
  getVehicle(): Vehicle { return this.vehicle; }
  getParkingSpot(): ParkingSpot { return this.parkingSpot; }
  getFloorId(): string { return this.floorId; }
  getEntryTime(): Date { return this.entryTime; }

  getExitTime(): Date | null { return this.exitTime; }
  getAmount(): number { return this.amountPaid; }
  getMonthlyPassId(): string | null { return this.monthlyPassId; }
  isTicketPaid(): boolean { return this.isPaid; }

  setExitTime(time: Date): this {
    this.exitTime = time;
    return this;
  }

  setAmount(amount: number): this {
    this.amountPaid = amount;
    return this;
  }

  markPaid(): this {
    this.isPaid = true;
    return this;
  }
}


// Classical Programing Languages
export class ParkingTicket {
  private readonly ticketId: string;
  private readonly vehicle: Vehicle;
  private readonly parkingSpot: ParkingSpot;
  private readonly floorId: string;
  private readonly entryTime: Date;

  private exitTime: Date | null;
  private amountPaid: number;
  private isPaid: boolean;
  private monthlyPassId: string | null;

  // --- One-line overloads ---
  // Telescoping of Constructor
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date, amountPaid: number);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date, amountPaid: number, isPaid: boolean);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date, amountPaid: number, isPaid: boolean, monthlyPassId: string);

  // --- Implementation ---
  constructor(
    ticketId: string,
    vehicle: Vehicle,
    parkingSpot: ParkingSpot,
    floorId: string,
    entryTime: Date,
    exitTime?: Date,
    amountPaid?: number,
    isPaid?: boolean,
    monthlyPassId?: string
  ) {
    if (!ticketId || !vehicle || !parkingSpot || !floorId || !entryTime) {
      throw new Error("Missing required fields for ParkingTicket");
    }

    this.ticketId = ticketId;
    this.vehicle = vehicle;
    this.parkingSpot = parkingSpot;
    this.floorId = floorId;
    this.entryTime = entryTime;

    this.exitTime = exitTime ?? null;
    this.amountPaid = amountPaid ?? 0;
    this.isPaid = isPaid ?? false;
    this.monthlyPassId = monthlyPassId ?? null;
  }

    setExitTime(time: Date): this {
    this.exitTime = time;
    return this;
  }

  setAmount(amount: number): this {
    this.amountPaid = amount;
    return this;
  }

  markPaid(): this {
    this.isPaid = true;
    return this;
  }
}


const parkingTicket = new ParkingTicket("123", "Brezza" .... )
