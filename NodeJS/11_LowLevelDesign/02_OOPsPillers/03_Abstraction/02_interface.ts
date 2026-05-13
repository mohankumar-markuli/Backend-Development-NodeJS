// This class can never be initialized 
interface FlyableBehaviour{
    takeOff(): void;
    land(): void;
    cruise(): void;
}

interface DriveableBehaviour {
    start(): void;
    stop(): void;
    drive(): void;
}

class Train implements DriveableBehaviour {
    
    stop(): void {
        throw new Error("Method not implemented.");
    }
    
    drive(): void {
        throw new Error("Method not implemented.");
    }

    start(): void {
        console.log(`Starting the vehicle: by injecting diesel`);
    }

}


// Elon Musk
class Tesla implements DriveableBehaviour, FlyableBehaviour {
    stop(): void {
        throw new Error("Method not implemented.");
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    takeOff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }

    start(): void {
        console.log(`Starting the vehicle: using battery`);
    }

}