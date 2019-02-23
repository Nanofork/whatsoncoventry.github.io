#!/usr/bin/env node

'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const stat = require('koa-static')

const Database = require('sqlite-async')
const handlebars = require('koa-hbs-renderer')

const app = new Koa()
const router = new Router()
app.use(handlebars({ paths: { views: `${__dirname}/views` } }))
app.use(stat('assets'))
app.use(router.routes())

const port = 8080

router.get('/', async ctx => {
	try {
        await ctx.render('index')
        } catch(err) {
		ctx.body = err.message
	}
})

router.get('/events', async ctx => {
	try {
        await ctx.render('search')
        } catch(err) {
		ctx.body = err.message
	}
})

router.get('/elements', async ctx => {
	try {
        await ctx.render('elements')
        } catch(err) {
		ctx.body = err.message
	}
})

router.get('/generic', async ctx => {
	try {
        await ctx.render('generic')
        } catch(err) {
		ctx.body = err.message
	}
})

module.exports = app.listen(port, () => console.log(`listening on port ${port}`))