import { Productos } from "../models/ProductosModel.js";
import { check, validationResult} from 'express-validator'

const agregarProducto = async (req , res) => {
    await check("nombre")
        .notEmpty()
        .withMessage("El campo Apellido es obligatorio")
        .run(req);
    await check("Precio")
        .notEmpty()
        .withMessage("El campo Precio es obligatorio")
        .run(req);
    await check("referencia")
        .notEmpty()
        .withMessage("El campo Referencia es obligatorio")
        .run(req);
    await check("cantidad")
        .notEmpty()
        .withMessage("El campo Cantidad es obligatorio")
        .run(req);
    await check("descripcion")
        .notEmpty()
        .withMessage("El campo Descripcion es obligatorio")
        .run(req);;

    let listadoErrors = validationResult(req);
    const {nombre, precio, referencia,cantidad,descripcion} = req.body;
    
    
    Productos.create({
        nombre,
        precio,
        referencia,
        cantidad,
        descripcion
    })
    
    res.render("templates/productoAgregado",{
        nombreVista:"Producto Agregado"
    })
}

const formularioAgregar = (req, res) =>{
    res.render("auth/productos",{
        nombreVista: "Nuevo Usuario"
    })
}

export {agregarProducto,formularioAgregar}