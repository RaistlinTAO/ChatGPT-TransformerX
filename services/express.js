import express from "express";
import Utils from "../utils/index.js";
import Routes from "../routes/index.js";
import path from "path";

class _ExpressService {
    initialBackend() {
        let app = express();
        app.set('views', path.join(path.resolve("./"), '/views'));
        app.set('view engine', 'ejs');
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use("/", express.static(path.join(path.resolve("./"), '/public')));
        Routes.setRoutes(app);
        let server = app.listen(process.env.SERVER_BACKEND_PORT);
        Utils.Logger.printInfo('Safety Controller Backend Service Started at: ' + 'http://localhost:' + process.env.SERVER_BACKEND_PORT);
    }

}

const ExpressService = new _ExpressService();
export default ExpressService;