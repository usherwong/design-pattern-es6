// 单例模式

class Singleton {
	constructor(name, hobby) {
		if(!Singleton.instance) {
			this.name = name
			this.hobby = hobby
			Singleton.instance = this
		}
		return Singleton.instance
	}
	getName () {
		return this.name
	}
	getHobby () {
		return this.hobby
	}
}

let st = new Singleton('usher', 'like apple')
let st1 = new Singleton('wong', 'like banana')
console.log(st === st1, st.getName())

// 相对复杂的单例例子
// 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制
class Store {
  constructor() {
    let store = localStorage.getItem('cache')
    if (!store) {
      store = {
        maxSize: 1024 * 1024,
        size: 0
      }
    }
    this.store = store
  }
  set(key, value, expire) {
    this.store[key] = {
      date: Date.now(),
      expire
    }
    let size = this.sizeOf(JSON.stringify(value))
    if (this.store.maxSize < size + this.store.size) {
      console.log('超了-----------');
      var keys = Object.keys(this.store);
      // 时间排序
      keys = keys.sort((a, b) => {
        let item1 = this.store[a], item2 = this.store[b];
        return item2.date - item1.date;
      });
      while (size + this.store.size > this.store.maxSize) {
        delete this.store[keys[keys.length - 1]]
      }
    }
    this.store.size += size
    this.store[key] = value
    localStorage.setItem('cache', this.store)
  }
  get(key) {
    let d = this.store[key]
    if (!d) {
        console.log('找不到该属性');
        return
    }
    if (d.expire > Date.now) {
      console.log('过期删除');
      delete this.store[key]
      localStorage.setItem('cache', this.store)
    } else {
      return d
    }
  }
  sizeOf(str, charset) {
    var total = 0,
      charCode,
      i,
      len;
    charset = charset ? charset.toLowerCase() : '';
    if (charset === 'utf-16' || charset === 'utf16') {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0xffff) {
          total += 2;
        } else {
          total += 4;
        }
      }
    } else {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0x007f) {
          total += 1;
        } else if (charCode <= 0x07ff) {
          total += 2;
        } else if (charCode <= 0xffff) {
          total += 3;
        } else {
          total += 4;
        }
      }
    }
    return total;
  }
}

let instanceStore = new Store()
instanceStore.set('a', 1)
instanceStore.get('a')
