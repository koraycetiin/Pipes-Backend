import app from "../app";
import { Types } from "mongoose";
import * as request from "supertest";
import * as mongoose from "mongoose";
import { it, describe, before } from "mocha";
import { API_BASE } from "../enums/constant";

const db = require("../db");
const chai = require("chai");

describe("# Pipes ", function() {
    this.timeout(0);
    const userId = Types.ObjectId("5dd8fdc77a591b098cd721bb");

    before("Connect mongo", async function() {
        await mongoose.connect(db.mongoUri, db.options);
    });

    describe("pipes", function() {

        it("should get rooms", async function() {
            const response = await request(app)
                .get(API_BASE + "rooms")
                .query({
                    userId: userId.toString()
                });
            chai.expect(response.body).to.have.property("status");
            chai.expect(response.body.status.success).to.equal(true);
            chai.expect(response.body).to.have.property("rooms");
        });
    });
});
