## ECharts 中的样式简介
### 颜色主题（Theme）
---
> ECharts5 除了一贯的默认主题外，还内置了'dark'主题。可以像这样切换成深色模式：


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
				//深色模式初始化
				const chartBox = this.$echarts.init(document.getElementById("main"), 'dark');
				const option = {
					xAxis: {
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					},
					yAxis: {},
					series: [{
						type: 'bar',
						data: [23, 24, 18, 25, 27, 28, 25],
					}],
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
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/a16d2afdf37449a18673addb62bba8c8.png#pic_center)


> 其他的主题，没有内置在 ECharts 中，需要自己加载。这些主题可以在 [主题编辑器](https://echarts.apache.org/zh/theme-builder.html) 里访问到。也可以使用这个主题编辑器，自己编辑主题。下载下来的主题可以这样使用：
> 主题保存为 JSON 文件，则需要自行加载和注册，例如：

```javascript
<template>
	<div>
		<div id="main"></div>
	</div>
</template>

<script>
	//引入自定义主题样式
	import chalk from "../assets/chalk.json"
	export default {
		data() {
			return {};
		},
		methods: {
			// 初始化图表
			initEcharts() {
				//注册主题
				this.$echarts.registerTheme('chalk', chalk)
				//初始化加载
				const chartBox = this.$echarts.init(document.getElementById("main"), 'chalk');
				const option = {
					xAxis: {
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					},
					yAxis: {},
					series: [{
						type: 'bar',
						data: [23, 24, 18, 25, 27, 28, 25],
					}],
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
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/f316578f596646989af01c15ecda41da.png#pic_center)
### 调色盘
---
> 调色盘，可以在 option 中设置。它给定了一组颜色，图形、系列会自动从其中选择颜色。 可以设置全局的调色盘，也可以设置系列自己专属的调色盘。

#### 全局调色盘
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
					// 全局调色盘。
					color: [
						'#c23531',
						'#2f4554',
						'#61a0a8',
						'#d48265',
						'#91c7ae',
						'#749f83',
						'#ca8622',
						'#bda29a',
						'#6e7074',
						'#546570',
						'#c4ccd3'
					],
					xAxis: {
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					},
					yAxis: {},
					series: [{
						type: 'bar',
						data: [23, 24, 18, 25, 27, 28, 25],
					}],
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
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/2c582794a6ae4dc9825af3d44f2213ff.png)

#### 系列调色盘

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
					xAxis: {
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					},
					yAxis: {},
					series: [{
						type: 'bar',
						// 此系列自己的调色盘。
						color: [
							'#2f4554',
							'#c23531',
							'#61a0a8',
							'#d48265',
							'#91c7ae',
							'#749f83',
							'#ca8622',
							'#bda29a',
							'#6e7074',
							'#546570',
							'#c4ccd3'
						],
						data: [23, 24, 18, 25, 27, 28, 25],
					}],
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
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/3afc53c736cc49a98e44945b42849dce.png)
### 直接的样式设置
---
> 直接的样式设置是比较常用设置方式。纵观 ECharts 的 option 中，很多地方可以设置 itemStyle、lineStyle、areaStyle、label 等等。这些的地方可以直接设置图形元素的颜色、线宽、点的大小、标签的文字、标签的样式等等。
一般来说，ECharts 的各个系列和组件，都遵从这些命名习惯，虽然不同图表和组件中，itemStyle、label 等可能出现在不同的地方。

### 高亮的样式：emphasis
---

> 在鼠标悬浮到图形元素上时，一般会出现高亮的样式。默认情况下，高亮的样式是根据普通样式自动生成的。但是高亮的样式也可以自己定义，主要是通过 emphasis 属性来定制。emphasis 中的结构，和普通样式的结构相同，例如：

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
					xAxis: {
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					},
					// 高亮样式。
					emphasis: {
						itemStyle: {
							// 高亮时的颜色。
							color: '#ff007f'
						},
						label: {
							show: true,
							// 高亮时标签的文字。
							formatter: function(e) {
								return e.name + '/' + e.data
							}
						}
					},
					yAxis: {},
					series: [{
						type: 'bar',
						data: [23, 24, 18, 25, 27, 28, 25],
					}],
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
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/fdad8f0e77db4aa4945edc05c4549b18.gif#pic_center)


