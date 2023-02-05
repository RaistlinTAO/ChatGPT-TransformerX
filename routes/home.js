import express from 'express';
import {Configuration, OpenAIApi} from "openai";

let homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', function (req, res, next) {
    res.render('landing.ejs', {});
});

homeRouter.get('/generate', function (req, res, next) {
    res.render('generator.ejs', {});
});

homeRouter.post('/transform', async function (req, res, next) {
    //req.body.keywords

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.keywords,
        temperature: 0,
        max_tokens: 3900,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(response)
    req.session.resultStr = response.data.choices[0].text;
    res.redirect('/result');
});

homeRouter.get('/result', function (req, res, next) {
    if (req.session.resultStr) {
        let resultStr = req.session.resultStr;
        req.session.resultStr = null;
        res.render('result.ejs', {resultStr},);
    } else {
        res.redirect('/generate');
    }
});

export default homeRouter;
