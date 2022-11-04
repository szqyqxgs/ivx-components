import React from 'react'
import {
    AngryFace,
    AnguishedFace,
    AstonishedFace,
    ConfoundedFace,
    ConfusedFace,
    DisappointedFace,
    DistraughtFace,
    DizzyFace,
    EmotionHappy,
    EmotionUnhappy,
    ExpressionlessFace,
    FaceWithoutMouth,
    FaceWithSmilingOpenEyes,
    FrowningFaceWhitOpenMouth,
    GrimacingFace,
    GrinningFace,
    GrinningFaceWithOpenMouth,
    GrinningFaceWithSquintingEyes,
    GrinningFaceWithTightlyClosedEyes,
    GrinningFaceWithTightlyClosedEyesOpenMouth,
    LoudlyCryingFace,
    LoudlyCryingFaceWhitOpenMouth,
    NeutralFace,
    PoutingFace,
    RelievedFace,
    SlightlyFrowningFaceWhitOpenMouth,
    SlightlySmilingFace,
    SlyFaceWhitSmile,
    SmilingFace,
    SmilingFaceWithSquintingEyes,
    SurprisedFaceWithOpenBigMouth,
    SurprisedFaceWithOpenMouth,
    UpsideDownFace,
    WearyFace,
    WinkingFace,
    WinkingFaceWithOpenEyes,
    WorriedFace
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

// 全局变量

export default class IconParkEmoji extends React.Component {

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
            case 'AngryFace':
                return <AngryFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'AnguishedFace':
                return <AnguishedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'AstonishedFace':
                return <AstonishedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ConfoundedFace':
                return <ConfoundedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ConfusedFace':
                return <ConfusedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DisappointedFace':
                return <DisappointedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DistraughtFace':
                return <DistraughtFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DizzyFace':
                return <DizzyFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'EmotionHappy':
                return <EmotionHappy size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'EmotionUnhappy':
                return <EmotionUnhappy size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ExpressionlessFace':
                return <ExpressionlessFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FaceWithSmilingOpenEyes':
                return <FaceWithSmilingOpenEyes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                strokeWidth={strokeWidth}
                                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FaceWithoutMouth':
                return <FaceWithoutMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FrowningFaceWhitOpenMouth':
                return <FrowningFaceWhitOpenMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                  strokeWidth={strokeWidth}
                                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GrimacingFace':
                return <GrimacingFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GrinningFace':
                return <GrinningFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GrinningFaceWithOpenMouth':
                return <GrinningFaceWithOpenMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                  strokeWidth={strokeWidth}
                                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GrinningFaceWithSquintingEyes':
                return <GrinningFaceWithSquintingEyes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                      strokeWidth={strokeWidth}
                                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GrinningFaceWithTightlyClosedEyes':
                return <GrinningFaceWithTightlyClosedEyes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                          strokeWidth={strokeWidth}
                                                          strokeLinejoin={strokeLinejoin}
                                                          strokeLinecap={strokeLinecap}/>
            case 'GrinningFaceWithTightlyClosedEyesOpenMouth':
                return <GrinningFaceWithTightlyClosedEyesOpenMouth size={size} spin={spin} theme={theme}
                                                                   fill={this.fill(theme)} strokeWidth={strokeWidth}
                                                                   strokeLinejoin={strokeLinejoin}
                                                                   strokeLinecap={strokeLinecap}/>
            case 'LoudlyCryingFace':
                return <LoudlyCryingFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'LoudlyCryingFaceWhitOpenMouth':
                return <LoudlyCryingFaceWhitOpenMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                      strokeWidth={strokeWidth}
                                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'NeutralFace':
                return <NeutralFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'PoutingFace':
                return <PoutingFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RelievedFace':
                return <RelievedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SlightlyFrowningFaceWhitOpenMouth':
                return <SlightlyFrowningFaceWhitOpenMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                          strokeWidth={strokeWidth}
                                                          strokeLinejoin={strokeLinejoin}
                                                          strokeLinecap={strokeLinecap}/>
            case 'SlightlySmilingFace':
                return <SlightlySmilingFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SlyFaceWhitSmile':
                return <SlyFaceWhitSmile size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SmilingFace':
                return <SmilingFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SmilingFaceWithSquintingEyes':
                return <SmilingFaceWithSquintingEyes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                     strokeWidth={strokeWidth}
                                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SurprisedFaceWithOpenBigMouth':
                return <SurprisedFaceWithOpenBigMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                      strokeWidth={strokeWidth}
                                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SurprisedFaceWithOpenMouth':
                return <SurprisedFaceWithOpenMouth size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                   strokeWidth={strokeWidth}
                                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'UpsideDownFace':
                return <UpsideDownFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WearyFace':
                return <WearyFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WinkingFace':
                return <WinkingFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WinkingFaceWithOpenEyes':
                return <WinkingFaceWithOpenEyes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                strokeWidth={strokeWidth}
                                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WorriedFace':
                return <WorriedFace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
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
