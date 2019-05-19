try {
  Object.assign(process.env, require('./.env.js'));

}
catch(ex){
  console.log(ex);
}
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);



app.get('/', (req, res, next)=> res.render(path.join(__dirname, 'index.html'), {foo: process.env.SECRET}));

app.listen(process.env.PORT || 3000);
