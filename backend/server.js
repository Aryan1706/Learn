import  express  from "express";
import  mongoose  from "mongoose";
import  bodyParser  from "body-parser";
import {itemRoutes} from "./routes/api/items.js"

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

const db = 'mongodb://localhost:27017';//databaseURL;

mongoose
        .connect(db)
        .then(()=>{console.log("Database Connected")})
        .catch(err=>{console.log("Error Encountered",err)});

//Use routes
app.use('/api/items',itemRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));