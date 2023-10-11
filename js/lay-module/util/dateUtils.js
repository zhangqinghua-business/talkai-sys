layui.define(['layer'], function (exports) {
    "use strict";

    let dateUtils = {
        /**
         * 时间戳格式化函数
         * @param  {string} format    格式
         * @param  {int}    timestamp 要格式化的时间 默认为当前时间
         * @return {string}           格式化的时间字符串
         */
        format: function (format, timestamp) {
            var date = ((timestamp) ? new Date(timestamp * 1000) : new Date());
            let _date = date;

            let _result = format;
            //const _Weeks = ['日', '一', '二', '三', '四', '五', '六'];

            _result = _result.replace(/yyyy|YYYY/, _date.getFullYear());
            _result = _result.replace(/yy|YY/, (_date.getYear() % 100).toString().padStart(2, '0'));

            let _month = (_date.getMonth() + 1).toString();
            _result = _result.replace(/MM/, _month.padStart(2, '0'));
            _result = _result.replace(/M/g, _month);

            //_result = _result.replace(/w|W/g, _Weeks[_date.getDay()]);

            _result = _result.replace(/dd|DD/, _date.getDate().toString().padStart(2, '0'));
            _result = _result.replace(/d|D/g, _date.getDate());

            _result = _result.replace(/hh|HH/, _date.getHours().toString().padStart(2, '0'));
            _result = _result.replace(/h|H/g, _date.getHours());
            _result = _result.replace(/mm/, _date.getMinutes().toString().padStart(2, '0'));
            _result = _result.replace(/m/g, _date.getMinutes());

            _result = _result.replace(/ss|SS/, _date.getSeconds().toString().padStart(2, '0'));
            _result = _result.replace(/s|S/g, _date.getSeconds());

            _result = _result.replace(/fff|fff/, _date.getMilliseconds().toString().padEnd(3, '0').substring(0, 3));
            _result = _result.replace(/ff|ff/, _date.getMilliseconds().toString().padEnd(2, '0').substring(0, 2));
            _result = _result.replace(/f|f/g, _date.getMilliseconds().toString().padEnd(1, '0').substring(0, 1));

            return _result;
        },
    }

    exports("dateUtils", dateUtils);
});
