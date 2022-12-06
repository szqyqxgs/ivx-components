import React from 'react'
import {Alert} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'
import {
    CheckCircleFilledIcon,
    CloseCircleFilledIcon,
    ErrorCircleFilledIcon,
    HelpCircleFilledIcon,
    InfoCircleFilledIcon,
    MinusCircleFilledIcon
} from 'tdesign-icons-react'

// 全局变量

export default class TdAlert extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
        this.close = this.close.bind(this)
        this.closed = this.closed.bind(this)
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

    // 点击
    click() {
        this.props.onClick && this.props.onClick()
    }

    // 点击关闭按钮
    close() {
        this.props.onClose && this.props.onClose()
    }

    // 警告框关闭
    closed() {
        this.props.onClosed && this.props.onClosed()
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
    // 选择图标
    icon(icon) {
        switch (icon) {
            case 'default':
                return null
            case 'CheckCircleFilledIcon':
                return <CheckCircleFilledIcon/>
            case 'CloseCircleFilledIcon':
                return <CloseCircleFilledIcon/>
            case 'ErrorCircleFilledIcon':
                return <ErrorCircleFilledIcon/>
            case 'HelpCircleFilledIcon':
                return <HelpCircleFilledIcon/>
            case 'InfoCircleFilledIcon':
                return <InfoCircleFilledIcon/>
            case 'MinusCircleFilledIcon':
                return <MinusCircleFilledIcon/>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {
            visible,
            enabledClass,
            className,
            theme,
            icon,
            message,
            maxLine,
            title,
            enabledOperation,
            operationText,
            closeButton,
            closeText
        } = this.props
        let close = closeButton === 'icon' ? true : closeButton === 'text' ? closeText : false
        const operation = <span>{operationText}</span>
        return visible ? <Alert
            onClick={this.click}
            onClose={this.close}
            onClosed={this.closed}
            // style={}
            className={enabledClass && className ? className : null}
            theme={theme}
            icon={this.icon(icon)}
            message={message}
            maxLine={maxLine}
            title={title}
            operation={enabledOperation && operationText ? operation : null}
            close={close}
        /> : null
    }
}