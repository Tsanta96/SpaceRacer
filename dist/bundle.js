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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/space_racer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Asteroid; });
/* harmony import */ var _space_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space_track */ "./lib/space_track.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CONSTANTS = {
  ASTEROID_LANES: _space_track__WEBPACK_IMPORTED_MODULE_0__["SPACE_TRACK_CONSTANTS"].LANES
};

var Asteroid =
/*#__PURE__*/
function () {
  function Asteroid(dimensions, yCoordinate) {
    _classCallCheck(this, Asteroid);

    this.dimensions = dimensions;
    this.x = ASTEROID_LANES[Math.floor(Math.random() * lanes.length)];
    this.y = yCoordinate;
    this.passed = false;
  }

  _createClass(Asteroid, [{
    key: "animate",
    value: function animate(ctx) {
      this.drawAsteroids(ctx);
    }
  }, {
    key: "drawAsteroid",
    value: function drawAsteroid(ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.dimensions.width, this.dimensions.height);
    }
  }]);

  return Asteroid;
}();



/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./lib/level.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./lib/player.js");
/* harmony import */ var _space_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space_track */ "./lib/space_track.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game(canvasContext) {
    _classCallCheck(this, Game);

    this.canvasContext = canvasContext;
    this.dimensions = {
      width: canvasContext.canvas.width,
      height: canvasContext.canvas.height
    };
    console.log(2, "game.js this.dimensions ---> ", this.dimensions);
    this.registerEvents();
    this.restart();
    this.changeLanes = this.changeLanes.bind(this);
    this.play = this.play.bind(this);
  }

  _createClass(Game, [{
    key: "animate",
    value: function animate() {
      console.log(4, "game.js animate()");
      this.level.animate(this.canvasContext);
      this.spaceTrack.animate(this.canvasContext);
      this.player.animate(this.canvasContext);

      if (this.running) {
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.running = true;
      this.animate();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.spaceTrack = new _space_track__WEBPACK_IMPORTED_MODULE_2__["SpaceTrack"](this.dimensions);
      this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions, this.canvasContext);
      this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions);
      this.animate();
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      this.canvasContext.canvas.addEventListener("keydown", function (e) {
        _this.changeLanes(e);
      });
    }
  }, {
    key: "changeLanes",
    value: function changeLanes(event) {
      if (!this.running) {
        this.play();
      }

      if (event.key === "ArrowLeft") {
        this.player.movePlayer(-1);
      } else if (event.key === "ArrowRight") {
        this.player.movePlayer(1);
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./lib/level.js":
/*!**********************!*\
  !*** ./lib/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./lib/player.js");
/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ "./lib/asteroid.js");
/* harmony import */ var _space_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space_track */ "./lib/space_track.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CONSTANTS = {
  ASTEROID_LANES: _space_track__WEBPACK_IMPORTED_MODULE_2__["SPACE_TRACK_CONSTANTS"].LANES,
  ASTEROID_SPEED: 2,
  ASTEROID_WIDTH: 80,
  ASTEROID_SPACING: 300,
  WARM_UP_SECONDS: 1
};

var Level =
/*#__PURE__*/
function () {
  function Level(dimensions, ctx) {
    _classCallCheck(this, Level);

    this.dimensions = dimensions;
    this.ctx = ctx;
    var firstAsteroidDistance = 0 - CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ASTEROID_SPEED; // this.asteroids = [
    //     this.randomAsteroid(firstAsteroidDistance),
    //     this.randomAsteroid(firstAsteroidDistance + CONSTANTS.ASTEROID_SPACING),
    //     this.randomAsteroid(firstAsteroidDistance + (CONSTANTS.ASTEROID_SPACING * 2)),
    // ];
    //call generate asteroids here??
  }

  _createClass(Level, [{
    key: "generateAsteroid",
    value: function generateAsteroid(ctx) {
      this.asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions, yCoord);
      this.asteroid.animate(ctx);
    } // randomAsteroid() {
    //     const lanes = CONSTANTS.ASTEROID_LANES;
    //     const randLane = lanes[Math.floor(Math.random() * lanes.length)];
    //     const asteroid = {
    //         lane: randLane,
    //         passed: false
    //     }
    //     return asteroid;
    // }

  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawBackground(ctx);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.fillStyle = '#00022c';
      ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }
  }, {
    key: "moveAsteroids",
    value: function moveAsteroids() {
      randomAsteroid.lane;
    }
  }]);

  return Level;
}();



/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _space_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space_track */ "./lib/space_track.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CONSTANTS = {
  LANES: _space_track__WEBPACK_IMPORTED_MODULE_0__["SPACE_TRACK_CONSTANTS"].LANES,
  PLAYER_STARTING_POS: [360, 440],
  JUMP: 80,
  PLAYER_WIDTH: 20,
  PLAYER_HEIGHT: 20
};

var Player =
/*#__PURE__*/
function () {
  function Player(dimensions) {
    _classCallCheck(this, Player);

    this.dimensions = dimensions;
    this.x = this.randomPlayerPlacement();
    this.y = 9 / 10 * this.dimensions.height;
    this.vel = 0;
    console.log(CONSTANTS.LANES);
  }

  _createClass(Player, [{
    key: "randomPlayerPlacement",
    value: function randomPlayerPlacement() {
      var possiblePos = CONSTANTS.PLAYER_STARTING_POS;
      var randPos = possiblePos[Math.floor(Math.random() * possiblePos.length)];
      return randPos;
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawPlayer(ctx);
    }
  }, {
    key: "drawPlayer",
    value: function drawPlayer(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#f3d078';
      ctx.fill();
    }
  }, {
    key: "movePlayer",
    value: function movePlayer(direction) {
      var bounds = [CONSTANTS.LANES[0], CONSTANTS.LANES[CONSTANTS.LANES.length - 1]];

      if (this.x + CONSTANTS.JUMP * direction >= bounds[0] && this.x + CONSTANTS.JUMP * direction <= bounds[1]) {
        this.x += CONSTANTS.JUMP * direction;
      } else {
        console.log("Out of bounds");
      }
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./lib/space_racer.js":
/*!****************************!*\
  !*** ./lib/space_racer.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");
//index.js

document.addEventListener('DOMContentLoaded', function () {
  var gameCanvas = document.getElementById('game-canvas');
  var canvasContext = gameCanvas.getContext('2d'); // const backgroundCanvas = document.getElement('background-canvas');
  // const backgroundCanvasContext = gameCanvas.getContext('2d');
  // const foregroundCanvas = document.getElement('background-canvas');
  // const foregroundCanvasContext = gameCanvas.getContext('2d');

  console.log(1, "space_racer.js");
  new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvasContext);
});

/***/ }),

/***/ "./lib/space_track.js":
/*!****************************!*\
  !*** ./lib/space_track.js ***!
  \****************************/
/*! exports provided: SPACE_TRACK_CONSTANTS, SpaceTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_TRACK_CONSTANTS", function() { return SPACE_TRACK_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceTrack", function() { return SpaceTrack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SPACE_TRACK_CONSTANTS = {
  LANES: [280, 360, 440, 520]
}; // LANE COORDINATES (widths):
// lane 1: 240 - 320
// lane 2: 320 - 400
// lane 3: 400 - 480
// lane 4: 480 - 560

var SpaceTrack =
/*#__PURE__*/
function () {
  function SpaceTrack(dimensions) {
    _classCallCheck(this, SpaceTrack);

    this.dimensions = dimensions;
  }

  _createClass(SpaceTrack, [{
    key: "animate",
    value: function animate(ctx) {
      this.drawSpaceTrack(ctx);
    }
  }, {
    key: "drawSpaceTrack",
    value: function drawSpaceTrack(ctx) {
      var pos = 160;

      for (var i = 0; i < 5; i++) {
        ctx.beginPath();
        var newPos = pos + this.dimensions.width / 10;
        ctx.moveTo(newPos, 0);
        ctx.lineTo(newPos, 400);
        pos += this.dimensions.width / 10;
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#cecece';
        ctx.stroke();
      }
    }
  }]);

  return SpaceTrack;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map