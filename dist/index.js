"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (index) {
      var selected = _this.state.options[index];
      selected.index = index;

      _this.setState({
        selectedOption: _this.state.options[index],
        isOptionsVisible: false
      }); // optional callback func to capture selected option


      if (_this.props.optionChanged) {
        _this.props.optionChanged(selected);
      }
    });

    _this.state = {
      options: [],
      selectedOption: null,
      defaultSelect: '- Please select an item -',
      isOptionsVisible: false
    }; // required param

    if (props.options) {
      _this.state.options = props.options;
    } // optional prop for default value


    if (props.defaultValue) {
      var selected = props.defaultValue;
      selected.index = props.options.indexOf(props.defaultValue);
      _this.state.selectedOption = selected;
    }

    return _this;
  } // select handler to change select value and to fire callbacks


  _createClass(Select, [{
    key: "toggleSelectOptions",
    // open/close options tab
    value: function toggleSelectOptions() {
      if (this.state.isOptionsVisible) {
        this.setState({
          isOptionsVisible: false
        });
      } else {
        this.setState({
          isOptionsVisible: true
        });
      }
    } // cancel selected item func

  }, {
    key: "cancelSelected",
    value: function cancelSelected(e) {
      this.setState({
        selectedOption: null
      });
      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _this$state,
          _this$state$selectedO,
          _this$state$selectedO2,
          _this$state2;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "Select"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "x-select-wrapper",
        onClick: function onClick() {
          return _this2.toggleSelectOptions();
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: this.state.isOptionsVisible ? "x-select open" : "x-select"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "x-select__trigger"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "select-content"
      }, ((_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$selectedO = _this$state.selectedOption) === null || _this$state$selectedO === void 0 ? void 0 : _this$state$selectedO.label) ? (_this$state$selectedO2 = this.state.selectedOption) === null || _this$state$selectedO2 === void 0 ? void 0 : _this$state$selectedO2.label : (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.defaultSelect), /*#__PURE__*/_react.default.createElement("div", {
        className: "select-content-btn"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn fa fa-times",
        onClick: function onClick(e) {
          return _this2.cancelSelected(e);
        }
      })), /*#__PURE__*/_react.default.createElement("div", null, "|"), /*#__PURE__*/_react.default.createElement("div", {
        className: "select-content-btn"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn fa fa-angle-up"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "x-options"
      }, this.state.options.map(function (opt, index) {
        var _this2$state$selected;

        return /*#__PURE__*/_react.default.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this2.handleSelect(index);
          },
          className: index === ((_this2$state$selected = _this2.state.selectedOption) === null || _this2$state$selected === void 0 ? void 0 : _this2$state$selected.index) ? "x-option selected" : "x-option"
        }, opt.label);
      })))));
    }
  }]);

  return Select;
}(_react.default.Component);

var _default = Select;
exports.default = _default;
