import express from 'express'
import chalk from 'chalk'
import Debug from 'debug'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import productsRouter from "./router/productsRouter"

const debug = Debug('app')
const app = express()
const PORT = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// const path = require('path')
// const path = Path('app')
// const express = require('express')
// const chalk = require('chalk')
// const debug = require('debug')('app')
// const products = require('./data/products.json');
// const productRouter = express.Router();

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'/public/')))

app.set("views","./src/views")
app.set("view engine","ejs")


app.use("/products", productsRouter)

app.get('/', (req, res) => {

    res.render('index',{username: 'Kachen Jantaket', customers:["Kachen", "Jantaket", "MEN"]});
})

app.listen(PORT, ()=>{
    debug("Listening on port " + chalk.yellow(PORT))
})

