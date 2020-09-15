(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cube/cube.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cube/cube.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"scene size\">\n\n  <!-- menu -->\n  <div class=\"row show size\" style=\"position: absolute !important;\">\n    <div class=\"col\">\n\n      <div class=\"row justify-content-end show\" style=\"position: absolute;width: 100%;height: 70px;\">\n      \n        <div class=\"col-4\" style=\"display: flex;margin-right: 50px !important;\">\n          <div class=\"col link-container\">\n            <a href=\"#home\">\n              <h3>Home</h3>\n            </a>\n          </div>\n          <div class=\"col link-container\">\n            <a href=\"#services\">\n              <h3>Services</h3>\n            </a>\n          </div>\n          <div class=\"col link-container\">\n            <a href=\"#contact\">\n              <h3>Contacto</h3>\n            </a>\n          </div>\n          <div class=\"col link-container\">\n            <a href=\"#portafolio\">\n              <img src=\"../../../assets/slider/carrito.svg\" style=\"width: 40px;\" alt=\"\">\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"height: 100%;\" class=\"row\">\n        <div class=\"col\" style=\"display: flex;justify-content: center;overflow: hidden;\">\n          <img src=\"../../../assets/slider/chica.png\" style=\"height: 503px;align-self: flex-end;\" />\n\n          <!-- titles -->\n          <div class=\"cube titles size\" #titles>\n            <div *ngFor=\"let n of places\" class=\"title-face size\" >\n              <h1 class=\"flotating-title\">{{n.text}}</h1>\n            </div>\n          </div>\n\n        </div>\n        <!-- <div style=\"display: flex;\">\n          <div class=\"button show\" style=\"margin-right: 25px !important;align-self: center;position: relative;\"></div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n\n  <!-- images -->\n  <div class=\"cube size\" #imgs>\n\n    <div *ngFor=\"let n of places\" class=\"cube__face size\">\n      <div class=\"img size\" [style.backgroundImage]=\"'url('+n.img+')'\">\n      </div>\n    </div>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/form/form.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/form/form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 100vh;\">\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" class=\"example-full-width global-margin\">\n        <h1 style=\"font-family: Montserrat-ExtraBold;\">Contacto</h1>\n        <div class=\"col\">\n\n            <div class=\"row form-input\">\n                <label>EMAIL</label>\n                <br>\n                <input matInput placeholder=\"example@mail.com\" name=\"to\" type=\"email\" ngModel required>\n            </div>\n\n            <div class=\"row form-input\">\n                <label>ASUNTO</label>\n                <br>\n                <input matInput placeholder=\"Contact me\" name=\"subject\" ngModel required>\n            </div>\n\n            <div class=\"row form-input\">\n                <label>MENSAJE</label>\n                <br>\n                <textarea matInput placeholder=\"Add here your message...\" rows=\"10\" name=\"text\" ngModel required></textarea>\n            </div>\n            <div class=\"row form-input\">\n                <button mat-raised-button [disabled]=\"!form.valid\">ENVIAR</button>\n            </div>\n            <div class=\"row\">\n                <h4>{{message}}</h4>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/level-circles/level-circles.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/level-circles/level-circles.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div style=\"margin-left: 15px !important;\"></div>\n    <div *ngFor=\"let circle of circles\" [ngClass]=\"circle\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/portafolio-example1/portafolio-example1.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/portafolio-example1/portafolio-example1.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div>\n        <pre>\n            <h4 class=\"global-margin\" style=\"font-family: Montserrat;\">{{title}}</h4>\n        </pre>\n        <div class=\"line\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/portafolio/portafolio.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/portafolio/portafolio.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 50px;\">\n    <div class=\"col-8 global-margin\">\n        <h1 style=\"font-family: Montserrat-ExtraBold;\">Portafolio</h1>\n        <h5 style=\"font-family: Montserrat;\">\n            Aqui podras encontrar mis trabajos mas recientes y emblematicos.\n        </h5>\n    </div>\n    <div class=\"col\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile-card/profile-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile-card/profile-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-auto global-margin\" style=\"margin-top: 100px !important;\">\n    <div class=\"row\">\n        <h1 style=\"font-family: Montserrat-ExtraBold;\">QUIEN SOY</h1>\n    </div>\n    <div class=\"row justify-content-center\"\n        style=\"margin-top: 30px !important;font-family: Myriad-Pro-Regular;min-height: 300px;max-height: 300px !important;height: 300px;\">\n\n        <div class=\"col-auto\">\n            <img src=\"../../../assets/profile-picture.jpg\" style=\"width: 250px;border-radius: 50px 0px 0px 5px;\" alt=\"\">\n        </div>\n\n        <div class=\"col description-container\">\n            <div style=\"height: 300px\" #container>\n\n                <!-- quien soy? -->\n                <div class=\"description-content center portafolio\">\n                    <div class=\"col\">\n                        <h4 class=\"title\">\n                            Marcelo Antonio Gil\n                        </h4>\n                        <h6 style=\"margin-left: 40px !important;margin-right: 40px\">\n                            Programador Freelancer, las cuales he desenpeñado mi trabajo en <span\n                                style=\"font-family: Myriad-Pro-Bold;\">2 empresas</span> a lo largo de mi\n                            formacion\n                            adopte conocimientos para <span style=\"font-family: Myriad-Pro-Bold;\">Diseño de Base de\n                                Datos</span>, diseño de sistemas y procedimientos de\n                            creacion de\n                            <span style=\"font-family: Myriad-Pro-Bold;\">Software Administrativos</span>, Tengo facilidad\n                            para\n                            resolver problemas y me gusta trabajar en\n                            equipo.\n                            <br>\n                            <span style=\"font-family: Myriad-Pro-Bold;\">Front-End</span>/ <span\n                                style=\"font-family: Myriad-Pro-Bold;\">Back-End</span>\n                        </h6>\n                    </div>\n                </div>\n\n                <!--  -->\n                <div class=\"description-content center birrete\">\n                    <div class=\"col\">\n                        <h4  class=\"title\">\n                            Formación Profesional\n                        </h4>\n                        <!-- 1 -->\n                        <div class=\"row\">\n                            <div class=\"col-auto center\">\n                                <div class=\"circle\"></div>\n                            </div>\n                            <div class=\"col-auto\">\n                                <div class=\"row\">\n                                    <h5>2013 Titulo Bachiller ( U.E.P Santa Ana de Jesus.)</h5>\n                                </div>\n                                <div class=\"row\">\n                                    <h6>San Francisco-Venezuela</h6>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- 2 -->\n                        <div class=\"row\">\n                            <div class=\"col-auto center\">\n                                <div class=\"circle\"></div>\n                            </div>\n                            <div class=\"col-auto\">\n                                <div class=\"row\">\n                                    <h5>2013 Titulo Ingles Avanzado (C.E.V.A.Z.)</h5>\n                                </div>\n                                <div class=\"row\">\n                                    <h6>San Francisco-Venezuela</h6>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- 3 -->\n                        <div class=\"row\">\n                            <div class=\"col-auto center\">\n                                <div class=\"circle\"></div>\n                            </div>\n                            <div class=\"col-auto\">\n                                <div class=\"row\">\n                                    <h5>2013 Titulo Ing. Informatica ( U.R.B.E.)</h5>\n                                </div>\n                                <div class=\"row\">\n                                    <h6>Maracaibo-Venezuela</h6>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- done -->\n                    </div>\n                </div>\n                <!--  -->\n\n                <div class=\"description-content center portafolio\">\n                    <div class=\"col\">\n                        <div class=\"row\">\n                            <h4  class=\"title\">\n                                Idiomas\n                            </h4>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col\" style=\"margin-left: 40px !important\">\n                                <div class=\"row\">\n                                    <div style=\"display: flex;\">\n                                        <div class=\"row\">\n                                            <div class=\"col-auto\" style=\"align-items: flex-end;display: flex;\">\n                                                <h5 style=\"margin: 0em;margin-right: 10px;\">Español</h5>\n                                            </div>\n                                            <div class=\"col-auto\">\n                                                <h6>Lengua Materna</h6>\n                                                <div class=\"progres-bar\">\n                                                    <div [ngClass]=\"['progres',progresing]\" style=\"width: 100%;\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-7\" style=\"margin-left: 40px !important\">\n                                <div class=\"row\">\n                                    <div style=\"display: flex;\">\n                                        <div class=\"row\">\n                                            <div class=\"col-auto\" style=\"align-items: flex-end;display: flex;\">\n                                                <h5 style=\"margin: 0em;margin-right: 10px;\">Ingles</h5>\n                                            </div>\n                                            <div class=\"col-auto\">\n                                                <h6>B1</h6>\n                                                <div class=\"progres-bar\">\n                                                    <div [ngClass]=\"['progres',progresing]\" style=\"width: 80%;\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <h4 style=\"margin-left: 40px !important;margin-top: 40px; color: #5227fd\">\n                                Hobbies\n                            </h4>\n                        </div>\n                        <div class=\"row\">\n                            <img src=\"../../../assets/music.svg\" class=\"hobbie\" style=\"margin-left: 40px;\" alt=\"\">\n                            <img src=\"../../../assets/movie.svg\" class=\"hobbie\" style=\"margin-left: 40px;\" alt=\"\">\n                            <img src=\"../../../assets/pc.svg\" class=\"hobbie\" style=\"margin-left: 40px;\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\"></div>\n        <div class=\"col\" style=\"display: flex;justify-content: center; align-items: flex-end;\">\n            <div class=\"description-button center\" (click)=\"change()\">\n                <img [ngClass]=\"profile_arrow\" style=\"height: 40%;\" src=\"../../../assets/doble-flecha.svg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services/services.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services/services.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-between\" style=\"height: 300px;background-color: rgb(232, 238, 255);\">\n    <div class=\"col-auto global-margin\">\n        <div class=\"row\">\n            <h1 style=\"font-family: Montserrat-ExtraBold;margin-top: 20px;\">Servicios</h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <h4 style=\"font-family: Montserrat;\">\n                    Implementación de <span>Plantillas</span>\n                    <br>\n                    Implementación de Diseño,\n                    <br>\n                    <span>API REST</span>, Diseño de <span>Base de Datos</span>.\n                </h4>\n                <h5>\n                    <br>\n                    Dejalo en la mano de los expertos.\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6 code-img\">\n        <img style=\"width: 100%;\" src=\"../../../assets/servicios.jpg\" alt=\"\">\n    </div>\n</div>\n<div class=\"row\">\n    <a href=\"#contacto\">\n        <div class=\"col-auto button global-margin\" >\n            <h5 style=\"margin: 0px;\">CONTACTO</h5>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slider/slider.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slider/slider.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 30px !important;\">\n    <div class=\"arrow-container\">\n        <div class=\"arrow left-arrow\" (click)=\"left()\">\n            <img src=\"../../../assets/left-arrow.png\" alt=\"\" style=\"height: 15px;\">\n        </div>\n    </div>\n    <div class=\"col\" style=\"overflow: hidden;padding: 1% !important;\">\n        <div class=\"programing-language selected-programing-language\"></div>\n        <div class=\"slider_content\" #slider_content>\n            <div *ngFor=\"let language of languages\" class=\"item\">\n                <div class=\"programing-language\">\n                    <div class=\"row\">\n                        <img [src]=\"language.icon\" class=\"programing-language-icon\" />\n                    </div>\n                    <div class=\"row\">\n                        <h2\n                            style=\"margin-top: 10px;margin-left: 15px;font-family: Montserrat-ExtraBold;font-size: 20px;\">\n                            {{language.name}}</h2>\n                    </div>\n                    <div class=\"row\">\n                        <h6 style=\"margin-left: 15px;font-size: 15px;font-family: Myriad-Pro-Regular;\">Nivel de\n                            Conocimiento.</h6>\n                    </div>\n                    <app-level-circles [levels]='language.level'></app-level-circles>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"arrow-container\">\n        <div class=\"arrow right-arrow\" (click)=\"right()\">\n            <img src=\"../../../assets/right-arrow.png\" alt=\"\" style=\"height: 15px;\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo-list/todo-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo-list/todo-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let todo of todoList\">\n        <app-todo></app-todo>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo/todo.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo/todo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row todo_container\">\n\n\n    <div class=\"col container\">\n        <div class=\"col verticalLine goRight\">\n        </div>\n\n        <div class=\"col verticalLine goLeft\">\n        </div>\n\n         <div class=\"col horizontalLine goDown\">\n        </div>\n\n        <div class=\"col horizontalLine goUp\">\n        </div>\n        <div class=\"circle\"></div>\n\n    </div>\n\n    <div class=\"col container2\">\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\" class=\"cointainer\">\n    <img src=\"../../assets/bg.jpg\" class=\"bg\" alt=\"bg\">\n    <app-header></app-header>\n    <div class=\"row  justify-content-between\">\n        <div class=\"col-auto global-margin\" style=\"overflow: hidden;\">\n            <div class=\"header-text-container animated-space center\">\n                <div>\n                    <div class=\"row line\"></div>\n                    <div class=\"row\">\n                        <h2 style=\"font-family: Montserrat;\">PROGRAMADOR</h2>\n                    </div>\n                    <div class=\"row\">\n                        <h1 style=\"font-family: Montserrat-ExtraBold;font-size: 3em;\">WEB FULL STACK</h1>\n                    </div>\n                    <div class=\"row\" style=\"font-family: Montserrat;\">\n                        4 Años de experiencia Programando Software Administrativo\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-between\"\n                style=\"font-family: Montserrat-ExtraBold;margin-top: 30px !important;\">\n                <div class=\"col-auto\">\n                    <h4>Responsable</h4>\n                </div>\n                <div class=\"col-auto\">\n                    <h4>Constante</h4>\n\n                </div>\n                <div class=\"col-auto\">\n                    <h4>Eficaz</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-auto\" style=\"overflow: hidden;\">\n            <img src=\"../../assets/photo.jpg\" class=\"photo\" alt=\"\">\n        </div>\n    </div>\n</section>\n<br>\n<section>\n    <div class=\"col-auto\" style=\"margin-left: 50px !important;\">\n        <div class=\"row\">\n            <div class=\"col-auto\">\n                <h5 style=\"font-family: Myriad-Pro-Regular;\">Lenguajes De</h5>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-auto\">\n                <h1 style=\"font-family: Montserrat-ExtraBold;\">Programación</h1>\n            </div>\n        </div>\n        <app-slider></app-slider>\n    </div>\n</section>\n<br>\n<section id=\"quien_soy\">\n    <app-profile-card></app-profile-card>\n</section>\n<br>\n<section id=\"services\">\n    <app-services></app-services>\n</section>\n<br>\n<section id=\"portafolio\">\n    <app-portafolio></app-portafolio>\n</section>\n<section>\n    <app-portafolio-example1 [title]=\"title1\"></app-portafolio-example1>\n    <app-cube></app-cube>\n</section>\n<section>\n    <div style=\"width: 100%;height: 100vh;\">\n    <app-portafolio-example1 [title]=\"title2\"></app-portafolio-example1>\n        <img src=\"../../assets/portafolio.png\" style=\"width: 100%;\" alt=\"\">\n    </div>\n</section>\n<section id=\"contact\">\n    <app-form></app-form>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mandatory/login/login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mandatory/login/login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"login\">\n    <h3 class=\"text-center text-white pt-5\">Login form</h3>\n    <div class=\"container\">\n        <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\n            <div id=\"login-column\" class=\"col-md-6\">\n                <div id=\"login-box\" class=\"col-md-12 animation\">\n\n                    <form id=\"login-form\" class=\"form\">\n                        <h3 class=\"text-center ti\">Login</h3>\n                        <div class=\"form-group\">\n                            <label for=\"username\" class=\"ti\">Username:</label><br>\n                            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\" class=\"ti\">Password:</label><br>\n                            <input type=\"text\" name=\"password\" id=\"password\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"remember-me\" class=\"ti\"><span>Remember me</span> <span><input\n                                        id=\"remember-me\" name=\"remember-me\" type=\"checkbox\"></span></label><br>\n                            <input type=\"submit\" name=\"submit\" class=\"btn btn-info btn-md\" value=\"submit\">\n                        </div>\n                        <div id=\"register-link\" class=\"text-right\">\n                            <a href=\"#\" class=\"ti\">Register here</a>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-auto\">\n            <a href=\"https://bootsnipp.com/snippets/bxzmb\" style=\"color: white;\">credit for this login</a>\n        </div>\n    </div>\n</div> -->\n\n<app-cube></app-cube>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mandatory/not-found/not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mandatory/not-found/not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header justify-content-between\">\n  <div class=\"col-auto\" style=\"margin-left: 50px !important;margin-top: 2vh !important;\">\n    <h6 style=\"margin: 0em;\">MARCELO ANTONIO GIL OCHOA</h6>\n    <p style=\"margin: 0em;\">Ing. Informatico</p>\n  </div>\n  <div class=\"col-5\" style=\"margin-right: 100px !important;font-family: Montserrat; font-size: 20px;\">\n    <div class=\"row  justify-content-between\">\n      <div class=\"col-auto link\">\n        <a href=\"#quien_soy\">QUIEN SOY</a>\n      </div>\n      <div class=\"col-auto link\">\n        <a href=\"#services\">SERVICIOS</a>\n      </div>\n      <div class=\"col-auto link\">\n        <a href=\"#contact\">CONTACTO</a>\n      </div>\n      <div class=\"col-auto link\">\n        <a href=\"#portafolio\">PORTAFOLIO</a>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _mandatory_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mandatory/login/login.component */ "./src/app/mandatory/login/login.component.ts");




const routes = [{
        path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        children: [
            { path: 'todo/login', component: _mandatory_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            // { path: 'main', component: MainComponent, canActivate: [TokenGuard] },
            { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
            { path: '', redirectTo: "/main", pathMatch: 'full' },
            { path: 'todo', redirectTo: "/todo/login", pathMatch: 'full' },
            { path: '**', redirectTo: '/main', pathMatch: 'full' }
        ]
    }];
const AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cv';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _mandatory_mandatory_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mandatory/mandatory.module */ "./src/app/mandatory/mandatory.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _mandatory_mandatory_module__WEBPACK_IMPORTED_MODULE_8__["MandatoryModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _cube_cube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cube/cube.component */ "./src/app/components/cube/cube.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _level_circles_level_circles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./level-circles/level-circles.component */ "./src/app/components/level-circles/level-circles.component.ts");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "./src/app/components/profile-card/profile-card.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "./src/app/components/portafolio/portafolio.component.ts");
/* harmony import */ var _portafolio_example1_portafolio_example1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portafolio-example1/portafolio-example1.component */ "./src/app/components/portafolio-example1/portafolio-example1.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");

















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _cube_cube_component__WEBPACK_IMPORTED_MODULE_5__["CubeComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"], _level_circles_level_circles_component__WEBPACK_IMPORTED_MODULE_7__["LevelCirclesComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_8__["ProfileCardComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"], _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_10__["PortafolioComponent"], _portafolio_example1_portafolio_example1_component__WEBPACK_IMPORTED_MODULE_11__["PortafolioExample1Component"], _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"]],
        exports: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], _cube_cube_component__WEBPACK_IMPORTED_MODULE_5__["CubeComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"], _level_circles_level_circles_component__WEBPACK_IMPORTED_MODULE_7__["LevelCirclesComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_8__["ProfileCardComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"], _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_10__["PortafolioComponent"], _portafolio_example1_portafolio_example1_component__WEBPACK_IMPORTED_MODULE_11__["PortafolioExample1Component"], _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/cube/cube.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cube/cube.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { box-sizing: border-box; }\r\n\r\nbody,html,div { font-family: sans-serif;margin: 0em; padding: 0em;}\r\n\r\n.size{\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.scene {\r\n  margin: 0cm !important;\r\n  overflow: hidden;\r\n  -ms-overflow-style: none;\r\n  scrollbar-width: none;\r\n}\r\n\r\n.scene::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.cube {\r\n  \r\n}\r\n\r\nh3{\r\n  font-size: 18px;\r\n}\r\n\r\n.titles{\r\n  /* z-index: 9999; */\r\n  position: absolute;\r\n  height: 100%;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n.link-container:hover{\r\n  background-color: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.link-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: black;\r\n  align-self: flex-end;\r\n  justify-self: center;\r\n}\r\n\r\n.cube__face {\r\n  display: flex;\r\n  justify-content: center;\r\n  box-shadow: inset  black -5px 5px 20px -5px;\r\n\r\n}\r\n\r\n.img{\r\n  box-shadow: inset  black -5px 5px 20px -5px;\r\n  /* background-image: url('../../../assets/prueba.png'); */\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.title-face{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.button{\r\n  width: 50px;\r\n  height: 50px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-radius: 100%;\r\n  border-color: white;\r\n  align-self: center;\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n.flotating-title{\r\n  color: white;\r\n  position: absolute;\r\n  align-self: center;\r\n  font-size: 100px;\r\n  text-shadow: 0px 0px 20px black;\r\n  font-family: Harabara-Mais-Demo;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdWJlL2N1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLHNCQUFzQixFQUFFOztBQUU1QixnQkFBZ0IsdUJBQXVCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQzs7QUFFbEU7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQ0FBMkM7O0FBRTdDOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHlEQUF5RDtFQUN6RCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3ViZS9jdWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG5cclxuYm9keSxodG1sLGRpdiB7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO21hcmdpbjogMGVtOyBwYWRkaW5nOiAwZW07fVxyXG5cclxuLnNpemV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uc2NlbmUge1xyXG4gIG1hcmdpbjogMGNtICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG59XHJcblxyXG4uc2NlbmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY3ViZSB7XHJcbiAgXHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRpdGxlc3tcclxuICAvKiB6LWluZGV4OiA5OTk5OyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuLmxpbmstY29udGFpbmVyOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcbi5saW5rLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY3ViZV9fZmFjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBpbnNldCAgYmxhY2sgLTVweCA1cHggMjBweCAtNXB4O1xyXG5cclxufVxyXG5cclxuLmltZ3tcclxuICBib3gtc2hhZG93OiBpbnNldCAgYmxhY2sgLTVweCA1cHggMjBweCAtNXB4O1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BydWViYS5wbmcnKTsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLWZhY2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mbG90YXRpbmctdGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBIYXJhYmFyYS1NYWlzLURlbW87XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cube/cube.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cube/cube.component.ts ***!
  \***************************************************/
/*! exports provided: CubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeComponent", function() { return CubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CubeComponent = class CubeComponent {
    constructor() {
        this.places = [
            {
                img: '../../../assets/slider/01.png',
                text: 'UNITED STATES'
            },
            {
                img: '../../../assets/slider/02.png',
                text: 'JAPAN'
            },
            {
                img: '../../../assets/slider/5118.jpg',
                text: 'FRANCE'
            },
            {
                img: '../../../assets/slider/04.png',
                text: 'NORWAY'
            }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.addAnimation(this.imgs);
        this.addAnimation(this.titles);
    }
    addAnimation(element) {
        var current_item = 0;
        var direction = -1;
        setInterval(() => {
            let len = this.places.length - 1;
            if (-len == current_item) {
                direction = 1;
            }
            else if (current_item >= 0) {
                direction = -1;
            }
            element.nativeElement.animate([
                { transform: "translateY(" + current_item + "00%)" },
                { transform: "translateY(" + (current_item + direction) + "00%)" }
            ], {
                duration: 2000,
                fill: 'forwards'
            });
            current_item = current_item + direction;
        }, 4000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imgs', { static: false })
], CubeComponent.prototype, "imgs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titles', { static: false })
], CubeComponent.prototype, "titles", void 0);
CubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cube',
        template: __webpack_require__(/*! raw-loader!./cube.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cube/cube.component.html"),
        styles: [__webpack_require__(/*! ./cube.component.css */ "./src/app/components/cube/cube.component.css")]
    })
], CubeComponent);



/***/ }),

/***/ "./src/app/components/form/form.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/form/form.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 50%;\r\n  }\r\n  \r\n  input, textarea{\r\n    width: 100%;\r\n    outline: none !important;\r\n    border: none;\r\n    border-bottom: 5px grey solid;\r\n    background-color: #f8f8fa !important;\r\n  }\r\n  \r\n  .form-input{\r\n      margin-top: 30px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG9DQUFvQztFQUN0Qzs7RUFHQTtNQUNJLDJCQUEyQjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIGlucHV0LCB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IGdyZXkgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZhICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuIFxyXG4gIC5mb3JtLWlucHV0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let FormComponent = class FormComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.sent = false;
        this.message = '';
    }
    ngOnInit() {
    }
    onSubmit(form) {
        console.log(form.value);
        if (form.valid) {
            this.apiService.post(form.value).subscribe(res => {
                this.sent = true;
                this.message = 'Send Succesfully, please await for the answer';
                // form.resetForm();
            }, (err) => {
                console.log(err.status);
                switch (err.status) {
                    case 400:
                        this.message = `You already sent an email in the last hour, for spam prevention you can not use the Email: ${form.value.to}, please message me at the following Email: majg8a@gmail.com, or use a different Email`;
                        break;
                    case 500:
                        this.message = `The Email: ${form.value.to} is not valid please use another one`;
                        break;
                }
            });
        }
    }
};
FormComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/components/form/form.component.css")]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/components/level-circles/level-circles.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/level-circles/level-circles.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle{\r\n    width: 23px;\r\n    height: 23px;\r\n    border-radius: 100%;\r\n    background-color: #d3d3d3;\r\n    margin-right: 10px !important;\r\n}\r\n\r\n.selected{\r\n    background-color: #5227fd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZXZlbC1jaXJjbGVzL2xldmVsLWNpcmNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xldmVsLWNpcmNsZXMvbGV2ZWwtY2lyY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZXtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjdmZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/level-circles/level-circles.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/level-circles/level-circles.component.ts ***!
  \*********************************************************************/
/*! exports provided: LevelCirclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelCirclesComponent", function() { return LevelCirclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LevelCirclesComponent = class LevelCirclesComponent {
    constructor() {
        this.circles = ['circle', 'circle', 'circle', 'circle', 'circle'];
    }
    ngOnInit() {
        for (let i = 0; i < this.circles.length; i++) {
            if (i < this.levels) {
                this.circles[i] = this.circles[i] + ' selected';
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LevelCirclesComponent.prototype, "levels", void 0);
LevelCirclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-level-circles',
        template: __webpack_require__(/*! raw-loader!./level-circles.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/level-circles/level-circles.component.html"),
        styles: [__webpack_require__(/*! ./level-circles.component.css */ "./src/app/components/level-circles/level-circles.component.css")]
    })
], LevelCirclesComponent);



/***/ }),

/***/ "./src/app/components/portafolio-example1/portafolio-example1.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/portafolio-example1/portafolio-example1.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line{\r\n    background-color: #5227fd;\r\n    height: 10px;\r\n    width: 300px;\r\n    margin-bottom: 25px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0YWZvbGlvLWV4YW1wbGUxL3BvcnRhZm9saW8tZXhhbXBsZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGFmb2xpby1leGFtcGxlMS9wb3J0YWZvbGlvLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjI3ZmQ7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/portafolio-example1/portafolio-example1.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/portafolio-example1/portafolio-example1.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PortafolioExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioExample1Component", function() { return PortafolioExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortafolioExample1Component = class PortafolioExample1Component {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PortafolioExample1Component.prototype, "title", void 0);
PortafolioExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portafolio-example1',
        template: __webpack_require__(/*! raw-loader!./portafolio-example1.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/portafolio-example1/portafolio-example1.component.html"),
        styles: [__webpack_require__(/*! ./portafolio-example1.component.css */ "./src/app/components/portafolio-example1/portafolio-example1.component.css")]
    })
], PortafolioExample1Component);



/***/ }),

/***/ "./src/app/components/portafolio/portafolio.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/portafolio/portafolio.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/portafolio/portafolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/portafolio/portafolio.component.ts ***!
  \***************************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortafolioComponent = class PortafolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortafolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portafolio',
        template: __webpack_require__(/*! raw-loader!./portafolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/portafolio/portafolio.component.html"),
        styles: [__webpack_require__(/*! ./portafolio.component.css */ "./src/app/components/portafolio/portafolio.component.css")]
    })
], PortafolioComponent);



/***/ }),

/***/ "./src/app/components/profile-card/profile-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/profile-card/profile-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description-button{\r\n    min-width: 50px;\r\n    height: 50px;\r\n    background-color: #5227fd;\r\n    border-radius: 100%;\r\n    transform: translate(0,-50%);\r\n    border-width: 3px 3px 3px 3px;\r\n    border-color: white;\r\n    border-style: solid;\r\n    box-shadow: black -5px 5px 10px -5px;\r\n}\r\n.description-container{\r\n    background-color: white;\r\n    margin-right: 50px !important;\r\n    box-shadow: black 0px 1px 5px -3px;\r\n    overflow: hidden;\r\n    border-radius: 0px 15px 15px 0px;\r\n}\r\n.description-content{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.circle{\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 100%;\r\n    background-color: #d3d3d3;\r\n    margin-left: 40px !important;\r\n    margin-right: 20px !important;\r\n}\r\n.progres-bar{\r\n    width: 200px;\r\n    background-color: #d3d3d3;\r\n    height: 20px;\r\n    overflow: hidden;\r\n}\r\n.progres{\r\n    height: 100%;\r\n    background-color: #5227fd;\r\n    transform: translateX(-100%);\r\n}\r\n.progresing{\r\n    -webkit-animation: progresing 1s forwards;\r\n            animation: progresing 1s forwards;\r\n}\r\n.birrete{\r\n    background-image: url('birrete.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: auto 70%;\r\n    background-position: 90%;\r\n}\r\n.portafolio{\r\n    background-image: url('portafolio.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: auto 70%;\r\n    background-position: 90%;\r\n}\r\n.hobbie{\r\n    width: 50px;\r\n}\r\n.arrow-up{\r\n    -webkit-animation: arrow-up 1s forwards;\r\n            animation: arrow-up 1s forwards;\r\n}\r\n.arrow-down{\r\n    -webkit-animation: arrow-down 1s forwards;\r\n            animation: arrow-down 1s forwards;\r\n}\r\n.title{\r\n    margin-left: 40px !important;\r\n    color: #5227fd;\r\n}\r\n@-webkit-keyframes arrow-up{\r\n    0%{\r\n        transform: rotateZ(0deg);\r\n    }\r\n\r\n    100%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n}\r\n@keyframes arrow-up{\r\n    0%{\r\n        transform: rotateZ(0deg);\r\n    }\r\n\r\n    100%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n}\r\n@-webkit-keyframes arrow-down{\r\n    0%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n\r\n    100%{\r\n        transform: rotateZ(0deg);\r\n    }\r\n}\r\n@keyframes arrow-down{\r\n    0%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n\r\n    100%{\r\n        transform: rotateZ(0deg);\r\n    }\r\n}\r\n@-webkit-keyframes progresing{\r\n    0%{\r\n        transform: translateX(-100%);\r\n    }\r\n    \r\n    100%{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n@keyframes progresing{\r\n    0%{\r\n        transform: translateX(-100%);\r\n    }\r\n    \r\n    100%{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWNhcmQvcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLG9DQUFvRDtJQUNwRCw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksdUNBQXVEO0lBQ3ZELDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBUkE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBUkE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKO0FBUkE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWNhcmQvcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzY3JpcHRpb24tYnV0dG9ue1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjdmZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IGJsYWNrIC01cHggNXB4IDEwcHggLTVweDtcclxufVxyXG4uZGVzY3JpcHRpb24tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IGJsYWNrIDBweCAxcHggNXB4IC0zcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNpcmNsZXtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2dyZXMtYmFye1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9ncmVze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjdmZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzaW5ne1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzaW5nIDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uYmlycmV0ZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JpcnJldGUuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDcwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcclxufVxyXG5cclxuLnBvcnRhZm9saW97XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wb3J0YWZvbGlvLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XHJcbn1cclxuXHJcbi5ob2JiaWV7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmFycm93LXVwe1xyXG4gICAgYW5pbWF0aW9uOiBhcnJvdy11cCAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuLmFycm93LWRvd257XHJcbiAgICBhbmltYXRpb246IGFycm93LWRvd24gMXMgZm9yd2FyZHM7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNTIyN2ZkO1xyXG59XHJcbkBrZXlmcmFtZXMgYXJyb3ctdXB7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhcnJvdy1kb3due1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc2luZ3tcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile-card/profile-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-card/profile-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileCardComponent = class ProfileCardComponent {
    constructor() {
        this.current_item = 0;
        this.items = 3;
        this.progresing = '';
        this.profile_arrow = 'arrow-down';
        this.direction_change = true;
    }
    ngOnInit() {
    }
    change() {
        this.progresing = '';
        // progres start
        setTimeout(() => {
            if (this.current_item == -2)
                this.progresing = 'progresing';
        }, 500);
        // progres end
        if (this.current_item == -(this.items - 2) && this.profile_arrow == 'arrow-down') {
            this.profile_arrow = 'arrow-up';
        }
        else if (this.current_item == -1 && this.profile_arrow == 'arrow-up') {
            this.profile_arrow = 'arrow-down';
        }
        if (this.current_item == -2) {
            this.direction_change = false;
        }
        else if (this.current_item == 0) {
            this.direction_change = true;
        }
        if (this.direction_change) {
            this.addAnimationToContainer(-1);
        }
        else {
            this.addAnimationToContainer(1);
        }
    }
    addAnimationToContainer(direction) {
        this.container.nativeElement.animate([
            { transform: "translateY(" + this.current_item + "00%)" },
            { transform: "translateY(" + (this.current_item + direction) + "00%)" }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        this.current_item = this.current_item + direction;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false })
], ProfileCardComponent.prototype, "container", void 0);
ProfileCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-card',
        template: __webpack_require__(/*! raw-loader!./profile-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile-card/profile-card.component.html"),
        styles: [__webpack_require__(/*! ./profile-card.component.css */ "./src/app/components/profile-card/profile-card.component.css")]
    })
], ProfileCardComponent);



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-img{\r\n    overflow: hidden;\r\n    height: 300px;\r\n    border-radius: 150px 0px 0px 0px;\r\n    box-shadow: black -5px 5px 20px -5px;\r\n}\r\n\r\n.button{\r\n    transform: translateY(-50%);\r\n    padding: 20px !important;\r\n    background-color: #5227fd;\r\n    color: white;\r\n    font-family: Montserrat-Extrabold;\r\n    border-radius: 5px;\r\n}\r\n\r\nspan{\r\n    font-family: Montserrat-Extrabold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZS1pbWd7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4IDBweCAwcHggMHB4O1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgLTVweCA1cHggMjBweCAtNXB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjdmZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUV4dHJhYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5zcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtRXh0cmFib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services/services.component.html"),
        styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/components/slider/slider.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/slider/slider.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".programing-language{\r\n    width: 200px;\r\n    height: 225px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.selected-programing-language{\r\n    min-width: 200px;\r\n    background-color: white;\r\n    box-shadow: black 0px 1px 5px -3px;\r\n    position: absolute;\r\n}\r\n\r\n.item:hover{\r\n    -webkit-animation: wiggle 3s forwards;\r\n            animation: wiggle 3s forwards;\r\n}\r\n\r\n.item{\r\n    min-width: 20%;\r\n    z-index: 3;\r\n}\r\n\r\n.arrow-container{\r\n    justify-content: center;\r\n    align-items: center; \r\n    display: flex;\r\n}\r\n\r\n.arrow{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 100%;\r\n    background-color: #5227fd;\r\n    justify-content: center;\r\n    align-items: center; \r\n    display: flex;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-arrow{\r\n    margin-right: 15px !important;\r\n    -webkit-animation: moving-arrow-left 1s infinite;\r\n            animation: moving-arrow-left 1s infinite;\r\n\r\n}\r\n\r\n.right-arrow{\r\n    margin-left: 15px !important;\r\n    margin-right: 50px !important;\r\n    -webkit-animation: moving-arrow-right 1s infinite;\r\n            animation: moving-arrow-right 1s infinite;\r\n}\r\n\r\n.programing-language-icon{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-top: 30px !important;\r\n    margin-left: 25px !important; \r\n}\r\n\r\n.slider_content{\r\n    height: 225px;\r\n    display: flex;\r\n    /* animation: test 3s forwards; */\r\n}\r\n\r\n@-webkit-keyframes wiggle{\r\n    25%{\r\n        transform: rotateZ(15deg);\r\n    }\r\n\r\n    50%{\r\n        transform: rotateZ(-15deg);\r\n    }\r\n\r\n    75%{\r\n        transform: rotateZ(15deg);\r\n    }\r\n\r\n    100%{\r\n        transform: rotateZ(-15deg);\r\n    }\r\n}\r\n\r\n@keyframes wiggle{\r\n    25%{\r\n        transform: rotateZ(15deg);\r\n    }\r\n\r\n    50%{\r\n        transform: rotateZ(-15deg);\r\n    }\r\n\r\n    75%{\r\n        transform: rotateZ(15deg);\r\n    }\r\n\r\n    100%{\r\n        transform: rotateZ(-15deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes moving-arrow-left{\r\n    0%{\r\n        transform: translateX(25%);\r\n    }\r\n\r\n    50%{\r\n        transform: translateX(-25%);\r\n    }\r\n\r\n    100%{\r\n        transform: translateX(25%);\r\n    }\r\n}\r\n\r\n@keyframes moving-arrow-left{\r\n    0%{\r\n        transform: translateX(25%);\r\n    }\r\n\r\n    50%{\r\n        transform: translateX(-25%);\r\n    }\r\n\r\n    100%{\r\n        transform: translateX(25%);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes moving-arrow-right{\r\n    0%{\r\n        transform: translateX(-25%);\r\n    }\r\n\r\n    50%{\r\n        transform: translateX(25%);\r\n    }\r\n\r\n    100%{\r\n        transform: translateX(-25%);\r\n    }\r\n}\r\n\r\n@keyframes moving-arrow-right{\r\n    0%{\r\n        transform: translateX(-25%);\r\n    }\r\n\r\n    50%{\r\n        transform: translateX(25%);\r\n    }\r\n\r\n    100%{\r\n        transform: translateX(-25%);\r\n    }\r\n}\r\n\r\n/* @keyframes test{\r\n    0%{\r\n        transform: translateX(0%);\r\n    }\r\n    100%{\r\n        transform: translateX(-100%);\r\n    }\r\n} */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsZ0RBQXdDO1lBQXhDLHdDQUF3Qzs7QUFFNUM7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGlEQUF5QztZQUF6Qyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBaEJBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBWkE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFaQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyYW1pbmctbGFuZ3VhZ2V7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLXByb2dyYW1pbmctbGFuZ3VhZ2V7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAwcHggMXB4IDVweCAtM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaXRlbTpob3ZlcntcclxuICAgIGFuaW1hdGlvbjogd2lnZ2xlIDNzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uaXRlbXtcclxuICAgIG1pbi13aWR0aDogMjAlO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuLmFycm93LWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXJyb3d7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIyN2ZkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxlZnQtYXJyb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbjogbW92aW5nLWFycm93LWxlZnQgMXMgaW5maW5pdGU7XHJcblxyXG59XHJcbi5yaWdodC1hcnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbjogbW92aW5nLWFycm93LXJpZ2h0IDFzIGluZmluaXRlO1xyXG59XHJcblxyXG4ucHJvZ3JhbWluZy1sYW5ndWFnZS1pY29ue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLnNsaWRlcl9jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAyMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBhbmltYXRpb246IHRlc3QgM3MgZm9yd2FyZHM7ICovXHJcbn1cclxuQGtleWZyYW1lcyB3aWdnbGV7XHJcbiAgICAyNSV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNzUle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTE1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZpbmctYXJyb3ctbGVmdHtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZpbmctYXJyb3ctcmlnaHR7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgNTAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBAa2V5ZnJhbWVzIHRlc3R7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG59ICovXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.layer = 0;
        this.languages = [
            {
                level: 5,
                name: 'Angular',
                icon: '../../assets/svg/angular.svg'
            },
            {
                level: 3,
                name: 'ASP.net',
                icon: '../../assets/svg/asp.net.png'
            },
            {
                level: 4,
                name: 'Bootstrap',
                icon: '../../assets/svg/bootstrap.png'
            },
            {
                level: 3,
                name: 'C#',
                icon: '../../assets/svg/c%23.svg'
            },
            {
                level: 3,
                name: 'C++',
                icon: '../../assets/svg/cpp.png'
            },
            {
                level: 4,
                name: 'CSS',
                icon: '../../assets/svg/css.svg'
            },
            {
                level: 5,
                name: 'D.B Design',
                icon: '../../assets/svg/BDdesign.svg'
            },
            {
                level: 4,
                name: 'Git',
                icon: '../../assets/svg/git.png'
            },
            {
                level: 4,
                name: 'HTML',
                icon: '../../assets/svg/html.svg'
            },
            {
                level: 4,
                name: 'Java',
                icon: '../../assets/svg/java.svg'
            },
            {
                level: 5,
                name: 'JavaScript',
                icon: '../../assets/svg/javascript.svg'
            },
            {
                level: 4,
                name: 'MySql',
                icon: '../../assets/svg/mysql.svg'
            },
            {
                level: 4,
                name: 'Python',
                icon: '../../assets/svg/python.png'
            },
            {
                level: 4,
                name: 'Reactjs',
                icon: '../../assets/svg/react-2.svg'
            }
        ];
    }
    ngOnInit() {
    }
    right() {
        if (this.layer > -(this.languages.length - 1) * 2) {
            this.slider_content.nativeElement.animate([
                { transform: "translateX(" + this.layer + "0%)" },
                { transform: "translateX(" + (this.layer - 2) + "0%)" }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            this.layer = this.layer - 2;
        }
    }
    left() {
        if (this.layer != 0) {
            this.slider_content.nativeElement.animate([
                { transform: "translateX(" + this.layer + "0%)" },
                { transform: "translateX(" + (this.layer + 2) + "0%)" }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            this.layer = this.layer + 2;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider_content', { static: false })
], SliderComponent.prototype, "slider_content", void 0);
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/components/slider/slider.component.css")]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    list-style: none;\r\n    -webkit-margin-after: 0%;\r\n            margin-block-end: 0%;\r\n    -webkit-padding-start: 0%;\r\n            padding-inline-start: 0%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQix5QkFBd0I7WUFBeEIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwJTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoListComponent = class TodoListComponent {
    constructor() {
        this.todoList = [{
                timestamp: Date.now(),
                do: 'comida',
                done: false
            },
            {
                timestamp: Date.now(),
                do: 'comida',
                done: false
            }];
    }
    ngOnInit() {
    }
};
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo-list/todo-list.component.html"),
        styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/components/todo-list/todo-list.component.css")]
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/components/todo/todo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/todo/todo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo_container{\r\n    width: 99%;\r\n    height: 60px;\r\n    min-height: 60px;\r\n    background-color: black;\r\n    margin-left:auto !important;\r\n    margin-right: auto !important;\r\n    margin-top: 1px !important;\r\n    overflow: hidden;\r\n}\r\n\r\n.circle{\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 100%;\r\n    background-color: white;\r\n    position: absolute;\r\n}\r\n\r\n.container{\r\n    height: 60px;\r\n    max-width: 60px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container2{\r\n    background-color: grey;\r\n}\r\n\r\n.verticalLine{\r\n    height: 100%;\r\n    background-color: white;\r\n    max-width: 1px;\r\n    z-index: 9999;\r\n    margin: 0%;\r\n    padding: 0%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n}\r\n\r\n.horizontalLine{\r\n    height: 1px;\r\n    background-color: white;\r\n    z-index: 9999;\r\n    margin: 0%;\r\n    padding: 0%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n}\r\n\r\n.goUp{\r\n    -webkit-animation: goUp 4s infinite;\r\n            animation: goUp 4s infinite;\r\n}\r\n\r\n.goDown{\r\n    -webkit-animation: goDown 4s infinite;\r\n            animation: goDown 4s infinite;\r\n}\r\n\r\n.goRight{\r\n    -webkit-animation: goRight 4s infinite;\r\n            animation: goRight 4s infinite;\r\n}\r\n\r\n.goLeft{\r\n    -webkit-animation: goLeft 4s infinite;\r\n            animation: goLeft 4s infinite;\r\n}\r\n\r\n@-webkit-keyframes goLeft {\r\n    0% {left: 120%;}\r\n    100% {left: -20%;}\r\n}\r\n\r\n@keyframes goLeft {\r\n    0% {left: 120%;}\r\n    100% {left: -20%;}\r\n}\r\n\r\n@-webkit-keyframes goRight {\r\n   0% {left: -20%;}\r\n   100% {left: 120%;}\r\n}\r\n\r\n@keyframes goRight {\r\n   0% {left: -20%;}\r\n   100% {left: 120%;}\r\n}\r\n\r\n@-webkit-keyframes goUp{\r\n    0% {top:120%}\r\n    100% {top:-20% }\r\n}\r\n\r\n@keyframes goUp{\r\n    0% {top:120%}\r\n    100% {top:-20% }\r\n}\r\n\r\n@-webkit-keyframes goDown{\r\n    0% {top:-20%}\r\n    100% {top:120%}\r\n}\r\n\r\n@keyframes goDown{\r\n    0% {top:-20%}\r\n    100% {top:120%}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3JCOztBQUhBO0lBQ0ksSUFBSSxVQUFVLENBQUM7SUFDZixNQUFNLFVBQVUsQ0FBQztBQUNyQjs7QUFFQTtHQUNHLElBQUksVUFBVSxDQUFDO0dBQ2YsTUFBTSxVQUFVLENBQUM7QUFDcEI7O0FBSEE7R0FDRyxJQUFJLFVBQVUsQ0FBQztHQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3BCOztBQUVBO0lBQ0ksSUFBSSxRQUFRO0lBQ1osTUFBTSxTQUFTO0FBQ25COztBQUhBO0lBQ0ksSUFBSSxRQUFRO0lBQ1osTUFBTSxTQUFTO0FBQ25COztBQUVBO0lBQ0ksSUFBSSxRQUFRO0lBQ1osTUFBTSxRQUFRO0FBQ2xCOztBQUhBO0lBQ0ksSUFBSSxRQUFRO0lBQ1osTUFBTSxRQUFRO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvX2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNpcmNsZXtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1heC13aWR0aDogNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbExpbmV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogMXB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmhvcml6b250YWxMaW5le1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZ29VcHtcclxuICAgIGFuaW1hdGlvbjogZ29VcCA0cyBpbmZpbml0ZTtcclxufVxyXG4uZ29Eb3due1xyXG4gICAgYW5pbWF0aW9uOiBnb0Rvd24gNHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5nb1JpZ2h0e1xyXG4gICAgYW5pbWF0aW9uOiBnb1JpZ2h0IDRzIGluZmluaXRlO1xyXG59XHJcbi5nb0xlZnR7XHJcbiAgICBhbmltYXRpb246IGdvTGVmdCA0cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBnb0xlZnQge1xyXG4gICAgMCUge2xlZnQ6IDEyMCU7fVxyXG4gICAgMTAwJSB7bGVmdDogLTIwJTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ29SaWdodCB7XHJcbiAgIDAlIHtsZWZ0OiAtMjAlO31cclxuICAgMTAwJSB7bGVmdDogMTIwJTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ29VcHtcclxuICAgIDAlIHt0b3A6MTIwJX1cclxuICAgIDEwMCUge3RvcDotMjAlIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBnb0Rvd257XHJcbiAgICAwJSB7dG9wOi0yMCV9XHJcbiAgICAxMDAlIHt0b3A6MTIwJX1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoComponent = class TodoComponent {
    constructor() { }
    ngOnInit() {
    }
};
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo/todo.component.html"),
        styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/components/todo/todo.component.css")]
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    width: 100%;\r\n    height: 85vh;\r\n    position: absolute;\r\n    /* z-index: 0; */\r\n}\r\n\r\n.container{\r\n    min-width: 100%;\r\n    min-height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.photo{\r\n    border-radius: 27px 0 0 27px;\r\n    height: 80vh;\r\n    box-shadow: black 5px 2px 5px 0px;\r\n    margin-left: 15px;\r\n    margin-bottom: 15px;\r\n    margin-top: 17vh;\r\n    -webkit-animation: photo-show 1.5s;\r\n            animation: photo-show 1.5s;\r\n    \r\n}\r\n\r\n.animated-space{\r\n    -webkit-animation: header-text-show 1.5s;\r\n            animation: header-text-show 1.5s;\r\n}\r\n\r\n.header-text-container{\r\n    color: white;  \r\n    /* justify-content: center;\r\n    align-items: center; \r\n    display: flex; */\r\n    height: 85vh;\r\n    /* position: absolute; */\r\n}\r\n\r\n.line{\r\n    width: 50px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin-bottom: 15px !important;\r\n}\r\n\r\na{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.link:hover{\r\n    -webkit-animation: link-jump .25s linear;\r\n            animation: link-jump .25s linear;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards; \r\n}\r\n\r\n@-webkit-keyframes link-jump{\r\n    0%{\r\n        transform: translateY(0px);\r\n    }\r\n    100%{\r\n        transform: translateY(-10px) scale(1.2);\r\n    }\r\n}\r\n\r\n@keyframes link-jump{\r\n    0%{\r\n        transform: translateY(0px);\r\n    }\r\n    100%{\r\n        transform: translateY(-10px) scale(1.2);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes header-text-show{\r\n    0%{\r\n        transform: translateX(-100%);\r\n    }\r\n    100%{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@keyframes header-text-show{\r\n    0%{\r\n        transform: translateX(-100%);\r\n    }\r\n    100%{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes photo-show{\r\n    0%{\r\n        transform: translateX(100%);\r\n    }\r\n    100%{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@keyframes photo-show{\r\n    0%{\r\n        transform: translateX(100%);\r\n    }\r\n    100%{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtDQUEwQjtZQUExQiwwQkFBMEI7O0FBRTlCOztBQUNBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWjs7b0JBRWdCO0lBQ2hCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztBQUNKOztBQVBBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQVBBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQVBBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIHotaW5kZXg6IDA7ICovXHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5waG90b3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDI3cHggMCAwIDI3cHg7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayA1cHggMnB4IDVweCAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgYW5pbWF0aW9uOiBwaG90by1zaG93IDEuNXM7XHJcbiAgICBcclxufVxyXG4uYW5pbWF0ZWQtc3BhY2V7XHJcbiAgICBhbmltYXRpb246IGhlYWRlci10ZXh0LXNob3cgMS41cztcclxufVxyXG5cclxuLmhlYWRlci10ZXh0LWNvbnRhaW5lcntcclxuICAgIGNvbG9yOiB3aGl0ZTsgIFxyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbn1cclxuLmxpbmV7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxpbms6aG92ZXJ7XHJcbiAgICBhbmltYXRpb246IGxpbmstanVtcCAuMjVzIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBsaW5rLWp1bXB7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhlYWRlci10ZXh0LXNob3d7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBob3RvLXNob3d7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() {
        this.title1 = "Sliders y Animaciones de Alto Calibre, sin librerias de Terceros.";
        this.title2 = "Pagina Web informativa modular con su propio manager y API REST.\nwww.boletoaereo.com";
    }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/mandatory/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mandatory/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login .container #login-row #login-column #login-box {\r\n    margin-top: 120px;\r\n    max-width: 600px;\r\n    height: 320px;\r\n    border: 1px solid #9C9C9C;\r\n    background-color: #EAEAEA;\r\n  }\r\n  #login .container #login-row #login-column #login-box #login-form {\r\n    padding: 20px;\r\n  }\r\n  #login .container #login-row #login-column #login-box #login-form #register-link {\r\n    margin-top: -85px;\r\n  }\r\n  #login{\r\n    background-color: #343a40!important;\r\n    height: 100vh;\r\n  }\r\n  .ti{\r\n      color:#343a40!important;\r\n  }\r\n  .btn-info{\r\n    background-color: #343a40;\r\n  }\r\n  .animation{\r\n    \r\n    -webkit-animation: animation 4s infinite;\r\n    \r\n            animation: animation 4s infinite;\r\n  }\r\n  @-webkit-keyframes animation{\r\n      0%{\r\n        \r\n      }\r\n      100%{\r\n        transform: rotateY( 90deg) translateZ(100px);\r\n      }\r\n  }\r\n  @keyframes animation{\r\n      0%{\r\n        \r\n      }\r\n      100%{\r\n        transform: rotateY( 90deg) translateZ(100px);\r\n      }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZGF0b3J5L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLGFBQWE7RUFDZjtFQUVBO01BQ0ksdUJBQXVCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTs7SUFFRSx3Q0FBZ0M7O1lBQWhDLGdDQUFnQztFQUNsQztFQUNBO01BQ0k7O01BRUE7TUFDQTtRQUNFLDRDQUE0QztNQUM5QztFQUNKO0VBUEE7TUFDSTs7TUFFQTtNQUNBO1FBQ0UsNENBQTRDO01BQzlDO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYW5kYXRvcnkvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiAuY29udGFpbmVyICNsb2dpbi1yb3cgI2xvZ2luLWNvbHVtbiAjbG9naW4tYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOUM5QzlDO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcclxuICB9XHJcbiAgI2xvZ2luIC5jb250YWluZXIgI2xvZ2luLXJvdyAjbG9naW4tY29sdW1uICNsb2dpbi1ib3ggI2xvZ2luLWZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgI2xvZ2luIC5jb250YWluZXIgI2xvZ2luLXJvdyAjbG9naW4tY29sdW1uICNsb2dpbi1ib3ggI2xvZ2luLWZvcm0gI3JlZ2lzdGVyLWxpbmsge1xyXG4gICAgbWFyZ2luLXRvcDogLTg1cHg7XHJcbiAgfVxyXG5cclxuICAjbG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAudGl7XHJcbiAgICAgIGNvbG9yOiMzNDNhNDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLWluZm97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gIH1cclxuICAuYW5pbWF0aW9ue1xyXG4gICAgXHJcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbiA0cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBhbmltYXRpb257XHJcbiAgICAgIDAle1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWigxMDBweCk7XHJcbiAgICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/mandatory/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mandatory/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/mandatory/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/mandatory/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/mandatory/mandatory.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mandatory/mandatory.module.ts ***!
  \***********************************************/
/*! exports provided: MandatoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandatoryModule", function() { return MandatoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/mandatory/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/mandatory/not-found/not-found.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");






let MandatoryModule = class MandatoryModule {
};
MandatoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
        ],
        exports: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]
    })
], MandatoryModule);



/***/ }),

/***/ "./src/app/mandatory/not-found/not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mandatory/not-found/not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmRhdG9yeS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mandatory/not-found/not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mandatory/not-found/not-found.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/mandatory/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/mandatory/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    post(obj) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post('https://mini-api-mage-for-work.herokuapp.com/api/mail/addTomails', obj, httpOptions);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n.link:hover{\r\n    -webkit-animation: link-jump .25s linear;\r\n            animation: link-jump .25s linear;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards; \r\n}\r\n.header{\r\n    width: 100%;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center; \r\n    display: flex;\r\n    color: white;\r\n    height: 17vh;\r\n    z-index: 9999;\r\n}\r\n.header-text-container{\r\n    color: white;  \r\n    justify-content: center;\r\n    align-items: center; \r\n    display: flex;\r\n    height: 85vh;\r\n    /* position: absolute; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxpbms6aG92ZXJ7XHJcbiAgICBhbmltYXRpb246IGxpbmstanVtcCAuMjVzIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQtY29udGFpbmVye1xyXG4gICAgY29sb3I6IHdoaXRlOyAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



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
const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IT\Documents\things\c-v\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map