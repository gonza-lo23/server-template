const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    rol: {
        type: String,
        required: true,
    }
});

module.exports = model('Rol', UsuarioSchema);