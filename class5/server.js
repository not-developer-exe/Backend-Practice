const app = require('./src/app')
const connect = require('./src/db/db')

connect()

app.listen(4001, ()=>{ console.log("Server is running on port 4001");
})