class Car {
    constructor(brand, model,year){
        this._brand=brand;
        this._model=model;
        this._year=year;
    }
    start (){
        console.log("the car started...");
    }
    static toString(){
        console.log("toString() called...");
    }
    
}


let car = new Car("nexia", "Ravon", 2020);
// car.toString(); bunday chqirilmaydi
Car.toString();  ///toString() called... (static- yordamida klassga boglangan buladi)