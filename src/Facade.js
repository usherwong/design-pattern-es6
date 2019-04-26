class Facade {
	constructor () {
		console.log('Facade class created')
	}
	gotoSubsystem (sub) {
		switch (sub) {
			case 'Adapter': 
				// return new Adapter()
				console.log('create Adapter object')
				break;
			case 'Factory': 
				// return new Factory()
				console.log('create Factory object')
				break;
			default : 
				console.log('something else')
		}
	}
}

let fcd = new Facade()
fcd.gotoSubsystem('Factory');