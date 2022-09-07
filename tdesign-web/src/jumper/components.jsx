import React from 'react'
import {Jumper} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdJumper extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.showVisible = this.showVisible.bind(this)
        this.hideVisible = this.hideVisible.bind(this)
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    // 初始化周期
    componentDidMount() {
        this.initialize()
    }

    // 更新周期
    // componentDidUpdate(prevProps) {}

    // 定义组件事件
    // 初始化
    initialize() {
        this.props.onInitialize && this.props.onInitialize()
    }

    // 点击
    change() {
        this.props.onChange && this.props.onChange()
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
            variant,
            layout,
            size,
            showCurrent,
            tips,
            prevTips,
            currentTips,
            nextTips,
            disabled,
            prevDisabled,
            currentDisabled,
            nextDisabled
        } = this.props
        const enabledDisabled = {prev: prevDisabled, current: currentDisabled, next: nextDisabled}
        const enabledTips = {prev: prevTips, current: currentTips, next: nextTips}
        return visible ? <Jumper
            // style: {},
            // className: '',
            onChange={this.change}
            variant={variant}
            layout={layout}
            size={size}
            showCurrent={showCurrent}
            tips={tips ? enabledTips : tips}
            disabled={disabled ? enabledDisabled : disabled}
        /> : null
    }
}

// 默认属性
TdJumper.defaultProps = {
    visible: true,
    variant: 'text',
    layout: 'horizontal',
    size: 'medium',
    showCurrent: true,
    tips: false,
    prevTips: '上一页',
    currentTips: '当前',
    nextTips: '下一页',
    disabled: false,
    prevDisabled: true,
    currentDisabled: true,
    nextDisabled: true
}
