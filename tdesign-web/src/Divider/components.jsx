import React from 'react'
import {Divider} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdDivider extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.showVisible = this.showVisible.bind(this)
        this.hideVisible = this.hideVisible.bind(this)
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    // 初始化周期
    componentDidMount() {
        process.nextTick(() => {
            this.initialize()
        })
    }

    // 更新周期
    // componentDidUpdate(prevProps) {}

    // 定义组件事件
    // 初始化
    initialize() {
        this.props.onInitialize && this.props.onInitialize()
    }

    // 定义组件方法
    // 显示
    showVisible() {
        this.props.onShowVisible && !this.props.visible && this.props.onShowVisible({
            visible: true
        })
    }

    // 隐藏
    hideVisible() {
        this.props.onHideVisible && this.props.visible && this.props.onHideVisible({
            visible: false
        })
    }

    // 交替显示
    toggleVisible() {
        this.props.onToggleVisible && this.props.onToggleVisible({
            visible: !this.props.visible
        })
    }

    // 定义组件函数
    // 选择子组件位置
    /*
      请注意根据本组件元素(分割线文本）的对齐方式调整本组件以下参数、默认属性、组件属性默认值
      排列方式：column（纵向排列）、row（横向排列）
      alignItems属性（如何对齐），合法值：flex-start（居左或居上）、center（居中）、flex-end（居右或居下）
      flexWrap属性（如何换行）：合法值：nowrap（不换行）、wrap（换行，第一行在上方）、wrap-reverse（换行，第一行在下方）
    */
    childrenPosition(childrenPosition) {
        switch (childrenPosition) {
            case 'top':
                return {display: 'flex', flexDirection: 'column', alignItems: 'center'}
            case 'bottom':
                return {display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}
            case 'left':
                return {display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center'}
            case 'right':
                return {display: 'flex', flexDirection: 'row-reverse', flexWrap: 'nowrap', alignItems: 'center'}
            default:
                return
        }
    }

    // 选择子组件
    dividerChildren(childrenPosition, spacing, content) {
        switch (childrenPosition) {
            case 'top':
                return <span
                    style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginTop: spacing}}>{content}</span>
            </span>
            case 'bottom':
                return <span style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginBottom: spacing}}>{content}</span>
            </span>
            case 'left':
                return <span
                    style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginLeft: spacing}}>{content}</span>
            </span>
            case 'right':
                return <span style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginRight: spacing}}>{content}</span>
            </span>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {visible, content, align, dashed, layout, childrenPosition, spacing} = this.props
        let childrenCount = React.Children.count(this.props.children)
        return visible ? <Divider
            // style={}
            // className={}
            align={align}
            dashed={dashed}
            layout={layout}
        >
            {childrenCount ? this.dividerChildren(childrenPosition, spacing, content) : content}
        </Divider> : null
    }
}