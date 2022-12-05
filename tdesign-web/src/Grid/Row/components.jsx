import React from 'react'
import {Row} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdGridRow extends React.Component {

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
    // 选择间隔函数
    selectSpacing() {
        let {
            spacing,
            horizontalSpacing,
            verticalSpacing,
            xsHorizontal,
            smHorizontal,
            mdHorizontal,
            lgHorizontal,
            xlHorizontal,
            xxlHorizontal,
            xsVertical,
            smVertical,
            mdVertical,
            lgVertical,
            xlVertical,
            xxlVertical
        } = this.props
        let horizontalVertical = [horizontalSpacing, verticalSpacing]
        let horizontalResponse = {
            xs: xsHorizontal,
            sm: smHorizontal,
            md: mdHorizontal,
            lg: lgHorizontal,
            xl: xlHorizontal,
            xxl: xxlHorizontal
        }
        let verticalResponse = {
            xs: xsVertical,
            sm: smVertical,
            md: mdVertical,
            lg: lgVertical,
            xl: xlVertical,
            xxl: xxlVertical
        }
        let horizontalResponseVertical = [horizontalResponse, verticalSpacing]
        let horizontalVerticalResponse = [horizontalSpacing, verticalResponse]
        let horizontalResponseVerticalResponse = [horizontalResponse, verticalResponse]
        switch (spacing) {
            case 'horizontal':
                return horizontalSpacing
            case 'horizontalVertical':
                return horizontalVertical
            case 'horizontalResponse':
                return horizontalResponse
            case 'horizontalResponseVertical':
                return horizontalResponseVertical
            case 'horizontalVerticalResponse':
                return horizontalVerticalResponse
            case 'horizontalResponseVerticalResponse':
                return horizontalResponseVerticalResponse
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {
            visible,
            align,
            justify,
            tag
        } = this.props
        return visible ? <Row
            onClick={this.click}
            // style={}
            // className={}
            align={align}
            justify={justify}
            tag={tag}
            gutter={this.selectSpacing()}
        >
            {this.props.children}</Row> : null
    }
}