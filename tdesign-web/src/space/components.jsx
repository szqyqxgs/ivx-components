import React from 'react'
import {Space} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

export default class TdSpace extends React.Component {

    // 绑定事件和方法
    /*
    constructor(props) {
        super(props)
    }
    */

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
            align,
            breakLine,
            direction,
            separator,
            size
        } = this.props
        return visible ? <Space
            align={align}
            breakLine={breakLine}
            direction={direction}
            separator={separator} // TODO: 2022/7/31 放横向分割线，分割线里定义分割线的其他参数，放icon？
            size={size}
        >
            {this.props.children}</Space> : null
    }
}

// 默认属性
TdSpace.defaultProps = {
    visible: true,
    align: 'center',
    breakLine: false,
    direction: 'horizontal',
    separator: null,
    size: 'medium'
}