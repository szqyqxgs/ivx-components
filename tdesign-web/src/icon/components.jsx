import React from 'react'
import {AddIcon, CloudUploadIcon, DeleteIcon, SearchIcon, UploadIcon} from 'tdesign-icons-react'
import 'tdesign-react/es/style/index.css'

export default class TdIcon extends React.Component {

    // 因需要初始化 state 或 绑定事件，固必须写构造函数
    constructor(props) {
        super(props)

        // 绑定事件和方法
        this.click = this.click.bind(this)
        this.showVisible = this.showVisible.bind(this)
        this.hideVisible = this.hideVisible.bind(this)
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    // 初始化
    componentDidMount() {
        this.props.onInitialize && this.props.onInitialize()
    }

    // 定义组件事件
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

    // 定义组件函数
    // 选择图标
    icon(name, size) {
        switch (name) {
            case 'AddIcon':
                return <AddIcon size={size}/>
            case 'DeleteIcon':
                return <DeleteIcon size={size}/>
            case 'CloudUploadIcon':
                return <CloudUploadIcon size={size}/>
            case 'UploadIcon':
                return <UploadIcon size={size}/>
            case 'SearchIcon':
                return <SearchIcon size={size}/>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {visible, name, size, color} = this.props
        return visible ? <span
            onClick={this.click}
            style={{
                color: color
            }}
        >
            {this.icon(name, size)}
        </span> : null
    }
}

// 默认属性
TdIcon.defaultProps = {
    visible: true,
    name: 'DeleteIcon',
    size: 'medium',
    color: null
}
