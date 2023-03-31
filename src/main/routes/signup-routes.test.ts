import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/api/signup')
      .send({
        name: 'João Humberto',
        email: 'joao.humberto@example.com',
        password: 'test_password',
        password_confirmation: 'test_password'
      })
      .expect(200)
  })
})
