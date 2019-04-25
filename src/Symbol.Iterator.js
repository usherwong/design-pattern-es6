// 一个对象如果要具备可被for...of循环调用的 Iterator 接口，就必须在Symbol.iterator的属性上部署遍历器生成方法
// 见http://es6.ruanyifeng.com/#docs/iterator

class Iterator2 {
	constructor (items) {
		this.index = 0;
		this.items = items || []
	}
	[Symbol.iterator]() {
		return this
	}
	first () {
		this.reset()
		return this.next()
	}
	next () {
		let hasNext = this.hasNext()
		return hasNext?{
			value: this.items[this.index++],
			done: false
		}:{
			done: true
		}
	}
	hasNext () {
		return this.items.length > this.index
	}
	reset () {
		this.index = 0
	}
}


let items = ["one", 2, "circle", true, "Applepie"]
let iter = new Iterator2(items)

for(let value of iter) {
	console.log('val is : ',value)
}



