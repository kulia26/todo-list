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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(1);

var _Main2 = _interopRequireDefault(_Main);

__webpack_require__(7);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = function app() {
  if (localStorage.getItem('items') === null) {
    localStorage.setItem('items', JSON.stringify([]));
  }
  localStorage.setItem('query', '');
  localStorage.setItem('status', 'all');
  localStorage.setItem('priority', 'all');

  var root = document.getElementById('root');
  root.innerHTML = _Main2.default.render();
  _Main2.default.afterRender();
};
window.addEventListener('hashchange', app);

// Listen on page load:
window.addEventListener('load', app);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(3);

var _Nav2 = _interopRequireDefault(_Nav);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _Items = __webpack_require__(5);

var _Items2 = _interopRequireDefault(_Items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = {

  render: function render() {
    var view = '\n            ' + _Header2.default.render() + '\n            ' + _Nav2.default.render() + '\n            \n                ' + _Form2.default.render() + '\n            \n            ' + _Items2.default.render() + '\n        ';
    return view;
  },
  afterRender: function afterRender() {
    _Nav2.default.afterRender();
    _Form2.default.afterRender();
    _Items2.default.afterRender();
  }

};

exports.default = Main;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Header = {
  render: function render() {
    var view = "\n            <header class=\"header\">\n                <h1> TODOList </h1>\n            </header>\n        ";
    return view;
  }
};

exports.default = Header;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _Items = __webpack_require__(5);

var _Items2 = _interopRequireDefault(_Items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleChange = function handleChange() {
  var input = document.getElementsByName('search-input')[0];
  input.addEventListener('change', function () {
    localStorage.setItem('query', input.value);
    _Items2.default.update();
  });

  var status = document.getElementsByName('select-status')[0];
  status.addEventListener('change', function () {
    localStorage.setItem('status', status.options[status.selectedIndex].value);
    _Items2.default.update();
  });

  var priority = document.getElementsByName('select-priority')[0];
  priority.addEventListener('change', function () {
    localStorage.setItem('priority', priority.options[priority.selectedIndex].value);
    _Items2.default.update();
  });
};

var createButtonHandler = function createButtonHandler() {
  var button = document.getElementsByName('create-button')[0];
  button.addEventListener('click', function () {
    _Form2.default.setVisible(true);
    _Form2.default.update();
  });
};

var Nav = {
  render: function render() {
    var view = '\n          <nav>\n            <div class="wrap">\n              <input class="search-input" type="search" name="search-input" value="" placeholder="Type your query">\n            </div>\n            <div class="wrap">\n              <select class="select-status" name="select-status">\n                <option value="all" selected>all</option>   \n                <option value="open">open</option> \n                <option value="done">done</option>\n              </select>\n            </div>\n            <div class="wrap">\n              <select class="select-priority" name="select-priority">\n                <option value="all" selected>all</option>   \n                <option value="high">high</option>\n                <option value="normal">normal</option>\n                <option value="low">low</option>\n              </select>\n            </div>\n            <div class="wrap">\n              <button name="create-button">Create</button>\n            </div>\n          </nav>\n        ';
    return view;
  },
  afterRender: function afterRender() {
    handleChange();
    createButtonHandler();
  }
};

exports.default = Nav;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Items = __webpack_require__(5);

var _Items2 = _interopRequireDefault(_Items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = {
  state: {
    item: {
      status: 'high'
    },
    visible: false,
    type: 'create'
  },
  setVisible: function setVisible(visible) {
    Form.state.visible = visible;
  },
  setItem: function setItem(item) {
    Form.state.item = item;
  },
  setType: function setType(type) {
    Form.state.type = type;
  },
  dropItem: function dropItem() {
    Form.state.item = { status: 'high' };
  },
  update: function update() {
    document.getElementsByClassName('form-wrap')[0].outerHTML = Form.render();
    Form.afterRender();
  },
  render: function render() {
    var view = '\n    <div class="form-wrap" style="display:' + (Form.state.visible ? 'block' : 'none') + '">\n        <div class="form">\n        <h2 class="form-title">' + (Form.state.type === 'create' ? 'Create' : 'Edit') + '</h2>\n          <p>Title:<input type="text" name="title" value="' + (Form.state.type === 'create' ? '' : Form.state.item.title) + '"></p>\n          <p>Description:<input type="text" name="description" value="' + (Form.state.type === 'create' ? '' : Form.state.item.description) + '"></p>\n          <p>Priority\n            <select class="form-priority" name="form-select-priority">\n              <option value="high" ' + (Form.state.item.priority === 'high' || Form.state.type === 'create' ? 'selected' : '') + '>high</option>\n              <option value="normal" ' + (Form.state.item.priority === 'normal' ? 'selected' : '') + '>normal</option>\n              <option value="low" ' + (Form.state.item.priority === 'low' ? 'selected' : '') + '>low</option>\n            </select> \n          </p>\n          <div class="form-buttons-wrap">\n            <div class="form-button-wrap">\n            <button name="cancel-button">Cancel</button>\n            </div>\n            <div class="form-button-wrap">\n                <button name="save-button">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n        ';
    return view;
  },
  cancelButtonHandler: function cancelButtonHandler() {
    var button = document.getElementsByName('cancel-button')[0];
    button.addEventListener('click', function () {
      localStorage.setItem('form-visible', JSON.stringify(false));
      Form.setVisible(false);
      Form.dropItem();
      Form.update();
    });
  },
  saveButtonHandler: function saveButtonHandler() {
    var button = document.getElementsByName('save-button')[0];
    button.addEventListener('click', function () {
      var priorityEl = document.getElementsByName('form-select-priority')[0];
      var items = JSON.parse(localStorage.getItem('items'));

      if (Form.state.type === 'edit') {
        for (var i = 0; i < items.length; i += 1) {
          if (items[i].id === Form.state.item.id) {
            items[i].title = document.getElementsByName('title')[0].value;
            items[i].description = document.getElementsByName('description')[0].value;
            items[i].priority = priorityEl.options[priorityEl.selectedIndex].value;
            items[i].status = 'open';
          }
        }
      } else {
        var item = {
          title: document.getElementsByName('title')[0].value,
          description: document.getElementsByName('description')[0].value,
          priority: priorityEl.options[priorityEl.selectedIndex].value,
          id: 'f' + (+new Date()).toString(16),
          status: 'open'
        };
        items.push(item);
      }

      localStorage.setItem('items', JSON.stringify(items));
      localStorage.setItem('form-visible', JSON.stringify(false));
      Form.setVisible(false);
      Form.dropItem();
      Form.update();
      _Items2.default.update();
    });
  },
  afterRender: function afterRender() {
    Form.cancelButtonHandler();
    Form.saveButtonHandler();
  }
};

exports.default = Form;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Item = __webpack_require__(6);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItems = function getItems() {
  var items = JSON.parse(localStorage.getItem('items'));
  var query = localStorage.getItem('query');
  var status = localStorage.getItem('status');
  var priority = localStorage.getItem('priority');
  if (!items) {
    return [];
  }

  return items.filter(function (item) {
    if (status === 'all') {
      return true;
    }
    if (status === item.status) {
      return true;
    }
    return false;
  }).filter(function (item) {
    if (priority === 'all') {
      return true;
    }
    if (priority === item.priority) {
      return true;
    }
    return false;
  }).filter(function (item) {
    if (query === '' || query === undefined) {
      return true;
    }
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
};

var Items = {
  state: {
    items: getItems(),
    itemsComponents: []
  },
  update: function update() {
    Items.state.items = getItems();
    document.getElementsByClassName('items')[0].outerHTML = Items.render();
    Items.afterRender();
  },
  render: function render() {
    Items.state.items = getItems();
    Items.state.itemsComponents = [];
    var view = Items.state.items.map(function (item) {
      var component = new _Item2.default(item);
      Items.state.itemsComponents.push(component);
      return '' + component.render();
    }).join('\n');
    return '<section class="items">' + view + '</section>';
  },
  afterRender: function afterRender() {
    Items.state.itemsComponents.forEach(function (component) {
      return component.afterRender();
    });
  }

};

exports.default = Items;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Items = __webpack_require__(5);

var _Items2 = _interopRequireDefault(_Items);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = function () {
  function Item(item) {
    _classCallCheck(this, Item);

    this.item = item;
    this.doneButtonHandler.bind(this);
    this.deleteButtonHandler.bind(this);
    this.afterRender.bind(this);
    this.editButtonHandler.bind(this);
    this.priotities = {
      high: '🔥',
      normal: '🕐',
      low: '🌊',
      none: '✔️'
    };
  }

  _createClass(Item, [{
    key: 'update',
    value: function update() {
      document.getElementById(this.item.id).outerHTML = this.render();
      this.afterRender();
    }
  }, {
    key: 'render',
    value: function render() {
      var view = '\n          <article class="item ' + this.item.status + '" id="' + this.item.id + '">\n          <span class="item-priority">' + this.priotities[this.item.priority] + '</span>\n            <h2 class="item-title">' + this.item.title + '</h2>\n            \n            <p class="item-description">' + this.item.description + '</p>\n            <div class="item-button-wrap">\n              <button name="item-done-button" id="item-done-button">done</button>\n              <button name="item-edit-button" id="item-edit-button">edit</button>\n              <button name="item-delete-button" id="item-delete-button">delete</button>\n            </div>\n            \n          </article>\n        ';
      return view;
    }
  }, {
    key: 'doneButtonHandler',
    value: function doneButtonHandler() {
      var _this = this;

      var id = this.item.id;

      var button = document.querySelector('#' + id + ' #item-done-button');
      button.addEventListener('click', function () {
        var items = JSON.parse(localStorage.getItem('items'));
        for (var i = 0; i < items.length; i += 1) {
          if (items[i].id === id) {
            items[i].status = 'done';
            items[i].priority = 'none';
            _this.item = items[i];
          }
        }
        localStorage.setItem('items', JSON.stringify(items));
        _this.update();
      });
    }
  }, {
    key: 'deleteButtonHandler',
    value: function deleteButtonHandler() {
      var id = this.item.id;

      var button = document.querySelector('#' + id + ' #item-delete-button');
      button.addEventListener('click', function () {
        var items = JSON.parse(localStorage.getItem('items'));
        for (var i = 0; i < items.length; i += 1) {
          if (items[i].id === id) {
            items.splice(i, 1);
          }
        }
        localStorage.setItem('items', JSON.stringify(items));
        _Items2.default.update();
      });
    }
  }, {
    key: 'editButtonHandler',
    value: function editButtonHandler() {
      var id = this.item.id;

      var button = document.querySelector('#' + id + ' #item-edit-button');
      button.addEventListener('click', function () {
        var items = JSON.parse(localStorage.getItem('items'));
        for (var i = 0; i < items.length; i += 1) {
          if (items[i].id === id) {
            _Form2.default.setItem(items[i]);
            _Form2.default.setVisible(true);
            _Form2.default.setType('edit');
            _Form2.default.update();
          }
        }
      });
    }
  }, {
    key: 'afterRender',
    value: function afterRender() {
      this.doneButtonHandler();
      this.deleteButtonHandler();
      this.editButtonHandler();
    }
  }]);

  return Item;
}();

exports.default = Item;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);