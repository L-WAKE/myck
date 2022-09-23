const fs = require('fs');
const { resolve } = require('path');

// 获取当前工作目录
const appDirectory = fs.realpathSync(process.cwd());
// 从相对路径中解析绝对路径
const resolveApp = relativePath => resolve(appDirectory, relativePath);

module.exports = {
	resolveApp
};
