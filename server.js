
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
app.set('port', PORT);

app.all('/test', (req,res) => {
    console.log("Brian");
    
   
   
});

app.listen(PORT, function() {
  console.log('App is running on', PORT);
});