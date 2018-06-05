const fs = require('fs')
const hoganJs = require('hogan.js')
const jsonfile = require('jsonfile')

const api = jsonfile.readFileSync('api.json')

const main = async () => {
	var data = []
	const loadTemplate = (name) => {
		return hoganJs.compile(fs.readFileSync(`templates/${name}.md`).toString())
	}
	const writeTemplate = (nameFile, text) => {
		return fs.writeFileSync(`source/en/${nameFile}.md`, text)
	}
	const makeMarkdown = (template, obj) => {
		return template.render(obj)
	}
	data.push({type: 'methods', list: api['Methods']})
	data.push({type: 'inline', list: []})
	data.push({type: 'types', list: []})
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
