import express from "express";
import session from "express-session";
import cors from 'cors';
import dotenv from 'dotenv';

// import Routes
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import AddressRoute from "./routes/AddressRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import DeliveryMethodRoute from "./routes/DeliveryMethodRoute.js";
import PaymentMethodRoute from "./routes/PaymentMethodRoute.js";
import BlogRoute from "./routes/BlogRoute.js";
import StoreRoute from "./routes/StoreRoute.js";
import ItemRoute from "./routes/ItemRoute.js";
import ItemImageRoute from "./routes/ItemImageRoute.js";
import AttributRoute from "./routes/AttributRoute.js";
import CartRoute from "./routes/CartRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import OrderDetailRoute from "./routes/OrderDetailRoute.js";


// define & query database
import database from "./config/Database.js";

(async()=>{
    await database.sync();
})();

dotenv.config()

const app = express()

app.listen(process.env.app_PORT, ()=>{
    console.log('server berjalan...')
})

var corsOptions = {
    origin: ["http://localhost:3000","http://localhost:4000"],
    Credential: true,
    optionsSuccessStatus: 200 // For legacy browser support
    }

app.use(cors(corsOptions))

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(express.json())

// use Route
app.use(UserRoute);
app.use(AuthRoute);
app.use(CategoryRoute);
app.use(DeliveryMethodRoute);
app.use(PaymentMethodRoute);
app.use(BlogRoute);
app.use(StoreRoute);
app.use(ItemRoute);
app.use(ItemImageRoute);
app.use(AttributRoute);
app.use(AddressRoute);
app.use(CartRoute);
app.use(OrderRoute);
app.use(OrderDetailRoute);