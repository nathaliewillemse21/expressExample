// console.log("Welcome to Express JS");

import express from 'express'

// const express = require('express') {Common JS}

// Create an express app
const app = express()
const port = +process.env.PORT || 4000
// Router

app.get('/', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
//     res.status(200).json({
//         msg: 'You\'re home'
})
app.get('/about', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'About page'
    })
})

app.all('*', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: '404 Page'
    })
})
// app.get('/jobTiltle')
app.listen(port)



/*
HTTP  Methods
>GET 
>POST
>PUT
>PATCH {is faster than PUT}
>DELETE
*/



































