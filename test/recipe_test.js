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
