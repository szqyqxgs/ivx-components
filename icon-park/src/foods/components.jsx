import React from 'react'
import {
    AppleOne,
    Avocado,
    AvocadoOne,
    Banana,
    Barbecue,
    Beer,
    BeerMug,
    BirthdayCake,
    Bone,
    BottleOne,
    BottleThree,
    BottleTwo,
    Bowl,
    BowlOne,
    Bread,
    BreadMachine,
    BreadOne,
    Cake,
    CakeFive,
    CakeFour,
    CakeOne,
    CakeThree,
    CakeTwo,
    Candy,
    CannedFruit,
    Carrot,
    ChafingDish,
    ChafingDishOne,
    Cheese,
    ChefHatOne,
    Cherry,
    Chicken,
    ChickenLeg,
    Chili,
    ChoppingBoard,
    ChopsticksFork,
    Cola,
    Cook,
    Cooking,
    Crab,
    Croissant,
    CupFour,
    CupOne,
    Doughnut,
    Drink,
    Drumstick,
    Egg,
    EggOne,
    Eggplant,
    Fish,
    ForkSpoon,
    FrenchFries,
    Garlic,
    Glove,
    Goblet,
    GobletCracking,
    GobletFull,
    GobletOne,
    Hamburger,
    HamburgerOne,
    Honey,
    HoneyOne,
    HotPot,
    HotPotOne,
    Icecream,
    IcecreamFive,
    IcecreamFour,
    IcecreamOne,
    IcecreamThree,
    IcecreamTwo,
    Juice,
    KettleOne,
    KitchenKnife,
    KnifeFork,
    Lemon,
    Liqueur,
    Lollipop,
    MacadamiaNut,
    MeasuringCup,
    Milk,
    MilkOne,
    Noodles,
    Nut,
    Orange,
    OrangeOne,
    Oven,
    OvenTray,
    PaintedEggshell,
    Peach,
    Pear,
    Peas,
    Pineapple,
    Popcorn,
    PopcornOne,
    Pot,
    Pumpkin,
    Radish,
    RadishOne,
    Refrigerator,
    Rice,
    Sandwich,
    SandwichOne,
    Scallion,
    Shovel,
    ShovelOne,
    Shrimp,
    Snacks,
    SoybeanMilkMaker,
    Spoon,
    Tea,
    TeaDrink,
    Teapot,
    ThermosCup,
    Tomato,
    Tray,
    Turkey,
    VegetableBasket,
    Vegetables,
    ViciaFaba,
    Watermelon,
    WatermelonOne
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

export default class IconParkFoods extends React.Component {

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
            case 'AppleOne':
                return <AppleOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Avocado':
                return <Avocado size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'AvocadoOne':
                return <AvocadoOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Banana':
                return <Banana size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Barbecue':
                return <Barbecue size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Beer':
                return <Beer size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BeerMug':
                return <BeerMug size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BirthdayCake':
                return <BirthdayCake size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bone':
                return <Bone size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BottleOne':
                return <BottleOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BottleThree':
                return <BottleThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BottleTwo':
                return <BottleTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bowl':
                return <Bowl size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BowlOne':
                return <BowlOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Bread':
                return <Bread size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BreadMachine':
                return <BreadMachine size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BreadOne':
                return <BreadOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cake':
                return <Cake size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CakeFive':
                return <CakeFive size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CakeFour':
                return <CakeFour size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CakeOne':
                return <CakeOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CakeThree':
                return <CakeThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CakeTwo':
                return <CakeTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Candy':
                return <Candy size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CannedFruit':
                return <CannedFruit size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Carrot':
                return <Carrot size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChafingDish':
                return <ChafingDish size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChafingDishOne':
                return <ChafingDishOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cheese':
                return <Cheese size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChefHatOne':
                return <ChefHatOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cherry':
                return <Cherry size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Chicken':
                return <Chicken size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChickenLeg':
                return <ChickenLeg size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Chili':
                return <Chili size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChoppingBoard':
                return <ChoppingBoard size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ChopsticksFork':
                return <ChopsticksFork size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cola':
                return <Cola size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cook':
                return <Cook size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cooking':
                return <Cooking size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Crab':
                return <Crab size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Croissant':
                return <Croissant size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CupFour':
                return <CupFour size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CupOne':
                return <CupOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Doughnut':
                return <Doughnut size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Drink':
                return <Drink size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Drumstick':
                return <Drumstick size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Egg':
                return <Egg size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'EggOne':
                return <EggOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Eggplant':
                return <Eggplant size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Fish':
                return <Fish size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ForkSpoon':
                return <ForkSpoon size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FrenchFries':
                return <FrenchFries size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Garlic':
                return <Garlic size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Glove':
                return <Glove size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Goblet':
                return <Goblet size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GobletCracking':
                return <GobletCracking size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GobletFull':
                return <GobletFull size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GobletOne':
                return <GobletOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Hamburger':
                return <Hamburger size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HamburgerOne':
                return <HamburgerOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Honey':
                return <Honey size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HoneyOne':
                return <HoneyOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HotPot':
                return <HotPot size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HotPotOne':
                return <HotPotOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Icecream':
                return <Icecream size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'IcecreamFive':
                return <IcecreamFive size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'IcecreamFour':
                return <IcecreamFour size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'IcecreamOne':
                return <IcecreamOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'IcecreamThree':
                return <IcecreamThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'IcecreamTwo':
                return <IcecreamTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Juice':
                return <Juice size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'KettleOne':
                return <KettleOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'KitchenKnife':
                return <KitchenKnife size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'KnifeFork':
                return <KnifeFork size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Lemon':
                return <Lemon size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Liqueur':
                return <Liqueur size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Lollipop':
                return <Lollipop size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MacadamiaNut':
                return <MacadamiaNut size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MeasuringCup':
                return <MeasuringCup size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Milk':
                return <Milk size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MilkOne':
                return <MilkOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Noodles':
                return <Noodles size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Nut':
                return <Nut size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Orange':
                return <Orange size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OrangeOne':
                return <OrangeOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Oven':
                return <Oven size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OvenTray':
                return <OvenTray size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'PaintedEggshell':
                return <PaintedEggshell size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Peach':
                return <Peach size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Pear':
                return <Pear size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Peas':
                return <Peas size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Pineapple':
                return <Pineapple size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Popcorn':
                return <Popcorn size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'PopcornOne':
                return <PopcornOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Pot':
                return <Pot size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Pumpkin':
                return <Pumpkin size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Radish':
                return <Radish size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RadishOne':
                return <RadishOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Refrigerator':
                return <Refrigerator size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Rice':
                return <Rice size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sandwich':
                return <Sandwich size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SandwichOne':
                return <SandwichOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Scallion':
                return <Scallion size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Shovel':
                return <Shovel size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ShovelOne':
                return <ShovelOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Shrimp':
                return <Shrimp size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Snacks':
                return <Snacks size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SoybeanMilkMaker':
                return <SoybeanMilkMaker size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Spoon':
                return <Spoon size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Tea':
                return <Tea size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TeaDrink':
                return <TeaDrink size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Teapot':
                return <Teapot size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThermosCup':
                return <ThermosCup size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Tomato':
                return <Tomato size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Tray':
                return <Tray size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Turkey':
                return <Turkey size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'VegetableBasket':
                return <VegetableBasket size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Vegetables':
                return <Vegetables size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ViciaFaba':
                return <ViciaFaba size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Watermelon':
                return <Watermelon size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'WatermelonOne':
                return <WatermelonOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
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
IconParkFoods.defaultProps = {
    visible: true,
    name: 'AppleOne',
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
