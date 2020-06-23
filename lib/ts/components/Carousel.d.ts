import React from 'react';
import Thumbs from './Thumbs';
export interface Props {
    axis: 'horizontal' | 'vertical';
    autoPlay?: boolean;
    centerMode?: boolean;
    centerSlidePercentage: number;
    children?: React.ReactChild[];
    className?: string;
    dynamicHeight?: boolean;
    emulateTouch?: boolean;
    infiniteLoop?: boolean;
    interval: number;
    labels: {
        leftArrow: string;
        rightArrow: string;
        item: string;
    };
    onClickItem: (index: number, item: React.ReactNode) => void;
    onClickThumb: (index: number, item: React.ReactNode) => void;
    onChange: (index: number, item: React.ReactNode) => void;
    onSwipeStart: (event: React.TouchEvent) => void;
    onSwipeEnd: (event: React.TouchEvent) => void;
    onSwipeMove: (event: React.TouchEvent) => boolean;
    renderArrowPrev: (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
    renderArrowNext: (clickHandler: () => void, hasNext: boolean, label: string) => React.ReactNode;
    renderIndicator: (clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number, label: string) => React.ReactNode;
    renderItem: (item: React.ReactNode, options?: {
        isSelected: boolean;
    }) => React.ReactNode;
    renderThumbs: (children: React.ReactChild[]) => React.ReactChild[];
    selectedItem: number;
    showArrows: boolean;
    showStatus: boolean;
    showIndicators: boolean;
    showThumbs: boolean;
    statusFormatter: (currentItem: number, total: number) => string;
    stopOnHover: boolean;
    swipeable: boolean;
    swipeScrollTolerance: number;
    thumbWidth?: number;
    transitionTime: number;
    useKeyboardArrows?: boolean;
    verticalSwipe: 'natural' | 'standard';
    width: number | string;
}
interface State {
    autoPlay?: boolean;
    cancelClick: boolean;
    hasMount: boolean;
    initialized: boolean;
    isMouseEntered: boolean;
    itemSize: number;
    selectedItem: number;
    swiping?: boolean;
}
export default class Carousel extends React.Component<Props, State> {
    private thumbsRef?;
    private carouselWrapperRef?;
    private listRef?;
    private itemsRef?;
    private timer?;
    static displayName: string;
    static defaultProps: {
        axis: string;
        centerSlidePercentage: number;
        interval: number;
        labels: {
            leftArrow: string;
            rightArrow: string;
            item: string;
        };
        onClickItem: () => void;
        onClickThumb: () => void;
        onChange: () => void;
        onSwipeStart: () => void;
        onSwipeEnd: () => void;
        onSwipeMove: () => void;
        renderArrowPrev: (onClickHandler: () => void, hasPrev: boolean, label: string) => JSX.Element;
        renderArrowNext: (onClickHandler: () => void, hasNext: boolean, label: string) => JSX.Element;
        renderIndicator: (onClickHandler: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void, isSelected: boolean, index: number, label: string) => JSX.Element;
        renderItem: (item: React.ReactNode) => React.ReactNode;
        renderThumbs: (children: React.ReactChild[]) => {}[];
        statusFormatter: (current: number, total: number) => string;
        selectedItem: number;
        showArrows: boolean;
        showIndicators: boolean;
        showStatus: boolean;
        showThumbs: boolean;
        stopOnHover: boolean;
        swipeScrollTolerance: number;
        swipeable: boolean;
        transitionTime: number;
        verticalSwipe: string;
        width: string;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    setThumbsRef: (node: Thumbs) => void;
    setCarouselWrapperRef: (node: HTMLDivElement) => void;
    setListRef: (node: HTMLElement | HTMLUListElement) => void;
    setItemsRef: (node: HTMLElement, index: number) => void;
    setupCarousel(): void;
    destroyCarousel(): void;
    setupAutoPlay(): void;
    destroyAutoPlay(): void;
    bindEvents(): void;
    unbindEvents(): void;
    autoPlay: () => void;
    clearAutoPlay: () => void;
    resetAutoPlay: () => void;
    stopOnHover: () => void;
    startOnLeave: () => void;
    isFocusWithinTheCarousel: () => boolean;
    navigateWithKeyboard: (e: KeyboardEvent) => void;
    updateSizes: () => void;
    setMountState: () => void;
    handleClickItem: (index: number, item: React.ReactNode) => void;
    handleOnChange: (index: number, item: React.ReactNode) => void;
    handleClickThumb: (index: number, item: React.ReactNode) => void;
    onSwipeStart: (event: React.TouchEvent<Element>) => void;
    onSwipeEnd: (event: React.TouchEvent<Element>) => void;
    onSwipeMove: (delta: {
        x: number;
        y: number;
    }, event: React.TouchEvent<Element>) => boolean | undefined;
    getPosition(index: number): number;
    setPosition: (position: number, forceReflow?: boolean | undefined) => void;
    resetPosition: () => void;
    decrement: (positions?: number, fromSwipe?: boolean) => void;
    increment: (positions?: number, fromSwipe?: boolean) => void;
    moveTo: (position?: number | undefined, fromSwipe?: boolean | undefined) => void;
    onClickNext: () => void;
    onClickPrev: () => void;
    onSwipeForward: () => void;
    onSwipeBackwards: () => void;
    changeItem: (newIndex: number) => (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
    selectItem: (state: Pick<State, "selectedItem" | "swiping">, cb?: (() => void) | undefined) => void;
    getInitialImage: () => HTMLImageElement | undefined;
    getVariableImageHeight: (position: number) => number | null;
    renderItems(isClone?: boolean): JSX.Element[];
    renderControls(): JSX.Element | null;
    renderStatus(): JSX.Element | null;
    renderThumbs(): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};
//# sourceMappingURL=Carousel.d.ts.map