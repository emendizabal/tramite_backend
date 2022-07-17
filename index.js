const express=require('express');
const app=express();
const cors=require('cors');
require('./config/conexion');
app.use(cors());
app.use(express.json());
//app.use('/api',require('./routers/usuarios'));
app.use('/api',require('./rutas/acceso'));
//app.use('/tipo',require('./rutas/tipo-institucion'));
//app.use('/api',require('./rutas/usuario'));
//require('./routers/usuarios');
//
///Localhost:3000/api
app.listen(3000);

//const port=(process.env.port || 3000);
/*
app.listen(app.get(port),(error)=>{
    if(error){
        console.log('error al iniciar el servidor:'+error)
    }
    else{
        console.log('servidor iniciado en el puerto:'+port)
    }
})
*/

console.log('Server on port',3000);