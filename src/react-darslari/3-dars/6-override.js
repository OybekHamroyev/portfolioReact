class Vehicle {
    constructor (year){
        this._year=year;
    }
    start(){
        console.log("the vehicle started...")
    }

    static toString(){
        console.log("toString Called..")
    }

    get year(){
        return this._year;
    }

    set year(newYear) {
        this._year=newYear;
    }

}

class Car extends Vehicle {   //Car Vehicle ni bolasi
    constructor(brand, model,year){
            super(year)
            this._brand=brand;
            this._model=model;
    }
    // start(){
    //     console.log("the Car started...")
    // }


}
let car=new Car("Lacetti", "Gentra", 2020);
car.start();   // the Car started...
car.start(); //the vehicle started... //agar bola klassda metod bulmasa, bola klass orqali chqirilsa otani metodini oladi

