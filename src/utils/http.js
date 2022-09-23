import Request from 'luch-request';
import qs from 'qs';
import { baseUrl } from '@/config';

const http = new Request({
	baseURL: baseUrl
});

// 在请求之前拦截
http.interceptors.request.use(
	config => {
		const cf = config;
		cf.header.token = uni.getStorageSync('token');
		return cf;
	},
	config => {
		// 可使用async await 做异步操作
		return Promise.reject(config);
	}
);

// 在请求之后拦截
http.interceptors.response.use(
	response => {
		if (response.data.code !== 200) {
			// 服务端返回的状态码不等于200，则reject()
			return Promise.reject(response);
		}
		return response.data;
	},
	response => {
		// 对响应错误做点什么 （statusCode !== 200）
		uni.showToast({
			icon: 'none',
			title: response.data.message
		});
		return Promise.reject(response);
	}
);
export function post(url, data, params) {
	return http.request({
		method: 'POST',
		url,
		data,
		params
	});
}
export function postForm(url, data, params) {
	return http.request({
		method: 'POST',
		url,
		data: qs.stringify(data),
		params,
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	});
}
export function get(url, params) {
	return http.request({
		method: 'GET',
		url,
		params
	});
}
export default http;
