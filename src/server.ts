import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://node-api:swordfish7@ds343895.mlab.com:43895/node-api', {useNewUrlParser: true});

import User from '../app/models/usuario';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = express.Router();

router.route('/usuarios')

.post((req, res) => {
    var usuario = new User();

    //aqui setamos os campos do usuario (que vira do request)
    usuario.nome = req.body.nome;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;

    usuario.save((error: any) =>{
        if(error){
            res.send(error);
        }
        res.json({ message: 'Usuario'});
    })
})
.get((req, res) => {

    User.find((err: any, usuarios: any) =>{
        if(err){
            res.send(err);
        }
        res.json(usuarios);
    });
});

/* TODO - Definir futuras rotas aqui */

app.use('/api', router);

/* Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão */
router.use((req, res, next) =>{
    console.log('Algo esta acontecendo aqui...');
    next();
})

router.get('/', (req, res) => {
    res.json({ message: 'Bem vindo a API'});
});



app.listen(port);
console.log('Iniciando a aplicação na porta: ' + port);
