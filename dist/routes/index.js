"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/who-are-you", (req, res) => {
        res.render("who-are-you");
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map