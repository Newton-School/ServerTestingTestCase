const chai=require('chai')
//const server = require('./index.js')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

describe('loading express', ()=> {
    it("return list of blog", (done) => {
        chai.request("http://localhost:3000/").get("/").end((err, res) => {
            if(err){
                console.log(err)
                return
            }
            res.should.have.property('status');
            done();
        })
    })
})