import React from 'react'
import {Button} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'
import {AddIcon, CloudUploadIcon, DeleteIcon, SearchIcon, UploadIcon} from 'tdesign-icons-react'

// 全局变量

export default class Tdaaa extends React.Component {

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
    // 选择左侧图标
    icon(icon) {
        switch (icon) {
            case 'AddIcon':
                return <AddIcon/>
            case 'DeleteIcon':
                return <DeleteIcon/>
            case 'CloudUploadIcon':
                return <CloudUploadIcon/>
            case 'UploadIcon':
                return <UploadIcon/>
            case 'SearchIcon':
                return <SearchIcon/>
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
            tag,
            icon,
            useIcon,
            content
        } = this.props
        return visible ? <Button
            onClick={this.click}
            // style={}
            className={enabledClassName && className ? className : null}
            tag={tag}
            icon={useIcon && icon ? this.icon(icon) : null}
        >
            {content}
        </Button> : null
    }
}