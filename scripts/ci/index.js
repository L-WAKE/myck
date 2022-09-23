const ci = require('miniprogram-ci');
const { resolveApp } = require('./utils/resolve');
// 从 package.json 中读取 version，description 和 uploadKey
// eslint-disable-next-line import/no-dynamic-require
let { version, description: desc } = require(resolveApp('package.json'));
// 读取小程序 appid
// eslint-disable-next-line import/no-dynamic-require
let { appid } = require(resolveApp('dist/build/mp-weixin/project.config.json'));

if (!version) version = '0.0.1';
if (!desc) desc = `${new Date()}上传`;
if (!appid) appid = 'touristid';

// 创建项目对象
const project = new ci.Project({
	appid, // 小程序appid
	type: 'miniProgram', // 类型，小程序或小游戏
	projectPath: resolveApp('dist/build/mp-weixin'), // 项目路径
	privateKeyPath: resolveApp(`scripts/ci/key/private.${appid}.key`), // 密钥路径
	ignores: ['node_modules/**/*'] // 忽略的文件
});
// 调用上传方法
ci.upload({
	project,
	version,
	desc,
	setting: {
		es6: true, // 是否 "es6 转 es5"
		minify: true // 是否压缩代码
	}
})
	.then(res => {
		console.log(res);
		console.log('上传成功');
	})
	.catch(error => {
		if (error.errCode === -1) {
			console.log('上传成功');
		}
		console.error(error);
		console.error('上传失败');
		process.exit(-1);
	});
