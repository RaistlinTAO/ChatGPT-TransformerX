import express from 'express';


let homeRouter = express.Router();

/* GET home page. */
homeRouter.get('/', function (req, res, next) {
    res.send('OK');
});

export default homeRouter;
