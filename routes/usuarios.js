const { Router } = require('express');

const {usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch} = require('../controllers/usuarios');

const { check } = require('express-validator');


const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',
check('correo', 'El correo no es valido').not().isEmpty(),
check('correo', 'El correo no es valido').isEmail(),
check('password', 'El password no es valido').isLength({min: 6}),
check('rol', 'El rol no es valido').isIn('ADMIN_ROLE', 'USER_ROLE')
, usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;