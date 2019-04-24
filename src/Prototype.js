class Prototype {
	constructor (prototype) {
		console.log("Prototype Class created");
	}
	setFeature (key, val) {
		this.key = val
	}
	clone () {
		console.log("Prototype.clone invoked");
	}
}

class ConcretePrototype1 extends Prototype {
    constructor() {
        super();
        console.log("ConcretePrototype1 created");
        this.feature = "feature 1"
    }

    clone() {
        console.log('ConcretePrototype1.clone invoked');
        let clone = new ConcretePrototype1();
        let keys = Object.keys(this);

        keys.forEach(k => clone.setFeature(k, this[k]));

        console.log("ConcretePrototype1 cloned");
        return clone;
    }
}

var proto1 = new ConcretePrototype1();
proto1.setFeature('feature', "feature 11");
var clone1 = proto1.clone();
console.log(clone1.feature);
console.log(typeof clone1);
console.log(clone1 === proto1);