import React from 'react'
import {Switch} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

export default class TdSwitch extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.openMethod = this.openMethod.bind(this)
        this.closeMethod = this.closeMethod.bind(this)
        this.toggleMethod = this.toggleMethod.bind(this)
        this.showVisible = this.showVisible.bind(this)
        this.hideVisible = this.hideVisible.bind(this)
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    // 初始化周期
    componentDidMount() {
        this.initialize()
    }

    // 更新周期
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            if (this.props.value === true) {
                this.openEvent()
            }
            if (this.props.value === false) {
                this.closeEvent()
            }
        }
    }

    // 定义组件事件
    // 初始化
    initialize() {
        this.props.onInitialize && this.props.onInitialize()
    }

    // 切换开关状态
    change() {
        this.props.onChange && this.props.onChange({
            value: !this.props.value
        })
    }

    // 开关状态开启
    openEvent() {
        this.props.onOpenEvent && this.props.onOpenEvent()
    }

    // 开关状态关闭
    closeEvent() {
        this.props.onCloseEvent && this.props.onCloseEvent()
    }

    // 定义组件方法
    // 设置开关状态为开启
    openMethod() {
        this.props.onOpenMethod && this.props.onOpenMethod({
            value: true
        })
    }

    // 设置开关状态为关闭
    closeMethod() {
        this.props.onCloseMethod && this.props.onCloseMethod({
            value: false
        })
    }

    // 交替设置开关状态为开启/关闭
    toggleMethod() {
        this.props.onToggleMethod && this.props.onToggleMethod({
            value: !this.props.value
        })
    }

    // 显示
    showVisible() {
        this.props.onShowVisible && this.props.onShowVisible({
            visible: true
        })
    }

    // 隐藏
    hideVisible() {
        this.props.onHideVisible && this.props.onHideVisible({
            visible: false
        })
    }

    // 交替显示
    toggleVisible() {
        this.props.onToggleVisible && this.props.onToggleVisible({
            visible: !this.props.visible
        })
    }

    render() {
        // 属性、事件、函数
        let {visible, disabled, labelOn, labelOff, loading, size, value} = this.props
        let label = [labelOn, labelOff]
        return visible ? <Switch
            onChange={this.change}
            disabled={disabled}
            label={label}
            loading={loading}
            size={size}
            value={value}
        >
        </Switch> : null
    }
}

// 默认属性
TdSwitch.defaultProps = {
    visible: true,
    disabled: false,
    labelOn: '开',
    labelOff: '关',
    loading: false,
    size: 'medium',
    value: true
}
