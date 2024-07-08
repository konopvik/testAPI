import { Router } from 'express'
import ThemeCatRouter from './ThemeCatRouter'
import ThemeDogRouter from './ThemeDogRouter'

class MasterRouter {
    private _router = Router();
    private _subrouterCat = ThemeCatRouter
    private _subrouterDog = ThemeDogRouter

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.use('/cat', this._subrouterCat)
        this._router.use('/dog', this._subrouterDog)
    }
}

export = new MasterRouter().router;