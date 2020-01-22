const express = require('express'),
      app=express(),
      lunar=require('./lunar.js');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req,res)=>{
  const moon = lunar.getMoonPhase(),
        tomorrow = lunar.getMoonPhase('tomorrow');
  res.render('index',{moon:moon, tomorrow:tomorrow});
});

app.get('*', (req, res)=>{
  res.redirect('/');
});

app.listen('7070','0.0.0.0', () => {
  console.log('running on port 8080 - quite server ctrl+c');
});
