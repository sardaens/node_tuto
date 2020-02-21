const request = require('supertest')
const app = require('../server')
const sinon = require("sinon");
const nasaclient = require("../client/nasaclient");


describe('Get Endpoints', () => {

  it('should get nasa info when no error', async () => {

    //jest.setTimeout(30000);
    // const getCallNasaStub = sinon.stub(nasaclient,"callNasa").returns(true,null);

    // sync test
    const res = await request(app).get('/nasa').send();
    expect(res.statusCode).toBe(400);
/*      .send({
        userId: 1,
        title: 'test is cool',
      })
      */

  })

/*
    it('should get nasa info when no error', function(){

      const getCallNasaStub = sinon.stub(nasaclient,"callNasa").returns(true,null);

      const res = request(app)
        .get('/nasa')
  /*      .send({
          userId: 1,
          title: 'test is cool',
        })
        */
//        console.log("resultat" + res);
//      expect(res.statusCode).toEqual(400)
      // expect(res.body).toHaveProperty('date')


//    })

})
