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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_product_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/product/ProductInfo */ \"./src/components/product/ProductInfo.tsx\");\n/* harmony import */ var _components_product_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/product/ProductCard */ \"./src/components/product/ProductCard.tsx\");\n/* harmony import */ var _components_FixedCartIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FixedCartIcon */ \"./src/components/FixedCartIcon.tsx\");\n/* harmony import */ var _components_sections_ProductCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sections/ProductCarousel */ \"./src/components/sections/ProductCarousel.tsx\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/urls */ \"./src/utils/urls.ts\");\n/* harmony import */ var _utils_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/helpers/shuffleArray */ \"./src/utils/helpers/shuffleArray.ts\");\n\n\n\n\n\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { product: { id, attributes }, recommendedProducts } = param;\n    var _attributes_categories, _attributes_categories1, _attributes_images, _attributes_images1;\n    const typeProduct = attributes.categories.data[0].attributes.type; // Одежда или обувь\n    const slugProduct = attributes.slug; // Уникальное название товара\n    const categoryProductSlug = (_attributes_categories = attributes.categories) === null || _attributes_categories === void 0 ? void 0 : _attributes_categories.data[0].attributes.slug;\n    const categoryProductName = (_attributes_categories1 = attributes.categories) === null || _attributes_categories1 === void 0 ? void 0 : _attributes_categories1.data[0].attributes.name;\n    const characteristics = attributes.characteristics;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row gap-10 pt-6 lg:px-0 lg:pr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid sm:grid-cols-2 gap-4 col-span-2\",\n                        children: (_attributes_images = attributes.images) === null || _attributes_images === void 0 ? void 0 : _attributes_images.data.map((param)=>/*#__PURE__*/ {\n                            let { id, attributes } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_8__.API_URL).concat(attributes.url),\n                                width: 1000,\n                                height: 1000,\n                                alt: \"Одежда\",\n                                className: \"sm:h-[500px] md:h-[550px]\"\n                            }, id, false, {\n                                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductInfo__WEBPACK_IMPORTED_MODULE_4__.ProductInfo, {\n                        id: id,\n                        name: attributes.name,\n                        article: attributes.article,\n                        color: attributes.color,\n                        price: attributes.price,\n                        old_price: attributes.old_price,\n                        colorList: attributes.colors,\n                        imageUrl: (_attributes_images1 = attributes.images) === null || _attributes_images1 === void 0 ? void 0 : _attributes_images1.data[0].attributes.url,\n                        size: attributes.size,\n                        typeProduct: typeProduct,\n                        slugProduct: slugProduct,\n                        categoryProductSlug: categoryProductSlug,\n                        categoryProductName: categoryProductName,\n                        characteristics: characteristics\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            recommendedProducts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_ProductCarousel__WEBPACK_IMPORTED_MODULE_7__.ProductCarousel, {\n                title: \"Рекомендуемые товары\",\n                children: (0,_utils_helpers_shuffleArray__WEBPACK_IMPORTED_MODULE_9__.shuffleArray)(recommendedProducts).map((param)=>/*#__PURE__*/ {\n                    let { attributes, id } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductCard__WEBPACK_IMPORTED_MODULE_5__.ProductCard, {\n                        productCategory: attributes.categories.data[0].attributes.type,\n                        imageUrl: attributes.images.data[0].attributes.url,\n                        slug: attributes.slug,\n                        price: attributes.price,\n                        name: attributes.name,\n                        isRecommended: true\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                        lineNumber: 137,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 135,\n                columnNumber: 9\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FixedCartIcon__WEBPACK_IMPORTED_MODULE_6__.FixedCartIcon, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zadam\\\\Desktop\\\\akula-client\\\\src\\\\pages\\\\product\\\\[slug].tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0L1tzbHVnXS50c3g/MmY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1dyYXBwZXJcIjtcbmltcG9ydCB7IFByb2R1Y3RJbmZvIH0gZnJvbSBcIkAvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RJbmZvXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHsgRml4ZWRDYXJ0SWNvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvRml4ZWRDYXJ0SWNvblwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9kdWN0Q2Fyb3VzZWxcIjtcblxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJAL3V0aWxzL3VybHNcIjtcbmltcG9ydCB7IHNodWZmbGVBcnJheSB9IGZyb20gXCJAL3V0aWxzL2hlbHBlcnMvc2h1ZmZsZUFycmF5XCI7XG5pbXBvcnQge1xuICBQcm9kdWN0TGlzdFJlc3BvbnNlLFxuICBQcm9kdWN0UmVzcG9uc2UsXG4gIGZldGNoRGF0YUZyb21BcGksXG59IGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5pbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0L3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnkgZXh0ZW5kcyBQYXJzZWRVcmxRdWVyeSB7XG4gIHNsdWc6IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbnR5cGUgUHJvZHVjdERldGFpbHNQcm9wcyA9IHtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgcmVjb21tZW5kZWRQcm9kdWN0czogUHJvZHVjdFtdO1xufTtcblxudHlwZSBkaWZmZXJlbnRQcm9kdWN0Q29sb3JzID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBhdHRyaWJ1dGVzOiB7fVxuICB9W11cbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPFxuICBQcm9kdWN0RGV0YWlsc1Byb3BzXG4+ID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IHNsdWcsIGNvbG9yIH0gPSBxdWVyeSBhcyBRdWVyeTtcblxuICBpZiAoY29sb3IpIHtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSB9OiBQcm9kdWN0TGlzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFwaShcbiAgICBgL2FwaS9wcm9kdWN0cz9wb3B1bGF0ZT0qJmZpbHRlcnNbc2x1Z11bJGVxXT0ke3NsdWd9YFxuICApO1xuXG4gIGNvbnN0IHByb2R1Y3Q6IFByb2R1Y3RSZXNwb25zZSA9IGF3YWl0IGZldGNoRGF0YUZyb21BcGkoXG4gICAgYC9hcGkvcHJvZHVjdHMvJHtkYXRhWzBdLmlkfT9wb3B1bGF0ZT1kZWVwYFxuICApO1xuXG4gIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHNSZXM6IFByb2R1Y3RMaXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGFGcm9tQXBpKFxuICAgIGAvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSomZmlsdGVyc1tjYXRlZ29yaWVzXVtzbHVnXVskZXFdPSR7cHJvZHVjdC5kYXRhLmF0dHJpYnV0ZXMuY2F0ZWdvcmllcz8uZGF0YVswXS5hdHRyaWJ1dGVzLnNsdWd9YFxuICApO1xuXG4gIGNvbnN0IGRpZmZlcmVudFByb2R1Y3RDb2xvcnMgPSBhd2FpdCBmZXRjaERhdGFGcm9tQXBpKFxuICAgIGAvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSomZmlsdGVyc1thcnRpY2xlXVskZXFdPSR7cHJvZHVjdC5kYXRhLmF0dHJpYnV0ZXMuYXJ0aWNsZX1gXG4gIClcblxuICBjb25zb2xlLmxvZyhkaWZmZXJlbnRQcm9kdWN0Q29sb3JzLmRhdGFbMF0uYXR0cmlidXRlcy5jb2xvcilcblxuXG4gIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHMgPSByZWNvbW1lbmRlZFByb2R1Y3RzUmVzLmRhdGFcbiAgICAucmV2ZXJzZSgpXG4gICAgLnNsaWNlKDAsIDgpXG4gICAgLmZpbHRlcigocHJvZCkgPT4gcHJvZC5pZCAhPT0gcHJvZHVjdC5kYXRhLmlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiBwcm9kdWN0LmRhdGEsXG4gICAgICByZWNvbW1lbmRlZFByb2R1Y3RzOiByZWNvbW1lbmRlZFByb2R1Y3RzLFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7XG4gIHByb2R1Y3Q6IHsgaWQsIGF0dHJpYnV0ZXMgfSxcbiAgcmVjb21tZW5kZWRQcm9kdWN0cyxcbn06IFByb2R1Y3REZXRhaWxzUHJvcHMpID0+IHtcbiAgY29uc3QgdHlwZVByb2R1Y3QgPSBhdHRyaWJ1dGVzLmNhdGVnb3JpZXMuZGF0YVswXS5hdHRyaWJ1dGVzLnR5cGU7IC8vINCe0LTQtdC20LTQsCDQuNC70Lgg0L7QsdGD0LLRjFxuICBjb25zdCBzbHVnUHJvZHVjdCA9IGF0dHJpYnV0ZXMuc2x1ZzsgLy8g0KPQvdC40LrQsNC70YzQvdC+0LUg0L3QsNC30LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcbiAgY29uc3QgY2F0ZWdvcnlQcm9kdWN0U2x1ZyA9IGF0dHJpYnV0ZXMuY2F0ZWdvcmllcz8uZGF0YVswXS5hdHRyaWJ1dGVzLnNsdWc7XG4gIGNvbnN0IGNhdGVnb3J5UHJvZHVjdE5hbWUgPSBhdHRyaWJ1dGVzLmNhdGVnb3JpZXM/LmRhdGFbMF0uYXR0cmlidXRlcy5uYW1lO1xuICBjb25zdCBjaGFyYWN0ZXJpc3RpY3MgPSBhdHRyaWJ1dGVzLmNoYXJhY3RlcmlzdGljcztcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC0xMCBwdC02IGxnOnB4LTAgbGc6cHItOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTQgY29sLXNwYW4tMlwiPlxuICAgICAgICAgIHthdHRyaWJ1dGVzLmltYWdlcz8uZGF0YS5tYXAoKHsgaWQsIGF0dHJpYnV0ZXMgfSkgPT4gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHNyYz17YCR7QVBJX1VSTH0ke2F0dHJpYnV0ZXMudXJsfWB9XG4gICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XG4gICAgICAgICAgICAgIGFsdD1cItCe0LTQtdC20LTQsFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtOmgtWzUwMHB4XSBtZDpoLVs1NTBweF1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvcHJvZHVjdHMvMS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezY1MH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgYWx0PVwi0J7QtNC10LbQtNCwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgdy1mdWxsXCJcbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICB7LyogPEltYWdlIHNyYz1cIi9wcm9kdWN0cy8xLnBuZ1wiIHdpZHRoPXs2NTB9IGhlaWdodD17NDAwfSBhbHQ9XCLQntC00LXQttC00LBcIiAvPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHJvZHVjdHMvMS5wbmdcIiB3aWR0aD17NjUwfSBoZWlnaHQ9ezQwMH0gYWx0PVwi0J7QtNC10LbQtNCwXCIgLz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzLzEucG5nXCIgd2lkdGg9ezY1MH0gaGVpZ2h0PXs0MDB9IGFsdD1cItCe0LTQtdC20LTQsFwiIC8+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy8xLnBuZ1wiIHdpZHRoPXs2NTB9IGhlaWdodD17NDAwfSBhbHQ9XCLQntC00LXQttC00LBcIiAvPiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFByb2R1Y3RJbmZvXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e2F0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICBhcnRpY2xlPXthdHRyaWJ1dGVzLmFydGljbGV9XG4gICAgICAgICAgY29sb3I9e2F0dHJpYnV0ZXMuY29sb3J9XG4gICAgICAgICAgcHJpY2U9e2F0dHJpYnV0ZXMucHJpY2V9XG4gICAgICAgICAgb2xkX3ByaWNlPXthdHRyaWJ1dGVzLm9sZF9wcmljZX1cbiAgICAgICAgICBjb2xvckxpc3Q9e2F0dHJpYnV0ZXMuY29sb3JzfVxuICAgICAgICAgIGltYWdlVXJsPXthdHRyaWJ1dGVzLmltYWdlcz8uZGF0YVswXS5hdHRyaWJ1dGVzLnVybH1cbiAgICAgICAgICBzaXplPXthdHRyaWJ1dGVzLnNpemV9XG4gICAgICAgICAgdHlwZVByb2R1Y3Q9e3R5cGVQcm9kdWN0fVxuICAgICAgICAgIHNsdWdQcm9kdWN0PXtzbHVnUHJvZHVjdH1cbiAgICAgICAgICBjYXRlZ29yeVByb2R1Y3RTbHVnPXtjYXRlZ29yeVByb2R1Y3RTbHVnfVxuICAgICAgICAgIGNhdGVnb3J5UHJvZHVjdE5hbWU9e2NhdGVnb3J5UHJvZHVjdE5hbWV9XG4gICAgICAgICAgY2hhcmFjdGVyaXN0aWNzPXtjaGFyYWN0ZXJpc3RpY3N9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3JlY29tbWVuZGVkUHJvZHVjdHMubGVuZ3RoID8gKFxuICAgICAgICA8UHJvZHVjdENhcm91c2VsIHRpdGxlPVwi0KDQtdC60L7QvNC10L3QtNGD0LXQvNGL0LUg0YLQvtCy0LDRgNGLXCI+XG4gICAgICAgICAge3NodWZmbGVBcnJheShyZWNvbW1lbmRlZFByb2R1Y3RzKS5tYXAoKHsgYXR0cmlidXRlcywgaWQgfSkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHByb2R1Y3RDYXRlZ29yeT17YXR0cmlidXRlcy5jYXRlZ29yaWVzLmRhdGFbMF0uYXR0cmlidXRlcy50eXBlfVxuICAgICAgICAgICAgICBpbWFnZVVybD17YXR0cmlidXRlcy5pbWFnZXMuZGF0YVswXS5hdHRyaWJ1dGVzLnVybH1cbiAgICAgICAgICAgICAgc2x1Zz17YXR0cmlidXRlcy5zbHVnfVxuICAgICAgICAgICAgICBwcmljZT17YXR0cmlidXRlcy5wcmljZX1cbiAgICAgICAgICAgICAgbmFtZT17YXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICBpc1JlY29tbWVuZGVkPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Qcm9kdWN0Q2Fyb3VzZWw+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPEZpeGVkQ2FydEljb24gLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiV3JhcHBlciIsIlByb2R1Y3RJbmZvIiwiUHJvZHVjdENhcmQiLCJGaXhlZENhcnRJY29uIiwiUHJvZHVjdENhcm91c2VsIiwiQVBJX1VSTCIsInNodWZmbGVBcnJheSIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdCIsImlkIiwiYXR0cmlidXRlcyIsInJlY29tbWVuZGVkUHJvZHVjdHMiLCJ0eXBlUHJvZHVjdCIsImNhdGVnb3JpZXMiLCJkYXRhIiwidHlwZSIsInNsdWdQcm9kdWN0Iiwic2x1ZyIsImNhdGVnb3J5UHJvZHVjdFNsdWciLCJjYXRlZ29yeVByb2R1Y3ROYW1lIiwibmFtZSIsImNoYXJhY3RlcmlzdGljcyIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlcyIsIm1hcCIsInNyYyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYXJ0aWNsZSIsImNvbG9yIiwicHJpY2UiLCJvbGRfcHJpY2UiLCJjb2xvckxpc3QiLCJjb2xvcnMiLCJpbWFnZVVybCIsInNpemUiLCJsZW5ndGgiLCJ0aXRsZSIsInByb2R1Y3RDYXRlZ29yeSIsImlzUmVjb21tZW5kZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/[slug].tsx\n"));

/***/ })

});