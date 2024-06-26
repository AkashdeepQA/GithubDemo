class Vehicle{
    //Properties
    #brand;
    #model;
    _temp; //property is protected
    //contructor
    constructor(manufacturer, name){
        this.#brand = manufacturer;
        this.#model = name;
    }
    //setter methods
    setBrand(manufacturer){
        this.#brand = manufacturer;
    }

    setModel(name){
        this.#model = name;
    }
    //getter methods
    getBrand(){
        return this.#brand;
    }

    getModel(){
        return this.#model;
    }
    //method
    printInfo(){
        console.log(`This is ${this.#brand} ${this.#model} car`);
    }
}

class Car extends Vehicle{
    #engineType;
    #transmission;
    #specialFeatures;

    constructor(manufacturer, name, eType, gearBox, features){
        super(manufacturer, name); //explicitly calling the base class contructor
        this.#engineType = eType;
        this.#transmission = gearBox;
        this.#specialFeatures = features;
        this.temp = 'abc';
    }

    getEngineType(){
        return this.#engineType;
    }

    getTransmission(){
        return this.#transmission;
    }

    getSpecialFeatures(){
        return this.#specialFeatures;
    }

    printInfo(){
        super.printInfo();
        console.log(`This car has following features:\n${this.#specialFeatures}\nEnginer Type is: ${this.#engineType} and Transmission is ${this.#transmission}`);
    }

    printWelcome(){
        console.log(super.getBrand() + super.getModel());
    }
}
let spcl = ['ABS', 'Sunroof', 'Airbag', 'Ventilated Seats']
let car1 = new Car('Hyundai', 'Alcazar', 'Petrol', 'Automatic', spcl);
car1.printInfo();
//console.log(car1.getEngineType())
//console.log(car1.getTransmission())
//console.log(car1.getSpecialFeatures())
