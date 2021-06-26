webpackHotUpdate("main",{

/***/ "./src/actions/order.js":
/*!******************************!*\
  !*** ./src/actions/order.js ***!
  \******************************/
/*! exports provided: purchaseOrder, getAllOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseOrder", function() { return purchaseOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOrder", function() { return getAllOrder; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");
/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleError */ "./src/actions/handleError.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/config/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./src/actions/loader.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);






const purchaseOrder = data => dispatch => {
  dispatch(Object(_loader__WEBPACK_IMPORTED_MODULE_4__["onLoader"])(true));
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_config_config__WEBPACK_IMPORTED_MODULE_2__["IP"]}/api/order/purchaseCartOrder`, data).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_ORDER"],
      payload: res.data.response
    });
    dispatch(Object(_handleError__WEBPACK_IMPORTED_MODULE_1__["handleError"])({
      type: 'success',
      error: 'Order Placed Successfully, Check Your Order History'
    }));
    setTimeout(() => {
      dispatch(Object(_loader__WEBPACK_IMPORTED_MODULE_4__["onLoader"])(false));
    }, 2000);
  }).catch(err => dispatch(Object(_handleError__WEBPACK_IMPORTED_MODULE_1__["handleError"])({
    type: 'error',
    error: err.message
  })), dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_ORDER"],
    payload: null
  }), setTimeout(() => {
    dispatch(Object(_loader__WEBPACK_IMPORTED_MODULE_4__["onLoader"])(false));
  }, 2000));
};
const getAllOrder = () => dispatch => {
  dispatch(Object(_loader__WEBPACK_IMPORTED_MODULE_4__["onLoader"])(true));
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_config_config__WEBPACK_IMPORTED_MODULE_2__["IP"]}/api/order/getAllOrder`).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_ORDER"],
      payload: res.data.response
    });
    setTimeout(() => {
      dispatch(Object(_loader__WEBPACK_IMPORTED_MODULE_4__["onLoader"])(false));
    }, 2000);
  }).catch(err => dispatch(Object(_handleError__WEBPACK_IMPORTED_MODULE_1__["handleError"])({
    type: 'error',
    error: err.message
  })), dispatch({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_ORDER"],
    payload: null
  }), setTimeout(() => {
    dispatch(Object(_loader__WEBPACK_IMPORTED_MODULE_4__["onLoader"])(false));
  }, 2000));
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.3695a727c5f83c94b77c.hot-update.js.map