require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__risk___ = __webpack_require__(45);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__risk___["a" /* default */]);
app.$mount();

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_risk_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73f19dda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_risk_vue__ = __webpack_require__(48);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73f19dda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_risk_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73f19dda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_risk_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\risk_\\risk_.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] risk_.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73f19dda", Component.options)
  } else {
    hotAPI.reload("data-v-73f19dda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      title: '区域产业风险预测平台',
      region: '洪山区',
      regionArray: ['洪山区', '武昌区'],
      tableData: [{
        news: '口罩脱销'
      }, {
        news: '武汉封城'
      }]
    };
  },


  methods: {
    clickHandle: function clickHandle() {
      this.msg = 'Clicked!!!!!!';
    }
  }
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "i-class": "col-class",
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.title))])])], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "12",
      "mpcomid": '3'
    }
  }, [_c('div', [_c('picker', {
    attrs: {
      "value": _vm.date
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "mpcomid": '2'
    }
  }, [_vm._v("\n            点击选择日期\n          ")])], 1)], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "12",
      "mpcomid": '5'
    }
  }, [_c('div', [_c('picker', {
    attrs: {
      "value": _vm.region,
      "range": _vm.regionArray
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "mpcomid": '4'
    }
  }, [_vm._v("\n            点击选择地区\n          ")])], 1)], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('ul', [_c('li', [_vm._v("舆情列表")]), _vm._v(" "), _vm._l((_vm.tableData), function(data1, index) {
    return _c('li', {
      key: data1.news
    }, [_vm._v("\n        " + _vm._s(data1.news) + "\n      ")])
  })], 2)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73f19dda", esExports)
  }
}

/***/ })

},[44]);