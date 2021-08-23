import fs from 'fs'
import path from 'path'


const SUBCATEGORI = (req, res) => {
	if(!req.headers.token) throw 'The token required!'
	let data = ""
	req.on('data', (chunk) => data += chunk)
	req.on('end', (chunk) => {
		data = JSON.parse(data)
		let categories = fs.readFileSync(path.join(process.cwd(),'src','database','categories.json'),"utf-8")
		let subcategories = fs.readFileSync(path.join(process.cwd(),'src','database','subcategories.json'),"utf-8")
		let {sub_category_name,categori_id} = data
		categories = categories ? JSON.parse(categories) : []
		subcategories = subcategories ? JSON.parse(subcategories) : []
		//let categoryId = categories.filter(category => category.categori_id === categori_id)
		console.log(sub_category_name)
		let sub_categori_id = subcategories.length ? subcategories[ subcategories.length - 1 ].sub_categori_id + 1 : 1
		let newsubcategori = { sub_categori_id, sub_category_name,categori_id }
		console.log(categories.categori_id )
		subcategories.push(newsubcategori)
		fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'subcategories.json'), JSON.stringify(subcategories, null, 4))
		return res.end('finished')
	})
}

export {
	SUBCATEGORI
}
