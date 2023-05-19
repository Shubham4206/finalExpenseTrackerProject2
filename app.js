const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');


const sequelize=require('./util/database.js');



const User=require('./model/user');




const userroute=require('./routes/user');


app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.use(cors());


app.use('/user',userroute);













sequelize.sync();
app.listen(4000);











