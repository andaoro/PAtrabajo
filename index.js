import express from 'express'
import { clienteRouter } from './routes/clientesRouter.js'
import { productorRouter } from './routes/productosRouter.js'
import { dataBase } from './config/dataBase.js'

const app = express()

app.use(express.urlencoded({extended:true}))

const puerto = 3000

try{
    await dataBase.authenticate()
    dataBase.sync()
    console.log('conexion exitosa a la base de datos')
}catch(error){
    console.log(error)
}

app.use('/auth', clienteRouter)
app.use('/auth', productorRouter)
app.set('view engine', 'pug')
app.set('views', './views')

app.listen(puerto,()=>{
    console.log(`servidor corriendo en el puerto ${puerto}`)
})

app.get('/test',(req, res)=>{
    res.send('<h1>Hola mundo</h1>')
})
