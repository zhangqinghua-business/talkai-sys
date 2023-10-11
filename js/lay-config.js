/**
 * date:2019/08/16
 * author:Mr.Chung
 * description:此处放layui自定义扩展
 * version:2.0.4
 */

window.rootPath = (function (src) {
    src = document.scripts[document.scripts.length - 1].src;
    return src.substring(0, src.lastIndexOf("/") + 1);
})();

/**
 * 每次版本更新，修改version即可清除JS缓存
 */
let config = {
    base: rootPath + "lay-module/", // 页面路径
    version: '20230508',            // 版本号，每次更新版本后，修改这个版本号，会清空缓存
    //  (没有用)
    response: {
        statusCode: 200, // 自定义状态码
    },
    // (没有用)对于 table.render 方法中的 parseData 回调函数
    data: {
      parseData: function(res) {
        // 解析响应数据
        return {
          code: res.code, // 服务端返回的状态码
          msg: res.msg, // 服务端返回的消息
          count: res.count, // 数据总数
          data: res.data, // 数据列表
        };
      },
    },
}

layui.config(config)
     .extend({miniAdmin: "layuimini/miniAdmin", // layuimini后台扩展
               miniMenu: "layuimini/miniMenu", // layuimini菜单扩展
               miniTab: "layuimini/miniTab", // layuimini tab扩展
               miniTheme: "layuimini/miniTheme", // layuimini 主题扩展
               miniTongji: "layuimini/miniTongji", // layuimini 统计扩展
               step: 'step-lay/step', // 分步表单扩展
               treetable: 'treetable-lay/treetable', //table树形扩展
               tableSelect: 'tableSelect/tableSelect', // table选择扩展
               iconPickerFa: 'iconPicker/iconPickerFa', // fa图标选择扩展
               echarts: 'echarts/echarts', // echarts图表扩展
               echartsTheme: 'echarts/echartsTheme', // echarts图表主题扩展
               wangEditor: 'wangEditor/wangEditor', // wangEditor富文本扩展
               layarea: 'layarea/layarea', //  省市县区三级联动下拉选择器
               dateUtils: 'util/dateUtils', //  省市县区三级联动下拉选择器
               http: 'util/http', //  接口地址
              });
