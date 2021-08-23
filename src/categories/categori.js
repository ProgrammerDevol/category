import fs from 'fs'
import path from 'path'


const CATEGORI = (req, res) => {
	if(!req.headers.token) throw 'The token required!'
	let data = ""
	req.on('data', (chunk) => data += chunk)
	req.on('end', (chunk) => {
		data = JSON.parse(data)
		let {category_name} = data
		let categories = fs.readFileSync(path.join(process.cwd(),'src','database','categories.json'),"utf-8")
		categories = categories ? JSON.parse(categories) : []
		console.log(category_name)
		let categori_id = categories.length ? categories[ categories.length - 1 ].categori_id + 1 : 1
		let newcategori = { categori_id, category_name }
		categories.push(newcategori)
		fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'categories.json'), JSON.stringify(categories, null, 4))
		return res.end('finished')
	})
}

export {
	CATEGORI
}
