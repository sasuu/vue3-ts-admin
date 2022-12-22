// 此文件跟同级目录的 global.d.ts 文件一样也是全局类型声明，只不过这里存放一些零散的全局类型，无需引入直接在 .vue 、.ts 、.tsx 文件使用即可获得类型提示

type RefType<T> = T | null

type EmitType = (event: string, ...args: any[]) => void

type TargetContext = '_self' | '_blank'

interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
}

type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null

type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

type ForDataType<T> = {
  [P in T]?: ForDataType<T[P]>
}

type AnyFunction<T> = (...args: any[]) => T

// vue
type PropType<T> = VuePropType<T>

// 扩展工具类型 写类型
type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}
// 可空类型
type Nullable<T> = T | null
// 过滤空类型
type NonNullable<T> = T extends null | undefined ? never : T
// 扩展工具类型 动态对象
// 扩展key类型-> type Recordable<T = any> = Record<keyof any, T>
type Recordable<T = any> = Record<string, T>
// 扩展工具类型 只读动态对象
type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}
// 扩展工具类型 任意类型
type Indexable<T = any> = {
  [key: string]: T
}
// 扩展工具类型 深度局部类型
type DeepPartial<T> = {
  [p in keyof T]?: DeepPartial<T[P]>
}
// 延时器函数返回类型
type TimeoutHandle = ReturnType<typeof setTimeout>
// 定时器函数返回类型
type IntervalHandle = ReturnType<typeof setInterval>

// change事件接口
interface ChangeEvent extends Event {
  target: HTMLInputElement
}
// 滚轮事件接口 EventTarget 接口由可以接收事件、并且可以创建侦听器的对象实现
interface WheelEvent {
  path?: EventTarget[]
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

// function parseInt(s: string | number, radix?: number): number

// function parseFloat(string: string | number): number
