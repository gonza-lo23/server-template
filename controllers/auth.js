const {response} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');



const login = async (req, res = response) => {

const {correo, password} = req.body;

try {

//verificar si el correo existe
const existeEmail = await Usuario.findOne({correo});
if(!existeEmail){
    return res.status(400).json({
        msg: 'El correo no existe'
    });
}

//verificar si el usuario esta activo
if(!Usuario.estado){
    return res.status(400).json({
        msg: 'El usuario esta desactivado'
    });
}

//verificar la contraseña
const validPassword = bcryptjs.compareSync(password, Usuario.password);
if(!validPassword){
    return res.status(400).json({
        msg: 'El password es incorrecto'
    });
}

//generar el JWT
const token = await generarJWT(Usuario.id);

res.json({
    msg: 'login ok',
    token
});

} catch (error) {
    console.log(error);
    return res.status(500).json({
        msg: 'Hable con el administrador'
    });
 }  
}


module.exports = {
    login
}
