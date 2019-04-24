class Page_dom {
	constructor (url) {
		this.url = url
	}
	insert () {
		console.log('overwrite')
	}
	static factory (type) {
		return new Page_dom[type]()
	}
}

Page_dom.Text = class Text extends Page_dom {
	constructor(url) {
		super(url)
	}
	insert (where) {
		var text = document.createTextNode(this.url)
		where.appendChild(text)
	}
}

Page_dom.Link = class Link extends Page_dom {
	constructor(url, text) {
		super(url)
		this.text = text
	}
	insert (where) {
		var link = document.createElement('a')
		link.href = this.url
		link.appendChild(document.createTextNode(this.text || this.url))
		where.appendChild(link)
	}
}

Page_dom.Img = class Img extends Page_dom {
	constructor(url) {
		super(url)
	}
	insert (where) {
	 	var img = document.createElement('img')
		img.src = this.url
		where.appendChild(img)
	}
}

let o = Page_dom.factory('Link')
o.url = 'github.com/usherwong'
o.text = 'usherwong'
o.insert(document.body)