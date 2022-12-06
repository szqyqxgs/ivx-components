import React from 'react'
import {Affix} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdAffix extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.fixedChange = this.fixedChange.bind(this)
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

    // 固定状态发生变化
    fixedChange() {
        this.props.onFixedChange && this.props.onFixedChange()
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

    render() {
        // 属性、事件、函数
        let {
            visible,
            enabledClass,
            className,
            offsetTop,
            offsetBottom,
            zIndex,
            container
        } = this.props
        return visible ? <Affix
            onFixedChange={this.fixedChange}
            // style={}
            className={enabledClass && className ? className : null}
            offsetTop={offsetTop}
            offsetBottom={offsetBottom}
            zIndex={zIndex}
            container={container}
        >
            {this.props.children}
        </Affix> : null
    }
}