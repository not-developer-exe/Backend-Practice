const app = require('./src/app'); // runs the server ;

require('./src/db/db');

app.listen(3000,()=>{
    console.log("running...");
})