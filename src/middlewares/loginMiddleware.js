const { body } = require('express-validator');

module.exports = [
    body('email')
        .notEmpty().withMessage('Preencha o campo Email'),
    body('password')
        .notEmpty().withMessage('Preencha o campo Senha')
]        