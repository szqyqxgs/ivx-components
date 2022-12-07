import React from 'react'
import {
    AirBike,
    ArchersBow,
    Archery,
    Arena,
    BadgeTwo,
    Badminton,
    BalanceOne,
    Baokemeng,
    Baseball,
    BaseballBat,
    Basketball,
    BasketballOne,
    BasketballStand,
    BlackEight,
    BottomBarOne,
    Bowling,
    Boxing,
    BoxingOne,
    Checkerboard,
    Chess,
    ChessOne,
    Court,
    Curling,
    DivingBottle,
    DivingSuit,
    Dumbbell,
    DumbbelLine,
    Fitness,
    FiveStarBadge,
    Foot,
    Football,
    GoldMedal,
    GoldMedalTwo,
    GolfCourse,
    Gongfu,
    Gymnastics,
    GymnasticsOne,
    Heartbeat,
    Helmet,
    Hockey,
    Jump,
    Kungfu,
    Muscle,
    PlayBasketball,
    PlayVolleyball,
    Riding,
    Rings,
    Rollerskates,
    RopeSkipping,
    RopeSkippingOne,
    Rowing,
    Rugby,
    RugbyOne,
    Sailboat,
    Scoreboard,
    Skate,
    Skating,
    SkiingNordic,
    Soccer,
    SoccerOne,
    Softball,
    Spikedshoes,
    SpinningTop,
    Sport,
    Sporting,
    StretchingOne,
    SwimmingPool,
    SwimmingRing,
    Tabletennis,
    TargetOne,
    TargetTwo,
    Tennis,
    Thin,
    Torch,
    Towel,
    Treadmill,
    TreadmillOne,
    TreadmillTwo,
    Volleyball,
    Waterpolo,
    WaterpoloOne,
    Weightlifting,
    Whistling,
    WingsuitFlying
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

// 全局变量

export default class IconParkSports extends React.Component {

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
                return strokeColor ? strokeColor : null
            case 'filled':
                return fillColor ? fillColor : null
            case 'two-tone':
                return strokeColor || fillColor ? twoToneColor : null
            case 'multi-color':
                return outerStrokeColor || outerFillColor || innerStrokeColor || innerFillColor ? multiColor : null
            default:
                return
        }
    }

    // 选择图标
    icon() {
        let {name, size, spin, theme, strokeWidth, strokeLinejoin, strokeLinecap} = this.props
        switch (name) {
            case 'AirBike':
                return <AirBike size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ArchersBow':
                return <ArchersBow size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Archery':
                return <Archery size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Arena':
                return <Arena size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BadgeTwo':
                return <BadgeTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Badminton':
                return <Badminton size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BalanceOne':
                return <BalanceOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Baokemeng':
                return <Baokemeng size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Baseball':
                return <Baseball size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BaseballBat':
                return <BaseballBat size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Basketball':
                return <Basketball size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BasketballOne':
                return <BasketballOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BasketballStand':
                return <BasketballStand size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BlackEight':
                return <BlackEight size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BottomBarOne':
                return <BottomBarOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bowling':
                return <Bowling size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Boxing':
                return <Boxing size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BoxingOne':
                return <BoxingOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Checkerboard':
                return <Checkerboard size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Chess':
                return <Chess size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChessOne':
                return <ChessOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Court':
                return <Court size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Curling':
                return <Curling size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DivingBottle':
                return <DivingBottle size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DivingSuit':
                return <DivingSuit size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'DumbbelLine':
                return <DumbbelLine size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Dumbbell':
                return <Dumbbell size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Fitness':
                return <Fitness size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FiveStarBadge':
                return <FiveStarBadge size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Foot':
                return <Foot size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Football':
                return <Football size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GoldMedal':
                return <GoldMedal size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GoldMedalTwo':
                return <GoldMedalTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GolfCourse':
                return <GolfCourse size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Gongfu':
                return <Gongfu size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Gymnastics':
                return <Gymnastics size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GymnasticsOne':
                return <GymnasticsOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Heartbeat':
                return <Heartbeat size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Helmet':
                return <Helmet size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Hockey':
                return <Hockey size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Jump':
                return <Jump size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Kungfu':
                return <Kungfu size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Muscle':
                return <Muscle size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'PlayBasketball':
                return <PlayBasketball size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'PlayVolleyball':
                return <PlayVolleyball size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Riding':
                return <Riding size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Rings':
                return <Rings size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Rollerskates':
                return <Rollerskates size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RopeSkipping':
                return <RopeSkipping size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RopeSkippingOne':
                return <RopeSkippingOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Rowing':
                return <Rowing size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Rugby':
                return <Rugby size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RugbyOne':
                return <RugbyOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sailboat':
                return <Sailboat size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Scoreboard':
                return <Scoreboard size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Skate':
                return <Skate size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Skating':
                return <Skating size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SkiingNordic':
                return <SkiingNordic size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Soccer':
                return <Soccer size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SoccerOne':
                return <SoccerOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Softball':
                return <Softball size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Spikedshoes':
                return <Spikedshoes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SpinningTop':
                return <SpinningTop size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sport':
                return <Sport size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sporting':
                return <Sporting size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'StretchingOne':
                return <StretchingOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SwimmingPool':
                return <SwimmingPool size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SwimmingRing':
                return <SwimmingRing size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Tabletennis':
                return <Tabletennis size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TargetOne':
                return <TargetOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TargetTwo':
                return <TargetTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Tennis':
                return <Tennis size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Thin':
                return <Thin size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Torch':
                return <Torch size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Towel':
                return <Towel size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Treadmill':
                return <Treadmill size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TreadmillOne':
                return <TreadmillOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TreadmillTwo':
                return <TreadmillTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Volleyball':
                return <Volleyball size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Waterpolo':
                return <Waterpolo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WaterpoloOne':
                return <WaterpoloOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Weightlifting':
                return <Weightlifting size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Whistling':
                return <Whistling size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WingsuitFlying':
                return <WingsuitFlying size={size} spin={spin} theme={theme} fill={this.fill(theme)}
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