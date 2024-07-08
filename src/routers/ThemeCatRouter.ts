import { NextFunction, Request, Response, Router } from 'express';
import ThemeCatController from './../controllers/ThemeCatController'

class ThemeCatRouter {
    private _router = Router();
    private _controller = ThemeCatController

    get router() {
        return this._router
    }

    constructor() {
        this._configure()
    }

    private _configure() {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = this._controller.defaultMethod();
                res.status(200).json(result)
            } catch (error) {
                next(error)
            }
        })
    }
}

export = new ThemeCatRouter().router;