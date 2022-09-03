import React from 'react'
import {
    ACane,
    BachelorCap,
    BachelorCapOne,
    BachelorCapTwo,
    Backpack,
    BaseballCap,
    BasketballClothes,
    Belt,
    Boots,
    Bow,
    Briefcase,
    ChefHat,
    ChildrenCap,
    ClothesBriefs,
    ClothesCardigan,
    ClothesCrewNeck,
    ClothesDiapers,
    ClothesGloves,
    ClothesGlovesTwo,
    ClothesHoodie,
    ClothesPants,
    ClothesPantsShort,
    ClothesPantsSweat,
    ClothesShortSleeve,
    ClothesSkates,
    ClothesSuit,
    ClothesSweater,
    ClothesTurtleneck,
    ClothesWindbreaker,
    CoatHanger,
    CommuterBag,
    CrownThree,
    DiamondNecklace,
    DiamondRing,
    Diamonds,
    DiapersOne,
    FullDressLonguette,
    Glasses,
    GlassesOne,
    Handbag,
    HanfuChineseStyle,
    HangerOne,
    Hat,
    Headwear,
    HighHeeledShoes,
    HolySword,
    MagicHat,
    MenJacket,
    Necktie,
    Panties,
    Perfume,
    RetroBag,
    Shorts,
    ShortSkirt,
    Skates,
    Slippers,
    SlippersOne,
    Socks,
    SorcererHat,
    StrawHat,
    SunHat,
    Sweater,
    Swimsuit,
    Theme,
    TheSingleShoulderBag,
    ThreeDGlasses,
    TrousersBellBottoms,
    Trunk,
    TShirt,
    Vest,
    WomenCoat,
    WoolenHat
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

// 全局变量

export default class IconParkClothes extends React.Component {

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
            case 'ACane':
                return <ACane size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BachelorCap':
                return <BachelorCap size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BachelorCapOne':
                return <BachelorCapOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BachelorCapTwo':
                return <BachelorCapTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Backpack':
                return <Backpack size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BaseballCap':
                return <BaseballCap size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BasketballClothes':
                return <BasketballClothes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Belt':
                return <Belt size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Boots':
                return <Boots size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bow':
                return <Bow size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Briefcase':
                return <Briefcase size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChefHat':
                return <ChefHat size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChildrenCap':
                return <ChildrenCap size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesBriefs':
                return <ClothesBriefs size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesCardigan':
                return <ClothesCardigan size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesCrewNeck':
                return <ClothesCrewNeck size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesDiapers':
                return <ClothesDiapers size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesGloves':
                return <ClothesGloves size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesGlovesTwo':
                return <ClothesGlovesTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesHoodie':
                return <ClothesHoodie size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesPants':
                return <ClothesPants size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesPantsShort':
                return <ClothesPantsShort size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesPantsSweat':
                return <ClothesPantsSweat size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesShortSleeve':
                return <ClothesShortSleeve size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesSkates':
                return <ClothesSkates size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesSuit':
                return <ClothesSuit size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesSweater':
                return <ClothesSweater size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesTurtleneck':
                return <ClothesTurtleneck size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ClothesWindbreaker':
                return <ClothesWindbreaker size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CoatHanger':
                return <CoatHanger size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CommuterBag':
                return <CommuterBag size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CrownThree':
                return <CrownThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DiamondNecklace':
                return <DiamondNecklace size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DiamondRing':
                return <DiamondRing size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Diamonds':
                return <Diamonds size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DiapersOne':
                return <DiapersOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FullDressLonguette':
                return <FullDressLonguette size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Glasses':
                return <Glasses size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GlassesOne':
                return <GlassesOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Handbag':
                return <Handbag size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HanfuChineseStyle':
                return <HanfuChineseStyle size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HangerOne':
                return <HangerOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Hat':
                return <Hat size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Headwear':
                return <Headwear size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HighHeeledShoes':
                return <HighHeeledShoes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HolySword':
                return <HolySword size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MagicHat':
                return <MagicHat size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MenJacket':
                return <MenJacket size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Necktie':
                return <Necktie size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Panties':
                return <Panties size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Perfume':
                return <Perfume size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RetroBag':
                return <RetroBag size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ShortSkirt':
                return <ShortSkirt size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Shorts':
                return <Shorts size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Skates':
                return <Skates size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Slippers':
                return <Slippers size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SlippersOne':
                return <SlippersOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Socks':
                return <Socks size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SorcererHat':
                return <SorcererHat size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'StrawHat':
                return <StrawHat size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SunHat':
                return <SunHat size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sweater':
                return <Sweater size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Swimsuit':
                return <Swimsuit size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TShirt':
                return <TShirt size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TheSingleShoulderBag':
                return <TheSingleShoulderBag size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Theme':
                return <Theme size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThreeDGlasses':
                return <ThreeDGlasses size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TrousersBellBottoms':
                return <TrousersBellBottoms size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Trunk':
                return <Trunk size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Vest':
                return <Vest size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WomenCoat':
                return <WomenCoat size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WoolenHat':
                return <WoolenHat size={size} spin={spin} theme={theme} fill={this.fill(theme)}
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

// 默认属性
IconParkClothes.defaultProps = {
    visible: true,
    name: 'ACane',
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
    strokeLinecap: "round",
    strokeLinejoin: "round"
}
