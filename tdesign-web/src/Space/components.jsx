import React from 'react'
import {Divider, Space} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdSpace extends React.Component {

    // 绑定事件和方法
    /*
    constructor(props) {
        super(props)
    }
    */

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
    // 选择分隔符函数
    separator(separator) {
        let {delimiter, dividerAlign, dashed, layout, content} = this.props
        switch (separator) {
            case 'none':
                return null
            case 'delimiter':
                return delimiter
            case 'divider':
                return <Divider align={dividerAlign} dashed={dashed} layout={layout}>{content}</Divider>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {
            visible,
            enabledClassName,
            className,
            align,
            direction,
            breakLine,
            size,
            separator
        } = this.props
        return visible ? <Space
            // style={}
            className={enabledClassName && className ? className : null}
            align={align}
            direction={direction}
            breakLine={breakLine}
            size={size}
            separator={this.separator(separator)}
        >
            {this.props.children}
        </Space> : null
    }
}