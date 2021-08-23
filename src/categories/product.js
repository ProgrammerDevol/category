import fs from 'fs'
import path from 'path'


const PRODUCT = (req, res) => {
	if(!req.headers.token) throw 'The token required!'
	let data = ""
	req.on('data', (chunk) => data += chunk)
	req.on('end', (chunk) => {
		data = JSON.parse(data)
		let {sub_category_id,model,product_name,color,price} = data
		let products = fs.readFileSync(path.join(process.cwd(),'src','database','products.json'),"utf-8")
		products = products ? JSON.parse(products) : []
		console.log(product_name)
		let product_id = products.length ? products[ products.length - 1 ].product_id + 1 : 1
		let newProduct = {sub_category_id,product_id, product_name,color,price,model }
		products.push(newProduct)
		fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'products.json'), JSON.stringify(products, null, 4))
		return res.end('finished')
	})
}

export {
	PRODUCT
}