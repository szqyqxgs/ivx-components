import React from 'react'
import {AddIcon, CloudUploadIcon, DeleteIcon, SearchIcon, UploadIcon} from 'tdesign-icons-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdIcon extends React.Component {

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
        let {visible, enabledClass, className, name, size, color} = this.props
        return visible ? <span
            onClick={this.click}
            className={enabledClass && className ? className : null}
            style={{
                color: color
            }}
        >
            {this.icon(name, size)}
        </span> : null
    }
}