// 迭代器类
class Iterator {
	constructor (items) {
		this.index = 0;
		this.items = items || []
	}
	first () {
		this.reset()
		return this.next()
	}
	next () {
		return this.items[this.index++]
	}
	hasNext () {
		return this.items.length >= this.index
	}
	reset () {
		this.index = 0
	}
	each (cb) {
		for(let i = this.first(); this.hasNext(); i = this.next()) {
			cb(i)
		}
	}
}

// log helper
let log = (function () {
	let log = ''
	return {
		add: function (item) {
			log += `***${item}***\n`
		},
		show: function () {
			console.log(log)
		},
		reset: function () {
			log = 0
		}
	}
})()


let items = ["one", 2, "circle", true, "Applepie"]
let iter = new Iterator(items)
iter.each(item => {
	log.add(item)
})
log.show()






