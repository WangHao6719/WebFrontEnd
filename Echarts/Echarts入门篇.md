## 概念
> [ECharts](https://echarts.apache.org/zh/index.html)，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。
>
## 特性

 1. ### 丰富的图表类型

> 提供开箱即用的 20 多种图表和十几种组件，并且支持各种图表以及组件的任意组合。

 2. ### 强劲的渲染引擎

> Canvas、SVG 双引擎一键切换，增量渲染、流加载等技术实现千万级数据的流畅交互。

3. ### 专业的数据分析

> 通过数据集管理数据，支持数据过滤、聚类、回归，帮助实现同一份数据的多维度分析。

4. ### 优雅的可视化设计

> 默认设计遵从可视化原则，支持响应式设计，并且提供了灵活的配置项方便开发者定制。

5. ### 健康的开源社区

> 活跃的社区用户保证了项目的健康发展，也贡献了丰富的第三方插件满足不同场景的需求。

6. ### 友好的无障碍访问

> 智能生成的图表描述和贴花图案，帮助视力障碍人士了解图表内容，读懂图表背后的故事。

## 在项目中引入 ECharts
### NPM 安装 ECharts

```javascript
npm install echarts --save
```
### 引入 ECharts

```javascript
// 引入echarts
import * as echarts from 'echarts';
 
// 挂载到vue实例中
Vue.prototype.$echarts = echarts
 
调用的时候就是 ：  this.$echarts
```

