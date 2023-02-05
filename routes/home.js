import express from 'express';


let homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', function (req, res, next) {
    res.render('landing.ejs', {});
});

homeRouter.get('/generate', function (req, res, next) {
    res.render('generator.ejs', {});
});

homeRouter.post('/transform', function (req, res, next) {
    req.session.resultStr = "RESULT FROM CHAT GPT";
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
