import express from 'express';
import usuariosRoutes from 'routes/UsuarioRoutes';

const app = express();
const port: number = 3000;

app.use(express.json());

app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
    console.log('Listening at port ' + port);
});
