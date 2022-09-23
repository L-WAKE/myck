<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<view>
			<text class="title">
				{{ title }}
			</text>
		</view>
		<u-button type="primary" @click="getProductDetal">发送GET请求</u-button>
		<view style="margin-bottom: 30rpx"></view>
		<u-button type="success" @click="getProductList">发送POST请求</u-button>
	</view>
</template>
<script>
import { product } from '@/api';

export default {
	name: 'AppIndex',
	data() {
		return {
			title: 'Hello'
		};
	},
	methods: {
		// 获取商品详情
		getProductDetal() {
			product
				.getDetail({ productId: '111' })
				.then(res => {
					if (res.code === 200) {
						console.log(res.data);
					} else {
						throw res.message;
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		// 查询商品列表
		getProductList() {
			product
				.getList({ productId: '222' })
				.then(res => {
					if (res.code === 200) {
						console.log(res.data);
					} else {
						throw res.message;
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin: 200rpx auto 50rpx auto;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: $uni-color-success;
}
</style>
