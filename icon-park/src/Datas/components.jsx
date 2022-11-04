import React from 'react'
import {
    DatabaseAlert,
    DatabaseCode,
    DatabaseConfig,
    DatabaseDownload,
    DatabaseEnter,
    DatabaseFail,
    DatabaseFirst,
    DatabaseForbid,
    DatabaseLock,
    DatabaseNetwork,
    DatabaseNetworkPoint,
    DatabasePoint,
    DatabasePosition,
    DatabasePower,
    DatabaseProportion,
    DatabaseSearch,
    DatabaseSetting,
    DatabaseSuccess,
    DatabaseSync,
    DatabaseTime,
    DataDisplay,
    DataLock,
    DataSwitching,
    DataUser,
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

// 全局变量

export default class IconParkDatas extends React.Component {

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
    // 图标风格颜色
    fill(theme) {
        let {strokeColor, fillColor, outerStrokeColor, outerFillColor, innerStrokeColor, innerFillColor} = this.props
        let twoToneColor = [strokeColor, fillColor]
        let multiColor = [outerStrokeColor, outerFillColor, innerStrokeColor, innerFillColor]
        switch (theme) {
            case 'outline':
                return strokeColor ? strokeColor : undefined
            case 'filled':
                return fillColor ? fillColor : undefined
            case 'two-tone':
                return strokeColor || fillColor ? twoToneColor : undefined
            case 'multi-color':
                return outerStrokeColor || outerFillColor || innerStrokeColor || innerFillColor ? multiColor : undefined
            default:
                return
        }
    }

    // 选择图标
    icon() {
        let {name, size, spin, theme, strokeWidth, strokeLinejoin, strokeLinecap} = this.props
        switch (name) {
            case 'DataDisplay':
                return <DataDisplay size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DataLock':
                return <DataLock size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DataSwitching':
                return <DataSwitching size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DataUser':
                return <DataUser size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseAlert':
                return <DatabaseAlert size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseCode':
                return <DatabaseCode size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseConfig':
                return <DatabaseConfig size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseDownload':
                return <DatabaseDownload size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseEnter':
                return <DatabaseEnter size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseFail':
                return <DatabaseFail size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseFirst':
                return <DatabaseFirst size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseForbid':
                return <DatabaseForbid size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseLock':
                return <DatabaseLock size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseNetwork':
                return <DatabaseNetwork size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseNetworkPoint':
                return <DatabaseNetworkPoint size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabasePoint':
                return <DatabasePoint size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabasePosition':
                return <DatabasePosition size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabasePower':
                return <DatabasePower size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseProportion':
                return <DatabaseProportion size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseSearch':
                return <DatabaseSearch size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseSetting':
                return <DatabaseSetting size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseSuccess':
                return <DatabaseSuccess size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseSync':
                return <DatabaseSync size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DatabaseTime':
                return <DatabaseTime size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {visible} = this.props
        return visible ? <span onClick={this.click}>{this.icon()}</span> : null
    }
}
