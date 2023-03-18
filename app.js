const express = require('express');
const inss = require('./models/index');


const port = process.env.PORT || 3000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));





//routes
app.get('/',(req,res,next)=>{
	res.set('Content-Type', 'text/html');
	res.status(403).send('<h2> Forbidden Route You Try To Access</h2>')
});
// app.use('/api/product',productsRoutes);
// app.use('/api/category',categoryRoutes);
inss.sequelize.sync().then(()=>console.log('sdashdhjahskhjak'));
const User = require('./models/user')(inss.sequelize,inss.Sequelize.DataTypes);
const userDetails = require('./models/userdetails')(inss.sequelize,inss.Sequelize.DataTypes);

User.findByPk(1,{include:['userDetails']});

app.listen(port,()=>{
	console.log(`Listening on Port http://localhost:${port}`);
});
