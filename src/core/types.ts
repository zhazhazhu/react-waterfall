export interface TOptions {
  /** 装载图片的父容器 */
  container: string | Element | null
  /** 图片数据源 [{src: "xxx"}] */
  dataSource: TDataSource[]
  /** 装载img标签的外层盒子class属性，默认 waterfall-img-container */
  imgContainerClass?: string
  /** img标签的class属性，默认 waterfall-img */
  imgClass?: string
  /** 装载img标签图片底部内容盒子的class属性，默认 waterfall-bottom-container*/
  bottomContainerClass?: string
  /**每一列的宽度 */
  width?: number
  /** 水平方向展示的列数 */
  column?: number
  /** 元素水平间距 */
  gapX?: number
  /** 元素垂直间距 */
  gapY?: number
  /** 是否响应式改变布局宽度 */
  resizable?: boolean
  onClick?: (dataSource: TDataSource, index: number, event: Event) => void
  /** 传入要渲染的元素模板字符串，例如 `<div>Title</div>` */
  render?: (dataSource: TDataSource, index: number) => string
}

export interface TDataSource<T = any> {
  /** 图片url地址 */
  src?: string
  data: T
  alt?: string
}