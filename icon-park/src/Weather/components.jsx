import React from 'react'
import {
    Cloudy,
    CloudyNight,
    Fog,
    HeavyRain,
    HeavyWind,
    LightRain,
    Moon,
    Sandstorm,
    Snow,
    Snowflake,
    Sun,
    Sunny,
    SunOne,
    Thunderstorm,
    ThunderstormOne,
    Wind
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

// 全局变量

export default class IconParkWeather extends React.Component {

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
            case 'Cloudy':
                return <Cloudy size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CloudyNight':
                return <CloudyNight size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Fog':
                return <Fog size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HeavyRain':
                return <HeavyRain size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HeavyWind':
                return <HeavyWind size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'LightRain':
                return <LightRain size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Moon':
                return <Moon size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sandstorm':
                return <Sandstorm size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Snow':
                return <Snow size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Snowflake':
                return <Snowflake size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sun':
                return <Sun size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SunOne':
                return <SunOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sunny':
                return <Sunny size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Thunderstorm':
                return <Thunderstorm size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThunderstormOne':
                return <ThunderstormOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Wind':
                return <Wind size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
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
