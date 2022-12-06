import React from 'react'
import {Col} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdGridCol extends React.Component {

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
    // 选择填充函数
    selectFlexGSB() {
        let {
            flexGSB,
            quickSelect,
            growShrink,
            basis,
            flexGrow,
            flexShrink,
            flexBasis
        } = this.props
        let detailedFlex = flexGrow + ' ' + flexShrink + ' ' + flexBasis
        switch (flexGSB) {
            case 'none':
                return null
            case 'quickSelect':
                return quickSelect
            case 'growShrink':
                return growShrink
            case 'basis':
                return basis
            case 'detailedFlex':
                return detailedFlex
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
            Response,
            xsOffset,
            smOffset,
            mdOffset,
            lgOffset,
            xlOffset,
            xxlOffset,
            xsOrder,
            smOrder,
            mdOrder,
            lgOrder,
            xlOrder,
            xxlOrder,
            xsPull,
            smPull,
            mdPull,
            lgPull,
            xlPull,
            xxlPull,
            xsPush,
            smPush,
            mdPush,
            lgPush,
            xlPush,
            xxlPush,
            xsSpan,
            smSpan,
            mdSpan,
            lgSpan,
            xlSpan,
            xxlSpan,
            offset,
            order,
            pull,
            push,
            span,
            tag
        } = this.props
        let xs = {offset: xsOffset, order: xsOrder, pull: xsPull, push: xsPush, span: xsSpan}
        let sm = {offset: smOffset, order: smOrder, pull: smPull, push: smPush, span: smSpan}
        let md = {offset: mdOffset, order: mdOrder, pull: mdPull, push: mdPush, span: mdSpan}
        let lg = {offset: lgOffset, order: lgOrder, pull: lgPull, push: lgPush, span: lgSpan}
        let xl = {offset: xlOffset, order: xlOrder, pull: xlPull, push: xlPush, span: xlSpan}
        let xxl = {offset: xxlOffset, order: xxlOrder, pull: xxlPull, push: xxlPush, span: xxlSpan}
        return visible ? Response ? <Col
            onClick={this.click}
            // style={}
            className={enabledClassName && className ? className : null}
            tag={tag}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            xxl={xxl}
            flex={this.selectFlexGSB()}
        >
            {this.props.children}</Col> : <Col
            onClick={this.click}
            // style={}
            className={enabledClassName && className ? className : null}
            offset={offset}
            order={order}
            pull={pull}
            push={push}
            span={span}
            tag={tag}
            flex={this.selectFlexGSB()}
        >
            {this.props.children}</Col> : null
    }
}