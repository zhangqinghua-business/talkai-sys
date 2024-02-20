layui.define(['layer', 'jquery'], function (exports) {
    let $ = layui.$;

    "use strict";

    let api = {
        // api: "http://127.0.0.1:8071",
        api: "https://api.talkai.club",
        get: async function (path, param, callback) {
            return new Promise(function(resolve, reject) {
            // 1. 转query参数
            const queryString = Object.entries(param).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
            // 2. 发起请求
            $.ajax({url: layui.http.api + path + '?' + queryString,
                    type: "get",
                    headers: {token: window.localStorage.getItem("token")},
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        // 1. 请求成功，回调函数
                        if (data.code === 200) {
                            callback(data.data);
                            resolve(data.data);
                            return;
                        }

                        // 2. 401 未登录，跳转到登录页面
                        if (data.code === 401) {
                            window.location = '../login.html';
                            resolve(undefined);
                            return;
                        }

                        // 3. 其它错误，服务错误
                        layer.msg('请求失败：' + data.message, {icon: 5, offset: 't'});
                        resolve(undefined);
                    },
                    error: function (data) {
                        if (data.responseJSON.status === 404) {
                            layer.msg('请求异常，接口 ' + data.responseJSON.path + ' 不存在！', {icon: 5, offset: 't'});
                            resolve(undefined);
                            return;
                        }
                        layer.msg('请求异常：' + data.responseJSON.error, {icon: 5, offset: 't'});
                        resolve(undefined);
                    }});
            });
        },

        /**
         * 发起POST请求
         * 需要处理请求失败和业务失败
         * 用法：layui.http.post('path', function(data) {
         *          console.log()
         *       });
         * @param path      请求路径 /tenant/site_setting/detail
         * @param callback  成功回调
         */
        post: async function (path, param, callback) {
            return new Promise(function(resolve, reject) {
                $.ajax({url: layui.http.api + path,
                    type: "post",
                    headers: {token: window.localStorage.getItem("token")},
                    data: param?JSON.stringify(param) : null,
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        // 1. 请求成功，回调函数
                        if (data.code === 200) {
                            callback(data.data);
                            resolve(data.data);
                            return;
                        }

                        // 2. 401 未登录，跳转到登录页面
                        if (data.code === 401) {
                            window.location = '../login.html';
                            resolve(undefined);
                            return;
                        }

                        // 3. 其它错误，服务错误
                        layer.msg('请求失败：' + data.message, {icon: 5, offset: 't'});
                        reject(undefined);
                    },
                    error: function (data) {
                        if (data.responseJSON.status === 404) {
                            layer.msg('请求异常，接口 ' + data.responseJSON.path + ' 不存在！', {icon: 5, offset: 't'});
                            resolve(undefined);
                            return;
                        }
                        layer.msg('请求异常：' + data.responseJSON.error, {icon: 5, offset: 't'});
                        reject(undefined);
                    }});
            });
        }
    }

    exports("http", api);
});
