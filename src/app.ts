import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

import MenuRouter from "./routes/menu.router";
import MenuTypeRouter from "./routes/menu-type.router";

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {

        //CORS
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));
    }

    private routes(): void {
        let router = express.Router();
        this.express.use("/api/menu-type", MenuTypeRouter);
        this.express.use("/api/menu", MenuRouter);
    }
}

export default new App().express;