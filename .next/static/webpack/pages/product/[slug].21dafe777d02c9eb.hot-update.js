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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_product_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/product/ProductInfo */ \"./src/components/product/ProductInfo.tsx\");\n/* harmony import */ var _components_product_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/product/ProductCard */ \"./src/components/product/ProductCard.tsx\");\n/* harmony import */ var _components_FixedCartIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FixedCartIcon */ \"./src/components/FixedCartIcon.tsx\");\n/* harmony import */ var _components_sections_ProductCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sections/ProductCarousel */ \"./src/components/sections/ProductCarousel.tsx\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/urls */ \"./src/utils/urls.ts\");\n/* harmony import */ var _utils_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/helpers/shuffleArray */ \"./src/utils/helpers/shuffleArray.ts\");\n\n\n\n\n\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { product: { id, attributes }, // otherColorsProduct,\n    recommendedProducts } = param;\n    var _attributes_categories, _attributes_categories1, _attributes_images, _attributes_images1;\n    const typeProduct = attributes.categories.data[0].attributes.type; // Одежда или обувь\n    const slugProduct = attributes.slug; // Уникальное название товара\n    const categoryProductSlug = (_attributes_categories = attributes.categories) === null || _attributes_categories === void 0 ? void 0 : _attributes_categories.data[0].attributes.slug;\n    const categoryProductName = (_attributes_categories1 = attributes.categories) === null || _attributes_categories1 === void 0 ? void 0 : _attributes_categories1.data[0].attributes.name;\n    const characteristics = attributes.characteristics;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row gap-10 pt-6 lg:px-0 lg:pr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid sm:grid-cols-2 gap-4 col-span-2\",\n                        children: (_attributes_images = attributes.images) === null || _attributes_images === void 0 ? void 0 : _attributes_images.data.map((param)=>/*#__PURE__*/ {\n                            let { id, attributes } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_8__.API_URL).concat(attributes.url),\n                                width: 1000,\n                                height: 1000,\n                                alt: \"Одежда\",\n                                className: \"sm:h-[500px] md:h-[550px]\"\n                            }, id, false, {\n                                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductInfo__WEBPACK_IMPORTED_MODULE_4__.ProductInfo, {\n                        id: id,\n                        name: attributes.name,\n                        article: attributes.article,\n                        color: attributes.color,\n                        price: attributes.price,\n                        old_price: attributes.old_price,\n                        colorList: attributes.colors,\n                        imageUrl: (_attributes_images1 = attributes.images) === null || _attributes_images1 === void 0 ? void 0 : _attributes_images1.data[0].attributes.url,\n                        size: attributes.size,\n                        typeProduct: typeProduct,\n                        slugProduct: slugProduct,\n                        categoryProductSlug: categoryProductSlug,\n                        categoryProductName: categoryProductName,\n                        characteristics: characteristics\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            recommendedProducts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_ProductCarousel__WEBPACK_IMPORTED_MODULE_7__.ProductCarousel, {\n                title: \"Рекомендуемые товары\",\n                children: (0,_utils_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_9__.shuffleArray)(recommendedProducts).map((param)=>/*#__PURE__*/ {\n                    let { attributes, id } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductCard__WEBPACK_IMPORTED_MODULE_5__.ProductCard, {\n                        productCategory: attributes.categories.data[0].attributes.type,\n                        imageUrl: attributes.images.data[0].attributes.url,\n                        slug: attributes.slug,\n                        price: attributes.price,\n                        name: attributes.name,\n                        isRecommended: true\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 154,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FixedCartIcon__WEBPACK_IMPORTED_MODULE_6__.FixedCartIcon, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4PzJmOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9XcmFwcGVyXCI7XG5pbXBvcnQgeyBQcm9kdWN0SW5mbyB9IGZyb20gXCJAL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0SW5mb1wiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IEZpeGVkQ2FydEljb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0ZpeGVkQ2FydEljb25cIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJvdXNlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJvZHVjdENhcm91c2VsXCI7XG5cbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiQC91dGlscy91cmxzXCI7XG5pbXBvcnQgeyBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiQC91dGlscy9oZWxwZXJzL3NodWZmbGVBcnJheVwiO1xuaW1wb3J0IHtcbiAgUHJvZHVjdExpc3RSZXNwb25zZSxcbiAgUHJvZHVjdFJlc3BvbnNlLFxuICBmZXRjaERhdGFGcm9tQXBpLFxufSBmcm9tIFwiQC91dGlscy9hcGlcIjtcblxuaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dC90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IGV4dGVuZHMgUGFyc2VkVXJsUXVlcnkge1xuICBzbHVnOiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xufVxuXG50eXBlIFByb2R1Y3REZXRhaWxzUHJvcHMgPSB7XG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIG90aGVyQ29sb3JzOiBPdGhlckNvbG9yc1R5cGVbXVxuICByZWNvbW1lbmRlZFByb2R1Y3RzOiBQcm9kdWN0W107XG59O1xuXG50eXBlIE90aGVyQ29sb3JzUHJvZHVjdFR5cGUgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGF0dHJpYnV0ZXM6IFByb2R1Y3RBdHRyaWJ1dGVzXG4gIH1bXVxufVxuXG50eXBlIE90aGVyQ29sb3JzVHlwZSA9IHtcbiAgY29sb3I6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8XG4gIFByb2R1Y3REZXRhaWxzUHJvcHNcbj4gPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZywgY29sb3IgfSA9IHF1ZXJ5IGFzIFF1ZXJ5O1xuXG4gIGNvbnN0IHsgZGF0YSB9OiBQcm9kdWN0TGlzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFwaShcbiAgICBgL2FwaS9wcm9kdWN0cz9wb3B1bGF0ZT0qJmZpbHRlcnNbc2x1Z11bJGVxXT0ke3NsdWd9YFxuICApO1xuXG4gIGNvbnN0IHByb2R1Y3Q6IFByb2R1Y3RSZXNwb25zZSA9IGF3YWl0IGZldGNoRGF0YUZyb21BcGkoXG4gICAgYC9hcGkvcHJvZHVjdHMvJHtkYXRhWzBdLmlkfT9wb3B1bGF0ZT1kZWVwYFxuICApO1xuXG4gIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHNSZXM6IFByb2R1Y3RMaXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGFGcm9tQXBpKFxuICAgIGAvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSomZmlsdGVyc1tjYXRlZ29yaWVzXVtzbHVnXVskZXFdPSR7cHJvZHVjdC5kYXRhLmF0dHJpYnV0ZXMuY2F0ZWdvcmllcz8uZGF0YVswXS5hdHRyaWJ1dGVzLnNsdWd9YFxuICApO1xuXG4gIGNvbnN0IG90aGVyQ29sb3JzUHJvZHVjdDogT3RoZXJDb2xvcnNQcm9kdWN0VHlwZSA9IGF3YWl0IGZldGNoRGF0YUZyb21BcGkoXG4gICAgYC9hcGkvcHJvZHVjdHM/cG9wdWxhdGU9KiZmaWx0ZXJzW2FydGljbGVdWyRlcV09JHtwcm9kdWN0LmRhdGEuYXR0cmlidXRlcy5hcnRpY2xlfWBcbiAgKVxuXG4gIGNvbnN0IG90aGVyQ29sb3JzOiBPdGhlckNvbG9yc1R5cGVbXSA9IFtdO1xuXG4gIG90aGVyQ29sb3JzUHJvZHVjdC5kYXRhLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBjb2xvcjogcHJvZHVjdC5hdHRyaWJ1dGVzLmNvbG9yLFxuICAgICAgc2x1ZzogcHJvZHVjdC5hdHRyaWJ1dGVzLnNsdWdcbiAgICB9XG5cbiAgICBvdGhlckNvbG9ycy5wdXNoKG9iailcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cob3RoZXJDb2xvcnMpXG5cblxuICBjb25zdCByZWNvbW1lbmRlZFByb2R1Y3RzID0gcmVjb21tZW5kZWRQcm9kdWN0c1Jlcy5kYXRhXG4gICAgLnJldmVyc2UoKVxuICAgIC5zbGljZSgwLCA4KVxuICAgIC5maWx0ZXIoKHByb2QpID0+IHByb2QuaWQgIT09IHByb2R1Y3QuZGF0YS5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdDogcHJvZHVjdC5kYXRhLFxuICAgICAgb3RoZXJDb2xvcnMsXG4gICAgICByZWNvbW1lbmRlZFByb2R1Y3RzOiByZWNvbW1lbmRlZFByb2R1Y3RzLFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7XG4gIHByb2R1Y3Q6IHsgaWQsIGF0dHJpYnV0ZXMgfSxcbiAgLy8gb3RoZXJDb2xvcnNQcm9kdWN0LFxuICByZWNvbW1lbmRlZFByb2R1Y3RzLFxufTogUHJvZHVjdERldGFpbHNQcm9wcykgPT4ge1xuICBjb25zdCB0eXBlUHJvZHVjdCA9IGF0dHJpYnV0ZXMuY2F0ZWdvcmllcy5kYXRhWzBdLmF0dHJpYnV0ZXMudHlwZTsgLy8g0J7QtNC10LbQtNCwINC40LvQuCDQvtCx0YPQstGMXG4gIGNvbnN0IHNsdWdQcm9kdWN0ID0gYXR0cmlidXRlcy5zbHVnOyAvLyDQo9C90LjQutCw0LvRjNC90L7QtSDQvdCw0LfQstCw0L3QuNC1INGC0L7QstCw0YDQsFxuICBjb25zdCBjYXRlZ29yeVByb2R1Y3RTbHVnID0gYXR0cmlidXRlcy5jYXRlZ29yaWVzPy5kYXRhWzBdLmF0dHJpYnV0ZXMuc2x1ZztcbiAgY29uc3QgY2F0ZWdvcnlQcm9kdWN0TmFtZSA9IGF0dHJpYnV0ZXMuY2F0ZWdvcmllcz8uZGF0YVswXS5hdHRyaWJ1dGVzLm5hbWU7XG4gIGNvbnN0IGNoYXJhY3RlcmlzdGljcyA9IGF0dHJpYnV0ZXMuY2hhcmFjdGVyaXN0aWNzO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTEwIHB0LTYgbGc6cHgtMCBsZzpwci04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtNCBjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAge2F0dHJpYnV0ZXMuaW1hZ2VzPy5kYXRhLm1hcCgoeyBpZCwgYXR0cmlidXRlcyB9KSA9PiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgc3JjPXtgJHtBUElfVVJMfSR7YXR0cmlidXRlcy51cmx9YH1cbiAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cbiAgICAgICAgICAgICAgYWx0PVwi0J7QtNC10LbQtNCwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic206aC1bNTAwcHhdIG1kOmgtWzU1MHB4XVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9wcm9kdWN0cy8xLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17NjUwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICBhbHQ9XCLQntC00LXQttC00LBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiB3LWZ1bGxcIlxuICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzLzEucG5nXCIgd2lkdGg9ezY1MH0gaGVpZ2h0PXs0MDB9IGFsdD1cItCe0LTQtdC20LTQsFwiIC8+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy8xLnBuZ1wiIHdpZHRoPXs2NTB9IGhlaWdodD17NDAwfSBhbHQ9XCLQntC00LXQttC00LBcIiAvPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHJvZHVjdHMvMS5wbmdcIiB3aWR0aD17NjUwfSBoZWlnaHQ9ezQwMH0gYWx0PVwi0J7QtNC10LbQtNCwXCIgLz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzLzEucG5nXCIgd2lkdGg9ezY1MH0gaGVpZ2h0PXs0MDB9IGFsdD1cItCe0LTQtdC20LTQsFwiIC8+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UHJvZHVjdEluZm9cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17YXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgIGFydGljbGU9e2F0dHJpYnV0ZXMuYXJ0aWNsZX1cbiAgICAgICAgICBjb2xvcj17YXR0cmlidXRlcy5jb2xvcn1cbiAgICAgICAgICBwcmljZT17YXR0cmlidXRlcy5wcmljZX1cbiAgICAgICAgICBvbGRfcHJpY2U9e2F0dHJpYnV0ZXMub2xkX3ByaWNlfVxuICAgICAgICAgIGNvbG9yTGlzdD17YXR0cmlidXRlcy5jb2xvcnN9XG4gICAgICAgICAgaW1hZ2VVcmw9e2F0dHJpYnV0ZXMuaW1hZ2VzPy5kYXRhWzBdLmF0dHJpYnV0ZXMudXJsfVxuICAgICAgICAgIHNpemU9e2F0dHJpYnV0ZXMuc2l6ZX1cbiAgICAgICAgICB0eXBlUHJvZHVjdD17dHlwZVByb2R1Y3R9XG4gICAgICAgICAgc2x1Z1Byb2R1Y3Q9e3NsdWdQcm9kdWN0fVxuICAgICAgICAgIGNhdGVnb3J5UHJvZHVjdFNsdWc9e2NhdGVnb3J5UHJvZHVjdFNsdWd9XG4gICAgICAgICAgY2F0ZWdvcnlQcm9kdWN0TmFtZT17Y2F0ZWdvcnlQcm9kdWN0TmFtZX1cbiAgICAgICAgICBjaGFyYWN0ZXJpc3RpY3M9e2NoYXJhY3RlcmlzdGljc31cbiAgICAgICAgICAvLyBvdGhlckNvbG9yUHJvZHVjdD17fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtyZWNvbW1lbmRlZFByb2R1Y3RzLmxlbmd0aCA/IChcbiAgICAgICAgPFByb2R1Y3RDYXJvdXNlbCB0aXRsZT1cItCg0LXQutC+0LzQtdC90LTRg9C10LzRi9C1INGC0L7QstCw0YDRi1wiPlxuICAgICAgICAgIHtzaHVmZmxlQXJyYXkocmVjb21tZW5kZWRQcm9kdWN0cykubWFwKCh7IGF0dHJpYnV0ZXMsIGlkIH0pID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBwcm9kdWN0Q2F0ZWdvcnk9e2F0dHJpYnV0ZXMuY2F0ZWdvcmllcy5kYXRhWzBdLmF0dHJpYnV0ZXMudHlwZX1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e2F0dHJpYnV0ZXMuaW1hZ2VzLmRhdGFbMF0uYXR0cmlidXRlcy51cmx9XG4gICAgICAgICAgICAgIHNsdWc9e2F0dHJpYnV0ZXMuc2x1Z31cbiAgICAgICAgICAgICAgcHJpY2U9e2F0dHJpYnV0ZXMucHJpY2V9XG4gICAgICAgICAgICAgIG5hbWU9e2F0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgaXNSZWNvbW1lbmRlZD17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUHJvZHVjdENhcm91c2VsPlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxGaXhlZENhcnRJY29uIC8+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIldyYXBwZXIiLCJQcm9kdWN0SW5mbyIsIlByb2R1Y3RDYXJkIiwiRml4ZWRDYXJ0SWNvbiIsIlByb2R1Y3RDYXJvdXNlbCIsIkFQSV9VUkwiLCJzaHVmZmxlQXJyYXkiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJpZCIsImF0dHJpYnV0ZXMiLCJyZWNvbW1lbmRlZFByb2R1Y3RzIiwidHlwZVByb2R1Y3QiLCJjYXRlZ29yaWVzIiwiZGF0YSIsInR5cGUiLCJzbHVnUHJvZHVjdCIsInNsdWciLCJjYXRlZ29yeVByb2R1Y3RTbHVnIiwiY2F0ZWdvcnlQcm9kdWN0TmFtZSIsIm5hbWUiLCJjaGFyYWN0ZXJpc3RpY3MiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZXMiLCJtYXAiLCJzcmMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImFydGljbGUiLCJjb2xvciIsInByaWNlIiwib2xkX3ByaWNlIiwiY29sb3JMaXN0IiwiY29sb3JzIiwiaW1hZ2VVcmwiLCJzaXplIiwibGVuZ3RoIiwidGl0bGUiLCJwcm9kdWN0Q2F0ZWdvcnkiLCJpc1JlY29tbWVuZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/product/[slug].tsx\n"));

/***/ })

});