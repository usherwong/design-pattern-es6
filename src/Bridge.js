// 桥接模式

// 例子1

// 抽象类
class Dialog {
	constructor (animation) {
		this.animation = animation
	}
	show () {
		this.animation.show()
	}
}


// 具体实现类
class ErrorDialog {
	show () {
		console.log('show ErrorDialog')
	}
}

class MessageDialog {
	show () {
		console.log('show MessageDialog')
	}
}

const msg = new Dialog(new MessageDialog())
const err = new Dialog(new ErrorDialog())

msg.show()
err.show()

// 例子2
// 抽象部分
const each = (arr, cb) => {
	if (!Array.isArray(arr)) return
	const length = arr.length
	for (var i = arr.length - 1; i >= 0; i--) {
		let val = arr[i]
		cb(val, i)
	}
}

let arr = [1, 2, 3, 4];
// 现实
const cb = (val, i) => console.log('val is : ', val)

each(arr, cb)

