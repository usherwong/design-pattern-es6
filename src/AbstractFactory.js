// 抽象工厂类-抽象类
class AbstractFactory {
	constructor () {
		console.log("AbstractFactory class created")
	}
	createProductA () {
		console.log('AbstractFactory.createProductA created')
	}
	createProductB () {
		console.log('AbstractFactory.createProductB created')
	}
}

// 具体工厂类
class ConcreteFactory1 extends AbstractFactory {
	constructor () {
		super()
		console.log('ConcreteFactory1 class created')
	}
	createProductA () {
		console.log('ConcreteFactory1 create productA')
		return new ProductA1()
	}
	createProductB () {
		console.log('ConcreteFactory1 create productB')
		return new ProductB1()
	}
}

// 具体工厂类
class ConcreteFactory2 extends AbstractFactory {
	constructor () {
		super()
		console.log('ConcreteFactory2 class created')
	}
	createProductA () {
		console.log('ConcreteFactory2 create productA')
		return new ProductA2()
	}
	createProductB () {
		console.log('ConcreteFactory2 create productB')
		return new ProductB2()
	}
}


// 抽象产品类
class AbstractProductA {
	constructor () {
		console.log('AbstractProductA class created');
	}
}

class AbstractProductB {
	constructor () {
		console.log('AbstractProductB class created');
	}
}

// 具象产品类
class ProductA1 extends AbstractProductA {
	constructor () {
		super()
		console.log('ProductA1 class created');
	}
}

class ProductA2 extends AbstractProductA {
	constructor () {
		super()
		console.log('ProductA2 class created');
	}
}

class ProductB1 extends AbstractProductB {
	constructor () {
		super()
		console.log('ProductB1 class created');
	}
}

class ProductB2 extends AbstractProductB {
	constructor () {
		super()
		console.log('ProductB2 class created');
	}
}

let factory1 = new ConcreteFactory1()
let a1 = factory1.createProductA()
let b1 = factory1.createProductB()

let factory2 = new ConcreteFactory2()
let a2 = factory2.createProductA()
let b2 = factory2.createProductB()


