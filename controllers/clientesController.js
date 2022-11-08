import { Clientes } from "../models/ClientesModel.js";
import { check, validationResult } from 'express-validator'


const crearCliente = async (req, res) => {
    await check("nombre")
        .notEmpty()
        .withMessage("El campo Apellido es obligatorio")
        .run(req);
    await check("apellido")
        .notEmpty()
        .withMessage("El campo Apellido es obligatorio")
        .run(req);
    await check("documento")
        .notEmpty()
        .withMessage("El campo Documento es obligatorio")
        .run(req);
    await check("correo")
        .notEmpty()
        .withMessage("El campo Correo es obligatorio")
        .run(req);
    await check("direccion")
        .notEmpty()
        .withMessage("El campo Documento es obligatorio")
        .run(req);
    await check("telefono")
        .notEmpty()
        .withMessage("El campo Telefono es obligatorio")
        .run(req);

    let listadoErrors = validationResult(req);
    const { nombre, apellido, documento, correo, direccion, telefono } = req.body;


    


    const valdiarCliente = await Clientes.findOne({ where: { correo } });

    if (valdiarCliente) {
        return res.render("auth/clientes", {
            nombreVista: "Nuevo Usuario",
            errores: [{ msg: "El correo ya existe en la base de datos" }],
            usuario: {
                nombre: req.body.nombre,
                correo: req.body.correo,
            },
        });
    }

    Clientes.create({
        nombre,
        apellido,
        documento,
        correo,
        direccion,
        telefono
    })



    res.render("templates/clienteCreado", {
        nombreVista: "Confirmar Cliente"
    })
}

const fomularioCrear = (req, res) => {
    res.render("auth/clientes", {
        nombreVista: "Nuevo Usuario"
    })
}

export { crearCliente, fomularioCrear }