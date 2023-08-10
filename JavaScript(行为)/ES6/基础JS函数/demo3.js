//Es6之前默认配置
// function ajax(config) {
//     const defaultConfig = {
//         url: '',
//         method: 'GET',
//         async: true,
//         data: null,
//         success: function () { },
//         error: function () { }
//     }
//     config = config || {};
//     config.url = config.url || '';
//     config.method = config.method || 'GET';
//     config.async = config.async || true;
//     config.data = config.data || null;
//     config.success = config.success || function () { };
//     config.error = config.error || function () { };
//     console.log(config);
// }
//Es6默认配置
// function ajax(config = {}) {
//     const defaultConfig = {
//         url: '',
//         method: 'GET',
//         async: true,
//         data: null,
//         success: function () { },
//         error: function () { }
//     }
//     config = {
//         ...defaultConfig,
//         ...config
//     }
//     console.log(config);
// }
// ajax({
//     url: 'http://www.baidu.com',
//     method: 'POST',
//     success: function (res) {
//         console.log(res);
//     }
// })
