"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CaseContent.tsx":
/*!****************************************!*\
  !*** ./src/components/CaseContent.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   caseSteps: function() { return /* binding */ caseSteps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Card,CardContent,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Card,CardContent,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n// 完整的案例步骤内容\nconst caseSteps = [\n    {\n        title: \"业主发起议题\",\n        content: \"2022年5月25日，37#702业主实名提议'将36架空层外空地改造成非机动车停车棚'。当满足39人联名发起则该议题判断为共性问题，依据合同金地物业将制定解决方案与业主大会协商讨论。\",\n        action: \"业主需要：填写房号、选择是否联名发起、提供意见建议\"\n    },\n    {\n        title: \"议题成功发起\",\n        content: \"2022年10月29日，已有超过39名业主参与联名，根据5%动议制度成功发起本议题。业委会函复金地协助制定解决方案后交与业主大会协商。\",\n        action: \"业委会需要：发送沟通函给物业，要求制定解决方案\"\n    },\n    {\n        title: \"物业制定方案\",\n        content: \"2023年3月17日，金地制作了方案及三家报价。经查询相关图纸及咨询相关部门，确认36梯楼栋架空层旁空地该处属于红线内，不属于消防登高面。\",\n        action: \"物业需要：提供施工方案和三方报价单\"\n    },\n    {\n        title: \"方案优化\",\n        content: \"2023年5月31日，金地发来一家第三方公司的新方案：费用为1000元/扇门，但有带广告（合同5年）。\",\n        action: \"物业需要：持续寻找更优方案并提交业主大会\"\n    },\n    {\n        title: \"快速咨询\",\n        content: \"2023年6月8日，收到异议：'5年合同期太长，5年中出现纠纷还要支付8000元，5年后设备所有权也依然属于乙方'。金地针对异议进行回应并提供了详细分析。\",\n        action: \"业主需要：参与快速咨询，选择外包方案或自建方案\"\n    },\n    {\n        title: \"快速咨询结果\",\n        content: \"2023年6月20日，快速咨询结果为'外包方案'。该事项需改建共有区域属于民法典278规定由业主共同决定事项，因此根据议事规则上述事项公示15天后于7月5日召开业主大会会议由专有部分业主表决。\",\n        action: \"业委会需要：发布业主大会会议启动公告\"\n    },\n    {\n        title: \"业主大会表决\",\n        content: \"2023年7月5日至7月7日进行表决。表决方式包括线上（使用'家住厦门'APP）和线下（签署纸制书面意见征求表）两种形式。\",\n        action: \"业主需要：参与表决，选择同意、反对、从众或弃权\"\n    },\n    {\n        title: \"表决结果\",\n        content: \"2023年7月20日，公示期结束，最终结果为：反对44票，赞同43票，从众3票。其中反对票的业主占某梯业主总数的40%，赞同票的业主只占全小区剩余业主总数的1%。议案未通过。\",\n        action: \"业委会需要：公示表决结果，结束本次议题\"\n    },\n    {\n        title: \"总结\",\n        content: \"本次业主大会会议经过就很有趣，37#702业主提议把36外属于全体的空地改非机动车停车场，经过联名发起、制作方案，最终进入表决阶段。表决过程中异议者和关心者来回拉锯反转多次，每次都是差一两票，三次反转后最终才形成决议。\",\n        action: \"总结：业主参与度高，决策过程充分体现了民主协商的特点\"\n    }\n];\nconst CaseContent = (param)=>{\n    let { activeStep } = param;\n    const currentStep = caseSteps[activeStep];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: 20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            className: \"card-transition\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        variant: \"h5\",\n                        component: \"h2\",\n                        gutterBottom: true,\n                        color: \"primary\",\n                        children: currentStep.title\n                    }, void 0, false, {\n                        fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        sx: {\n                            mb: 2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                            variant: \"body1\",\n                            paragraph: true,\n                            children: currentStep.content\n                        }, void 0, false, {\n                            fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        sx: {\n                            p: 2,\n                            bgcolor: \"primary.light\",\n                            borderRadius: 1,\n                            color: \"white\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"subtitle1\",\n                                fontWeight: \"bold\",\n                                children: \"下一步行动：\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Card_CardContent_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"body2\",\n                                children: currentStep.action\n                            }, void 0, false, {\n                                fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/wuye/Downloads/阳光共治理念PPT/阳光共治理念HTML/src/components/CaseContent.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CaseContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CaseContent);\nvar _c;\n$RefreshReg$(_c, \"CaseContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXNlQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21FO0FBQzVCO0FBRXZDLFlBQVk7QUFDTCxNQUFNSyxZQUFZO0lBQ3ZCO1FBQ0VDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtDQUNELENBQUM7QUFNRixNQUFNQyxjQUFvQztRQUFDLEVBQUVDLFVBQVUsRUFBRTtJQUN2RCxNQUFNQyxjQUFjTixTQUFTLENBQUNLLFdBQVc7SUFFekMscUJBQ0UsOERBQUNOLGlEQUFNQSxDQUFDUSxHQUFHO1FBQ1RDLFNBQVM7WUFBRUMsU0FBUztZQUFHQyxHQUFHO1FBQUc7UUFDN0JDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO2tCQUU1Qiw0RUFBQ2xCLHFHQUFJQTtZQUFDbUIsV0FBVTtzQkFDZCw0RUFBQ2xCLDRHQUFXQTs7a0NBQ1YsOERBQUNDLDJHQUFVQTt3QkFBQ2tCLFNBQVE7d0JBQUtDLFdBQVU7d0JBQUtDLFlBQVk7d0JBQUNDLE9BQU07a0NBQ3hEWixZQUFZTCxLQUFLOzs7Ozs7a0NBRXBCLDhEQUFDSCxvR0FBR0E7d0JBQUNxQixJQUFJOzRCQUFFQyxJQUFJO3dCQUFFO2tDQUNmLDRFQUFDdkIsMkdBQVVBOzRCQUFDa0IsU0FBUTs0QkFBUU0sU0FBUztzQ0FDbENmLFlBQVlKLE9BQU87Ozs7Ozs7Ozs7O2tDQUd4Qiw4REFBQ0osb0dBQUdBO3dCQUFDcUIsSUFBSTs0QkFDUEcsR0FBRzs0QkFDSEMsU0FBUzs0QkFDVEMsY0FBYzs0QkFDZE4sT0FBTzt3QkFDVDs7MENBQ0UsOERBQUNyQiwyR0FBVUE7Z0NBQUNrQixTQUFRO2dDQUFZVSxZQUFXOzBDQUFPOzs7Ozs7MENBR2xELDhEQUFDNUIsMkdBQVVBO2dDQUFDa0IsU0FBUTswQ0FDakJULFlBQVlILE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakM7S0FwQ01DO0FBc0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhc2VDb250ZW50LnRzeD9jZmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8vIOWujOaVtOeahOahiOS+i+atpemqpOWGheWuuVxuZXhwb3J0IGNvbnN0IGNhc2VTdGVwcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIuS4muS4u+WPkei1t+iurumimFwiLFxuICAgIGNvbnRlbnQ6IFwiMjAyMuW5tDXmnIgyNeaXpe+8jDM3IzcwMuS4muS4u+WunuWQjeaPkOiuriflsIYzNuaetuepuuWxguWkluepuuWcsOaUuemAoOaIkOmdnuacuuWKqOi9puWBnOi9puajmifjgILlvZPmu6HotrMzOeS6uuiBlOWQjeWPkei1t+WImeivpeiurumimOWIpOaWreS4uuWFseaAp+mXrumimO+8jOS+neaNruWQiOWQjOmHkeWcsOeJqeS4muWwhuWItuWumuino+WGs+aWueahiOS4juS4muS4u+Wkp+S8muWNj+WVhuiuqOiuuuOAglwiLFxuICAgIGFjdGlvbjogXCLkuJrkuLvpnIDopoHvvJrloavlhpnmiL/lj7fjgIHpgInmi6nmmK/lkKbogZTlkI3lj5HotbfjgIHmj5DkvpvmhI/op4Hlu7rorq5cIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwi6K6u6aKY5oiQ5Yqf5Y+R6LW3XCIsXG4gICAgY29udGVudDogXCIyMDIy5bm0MTDmnIgyOeaXpe+8jOW3suaciei2hei/hzM55ZCN5Lia5Li75Y+C5LiO6IGU5ZCN77yM5qC55o2uNSXliqjorq7liLbluqbmiJDlip/lj5HotbfmnKzorq7popjjgILkuJrlp5TkvJrlh73lpI3ph5HlnLDljY/liqnliLblrprop6PlhrPmlrnmoYjlkI7kuqTkuI7kuJrkuLvlpKfkvJrljY/llYbjgIJcIixcbiAgICBhY3Rpb246IFwi5Lia5aeU5Lya6ZyA6KaB77ya5Y+R6YCB5rKf6YCa5Ye957uZ54mp5Lia77yM6KaB5rGC5Yi25a6a6Kej5Yaz5pa55qGIXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIueJqeS4muWItuWumuaWueahiFwiLFxuICAgIGNvbnRlbnQ6IFwiMjAyM+W5tDPmnIgxN+aXpe+8jOmHkeWcsOWItuS9nOS6huaWueahiOWPiuS4ieWutuaKpeS7t+OAgue7j+afpeivouebuOWFs+Wbvue6uOWPiuWSqOivouebuOWFs+mDqOmXqO+8jOehruiupDM25qKv5qW85qCL5p6256m65bGC5peB56m65Zyw6K+l5aSE5bGe5LqO57qi57q/5YaF77yM5LiN5bGe5LqO5raI6Ziy55m76auY6Z2i44CCXCIsXG4gICAgYWN0aW9uOiBcIueJqeS4mumcgOimge+8muaPkOS+m+aWveW3peaWueahiOWSjOS4ieaWueaKpeS7t+WNlVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCLmlrnmoYjkvJjljJZcIixcbiAgICBjb250ZW50OiBcIjIwMjPlubQ15pyIMzHml6XvvIzph5HlnLDlj5HmnaXkuIDlrrbnrKzkuInmlrnlhazlj7jnmoTmlrDmlrnmoYjvvJrotLnnlKjkuLoxMDAw5YWDL+aJh+mXqO+8jOS9huacieW4puW5v+WRiu+8iOWQiOWQjDXlubTvvInjgIJcIixcbiAgICBhY3Rpb246IFwi54mp5Lia6ZyA6KaB77ya5oyB57ut5a+75om+5pu05LyY5pa55qGI5bm25o+Q5Lqk5Lia5Li75aSn5LyaXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIuW/q+mAn+WSqOivolwiLFxuICAgIGNvbnRlbnQ6IFwiMjAyM+W5tDbmnIg45pel77yM5pS25Yiw5byC6K6u77yaJzXlubTlkIjlkIzmnJ/lpKrplb/vvIw15bm05Lit5Ye6546w57qg57q36L+Y6KaB5pSv5LuYODAwMOWFg++8jDXlubTlkI7orr7lpIfmiYDmnInmnYPkuZ/kvp3nhLblsZ7kuo7kuZnmlrkn44CC6YeR5Zyw6ZKI5a+55byC6K6u6L+b6KGM5Zue5bqU5bm25o+Q5L6b5LqG6K+m57uG5YiG5p6Q44CCXCIsXG4gICAgYWN0aW9uOiBcIuS4muS4u+mcgOimge+8muWPguS4juW/q+mAn+WSqOivou+8jOmAieaLqeWkluWMheaWueahiOaIluiHquW7uuaWueahiFwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCLlv6vpgJ/lkqjor6Lnu5PmnpxcIixcbiAgICBjb250ZW50OiBcIjIwMjPlubQ25pyIMjDml6XvvIzlv6vpgJ/lkqjor6Lnu5PmnpzkuLon5aSW5YyF5pa55qGIJ+OAguivpeS6i+mhuemcgOaUueW7uuWFseacieWMuuWfn+WxnuS6juawkeazleWFuDI3OOinhOWumueUseS4muS4u+WFseWQjOWGs+WumuS6i+mhue+8jOWboOatpOagueaNruiuruS6i+inhOWImeS4iui/sOS6i+mhueWFrOekujE15aSp5ZCO5LqON+aciDXml6Xlj6zlvIDkuJrkuLvlpKfkvJrkvJrorq7nlLHkuJPmnInpg6jliIbkuJrkuLvooajlhrPjgIJcIixcbiAgICBhY3Rpb246IFwi5Lia5aeU5Lya6ZyA6KaB77ya5Y+R5biD5Lia5Li75aSn5Lya5Lya6K6u5ZCv5Yqo5YWs5ZGKXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIuS4muS4u+Wkp+S8muihqOWGs1wiLFxuICAgIGNvbnRlbnQ6IFwiMjAyM+W5tDfmnIg15pel6IezN+aciDfml6Xov5vooYzooajlhrPjgILooajlhrPmlrnlvI/ljIXmi6znur/kuIrvvIjkvb/nlKgn5a625L2P5Y6m6ZeoJ0FQUO+8ieWSjOe6v+S4i++8iOetvue9sue6uOWItuS5pumdouaEj+ingeW+geaxguihqO+8ieS4pOenjeW9ouW8j+OAglwiLFxuICAgIGFjdGlvbjogXCLkuJrkuLvpnIDopoHvvJrlj4LkuI7ooajlhrPvvIzpgInmi6nlkIzmhI/jgIHlj43lr7njgIHku47kvJfmiJblvIPmnYNcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwi6KGo5Yaz57uT5p6cXCIsXG4gICAgY29udGVudDogXCIyMDIz5bm0N+aciDIw5pel77yM5YWs56S65pyf57uT5p2f77yM5pyA57uI57uT5p6c5Li677ya5Y+N5a+5NDTnpajvvIzotZ7lkIw0M+elqO+8jOS7juS8lzPnpajjgILlhbbkuK3lj43lr7nnpajnmoTkuJrkuLvljaDmn5Dmoq/kuJrkuLvmgLvmlbDnmoQ0MCXvvIzotZ7lkIznpajnmoTkuJrkuLvlj6rljaDlhajlsI/ljLrliankvZnkuJrkuLvmgLvmlbDnmoQxJeOAguiuruahiOacqumAmui/h+OAglwiLFxuICAgIGFjdGlvbjogXCLkuJrlp5TkvJrpnIDopoHvvJrlhaznpLrooajlhrPnu5PmnpzvvIznu5PmnZ/mnKzmrKHorq7pophcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwi5oC757uTXCIsXG4gICAgY29udGVudDogXCLmnKzmrKHkuJrkuLvlpKfkvJrkvJrorq7nu4/ov4flsLHlvojmnInotqPvvIwzNyM3MDLkuJrkuLvmj5Dorq7mioozNuWkluWxnuS6juWFqOS9k+eahOepuuWcsOaUuemdnuacuuWKqOi9puWBnOi9puWcuu+8jOe7j+i/h+iBlOWQjeWPkei1t+OAgeWItuS9nOaWueahiO+8jOacgOe7iOi/m+WFpeihqOWGs+mYtuauteOAguihqOWGs+i/h+eoi+S4reW8guiuruiAheWSjOWFs+W/g+iAheadpeWbnuaLiemUr+WPjei9rOWkmuasoe+8jOavj+asoemDveaYr+W3ruS4gOS4pOelqO+8jOS4ieasoeWPjei9rOWQjuacgOe7iOaJjeW9ouaIkOWGs+iuruOAglwiLFxuICAgIGFjdGlvbjogXCLmgLvnu5PvvJrkuJrkuLvlj4LkuI7luqbpq5jvvIzlhrPnrZbov4fnqIvlhYXliIbkvZPnjrDkuobmsJHkuLvljY/llYbnmoTnibnngrlcIlxuICB9XG5dO1xuXG5pbnRlcmZhY2UgQ2FzZUNvbnRlbnRQcm9wcyB7XG4gIGFjdGl2ZVN0ZXA6IG51bWJlcjtcbn1cblxuY29uc3QgQ2FzZUNvbnRlbnQ6IEZDPENhc2VDb250ZW50UHJvcHM+ID0gKHsgYWN0aXZlU3RlcCB9KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRTdGVwID0gY2FzZVN0ZXBzW2FjdGl2ZVN0ZXBdO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZC10cmFuc2l0aW9uXCI+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiIGd1dHRlckJvdHRvbSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIHtjdXJyZW50U3RlcC50aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJveCBzeD17eyBtYjogMiB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgICAge2N1cnJlbnRTdGVwLmNvbnRlbnR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17eyBcbiAgICAgICAgICAgIHA6IDIsIFxuICAgICAgICAgICAgYmdjb2xvcjogJ3ByaW1hcnkubGlnaHQnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICDkuIvkuIDmraXooYzliqjvvJpcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICB7Y3VycmVudFN0ZXAuYWN0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VDb250ZW50OyAiXSwibmFtZXMiOlsiQ2FyZCIsIkNhcmRDb250ZW50IiwiVHlwb2dyYXBoeSIsIkJveCIsIm1vdGlvbiIsImNhc2VTdGVwcyIsInRpdGxlIiwiY29udGVudCIsImFjdGlvbiIsIkNhc2VDb250ZW50IiwiYWN0aXZlU3RlcCIsImN1cnJlbnRTdGVwIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJndXR0ZXJCb3R0b20iLCJjb2xvciIsInN4IiwibWIiLCJwYXJhZ3JhcGgiLCJwIiwiYmdjb2xvciIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CaseContent.tsx\n"));

/***/ })

});