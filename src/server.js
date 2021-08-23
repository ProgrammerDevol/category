import express from 'express'
import fs from 'fs'
import path from 'path'
import {REGISTER,LOGIN} from './auth/controller.js'
import {CATEGORI} from './categories/categori.js'
import {SUBCATEGORI} from './categories/subcategories.js'
import {PRODUCT} from './categories/product.js'
import {CATEGORIGET} from './getcategori/categori.js'
import {SUBCATEGORIGET} from './getcategori/categori.js'
//import {CATEGORIPOST} from './getcategori/categori.js'
//import expres from './lib/express.js'
//const appp = new expres(req,res)
const app = express()
const port = 4400
app.post('/register',REGISTER)
app.post('/login',LOGIN)
app.post('/categories',CATEGORI)
app.post('/subcategories',SUBCATEGORI)
app.post('/product',PRODUCT)
app.get('/categories',CATEGORIGET)
app.get('/subcategories',SUBCATEGORIGET)

//app.post('/categories',CATEGORIPOST)

app.listen(port,()=>console.log('http://localhost:4400'))