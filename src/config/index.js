// 获取当前应用运行变量
const APP_ENV = process.env.VUE_APP_ENV;

const dev = require('./modules/dev');
const prod = require('./modules/prod');

const BASE = {
	dev,
	prod
};
module.exports = BASE[APP_ENV];
