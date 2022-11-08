import express from 'express'
import { agregarProducto,formularioAgregar } from '../controllers/productosController.js'


const productorRouter = express.Router()

productorRouter.post('/producto', agregarProducto)
productorRouter.get('/producto',formularioAgregar)

export {productorRouter}