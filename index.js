const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');


const { port, mongoUrl, secret } = config;
const app = express();


// Conectar aplicación a MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true },  (err) => {
  if (err){
      return err
  }
  console.log("conectado a mongo")
});




app.set('config', config);
app.set('pkg', pkg);

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(authMiddleware(secret));

//model
const {Burger} = require('./models/Burger.js')

// Registrar rutas
// routes(app, (err) => {
//   if (err) {
//     throw err;
//   }
// });



app.get('/burgers', (req, res) => {
  Burger.find({}, (err, burgers) => {
      res.send(burgers)
  })
  })

  // Registro de "middleware" que maneja posibles errores
  app.use(errorHandler);

  app.listen(port, () => console.log(`App listening on port ${port}`));



