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
    this.x = CONSTANTS.ASTEROID_LANES[Math.floor(Math.random() * CONSTANTS.ASTEROID_LANES.length)];
    this.y = yCoordinate; // this.passed = false;

    this.imageSprite = new Image();
    this.imageSprite.src = './assets/images/asteroid.svg';
    this.Id = Math.floor(Math.random() * 9) + 1;
  }

  _createClass(Asteroid, [{
    key: "incrementId",
    value: function incrementId() {
      this.Id++;
    }
  }, {
    key: "animate",
    value: function animate(ctx, x, y) {
      this.drawAsteroid(ctx, x, y);
    }
  }, {
    key: "drawAsteroid",
    value: function drawAsteroid(ctx, x, y) {
      ctx.drawImage(this.imageSprite, x - 30, y - 30, 60, 60); // ctx.beginPath();
      // ctx.arc(x-30, y-30, 3, 0, 2 * Math.PI, false);
      // ctx.fillStyle = 'red';
      // ctx.fill();
      // this.Id += 1;
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
/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asteroid */ "./lib/asteroid.js");
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
    this.levelCount = 0;
    this.playMusic = false;
    this.registerEvents();
    this.setScoreBoard();
    this.restart();
    this.changeLanes = this.changeLanes.bind(this);
    this.play = this.play.bind(this);
    this.setScoreBoard = this.setScoreBoard.bind(this);
  } //Retrieve scores from local storage


  _createClass(Game, [{
    key: "setScoreBoard",
    value: function setScoreBoard() {
      for (var i = 1; i <= 10; i++) {
        if (!localStorage[i]) localStorage.setItem(i, 0);
      }
    } //Shifts scores back if new score is added

  }, {
    key: "shiftScoreIdx",
    value: function shiftScoreIdx(idx) {
      for (var i = 10; i > idx; i--) {
        localStorage[i] = localStorage[i - 1];
        console.log("i", i);
        console.log("localStorage[i]", localStorage[i]);
      }

      return localStorage;
    } //logs a new highscore if it qualifies

  }, {
    key: "logScore",
    value: function logScore(score) {
      for (var i = 1; i <= 10; i++) {
        if (score > localStorage[i]) {
          this.shiftScoreIdx(i);
          localStorage[i] = score;
          return;
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.spaceTrack.animate(this.canvasContext);
      this.level.animate(this.canvasContext);
      this.player.animate(this.canvasContext);

      if (this.gameOver()) {
        alert("EXPLOSION!!");
        var yourScore = this.score; //Checks if score is greater than another high score, and if so then it gets added

        this.logScore(yourScore); //Displays your score on main menu

        document.getElementById('your-score').innerText = "Your score was ".concat(yourScore, "!");
        this.clearLevelIndicator();
        this.restart();
        document.getElementById('main-menu').classList.remove('clear');
        document.getElementById('main-menu-screen').classList.remove('clear');
      }

      if (this.running) {
        requestAnimationFrame(this.animate.bind(this));
      }

      this.drawScore();
      this.increaseLevel();
    }
  }, {
    key: "play",
    value: function play() {
      this.running = true;
      this.animate(); // Removes the Uncaught TypeError of "this.scoreTracer is not a function" 
      // in console

      try {
        this.scoreTracker();
      } catch (error) {} // Have to make this.scoreTracker null, otherwise everytime we call
      // this.scoreTracker() on restart the speed of the score increases


      this.scoreTracker = null;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.score = 0;
      this.spaceTrack = new _space_track__WEBPACK_IMPORTED_MODULE_2__["SpaceTrack"](this.dimensions, this.canvasContext);
      this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["Level"](this.dimensions, this.canvasContext);
      this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions, this.canvasContext);
      this.asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_3__["default"](this.dimensions, this.canvasContext);
      this.animate();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.level.collision(this.player.playerBounds()) === true) {
        return true;
      }
    }
  }, {
    key: "scoreTracker",
    value: function scoreTracker() {
      var _this = this;

      setInterval(function () {
        _this.score += 1;
      }, 100);
    }
  }, {
    key: "drawScore",
    value: function drawScore() {
      var loc = {
        x: 7 / 8 * this.dimensions.width,
        y: this.dimensions.height / 8
      };
      this.canvasContext.font = "30px Arial";
      this.canvasContext.fillStyle = "white";
      this.canvasContext.fillText(this.score, loc.x, loc.y);
      this.canvasContext.strokeStyle = "black";
      this.canvasContext.lineWidth = 2;
    }
  }, {
    key: "increaseLevel",
    value: function increaseLevel() {
      this.level.increaseLevel(this.score);
    }
  }, {
    key: "clearLevelIndicator",
    value: function clearLevelIndicator() {
      var planetsArr = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

      for (var i = 0; i < planetsArr.length; i++) {
        document.getElementById(planetsArr[i]).classList.remove('select-planet');
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this2 = this;

      this.canvasContext.canvas.addEventListener("keydown", function (e) {
        _this2.changeLanes(e);
      });
      document.getElementById('sound-icon').addEventListener("click", function () {
        _this2.toggleMusic();
      });
      document.getElementById('play-game').addEventListener("click", function () {
        _this2.playGame();
      });
      document.getElementById('info').addEventListener("click", function () {
        _this2.openInfo();
      });
      document.getElementById('high-scores').addEventListener("click", function () {
        _this2.openHighScores();
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
  }, {
    key: "toggleMusic",
    value: function toggleMusic() {
      var soundIcon = document.getElementById('sound-icon');
      var audioEl = document.getElementById('welcome-audio');

      if (!this.playMusic) {
        this.playMusic = true;
        soundIcon.classList.toggle('sound-icon-playing');
        audioEl.play();
      } else {
        this.playMusic = false;
        soundIcon.classList.remove('sound-icon-playing');
        audioEl.pause();
      }
    }
  }, {
    key: "playGame",
    value: function playGame() {
      document.getElementById('main-menu').classList.add('clear');
      document.getElementById('main-menu-screen').classList.add('clear');
      this.play();
      document.getElementById('game-canvas').focus();
      this.toggleMusic();
    }
  }, {
    key: "openInfo",
    value: function openInfo() {
      document.getElementById('info-page').classList.remove('clear');
      document.getElementById('info-page').classList.add('info-page'); //Back to main screen

      document.getElementById('info-back-button').addEventListener('click', function () {
        document.getElementById('info-page').classList.remove('info-page');
        document.getElementById('info-page').classList.add('clear');
      });
    }
  }, {
    key: "openHighScores",
    value: function openHighScores() {
      document.getElementById('high-scores-page').classList.remove('clear');
      document.getElementById('high-scores-page').classList.add('high-scores-page'); //Back to main page

      document.getElementById('high-scores-back-button').addEventListener('click', function () {
        document.getElementById('high-scores-page').classList.remove('high-scores-page');
        document.getElementById('high-scores-page').classList.add('clear');
      }); // remove then re-render ranking and scores

      var scoresTable = document.getElementById('high-scores-display'); //Clears high score table first, before re-rendering scores 1-10

      scoresTable.innerHTML = '';
      var headTr = document.createElement("TR");
      var rankTh = document.createElement("TH");
      rankTh.innerText = "Rank";
      var scoreTh = document.createElement("TH");
      scoreTh.innerText = "Score"; //rank and score headers of columns

      headTr.appendChild(rankTh);
      headTr.appendChild(scoreTh);
      scoresTable.appendChild(headTr);
      var tr = document.createElement("TR");

      for (var i = 1; i <= 10; i++) {
        var row = document.createElement("TR");
        var rankTd = document.createElement("TD");
        var scoreTd = document.createElement("TD");
        rankTd.innerText = i;
        scoreTd.innerText = localStorage[i];
        row.appendChild(rankTd);
        row.appendChild(scoreTd);
        scoresTable.appendChild(row);
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
/*! exports provided: CONSTANTS, Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./lib/player.js");
/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ "./lib/asteroid.js");
/* harmony import */ var _util_level_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/level_constants */ "./lib/util/level_constants.js");
/* harmony import */ var _space_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space_track */ "./lib/space_track.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CONSTANTS = {
  ASTEROID_LANES: _space_track__WEBPACK_IMPORTED_MODULE_3__["SPACE_TRACK_CONSTANTS"].LANES,
  ASTEROID_SPEED: 3,
  // ASTEROID_WIDTH: 80,
  ASTEROID_SPACING: 400,
  WARM_UP_SECONDS: 1,
  PLANET_DURATION: 100,
  LEVELS: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
};
var Level =
/*#__PURE__*/
function () {
  function Level(dimensions, ctx) {
    _classCallCheck(this, Level);

    this.dimensions = dimensions;
    this.ctx = ctx;
    this.level = CONSTANTS.LEVELS[0]; // this.explosionSprite = new Image();
    // this.explosionSprite.src = './assets/images/explosion.svg';

    this.createAsteroids();
  }

  _createClass(Level, [{
    key: "createAsteroids",
    value: function createAsteroids() {
      this.clearAsteroids();
      var firstAsteroidDistance = 0 - CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ASTEROID_SPEED;

      for (var i = 0; i < Object(_util_level_constants__WEBPACK_IMPORTED_MODULE_2__["default"])(this.level).NUM_ASTEROIDS; i++) {
        this.asteroids.push(this.generateAsteroid(this.ctx, firstAsteroidDistance - CONSTANTS.ASTEROID_SPACING * i));
      }
    }
  }, {
    key: "clearAsteroids",
    value: function clearAsteroids() {
      return this.asteroids = [];
    }
  }, {
    key: "generateAsteroid",
    value: function generateAsteroid(ctx, yCoord) {
      return new _asteroid__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions, yCoord);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawLevel(ctx);
      this.asteroids.forEach(function (asteroid) {
        asteroid.animate(ctx, asteroid.x, asteroid.y);
      });
      this.moveAsteroids();
      this.currentPlanetLevel();
    }
  }, {
    key: "moveAsteroids",
    value: function moveAsteroids() {
      var _this = this;

      this.asteroids.forEach(function (asteroid) {
        if (asteroid.Id === 1) {
          asteroid.y += Object(_util_level_constants__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.level).ASTEROID_SPEED - 1;
        } else if (asteroid.Id === 4 || asteroid.Id === 5) {
          asteroid.y += Object(_util_level_constants__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.level).ASTEROID_SPEED + 1;
        } else if (asteroid.Id === 10) {
          asteroid.y += Object(_util_level_constants__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.level).ASTEROID_SPEED + 3;
        } else {
          asteroid.y += Object(_util_level_constants__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.level).ASTEROID_SPEED;
        }
      }); //Once an asteroid has left the screen

      if (this.asteroids[0].y >= this.dimensions.height) {
        this.asteroids.shift();
        var newAsteroid = this.generateAsteroid(this.ctx, CONSTANTS.ASTEROID_SPACING * -1);
        this.asteroids = [].concat(_toConsumableArray(this.asteroids), [newAsteroid]);
      }
    }
  }, {
    key: "collision",
    value: function collision(playerBounds) {
      var buffer = Object(_util_level_constants__WEBPACK_IMPORTED_MODULE_2__["default"])(this.level).ASTEROID_SPEED + 20;
      var collision = false;
      this.asteroids.forEach(function (asteroid, idx) {
        if (playerBounds.centerX === asteroid.x) {
          if (playerBounds.centerY >= asteroid.y && playerBounds.centerY <= asteroid.y + buffer) {
            collision = true; // setInterval(() => {
            //     return collision;
            // }, 5);

            collision = true;
          }
        }
      });
      return collision;
    }
  }, {
    key: "increaseLevel",
    value: function increaseLevel(score) {
      var divisor = CONSTANTS.PLANET_DURATION;

      switch (true) {
        case score <= divisor:
          this.level = CONSTANTS.LEVELS[0];
          break;

        case score / divisor < 2:
          this.level = CONSTANTS.LEVELS[1];
          break;

        case score / divisor < 3:
          this.level = CONSTANTS.LEVELS[2];
          break;

        case score / divisor < 4:
          this.level = CONSTANTS.LEVELS[3];
          break;

        case score / divisor < 5:
          this.level = CONSTANTS.LEVELS[4];
          break;

        case score / divisor < 6:
          this.level = CONSTANTS.LEVELS[5];
          break;

        case score / divisor < 7:
          this.level = CONSTANTS.LEVELS[6];
          break;

        case score / divisor < 8:
          this.level = CONSTANTS.LEVELS[7];
          break;

        case score / divisor < 9:
          this.level = CONSTANTS.LEVELS[8];
          break;

        default:
          console.log("default", score);
      }
    }
  }, {
    key: "drawLevel",
    value: function drawLevel(ctx) {
      if (this.level !== undefined) {
        var loc = {
          x: 1 / 15 * this.dimensions.width,
          y: this.dimensions.height / 8
        };
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.level, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
      }
    }
  }, {
    key: "currentPlanetLevel",
    value: function currentPlanetLevel() {
      switch (this.level) {
        case "Mercury":
          document.getElementById('mercury').classList.add('select-planet');
          break;

        case "Venus":
          document.getElementById('mercury').classList.remove('select-planet');
          document.getElementById('venus').classList.add('select-planet');
          break;

        case "Earth":
          document.getElementById('venus').classList.remove('select-planet');
          document.getElementById('earth').classList.add('select-planet');
          break;

        case "Mars":
          document.getElementById('earth').classList.remove('select-planet');
          document.getElementById('mars').classList.add('select-planet');
          break;

        case "Jupiter":
          document.getElementById('mars').classList.remove('select-planet');
          document.getElementById('jupiter').classList.add('select-planet');
          break;

        case "Saturn":
          document.getElementById('jupiter').classList.remove('select-planet');
          document.getElementById('saturn').classList.add('select-planet');
          break;

        case "Uranus":
          document.getElementById('saturn').classList.remove('select-planet');
          document.getElementById('uranus').classList.add('select-planet');
          break;

        case "Neptune":
          document.getElementById('uranus').classList.remove('select-planet');
          document.getElementById('neptune').classList.add('select-planet');
          break;

        case "Pluto":
          document.getElementById('neptune').classList.remove('select-planet');
          document.getElementById('pluto').classList.add('select-planet');
          break;

        default:
          console.log("testing");
      }
    }
  }, {
    key: "drawExplosion",
    value: function drawExplosion(ctx) {
      this.ctx.drawImage(this.explosionSprite, this.x - 20, this.y - 20, 40, 40);
      console.log(ctx); // ctx.beginPath();
      // ctx.arc(this.x - 20, this.y - 20, 3, 0, 2 * Math.PI, false);
      // ctx.fillStyle = 'red';
      // ctx.fill();
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
  function Player(dimensions, ctx) {
    _classCallCheck(this, Player);

    this.dimensions = dimensions;
    this.ctx = ctx;
    this.x = this.randomPlayerPlacement();
    this.y = 9 / 10 * this.dimensions.height;
    this.vel = 0;
    this.playerSprite = new Image();
    this.playerSprite.src = './assets/images/spaceship.svg';
    this.placePlayer();
  }

  _createClass(Player, [{
    key: "placePlayer",
    value: function placePlayer() {
      var _this = this;

      this.playerSprite.onload = function () {
        _this.ctx.drawImage(_this.playerSprite, _this.x - 20, _this.y - 20, 40, 40);
      };
    }
  }, {
    key: "randomPlayerPlacement",
    value: function randomPlayerPlacement() {
      var possiblePos = CONSTANTS.PLAYER_STARTING_POS;
      var randPos = possiblePos[Math.floor(Math.random() * possiblePos.length)];
      return randPos;
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawPlayer(ctx); // console.log(this.playerBounds());
    }
  }, {
    key: "drawPlayer",
    value: function drawPlayer(ctx) {
      ctx.drawImage(this.playerSprite, this.x - 20, this.y - 20, 40, 40); // ctx.beginPath();
      // ctx.arc(this.x - 20, this.y - 20, 3, 0, 2 * Math.PI, false);
      // ctx.fillStyle = '#f3d078';
      // ctx.fill();
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
  }, {
    key: "playerBounds",
    value: function playerBounds() {
      // const boundsHash = {}
      // for (let i = this.x; i < 10; i++) {
      // }
      return {
        centerY: this.y,
        centerX: this.x,
        topY: this.y - 10,
        topX: this.x,
        leftY: this.y,
        leftX: this.x - 10,
        rightY: this.y,
        rightX: this.x + 10 // left: this.x - 20,
        // right: this.x + 40,
        // top: this.y + 40,
        // bottom: this.y

      };
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
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./lib/game.js");
//index.js


document.addEventListener('DOMContentLoaded', function () {
  var gameCanvas = document.getElementById('game-canvas');
  var canvasContext = gameCanvas.getContext('2d');
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](canvasContext);
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
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./lib/level.js");
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
  function SpaceTrack(dimensions, ctx) {
    _classCallCheck(this, SpaceTrack);

    this.dimensions = dimensions;
    this.ctx = ctx;
    this.backgroundImg = new Image();
    this.backgroundImg.src = './assets/images/space_background_2.jpeg';
    this.renderBackground(this.ctx); // this.playerSprite = new Image();
    // this.playerSprite.src = './assets/images/spaceship.svg';
  }

  _createClass(SpaceTrack, [{
    key: "renderBackground",
    value: function renderBackground(ctx) {
      var _this = this;

      this.backgroundImg.onload = function () {
        ctx.drawImage(_this.backgroundImg, 0, 0, _this.dimensions.width, _this.dimensions.height);

        _this.drawSpaceTrack(ctx);
      };
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawSpaceTrack(ctx);
    }
  }, {
    key: "drawSpaceTrack",
    value: function drawSpaceTrack(ctx) {
      //background
      // ctx.fillStyle = '#00022c';
      // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height); //lanes

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

/***/ }),

/***/ "./lib/util/level_constants.js":
/*!*************************************!*\
  !*** ./lib/util/level_constants.js ***!
  \*************************************/
/*! exports provided: levelConstants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelConstants", function() { return levelConstants; });
var levelConstants = function levelConstants(level) {
  switch (level) {
    case "Mercury":
      return {
        ASTEROID_SPEED: 3,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 4
      };

    case "Venus":
      return {
        ASTEROID_SPEED: 4.5,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 4
      };

    case "Earth":
      return {
        ASTEROID_SPEED: 6,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 3
      };

    case "Mars":
      return {
        ASTEROID_SPEED: 8,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 3
      };

    case "Jupiter":
      return {
        ASTEROID_SPEED: 10,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 3
      };

    case "Saturn":
      return {
        ASTEROID_SPEED: 11,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 4
      };

    case "Uranus":
      return {
        ASTEROID_SPEED: 12,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 4
      };

    case "Neptune":
      return {
        ASTEROID_SPEED: 13,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 4
      };

    case "Pluto":
      return {
        ASTEROID_SPEED: 13,
        ASTEROID_SPACING: 300,
        WARM_UP_SECONDS: 1,
        NUM_ASTEROIDS: 5
      };

    default:
      break;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (levelConstants);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map