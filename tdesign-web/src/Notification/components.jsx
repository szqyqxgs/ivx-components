import React from 'react'
import {NotificationPlugin} from 'tdesign-react'
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
let notificationList = []

export default class TdNotification extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.closeAll = this.closeAll.bind(this)
        this.closeFirst = this.closeFirst.bind(this)
        this.closeLast = this.closeLast.bind(this)
        this.openNotificationPlugin = this.openNotificationPlugin.bind(this)
        this.closeBtnClick = this.closeBtnClick.bind(this)
        this.durationEnd = this.durationEnd.bind(this)
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
        let {
            icon,
            enabledClass,
            className,
            closeButton,
            closeText,
            placement,
            footer,
            offsetX,
            offsetY,
            attach,
            zIndex
        } = this.props
        let closeBtn = closeButton === 'icon' ? true : closeButton === 'text' ? closeText : false
        NotificationPlugin.config({
            onCloseBtnClick: this.closeBtnClick,
            onDurationEnd: this.durationEnd,
            // style: XX,
            className: enabledClass && className ? className : null,
            icon: this.icon(icon),
            closeBtn: closeBtn,
            placement: placement,
            footer: footer,
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
    // 弹出一条消息通知
    openNotificationPlugin(theme, title, content, duration) {
        this.props.onOpenNotificationPlugin && this.props.onOpenNotificationPlugin()
        notificationList.unshift(NotificationPlugin(theme, {title, content, duration}))
    }

    // 关闭所有消息通知
    closeAll() {
        this.props.onCloseAll && this.props.onCloseAll()
        if (notificationList.length !== 0) {
            NotificationPlugin.closeAll()
        }
    }

    // 关闭最先弹出的一条消息通知
    closeFirst() {
        this.props.onCloseAll && this.props.onCloseAll()
        if (notificationList.length !== 0) {
            NotificationPlugin.close(notificationList.pop())
        }
    }

    // 关闭最后弹出的一条消息通知
    closeLast() {
        this.props.onCloseAll && this.props.onCloseAll()
        if (notificationList.length !== 0) {
            NotificationPlugin.close(notificationList.shift())
        }
    }

    // 定义组件函数
    // 选择图标
    icon(icon) {
        switch (icon) {
            case 'default':
                return true
            case 'none':
                return false
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