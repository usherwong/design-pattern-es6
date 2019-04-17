// 创建人类
// class Man {
// 	constructor(def = 2, atc = 3, hp = 3){
// 		init(def, atc, hp)
// 	}
// 	init (def, atc, hp) {
// 		this.def = def
// 		this.atc = atc
// 		this.hp = hp
// 	}
// 	toString () {
// 		return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`
// 	}
// }

// var tony = new Man();
// console.log(`当前状态 ===> ${tony}`); 

// 装饰盔甲, 增加防御
// 纯粹的装饰模式，它并不增加对原有类的接口
// 见http://es6.ruanyifeng.com/#docs/decorator
function decorateArmour (target, name, descriptor) {
	const method = descriptor.value
	let moreDef = 100;
  	let ret;
	descriptor.value = (...args) => {
		args[0] += moreDef
		ret = method.apply(target, args)
		return ret
	}
}

// 装饰手套，增强攻击
// 纯粹的装饰模式，它并不增加对原有类的接口
function decorateLight (target, name, descriptor) {
	const method = descriptor.value
	let moreAtc = 50
	let ret 
	descriptor.value = (...args) => {
		args[1] += moreAtc
		ret = method.apply(target, args)
		return ret
	}
}

// 装饰飞行
// 半透明的装饰模，相当于给类新增一个方法
function decorateFly (canfly) {
	return function (target) {
		target.canfly = canfly
		let extra = canfly ? '(技能加成:飞行能力)' : '';
		let method = target.prototype.toString
		target.prototype.toString = (...args) => {
			return method.apply(target.prototype, args) + extra
		}
		return target
	}
}

// 装饰Man之后就是这样的
@decorateFly(true)
class Man {
	constructor(def = 2, atc = 3, hp = 3){
		this.init(def, atc, hp)
	}
	@decorateArmour
	@decorateLight
	init (def, atc, hp) {
		this.def = def
		this.atc = atc
		this.hp = hp
	}
	toString () {
		return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`
	}
}

var tony = new Man();
console.log(`当前状态 ===> ${tony}`); 

