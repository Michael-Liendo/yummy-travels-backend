type TripType = "bus" | "ship" | "flight";

class Trip {
    id: number;
    type: TripType;
    price: number;
    city: string;
    destination: string
    date: string;
    time: string;
    arrivalDate: string;
    arrivalHour: string;

    constructor(id: number, type: TripType, price: number, city: string, destination: string, date: string, time: string, arrivalDate: string, arrivalHour: string) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.city = city;
        this.destination = destination;
        this.date = date;
        this.time = time;
        this.arrivalDate = arrivalDate;
        this.arrivalHour = arrivalHour;
    }
}

