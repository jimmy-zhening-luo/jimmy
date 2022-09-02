import * as express from "express";

export const register = (app: express.Application) => {
    app.get("/", (_req: any, res) => {
        res.render("index");
    });

    app.get("/debug", (_req: any, res) => {
        res.render("debug");
    });

    app.get("/purposeful-bork", (_req: any, res) => {
        res.render("purposeful-bork");
    });
};
