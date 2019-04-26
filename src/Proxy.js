class Library {
	constructor (books) {
		this.books = books
	}
	findBook (book) {
		return this.books.filter((item)=> {
			if (!book.title) {
				return console.error('输入书名')
			}
			if(book.author) {
				return item.title === book.title && item.author === book.author
			} else {
				return item.title === book.title 
			}
		})
	}
}

class LibraryProxy extends Library {
	constructor (libObj) {
		super()
		this.library = libObj
	}
	findBook (book) {
		let middleBook = this.library.findBook(book)
		if (middleBook && middleBook.length > 0) {
			return middleBook.filter((item)=> item.type !== 'forbidden')
		} else {
			return []
		}
	}
}

let books = [{
	author: '金庸',
	title: '射雕英雄传',
	type: 'history, novel'
}, {
	author: 'usher',
	title: 'science',
	type: 'science'
}, {
	author: '兰陵笑笑生',
	title: '金瓶梅',
	type: 'forbidden'
}]

const lib = new Library(books)
const proxy = new LibraryProxy(lib)
let libAdimin, customer = ''
libAdimin = lib.findBook({
	title: '金瓶梅'
})
customer = proxy.findBook({
	title: '金瓶梅'
})

console.log(libAdimin, customer)




