webpackJsonp([7],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(108);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9be1506_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(115)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c9be1506"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9be1506_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9be1506_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/bot/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c9be1506", Component.options)
  } else {
    hotAPI.reload("data-v-c9be1506", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 108:
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
    props: [],
    methods: {
        flag: function flag(category) {
            if (category == "christian" || category == "islamic") {
                return true;
            }
            return false;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$bot.getBots(0).then(function (data) {
            console.log(data.data.data);
            _this.movies = data.data.data;
        });
    },
    data: function data() {
        return {
            visitors: {},
            adminUrl: ''
        };
    },

    computed: {}
});

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("1c53ade7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c9be1506\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c9be1506\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-c9be1506] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-c9be1506] {\n    height: 200px;\n    width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { margin: "20px 30px 0px 3%" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "box box-primary" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "box-body no-padding" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "table-responsive mailbox-messages",
            staticStyle: { width: "100%" }
          },
          [
            _c("table", { staticClass: "table table-hover table-striped" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.visitors, function(visitor, index) {
                  return _c(
                    "tr",
                    { staticStyle: { height: "10px", overflow: "hidden" } },
                    [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(index + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass: "truncate",
                            staticStyle: { width: "200px" }
                          },
                          [_vm._v(_vm._s(visitor.ip))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(visitor.remotehost))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(visitor.useragent))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(visitor.referrer))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("div", { staticClass: "truncate" }, [
                          _vm._v(_vm._s(visitor.date))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(visitor.time))
                      ])
                    ]
                  )
                })
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [
        _vm._v("\n             \n            "),
        _c("small", [_vm._v(" ")])
      ]),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-dashboard" }),
            _vm._v(" Admin")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Bots")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("All Visitors")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-tools pull-right" }, [
        _c("div", { staticClass: "has-feedback" }, [
          _c("input", {
            staticClass: "form-control input-sm",
            attrs: { placeholder: "Search Mail", type: "text" }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "glyphicon glyphicon-search form-control-feedback"
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mailbox-controls" }, [
      _c("div", { staticClass: "btn-group" }, [
        _c("button", { staticClass: "btn btn-default btn-sm" }, [
          _c("i", { staticClass: "fa fa-trash-o" })
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-default btn-sm" }, [
          _c("i", { staticClass: "fa fa-reply" })
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-default btn-sm" }, [
          _c("i", { staticClass: "fa fa-share" })
        ])
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-default btn-sm reload" }, [
        _c("i", { staticClass: "fa fa-refresh" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pull-right" }, [
        _vm._v("\n                    visitors->links()\n                ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "text-center" }, [
        _c("th", { staticClass: "text-center" }, [_vm._v("id")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "70px" } },
          [_vm._v("Ip Address")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Remote Host")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("User Agent")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Referrer")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Time")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-footer no-padding" }, [
      _c("div", { staticClass: "mailbox-controls" }, [
        _c("div", { staticClass: "btn-group" }, [
          _c("button", { staticClass: "btn btn-default btn-sm" }, [
            _c("i", { staticClass: "fa fa-trash-o" })
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-default btn-sm" }, [
            _c("i", { staticClass: "fa fa-reply" })
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-default btn-sm" }, [
            _c("i", { staticClass: "fa fa-share" })
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-default btn-sm reload" }, [
          _c("i", { staticClass: "fa fa-refresh" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pull-right" }, [
          _vm._v("\n                    visitors->links()\n                ")
        ])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c9be1506", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});