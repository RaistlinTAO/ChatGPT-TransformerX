import express from "express";
import Utils from "../utils/index.js";
import Routes from "../routes/index.js";
import path from "path";
import session from "express-session";
import helmet from "helmet";

class _ExpressService {
    initialBackend() {
        let app = express();
        app.use(helmet())
        app.disable('x-powered-by')
        app.set('views', path.join(path.resolve("./"), '/views'));
        app.set('view engine', 'ejs');
        app.use(session({
            secret: 'GPT', resave: false, saveUninitialized: true, cookie: {
                //secure: false, httpOnly: true, expires: new Date(Date.now() + 2 * 60 * 60 * 1000)
                secure: false, httpOnly: true, maxAge: 2 * 60 * 60 * 1000
            }
        }))
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use("/", express.static(path.join(path.resolve("./"), '/public')));
        Routes.setRoutes(app);
        // custom 404
        app.use((req, res, next) => {
            res.status(404).send("Sorry can't find that!")
        })
        // custom error handler
        app.use((err, req, res, next) => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })
        let server = app.listen(process.env.SERVER_BACKEND_PORT);
        Utils.Logger.printInfo('Safety Controller Backend Service Started at: ' + 'http://localhost:' + process.env.SERVER_BACKEND_PORT);
    }

}

const ExpressService = new _ExpressService();
export default ExpressService;