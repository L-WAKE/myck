import http from '@/utils/http';

const product = {
	// 获取产品列表
	getList: data => {
		return http.post('/product/mobile/list', data);
	},
	// 获取产品详情
	getDetail(params) {
		return http.get('/product/detail', {
			params
		});
	}
};
export default product;
