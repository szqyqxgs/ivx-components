import React from 'react'
import {Layout} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

export default class TdLayoutHeader extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
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
    click() {
        this.props.onClick && this.props.onClick()
    }

    // 定义组件方法
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
        let {
            visible,
            height
        } = this.props
        const {Header} = Layout
        return visible ? <Header
            onClick={this.click}
            height={height}
        >
            {this.props.children}
        </Header> : null
    }
}

// 默认属性
TdLayoutHeader.defaultProps = {
    visible: true,
    height: 64
}
