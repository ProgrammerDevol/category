import fs from 'fs'
import path from 'path'

const CATEGORIGET = (req,res) =>{
	let categories = fs.readFileSync(path.join(process.cwd(),'src','database','categories.json'),"utf-8")
	categories = categories ? JSON.parse(categories) : []
	let subcategories = fs.readFileSync(path.join(process.cwd(),'src','database','subcategories.json'),"utf-8")
	let getcategori = fs.readFileSync(path.join(process.cwd(),'src','database','getcategori.json'),"utf-8")
	//let categoriesget = fs.readFileSync(path.join(process.cwd(),'src','database','categorisget.json'),"utf-8")
	subcategories = subcategories ? JSON.parse(subcategories) : []
	getcategori = getcategori ? JSON.parse(getcategori) : []
	let data = undefined
	let num = 1

	let counter = 1
	let subcategori = subcategories.filter(users => users.categori_id )
	for(let i = 0;i<categories.length;i++){
		//if(subcategori)console.log(subcategori) 
			

		console.log()
		let categori = categories.find(user => user.categori_id == counter)
		counter += 1
		//cat = categori.categori_id
		let newCategori = {categorId:categori.categori_id,category_name:categori.category_name,subcategori}
		data = newCategori
		console.log(newCategori)
		getcategori.push(data)
	}	
	fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'getcategori.json'), JSON.stringify(getcategori, null, 4))
		console.log(getcategori)
	


	

	

	res.end( fs.readFileSync(path.join(process.cwd(),'src','database','getcategori.json'),"utf-8"))
}






const SUBCATEGORIGET = (req,res) =>{
	let products = fs.readFileSync(path.join(process.cwd(),'src','database','products.json'),"utf-8")
	products = products ? JSON.parse(products) : []
	let subcategories = fs.readFileSync(path.join(process.cwd(),'src','database','subcategories.json'),"utf-8")
	let subcategoriget = fs.readFileSync(path.join(process.cwd(),'src','database','getcategori.json'),"utf-8")
	//let categoriesget = fs.readFileSync(path.join(process.cwd(),'src','database','categorisget.json'),"utf-8")
	subcategories = subcategories ? JSON.parse(subcategories) : []
	subcategoriget  =  subcategoriget ? JSON.parse(subcategoriget ) : []
	let data = undefined
	let num = 1

	let counter = 1
	//let subcategori = subcategories.filter(users => users.categori_id )
	for(let i = 0;i<subcategories.length;i++){
			

		console.log()
		let categori = subcategories.find(user => user.sub_categori_id == counter)
		counter += 1
		console.log(categori)
		let newCategori = {subCategorId:categori.sub_categori_id,subCategoryName:categori.sub_category_name,products}
		data = newCategori
		console.log(newCategori)
		subcategoriget.push(data)
	}	
	fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'subcategoriget.json'), JSON.stringify(subcategoriget, null, 4))
	


	

	

	res.end( fs.readFileSync(path.join(process.cwd(),'src','database','subcategoriget.json'),"utf-8"))
}
export{
	CATEGORIGET,
	SUBCATEGORIGET,
}