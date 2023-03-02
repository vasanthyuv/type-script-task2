"use strict";
class Electricitybill {
    constructor(rate, units) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends Electricitybill {
    constructor(rate, units) {
        super(rate, units);
    }
    billdetails() {
        var bill = (this.rate) * this.units;
        return bill;
    }
}
let bills = new Domestic(5, 3);
console.log(bills.billdetails());
