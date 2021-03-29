exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_tsx_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var vue_tsx_support__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_tsx_support__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anchor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _anchor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_anchor_scss__WEBPACK_IMPORTED_MODULE_3__);




let AnchorItem = class AnchorItem extends vue_tsx_support__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render(props) {
    const h = arguments[0];
    const classes = [this.isHome ? 'isHome' : 'isOther'];
    const {
      roomId,
      cover,
      user,
      isLive,
      title,
      carousel
    } = this.item;
    let matchTitle = '';

    if (carousel) {
      matchTitle = `${carousel.league_name} ${carousel.home_name} VS ${carousel.away_name}`;
    }

    return h("router-link", {
      "attrs": {
        "target": "_blank",
        "to": '/' + roomId,
        "data-title": matchTitle
      },
      "class": ['anchor-item', 'home-anchor', ...classes]
    }, [h("div", {
      "class": 'anchor-cover'
    }, [h("img", {
      "attrs": {
        "src": cover,
        "alt": matchTitle
      }
    })]), h("div", {
      "class": 'anchor-info'
    }, [h("div", {
      "class": 'anchor-avatar'
    }, [h("img", {
      "attrs": {
        "src": user.avatar,
        "alt": matchTitle
      }
    })]), h("div", {
      "class": 'anchor-info-desc'
    }, [h("div", {
      "class": ['anchor-info-title', 'ellipsis']
    }, [title || matchTitle || '凯尔特人vs快船！双锋的较量！一号位的自救！']), h("div", {
      "class": 'anchor-info-warp'
    }, [h("div", {
      "class": 'anchor-info-name'
    }, [user.nickname || '豪球用户' + user.id]), h("div", {
      "class": 'anchor-info-hot'
    }, [h("i", {
      "class": 'hotIcon'
    }), "1.6\u4E07"])])])])]);
  }

};

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Prop"])(Object)], AnchorItem.prototype, "item", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Prop"])({
  type: Boolean,
  default: false
})], AnchorItem.prototype, "isHome", void 0);

AnchorItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Component"]], AnchorItem);

;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"anchor-item": "_1gbzwh84ml2Hss72SIW5i4",
	"liveIcon": "VCTgjHnv1V1jY7pzKrIZJ",
	"home-anchor": "_3bdUv9mQapayrtVx0FyC-I",
	"anchor-cover": "_2J1MKF3jpqmDZ2GXCv24MC",
	"anchor-info": "_1kkzTYizAPUbnKTGaIm_sS",
	"anchor-avatar": "_3pF9_xSJBAdPW5nD0npx-a",
	"anchor-info-desc": "_3VLnQe3uQfFbOBp9KVwlCS",
	"anchor-info-title": "_2JnE1jDLHwzlYDm8LTC7jx",
	"anchor-info-warp": "x0k5LxNLTDB8YbkIj3apb",
	"anchor-info-name": "_2Oz8MqobeymYsgUitta_H1",
	"anchor-info-hot": "_1d_BrqozBIHJpYrBQdQN9Z",
	"hotIcon": "xZNgXgUcJFJqPTcqZ8T_G"
};


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_tsx_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var vue_tsx_support__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_tsx_support__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_anchorItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);




let InfoPage = class InfoPage extends vue_tsx_support__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor() {
    super(...arguments);
    this.hot = [];
    this.recommend = [];
    this.nav = [];
  }

  async asyncData({
    $axios
  }) {
    const data = await $axios.$get('https://api.firefoxbet.com/api/anchor/home');
    return { ...data.data
    };
  }

  render() {
    const h = arguments[0];
    const items = this.hot.map((item, i) => h(_components_anchorItem__WEBPACK_IMPORTED_MODULE_3__[/* AnchorItem */ "a"], {
      "attrs": {
        "item": item
      },
      "key": i
    }));
    return h("div", {
      "class": 'home'
    }, [h("div", {
      "class": 'match'
    }, [items])]);
  }

};
InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Component"]], InfoPage);
/* harmony default export */ __webpack_exports__["default"] = (InfoPage);

/***/ })

};;
//# sourceMappingURL=index.js.map