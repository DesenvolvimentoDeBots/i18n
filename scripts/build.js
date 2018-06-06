const fs = require('fs')
const mustache = require('mustache')
const jsonfile = require('jsonfile')

const api = jsonfile.readFileSync('api.json')

const main = async () => {
	var data = []
	const loadTemplate = (name) => {
		return fs.readFileSync(`templates/${name}.md`).toString()
	}
	const writeTemplate = (nameFile, text) => {
		return fs.writeFileSync(`source/en/${nameFile}.md`, text)
	}
	const makeMarkdown = (template, obj) => {
		return mustache.render(template, obj)
	}
	const lowerCase = () => {
		return function (text, render) {
			return render(text).toLocaleLowerCase()
		}
	}
	data.push({
		type: 'methods',
		list: api['Methods'],
		lowerCase: lowerCase
	})
	data.push({
		type: 'inline',
		list: [],
		lowerCase: lowerCase
	})
	data.push({
		type: 'types',
		list: [],
		lowerCase: lowerCase
	})
	api['Types'].forEach(e => {
		if (e.name.match(/^InlineQuery./)) {
			data[1].list.push(e)
		} else {
			data[2].list.push(e)
		}
	})
	data.forEach(e => {
		writeTemplate(e.type, makeMarkdown(loadTemplate(e.type), e))
	})
}
main()
