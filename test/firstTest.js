const assert = require('chai').assert
const first = require('../first')

describe('First testcase', () => {
    it('should return hello vardhan!!', () => {
        assert.equal(first(), 'hello vardhan!!')
    })
})