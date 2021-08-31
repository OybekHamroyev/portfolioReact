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

//Vehicle klas dan yangi klass olamiz
class Car extends Vehicle {   //Car Vehicle ni bolasi
    constructor(brand, model,year){
        //Ota klasning konstruktorini chaq. uchun super ish.di
            super(year)
            this._brand=brand;
            this._model=model;
    }

}
// inheritense (meros) metodi
let car=new Car("Lacetti", "Gentra", 2020);
car.start();   // the vehicle started otadan ishlatish mumkin
console.log(car.year);   // 2020 otadan getter ni

car.year=2021;   //otadan setter orqali qiymat berish
console.log(car);   //Car { _year: 2021, _brand: 'Lacetti', _model: 'Gentra' }
Car.toString()   /// toString Called..  //class da ishlaydi (static)


