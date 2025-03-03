import express from "express"
import server from "serverless-http"

const app = express()
const cases = require('./data/cases.json')

app.get('/.netlify/functions/cases', (req, res) => {
    return res.json({cases})
})

const handler = server(app)

module.exports.handler = async(event, context) => {
    const result = await handler(event, context)
    return result
}