---
layout: '../../layouts/PostLayout.astro'
title: 'Echarts学习笔记'
pubDate: 2023-04-24
description: 'Echarts学习笔记'
author: 'eatcz'
image:
    url: 'https://echarts.apache.org/examples/data/thumb/pictorialBar-dotted.webp?_v_=1679998106577' 
    alt: 'The Astro logo with the word One.'
tags: ["astro"]
slug: '/posts/post-7'
---

### 什么是Echarts

官方的描述是一个基于Javascript的开源可视化图表库。
简单来说就是利用js(还有canvans)来绘制图表.

### 使用方法

1.从CDN获取

    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js"></script>

2.从npm获取

` npm install echarts `

` yarn add echarts `

` pnpm install echarts` 

[echarts中文官网](https://echarts.apache.org/zh/index.html)

[从github打开echarts:](https://github.com/apache/echarts)

[在线定制](https://echarts.apache.org/zh/builder.html)

### 在项目中引入echarts

#### NPM安装Echarts

`npm install echarts --save ` 

#### 引入Echarts

```
import * as echarts from 'echarts'

<!-- 需要在html代码中指定一个dom容器，用来初始化echarts实例 -->

var myChart = echarts.init(document.getElementById('echarts'))

// 绘制图表

myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},  //鼠标悬停提示
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar', // 图表类型
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});

```
#### 按需引入Echarts

```
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// 接下来的使用就跟之前一样，初始化图表，设置配置项
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
  // ...
});
```

#### 在TypeScript中按需引入

```
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const option: ECOption = {
  // ...
};
```