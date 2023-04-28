write a class to calculate the uber price.

class uber{
    constructor(cars,brand,driver,passenger,perkm,numberinkm1){
        this.cars=cars;
        this.brand=brand;
        this.driver=driver;
        this.passenger=passenger;
        this.perkm=perkm;
        this.numberinkm1=numberinkm1;
        
       
        
    }
        
        get price(){
        return this.perkm*this.numberinkm1
        }
}


let uberprice=new uber('cars1','xylo','pasupathi','sumathi','25','250');

console.log(uberprice);
console.log (price());
