module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'perf', // 性能优化
        'style', // 代码格式
        'docs', // 文档变更
        'test', // 添加疏漏测试或已有测试改动
        'refactor', // 代码重构
        'build', // 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
        'ci', // 修改 CI 配置、脚本
        'chore', // 对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)
        'revert', // 回滚 commit
        'wip', // 正在开发中
        'workflow', // 工作流程改进
        'types', // 类型定义文件修改
        'release' // 发布
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
