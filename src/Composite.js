class FlightOrder {
	create () {
		console.log('create flight order')
	}
}

class HotelOrder {
	create () {
		console.log('create hotel order')
	}
}

class TotalOrder {
	constructor () {
		this.orderList = []
	}
	addOrder (order) {
		this.orderList.push(order)
		return this
	}
	create () {
		this.orderList.forEach(item => {
			item.create()
		})
		console.log('create all orders')
		return this
	}
}

let fo = new FlightOrder()
let ho = new HotelOrder()
let to = new TotalOrder()
to.addOrder(fo).addOrder(ho).create()