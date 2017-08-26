import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../src/app";

chai.use(chaiHttp);
const expect = chai.expect;

const menuMainMenuRoute = "/api/menu/main-menu";

describe(`GET ${menuMainMenuRoute}`, () => {

    it("responds with a json object", () => {
        return chai
            .request(app)
            .get(menuMainMenuRoute)
            .then((res) => {
                expect(res.status).to.eql(200);
                expect(res).to.be.json;
            });
    });
});