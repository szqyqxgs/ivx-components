import React from 'react'
import {Button} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'
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

// 全局变量

export default class TdButton extends React.Component {

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
    // 选择左侧图标
    icon(icon) {
        switch (icon) {
            case 'none':
                return null
            case 'AddIcon':
                return <AddIcon/>
            case 'AddRectangleIcon':
                return <AddRectangleIcon/>
            case 'ArrowDownIcon':
                return <ArrowDownIcon/>
            case 'ArrowUpIcon':
                return <ArrowUpIcon/>
            case 'ArrowLeftIcon':
                return <ArrowLeftIcon/>
            case 'ArrowRightIcon':
                return <ArrowRightIcon/>
            case 'BrowseOffIcon':
                return <BrowseOffIcon/>
            case 'BrowseIcon':
                return <BrowseIcon/>
            case 'CartIcon':
                return <CartIcon/>
            case 'CheckIcon':
                return <CheckIcon/>
            case 'ChevronLeftDoubleIcon':
                return <ChevronLeftDoubleIcon/>
            case 'ChevronRightDoubleIcon':
                return <ChevronRightDoubleIcon/>
            case 'ChevronLeftIcon':
                return <ChevronLeftIcon/>
            case 'ChevronRightIcon':
                return <ChevronRightIcon/>
            case 'ChevronUpIcon':
                return <ChevronUpIcon/>
            case 'ClearIcon':
                return <ClearIcon/>
            case 'CloseIcon':
                return <CloseIcon/>
            case 'CloudDownloadIcon':
                return <CloudDownloadIcon/>
            case 'CloudUploadIcon':
                return <CloudUploadIcon/>
            case 'CloudIcon':
                return <CloudIcon/>
            case 'CodeIcon':
                return <CodeIcon/>
            case 'DeleteIcon':
                return <DeleteIcon/>
            case 'DesktopIcon':
                return <DesktopIcon/>
            case 'DiscountFilledIcon':
                return <DiscountFilledIcon/>
            case 'DiscountIcon':
                return <DiscountIcon/>
            case 'DownloadIcon':
                return <DownloadIcon/>
            case 'EditIcon':
                return <EditIcon/>
            case 'EllipsisIcon':
                return <EllipsisIcon/>
            case 'EnterIcon':
                return <EnterIcon/>
            case 'FileAddIcon':
                return <FileAddIcon/>
            case 'FileCopyIcon':
                return <FileCopyIcon/>
            case 'FileExcelIcon':
                return <FileExcelIcon/>
            case 'FilterIcon':
                return <FilterIcon/>
            case 'FolderAddIcon':
                return <FolderAddIcon/>
            case 'FolderIcon':
                return <FolderIcon/>
            case 'BackwardIcon':
                return <BackwardIcon/>
            case 'ForwardIcon':
                return <ForwardIcon/>
            case 'FullscreenExitIcon':
                return <FullscreenExitIcon/>
            case 'FullscreenIcon':
                return <FullscreenIcon/>
            case 'HeartIcon':
                return <HeartIcon/>
            case 'HeartFilledIcon':
                return <HeartFilledIcon/>
            case 'HelpIcon':
                return <HelpIcon/>
            case 'HelpCircleIcon':
                return <HelpCircleIcon/>
            case 'HomeIcon':
                return <HomeIcon/>
            case 'HourglassIcon':
                return <HourglassIcon/>
            case 'InternetIcon':
                return <InternetIcon/>
            case 'LinkUnlinkIcon':
                return <LinkUnlinkIcon/>
            case 'LinkIcon':
                return <LinkIcon/>
            case 'LaptopIcon':
                return <LaptopIcon/>
            case 'JumpIcon':
                return <JumpIcon/>
            case 'LocationIcon':
                return <LocationIcon/>
            case 'LockOffIcon':
                return <LockOffIcon/>
            case 'OrderAscendingIcon':
                return <OrderAscendingIcon/>
            case 'OrderDescendingIcon':
                return <OrderDescendingIcon/>
            case 'PageFirstIcon':
                return <PageFirstIcon/>
            case 'PageLastIcon':
                return <PageLastIcon/>
            case 'PhotoIcon':
                return <PhotoIcon/>
            case 'PinFilledIcon':
                return <PinFilledIcon/>
            case 'PinIcon':
                return <PinIcon/>
            case 'PlayCircleFilledIcon':
                return <PlayCircleFilledIcon/>
            case 'PlayCircleStrokeIcon':
                return <PlayCircleStrokeIcon/>
            case 'PlayCircleIcon':
                return <PlayCircleIcon/>
            case 'PoweroffIcon':
                return <PoweroffIcon/>
            case 'PreviousIcon':
                return <PreviousIcon/>
            case 'PrintIcon':
                return <PrintIcon/>
            case 'QrcodeIcon':
                return <QrcodeIcon/>
            case 'RefreshIcon':
                return <RefreshIcon/>
            case 'RollbackIcon':
                return <RollbackIcon/>
            case 'RollfrontIcon':
                return <RollfrontIcon/>
            case 'SaveIcon':
                return <SaveIcon/>
            case 'ScanIcon':
                return <ScanIcon/>
            case 'SearchIcon':
                return <SearchIcon/>
            case 'SettingIcon':
                return <SettingIcon/>
            case 'ShareIcon':
                return <ShareIcon/>
            case 'StarFilledIcon':
                return <StarFilledIcon/>
            case 'StarIcon':
                return <StarIcon/>
            case 'StopCircle1Icon':
                return <StopCircle1Icon/>
            case 'StopCircleFilledIcon':
                return <StopCircleFilledIcon/>
            case 'StopCircleIcon':
                return <StopCircleIcon/>
            case 'SwapIcon':
                return <SwapIcon/>
            case 'ThumbDownIcon':
                return <ThumbDownIcon/>
            case 'ThumbUpIcon':
                return <ThumbUpIcon/>
            case 'ToolsIcon':
                return <ToolsIcon/>
            case 'UnfoldLessIcon':
                return <UnfoldLessIcon/>
            case 'UnfoldMoreIcon':
                return <UnfoldMoreIcon/>
            case 'UploadIcon':
                return <UploadIcon/>
            case 'UserAddIcon':
                return <UserAddIcon/>
            case 'UserCircleIcon':
                return <UserCircleIcon/>
            case 'UserClearIcon':
                return <UserClearIcon/>
            case 'ViewColumnIcon':
                return <ViewColumnIcon/>
            case 'ViewListIcon':
                return <ViewListIcon/>
            case 'WifiIcon':
                return <WifiIcon/>
            case 'ZoomInIcon':
                return <ZoomInIcon/>
            case 'ZoomOutIcon':
                return <ZoomOutIcon/>
            default:
                return
        }
    }

    // 选择右侧图标
    suffix(suffix) {
        switch (suffix) {
            case 'none':
                return null
            case 'AddIcon':
                return <AddIcon/>
            case 'AddRectangleIcon':
                return <AddRectangleIcon/>
            case 'ArrowDownIcon':
                return <ArrowDownIcon/>
            case 'ArrowUpIcon':
                return <ArrowUpIcon/>
            case 'ArrowLeftIcon':
                return <ArrowLeftIcon/>
            case 'ArrowRightIcon':
                return <ArrowRightIcon/>
            case 'BrowseOffIcon':
                return <BrowseOffIcon/>
            case 'BrowseIcon':
                return <BrowseIcon/>
            case 'CartIcon':
                return <CartIcon/>
            case 'CheckIcon':
                return <CheckIcon/>
            case 'ChevronLeftDoubleIcon':
                return <ChevronLeftDoubleIcon/>
            case 'ChevronRightDoubleIcon':
                return <ChevronRightDoubleIcon/>
            case 'ChevronLeftIcon':
                return <ChevronLeftIcon/>
            case 'ChevronRightIcon':
                return <ChevronRightIcon/>
            case 'ChevronUpIcon':
                return <ChevronUpIcon/>
            case 'ClearIcon':
                return <ClearIcon/>
            case 'CloseIcon':
                return <CloseIcon/>
            case 'CloudDownloadIcon':
                return <CloudDownloadIcon/>
            case 'CloudUploadIcon':
                return <CloudUploadIcon/>
            case 'CloudIcon':
                return <CloudIcon/>
            case 'CodeIcon':
                return <CodeIcon/>
            case 'DeleteIcon':
                return <DeleteIcon/>
            case 'DesktopIcon':
                return <DesktopIcon/>
            case 'DiscountFilledIcon':
                return <DiscountFilledIcon/>
            case 'DiscountIcon':
                return <DiscountIcon/>
            case 'DownloadIcon':
                return <DownloadIcon/>
            case 'EditIcon':
                return <EditIcon/>
            case 'EllipsisIcon':
                return <EllipsisIcon/>
            case 'EnterIcon':
                return <EnterIcon/>
            case 'FileAddIcon':
                return <FileAddIcon/>
            case 'FileCopyIcon':
                return <FileCopyIcon/>
            case 'FileExcelIcon':
                return <FileExcelIcon/>
            case 'FilterIcon':
                return <FilterIcon/>
            case 'FolderAddIcon':
                return <FolderAddIcon/>
            case 'FolderIcon':
                return <FolderIcon/>
            case 'BackwardIcon':
                return <BackwardIcon/>
            case 'ForwardIcon':
                return <ForwardIcon/>
            case 'FullscreenExitIcon':
                return <FullscreenExitIcon/>
            case 'FullscreenIcon':
                return <FullscreenIcon/>
            case 'HeartIcon':
                return <HeartIcon/>
            case 'HeartFilledIcon':
                return <HeartFilledIcon/>
            case 'HelpIcon':
                return <HelpIcon/>
            case 'HelpCircleIcon':
                return <HelpCircleIcon/>
            case 'HomeIcon':
                return <HomeIcon/>
            case 'HourglassIcon':
                return <HourglassIcon/>
            case 'InternetIcon':
                return <InternetIcon/>
            case 'LinkUnlinkIcon':
                return <LinkUnlinkIcon/>
            case 'LinkIcon':
                return <LinkIcon/>
            case 'LaptopIcon':
                return <LaptopIcon/>
            case 'JumpIcon':
                return <JumpIcon/>
            case 'LocationIcon':
                return <LocationIcon/>
            case 'LockOffIcon':
                return <LockOffIcon/>
            case 'OrderAscendingIcon':
                return <OrderAscendingIcon/>
            case 'OrderDescendingIcon':
                return <OrderDescendingIcon/>
            case 'PageFirstIcon':
                return <PageFirstIcon/>
            case 'PageLastIcon':
                return <PageLastIcon/>
            case 'PhotoIcon':
                return <PhotoIcon/>
            case 'PinFilledIcon':
                return <PinFilledIcon/>
            case 'PinIcon':
                return <PinIcon/>
            case 'PlayCircleFilledIcon':
                return <PlayCircleFilledIcon/>
            case 'PlayCircleStrokeIcon':
                return <PlayCircleStrokeIcon/>
            case 'PlayCircleIcon':
                return <PlayCircleIcon/>
            case 'PoweroffIcon':
                return <PoweroffIcon/>
            case 'PreviousIcon':
                return <PreviousIcon/>
            case 'PrintIcon':
                return <PrintIcon/>
            case 'QrcodeIcon':
                return <QrcodeIcon/>
            case 'RefreshIcon':
                return <RefreshIcon/>
            case 'RollbackIcon':
                return <RollbackIcon/>
            case 'RollfrontIcon':
                return <RollfrontIcon/>
            case 'SaveIcon':
                return <SaveIcon/>
            case 'ScanIcon':
                return <ScanIcon/>
            case 'SearchIcon':
                return <SearchIcon/>
            case 'SettingIcon':
                return <SettingIcon/>
            case 'ShareIcon':
                return <ShareIcon/>
            case 'StarFilledIcon':
                return <StarFilledIcon/>
            case 'StarIcon':
                return <StarIcon/>
            case 'StopCircle1Icon':
                return <StopCircle1Icon/>
            case 'StopCircleFilledIcon':
                return <StopCircleFilledIcon/>
            case 'StopCircleIcon':
                return <StopCircleIcon/>
            case 'SwapIcon':
                return <SwapIcon/>
            case 'ThumbDownIcon':
                return <ThumbDownIcon/>
            case 'ThumbUpIcon':
                return <ThumbUpIcon/>
            case 'ToolsIcon':
                return <ToolsIcon/>
            case 'UnfoldLessIcon':
                return <UnfoldLessIcon/>
            case 'UnfoldMoreIcon':
                return <UnfoldMoreIcon/>
            case 'UploadIcon':
                return <UploadIcon/>
            case 'UserAddIcon':
                return <UserAddIcon/>
            case 'UserCircleIcon':
                return <UserCircleIcon/>
            case 'UserClearIcon':
                return <UserClearIcon/>
            case 'ViewColumnIcon':
                return <ViewColumnIcon/>
            case 'ViewListIcon':
                return <ViewListIcon/>
            case 'WifiIcon':
                return <WifiIcon/>
            case 'ZoomInIcon':
                return <ZoomInIcon/>
            case 'ZoomOutIcon':
                return <ZoomOutIcon/>
            default:
                return
        }
    }

    // 选择子组件位置
    /*
    请注意根据本组件元素(按钮文本）的对齐方式调整本组件以下参数、默认属性、组件属性默认值
    排列方式：column（纵向排列）、row（横向排列）
    alignItems属性（如何对齐），合法值：flex-start（居左或居上）、center（居中）、flex-end（居右或居下）
    flexWrap属性（如何换行）：合法值：nowrap（不换行）、wrap（换行，第一行在上方）、wrap-reverse（换行，第一行在下方）
    */
    childrenPosition(childrenPosition) {
        switch (childrenPosition) {
            case 'top':
                return {display: 'flex', flexDirection: 'column', alignItems: 'center'}
            case 'bottom':
                return {display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}
            case 'left':
                return {display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center'}
            case 'right':
                return {display: 'flex', flexDirection: 'row-reverse', flexWrap: 'nowrap', alignItems: 'center'}
            default:
                return
        }
    }

    // 选择子组件
    dividerChildren(childrenPosition, spacing, content) {
        switch (childrenPosition) {
            case 'top':
                return <span
                    style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginTop: spacing}}>{content}</span>
            </span>
            case 'bottom':
                return <span style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginBottom: spacing}}>{content}</span>
            </span>
            case 'left':
                return <span
                    style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginLeft: spacing}}>{content}</span>
            </span>
            case 'right':
                return <span style={this.childrenPosition(childrenPosition)}>{this.props.children}<span
                    style={{marginRight: spacing}}>{content}</span>
            </span>
            default:
                return
        }
    }

    render() {
        // 属性、事件、函数
        let {
            visible,
            enabledClassName,
            className,
            content,
            block,
            type,
            shape,
            size,
            theme,
            ghost,
            loading,
            disabled,
            enabledIcon,
            icon,
            suffix,
            tag,
            variant,
            childrenPosition,
            spacing
        } = this.props
        let childrenCount = React.Children.count(this.props.children)
        return visible ? <Button
            onClick={this.click}
            // style={}
            className={enabledClassName && className ? className : null}
            block={block}
            type={type}
            shape={shape}
            size={size}
            theme={theme}
            ghost={ghost}
            loading={loading}
            disabled={disabled}
            icon={enabledIcon ? this.icon(icon) : null}
            suffix={enabledIcon ? this.suffix(suffix) : null}
            tag={tag}
            variant={variant}
        >
            {childrenCount ? this.dividerChildren(childrenPosition, spacing, content) : content}
        </Button> : null
    }
}