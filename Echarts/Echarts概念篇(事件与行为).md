## 事件与行为
---

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
				const option =  {
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left'
					},
					series: [{
						name: 'Access From',
						type: 'pie',
						radius: '50%',
						data: [{
								value: 1048,
								name: 'Search Engine'
							},
							{
								value: 735,
								name: 'Direct'
							},
							{
								value: 580,
								name: 'Email'
							},
							{
								value: 484,
								name: 'Union Ads'
							},
							{
								value: 300,
								name: 'Video Ads'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};
				chartBox.setOption(option);
				// chartBox.getZr().on('click', function(event) {
				//   if (!event.target) {
				// 	console.log('鼠标点击了空白处');
				//   }
				// });
				// chartBox.on('click', function(params) {
				// 	console.log('鼠标点击事件')
				// });
				// chartBox.on('dblclick', function(params) {
				// 	console.log('鼠标双击事件')
				// });
				// chartBox.on('mousedown', function(params) {
				// 	console.log("鼠标按下事件")
				// });
				// chartBox.on('mousemove', function(params) {
				// 	console.log('鼠标移动事件')
				// });
				// chartBox.on('mouseup', function(params) {
				// 	console.log('鼠标抬起事件')
				// });
				// chartBox.on('mouseover', function(params) {
				// 	console.log('鼠标移入事件')
				// });
				// chartBox.on('mouseout', function(params) {
				// 	console.log('鼠标移除事件')
				// });
				// chartBox.on('globalout', function(params) {
				// 	console.log('鼠标移除坐标系事件')
				// });
				// chartBox.on('contextmenu', function(params) {
				// 	console.log('鼠标右键点击事件')
				// });
				// 图例开关的行为只会触发 legendselectchanged 事件
				// chartBox.on('legendselectchanged', function(params) {
				// 	// 获取点击图例的选中状态
				// 	var isSelected = params.selected[params.name];
				// 	// 在控制台中打印
				// 	console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
				// 	// 打印所有图例的状态
				// 	console.log(params.selected);
				// });
				let currentIndex = -1;
				setInterval(function() {
					var dataLen = option.series[0].data.length;
					// 取消之前高亮的图形
					chartBox.dispatchAction({
						type: 'downplay',
						seriesIndex: 0,
						dataIndex: currentIndex
					});
					currentIndex = (currentIndex + 1) % dataLen;
					// 高亮当前图形
					chartBox.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: currentIndex
					});
					// 显示 tooltip
					chartBox.dispatchAction({
						type: 'showTip',
						seriesIndex: 0,
						dataIndex: currentIndex
					});
				}, 1000);
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
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/08d637cb798e46d79050af3f0ac3408a.gif#pic_center)



