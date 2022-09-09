import React from 'react'
import {Pagination} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdPagination extends React.Component {

    // 绑定事件和方法
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.currentChange = this.currentChange.bind(this)
        this.pageSizeChange = this.pageSizeChange.bind(this)
        this.setTotal = this.setTotal.bind(this)
        this.setCurrent = this.setCurrent.bind(this)
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
        this.props.onInitialize && this.props.onInitialize({
            current: this.props.current,
            pageSize: this.props.pageSize
        })
    }

    // 当前页码改变
    currentChange(current) {
        this.props.onCurrentChange && this.props.onCurrentChange({
            current: current
        })
    }

    // 分页大小改变
    pageSizeChange(pageSize) {
        this.props.onPageSizeChange && this.props.onPageSizeChange({
            pageSize: pageSize
        })
    }

    // 当前页码或分页大小改变
    change(pageInfo) {
        this.props.onChange && this.props.onChange({
            current: pageInfo.current,
            previous: pageInfo.previous,
            pageSize: pageInfo.pageSize
        })
    }

    // 定义组件方法
    // 设置数据总数
    setTotal(total, callback) {
        this.props.onSetTotal && this.props.total !== total && this.props.onSetTotal({
            total: total
        })
        callback('', {
            total: total
        })
    }

    // 跳转到页码
    setCurrent(current, callback) {
        this.props.onSetCurrent && this.props.current !== current && this.props.onSetCurrent({
            current: current
        })
        callback('', {
            current: current
        })
    }

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

    render() {
        // 属性、事件、函数
        let {
            visible,
            disabled,
            total,
            pageSize,
            current,
            theme,
            size,
            totalContent,
            showJumper,
            showFirstAndLastPageBtn,
            showPreviousAndNextBtn,
            showPageNumber,
            maxPageBtn,
            foldedMaxPageBtn,
            pageEllipsisMode,
            showPageSize,
            pageSizeOptions1,
            pageSizeOptions2,
            pageSizeOptions3,
            pageSizeOptions4,
            pageSizeOptions5
        } = this.props
        let pageSizeOptions = []
        showPageSize && pageSizeOptions1 && pageSizeOptions.push(5)
        showPageSize && pageSizeOptions2 && pageSizeOptions.push(10)
        showPageSize && pageSizeOptions3 && pageSizeOptions.push(20)
        showPageSize && pageSizeOptions4 && pageSizeOptions.push(50)
        showPageSize && pageSizeOptions5 && pageSizeOptions.push(100)
        return visible ? <Pagination
            // style: {},
            // className: '',
            onChange={this.change}
            onCurrentChange={this.currentChange}
            onPageSizeChange={this.pageSizeChange}
            disabled={disabled}
            total={total}
            pageSize={pageSize}
            current={current}
            theme={theme}
            size={size}
            totalContent={totalContent}
            showJumper={showJumper}
            showFirstAndLastPageBtn={showFirstAndLastPageBtn}
            showPreviousAndNextBtn={showPreviousAndNextBtn}
            showPageNumber={showPageNumber}
            maxPageBtn={maxPageBtn}
            foldedMaxPageBtn={foldedMaxPageBtn}
            pageEllipsisMode={pageEllipsisMode}
            showPageSize={showPageSize}
            pageSizeOptions={pageSizeOptions}
        /> : null
    }
}

// 默认属性
TdPagination.defaultProps = {
    visible: true,
    disabled: false,
    total: 0,
    pageSize: 10,
    current: 1,
    theme: 'default',
    size: 'medium',
    totalContent: true,
    showJumper: false,
    showFirstAndLastPageBtn: false,
    showPreviousAndNextBtn: true,
    showPageNumber: true,
    maxPageBtn: 10,
    foldedMaxPageBtn: 5,
    pageEllipsisMode: 'mid',
    showPageSize: true,
    pageSizeOptions1: true,
    pageSizeOptions2: true,
    pageSizeOptions3: true,
    pageSizeOptions4: true,
    pageSizeOptions5: false
}
