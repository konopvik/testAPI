import ErrorHandler from "../models/ErrorHandler";

class ThemeDogController {
    defaultMethod() {
        // return {
        //     text: `You have reached the ${this.constructor.name} default method`
        // };
        throw new ErrorHandler(501, 'Not implemented method');
    }
}

export = new ThemeDogController();