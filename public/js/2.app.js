webpackJsonp([2],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_movie_vue__ = __webpack_require__(626);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_546a07cc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movie_vue__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(646)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-546a07cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_movie_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_546a07cc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movie_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_546a07cc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movie_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/mo/movie.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-546a07cc", Component.options)
  } else {
    hotAPI.reload("data-v-546a07cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mo_mixins; });
var mo_mixins = {
    filters: {
        ucWords: function ucWords(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        getThumbnail: function getThumbnail(movieId) {
            return 'https://ytimg.googleusercontent.com/vi/' + movieId + '/mqdefault.jpg';
        }
    },
    methods: {
        isObjectEmpty: function isObjectEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) return false;
            }
            return true;
        },
        embedVideo: function embedVideo(youlink) {
            return youlink.replace('watch?v=', 'embed/') + '?autoplay=1';
        },
        videoCategoryLink: function videoCategoryLink(cat) {
            if (cat == 'religious__muslim') {
                return 'religious/islamic';
            } else if (cat == 'religious__christian') {
                return 'religious/christian';
            } else {
                return cat;
            }
        },
        videoCategory: function videoCategory(cat) {
            if (cat == 'religious__muslim') {
                return 'Islamic';
            } else if (cat == 'religious__christian') {
                return 'Christian';
            } else {
                return cat;
            }
        }
    }
};

/***/ }),

/***/ 619:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "movieThumbnail",
    props: ['title', 'thumbnail']
});

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_movieThumbnail_vue__ = __webpack_require__(619);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69da3a7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movieThumbnail_vue__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(621)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69da3a7e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_movieThumbnail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69da3a7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movieThumbnail_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69da3a7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movieThumbnail_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/plugins/movieThumbnail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69da3a7e", Component.options)
  } else {
    hotAPI.reload("data-v-69da3a7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("704e6480", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-69da3a7e\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./movieThumbnail.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-69da3a7e\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./movieThumbnail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "headings text-center h2",
        staticStyle: { "margin-top": "80px" }
      },
      [_c("strong", [_vm._v(_vm._s(_vm.title))])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "img profile-user-img img-responsive img-rounded movie-image",
        staticStyle: {
          border: "0px !important",
          width: "200px",
          height: "300px",
          "margin-left": "auto",
          "margin-right": "auto"
        },
        attrs: { border: "0", align: "center" }
      },
      [
        _c("img", {
          staticClass:
            "profile-user-img img-responsive img-rounded movie-image text-center",
          staticStyle: { height: "300px" },
          attrs: {
            id: "carimage4",
            src: _vm.thumbnail,
            border: "0",
            hspace: "0",
            vspace: "0"
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69da3a7e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_mixins_mo_mixins__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_plugins_movieThumbnail__ = __webpack_require__(620);
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__partials_mixins_mo_mixins__["a" /* mo_mixins */]],
    components: { movieThumbnail: __WEBPACK_IMPORTED_MODULE_2__partials_plugins_movieThumbnail__["a" /* default */] },
    methods: {},
    created: function created() {
        this.$store.dispatch('fetchMovieInfo', this.movieId);
    },
    data: function data() {
        return {
            movieId: this.$route.params.movie_id
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
        movie: 'getMovie'
    })
});

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("3db1d1f7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-546a07cc\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./movie.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-546a07cc\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./movie.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-546a07cc] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-546a07cc] {\n    height: 200px;\n    width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      !_vm.isObjectEmpty(_vm.movie)
        ? _c(
            "div",
            [
              _c(
                "section",
                {
                  staticClass: "content-headerf",
                  staticStyle: {
                    float: "left !important",
                    width: "100%",
                    "margin-top": "20px"
                  }
                },
                [
                  _c("ol", { staticClass: "breadcrumb" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href:
                              "/category/" +
                              _vm
                                .videoCategoryLink(
                                  _vm.movie.movieDetail.category
                                )
                                .toLowerCase()
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "glyphicon glyphicon-expand"
                          }),
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                _vm.videoCategory(
                                  _vm.movie.movieDetail.category.toLowerCase()
                                )
                              ) +
                              " Movies\n                    "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "active" }, [
                      _vm._v(
                        _vm._s(_vm._f("ucWords")(_vm.movie.movieDetail.name))
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("movie-thumbnail", {
                attrs: {
                  title: _vm.movie.title,
                  thumbnail: _vm._f("getThumbnail")(_vm.movie.movieId)
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xs-6 text-right row-even" }, [
                  _vm._v("\n                Released Date:\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 blue row-even" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.movie.movieDetail.released_date) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 text-right" }, [
                  _vm._v("\n                Duration:\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.movie.movieDetail.duration) +
                      "\n            "
                  )
                ])
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      !_vm.isObjectEmpty(_vm.movie)
        ? _c("div", {}, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "topic-row-height text-center no-padding" },
              [
                _c("ul", { staticClass: "pager no-padding" }, [
                  _c(
                    "li",
                    { staticClass: "pager-next no-padding" },
                    [
                      _c(
                        "router-link",
                        {
                          class: "page-link",
                          attrs: {
                            tag: "a",
                            to: {
                              name: "playonline",
                              params: { movie_is: _vm.movie.movieDetail.enc_id }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Watch Here\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "topic-row-height text-center no-padding" },
              [
                _c("ul", { staticClass: "pager no-padding" }, [
                  _c(
                    "li",
                    { staticClass: "pager-next no-padding danger" },
                    [
                      _c(
                        "router-link",
                        {
                          class: "page-link",
                          attrs: {
                            tag: "a",
                            to: {
                              name: "download",
                              params: { movie_is: _vm.movie.movieDetail.enc_id }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Download Video\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm.movie.movieDetail.subtitle
              ? _c(
                  "div",
                  { staticClass: "topic-row-height text-center no-padding" },
                  [
                    _c("ul", { staticClass: "pager no-padding" }, [
                      _c(
                        "li",
                        { staticClass: "pager-next no-padding danger" },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "page-link",
                              staticStyle: { "border-color": "red" },
                              attrs: {
                                href:
                                  "/subtitle/" + _vm.movie.movieDetail.enc_id,
                                "aria-label": "Read More..."
                              }
                            },
                            [
                              _vm._v(
                                "\n                        Download Subtitle\n                    "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              : _vm._e()
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "/" } }, [
        _c("i", { staticClass: "glyphicon glyphicon-home" }),
        _vm._v(" Home")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: " topic-row-height row-even text-center download-div h3",
        staticStyle: { color: "white" }
      },
      [_c("strong", [_vm._v(" Watch video Online")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: " topic-row-height row-even text-center download-div h3",
        staticStyle: { color: "white" }
      },
      [_c("strong", [_vm._v(" Download")])]
    )
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-546a07cc", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});