## 数据集

> [数据集（dataset）](https://echarts.apache.org/handbook/zh/concepts/dataset)是专门用来管理数据的组件。虽然每个系列都可以在 series.data 中设置数据，但是从 ECharts4 支持数据集开始，更推荐使用数据集来管理数据。因为这样，数据可以被多个组件复用，也方便进行 “数据和其他配置” 分离的配置风格。毕竟，在运行时，数据是最常改变的，而其他配置大多并不会改变。

### 在系列中设置数据
----

> 这种方式的优点是，适于对一些特殊的数据结构（如“树”、“图”、超大数据）进行一定的数据类型定制。 但是缺点是，常需要用户先处理数据，把数据分割设置到各个系列（和类目轴）中。此外，不利于多个系列共享一份数据，也不利于基于原始数据进行图表类型、系列的映射安排。

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
						type: 'category',
						data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
					},
					yAxis: {},
					series: [{
							type: 'bar',
							name: '2015',
							data: [89.3, 92.1, 94.4, 85.4]
						},
						{
							type: 'bar',
							name: '2016',
							data: [95.8, 89.4, 91.2, 76.9]
						},
						{
							type: 'bar',
							name: '2017',
							data: [97.7, 83.1, 92.5, 78.1]
						}
					]
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
		width: 600px;
		height: 300px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/5b7afcb4f526498c94dd084f210a68b7.png)
### 在数据集中设置数据
---
> 而数据设置在 数据集（dataset） 中，会有这些好处：
>  - 能够贴近数据可视化常见思维方式：（I）提供数据，（II）指定数据到视觉的映射，从而形成图表。
>  - 数据和其他配置可以被分离开来。数据常变，其他配置常不变。分开易于分别管理。
>  - 数据可以被多个系列或者组件复用，对于大数据量的场景，不必为每个系列创建一份数据。
>  - 支持更多的数据的常用格式，例如二维数组、对象数组等，一定程度上避免使用者为了数据格式而进行转换。

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
					legend: {},
					tooltip: {},
					dataset: {
						// 提供一份数据。
						source: [
							['product', '2015', '2016', '2017'],
							['Matcha Latte', 43.3, 85.8, 93.7],
							['Milk Tea', 83.1, 73.4, 55.1],
							['Cheese Cocoa', 86.4, 65.2, 82.5],
							['Walnut Brownie', 72.4, 53.9, 39.1]
						]
					},
					// 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
					xAxis: {
						type: 'category'
					},
					// 声明一个 Y 轴，数值轴。
					yAxis: {},
					// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
					series: [{
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
		width: 600px;
		height: 300px;
	}
</style>
```
或者也可以使用常见的“对象数组”的格式：
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
					legend: {},
					tooltip: {},
					dataset: {
						// 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
						// 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
						// 如果不指定 dimensions，也可以通过指定 series.encode
						// 完成映射，参见后文。
						dimensions: ['product', '2015', '2016', '2017'],
						source: [{
								product: 'Matcha Latte',
								'2015': 43.3,
								'2016': 85.8,
								'2017': 93.7
							},
							{
								product: 'Milk Tea',
								'2015': 83.1,
								'2016': 73.4,
								'2017': 55.1
							},
							{
								product: 'Cheese Cocoa',
								'2015': 86.4,
								'2016': 65.2,
								'2017': 82.5
							},
							{
								product: 'Walnut Brownie',
								'2015': 72.4,
								'2016': 53.9,
								'2017': 39.1
							}
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
		width: 600px;
		height: 300px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/5b7afcb4f526498c94dd084f210a68b7.png)
### 把数据集（dataset）的行或列映射为系列（series）
---
> 有了数据表之后，使用者可以灵活地配置：数据如何对应到轴和图形系列。
用户可以使用 seriesLayoutBy 配置项，改变图表对于行列的理解。seriesLayoutBy 可取值：
'column': 默认值。系列被安放到 dataset 的列上面。
'row': 系列被安放到 dataset 的行上面。

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
					legend: {},
					tooltip: {},
					dataset: {
						source: [
							['product', '2012', '2013', '2014', '2015'],
							['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
							['Milk Tea', 86.5, 92.1, 85.7, 83.1],
							['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
						]
					},
					xAxis: [{
							type: 'category',
							gridIndex: 0
						},
						{
							type: 'category',
							gridIndex: 1
						}
					],
					yAxis: [{
						gridIndex: 0
					}, {
						gridIndex: 1
					}],
					grid: [{
						bottom: '55%'
					}, {
						top: '55%'
					}],
					series: [
						// 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
						{
							type: 'bar',
							seriesLayoutBy: 'row'
						},
						{
							type: 'bar',
							seriesLayoutBy: 'row'
						},
						{
							type: 'bar',
							seriesLayoutBy: 'row'
						},

						// 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
						{
							type: 'bar',
							xAxisIndex: 1,
							yAxisIndex: 1
						},
						{
							type: 'bar',
							xAxisIndex: 1,
							yAxisIndex: 1
						},
						{
							type: 'bar',
							xAxisIndex: 1,
							yAxisIndex: 1
						},
						{
							type: 'bar',
							xAxisIndex: 1,
							yAxisIndex: 1
						}
					]
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
		width: 600px;
		height: 300px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/b4bc76da92bd4ec2a640c9846d375632.png)

### 维度（dimension）
---

> 常用图表所描述的数据大部分是“二维表”结构，上述的例子中，我们都使用二维数组来容纳二维表。现在，当我们把系列（series）对应到“列”的时候，那么每一列就称为一个“维度（dimension）”，而每一行称为数据项（item）。反之，如果我们把系列（series）对应到表行，那么每一行就是“维度（dimension）”，每一列就是数据项（item）。
维度可以有单独的名字，便于在图表中显示。维度名（dimension name）可以在定义在 dataset 的第一行（或者第一列）。从第二行开始，才是正式的数据。dataset.source 中第一行（列）到底包含不包含维度名，ECharts 默认会自动探测。当然也可以设置 dataset.sourceHeader: true 显示声明第一行（列）就是维度，或者 dataset.sourceHeader: false 表明第一行（列）开始就直接是数据。
维度的定义，也可以使用单独的 dataset.dimensions 或者 series.dimensions 来定义，这样可以同时指定维度名，和维度的类型（dimension type）：
**大多数情况下，我们并不需要去设置维度类型，因为 ECharts 会自动尝试判断。但是如果不足够准确时，可以手动设置维度类型。**






