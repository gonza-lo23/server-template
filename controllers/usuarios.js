const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const {validarCampos} = require('../middlewares/validar-campos');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'no name', apikey, page=1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}



const usuariosPost = async(req, res = response) => {

    validarCampos(req, res);

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});


    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        return res.status(400).json({
            msg: 'El correo ya esta registrado'
        });
    }

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en DB
    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'post API - controlador',
    });
}



const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'put Delete - controlador',
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}
