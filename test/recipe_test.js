var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
// var Recipe = require('../models').Recipe;

chai.use(chaiHttp);
chai.should();

describe("tests set up", () => {
      it("should work", (done) => {
        chai.request(app)
        .get('/api/v1/foods')
        .end((err, res) => {
          true.should.equal(true)
          expect(true).to.equal(true)
          assert(false != true)
          done();
        });
      });
    });

    describe("GET /api/v1/recipes/search?food_type=chicken", () => {
      it("should get all foods record", (done) => {
        chai.request(app)
        .get("/api/v1/recipes/search?food_type=chicken")
        .end((err, res) => {
          res.should.have.status(200);
          console.log(res.body);
          // res.body[0].should.be.a('object');
          // res.body[0].name.should.equal('pizza')
          // res.body[0].calories.should.equal(600)
          // res.body[0].should.not.have.property('createdAt')
          // res.body[0].should.not.have.property('updatedAt')
          // res.body.should.have.lengthOf(2);
          done();
        });
      });
    });
