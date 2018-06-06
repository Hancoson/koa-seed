/**
 * @Author: Guoxing.han 
 * @Date: 2018-06-06 17:28:52 
 * @version 0.0.1 
 */
const api = (router) => {
  router.get('/api', async (ctx, next) => {
    console.log('get:', ctx)
    ctx.response.body = { date: `ajax GET请求的数据,a=${ctx.query.a}` }
  })
  router.post('/api/p', async (ctx, next) => {
    console.log('posp:', ctx)
    ctx.response.body = { date: 'ajax POST请求的数据' }
  })
}


module.exports = api