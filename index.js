console.log('This is a testrun.')

const express = require('express')

express()
    .get('/', onhome)
    .get('/about', onabout)
    .get('/test', onatest)

    .use(express.static('static'))
    .set('view engine', 'ejs')
    .set('views', 'views')


    .listen(420)

    function onhome(req, res) {
        res.send('<h1>This is a testrun.</h1>')
    }

    function onabout(req, res) {
        res.send('<h1>About me</h1>')
    }

    function onatest(req, res){
        res.render ('test.ejs') 
    }