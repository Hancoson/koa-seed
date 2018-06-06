const Koa = require('koa');
const json = require('koa-json')
const static = require('koa-static')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const ejs = require('ejs')

const route = require('./routes/index')

const Config = require('./config/config')

const app = new Koa();
// middlewares 数据解析
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  map: { html: 'ejs' }
}))

// routes
app.use(route.routes(), route.allowedMethods())

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(Config.port, () => {
  console.log(`server is running http://localhost:3030`)
});

