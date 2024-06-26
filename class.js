class Vehicle{
    //Properties
    #brand;
    #model;
    //contructor
    constructor(manufacturer, name){
        this.#brand = manufacturer;
        this.#model = name;
        console.log('Function with same name as class');
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

let v1 = new Vehicle('Hyundai', 'Alcazar');

console.log('Vehicle brand: ' + v1.getBrand());
console.log('Vehicle Model: ' + v1.getModel());
v1.printInfo();

let v2 = new Vehicle();
v2.brand = 'Honda';
v2.model = 'Civic';
v2.printInfo()

v1.Vehicle();

//Comment 1 - added in branch 1