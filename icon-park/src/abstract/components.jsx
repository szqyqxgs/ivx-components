import React from 'react'
import {
    AdProduct,
    ApiApp,
    ApplicationOne,
    AppSwitch,
    Association,
    Asterisk,
    Badge,
    Benz,
    BlocksAndArrows,
    CategoryManagement,
    CircleFiveLine,
    CircleFour,
    CircleFourLine,
    CirclesAndTriangles,
    CirclesSeven,
    CircleThree,
    CircleTwoLine,
    CircularConnection,
    Cone,
    Cones,
    ConvergingGateway,
    CoordinateSystem,
    CrossRing,
    CrossRingTwo,
    CrownTwo,
    Cube,
    CubeFive,
    CubeFour,
    CubeThree,
    CubeTwo,
    CycleArrow,
    CycleOne,
    Cylinder,
    Display,
    Endless,
    ErrorPrompt,
    ExclusiveGateway,
    Export,
    ExternalTransmission,
    FigmaComponent,
    FigmaResetInstance,
    FiveEllipses,
    FourArrows,
    FourLeaves,
    FourPointConnection,
    FourRoundPointConnection,
    GameEmoji,
    GeometricFlowers,
    GraphicDesign,
    GraphicDesignTwo,
    GraphicStitching,
    GraphicStitchingFour,
    GraphicStitchingThree,
    Halo,
    Hexagonal,
    HexagonStrip,
    InclusiveGateway,
    InternalData,
    InternalTransmission,
    Keyline,
    MisalignedSemicircle,
    MultiCircular,
    MultilayerSphere,
    MultiRectangle,
    MultiRing,
    MultiTriangular,
    MultiTriangularFour,
    MultiTriangularThree,
    MultiTriangularTwo,
    NestedArrows,
    NinePointsConnected,
    OneThirdRotation,
    OpenOne,
    Outbound,
    OvalLove,
    OvalLoveTwo,
    ParallelGateway,
    ProcessLine,
    QuadrangularPyramid,
    RectangleTear,
    RectangleX,
    RectangularCircularConnection,
    RectangularCircularSeparation,
    RectangularVertebra,
    Refraction,
    ReverseOperationIn,
    ReverseOperationOut,
    RightRun,
    RoundCaliper,
    RoundDistortion,
    RoundMask,
    RunLeft,
    SalesReport,
    Seo,
    SixCircularConnection,
    SixPoints,
    SmartOptimization,
    Sphere,
    SplitBranch,
    StereoNesting,
    StereoPerspective,
    SwitchContrast,
    SymbolDoubleX,
    Symmetry,
    Sync,
    TableReport,
    Texture,
    TextureTwo,
    ThreeHexagons,
    ThreeSlashes,
    ThreeTriangles,
    TreasureChest,
    TriangleRoundRectangle,
    TriangularPyramid,
    TwoEllipses,
    TwoSemicircles,
    TwoTriangles,
    TwoTrianglesTwo,
    UpdateRotation,
    Warehousing,
    Whirlwind
} from '@icon-park/react'
import '@icon-park/react/styles/index.css'

export default class IconParkAbstract extends React.Component {

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
            case 'AdProduct':
                return <AdProduct size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ApiApp':
                return <ApiApp size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'AppSwitch':
                return <AppSwitch size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ApplicationOne':
                return <ApplicationOne size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Association':
                return <Association size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Asterisk':
                return <Asterisk size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Badge':
                return <Badge size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Benz':
                return <Benz size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'BlocksAndArrows':
                return <BlocksAndArrows size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CategoryManagement':
                return <CategoryManagement size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CircleFiveLine':
                return <CircleFiveLine size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CircleFour':
                return <CircleFour size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CircleFourLine':
                return <CircleFourLine size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CircleThree':
                return <CircleThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CircleTwoLine':
                return <CircleTwoLine size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CirclesAndTriangles':
                return <CirclesAndTriangles size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CirclesSeven':
                return <CirclesSeven size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CircularConnection':
                return <CircularConnection size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cone':
                return <Cone size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cones':
                return <Cones size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ConvergingGateway':
                return <ConvergingGateway size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CoordinateSystem':
                return <CoordinateSystem size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CrossRing':
                return <CrossRing size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CrossRingTwo':
                return <CrossRingTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CrownTwo':
                return <CrownTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cube':
                return <Cube size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CubeFive':
                return <CubeFive size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CubeFour':
                return <CubeFour size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CubeThree':
                return <CubeThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CubeTwo':
                return <CubeTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CycleArrow':
                return <CycleArrow size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'CycleOne':
                return <CycleOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Cylinder':
                return <Cylinder size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Display':
                return <Display size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Endless':
                return <Endless size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ErrorPrompt':
                return <ErrorPrompt size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ExclusiveGateway':
                return <ExclusiveGateway size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Export':
                return <Export size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ExternalTransmission':
                return <ExternalTransmission size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FigmaComponent':
                return <FigmaComponent size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FigmaResetInstance':
                return <FigmaResetInstance size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FiveEllipses':
                return <FiveEllipses size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FourArrows':
                return <FourArrows size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FourLeaves':
                return <FourLeaves size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FourPointConnection':
                return <FourPointConnection size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'FourRoundPointConnection':
                return <FourRoundPointConnection size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                 strokeWidth={strokeWidth}
                                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GameEmoji':
                return <GameEmoji size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GeometricFlowers':
                return <GeometricFlowers size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GraphicDesign':
                return <GraphicDesign size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GraphicDesignTwo':
                return <GraphicDesignTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GraphicStitching':
                return <GraphicStitching size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GraphicStitchingFour':
                return <GraphicStitchingFour size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'GraphicStitchingThree':
                return <GraphicStitchingThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                              strokeWidth={strokeWidth}
                                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Halo':
                return <Halo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'HexagonStrip':
                return <HexagonStrip size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Hexagonal':
                return <Hexagonal size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'InclusiveGateway':
                return <InclusiveGateway size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'InternalData':
                return <InternalData size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'InternalTransmission':
                return <InternalTransmission size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Keyline':
                return <Keyline size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MisalignedSemicircle':
                return <MisalignedSemicircle size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiCircular':
                return <MultiCircular size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiRectangle':
                return <MultiRectangle size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiRing':
                return <MultiRing size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiTriangular':
                return <MultiTriangular size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiTriangularFour':
                return <MultiTriangularFour size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiTriangularThree':
                return <MultiTriangularThree size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                             strokeWidth={strokeWidth}
                                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultiTriangularTwo':
                return <MultiTriangularTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'MultilayerSphere':
                return <MultilayerSphere size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'NestedArrows':
                return <NestedArrows size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'NinePointsConnected':
                return <NinePointsConnected size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OneThirdRotation':
                return <OneThirdRotation size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                         strokeWidth={strokeWidth}
                                         strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OpenOne':
                return <OpenOne size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Outbound':
                return <Outbound size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OvalLove':
                return <OvalLove size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'OvalLoveTwo':
                return <OvalLoveTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ParallelGateway':
                return <ParallelGateway size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ProcessLine':
                return <ProcessLine size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'QuadrangularPyramid':
                return <QuadrangularPyramid size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RectangleTear':
                return <RectangleTear size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RectangleX':
                return <RectangleX size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RectangularCircularConnection':
                return <RectangularCircularConnection size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                      strokeWidth={strokeWidth}
                                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RectangularCircularSeparation':
                return <RectangularCircularSeparation size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                                      strokeWidth={strokeWidth}
                                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RectangularVertebra':
                return <RectangularVertebra size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Refraction':
                return <Refraction size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ReverseOperationIn':
                return <ReverseOperationIn size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                           strokeWidth={strokeWidth}
                                           strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ReverseOperationOut':
                return <ReverseOperationOut size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                            strokeWidth={strokeWidth}
                                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RightRun':
                return <RightRun size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RoundCaliper':
                return <RoundCaliper size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RoundDistortion':
                return <RoundDistortion size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RoundMask':
                return <RoundMask size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'RunLeft':
                return <RunLeft size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SalesReport':
                return <SalesReport size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Seo':
                return <Seo size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                            strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SixCircularConnection':
                return <SixCircularConnection size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                              strokeWidth={strokeWidth}
                                              strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SixPoints':
                return <SixPoints size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                  strokeWidth={strokeWidth}
                                  strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SmartOptimization':
                return <SmartOptimization size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sphere':
                return <Sphere size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SplitBranch':
                return <SplitBranch size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'StereoNesting':
                return <StereoNesting size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'StereoPerspective':
                return <StereoPerspective size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SwitchContrast':
                return <SwitchContrast size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'SymbolDoubleX':
                return <SymbolDoubleX size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Symmetry':
                return <Symmetry size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                 strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Sync':
                return <Sync size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                             strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TableReport':
                return <TableReport size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Texture':
                return <Texture size={size} spin={spin} theme={theme} fill={this.fill(theme)} strokeWidth={strokeWidth}
                                strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TextureTwo':
                return <TextureTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                   strokeWidth={strokeWidth}
                                   strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThreeHexagons':
                return <ThreeHexagons size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThreeSlashes':
                return <ThreeSlashes size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'ThreeTriangles':
                return <ThreeTriangles size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TreasureChest':
                return <TreasureChest size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                      strokeWidth={strokeWidth}
                                      strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TriangleRoundRectangle':
                return <TriangleRoundRectangle size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                               strokeWidth={strokeWidth}
                                               strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TriangularPyramid':
                return <TriangularPyramid size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                          strokeWidth={strokeWidth}
                                          strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoEllipses':
                return <TwoEllipses size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoSemicircles':
                return <TwoSemicircles size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoTriangles':
                return <TwoTriangles size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                     strokeWidth={strokeWidth}
                                     strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'TwoTrianglesTwo':
                return <TwoTrianglesTwo size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                        strokeWidth={strokeWidth}
                                        strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'UpdateRotation':
                return <UpdateRotation size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                       strokeWidth={strokeWidth}
                                       strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Warehousing':
                return <Warehousing size={size} spin={spin} theme={theme} fill={this.fill(theme)}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin={strokeLinejoin} strokeLinecap={strokeLinecap}/>
            case 'Whirlwind':
                return <Whirlwind size={size} spin={spin} theme={theme} fill={this.fill(theme)}
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
IconParkAbstract.defaultProps = {
    visible: true,
    name: 'AdProduct',
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
