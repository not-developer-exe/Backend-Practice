const app = require('./src/app')
require('./src/db/db')

app.listen(4000, ()=>{
    console.log('Server is running at port 4000');
    
})


