const assert = require('chai').assert
const superagent = require('superagent')

const server = require('../server')

describe('Server test case',() => {
    beforeEach((done) => {
        server.listen(4000,(err)=>{
            done(err)
        })
    })
    afterEach((done) => {
        server.close((err) => {
            done(err)
        })
    })

    it('should return HELLO BERKADIA !! at /',(done) => {
        superagent.get('http://localhost:4000/').end((err,res) => {
            if(err) return done(err)

            assert.equal(res.status,200)
            assert.equal(res.text,'HELLO BERKADIA !!')
            done()
        })
    })

    it('should return 404 error at /others',(done) => {
        superagent.get('http://localhost:4000/others').end((err,res) => {
            if(err){
                 assert.equal(err.message,'Not Found')
                 assert.equal(res.status,404)
                 assert.equal(res.text,'not found')
                 return done()
            } 

            done(new Error('Error test case !!'))
        })
    })
})