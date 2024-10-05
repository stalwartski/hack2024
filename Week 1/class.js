class Animal {
    constructor(name, legCount, speaks) {
        this.name = name; // attributes
        this.legCount = legCount; // attributes
        this.speaks = speaks; // attributes
    }
    characteristics() {     // functions
        console.log(this.name);
        console.log(this.legCount);
        console.log(this.speaks);
    }
}
let dog = new Animal("Lucky", 4, "bhow bhow"); // create object
dog.characteristics();  // function call on object