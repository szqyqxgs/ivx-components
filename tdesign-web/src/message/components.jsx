import React from 'react'
import {MessagePlugin} from 'tdesign-react'
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
let messageList = []

export default class TdMessage extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.closeAll = this.closeAll.bind(this)
        this.closeFirst = this.closeFirst.bind(this)
        this.closeLast = this.closeLast.bind(this)
        this.openMessagePlugin = this.openMessagePlugin.bind(this)
        this.closeBtnClick = this.closeBtnClick.bind(this)
        this.durationEnd = this.durationEnd.bind(this)
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
        let {icon, closeButton, closeText, placement, offsetX, offsetY, attach, zIndex} = this.props
        let closeBtn = closeButton === 'icon' ? true : closeButton === 'text' ? closeText : false
        MessagePlugin.config({
            // style: {},
            // className: '',
            onCloseBtnClick: this.closeBtnClick,
            onDurationEnd: this.durationEnd,
            icon: this.icon(icon),
            closeBtn: closeBtn,
            placement: placement,
            offset: [offsetX, offsetY],
            attach: attach,
            zIndex: zIndex
        })
    }

    // 点击关闭按钮
    closeBtnClick() {
        this.props.onCloseBtnClick && this.props.onCloseBtnClick()
    }

    // 计时结束
    durationEnd() {
        this.props.onDurationEnd && this.props.onDurationEnd()
    }

    // 定义组件方法
    // 弹出一条全局提示
    openMessagePlugin(theme, content, duration) {
        this.props.onOpenMessagePlugin && this.props.onOpenMessagePlugin()
        messageList.unshift(MessagePlugin(theme, content, duration))
    }

    // 关闭所有全局提示
    closeAll() {
        this.props.onCloseAll && this.props.onCloseAll()
        if (messageList.length !== 0) {
            MessagePlugin.closeAll()
        }
    }

    // 关闭最先弹出的一条全局提示
    closeFirst() {
        this.props.onCloseAll && this.props.onCloseAll()
        if (messageList.length !== 0) {
            MessagePlugin.close(messageList.pop())
        }
    }

    // 关闭最后弹出的一条全局提示
    closeLast() {
        this.props.onCloseAll && this.props.onCloseAll()
        if (messageList.length !== 0) {
            MessagePlugin.close(messageList.shift())
        }
    }

    // 定义组件函数
    // 选择图标
    icon(icon) {
        switch (icon) {
            case 'none':
                return false
            case 'default':
                return true
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
        return null
    }
}
