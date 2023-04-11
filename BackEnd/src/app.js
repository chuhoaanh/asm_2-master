import express from 'express';
import routerProduct from './routers/Product';
import mongoose from 'mongoose';
import routerCategory from './routers/Category';
import routerUser from './routers/User';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api", routerProduct)
app.use("/api", routerCategory)
app.use("/api", routerUser)

mongoose.connect("mongodb://127.0.0.1:27017/new")
export const viteNodeApp = app