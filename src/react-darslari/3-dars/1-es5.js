//hard-coding object with values
var car1 = { brand:"Volvo", model:"CX90", year:2020 }
var car2 = { brand: "Misubishi", model: "ASX", year:2016}
var car3 = {brand:"Toyota", model:"Fortuner", year:2019}

//template-function           //yuqoridagi obyeklarni yaratish funksiyasi
function Car(brand, model, year) {           //3 ta param qabul qiladi(qiymat)
    this.brand=brand;                         //ularin this.brand o'zg.larga qiymat qilib beramiz
    this.model=model;
    this.year=year;
}

var car4=new Car("BMW", "X5", 2017);         //car4 obyektini yaratish
var car5=new Car("VW", "Tiguan", 2018);
console.log(car4.brand);        //BMW          //car4 obyektidan brand xususiyatini olish
console.log(car5);             //Car {brand: "VW", model: "Tiguan", year: 2018}     //ca5 obyektini chaqirish