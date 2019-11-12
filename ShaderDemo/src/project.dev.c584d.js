window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  FileDrop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3712TBsAFKELlEcit8NNJa", "FileDrop");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FileDrop = function(_super) {
      __extends(FileDrop, _super);
      function FileDrop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.onDropHandler = null;
        return _this;
      }
      FileDrop.prototype.onLoad = function() {
        var el = document.getElementById("GameCanvas");
        el.addEventListener("dragover", this.handleDragOver, false);
        el.addEventListener("drop", this.handleFileSelect.bind(this), false);
      };
      FileDrop.prototype.handleDragOver = function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "copy";
      };
      FileDrop.prototype.handleFileSelect = function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        var files = evt.dataTransfer.files;
        Promise.all(Array.from(files).map(fileReaderPromise)).then(this.readerOnLoadHandler.bind(this));
      };
      FileDrop.prototype.readerOnLoadHandler = function(rs) {
        this.onDropHandler && this.onDropHandler.emit([ rs ]);
      };
      __decorate([ property(cc.Component.EventHandler) ], FileDrop.prototype, "onDropHandler", void 0);
      FileDrop = __decorate([ ccclass ], FileDrop);
      return FileDrop;
    }(cc.Component);
    exports.default = FileDrop;
    function fileReaderPromise(file) {
      var name = file.name;
      var type = file.type;
      return new Promise(function(res, rej) {
        var reader = new FileReader();
        switch (file.type) {
         case "image/png":
         case "image/jpg":
         case "image/jpeg":
          reader.readAsArrayBuffer(file);
          reader.onload = function(e) {
            var image = new Image();
            var url = window.URL.createObjectURL(new Blob([ e.target.result ], {
              type: file.type
            }));
            image.src = url;
            image.onload = function() {
              var d = {
                name: name,
                type: type,
                result: image
              };
              res(d);
            };
          };
          break;

         default:
          reader.readAsText(file);
          reader.onload = function(e) {
            file;
            var d = {
              name: name,
              type: type,
              result: e.target.result
            };
            res(d);
          };
        }
      });
    }
    cc._RF.pop();
  }, {} ],
  InputePropertys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b50aa6AZZKkancd/SiKeIk", "InputePropertys");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var InputeProperty_1 = require("./InputeProperty");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InputePropertys = function(_super) {
      __extends(InputePropertys, _super);
      function InputePropertys() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.ips = [];
        return _this;
      }
      InputePropertys.prototype.setTitle = function(name) {
        this.title.string = name;
      };
      InputePropertys.prototype.setToggleActions = function(titleName, paramName, defaultValues, actions) {
        this.title.string = titleName;
        this.ips[0].setToggleAction(paramName, defaultValues[0], actions[0]);
      };
      InputePropertys.prototype.setEditorActions = function(titleName, paramName, defaultValues, actions) {
        var _this = this;
        this.title.string = titleName;
        this.ips.forEach(function(ip) {
          ip.node.active = false;
        });
        actions.forEach(function(action, index) {
          _this.ips[index].node.active = true;
          _this.ips[index].setEditorAction(paramName, defaultValues[index], action);
        });
      };
      InputePropertys.prototype.setSliderActions = function(titleName, paramName, defaultValues, actions, min, max) {
        var _this = this;
        this.title.string = titleName;
        this.ips.forEach(function(ip) {
          ip.node.active = false;
        });
        actions.forEach(function(action, index) {
          _this.ips[index].node.active = true;
          _this.ips[index].setEditorAction(paramName, defaultValues[index], action);
          _this.ips[index].setSliderAction(paramName, defaultValues[index], action, min, max);
        });
      };
      __decorate([ property(cc.Label) ], InputePropertys.prototype, "title", void 0);
      __decorate([ property(InputeProperty_1.default) ], InputePropertys.prototype, "ips", void 0);
      InputePropertys = __decorate([ ccclass ], InputePropertys);
      return InputePropertys;
    }(cc.Component);
    exports.default = InputePropertys;
    cc._RF.pop();
  }, {
    "./InputeProperty": "InputeProperty"
  } ],
  InputeProperty: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fe4dbUy8NKXYXiGN7aFvYH", "InputeProperty");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InputeProperty = function(_super) {
      __extends(InputeProperty, _super);
      function InputeProperty() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.editor = null;
        _this.toggle = null;
        _this.slider = null;
        _this.paramName = "";
        return _this;
      }
      InputeProperty.prototype.setEditorAction = function(paramName, defaultValue, action) {
        this.paramName = paramName;
        this.editorAction = action;
        this.editor.string = defaultValue + "";
        var event = new cc.Component.EventHandler();
        event.target = this.node;
        event.component = "InputeProperty";
        event.handler = "doEditorAction";
        this.editor.editingDidEnded = [ event ];
      };
      InputeProperty.prototype.setToggleAction = function(paramName, defaultValues, action) {
        this.paramName = paramName;
        this.toggleAction = action;
        this.toggle.isChecked = 1 === defaultValues;
        var event = new cc.Component.EventHandler();
        event.target = this.node;
        event.component = "InputeProperty";
        event.handler = "doToggleAction";
        this.toggle.clickEvents = [ event ];
      };
      InputeProperty.prototype.setSliderAction = function(paramName, defaultValues, action, min, max) {
        this.paramName = paramName;
        this.sliderAction = action;
        this.editorAction = action;
        this.min = min;
        this.max = max;
        this.slider.progress = (defaultValues - min) / (max - min);
        var event = new cc.Component.EventHandler();
        event.target = this.node;
        event.component = "InputeProperty";
        event.handler = "doSliderAction";
        this.slider.slideEvents = [ event ];
      };
      InputeProperty.prototype.doEditorAction = function() {
        var n = Number(this.editor.string);
        if (isNaN(n)) return;
        this.slider && (this.slider.progress = (n - this.min) / (this.max - this.min));
        this.editorAction(this.paramName, this.editor.string);
      };
      InputeProperty.prototype.doToggleAction = function() {
        this.toggleAction(this.paramName, this.toggle.isChecked ? "0" : "1");
      };
      InputeProperty.prototype.doSliderAction = function() {
        var value = Math.floor(this.slider.progress * (this.max - this.min) + this.min);
        this.editor.string = value + "";
        this.sliderAction(this.paramName, value + "");
      };
      __decorate([ property(cc.Label) ], InputeProperty.prototype, "title", void 0);
      __decorate([ property(cc.EditBox) ], InputeProperty.prototype, "editor", void 0);
      __decorate([ property(cc.Toggle) ], InputeProperty.prototype, "toggle", void 0);
      __decorate([ property(cc.Slider) ], InputeProperty.prototype, "slider", void 0);
      InputeProperty = __decorate([ ccclass ], InputeProperty);
      return InputeProperty;
    }(cc.Component);
    exports.default = InputeProperty;
    cc._RF.pop();
  }, {} ],
  MVP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9253c3ZCZZK0LwBg6ltErwl", "MVP");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MVP = "\n#define useModel\n#define use2DPos\nprecision highp float;\n\n\nuniform mat4 viewProj;\n\n#ifdef use2DPos\nattribute vec2 a_position;\n#else\nattribute vec3 a_position;\n#endif\n\nattribute lowp vec4 a_color;\n#ifdef useTint\nattribute lowp vec4 a_color0;\n#endif\n\n#ifdef useModel\nuniform mat4 model;\n#endif\n\nattribute mediump vec2 a_uv0;\nvarying mediump vec2 v_uv0;\n\nvarying lowp vec4 v_light;\n#ifdef useTint\nvarying lowp vec4 v_dark;\n#endif\n\nvoid main () {\n    mat4 mvp;\n    #ifdef useModel\n      mvp = viewProj * model;\n    #else\n      mvp = viewProj;\n    #endif\n\n    #ifdef use2DPos\n    vec4 pos = mvp * vec4(a_position, 0, 1);\n    #else\n    vec4 pos = mvp * vec4(a_position, 1);\n    #endif\n\n    v_light = a_color;\n    #ifdef useTint\n      v_dark = a_color0;\n    #endif\n\n    v_uv0 = a_uv0;\n\n    gl_Position = pos;\n}";
    cc._RF.pop();
  }, {} ],
  ShaderAclouisCircle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "960d0NG9X5B+Km4Slj75Juo", "ShaderAclouisCircle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderAclouisCircle",
      params: [ {
        name: "iResolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "uvfix",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
      }, {
        name: "isClockwise",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "scale",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "arcSize",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "arcCountRef",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "xUseAbs",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "yUseAbs",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "xUseExp",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "yUseExp",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "rColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "gColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "bColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n\n        // Shader Toy\n        // https://www.shadertoy.com/view/3sdSDH\n\n        uniform sampler2D texture;\n        uniform vec2    iResolution;\n        uniform float   time;\n        uniform vec4    uvfix;\n        varying vec2    v_uv0;\n\n        uniform int    isClockwise;\n        uniform int    xUseAbs;\n        uniform int    yUseAbs;\n        uniform int    xUseExp;\n        uniform int    yUseExp;\n        uniform float   speed;\n        uniform float   scale;\n        uniform float   arcSize;\n        uniform float   arcCountRef;\n        uniform float   rColor;\n        uniform float   gColor;\n        uniform float   bColor;\n\n\n        vec2 bigger(in vec2 uv){\n            return uvfix.xy * uv + uvfix.zw;\n        }\n\n        void main(){\n\n            vec2 p = bigger(v_uv0);\n            p = (p * 2.) - 1.;\n\n            float clock = speed * time;\n\n            float angle = atan(p.x,p.y);\n            if(isClockwise == 1){\n                angle *= -1.0;\n            }\n\n            float radius = length(p) * 1./scale;\n            vec2 uv = vec2(angle/clock,radius);\n            uv = (2.0 * uv) - 1.;\n\n            //float xValue = ((sin(arcCountRef * uv.x * clock)));\n\n            float xValue = ((sin(arcCountRef * uv.x * clock)));\n            float yValue = (abs(1.0 / (50.0 * uv.y)));\n\n            if(xUseAbs==1){\n                xValue = abs(xValue);\n            }\n\n            if(yUseAbs==1){\n                yValue = abs(yValue);\n            }\n\n            if(xUseExp==1){\n                xValue = exp(xValue);\n            }\n\n            if(yUseExp==1){\n                yValue = exp(yValue);\n            }\n\n            vec3 horBeam = vec3( xValue * yValue * arcSize);\n            // vec4 tex = texture2D(texture, v_uv0);\n            vec3 horColour = vec3(rColor, gColor, bColor);\n            gl_FragColor = vec4( horBeam * horColour , horBeam.r * horBeam.g * horBeam.b);\n        }\n\n\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderAclouisCircle = function(_super) {
      __extends(ShaderAclouisCircle, _super);
      function ShaderAclouisCircle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.isClockwise = true;
        _this.speed = 2;
        _this.scale = 1;
        _this.arcSize = 1;
        _this.arcCountRef = 1;
        _this.xUseAbs = false;
        _this.yUseAbs = true;
        _this.xUseExp = false;
        _this.yUseExp = false;
        _this.rColor = .4;
        _this.gColor = .4;
        _this.bColor = 1;
        _this.time = 0;
        return _this;
      }
      ShaderAclouisCircle.prototype.doStart = function(sprite, material, dt) {
        var iResolution = cc.v2(sprite.node.getContentSize().width, sprite.node.getContentSize().height);
        var uvfix = ShaderComponent_1.getUVfix(sprite.spriteFrame);
        this.time = 10;
        material.setParamValue("iResolution", iResolution);
        material.setParamValue("uvfix", uvfix);
        material.setParamValue("time", this.time);
        material.setParamValue("isClockwise", this.isClockwise ? 1 : 0);
        material.setParamValue("speed", this.speed);
        material.setParamValue("scale", this.scale);
        material.setParamValue("arcSize", this.arcSize);
        material.setParamValue("arcCountRef", this.arcCountRef);
        material.setParamValue("xUseAbs", this.xUseAbs ? 1 : 0);
        material.setParamValue("yUseAbs", this.yUseAbs ? 1 : 0);
        material.setParamValue("xUseExp", this.xUseExp ? 1 : 0);
        material.setParamValue("yUseExp", this.yUseExp ? 1 : 0);
        material.setParamValue("rColor", this.rColor);
        material.setParamValue("gColor", this.gColor);
        material.setParamValue("bColor", this.bColor);
      };
      ShaderAclouisCircle.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        tooltip: "\u9806\u6642\u9418\u65cb\u8f49"
      }) ], ShaderAclouisCircle.prototype, "isClockwise", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u65cb\u8f49\u901f\u7387"
      }) ], ShaderAclouisCircle.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5927\u5c0f"
      }) ], ShaderAclouisCircle.prototype, "scale", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5f27\u5ea6\u5bec\u5ea6"
      }) ], ShaderAclouisCircle.prototype, "arcSize", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5f27\u5ea6\u6578\u91cf\u53c3\u6578"
      }) ], ShaderAclouisCircle.prototype, "arcCountRef", void 0);
      __decorate([ property({
        tooltip: "uv.x\u51fd\u6578\u589e\u52a0\u7d55\u5c0d\u503c\u8a08\u7b97"
      }) ], ShaderAclouisCircle.prototype, "xUseAbs", void 0);
      __decorate([ property({
        tooltip: "uv.y\u51fd\u6578\u589e\u52a0\u7d55\u5c0d\u503c\u8a08\u7b97"
      }) ], ShaderAclouisCircle.prototype, "yUseAbs", void 0);
      __decorate([ property({
        tooltip: "uv.x\u51fd\u6578\u589e\u52a0exp\u8a08\u7b97"
      }) ], ShaderAclouisCircle.prototype, "xUseExp", void 0);
      __decorate([ property({
        tooltip: "uv.y\u51fd\u6578\u589e\u52a0exp\u8a08\u7b97"
      }) ], ShaderAclouisCircle.prototype, "yUseExp", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5716\u5f62R\u8272\u5f69",
        slide: true,
        min: 0,
        max: 1,
        visible: function() {
          return !this.useTextureColor;
        }
      }) ], ShaderAclouisCircle.prototype, "rColor", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5716\u5f62G\u8272\u5f69",
        slide: true,
        min: 0,
        max: 1,
        visible: function() {
          return !this.useTextureColor;
        }
      }) ], ShaderAclouisCircle.prototype, "gColor", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5716\u5f62B\u8272\u5f69",
        slide: true,
        min: 0,
        max: 1,
        visible: function() {
          return !this.useTextureColor;
        }
      }) ], ShaderAclouisCircle.prototype, "bColor", void 0);
      ShaderAclouisCircle = __decorate([ ccclass ], ShaderAclouisCircle);
      return ShaderAclouisCircle;
    }(ShaderComponent_1.default);
    exports.default = ShaderAclouisCircle;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderBallOfFire: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c87fQm9PZOubQskgV3+1mg", "ShaderBallOfFire");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var shader = {
      name: "ShaderBallOfFire",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "centerSize",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "size",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "count",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT
      }, {
        name: "glowColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "clearColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        min: 0,
        max: 7
      } ],
      vert: MVP_1.MVP,
      frag: "\n\n\n        varying vec2 v_uv0;\n        uniform vec4 uvfix;\n        uniform float time;\n        uniform int count;\n        uniform float centerSize;\n        uniform float size;\n        uniform float speed;\n        uniform vec4 glowColor;\n        uniform int clearColor;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n\n        float snoise(vec3 uv, float res)\n        {\n            const vec3 s = vec3(1e0, 1e2, 1e3);\n\n            uv *= res;\n\n            vec3 uv0 = floor(mod(uv, res))*s;\n            vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;\n\n            vec3 f = fract(uv);\n            f = f*f*(3.0-2.0*f);\n\n            vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,\n                        uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);\n\n            vec4 r = fract(sin(v*1e-1)*1e3);\n            float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n\n            r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);\n            float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n\n            return mix(r0, r1, f.z)*2.-1.;\n        }\n\n        void main( )\n        {\n            vec2 uv = bigger(v_uv0.xy);\n            uv.y = 1. - uv.y;\n            //\u7f6e\u4e2d\n            uv = uv-vec2(0.5,0.5);\n\n            float color = centerSize - (size*length(2.*uv));\n\n            vec3 coord = vec3(atan(uv.x,uv.y)/6.2832+0.5, length(uv)*speed, .5);\n\n\n            for(int i = 1; i <= 10; i++)\n            {\n                if(i>count){\n                    break;\n                }\n                float power = pow(2.0, float(i));\n                color += (1.5 / power) * snoise(coord + vec3(0.,-time*.05, time*.01), power*16.);\n            }\n            vec4 tempColor = vec4( color, pow(max(color,0.),2.), pow(max(color,0.),3.), 1.0)*glowColor;\n            float alpha = 0.;\n            if(clearColor == 1){\n                alpha = tempColor.r;\n            } else if(clearColor == 2){\n                alpha = tempColor.g;\n            } else if(clearColor == 3){\n                alpha = tempColor.b;\n            } else if(clearColor == 4){\n                alpha = tempColor.r*tempColor.g;\n            } else if(clearColor == 5){\n                alpha = tempColor.r*tempColor.b;\n            } else if(clearColor == 6){\n                alpha = tempColor.g*tempColor.b;\n            } else if(clearColor == 7){\n                alpha = tempColor.r*tempColor.g*tempColor.b;\n            }\n            gl_FragColor = vec4(tempColor.rgb,alpha*glowColor.a);\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var ShaderBallOfFire = function(_super) {
      __extends(ShaderBallOfFire, _super);
      function ShaderBallOfFire() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.centerSize = 3;
        _this.size = 4;
        _this.speed = .4;
        _this.count = 7;
        _this.color = cc.color(255, 102, 38.25);
        _this.clearColor = 1;
        return _this;
      }
      ShaderBallOfFire.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        material.setParamValue("time", this.time);
        material.setParamValue("count", this.count);
        material.setParamValue("centerSize", this.centerSize);
        material.setParamValue("size", this.size);
        material.setParamValue("speed", this.speed);
        material.setParamValue("glowColor", {
          x: this.color.getR() / 255,
          y: this.color.getG() / 255,
          z: this.color.getB() / 255,
          w: this.color.getA() / 255
        });
        material.setParamValue("clearColor", this.clearColor);
      };
      ShaderBallOfFire.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderBallOfFire.prototype, "centerSize", void 0);
      __decorate([ property(cc.Float) ], ShaderBallOfFire.prototype, "size", void 0);
      __decorate([ property(cc.Float) ], ShaderBallOfFire.prototype, "speed", void 0);
      __decorate([ property(cc.Integer) ], ShaderBallOfFire.prototype, "count", void 0);
      __decorate([ property(cc.Color) ], ShaderBallOfFire.prototype, "color", void 0);
      __decorate([ property({
        type: cc.Enum(ShaderComponent_1.CLEAR_COLOR)
      }) ], ShaderBallOfFire.prototype, "clearColor", void 0);
      ShaderBallOfFire = __decorate([ ccclass ], ShaderBallOfFire);
      return ShaderBallOfFire;
    }(ShaderComponent_1.default);
    exports.default = ShaderBallOfFire;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderClouds: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3a42nBtYJMLoAuU2mNZFXi", "ShaderClouds");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderClouds",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "rotation",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "cloudscale",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "clouddark",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "cloudlight",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "cloudcover",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "cloudalpha",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "clouddot",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n\n    uniform vec4 color;\n    uniform float time;\n    uniform float rotation;\n    uniform vec2 resolution;\n\n    mat2 rotationX( in float angle ) {\n        return mat2(\tcos(radians(angle)),\t-sin(radians(angle)),\n                        sin(radians(angle)),\t cos(radians(angle)));\n    }\n\n    uniform float cloudscale;\n    uniform float speed;\n    uniform float clouddark;\n    uniform float cloudlight;\n    uniform float cloudcover;\n    uniform float cloudalpha;\n    uniform float clouddot;\n    const float skytint = 0.5;\n    const vec3 skycolour1 = vec3(0.2, 0.4, 0.6);\n    const vec3 skycolour2 = vec3(0.4, 0.7, 1.0);\n\n    const mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );\n\n    vec2 hash( vec2 p ) {\n        p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));\n        return -1.0 + 2.0*fract(sin(p)*43758.5453123);\n    }\n\n    float noise( in vec2 p ) {\n        const float K1 = 0.366025404; // (sqrt(3)-1)/2;\n        const float K2 = 0.211324865; // (3-sqrt(3))/6;\n        vec2 i = floor(p + (p.x+p.y)*K1);\n        vec2 a = p - i + (i.x+i.y)*K2;\n        vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0); //vec2 of = 0.5 + 0.5*vec2(sign(a.x-a.y), sign(a.y-a.x));\n        vec2 b = a - o + K2;\n        vec2 c = a - 1.0 + 2.0*K2;\n        vec3 h = max(0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );\n        vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));\n        return dot(n, vec3(clouddot));\n    }\n\n    float fbm(vec2 n) {\n        float total = 0.0, amplitude = 0.1;\n        for (int i = 0; i < 7; i++) {\n            total += noise(n) * amplitude;\n            n = m * n;\n            amplitude *= 0.4;\n        }\n        return total;\n    }\n\n    // -----------------------------------------------\n\n    void main() {\n        vec2 p = gl_FragCoord.xy / resolution.xy;\n        vec2 uv = p*vec2(resolution.x/resolution.y,1.0);\n        float t = time * speed;\n        float q = fbm(uv * cloudscale * 0.5);\n\n        //ridged noise shape\n        float r = 0.0;\n        uv *= cloudscale;\n        uv -= (q - vec2(t, 0.0)) * rotationX(rotation);\n        float weight = 0.8;\n        for (int i=0; i<8; i++){\n            r += abs(weight*noise( uv ));\n            uv = m*uv + vec2(t, 0.0) * rotationX(rotation);\n            weight *= 0.7;\n        }\n\n        //noise shape\n        float f = 0.0;\n        uv = p*vec2(resolution.x/resolution.y,1.0);\n        uv *= cloudscale;\n        uv -= (q - vec2(t, 0.0)) * rotationX(rotation);\n        weight = 0.7;\n        for (int i=0; i<8; i++){\n            f += weight*noise( uv );\n            uv = m*uv + vec2(t, 0.0) * rotationX(rotation);\n            weight *= 0.6;\n        }\n\n        f *= r + f;\n\n        //noise colour\n        float c = 0.0;\n        t = time * speed * 2.0;\n        uv = p*vec2(resolution.x/resolution.y,1.0);\n        uv *= cloudscale*2.0;\n        uv -= (q - vec2(t, 0.0)) * rotationX(rotation);\n        weight = 0.4;\n        for (int i=0; i<7; i++){\n            c += weight*noise( uv );\n            uv = m*uv + vec2(t, 0.0) * rotationX(rotation);\n            weight *= 0.6;\n        }\n\n        //noise ridge colour\n        float c1 = 0.0;\n        t = time * speed * 3.0;\n        uv = p*vec2(resolution.x/resolution.y,1.0);\n        uv *= cloudscale*3.0;\n        uv -= (q - vec2(t, 0.0)) * rotationX(rotation);\n        weight = 0.4;\n        for (int i=0; i<7; i++){\n            c1 += abs(weight*noise( uv ));\n            uv = m*uv + vec2(t, 0.0) * rotationX(rotation);\n            weight *= 0.6;\n        }\n\n        c += c1;\n\n        vec3 skycolour = mix(skycolour2, skycolour1, p.y);\n        vec3 cloudcolour = vec3(1.1, 1.1, 0.9) * clamp((clouddark + cloudlight*c), 0.0, 1.0);\n\n        f = cloudcover + cloudalpha*f*r;\n\n        vec3 result = mix(skycolour, clamp(skytint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));\n\n        float alpha = min(min(result.r, result.g), result.b);\n        gl_FragColor = vec4( result, alpha );\n    }\n"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderClouds = function(_super) {
      __extends(ShaderClouds, _super);
      function ShaderClouds() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.rotation = 0;
        _this.speed = .03;
        _this.cloudscale = 1.1;
        _this.clouddark = .6;
        _this.cloudlight = .4;
        _this.cloudcover = .2;
        _this.cloudalpha = 8;
        _this.clouddot = 70;
        _this.skytint = .5;
        return _this;
      }
      ShaderClouds.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var size = cc.winSize;
        var resolution = cc.v2(size.width, size.height);
        material.setParamValue("rotation", this.rotation);
        material.setParamValue("resolution", resolution);
        material.setParamValue("speed", this.speed);
        material.setParamValue("cloudscale", this.cloudscale);
        material.setParamValue("clouddark", this.clouddark);
        material.setParamValue("cloudlight", this.cloudlight);
        material.setParamValue("cloudcover", this.cloudcover);
        material.setParamValue("cloudalpha", this.cloudalpha);
        material.setParamValue("clouddot", this.clouddot);
        material.setParamValue("skytint", this.skytint);
        material.setParamValue("time", this.time);
      };
      ShaderClouds.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "rotation", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "speed", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "cloudscale", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "clouddark", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "cloudlight", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "cloudcover", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "cloudalpha", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "clouddot", void 0);
      __decorate([ property(cc.Float) ], ShaderClouds.prototype, "skytint", void 0);
      ShaderClouds = __decorate([ ccclass ], ShaderClouds);
      return ShaderClouds;
    }(ShaderComponent_1.default);
    exports.default = ShaderClouds;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9dc0YRchJBcYljyDc/3kic", "ShaderComponent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, playOnFocus = _a.playOnFocus, executeInEditMode = _a.executeInEditMode;
    var CLEAR_COLOR;
    (function(CLEAR_COLOR) {
      CLEAR_COLOR[CLEAR_COLOR["CLEAR_COLOR"] = 0] = "CLEAR_COLOR";
      CLEAR_COLOR[CLEAR_COLOR["R"] = 1] = "R";
      CLEAR_COLOR[CLEAR_COLOR["G"] = 2] = "G";
      CLEAR_COLOR[CLEAR_COLOR["B"] = 3] = "B";
      CLEAR_COLOR[CLEAR_COLOR["RG"] = 4] = "RG";
      CLEAR_COLOR[CLEAR_COLOR["RB"] = 5] = "RB";
      CLEAR_COLOR[CLEAR_COLOR["GB"] = 6] = "GB";
      CLEAR_COLOR[CLEAR_COLOR["RGB"] = 7] = "RGB";
    })(CLEAR_COLOR = exports.CLEAR_COLOR || (exports.CLEAR_COLOR = {}));
    function getUVfix(frame) {
      var r = frame.getRect();
      var t = frame.getTexture();
      var uvfix = {
        x: t.width / r.width,
        y: t.height / r.height,
        z: r.x / t.width,
        w: r.y / t.height
      };
      return uvfix;
    }
    exports.getUVfix = getUVfix;
    var ShaderComponent = function(_super) {
      __extends(ShaderComponent, _super);
      function ShaderComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playOnStart = true;
        _this.applied = false;
        _this.shaderMaterial = null;
        return _this;
      }
      ShaderComponent.prototype.onDestroy = function() {
        var obj = this.getRenderComponent();
        obj instanceof cc.Sprite && obj.isValid && obj.setState(cc.Sprite.State.NORMAL);
      };
      ShaderComponent.prototype.onLoad = function() {
        var c = this.getRenderComponent();
        c || this.addComponent(cc.Sprite);
      };
      ShaderComponent.prototype.start = function() {
        var _this = this;
        this.playOnStart && this.applyShader();
        if (this.doStart) {
          var obj_1 = this.getRenderComponent();
          if (obj_1 instanceof cc.Sprite) {
            var next = function() {
              var uvfix = getUVfix(obj_1.spriteFrame);
              _this.shaderMaterial.setParamValue("uvfix", uvfix);
            };
            this.scheduleOnce(next, 0);
          }
          this.doStart(this.getRenderComponent(), this.shaderMaterial);
        }
      };
      ShaderComponent.prototype.update = function(dt) {
        if (!this.applied) return;
        if (this.doUpdate) {
          var c = this.getRenderComponent();
          this.doUpdate(c, c._material, dt);
          this.updateMaterialCache(c, dt);
        }
      };
      ShaderComponent.prototype.getRenderComponent = function() {
        return this.getComponent(cc.Sprite) || this.getComponent(sp.Skeleton);
      };
      ShaderComponent.prototype.updateMaterialCache = function(comp, dt) {
        var cache = comp._materialCache;
        for (var k in cache) if (cache.hasOwnProperty(k)) {
          var m = cache[k];
          this.doUpdate(comp, m, dt);
        }
      };
      ShaderComponent.prototype.applyShader = function() {
        var _this = this;
        this.createShader();
        if (!this.shaderFunc || this.applied || !this.shaderMaterial) return;
        this.applied = true;
        var obj = this.getRenderComponent();
        var texture;
        if (obj instanceof cc.Sprite) {
          texture = obj.spriteFrame.getTexture();
          var material = obj._materials && obj._materials[this.shaderFunc.name];
          material || obj.setMaterials(this.shaderFunc.name, this.shaderMaterial);
          obj._updateMaterial(this.shaderMaterial);
          obj.activateMaterial(this.shaderFunc.name);
        } else if (obj instanceof sp.Skeleton) {
          texture = obj.skeletonData.textures[0];
          if (this.shaderMaterial.texture !== texture) {
            this.shaderMaterial.texture = texture;
            obj._updateMaterial(this.shaderMaterial);
          } else this.shaderMaterial !== obj._material && obj._updateMaterial(this.shaderMaterial);
        }
        obj.markForUpdateRenderData(true);
        obj.markForRender(true);
        this.shaderFunc.params && this.shaderFunc.params.forEach(function(item) {
          void 0 !== item.defaultValue && _this.shaderMaterial.setParamValue(item.name, item.defaultValue);
        });
      };
      ShaderComponent.prototype.createShader = function() {
        var obj = this.getRenderComponent();
        if (!this.shaderFunc || this.shaderMaterial) return;
        var m = ShaderManager_1.shaderManager.createShaderMaterial(obj, this.shaderFunc);
        this.shaderMaterial = m;
        obj.node && (m.color = obj.node.color);
        if (obj instanceof cc.Sprite) {
          var t = obj.spriteFrame.getTexture();
          m.texture = t;
        } else obj instanceof sp.Skeleton && (m.texture = obj.skeletonData.textures[0]);
      };
      ShaderComponent.prototype.getMaterial = function() {
        return this.shaderMaterial;
      };
      __decorate([ property(cc.Boolean) ], ShaderComponent.prototype, "playOnStart", void 0);
      ShaderComponent = __decorate([ ccclass ], ShaderComponent);
      return ShaderComponent;
    }(cc.Component);
    exports.default = ShaderComponent;
    cc._RF.pop();
  }, {
    "./ShaderManager": "ShaderManager"
  } ],
  ShaderDemo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b6b2zygEFMipBmu8VOBa2B", "ShaderDemo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderFunc_1 = require("../submodule/shader/script/ShaderFunc");
    var InputeProperty_1 = require("./InputeProperty");
    var InputePropertys_1 = require("./InputePropertys");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SHADER_LIST;
    (function(SHADER_LIST) {
      SHADER_LIST[SHADER_LIST["Default"] = 0] = "Default";
      SHADER_LIST[SHADER_LIST["ShaderAclouisCircle"] = 1] = "ShaderAclouisCircle";
      SHADER_LIST[SHADER_LIST["ShaderBallOfFire"] = 2] = "ShaderBallOfFire";
      SHADER_LIST[SHADER_LIST["ShaderClouds"] = 3] = "ShaderClouds";
      SHADER_LIST[SHADER_LIST["ShaderDissolve2"] = 4] = "ShaderDissolve2";
      SHADER_LIST[SHADER_LIST["ShaderElectricGrid"] = 5] = "ShaderElectricGrid";
      SHADER_LIST[SHADER_LIST["ShaderExplosion"] = 6] = "ShaderExplosion";
      SHADER_LIST[SHADER_LIST["ShaderFire"] = 7] = "ShaderFire";
      SHADER_LIST[SHADER_LIST["ShaderFlame301Remix2"] = 8] = "ShaderFlame301Remix2";
      SHADER_LIST[SHADER_LIST["ShaderFlame301Remix3"] = 9] = "ShaderFlame301Remix3";
      SHADER_LIST[SHADER_LIST["ShaderFlameAvin"] = 10] = "ShaderFlameAvin";
      SHADER_LIST[SHADER_LIST["ShaderFlameBrady"] = 11] = "ShaderFlameBrady";
      SHADER_LIST[SHADER_LIST["ShaderFlameOzzy"] = 12] = "ShaderFlameOzzy";
      SHADER_LIST[SHADER_LIST["ShaderFlameWADE"] = 13] = "ShaderFlameWADE";
      SHADER_LIST[SHADER_LIST["ShaderFluxay"] = 14] = "ShaderFluxay";
      SHADER_LIST[SHADER_LIST["ShaderFluxay2"] = 15] = "ShaderFluxay2";
      SHADER_LIST[SHADER_LIST["ShaderGrassy"] = 16] = "ShaderGrassy";
      SHADER_LIST[SHADER_LIST["ShaderInterstellar"] = 17] = "ShaderInterstellar";
      SHADER_LIST[SHADER_LIST["ShaderRun"] = 18] = "ShaderRun";
      SHADER_LIST[SHADER_LIST["ShaderRun2"] = 19] = "ShaderRun2";
      SHADER_LIST[SHADER_LIST["ShaderRun3"] = 20] = "ShaderRun3";
      SHADER_LIST[SHADER_LIST["ShaderSearch"] = 21] = "ShaderSearch";
      SHADER_LIST[SHADER_LIST["ShaderSparks"] = 22] = "ShaderSparks";
      SHADER_LIST[SHADER_LIST["ShaderSparksDrifting"] = 23] = "ShaderSparksDrifting";
      SHADER_LIST[SHADER_LIST["ShaderSplash"] = 24] = "ShaderSplash";
      SHADER_LIST[SHADER_LIST["ShaderWater"] = 25] = "ShaderWater";
      SHADER_LIST[SHADER_LIST["ShaderWater2"] = 26] = "ShaderWater2";
      SHADER_LIST[SHADER_LIST["ShaderWave"] = 27] = "ShaderWave";
      SHADER_LIST[SHADER_LIST["ShaderGaussBlur"] = 28] = "ShaderGaussBlur";
      SHADER_LIST[SHADER_LIST["ShaderRipple"] = 29] = "ShaderRipple";
      SHADER_LIST[SHADER_LIST["ShaderGalaxy"] = 30] = "ShaderGalaxy";
      SHADER_LIST[SHADER_LIST["ShaderEdgeGlow"] = 31] = "ShaderEdgeGlow";
    })(SHADER_LIST = exports.SHADER_LIST || (exports.SHADER_LIST = {}));
    var SHADER_NAME = [ "Default", "ShaderAclouisCircle", "ShaderBallOfFire", "ShaderClouds", "ShaderDissolve2", "ShaderElectricGrid", "ShaderExplosion", "ShaderFire", "ShaderFlame301Remix2", "ShaderFlame301Remix3", "ShaderFlameAvin", "ShaderFlameBrady", "ShaderFlameOzzy", "ShaderFlameWADE", "ShaderFluxay", "ShaderFluxay2", "ShaderGrassy", "ShaderInterstellar", "ShaderRun", "ShaderRun2", "ShaderRun3", "ShaderSearch", "ShaderSparks", "ShaderSparksDrifting", "ShaderSplash", "ShaderWater", "ShaderWater2", "ShaderWave", "ShaderGaussBlur", "ShaderRipple", "ShaderGalaxy", "ShaderEdgeGlow" ];
    var BLEND_FACTOR = [ cc.macro.BlendFactor.ONE, cc.macro.BlendFactor.ZERO, cc.macro.BlendFactor.SRC_ALPHA, cc.macro.BlendFactor.SRC_COLOR, cc.macro.BlendFactor.DST_ALPHA, cc.macro.BlendFactor.DST_COLOR, cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA, cc.macro.BlendFactor.ONE_MINUS_SRC_COLOR, cc.macro.BlendFactor.ONE_MINUS_DST_ALPHA, cc.macro.BlendFactor.ONE_MINUS_DST_COLOR ];
    var ShaderDemo = function(_super) {
      __extends(ShaderDemo, _super);
      function ShaderDemo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentShader = SHADER_LIST.Default;
        _this.spriteParent = null;
        _this.spriteTemplate = null;
        _this.currentShaderComponent = null;
        _this.tempButton = null;
        _this.content = null;
        _this.mainSpriteFrame = null;
        _this.shaderNameLabel = null;
        _this.textureMap = new Map();
        _this.complete = 0;
        _this.mask = null;
        _this.oldSpriteNode = null;
        _this.propertyParent = null;
        _this.bg = null;
        _this.settingNode = null;
        _this.showHideLabel = null;
        _this.params = [];
        return _this;
      }
      ShaderDemo.prototype.start = function() {
        var _this = this;
        cc.view.enableRetina(false);
        this.propertyParent.removeAllChildren(false);
        this.spriteTemplate.removeFromParent();
        cc.dynamicAtlasManager.enabled = false;
        this.mask.active = true;
        this.tempButton.node.removeFromParent();
        var _loop_1 = function(index) {
          var shaderName = SHADER_NAME[index];
          cc.loader.loadResDir(SHADER_NAME[index], cc.SpriteFrame, function(err, resources) {
            var data = resources.sort(function(a, b) {
              return Number(a.name) - Number(b.name);
            });
            _this.textureMap.set(SHADER_NAME[index], data);
            _this.complete += 1;
          });
          var tempBtn = cc.instantiate(this_1.tempButton.node);
          tempBtn.getComponentInChildren(cc.Label).string = shaderName;
          var btn = tempBtn.getComponent(cc.Button);
          btn.clickEvents = [];
          var handler = new cc.Component.EventHandler();
          handler.component = "ShaderDemo";
          handler.target = this_1.node;
          handler.customEventData = index + "";
          handler.handler = "onChangeClick";
          btn.clickEvents.push(handler);
          tempBtn.setParent(this_1.content);
        };
        var this_1 = this;
        for (var index = 1; index < SHADER_NAME.length; index += 1) _loop_1(index);
        this.changeShader(this.currentShader);
      };
      ShaderDemo.prototype.lateUpdate = function() {
        if (this.complete >= SHADER_NAME.length - 1) {
          this.mask.active = false;
          this.complete += 1;
        }
      };
      ShaderDemo.prototype.changeTexture = function(rs) {
        switch (rs[0].type) {
         case "image/png":
         case "image/jpg":
         case "image/jpeg":
          var texture = new cc.Texture2D();
          texture.initWithElement(rs[0].result);
          texture.name = rs[0].name;
          var tmpFrame = new cc.SpriteFrame();
          tmpFrame.name = rs[0].name;
          tmpFrame.setTexture(texture);
          if (rs[0].name.startsWith("bg")) {
            this.bg.spriteFrame = tmpFrame;
            return;
          }
          this.mainSpriteFrame = tmpFrame;
        }
        var noise;
        if (rs[1]) switch (rs[1].type) {
         case "image/png":
         case "image/jpg":
         case "image/jpeg":
          var texture = new cc.Texture2D();
          texture.initWithElement(rs[1].result);
          texture.name = rs[1].name;
          noise = new cc.SpriteFrame();
          noise.name = rs[1].name;
          noise.setTexture(texture);
        }
        this.changeShader(this.currentShader, [ this.mainSpriteFrame, noise ]);
      };
      ShaderDemo.prototype.onChangeClick = function(taget, index) {
        this.changeShader(Number(index));
      };
      ShaderDemo.prototype.changeShader = function(index, frames) {
        var _this = this;
        if (0 === index) return;
        var old = this.oldSpriteNode;
        this.oldSpriteNode = null;
        old && old.destroy();
        var spriteNode = cc.instantiate(this.spriteTemplate);
        var sprite = spriteNode.getComponent(cc.Sprite);
        spriteNode.setParent(this.spriteParent);
        this.oldSpriteNode = spriteNode;
        this.currentShader = index;
        var name = SHADER_NAME[index];
        var fs = this.textureMap.get(name) || [];
        var mf = frames && frames.length && frames[0];
        var nf = frames && frames.length && frames[1];
        this.mainSpriteFrame = mf || fs[0];
        sprite.spriteFrame = this.mainSpriteFrame;
        this.scheduleOnce(function() {
          if (!spriteNode.isValid) return;
          _this.currentShaderComponent = spriteNode.addComponent(name);
          _this.shaderNameLabel.string = name || "";
          if ("ShaderDissolve2" === name) {
            var shaderDissolve2 = _this.currentShaderComponent;
            shaderDissolve2.texture2 = nf || fs[1];
          }
          _this.showProperty();
        });
      };
      ShaderDemo.prototype.showProperty = function() {
        var _this = this;
        this.propertyParent.destroyAllChildren();
        this.oldSpriteNode.setContentSize(600, 600);
        this.genNodeProperty();
        var m = this.currentShaderComponent.getMaterial();
        if (!m) {
          this.scheduleOnce(this.showProperty);
          return;
        }
        this.currentShaderComponent.shaderFunc.params.forEach(function(param) {
          _this.ignoreParam(param.name) || _this.genProperty(param);
        });
        var touchMove = this.oldSpriteNode.addComponent("TouchMove");
        this.scheduleOnce(function() {
          var xIP = _this.propertyParent.children[0].children[1].getComponent(InputeProperty_1.default);
          var yIP = _this.propertyParent.children[0].children[2].getComponent(InputeProperty_1.default);
          touchMove.setInputePropertyRef(xIP, yIP);
        });
      };
      ShaderDemo.prototype.genNodeProperty = function() {
        var _this = this;
        var propertyPrefab0 = cc.instantiate(this.params[2]);
        propertyPrefab0.setParent(this.propertyParent);
        var inputePropertys0 = propertyPrefab0.getComponent(InputePropertys_1.default);
        inputePropertys0.setSliderActions("SpritePos", "SpritePos", [ this.oldSpriteNode.x, this.oldSpriteNode.y ], [ function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          _this.oldSpriteNode.x = n;
        }, function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          _this.oldSpriteNode.y = n;
        } ], -960, 960);
        var propertyPrefab1 = cc.instantiate(this.params[2]);
        propertyPrefab1.setParent(this.propertyParent);
        var inputePropertys1 = propertyPrefab1.getComponent(InputePropertys_1.default);
        inputePropertys1.setSliderActions("SpriteSize", "SpriteSize", [ this.oldSpriteNode.getContentSize().width, this.oldSpriteNode.getContentSize().height ], [ function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          _this.oldSpriteNode.width = n;
        }, function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          _this.oldSpriteNode.height = n;
        } ], 0, 1920);
        var propertyPrefab2 = cc.instantiate(this.params[2]);
        propertyPrefab2.setParent(this.propertyParent);
        var inputePropertys2 = propertyPrefab2.getComponent(InputePropertys_1.default);
        inputePropertys2.setSliderActions("SpriteSkew", "SpriteSkew", [ this.oldSpriteNode.skewX, this.oldSpriteNode.skewY ], [ function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          _this.oldSpriteNode.skewX = n;
        }, function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          _this.oldSpriteNode.skewY = n;
        } ], -90, 90);
        var s = this.oldSpriteNode.getComponent(cc.Sprite);
        s.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
        s.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA;
        var srcIndex = BLEND_FACTOR.indexOf(cc.macro.BlendFactor.SRC_ALPHA);
        var propertyPrefab3 = cc.instantiate(this.params[2]);
        propertyPrefab3.setParent(this.propertyParent);
        var inputePropertys3 = propertyPrefab3.getComponent(InputePropertys_1.default);
        inputePropertys3.setSliderActions("SrcBlendFactor", "SrcBlendFactor", [ srcIndex ], [ function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          var s = _this.oldSpriteNode.getComponent(cc.Sprite);
          s.srcBlendFactor = BLEND_FACTOR[n];
        } ], 0, BLEND_FACTOR.length - 1);
        var dstIndex = BLEND_FACTOR.indexOf(cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA);
        var propertyPrefab4 = cc.instantiate(this.params[2]);
        propertyPrefab4.setParent(this.propertyParent);
        var inputePropertys4 = propertyPrefab4.getComponent(InputePropertys_1.default);
        inputePropertys4.setSliderActions("DstBlendFactor", "DstBlendFactor", [ dstIndex ], [ function(name, data) {
          var n = Number(data);
          if (isNaN(n)) return;
          var s = _this.oldSpriteNode.getComponent(cc.Sprite);
          s.dstBlendFactor = BLEND_FACTOR[n];
        } ], 0, BLEND_FACTOR.length - 1);
      };
      ShaderDemo.prototype.ignoreParam = function(name) {
        switch (name.toLowerCase()) {
         case "time":
         case "itime":
         case "resolution":
         case "iresolution":
         case "uvfix":
         case "uvfix2":
         case "texture2":
          return true;

         default:
          return false;
        }
      };
      ShaderDemo.prototype.genProperty = function(param) {
        var m = this.currentShaderComponent.getMaterial();
        var d = m.getParamValue(param.name);
        var propertyPrefab = null;
        var inputePropertys = null;
        var isColor = param.paramType && param.paramType === ShaderFunc_1.PARAM_TYPES.COLOR;
        switch (param.type) {
         case ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT:
          if (isColor) {
            propertyPrefab = cc.instantiate(this.params[2]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setSliderActions(param.name + "\ud83c\udf08", param.name, [ Math.floor(255 * d) ], [ genPropertyAction(m, param.type, 0, param.paramType) ], 0, 255);
          } else if (null != param.min && null != param.max) {
            propertyPrefab = cc.instantiate(this.params[2]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setSliderActions(param.name, param.name, [ d ], [ genPropertyAction(m, param.type, 0, param.paramType) ], param.min, param.max);
          } else {
            propertyPrefab = cc.instantiate(this.params[0]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setEditorActions(param.name, param.name, [ d ], [ genPropertyAction(m, param.type, 0, param.paramType) ]);
          }
          break;

         case ShaderFunc_1.RENDERER_PARAMS.PARAM_INT2:
         case ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2:
          propertyPrefab = cc.instantiate(this.params[0]);
          propertyPrefab.setParent(this.propertyParent);
          inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
          inputePropertys.setEditorActions(param.name, param.name, [ d.x, d.y ], [ genPropertyAction(m, param.type, 0, param.paramType), genPropertyAction(m, param.type, 1, param.paramType) ]);
          break;

         case ShaderFunc_1.RENDERER_PARAMS.PARAM_INT3:
         case ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3:
          if (isColor) {
            propertyPrefab = cc.instantiate(this.params[2]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setSliderActions(param.name + "\ud83c\udf08", param.name, [ isColor ? Math.floor(255 * d.x) : d.x, isColor ? Math.floor(255 * d.y) : d.y, isColor ? Math.floor(255 * d.z) : d.z ], [ genPropertyAction(m, param.type, 0, param.paramType), genPropertyAction(m, param.type, 1, param.paramType), genPropertyAction(m, param.type, 2, param.paramType) ], 0, 255);
          } else if (null != param.min && null != param.max) {
            propertyPrefab = cc.instantiate(this.params[2]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setSliderActions(param.name, param.name, [ d.x, d.y, d.z ], [ genPropertyAction(m, param.type, 0, param.paramType), genPropertyAction(m, param.type, 1, param.paramType), genPropertyAction(m, param.type, 2, param.paramType) ], param.min, param.max);
          } else {
            propertyPrefab = cc.instantiate(this.params[0]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setEditorActions(param.name, param.name, [ isColor ? Math.floor(255 * d.x) : d.x, isColor ? Math.floor(255 * d.y) : d.y, isColor ? Math.floor(255 * d.z) : d.z ], [ genPropertyAction(m, param.type, 0, param.paramType), genPropertyAction(m, param.type, 1, param.paramType), genPropertyAction(m, param.type, 2, param.paramType) ]);
          }
          break;

         case ShaderFunc_1.RENDERER_PARAMS.PARAM_INT4:
         case ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4:
          if (isColor) {
            propertyPrefab = cc.instantiate(this.params[2]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setSliderActions(param.name + "\ud83c\udf08", param.name, [ isColor ? Math.floor(255 * d.x) : d.x, isColor ? Math.floor(255 * d.y) : d.y, isColor ? Math.floor(255 * d.z) : d.z, isColor ? Math.floor(255 * d.w) : d.w ], [ genPropertyAction(m, param.type, 0, param.paramType), genPropertyAction(m, param.type, 1, param.paramType), genPropertyAction(m, param.type, 2, param.paramType), genPropertyAction(m, param.type, 3, param.paramType) ], 0, 255);
          } else {
            propertyPrefab = cc.instantiate(this.params[0]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setEditorActions(param.name, param.name, [ isColor ? Math.floor(255 * d.x) : d.x, isColor ? Math.floor(255 * d.y) : d.y, isColor ? Math.floor(255 * d.z) : d.z, isColor ? Math.floor(255 * d.w) : d.w ], [ genPropertyAction(m, param.type, 0, param.paramType), genPropertyAction(m, param.type, 1, param.paramType), genPropertyAction(m, param.type, 2, param.paramType), genPropertyAction(m, param.type, 3, param.paramType) ]);
          }
          break;

         case ShaderFunc_1.RENDERER_PARAMS.PARAM_INT:
          if (param.paramType === ShaderFunc_1.PARAM_TYPES.BOOLEAN) {
            propertyPrefab = cc.instantiate(this.params[1]);
            propertyPrefab.setParent(this.propertyParent);
            inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
            inputePropertys.setToggleActions(param.name, param.name, [ d ], [ genPropertyAction(m, param.type, 0, param.paramType) ]);
            break;
          }
          if (null == param.min || null == param.max) {
            if (isColor) {
              propertyPrefab = cc.instantiate(this.params[2]);
              propertyPrefab.setParent(this.propertyParent);
              inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
              inputePropertys.setSliderActions(param.name + "\ud83c\udf08", param.name, [ Math.floor(255 * d) ], [ genPropertyAction(m, param.type, 0, param.paramType) ], 0, 255);
            } else {
              propertyPrefab = cc.instantiate(this.params[0]);
              propertyPrefab.setParent(this.propertyParent);
              inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
              inputePropertys.setEditorActions(param.name, param.name, [ d ], [ genPropertyAction(m, param.type, 0, param.paramType) ]);
            }
            break;
          }
          propertyPrefab = cc.instantiate(this.params[2]);
          propertyPrefab.setParent(this.propertyParent);
          inputePropertys = propertyPrefab.getComponent(InputePropertys_1.default);
          inputePropertys.setSliderActions(param.name, param.name, [ d ], [ genPropertyAction(m, param.type, 0, param.paramType) ], param.min, param.max);
        }
      };
      ShaderDemo.prototype.download = function() {
        var _this = this;
        var obj = [];
        obj.push({
          name: "SpritePosion",
          value: {
            width: this.oldSpriteNode.x,
            height: this.oldSpriteNode.y
          }
        });
        obj.push({
          name: "SpriteSize",
          value: {
            width: this.oldSpriteNode.width,
            height: this.oldSpriteNode.height
          }
        });
        var s = this.oldSpriteNode.getComponent(cc.Sprite);
        s.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
        s.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA;
        obj.push({
          name: "SpriteSkew",
          value: {
            width: this.oldSpriteNode.skewX,
            height: this.oldSpriteNode.skewY
          }
        });
        obj.push({
          name: "SpriteBlend",
          value: {
            src: BLEND_FACTOR.indexOf(s.srcBlendFactor),
            dst: BLEND_FACTOR.indexOf(s.dstBlendFactor)
          }
        });
        var m = this.currentShaderComponent.getMaterial();
        this.currentShaderComponent.shaderFunc.params.forEach(function(param) {
          if (!_this.ignoreParam(param.name)) {
            var paramValue = m.getParamValue(param.name);
            param.type === ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3 || param.type === ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4 ? obj.push({
              name: param.name,
              value: param.paramType && param.paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? fixValue(paramValue, function(value) {
                return 255 * value;
              }) : paramValue
            }) : obj.push({
              name: param.name,
              value: paramValue
            });
          }
        });
        obj.length && downloadObjectAsJson(obj, SHADER_NAME[this.currentShader]);
      };
      ShaderDemo.prototype.toggleSetting = function() {
        this.settingNode.active = !this.settingNode.active;
        this.showHideLabel.string = this.settingNode.active ? "HIDE" : "SHOW";
      };
      __decorate([ property({
        type: cc.Enum(SHADER_LIST)
      }) ], ShaderDemo.prototype, "currentShader", void 0);
      __decorate([ property(cc.Node) ], ShaderDemo.prototype, "spriteParent", void 0);
      __decorate([ property(cc.Node) ], ShaderDemo.prototype, "spriteTemplate", void 0);
      __decorate([ property(cc.Button) ], ShaderDemo.prototype, "tempButton", void 0);
      __decorate([ property(cc.Node) ], ShaderDemo.prototype, "content", void 0);
      __decorate([ property(cc.SpriteFrame) ], ShaderDemo.prototype, "mainSpriteFrame", void 0);
      __decorate([ property(cc.Label) ], ShaderDemo.prototype, "shaderNameLabel", void 0);
      __decorate([ property(cc.Node) ], ShaderDemo.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], ShaderDemo.prototype, "propertyParent", void 0);
      __decorate([ property(cc.Sprite) ], ShaderDemo.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], ShaderDemo.prototype, "settingNode", void 0);
      __decorate([ property(cc.Label) ], ShaderDemo.prototype, "showHideLabel", void 0);
      __decorate([ property([ cc.Node ]) ], ShaderDemo.prototype, "params", void 0);
      ShaderDemo = __decorate([ ccclass ], ShaderDemo);
      return ShaderDemo;
    }(cc.Component);
    exports.default = ShaderDemo;
    function fixValue(valueObject, func) {
      var values = [ "x", "y", "z", "w" ];
      var value = {};
      values.forEach(function(a, index) {
        valueObject[values[index]] && (value[values[index]] = func(valueObject[values[index]]));
      });
      return value;
    }
    function genPropertyAction(m, type, index, paramType) {
      return function(name, data) {
        var n = Number(data);
        if (isNaN(n)) return;
        var d = m.getParamValue(name);
        switch (type + "_" + index) {
         case "0_0":
         case "4_0":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, n / 255) : m.setParamValue(name, n);
          break;

         case "1_0":
         case "5_0":
          m.setParamValue(name, cc.v2(n, d.y));
          break;

         case "1_0":
         case "5_1":
          m.setParamValue(name, cc.v2(d.x, n));
          break;

         case "2_0":
         case "6_0":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, new cc.Vec3(n / 255, d.y, d.z)) : m.setParamValue(name, new cc.Vec3(n, d.y, d.z));
          break;

         case "2_1":
         case "6_1":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, new cc.Vec3(d.x, n / 255, d.z)) : m.setParamValue(name, new cc.Vec3(d.x, n, d.z));
          break;

         case "2_2":
         case "6_2":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, new cc.Vec3(d.x, d.y, n / 255)) : m.setParamValue(name, new cc.Vec3(d.x, d.y, n));
          break;

         case "3_0":
         case "7_0":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, {
            x: n / 255,
            y: d.y,
            z: d.z,
            w: d.w
          }) : m.setParamValue(name, {
            x: n,
            y: d.y,
            z: d.z,
            w: d.w
          });
          break;

         case "3_1":
         case "7_1":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, {
            x: d.x,
            y: n / 255,
            z: d.z,
            w: d.w
          }) : m.setParamValue(name, {
            x: d.x,
            y: n,
            z: d.z,
            w: d.w
          });
          break;

         case "3_2":
         case "7_2":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, {
            x: d.x,
            y: d.y,
            z: n / 255,
            w: d.w
          }) : m.setParamValue(name, {
            x: d.x,
            y: d.y,
            z: n,
            w: d.w
          });
          break;

         case "3_3":
         case "7_3":
          paramType && paramType === ShaderFunc_1.PARAM_TYPES.COLOR ? m.setParamValue(name, {
            x: d.x,
            y: d.y,
            z: d.z,
            w: n / 255
          }) : m.setParamValue(name, {
            x: d.x,
            y: d.y,
            z: d.z,
            w: n
          });
        }
      };
    }
    function downloadObjectAsJson(exportObj, exportName) {
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
    cc._RF.pop();
  }, {
    "../submodule/shader/script/ShaderFunc": "ShaderFunc",
    "./InputeProperty": "InputeProperty",
    "./InputePropertys": "InputePropertys"
  } ],
  ShaderDissolve2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "022cfU+M7hFy5R+FLEVjAdM", "ShaderDissolve2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderDissolve2",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "uvfix2",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
      }, {
        name: "texture2",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_TEXTURE_2D
      } ],
      vert: MVP_1.MVP,
      frag: "\n    uniform sampler2D texture;\n    uniform sampler2D texture2;\n    uniform vec4 uvfix;\n    uniform vec4 uvfix2;\n    uniform vec4 color;\n    uniform float time;\n    varying vec2 v_uv0;\n\n    void main()\n    {\n        // float h = (c.g + c.b)/2.;\n\n        vec2 uv1 = (v_uv0 - uvfix.zw) * uvfix.xy;\n        vec2 uv2 = uv1 / uvfix2.xy + uvfix2.zw;\n\n        vec4 t = texture2D(texture2, uv2);\n        float h = (t.r + t.g + t.b) / 3.;\n\n        vec4 c = texture2D(texture, v_uv0);\n        if(h < time || c.a <= 0.1)\n        {\n            discard;\n        }\n        if(h-0.06 < time)\n        {\n            c = vec4(1.0, c.gb, abs(h-time)/0.06) ;\n        }\n        if(h-0.02 < time)\n        {\n            c = vec4(1, 0, 0,abs(h-time)/0.02 );\n        }\n        if(h-0.01 < time)\n        {\n            c = vec4(0, 0, 0,abs(h-time)/0.01 );\n        }\n        gl_FragColor = c;\n    }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderDissolve2 = function(_super) {
      __extends(ShaderDissolve2, _super);
      function ShaderDissolve2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.flag = false;
        _this.speed = .5;
        _this.texture2 = null;
        return _this;
      }
      ShaderDissolve2.prototype.doStart = function(sprite, material, dt) {
        var _this = this;
        this.time = 0;
        var t = this.texture2.getTexture();
        material.setParamValue("time", this.time);
        material.setParamValue("texture2", t.getImpl());
        var next = function() {
          var uf = ShaderComponent_1.getUVfix(_this.texture2);
          material.setParamValue("uvfix2", uf);
        };
        this.scheduleOnce(next, 0);
      };
      ShaderDissolve2.prototype.doUpdate = function(sprite, material, dt) {
        dt *= this.speed;
        this.flag ? this.time += dt : this.time -= dt;
        this.time >= 1.2 ? this.flag = false : this.time <= -.2 && (this.flag = true);
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderDissolve2.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: "cc.Sprite \u4e0a\u7684\u7d20\u6750\u61c9\u7528 trim"
      }) ], ShaderDissolve2.prototype, "texture2", void 0);
      ShaderDissolve2 = __decorate([ ccclass ], ShaderDissolve2);
      return ShaderDissolve2;
    }(ShaderComponent_1.default);
    exports.default = ShaderDissolve2;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderEdgeGlow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1bf4YMA7dDh5RFnuL61wDg", "ShaderEdgeGlow");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderEdgeGlow",
      params: [ {
        name: "iResolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "uvfix",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
      }, {
        name: "frequency",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        min: 0,
        max: 50
      }, {
        name: "thickness",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        min: 0,
        max: 30
      }, {
        name: "luma",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3,
        min: 0,
        max: 1e5
      }, {
        name: "edgeColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n\n        // Shader Toy\n        // https://www.shadertoy.com/view/Mdf3zr\n\n        uniform sampler2D texture;\n        uniform vec2    iResolution;\n        uniform float   time;\n        uniform vec4    uvfix;\n        varying vec2    v_uv0;\n\n        uniform float   frequency;\n        uniform float   thickness;\n        uniform vec3    luma;\n        uniform vec3    edgeColor;\n\n\n        vec2 bigger(in vec2 uv){\n            // return (uvfix.xy - uvfix.zw) * uv;\n            return uvfix.xy * uv + uvfix.zw;\n        }\n\n        vec2 smaller(in vec2 uv){\n            //return uv / uvfix.xy - uvfix.zw;\n            return (uv - uvfix.zw) / uvfix.xy;\n\n        }\n\n        float d;\n        float lookup(vec2 p, float dx, float dy)\n        {\n            vec2 uv = (p.xy + vec2(dx * d, dy * d)) / iResolution.xy;\n            vec4 c = texture2D(texture, uv.xy);\n\n            // return as luma\n            return luma.x/1e5 * c.r + luma.y/1e5 * c.g + luma.z/1e5 * c.b;\n        }\n\n        void main() {\n            if(frequency != 0.0){\n                d = thickness * sin(time * frequency); // kernel offset\n            }else {\n                d = thickness;\n            }\n\n\n            vec2 p = v_uv0;\n            p *= iResolution;\n\n            //math : simple sobel operator edge detection\n            float gx = 0.0;\n            gx += -1.0 * lookup(p, -1.0, -1.0);\n            gx += -2.0 * lookup(p, -1.0,  0.0);\n            gx += -1.0 * lookup(p, -1.0,  1.0);\n            gx +=  1.0 * lookup(p,  1.0, -1.0);\n            gx +=  2.0 * lookup(p,  1.0,  0.0);\n            gx +=  1.0 * lookup(p,  1.0,  1.0);\n\n            float gy = 0.0;\n            gy += -1.0 * lookup(p, -1.0, -1.0);\n            gy += -2.0 * lookup(p,  0.0, -1.0);\n            gy += -1.0 * lookup(p,  1.0, -1.0);\n            gy +=  1.0 * lookup(p, -1.0,  1.0);\n            gy +=  2.0 * lookup(p,  0.0,  1.0);\n            gy +=  1.0 * lookup(p,  1.0,  1.0);\n\n            // hack: use g^2 to conceal noise in the video\n            float g = gx*gx + gy*gy;\n            float g2 = g * (sin(time) / 2.0 + 0.5);\n\n            vec4 col = texture2D(texture, p / iResolution.xy);\n            col += vec4( edgeColor.r * g ,edgeColor.g * g , edgeColor.b * g , 0.0);\n\n            gl_FragColor = col;\n        }\n\n\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderEdgeGlow = function(_super) {
      __extends(ShaderEdgeGlow, _super);
      function ShaderEdgeGlow() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.frequency = 3;
        _this.thickness = 2.5;
        _this.luma = new cc.Vec3(.29126 * 1e5, 71520, 7220);
        _this.edgeColor = cc.color(205, 40, 0);
        _this.time = 0;
        return _this;
      }
      ShaderEdgeGlow.prototype.doStart = function(sprite, material, dt) {
        var iResolution = cc.v2(sprite.node.getContentSize().width, sprite.node.getContentSize().height);
        var uvfix = ShaderComponent_1.getUVfix(sprite.spriteFrame);
        this.time = 10;
        material.setParamValue("iResolution", iResolution);
        material.setParamValue("uvfix", uvfix);
        material.setParamValue("time", this.time);
        material.setParamValue("frequency", this.frequency);
        material.setParamValue("thickness", this.thickness);
        material.setParamValue("luma", {
          x: this.luma.x,
          y: this.luma.y,
          z: this.luma.z
        });
        material.setParamValue("edgeColor", {
          x: this.edgeColor.getR() / 255,
          y: this.edgeColor.getG() / 255,
          z: this.edgeColor.getB() / 255
        });
      };
      ShaderEdgeGlow.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderEdgeGlow.prototype, "frequency", void 0);
      __decorate([ property(cc.Float) ], ShaderEdgeGlow.prototype, "thickness", void 0);
      __decorate([ property(cc.Vec3) ], ShaderEdgeGlow.prototype, "luma", void 0);
      __decorate([ property(cc.Color) ], ShaderEdgeGlow.prototype, "edgeColor", void 0);
      ShaderEdgeGlow = __decorate([ ccclass ], ShaderEdgeGlow);
      return ShaderEdgeGlow;
    }(ShaderComponent_1.default);
    exports.default = ShaderEdgeGlow;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderElectricGrid: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34ff5oaX8tDaLJXI5U71mvl", "ShaderElectricGrid");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderElectricGrid",
      params: [ {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "detal",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "glowColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "clearColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        min: 0,
        max: 7
      }, {
        name: "useTextureAlpha",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      } ],
      vert: MVP_1.MVP,
      frag: "\n        uniform sampler2D texture;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        uniform float detal;\n        uniform vec4 glowColor;\n        uniform int clearColor;\n        uniform int useTextureAlpha;\n        varying vec2 v_uv0;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        vec2 rand2(in vec2 p)\n        {\n            return fract(vec2(sin(p.x * 591.32 + p.y * 154.077), cos(p.x * 391.32 + p.y * 49.077)));\n        }\n\n        float voronoi(in vec2 x)\n        {\n            vec2 p = floor(x);\n            vec2 f = fract(x);\n            float minDistance = 1.;\n\n            for(int j = -1; j <= 1; j ++)\n            {\n                for(int i = -1; i <= 1; i ++)\n                {\n                    vec2 b = vec2(i, j);\n                    vec2 rand = .5 + .5 * sin(time*speed * 3. + 12. * rand2(p + b));\n                    vec2 r = vec2(b) - f + rand;\n                    minDistance = min(minDistance, length(r));\n                }\n            }\n            return minDistance;\n        }\n\n        void main()\n        {\n\n            vec2 uv = bigger(v_uv0);\n            uv.y = 2. - uv.y;\n            float val = pow(voronoi(uv * 8.) * 1.25, 7.) * 2.;\n            float gridLineThickness = detal / uv.y;\n            vec2 grid = step(mod(uv, .1), vec2(gridLineThickness));\n\n            vec4 tempColor = glowColor*vec4(val * (grid.x + grid.y),val * (grid.x + grid.y),val * (grid.x + grid.y),1.0);\n            float alpha = 0.;\n            if(clearColor == 1){\n                alpha = tempColor.r;\n            } else if(clearColor == 2){\n                alpha = tempColor.g;\n            } else if(clearColor == 3){\n                alpha = tempColor.b;\n            } else if(clearColor == 4){\n                alpha = tempColor.r*tempColor.g;\n            } else if(clearColor == 5){\n                alpha = tempColor.r*tempColor.b;\n            } else if(clearColor == 6){\n                alpha = tempColor.g*tempColor.b;\n            } else if(clearColor == 7){\n                alpha = tempColor.r*tempColor.g*tempColor.b;\n            }\n            vec4 t = texture2D(texture, v_uv0);\n            if(useTextureAlpha == 1){\n                gl_FragColor = vec4(tempColor.rgb,alpha*t.a);\n            } else {\n                gl_FragColor = vec4(tempColor.rgb,alpha);\n            }\n\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderElectricGrid = function(_super) {
      __extends(ShaderElectricGrid, _super);
      function ShaderElectricGrid() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.detal = .003;
        _this.color = cc.color(255, 102, 38.25, 1);
        _this.clearColor = 1;
        _this.useTextureAlpha = true;
        return _this;
      }
      ShaderElectricGrid.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("detal", this.detal);
        material.setParamValue("speed", this.speed);
        material.setParamValue("glowColor", {
          x: this.color.getR() / 255,
          y: this.color.getG() / 255,
          z: this.color.getB() / 255,
          w: this.color.getA() / 255
        });
        material.setParamValue("clearColor", this.clearColor);
        material.setParamValue("useTextureAlpha", this.useTextureAlpha ? 1 : 0);
      };
      ShaderElectricGrid.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderElectricGrid.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderElectricGrid.prototype, "detal", void 0);
      __decorate([ property(cc.Color) ], ShaderElectricGrid.prototype, "color", void 0);
      __decorate([ property({
        type: cc.Enum(ShaderComponent_1.CLEAR_COLOR)
      }) ], ShaderElectricGrid.prototype, "clearColor", void 0);
      __decorate([ property(cc.Boolean) ], ShaderElectricGrid.prototype, "useTextureAlpha", void 0);
      ShaderElectricGrid = __decorate([ ccclass ], ShaderElectricGrid);
      return ShaderElectricGrid;
    }(ShaderComponent_1.default);
    exports.default = ShaderElectricGrid;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderExplosion: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9ba0kX7LNGm504ELvZkj1L", "ShaderExplosion");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderExplosion",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "glowColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "clearColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        min: 0,
        max: 7
      }, {
        name: "size",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "ring",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n        varying vec2 v_uv0;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        uniform vec4 glowColor;\n        uniform int clearColor;\n        uniform float size;\n        uniform float ring;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        const int layers = 128;\n        const float blur = .1;\n        const float speed2 = 4.;\n        const float peaks = 8.;\n        const float peakStrength = .1;\n        const float ringSpeed = 1.5;\n        const float smoke = .4;\n        const float smokeTime = 40.;\n\n        float hash(float seed){\n            return fract(sin(seed * 3602.64325) * 051.63891);\n        }\n\n        float circle(float radius, vec2 pos){\n            return radius - pos.x;\n        }\n\n        void main()\n        {\n            vec2 uv = bigger(v_uv0);\n            uv = uv * size - size/2.;\n            vec2 puv = vec2(length(uv),atan(uv.x,uv.y)); //polar coordinates\n\n            float iTime = time*speed;\n            iTime = mod(iTime,2.1);\n            vec3 col = vec3(0);\n            for(int i = 0; i < layers;i++){\n                float prog = float(i) / float(layers);\n                float radius = prog * ((1. - 1. / pow(iTime * speed2,1./3.)) * ring); //decrease radius using cubed\n                radius += sin(puv.y * peaks + hash(prog) * 513.) * peakStrength; //modulate radius so it isnt enitly symetrical\n                vec3 color = vec3(\n                    glowColor.r / radius,\n                    glowColor.g ,\n                    glowColor.b * (2. - radius)\n                )/ iTime / abs(log(iTime * ringSpeed) - puv.x); // base explosion color, decrease with time and with distance from center\n                color += vec3((1. - iTime / smokeTime) * puv.x * smoke);  //add smoke color, falloff can be controlled with smoketime variable\n                col += color * smoothstep(0.,1.,circle(radius,puv) / blur);\n            }\n\n            vec4 tempColor = vec4(col / float(layers),1.0);\n            float alpha = 0.;\n            if(clearColor == 1){\n                alpha = tempColor.r;\n            } else if(clearColor == 2){\n                alpha = tempColor.g;\n            } else if(clearColor == 3){\n                alpha = tempColor.b;\n            } else if(clearColor == 4){\n                alpha = tempColor.r*tempColor.g;\n            } else if(clearColor == 5){\n                alpha = tempColor.r*tempColor.b;\n            } else if(clearColor == 6){\n                alpha = tempColor.g*tempColor.b;\n            } else if(clearColor == 7){\n                alpha = tempColor.r*tempColor.g*tempColor.b;\n            }\n            gl_FragColor = vec4(tempColor.rgb,alpha);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderExplosion = function(_super) {
      __extends(ShaderExplosion, _super);
      function ShaderExplosion() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.color = cc.color(255, 102, 38.25);
        _this.clearColor = 1;
        _this.size = 4;
        _this.ring = 2;
        _this.loop = true;
        return _this;
      }
      ShaderExplosion.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("glowColor", {
          x: this.color.getR() / 255,
          y: this.color.getG() / 255,
          z: this.color.getB() / 255,
          w: this.color.getA() / 255
        });
        material.setParamValue("clearColor", this.clearColor);
        material.setParamValue("size", this.size);
        material.setParamValue("ring", this.ring);
      };
      ShaderExplosion.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        this.loop && material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderExplosion.prototype, "speed", void 0);
      __decorate([ property(cc.Color) ], ShaderExplosion.prototype, "color", void 0);
      __decorate([ property({
        type: cc.Enum(ShaderComponent_1.CLEAR_COLOR)
      }) ], ShaderExplosion.prototype, "clearColor", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderExplosion.prototype, "size", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderExplosion.prototype, "ring", void 0);
      __decorate([ property(cc.Boolean) ], ShaderExplosion.prototype, "loop", void 0);
      ShaderExplosion = __decorate([ ccclass ], ShaderExplosion);
      return ShaderExplosion;
    }(ShaderComponent_1.default);
    exports.default = ShaderExplosion;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFire: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff1b2Ok8fVLEYEwOAoa9Y2W", "ShaderFire");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFire",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "glowColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "noise_sz",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n        varying vec2 v_uv0;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        uniform vec4 glowColor;\n        uniform float noise_sz;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        // SNOISE function from: https://www.shadertoy.com/view/lsf3RH\n        float snoise(vec3 uv, float res)\n        {\n            const vec3 s = vec3(1e0, 1e2, 1e3);\n\n            uv *= res;\n\n            vec3 uv0 = floor(mod(uv, res))*s;\n            vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;\n\n            vec3 f = fract(uv); f = f*f*(3.0-2.0*f);\n\n            vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,\n                        uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);\n\n            vec4 r = fract(sin(v*1e-1)*1e3);\n            float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n\n            r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);\n            float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);\n\n            return mix(r0, r1, f.z)*2.-1.;\n        }\n\n        float noise(vec2 uv, float baseres)\n        {\n            float n = 0.0;\n            for (int i = 0; i < 7; i++)\n            {\n                float v = pow(2.0, float(i));\n                n += (1.5 / v) * snoise(vec3(uv + vec2(1.,1.) * (float(i) / 17.), 1), v * baseres);\n            }\n\n\n            return clamp((1.0 - n) * .5, 0., 1.);\n        }\n\n        void main()\n        {\n            vec2 uv = bigger(v_uv0);\n            uv.y = 1. - uv.y;\n\n            vec2 tiling = vec2(1.0, .6);\n            vec2 speed1 = vec2(0.05, -0.32);\n            vec2 speed2 = vec2(-0.10, -0.39);\n            float ss_min = 0.2;\n            float ss_max = ss_min + 0.5;\n\n            // Tiled UV\n            vec2 tuv = vec2(mod(uv.x * tiling.x, 1.0), mod(uv.y * tiling.y, 1.0));\n\n            // Samplings\n            vec2 uv1 = tuv + (speed1 * time*speed);\n            vec2 uv2 = tuv + (speed2 * time*speed);\n\n            // Mask\n            vec2 uvt = vec2(uv.x, pow(1.0 - uv.y, 2.2));\n            vec2 nuvt = (uvt * 2.0) - 1.0;\n            float v = 1. - length(nuvt);\n            v = ((v * .6) + (pow(v, 4.3) * 4.55));\n\n            float samplings = noise(uv1, noise_sz) * noise(uv2, noise_sz);\n            float mask = pow(v, 1.2) * samplings;\n            float amask = smoothstep(ss_min, ss_max, mask);\n\n            // Output to screen\n            gl_FragColor = glowColor + (glowColor * pow((1.0 - uv.y), 3.0) * .3);\n            gl_FragColor += samplings * .3;\n            gl_FragColor *= (2. * amask);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFire = function(_super) {
      __extends(ShaderFire, _super);
      function ShaderFire() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.noise = 8;
        _this.color = cc.color(255, 102, 38.25);
        return _this;
      }
      ShaderFire.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("glowColor", {
          x: this.color.getR() / 255,
          y: this.color.getG() / 255,
          z: this.color.getB() / 255,
          w: this.color.getA() / 255
        });
        material.setParamValue("noise_sz", this.noise);
      };
      ShaderFire.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderFire.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderFire.prototype, "noise", void 0);
      __decorate([ property(cc.Color) ], ShaderFire.prototype, "color", void 0);
      ShaderFire = __decorate([ ccclass ], ShaderFire);
      return ShaderFire;
    }(ShaderComponent_1.default);
    exports.default = ShaderFire;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFlame301Remix2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "955767hpO1AwYNzQZMBwKN/", "ShaderFlame301Remix2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFlame301Remix2",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\tuniform sampler2D texture;\n    uniform float time;\n    uniform float speed;\n    uniform vec2 resolution;\n\tuniform vec4 uvfix;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn uvfix.xy * uv + uvfix.zw;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn (uv - uvfix.zw) / uvfix.xy;\n\t}\n\n\tvec3 rgb2hsv(vec3 c)\n    {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c)\n    {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n\n    float rand(vec2 n) {\n        return fract(sin(cos(dot(n, vec2(12.9898,12.1414)))) * 83758.5453);\n    }\n\n    float noise(vec2 n) {\n        const vec2 d = vec2(0.0, 1.0);\n        vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n        return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n    }\n\n    float fbm(vec2 n) {\n        float total = 0.0, amplitude = 1.0;\n        for (int i = 0; i <5; i++) {\n            total += noise(n) * amplitude;\n            n += n*1.7;\n            amplitude *= 0.47;\n        }\n        return total;\n    }\n\n    void main(void) {\n\n        const vec3 c1 = vec3(0.5, 0.0, 0.1);\n        const vec3 c2 = vec3(0.9, 0.1, 0.0);\n        const vec3 c3 = vec3(0.2, 0.1, 0.7);\n        const vec3 c4 = vec3(1.0, 0.9, 0.1);\n        const vec3 c5 = vec3(0.1);\n        const vec3 c6 = vec3(0.9);\n        float itime = speed*time;\n        vec2 speed = vec2(1.2, 0.1);\n        float shift = 1.327+sin(itime*2.0)/2.4;\n        float alpha = 1.0;\n\n        //change the constant term for all kinds of cool distance versions,\n        //make plus/minus to switch between\n        //ground fire and fire rain!\n        float dist = 3.5-sin(itime*0.4)/1.89;\n\n        vec2 uv = v_uv0;\n        uv.y = 1. - uv.y;\n        vec2 fragCoord = uv * resolution;\n        vec2 p = fragCoord.xy * dist / resolution.xx;\n        p.x -= itime/1.1;\n        float q = fbm(p - itime * 0.01+1.0*sin(itime)/10.0);\n        float qb = fbm(p - itime * 0.002+0.1*cos(itime)/5.0);\n        float q2 = fbm(p - itime * 0.44 - 5.0*cos(itime)/7.0) - 6.0;\n        float q3 = fbm(p - itime * 0.9 - 10.0*cos(itime)/30.0)-4.0;\n        float q4 = fbm(p - itime * 2.0 - 20.0*sin(itime)/20.0)+2.0;\n        q = (q + qb - .4 * q2 -2.0*q3  + .6*q4)/3.8;\n        vec2 r = vec2(fbm(p + q /2.0 + itime * speed.x - p.x - p.y), fbm(p + q - itime * speed.y));\n        vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);\n        vec3 color = vec3(c * cos(shift * fragCoord.y / resolution.y));\n        color += .05;\n        color.r *= .8;\n        vec3 hsv = rgb2hsv(color);\n        hsv.y *= hsv.z  * 1.1;\n        hsv.z *= hsv.y * 1.13;\n        hsv.y = (2.2-hsv.z*.9)*1.20;\n        color = hsv2rgb(hsv);\n        alpha = color.r;\n        gl_FragColor = vec4(color.x, color.y, color.z, alpha);\n    }\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFlame301Remix2 = function(_super) {
      __extends(ShaderFlame301Remix2, _super);
      function ShaderFlame301Remix2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = 1;
        return _this;
      }
      ShaderFlame301Remix2.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = new cc.Vec2(sprite.node.width, sprite.node.height);
        material.setParamValue("resolution", resolution);
        material.setParamValue("speed", this.speed);
        material.setParamValue("time", 0);
      };
      ShaderFlame301Remix2.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      ShaderFlame301Remix2 = __decorate([ ccclass ], ShaderFlame301Remix2);
      return ShaderFlame301Remix2;
    }(ShaderComponent_1.default);
    exports.default = ShaderFlame301Remix2;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFlame301Remix3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3366awO2pKxYP4h/FIHYe1", "ShaderFlame301Remix3");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFlame301Remix3",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\tuniform sampler2D texture;\n    uniform float time;\n    uniform float speed;\n    uniform vec2 resolution;\n\tuniform vec4 uvfix;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn uvfix.xy * uv + uvfix.zw;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn (uv - uvfix.zw) / uvfix.xy;\n\t}\n\n\t// I started working a bit on the colors of Remix 2, ended up with something like this. :)\n    // Remix 2 here: https://www.shadertoy.com/view/MtcGD7\n    // Remix 1 here: https://www.shadertoy.com/view/llc3DM\n    // Original here: https://www.shadertoy.com/view/XsXXRN\n\n    float rand(vec2 n) {\n        return fract(sin(cos(dot(n, vec2(12.9898,12.1414)))) * 83758.5453);\n    }\n\n    float noise(vec2 n) {\n        const vec2 d = vec2(0.0, 1.0);\n        vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n        return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n    }\n\n    float fbm(vec2 n) {\n        float total = 0.0, amplitude = 1.0;\n        for (int i = 0; i <5; i++) {\n            total += noise(n) * amplitude;\n            n += n*1.7;\n            amplitude *= 0.47;\n        }\n        return total;\n    }\n\n    void main(void) {\n\n        const vec3 c1 = vec3(0.5, 0.0, 0.1);\n        const vec3 c2 = vec3(0.9, 0.1, 0.0);\n        const vec3 c3 = vec3(0.2, 0.1, 0.7);\n        const vec3 c4 = vec3(1.0, 0.9, 0.1);\n        const vec3 c5 = vec3(0.1);\n        const vec3 c6 = vec3(0.9);\n        float itime = time*speed;\n        vec2 speed2 = vec2(0.1, 0.9);\n        float shift = 1.327+sin(itime*2.0)/2.4;\n        float alpha = 1.0;\n\n        float dist = 3.5-sin(itime*0.4)/1.89;\n\n        vec2 uv = v_uv0;\n        uv.y = 1. - uv.y;\n        vec2 fragCoord = uv * resolution;\n        vec2 p = fragCoord.xy * dist / resolution.xx;\n        p += sin(p.yx*4.0+vec2(.2,-.3)*itime)*0.04;\n        p += sin(p.yx*8.0+vec2(.6,+.1)*itime)*0.01;\n\n        p.x -= itime/1.1;\n        float q = fbm(p - itime * 0.3+1.0*sin(itime+0.5)/2.0);\n        float qb = fbm(p - itime * 0.4+0.1*cos(itime)/2.0);\n        float q2 = fbm(p - itime * 0.44 - 5.0*cos(itime)/2.0) - 6.0;\n        float q3 = fbm(p - itime * 0.9 - 10.0*cos(itime)/15.0)-4.0;\n        float q4 = fbm(p - itime * 1.4 - 20.0*sin(itime)/14.0)+2.0;\n        q = (q + qb - .4 * q2 -2.0*q3  + .6*q4)/3.8;\n        vec2 r = vec2(fbm(p + q /2.0 + itime * speed2.x - p.x - p.y), fbm(p + q - itime * speed2.y));\n        vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);\n        vec3 color = vec3(1.0/(pow(c+1.61,vec3(4.0))) * cos(shift * fragCoord.y / resolution.y));\n\n        color=vec3(1.0,.2,.05)/(pow((r.y+r.y)* max(.0,p.y)+0.1, 4.0));\n        alpha = color.r;\n        color = color/(1.0+max(vec3(0),color));\n        gl_FragColor = vec4(color.x, color.y, color.z, alpha);\n    }\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFlame301Remix3 = function(_super) {
      __extends(ShaderFlame301Remix3, _super);
      function ShaderFlame301Remix3() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 1;
        _this.time = 0;
        return _this;
      }
      ShaderFlame301Remix3.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = new cc.Vec2(sprite.node.width, sprite.node.height);
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", 0);
        material.setParamValue("speed", this.speed);
      };
      ShaderFlame301Remix3.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderFlame301Remix3.prototype, "speed", void 0);
      ShaderFlame301Remix3 = __decorate([ ccclass ], ShaderFlame301Remix3);
      return ShaderFlame301Remix3;
    }(ShaderComponent_1.default);
    exports.default = ShaderFlame301Remix3;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFlameAvin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf833c+g7VMyJwZ7cmZWAO8", "ShaderFlameAvin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFlameAvin",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\tuniform sampler2D texture;\n\tuniform float time;\n\tuniform float speed;\n\tuniform vec4 uvfix;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn (uvfix.xy - uvfix.zw) * uv ;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn uv/uvfix.xy + uvfix.zw;\n\t}\n\n\t// Simplex noise from https://www.shadertoy.com/view/4sdGD8\n\tlowp vec3 permute(in lowp vec3 x) { return mod( x*x*34.+x, 289.); }\n\tlowp float snoise(in lowp vec2 v)\n\t{\n\t\tlowp vec2 i = floor((v.x+v.y)*.36602540378443 + v),\n\t\t\tx0 = (i.x+i.y)*.211324865405187 + v - i;\n\t\tlowp float s = step(x0.x,x0.y);\n\t\tlowp vec2 j = vec2(1.0-s,s),\n\t\t\tx1 = x0 - j + .211324865405187,\n\t\t\tx3 = x0 - .577350269189626;\n\t\ti = mod(i,289.);\n\t\tlowp vec3 p = permute( permute( i.y + vec3(0, j.y, 1 ))+ i.x + vec3(0, j.x, 1 )   ),\n\t\t\tm = max( .5 - vec3(dot(x0,x0), dot(x1,x1), dot(x3,x3)), 0.),\n\t\t\tx = fract(p * .024390243902439) * 2. - 1.,\n\t\t\th = abs(x) - .5,\n\t\t\ta0 = x - floor(x + .5);\n\t\treturn .5 + 65. * dot( pow(m,vec3(4.))*(- 0.85373472095314*( a0*a0 + h*h )+1.79284291400159 ), a0 * vec3(x0.x,x1.x,x3.x) + h * vec3(x0.y,x1.y,x3.y));\n\t}\n\n\tvoid main()\n\t{\n\t\tvec2 uv = bigger(v_uv0);\n\t\tuv.y = 1.0 - uv.y;\n\n\t\tvec2 nuv = uv;\n\t\tnuv.y -= time*speed*.30;\n\t\tnuv.y = nuv.y*.75; // little narrow\n\n\t\tfloat a = snoise(nuv*10.);\n\t\ta+=snoise(nuv*20.)*.5;\n\t\ta+=snoise(nuv*30.)*.25;\n\t\ta+=snoise(nuv*40.)*.15;\n\t\ta+=snoise(nuv*50.)*.05;\n\t\ta+=snoise(nuv*60.)*.025;\n\n\t\tvec3 col = vec3(0.85, 0.1, 0.);\n\n\t\tfloat rs = a*uv.y*5.;\n\n\t\t// Red+yellow\n\t\tcol.rg += rs;\n\t\tcol *= 1.25;\n\n\t\t// Black\n\t\t// col *= smoothstep(.85, .80, rs) * smoothstep(.9, .85, rs);\n\n\t\t// White\n\t\tcol += smoothstep(.65, 1., rs);\n\n\t\t// Output to screen\n\t\tgl_FragColor = vec4(col, 1.0-col.b);\n\t}\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFlameAvin = function(_super) {
      __extends(ShaderFlameAvin, _super);
      function ShaderFlameAvin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 1;
        _this.time = 0;
        return _this;
      }
      ShaderFlameAvin.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        material.setParamValue("time", 0);
        material.setParamValue("speed", this.speed);
      };
      ShaderFlameAvin.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderFlameAvin.prototype, "speed", void 0);
      ShaderFlameAvin = __decorate([ ccclass ], ShaderFlameAvin);
      return ShaderFlameAvin;
    }(ShaderComponent_1.default);
    exports.default = ShaderFlameAvin;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFlameBrady: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21cda6EPONGdppkQHBUm4+n", "ShaderFlameBrady");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFlameBrady",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "mouse",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\t#define STEPS 30.  // increase to smooth\n\n\tuniform sampler2D texture;\n\tuniform float time;\n\tuniform float speed;\n\tuniform vec2 resolution;\n\tuniform vec4 uvfix;\n\tuniform vec2 mouse;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn (uvfix.xy - uvfix.zw) * uv ;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn uv/uvfix.xy + uvfix.zw;\n\t}\n\n\t/////////////////////////////\n\t// BRADY'S VOLUMETRIC FIRE //\n\t/////////////////////////////\n\n\t// CREDITS\n\t// Thanks to @shnitzelkiller & @iq for inspiration and help\n\t// noise: https://github.com/BrianSharpe/Wombat/blob/master/Value3D.glsl\n\t// saturation: https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Source/Shaders/Builtin/Functions/saturation.glsl\n\t// fnoise: https://www.shadertoy.com/view/Xsd3R2\n\n\tfloat noise( vec3 P )\n\t{\n\t\tvec3 Pi = floor(P);\n\t\tvec3 Pf = P - Pi;\n\t\tvec3 Pf_min1 = Pf - 1.0;\n\t\tPi.xyz = Pi.xyz - floor(Pi.xyz * ( 1.0 / 69.0 )) * 69.0;\n\t\tvec3 Pi_inc1 = step( Pi, vec3( 69.0 - 1.5 ) ) * ( Pi + 1.0 );\n\t\tvec4 Pt = vec4( Pi.xy, Pi_inc1.xy ) + vec2( 50.0, 161.0 ).xyxy;\n\t\tPt *= Pt;\n\t\tPt = Pt.xzxz * Pt.yyww;\n\t\tvec2 hash_mod = vec2( 1.0 / ( 635.298681 + vec2( Pi.z, Pi_inc1.z ) * 48.500388 ) );\n\t\tvec4 hash_lowz = fract( Pt * hash_mod.xxxx );\n\t\tvec4 hash_highz = fract( Pt * hash_mod.yyyy );\n\t\tvec3 blend = Pf * Pf * Pf * (Pf * (Pf * 6.0 - 15.0) + 10.0);\n\t\tvec4 res0 = mix( hash_lowz, hash_highz, blend.z );\n\t\tvec4 blend2 = vec4( blend.xy, vec2( 1.0 - blend.xy ) );\n\t\treturn dot( res0, blend2.zxzx * blend2.wwyy );\n\t}\n\n\tfloat fnoise(vec3 p, float t)\n\t{\n\t\tfloat f = 0.0;\n\t\tp = p - vec3(0.0, 1.0, 0.0) * .5 * t;\n\t\tp = p * 3.0;\n\t\tf += 0.50000 * noise(p); p = 2.0 * p;\n\t\tf += 0.25000 * noise(p); p = 2.0 * p;\n\t\tf += 0.12500 * noise(p); p = 2.0 * p;\n\t\tf += 0.06250 * noise(p); p = 2.0 * p;\n\t\tf += 0.03125 * noise(p);\n\t\treturn f;\n\t}\n\n\tfloat model( in vec3 p )\n\t{\n\t\tp.y *= .7;\n\t\tfloat sphere = length(p)-.8;\n\t\tfloat res = sphere + fnoise(p*1.5, time*speed*3.)* .4;\n\t\treturn res*.8;\n\t}\n\n\tfloat raymarch(in vec3 ro, in vec3 rd)\n\t{\n\t\tfloat dist = 0.;\n\t\tfor(int i = 0; i < 30; i++)\n\t\t{\n\t\t\tfloat m = model(ro+rd*dist);\n\t\t\tdist += m;\n\n\t\t\tif(m < .01) return dist;\n\t\t\telse if(dist > 2.) break;\n\t\t}\n\t\treturn -1.;\n\t}\n\n\tvec3 hueShift( vec3 color, float hueAdjust ){\n\n\t\tconst vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);\n\t\tconst vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);\n\t\tconst vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);\n\n\t\tconst vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);\n\t\tconst vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);\n\t\tconst vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);\n\n\t\tfloat   YPrime  = dot (color, kRGBToYPrime);\n\t\tfloat   I       = dot (color, kRGBToI);\n\t\tfloat   Q       = dot (color, kRGBToQ);\n\t\tfloat   hue     = atan (Q, I);\n\t\tfloat   chroma  = sqrt (I * I + Q * Q);\n\n\t\thue += hueAdjust;\n\n\t\tQ = chroma * sin (hue);\n\t\tI = chroma * cos (hue);\n\n\t\tvec3    yIQ   = vec3 (YPrime, I, Q);\n\n\t\treturn vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );\n\n\t}\n\n\tvec3 saturation(vec3 rgb, float adjustment)\n\t{\n\t\tconst vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\t\tvec3 intensity = vec3(dot(rgb, W));\n\t\treturn mix(intensity, rgb, adjustment);\n\t}\n\n\tvec3 background(in vec2 p)\n\t{\n\t\treturn vec3(0.,0.,0.);\n\t}\n\n\tvec3 volume(in vec3 p, in vec3 rd, in vec3 ld, in vec2 sp)\n\t{\n\t\tvec3 op = p;\n\t\tfloat trans = 1.0;\n\t\tfloat td = 0.0;\n\t\tfloat dif = 0.0;\n\t\tfloat emit = 0.0;\n\n\t\t// march\n\t\tfor(float i = 0.; i < STEPS; i++)\n\t\t{\n\t\t\tfloat m = model(p);\n\t\t\tp += rd*.03;\n\n\t\t\tfloat dens = 1.-smoothstep(0., .35, -m);\n\t\t\ttd += dens;\n\t\t\ttrans *= dens;\n\n\t\t\tif(td > 1.0 && dif <= 0.)\n\t\t\t{\n\t\t\t\ttd = 1.;\n\t\t\t\tdif = clamp(1. - model(p - .1*ld), 0., 1.);\n\t\t\t\temit = pow(smoothstep(-.3, 0., model(p)), 4.);\n\t\t\t}\n\t\t}\n\n\t\ttrans = (1.-pow(td/STEPS, 4.5));\n\t\ttrans = smoothstep(0., 1., trans);\n\t\tfloat emitmod = (emit*trans)*.8+.2;\n\n\t\t// light\n\t\tvec3 lin = vec3(.3, .2, .9);\n\t\tlin = hueShift(lin, 4.2 + -trans*.6 + dif*.5);\n\t\tlin *= emitmod;\n\n\t\t// bright/sat/contrast\n\t\tlin = saturation(lin, pow(trans, .5)*.4);\n\t\tlin *= 5.;\n\t\tlin -= vec3(.4);\n\n\t\treturn mix(background(sp), lin, pow(trans, 1.25));\n\t}\n\n\tvoid main()\n\t{\n\t\tvec2 uv = bigger(v_uv0);\n\t\tuv.y = 1.0 - uv.y;\n\t\tvec2 fragCoord = uv*resolution;\n\t\tvec2 p = (fragCoord.xy - .5*resolution.xy)/resolution.y;\n\n\t\tfloat rs = .5;\n\t\tvec3 ro = vec3(cos(mouse.x/100.), 1., sin(mouse.x/100.))*1.35;\n\t\tvec3 ta = vec3(0., 0.1, .0);\n\n\t\tvec3 w = normalize (ta-ro);\n\t\tvec3 u = normalize (cross (w, vec3(0., 1., 0.)));\n\t\tvec3 v = normalize (cross (u, w));\n\t\tmat3 mat = mat3(u, v, w);\n\t\tvec3 rd = normalize (mat*vec3(p.xy,1.));\n\n\t\tfloat dist = raymarch(ro, rd);\n\t\tvec3 ld = vec3(-1., 1., 0.);\n\t\tvec3 col = dist > 0. ? volume(ro+rd*dist, rd, ld, p) : background(p);\n\n\t\tgl_FragColor = vec4(col,col.r);\n\t}\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFlameBrady = function(_super) {
      __extends(ShaderFlameBrady, _super);
      function ShaderFlameBrady() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = 1;
        _this.mouse = cc.v2(0, 0);
        return _this;
      }
      ShaderFlameBrady.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = new cc.Vec2(sprite.node.width, sprite.node.height);
        material.setParamValue("resolution", resolution);
        material.setParamValue("mouse", this.mouse);
        material.setParamValue("time", 0);
        material.setParamValue("speed", this.speed);
      };
      ShaderFlameBrady.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Vec2) ], ShaderFlameBrady.prototype, "mouse", void 0);
      ShaderFlameBrady = __decorate([ ccclass ], ShaderFlameBrady);
      return ShaderFlameBrady;
    }(ShaderComponent_1.default);
    exports.default = ShaderFlameBrady;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFlameOzzy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd1b7PYBA1LNaGnhbzhQqpZ", "ShaderFlameOzzy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFlameOzzy",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\tuniform sampler2D texture;\n    uniform float time;\n    uniform float speed;\n    uniform vec2 resolution;\n\tuniform vec4 uvfix;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn uvfix.xy * uv + uvfix.zw;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn (uv - uvfix.zw) / uvfix.xy;\n    }\n\n    #define ITERATIONS 12\n    #define SPEED 10.0\n    #define DISPLACEMENT 0.05\n    #define TIGHTNESS 10.0\n    #define YOFFSET 0.1\n    #define YSCALE 0.25\n    #define FLAMETONE vec3(50.0, 5.0, 1.0)\n\n    float shape(in vec2 pos) // a blob shape to distort\n    {\n        return clamp( sin(pos.x*3.1416) - pos.y+YOFFSET, 0.0, 1.0 );\n    }\n\n    float noise( in vec3 x ) // iq noise function\n    {\n        vec3 p = floor(x);\n        vec3 f = fract(x);\n        f = f*f*(3.0-2.0*f);\n        vec2 uv = p.xy + f.xy + vec2(37.0,17.0)*p.z + 0.5;\n        uv = mod(uv,resolution) / resolution;\n        vec2 rg = texture2D(texture, uv, 0.0).yx;\n        return mix( rg.x, rg.y, f.z ) * 2.0 - 1.0;\n    }\n\n    void main()\n    {\n        vec2 uv = v_uv0.xy;\n        uv.y = 1. - uv.y;\n\n        float nx = 0.0;\n        float ny = 0.0;\n        for (int i=1; i<ITERATIONS+1; i++)\n        {\n            float ii = pow(float(i), 2.0);\n            float ifrac = float(i)/float(ITERATIONS);\n            float t = time * speed;\n            float tx = t * ifrac;\n            float ty = t * ifrac * SPEED;\n            float tz = t * ifrac / ii;\n            float d = (1.0-ifrac) * DISPLACEMENT;\n            nx += noise(vec3(uv.x*ii-tx, uv.y*YSCALE*ii-ty, 0.0)) * d * 2.0;\n            ny += noise(vec3(uv.x*ii+tx, uv.y*YSCALE*ii-ty, tz)) * d;\n        }\n        float flame = shape( vec2(uv.x+nx, uv.y+ny) );\n        vec3 color = pow(flame, TIGHTNESS) * FLAMETONE;\n\n        // tonemapping\n        color = color / (1.0+color);\n        color = pow(color, vec3(1.0/2.2));\n        color = clamp(color, 0.0, 1.0);\n\n        gl_FragColor = vec4(color, color.r);\n    }\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFlameOzzy = function(_super) {
      __extends(ShaderFlameOzzy, _super);
      function ShaderFlameOzzy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = 1;
        return _this;
      }
      ShaderFlameOzzy.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = new cc.Vec2(sprite.node.width, sprite.node.height);
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", 0);
        material.setParamValue("speed", this.speed);
      };
      ShaderFlameOzzy.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      ShaderFlameOzzy = __decorate([ ccclass ], ShaderFlameOzzy);
      return ShaderFlameOzzy;
    }(ShaderComponent_1.default);
    exports.default = ShaderFlameOzzy;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFlameWADE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2c4bJxRKlIe4vGDbLbohtZ", "ShaderFlameWADE");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFlameWADE",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\tuniform sampler2D texture;\n\tuniform float time;\n\tuniform float speed;\n\tuniform vec4 uvfix;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn uvfix.xy * uv + uvfix.zw;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn (uv - uvfix.zw) / uvfix.xy;\n\t}\n\n\tvoid main(){\n\t\tvec2 uv = bigger(v_uv0);\n\n\t\t// Generate noisy x value\n\t\tvec2 n0Uv = vec2(uv.x*1.4 + 0.01, fract(uv.y + time*speed*0.69));\n\t\tvec2 n1Uv = vec2(uv.x*0.5 - 0.033, fract(uv.y*2.0 + time*speed*0.12));\n\t\tvec2 n2Uv = vec2(uv.x*0.94 + 0.02, fract(uv.y*3.0 + time*speed*0.61));\n\t\tfloat n0 = (texture2D(texture, smaller(n0Uv)).w-0.5)*2.0;\n\t\tfloat n1 = (texture2D(texture, smaller(n1Uv)).w-0.5)*2.0;\n\t\tfloat n2 = (texture2D(texture, smaller(n2Uv)).w-0.5)*2.0;\n\t\tfloat noiseA = clamp(n0 + n1 + n2, -1.0, 1.0);\n\n\t\t// Generate noisy y value\n\t\tvec2 n0UvB = vec2(uv.x*0.7 - 0.01, fract(uv.y + time*speed*0.27));\n\t\tvec2 n1UvB = vec2(uv.x*0.45 + 0.033, fract(uv.y*1.9 + time*speed*0.61));\n\t\tvec2 n2UvB = vec2(uv.x*0.8 - 0.02, fract(uv.y*2.5 + time*speed*0.51));\n\t\tfloat n0B = (texture2D(texture, smaller(n0UvB)).w-0.5)*2.0;\n\t\tfloat n1B = (texture2D(texture, smaller(n1UvB)).w-0.5)*2.0;\n\t\tfloat n2B = (texture2D(texture, smaller(n2UvB)).w-0.5)*2.0;\n\t\tfloat noiseB = clamp(n0B + n1B + n2B, -1.0, 1.0);\n\n\t\tvec2 finalNoise = vec2(noiseA, noiseB);\n\t\tfloat perturb = (1.0 - uv.y) * 0.35 + 0.02;\n\t\tfinalNoise = (finalNoise * perturb) + uv - 0.02;\n\n\t\tvec4 color = texture2D(texture, smaller(finalNoise));\n\t\tcolor = vec4(color.x*2.0, color.y*0.9, (color.y/color.x)*0.2, 1.0);\n\t\tfinalNoise = clamp(finalNoise, 0.05, 1.0);\n\t\tcolor.w = texture2D(texture, smaller(finalNoise)).z * 2.0 * texture2D(texture, smaller(uv)).z;\n\t\tgl_FragColor = color;\n\t}\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFlameWADE = function(_super) {
      __extends(ShaderFlameWADE, _super);
      function ShaderFlameWADE() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = 1;
        return _this;
      }
      ShaderFlameWADE.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        material.setParamValue("time", 0);
        material.setParamValue("speed", this.speed);
      };
      ShaderFlameWADE.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderFlameWADE.prototype, "speed", void 0);
      ShaderFlameWADE = __decorate([ ccclass ], ShaderFlameWADE);
      return ShaderFlameWADE;
    }(ShaderComponent_1.default);
    exports.default = ShaderFlameWADE;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFluxay2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0feefjYMrZGpqPr1YhJB3fw", "ShaderFluxay2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFluxay2",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n        #define TAU 6.12\n        #define MAX_ITER 10\n        #define useModel\n        #define use2DPos\n        precision highp float;\n\n\n        uniform sampler2D texture;\n        varying mediump vec2 v_uv0;\n\n        #ifdef alphaTest\n          uniform lowp float alphaThreshold;\n        #endif\n\n        varying lowp vec4 v_light;\n        #ifdef useTint\n          varying lowp vec4 v_dark;\n        #endif\n        uniform float bluramount;\n        uniform float time;\n        uniform float speed;\n\n        void main()\n        {\n            vec4 texColor = texture2D(texture, v_uv0);\n            vec4 finalColor;\n\n            #ifdef useTint\n              finalColor.a = v_light.a * texColor.a;\n              finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n            #else\n              finalColor = texColor * v_light;\n            #endif\n\n            #ifdef alphaTest\n              if (finalColor.a <= alphaThreshold)\n                discard;\n            #endif\n\n\n            float itime = time * speed * .5+5.;\n            // uv should be the 0-1 uv of texture...\n            vec2 uv = v_uv0.xy;\n\n            vec2 p = mod(uv*TAU, TAU)-250.0;\n\n            vec2 i = vec2(p);\n            float c = 1.0;\n            float inten = .0045;\n\n            for (int n = 0; n < MAX_ITER; n++)\n            {\n                float t =  itime * (1.0 - (3.5 / float(n+1)));\n                i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(1.5*t + i.x));\n                c += 1.0/length(vec2(p.x / (cos(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\n            }\n            c /= float(MAX_ITER);\n            c = 1.17-pow(c, 1.4);\n            vec4 tex = texture2D(texture,uv);\n            vec3 colour = vec3(pow(abs(c), 20.0));\n            colour = clamp(colour + vec3(0.0, 0.0, .0), 0.0, tex.a);\n\n            // \u6df7\u5408\u6ce2\u5149\n            float alpha = c*tex[3];\n            tex[0] = tex[0] + colour[0]*alpha;\n            tex[1] = tex[1] + colour[1]*alpha;\n            tex[2] = tex[2] + colour[2]*alpha;\n            gl_FragColor = finalColor*2.0 * tex;\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFluxay2 = function(_super) {
      __extends(ShaderFluxay2, _super);
      function ShaderFluxay2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 1;
        _this.time = 0;
        return _this;
      }
      ShaderFluxay2.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
      };
      ShaderFluxay2.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderFluxay2.prototype, "speed", void 0);
      ShaderFluxay2 = __decorate([ ccclass ], ShaderFluxay2);
      return ShaderFluxay2;
    }(ShaderComponent_1.default);
    exports.default = ShaderFluxay2;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFluxay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14afam9PvhMELAW0eSTrQ8v", "ShaderFluxay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderFluxay",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      defines: [],
      vert: "\n        #define useModel\n        #define use2DPos\n        precision highp float;\n\n\n        uniform mat4 viewProj;\n\n        #ifdef use2DPos\n        attribute vec2 a_position;\n        #else\n        attribute vec3 a_position;\n        #endif\n\n        attribute lowp vec4 a_color;\n        #ifdef useTint\n        attribute lowp vec4 a_color0;\n        #endif\n\n        #ifdef useModel\n        uniform mat4 model;\n        #endif\n\n        attribute mediump vec2 a_uv0;\n        varying mediump vec2 v_uv0;\n\n        varying lowp vec4 v_light;\n        #ifdef useTint\n        varying lowp vec4 v_dark;\n        #endif\n\n        void main () {\n            mat4 mvp;\n            #ifdef useModel\n              mvp = viewProj * model;\n            #else\n              mvp = viewProj;\n            #endif\n\n            #ifdef use2DPos\n            vec4 pos = mvp * vec4(a_position, 0, 1);\n            #else\n            vec4 pos = mvp * vec4(a_position, 1);\n            #endif\n\n            v_light = a_color;\n            #ifdef useTint\n              v_dark = a_color0;\n            #endif\n\n            v_uv0 = a_uv0;\n\n            gl_Position = pos;\n        }",
      frag: "\n        #define useModel\n        #define use2DPos\n        precision highp float;\n\n\n        uniform sampler2D texture;\n        varying mediump vec2 v_uv0;\n\n        #ifdef alphaTest\n          uniform lowp float alphaThreshold;\n        #endif\n\n        varying lowp vec4 v_light;\n        #ifdef useTint\n          varying lowp vec4 v_dark;\n        #endif\n        uniform float time;\n        uniform float speed;\n\n        void main()\n        {\n            vec4 texColor = texture2D(texture, v_uv0);\n            vec4 finalColor;\n\n            #ifdef useTint\n              finalColor.a = v_light.a * texColor.a;\n              finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n            #else\n              finalColor = texColor * v_light;\n            #endif\n\n            #ifdef alphaTest\n              if (finalColor.a <= alphaThreshold)\n                discard;\n            #endif\n\n            float width = 0.03;       //\u6d41\u5149\u7684\u5bbd\u5ea6\u8303\u56f4 (\u8c03\u6574\u8be5\u503c\u6539\u53d8\u6d41\u5149\u7684\u5bbd\u5ea6)\n            float start = tan(mod(time*speed,1.414)/1.414);  //\u6d41\u5149\u7684\u8d77\u59cbx\u5750\u6807\n            float strength = 0.05;   //\u6d41\u5149\u589e\u4eae\u5f3a\u5ea6   (\u8c03\u6574\u8be5\u503c\u6539\u53d8\u6d41\u5149\u7684\u589e\u4eae\u5f3a\u5ea6)\n            float offset = 0.5;      //\u504f\u79fb\u503c         (\u8c03\u6574\u8be5\u503c\u6539\u53d8\u6d41\u5149\u7684\u503e\u659c\u7a0b\u5ea6)\n            if(v_uv0.x < (start - offset * v_uv0.y) &&  v_uv0.x > (start - offset * v_uv0.y - width))\n            {\n                vec3 improve = strength * vec3(255, 255, 255);\n                vec3 result = improve * vec3( finalColor.r, finalColor.g, finalColor.b);\n                gl_FragColor = vec4(result, finalColor.a);\n\n            }else{\n                gl_FragColor = finalColor;\n            }\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderFluxay = function(_super) {
      __extends(ShaderFluxay, _super);
      function ShaderFluxay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = 1;
        return _this;
      }
      ShaderFluxay.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
      };
      ShaderFluxay.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderFluxay.prototype, "speed", void 0);
      ShaderFluxay = __decorate([ ccclass ], ShaderFluxay);
      return ShaderFluxay;
    }(ShaderComponent_1.default);
    exports.default = ShaderFluxay;
    cc._RF.pop();
  }, {
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderFunc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "848a1BHpgpIkJe62a3fGm9F", "ShaderFunc");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RENDERER_PARAMS;
    (function(RENDERER_PARAMS) {
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_COLOR3"] = 8] = "PARAM_COLOR3";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_COLOR4"] = 9] = "PARAM_COLOR4";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_FLOAT"] = 4] = "PARAM_FLOAT";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_FLOAT2"] = 5] = "PARAM_FLOAT2";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_FLOAT3"] = 6] = "PARAM_FLOAT3";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_FLOAT4"] = 7] = "PARAM_FLOAT4";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_INT"] = 0] = "PARAM_INT";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_INT2"] = 1] = "PARAM_INT2";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_INT3"] = 2] = "PARAM_INT3";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_INT4"] = 3] = "PARAM_INT4";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_MAT2"] = 10] = "PARAM_MAT2";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_MAT3"] = 11] = "PARAM_MAT3";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_MAT4"] = 12] = "PARAM_MAT4";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_TEXTURE_2D"] = 13] = "PARAM_TEXTURE_2D";
      RENDERER_PARAMS[RENDERER_PARAMS["PARAM_TEXTURE_CUBE"] = 14] = "PARAM_TEXTURE_CUBE";
    })(RENDERER_PARAMS = exports.RENDERER_PARAMS || (exports.RENDERER_PARAMS = {}));
    var PARAM_TYPES;
    (function(PARAM_TYPES) {
      PARAM_TYPES[PARAM_TYPES["NUMBER"] = 0] = "NUMBER";
      PARAM_TYPES[PARAM_TYPES["INT"] = 1] = "INT";
      PARAM_TYPES[PARAM_TYPES["BOOLEAN"] = 2] = "BOOLEAN";
      PARAM_TYPES[PARAM_TYPES["COLOR"] = 3] = "COLOR";
    })(PARAM_TYPES = exports.PARAM_TYPES || (exports.PARAM_TYPES = {}));
    var Param = function() {
      function Param() {}
      return Param;
    }();
    exports.Param = Param;
    cc._RF.pop();
  }, {} ],
  ShaderGalaxy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cfb4Txy/hOnaBe/OXntXk6", "ShaderGalaxy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderGalaxy",
      params: [ {
        name: "iResolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "uvfix",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
      }, {
        name: "isReverse",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "isStill",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "isMix",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "showCore",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "showAround",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "size",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        min: 1,
        max: 200
      }, {
        name: "armDensity",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3,
        min: 1,
        max: 200
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "addBlock",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        min: 0,
        max: 200
      }, {
        name: "galaxyColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n\n        // Shader Toy\n        // https://www.shadertoy.com/view/MdXSzS\n        // The Big Bang - just a small explosion somewhere in a massive Galaxy of Universes.\n        // Outside of this there's a massive galaxy of 'Galaxy of Universes'... etc etc. :D\n\n\n        uniform sampler2D texture;\n        uniform vec2    iResolution;\n        uniform float   time;\n        uniform vec4    uvfix;\n        varying vec2    v_uv0;\n\n        uniform int     isReverse;\n        uniform int     isStill;\n        uniform int     isMix;\n        uniform int     showCore;\n        uniform int     showAround;\n        uniform float   speed;\n        uniform float   size;\n        uniform float   addBlock;\n        uniform vec3    armDensity;\n        uniform vec3    galaxyColor;\n\n        vec2 bigger(in vec2 uv){\n            // return (uvfix.xy - uvfix.zw) * uv;\n            return uvfix.xy * uv + uvfix.zw;\n        }\n\n        vec2 smaller(in vec2 uv){\n            //return uv / uvfix.xy - uvfix.zw;\n            return (uv - uvfix.zw) / uvfix.xy;\n\n        }\n\n        void main(){\n            vec2 uv = v_uv0;\n            uv = uv * 2.0 - 1.0;\n            uv /= size;\n            float t = time * speed + ((.25 + .05 * sin(time * .1))/(length(uv.xy) + .07)) * 2.2;\n\n            if(isStill == 1){\n                t = 0.0;\n            }\n\n            float si = sin(t);\n            float co = cos(t);\n\n            if(isReverse == 1){\n                si *= -1.0;\n            }\n\n            mat2 ma = mat2(co, si, -si, co);\n\n            float vR, vG, vB;\n            vR = vG = vB = 0.0;\n\n            float s = 0.0;\n            for (int i = 0; i < 90; i++){\n                vec3 p = s * vec3(uv, 0.0);\n                p.xy *= ma;\n                p += vec3(.22, .3, s - 1.5 - sin(time * .13) * .1);\n\n                for (int i = 0; i < 8; i++){\n                    p = abs(p) / dot(p,p) - 0.659;\n                }\n\n                // vR += length(p.xy*10.) * .0003;\n                // vG += dot(p,p) * .0015 * (1.8 + sin(length(uv.xy * 13.0) + .5  - time * .2));\n                // vB += dot(p,p) * .0013 * (1.5 + sin(length(uv.xy * 14.5) + 1.2 - time * .3));\n\n                vR += length(p.xy*10.) * (armDensity.x/1e5);\n                vG += dot(p,p) * (armDensity.y/1e5) * (1.8 + sin(length(uv.xy * 13.0) + .5  - time * .2));\n                vB += dot(p,p) * (armDensity.z/1e5) * (1.5 + sin(length(uv.xy * 14.5) + 1.2 - time * .3));\n                s  += .035;\n            }\n\n            float length = length(uv);\n\n            if(showAround == 0){\n                vR *= smoothstep(.9, .0, length);\n                vG *= smoothstep(.7, .0, length);\n                vB *= smoothstep(.5, .0, length);\n            }\n\n            vec3 color = vec3(vR,vG,vB);\n            if(isMix == 1){\n                color = vec3(vR * (1.5 + sin(time * .2) * .4),(vG + vR) * .3,vB);\n            }\n\n            if(showCore == 1){\n                color += smoothstep(0.2, .0, length) * .85 + smoothstep(.0, .6, vR) * .3;\n            }\n\n            vec3 newCol = min(pow(abs(color), vec3(1.2)), 1.0);\n            // newCol *= galaxyColor;\n            float newA = newCol[0] + newCol[1] + newCol[2];\n\n            //newCol *= 2.;\n            newA *= addBlock;\n\n\t\t\tnewCol = newCol * galaxyColor;\n            gl_FragColor=vec4(newCol ,newA);\n        }\n\n\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderGalaxy = function(_super) {
      __extends(ShaderGalaxy, _super);
      function ShaderGalaxy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.isReverse = false;
        _this.isStill = false;
        _this.isMix = true;
        _this.showCore = true;
        _this.showAround = false;
        _this.armDensity = new cc.Vec3(3e-4 * 1e5, 150, 130);
        _this.speed = .1;
        _this.size = 1;
        _this.addBlock = 3;
        _this.galaxyColor = cc.color(255, 255, 255);
        _this.time = 0;
        return _this;
      }
      ShaderGalaxy.prototype.doStart = function(sprite, material, dt) {
        var iResolution = cc.v2(sprite.node.getContentSize().width, sprite.node.getContentSize().height);
        var uvfix = ShaderComponent_1.getUVfix(sprite.spriteFrame);
        this.time = 10;
        material.setParamValue("iResolution", iResolution);
        material.setParamValue("uvfix", uvfix);
        material.setParamValue("time", this.time);
        material.setParamValue("isReverse", this.isReverse ? 1 : 0);
        material.setParamValue("isStill", this.isStill ? 1 : 0);
        material.setParamValue("isMix", this.isMix ? 1 : 0);
        material.setParamValue("showCore", this.showCore ? 1 : 0);
        material.setParamValue("showAround", this.showAround ? 1 : 0);
        material.setParamValue("speed", this.speed);
        material.setParamValue("size", this.size);
        material.setParamValue("addBlock", this.addBlock);
        material.setParamValue("armDensity", {
          x: this.armDensity.x,
          y: this.armDensity.y,
          z: this.armDensity.z
        });
        material.setParamValue("galaxyColor", {
          x: this.galaxyColor.getR() / 255,
          y: this.galaxyColor.getG() / 255,
          z: this.galaxyColor.getB() / 255
        });
      };
      ShaderGalaxy.prototype.doUpdate = function(sprite, material, dt) {
        if (!this.isStill) {
          this.time += dt;
          material.setParamValue("time", this.time);
        }
      };
      __decorate([ property({
        tooltip: "\u53cd\u8f49"
      }) ], ShaderGalaxy.prototype, "isReverse", void 0);
      __decorate([ property({
        tooltip: "\u975c\u6b62"
      }) ], ShaderGalaxy.prototype, "isStill", void 0);
      __decorate([ property({
        tooltip: "\u6df7\u8272"
      }) ], ShaderGalaxy.prototype, "isMix", void 0);
      __decorate([ property({
        tooltip: "\u986f\u793a\u9280\u5fc3"
      }) ], ShaderGalaxy.prototype, "showCore", void 0);
      __decorate([ property({
        tooltip: "\u986f\u793a\u5468\u570d"
      }) ], ShaderGalaxy.prototype, "showAround", void 0);
      __decorate([ property({
        tooltip: "\u65cb\u81c2\u5bc6\u5ea6"
      }) ], ShaderGalaxy.prototype, "armDensity", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u65cb\u8f49\u901f\u7387"
      }) ], ShaderGalaxy.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5c3a\u5bf8"
      }) ], ShaderGalaxy.prototype, "size", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u52a0\u9ed1"
      }) ], ShaderGalaxy.prototype, "addBlock", void 0);
      __decorate([ property(cc.Color) ], ShaderGalaxy.prototype, "galaxyColor", void 0);
      ShaderGalaxy = __decorate([ ccclass ], ShaderGalaxy);
      return ShaderGalaxy;
    }(ShaderComponent_1.default);
    exports.default = ShaderGalaxy;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderGaussBlur: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88028X6Tl9Pco5Bqj+QGVOG", "ShaderGaussBlur");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderGaussBlur",
      params: [ {
        name: "bluramount",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: .005
      } ],
      defines: [],
      vert: "\n        #define useModel\n        #define use2DPos\n        precision highp float;\n\n\n        uniform mat4 viewProj;\n\n        #ifdef use2DPos\n        attribute vec2 a_position;\n        #else\n        attribute vec3 a_position;\n        #endif\n\n        attribute lowp vec4 a_color;\n        #ifdef useTint\n        attribute lowp vec4 a_color0;\n        #endif\n\n        #ifdef useModel\n        uniform mat4 model;\n        #endif\n\n        attribute mediump vec2 a_uv0;\n        varying mediump vec2 uv0;\n\n        varying lowp vec4 v_light;\n        #ifdef useTint\n        varying lowp vec4 v_dark;\n        #endif\n\n        void main () {\n            mat4 mvp;\n            #ifdef useModel\n              mvp = viewProj * model;\n            #else\n              mvp = viewProj;\n            #endif\n\n            #ifdef use2DPos\n            vec4 pos = mvp * vec4(a_position, 0, 1);\n            #else\n            vec4 pos = mvp * vec4(a_position, 1);\n            #endif\n\n            v_light = a_color;\n            #ifdef useTint\n              v_dark = a_color0;\n            #endif\n\n            uv0 = a_uv0;\n\n            gl_Position = pos;\n        }",
      frag: "\n        #define useModel\n        #define use2DPos\n        precision highp float;\n\n\n        uniform sampler2D texture;\n        varying mediump vec2 uv0;\n\n        #ifdef alphaTest\n          uniform lowp float alphaThreshold;\n        #endif\n\n        varying lowp vec4 v_light;\n        #ifdef useTint\n          varying lowp vec4 v_dark;\n        #endif\n        uniform float bluramount;\n\n        vec4 draw(vec2 uv) {\n            return texture2D(texture, uv).rgba;\n        }\n\n        float grid(float var, float size) {\n            return floor(var*size)/size;\n        }\n\n        float rand(vec2 co){\n            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n        }\n\n        void mainImage( out vec4 fragColor, in vec2 uv0 )\n        {\n            vec2 uv = uv0.xy;\n            vec4 blurred_image = vec4(0.);\n            #define repeats 5.\n            for (float i = 0.; i < repeats; i++) {\n                vec2 q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i,uv.x+uv.y))+bluramount);\n                vec2 uv2 = uv+(q*bluramount);\n                blurred_image += draw(uv2)/2.;\n                q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i+2.,uv.x+uv.y+24.))+bluramount);\n                uv2 = uv+(q*bluramount);\n                blurred_image += draw(uv2)/2.;\n            }\n            blurred_image /= repeats;\n            fragColor = vec4(blurred_image);\n        }\n\n        void main()\n        {\n            mainImage(gl_FragColor, uv0.xy);\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderGaussBlur = function(_super) {
      __extends(ShaderGaussBlur, _super);
      function ShaderGaussBlur() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.amount = .005;
        return _this;
      }
      ShaderGaussBlur.prototype.doStart = function(sprite, material, dt) {
        material.setParamValue("bluramount", this.amount);
      };
      ShaderGaussBlur.prototype.doUpdate = function(sprite, material, dt) {};
      __decorate([ property(cc.Float) ], ShaderGaussBlur.prototype, "amount", void 0);
      ShaderGaussBlur = __decorate([ ccclass ], ShaderGaussBlur);
      return ShaderGaussBlur;
    }(ShaderComponent_1.default);
    exports.default = ShaderGaussBlur;
    cc._RF.pop();
  }, {
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderGrassy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "430f09giP1FQI3e8uSPgh+y", "ShaderGrassy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderGrassy",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n    #ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define BLADES 50\nuniform float time;\nuniform vec2 resolution;\nvarying vec2 v_uv0;\n\nvec3 rotateX(float a, vec3 v)\n{\n\treturn vec3(v.x, cos(a) * v.y + sin(a) * v.z, cos(a) * v.z - sin(a) * v.y);\n}\n\nvec3 rotateY(float a, vec3 v)\n{\n\treturn vec3(cos(a) * v.x + sin(a) * v.z, v.y, cos(a) * v.z - sin(a) * v.x);\n}\n\nvec3 rotateZ(float a, vec3 v)\n{\n\treturn vec3(cos(a) * v.x + sin(a) * v.y, cos(a) * v.y - sin(a) * v.x, v.z);\n}\n\nvec4 grass(vec2 p, float x)\n{\n\tfloat s = mix(0.7, 2.0, 0.5 + sin(x * 12.0) * 0.5);\n\tp.x += pow(1.0 + p.y, 2.0) * 0.1 * cos(x * 0.5 + time);\n\tp.x *= s;\n\tp.y = (1.0 + p.y) * s - 1.0;\n\tfloat m = 1.0 - smoothstep(0.0, clamp(1.0 - p.y * 1.5, 0.01, 0.6) * 0.2 * s, pow(abs(p.x) * 19.0, 1.5) + p.y - 0.6);\n\treturn vec4(mix(vec3(0.05, 0.1, 0.0) * 0.8, vec3(0.0, 0.3, 0.0), (p.y + 1.0) * 0.5 + abs(p.x)), m * smoothstep(-1.0, -0.9, p.y));\n}\n\nvec3 backg(vec3 ro, vec3 rd)\n{\n\treturn vec3(0.0, 0.0, 0.0);\n\t// float t = (-1.0 - ro.y) / rd.y;\n\t// vec2 tc = ro.xz + rd.xz * t;\n\t// vec3 horiz = vec3(0.0, 0.2, 0.2) * 0.7;\n\t// vec3 sky = mix(horiz, vec3(0.1, 0.13, 0.15) * 0.8, dot(rd, vec3(0.0, 1.0, 0.0)));\n\t// vec3 ground = mix(horiz, vec3(0.04, 0.07, 0.0) * 0.6, pow(max(0.0, dot(rd, vec3(0.0, -1.0, 0.0))), 0.2));\n\t// return mix(sky, ground, step(0.0, t));\n}\n\n// some simple noise just to break up the hideous banding\nfloat dither()\n{\n\treturn fract(gl_FragCoord.x * 0.482635532 + gl_FragCoord.y * 0.1353412 + time * 100.0) * 0.008;\n}\n\nvoid main()\n{\n\tvec3 ct = vec3(0.0, 1.0, 5.0);\n\tvec3 cp = rotateY(cos(time * 0.2) * 0.4, vec3(0.0, 0.6, 0.0));\n\tvec3 cw = normalize(cp - ct);\n\tvec3 cu = normalize(cross(cw, vec3(0.0, 1.0, 0.0)));\n\tvec3 cv = normalize(cross(cu, cw));\n\n\tmat3 rm = mat3(cu, cv, cw);\n\n\t//\u6587\u7406y\u5750\u6807\u53cd\u8f6c\n\tvec2 uv = -v_uv0.xy * 2.0 + vec2(1.0);\n\tvec2 t = uv;\n\tt.x *= resolution.x / resolution.y;\n\n\tvec3 ro = cp, rd = rotateY(sin(time * 0.7) * 0.1, rm * rotateZ(sin(time * 0.15) * 0.1, vec3(t, -1.3)));\n\n\tvec3 fcol = backg(ro, rd);\n\n\tfor(int i = 0; i < BLADES; i += 1)\n\t{\n\t\tfloat z = -(float(BLADES - i) * 0.1 + 1.0);\n\t\tvec4 pln = vec4(0.0, 0.0, -1.0, z);\n\t\tfloat t = (pln.w - dot(pln.xyz, ro)) / dot(pln.xyz, rd);\n\t\tvec2 tc = ro.xy + rd.xy * t;\n\n\t\ttc.x += cos(float(i) * 3.0) * 4.0;\n\n\t\tfloat cell = floor(tc.x);\n\n\t\ttc.x = (tc.x - cell) - 0.5;\n\n\t\tvec4 c = grass(tc, float(i) + cell * 10.0);\n\n\t\tfcol = mix(fcol, c.rgb, step(0.0, t) * c.w);\n\t}\n\n\tfcol = pow(fcol * 1.1, vec3(0.8));\n\n\n\t// i\xc3\xb1igo quilez's great vigneting effect!\n\tvec2 q = (uv + vec2(1.)) * 0.5;\n\tfcol *= 0.2 + 0.8*pow( 16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y), 0.1 );\n\n\tif (fcol.x == 0. && fcol.y == 0. && fcol.z ==0.){\n\t\tdiscard;\n\t} else {\n\t\tgl_FragColor.rgb = fcol * 1.8 + vec3(dither());\n\t\tgl_FragColor.a = 1.0;\n\t}\n}"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderGrassy = function(_super) {
      __extends(ShaderGrassy, _super);
      function ShaderGrassy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        return _this;
      }
      ShaderGrassy.prototype.doStart = function(sprite, material, dt) {
        var size = cc.winSize;
        var resolution = new cc.Vec2(size.width, size.height);
        material.setParamValue("resolution", resolution);
      };
      ShaderGrassy.prototype.doUpdate = function(sprite, material, dt) {};
      ShaderGrassy = __decorate([ ccclass ], ShaderGrassy);
      return ShaderGrassy;
    }(ShaderComponent_1.default);
    exports.default = ShaderGrassy;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderHook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ec07tIleFO0bVTBDYEy/jq", "ShaderHook");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var renderEngine = cc.renderer.renderEngine;
    var SpriteMaterial = renderEngine.SpriteMaterial;
    var GraySpriteMaterial = renderEngine.GraySpriteMaterial;
    var STATE_CUSTOM = 101;
    cc.Sprite.prototype.setMaterials = function(name, mat) {
      this._materials || (this._materials = {});
      this._materials[name] = mat;
    };
    cc.Sprite.prototype.activateMaterial = function(name) {
      var mat = this._materials[name];
      if (mat && mat !== this._currMaterial) if (mat) {
        this.node && (mat.color = this.node.color);
        this.spriteFrame && (mat.texture = this.spriteFrame.getTexture());
        this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
        this._currMaterial = mat;
        this._currMaterial.name = name;
        this._state = STATE_CUSTOM;
        this._activateMaterial();
      } else console.error("activateMaterial - unknwon material: ", name);
    };
    cc.Sprite.prototype._activateMaterial = function() {
      var spriteFrame = this._spriteFrame;
      if (cc.game.renderType !== cc.game.RENDER_TYPE_CANVAS) {
        var material = void 0;
        if (this._state === cc.Sprite.State.GRAY) {
          this._graySpriteMaterial || (this._graySpriteMaterial = new GraySpriteMaterial());
          material = this._graySpriteMaterial;
          this._currMaterial = null;
        } else if (this._state === STATE_CUSTOM) {
          if (!this._currMaterial) return;
          material = this._currMaterial;
        } else {
          this._spriteMaterial || (this._spriteMaterial = new SpriteMaterial());
          material = this._spriteMaterial;
          this._currMaterial = null;
        }
        material.useColor = false;
        if (spriteFrame && spriteFrame.textureLoaded()) {
          var texture = spriteFrame.getTexture();
          if (material.texture !== texture) {
            material.texture = texture;
            this._updateMaterial(material);
          } else material !== this._material && this._updateMaterial(material);
          this._renderData && (this._renderData.material = material);
          this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
          this.markForUpdateRenderData(true);
          this.markForRender(true);
        } else this.disableRender();
      } else {
        this.markForUpdateRenderData(true);
        this.markForRender(true);
      }
    };
    cc._RF.pop();
  }, {} ],
  ShaderInterstellar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fec09Q6b5BN7HGCsag+JE6", "ShaderInterstellar");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderInterstellar",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n        uniform sampler2D texture;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        varying vec2 v_uv0;\n\n        const float tau = 6.28318530717958647692;\n\n        // Gamma correction\n        #define GAMMA (2.2)\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        float random(in vec2 st)\n        {\n            return fract(sin(dot(st.xy,vec2(12.443,78.4)))*43758.2);\n        }\n\n        vec3 ToLinear( in vec3 col )\n        {\n            // simulate a monitor, converting colour values into light values\n            return pow( col, vec3(GAMMA) );\n        }\n\n        vec3 ToGamma( in vec3 col )\n        {\n            // convert back into colour values, so the correct light will come out of the monitor\n            return pow( col, vec3(1.0/GAMMA) );\n        }\n\n        vec4 Noise( in ivec2 x )\n        {\n            return texture2D( texture, (vec2(x)+0.5)/256.0);\n        }\n\n        vec4 Rand( in int x )\n        {\n            vec2 uv;\n            uv.x = (float(x)+0.5)/256.0;\n            uv.y = (floor(uv.x)+0.5)/256.0;\n            return texture2D( texture, uv);\n        }\n\n\n        void main()\n        {\n            vec3 ray;\n            ray.xy = 4.*(bigger(v_uv0.xy));\n            ray.z = 1.0;\n\n            float offset = time*speed*.5;\n            float speed2 = (cos(offset)+1.0)*2.0;\n            float speed = speed2+.1;\n            offset += sin(offset)*.96;\n            offset *= 2.0;\n\n\n            vec3 col = vec3(0);\n\n            vec3 stp = ray/max(abs(ray.x),abs(ray.y));\n\n            vec3 pos = 2.0*stp+.5;\n            for ( int i=0; i < 20; i++ )\n            {\n                float z = Noise(ivec2(pos.xy)).x;\n                z = fract(z-offset);\n                float d = 50.0*z-pos.z;\n                float w = pow(max(0.0,1.0-8.0*length(fract(pos.xy)-.5)),2.0);\n                vec3 c = max(vec3(0),vec3(1.0-abs(d+speed2*.5)/speed,1.0-abs(d)/speed,1.0-abs(d-speed2*.5)/speed));\n                col += 1.5*(1.0-z)*c*w;\n                pos += stp;\n            }\n            //discard;\n            //fragColor = vec4(ToGamma(col),1.0);\n            gl_FragColor = vec4(ToGamma(col),1.0);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderInterstellar = function(_super) {
      __extends(ShaderInterstellar, _super);
      function ShaderInterstellar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.width = 400;
        _this.height = 400;
        _this.color = cc.color(255, 102, 38.25);
        _this.clearColor = 1;
        _this.cScale = 1e-5;
        _this.noise = null;
        return _this;
      }
      ShaderInterstellar.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
      };
      ShaderInterstellar.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderInterstellar.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Integer,
        min: 1
      }) ], ShaderInterstellar.prototype, "width", void 0);
      __decorate([ property({
        type: cc.Integer,
        min: 1
      }) ], ShaderInterstellar.prototype, "height", void 0);
      __decorate([ property(cc.Color) ], ShaderInterstellar.prototype, "color", void 0);
      __decorate([ property({
        type: cc.Enum(ShaderComponent_1.CLEAR_COLOR)
      }) ], ShaderInterstellar.prototype, "clearColor", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderInterstellar.prototype, "cScale", void 0);
      __decorate([ property(cc.SpriteFrame) ], ShaderInterstellar.prototype, "noise", void 0);
      ShaderInterstellar = __decorate([ ccclass ], ShaderInterstellar);
      return ShaderInterstellar;
    }(ShaderComponent_1.default);
    exports.default = ShaderInterstellar;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdc22TBhkhPioJNyrtMq9sK", "ShaderManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderMaterial_1 = require("./ShaderMaterial");
    var ShaderManager = function() {
      function ShaderManager() {
        this.shaders = {};
      }
      ShaderManager.prototype.addShader = function(shader) {
        if (this.shaders[shader.name]) return;
        this.shaders[shader.name] = shader;
        var define = function() {
          var lib = renderer._forward._programLib;
          !lib._templates[shader.name] && lib.define(shader.name, shader.vert, shader.frag, shader.defines || []);
        };
        var renderer = cc.renderer;
        renderer._forward ? define() : cc.game.once(cc.game.EVENT_ENGINE_INITED, define);
      };
      ShaderManager.prototype.createShaderMaterial = function(sprite, shader) {
        if (!sprite || cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) return null;
        if (null === shader) {
          sprite instanceof cc.Sprite && sprite.setState(shader);
          return null;
        }
        return new ShaderMaterial_1.ShaderMaterial(shader);
      };
      return ShaderManager;
    }();
    exports.shaderManager = new ShaderManager();
    cc._RF.pop();
  }, {
    "./ShaderMaterial": "ShaderMaterial"
  } ],
  ShaderMaterial: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "438fcVQuChIXZB7aOeqfdCy", "ShaderMaterial");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderFunc_1 = require("./ShaderFunc");
    var renderEngine = cc.renderer.renderEngine;
    var Material = renderEngine.Material;
    var ShaderMaterial = function(_super) {
      __extends(ShaderMaterial, _super);
      function ShaderMaterial(shader) {
        var _this = _super.call(this, false) || this;
        var renderer = renderEngine.renderer;
        var gfx = renderEngine.gfx;
        var pass = new renderer.Pass(shader.name);
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var techParams = [ {
          name: "texture",
          type: ShaderFunc_1.RENDERER_PARAMS.PARAM_TEXTURE_2D
        }, {
          name: "color",
          type: ShaderFunc_1.RENDERER_PARAMS.PARAM_COLOR4
        }, {
          name: "uvfix",
          type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
        } ];
        shader.params && (techParams = techParams.concat(shader.params));
        var mainTech = new renderer.Technique([ "transparent" ], techParams, [ pass ]);
        _this.shader = shader;
        _this._texture = null;
        _this._color = {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        };
        _this._effect = new renderer.Effect([ mainTech ], {}, []);
        _this._mainTech = mainTech;
        return _this;
      }
      Object.defineProperty(ShaderMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ShaderMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this._texture = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ShaderMaterial.prototype, "color", {
        set: function(val) {
          this._color.r = val.r / 255;
          this._color.g = val.g / 255;
          this._color.b = val.b / 255;
          this._color.a = val.a / 255;
          this._effect.setProperty("color", this._color);
        },
        enumerable: true,
        configurable: true
      });
      ShaderMaterial.prototype.clone = function() {
        var cloneMaterial = new ShaderMaterial(this.shader);
        cloneMaterial.updateHash();
        return cloneMaterial;
      };
      ShaderMaterial.prototype.setParamValue = function(name, value) {
        this._effect.setProperty(name, value);
      };
      ShaderMaterial.prototype.getParamValue = function(name) {
        return this._effect.getProperty(name);
      };
      ShaderMaterial.prototype.setDefine = function(name, value) {
        this._effect.define(name, value);
      };
      return ShaderMaterial;
    }(Material);
    exports.ShaderMaterial = ShaderMaterial;
    cc._RF.pop();
  }, {
    "./ShaderFunc": "ShaderFunc"
  } ],
  ShaderRipple: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f964bPEFctAS4bY66hgQhGu", "ShaderRipple");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderRipple",
      params: [ {
        name: "iResolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "uvfix",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "turbulence",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "strength",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n\n        // Shader Toy\n        // https://www.shadertoy.com/view/tdcSDH\n\n        uniform sampler2D texture;\n        uniform vec2    iResolution;\n        uniform float   time;\n        uniform vec4    uvfix;\n        varying vec2    v_uv0;\n\n        uniform float   speed;\n        uniform float   turbulence;\n        uniform float   strength;\n\n\n        vec2 bigger(in vec2 uv){\n            // return (uvfix.xy - uvfix.zw) * uv;\n            return uvfix.xy * uv + uvfix.zw;\n        }\n\n        vec2 smaller(in vec2 uv){\n            //return uv / uvfix.xy - uvfix.zw;\n            return (uv - uvfix.zw) / uvfix.xy;\n\n        }\n\n        void main(){\n            vec2 uv = bigger(v_uv0);\n            uv = uv - 0.5;\n\n            float speedRate = time * speed;\n            float turbulenceRate =  turbulence;\n            float dist = length(uv);\n\n            uv += uv/dist * cos(dist * turbulenceRate - speedRate) * strength;\n            gl_FragColor = texture2D(texture, smaller(uv + 0.5));\n        }\n\n\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderAclouisCircle = function(_super) {
      __extends(ShaderAclouisCircle, _super);
      function ShaderAclouisCircle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 4;
        _this.turbulence = 50;
        _this.strength = .1;
        _this.time = 0;
        return _this;
      }
      ShaderAclouisCircle.prototype.doStart = function(sprite, material, dt) {
        var iResolution = cc.v2(sprite.node.getContentSize().width, sprite.node.getContentSize().height);
        var uvfix = ShaderComponent_1.getUVfix(sprite.spriteFrame);
        this.time = 10;
        material.setParamValue("iResolution", iResolution);
        material.setParamValue("uvfix", uvfix);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("turbulence", this.turbulence);
        material.setParamValue("strength", this.strength);
      };
      ShaderAclouisCircle.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u64fa\u76ea\u901f\u7387"
      }) ], ShaderAclouisCircle.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6f23\u6f2a\u5ea6"
      }) ], ShaderAclouisCircle.prototype, "turbulence", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u632f\u5e45\u5f37\u5ea6"
      }) ], ShaderAclouisCircle.prototype, "strength", void 0);
      ShaderAclouisCircle = __decorate([ ccclass ], ShaderAclouisCircle);
      return ShaderAclouisCircle;
    }(ShaderComponent_1.default);
    exports.default = ShaderAclouisCircle;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderRun2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "255a2ISza9MEoFeYN9ynxbY", "ShaderRun2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderRun2",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "wh",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "glowColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "amplitudeSize",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "clearColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        min: 0,
        max: 7
      }, {
        name: "cScale",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n        varying vec2 v_uv0;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        uniform vec2 wh;\n        uniform vec4 glowColor;\n        uniform int clearColor;\n        uniform float cScale;\n        uniform float amplitudeSize;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        float random(in vec2 st)\n        {\n            return fract(sin(dot(st.xy,vec2(12.443,78.4)))*43758.2);\n        }\n\n        float noise(in vec2 st)\n        {\n            vec2 i=floor(st);\n            vec2 f=fract(st);\n            float a=random(i);\n            float b=random(i+vec2(1.0,0.0));\n            float c=random(i+vec2(0.0,1.0));\n            float d=random(i+vec2(1.0,1.0));\n\n            vec2 u=smoothstep(0.0,1.0,f);\n            return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;\n\n        }\n        float circle(vec2 p,float scale)\n        {\n            if(wh.x!=wh.y){\n                float l = wh.x+wh.y;\n                float radio = (wh.x-wh.y)/l;\n                if(p.x>0.){\n                    p.x\t-= radio;\n                }else{\n                    p.x += radio;\n                }\n            }\n            float f = 0.0;\n            f += 0.1/abs(length(p*p*p*p*p*p)- cScale*scale);\n            return f;\n        }\n\n        void main( )\n        {\n            vec2 p = bigger(v_uv0.xy);\n            p.y = 1. - p.y;\n            p*=4.;\n            p-=vec2(2.,2.);\n\n            float f = 0.0;\n            p.x+=sin(p.y*23.0+time*speed*17.)*amplitudeSize;\n            p.x+=sin(p.y*37.0+time*speed*13.)*amplitudeSize;\n            p.x+=sin(p.y*50.0+time*speed*11.)*amplitudeSize;\n            float d=circle(p,5.);\n\n            vec4 tempColor = glowColor*d;\n            float alpha = 0.;\n            if(clearColor == 1){\n                alpha = tempColor.r;\n            } else if(clearColor == 2){\n                alpha = tempColor.g;\n            } else if(clearColor == 3){\n                alpha = tempColor.b;\n            } else if(clearColor == 4){\n                alpha = tempColor.r*tempColor.g;\n            } else if(clearColor == 5){\n                alpha = tempColor.r*tempColor.b;\n            } else if(clearColor == 6){\n                alpha = tempColor.g*tempColor.b;\n            } else if(clearColor == 7){\n                alpha = tempColor.r*tempColor.g*tempColor.b;\n            }\n            gl_FragColor = vec4(tempColor.rgb,alpha);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderRun2 = function(_super) {
      __extends(ShaderRun2, _super);
      function ShaderRun2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.wh = cc.v2(400, 400);
        _this.color = cc.color(255, 102, 38.25);
        _this.clearColor = 1;
        _this.cScale = 1e-5;
        _this.amplitudeSize = .02;
        return _this;
      }
      ShaderRun2.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("wh", this.wh);
        material.setParamValue("glowColor", {
          x: this.color.getR() / 255,
          y: this.color.getG() / 255,
          z: this.color.getB() / 255,
          w: this.color.getA() / 255
        });
        material.setParamValue("clearColor", this.clearColor);
        material.setParamValue("cScale", this.cScale);
        material.setParamValue("amplitudeSize", this.amplitudeSize);
      };
      ShaderRun2.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderRun2.prototype, "speed", void 0);
      __decorate([ property(cc.Vec2) ], ShaderRun2.prototype, "wh", void 0);
      __decorate([ property(cc.Color) ], ShaderRun2.prototype, "color", void 0);
      __decorate([ property({
        type: cc.Enum(ShaderComponent_1.CLEAR_COLOR)
      }) ], ShaderRun2.prototype, "clearColor", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderRun2.prototype, "cScale", void 0);
      __decorate([ property(cc.Float) ], ShaderRun2.prototype, "amplitudeSize", void 0);
      ShaderRun2 = __decorate([ ccclass ], ShaderRun2);
      return ShaderRun2;
    }(ShaderComponent_1.default);
    exports.default = ShaderRun2;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderRun3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51157aozu1McZBDi6ccnqAy", "ShaderRun3");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderRun3",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "wh",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "glowColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "clearColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        min: 0,
        max: 7
      }, {
        name: "cScale",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "amplitudeSize",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n        varying vec2 v_uv0;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        uniform vec2 wh;\n        uniform vec4 glowColor;\n        uniform int clearColor;\n        uniform float cScale;\n        uniform float amplitudeSize;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        float random(in vec2 st)\n        {\n            return fract(sin(dot(st.xy,vec2(12.443,78.4)))*43758.2);\n        }\n\n        float noise(in vec2 st)\n        {\n            vec2 i=floor(st);\n            vec2 f=fract(st);\n            float a=random(i);\n            float b=random(i+vec2(1.0,0.0));\n            float c=random(i+vec2(0.0,1.0));\n            float d=random(i+vec2(1.0,1.0));\n\n            vec2 u=smoothstep(0.0,1.0,f);\n            return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;\n\n        }\n        float circle(vec2 p,float scale)\n        {\n            if(wh.x!=wh.y){\n                float l = wh.x+wh.y;\n                float radio = (wh.x-wh.y)/l;\n                if(p.x>0.){\n                    p.x\t-= radio;\n                }else{\n                    p.x += radio;\n                }\n            }\n            float f = 0.0;\n            f += 0.1/abs(length(p*p*p*p*p*p)- cScale*scale);\n            return f;\n        }\n\n        void main( )\n        {\n            vec2 p = bigger(v_uv0.xy);\n            p.y = 1. - p.y;\n\n            p = 4.*p - 2.;\n\n            float f = 0.0;\n            float px = 0.;\n            px +=sin(p.y*23.0+time*speed*17.)*amplitudeSize;\n            px +=sin(p.y*37.0+time*speed*13.)*amplitudeSize;\n            px +=sin(p.y*50.0+time*speed*11.)*amplitudeSize;\n            float py = 0.;\n            py+=sin(p.x*23.0+time*speed*27.)*amplitudeSize;\n            py+=sin(p.x*37.0+time*speed*23.)*amplitudeSize;\n            py+=sin(p.x*50.0+time*speed*21.)*amplitudeSize;\n            float d=circle(p+vec2(px,py),5.);\n\n            vec4 tempColor = glowColor*d;\n            float alpha = 0.;\n            if(clearColor == 1){\n                alpha = tempColor.r;\n            } else if(clearColor == 2){\n                alpha = tempColor.g;\n            } else if(clearColor == 3){\n                alpha = tempColor.b;\n            } else if(clearColor == 4){\n                alpha = tempColor.r*tempColor.g;\n            } else if(clearColor == 5){\n                alpha = tempColor.r*tempColor.b;\n            } else if(clearColor == 6){\n                alpha = tempColor.g*tempColor.b;\n            } else if(clearColor == 7){\n                alpha = tempColor.r*tempColor.g*tempColor.b;\n            }\n            gl_FragColor = vec4(tempColor.rgb,alpha);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderRun3 = function(_super) {
      __extends(ShaderRun3, _super);
      function ShaderRun3() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.wh = cc.v2(400, 400);
        _this.color = cc.color(255, 102, 38.25);
        _this.clearColor = 1;
        _this.cScale = 1e-5;
        _this.amplitudeSize = .02;
        return _this;
      }
      ShaderRun3.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("wh", this.wh);
        material.setParamValue("glowColor", {
          x: this.color.getR() / 255,
          y: this.color.getG() / 255,
          z: this.color.getB() / 255,
          w: this.color.getA() / 255
        });
        material.setParamValue("clearColor", this.clearColor);
        material.setParamValue("cScale", this.cScale);
        material.setParamValue("amplitudeSize", this.amplitudeSize);
      };
      ShaderRun3.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderRun3.prototype, "speed", void 0);
      __decorate([ property(cc.Vec2) ], ShaderRun3.prototype, "wh", void 0);
      __decorate([ property(cc.Color) ], ShaderRun3.prototype, "color", void 0);
      __decorate([ property({
        type: cc.Enum(ShaderComponent_1.CLEAR_COLOR)
      }) ], ShaderRun3.prototype, "clearColor", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderRun3.prototype, "cScale", void 0);
      __decorate([ property(cc.Float) ], ShaderRun3.prototype, "amplitudeSize", void 0);
      ShaderRun3 = __decorate([ ccclass ], ShaderRun3);
      return ShaderRun3;
    }(ShaderComponent_1.default);
    exports.default = ShaderRun3;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderRun: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ed45tX1GVN7JYDizxOKWaq", "ShaderRun");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderRun",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "wh",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "len",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "intensity",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "radius",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "smooth",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "blurColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "blurColor1",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      } ],
      vert: MVP_1.MVP,
      frag: "\n        #define POINT_COUNT 25\n\n        vec2 points[POINT_COUNT];\n        const float speed2 = -0.5;\n        const float scale = 0.05;\n\n        varying vec2 v_uv0;\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform vec2 smooth;\n        uniform float time;\n        uniform float speed;\n        uniform float len;\n        uniform vec2 wh;\n        uniform float intensity;\n        uniform float radius;\n        uniform vec3 blurColor;\n        uniform vec3 blurColor1;\n\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv ;\n        }\n\n        vec2 smaller(in vec2 uv){\n            return uv/uvfix.xy + uvfix.zw;\n        }\n\n\n        //https://www.shadertoy.com/view/MlKcDD\n        //Signed distance to a quadratic bezier\n        float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C){\n            vec2 a = B - A;\n            vec2 b = A - 2.0*B + C;\n            vec2 c = a * 2.0;\n            vec2 d = A - pos;\n\n            float kk = 1.0 / dot(b,b);\n            float kx = kk * dot(a,b);\n            float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;\n            float kz = kk * dot(d,a);\n\n            float res = 0.0;\n\n            float p = ky - kx*kx;\n            float p3 = p*p*p;\n            float q = kx*(2.0*kx*kx - 3.0*ky) + kz;\n            float h = q*q + 4.0*p3;\n\n            if(h >= 0.0){\n                h = sqrt(h);\n                vec2 x = (vec2(h, -h) - q) / 2.0;\n                vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));\n                float t = uv.x + uv.y - kx;\n                t = clamp( t, 0.0, 1.0 );\n\n                // 1 root\n                vec2 qos = d + (c + b*t)*t;\n                res = length(qos);\n            }else{\n                float z = sqrt(-p);\n                float v = acos( q/(p*z*2.0) ) / 3.0;\n                float m = cos(v);\n                float n = sin(v)*1.732050808;\n                vec3 t = vec3(m + m, -n - m, n - m) * z - kx;\n                t = clamp( t, 0.0, 1.0 );\n\n                // 3 roots\n                vec2 qos = d + (c + b*t.x)*t.x;\n                float dis = dot(qos,qos);\n\n                res = dis;\n\n                qos = d + (c + b*t.y)*t.y;\n                dis = dot(qos,qos);\n                res = min(res,dis);\n\n                qos = d + (c + b*t.z)*t.z;\n                dis = dot(qos,qos);\n                res = min(res,dis);\n\n                res = sqrt( res );\n            }\n\n            return res;\n        }\n\n        vec2 getSquare(float t){\n            float size = 20.0;\n            float len = wh.x + wh.y;\n            float ratio = wh.y/len;\n            float high = size * ratio;\n            float width = size - high;\n            float progress = mod(t, 6.28) / 6.28 * size * 2.0;\n            if (progress < width) {\n                return vec2(-width/2.0 + progress, -high/2.0);\n            }\n            if (progress < size) {\n                return vec2(width/2.0, -high/2.0 + progress - width);\n            }\n            if (progress < size + width) {\n                return vec2(width/2.0-(progress-size), high/2.0);\n            }\n            return vec2(-width/2.0, high/2.0 -(progress-size-width));\n        }\n\n        //https://www.shadertoy.com/view/3s3GDn\n        float getGlow(float dist, float radius, float intensity){\n            return pow(radius/dist, intensity);\n        }\n\n        float getSegment(float t, vec2 pos, float offset){\n            for(int i = 0; i < POINT_COUNT; i++){\n                float t = offset + float(i)*len + fract(speed2 * t) * 6.28;\n                points[i] = getSquare(t);\n            }\n\n            vec2 c = (points[0] + points[1] + points[2]) / 3.0;\n            vec2 c_prev;\n            float dist = 10000.;\n\n            for(int i = 0; i < POINT_COUNT-2; i++){\n                //https://tinyurl.com/y2htbwkm\n                c_prev = c;\n                c = (points[i] + points[i+1] + points[i+2]) / 3.0;\n                float tempDis = min(dist, sdBezier(pos, scale * c_prev, scale * points[i], scale * c));\n                if(tempDis<dist){\n                    dist = tempDis;\n                }\n            }\n            return max(0.0, dist);\n        }\n\n        void main(){\n            vec2 uv = bigger(v_uv0.xy);\n            uv.y = 1. - uv.y;\n\n            // float widthHeightRatio = resolution.x/resolution.y;\n            vec2 centre = vec2(0.5, 0.5);\n            vec2 pos = centre - uv;\n            //Shift upwards to centre heart\n\n            float t = time*speed;\n\n            //Get first segment\n            float dist = getSegment(t, pos, 0.0);\n            float glow = getGlow(dist, radius, intensity);\n\n            vec3 col = vec3(0.0);\n            //White core\n            col += 10.*vec3(smoothstep(smooth.x,smooth.y, dist));\n            //glow1\n            col += glow * blurColor;\n\n            //Get second segment\n            dist = getSegment(t, pos, 3.14);\n            glow = getGlow(dist, radius, intensity);\n            // //White core\n            col += 10.*vec3(smoothstep(smooth.x,smooth.y, dist));\n            // //glow2\n            col += glow * blurColor1;\n\n            // //Tone mapping\n            col = 1.0 - exp(-col);\n\n\n            // //Output to screen\n            gl_FragColor = vec4(col,col.r*col.g*col.b);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderRun = function(_super) {
      __extends(ShaderRun, _super);
      function ShaderRun() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.wh = cc.v2(400, 400);
        _this.len = .15;
        _this.intensity = .5;
        _this.radius = .02;
        _this.smoothStep = cc.v2(.009, .003);
        _this.blurColor = cc.color(51, 153, 255);
        _this.blurColor1 = cc.color(51, 153, 255);
        return _this;
      }
      ShaderRun.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("wh", this.wh);
        material.setParamValue("len", this.len);
        material.setParamValue("intensity", this.intensity);
        material.setParamValue("radius", this.radius);
        material.setParamValue("smooth", this.smoothStep);
        material.setParamValue("blurColor", new cc.Vec3(this.blurColor.getR() / 255, this.blurColor.getG() / 255, this.blurColor.getB() / 255));
        material.setParamValue("blurColor1", new cc.Vec3(this.blurColor1.getR() / 255, this.blurColor1.getG() / 255, this.blurColor1.getB() / 255));
      };
      ShaderRun.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderRun.prototype, "speed", void 0);
      __decorate([ property(cc.Vec2) ], ShaderRun.prototype, "wh", void 0);
      __decorate([ property({
        type: cc.Float,
        min: .01
      }) ], ShaderRun.prototype, "len", void 0);
      __decorate([ property({
        type: cc.Float,
        min: .01
      }) ], ShaderRun.prototype, "intensity", void 0);
      __decorate([ property({
        type: cc.Float,
        min: 1e-4
      }) ], ShaderRun.prototype, "radius", void 0);
      __decorate([ property(cc.Vec2) ], ShaderRun.prototype, "smoothStep", void 0);
      __decorate([ property(cc.color) ], ShaderRun.prototype, "blurColor", void 0);
      __decorate([ property(cc.color) ], ShaderRun.prototype, "blurColor1", void 0);
      ShaderRun = __decorate([ ccclass ], ShaderRun);
      return ShaderRun;
    }(ShaderComponent_1.default);
    exports.default = ShaderRun;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderSearch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f30daMnni1FFaedd1sC4gX9", "ShaderSearch");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderSearch",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "mouse",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform sampler2D texture;\n    uniform vec2 resolution;\n    uniform vec2 mouse;\n    uniform vec4 uvfix;\n    varying vec2 v_uv0;\n    void main()\n    {\n        // y\u5750\u6807\u7ffb\u8f6c\n        vec2 imouse = vec2(mouse.x, resolution.y - mouse.y);\n        // \u7eb9\u7406\u5750\u6807\n        vec2 uv = v_uv0.xy ;\n        // \u7eb9\u7406\u91c7\u6837\n        vec4 tex = texture2D(texture, uv);\n        // gl_FragColor = tex;\n        if (true){\n            vec2 uv_fixed = uvfix.xy * uv + uvfix.zw;\n            // \u7247\u5143\u5230\u9f20\u6807\u70b9\u7684\u5dee\u5411\u91cf\n            vec2 d = uv_fixed * resolution.xy - imouse.xy;\n            // \u5149\u7167\u534a\u5f84\n            vec2 s = 0.15 * resolution.xy;\n            // \u70b9\u79ef\u53d6\u6bd4\u4f8b\n            float r = dot(d, d)/dot(s,s);\n            gl_FragColor = tex * (1.08 - r);\n        }\n    }\n    "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderSearch = function(_super) {
      __extends(ShaderSearch, _super);
      function ShaderSearch() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        return _this;
      }
      ShaderSearch.prototype.doStart = function(sprite, material, dt) {
        var size = cc.winSize;
        var resolution = new cc.Vec2(size.width, size.height);
        material.setParamValue("resolution", resolution);
        material.setParamValue("mouse", resolution.div(2));
      };
      ShaderSearch.prototype.doUpdate = function(sprite, material, dt) {};
      ShaderSearch = __decorate([ ccclass ], ShaderSearch);
      return ShaderSearch;
    }(ShaderComponent_1.default);
    exports.default = ShaderSearch;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderSparksDrifting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57b21PwsR1GpJ31QnZmgAJI", "ShaderSparksDrifting");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderSparksDrifting",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "detal",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "sizeIn",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "sizeOut",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      vert: MVP_1.MVP,
      frag: "\n        uniform vec4 uvfix;\n        uniform vec2 resolution;\n        uniform float time;\n        uniform float speed;\n        uniform float detal;\n        uniform float sizeIn;\n        uniform float sizeOut;\n        varying vec2 v_uv0;\n\n        vec2 bigger(in vec2 uv){\n            return (uvfix.xy - uvfix.zw) * uv;\n        }\n\n        vec3 mod289(vec3 x) {\n            return x - floor(x * (1.0 / 289.0)) * 289.0;\n        }\n\n        vec4 mod289(vec4 x) {\n            return x - floor(x * (1.0 / 289.0)) * 289.0;\n        }\n\n        vec4 permute(vec4 x) {\n                return mod289(((x*34.0)+1.0)*x);\n        }\n\n        vec4 taylorInvSqrt(vec4 r)\n        {\n            return 1.79284291400159 - 0.85373472095314 * r;\n        }\n\n        float snoise(vec3 v)\n        {\n            const vec2\tC = vec2(1.0/6.0, 1.0/3.0) ;\n            const vec4\tD = vec4(0.0, 0.5, 1.0, 2.0);\n\n            // First corner\n            vec3 i\t= floor(v + dot(v, C.yyy) );\n            vec3 x0 =\t v - i + dot(i, C.xxx) ;\n\n            // Other corners\n            vec3 g = step(x0.yzx, x0.xyz);\n            vec3 l = 1.0 - g;\n            vec3 i1 = min( g.xyz, l.zxy );\n            vec3 i2 = max( g.xyz, l.zxy );\n\n            //\t x0 = x0 - 0.0 + 0.0 * C.xxx;\n            //\t x1 = x0 - i1\t+ 1.0 * C.xxx;\n            //\t x2 = x0 - i2\t+ 2.0 * C.xxx;\n            //\t x3 = x0 - 1.0 + 3.0 * C.xxx;\n            vec3 x1 = x0 - i1 + C.xxx;\n            vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n            vec3 x3 = x0 - D.yyy;\t\t\t// -1.0+3.0*C.x = -0.5 = -D.y\n\n            // Permutations\n            i = mod289(i);\n            vec4 p = permute( permute( permute(\n                                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n                            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n                            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n            // Gradients: 7x7 points over a square, mapped onto an octahedron.\n            // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n            float n_ = 0.142857142857; // 1.0/7.0\n            vec3\tns = n_ * D.wyz - D.xzx;\n\n            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);\t//\tmod(p,7*7)\n\n            vec4 x_ = floor(j * ns.z);\n            vec4 y_ = floor(j - 7.0 * x_ );\t\t// mod(j,N)\n\n            vec4 x = x_ *ns.x + ns.yyyy;\n            vec4 y = y_ *ns.x + ns.yyyy;\n            vec4 h = 1.0 - abs(x) - abs(y);\n\n            vec4 b0 = vec4( x.xy, y.xy );\n            vec4 b1 = vec4( x.zw, y.zw );\n\n            //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n            //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n            vec4 s0 = floor(b0)*2.0 + 1.0;\n            vec4 s1 = floor(b1)*2.0 + 1.0;\n            vec4 sh = -step(h, vec4(0.0));\n\n            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n            vec3 p0 = vec3(a0.xy,h.x);\n            vec3 p1 = vec3(a0.zw,h.y);\n            vec3 p2 = vec3(a1.xy,h.z);\n            vec3 p3 = vec3(a1.zw,h.w);\n\n            //Normalise gradients\n            //vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n            vec4 norm = inversesqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n            p0 *= norm.x;\n            p1 *= norm.y;\n            p2 *= norm.z;\n            p3 *= norm.w;\n\n            // Mix final noise value\n            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n            m = m * m;\n            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n        }\n\n        //////////////////////////////////////////////////////////////\n\n        // PRNG\n        // From https://www.shadertoy.com/view/4djSRW\n        float prng(in vec2 seed) {\n            seed = fract (seed * vec2 (5.3983, 5.4427));\n            seed += dot (seed.yx, seed.xy + vec2 (21.5351, 14.3137));\n            return fract (seed.x * seed.y * 95.4337);\n        }\n\n        //////////////////////////////////////////////////////////////\n\n        float PI = 3.1415926535897932384626433832795;\n\n        float noiseStack(vec3 pos,int octaves,float falloff){\n            float noise = snoise(vec3(pos));\n            float off = 1.0;\n            if (octaves>1) {\n                pos *= 2.0;\n                off *= falloff;\n                noise = (1.0-off)*noise + off*snoise(vec3(pos));\n            }\n            if (octaves>2) {\n                pos *= 2.0;\n                off *= falloff;\n                noise = (1.0-off)*noise + off*snoise(vec3(pos));\n            }\n            if (octaves>3) {\n                pos *= 2.0;\n                off *= falloff;\n                noise = (1.0-off)*noise + off*snoise(vec3(pos));\n            }\n            return (1.0+noise)/2.0;\n        }\n\n        vec2 noiseStackUV(vec3 pos,int octaves,float falloff,float diff){\n            float displaceA = noiseStack(pos,octaves,falloff);\n            float displaceB = noiseStack(pos+vec3(3984.293,423.21,5235.19),octaves,falloff);\n            return vec2(displaceA,displaceB);\n        }\n\n        void main() {\n            float itime = time*speed;\n            vec2 drag = vec2(0.,0.);\n            vec2 offset = vec2(0.,0.);\n\n            vec2 uv = bigger(v_uv0.xy);\n            uv.y = 1.-uv.y;\n            float xpart = uv.x;\n            float ypart = uv.y;\n            //\n            float clip = 1.0;\n            float ypartClip = uv.y/clip;\n            float ypartClippedFalloff = clamp(1.-ypartClip,0.0,1.0);\n            float ypartClipped = min(ypartClip,1.0);\n            float ypartClippedn = 1.0-ypartClipped;\n            //\n            float xfuel = 1.0-abs(2.0*xpart-1.0);//pow(1.0-abs(2.0*xpart-1.0),0.5);\n            //\n            float realTime = itime;\n            //\n            vec2 coordScaled = detal*uv;\n            vec3 position = vec3(coordScaled,0.0) + vec3(1223.0,6434.0,8425.0);\n            vec3 flow = vec3(4.1*(0.5-xpart)*pow(ypartClippedn,.0),-2.0*xfuel*pow(ypartClippedn,64.0),0.0);\n            vec3 timing = realTime*vec3(0.0,-1.7,1.1) + flow;\n            //\n            vec3 displacePos = vec3(1.0,0.5,1.0)*2.4*position+realTime*vec3(0.01,-0.7,1.3);\n            vec3 displace3 = vec3(noiseStackUV(displacePos,2,0.4,0.1),0.0);\n            //\n            vec3 noiseCoord = (vec3(2.0,1.0,1.0)*position+timing+0.4*displace3)/1.0;\n            float noise = noiseStack(noiseCoord,3,0.4);\n            //\n            float flames = pow(ypartClipped,sizeIn*xfuel)*pow(noise,sizeOut*xfuel);\n            //\n            float f = ypartClippedFalloff*pow(1.0-flames*flames*flames,2.0);\n            float fff = f*f*f;\n            vec3 fire = 1.5*vec3(f, fff, fff*fff);\n            //\n            // smoke\n            float smokeNoise = 0.5+snoise(0.4*position+timing*vec3(1.0,1.0,0.2))/2.0;\n            vec3 smoke = vec3(0.3*pow(xfuel,3.0)*pow(ypart,2.0)*(smokeNoise+0.4*(1.0-noise)));\n\n            gl_FragColor = vec4(fire+smoke*1.,fire);\n        }\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderSparksDrifting = function(_super) {
      __extends(ShaderSparksDrifting, _super);
      function ShaderSparksDrifting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        _this.detal = 10;
        _this.sizeIn = .4;
        _this.sizeOut = .3;
        return _this;
      }
      ShaderSparksDrifting.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = sprite.node.getContentSize();
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("detal", this.detal);
        material.setParamValue("sizeIn", this.sizeIn);
        material.setParamValue("sizeOut", this.sizeOut);
      };
      ShaderSparksDrifting.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderSparksDrifting.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderSparksDrifting.prototype, "detal", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderSparksDrifting.prototype, "sizeIn", void 0);
      __decorate([ property({
        type: cc.Float
      }) ], ShaderSparksDrifting.prototype, "sizeOut", void 0);
      ShaderSparksDrifting = __decorate([ ccclass ], ShaderSparksDrifting);
      return ShaderSparksDrifting;
    }(ShaderComponent_1.default);
    exports.default = ShaderSparksDrifting;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderSparks: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4796lZt5JFN4VaXFhHSSUB", "ShaderSparks");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderSparks",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT,
        defaultValue: 0
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      vert: MVP_1.MVP,
      frag: "\n\t#ifdef GL_ES\n\tprecision mediump float;\n\t#endif\n\n\tuniform vec2 resolution;\n\tuniform float time;\n\tuniform float speed;\n\tuniform vec4 uvfix;\n\n\tvarying vec2 v_uv0;\n\n\tvec2 bigger(in vec2 uv){\n\t\treturn uvfix.xy * uv + uvfix.zw;\n\t}\n\n\tvec2 smaller(in vec2 uv){\n\t\treturn (uv - uvfix.zw) / uvfix.xy;\n\t}\n\n\t#define PI 3.1415927\n\t#define TWO_PI 6.283185\n\n\t#define ANIMATION_SPEED 1.5\n\t#define MOVEMENT_SPEED 1.0\n\t#define MOVEMENT_DIRECTION vec2(0.7, -1.0)\n\n\t#define PARTICLE_SIZE 0.005\n\n\t#define PARTICLE_SCALE (vec2(0.5, 1.6))\n\t#define PARTICLE_SCALE_VAR (vec2(0.25, 0.2))\n\n\t#define PARTICLE_BLOOM_SCALE (vec2(0.5, 0.8))\n\t#define PARTICLE_BLOOM_SCALE_VAR (vec2(0.3, 0.1))\n\n\t#define SPARK_COLOR vec3(1.0, 0.4, 0.05) * 1.5\n\t#define BLOOM_COLOR vec3(1.0, 0.4, 0.05) * 0.8\n\t#define SMOKE_COLOR vec3(1.0, 0.43, 0.1) * 0.8\n\n\t#define SIZE_MOD 1.05\n\t#define ALPHA_MOD 0.9\n\t#define LAYERS_COUNT 2\n\t#define LAYERS_NOISE1_COUNT 4\n\t#define LAYERS_NOISE2_COUNT 3\n\n\tfloat hash1_2(in vec2 x)\n\t{\n\t\treturn fract(sin(dot(x, vec2(52.127, 61.2871))) * 521.582);\n\t}\n\n\tvec2 hash2_2(in vec2 x)\n\t{\n\t\treturn fract(sin(x * mat2(20.52, 24.1994, 70.291, 80.171)) * 492.194);\n\t}\n\n\t//Simple interpolated noise\n\tvec2 noise2_2(vec2 uv)\n\t{\n\t\t//vec2 f = fract(uv);\n\t\tvec2 f = smoothstep(0.0, 1.0, fract(uv));\n\n\t\tvec2 uv00 = floor(uv);\n\t\tvec2 uv01 = uv00 + vec2(0,1);\n\t\tvec2 uv10 = uv00 + vec2(1,0);\n\t\tvec2 uv11 = uv00 + 1.0;\n\t\tvec2 v00 = hash2_2(uv00);\n\t\tvec2 v01 = hash2_2(uv01);\n\t\tvec2 v10 = hash2_2(uv10);\n\t\tvec2 v11 = hash2_2(uv11);\n\n\t\tvec2 v0 = mix(v00, v01, f.y);\n\t\tvec2 v1 = mix(v10, v11, f.y);\n\t\tvec2 v = mix(v0, v1, f.x);\n\n\t\treturn v;\n\t}\n\n\t//Simple interpolated noise\n\tfloat noise1_2(in vec2 uv)\n\t{\n\t\tvec2 f = fract(uv);\n\t\t//vec2 f = smoothstep(0.0, 1.0, fract(uv));\n\n\t\tvec2 uv00 = floor(uv);\n\t\tvec2 uv01 = uv00 + vec2(0,1);\n\t\tvec2 uv10 = uv00 + vec2(1,0);\n\t\tvec2 uv11 = uv00 + 1.0;\n\n\t\tfloat v00 = hash1_2(uv00);\n\t\tfloat v01 = hash1_2(uv01);\n\t\tfloat v10 = hash1_2(uv10);\n\t\tfloat v11 = hash1_2(uv11);\n\n\t\tfloat v0 = mix(v00, v01, f.y);\n\t\tfloat v1 = mix(v10, v11, f.y);\n\t\tfloat v = mix(v0, v1, f.x);\n\n\t\treturn v;\n\t}\n\n\tfloat layeredNoise1(in vec2 uv, in float sizeMod, in float alphaMod, in float animation)\n\t{\n\t\tfloat noise = 0.0;\n\t\tfloat alpha = 1.0;\n\t\tfloat size = 1.0;\n\t\tvec2 offset;\n\t\tfor (int i = 0; i < LAYERS_NOISE1_COUNT; i++)\n\t\t{\n\t\t\toffset += hash2_2(vec2(alpha, size)) * 10.0;\n\n\t\t\t//Adding noise with movement\n\t\t\tnoise += noise1_2(uv * size + time*speed * animation * 8.0 * MOVEMENT_DIRECTION * MOVEMENT_SPEED + offset) * alpha;\n\t\t\talpha *= alphaMod;\n\t\t\tsize *= sizeMod;\n\t\t}\n\n\t\tnoise *= (1.0 - alphaMod)/(1.0 - pow(alphaMod, float(LAYERS_NOISE1_COUNT)));\n\t\treturn noise;\n\t}\n\n\n\tfloat layeredNoise2(in vec2 uv, in float sizeMod, in float alphaMod, in float animation)\n\t{\n\t\tfloat noise = 0.0;\n\t\tfloat alpha = 1.0;\n\t\tfloat size = 1.0;\n\t\tvec2 offset;\n\t\tfor (int i = 0; i < LAYERS_NOISE2_COUNT; i++)\n\t\t{\n\t\t\toffset += hash2_2(vec2(alpha, size)) * 10.0;\n\n\t\t\t//Adding noise with movement\n\t\t\tnoise += noise1_2(uv * size + time*speed * animation * 8.0 * MOVEMENT_DIRECTION * MOVEMENT_SPEED + offset) * alpha;\n\t\t\talpha *= alphaMod;\n\t\t\tsize *= sizeMod;\n\t\t}\n\n\t\tnoise *= (1.0 - alphaMod)/(1.0 - pow(alphaMod, float(LAYERS_NOISE2_COUNT)));\n\t\treturn noise;\n\t}\n\n\t//Rotates point around 0,0\n\tvec2 rotate(in vec2 point, in float deg)\n\t{\n\t\tfloat s = sin(deg);\n\t\tfloat c = cos(deg);\n\t\treturn mat2(s, c, -c, s) * point;\n\t}\n\n\t//Cell center from point on the grid\n\tvec2 voronoiPointFromRoot(in vec2 root, in float deg)\n\t{\n\t\tvec2 point = hash2_2(root) - 0.5;\n\t\tfloat s = sin(deg);\n\t\tfloat c = cos(deg);\n\t\tpoint = mat2(s, c, -c, s) * point * 0.66;\n\t\tpoint += root + 0.5;\n\t\treturn point;\n\t}\n\n\t//Voronoi cell point rotation degrees\n\tfloat degFromRootUV(in vec2 uv)\n\t{\n\t\treturn time*speed * ANIMATION_SPEED * (hash1_2(uv) - 0.5) * 2.0;\n\t}\n\n\tvec2 randomAround2_2(in vec2 point, in vec2 range, in vec2 uv)\n\t{\n\t\treturn point + (hash2_2(uv) - 0.5) * range;\n\t}\n\n\n\tvec3 fireParticles(in vec2 uv, in vec2 originalUV)\n\t{\n\t\tvec3 particles = vec3(0.0);\n\t\tvec2 rootUV = floor(uv);\n\t\tfloat deg = degFromRootUV(rootUV);\n\t\tvec2 pointUV = voronoiPointFromRoot(rootUV, deg);\n\t\tfloat dist = 2.0;\n\t\tfloat distBloom = 0.0;\n\n\t\t//UV manipulation for the faster particle movement\n\t\tvec2 tempUV = uv + (noise2_2(uv * 2.0) - 0.5) * 0.1;\n\t\ttempUV += -(noise2_2(uv * 3.0 + time*speed) - 0.5) * 0.07;\n\n\t\t//Sparks sdf\n\t\tdist = length(rotate(tempUV - pointUV, 0.7) * randomAround2_2(PARTICLE_SCALE, PARTICLE_SCALE_VAR, rootUV));\n\n\t\t//Bloom sdf\n\t\t//distBloom = length(rotate(tempUV - pointUV, 0.7) * randomAround2_2(PARTICLE_BLOOM_SCALE, PARTICLE_BLOOM_SCALE_VAR, rootUV));\n\n\t\t//Add sparks\n\t\tparticles += (1.0 - smoothstep(PARTICLE_SIZE * 0.6, PARTICLE_SIZE * 3.0, dist)) * SPARK_COLOR;\n\n\t\t//Add bloom\n\t\t//particles += pow((1.0 - smoothstep(0.0, PARTICLE_SIZE * 6.0, distBloom)) * 1.0, 3.0) * BLOOM_COLOR;\n\n\t\t//Upper disappear curve randomization\n\t\tfloat border = (hash1_2(rootUV) - 0.5) * 2.0;\n\t\tfloat disappear = 1.0 - smoothstep(border, border + 0.5, originalUV.y);\n\n\t\t//Lower appear curve randomization\n\t\tborder = (hash1_2(rootUV + 0.214) - 1.8) * 0.7;\n\t\tfloat appear = smoothstep(border, border + 0.4, originalUV.y);\n\n\t\treturn particles * disappear * appear;\n\t}\n\n\n\t//Layering particles to imitate 3D view\n\tvec3 layeredParticles(in vec2 uv, in float sizeMod, in float alphaMod, in float smoke)\n\t{\n\t\tvec3 particles = vec3(0);\n\t\tfloat size = 1.0;\n\t\tfloat alpha = 1.0;\n\t\tvec2 offset = vec2(0.0);\n\t\tvec2 noiseOffset;\n\t\tvec2 bokehUV;\n\n\t\tfor (int i = 0; i < LAYERS_COUNT; i++)\n\t\t{\n\t\t\t//Particle noise movement\n\t\t\tnoiseOffset = (noise2_2(uv * size * 2.0 + 0.5) - 0.5) * 0.15;\n\n\t\t\t//UV with applied movement\n\t\t\tbokehUV = (uv * size + time*speed * MOVEMENT_DIRECTION * MOVEMENT_SPEED) + offset + noiseOffset;\n\n\t\t\t//Adding particles\t\t\t\t\t\t\t\tif there is more smoke, remove smaller particles\n\t\t\tparticles += fireParticles(bokehUV, uv) * alpha * (1.0 - smoothstep(0.0, 1.0, smoke) * (float(i) / float(LAYERS_COUNT)));\n\n\t\t\t//Moving uv origin to avoid generating the same particles\n\t\t\toffset += hash2_2(vec2(alpha, alpha)) * 10.0;\n\n\t\t\talpha *= alphaMod;\n\t\t\tsize *= sizeMod;\n\t\t}\n\n\t\treturn particles;\n\t}\n\n\tvoid main(void)\n\t{\n\t\t// vec2 uv = (gl_FragCoord.xy - resolution.xy) / resolution.x;\n\t\tvec2 fragCoord = vec2(v_uv0.x, 1.- v_uv0.y) * resolution;\n\t\tvec2 uv = (fragCoord.xy - resolution.xy) / resolution.x;\n\n\t\tfloat vignette = 1.0 - smoothstep(0.4, 1.4, length(uv + vec2(0.0, 0.3)));\n\n\t\tuv *= 1.8;\n\n\t\tfloat smokeIntensity = layeredNoise1(uv * 10.0 + time*speed * 4.0 * MOVEMENT_DIRECTION * MOVEMENT_SPEED, 1.7, 0.7, 0.2);\n\t\tsmokeIntensity *= pow(1.0 - smoothstep(-1.0, 1.6, uv.y), 2.0);\n\t\tvec3 smoke = smokeIntensity * SMOKE_COLOR * 0.8 * vignette;\n\n\t\t//Cutting holes in smoke\n\t\tsmoke *= pow(layeredNoise2(uv * 4.0 + time*speed * 0.5 * MOVEMENT_DIRECTION * MOVEMENT_SPEED, 1.8, 0.5, 0.2), 2.0) * 1.5;\n\n\t\tvec3 particles = layeredParticles(uv, SIZE_MOD, ALPHA_MOD, smokeIntensity);\n\n\t\tvec3 col = particles + smoke + SMOKE_COLOR * 0.02;\n\t\tcol *= vignette;\n\n\t\tcol = smoothstep(-0.08, 1.0, col);\n\n\t\tgl_FragColor = vec4(col, col.r);\n\t}\n\t"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderSparks = function(_super) {
      __extends(ShaderSparks, _super);
      function ShaderSparks() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.time = 0;
        _this.speed = .5;
        return _this;
      }
      ShaderSparks.prototype.doStart = function(sprite, material, dt) {
        this.time = 0;
        var resolution = new cc.Vec2(sprite.node.width, sprite.node.height);
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", 0);
        material.setParamValue("speed", this.speed);
      };
      ShaderSparks.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8d8a\u5c0f\u8d8a\u6162"
      }) ], ShaderSparks.prototype, "speed", void 0);
      ShaderSparks = __decorate([ ccclass ], ShaderSparks);
      return ShaderSparks;
    }(ShaderComponent_1.default);
    exports.default = ShaderSparks;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderSplash: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0df3eHEW9pIZJZGq5qYMbK8", "ShaderSplash");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderSplash",
      params: [ {
        name: "iResolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "uvfix",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4
      }, {
        name: "reverse",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "useRandomShape",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "useTextureColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "useSymmetry",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT,
        paramType: ShaderFunc_1.PARAM_TYPES.BOOLEAN
      }, {
        name: "leftValue",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "rightValue",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "baseValue",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "textureColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "shapeColor",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT4,
        paramType: ShaderFunc_1.PARAM_TYPES.COLOR
      }, {
        name: "duration",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "diffusionSpeed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "extent",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n        uniform sampler2D texture;\n        uniform vec4 uvfix;\n        uniform vec2 iResolution;\n        varying vec2 v_uv0;\n\n        uniform int reverse;\n        uniform int useSymmetry;\n        uniform int useRandomShape;\n        uniform int useTextureColor;\n        uniform float leftValue;\n        uniform float rightValue;\n        uniform float baseValue;\n        uniform vec4 textureColor;\n        uniform vec4 shapeColor;\n        uniform float time;\n        uniform float speed;\n        uniform float duration;\n        uniform float diffusionSpeed;\n        uniform float extent;\n\n        // #define pattern sin(1.5)\n\n        // #define pattern sin(1.+fract(.7971*floor(iTime/2.)))\n        // #define extent 7.2\n\n        // thanks to FabriceNeyret2\n        // from dgreensp => https://www.shadertoy.com/view/4ljGDd\n\n\n\n        float magicBox(vec3 p,float pattern)\n        {\n            vec3 uvw = p;\n            p = 1.0 - abs(1. - mod(uvw, 2.0));\n            float lL = length(p), nL = lL, tot = 0.0, c = pattern;\n            for (int i=0; i < 13; i++) {\n                p = abs(p)/(lL*lL) - c;\n                nL = length(p);\n                tot += abs(nL-lL);\n                lL = nL;\n            }\n            return tot;\n        }\n\n        vec2 bigger(in vec2 uv){\n            return uvfix.xy * uv + uvfix.zw;\n        }\n\n        void main(){\n            vec2 uv = bigger(v_uv0);\n            uv.y = 1.0 - uv.y;\n            uv = uv * 5.0 - 2.5;\n\n\n\n            float a = 0.;\n            if(useSymmetry==1){\n                if (uv.x >= 0.) a = rightValue - atan(uv.x, uv.y);\n                if (uv.x < 0.) a =  leftValue - atan(-uv.x, uv.y);\n            }else{\n                if (uv.x >= 0.) a = atan(uv.x, uv.y) * .275;\n                if (uv.x < 0.) a =  3.14159 - atan(-uv.x, -uv.y) * 1.66;\n            }\n\n\n            float t = mod(time*speed, duration);\n            t = exp(t * diffusionSpeed);\n            if (t>extent) t = extent;\n\n            float pattern = 0.0;\n            if(useRandomShape==1){\n                pattern = sin(baseValue+fract(.7971*floor(time*speed/2.)));\n            }else{\n                pattern = sin(baseValue);\n            }\n            float fc = magicBox(vec3(uv,a),pattern) + 1.;\n            fc = 1.-smoothstep(fc, fc+0.001, t/dot(uv,uv));\n\n\n            // \u5224\u65b7\u53cd\u5411\n            vec4 splash;\n            if(reverse==1){\n                splash = vec4(fc);\n            }else{\n                splash = vec4(1.-fc);\n            }\n\n            if(useTextureColor==1){\n                vec4 tex = texture2D(texture, v_uv0);\n                splash *=tex  * textureColor;\n                gl_FragColor = vec4(splash);\n            }else{\n                splash *= shapeColor;\n                gl_FragColor = vec4(splash);\n            }\n        }\n\n        "
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderSplash = function(_super) {
      __extends(ShaderSplash, _super);
      function ShaderSplash() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 1;
        _this.useSymmetry = false;
        _this.leftValue = 1.5;
        _this.rightValue = 1.5;
        _this.baseValue = 1.5;
        _this.reverse = false;
        _this.useRandomShape = false;
        _this.useTextureColor = false;
        _this.textureColor = cc.color(255, 255, 255);
        _this.shapeColor = cc.color(255, 255, 255);
        _this.duration = 2;
        _this.diffusionSpeed = 3;
        _this.extent = 7.2;
        _this.time = 0;
        return _this;
      }
      ShaderSplash.prototype.doStart = function(sprite, material, dt) {
        var iResolution = cc.v2(sprite.node.getContentSize().width, sprite.node.getContentSize().height);
        var uvfix = ShaderComponent_1.getUVfix(sprite.spriteFrame);
        this.time = 0;
        material.setParamValue("iResolution", iResolution);
        material.setParamValue("uvfix", uvfix);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("reverse", this.reverse ? 1 : 0);
        material.setParamValue("useSymmetry", this.useSymmetry ? 1 : 0);
        material.setParamValue("useRandomShape", this.useRandomShape ? 1 : 0);
        material.setParamValue("useTextureColor", this.useTextureColor ? 1 : 0);
        material.setParamValue("leftValue", this.leftValue);
        material.setParamValue("rightValue", this.rightValue);
        material.setParamValue("baseValue", this.baseValue);
        material.setParamValue("textureColor", {
          x: this.textureColor.getR() / 255,
          y: this.textureColor.getG() / 255,
          z: this.textureColor.getB() / 255,
          w: this.textureColor.getA() / 255
        });
        material.setParamValue("shapeColor", {
          x: this.shapeColor.getR() / 255,
          y: this.shapeColor.getG() / 255,
          z: this.shapeColor.getB() / 255,
          w: this.shapeColor.getA() / 255
        });
        material.setParamValue("duration", this.duration);
        material.setParamValue("diffusionSpeed", this.diffusionSpeed);
        material.setParamValue("extent", this.extent);
      };
      ShaderSplash.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderSplash.prototype, "speed", void 0);
      __decorate([ property({
        tooltip: "\u4f7f\u7528\u5c0d\u7a31\u53c3\u6578"
      }) ], ShaderSplash.prototype, "useSymmetry", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5de6\u908a\u5c0d\u7a31\u53c3\u6578\u503c",
        visible: function() {
          return this.useSymmetry;
        }
      }) ], ShaderSplash.prototype, "leftValue", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u53f3\u908a\u5c0d\u7a31\u53c3\u6578\u503c",
        visible: function() {
          return this.useSymmetry;
        }
      }) ], ShaderSplash.prototype, "rightValue", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u5716\u5f62\u57fa\u790e\u53c3\u6578\u503c"
      }) ], ShaderSplash.prototype, "baseValue", void 0);
      __decorate([ property({
        tooltip: "\u53cd\u76f8"
      }) ], ShaderSplash.prototype, "reverse", void 0);
      __decorate([ property({
        tooltip: "\u4f7f\u7528\u4e82\u6578\u5716\u578b"
      }) ], ShaderSplash.prototype, "useRandomShape", void 0);
      __decorate([ property({
        tooltip: "\u4f7f\u7528\u8cbc\u5716\u8272\u5f69"
      }) ], ShaderSplash.prototype, "useTextureColor", void 0);
      __decorate([ property(cc.Color) ], ShaderSplash.prototype, "textureColor", void 0);
      __decorate([ property(cc.Color) ], ShaderSplash.prototype, "shapeColor", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6301\u7e8c\u6642\u9593, 0\u8868\u793a\u6301\u7e8c\u986f\u793a"
      }) ], ShaderSplash.prototype, "duration", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u64f4\u6563\u901f\u5ea6"
      }) ], ShaderSplash.prototype, "diffusionSpeed", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u64f4\u6563\u7bc4\u570d"
      }) ], ShaderSplash.prototype, "extent", void 0);
      ShaderSplash = __decorate([ ccclass ], ShaderSplash);
      return ShaderSplash;
    }(ShaderComponent_1.default);
    exports.default = ShaderSplash;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderWater2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34dabOIXxZLsJKTG/QFUMPz", "ShaderWater2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderWater2",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      }, {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed_x",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed_y",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "emboss",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "intensity",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "steps",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT
      }, {
        name: "frequency",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "angle",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_INT
      }, {
        name: "delta",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "intence",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "reflectionCutOff",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "reflectionIntence",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n        uniform sampler2D texture;\n        uniform float time;\n        uniform vec2 resolution;\n\n        //speed\n        uniform float speed;\n        uniform float speed_x;\n        uniform float speed_y;\n\n        // refraction\n        uniform float emboss;\n        uniform float intensity;\n        uniform int steps;\n        uniform float frequency;\n        uniform int angle;\n\n        // reflection\n        uniform float delta;\n        uniform float intence;\n\n        uniform float reflectionCutOff;\n        uniform float reflectionIntence;\n\n        varying vec2 v_uv0;\n        #ifdef GL_ES\n        precision highp float;\n        #endif\n\n        const float PI = 3.1415926535897932;\n        const int MAX_ITERATIONS = 100;\n\n\n        // play with these parameters to custimize the effect\n        // ===================================================\n\n\n\n        // ===================================================\n\n\n        float col(vec2 coord,float time)\n        {\n            float delta_theta = 2.0 * PI / float(angle);\n            float col = 0.0;\n            float theta = 0.0;\n            for (int i = 0; i < MAX_ITERATIONS; i++)\n            {\n                if (i >= steps) break;\n                vec2 adjc = coord;\n                theta = delta_theta*float(i);\n                adjc.x += cos(theta)*time*speed + time * speed_x;\n                adjc.y -= sin(theta)*time*speed - time * speed_y;\n                col = col + cos( (adjc.x*cos(theta) - adjc.y*sin(theta))*frequency)*intensity;\n            }\n\n            return cos(col);\n        }\n\n        //---------- main\n\n        void main()\n        {\n\n            vec2 uv = v_uv0;\n            uv.y = 1.-uv.y;\n\n            vec2 p = uv;\n            vec2 c1 = p;\n            vec2 c2 = p;\n            float cc1 = col(c1,time);\n\n            c2.x += resolution.x/delta;\n            float dx = emboss*(cc1-col(c2,time))/delta;\n\n            c2.x = p.x;\n            c2.y += resolution.y/delta;\n            float dy = emboss*(cc1-col(c2,time))/delta;\n\n            c1.x += dx*2.;\n            c1.y = 1.-(c1.y);\n\n            float alpha = 1.+dot(dx,dy)*intence;\n\n            float ddx = dx - reflectionCutOff;\n            float ddy = dy - reflectionCutOff;\n            // if (ddx > 0. && ddy > 0.)\n                // alpha = pow(alpha, ddx*ddy*reflectionIntence);\n\n            vec4 col = texture2D(texture,c1)*(alpha);\n            gl_FragColor = col;\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderWater2 = function(_super) {
      __extends(ShaderWater2, _super);
      function ShaderWater2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = .2;
        _this.speedX = .3;
        _this.speedY = .3;
        _this.emboss = .1;
        _this.intensity = 2.4;
        _this.steps = 8;
        _this.frequency = 3;
        _this.angle = 7;
        _this.delta = 60;
        _this.intence = 700;
        _this.reflectionCutOff = .012;
        _this.reflectionIntence = 2e5;
        _this.time = 0;
        return _this;
      }
      ShaderWater2.prototype.doStart = function(sprite, material, dt) {
        var resolution = cc.v2(sprite.node.getContentSize().width, sprite.node.getContentSize().height);
        this.time = 0;
        material.setParamValue("resolution", resolution);
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
        material.setParamValue("speed_x", this.speedX);
        material.setParamValue("speed_y", this.speedY);
        material.setParamValue("emboss", this.emboss);
        material.setParamValue("intensity", this.intensity);
        material.setParamValue("steps", this.steps);
        material.setParamValue("frequency", this.frequency);
        material.setParamValue("angle", this.angle);
        material.setParamValue("delta", this.delta);
        material.setParamValue("intence", this.intence);
        material.setParamValue("reflectionCutOff", this.reflectionCutOff);
        material.setParamValue("reflectionIntence", this.reflectionIntence);
      };
      ShaderWater2.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time * this.speed);
      };
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "speed", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "speedX", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "speedY", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "emboss", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "intensity", void 0);
      __decorate([ property(cc.Integer) ], ShaderWater2.prototype, "steps", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "frequency", void 0);
      __decorate([ property(cc.Integer) ], ShaderWater2.prototype, "angle", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "delta", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "intence", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "reflectionCutOff", void 0);
      __decorate([ property(cc.Float) ], ShaderWater2.prototype, "reflectionIntence", void 0);
      ShaderWater2 = __decorate([ ccclass ], ShaderWater2);
      return ShaderWater2;
    }(ShaderComponent_1.default);
    exports.default = ShaderWater2;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderWater: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b9aeUoGwRM/paXj9T2PJ4U", "ShaderWater");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var shader = {
      name: "ShaderWater",
      params: [ {
        name: "resolution",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT3
      }, {
        name: "iTime",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      } ],
      defines: [],
      vert: MVP_1.MVP,
      frag: "\n        #define TAU 6.12\n        #define MAX_ITER 10\n        #define useModel\n        #define use2DPos\n        precision highp float;\n\n\n        uniform sampler2D texture;\n        varying mediump vec2 v_uv0;\n\n        #ifdef alphaTest\n          uniform lowp float alphaThreshold;\n        #endif\n\n        varying lowp vec4 v_light;\n        #ifdef useTint\n          varying lowp vec4 v_dark;\n        #endif\n        uniform vec3 resolution;\n        uniform float iTime;\n        uniform float speed;\n\n        #ifdef useColor\n            uniform lowp vec4 color;\n        #else\n            varying lowp vec4 v_fragmentColor;\n        #endif\n\n        #define F cos(x-y)*cos(y),sin(x+y)*sin(y)\n\n        vec2 s(vec2 p)\n        {\n            float d=iTime*speed/2.0*0.2,x=8.*(p.x+d),y=8.*(p.y+d);\n            return vec2(F);\n        }\n        void mainImage( out vec4 fragColor, in vec2 fragCoord )\n        {\n            #ifdef use2DPos\n                // \u6362\u6210resolution\n                vec2 rs = resolution.xy;\n                // \u6362\u6210\u7eb9\u7406\u5750\u6807v_texCoord.xy\n                vec2 uv = fragCoord;\n                vec2 q = uv+40./resolution.x*(s(uv)-s(uv+rs));\n                //\u9215\u7684\u5e45\u5ea6\n                //\u53cd\u8f6cy\n                //q.y=1.-q.y;\n\n\n                vec4 texColor = texture2D(texture, q);\n                vec4 finalColor;\n\n                #ifdef useTint\n                finalColor.a = v_light.a * texColor.a;\n                finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n                #else\n                finalColor = texColor * v_light;\n                #endif\n\n                #ifdef alphaTest\n                if (finalColor.a <= alphaThreshold)\n                    discard;\n                #endif\n                #else\n                // \u6362\u6210resolution\n                vec2 rs = resolution.xy;\n                // \u6362\u6210\u7eb9\u7406\u5750\u6807v_texCoord.xy\n                vec2 uv = fragCoord;\n                vec2 q = uv+20./resolution.x*20(s(uv)-s(uv+rs));\n                //\u53cd\u8f6cy\n                //q.y=1.-q.y;\n\n\n                vec4 texColor = texture2D(texture, q);\n                vec4 finalColor;\n\n            #endif\n\n            float time = iTime*speed/2. * .5+5.;\n            // uv should be the 0-1 uv of texture...\n            // vec2 uv = q.xy;//fragCoord.xy / resolution.xy;\n\n            vec2 p = mod(uv*TAU, TAU)-120.0;\n\n            vec2 i = vec2(p);\n            float c = 0.7;\n            float inten = .0035;\n            //\u5716\u7247\u6578\u503c\u900f\u660e\u5ea6\n            for (int n = 0; n < MAX_ITER; n++)\n            {\n                float t =  time *speed* (1.0 - (2.5 / float(n+30)));\n                i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(1.5*t + i.x));\n                c += 1.0/length(vec2(p.x / (cos(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\n            }\n            c /= float(MAX_ITER);\n            c = 1.17-pow(c, 1.6);\n            //\u5207\u5272\u7bc4\u570d\n            vec3 colour = vec3(pow(abs(c), 10.0));\n            colour = clamp(colour + vec3(0.0, 0.0, .0), 0.0, texColor.a);\n\n            // \u6df7\u5408\u6ce2\u5149\n            float alpha = c*texColor[3];\n            texColor[0] = texColor[0] + colour[0]*alpha;\n            texColor[1] = texColor[1] + colour[1]*alpha;\n            texColor[2] = texColor[2] + colour[2]*alpha;\n\n            fragColor = finalColor * texColor;\n        }\n        void main()\n        {\n            mainImage(gl_FragColor, v_uv0.xy);\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderWater = function(_super) {
      __extends(ShaderWater, _super);
      function ShaderWater() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 1;
        _this.time = 0;
        return _this;
      }
      ShaderWater.prototype.doStart = function(sprite, material, dt) {
        var s = this.node.getContentSize();
        var resolution = new cc.Vec3(s.width, s.height, 0);
        material.setParamValue("resolution", resolution);
        this.time = 0;
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
      };
      ShaderWater.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("iTime", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderWater.prototype, "speed", void 0);
      ShaderWater = __decorate([ ccclass ], ShaderWater);
      return ShaderWater;
    }(ShaderComponent_1.default);
    exports.default = ShaderWater;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  ShaderWave: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5914dYAdRIAZkqVqHYyZHr", "ShaderWave");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MVP_1 = require("../MVP");
    var ShaderComponent_1 = require("../ShaderComponent");
    var ShaderFunc_1 = require("../ShaderFunc");
    var ShaderManager_1 = require("../ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var shader = {
      name: "ShaderWave",
      params: [ {
        name: "time",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "speed",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT
      }, {
        name: "offset",
        type: ShaderFunc_1.RENDERER_PARAMS.PARAM_FLOAT2
      } ],
      vert: MVP_1.MVP,
      frag: "\n        uniform sampler2D texture;\n        uniform float time;\n        uniform float speed;\n        uniform vec2 offset;\n        varying vec2 v_uv0;\n\n        void main() {\n            vec2 coord = v_uv0;\n            coord.x += (sin(coord.y * 30.0 + time*speed * 3.0) / 30.0 * offset[0]);\n            coord.y += (sin(coord.x * 30.0 + time*speed * 3.0) / 30.0 * offset[1]);\n            gl_FragColor = texture2D(texture, coord);\n        }"
    };
    ShaderManager_1.shaderManager.addShader(shader);
    var ShaderWave = function(_super) {
      __extends(ShaderWave, _super);
      function ShaderWave() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shaderFunc = shader;
        _this.speed = 1;
        _this.offset = cc.v2(0, 0);
        _this.time = 0;
        return _this;
      }
      ShaderWave.prototype.doStart = function(sprite, material, dt) {
        material.setParamValue("offset", new cc.Vec2(.2, .2));
        this.time = 0;
        material.setParamValue("time", this.time);
        material.setParamValue("speed", this.speed);
      };
      ShaderWave.prototype.doUpdate = function(sprite, material, dt) {
        this.time += dt;
        material.setParamValue("time", this.time);
      };
      __decorate([ property(cc.Float) ], ShaderWave.prototype, "speed", void 0);
      __decorate([ property(cc.Vec2) ], ShaderWave.prototype, "offset", void 0);
      ShaderWave = __decorate([ ccclass ], ShaderWave);
      return ShaderWave;
    }(ShaderComponent_1.default);
    exports.default = ShaderWave;
    cc._RF.pop();
  }, {
    "../MVP": "MVP",
    "../ShaderComponent": "ShaderComponent",
    "../ShaderFunc": "ShaderFunc",
    "../ShaderManager": "ShaderManager"
  } ],
  TouchMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a9c5e5qylPfZUAv44181NV", "TouchMove");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchMove = function(_super) {
      __extends(TouchMove, _super);
      function TouchMove() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mousePos = cc.v2();
        _this.posIP = [];
        return _this;
      }
      TouchMove.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
      };
      TouchMove.prototype.onTouchStart = function(event) {
        this.mousePos = event.getLocation();
        this.mousePos = this.mousePos.sub(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
        this.node.setPosition(this.mousePos);
        this.setPos2EditBox(this.mousePos);
      };
      TouchMove.prototype.onTouchMove = function(event) {
        this.mousePos = event.getLocation();
        this.mousePos = this.mousePos.sub(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
        this.node.setPosition(this.mousePos);
        this.setPos2EditBox(this.mousePos);
      };
      TouchMove.prototype.onDestroy = function() {
        this.node.targetOff(this.node);
      };
      TouchMove.prototype.setInputePropertyRef = function(x, y) {
        this.posIP.push(x, y);
      };
      TouchMove.prototype.setPos2EditBox = function(pos) {
        this.posIP.forEach(function(ip, index) {
          if (ip) {
            0 === index ? ip.editor.string = Math.floor(pos.x) + "" : 1 === index && (ip.editor.string = Math.floor(pos.y) + "");
            var n = Number(ip.editor.string);
            if (isNaN(n)) return;
            ip.slider && (ip.slider.progress = (n - ip.min) / (ip.max - ip.min));
          }
        });
      };
      TouchMove = __decorate([ ccclass ], TouchMove);
      return TouchMove;
    }(cc.Component);
    exports.default = TouchMove;
    cc._RF.pop();
  }, {} ]
}, {}, [ "FileDrop", "InputeProperty", "InputePropertys", "ShaderDemo", "TouchMove", "MVP", "ShaderComponent", "ShaderFunc", "ShaderHook", "ShaderManager", "ShaderMaterial", "ShaderAclouisCircle", "ShaderBallOfFire", "ShaderClouds", "ShaderDissolve2", "ShaderEdgeGlow", "ShaderElectricGrid", "ShaderExplosion", "ShaderFire", "ShaderFlame301Remix2", "ShaderFlame301Remix3", "ShaderFlameAvin", "ShaderFlameBrady", "ShaderFlameOzzy", "ShaderFlameWADE", "ShaderFluxay", "ShaderFluxay2", "ShaderGalaxy", "ShaderGaussBlur", "ShaderGrassy", "ShaderInterstellar", "ShaderRipple", "ShaderRun", "ShaderRun2", "ShaderRun3", "ShaderSearch", "ShaderSparks", "ShaderSparksDrifting", "ShaderSplash", "ShaderWater", "ShaderWater2", "ShaderWave" ]);