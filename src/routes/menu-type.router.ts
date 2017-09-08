import { Router, Request, Response, NextFunction } from "express";
const MenuTypes = require("../data/menu-types");

export class MenuTypeRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getMenuTypes(req: Request, res: Response, next: NextFunction) {
        res.send(MenuTypes);
    }

    public init() {
        this.router.get("", this.getMenuTypes)
    }
}

const menuTypeRouter = new MenuTypeRouter();
menuTypeRouter.init();

export default menuTypeRouter.router;