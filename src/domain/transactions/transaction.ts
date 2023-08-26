class Transaction {
    transactionId: number;
    routeId: number;
    price: number;
    date: string;
    ticketId: number;
    completed: boolean;

    constructor(transactionId: number, routeId: number, price: number, date: string, ticketId: number, completed: boolean) {
        this.transactionId = transactionId;
        this.routeId = routeId;
        this.price = price;
        this.date = date;
        this.ticketId = ticketId;
        this.completed = completed;
    }
}