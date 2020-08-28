import * as express from 'express';
import * as bodyParser from 'body-parser';
import { RoutesTest } from '../routes/routes_test';

class App {
    public app: express.Application;
    private routes_test: RoutesTest = new RoutesTest();
    constructor(){
        this.app = express();
        this.config();
        this.routes_test.route(this.app);
    }
    private config(){
        this.app.use( bodyParser.json() );
        this.app.use( bodyParser.urlencoded({ extended: false}) );
    }
}
export default new App().app;