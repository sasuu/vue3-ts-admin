const { defineConfig } = require('eslint-define-config')
// 通过defineConfig声明配置，让配置可以有语法提示
module.exports = defineConfig({
  // eslintrc.js 文件所在的目录为root目录
  // eslint 规则将对这个目录以及该目录下所有文件起作用
  root: true,
  // 让vue3.2中的这些全局函数能正常使用
  globals: {
    // Ref sugar (take 2)
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',

    // index.d.ts
    // global.d.ts
    Fn: 'readonly',
    PromiseFn: 'readonly',
    RefType: 'readonly',
    LabelValueOptions: 'readonly',
    EmitType: 'readonly',
    TargetContext: 'readonly',
    ComponentElRef: 'readonly',
    ComponentRef: 'readonly',
    global: 'readonly',
    ForDataType: 'readonly',
    ComponentRoutes: 'readonly',

    // script setup
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    whitDefaults: 'readonly'
  },
  // 启用的脚本执行环境
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // // 设置vue-eslint-parser作为vue语法解析器,该解析器应在上层，防止被覆盖
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 此解析器选项由vue-eslint-parser提供，用来设置其他解析器
    // 设置@typescript-eslint/parser作为ts语法解析器
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    // 设置项目模块类型为ECMAScript 模块
    sourceType: 'module',
    // 额外支持jsx，tsx语法
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  // // 加载插件
  plugins: ['prettier'],
  // 加载默认规则配置。可省略eslint-config-前缀
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  // 自定义规则
  rules: {
    /**
     * ts 详细规则：https://typescript-eslint.io/rules/
     * 中文 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/config/rules/typescript.json
     */
    // 函数返回值必须与声明的类型一致
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 禁止使用 any
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁止使用 require 来引入模块
    '@typescript-eslint/no-var-requires': 'off',
    // 不允许有空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 禁止在定义变量之前就使用它
    'no-use-before-define': 'off',
    // 禁止在定义变量之前就使用它
    '@typescript-eslint/no-use-before-define': 'off',
    // 禁止使用 @ts-ignore @ts-nocheck @ts-check
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止使用指定的类型
    '@typescript-eslint/ban-types': 'off',
    // 禁止使用 non-null 断言（感叹号）
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 导出的函数或类中的 public 方法必须定义输入输出参数的类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 已定义的变量必须使用
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    // 禁止未使用过的变量
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': 'off',

    // vue 详细规则：https://eslint.vuejs.org/rules/
    // 对自定义事件名称强制实施特定大小写
    'vue/custom-event-name-casing': 'off',
    // 强制属性的顺序
    'vue/attributes-order': 'off',
    // 强制每个组件都应该在自己的文件中
    'vue/one-component-per-file': 'off',
    // 要求或不允许在标记的结束括号之前有换行符
    'vue/html-closing-bracket-newline': 'off',
    // 强制执行每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    // 在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': 'off',
    // 强制在单行元素的内容之前和之后使用换行符
    'vue/singleline-html-element-content-newline': 'off',
    // 在模板中的自定义组件上执行属性命名样式
    'vue/attribute-hyphenation': 'off',
    // props需要默认值
    'vue/require-default-prop': 'off',
    // 由$emit()触发的事件名称需要定义在emits:[]选项中
    'vue/require-explicit-emits': 'off',
    // 执行自闭的风格
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 要求组件名称始终为多字
    'vue/multi-word-component-names': 'off',
    // 不允许使用v-html来防止跨站攻击XSS
    'vue/no-v-html': 'off',
    'prettier/prettier': 'error'
  }
})
