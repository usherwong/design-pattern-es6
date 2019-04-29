// 非享元模式

class iPhoneBad {
	constructor (model, screen, memory, SN) {
		[this.model, this.screen, this.memory, this.SN] = arguments
	}
}

var phones = [];
for (let i = 0; i < 10000; i++) {
    var memory = i % 2 == 0 ? 16 : 32;
    phones.push(new iPhoneBad("iphone6s", 5, memory, i));
}

// 享元模式
class iPhoneFlyweight {
	constructor(model, screen, memory) {
		[this.model, this.screen, this.memory] = arguments
	}
}

let counst = 0

const flyweightFactory = (function () {
	let iphone = {}
	return {
		get: function (model, screen, memory) {
			let key = model + screen + memory
			if (iphone[key]) {
				return iphone[key]
			} else {
				console.log(counst++)
				iphone[key] = new iPhoneFlyweight(model, screen, memory)
				return iphone[key]
			}
		}
	}
})()

class iPhone {
	constructor (model, screen, memory, SN ) {
		this.flyWeight = flyweightFactory.get(model, screen, memory)
		this.SN = SN
	}
}

var iphones = []
for (var i = 0; i < 10000; i++) {
	var memory = i % 2 == 0 ? 16 : 32;
	iphones.push(new iPhone("iphone6s", 5, memory, i))
}

// 通过如下方式计算占用内存空间
function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

roughSizeOfObject(phones)
// result: 400000
roughSizeOfObject(iphones)
// result: 80064
// 结论
// 享元模式可以节省一个数量级的内存占用
// 通过Chrome内存堆占用情况为 ../assets/diff.png
// 分别为640194vs480192 bite






