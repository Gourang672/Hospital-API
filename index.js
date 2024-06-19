import express from 'express';
import bodyParser from 'body-parser';
// importing the rotes 
import { router } from './src/routes/router.js';
//importing database
import { DB } from './src/config/mongoose.js';
//creating server instance
const app = express();
//useing body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//using router
app.use(router);
//creating server
const PORT =process.env.PORT ||4000
app.listen(PORT, () => {
    console.log('server listening on Url: ' +'http://localhost:4000');
    DB();
});