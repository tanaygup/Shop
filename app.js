const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoute = require('./routes/shop');

app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoute);

app.use((req,res,next)=>{
 res.status(404).send('<h1> page not found</h1>');
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});
