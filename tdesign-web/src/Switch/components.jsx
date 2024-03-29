import React from 'react'
import {Switch} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'
import {CheckIcon, CloseIcon} from 'tdesign-icons-react'

// 全局变量

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
        process.nextTick(() => {
            this.initialize()
        })
    }

    // 更新周期
    // componentDidUpdate(prevProps) {}

    // 定义组件事件
    // 初始化
    initialize() {
        this.props.onInitialize && this.props.onInitialize({
            value: this.props.value
        })
    }

    // 切换开关状态
    change() {
        this.props.onChange && this.props.onChange({
            value: !this.props.value
        })
    }

    // 定义组件方法
    // 设置开关状态为开启
    openMethod() {
        let value = true
        this.props.onOpenMethod && !this.props.value && this.props.onOpenMethod({
            value: value
        })
    }

    // 设置开关状态为关闭
    closeMethod() {
        let value = false
        this.props.onCloseMethod && this.props.value && this.props.onCloseMethod({
            value: value
        })
    }

    // 交替设置开关状态为开启/关闭
    toggleMethod() {
        let value = !this.props.value
        this.props.onToggleMethod && this.props.onToggleMethod({
            value: value
        })
    }

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
    // 选择开启时图标
    openIcon(openIcon) {
        switch (openIcon) {
            case 'none':
                return null
            case 'CheckIcon':
                return <CheckIcon/>
            default:
                return
        }
    }

    // 选择关闭时图标
    closeIcon(closeIcon) {
        switch (closeIcon) {
            case 'none':
                return null
            case 'CloseIcon':
                return <CloseIcon/>
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
            disabled,
            checkText,
            closeText,
            loading,
            size,
            value,
            switchContent,
            openIcon,
            closeIcon
        } = this.props
        let labelText = [checkText, closeText]
        let labelIcon = [this.openIcon(openIcon), this.closeIcon(closeIcon)]
        return visible ? <Switch
            onChange={this.change}
            // style={}
            className={enabledClassName && className ? className : null}
            disabled={disabled}
            label={switchContent === 'text' ? labelText : labelIcon}
            loading={loading}
            size={size}
            value={value}
        >
        </Switch> : null
    }
}