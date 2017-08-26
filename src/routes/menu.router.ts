import { Router, Request, Response, NextFunction } from "express";
const MainMenu = require("../data/main-menu");

export class MenuRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getMainMenu(req: Request, res: Response, next: NextFunction) {
        res.send(MainMenu);
    }

    public init() {
        this.router.get("/main-menu", this.getMainMenu);
    }
}

const menuRouter = new MenuRouter();
menuRouter.init();

export default menuRouter.router;