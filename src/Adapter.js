class Target {
	hk () { // 插入方法
		console.log('只能插入-香港插头')
	}
}

class Adaptee {
	zh () { //插入方法
		console.log('只能插入-大陆插头')
	}
}

class Adapter extends Target {
	constructor (adaptee) {
		super()
		this.adaptee = adaptee
	}
	hk () { // 重写插入方法适配香港模式
		this.adaptee.zh()
	}
}

// 示例 创建一个大陆插头
// 创建一个转换器
// 大陆插头可以调用hk()方法插入
let zh = new Adaptee()
let zhq = new Adapter(zh)
zhq.hk()