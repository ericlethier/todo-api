// import Todo from "./TodoModel.js";

// Require the dev-dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../api/app";

const baseUrl = "/api/v1/todos";

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
            .get(baseUrl)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("array");
              done();
            });
    });
  });

  describe("/POST todos", () => {
    it("it should CREATE a todo", (done) => {
      const todo = { description: "test task" };
      chai.request(server)
            .post(baseUrl)
            .send(todo)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("description").eql("test task");
              done();
            });
    });
  });

  describe("/POST todos", () => {
    it("it should NOT CREATE a todo", (done) => {
      chai.request(server)
            .post(baseUrl)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("errors");
              done();
            });
    });
  });

  describe("/GET todos/57ebf394a26dd314c4d66615", () => {
    it("it should GET a todo", (done) => {
      chai.request(server)
            .get(`${baseUrl}/57ebf394a26dd314c4d66615`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.not.have.property("_id");
              done();
            });
    });
  });

  describe("/GET todos/99", () => {
    it("it should not GET a todo", (done) => {
      chai.request(server)
            .get(`${baseUrl}/99`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property("name").eql("CastError");
              done();
            });
    });
  });

  describe("/PUT todos", () => {
    it("it should UPDATE a todo", (done) => {
      const todo = { completed: true };
      chai.request(server)
            .put(`${baseUrl}/57ebf394a26dd314c4d66615`)
            .send(todo)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("message").eql("Todo updated.");
              done();
            });
    });
  });

  describe("/PUT todos", () => {
    it("it should NOT UPDATE a todo", (done) => {
      const todo = { completed: true };
      chai.request(server)
            .put(`${baseUrl}/99`)
            .send(todo)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("name").eql("CastError");
              done();
            });
    });
  });

  describe("/DELETE todos/57ebf394a26dd314c4d66615", () => {
    it("it should DELETE a todo", (done) => {
      chai.request(server)
            .delete(`${baseUrl}/57ebf394a26dd314c4d66615`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("message").eql("Todo deleted.");
              done();
            });
    });
  });

  describe("/DELETE todos/99", () => {
    it("it should NOT DELETE a todo", (done) => {
      chai.request(server)
            .delete(`${baseUrl}/99`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("name").eql("CastError");
              done();
            });
    });
  });
});
