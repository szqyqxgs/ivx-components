import React from 'react'
import {
    AddIcon,
    AddRectangleIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    BrowseOffIcon,
    BrowseIcon,
    CartIcon,
    CheckIcon,
    ChevronLeftDoubleIcon,
    ChevronRightDoubleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ClearIcon,
    CloseIcon,
    CloudDownloadIcon,
    CloudUploadIcon,
    CloudIcon,
    CodeIcon,
    DeleteIcon,
    DesktopIcon,
    DiscountFilledIcon,
    DiscountIcon,
    DownloadIcon,
    EditIcon,
    EllipsisIcon,
    EnterIcon,
    FileAddIcon,
    FileCopyIcon,
    FileExcelIcon,
    FilterIcon,
    FolderAddIcon,
    FolderIcon,
    BackwardIcon,
    ForwardIcon,
    FullscreenExitIcon,
    FullscreenIcon,
    HeartIcon,
    HeartFilledIcon,
    HelpIcon,
    HelpCircleIcon,
    HomeIcon,
    HourglassIcon,
    InternetIcon,
    LinkUnlinkIcon,
    LinkIcon,
    LaptopIcon,
    JumpIcon,
    LocationIcon,
    LockOffIcon,
    OrderAscendingIcon,
    OrderDescendingIcon,
    PageFirstIcon,
    PageLastIcon,
    PhotoIcon,
    PinFilledIcon,
    PinIcon,
    PlayCircleFilledIcon,
    PlayCircleStrokeIcon,
    PlayCircleIcon,
    PoweroffIcon,
    PreviousIcon,
    PrintIcon,
    QrcodeIcon,
    RefreshIcon,
    RollbackIcon,
    RollfrontIcon,
    SaveIcon,
    ScanIcon,
    SearchIcon,
    SettingIcon,
    ShareIcon,
    StarFilledIcon,
    StarIcon,
    StopCircle1Icon,
    StopCircleFilledIcon,
    StopCircleIcon,
    SwapIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    ToolsIcon,
    UnfoldLessIcon,
    UnfoldMoreIcon,
    UploadIcon,
    UserAddIcon,
    UserCircleIcon,
    UserClearIcon,
    ViewColumnIcon,
    ViewListIcon,
    WifiIcon,
    ZoomInIcon,
    ZoomOutIcon
} from 'tdesign-icons-react'
import 'tdesign-react/es/style/index.css'

// 全局变量

export default class TdIcon extends React.Component {

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
    // 选择图标
    icon(name, size) {
        switch (name) {
            case 'AddIcon':
                return <AddIcon size={size}/>
            case 'AddRectangleIcon':
                return <AddRectangleIcon size={size}/>
            case 'ArrowDownIcon':
                return <ArrowDownIcon size={size}/>
            case 'ArrowUpIcon':
                return <ArrowUpIcon size={size}/>
            case 'ArrowLeftIcon':
                return <ArrowLeftIcon size={size}/>
            case 'ArrowRightIcon':
                return <ArrowRightIcon size={size}/>
            case 'BrowseOffIcon':
                return <BrowseOffIcon size={size}/>
            case 'BrowseIcon':
                return <BrowseIcon size={size}/>
            case 'CartIcon':
                return <CartIcon size={size}/>
            case 'CheckIcon':
                return <CheckIcon size={size}/>
            case 'ChevronLeftDoubleIcon':
                return <ChevronLeftDoubleIcon size={size}/>
            case 'ChevronRightDoubleIcon':
                return <ChevronRightDoubleIcon size={size}/>
            case 'ChevronLeftIcon':
                return <ChevronLeftIcon size={size}/>
            case 'ChevronRightIcon':
                return <ChevronRightIcon size={size}/>
            case 'ChevronUpIcon':
                return <ChevronUpIcon size={size}/>
            case 'ClearIcon':
                return <ClearIcon size={size}/>
            case 'CloseIcon':
                return <CloseIcon size={size}/>
            case 'CloudDownloadIcon':
                return <CloudDownloadIcon size={size}/>
            case 'CloudUploadIcon':
                return <CloudUploadIcon size={size}/>
            case 'CloudIcon':
                return <CloudIcon size={size}/>
            case 'CodeIcon':
                return <CodeIcon size={size}/>
            case 'DeleteIcon':
                return <DeleteIcon size={size}/>
            case 'DesktopIcon':
                return <DesktopIcon size={size}/>
            case 'DiscountFilledIcon':
                return <DiscountFilledIcon size={size}/>
            case 'DiscountIcon':
                return <DiscountIcon size={size}/>
            case 'DownloadIcon':
                return <DownloadIcon size={size}/>
            case 'EditIcon':
                return <EditIcon size={size}/>
            case 'EllipsisIcon':
                return <EllipsisIcon size={size}/>
            case 'EnterIcon':
                return <EnterIcon size={size}/>
            case 'FileAddIcon':
                return <FileAddIcon size={size}/>
            case 'FileCopyIcon':
                return <FileCopyIcon size={size}/>
            case 'FileExcelIcon':
                return <FileExcelIcon size={size}/>
            case 'FilterIcon':
                return <FilterIcon size={size}/>
            case 'FolderAddIcon':
                return <FolderAddIcon size={size}/>
            case 'FolderIcon':
                return <FolderIcon size={size}/>
            case 'BackwardIcon':
                return <BackwardIcon size={size}/>
            case 'ForwardIcon':
                return <ForwardIcon size={size}/>
            case 'FullscreenExitIcon':
                return <FullscreenExitIcon size={size}/>
            case 'FullscreenIcon':
                return <FullscreenIcon size={size}/>
            case 'HeartIcon':
                return <HeartIcon size={size}/>
            case 'HeartFilledIcon':
                return <HeartFilledIcon size={size}/>
            case 'HelpIcon':
                return <HelpIcon size={size}/>
            case 'HelpCircleIcon':
                return <HelpCircleIcon size={size}/>
            case 'HomeIcon':
                return <HomeIcon size={size}/>
            case 'HourglassIcon':
                return <HourglassIcon size={size}/>
            case 'InternetIcon':
                return <InternetIcon size={size}/>
            case 'LinkUnlinkIcon':
                return <LinkUnlinkIcon size={size}/>
            case 'LinkIcon':
                return <LinkIcon size={size}/>
            case 'LaptopIcon':
                return <LaptopIcon size={size}/>
            case 'JumpIcon':
                return <JumpIcon size={size}/>
            case 'LocationIcon':
                return <LocationIcon size={size}/>
            case 'LockOffIcon':
                return <LockOffIcon size={size}/>
            case 'OrderAscendingIcon':
                return <OrderAscendingIcon size={size}/>
            case 'OrderDescendingIcon':
                return <OrderDescendingIcon size={size}/>
            case 'PageFirstIcon':
                return <PageFirstIcon size={size}/>
            case 'PageLastIcon':
                return <PageLastIcon size={size}/>
            case 'PhotoIcon':
                return <PhotoIcon size={size}/>
            case 'PinFilledIcon':
                return <PinFilledIcon size={size}/>
            case 'PinIcon':
                return <PinIcon size={size}/>
            case 'PlayCircleFilledIcon':
                return <PlayCircleFilledIcon size={size}/>
            case 'PlayCircleStrokeIcon':
                return <PlayCircleStrokeIcon size={size}/>
            case 'PlayCircleIcon':
                return <PlayCircleIcon size={size}/>
            case 'PoweroffIcon':
                return <PoweroffIcon size={size}/>
            case 'PreviousIcon':
                return <PreviousIcon size={size}/>
            case 'PrintIcon':
                return <PrintIcon size={size}/>
            case 'QrcodeIcon':
                return <QrcodeIcon size={size}/>
            case 'RefreshIcon':
                return <RefreshIcon size={size}/>
            case 'RollbackIcon':
                return <RollbackIcon size={size}/>
            case 'RollfrontIcon':
                return <RollfrontIcon size={size}/>
            case 'SaveIcon':
                return <SaveIcon size={size}/>
            case 'ScanIcon':
                return <ScanIcon size={size}/>
            case 'SearchIcon':
                return <SearchIcon size={size}/>
            case 'SettingIcon':
                return <SettingIcon size={size}/>
            case 'ShareIcon':
                return <ShareIcon size={size}/>
            case 'StarFilledIcon':
                return <StarFilledIcon size={size}/>
            case 'StarIcon':
                return <StarIcon size={size}/>
            case 'StopCircle1Icon':
                return <StopCircle1Icon size={size}/>
            case 'StopCircleFilledIcon':
                return <StopCircleFilledIcon size={size}/>
            case 'StopCircleIcon':
                return <StopCircleIcon size={size}/>
            case 'SwapIcon':
                return <SwapIcon size={size}/>
            case 'ThumbDownIcon':
                return <ThumbDownIcon size={size}/>
            case 'ThumbUpIcon':
                return <ThumbUpIcon size={size}/>
            case 'ToolsIcon':
                return <ToolsIcon size={size}/>
            case 'UnfoldLessIcon':
                return <UnfoldLessIcon size={size}/>
            case 'UnfoldMoreIcon':
                return <UnfoldMoreIcon size={size}/>
            case 'UploadIcon':
                return <UploadIcon size={size}/>
            case 'UserAddIcon':
                return <UserAddIcon size={size}/>
            case 'UserCircleIcon':
                return <UserCircleIcon size={size}/>
            case 'UserClearIcon':
                return <UserClearIcon size={size}/>
            case 'ViewColumnIcon':
                return <ViewColumnIcon size={size}/>
            case 'ViewListIcon':
                return <ViewListIcon size={size}/>
            case 'WifiIcon':
                return <WifiIcon size={size}/>
            case 'ZoomInIcon':
                return <ZoomInIcon size={size}/>
            case 'ZoomOutIcon':
                return <ZoomOutIcon size={size}/>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {visible, enabledClassName, className, name, size, color} = this.props
        return visible ? <span
            onClick={this.click}
            className={enabledClassName && className ? className : null}
            style={{
                color: color
            }}
        >
            {this.icon(name, size)}
        </span> : null
    }
}