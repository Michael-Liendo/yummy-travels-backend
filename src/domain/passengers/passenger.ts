class Passenger {
    id: number;
    emailAddress: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    dob: string;
    country: string;

    constructor(id: number, emailAddress: string, name: string, lastName: string, phoneNumber: string, dob: string, country: string) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
        this.country = country;
    }
}