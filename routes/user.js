/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-28 18:01:05 
 * @version 0.0.1 
 */
const user = (router) => {
  router.get('/user', async (ctx, next) => {
    /* await ctx.render('index', {
      title: 'Hello Koa 2'
    }) */
    //ctx.body = "sdsadasd"
    await ctx.render('user', {
      title: 'Hello Koa 2',
      index: 'user'
    })
  })
}


module.exports = user