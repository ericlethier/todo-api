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

  describe("/POST todos", () => {
    it("it should CREATE a todo", (done) => {
      const todo = { description: "test task" };
      chai.request(server)
            .post("/todos")
            .send(todo)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("message").eql("Todo added.");
              done();
            });
    });
  });

  describe("/POST todos", () => {
    it("it should NOT CREATE a todo", (done) => {
      chai.request(server)
            .post("/todos")
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("errors");
              done();
            });
    });
  });

  describe("/PUT todos", () => {
    it("it should UPDATE a todo", (done) => {
      const todo = { description: "updated test task", completed: true };
      chai.request(server)
            .put("/todos/1")
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
      const todo = { description: "updated test task", completed: true };
      chai.request(server)
            .put("/todos/99")
            .send(todo)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("error").eql("Todo doesnt exist.");
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
              res.body.should.have.property("error").eql("Todo doesnt exist.");
              done();
            });
    });
  });

  describe("/DELETE todos", () => {
    it("it should DELETE a todo", (done) => {
      chai.request(server)
            .delete("/todos/1")
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("message").eql("Todo removed.");
              done();
            });
    });
  });

  describe("/DELETE todos", () => {
    it("it should NOT DELETE a todo", (done) => {
      chai.request(server)
            .delete("/todos/99")
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("error").eql("Todo doesnt exist.");
              done();
            });
    });
  });
});
