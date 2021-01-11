module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/comment.png":
/*!***********************************!*\
  !*** ./assets/images/comment.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAARCAYAAADDjbwNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdBNzJCQTJFNjhFOTExRUFCQTQzRjEzNUQ3MTNFQ0JFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdBNzJCQTJGNjhFOTExRUFCQTQzRjEzNUQ3MTNFQ0JFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0E3MkJBMkM2OEU5MTFFQUJBNDNGMTM1RDcxM0VDQkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0E3MkJBMkQ2OEU5MTFFQUJBNDNGMTM1RDcxM0VDQkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6lfUdHAAAAoklEQVR42mK0S/kfyMDAMBuIhRloAz4AcQ4TkOimoSUgIADEbSCLRBhoD/hAFv2lg0X/mBjoBEYtGhoW0cMyRpAlv+mVvOfSwaJlLECiGogvArEWyIt4FKsBcRia2Hkg3opHz38gvgHEq0AW/QPiFUS4ygXNIpAlHkD8itqpjguJfRqIvYi1BARYyMgKZ4DYhxRLSPURyBddQBxEqiUgABBgAB9GG4udPiSVAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./assets/images/commentarrow.png":
/*!****************************************!*\
  !*** ./assets/images/commentarrow.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAMCAYAAACNzvbFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEbSURBVHjarJM/SwJxGMcfI4JojqD1Np1dfzebcHDIDTWIxHOTaB5ibu7V1NyL6C3UC2iMohAt/5DWGmGc92kwWsTzlD7wXR6e58MzPE8KkP9mI2mj7UvL9qWVpDeVZFPbl9P9XTkTERm+S/P2Ss5jB4DYGKXmNeHtYxavCUapxc0sE5YLDaLBmD8GYyg0iIxSXllqFHXrRL0Rc/RG4NaJjKKJpUYpOQHT7pCFdIfgBEyNUloqNcqRExC2+yyl3QcnIDTK4UKpUbx8lfD5lcQ8vUC+SmgUb05qFDdXYfLYYWUeOpCrMDGKC8zu1PblYGdbri9OZCtjrfdF922RxqV8f36Ju/lbK2bTcpyxZLTua2YskWxa9m7upPgzALiY+fBflPkPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./assets/images/commentsend.png":
/*!***************************************!*\
  !*** ./assets/images/commentsend.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTE3VDE3OjIxOjA0KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0xN1QxNzoyNjo1MSswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0xN1QxNzoyNjo1MSswNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OTdjZTcyYi04YmNiLWNmNGQtODI1OC1mY2U4ZDk2MGVmYzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzE4ZGUzZTUtODAzMy1mZTQyLTk4ZDQtMjllMGFjOTNjODA2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzE4ZGUzZTUtODAzMy1mZTQyLTk4ZDQtMjllMGFjOTNjODA2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMThkZTNlNS04MDMzLWZlNDItOThkNC0yOWUwYWM5M2M4MDYiIHN0RXZ0OndoZW49IjIwMjAtMDMtMTdUMTc6MjE6MDQrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Njk3Y2U3MmItOGJjYi1jZjRkLTgyNTgtZmNlOGQ5NjBlZmMzIiBzdEV2dDp3aGVuPSIyMDIwLTAzLTE3VDE3OjI2OjUxKzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kf4jJAAAAKVJREFUOI2t1F0NwjAUhuEXUgGVMAlTwI8DJKwJBlA0pgAJSAAUYGEogIszkpOGcXH2fUlvmuZpenra1eb4RpgM9MCQlCrQAgfgsf6zqJlGKHNwBzyBmxLusDoBnFVwjZ4UcI2WKOphKQqQsBbp3VwDXINermGfXRD1GRN29C1WjhHYA/el8rfGZdogY2VoVbAcr/tYhv96eR6/ROG5361gF/mKwh8MFh7JofiMTAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/images/facebook.png":
/*!************************************!*\
  !*** ./assets/images/facebook.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHpSURBVHjatJYxaBNRGMd/91KPNo1EbFeJiJkDigheOyg4dHEoZLiCi4vXScGhiJNjByE4yDmLPagQsEWCSyfPpUtDx6AQupRKsWk40iY5cPkS2srl3ZXcb3o8vnv/+9773vd/BiOwbPcqsAgsAPeAApABQqAJbAM1oOp7TjtqHSNi8SlgBXgJ5NHTAirAqu85Ha2IZbsl4AtQJDkNoOx7Tj1SxLLdR8AGMM3lCYAnvuds/SciGfg6gXxuktnr0yj5stE8jBKyBhkZZ86gPmqLclmTN8sPmbtzE+NM/nNLH0dtXcn3nI6SiRXdGSzb95m/e15AQ1HWxZAy3dNV0dcPT5m5lgXg6PiE3cY+AK/ffddV3Y0JuQfaMh0IAHjf6nze3ImTTR5YVHLREtHrh0nCFwzLdn8Bt6IiXj2b5/GD2+Sy5nCu2wvp9kLawSnlF2s6kd9KWkUkk+bEOQEA80qGXNbktNuPk0lBSS+6FAeHQZywjGHZbj+O0I+158Px+08/Wa/txv2XUEk3TZOmknadJttK/CBNagqoys1MgxZQVeJolZREKr7ntAcNclW65jhpyLooALHMsvjAOAjEITuJnLFYmBmO//wNODo+Se6MaXq8uhglASXgbYKqa0l86aJA5JNo3O+ufwMA7J+hpytCTLcAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/home.png":
/*!********************************!*\
  !*** ./assets/images/home.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACCElEQVQ4jeWSMYjaYBTH/6ZKb7FKhIJQrpDBqYLQ48RBQcEpRGqnEoRuLja0UOEIipODg1CqnRwOiiZDl1o6Wu2hS6xDEBUHO8gVPBJK6Q1Fr4m5Tj2UHtFKt/7G9/3f7/H4HrAFDMOkY7HY822ym9jjOO5kPB4vx+PxkuO4EwB7u8rulsvlM0mSNJqmj2iaPpIkSSuVSmc+n+9ZqVT6XC6XJ/F4PLXRFAwGHzUajUWtVjunKOrgd52iqINarXYuSZI+mUy0fr//M5VK1c1clkQi8Xo0GumZTGYIwHlNxpnNZofT6VTvdDqmQmculxsNBgOdZdljABazwSzLHs9mM71QKHz5Y7Db7b5frVa/t9vti2g0mjBbYZVwOPyw2WzO6/X6D4/HEwQA0DT9WJZlrdfrLQDsbytbYb/X6y1kWdYYhmEJh8NBCoLwTVVVA8DpDsJTVVUNQRC+2u12khBF8YWiKO92EK2hKMp7URRfWU0yN/L5vOr1em+uFgeDwUU2m70NYHldk5nQEgqFbhWLxU82m20IAJqm3Uun04cwuQAzIQBAUZQ33W73JQD4/f6nAA7N8sQm4d/yHwqvPsXlctl4nv+48mYhSZIIBAJPIpHIAwCYz+d3SJIkeJ7/AOBytfeqCQAikUg8mUxWCIJYOwer1Wrouk5sqhmGcVmpVJKtVuvtv9hyjV8v79G7nYHRXgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/images/insta.png":
/*!*********************************!*\
  !*** ./assets/images/insta.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUDSURBVHjanJZbbBVFGMd/M2d7bi0UsEAtBRvkATylTQQCabkokVLU4IMmGqIEDZcIgq+8gS8GSLyBICAxEWLCCygIUkDkDopKQqGURETSQinU3svuOT278/lwri2FgJN82d2Z2e+38833/XcUT9Bahr0/SvLyiw0BTI++VdS25vbjvqseNdijJllmYmSZ8azlpqF7vOlGCyEMIQxBJC/fyJgR17BCW+K197eVsMp9YpBdWr1YWu1N0nw/mHJsCGEkSDYsdaXwqSgF+StHX1m447FAngr63YmTfuHyjcr0l/d3LCEkC5I9T5WNOhuvtWePZWnvQ0ESxu+VPFen6m+M6+tkAMePgk14+nq8PhrJhuk+q5lSftR38+o4pWJoHDTRxFVF0UNy8A2xkubDN1Sj83XfeURROEj9nXE55eGjA+6J92pkkYxBpACRMGK0Em/GbDHHTorYjjy0xeLSe6Je2io2yB0+lNuslkY+kgbWS2Nk16I+oZNKLMkt6lINTSFswAbKKqDmBHLsOLL3IOZ2K8YxCAEEP4YAogOoZ0vIeesFcqaPp33WJ8TON6XDqIoKHLfJDC5hlasAvMWRJfpa3fY0xAZ2HoVAGJk+AzF+BtwzXy7+j1fQe7iW0Lr3kM4o7S9t7LNnOlK8dFTd4q8tAAnpFYT6xXJqJWxYiwoYiMbQKNRrr2BVz0WwcGvO452oxb98PniG+J7TBNcsQOP0TWsdWwEkQNpuLCWcSj0gdzAEQ9DSAGFQCtRXW+Htd5DT51FoAkvexN31I05xNV63oF+eiQrmoMMCdgYmjS2lAJZZPXykamnxpUEAOpmMbg+EgXnzE5DqauToKQwhqKrGOvQd3vc/I/vOoXo6E68G4oht0ulsOtp9d0rWjdSSHy4kDA8YgJcEVVVD7UXUmSOkUp8jNcjFy1hzp6GIopyuZL3E0MpBZaW8DptCi1CW4/5lHEiOWcmKC4NCEnsmAAaFlwD7JQlyEDxQYCRVqDG0suzmB1aTSoyQTtz/XgMTJ0F1VQIWFFTVLNTz5cjhw4mv9sWToNRKnPTKlNPdbOkPWu6aL4Z4ig5fpnqTIlwwLAG+sB8OfAs7a+DCaTCgps2AXTtR+/eiCcIgfyIYxkGTJeJDc71h/3x61wIwBaOv+GId5Rnp7oFeG4pGJ8MqsP5dOP4DTJ0HLrD1M9izDwVoBIoLwHZQXS0oQhltKx50hfZE9FFBs5kw29PpDfD3aZgyHw59nuwU+O2HBMxJFnUIlABxF7XgdeTMr2iiiWxLCak4mzMStBtLpKhLtWZJ0IgKWHoC/joDF/ZBUwO0tkMUiCXN+GH4M/DGQpgyFfNiFebcpYyKFI1xpKl7cJ78mYmldzCySL5B5EtENiCyFpEtlSL1R0Ri9sNF1bFFjh8RmV2REGIVlLgaKjFVJHbp3EUD/o/cn8pP+povzUyvysnSPoZk+lL9UeBeJ9yX9DyJKkQCuGWTTwUunZmV8m1lg3zupTlmxIQ6fa9+XEZDUgnSkXk2SXOBYNYcEnVmSsZet2r/mJPtu8+PT82nV5v6iFdYdvaBugo/wrLGvcllZ303r0Z8Eu19rMOJe7B0se78d5Nqaw4OGMp+JqHCqAkWrLQOXNnxxMct2Y3l+cuWKdtdrloaxqvOHp0NFZNnJDzmmsStLb662m3qLO7/Otf1b2bjsFHi5hUTBdXZc0uvb3vsA+R/AwAwFaZHPe7p5gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/images/like.png":
/*!********************************!*\
  !*** ./assets/images/like.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTRGRDkwMzUzRTlCMTFFQTk5QzJBRjE4MTI2Mzk0NTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTRGRDkwMzYzRTlCMTFFQTk5QzJBRjE4MTI2Mzk0NTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNEZEOTAzMzNFOUIxMUVBOTlDMkFGMTgxMjYzOTQ1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNEZEOTAzNDNFOUIxMUVBOTlDMkFGMTgxMjYzOTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po4wtKUAAAD8SURBVHjaYvz//z8DLmCfyqABpPYC8cSDsxm60OWZGPADYSCWAuJOoEFMpGoOhtIvgPg/0ZqBNrEBqUwodyfQ2f9JsbkWiDmg7IXYFDBiCzCgreJQp8KAAxC/AmJNIGYB4htAl1zC0AzUCLLtPBBrIAl/AWIeNDvSsTl7FppGBiwaQUCLBWgTKETZgfgYEMsBcSwDccAA5P41UM5+IJ7BQDyQBjn7A5RjBcRPgfgxkZqXgTT/g3LYoVGzh0jNzOgBJgH1OyHwDoh7QZqFkAQDgfgBEZrPAeP5PQvUmbxQwZdAfA2IDwGxKDSK2KAJgxWIPwLxKSAuAykGCDAA3sU2T2xoHrwAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/linkdin.png":
/*!***********************************!*\
  !*** ./assets/images/linkdin.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJOSURBVHjatJbPSxRhGMc/O+4edDMJba2DLARbB8OtQ6cFDx0aLDCU7G5/wUIHYQiqy0CHQPA/KAgyWEIIGYkOlV3sImSllrIHobQxZ3847c6O22Ffx3F3p2W23e9peJ6X98vzzPN8v2+Af0HRuoFxYAS4AkSBDsAG0sASMA+kUOWs1zUBj8s7gSkgCfTQGAYwDTxClc3GJIoWB14AMfxjHZhAlZe9SRTtKjAHhGkeeWAUVX5TS1KpYPE/CdxEicOKAq5/sOxuUWLgJJOX+1nTTR5/2MIul5tpXRxVNoMiMFX9D56MnaevKwTAmm7y8qvulyQm7n0giTFNVp/4tV9yvnWz1Gzbkihad1DsQc2Yjj3/zM0LvazqJu/SRrMkPcB4UCxaDS6dCZMplDh7IkR/OETRLnM9dgqAnHXAwrff3B7sI9bbyVamyOzKjlfFIwEU7TtwrjqzeGeIi5HKoN14toJRsHk/OQTAzr7Fz1zRyQNs5y2uPf3E5t6f6qs2JCEVvnC6K8RgJMx23nJikXCIe8MD9Y5HJaFFvnFr9guxmY/cXdh0YsPRugrUIQmx84UfuSKvN/YAmFvVj1VTB7Yk1NQXLPtoMQt2wyVNS0Ku24klSfhBOzEvASnhB+2AAaSCqHIWRZsG7ruzb9MZ0kYBgF2zRN6yebW+W5Ec1+ha9oETr4NpVDnrqcItgKPCEoCwzAnhA61AXjikCSA54YrBjLaA6NAZHQuWjqUrlpkQpTbbooTbemtJjiqKAw99TJ0hzserHxHeT6IWv7v+DgBGGdYaK2+WOgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/images/logout.png":
/*!**********************************!*\
  !*** ./assets/images/logout.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEjSURBVHjapNQ9L0RBGMXx3268JEiWoBPJtr6CQucTKDQSujuNQkMjOmqaqXRKicJLQsQX0EnUKBWCbBAiS3M3GWHvXpxkcnOSk/+deZ55ppJl2Rh2MKWzmjjEAu4gxvgtVM2Bt6hjqMOawAA2i/7cle+wjusSO33AGnaLQtUkXFYN9LZMCGEohND9E/Q3usdl4jdwHELo+w/0BpOJX0Y/Dlrgv0C/KMb4iOkUXMmy7CPvbLu61rCaN7VINczjpFrybr6XyPXk36eukt1eKTi+EMIozrCP2X/XNAFeYSbG+PYXaB0XiV9PgUoUv11DxhO/iNcYYzMd0w8M/2KqBvGc1PTlp9k/xVbejEYH4Eh+3KNOD8octnGeznQbPWEPS0WhzwEAYaxKdh7H/EkAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/mypost.png":
/*!**********************************!*\
  !*** ./assets/images/mypost.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAC5SURBVHjavJQxDoJAFESfuDFWtFpY6RXsPAKNx+DHknNYmrmGjUfwCpZWFNBSGaOJDSZIUFg1TLmZl538nb+DOI4TIAGudNcI2DpgA8wlXbqSZjYGTgFQ+IAApb8I+EGuEmUCHKpnDboBkaT8BZaUm9m6DX6C1I2S0m9jT4EjMPzgvwMrSVk9dgYsfG7+27T7je1qtZt1eKr0XUn2bbCZNZcEWPY27QAIyxXDcyVDB+yAs5l5fwaPAQA+gEjNoEF4QAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/images/password.png":
/*!************************************!*\
  !*** ./assets/images/password.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAYAAACZm7S3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFgSURBVHjapNK/apRREAXw3y6LBPxD1M7CRmHFvIIgNtoGUilC2nsR7JMH0GpBbEZIQNKYNAErozZBSJEHyIoWwaAgwcpGEJvPZhLisqv74YHLMJxzODPc6TRN4yRqrXNYwm2cwi+8xeOIGJ7UdkeM97GF7TTPZ93GVvLH6Bwl11pvYA138QiX8R7X8RnLWMdiROyMJg/wAKt4iX5EzKOf/Wrygz+Sa61XsImnuBkRi0ZQa13DOzzEQkTsHyXPYRe3crRxWE9+N/XHY1/AN5zF4QTzYfI/U69TSrmKe7iU+z3DxzHmPgq+Jv+ihz18OCFa8necz7GXlVIOmqbR9pVSDrr+A71JRK31DhawGRFvxmm6E4wXsYIdrGQ/nRmz+SWvss5ObY6IfQyxgWH20++M7/iSh6HN2PJozmXVNvk5ruF1a3NEbPzrn7uYqbWeaXMcqZ/p4Qk+1Vp/tPCfxuD3AF0ljsQkD/R0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./assets/images/pinpost.png":
/*!***********************************!*\
  !*** ./assets/images/pinpost.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAG8SURBVHjanNM7aFRBFMbx326W2Fj5wAeL98LtLcQoWFipjaTQqIEoaaysLARBbFRsBS0U0gYE0SgiPiorURDS+8CBGRDSaJFCDUjQZgJxvXd3s6e5zJm5//nOme8wYlRFOVUV5eeqKLt1+22jx0U8w+sm+KiKv+fv2aooP/XC2yNCJ/AbQor3caNXeXsE6Ck8xIm1XB28tUHoFcxgMqQYa/ZP4iaOtYYEjmMOuzAdUlzuc/YaZjrrEluxA6v4GlL8kfNb8BgfcDykuFoD24cnGMcXXG5VRXk792sFS7nvXfzEC0xiLqR4p0FhF29wLqT4di3fwTYs4sx6NVVRlvnCSyHFVw3QzdnLV9dDoVUV5Rjm83q2rtQG6BieYjGkeP2/ycug2byezz8ME7ewnG1WP9IbhVdFeQH7cT6k+KfuTKumvL5tqYryCO7hUEjxW9Pl/0zekMr3YqEftHakM/wuphvgL3F00AO0a0o9iAc4XKc8pPgRu6ui7AwNztBHOB1SfNenLUvYORS4B/p+QM9X8nD1B9dBBzzo9uzhxmhVRXkAC3XQBituwkRIsRikeA+m+kF7lP/C80Gu+DsA6uq43TdeGkgAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/pinposted.png":
/*!*************************************!*\
  !*** ./assets/images/pinposted.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlGRTkzNjNCM0M1NzExRUE4M0RDQUQ3OUJBMDBENzY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGRTkzNjNDM0M1NzExRUE4M0RDQUQ3OUJBMDBENzY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUZFOTM2MzkzQzU3MTFFQTgzRENBRDc5QkEwMEQ3NjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUZFOTM2M0EzQzU3MTFFQTgzRENBRDc5QkEwMEQ3NjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ei4RsAAABQElEQVR42qyUu0oDQRRAE7OaEAT9B5UIwYiFWCSkEfIbEvNARPA3hNj6LBQ/w85Cq4ixFJuksbEMpIjBxxmYgc1mMjM7ceCw7Mydw92ZezdZrv8mPEcLjqEI7ejiXMJ/NGAenmD7P8VL8qmV+4r3Iu8Tch/xKdxq5sfkQUzpPVQM60L+CCVX8SJ0YNUhdkFkHhavwTqM4AU+5fwKPMOyRajqtg8XgcxkA1KRwCG8wpbMwiY9hEs1EchMUprgNOw4HtV5WKqqIge9Ger5AY50DfI1g1zs2dUtqDr2kYtL2oQfkziufCQboT8tINp5rnJRfu+mAF1LC/mJRVywfZJOvA9ncGDIPAuZOGIhvYYmXBmOJSmbykkclt44nHnaRayT2i70wyauGqTT5N/QNYnFvyIPNbizXLSSv8HAVhV/AgwAwAJGACZespYAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/postdeleteicon.png":
/*!******************************************!*\
  !*** ./assets/images/postdeleteicon.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAYAAAA8CX6UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIWSURBVHjanNXPiw1QFAfwz4w3hoyZYcaIoYmYFFN+pJQoK292M0X5XcqUxSwoUeQPUNixYSVhYkGpFxtLa6FQShPGjzE/HuNXnrFwnq7XvGfM2dxz7z3ne7/n3HPPrcpms0pkGk5iJ5YiE+vf8AyXcAbjkMvlSIxSOYjjOIcnGEU1ZmItTuEVrqZO1YneiA5sxQPcwlO8wWs8x3U8xg6sRntnZ2cGqrLZ7CpcwAZTk2H0ZHAFBewLBoP4WcGxJvYLaI40nM1EONtxYwpsXuAauqsxhkWmLtNRKIZ2GnsjrHHMmCRIBmtwN4Ne7EEeA//Jpi3G3Rl8Dya3o9C6UIu+MNqIbhyJ+RL0RJIPYUUulxsu1tEYZofehf3JqeuxLZlvxuHQG/AxLcgRNIU+moBOJI1hI+w+pUAfoibECfX/ABoJvS5y+wfobcIoPwlG+YTRaAo0iHkJo8YKQPVJaHNKc/QOCxJGlUJrSBjNxVAK9BLzo0qHUBUO5RjlE0aDKVB/jK3FDbRUyNFQJUbizb0PvakMUHPcck3Y/MVoIFppe9wgLCwD1BLOrZGC/hToR3S+DnwJVm0TgNRiVgAtTtOSttqH0T6Lfaa1TFjFW16XPvS0+d/DRSzHiaR6b4ZjsXB749Dzvz+RXKEUqA9HcR+X4wdZGW/pczzmuvC5g2XYlTamonzFJhxDFgciH6WSj8O24FFx8dcAoY6DSD6KWB8AAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/profileicon.png":
/*!***************************************!*\
  !*** ./assets/images/profileicon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFNSURBVHjalNJPiE1RHAfwz7teaiwQRpmFko1IWclmUmJ2khVJktU7jZq1hUQWFrb6lrAaWWhKdjazmAWbYWF2UuxQrPxtNF2ba3pN991mvstzzuec8zu/06vr2nBKKftxDXsxhl9Ywp0kX4fXVmvgTjzApyRTSSZxAbtwr5SyaSTGNN4kuf5/IMm3JJdR42IXPo5Z7XmOs124j+UR+C82d+ElnBiBj+FlF36I86WU02se8iqONPOr6bW06gxm8K4pYRt241aSV5242WAM5zCOj0mettXRdvIhnMS+5pN8x3u8SPKhFZdSxnEDBzCPt/iJrTiKSSzgdpI/q7iUMoHHeI27+JKkHrpNH3twE9txKcmP3mAw2II5LA7/rFEppdzHCqYrXEFvPbDJDA5jqmqa/2idUJLfeIJTFXbgmY1lDgcrrCRZ3ohM8hn9fwMAm7h3BJkcJ2AAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/profilelogo.png":
/*!***************************************!*\
  !*** ./assets/images/profilelogo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAVISURBVHjazJl5bBRVHMc/b7ptGactFARqoXIItEIshyYEikcaIwiIGoGCUgHPBFDxSAyaECUajUcQDAqUGARB5BCiCA3BgEEhpRIrUijQmjaUsyzbg+lAoTv+sVss291239vZlm+yyWZ3vr/5fee997tGEAWYlh0DaIDw/2T7P42GLmwn7yUccDYRGAtkA2OAdCAuxOVeoAIoAH4F8g1dVHaIANOys4C5wBOArmjGBvYAecBmQxfXoy7A7/iHwIMO77wyYBGwVmabCQnHuwKfAbOJLv4AXjZ0UeyYANOyRwMbgDTaB1eAVw1d5EUswLTsWcAqIIb2x0pgjqGLRiUBpmW/BXxKx+JHYLqhiwYpAaZlv+CPDrcC1gIzgx1uLYTz44AV3DrIBT4IawVMy04FioDuKnc6UwUHj0BpJVysBq8XOidAv1QYngEZfUGoZR8bGGfoYldbAnYC42StnzwF3/4Mh461ft2dKTBjPNw/XEnEeSDd0EVNUAGmZU8GNkk9FhvW7YT1+b7v4WJUJrw5Awz5HL7M0MW8FgJMy3YBJcBdMs4v3QD5+9U29sA0+OgVaRGNQIahi9LAQzxdxnmATbvVnW/adh+vlls5fz5aECwKvS5jpeIsrNkeeXj586jSQ8g1Lfv2GwJMyx4CSB2rNb9Ao9ehIL8DrsnVobFATvMVmCbD9tTBgcPOBXlPLRQckaZNay4gW4Z56Kj0vm0TB+UFjDQtO07zt38jpQr3086nWgWbsUB/DUiUrTSra50XoGgzRQMSVHK601C02UMDOsmyuiQ4L6BLohItSQNcsqx+vZwX0C9VidZJU2nsR2QoV5Qhcd9gJZqm+Wc1UuieDPfe7ZzzSQaMzlSiXteA6yrMZyc6twrTxkJ8nFrzrwH1qpXk5Icjd35wf5ikPmHyaECdKnvWRHhghLrzaT1h4YsQoymbOC9MyxZ+EYaKBa8X8rbCtr1yvKGDYMFsX7sZSfAS/mp0OzAhEkt/n4BvfoITFW0HgJxHYHxWxGeoFkhuEjAfWOzEgTxRAQXFUHYKqqp9KTbR8MX5ERm+xt7lzIhsm6GLJ5sEpACVsjWRuxrOuX19QYIOvXtCXGx45fM5t68H0ON9PD1eWsAUQxebm/fEYW2jhmuw43fYvg9OV938nysGBvWBYemQOQDuvAPiXHCpBkoqoOg4HCmFC56AHlGDewbCU9lhJ7RLQKqhi6vNBTyEb1YfEqfOwaI8qLwQvQlW1lB47WlIvK3Vy943dPFesLHKXkLM/cvPwNtfQu3l6I/heveAT+ZDcvACrwboa+iiOrCpB5jvH1sEDLtg4fL2cR58K7xoZciee2GT8y0EGLooApYGMpZvgSoP7YqSct85C0AhsOymai4I9x3grxutXiXsLqBDsHGXL1E2i/vPBL4raCHA0MUVYApwEeD7fDoMl2rh8Mn/KxdDFydb1NPBiIYuyoCJnjrqD/xDh+JYOeB7S7M1aEMQimjoomBPIXPjY6PSAodfL1zmB0MXX4fsaFoj504Qqx/NIic5icb2djzWBeOz+OKNGaLVoVtY5dSS9XZG8b/8VlJOj/ZwPrU7V8cMI3dejmhz1B92Pbhii62dvciqwmJm1tWjReupj8pkf/9eTHruceEOhyNd0C5Zb/c56+a7ouNk1V/BkabSFQPD0ikd0JuX5kwVe2S4yg58tdHuWVXN5+VneKyskiSlsVo3GtL7si+lG+/OnSqUso0jT3DxOntIwzWed9eQ7aklzV1DkmkRY1312Y91gR6Pt1sXzOREznftTGHXJNbMyxERZ5n/BgDMFKWspPO9SQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/images/share.png":
/*!*********************************!*\
  !*** ./assets/images/share.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEYSURBVHjapNOxL0RBEMfxzx3BVYSKhkTDXyARGwkKJRWJBgWVQkJxpWjQSURBNAq1XCEaidx1/gCdgsQfoHGhQPMueXlZ57mbZJPNzOx3Zva3W6hWq3LaBm7xknaGEEBRfhtKQH2x4H9AMI4KutoFQcAlCu2CYAlHaUfnL4kzWMEkBhNfTyZnB884iXU0invcYR1j6E1Wd6Tgca1WW4RCSv6JZqo0sTpmGx2N4KYFCJRw0QCdo7/Fi69jtYgpzLUI+cJyCOGhmEiZ58BHxL8VQqg0VIt184R9TGMAHTjI5BziNP2OhjOAXVzju0mHVyhnH2Qp2Z9hG+9/jHmPtWyhhmplbOaAPGIBn7FPuxeZP2avmMdbLPgzAODsM7NlwYmCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./assets/images/twitter.png":
/*!***********************************!*\
  !*** ./assets/images/twitter.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJmSURBVHjavJZPa1NBFMV/My9paWxsiFUotAbaCC4qBaF20Y3oqooRSvIR3LsLuLFduvMLuHEnL3ahQsFFXWmF4iLiX4piDERLbLTGNilJZlw4DSnzXpKmxQNv8WYec96999xzR9AGqUwpDMwDc8A0EAMcoAHkgDVgGVhyk9Gy3znC5/ABIA3cBIbojC3gLnDHTUYrHUlSmdIU4AJnODjWgZSbjGZ9SVKZ0iXgEXCM3rENJNxkdMUiMRE8PyRBK9HsXkSipQbZHlPULnVTbjJakWYhfcQEmPPSAMLINN+lipqIHRdMRAQ/q5rXRU1DQygIOzVLdWMB0wcWwdVxyWpBUaraBNcmJNcnZPP9a1nzqwpvNzUreYXWza0hYF6aRrNw/pTg1kyAeGS/yk+GBIkWAoDTYcHZE4LRMDh2581J08kWNisQ6Yf0BYcb5xziEYEUMDro3cHFHc2Dj4q6sramA8YqLLz8ppgcduhzYGZEMDPisNuA7Zp3jQp/oFr3Ll/AeJGFyzFJcH9W6Hf+PV74UdF+GnGkMTsLT78ohOhebR9KviQNadzUQraoebiuqKnOBMWK5r0/SU4au/ZEtY6VMi88/qRQvhysSTMPPPEsr7j/TpEvtznhu2a1oNv9w7IElkxnWggFoaa0bzQvCpp7bxro9nNmac8gF4DbezuDQbgyLrk4JunzIMiXNU8+K15t6E6ZXHST0YW2LtzvQDwiGB4Q9DmwtavJ/YaNHX0gF/4v86SZDLOQMB8cliDROoL3ZdyMzFkTaq+DarZ19FokLRFNAYt+qvNR0aKpQbarK9FR37v+DgAy0t63cE3N6wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/config.axios.js":
/*!********************************!*\
  !*** ./common/config.axios.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./common/config.js");
/* harmony import */ var common_jwt_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/jwt-services */ "./common/jwt-services.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




let cookieData = common_jwt_services__WEBPACK_IMPORTED_MODULE_3__["default"].getObject('authUser');


let AUTH_TOKEN = '';

if (cookieData) {
  let parsed = JSON.parse(common_jwt_services__WEBPACK_IMPORTED_MODULE_3__["default"].getObject('authUser'));
  AUTH_TOKEN = parsed.token;
}

const instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_2__["API_URL"]
}); // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.request.use(function (request) {
  if (!request.headers.common.Authorization) request.headers.common.Authorization = AUTH_TOKEN; // console.log(request.headers.common.Authorization, 'request');

  return request;
});
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  if (error.response && error.response.status === 401) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('authUser');
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/login"); // window.location.replace("/login");
  } // Do something with response error


  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./common/config.js":
/*!**************************!*\
  !*** ./common/config.js ***!
  \**************************/
/*! exports provided: default, APIURL, API_URL, BASEURL, ITEMS_LIMIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIURL", function() { return APIURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASEURL", function() { return BASEURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_LIMIT", function() { return ITEMS_LIMIT; });
/* harmony default export */ __webpack_exports__["default"] = ({});
let apiUrl = '';
let version = 'v1';
let BASE = ""; // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

if (true) {
  apiUrl = 'http://localhost:3001/'; // apiUrl = 'http://192.168.0.61:3001/'

  BASE = "http://localhost:8091/"; // BASE = "https://114035c0.ngrok.io"
} else {}

const APIURL = apiUrl;
const API_URL = APIURL + version;
const BASEURL = BASE;
const ITEMS_LIMIT = 5; // export const BASE_URL = BASE

/***/ }),

/***/ "./common/general-methods.js":
/*!***********************************!*\
  !*** ./common/general-methods.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
       * @name @convertToFormData
       * @description convert data to FormData
       * @requires form data
       * */
  convertToFormData(form) {
    var bodyFormData = new FormData();

    for (var i in form) {
      if (form[i] instanceof FileList) {
        for (var j in form[i]) {
          bodyFormData.append(i, form[i][j]);
        }
      } else {
        bodyFormData.set(i, form[i]);
      }
    }

    return bodyFormData;
  },

  getCookie(cookiename, cookieData) {
    // Get name followed by anything except a semicolon
    var cookiestring = RegExp(cookiename + "=[^;]+").exec(cookieData); // Return everything after the equal sign, or an empty string if the cookie name not found

    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
  }

});

/***/ }),

/***/ "./common/jwt-services.js":
/*!********************************!*\
  !*** ./common/jwt-services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  getObject(key) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(key);
  },

  setObject(key, value) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
  },

  deleteObject(key) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(key);
  }

});

/***/ }),

/***/ "./components/Layouts/Default.js":
/*!***************************************!*\
  !*** ./components/Layouts/Default.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/SideBar */ "./components/common/SideBar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_common_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Logo */ "./components/common/Logo.js");
/* harmony import */ var components_post_createpost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/post/createpost */ "./components/post/createpost/index.js");
/* harmony import */ var components_post_postCom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/post/postCom */ "./components/post/postCom/index.js");
/* harmony import */ var components_common_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var components_common_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/Header */ "./components/common/Header.js");
/* harmony import */ var components_common_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/common/Footer */ "./components/common/Footer.js");
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_jwt_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/jwt-services */ "./common/jwt-services.js");
/* harmony import */ var common_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/config */ "./common/config.js");
/* harmony import */ var components_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/loading */ "./components/loading/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_common_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/common/modal */ "./components/common/modal.js");
/* harmony import */ var redux_action_generalAction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux/action/generalAction */ "./redux/action/generalAction.js");

var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\Layouts\\Default.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















class DefaultLayout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchPinPost", async () => {
      await utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_10__["default"]._fetchWithOutParams('/post/pinpost').then(res => {
        if (res.data.response.status) {
          this.setState({
            pinPost: res.data.response.data
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deletePost", () => {
      let userData = {
        postId: this.props.modalData.postId,
        role: this.props.auth.authUser.role,
        userId: this.props.auth.authUser.userId,
        socialLogin: this.props.auth.authUser.socialLogin
      };

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_10__["default"]._deleteRequest(`/post`, userData).then(res => {
        this.props.showModal({});
        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.router.push(next_router__WEBPACK_IMPORTED_MODULE_15___default.a.router.asPath);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handlePageChange", (page, e) => {
      this.setState({
        skip: limit,
        limit: limit * page
      });
      this.setState({
        currentPage: page
      });
    });

    this.state = {
      activeCategory: '',
      pinPost: [],
      isLoggedIn: false,
      isActiveCate: true,
      currentPage: 1,
      loader: true.pagerToShow
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let query = nextProps.router.query;
    return {
      currentPage: +query.page > 1 ? +query.page : 1
    };
  }

  componentDidMount() {
    let result = common_jwt_services__WEBPACK_IMPORTED_MODULE_12__["default"].getObject('authUser');

    if (result) {
      this.setState({
        isLoggedIn: true
      });
    }

    this.fetchPinPost();

    if (this.props.postData) {
      this.setState({
        loader: false
      });
    }

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-163410270-1');
  }

  render() {
    let {
      activeCategory,
      pinPost,
      isLoggedIn,
      currentPage,
      loader
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, "Belief Challenge"), __jsx("meta", {
      title: "Belief Challenge - Home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    })), __jsx(components_common_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "container-fluid home-main bg-dark",
      onScroll: this.scrollHandle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(components_common_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container pb-35",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }, __jsx(common_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeCategory: activeCategory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-lg-6 mb-50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 29
      }
    }, loader && __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 44
      }
    }, " ", __jsx(components_loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 74
      }
    })), isLoggedIn && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_post_createpost__WEBPACK_IMPORTED_MODULE_5__["default"], {
      fetchPost: this.props.fetchPost,
      count: this.props.count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 50
      }
    }), " ", __jsx("hr", {
      className: "mt-40 mb-40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 123
      }
    })), pinPost.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_post_postCom__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: pinPost[0],
      pinPost: true,
      fetchPinPost: this.fetchPinPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 37
      }
    }), " ", __jsx("hr", {
      className: "mt-40 mb-40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 115
      }
    })), this.props.postData && this.props.postData.map((itms, indx) => {
      return __jsx(components_post_postCom__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: 'post-' + itms._id,
        data: itms,
        commentFlag: false,
        pinPost: false,
        fetchPinPost: this.fetchPinPost,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 45
        }
      });
    }), this.props.count ? __jsx("div", {
      className: "pagination",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 53
      }
    }, __jsx(components_common_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
      pageRoute: "/home",
      count: this.props.count,
      itemsLimit: common_config__WEBPACK_IMPORTED_MODULE_13__["ITEMS_LIMIT"],
      pagerToShow: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 37
      }
    })) : __jsx("div", {
      className: "alert alert-danger text-center",
      role: "alert",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 42
      }
    }, "Nothing to show"))))), __jsx(components_common_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }), this.props.modalData.showModal && __jsx(components_common_modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      showModal: this.props.modalData.showModal,
      triggerModalSuccess: this.deletePost,
      triggerModalClose: () => this.props.showModal({}),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 52
      }
    }));
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    modalData: state.general.modalData,
    postData: state.general.postData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: data => dispatch(Object(redux_action_generalAction__WEBPACK_IMPORTED_MODULE_17__["showModal"])(data))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(DefaultLayout)));

/***/ }),

/***/ "./components/common/Footer.js":
/*!*************************************!*\
  !*** ./components/common/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Footer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      visitorcount: 0
    });
  }

  async componentDidMount() {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_2__["default"]._postRequest("/visitorcount");

    const visitorcount = await utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_2__["default"]._fetchWithOutParams("/visitorcount");
    if (visitorcount) this.setState({
      visitorcount: visitorcount.data.response.data
    });
  }

  render() {
    return __jsx("div", {
      className: "footer w-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "m-0 mb-30 text-center text-white text-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, "Join Belief Challenge Today!"), __jsx("p", {
      className: "m-0 text-center text-white text-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, " Do you have what it takes to question everything?"), __jsx("p", {
      className: "m-0 text-center text-white text-bold text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, "Belief Challenge \xA9 ", new Date().getFullYear(), " All rights reserved."), __jsx("p", {
      className: "m-0 text-center text-white text-bold text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/about-us",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "text-muted text-underline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 44
      }
    }, __jsx("u", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 85
      }
    }, " About us"))), " | ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/terms-of-use",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 115
      }
    }, __jsx("a", {
      className: "text-muted text-underline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 142
      }
    }, __jsx("u", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 183
      }
    }, " Terms of Use"))), " | ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/privacy-policy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 217
      }
    }, __jsx("a", {
      className: "text-muted text-underline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 246
      }
    }, __jsx("u", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 287
      }
    }, "Privacy Policy")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/Header.js":
/*!*************************************!*\
  !*** ./components/common/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderDropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderDropDown */ "./components/common/HeaderDropDown.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_jwt_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/jwt-services */ "./common/jwt-services.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_action_generalAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux/action/generalAction */ "./redux/action/generalAction.js");
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import search from 'assets/images/search.png'







 // import axiosinstance from 'common/config.axios'

const header = props => {
  let {
    0: dropDown,
    1: setDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: authData,
    1: setAuthUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: isLoggedIn,
    1: setIsLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: profilePic,
    1: setProfilePics
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let result = common_jwt_services__WEBPACK_IMPORTED_MODULE_4__["default"].getObject('authUser');

    if (props.router.query.search) {
      setSearchText(searchText = props.router.query.search);
    }

    if (result) {
      let authData = JSON.parse(result);
      setIsLoggedIn(isLoggedIn = authData.token ? true : false);
      setAuthUser(authData = authData);
      setProfilePics(profilePic = authData.profilePic);
    } // const user_likes = genericfunctions._fetchWithOutParams("/likepost").then(res => {
    //     console.log(res)
    // })
    // let params = {
    //     url: '/likepost'
    // }
    // props.getPostLikes(params).then(res => {
    // })
    // let cookieData = getObject.getObject('authUser')
    // if (cookieData) {
    //     let parsed = JSON.parse(getObject.getObject('authUser'))
    //     axiosinstance.defaults.headers.common['Authorization'] = parsed.token;
    // }

  }, []);

  function textChangeHandle(e, key) {
    setSearchText([key] = e.target.value);
  }

  function searchHandle() {
    if (searchText.length > 0) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
        pathname: '/home',
        query: {
          page: 1,
          search: searchText
        }
      });
    }
  }

  function handleOpenDropDown() {
    setDropdown(dropDown = !dropDown);
  }

  return __jsx("header", {
    className: "header-main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container position-relative py-15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row m-0 justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "search-btn flex-fill bd-highlight ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "search",
    className: "input-text-search",
    placeholder: "Search here!",
    value: searchText,
    onChange: e => textChangeHandle(e, "searchText"),
    onKeyUp: e => e.keyCode == 13 ? searchHandle() : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex-fill bd-highlight text-white font-weight-bold text-right align-self-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, isLoggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    className: "cursor-pointer d-flex align-items-center mb-0 justify-content-end text-capitalize",
    onClick: handleOpenDropDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 31
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about-us",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 158
    }
  }, __jsx("a", {
    className: "about-us text-white float-left mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 181
    }
  }, "About Us")), "|", __jsx("span", {
    className: "d-none d-sm-block ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 252
    }
  }, authData.fullName), " ", __jsx("img", {
    src: `${profilePic}`,
    alt: "profilelogo",
    height: "30px",
    width: "30px",
    className: "ml-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 320
    }
  }), " ")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "  ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about-us",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "about-us hidden-xs text-white mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 56
    }
  }, "About us")), __jsx("span", {
    className: "hidden-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 125
    }
  }, "|"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 161
    }
  }, __jsx("a", {
    className: "about-us text-white ml-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 182
    }
  }, "Join")), "|", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: " text-white float-right ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 53
    }
  }, "Login")), " "), __jsx("div", {
    className: "text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, dropDown && __jsx(_HeaderDropDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleOpenDropDown: handleOpenDropDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 65
    }
  }))))));
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostLikes: data => dispatch(Object(redux_action_generalAction__WEBPACK_IMPORTED_MODULE_6__["getPostLikes"])(data))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(header)));

/***/ }),

/***/ "./components/common/HeaderDropDown.js":
/*!*********************************************!*\
  !*** ./components/common/HeaderDropDown.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/commentarrow.png */ "./assets/images/commentarrow.png");
/* harmony import */ var assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_password_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/password.png */ "./assets/images/password.png");
/* harmony import */ var assets_images_password_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_password_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_logout_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/logout.png */ "./assets/images/logout.png");
/* harmony import */ var assets_images_logout_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_logout_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_mypost_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/mypost.png */ "./assets/images/mypost.png");
/* harmony import */ var assets_images_mypost_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_mypost_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_profileicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/profileicon.png */ "./assets/images/profileicon.png");
/* harmony import */ var assets_images_profileicon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_profileicon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_home_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/home.png */ "./assets/images/home.png");
/* harmony import */ var assets_images_home_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_home_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_action_authAction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/action/authAction.js */ "./redux/action/authAction.js");

var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\HeaderDropDown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











class HeaderDropDown extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logoutHandle", () => {
      let params = {
        userId: this.props.auth.authUser.userId,
        url: '/auth/logout'
      };
      this.props.logoutFN(params);
    });

    this.state = {
      socialLogin: false
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: " p-2 bd-highlight header-drop-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "commentarrow",
      className: "dropdown-img float-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }), __jsx("ul", {
      onClick: this.props.handleOpenDropDown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("li", {
      className: "text-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "m-0 ml-5 p-5 text-dark text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: assets_images_home_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "home",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 79
      }
    }), "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, __jsx("li", {
      className: "text-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "m-0 ml-5 p-5 text-dark text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: assets_images_profileicon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "profileicon",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 79
      }
    }), "Profile"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: {
        pathname: "/my-post",
        query: {
          page: 1
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("li", {
      className: "text-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "m-0 ml-5 p-5 text-dark text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }, " ", __jsx("img", {
      src: assets_images_mypost_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "mypost",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 80
      }
    }), "My Posts"))), !this.props.auth.authUser.socialLogin && __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/change-password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, __jsx("li", {
      className: "text-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "m-0 ml-5 p-5 text-dark text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: assets_images_password_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "password",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 83
      }
    }), "Password"))), __jsx("li", {
      className: "text-bold",
      onClick: this.logoutHandle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "m-0 ml-5 p-5 text-dark text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: assets_images_logout_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "logout",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 76
      }
    }), "Logout")))), __jsx("div", {
      className: "overlay",
      onClick: this.props.handleOpenDropDown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logoutFN: data => dispatch(Object(redux_action_authAction_js__WEBPACK_IMPORTED_MODULE_10__["logoutFN"])(data))
  };
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderDropDown));

/***/ }),

/***/ "./components/common/Logo.js":
/*!***********************************!*\
  !*** ./components/common/Logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const logo = () => {
  return __jsx("div", {
    className: "pt-50 pb-50 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/logo.png",
    className: "img-fluid",
    alt: "Belief Challenge",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./components/common/Pagination.js":
/*!*****************************************!*\
  !*** ./components/common/Pagination.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Pagination extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pagesHandler", derived => {
      if (this.props.count == this.props.itemsLimit) {
        this.setState({
          pages: []
        });
      }

      if (this.props.count) this.setState({
        pages: [...Array(Math.ceil(this.props.count / this.props.itemsLimit)).keys()].map(e => e + 1)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGoto", e => {
      const re = /^[1-9]\d*$/;

      if ((e.target.value === '' || re.test(e.target.value)) && e.target.value <= this.props.count) {
        this.setState({
          goto: +e.target.value
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleFocus", event => event.target.select());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGotoPage", e => {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
        pathname: this.props.pageRoute,
        query: {
          page: this.state.goto
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handlePageLink", page => {
      let {
        categoryId,
        search
      } = this.state;
      let computed = {
        pathname: this.props.pageRoute,
        query: {
          page
        }
      };
      if (categoryId) computed.query['categoryId'] = categoryId;
      if (search) computed.query['search'] = search;
      return computed;
    });

    this.state = {
      pages: [],
      count: 0,
      currentPage: 1,
      goto: '',
      skip: 0,
      categoryId: '',
      search: '',
      pagesHandler: this.pagesHandler.bind(this)
    };
    this._isMounted = true;
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', url => {
      if (this._isMounted) this.pagesHandler(); // if (url, props.router.asPath)
      // this.state.pages = [...this.pagesHandler(true)]
      // props.toggle();
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let query = nextProps.router.query;

    if (prevState.count != nextProps.count) {// Router.events.off("routeChangeComplete", prevState.pagesHandler());
      // prevState.pagesHandler()
    }

    return {
      activeCategory: nextProps.router.query.categoryId,
      currentPage: +query.page > 1 ? +query.page : 1,
      categoryId: query.categoryId ? query.categoryId : '',
      search: query.search ? query.search : '' // pagesHandler: prevState.pagesHandler()

    };
  }

  componentDidMount() {
    this.pagesHandler();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      pages,
      skip,
      currentPage,
      goto
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, pages.length && pages.length > 1 && __jsx("div", {
      className: "row m-0 justify-content-between w-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, __jsx("nav", {
      "aria-label": "Page navigation example",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, __jsx("ul", {
      className: "pagination justify-content-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }, __jsx("li", {
      className: "page-item ",
      className: `${currentPage == 1 ? 'disabled' : ''} page-item`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: this.handlePageLink(currentPage - 1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    }, __jsx("a", {
      className: "page-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 41
      }
    }, "Previous"))), currentPage > 2 && this.props.count > 3 && __jsx("li", {
      className: "page-item page-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 79
      }
    }, "..."), pages.map(counter => (currentPage == counter || (currentPage == pages.length ? counter == currentPage - 2 : currentPage + 1 == counter) || (currentPage == 1 ? counter == currentPage + 2 : currentPage - 1 == counter)) && __jsx("li", {
      key: counter,
      className: `${currentPage == counter ? 'active' : ''} page-item`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: this.handlePageLink(counter),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 41
      }
    }, __jsx("a", {
      className: "page-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 45
      }
    }, counter)))), pages.length > 3 && currentPage + 1 != pages.length && currentPage != pages.length && __jsx("li", {
      className: "page-item page-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 37
      }
    }, "..."), __jsx("li", {
      className: "page-item ",
      className: `${currentPage == pages.length ? 'disabled' : ''} page-item`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: this.handlePageLink(currentPage + 1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 37
      }
    }, __jsx("a", {
      className: "page-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 41
      }
    }, "Next"))))), __jsx("form", {
      onSubmit: this.handleGotoPage,
      className: "gotopage d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "number",
      className: "form-control",
      maxLength: "4",
      placeholder: currentPage,
      onChange: this.handleGoto,
      onFocus: this.handleFocus,
      value: goto,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 29
      }
    }), __jsx("button", {
      className: "btn",
      type: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, "Go"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Pagination));

/***/ }),

/***/ "./components/common/SideBar.js":
/*!**************************************!*\
  !*** ./components/common/SideBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var redux_action_categoryAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/action/categoryAction */ "./redux/action/categoryAction.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\SideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

 // import genericfunctions from '../../utilfunction/util-api-service'







const customStyles = {
  option: (provided, state) => {
    return _objectSpread({}, provided, {
      // borderBottom: '1px dotted #ffffff',
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isFocused ? "#464444" : state.isSelected ? "#464444" : null,
      '&:hover': {
        background: "#464444",
        color: 'white'
      },
      '&:focus': {
        background: "#464444",
        color: 'white'
      },
      padding: 10
    });
  }
};

class SideBar extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fetchCategory", () => {
      let params = {
        url: '/category'
      };
      this.props.getCategory(params).then(res => {
        // console.log(res)
        let dropDownCategory = [];
        res.data.response.data.map(itm => {
          dropDownCategory.push({
            label: itm.title,
            value: itm._id
          });
        });
        this.setState({
          homeSidebarData: res.data.response.data,
          dropDownCategory,
          selectCategory: dropDownCategory[0]
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "selectedCategoryHandle", e => {
      this.setState({
        selectCategory: e
      });
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
        pathname: '/home',
        query: {
          page: 1,
          categoryId: e.value
        }
      });
    });

    this.state = {
      dropDownCategory: [],
      homeSidebarData: [],
      activeIndx: '',
      activeCategory: '',
      selectCategory: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      activeCategory: nextProps.router.query.categoryId
    };
  }

  componentDidMount() {
    if (!this.state.homeSidebarData.length) this.fetchCategory();
  }

  render() {
    let {
      homeSidebarData,
      activeIndx,
      activeCategory,
      dropDownCategory,
      selectCategory
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
      className: "category-items web-view bg-dark pt-20 pb-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, homeSidebarData.map((itm, ind) => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: {
          pathname: '/home',
          query: {
            page: 1,
            categoryId: itm._id
          }
        },
        key: ind,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: `d-block font-weight-bold text-capitalize pt-5 pb-5 pl-20 pr-30 mt-20  mb-20 ml-20 mr-20 text-white ${activeCategory == itm._id ? 'home-category-itm-active ' : 'text-muted'}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 33
        }
      }, __jsx("img", {
        src: this.props.activeCategory == itm._id ? itm.catIcon.url : itm.catIcon.url,
        className: "mr-10",
        style: activeCategory == itm._id ? {
          opacity: '1'
        } : {
          opacity: '0.5'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 37
        }
      }), itm.title));
    })), __jsx("div", {
      className: "category-items mobile-view bg-dark pt-20 pb-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_13___default.a, {
      styles: customStyles,
      className: "theme-select r-4",
      value: selectCategory,
      onChange: e => this.selectedCategoryHandle(e),
      options: dropDownCategory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    })));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getCategory: data => dispatch(Object(redux_action_categoryAction__WEBPACK_IMPORTED_MODULE_10__["getCategory"])(data))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispatchToProps)(SideBar)));

/***/ }),

/***/ "./components/common/modal.js":
/*!************************************!*\
  !*** ./components/common/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\common\\modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const modal = props => {
  // console.log(props)
  return __jsx("div", {
    className: "modal-wrapper position-fixed w-100 h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    role: "dialog",
    className: `${props.showModal ? 'show' : ''} modal fade`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }, __jsx("h5", {
    className: "modal-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 29
    }
  }, "Delete confirmation"), __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: props.triggerModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, "This would delete the post permanently. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 72
    }
  }), __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, "Are you sure to delete?"))), __jsx("div", {
    className: "modal-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-primary mr-10 px-20",
    onClick: props.triggerModalSuccess,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, "Delete"), __jsx("button", {
    type: "button",
    className: "btn btn-dark px-20",
    onClick: props.triggerModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Close")))), __jsx("div", {
    className: "modal-backdrop fade show",
    onClick: props.triggerModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./components/loading/index.js":
/*!*************************************!*\
  !*** ./components/loading/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\loading\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Loading() {
  return __jsx("div", {
    className: "spinner-border text-primary",
    role: "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "Loading..."));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/post/comment/helpers.js":
/*!********************************************!*\
  !*** ./components/post/comment/helpers.js ***!
  \********************************************/
/*! exports provided: transformComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformComment", function() { return transformComment; });
function transformComment(str) {
  const res = transformURLs(str);
  return res;
}

function transformURLs(str) {
  let res = str;
  const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
  const transforms = str.match(regex);
  if (transforms) transforms.forEach(t => res = res.replace(t, `<a href="${t}">${t}</a>`));
  return res;
}

/***/ }),

/***/ "./components/post/comment/index.js":
/*!******************************************!*\
  !*** ./components/post/comment/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleCom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleCom */ "./components/post/comment/singleCom.js");
/* harmony import */ var assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/commentarrow.png */ "./assets/images/commentarrow.png");
/* harmony import */ var assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var _postcomment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postcomment */ "./components/post/comment/postcomment.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/loading */ "./components/loading/index.js");
/* harmony import */ var components_common_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/common/modal */ "./components/common/modal.js");

var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\post\\comment\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









/**
 * create by zain ahmed
 * created date: 20/12/2019
 * class component for see comment and post comment
 */

class Comment extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchComments", (page, newPost) => {
      let self = this;
      let itemPerPage = 5;

      if (newPost) {
        self.setState({
          commentData: []
        });
        this.props.fetchComments();
      }

      if (page) {
        let queryparams = {
          params: {
            postId: this.props.postItem._id,
            createdBy: this.props.postItem.createdBy,
            skip: (page - 1) * itemPerPage,
            limit: itemPerPage
          }
        };

        utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_4__["default"]._fetchWithParams(`/comment`, queryparams).then(res => {
          if (res.data.response.status) {
            var commentData = self.state.commentData;
            res.data.response.data.map(comment => {
              commentData.push(comment);
            });
            if (res.data.response.data.length) self.setState({
              commentData: commentData
            });
            if (res.data.response.data.length < itemPerPage) self.setState({
              hasMoreItems: false
            });
          }
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pushToPost", comment => {
      var comments = this.state.commentData;
      comments.unshift(comment);
      this.setState({
        commentData: comments
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showConfirmModal", commentId => {
      this.setState({
        showModal: true,
        commentId: commentId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteComment", () => {
      let userData = {
        commentId: this.state.commentId,
        role: this.props.auth.authUser.role,
        userId: this.props.auth.authUser.userId,
        socialLogin: this.props.auth.authUser.socialLogin
      };

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_4__["default"]._deleteRequest(`/comment`, userData).then(res => {
        this.setState({
          showModal: false,
          commentId: null
        });
        this.fetchComments(1, true);
      });
    });

    this.state = {
      commentData: [],
      hasMoreItems: true,
      nextHref: null,
      // userId: '',
      isLoggedIn: false,
      showModal: false,
      commentId: null
    };
  }

  componentDidMount() {
    let authData = this.props.auth.authUser;

    if (authData.token) {
      this.setState({
        isLoggedIn: true
      });
    }
  }
  /**
   * fetch commments function
   * @param {postId(string) limit(number) skip(number)}
   */


  render() {
    const loader = __jsx("div", {
      key: "mango",
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 24
      }
    }, __jsx(components_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 67
      }
    }));

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "comment-container border  border-primary m-5",
      style: this.state.commentData.length == 0 ? !this.state.isLoggedIn ? {
        height: 100
      } : {
        height: 180
      } : !this.state.isLoggedIn ? {
        height: 250
      } : {
        height: 340
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "arrow",
      className: "comment-arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "totl-comment d-flex pt-10 pl-30 pb-10 border-bottom font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, "Comment(", this.props.commentCount, ")"), this.state.isLoggedIn && __jsx(_postcomment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      postId: this.props.postItem._id,
      fetchComments: this.fetchComments,
      pushToPost: this.pushToPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 47
      }
    }), __jsx("div", {
      className: "comment-section",
      style: this.state.commentData.length == 0 ? {
        height: 30
      } : !this.state.isLoggedIn ? {
        height: '80%'
      } : {
        height: '55%'
      },
      ref: ref => this.scrollParentRef = ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7___default.a, {
      pageStart: 0,
      loadMore: this.fetchComments.bind(this),
      hasMore: this.state.hasMoreItems,
      useWindow: false,
      getScrollParent: () => this.scrollParentRef,
      key: "mango1989",
      loader: loader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 29
      }
    }, this.state.commentData.length == 0 ? __jsx("p", {
      className: "font-weight-bold text-center mb-0 mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 75
      }
    }, "Be the first one to comment!") : this.state.commentData.map((itm, ind) => {
      return __jsx(_singleCom__WEBPACK_IMPORTED_MODULE_2__["default"], {
        auth: this.props.auth,
        itm: itm,
        key: 'comment-' + itm._id + ind,
        length: this.state.commentData.length,
        showConfirmModal: this.showConfirmModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 49
        }
      });
    }))))), this.state.showModal && __jsx(components_common_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      showModal: this.state.showModal,
      triggerModalSuccess: this.deleteComment,
      triggerModalClose: () => this.setState({
        showModal: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 42
      }
    }));
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Comment));

/***/ }),

/***/ "./components/post/comment/postcomment.js":
/*!************************************************!*\
  !*** ./components/post/comment/postcomment.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/profilelogo.png */ "./assets/images/profilelogo.png");
/* harmony import */ var assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_commentsend_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/commentsend.png */ "./assets/images/commentsend.png");
/* harmony import */ var assets_images_commentsend_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_commentsend_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/loading */ "./components/loading/index.js");
/* harmony import */ var common_jwt_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/jwt-services */ "./common/jwt-services.js");

var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\post\\comment\\postcomment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







/**
 * created by zain ahmed
 * created date: 18/12/2019
 * class componen for create comment on single post
 */

class postComment extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "postCommenthandle", async () => {
      let {
        commentContent,
        user_profile
      } = this.state;
      this.setState({
        loader: true
      });
      let params = {
        content: commentContent,
        postId: this.props.postId,
        createdBy: this.props.auth.userId,
        socialLogin: this.props.auth.socialLogin
      };

      if (commentContent.length <= 0) {
        console.log("please fill the field");
      } else {
        utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_4__["default"]._postRequest('/comment', params).then(res => {
          let obj = {
            content: commentContent,
            user_profile: {
              fullName: user_profile.fullName,
              email: user_profile.email,
              profilePic: {
                url: user_profile.profilePic
              }
            }
          }; // this.props.pushToPost(obj)

          this.setState({
            commentContent: '',
            loader: false
          });
          this.props.fetchComments(1, true);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "txtHandle", e => {
      this.setState({
        commentContent: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onEnterPress", e => {
      if (e.keyCode == 13 && e.shiftKey == false) {
        e.preventDefault();
        this.setState({
          loader: true
        });
        let {
          commentContent,
          user_profile
        } = this.state;
        let params = {
          content: commentContent,
          postId: this.props.postId,
          createdBy: this.props.auth.userId,
          socialLogin: this.props.auth.socialLogin
        };

        if (commentContent.length <= 0) {
          console.log("please fill the field");
        } else {
          utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_4__["default"]._postRequest('/comment', params).then(res => {
            let obj = {
              content: commentContent,
              user_profile: {
                fullName: user_profile.fullName,
                email: user_profile.email,
                profilePic: {
                  url: user_profile.profilePic
                }
              }
            }; // this.props.pushToPost(obj)

            this.setState({
              commentContent: '',
              loader: false
            });
            this.props.fetchComments(1, true);
          });
        } // this.postCommet.submit();

      }
    });

    this.state = {
      commentContent: '',
      loader: false,
      user_profile: JSON.parse(common_jwt_services__WEBPACK_IMPORTED_MODULE_7__["default"].getObject('authUser'))
    };
  }
  /**
   * function for create/post commont
   * @param {commentContent(string) postId(string) createdBy(string)}
   */


  render() {
    let {
      commentContent,
      loader
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "send-comment-main d-flex pt-10 pl-20 pr-10 pb-10 border-bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx("form", {
      ref: el => this.postCommet = el,
      className: "d-flex bd-highlight w-100 align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "profile-pic bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: this.props.auth.profilePic ? this.props.auth.profilePic : assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      className: "rounded-circle img-fluid",
      alt: "profilelogo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "p-2 flex-grow-1 bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "post-comment h-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }
    }, __jsx("textarea", {
      onKeyDown: this.onEnterPress,
      onChange: this.txtHandle,
      value: commentContent,
      type: "string",
      className: "form-control h-100",
      "aria-describedby": "comment",
      placeholder: "Write a Comment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: "p-2 cursor-pointer bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "commentsend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: assets_images_commentsend_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "commentsend",
      onClick: this.postCommenthandle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 33
      }
    }))))), loader && __jsx("div", {
      className: "text-center mt-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 28
      }
    }, __jsx(components_loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })));
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.authUser
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(postComment));

/***/ }),

/***/ "./components/post/comment/singleCom.js":
/*!**********************************************!*\
  !*** ./components/post/comment/singleCom.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./components/post/comment/helpers.js");
/* harmony import */ var assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/profilelogo.png */ "./assets/images/profilelogo.png");
/* harmony import */ var assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/postdeleteicon.png */ "./assets/images/postdeleteicon.png");
/* harmony import */ var assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\post\\comment\\singleCom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/**
 * created by zain ahmed
 * created date: 20/12/2019
 * @param {*} props
 */

class SingleCom extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      commentImage: ''
    };
  }

  componentDidMount() {
    const pClass = this;
    const content = this.props.itm.content;
    const urls = content.match(/\bhttps?:\/\/\S+/gi);

    if (urls && urls.length) {
      const url = `https://cors-anywhere.herokuapp.com/${urls[0]}`;
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, function (data) {
        const doc = new DOMParser().parseFromString(data, "text/html");
        const meta = doc.querySelector('meta[property="og:image"]');
        const commentImage = meta && meta.getAttribute("content");
        pClass.setState({
          commentImage
        });
      });
    }
  }

  render() {
    const {
      commentImage
    } = this.state;
    let item = this.props.itm;
    let user = item.user_profile ? item.user_profile : {};
    let auth = this.props.auth;
    let canDeleteComment = false;

    if (auth.authUser && auth.authUser.userId == user._id || auth.authUser.role == 'admin') {
      canDeleteComment = true;
    }

    const content = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["transformComment"])(item.content);
    let publishedDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.createdDate).format("MMM DD, YYYY");
    let publishedTime = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.createdDate).format("hh:mm A");
    return __jsx("div", {
      className: "show-comment d-flex pt-10 pl-20 pr-10 pb-10 border-bottom",
      style: this.props.length - this.props.ind === 1 ? {
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "8px"
      } : undefined,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "d-flex bd-highlight w-100 mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "profile-pic bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: user.profilePic && user.profilePic.url ? user.profilePic.url : assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      className: "rounded-circle img-fluid",
      alt: "profile picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "pl-15 comment-content bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "m-0 font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, user.fullName), __jsx("p", {
      className: "m-0 text-muted",
      dangerouslySetInnerHTML: {
        __html: content
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }), __jsx("p", {
      className: "m-0 text-muted text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }, publishedDate, " at ", publishedTime)), commentImage !== "" ? __jsx("img", {
      src: commentImage,
      className: "w-100",
      alt: "commentimage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }) : __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    })), canDeleteComment && __jsx("div", {
      className: "bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "btn btn-danger delete-post bd-highlight",
      onClick: () => this.props.showConfirmModal(item._id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, " ", __jsx("img", {
      src: assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "postdeleteicon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 129
      }
    }), " "))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleCom);

/***/ }),

/***/ "./components/post/createpost/index.js":
/*!*********************************************!*\
  !*** ./components/post/createpost/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/config */ "./common/config.js");
/* harmony import */ var redux_action_categoryAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux/action/categoryAction */ "./redux/action/categoryAction.js");
/* harmony import */ var redux_action_generalAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux/action/generalAction */ "./redux/action/generalAction.js");
/* harmony import */ var components_loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/loading */ "./components/loading/index.js");







var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\post\\createpost\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










 // import {fetchPost} from 'redux/action/generalAction'

/**
 * created by zain ahmed
 * created date 22/12/2019
 * class component for created post 
 */

const customStyles = {
  option: (provided, state) => {
    return _objectSpread({}, provided, {
      // borderBottom: '1px dotted #ffffff',
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isFocused ? "#464444" : state.isSelected ? "#464444" : null,
      '&:hover': {
        background: "#464444",
        color: 'white'
      },
      '&:focus': {
        background: "#464444",
        color: 'white'
      },
      padding: 10
    });
  }
};

class CreatePost extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fetchCategoryFN", () => {// let { categoryData } = this.state;
      // let categoryParams = {
      //     params: {
      //         url: "/category",
      //     }
      // }
      // console.log(this.props.categoryData)
      // this.props.categoryData.data.map(itm => {
      //     return (
      //         categoryData.push({ value: itm._id, label: itm.title })
      //     )
      // })
      // this.props.getCategory(categoryParams).then(res => {
      //     console.log(res)
      // })
      // genericfunctions._fetchWithOutParams('/category').then(res => {
      //     res.data.response.data.map(itm => {
      //         return (
      //             categoryData.push({ value: itm._id, label: itm.title })
      //         )
      //     })
      //     this.setState({ categoryData })
      // })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "textChangeHandle", (e, key) => {
      this.setState({
        [key]: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "postPostFN", async () => {
      let {
        selectedCategory,
        postQuestion,
        postOption1,
        postOption2,
        postOption3
      } = this.state; // || postOption2.length <= 0 || postOption3.length <= 0

      if (postQuestion.length <= 0 || postOption1.length <= 0 || !selectedCategory.value) {
        this.setState({
          errorMessage: "please fill all fields"
        });
      } else {
        let postData = {
          userId: this.props.auth.authUser.userId,
          categoryId: selectedCategory.value,
          postQuestion,
          options: [postOption1, postOption2, postOption3],
          socialLogin: this.props.auth.authUser.socialLogin
        };
        this.setState({
          Loading: true,
          errorMessage: ''
        });

        utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_9__["default"]._postRequest('/post', postData).then(res => {
          if (res.data.response.status) {
            this.setState({
              postQuestion: '',
              postOption1: '',
              postOption2: '',
              postOption3: '',
              selectedCategory: [],
              errorMessage: '',
              Loading: false
            });
            next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/home');
          } else {
            this.setState({
              errorMessage: res.data.response.message,
              Loading: false
            });
          }
        });
      }
    });

    this.state = {
      postQuestion: '',
      postOption1: '',
      postOption2: '',
      postOption3: '',
      selectedCategory: [],
      categoryData: [],
      errorMessage: '',
      Loading: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props.categoryData)
    // console.log(state.categoryData)
    if (props.categoryData.length != state.categoryData.length) {
      // console.log(props.categoryData)
      props.categoryData.map(itm => {
        return state.categoryData.push({
          value: itm._id,
          label: itm.title
        });
      });
    }

    return null;
  }

  componentDidMount() {
    this.fetchCategoryFN();
  }

  selectedCategoryHandle(e) {
    this.setState({
      selectedCategory: e
    });
  }
  /**
   * fetch category function 
   * @param {}
   */


  render() {
    let {
      categoryData,
      selectedCategory,
      postQuestion,
      postOption1,
      postOption2,
      postOption3,
      errorMessage,
      Loading
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
      className: "post-main-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "create-post bg-white p-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "post-quetio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "d-flex question mb-15 mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "m-0 font-weight-bold question-ibelieve",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 33
      }
    }, "I believe "), __jsx("p", {
      className: "w-75 p-5 bg-gray-1 ml-5 question-field mb-0 question-ibelieve-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "string",
      value: postQuestion,
      onChange: e => this.textChangeHandle(e, "postQuestion"),
      placeholder: "Enter text here",
      className: "input-text-post",
      "aria-describedby": "querion",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 37
      }
    }), " ", __jsx("span", {
      className: "text-bold times-roman",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 224
      }
    }, ","))), __jsx("div", {
      className: "d-flex w-100 mb-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "d-flex font-weight-bold mb-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 33
      }
    }, "but I might change my mind if:")), __jsx("div", {
      className: "w-100 mb-10 p-5 bg-gray-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "option-text d-flex option-text-inner pb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 33
      }
    }, __jsx("span", {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 37
      }
    }, "1) "), __jsx("input", {
      type: "string",
      value: postOption1,
      onChange: e => this.textChangeHandle(e, "postOption1"),
      placeholder: "Enter text here",
      className: "px-15 input-text w-100",
      "aria-describedby": "querion",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 82
      }
    }))), __jsx("div", {
      className: "w-100 mt-5 mb-10 p-5 bg-gray-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "option-text d-flex option-text-inner pb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 33
      }
    }, __jsx("span", {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 37
      }
    }, "2) "), __jsx("input", {
      type: "string",
      value: postOption2,
      onChange: e => this.textChangeHandle(e, "postOption2"),
      placeholder: "",
      className: "px-15 input-text w-100",
      "aria-describedby": "querion",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 82
      }
    }))), __jsx("div", {
      className: "w-100 mt-5 mb-10 p-5 bg-gray-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "option-text d-flex option-text-inner pb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 33
      }
    }, __jsx("span", {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 37
      }
    }, "3) "), __jsx("input", {
      type: "string",
      value: postOption3,
      onChange: e => this.textChangeHandle(e, "postOption3"),
      placeholder: "",
      className: "px-15 input-text w-100",
      "aria-describedby": "querion",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 82
      }
    }))), __jsx("div", {
      className: "row justify-content-between post-footer-panel mt-25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "post-btn col-lg-6 col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 33
      }
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
      styles: customStyles,
      className: "theme-select r-4",
      value: selectedCategory,
      onChange: e => this.selectedCategoryHandle(e),
      options: categoryData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "post-btn col-lg-6 col-12 text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 33
      }
    }, __jsx("button", {
      type: "button",
      className: "btn btn-danger px-50 w-auto",
      onClick: this.postPostFN,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 37
      }
    }, "Post")), errorMessage && __jsx("div", {
      className: "text-center alert-error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 50
      }
    }, __jsx("p", {
      className: "text-red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 37
      }
    }, errorMessage)), Loading && __jsx(components_loading__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 45
      }
    }))))));
  }

}

function mapStateToProps(state) {
  // console.log(state.category)
  return {
    auth: state.auth,
    categoryData: state.category.category
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: data => dispatch(Object(redux_action_generalAction__WEBPACK_IMPORTED_MODULE_14__["fetchPost"])(data)),
    getCategory: data => dispatch(Object(redux_action_categoryAction__WEBPACK_IMPORTED_MODULE_13__["getCategory"])(data))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(CreatePost)));

/***/ }),

/***/ "./components/post/postCom/index.js":
/*!******************************************!*\
  !*** ./components/post/postCom/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_pinpost_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/pinpost.png */ "./assets/images/pinpost.png");
/* harmony import */ var assets_images_pinpost_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_pinpost_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_pinposted_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/images/pinposted.png */ "./assets/images/pinposted.png");
/* harmony import */ var assets_images_pinposted_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_pinposted_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/images/profilelogo.png */ "./assets/images/profilelogo.png");
/* harmony import */ var assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_images_comment_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/images/comment.png */ "./assets/images/comment.png");
/* harmony import */ var assets_images_comment_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_images_comment_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_images_share_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/images/share.png */ "./assets/images/share.png");
/* harmony import */ var assets_images_share_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_images_share_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_images_like_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/images/like.png */ "./assets/images/like.png");
/* harmony import */ var assets_images_like_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_images_like_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var comment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! comment */ "./components/post/comment/index.js");
/* harmony import */ var assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/images/postdeleteicon.png */ "./assets/images/postdeleteicon.png");
/* harmony import */ var assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../share */ "./components/share/index.js");
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var common_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! common/config */ "./common/config.js");
/* harmony import */ var redux_action_generalAction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! redux/action/generalAction */ "./redux/action/generalAction.js");







var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\post\\postCom\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faThumbtack"]);

class postCom extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleOpenCommentPanel", () => {
      let {
        sharePanel,
        commentPanel
      } = this.state; // this.setState({ commentPanel: commentPanel == true ? false : true, sharePanel: false })

      this.setState({
        commentPanel: !commentPanel,
        sharePanel: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleOpenSharePanel", () => {
      let {
        sharePanel,
        commentPanel
      } = this.state; // this.setState({ sharePanel: sharePanel == true ? false : true, commentPanel: false })

      this.setState({
        sharePanel: !sharePanel,
        commentPanel: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "chnageCommentpanel", () => {
      // console.log("abc")
      this.setState({
        commentPanel: false,
        sharePanel: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "pinPostHandle", () => {
      let params = {
        postId: this.props.data._id,
        isPin: this.props.pinPost,
        socialLogin: this.props.auth.authUser.socialLogin // socialLogin:"abc"

      }; // let postId = { postId: this.props.data._id }

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_19__["default"]._updateRequest('/post/pinpost', params).then(res => {// this.props.fetchPost()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "deletePost", () => {
      let userData = {
        postId: this.props.data._id,
        role: this.props.auth.authUser.role,
        userId: this.props.auth.authUser.userId,
        socialLogin: this.props.auth.authUser.socialLogin
      };

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_19__["default"]._deleteRequest(`/post`, userData).then(res => {// this.props.fetchPost()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "deletePrompt", postId => {
      this.props.showModal({
        showModal: true,
        postId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "pinPostHandle", () => {
      let params = {
        postId: this.props.data._id,
        isPin: this.props.pinPost,
        socialLogin: this.props.auth.authUser.socialLogin
      }; // let postId = { postId: this.props.data._id }

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_19__["default"]._updateRequest('/post/pinpost', params).then(res => {
        this.props.fetchPinPost();
        next_router__WEBPACK_IMPORTED_MODULE_21___default.a.router.push(next_router__WEBPACK_IMPORTED_MODULE_21___default.a.router.asPath);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "pinPostPrompt", () => {
      this.props.showModal({
        showModal: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "showMore", () => {
      let {
        readMore
      } = this.state;
      this.setState({
        readMore: readMore = !readMore
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleLike", flag => {
      this.setState({
        processing: true
      });
      let {
        likeFlag,
        postLikeCount,
        isLike
      } = this.state;
      let params = {
        postId: this.props.data._id,
        likeFlag: flag
      }; // console.log(this.props.generalData.postLikes, flag == 'add' && isLike[0] != params.postId)

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_19__["default"]._postRequest('/likepost', params).then(res => {
        if (res.data.response.status) {
          this.props.addPostLike(params).then(res => {
            if (res) {
              this.setState({
                postLikeCount: flag == 'add' ? ++postLikeCount : --postLikeCount
              }); // if (flag == 'add') {
              //     this.setState({ postLikeCount: ++postLikeCount })
              // }
              // if (flag == 'remove') {
              //     // this.props.removePostLike(params)
              //     //     .then(res => {
              //     //         this.setState({ isLike: this.props.generalData.postLikes })
              //     //     })
              //     this.setState({ postLikeCount: --postLikeCount })
              // }

              this.setState({
                isLike: res.filter(i => i == this.props.data._id)
              });
            }
          });
          this.setState({
            processing: false
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleClick", url => {
      next_router__WEBPACK_IMPORTED_MODULE_21___default.a.push(url);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "fetchComments", () => {
      // console.log(this.props.data)
      let queryparams = {
        params: {
          postId: this.props.data._id,
          createdBy: this.props.data.createdBy,
          skip: 0,
          limit: 1
        }
      };

      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_19__["default"]._fetchWithParams(`/comment`, queryparams).then(res => {
        if (res.data.response.status) {
          this.setState({
            commentCount: res.data.response.count ? res.data.response.count : 0
          });
        }
      });
    });

    this.state = {
      commentPanel: false,
      sharePanel: false,
      postCategory: '',
      chnageCommentpanel: this.chnageCommentpanel.bind(this),
      readMore: this.props.data.postQuestion.length > 100 ? true : false,
      showModal: false,
      likeFlag: '',
      postLikeCount: this.props.data.likes ? this.props.data.likes : 0,
      isLike: [],
      processing: false,
      isLoggedIn: false,
      commentCount: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    let isLike = props.generalData.postLikes.filter(i => i == props.data._id);

    if (isLike[0] == props.data._id) {
      return _objectSpread({}, state, {
        isLike
      });
    } else return null;
  }

  componentDidMount() {
    this.fetchComments();
    let authData = this.props.auth.authUser;

    if (authData.token) {
      this.setState({
        isLoggedIn: true
      });
    }
  }
  /**
   * fetch commments function
   * @param {postId(string) limit(number) skip(number)}
   */


  // updateCommentCount = (commentCount) => {
  //     this.setState({ commentCount })
  // }
  render() {
    // let isLike = this.props.generalData.postLikes.filter(i => i == this.props.data._id)
    let item = this.props.data;
    let user = item.output[0];
    let publishedDate = moment__WEBPACK_IMPORTED_MODULE_22___default()(item.createdDate).format('MMM DD, YYYY');
    let publishedTime = moment__WEBPACK_IMPORTED_MODULE_22___default()(item.createdDate).format('hh:mm A');
    let postCategory;
    if (this.props.categoryData && this.props.categoryData.category.length > 0) postCategory = this.props.categoryData.category.filter(categoryid => categoryid._id == item.categoryId)[0];
    let {
      sharePanel,
      commentPanel,
      like,
      readMore,
      postLikeCount,
      isLike,
      processing,
      commentCount
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
      className: "post-main-container mb-40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: `${this.props.auth.authUser && this.props.auth.authUser.userId == user._id ? 'highlight-my-post' : ''} create-post p-30 bg-white`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "post-header row align-items-center justify-content-between mb-3 w-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-9 d-flex pl-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "profile-pic d-flex align-items-center pic-large bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: user.profilePic.url ? user.profilePic.url : assets_images_profilelogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: "profilelogo",
      className: "rounded-circle img-fluid",
      alt: "Profile Picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "p-2 bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "m-0 font-weight-bold text-capitalize",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 37
      }
    }, " ", item.output[0].fullName, " ", this.props.auth.authUser && this.props.auth.authUser.userId == user._id && __jsx("small", {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 192
      }
    }, "(Posted by you)")), __jsx("p", {
      className: "m-0 font-weight-bold text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 37
      }
    }, publishedDate, " at ", publishedTime))), __jsx("div", {
      className: "d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 29
      }
    }, this.props.auth.authUser.role == 'admin' && __jsx("div", {
      className: "p-2 mr-10 bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 78
      }
    }, __jsx("img", {
      src: this.props.pinPost ? assets_images_pinposted_png__WEBPACK_IMPORTED_MODULE_11___default.a : assets_images_pinpost_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      alt: "pinpiost",
      onClick: this.pinPostHandle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 37
      }
    })), (this.props.auth.authUser && this.props.auth.authUser.userId == user._id || this.props.auth.authUser.role == 'admin') && __jsx("div", {
      className: "bd-highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "btn btn-danger delete-post bd-highlight",
      onClick: () => this.deletePrompt(item._id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 41
      }
    }, " ", __jsx("img", {
      src: assets_images_postdeleteicon_png__WEBPACK_IMPORTED_MODULE_17___default.a,
      alt: "postdeleteicon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 143
      }
    }), " ")))), __jsx("div", {
      className: "post-question cursor-pointer",
      onClick: () => this.handleClick(`/post-detail?postId=${item._id}`),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 25
      }
    }, item.postQuestion && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("p", {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 53
      }
    }, "I believe ", __jsx("ins", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 43
      }
    }, " ", readMore ? `${item.postQuestion.substr(0, 100)}` : item.postQuestion, item.postQuestion.length > 100 ? __jsx("span", {
      className: "cursor-pointer",
      onClick: this.showMore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 41
      }
    }, "... ", __jsx("span", {
      className: "font-weight-normal text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 102
      }
    }, " Read", readMore ? ' More' : ' Less')) : undefined, __jsx("span", {
      className: "text-bold times-roman",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 95
      }
    }, ","))), " ", __jsx("p", {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 34
      }
    }, " but I might change my mind if: "))), __jsx("div", {
      className: "post-question-option",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "border-bottom d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "mr-15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 65
      }
    }, "1)"), __jsx("span", {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 98
      }
    }, item.options[0])), __jsx("p", {
      className: "border-bottom d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "mr-15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 65
      }
    }, "2)"), __jsx("span", {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 98
      }
    }, item.options[1])), __jsx("p", {
      className: "border-bottom d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "mr-15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 65
      }
    }, "3)"), __jsx("span", {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 98
      }
    }, item.options[2]))), __jsx("div", {
      className: "post-fotter row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-xl-9 col-lg-12 col-12 d-sm-flex p-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-sm-4 col-12 pl order-1 btn-wrap mt-10 pr-5",
      onClick: this.handleOpenCommentPanel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: `${commentPanel ? 'comment-active' : 'comment'} border commet-icon text-center align-self-cente blue-btn px-10`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: "m-0 pt-10 pb-10 text-muted position-relative bc__comment-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "mr-5 bc__comment-count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 45
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 49
      }
    }, commentCount)), "Comment"))), __jsx("div", {
      className: "col-sm-4 col-12 text-center order-2 order-sm-2 mt-10  pl-5 pr-5",
      onClick: this.handleOpenSharePanel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: `${sharePanel ? 'share-active' : 'share'} border share-icon align-self-cente w-100 px-10`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: "m-0 pt-10 pb-10 text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: assets_images_share_png__WEBPACK_IMPORTED_MODULE_14___default.a,
      alt: "pinpiost",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 45
      }
    }), "Share")), sharePanel && __jsx("div", {
      className: "w-100 mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 52
      }
    }, __jsx(_share__WEBPACK_IMPORTED_MODULE_18__["default"], {
      url: `${common_config__WEBPACK_IMPORTED_MODULE_23__["BASEURL"]}post-detail?postId=${item._id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 41
      }
    }))), __jsx("div", {
      className: "col-sm-4 col-12 text-center order-2 order-sm-2 mt-10 pr-0 " + (this.props.auth.authUser.token ? 'cursor-pointer' : ''),
      onClick: this.props.auth.authUser.token ? () => this.handleLike(isLike.length > 0 && !processing ? 'remove' : 'add') : null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: `${isLike.length > 0 ? 'like-active ' : 'like like-icon'}  w-100 `,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 37
      }
    }, __jsx("p", {
      className: "m-0 pt-10 pb-10 text-center text-sm-left text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: assets_images_like_png__WEBPACK_IMPORTED_MODULE_15___default.a,
      alt: "pinpiost",
      className: "mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 45
      }
    }), postLikeCount)))), __jsx("div", {
      className: "col-xl-3 col-lg-12 mt-20 entertainment order-4 order-xl-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "entertainment-icon text-center text-xl-right align-self-center w-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 33
      }
    }, this.props.categoryData.category.length > 0 && __jsx("p", {
      className: "m-0 text-muted font-weight-bold text-capitalize ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 85
      }
    }, __jsx("img", {
      src: postCategory.catIcon.url,
      alt: "pinpiost",
      className: "mr-5 mb-1 img-invert",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 41
      }
    }), postCategory.title))), commentPanel && __jsx("div", {
      className: "order-3 order-xl-4 mt-10 px-15 w-100 comment-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 46
      }
    }, __jsx(comment__WEBPACK_IMPORTED_MODULE_16__["default"], {
      postItem: item,
      commentCount: commentCount,
      fetchComments: this.fetchComments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 33
      }
    }))))));
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    categoryData: state.category,
    generalData: state.general
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: data => dispatch(Object(redux_action_generalAction__WEBPACK_IMPORTED_MODULE_24__["showModal"])(data)),
    addPostLike: data => dispatch(Object(redux_action_generalAction__WEBPACK_IMPORTED_MODULE_24__["addPostLike"])(data)),
    removePostLike: data => dispatch(Object(redux_action_generalAction__WEBPACK_IMPORTED_MODULE_24__["removePostLike"])(data))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(postCom));

/***/ }),

/***/ "./components/share/index.js":
/*!***********************************!*\
  !*** ./components/share/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/facebook.png */ "./assets/images/facebook.png");
/* harmony import */ var assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/twitter.png */ "./assets/images/twitter.png");
/* harmony import */ var assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_linkdin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/linkdin.png */ "./assets/images/linkdin.png");
/* harmony import */ var assets_images_linkdin_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_linkdin_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_insta_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/insta.png */ "./assets/images/insta.png");
/* harmony import */ var assets_images_insta_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_insta_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/commentarrow.png */ "./assets/images/commentarrow.png");
/* harmony import */ var assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\components\\share\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import 'social-likes-next';
// import 'social-likes-next/lib/social-likes_flat.css';



const share = props => {
  console.log(props.url);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/social-likes-next/dist/social-likes.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/social-likes-next/dist/social-likes_birman.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "share-main justify-content-center w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "share-icons d-flex justify-content-center pl-10 pr-10 border border-primary text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_images_commentarrow_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "arrow",
    className: "share-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "social-likes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("div", {
    "data-service": "facebook",
    "data-url": `${props.url}`,
    title: "Share link on Facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx("div", {
    "data-service": "twitter",
    "data-url": `${props.url}`,
    title: "Share link on twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }), __jsx("div", {
    "data-service": "linkedin",
    "data-url": `${props.url}`,
    title: "Share link on linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (share);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layouts_Default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layouts/Default */ "./components/Layouts/Default.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\pages\\home\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Layouts_Default__WEBPACK_IMPORTED_MODULE_1__["default"], {
      count: this.props.count,
      fetchPost: this.props.fetchPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(_redux__WEBPACK_IMPORTED_MODULE_3__["initStore"])(Home));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./pages/home/index.js");
/* harmony import */ var assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/scss/main.scss */ "./assets/scss/main.scss");
/* harmony import */ var assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux */ "./redux/index.js");
var _jsxFileName = "F:\\beliefchallenge\\beliefchallenge_client\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import axios from 'axios'
// import https from 'https';
// import API_URL from '../common/config'
// import apiCall from '../utilfunction/util-api-service'
// import { Provider } from "react-redux";
// import actions from '../redux/action/categoryAction';
// const Cookies = require('js-cookie')






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let {
      loaded
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      postData: this.props.postData,
      count: this.props.count,
      fetchPost: this.props.fetchPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_redux__WEBPACK_IMPORTED_MODULE_4__["initStore"])(Index));

/***/ }),

/***/ "./redux/action/authAction.js":
/*!************************************!*\
  !*** ./redux/action/authAction.js ***!
  \************************************/
/*! exports provided: LOGIN, LOGOUT, SIGNUP, REDUXDATA, login, logoutFN, signup, reduxdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUXDATA", function() { return REDUXDATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFN", function() { return logoutFN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxdata", function() { return reduxdata; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_jwt_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/jwt-services */ "./common/jwt-services.js");
/* harmony import */ var common_config_axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/config.axios */ "./common/config.axios.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/**
 * created by zain ahmed 
 * create data: 25/12/2019
 */


const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SIGNUP = "SIGNUP";
const REDUXDATA = "REDUXDATA";


 // import store from '../'

/**
 * 
 * @param {*email(string) password(string)} params ,
 *  * discription: user login function
 * function loginFN as login
 * 
 */

const login = params => (dispatch, getState) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a((resolve, reject) => {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_8__["default"]._postRequest(params.url, params.userData).then(res => {
      if (res.data.response.status) {
        common_config_axios__WEBPACK_IMPORTED_MODULE_11__["default"].defaults.headers.common['Authorization'] = res.data.response.data.token;

        let authUser = _objectSpread({}, res.data.response.data, {
          socialLogin: params.socialLogin,
          profilePic: res.data.response.data.profilePic.url ? res.data.response.data.profilePic.url : res.data.response.data.profilePic
        });

        let paylodaData = _objectSpread({}, authUser, {
          profilePic: res.data.response.data.profilePic.url ? res.data.response.data.profilePic.url : res.data.response.data.profilePic,
          socialLogin: params.socialLogin
        });

        common_jwt_services__WEBPACK_IMPORTED_MODULE_10__["default"].setObject('authUser', authUser);
        dispatch({
          type: "LOGIN",
          payload: paylodaData
        });
        resolve(res); // if (getState().general.hasPrevUrl)
        //     Router.back()
        // else Router.replace('/')

        window.location = '/';
      } else {
        resolve(res);
      }
    }).catch(err => {
      reject({
        message: err
      });
    });
  });
};
/**
 * 
 * @param {*token(JWT)} params ,
 *  * discription: user lougOut function
 * function logoutFN as logoutFN
 * 
 */

const logoutFN = params => {
  return dispatch => {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_8__["default"]._postRequest(params.url, params).then(res => {
      if (res.data.response.status) {
        let authUser = {};
        common_jwt_services__WEBPACK_IMPORTED_MODULE_10__["default"].deleteObject('authUser');
        dispatch({
          type: "LOGOUT",
          payload: authUser
        });
        dispatch({
          type: "POSTLIKES",
          payload: []
        });
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/login');
      }
    });
  };
};
/**
 * 
 * @param {*fullanme(string) email(string) password(string)} params ,
 * discription: user signup function
 * function signUpFN as signup
 * 
 */

const signup = params => {
  return dispatch => {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a((resolve, reject) => {
      utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_8__["default"]._postRequest(params.url, params.userData).then(res => {
        if (res.data.response.status) {
          let authUser = _objectSpread({}, res.data.response.data, {
            socialLogin: params.socialLogin,
            role: 'user'
          });

          let paylodaData = _objectSpread({}, authUser, {
            socialLogin: params.socialLogin,
            role: 'user'
          });

          common_jwt_services__WEBPACK_IMPORTED_MODULE_10__["default"].setObject('authUser', authUser);
          dispatch({
            type: "SIGNUP",
            payload: paylodaData
          });
          window.location = '/'; //Router.push('/home')

          resolve(res);
        } else {
          resolve(res);
        }
      }).catch(err => {
        reject({
          message: err
        });
      });
    });
  };
};
/**
 * 
 * @param {*email(string) fullname(string) token(JWT) role(string) socialLogin(Boolen)} params ,
 *  * discription: data restore to redux from coockie function
 * function reduxData as reduxdata
 * 
 */

const reduxdata = params => {
  return dispatch => {
    dispatch({
      type: "REDUXDATA",
      payload: params
    });
  };
};

/***/ }),

/***/ "./redux/action/categoryAction.js":
/*!****************************************!*\
  !*** ./redux/action/categoryAction.js ***!
  \****************************************/
/*! exports provided: CATEGORY, getCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilfunction/util-api-service */ "./utilfunction/util-api-service.js");

// import axios from 'axios';


const CATEGORY = "CATEGORY";
const getCategory = params => dispatch => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    _utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]._fetchWithOutParams(params.url).then(res => {
      if (res.data.response.status) {
        // console.log(res)
        dispatch({
          type: "CATEGORY",
          payload: res.data
        });
        resolve(res);
      } else {
        resolve(res);
      }
    }).catch(err => {// console.log(err);
      // reject({ message: err });
    });
  });
};

/***/ }),

/***/ "./redux/action/generalAction.js":
/*!***************************************!*\
  !*** ./redux/action/generalAction.js ***!
  \***************************************/
/*! exports provided: UPDATEPROFILE, SHOW_MODAL, HAS_PREV_URL, POSTLIKES, POSTUNLIKE, POST_DATA, changepassword, forgotpassword, updateprofile, fetchPost, updatePostData, showModal, hasPrevUrl, getPostLikes, addPostLike, removePostLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATEPROFILE", function() { return UPDATEPROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MODAL", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_PREV_URL", function() { return HAS_PREV_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTLIKES", function() { return POSTLIKES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTUNLIKE", function() { return POSTUNLIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_DATA", function() { return POST_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changepassword", function() { return changepassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotpassword", function() { return forgotpassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateprofile", function() { return updateprofile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPost", function() { return fetchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostData", function() { return updatePostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPrevUrl", function() { return hasPrevUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostLikes", function() { return getPostLikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostLike", function() { return addPostLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePostLike", function() { return removePostLike; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utilfunction/util-api-service */ "./utilfunction/util-api-service.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_jwt_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/jwt-services */ "./common/jwt-services.js");
/* harmony import */ var common_general_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/general-methods */ "./common/general-methods.js");



const UPDATEPROFILE = "UPDATEPROFILE";
const SHOW_MODAL = "SHOW_MODAL";
const HAS_PREV_URL = "HAS_PREV_URL";
const POSTLIKES = "POSTLIKES";
const POSTUNLIKE = "POSTUNLIKE";
const POST_DATA = "POST_DATA";


const changepassword = params => dispatch => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]._updateRequest(params.url, params.userData).then(res => {
      if (res.data.response.status) {
        resolve(res);
      } else {
        resolve(res);
      }
    }).catch(err => {
      reject({
        message: err
      });
    });
  });
};
const forgotpassword = params => dispatch => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]._updateRequest(params.url, params.userData).then(res => {
      resolve(res);
    }).catch(err => {
      reject({
        message: err
      });
    });
  });
};
const updateprofile = params => dispatch => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    let {
      token,
      userId
    } = params.userData;

    if (params.userData.profilePic.name) {
      params.userData = common_general_methods__WEBPACK_IMPORTED_MODULE_4__["default"].convertToFormData(params.userData);
    }

    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]._updateRequest(params.url, params.userData).then(res => {
      if (res.data.response.status) {
        let {
          fullName,
          email,
          profilePic
        } = res.data.response.data;
        let authUser = {
          token: token,
          fullName,
          email,
          userId: userId,
          role: 'role',
          profilePic: profilePic.url ? profilePic.url : profilePic,
          socialLogin: params.socialLogin
        };
        dispatch({
          type: "UPDATEPROFILE",
          payload: authUser
        });
        common_jwt_services__WEBPACK_IMPORTED_MODULE_3__["default"].setObject('authUser', authUser);
        resolve(res); // Router.replace('/home')
      } else {
        console.log("unathorized");
      }
    }).catch(err => {
      reject({
        message: err
      });
    });
  });
};
const fetchPost = params => dispatch => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]._fetchWithParams(params.params.url, params).then(res => {
      if (res.data && res.data.response && res.data.response.data) {
        dispatch({
          type: POST_DATA,
          payload: res.data.response.data
        });
      }

      resolve(res);
    }).catch(err => {
      reject({
        message: err
      });
    });
  });
};
const updatePostData = params => dispatch => {
  dispatch({
    type: POST_DATA,
    payload: params
  });
};
const showModal = params => dispatch => {
  dispatch({
    type: "SHOW_MODAL",
    payload: params
  });
};
const hasPrevUrl = params => dispatch => {
  dispatch({
    type: "HAS_PREV_URL",
    payload: params
  });
};
const getPostLikes = params => dispatch => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    utilfunction_util_api_service__WEBPACK_IMPORTED_MODULE_1__["default"]._fetchWithOutParams(params.url).then(res => {
      if (res.data.response.status) {
        dispatch({
          type: "POSTLIKES",
          payload: res.data.response.data.postId
        });
        resolve(res);
      }
    }).catch(err => {
      reject({
        message: err
      });
    });
  });
};
const addPostLike = params => (dispatch, getState) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    let likesData = getState().general.postLikes;

    if (params.likeFlag == 'add') {
      likesData.push(params.postId);
      dispatch({
        type: "POSTLIKES",
        payload: likesData
      });
    } else {
      let ind = likesData.findIndex(itm => itm == params.postId);

      if (ind > -1) {
        likesData.splice(ind, 1);
        dispatch({
          type: "POSTLIKES",
          payload: likesData
        });
      } // dispatch({ type: "POSTLIKES", payload: res.data.response.data.postId })

    }

    resolve(getState().general.postLikes);
  });
};
const removePostLike = params => (dispatch, getState) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    // genericfunctions._fetchWithOutParams("/likepost").then(({ data }) => {
    //     console.log(data.response.data, 'mor k')
    // })
    let likesData = getState().general.postLikes;
    console.log(likesData, 'remove');

    if (params.likeFlag == 'remove') {
      likesData.splice(likesData.indexOf(params.postId), 1);
      console.log(likesData);
      dispatch({
        type: "POSTUNLIKE",
        payload: likesData
      });
      resolve(true);
    }
  });
};

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./redux/reducer/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);





 // defaults to localStorage for web

const enhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)); // const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

const initStore = initialState => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, enhancer); // export default function configureStore(initialState) {
//   const store = createStore(persistedReducer, initialState, enhancer);
//   // we won't need PersistGate since server rendered with nextJS:
//   // const persistor = persistStore(store);
//   // return { store, persistor };
//   return store;
// }
// export const initStore = (initialState = {}) => {
//   return createStore(reducer, initialState, applyMiddleware(thunk));
// };

/***/ }),

/***/ "./redux/reducer/authReducer.js":
/*!**************************************!*\
  !*** ./redux/reducer/authReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var action_authAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! action/authAction */ "./redux/action/authAction.js");
/* harmony import */ var action_generalAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! action/generalAction */ "./redux/action/generalAction.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const initialState = {
  authUser: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case action_authAction__WEBPACK_IMPORTED_MODULE_7__["LOGIN"]:
      return _objectSpread({}, state, {
        authUser: _objectSpread({}, action.payload)
      });

    case action_authAction__WEBPACK_IMPORTED_MODULE_7__["SIGNUP"]:
      return _objectSpread({}, state, {
        authUser: _objectSpread({}, action.payload)
      });

    case action_authAction__WEBPACK_IMPORTED_MODULE_7__["REDUXDATA"]:
      return _objectSpread({}, state, {
        authUser: _objectSpread({}, action.payload)
      });

    case action_authAction__WEBPACK_IMPORTED_MODULE_7__["LOGOUT"]:
      return _objectSpread({}, state, {
        authUser: {}
      });

    case action_generalAction__WEBPACK_IMPORTED_MODULE_8__["UPDATEPROFILE"]:
      return _objectSpread({}, state, {
        authUser: _objectSpread({}, state.authUser, {
          fullName: action.payload.fullName,
          email: action.payload.email,
          socialLogin: action.payload.socialLogin
        })
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducer/categoryReducer.js":
/*!******************************************!*\
  !*** ./redux/reducer/categoryReducer.js ***!
  \******************************************/
/*! exports provided: CATEGORY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
const CATEGORY = "CATEGORY";
const initialState = {
  category: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      // console.log(action.payload.response)
      // return Object.assign({}, state, { token: action.payload });
      return {
        category: [...action.payload.response.data]
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducer/generalReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducer/generalReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var action_generalAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! action/generalAction */ "./redux/action/generalAction.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  modalData: {},
  hasPrevUrl: false,
  postLikes: [],
  postData: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case action_generalAction__WEBPACK_IMPORTED_MODULE_7__["SHOW_MODAL"]:
      return _objectSpread({}, state, {
        modalData: action.payload
      });

    case action_generalAction__WEBPACK_IMPORTED_MODULE_7__["HAS_PREV_URL"]:
      return _objectSpread({}, state, {
        hasPrevUrl: action.payload
      });

    case action_generalAction__WEBPACK_IMPORTED_MODULE_7__["POSTLIKES"]:
      return _objectSpread({}, state, {
        postLikes: action.payload
      });

    case action_generalAction__WEBPACK_IMPORTED_MODULE_7__["POSTUNLIKE"]:
      return _objectSpread({}, state, {
        postLikes: action.payload
      });

    case action_generalAction__WEBPACK_IMPORTED_MODULE_7__["POST_DATA"]:
      return _objectSpread({}, state, {
        postData: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducer/index.js":
/*!********************************!*\
  !*** ./redux/reducer/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _categoryReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryReducer */ "./redux/reducer/categoryReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./redux/reducer/authReducer.js");
/* harmony import */ var _generalReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalReducer */ "./redux/reducer/generalReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  category: _categoryReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  general: _generalReducer__WEBPACK_IMPORTED_MODULE_3__["default"] // category:categoryReducer

}));

/***/ }),

/***/ "./utilfunction/util-api-service.js":
/*!******************************************!*\
  !*** ./utilfunction/util-api-service.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/config.axios */ "./common/config.axios.js");


const fetchApi_withoutparams = async url => {
  return await common_config_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, null).then(res => {
    return res;
  }).catch(error => {
    return error.response;
  });
};

const fetchApi_withparams = async (url, queryData) => {
  return await common_config_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, queryData).then(res => {
    return res;
  }).catch(error => {
    return error.response;
  });
};

const postApi = async (url, data) => {
  return await common_config_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(res => {
    return res;
  }).catch(error => {
    return error.response;
  });
};

const deleteApi = async (url, data) => {
  return await common_config_axios__WEBPACK_IMPORTED_MODULE_0__["default"].delete(url, {
    data
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response;
  });
};

const updateApi = async (url, data) => {
  return await common_config_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, data).then(res => {
    return res;
  }).catch(error => {
    return error.response;
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  _fetchWithOutParams: fetchApi_withoutparams,
  _fetchWithParams: fetchApi_withparams,
  _postRequest: postApi,
  _deleteRequest: deleteApi,
  _updateRequest: updateApi
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\beliefchallenge\beliefchallenge_client\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map