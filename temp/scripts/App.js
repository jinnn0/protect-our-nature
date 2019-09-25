/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// let articleURL = data.response.docs[1].web_url
// let snippet =  data.response.docs[1].lead_paragraph
// let headline = data.response.docs[1].headline.main

// let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=how-to-save-our-planet&api-key=HJHjXXlYvEwnMXdzDlPDwGGCLAsUnvId'
// console.log(url.response);
  

let api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
let search = 'how-to-save-our-planet'
let query = `q=${search}`
let apiKey =  '&api-key=HJHjXXlYvEwnMXdzDlPDwGGCLAsUnvId' 
let url = api + query + apiKey

let main = document.querySelector('main')

fetch(url)
        .then(res => {
          return res.json()
        })
        .then(data => {
          let articles = data.response.docs
          for(let i = 0; i < articles.length; i++){
            let a = document.createElement('a')
            let section = document.createElement('section')
            let h1 = document.createElement('h1')
            let image = document.createElement('img')
            let p = document.createElement('p')
            let articleURL = articles[i].web_url
            let snippet =  articles[i].snippet
            let headline = articles[i].headline.main
            h1.textContent = headline
            p.textContent = snippet
            // image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkAhaZGk1t3ejhmZEZhBCqMkDZY3vTzmJ-2UkyRB7AhPIG4AR'
            image.src = `./src/image/sea-creatures/sea-creatures-${i}.jpg`
            a.href = articleURL
            section.classList.add('section')
            section.classList.add('wrapper')
            section.appendChild(h1)
            section.appendChild(image)
            section.appendChild(p) 
            a.appendChild(section)
            main.appendChild(a)
          }
        })
        .catch(err => {
          console.log("error has occurred")
          console.log(err)
        })





/***/ })

/******/ });