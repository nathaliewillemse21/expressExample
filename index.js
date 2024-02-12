// // // console.log("Welcome to Express JS");

import express from 'express';
import path from 'path';

// // const express = require('express')
// // {Common JS }

// // Create an express app
// const app = express()
// const router = express.Router()
// app.use(router)
// const port = +process.env.PORT || 4000
// // Router

// router.get('^/$|/express ', display, (req, res) => {
//     // res.json({
//     //     status: res.statusCode,
//     //     msg: 'You\'re home'
//     })
//     res.status(200).json({
//         msg: 'You\'re home'
// })
// router.get('/about', (req, res) => {
//     res.json({
//         status: res.statusCode,
//         msg: 'About page'
//     })
// })

// router.all('*', (req, res) => {
//     res.json({
//         status: res.statusCode,
//         msg: '404 Page'
//     })
// })
// app.get('/jobTiltle')




/*
HTTP  Methods
>GET 
>POST
>PUT
>PATCH {is faster than PUT}
>DELETE
*/



// Middleware {to be more spesific}

// function display(req, res, next) {
//     console.log("Hello there");
//     next()
// }






// app.listen(port)



// router middleware
// static file
// class
// mvc (model view controller)
    

const app = express()
const router = express.Router()
app.use(
    router, express.static('./static')
)
const port = +process.env.PORT || 4000
// Router: express

router.get('^/$|/express', display, (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/about', (req, res) => {
      res.json({
          status: res.statusCode,
          msg: 'About page'
      })
  })

router.all('*', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: '404 Page'
    })
})
 function display(req, res, next) {
    console.log("Hello there");
    next()
}






app.listen(port)



























