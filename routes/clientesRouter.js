import express from 'express'
import { crearCliente,fomularioCrear } from '../controllers/clientesController.js'


const clienteRouter = express.Router()


clienteRouter.post('/cliente', crearCliente)
clienteRouter.get('/cliente', fomularioCrear)


export {clienteRouter}