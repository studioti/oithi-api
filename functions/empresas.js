import express from "express"
import server from "serverless-http"

const app = express()
const empresas = require('./data/empresas.json')

app.get('/.netlify/functions/empresas', (req, res) => {
    return res.json({empresas})
})

const handler = server(app)

module.exports.handler = async(event, context) => {
    const result = await handler(event, context)
    return result
}