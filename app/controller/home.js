'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.render('index.tpl')
  }
}

module.exports = HomeController;
