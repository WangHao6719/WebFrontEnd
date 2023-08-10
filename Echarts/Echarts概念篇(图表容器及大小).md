## 图表容器及大小
### 初始化
---
#### 在 HTML 中定义有宽度和高度的父容器（推荐）

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
				const chartBox = this.$echarts.init(document.getElementById("main"));
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
		min-width: 400px;
		min-height: 300px;
	}
</style>
```

> 代码效果
![代码效果](https://img-blog.csdnimg.cn/6a3321addf154c0d90264705b22e9de6.png#pic_center)
#### 指定图表的大小

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
				const chartBox = this.$echarts.init(document.getElementById("main"),null,{
					width:400,
					height:300
				});
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
```

> 代码效果
![代码效果](https://img-blog.csdnimg.cn/6a3321addf154c0d90264705b22e9de6.png#pic_center)


#### 响应容器大小的变化
---

#### 监听图表容器的大小并改变图表大小

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
				window.addEventListener("resize", function() {
					chartBox.resize();
				});
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
> ![代码效果](https://img-blog.csdnimg.cn/0af9b4d4f2f644578c922ce331e9068c.gif#pic_center)
#### 为图表设置特定的大小

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
				window.addEventListener("resize", function() {
					// chartBox.resize();
					// 除了直接调用 resize() 不含参数的形式之外，还可以指定宽度和高度，实现图表大小不等于容器大小的效果。
					chartBox.resize({
					  width: 800,
					  height: 400
					});
				});
			},
		},
		mounted() {
			this.initEcharts();
		},
	};
</script>

<style scoped>
	html,body{
		width: 100%;
		height: 100%;
	}
	#main {
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/cdf5e948036d47dcb5782572a21fc845.gif#pic_center)


### 销毁

> 页面中存在多个标签页，每个标签页都包含一些图表。当选中一个标签页的时候，其他标签页的内容在 DOM 中被移除了。这样，当用户再选中这些标签页的时候，就会发现图表“不见”了。
> 本质上，这是由于图表的容器节点被移除导致的。即使之后该节点被重新添加，图表所在的节点也已经不存在了。
正确的做法是，在图表容器被销毁之后，调用 dispose 销毁实例，在图表容器重新被添加后再次调用 echarts.init 初始化。

```javascript
<template>
	<div>
		<div id="main" v-if="showEcharts"></div>
		<div class="btnGroup">
			<div @click="disposeEcharts" class="dispose">销毁图表</div>
			<div @click="initEcharts" class="init">初始图表</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//是否显示图表
				showEcharts: false,
			};
		},
		methods: {
			//销毁图表
			disposeEcharts() {
				this.showEcharts = false
				const chartBox = this.$echarts.init(document.getElementById("main"));
				chartBox.dispose()
			},
			// 初始化图表
			initEcharts() {
				// 基本柱形图
				this.showEcharts = true
				this.$nextTick(function() {
					const chartBox = this.$echarts.init(document.getElementById("main"));
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
				})

			},
		},
		mounted() {
			this.initEcharts();
		},
	};
</script>

<style scoped>
	#main,
	html,
	body {
		width: 100%;
	}

	.btnGroup {
		display: flex;
		width: 300px;
		margin: 20px auto;
		justify-content: space-between;
	}

	.dispose {
		width: 120px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #737373;
		background-color: #dd6b66;
		border-radius: 10px;
	}

	.init {
		width: 120px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #737373;
		background-color: #e69d87;
		border-radius: 10px;
	}

	#main {
		min-width: 600px;
		min-height: 400px;
	}
</style>
```

> 代码效果
> ![代码效果](https://img-blog.csdnimg.cn/691ff29f821f4f85935f12d144960f5a.gif#pic_center)



