const crowdinGlossary = require('crowdin-glossary')
const jsonfile = require('jsonfile')
const glossary = crowdinGlossary({
	project: 'desenvolvimentodebots-i18n',
	crowdinKey: process.env.crowdin_key,
	//languageCode: 'ptbr' //https://github.com/crowdin-modules/crowdin-glossary/pull/8
})

var data = jsonfile.readFileSync('api.json')
const main = async () => {
	var typeTg = []
	const addTypeTg = (obj, type) => {
		obj[type].forEach(e => {
			if (e.fields) {
				e.fields.forEach(field => {
					if (!typeTg.includes(field.field)) {
						typeTg.push(field.field)
					} else if (!typeTg.includes(field.type)) {
						typeTg.push(field.type)
					}
				})
			}
		})
	}
	addTypeTg(data, 'Types')
	addTypeTg(data, 'Methods')
	typeTg.forEach(term => glossary.add(term, 'Isso talvez não seja traduzivel'))
	glossary.upload()
}
main()
