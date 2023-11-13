let express = require('express');

let app =express();

app.use(express.estatic(__dirname+'dist/mine-tour-soft'));

app.get('*', (req,resp)=>{
    resp.sendFile(__dirname+'dist/mine-tour-soft/index.html');
});

app.listen(process.env.PORT || 8080);