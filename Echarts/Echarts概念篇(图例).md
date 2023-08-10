## 图例

> 图例是图表中对内容区元素的注释、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息、却是了解图表信息的钥匙。

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
					legend: {
						icon: 'rect',
						//图例翻页
						type: 'scroll',
						orient: 'horizontal',
						width: 200,
						data: [{
								name: '2015',
								//图例图标样式
								icon: 'rect'
							},
							{
								name: '2016',
								icon: 'circle'
							},
							{
								name: '2017',
								icon: 'diamond'
							},
							{
								name: '2018',
								icon: 'roundRect'
							}
						],
						selected: {
							//图例交互默认显示
							'2015': true,
							//图例交互默认隐藏
							'2016': false,
							'2017': true,
							'2018': true,
						},
						//图例样式
						backgroundColor: '#ffffff',
						textStyle: {
							color: '#000000'
						}
					},
					dataset: {
						source: [
							['product', '2015', '2016', '2017', '2018'],
							['Matcha Latte', 43.3, 85.8, 93.7, 32.2],
							['Milk Tea', 83.1, 73.4, 55.1, 43.5],
							['Cheese Cocoa', 86.4, 65.2, 82.5, 84.3],
							['Walnut Brownie', 72.4, 53.9, 39.1, 56.3]
						]
					},
					xAxis: {
						type: 'category'
					},
					yAxis: {},
					series: [{
						type: 'bar'
					}, {
						type: 'bar'
					}, {
						type: 'bar'
					}, {
						type: 'bar'
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

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/b9e6576f5dda419f8f133a3672c1d1f4.gif#pic_center)


