class Car {
    constructor(brand, model,year){
        this._brand=brand;
        this._model=model;
        this._year=year;
    }
    start (){
        console.log("the car started...")
    }
}


let car = new Car("nexia", "Ravon", 2020);
car._year=2021; // yangi qiymat ham berish mumkin
console.log(car._brand); //nexia
car.start();                  // the car started
console.log(car);  //Car { _brand: 'nexia', _model: 'Ravon', _year: 2021 }

//yoki yangi xususiyat ham berish mumkin
car.color="red";
console.log(car); //Car { _brand: 'nexia', _model: 'Ravon', _year: 2021, color: 'red' } 