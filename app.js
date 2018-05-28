const Koa = require('koa');
const json = require('koa-json')
const static = require('koa-static')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const route = require('./routes/index')

const app = new Koa();
// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  root: __dirname + '/views',
  default: 'hbs',
  map: { hbs: 'handlebars' }
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

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(3030, () => {
  console.log('server is running at 3030 port')
});

