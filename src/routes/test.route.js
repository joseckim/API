import {Router} from 'express';
const router = Router();
import {hello} from '../controllers/test.controller.js';

router.get('/test/hello',hello);
router.get('/test/hello/:abc',
     (req, res) => {
    const {abc} = req.params;
    res.status(200).json({"message":`Hola ${abc}`});
});

export default router;