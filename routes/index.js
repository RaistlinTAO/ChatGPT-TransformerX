import homeRouter from './home.js';

const setRoutes = (app) => {
    app.use('/', homeRouter);

}

export default {
    setRoutes
};