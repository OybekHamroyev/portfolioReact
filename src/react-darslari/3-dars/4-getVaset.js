class Car {
    constructor(brand, model,year){
        this._brand=brand;
        this._model=model;
        this._year=year;
    }
    get year(){     //getter f.ya yaratamiz(yilni qiymatini oladigan)
        return this._year;
    }
    set year(newYear){    //setter yaratamiz (yilga yangi qiymat beradigan)
        this._year=newYear;
    }
}


let car = new Car("nexia", "Ravon", 2020);
car.year=2000;               //setter yordamida yangi qiymart beramiz
console.log(car.year); //2000     //getter yordamida qiymatni olamiz
console.log(car)