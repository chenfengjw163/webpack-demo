const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config.js')

const complier = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(complier);
const hotMiddleware = webpackHotMiddleware(complier);

const app = express();

app.use(devMiddleware);
app.use(hotMiddleware);

app.use('/', express.static('./'))


app.listen(8080, () => {
    console.log('start with: http://localhost:8080')
})