module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("pixi.js");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var IsoTile = (function (_super) {
    __extends(IsoTile, _super);
    function IsoTile(tilemap, x, y, height, attributes) {
        var _this = _super.call(this) || this;
        _this._tilemap = tilemap;
        _this._globalAttributes = tilemap.globalAttributes;
        _this._tileX = x;
        _this._tileY = y;
        _this._tileHeight = height;
        _this._attributes = attributes;
        _this.z = (_this._tileX + _this._tileY) * _this._globalAttributes.tileWidth / 2;
        _this._frame = 0;
        _this._frameCount = 0;
        _this._setupRects();
        _this._updatePosition();
        _this._buildSprites();
        _this._updateRect();
        return _this;
    }
    IsoTile.prototype._setupRects = function () {
        var ga = this._globalAttributes;
        var texture = this._tilemap.textures[this._attributes.tileset];
        var topRect = new PIXI.Rectangle(0, 0, ga.tileWidth, ga.tileWidth / 2);
        var topLeftWallRect = new PIXI.Rectangle(0, 0, ga.tileWidth / 2, ga.heightSize);
        var middleLeftRect = new PIXI.Rectangle(0, 0, ga.tileWidth / 2, ga.heightSize);
        var bottomLeftRect = new PIXI.Rectangle(0, 0, ga.tileWidth / 2, ga.heightSize);
        var topRightWallRect = new PIXI.Rectangle(0, 0, ga.tileWidth / 2, ga.heightSize);
        var middleRightRect = new PIXI.Rectangle(0, 0, ga.tileWidth / 2, ga.heightSize);
        var bottomRightRect = new PIXI.Rectangle(0, 0, ga.tileWidth / 2, ga.heightSize);
        this._topTexture = new PIXI.Texture(texture, topRect);
        this._topLeftWallTexture = new PIXI.Texture(texture, topLeftWallRect);
        this._middleLeftTexture = new PIXI.Texture(texture, middleLeftRect);
        this._bottomLeftTexture = new PIXI.Texture(texture, bottomLeftRect);
        this._topRightWallTexture = new PIXI.Texture(texture, topRightWallRect);
        this._middleRightTexture = new PIXI.Texture(texture, middleRightRect);
        this._bottomRightTexture = new PIXI.Texture(texture, bottomRightRect);
    };
    IsoTile.prototype._updateRect = function () {
        var frame = this._attributes.frames[this._frame];
        var ga = this._globalAttributes;
        this._topTexture.frame.x = frame.x;
        this._topTexture.frame.y = frame.y;
        this._topTexture.frame = this._topTexture.frame;
        this._topLeftWallTexture.frame.x = frame.x;
        this._topLeftWallTexture.frame.y = frame.y + ga.tileWidth / 2;
        this._topLeftWallTexture.frame = this._topLeftWallTexture.frame;
        this._middleLeftTexture.frame.x = frame.x;
        this._middleLeftTexture.frame.y = frame.y + ga.tileWidth / 2 + ga.heightSize;
        this._middleLeftTexture.frame = this._middleLeftTexture.frame;
        this._bottomLeftTexture.frame.x = frame.x;
        this._bottomLeftTexture.frame.y = frame.y + ga.tileWidth / 2 + ga.heightSize * 2;
        this._bottomLeftTexture.frame = this._bottomLeftTexture.frame;
        this._topRightWallTexture.frame.x = frame.x + ga.tileWidth / 2;
        this._topRightWallTexture.frame.y = frame.y + ga.tileWidth / 2;
        this._topRightWallTexture.frame = this._topRightWallTexture.frame;
        this._middleRightTexture.frame.x = frame.x + ga.tileWidth / 2;
        this._middleRightTexture.frame.y = frame.y + ga.tileWidth / 2 + ga.heightSize;
        this._middleRightTexture.frame = this._middleRightTexture.frame;
        this._bottomRightTexture.frame.x = frame.x + ga.tileWidth / 2;
        this._bottomRightTexture.frame.y = frame.y + ga.tileWidth / 2 + ga.heightSize * 2;
        this._bottomRightTexture.frame = this._bottomRightTexture.frame;
    };
    IsoTile.prototype._updatePosition = function () {
        var ga = this._globalAttributes;
        this.x = (this._tileX - this._tileY) * ga.tileWidth / 2 + this._tilemap.camera.x;
        this.y = (this._tileX + this._tileY) * ga.tileWidth / 4 + this._tilemap.camera.y;
    };
    IsoTile.prototype._buildBottomSprite = function (maxHeight) {
        var ga = this._globalAttributes;
        if (maxHeight[0] > 0) {
            var bottom = new PIXI.Sprite(this._bottomLeftTexture);
            bottom.y = -((this._tileHeight - maxHeight[0] + 1) * ga.heightSize);
            bottom.x = -ga.tileWidth / 2;
            this.addChild(bottom);
        }
        if (maxHeight[1] > 0) {
            var bottom = new PIXI.Sprite(this._bottomRightTexture);
            bottom.y = -((this._tileHeight - maxHeight[1] + 1) * ga.heightSize);
            bottom.x = 0;
            this.addChild(bottom);
        }
    };
    IsoTile.prototype._buildMiddleSprites = function (maxHeight) {
        var ga = this._globalAttributes;
        for (var i = 0; i < maxHeight[0]; ++i) {
            var middle = new PIXI.Sprite(this._middleLeftTexture);
            middle.y = -((this._tileHeight - i) * ga.heightSize);
            middle.x = -ga.tileWidth / 2;
            this.addChild(middle);
        }
        for (var i = 0; i < maxHeight[1]; ++i) {
            var middle = new PIXI.Sprite(this._middleRightTexture);
            middle.y = -((this._tileHeight - i) * ga.heightSize);
            middle.x = 0;
            this.addChild(middle);
        }
    };
    IsoTile.prototype._buildTopSprite = function (maxHeight) {
        var ga = this._globalAttributes;
        if (maxHeight[0] > 0) {
            var wallTop = new PIXI.Sprite(this._topLeftWallTexture);
            wallTop.y = -(ga.tileWidth / 2 + ga.heightSize * (this._tileHeight - 1));
            wallTop.x = -ga.tileWidth / 2;
            this.addChild(wallTop);
        }
        if (maxHeight[1] > 0) {
            var wallTop = new PIXI.Sprite(this._topRightWallTexture);
            wallTop.y = -(ga.tileWidth / 2 + ga.heightSize * (this._tileHeight - 1));
            wallTop.x = 0;
            this.addChild(wallTop);
        }
        var top = new PIXI.Sprite(this._topTexture);
        top.y = -(ga.tileWidth / 2 + ga.heightSize * this._tileHeight);
        top.anchor.x = 0.5;
        this.addChild(top);
    };
    IsoTile.prototype._calculateMaxHeight = function () {
        var right = this._tileHeight - this._tilemap.tileAt(this._tileX + 1, this._tileY)[1];
        var bottom = this._tileHeight - this._tilemap.tileAt(this._tileX, this._tileY + 1)[1];
        return [bottom, right];
    };
    IsoTile.prototype._buildSprites = function () {
        var maxHeight = this._calculateMaxHeight();
        this.removeChildren();
        this._buildBottomSprite(maxHeight);
        this._buildMiddleSprites(maxHeight.map(function (i) { return i - 1; }));
        this._buildTopSprite(maxHeight);
    };
    IsoTile.prototype._updateFrame = function (delta) {
        var length = this._attributes.frames.length;
        if (length > 1) {
            this._frameCount += delta;
            if (this._frameCount >= this._attributes.frameDelay) {
                while (this._frameCount >= this._attributes.frameDelay) {
                    this._frameCount -= this._attributes.frameDelay;
                    this._frame = (this._frame + 1) % length;
                }
                this._updateRect();
            }
        }
    };
    Object.defineProperty(IsoTile.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
            this._tilemap.refreshOrder();
        },
        enumerable: true,
        configurable: true
    });
    IsoTile.prototype.update = function (delta) {
        this._updatePosition();
        this._updateFrame(delta);
    };
    return IsoTile;
}(PIXI.Container));
exports.default = IsoTile;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var IsoCharacter = (function (_super) {
    __extends(IsoCharacter, _super);
    function IsoCharacter(attributes, texture, frameWidth, frameHeight) {
        var _this = _super.call(this) || this;
        _this._attributes = attributes;
        _this.texture = texture;
        _this.frameWidth = frameWidth;
        _this.frameHeight = frameHeight;
        _this._x = 0;
        _this._y = 0;
        _this._height = 0;
        _this._queue = [];
        _this.opacity = 1;
        _this._animation = null;
        _this._executing = false;
        return _this;
    }
    Object.defineProperty(IsoCharacter.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoCharacter.prototype, "x", {
        get: function () {
            return this._realX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoCharacter.prototype, "y", {
        get: function () {
            return this._realY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoCharacter.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    IsoCharacter.prototype.moveTo = function (x, y) {
        this._x = x;
        this._y = y;
        this._refreshCoordinates();
    };
    IsoCharacter.prototype.animate = function (frames, delay, loops, wait) {
        if (loops === void 0) { loops = -1; }
        if (wait === void 0) { wait = false; }
        var animation = new IsoCharacter.AnimationAction(loops, frames, delay);
        if (loops >= 0 && wait) {
            this._animation = null;
            this._queue.push(animation);
        }
        else {
            this._animation = animation;
        }
    };
    IsoCharacter.prototype.setFrame = function (index) {
    };
    IsoCharacter.prototype.face = function (direction) {
        this._queue.push(new IsoCharacter.FaceAction(direction));
    };
    IsoCharacter.prototype.walk = function (direction, speed) {
        this._queue.push(new IsoCharacter.WalkAction(direction, speed));
    };
    IsoCharacter.prototype.jump = function (direction, speed, heightDifference) {
        this._queue.push(new IsoCharacter.JumpAction(direction, speed, heightDifference));
    };
    IsoCharacter.prototype._refreshCoordinates = function () {
        this._realX = this._x * this._attributes.tileWidth;
        this._realY = this._y * this._attributes.tileWidth;
    };
    IsoCharacter.prototype._updateAnimation = function (delta) {
        if (this._animation) {
            this._animation.update(delta, this);
        }
    };
    IsoCharacter.prototype._updateQueue = function (delta) {
        var action = this._queue[0];
        if (action) {
            action.update(delta, this);
            if (action.isDone()) {
                this._queue.shift();
            }
        }
    };
    IsoCharacter.prototype.isMoving = function () {
        return false;
    };
    IsoCharacter.prototype.isAnimating = function () {
        return this.isMoving() || this._queue.length > 0;
    };
    IsoCharacter.prototype.update = function (delta) {
        this._updateQueue(delta);
        this._updateAnimation(delta);
    };
    return IsoCharacter;
}(PIXI.Container));
(function (IsoCharacter) {
    var WaitAction = (function () {
        function WaitAction(time) {
            this.time = time;
        }
        WaitAction.prototype.update = function (delta, character) {
            this.time -= delta;
        };
        WaitAction.prototype.isDone = function () {
            return this.time <= 0;
        };
        return WaitAction;
    }());
    IsoCharacter.WaitAction = WaitAction;
    var AnimationAction = (function () {
        function AnimationAction(loops, frames, delay) {
            this.loops = loops;
            this.frames = frames;
            this.delay = delay;
            this._currentFrame = 0;
            this._frameCount = 0;
        }
        AnimationAction.prototype.update = function (delta, character) {
            if (!this.isDone()) {
                this._frameCount += delta;
                if (this._frameCount > this.delay) {
                    while (this._frameCount > this.delay) {
                        this._frameCount -= this.delay;
                        this._currentFrame = (this._currentFrame + 1) % this.frames.length;
                    }
                    character.setFrame(this.frames[this._currentFrame]);
                }
            }
        };
        AnimationAction.prototype.isDone = function () {
            return this.loops === 0;
        };
        return AnimationAction;
    }());
    IsoCharacter.AnimationAction = AnimationAction;
    var FaceAction = (function () {
        function FaceAction(direction) {
            this.direction = direction;
        }
        FaceAction.prototype.update = function (delta, character) {
            character.face(this.direction);
            this._done = true;
        };
        FaceAction.prototype.isDone = function () {
            return this._done;
        };
        return FaceAction;
    }());
    IsoCharacter.FaceAction = FaceAction;
    var WalkAction = (function () {
        function WalkAction(direction, speed) {
            this.direction = direction;
            this.speed = speed;
        }
        WalkAction.prototype.update = function (delta, character) {
        };
        WalkAction.prototype.isDone = function () {
            return false;
        };
        return WalkAction;
    }());
    IsoCharacter.WalkAction = WalkAction;
    var JumpAction = (function () {
        function JumpAction(direction, speed, heightDifference) {
            this.direction = direction;
            this.speed = speed;
            this.heightDifference = heightDifference;
        }
        JumpAction.prototype.update = function (delta, character) {
        };
        JumpAction.prototype.isDone = function () {
            return false;
        };
        return JumpAction;
    }());
    IsoCharacter.JumpAction = JumpAction;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 2] = "UP";
        Direction[Direction["DOWN"] = 4] = "DOWN";
        Direction[Direction["LEFT"] = 6] = "LEFT";
        Direction[Direction["RIGHT"] = 8] = "RIGHT";
    })(Direction = IsoCharacter.Direction || (IsoCharacter.Direction = {}));
})(IsoCharacter || (IsoCharacter = {}));
exports.default = IsoCharacter;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var IsoTile_1 = __webpack_require__(1);
var IsoObjectSprite_1 = __webpack_require__(5);
var IsoCharacterSprite_1 = __webpack_require__(4);
var IsoMap = (function (_super) {
    __extends(IsoMap, _super);
    function IsoMap() {
        var _this = _super.call(this) || this;
        _this.clean();
        return _this;
    }
    IsoMap.prototype.setGeneralAttributes = function (attributes) {
        this._options = attributes;
    };
    IsoMap.prototype.setTileAttributes = function (attributes) {
        this._tiles = attributes;
    };
    IsoMap.prototype.setTextures = function (textures) {
        this._textures = textures;
    };
    IsoMap.prototype.setObjects = function (objects) {
        this._objects = objects;
    };
    IsoMap.prototype.setObjectDescriptors = function (objects) {
        this._objectDescriptors = objects;
    };
    IsoMap.prototype.setCharacters = function (characters) {
        this._characters = characters;
    };
    Object.defineProperty(IsoMap.prototype, "textures", {
        get: function () {
            return this._textures;
        },
        enumerable: true,
        configurable: true
    });
    IsoMap.prototype.setData = function (width, height, data) {
        this._mapWidth = width;
        this._mapHeight = height;
        this._mapData = data;
    };
    IsoMap.prototype.clean = function () {
        this.removeChildren();
        this._orderChanged = false;
        this._objects = [];
        this._characters = [];
        this._objectDescriptors = null;
        this.camera = new PIXI.Point();
        this._options = null;
        this._tiles = null;
        this._textures = null;
        this._mapData = null;
        this._mapWidth = null;
        this._mapHeight = null;
    };
    IsoMap.prototype.build = function () {
        this.removeChildren();
        if (this._options === null) {
            throw "IsoMap's options can't be null.";
        }
        if (this._tiles === null) {
            throw "IsoMap's tiles can't be null.";
        }
        if (this._textures === null) {
            throw "IsoMap's textures can't be null.";
        }
        if (this._mapData === null) {
            throw "IsoMap's mapData can't be null.";
        }
        if (this._mapWidth === null) {
            throw "IsoMap's mapWidth can't be null.";
        }
        if (this._mapHeight === null) {
            throw "IsoMap's mapHeight can't be null.";
        }
        if (this._objectDescriptors === null) {
            throw "IsoMap's object descriptors can't be null.";
        }
        var size = this._mapWidth * this._mapHeight;
        for (var y = 0; y < this._mapHeight; ++y) {
            for (var x = 0; x < this._mapWidth; ++x) {
                var data = this._mapData[x + y * this._mapWidth];
                var tileID = data[0];
                if (tileID >= 0) {
                    this.addChild(new IsoTile_1.default(this, x, y, data[1], this._tiles[tileID]));
                }
            }
        }
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var object = _a[_i];
            var h = this.tileAt(object.x, object.y)[1];
            this.addChild(new IsoObjectSprite_1.default(this, object, h, this._objectDescriptors[object.id]));
        }
        for (var _b = 0, _c = this._characters; _b < _c.length; _b++) {
            var character = _c[_b];
            this.addChild(new IsoCharacterSprite_1.default(this, character));
        }
    };
    IsoMap.prototype.tileAt = function (x, y) {
        if (x < 0 || x >= this._mapWidth || y < 0 || y >= this._mapHeight) {
            return [-1, -1];
        }
        return (this._mapData && this._mapData[x + y * this._mapWidth]) || [-1, -1];
    };
    Object.defineProperty(IsoMap.prototype, "globalAttributes", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    IsoMap.prototype.refreshOrder = function () {
        this._orderChanged = true;
    };
    IsoMap.prototype.update = function (delta) {
        if (this._orderChanged) {
            this.children.sort(function (a, b) { return a.z - b.z; });
            this._orderChanged = false;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.update(delta);
        }
    };
    return IsoMap;
}(PIXI.Container));
exports.default = IsoMap;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var IsoCharacterSprite = (function (_super) {
    __extends(IsoCharacterSprite, _super);
    function IsoCharacterSprite(tilemap, character) {
        var _this = _super.call(this) || this;
        _this._tilemap = tilemap;
        _this._character = character;
        _this.z = undefined;
        _this._refreshZ();
        return _this;
    }
    Object.defineProperty(IsoCharacterSprite.prototype, "tileX", {
        get: function () {
            return Math.floor(this.x / this._tilemap.globalAttributes.tileWidth);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoCharacterSprite.prototype, "tileY", {
        get: function () {
            return Math.floor(this.y / this._tilemap.globalAttributes.tileWidth);
        },
        enumerable: true,
        configurable: true
    });
    IsoCharacterSprite.prototype._refreshZ = function () {
        var ga = this._tilemap.globalAttributes;
        var z = (this.tileX + this.tileY) * ga.tileWidth / 2 + ga.tileWidth;
        if (z !== this.z) {
            this.z = z;
            this._tilemap.refreshOrder();
        }
    };
    IsoCharacterSprite.prototype.update = function (delta) {
        this._character.update(delta);
        this._refreshZ();
    };
    return IsoCharacterSprite;
}(PIXI.Sprite));
exports.default = IsoCharacterSprite;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var IsoObjectSprite = (function (_super) {
    __extends(IsoObjectSprite, _super);
    function IsoObjectSprite(tilemap, tile, tileHeight, obj) {
        var _this = _super.call(this) || this;
        _this._tilemap = tilemap;
        _this._tileHeight = tileHeight;
        _this.texture = new PIXI.Texture(tilemap.textures[obj.tileset], obj.frame);
        _this.anchor.x = 0.5;
        _this.anchor.y = 1;
        _this._object = obj;
        _this._tile = tile;
        var ga = _this._tilemap.globalAttributes;
        _this.z = (tile.x + tile.y) * ga.tileWidth / 2 + ga.tileWidth;
        return _this;
    }
    Object.defineProperty(IsoObjectSprite.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
            this._tilemap.refreshOrder();
        },
        enumerable: true,
        configurable: true
    });
    IsoObjectSprite.prototype._updatePosition = function () {
        var ga = this._tilemap.globalAttributes;
        var camera = this._tilemap.camera;
        this.x = (this._tile.x - this._tile.y) * ga.tileWidth / 2 + camera.x;
        this.y = (this._tile.x + this._tile.y) * ga.tileWidth / 4 - ga.heightSize * this._tileHeight + camera.y;
    };
    IsoObjectSprite.prototype.update = function (delta) {
        this._updatePosition();
    };
    return IsoObjectSprite;
}(PIXI.Sprite));
exports.default = IsoObjectSprite;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IsoMap_1 = __webpack_require__(3);
var IsoTile_1 = __webpack_require__(1);
var IsoCharacter_1 = __webpack_require__(2);
var IsoMap = (function (_super) {
    __extends(IsoMap, _super);
    function IsoMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IsoMap;
}(IsoMap_1.default));
exports.IsoMap = IsoMap;
;
var IsoTile = (function (_super) {
    __extends(IsoTile, _super);
    function IsoTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IsoTile;
}(IsoTile_1.default));
exports.IsoTile = IsoTile;
;
var IsoCharacter = (function (_super) {
    __extends(IsoCharacter, _super);
    function IsoCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IsoCharacter;
}(IsoCharacter_1.default));
exports.IsoCharacter = IsoCharacter;
;
var PIXI;
(function (PIXI) {
    var IsoMap = (function (_super) {
        __extends(IsoMap, _super);
        function IsoMap() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IsoMap;
    }(IsoMap_1.default));
    PIXI.IsoMap = IsoMap;
    ;
    var IsoTile = (function (_super) {
        __extends(IsoTile, _super);
        function IsoTile() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IsoTile;
    }(IsoTile_1.default));
    PIXI.IsoTile = IsoTile;
    ;
    var IsoCharacter = (function (_super) {
        __extends(IsoCharacter, _super);
        function IsoCharacter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IsoCharacter;
    }(IsoCharacter_1.default));
    PIXI.IsoCharacter = IsoCharacter;
    ;
})(PIXI || (PIXI = {}));


/***/ })
/******/ ]);