// import Todo from "./TodoModel.js";

// Require the dev-dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../api/app";


chai.should();
chai.use(chaiHttp);
// Our parent block
describe("Todos", () => {
/*
  * Test the /GET route
  */
  describe("/GET todos", () => {
    it("it should GET all the todos", (done) => {
      chai.request(server)
            .get("/todos")
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("array");
              done();
            });
    });
  });
});
