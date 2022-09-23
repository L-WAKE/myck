module.exports = {
	types: [
		{ value: 'feat', name: 'feat: 新增功能' },
		{ value: 'fix', name: 'fix: 修复 bug' },
		{ value: 'delete', name: 'delete: 删除功能' },
		{ value: 'style', name: 'style: 代码风格相关 （不影响运行结果）' },
		{ value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
		{ value: 'docs', name: 'docs: 文档变更' },
		{ value: 'test', name: 'test: 添加、修改测试用例' },
		{ value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
		{ value: 'revert', name: 'revert: 回滚 commit' },
		{ value: 'perf', name: 'perf: 优化/性能提升' },
		{
			value: 'build',
			name: 'build: 影响构建系统或外部依赖项的更改 （示例范围：gulp、broccoli、npm）'
		},
		{ value: 'workflow', name: 'workflow: 工作流改进' },
		{ value: 'ci', name: 'ci: 持续集成' },
		{ value: 'types', name: 'types: 类型定义文件修改' },
		{ value: 'wip', name: 'wip: 开发中' }
	],
	scopes: [
		['components', '组件相关'],
		['hooks', 'hook 相关'],
		['utils', 'utils 相关'],
		['ui', '对ui 的调整'],
		['styles', '样式相关'],
		['plugins', 'plugins修改'],
		['store', 'store修改'],
		['deps', '项目依赖'],
		['auth', '对 auth 修改'],
		['readme', 'README修改'],
		['other', '其他修改'],
		['custom', '以上都不是？我要自定义']
	].map(([value, description]) => {
		return {
			value,
			name: `${value.padEnd(30)} (${description})`
		};
	}),
	messages: {
		type: '确保本次提交遵循规范！\n选择你要提交的类型：',
		scope: '\n选择一个 scope（可选）：',
		// 选择 scope: custom 时会出下面的提示
		customScope: '请输入自定义的 scope：',
		subject: '填写简短精炼的变更描述：\n',
		body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
		breaking: '列举非兼容性重大的变更（可选）：\n',
		footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
		confirmCommit: '确认提交？'
	},
	allowBreakingChanges: ['feat', 'fix'],
	subjectLimit: 100,
	breaklineChar: '|'
};
