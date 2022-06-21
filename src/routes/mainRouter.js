const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/cadastro', mainController.cadastro);
router.get('/login', mainController.login);
router.get('/carrinho', mainController.carrinho);


module.exports = router;