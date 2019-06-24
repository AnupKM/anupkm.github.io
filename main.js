(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");




var routes = [{ path: 'home', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__["MainpageComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'search-horse';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/listbox.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_listbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__["InputTextareaModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_10__["EditorModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_13__["ListboxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textareaWidth{\r\n    width: 20px;\r\n}\r\n\r\n#debug{\r\n    background-color:#EEE;\r\n}\r\n\r\n.buttonDivider{\r\n    width:5px;\r\n    height:auto;\r\n    display:inline-block;\r\n}\r\n\r\n.searchResultArea {\r\n    background-color:rgba(241, 236, 236, 0.897);\r\n  }\r\n\r\n.paragraphArea {\r\n    background-color:rgba(215, 236, 20, 0.993);\r\n  }\r\n\r\n.buttonPadding{\r\n  padding-right: 10px;\r\n  padding-left: 5px;  \r\n  }\r\n\r\n.citation{\r\n    background-color:rgba(26, 151, 15, 0.733);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksMkNBQTJDO0VBQzdDOztBQUVBO0lBQ0UsMENBQTBDO0VBQzVDOztBQUVBO0VBQ0EsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQjs7QUFFQTtJQUNFLHlDQUF5QztFQUMzQyIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWFXaWR0aHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4jZGVidWd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFRUU7XHJcbn1cclxuXHJcbi5idXR0b25EaXZpZGVye1xyXG4gICAgd2lkdGg6NXB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4uc2VhcmNoUmVzdWx0QXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQxLCAyMzYsIDIzNiwgMC44OTcpO1xyXG4gIH1cclxuXHJcbiAgLnBhcmFncmFwaEFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxNSwgMjM2LCAyMCwgMC45OTMpO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvblBhZGRpbmd7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDsgIFxyXG4gIH1cclxuXHJcbiAgLmNpdGF0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI2LCAxNTEsIDE1LCAwLjczMyk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<hr style=\"border-top:0px;border-color:#dde3e6\">\n\n<h2>Welcome to Search horse</h2>\n<h5>1. Copy text below or write it on your own.<br>\n2. Select the text(at least X words) you want to search.(for eg. of the morpheme)<br>\n3. Click Search button</h5>\n\n\n<div (mouseup)=\"showSelectedText()\">\n<p-editor id=\"ttt\" [(ngModel)]=\"textToSearch\" \n    [style]=\"{'height':'300px'}\" >\n    <p-header>\n        <span class=\"ql-formats\">\n            <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n            <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n            <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n             <button class=\"ql-font\" aria-label=\"Font\"></button>\n        </span>\n        <span class=\"ql-formats\">\n            <select class=\"ql-font\"></select>\n            <select class=\"ql-size\"></select>\n          </span>\n        <span class=\"ql-formats\">\n            <select class=\"ql-color\"></select>\n           <!--<select class=\"ql-background-r\"></select>--> \n        </span>            \n    </p-header>\n</p-editor>\n</div>\n<hr style=\"border-top:0px;border-color:#dde3e6\">\n\n\n\n\n\n<div class=\"content-section implementation\">\n<button pButton class=\"buttonPadding\" type=\"button\" label=\"Clear All\" icon=\"pi pi-times\" (click)=\"textToSearch=null ; selectedText=null\"></button>\n<button pButton type=\"button\" label=\"Search\" icon=\"pi pi-search\" (click)=\"searchClicked()\"></button>\n<!--<button pButton type=\"button\" label=\"Test\" icon=\"pi pi-search\" (click)=\"testClicked()\"></button>\n-->\n</div>\n<hr style=\"border-top:0px;border-color:#dde3e6\">\n\n<!--<p>Value: {{textToSearch||'empty'}}</p>-->\n<p>Text to search : {{selectedText||'empty'}}</p>\n<div  class=\"citation\" *ngIf=\"selectedRef\">\n    <p>Citation :- <br> {{selectedRef||'empty'}}</p>\n</div>\n\n\n<p-carousel headerText=\"Search Results\" [value]=\"this.service.searchList\">\n    <ng-template let-article pTemplate=\"item\">\n        <div class=\"ui-grid ui-grid-responsive searchResultArea\">           \n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-2\">Title : </div>\n                <div class=\"ui-grid-col-10\">{{article.title}}</div>\n            </div>\n            <hr>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-2\">Published Year : </div>\n                <div class=\"ui-grid-col-10\">{{article.yearPublished}}</div>\n            </div>\n            <hr>\n            <div class=\"ui-grid-row paragraphArea\">\n                    <div class=\"ui-grid-col-2\">Preview : </div>\n                    <div class=\"ui-grid-col-10\">{{article.paragraph}}</div>\n            </div>\n            <hr>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-2\">Authors : </div>\n                <div class=\"ui-grid-col-10\">{{article.authors}}</div>\n            </div>\n            <hr>\n            <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-12\">\n                <button type=\"button\" pButton label=\"View file\" icon=\"pi pi-file\" (click)=\"clickOpen(article)\"></button>\n                <button type=\"button\" pButton label=\"Get Citation\" icon=\"pi pi-download\" (click)=\"initCitation(article) ; addCitation()\"></button>         \n            </div>\n                \n            </div>\n        </div>\n    </ng-template>\n</p-carousel>\n\n<!--Pdf files Dailog box-->\n<p-dialog header=\"{{articleTitle}}\" [dismissableMask]=\"true\" [blockScroll]=\"true\" [closeOnEscape]=\"true\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" \n        [maximizable]=\"true\" >\n        <iframe height=\"750px\" width=\"1000px\" [src]=\"urlFrame\"  frameborder=\"0\" allowfullscreen ></iframe> \n        <p-footer>\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"addCitation()\" label=\"Get Citation\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"Cancel\"  class=\"ui-button-secondary\"></button>\n        </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search.service */ "./src/app/service/search.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.textToSearch = '';
        this.selectedText = '';
        this.referenceList = [];
        //Boolean for dailog
        this.display = false;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var url = 'https://www.aclweb.org/anthology/';
        this.urlFrame = this.getSafeUrl(url);
        console.log(this.urlFrame);
        this.selectedRef = '';
        //this.service.getUserList();
        //this.userList = this.service.userList;
        //console.log(this.service.userList);
        //this.service.postPost();
    };
    MainpageComponent.prototype.showDialog = function () {
        this.display = true;
    };
    MainpageComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    MainpageComponent.prototype.testClicked = function () {
    };
    MainpageComponent.prototype.searchClicked = function () {
        console.log("searching text" + this.selectedText);
        this.selectedRef = '';
        this.service.searchText(this.selectedText);
    };
    MainpageComponent.prototype.clickOpen = function (article) {
        this.articleTitle = '';
        this.articleTitle = article.title;
        this.initCitation(article);
        console.log("Citation initialized :- " + this.citation);
        this.urlFrame = this.getSafeUrl(article.pdfUrl);
        this.showDialog();
    };
    MainpageComponent.prototype.initCitation = function (article) {
        console.log(article.title);
        console.log(article.authors);
        console.log(article.yearPublished);
        console.log(article.pdfUrl);
        this.citation = '';
        this.citation = article.title + " (" + article.yearPublished
            + "), [" + article.authors + "], " + article.pdfUrl;
        console.log("Citation initialized :- " + this.citation);
    };
    MainpageComponent.prototype.addCitation = function () {
        console.log("Adding Citation :- " + this.citation);
        /**
        if(!this.referenceList.includes(this.citation)){
          this.referenceList.push(this.citation);
          console.log(this.referenceList);
        }else{
          console.log("Citation exists already");
        }
        */
        this.selectedRef = this.citation;
        //let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
        this.hideDialog();
    };
    /**
     * previewUrl(url,target){
        //use timeout coz mousehover fires several times
        clearTimeout(window.);
        window.ht = setTimeout(function(){
            var div = document.getElementById(target);
            div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />';
        },20);
    }
     */
    MainpageComponent.prototype.checkArrayDuplicates = function (arrayy) {
    };
    MainpageComponent.prototype.showSelectedText = function () {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        }
        this.selectedText = text;
    };
    // to remove error : Error: unsafe value used in a resource URL context
    MainpageComponent.prototype.getSafeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/model/post.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/post.model.ts ***!
  \*************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/model/textPost.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/textPost.model.ts ***!
  \*****************************************/
/*! exports provided: TextPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPost", function() { return TextPost; });
var TextPost = /** @class */ (function () {
    function TextPost() {
    }
    return TextPost;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_textPost_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/textPost.model */ "./src/app/model/textPost.model.ts");






var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = "https://jsonplaceholder.typicode.com/users";
        console.log('rest service constructor called');
    }
    HttpService.prototype.getMethod = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.putMethod = function (url, id) {
        var param1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('userId', id);
        return this.http.get(url, { params: param1 });
    };
    HttpService.prototype.postMethod = function (url, post) {
        return this.http.post(url, post);
    };
    HttpService.prototype.post2Method = function (url, textToPost) {
        console.log("posting ---> " + _model_textPost_model__WEBPACK_IMPORTED_MODULE_5__["TextPost"] + "in URL :- " + url);
        return this.http.post(url, textToPost);
    };
    HttpService.prototype.getMethod1 = function (ip, options) {
        console.log('options is: ', options);
        options['observe'] = 'response';
        return this.http.get(ip, options);
    };
    HttpService.prototype.postMethod3 = function (ip, body, options) {
        options['observe'] = 'response';
        return this.http.post(ip, JSON.stringify(body), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('post request for ' + ip)));
    };
    HttpService.prototype.getMethod3 = function (ip, options) {
        //this.loading = true;
        options['observe'] = 'response';
        options['responseType'] = 'json';
        return this.http.get(ip, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            //this.loading = false;
            console.log('response is: ', response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('get request for ' + ip)));
    };
    HttpService.prototype.deleteMethod3 = function (ip, options) {
        options['observe'] = 'response';
        options['responseType'] = 'json';
        options.headers = this.getHeaders();
        return this.http.delete(ip, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('response is: ', response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('delete request for ' + ip)));
    };
    HttpService.prototype.getHeaders = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return header;
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instea
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/post.model */ "./src/app/model/post.model.ts");
/* harmony import */ var _model_textPost_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/textPost.model */ "./src/app/model/textPost.model.ts");






var SearchService = /** @class */ (function () {
    //http://localhost:8080/main/fullsearch POST string
    function SearchService(rest) {
        this.rest = rest;
        this.postToPost = new _model_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"]();
        //searchUrl = "https://jsonplaceholder.typicode.com/users";
        this.postUrl = "https://jsonplaceholder.typicode.com/posts";
        this.postTextURL = "http://localhost:8080/main/fullSearch";
        this.textToPost = new _model_textPost_model__WEBPACK_IMPORTED_MODULE_5__["TextPost"]();
    }
    //getUserList() {    
    // return this.rest.getMethod(this.searchUrl).subscribe(data => {
    //   this.userList = data;
    // });
    //}
    SearchService.prototype.searchText = function (text) {
        var _this = this;
        this.textToPost.text = text;
        console.log("inside searchText(text) ...text = " + text);
        console.log("in url ... = " + this.postTextURL);
        this.rest.post2Method(this.postTextURL, this.textToPost).subscribe(function (data) {
            console.log("here");
            //this.responseString = data;
            console.log(data);
            //console.log(this.responseString);
            _this.searchList = data;
        });
    };
    SearchService.prototype.searchText3 = function (text) {
        this.textToPost.text = text;
        console.log("inside searchText(text) ...text = " + text);
        console.log("in url ... = " + this.postTextURL);
        this.rest.postMethod3(this.postTextURL, this.textToPost, { headers: this.getHeaders() }).subscribe(function (data) {
            console.log("here");
            //this.responseString = data;
            console.log(data);
            //console.log(this.responseString);
        });
    };
    SearchService.prototype.postPost = function () {
        //this.postToPost.body="test";
        //this.postToPost.title="testTitle";
        //this.postToPost.userId=5;
        var _this = this;
        this.rest.postMethod(this.postUrl, this.postToPost).subscribe(function (data) {
            _this.postGot = data;
            console.log(_this.postGot.body);
        });
    };
    SearchService.prototype.getHeaders = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return header;
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BachelorArbeit\search-horse\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map