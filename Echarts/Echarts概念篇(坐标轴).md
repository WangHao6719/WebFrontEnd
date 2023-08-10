## 坐标轴
### x 轴、y 轴
---

> x 轴和 y 轴都由轴线、刻度、刻度标签、轴标题四个部分组成。部分图表中还会有网格线来帮助查看和计算数据

![x/y](https://img-blog.csdnimg.cn/ef3ce2a2b0214bee9b4d06e40990d16c.png)

> 普通的二维数据坐标系都有 x 轴和 y 轴，通常情况下，x 轴显示在图表的底部，y 轴显示在左侧。
>  - x 轴常用来标示数据的维度，维度一般用来指数据的类别，是观察数据的角度，例如“销售时间” “销售地点” “产品名称”等。y 轴常常用来标示数据的数值，数值是用来具体考察某一类数据的数量值，也是我们需要分析的指标，例如“销售数量”和“销售金额”等。
>  - 当 x 轴（水平坐标轴）跨度很大，可以采用区域缩放方式灵活显示数据内容。
 > - 在二维数据中，轴也可以有多个。ECharts 中一般情况下单个 grid 组件最多只能放两个 x/y 轴，多于两个 x/y 轴需要通过配置 offset 属性防止同个位置多个轴的重叠。两个 x 轴显示在上下，两个 y 轴显示在左右两侧。

### 轴线
---

> ECharts 提供了轴线 axisLine 相关的配置，我们可以根据实际情况调整，例如轴线两端的箭头，轴线的样式等。
### 刻度
---

>ECharts 提供了轴线 axisTick 相关的配置，我们可以根据实际情况调整，例如刻度线的长度，样式等。

### 刻度标签
---

>ECharts 提供了轴线 axisLabel 相关的配置，我们可以根据实际情况调整，例如文字对齐方式，自定义刻度标签内容等。

```javascript
<template>
	<div>
		<div id="main"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			// 初始化图表
			initEcharts() {
				//初始化加载
				const chartBox = this.$echarts.init(document.getElementById("main"));
				const option = {
					title: {
						text: 'ECharts示例'
					},
					tooltip: {},
					xAxis: {
						name: '产品名称',
						nameLocation: 'center',
						data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
						// 刻度
						axisTick: {
							//长度10
							length: 10,
							lineStyle: {
								//虚线
								type: 'dashed'
							}
						}
					},
					yAxis: [{
						type: 'value',
						name: '销售数量',
						//最小值
						min:0,
						//最大值
						max:700,
						// 坐标轴分割间隔
						interval:100,
						// 轴线
						axisLine: {
							show:true,
							//箭头指向
							symbol:['none', 'arrow'],
							//实线
							lineStyle: {
								type: 'soild'
							}
						},
						// 刻度标签
						axisLabel: {
							formatter: '{value} 个',
							align: 'right'
						},
					},{
						type: 'value',
						name: '销售金额',
						min:0,
						max:700,
						interval:100,
						// 轴线
						axisLine: {
							show:true,
							//实线
							lineStyle: {
								type: 'soild'
							}
						},
						// 刻度标签
						axisLabel: {
							formatter: '{value} 元',
							align: 'left'
						},
					}],
					//区域缩放
					dataZoom: [{
						//外部slider 内部 inside
						type: 'slider',
						show: true,
					}],
					series: [{
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20],
						//y轴索引-多个 y轴的时候有用
						yAxisIndex: 0
					},{
						type: 'line',
						data: [100, 250, 626, 140, 170, 240],
						//y轴索引-多个 y轴的时候有用
						yAxisIndex: 1
					}]
				};
				chartBox.setOption(option);
			},
		},
		mounted() {
			this.initEcharts();
		},
	};
</script>

<style scoped>
	#main {
		width: 700px;
		height: 300px;
	}
</style>

```


> 
> **外部缩放**
> ![代码效果](https://img-blog.csdnimg.cn/e94e697bcbe340c7bf4534c5304496e3.gif)


>  **内部缩放**
![代码效果](https://img-blog.csdnimg.cn/41c7993e1f58490ea9d6d93b9438a0b1.gif)




