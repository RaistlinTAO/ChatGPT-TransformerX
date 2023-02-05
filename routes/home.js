import express from 'express';


let homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', function (req, res, next) {
    res.render('landing.ejs', {});
});

homeRouter.get('/generate', function (req, res, next) {
    res.render('generator.ejs', {});
});

export default homeRouter;
