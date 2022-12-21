module.exports = {
  root: true,
  // plugins: ['stylelint-order'],
  customSyntax: 'postcss-html',
  // 使用预设的 lint 包
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
    'stylelint-config-recess-order'
  ],
  // 创建自定义规则
  rules: {
    // 禁止未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep']
      }
    ],
    // 禁止未知的@规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin']
      }
    ],
    // 禁止空源码
    'no-empty-source': null,
    // 禁止使用无效的命名网格区域
    'named-grid-areas-no-invalid': null,
    // 要求或不允许使用Unicode字节顺序标记
    'unicode-bom': 'never',
    // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'no-descending-specificity': null,
    // 禁止在字体族名称列表中缺少通用字体族关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 要求在声明块的冒号之后必须有一个空格或不能有空白符（可自动修复）
    'declaration-colon-space-after': 'always-single-line',
    // 要求在声明块的冒号之前必须有一个空格或不能有空白符（可自动修复）
    'declaration-colon-space-before': 'never',
    // 要求或禁止声明块的一个尾随分号（可自动修复）
    'declaration-block-trailing-semicolon': null,
    // 要求或禁止在规则之前的空行（可自动修复）
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    // 禁止未知的单位
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx']
      }
    ],
    // style-order 样式顺序
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports'
        },
        {
          type: 'at-rule',
          name: 'media'
        },
        'rules'
      ],
      {
        severity: 'warning'
      }
    ],
    // Specify the alphabetical order of the attributes in the declaration block
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'hyphens',
      'src',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-image',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-spacing',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'content',
      'quotes',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'zoom',
      'transform',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'table-layout',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'background-clip',
      'backface-visibility',
      'resize',
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak'
    ]
  },
  // 提供glob或glob数组以忽略特定文件
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  // 重写
  overrides: [
    // {
    //   files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
    //   extends: ['stylelint-config-recommended-vue'],
    //   rules: {
    //     'keyframes-name-pattern': null,
    //     'selector-pseudo-class-no-unknown': [
    //       true,
    //       {
    //         ignorePseudoClasses: ['deep', 'global']
    //       }
    //     ],
    //     'selector-pseudo-element-no-unknown': [
    //       true,
    //       {
    //         ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
    //       }
    //     ]
    //   }
    // },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss'
      // extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue']
    }
  ]
}
