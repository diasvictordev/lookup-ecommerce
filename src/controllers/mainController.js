const mainController = {
    index: (req,res) => {
        res.render('index');
    },

    cadastro: (req,res) => {
        res.render('cadastro');
    },

    login: (req,res) => {
        res.render('login');
    },

    carrinho: (req,res) => {
        res.render('cart');
    },

}



module.exports = mainController;