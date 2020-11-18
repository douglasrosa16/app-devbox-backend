//const request = require('supertest');
//const app = require('./server');

test('soma dois numeros', async() => {
    await expect(1 + 1).toBe(2)
})
/*describe('Simple Test', () => {
    it('should get main route', async () => {
        const res = await request(app).get('/users')
       
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    })
})
*/