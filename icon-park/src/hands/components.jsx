import React from 'react'
import {
    Bad,
    BadOne,
    BadTwo,
    Bless,
    Bye,
    Clap,
    ClickTap,
    ClickTapTwo,
    Come,
    ConceptSharing,
    Cool,
    Delivery,
    Easy,
    Empty,
    Fingerprint,
    FingerprintThree,
    FingerprintTwo,
    First,
    Fist,
    Five,
    FiveFive,
    Flirt,
    Four,
    FourFour,
    Good,
    GoodOne,
    GoodTwo,
    HandDown,
    HandDrag,
    HandLeft,
    HandRight,
    HandUp,
    Hi,
    Hold,
    HoldInterface,
    HoldSeeds,
    IndexFinger,
    MayuraGesture,
    MiddleFinger,
    Move,
    Okay,
    One,
    OneOne,
    Open,
    Palm,
    Point,
    PointOut,
    Press,
    Reload,
    Respect,
    Rock,
    RockGesture,
    Six,
    SpiderMan,
    Swing,
    Three,
    ThreeThree,
    ThumbsDown,
    ThumbsUp,
    TurnOn,
    Two,
    TwoFingers,
    TwoHands,
    TwoTwo,
    Yep,
    Zoom
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

export default class IconParkHands extends React.Component {

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
            case 'Bad':
                return <Bad size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BadOne':
                return <BadOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BadTwo':
                return <BadTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bless':
                return <Bless size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bye':
                return <Bye size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Clap':
                return <Clap size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClickTap':
                return <ClickTap size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClickTapTwo':
                return <ClickTapTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Come':
                return <Come size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ConceptSharing':
                return <ConceptSharing size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cool':
                return <Cool size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Delivery':
                return <Delivery size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Easy':
                return <Easy size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Empty':
                return <Empty size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Fingerprint':
                return <Fingerprint size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FingerprintThree':
                return <FingerprintThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FingerprintTwo':
                return <FingerprintTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'First':
                return <First size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Fist':
                return <Fist size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Five':
                return <Five size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FiveFive':
                return <FiveFive size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Flirt':
                return <Flirt size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Four':
                return <Four size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FourFour':
                return <FourFour size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Good':
                return <Good size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GoodOne':
                return <GoodOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GoodTwo':
                return <GoodTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HandDown':
                return <HandDown size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HandDrag':
                return <HandDrag size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HandLeft':
                return <HandLeft size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HandRight':
                return <HandRight size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HandUp':
                return <HandUp size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Hi':
                return <Hi size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Hold':
                return <Hold size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HoldInterface':
                return <HoldInterface size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HoldSeeds':
                return <HoldSeeds size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'IndexFinger':
                return <IndexFinger size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MayuraGesture':
                return <MayuraGesture size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MiddleFinger':
                return <MiddleFinger size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Move':
                return <Move size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Okay':
                return <Okay size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'One':
                return <One size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OneOne':
                return <OneOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Open':
                return <Open size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Palm':
                return <Palm size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Point':
                return <Point size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'PointOut':
                return <PointOut size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Press':
                return <Press size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Reload':
                return <Reload size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Respect':
                return <Respect size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Rock':
                return <Rock size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RockGesture':
                return <RockGesture size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Six':
                return <Six size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SpiderMan':
                return <SpiderMan size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Swing':
                return <Swing size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Three':
                return <Three size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThreeThree':
                return <ThreeThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThumbsDown':
                return <ThumbsDown size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThumbsUp':
                return <ThumbsUp size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TurnOn':
                return <TurnOn size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Two':
                return <Two size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoFingers':
                return <TwoFingers size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoHands':
                return <TwoHands size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoTwo':
                return <TwoTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Yep':
                return <Yep size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Zoom':
                return <Zoom size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
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

// 默认属性
IconParkHands.defaultProps = {
    visible: true,
    name: 'Bad',
    size: '16',
    spin: false,
    theme: 'outline',
    strokeColor: null,
    fillColor: null,
    outerStrokeColor: null,
    outerFillColor: null,
    innerStrokeColor: null,
    innerFillColor: null,
    strokeWidth: 4,
    strokeLinecap: null,
    strokeLinejoin: null
}
