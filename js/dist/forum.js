/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('huoxin/auto-collapse-long-images', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function (vnode) {
    var maxHeight = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('huoxin-auto-collapse-long-images.max-height')) || 0; // get max height from settings
    maxHeight = maxHeight > 0 ? maxHeight : 0;
    var defaultText_closed = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('huoxin-auto-collapse-long-images.forum.default-text.closed');
    var defaultText_open = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('huoxin-auto-collapse-long-images.forum.default-text.open');
    var customText_closed = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-closed') || defaultText_closed;
    var customText_open = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-open') || defaultText_open;
    this.element.querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img):not(.spoiler img):not(.flarumite-spoiler--content img)').forEach(function (node) {
      node.addEventListener('load', function () {
        if (node.height > maxHeight) {
          if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers') == 1) {
            var spoilerMarkup = isFancybox(node) ? generateFlarumiteSpoiler(node.parentNode.outerHTML, customText_closed, customText_open, defaultText_closed, defaultText_open) : generateFlarumiteSpoiler(node.outerHTML, customText_closed, customText_open, defaultText_closed, defaultText_open);
            isFancybox(node) ? $(node.parentNode).replaceWith(spoilerMarkup) : $(node).replaceWith(spoilerMarkup);
          } else {
            var _spoilerMarkup = isFancybox(node) ? generateNormalSpoiler(node.parentNode.outerHTML) : generateNormalSpoiler(node.outerHTML);
            isFancybox(node) ? $(node.parentNode).replaceWith(_spoilerMarkup) : $(node).replaceWith(_spoilerMarkup);
          }
        }
      });
    });
  });
});
function isFancybox(node) {
  return $(node).parent().attr('data-fancybox');
}
function generateFlarumiteSpoiler(imageHtml, customText_closed, customText_open, defaultText_closed, defaultText_open) {
  return "\n    <details class=\"flarumite-spoiler\">\n      <summary>\n        <span class=\"flarumite-spoiler--title flarumite-spoiler--title-closed\">\n          <span class=\"flarumite-spoiler--custom-text\">" + customText_closed + "</span>\n          <span class=\"flarumite-spoiler--default-text\">" + defaultText_closed + "</span>\n        </span>\n        <span class=\"flarumite-spoiler--title flarumite-spoiler--title-open\">\n          <span class=\"flarumite-spoiler--custom-text\">" + customText_open + "111</span>\n          <span class=\"flarumite-spoiler--default-text\">" + defaultText_open + "</span>\n        </span>\n      </summary>\n      <div class=\"flarumite-spoiler--content\">\n        <p>" + imageHtml + "</p>\n      </div>\n    </details>";
}
function generateNormalSpoiler(imageHtml) {
  return "\n    <details class=\"spoiler\">\n      <p>" + imageHtml + "</p>\n    </details>";
}

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map