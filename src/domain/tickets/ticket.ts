class Ticket {
    id: number;
    userId: number;
    routeId: number;
    transactionId: number;
    price: number;
    count: number;

    constructor(id: number, userId: number, routeId: number, transactionId: number, price: number, count: number) {
        this.id = id;
        this.userId = userId;
        this.routeId = routeId;
        this.transactionId = transactionId;
        this.price = price;
        this.count = count;
    }
    
}