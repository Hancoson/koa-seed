/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-28 18:01:05 
 * @version 0.0.1 
 */
const router = require('koa-router')()

const user = require('./user')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2',
    index: 'index'
  })
})


user(router)

router.all('/*', async (ctx, next) => {
  ctx.response.status = 404;
  ctx.response.body = '<h1>404 Not Found</h1>';
});

module.exports = router