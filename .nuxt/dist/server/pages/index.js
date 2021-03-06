exports.ids = [2];
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
    }, [title || matchTitle || '????????????vs????????????????????????????????????????????????']), h("div", {
      "class": 'anchor-info-warp'
    }, [h("div", {
      "class": 'anchor-info-name'
    }, [user.nickname || '????????????' + user.id]), h("div", {
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

/***/ 26:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "BOiP_7xh1T4UCoBihpOjG",
	"header-item": "j5IAh1eu6m-OLPt5hg-cV",
	"home": "_2J1c21hM2FcuAUre1PZv3A",
	"banner": "rgomnktxfewsny-zuLg53",
	"van-swipe": "_7RdGvWZJ7-UjXDT0cmL4P",
	"van-swipe-item": "_2gQHPxwNhlsXajTtxsFAM6",
	"match": "HkE_ZLZzpLFTsj9VmxLB8",
	"match-item": "_3P5QWw5hDQUDIbfZKL7bJ7"
};


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"down": "_1hGriMo_xzg0om5vB6XGRh"
};


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(21);

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(22);

// EXTERNAL MODULE: external "vue-tsx-support"
var external_vue_tsx_support_ = __webpack_require__(23);

// EXTERNAL MODULE: ./pages/home.scss
var home = __webpack_require__(26);

// EXTERNAL MODULE: ./components/download/down.scss
var down = __webpack_require__(27);

// CONCATENATED MODULE: ./components/download/index.tsx




let download_Download = class Download extends external_vue_tsx_support_["Component"] {
  render() {
    const h = arguments[0];
    return h("div", {
      "class": 'down'
    }, [h("img", {
      "attrs": {
        "src": "https://m.dqiu.com/img/banner-lingqu@2x.279fac18.png",
        "alt": ""
      }
    })]);
  }

};
download_Download = Object(external_tslib_["__decorate"])([external_nuxt_property_decorator_["Component"]], download_Download);

// EXTERNAL MODULE: ./components/anchorItem/index.tsx
var anchorItem = __webpack_require__(24);

// CONCATENATED MODULE: ./pages/index.tsx






let pages_InfoPage = class InfoPage extends external_vue_tsx_support_["Component"] {
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
    const nav = await $axios.$get('https://api.firefoxbet.com/api/channel/list');
    return { ...data.data,
      nav: nav.data
    };
  }

  render() {
    const h = arguments[0];
    const header = h("div", {
      "class": 'header'
    }, [h("li", {
      "class": 'header-item'
    }, ["\u70ED\u95E8"]), this.nav.map((item, i) => h("li", {
      "class": 'header-item'
    }, [item.channelName]))]);
    const items = this.hot.map((item, i) => h(anchorItem["a" /* AnchorItem */], {
      "attrs": {
        "item": item
      },
      "key": i
    }));
    const banner = this.recommend.map((item, index) => h("van-swipe-item", [h("img", {
      "attrs": {
        "src": item.cover,
        "alt": ""
      }
    })]));
    return h("div", {
      "class": 'home'
    }, [h(download_Download), header, h("div", {
      "class": 'banner'
    }, [h("van-swipe", {
      "attrs": {
        "autoplay": "3000",
        "indicator-color": "white"
      }
    }, [banner])]), h("div", {
      "class": 'match'
    }, [items])]);
  }

};
pages_InfoPage = Object(external_tslib_["__decorate"])([external_nuxt_property_decorator_["Component"]], pages_InfoPage);
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_InfoPage);

/***/ })

};;
//# sourceMappingURL=index.js.map