import express from 'express';
import {
    registrar, 
    perfil, 
    confirmar, 
    autenticar, 
    olvidePassword,
    comprobarToken,
    nuevoPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

//Public
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/recuperar-contra', olvidePassword);

//router.get('/recuperar-contra/:token', comprobarToken);
//router.post('/recuperar-contra/:token', nuevoPassword);

router.route('/recuperar-contra/:token').get(comprobarToken).post(nuevoPassword);

//Private
router.get('/perfil', checkAuth, perfil);


export default router;