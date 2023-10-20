const express= require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const errorMiddleware = require('./middleware/error.js');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//const fileUpload = require("express-fileupload");
const cors = require("cors"); //cors=cross origin resource sharing. to call resources from frontend server


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
//app.use(fileUpload({useTempFiles: true}));
app.use("/",express.static("uploads")); //to access the uploads folder globally
app.use(cors());
app.use(errorMiddleware);

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    });
}

//import routes
const user = require("./controller/user");
app.use("/api/v2/user",user); //all routes defined in the "user" router will be accessible under the path "/api/v2/user". eg if the "user" router has a route defined as "/profile," it will be accessible at "/api/v2/user/profile" when a client makes a request.

//for errorhandling
app.use(ErrorHandler);


module.exports=app;