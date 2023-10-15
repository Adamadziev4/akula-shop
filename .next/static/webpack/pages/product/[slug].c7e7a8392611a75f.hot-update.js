"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./src/pages/product/[slug].tsx":
/*!**************************************!*\
  !*** ./src/pages/product/[slug].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_product_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/product/ProductInfo */ \"./src/components/product/ProductInfo.tsx\");\n/* harmony import */ var _components_product_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/product/ProductCard */ \"./src/components/product/ProductCard.tsx\");\n/* harmony import */ var _components_FixedCartIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FixedCartIcon */ \"./src/components/FixedCartIcon.tsx\");\n/* harmony import */ var _components_sections_ProductCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sections/ProductCarousel */ \"./src/components/sections/ProductCarousel.tsx\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/urls */ \"./src/utils/urls.ts\");\n/* harmony import */ var _utils_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/helpers/shuffleArray */ \"./src/utils/helpers/shuffleArray.ts\");\n\n\n\n\n\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { product: { id, attributes }, otherColors, recommendedProducts } = param;\n    var _attributes_categories, _attributes_categories1, _attributes_images, _attributes_images1;\n    const typeProduct = attributes.categories.data[0].attributes.type; // Одежда или обувь\n    const slugProduct = attributes.slug; // Уникальное название товара\n    const categoryProductSlug = (_attributes_categories = attributes.categories) === null || _attributes_categories === void 0 ? void 0 : _attributes_categories.data[0].attributes.slug;\n    const categoryProductName = (_attributes_categories1 = attributes.categories) === null || _attributes_categories1 === void 0 ? void 0 : _attributes_categories1.data[0].attributes.name;\n    const characteristics = attributes.characteristics;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row gap-10 pt-6 lg:px-0 lg:pr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid sm:grid-cols-2 gap-4 col-span-2\",\n                        children: (_attributes_images = attributes.images) === null || _attributes_images === void 0 ? void 0 : _attributes_images.data.map((param)=>/*#__PURE__*/ {\n                            let { id, attributes } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_8__.API_URL).concat(attributes.url),\n                                width: 1000,\n                                height: 1000,\n                                alt: \"Одежда\",\n                                className: \"sm:h-[500px] md:h-[550px]\"\n                            }, id, false, {\n                                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductInfo__WEBPACK_IMPORTED_MODULE_4__.ProductInfo, {\n                        id: id,\n                        name: attributes.name,\n                        article: attributes.article,\n                        color: attributes.color,\n                        price: attributes.price,\n                        old_price: attributes.old_price,\n                        colorList: attributes.colors,\n                        imageUrl: (_attributes_images1 = attributes.images) === null || _attributes_images1 === void 0 ? void 0 : _attributes_images1.data[0].attributes.url,\n                        size: attributes.size,\n                        typeProduct: typeProduct,\n                        slugProduct: slugProduct,\n                        categoryProductSlug: categoryProductSlug,\n                        categoryProductName: categoryProductName,\n                        characteristics: characteristics,\n                        otherColors: otherColors\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            recommendedProducts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_ProductCarousel__WEBPACK_IMPORTED_MODULE_7__.ProductCarousel, {\n                title: \"Рекомендуемые товары\",\n                children: (0,_utils_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_9__.shuffleArray)(recommendedProducts).map((param)=>/*#__PURE__*/ {\n                    let { attributes, id } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductCard__WEBPACK_IMPORTED_MODULE_5__.ProductCard, {\n                        productCategory: attributes.categories.data[0].attributes.type,\n                        imageUrl: attributes.images.data[0].attributes.url,\n                        slug: attributes.slug,\n                        price: attributes.price,\n                        name: attributes.name,\n                        isRecommended: true\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 153,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 151,\n                columnNumber: 9\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FixedCartIcon__WEBPACK_IMPORTED_MODULE_6__.FixedCartIcon, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R3BCO0tBNUVNSTs7QUE4RU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLnRzeD8yZjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tIFwicXVlcnlzdHJpbmdcIjtcblxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IHsgUHJvZHVjdEluZm8gfSBmcm9tIFwiQC9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdEluZm9cIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgeyBGaXhlZENhcnRJY29uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9GaXhlZENhcnRJY29uXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2Fyb3VzZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2R1Y3RDYXJvdXNlbFwiO1xuXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIkAvdXRpbHMvdXJsc1wiO1xuaW1wb3J0IHsgc2h1ZmZsZUFycmF5IH0gZnJvbSBcIkAvdXRpbHMvaGVscGVycy9zaHVmZmxlQXJyYXlcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3RMaXN0UmVzcG9uc2UsXG4gIFByb2R1Y3RSZXNwb25zZSxcbiAgZmV0Y2hEYXRhRnJvbUFwaSxcbn0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5cbmltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHQvdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeSBleHRlbmRzIFBhcnNlZFVybFF1ZXJ5IHtcbiAgc2x1Zzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn1cblxudHlwZSBQcm9kdWN0RGV0YWlsc1Byb3BzID0ge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBvdGhlckNvbG9yczogT3RoZXJDb2xvcnNUeXBlW11cbiAgcmVjb21tZW5kZWRQcm9kdWN0czogUHJvZHVjdFtdO1xufTtcblxudHlwZSBPdGhlckNvbG9yc1JlcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiBudW1iZXI7XG4gICAgYXR0cmlidXRlczogUHJvZHVjdEF0dHJpYnV0ZXNcbiAgfVtdXG59XG5cbnR5cGUgT3RoZXJDb2xvcnNUeXBlID0ge1xuICBjb2xvcjogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczxcbiAgUHJvZHVjdERldGFpbHNQcm9wc1xuPiA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgeyBzbHVnLCBjb2xvciB9ID0gcXVlcnkgYXMgUXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhIH06IFByb2R1Y3RMaXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGFGcm9tQXBpKFxuICAgIGAvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSomZmlsdGVyc1tzbHVnXVskZXFdPSR7c2x1Z31gXG4gICk7XG5cbiAgY29uc3QgcHJvZHVjdDogUHJvZHVjdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFwaShcbiAgICBgL2FwaS9wcm9kdWN0cy8ke2RhdGFbMF0uaWR9P3BvcHVsYXRlPWRlZXBgXG4gICk7XG5cbiAgY29uc3QgcmVjb21tZW5kZWRQcm9kdWN0c1JlczogUHJvZHVjdExpc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoRGF0YUZyb21BcGkoXG4gICAgYC9hcGkvcHJvZHVjdHM/cG9wdWxhdGU9KiZmaWx0ZXJzW2NhdGVnb3JpZXNdW3NsdWddWyRlcV09JHtwcm9kdWN0LmRhdGEuYXR0cmlidXRlcy5jYXRlZ29yaWVzPy5kYXRhWzBdLmF0dHJpYnV0ZXMuc2x1Z31gXG4gICk7XG5cbiAgY29uc3Qgb3RoZXJDb2xvcnNQcm9kdWN0OiBPdGhlckNvbG9yc1JlcyA9IGF3YWl0IGZldGNoRGF0YUZyb21BcGkoXG4gICAgYC9hcGkvcHJvZHVjdHM/cG9wdWxhdGU9KiZmaWx0ZXJzW2FydGljbGVdWyRlcV09JHtwcm9kdWN0LmRhdGEuYXR0cmlidXRlcy5hcnRpY2xlfWBcbiAgKVxuXG4gIGNvbnN0IG90aGVyQ29sb3JzOiBPdGhlckNvbG9yc1R5cGVbXSA9IFtdO1xuXG4gIG90aGVyQ29sb3JzUHJvZHVjdC5kYXRhLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBjb2xvcjogcHJvZHVjdC5hdHRyaWJ1dGVzLmNvbG9yLFxuICAgICAgc2x1ZzogcHJvZHVjdC5hdHRyaWJ1dGVzLnNsdWdcbiAgICB9XG5cbiAgICBvdGhlckNvbG9ycy5wdXNoKG9iailcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdClcblxuICBjb25zdCByZWNvbW1lbmRlZFByb2R1Y3RzID0gcmVjb21tZW5kZWRQcm9kdWN0c1Jlcy5kYXRhXG4gICAgLnJldmVyc2UoKVxuICAgIC5zbGljZSgwLCA4KVxuICAgIC5maWx0ZXIoKHByb2QpID0+IHByb2QuaWQgIT09IHByb2R1Y3QuZGF0YS5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdDogcHJvZHVjdC5kYXRhLFxuICAgICAgb3RoZXJDb2xvcnM6IG90aGVyQ29sb3JzLmZpbHRlcihwcm9kID0+IHByb2QuY29sb3IgIT09IHByb2R1Y3QuZGF0YS5hdHRyaWJ1dGVzLmNvbG9yKSxcbiAgICAgIHJlY29tbWVuZGVkUHJvZHVjdHM6IHJlY29tbWVuZGVkUHJvZHVjdHMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHtcbiAgcHJvZHVjdDogeyBpZCwgYXR0cmlidXRlcyB9LFxuICBvdGhlckNvbG9ycyxcbiAgcmVjb21tZW5kZWRQcm9kdWN0cyxcbn06IFByb2R1Y3REZXRhaWxzUHJvcHMpID0+IHtcbiAgY29uc3QgdHlwZVByb2R1Y3QgPSBhdHRyaWJ1dGVzLmNhdGVnb3JpZXMuZGF0YVswXS5hdHRyaWJ1dGVzLnR5cGU7IC8vINCe0LTQtdC20LTQsCDQuNC70Lgg0L7QsdGD0LLRjFxuICBjb25zdCBzbHVnUHJvZHVjdCA9IGF0dHJpYnV0ZXMuc2x1ZzsgLy8g0KPQvdC40LrQsNC70YzQvdC+0LUg0L3QsNC30LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcbiAgY29uc3QgY2F0ZWdvcnlQcm9kdWN0U2x1ZyA9IGF0dHJpYnV0ZXMuY2F0ZWdvcmllcz8uZGF0YVswXS5hdHRyaWJ1dGVzLnNsdWc7XG4gIGNvbnN0IGNhdGVnb3J5UHJvZHVjdE5hbWUgPSBhdHRyaWJ1dGVzLmNhdGVnb3JpZXM/LmRhdGFbMF0uYXR0cmlidXRlcy5uYW1lO1xuICBjb25zdCBjaGFyYWN0ZXJpc3RpY3MgPSBhdHRyaWJ1dGVzLmNoYXJhY3RlcmlzdGljcztcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC0xMCBwdC02IGxnOnB4LTAgbGc6cHItOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTQgY29sLXNwYW4tMlwiPlxuICAgICAgICAgIHthdHRyaWJ1dGVzLmltYWdlcz8uZGF0YS5tYXAoKHsgaWQsIGF0dHJpYnV0ZXMgfSkgPT4gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHNyYz17YCR7QVBJX1VSTH0ke2F0dHJpYnV0ZXMudXJsfWB9XG4gICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XG4gICAgICAgICAgICAgIGFsdD1cItCe0LTQtdC20LTQsFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtOmgtWzUwMHB4XSBtZDpoLVs1NTBweF1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvcHJvZHVjdHMvMS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezY1MH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgYWx0PVwi0J7QtNC10LbQtNCwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgdy1mdWxsXCJcbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICB7LyogPEltYWdlIHNyYz1cIi9wcm9kdWN0cy8xLnBuZ1wiIHdpZHRoPXs2NTB9IGhlaWdodD17NDAwfSBhbHQ9XCLQntC00LXQttC00LBcIiAvPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHJvZHVjdHMvMS5wbmdcIiB3aWR0aD17NjUwfSBoZWlnaHQ9ezQwMH0gYWx0PVwi0J7QtNC10LbQtNCwXCIgLz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzLzEucG5nXCIgd2lkdGg9ezY1MH0gaGVpZ2h0PXs0MDB9IGFsdD1cItCe0LTQtdC20LTQsFwiIC8+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy8xLnBuZ1wiIHdpZHRoPXs2NTB9IGhlaWdodD17NDAwfSBhbHQ9XCLQntC00LXQttC00LBcIiAvPiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFByb2R1Y3RJbmZvXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e2F0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICBhcnRpY2xlPXthdHRyaWJ1dGVzLmFydGljbGV9XG4gICAgICAgICAgY29sb3I9e2F0dHJpYnV0ZXMuY29sb3J9XG4gICAgICAgICAgcHJpY2U9e2F0dHJpYnV0ZXMucHJpY2V9XG4gICAgICAgICAgb2xkX3ByaWNlPXthdHRyaWJ1dGVzLm9sZF9wcmljZX1cbiAgICAgICAgICBjb2xvckxpc3Q9e2F0dHJpYnV0ZXMuY29sb3JzfVxuICAgICAgICAgIGltYWdlVXJsPXthdHRyaWJ1dGVzLmltYWdlcz8uZGF0YVswXS5hdHRyaWJ1dGVzLnVybH1cbiAgICAgICAgICBzaXplPXthdHRyaWJ1dGVzLnNpemV9XG4gICAgICAgICAgdHlwZVByb2R1Y3Q9e3R5cGVQcm9kdWN0fVxuICAgICAgICAgIHNsdWdQcm9kdWN0PXtzbHVnUHJvZHVjdH1cbiAgICAgICAgICBjYXRlZ29yeVByb2R1Y3RTbHVnPXtjYXRlZ29yeVByb2R1Y3RTbHVnfVxuICAgICAgICAgIGNhdGVnb3J5UHJvZHVjdE5hbWU9e2NhdGVnb3J5UHJvZHVjdE5hbWV9XG4gICAgICAgICAgY2hhcmFjdGVyaXN0aWNzPXtjaGFyYWN0ZXJpc3RpY3N9XG4gICAgICAgICAgb3RoZXJDb2xvcnM9e290aGVyQ29sb3JzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtyZWNvbW1lbmRlZFByb2R1Y3RzLmxlbmd0aCA/IChcbiAgICAgICAgPFByb2R1Y3RDYXJvdXNlbCB0aXRsZT1cItCg0LXQutC+0LzQtdC90LTRg9C10LzRi9C1INGC0L7QstCw0YDRi1wiPlxuICAgICAgICAgIHtzaHVmZmxlQXJyYXkocmVjb21tZW5kZWRQcm9kdWN0cykubWFwKCh7IGF0dHJpYnV0ZXMsIGlkIH0pID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcnk9e2F0dHJpYnV0ZXMuY2F0ZWdvcmllcy5kYXRhWzBdLmF0dHJpYnV0ZXMudHlwZX1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e2F0dHJpYnV0ZXMuaW1hZ2VzLmRhdGFbMF0uYXR0cmlidXRlcy51cmx9XG4gICAgICAgICAgICAgIHNsdWc9e2F0dHJpYnV0ZXMuc2x1Z31cbiAgICAgICAgICAgICAgcHJpY2U9e2F0dHJpYnV0ZXMucHJpY2V9XG4gICAgICAgICAgICAgIG5hbWU9e2F0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgaXNSZWNvbW1lbmRlZD17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUHJvZHVjdENhcm91c2VsPlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxGaXhlZENhcnRJY29uIC8+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIldyYXBwZXIiLCJQcm9kdWN0SW5mbyIsIlByb2R1Y3RDYXJkIiwiRml4ZWRDYXJ0SWNvbiIsIlByb2R1Y3RDYXJvdXNlbCIsIkFQSV9VUkwiLCJzaHVmZmxlQXJyYXkiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJpZCIsImF0dHJpYnV0ZXMiLCJvdGhlckNvbG9ycyIsInJlY29tbWVuZGVkUHJvZHVjdHMiLCJ0eXBlUHJvZHVjdCIsImNhdGVnb3JpZXMiLCJkYXRhIiwidHlwZSIsInNsdWdQcm9kdWN0Iiwic2x1ZyIsImNhdGVnb3J5UHJvZHVjdFNsdWciLCJjYXRlZ29yeVByb2R1Y3ROYW1lIiwibmFtZSIsImNoYXJhY3RlcmlzdGljcyIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlcyIsIm1hcCIsInNyYyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYXJ0aWNsZSIsImNvbG9yIiwicHJpY2UiLCJvbGRfcHJpY2UiLCJjb2xvckxpc3QiLCJjb2xvcnMiLCJpbWFnZVVybCIsInNpemUiLCJsZW5ndGgiLCJ0aXRsZSIsInByb2R1Y3RDYXRlZ29yeSIsImlzUmVjb21tZW5kZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/[slug].tsx\n"));

/***/ })

});