const {response, request} = require('express');

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

const usuariosPut = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'put API - controlador',
        nombre,
        edad
    });
}

const usuariosPost = (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'post API - controlador',
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
