class BookBuilder1 {
    constructor () {
        this.name = ''
        this.author = ''
        this.price = 0
        this.category = ''
        // 初始化属性值
        Object.keys(this).forEach(key => {
            const withName = `with${key.substring(0, 1).toUpperCase()}${key.substring(1)}`
            this[withName] = (val) => {
                this[key] = val
                return this
            }
        })
    }
    // 自动添加属性
    build () {
        const objProperty = Object.keys(this).filter(key => typeof this.key !== 'function')
        return objProperty.reduce((acc, key) => {
            return {
                ...acc,
                [key]: this[key]
            }
        }, {
            // 第一次acc的初始化数据
        })
    }
}

// 上面代码抽象一下

class BaseBuilder {
    init () {
        Object.keys(this).forEach(key => {
            const withName = `with${key.substring(0, 1).toUpperCase()}${key.substring(1)}`
            this[withName] = (val) => {
                this[key] = val
                return this
            }
        })
    }
    build () {
        const that = this
        const objProperty = Object.keys(this).filter(key => {
            return typeof that.key !== 'function'
        })
        return objProperty.reduce((acc, key) => {
            return {
                ...acc,
                [key]: this[key]
            }
        }, {
            // 第一次acc的初始化数据
        })
    }
}

class BookBuilder extends BaseBuilder {
    constructor () {
        super()
        this.name = ''
        this.author = ''
        this.price = 0
        this.category = ''
        super.init()
    }
}

const book = new BookBuilder()
  .withName("侠客行")
  .withAuthor('金庸')
  .withPrice(51)
  .withCategory('小说')
  .build()





