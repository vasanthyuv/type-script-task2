abstract class Electricitybill{
    rate:number;
    units:number;

    constructor(rate:number,units:number){
        this.rate=rate;
        this.units=units;

    }

    public abstract billdetails():number;

}

class Domestic extends Electricitybill{
    
    constructor(rate:number,units:number){
        super(rate,units);
    }

    

    public billdetails(): any {
       
        var bill=(this.rate)*this.units;
        return bill;

        
    }

   


}

let bills = new Domestic(5,3);
console.log(bills.billdetails());

