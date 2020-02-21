const app = require('../server')
const supertest = require('supertest')
const request = supertest(app)

const sinon = require("sinon");
const nasaclient = require("../client/nasaclient");

// Tests :
// utilisation de sinon :
// - stub de la methode callNasa()  contenu dans le module nasaClient
//  yields permet de fournir les données de retrou du callback ,ici noter callback posse de deux parametres err, body
// - on utilise supertest pour appeler les apis définies dans les routes


describe('Get Endpoints', () => {

  afterEach(function () {
    sinon.restore();
  });

  it('should return 400 when error', async done => {

    // const getCallNasaStub = sinon.stub(nasaclient,"callNasa").returns(true,null);
    const getCallNasaStub = sinon.stub(nasaclient,"callNasa").yields(true, null );

    const res = await request
      .get('/nasa')
      .send({
        userId: 1,
        title: 'test is cool',
      })
      //.end(done);
      expect(res.statusCode).toEqual(400)
    //expect(res.body).toHaveProperty('post')
    done()
  })

  it('should return 200 when no error', async done => {

    // const getCallNasaStub = sinon.stub(nasaclient,"callNasa").returns(true,null);
    var j={"title":"titus"} ;

    const getCallNasaStub = sinon.stub(nasaclient,"callNasa").yields(false, j );

    const res = await request
      .get('/nasa')
      .send({
        userId: 1,
        title: 'test is cool',
      })
      //.end(done);
      expect(res.statusCode).toEqual(200)
      console.log(" in test case res:" + res);
      console.log(" in test case body:" + JSON.stringify(res.body));
      expect(res.body).toHaveProperty('title','titus')
      done()
  })
})
