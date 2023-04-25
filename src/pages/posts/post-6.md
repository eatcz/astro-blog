---
layout: '../../layouts/PostLayout.astro'
title: 'Echarts配置项'
pubDate: 2023-04-24
description: 'Echarts配置项'
author: 'eatcz'
image:
    url: 'https://echarts.apache.org/examples/data/thumb/pictorialBar-dotted.webp?_v_=1679998106577' 
    alt: 'The Astro logo with the word One.'
tags: ["astro"]
slug: '/posts/post-6'
---
*Echarts配置项*
```
    title:标题组件，包含主标题和副标题。

    legend:图例组件。
        图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。

    grid:直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）

    xAxis:直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。

    yAxis:直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。

    polar:极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。

    radiusAxis:极坐标系的径向轴。

    angleAxis:极坐标系的角度轴。

    radar:雷达图坐标系组件，只适用于雷达图。该组件等同 ECharts 2 中的 polar 组件。因为 3 中的 polar 被重构为标准的极坐标组件，为避免混淆，雷达图使用 radar 组件作为其坐标系。

        雷达图坐标系与极坐标系不同的是它的每一个轴（indicator 指示器）都是一个单独的维度，可以通过 name、axisLine、axisTick、axisLabel、splitLine、 splitArea 几个配置项配置指示器坐标轴线的样式。

        dataZoom:dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
            现在支持这几种类型的 dataZoom 组件：
- 内置型数据区域缩放组件（dataZoomInside）：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。

- 滑动条型数据区域缩放组件（dataZoomSlider）：有单独的滑动条，用户在滑动条上进行缩放或漫游。

- 框选型数据区域缩放组件（dataZoomSelect）：提供一个选框进行数据区域缩放。即 toolbox.feature.dataZoom，配置项在 toolbox 中。

    visualMap:visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        视觉元素可以是：

symbol: 图元的图形类别。
symbolSize: 图元的大小。
color: 图元的颜色。
colorAlpha: 图元的颜色的透明度。
opacity: 图元以及其附属物（如文字标签）的透明度。
colorLightness: 颜色的明暗度，参见 HSL。
colorSaturation: 颜色的饱和度，参见 HSL。
colorHue: 颜色的色调，参见 HSL。
visualMap 组件可以定义多个，从而可以同时对数据中的多个维度进行视觉映射。

visualMap 组件可以定义为 分段型（visualMapPiecewise） 或 连续型

       tooltip: 提示框组件。
       axisPointer:这是坐标轴指示器（axisPointer）的全局公用设置。

       toolbox:工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。

       brush:brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。

       geo:地理坐标系组件。

        地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。

        parallel:平行坐标系介绍

        平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。

        parallelAxis:这个组件是平行坐标系中的坐标轴。

        singleAxis:单轴。可以被应用到散点图中展现一维数据

        timeline:timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能。

        graphic:graphic 是原生图形元素组件。可以支持的图形元素包括：

        image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,

        calendar:日历坐标系组件

        dataset:数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。

        aria:W3C 制定了无障碍富互联网应用规范集（WAI-ARIA，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。Apache ECharts 4 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。除此之外，Apache ECharts 5 新增支持贴花纹理，作为颜色的辅助表达，进一步用以区分数据。

        默认关闭，需要通过将 aria.enabled 设置为 true 开启。

        series:定义图片类型(例如折线图、饼图等)

        darkMode:是否是暗黑模式，默认会根据背景色 backgroundColor 的亮度自动设置。 如果是设置了容器的背景色而无法判断到，就可以使用该配置手动指定，echarts 会根据是否是暗黑模式调整文本等的颜色。

        该配置通常会被用于主题中。

        color:调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色.

        backgroundColor:背景色，默认无背景。

        textStyle:全局的字体样式.

        animation:是否开启动画。

        animationThreshold:是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。

        animationDuration:初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果

        animationEasing:初始动画的缓动效果。

        animationDelay:初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。

        animationDurationUpdate:数据更新动画的时长。

        支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果

        animationEasingUpdate:
        数据更新动画的缓动效果。

        animationDelayUpdate:数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

        stateAnimation:状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置。

        blendMode:图形的混合模式，

        hoverLayerThreshold:图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层。

        单独的 hover 层主要是为了在高亮图形的时候不需要重绘整个图表，只需要把高亮的图形放入单独的一个 canvas 层进行绘制，防止在图形数量很多的时候因为高亮重绘所有图形导致卡顿。

        ECharts 2 里是底层强制使用单独的层绘制高亮图形，但是会带来很多问题，比如高亮的图形可能会不正确的遮挡所有其它图形，还有图形有透明度因为高亮和正常图形叠加导致不正确的透明度显示，还有移动端上因为每个图表都要多一个 canvas 带来的额外内存开销。因此 3 里默认不会开启该优化，只有在图形数量特别多，有必要做该优化时才会自动开启。

        useUTC:是否使用 UTC 时间。

        options:用于 timeline 的 option 数组。数组的每一项是一个 echarts option (ECUnitOption)。

        media:移动端自适应。

```
animationDuration
初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：
```
animationDuration: function (idx) {
    // 越往后的数据时长越大
    return idx * 100;
}
```

animationDelay
初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。

如下示例：
```
animationDelay: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
}
```

animationDurationUpdate
数据更新动画的时长。

支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：
```
animationDurationUpdate: function (idx) {
    // 越往后的数据时长越大
    return idx * 100;
}
```

animationDelayUpdate
数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

如下示例：
```
animationDelayUpdate: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
}
```