class ThemeCatController {
    defaultMethod() {
        return {
            text: `You have reached the ${this.constructor.name} default method`
        };
    }
}

export = new ThemeCatController();