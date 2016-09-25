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

  describe("/GET todos/1", () => {
    it("it should GET a todo", (done) => {
      chai.request(server)
            .get("/todos/1")
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("id").eql(1);
              done();
            });
    });
  });

  describe("/GET todos/99", () => {
    it("it should not GET a todo", (done) => {
      chai.request(server)
            .get("/todos/99")
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("message").eql("Todo doesnt exist.");
              done();
            });
    });
  });
});
