// const express = require('express');
// const cors = require('cors');
// const router = require('./routes/index');
// require('dotenv').config();
// const connectDB = require('./config/connectDB');
// const cookieParser = require('cookie-parser');

// const { app, server } = require('./socket/index'); // Import your socket implementation

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());

// const PORT = process.env.PORT || 8747;

// app.get('/', (request, response) => {
//     response.json({
//         message: "Server running at " + PORT
//     });
// });

// // API endpoints
// app.use('/api', router);

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("server running at " + PORT);
//     });
// }).catch(err => {
//     console.error("Failed to connect to the database", err);
// });

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./config/connectDB');
// const router = require('./routes/index');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());

// const PORT = process.env.PORT || 8747;

// app.get('/', (request, response) => {
//     response.json({
//         message: "Server running at " + PORT
//     });
// });

// app.use('/api',router)

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("server running at " + PORT);
//     });
// }).catch(err => {
//     console.error("Failed to connect to the database", err);
// });
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index')

// const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8747

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})

//api endpoints
app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("server running at " + PORT)
    })
})