import express, { request } from 'express'
import chalk from 'chalk'
import Debug from 'debug'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// const path = require('path')
// const path = Path('app')
// const express = require('express')
// const chalk = require('chalk')
// const debug = require('debug')('app')

const debug = Debug('app')
const app = express()
const PORT = process.env.PORT
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const productRouter = express.Router();

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'/public/')))

app.set("views","./src/views")
app.set("view engine","ejs")

productRouter.route("/").get((req,res)=>{
    res.send("hello World i'm product ")
})
app.use("/products", productRouter)

app.get('/', (req, res) => {

    res.render('index',{username: 'Kachen Jantaket', customers:["Kachen", "Jantaket", "MEN"]});
})

app.listen(PORT, ()=>{
    debug("Listening on port " + chalk.yellow(PORT))
})