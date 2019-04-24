var page_dom = {}

// 子函数：处理文本
page_dom.Text = function () {
	this.insert = function (where) {
		var text = document.createTextNode(this.url)
		where.appendChild(text)
	}
}

// 子函数：处理链接
page_dom.Link = function () {
	this.insert = function (where) {
		var link = document.createElement('a')
		link.href = this.url
		link.appendChild(document.createTextNode(this.text || this.url))
		where.appendChild(link)
	}
}

// 子函数：处理图片
page_dom.Img = function () {
	this.insert = function (where) {
		var img = document.createElement('img')
		img.src = this.url
		where.appendChild(img)
	}
}

// 工厂处理函数
page_dom.factory = function (type) {
	return new page_dom[type]
}

var o = page_dom.factory('Link');
o.url = 'https://github.com/usherwong';
o.text = 'usherwong'
o.insert(document.body);