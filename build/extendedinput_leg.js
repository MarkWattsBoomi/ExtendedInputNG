var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement2(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement2.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/fcmlib/lib/EventManager.js
if (!manywho.eventManager) {
  manywho.eventManager = {};
  manywho.eventManager.beforeSendListeners = {};
  manywho.eventManager.doneListeners = {};
  manywho.eventManager.initializedListeners = {};
  manywho.eventManager.joinListeners = {};
  manywho.eventManager.failListeners = {};
  manywho.eventManager.outcomeBeingTriggered;
  manywho.eventManager.history = [];
  manywho.eventManager.beforeSend = (xhr, request) => {
    if (xhr) {
      if (window.hasOwnProperty("culture") && culture.length > 0) {
        xhr.setRequestHeader("Culture", culture);
      }
    }
    for (const key in manywho.eventManager.beforeSendListeners) {
      manywho.eventManager.beforeSendListeners[key](xhr, request);
    }
  };
  manywho.eventManager.join = (xhr, request) => {
    for (const key in manywho.eventManager.joinListeners) {
      manywho.eventManager.joinListeners[key](xhr, request);
    }
  };
  manywho.eventManager.done = (xhr, request) => {
    for (const key in manywho.eventManager.doneListeners) {
      manywho.eventManager.doneListeners[key](xhr, request);
    }
  };
  manywho.eventManager.initialized = (xhr, request) => {
    for (const key in manywho.eventManager.initializedListeners) {
      manywho.eventManager.initializedListeners[key](xhr, request);
    }
  };
  manywho.eventManager.fail = (xhr, request) => {
    for (const key in manywho.eventManager.failListeners) {
      manywho.eventManager.failListeners[key](xhr, request);
    }
  };
  manywho.eventManager.addBeforeSendListener = (handler, componentId) => {
    manywho.eventManager.beforeSendListeners[componentId] = handler;
  };
  manywho.eventManager.removeBeforeSendListener = (componentId) => {
    delete manywho.eventManager.beforeSendListeners[componentId];
  };
  manywho.eventManager.addInitializedListener = (handler, componentId) => {
    manywho.eventManager.initializedListeners[componentId] = handler;
  };
  manywho.eventManager.removeInitializedListener = (componentId) => {
    delete manywho.eventManager.initializedListeners[componentId];
  };
  manywho.eventManager.addJoinListener = (handler, componentId) => {
    manywho.eventManager.joinListeners[componentId] = handler;
  };
  manywho.eventManager.removeJoinListener = (componentId) => {
    delete manywho.eventManager.joinListeners[componentId];
  };
  manywho.eventManager.addDoneListener = (handler, componentId) => {
    manywho.eventManager.doneListeners[componentId] = handler;
  };
  manywho.eventManager.removeDoneListener = (componentId) => {
    delete manywho.eventManager.doneListeners[componentId];
  };
  manywho.eventManager.addFailListener = (handler, componentId) => {
    manywho.eventManager.failListeners[componentId] = handler;
  };
  manywho.eventManager.removeFailListener = (componentId) => {
    delete manywho.eventManager.failListeners[componentId];
  };
  manywho.settings.initialize(null, {
    invoke: {
      beforeSend: manywho.eventManager.beforeSend,
      done: manywho.eventManager.done,
      fail: manywho.eventManager.fail
    },
    initialization: {
      beforeSend: manywho.eventManager.beforeSend,
      done: manywho.eventManager.initialized,
      fail: manywho.eventManager.fail
    },
    join: {
      beforeSend: manywho.eventManager.beforeSend,
      done: manywho.eventManager.join,
      fail: manywho.eventManager.fail
    }
  });
}

// node_modules/fcmlib/lib/FCMCore.js
var import_react = __toESM(require_react());

// node_modules/fcmlib/lib/FlowObjectDataProperty.js
var FlowObjectDataProperty = class _FlowObjectDataProperty {
  constructor(property) {
    this.ContentFormat = "";
    this.ContentType = eContentType.unknown;
    this.DeveloperName = "";
    this.TypeElementId = "";
    this.TypeElementPropertyId = "";
    if (property) {
      this.DeveloperName = property.developerName;
      this.ContentType = eContentType[property.contentType];
      this.ContentFormat = property.contentFormat ? property.contentFormat : "";
      this.TypeElementId = property.typeElementId ? property.typeElementId : "";
      this.TypeElementPropertyId = property.typeElementPropertyId;
      switch (this.ContentType) {
        case eContentType.ContentObject:
          this.Value = property.objectData ? new FlowObjectData(property.objectData) : void 0;
          break;
        case eContentType.ContentList:
          this.Value = property.objectData ? new FlowObjectDataArray(property.objectData) : new FlowObjectDataArray([]);
          break;
        case eContentType.ContentNumber:
          this.Value = property.contentValue ? parseFloat("" + property.contentValue) : null;
          break;
        case eContentType.ContentBoolean:
          this.Value = ("" + property.contentValue).trim().toLowerCase() === "true" ? true : false;
          break;
        case eContentType.ContentDateTime:
          this.Value = new Date(property.contentValue);
          break;
        default:
          this.Value = property.contentValue ? "" + property.contentValue : "";
          break;
      }
    }
  }
  static newInstance(developerName, contentType, value) {
    let cv;
    let objd = [];
    switch (contentType) {
      case eContentType.ContentObject:
        const od = value;
        objd.push(od.iObjectData());
        break;
      case eContentType.ContentList:
        const oda = value;
        objd = oda.iFlowObjectDataArray();
        break;
      case eContentType.ContentNumber:
        cv = value;
        break;
      case eContentType.ContentBoolean:
        cv = value;
        break;
      default:
        cv = value;
        break;
    }
    const data = {
      contentFormat: "",
      contentType: eContentType[contentType],
      contentValue: cv,
      developerName,
      objectData: objd,
      typeElementId: "",
      typeElementPropertyId: ""
    };
    return new this(data);
  }
  get contentFormat() {
    return this.ContentFormat;
  }
  set contentFormat(contentFormat) {
    this.contentFormat = contentFormat;
  }
  get contentType() {
    return this.ContentType;
  }
  set contentType(contentType) {
    this.ContentType = contentType;
  }
  get developerName() {
    return this.DeveloperName;
  }
  set developerName(developerName) {
    this.DeveloperName = developerName;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  set typeElementId(typeElementId) {
    this.TypeElementId = typeElementId;
  }
  get typeElementPropertyId() {
    return this.TypeElementPropertyId;
  }
  set typeElementPropertyId(typeElementPropertyId) {
    this.TypeElementPropertyId = typeElementPropertyId;
  }
  get value() {
    switch (this.contentType) {
      case eContentType.ContentNumber:
        return this.Value;
      case eContentType.ContentBoolean:
        return this.Value;
      case eContentType.ContentDateTime:
        return this.Value;
      default:
        return this.Value;
    }
  }
  set value(value) {
    switch (this.contentType) {
      case eContentType.ContentNumber:
        this.Value = parseFloat(value ? "" + value : "0");
        break;
      case eContentType.ContentBoolean:
        this.Value = new String(value).toLowerCase() === "true" ? true : false;
      case eContentType.ContentDateTime:
        this.Value = new Date(value);
      default:
        this.Value = value;
    }
  }
  clone() {
    let value;
    switch (this.contentType) {
      case eContentType.ContentList:
        value = new FlowObjectDataArray();
        this.value.items.forEach((item) => {
          value.addItem(item.clone(item.developerName));
        });
        break;
      case eContentType.ContentObject:
        value = this.value.clone(this.value.developerName);
        break;
      default:
        value = this.value;
    }
    const clone = _FlowObjectDataProperty.newInstance(this.developerName, this.contentType, value);
    return clone;
  }
  iFlowObjectDataProperty() {
    let contentValue = "";
    let objectData = [];
    switch (this.ContentType) {
      case eContentType.ContentObject:
        const od = this.Value;
        if (od && od.developerName && od.developerName.length > 0) {
          objectData.push(od.iObjectData());
        }
        break;
      case eContentType.ContentList:
        const oda = this.Value;
        objectData = oda.iFlowObjectDataArray();
        break;
      case eContentType.ContentNumber:
        contentValue = "" + parseFloat(this.Value ? this.Value : "0");
        break;
      case eContentType.ContentBoolean:
        contentValue = "" + (new String(this.Value).toLowerCase() === "true");
        break;
      case eContentType.ContentDateTime:
        contentValue = isNaN(this.Value.getTime()) ? "" : this.Value.toISOString();
        break;
      default:
        contentValue = this.Value;
        break;
    }
    const output = {
      contentFormat: this.ContentFormat,
      contentType: eContentType[this.ContentType],
      contentValue,
      developerName: this.DeveloperName,
      objectData,
      typeElementId: this.TypeElementId,
      typeElementPropertyId: this.TypeElementPropertyId
    };
    return output;
  }
  get displayString() {
    let label = "";
    if (this.Value) {
      switch (this.ContentType) {
        case eContentType.ContentString:
        case eContentType.ContentNumber:
          label = this.Value;
          break;
        case eContentType.ContentBoolean:
          if (this.Value === true) {
            label = "True";
          } else {
            label = "False";
          }
          break;
        case eContentType.ContentDateTime:
          const d = Date.parse(this.Value);
          if (!isNaN(d)) {
            const dt = new Date(d);
            if (label.length <= 10) {
              return dt.toLocaleDateString();
            } else {
              return dt.toLocaleString();
            }
          }
          break;
        default:
          label = eContentType[this.ContentType];
          break;
      }
    } else {
      label = "Undefined";
    }
    return label;
  }
};

// node_modules/fcmlib/lib/FlowObjectData.js
var FlowObjectData = class _FlowObjectData {
  constructor(data) {
    this.DeveloperName = "";
    this.ExternalId = "";
    this.InternalId = "";
    this.IsSelected = false;
    this.Order = 0;
    this.TypeElementId = "";
    this.Properties = {};
    if (data && data[0]) {
      const objectData = data[0];
      this.DeveloperName = objectData.developerName;
      this.InternalId = objectData.internalId;
      this.ExternalId = objectData.externalId;
      this.Order = objectData.order;
      this.IsSelected = objectData.isSelected;
      this.TypeElementId = objectData.typeElementId;
      if (objectData.properties && objectData.properties.length > 0) {
        for (const property of objectData.properties) {
          this.Properties[property.developerName] = new FlowObjectDataProperty(property);
        }
      }
    } else {
      console.log("null data");
    }
  }
  get developerName() {
    return this.DeveloperName;
  }
  set developerName(developerName) {
    this.DeveloperName = developerName;
  }
  get externalId() {
    return this.ExternalId;
  }
  set externalId(externalId) {
    this.ExternalId = externalId;
  }
  get internalId() {
    return this.InternalId;
  }
  set internalId(internalId) {
    this.InternalId = internalId;
  }
  get isSelected() {
    return this.IsSelected;
  }
  set isSelected(isSelected) {
    this.IsSelected = isSelected;
  }
  get order() {
    return this.Order;
  }
  set order(order) {
    this.Order = order;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  set typeElementId(typeElementId) {
    this.TypeElementId = typeElementId;
  }
  get properties() {
    return this.Properties;
  }
  static newInstance(developerName) {
    const data = {
      developerName,
      externalId: "",
      internalId: crypto.randomUUID(),
      isSelected: false,
      order: 0,
      properties: [],
      typeElementId: ""
    };
    return new this([data]);
  }
  addProperty(newProperty) {
    this.Properties[newProperty.developerName] = newProperty;
  }
  removeProperty(key) {
    delete this.Properties[key];
  }
  clone(newTypeName) {
    const clone = _FlowObjectData.newInstance(newTypeName || this.DeveloperName);
    Object.keys(this.properties).forEach((key) => {
      const newProp = this.properties[key].clone();
      clone.properties[key] = newProp;
    });
    return clone;
  }
  iObjectData(selected) {
    const props = [];
    for (const key of Object.keys(this.properties)) {
      props.push(this.properties[key].iFlowObjectDataProperty());
    }
    const objectData = {
      developerName: this.developerName,
      externalId: this.externalId,
      internalId: this.internalId,
      isSelected: selected || this.isSelected,
      order: this.order,
      properties: props,
      typeElementId: this.TypeElementId
    };
    return objectData;
  }
  iFlowObjectDataArray(selected) {
    const output = [];
    output.push(this.iObjectData(selected));
    return output;
  }
};

// node_modules/fcmlib/lib/FlowObjectDataArray.js
var eSortOrder;
(function(eSortOrder2) {
  eSortOrder2[eSortOrder2["ascending"] = 0] = "ascending";
  eSortOrder2[eSortOrder2["descending"] = 1] = "descending";
})(eSortOrder || (eSortOrder = {}));
var FlowObjectDataArray = class _FlowObjectDataArray {
  constructor(array) {
    this.Items = [];
    for (const item of array || []) {
      this.Items.push(new FlowObjectData([item]));
    }
  }
  get items() {
    return this.Items;
  }
  sort(order, fieldName) {
    if (order === eSortOrder.ascending) {
      if (fieldName) {
        return this.Items.sort((a, b) => {
          let valA;
          let valB;
          switch (a.properties[fieldName].contentType) {
            case eContentType.ContentNumber:
              valA = parseFloat(a.properties[fieldName].value);
              valB = parseFloat(b.properties[fieldName].value);
              break;
            case eContentType.ContentDateTime:
              valA = new Date(a.properties[fieldName].value);
              valB = new Date(b.properties[fieldName].value);
              break;
            default:
              valA = a.properties[fieldName].value;
              valB = b.properties[fieldName].value;
              break;
          }
          switch (true) {
            case valA < valB:
              return -1;
            case valA > valB:
              return 1;
            default:
              return 0;
          }
        });
      } else {
        return this.Items.sort((a, b) => a.order - b.order);
      }
    } else {
      if (fieldName) {
        return this.Items.sort((a, b) => {
          if (a && b && a.properties && b.properties && a.properties[fieldName] && b.properties[fieldName] && a.properties[fieldName].value && b.properties[fieldName].value) {
            if (a.properties[fieldName]) {
              switch (true) {
                case a.properties[fieldName].value < b.properties[fieldName].value:
                  return 1;
                case a.properties[fieldName].value > b.properties[fieldName].value:
                  return -1;
                default:
                  return 0;
              }
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        });
      } else {
        return this.Items.sort((a, b) => a.order - b.order);
      }
    }
  }
  static fromJSONString(json, primaryKey, columns, flowTypeName) {
    let objDataArray = new _FlowObjectDataArray();
    let model = JSON.parse(json);
    model.forEach((item) => {
      let objData = FlowObjectData.newInstance(flowTypeName);
      columns.forEach((col) => {
        let val = item[col.developerName];
        if (col.developerName === primaryKey) {
          objData.externalId = val;
        }
        switch (col.contentType) {
          case eContentType.ContentDateTime:
            val = new Date(val);
            if (val && !isNaN(val.getTime())) {
              val = val.toISOString();
            } else {
              val = "";
            }
            break;
          case eContentType.ContentNumber:
            val = parseFloat("" + val);
            if (val && !isNaN(val)) {
              val = "" + val;
            } else {
              val = "";
            }
            break;
          case eContentType.ContentBoolean:
            val = new String(val).toLowerCase() === "true";
            break;
        }
        objData.addProperty(FlowObjectDataProperty.newInstance(col.developerName, col.contentType, val));
        objData.properties[col.developerName].typeElementPropertyId = col.typeElementPropertyId;
      });
      objDataArray.addItem(objData);
    });
    return objDataArray;
  }
  addItem(item) {
    this.Items.push(item);
  }
  clearItems() {
    this.Items = [];
  }
  clone() {
    const clone = new _FlowObjectDataArray();
    this.items.forEach((obj) => {
      clone.addItem(obj.clone());
    });
    return clone;
  }
  iFlowObjectDataArray(selected) {
    const output = [];
    for (const od of this.Items) {
      output.push(od.iObjectData(selected));
    }
    return output;
  }
  getItemWithPropertyName(findProperty, withValue, returnProperty) {
    for (const item of this.Items) {
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(compareTo.toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return item.properties[returnProperty];
        }
      }
    }
    return null;
  }
  getSelectedItems() {
    const results = new _FlowObjectDataArray();
    for (const item of this.Items) {
      if (item.isSelected === true) {
        results.addItem(item);
      }
    }
    return results;
  }
  getItemWithPropertyValue(findProperty, withValue) {
    for (const item of this.Items) {
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = new String(compareTo).toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return item;
        }
      }
    }
  }
  getIndexOfItemWithPropertyValue(findProperty, withValue) {
    for (let pos = 0; pos < this.items.length; pos++) {
      const item = this.items[pos];
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          return pos;
        }
      }
    }
    return -1;
  }
  removeItemWithPropertyValue(findProperty, withValue) {
    let modifiedCount = 0;
    for (let pos = 0; pos < this.items.length; pos++) {
      const item = this.items[pos];
      if (item.properties[findProperty] && item.properties[findProperty].value != void 0) {
        let value = item.properties[findProperty].value;
        let compareTo = withValue;
        switch (item.properties[findProperty].contentType) {
          case eContentType.ContentString:
            value = value.toLowerCase();
            compareTo = compareTo.toLowerCase();
            break;
          case eContentType.ContentNumber:
            value = value;
            compareTo = parseFloat(new String(compareTo).toLowerCase());
            break;
          case eContentType.ContentBoolean:
            value = value;
            compareTo = new String(compareTo).toLowerCase() === "true";
            break;
          default:
            break;
        }
        if (value === compareTo) {
          this.items.splice(pos, 1);
          modifiedCount++;
        }
      }
    }
    return modifiedCount;
  }
  removeItemAtIndex(index) {
    let modifiedCount = 0;
    if (this.items[index]) {
      this.items.splice(index, 1);
      modifiedCount = index;
    }
    return modifiedCount;
  }
};

// node_modules/fcmlib/lib/FlowAttribute.js
var FlowAttribute = class {
  constructor(name, value) {
    this.Name = name;
    this.Value = value;
  }
  get name() {
    return this.Name;
  }
  get value() {
    return this.Value;
  }
  set value(val) {
    this.Value = val;
  }
};

// node_modules/fcmlib/lib/FlowOutcome.js
var ePageActionBindingType;
(function(ePageActionBindingType2) {
  ePageActionBindingType2["Save"] = "SAVE";
  ePageActionBindingType2["PartialSave"] = "PARTIAL_SAVE";
  ePageActionBindingType2["NoSave"] = "NO_SAVE";
})(ePageActionBindingType || (ePageActionBindingType = {}));
var ePageActionType;
(function(ePageActionType2) {
  ePageActionType2["New"] = "NEW";
  ePageActionType2["Query"] = "QUERY";
  ePageActionType2["Insert"] = "INSERT";
  ePageActionType2["Update"] = "UPDATE";
  ePageActionType2["Upsert"] = "UPSERT";
  ePageActionType2["Delete"] = "DELETE";
  ePageActionType2["Remove"] = "REMOVE";
  ePageActionType2["Add"] = "ADD";
  ePageActionType2["Edit"] = "EDIT";
  ePageActionType2["Next"] = "NEXT";
  ePageActionType2["Back"] = "BACK";
  ePageActionType2["Done"] = "DONE";
  ePageActionType2["Save"] = "SAVE";
  ePageActionType2["Cancel"] = "CANCEL";
  ePageActionType2["Apply"] = "APPLY";
  ePageActionType2["Import"] = "IMPORT";
  ePageActionType2["Close"] = "CLOSE";
  ePageActionType2["Open"] = "OPEN";
  ePageActionType2["Submit"] = "SUBMIT";
  ePageActionType2["Escalate"] = "ESCALATE";
  ePageActionType2["Reject"] = "REJECT";
  ePageActionType2["Delegate"] = "DELEGATE";
})(ePageActionType || (ePageActionType = {}));
var FlowOutcome = class {
  constructor(outcome) {
    this.developerName = outcome.developerName;
    this.id = outcome.id;
    this.isBulkAction = outcome.isBulkAction;
    this.isOut = outcome.isOut;
    this.label = outcome.label;
    this.order = outcome.order;
    this.pageActionBindingType = outcome.pageActionBindingType;
    this.pageActionType = outcome.pageActionType;
    this.pageObjectBindingId = outcome.pageObjectBindingId;
    this.attributes = {};
    if (outcome.attributes) {
      for (const key of Object.keys(outcome.attributes)) {
        this.attributes[key] = new FlowAttribute(key, outcome.attributes[key]);
      }
    }
  }
};

// node_modules/fcmlib/lib/FlowDisplayColumn.js
var FlowDisplayColumn = class {
  constructor(column) {
    this.componentType = column.componentType;
    this.contentFormat = column.contentFormat;
    this.contentType = eContentType[column.contentType];
    this.developerName = column.developerName;
    this.order = column.order;
    this.label = column.label;
    this.isEditable = column.isEditable;
    this.typeElememtPropertyToDisplayId = column.typeElememtPropertyToDisplayId;
    this.typeElementPropertyId = column.typeElementPropertyId;
    this.isDisplayValue = column.isDisplayValue;
  }
};

// node_modules/fcmlib/lib/FCMNew.js
var eContentType;
(function(eContentType2) {
  eContentType2[eContentType2["unknown"] = 0] = "unknown";
  eContentType2[eContentType2["ContentString"] = 1] = "ContentString";
  eContentType2[eContentType2["ContentNumber"] = 2] = "ContentNumber";
  eContentType2[eContentType2["ContentObject"] = 3] = "ContentObject";
  eContentType2[eContentType2["ContentBoolean"] = 4] = "ContentBoolean";
  eContentType2[eContentType2["ContentList"] = 5] = "ContentList";
  eContentType2[eContentType2["ContentPassword"] = 6] = "ContentPassword";
  eContentType2[eContentType2["ContentContent"] = 7] = "ContentContent";
  eContentType2[eContentType2["ContentDateTime"] = 8] = "ContentDateTime";
  eContentType2[eContentType2["ContentEncrypted"] = 9] = "ContentEncrypted";
})(eContentType || (eContentType = {}));

// node_modules/fcmlib/lib/FlowValue.js
var FlowValue = class {
  constructor(field) {
    this.ContentType = eContentType.unknown;
    this.DeveloperName = "";
    this.TypeElementDeveloperName = "";
    this.TypeElementId = "";
    this.TypeElementPropertyDeveloperName = "";
    this.TypeElementPropertyId = "";
    this.ValueElementId = "";
    if (field) {
      this.ContentType = eContentType[field.contentType];
      this.DeveloperName = field.developerName;
      this.TypeElementDeveloperName = field.typeElementDeveloperName;
      this.TypeElementId = field.typeElementId;
      this.TypeElementPropertyDeveloperName = field.typeElementPropertyDeveloperName;
      this.TypeElementPropertyId = field.typeElementPropertyId;
      this.ValueElementId = field.valueElementId;
      switch (this.ContentType) {
        case eContentType.ContentObject:
          this.Value = field.objectData ? new FlowObjectData(field.objectData) : void 0;
          break;
        case eContentType.ContentList:
          this.Value = field.objectData && field.objectData[0] ? new FlowObjectDataArray(field.objectData) : new FlowObjectDataArray([]);
          break;
        default:
          this.Value = field.contentValue;
          break;
      }
    }
  }
  get contentType() {
    return this.ContentType;
  }
  get developerName() {
    return this.DeveloperName;
  }
  get typeElementDeveloperName() {
    return this.TypeElementDeveloperName;
  }
  get typeElementId() {
    return this.TypeElementId;
  }
  get typeElementPropertyDeveloperName() {
    return this.TypeElementPropertyDeveloperName;
  }
  get typeElementPropertyId() {
    return this.TypeElementPropertyId;
  }
  get valueElementId() {
    return this.ValueElementId;
  }
  get value() {
    return this.Value;
  }
  set value(value) {
    this.Value = value;
  }
  iFlowField() {
    let contentValue = "";
    let objectData = [];
    switch (this.ContentType) {
      case eContentType.ContentObject:
        const od = this.Value;
        objectData.push(od.iObjectData());
        break;
      case eContentType.ContentList:
        const oda = this.Value;
        objectData = oda.iFlowObjectDataArray();
        break;
      default:
        contentValue = this.Value ? this.Value : "";
        break;
    }
    const output = {
      contentType: eContentType[this.ContentType],
      contentValue,
      developerName: this.DeveloperName,
      objectData,
      typeElementDeveloperName: this.TypeElementDeveloperName,
      typeElementId: this.TypeElementId,
      typeElementPropertyDeveloperName: this.TypeElementPropertyDeveloperName,
      typeElementPropertyId: this.TypeElementPropertyId,
      valueElementId: this.ValueElementId
    };
    return output;
  }
};

// node_modules/fcmlib/lib/FCMCore.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FCMCore = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.attributes = {};
    this.fields = {};
    this.outcomes = {};
    this.suppressEvents = false;
    this.triggerOutcome = this.triggerOutcome.bind(this);
    this.getPageComponentDataSource = this.getPageComponentDataSource.bind(this);
    this.loadModel = this.loadModel.bind(this);
    this.getOutcomeById = this.getOutcomeById.bind(this);
    this.triggerOutcome = this.triggerOutcome.bind(this);
    this.getPageComponentDataSource = this.getPageComponentDataSource.bind(this);
    this.loadModel(props);
  }
  /* Generic Fetch From FLOW API 1*/
  callRequest(endpoint, method, data, newEndpoint = false) {
    return __awaiter(this, void 0, void 0, function* () {
      let results;
      const request = {};
      let uri = this.flowBaseUri || window.location.origin;
      if (newEndpoint) {
        uri += "/api/run/2/state/" + this.stateId;
      } else {
        uri += "/api/run/1/state/" + this.stateId;
      }
      if (endpoint && endpoint.length > 0) {
        uri += "/" + endpoint;
      }
      request.method = method;
      request.headers = {
        "Content-Type": "application/json",
        "ManyWhoTenant": this.tenantId
      };
      if (this.authenticationToken) {
        request.headers.Authorization = this.authenticationToken;
      }
      request.credentials = "same-origin";
      if (method === "POST" || method === "PUT") {
        request.body = JSON.stringify(data);
      }
      let response = yield fetch(uri, request);
      if (response.status === 200) {
        results = yield response.json();
      } else {
        const errorText = yield response.text();
        console.log("Fetch Failed - " + errorText);
      }
      return results;
    });
  }
  /* Attribute access */
  getAttribute(attributeName, defaultValue) {
    var _a;
    if ((_a = this.attributes) === null || _a === void 0 ? void 0 : _a[attributeName]) {
      return this.attributes[attributeName];
    } else {
      return defaultValue || "";
    }
  }
  getOutcomeById(outcomeId) {
    let oc;
    Object.keys(this.outcomes).forEach((key) => {
      if (this.outcomes[key].id === outcomeId) {
        oc = this.outcomes[key];
      }
    });
    return oc;
  }
  getStateValue() {
    return this.stateValue;
  }
  getOriginalStateValue() {
    var _a;
    switch (this.contentType) {
      case eContentType.ContentObject:
        return this.objectData.items[0];
      case eContentType.ContentList:
        return this.objectData;
      case eContentType.ContentBoolean:
        return ((_a = this.contentValue) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "true";
      case eContentType.ContentNumber:
        let num = parseFloat(this.contentValue);
        if (!isNaN(num)) {
          return num;
        } else {
          return void 0;
        }
      case eContentType.ContentDateTime:
        let dt = new Date(this.contentValue);
        if (!isNaN(dt.getTime())) {
          return dt;
        } else {
          return void 0;
        }
      default:
        return this.contentValue;
    }
  }
  getValue(valueName) {
    return __awaiter(this, void 0, void 0, function* () {
      let value;
      try {
        value = yield this.callRequest("values/name/" + valueName, "GET", {});
      } catch (e) {
        console.error(e);
      } finally {
        if (value) {
          this.fields[value.developerName] = new FlowValue(value);
        }
        return this.fields[value.developerName];
      }
    });
  }
  setValues(values) {
    return __awaiter(this, void 0, void 0, function* () {
      const updateFields = [];
      if (values.constructor.name === FlowValue.name) {
        updateFields.push(values.iFlowField());
      } else {
        for (const field of values) {
          updateFields.push(field.iFlowField());
        }
      }
      yield this.callRequest("values", "POST", updateFields);
      if (this.hasEvents) {
      }
      return Promise.resolve();
    });
  }
  // this takes a string value and if it is the {{FieldName->property}} notation it will
  // load the base flow value, save it to the Fields list and extapolate the requested property
  inflateValue(input) {
    return __awaiter(this, void 0, void 0, function* () {
      if (input) {
        let value;
        let match;
        const matches = [];
        while (match = RegExp(/{{([^}]*)}}/).exec(input)) {
          const fldElements = match[1].split("->");
          let fld;
          if (!this.fields[fldElements[0]]) {
            fld = yield this.getValue(fldElements[0]);
            this.fields[fldElements[0]] = fld;
          } else {
            fld = this.fields[fldElements[0]];
          }
          if (fld) {
            let od = fld.value;
            if (od) {
              if (fldElements.length > 1) {
                for (let epos = 1; epos < fldElements.length; epos++) {
                  od = od.properties[fldElements[epos]].value;
                }
                value = od;
              } else {
                value = fld.value;
              }
            } else {
              value = fld.value;
            }
            input = input.replace(match[0], value);
          }
        }
      }
      return input;
    });
  }
};

// node_modules/fcmlib/lib/FCMLegacy.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FCMLegacy = class extends FCMCore {
  constructor(props) {
    var _a;
    super(props);
    this.flowBaseUri = ((_a = manywho.settings.global("platform")) === null || _a === void 0 ? void 0 : _a.uri) || window.location.origin;
  }
  //static getDerivedStateFromProps(nextProps: Readonly<any>, prevState: any): void {
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (this.suppressEvents === false) {
      if (nextProps.id !== this.id) {
        if (this.loadModel(nextProps)) {
          if (this.childComponent && this.componentDidMount) {
            this.componentDidMount();
          }
        } else {
          if (this.childComponent && this.componentUpdated) {
            this.componentUpdated(false);
          } else if (this.childComponent && this.componentDidMount) {
            this.componentDidMount();
          }
        }
      } else {
        let model = manywho.model.getComponent(this.id, this.flowKey);
        let reload = true;
        switch (eContentType[model === null || model === void 0 ? void 0 : model.contentType]) {
          case eContentType.ContentObject:
          case eContentType.ContentList:
            if (model.objectData === null) {
            }
            break;
          default:
            if (model.contentValue === null) {
              reload = false;
            }
            break;
        }
        if (model && reload === true) {
          if (this.loadModel(nextProps)) {
            if (this.childComponent && this.componentDidMount) {
              this.componentDidMount();
            }
          } else {
            if (this.childComponent && this.componentUpdated) {
              this.componentUpdated(false);
            } else if (this.childComponent && this.componentDidMount) {
              this.componentDidMount();
            }
          }
        } else {
          if (this.childComponent && this.componentUpdated) {
            this.componentUpdated(false);
          }
        }
      }
    }
  }
  componentUpdated(changeDetected) {
  }
  loadModel(props) {
    var _a;
    let hasChanged = false;
    if (this.id !== props.id) {
      hasChanged = true;
    }
    this.id = props.id;
    this.flowKey = props.flowKey;
    const model = manywho.model.getComponent(this.id, this.flowKey);
    this.authenticationToken = manywho.state.getAuthenticationToken(this.flowKey);
    this.attributes = model.attributes;
    this.className = model.className;
    this.colSpan = model.colSpan;
    this.column = model.column;
    this.columns = [];
    (_a = model.columns) === null || _a === void 0 ? void 0 : _a.forEach((col) => {
      this.columns.push(new FlowDisplayColumn(col));
    });
    this.columns.sort((a, b) => {
      return a.order - b.order;
    });
    this.componentScriptURL = model.componentScriptURL;
    this.componentStyleSheetURL = model.componentStyleSheetURL;
    this.content = model.content;
    this.contentType = eContentType[model.contentType];
    if (this.contentValue !== model.contentValue) {
      hasChanged = true;
    }
    this.contentValue = model.contentValue;
    this.developerName = model.developerName;
    this.fields = {};
    this.fileDataRequest = model.fileDataRequest;
    this.hasEvents = model.hasEvents;
    this.hasSubmitted = model.hasSubmitted;
    this.height = model.height;
    this.helpInfo = model.helpInfo;
    this.hintValue = model.hintValue;
    this.imageUri = model.imageUri;
    this.isEditable = model.isEditable;
    this.isEnabled = model.isEnabled;
    this.isMultiSelect = model.isMultiSelect;
    this.isRequired = model.isRequired;
    this.isSearchable = model.isSearchable;
    this.isSearchableDisplayColumns = model.isSearchableDisplayColumns;
    this.isValid = model.isValid;
    this.isVisible = model.isVisible;
    this.label = model.label;
    this.maxSize = model.maxSize;
    let newObjData = new FlowObjectDataArray(model.objectData);
    if (this.objectData) {
      if (newObjData) {
        if (JSON.stringify(this.objectData) !== JSON.stringify(newObjData)) {
          hasChanged = true;
        }
      } else {
        hasChanged = true;
      }
    } else {
      if (newObjData) {
        hasChanged = true;
      }
    }
    this.objectData = newObjData;
    this.objectDataRequest = model.objectDataRequest;
    this.order = model.order;
    this.outcomes = {};
    manywho.model.getOutcomes(this.props.id, this.flowKey).forEach((outcome) => {
      let oc = new FlowOutcome(outcome);
      if (oc.pageObjectBindingId === this.id) {
        this.outcomes[oc.developerName] = oc;
      }
    });
    manywho.model.getOutcomes("", this.flowKey).forEach((outcome) => {
      let oc = new FlowOutcome(outcome);
      if (oc.pageObjectBindingId === this.id) {
        this.outcomes[oc.developerName] = oc;
      }
    });
    this.pageContainerId = model.pageContainerId;
    this.pageSize = model.pageSize || 20;
    this.row = model.row;
    this.rowSpan = model.rowSpan;
    this.selectedItems = model.selectedItems;
    this.size = model.size;
    this.stateId = manywho.utils.extractStateId(this.flowKey);
    this.tags = model.tags;
    this.tenantId = manywho.utils.extractTenantId(this.flowKey);
    this.type = model.type;
    this.validationMessage = model.validationMessage;
    this.validations = model.validations;
    this.width = model.width;
    return hasChanged;
  }
  setStateValue(value) {
    this.stateValue = value;
    const flowModel = manywho.model.getComponent(this.id, this.flowKey);
    let newState;
    if (flowModel) {
      switch (flowModel.contentType) {
        case "ContentObject":
          let objectData = null;
          if (value) {
            value.isSelected = true;
            objectData = value.iFlowObjectDataArray();
            objectData = JSON.parse(JSON.stringify(objectData));
          }
          newState = { "objectData": objectData };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
        case "ContentList":
          let objectDataArray = null;
          if (value) {
            objectDataArray = value.iFlowObjectDataArray();
            objectDataArray = JSON.parse(JSON.stringify(objectDataArray));
          }
          newState = { "objectData": objectDataArray };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
        case "ContentDate":
          newState = { "contentValue": value.toISOString() };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
        default:
          newState = { "contentValue": value };
          manywho.state.setComponent(this.id, newState, this.flowKey, true);
          break;
      }
    }
    if (this.hasEvents) {
      manywho.component.handleEvent(this, manywho.model.getComponent(this.id, this.flowKey), this.flowKey, null);
    }
  }
  triggerOutcome(outcomeName) {
    return __awaiter2(this, void 0, void 0, function* () {
      let oc;
      if (this.outcomes[outcomeName]) {
        oc = this.outcomes[outcomeName];
      }
      if (oc) {
        yield manywho.component.onOutcome(oc, null, this.flowKey);
      } else {
        console.log("Could not find outcome " + outcomeName);
      }
      return Promise.resolve();
    });
  }
  requestObjectData(request) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield manywho.engine.objectDataRequest(this.id, request, this.flowKey);
    });
  }
  getPageComponentId(componentName) {
    var _a;
    return (_a = manywho.model.getComponentByName(componentName, this.flowKey)) === null || _a === void 0 ? void 0 : _a.id;
  }
  getPageComponentDataSource(componentName) {
    let employees = manywho.model.getComponentByName(componentName, this.flowKey);
    let newState = { "objectData": employees.objectData };
    manywho.state.setComponent(employees.id, newState, this.flowKey, true);
    let objDataArray = new FlowObjectDataArray(employees.objectData);
    return objDataArray;
  }
  setPageComponentState(componentName, value) {
    let employees = manywho.model.getComponentByName(componentName, this.flowKey);
    manywho.state.setComponent(employees.id, value.iFlowObjectDataArray(true), this.flowKey, true);
  }
  setPageComponentValue(componentId, value) {
    manywho.state.setComponent(componentId, { contentValue: value }, this.flowKey, true);
  }
  getUserEmail() {
    let email = "admin@manywho.com";
    let token = manywho.state.getAuthenticationToken(this.flowKey);
    if (token && token.length > 0) {
      try {
        let tokStr = window.atob(token.split(".")[1]);
        let json = JSON.parse(tokStr);
        email = json.email;
      } catch (e) {
        console.log("Error parsing token");
      }
    }
    return email;
  }
  sync() {
    manywho.engine.sync(this.flowKey);
  }
};

// src/ExtendedInputLegacy.tsx
var React3 = __toESM(require_react());

// src/ExtendedInput.tsx
var import_react2 = __toESM(require_react());
var _extendedinput = class extends import_react2.default.Component {
  constructor(props) {
    super(props);
    this.component = this.props.parent;
    this.getInputType = this.getInputType.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = { min: null, max: null, value: this.component.getStateValue() };
  }
  componentDidMount() {
    this.loadValues();
  }
  componentUpdated() {
    this.loadValues();
  }
  async loadValues() {
    let min = this.component.getAttribute("min");
    let max = this.component.getAttribute("max");
    let step = this.component.getAttribute("step");
    min = await this.component.inflateValue(min);
    max = await this.component.inflateValue(max);
    step = await this.component.inflateValue(step);
    min = parseInt(min);
    max = parseInt(max);
    this.setState({ min, max, step, isValid: true });
  }
  getInputType() {
    switch (this.component.contentType) {
      case eContentType.ContentNumber:
        return "number";
      case eContentType.ContentPassword:
        return "password";
      default:
        return "text";
    }
  }
  onInput(e) {
    this.validate(e);
  }
  onBlur(e) {
    this.validate(e);
  }
  validate(e) {
    let isValid = true;
    let value = this.state.value;
    let val = parseInt(e.target.value);
    if (this.getInputType() === "number") {
      if (this.state.min && val < this.state.min) {
        val = this.state.min;
      }
      if (this.state.max && val > this.state.max) {
        val = this.state.max;
      }
    }
    this.setState({ value: val }, () => {
      this.component.setStateValue(val);
    });
  }
  render() {
    let inputProps = {
      "data-testid": "page-component-input",
      className: "input form-control",
      id: this.component.id,
      value: this.state.value,
      placeholder: this.component.hintValue ?? "",
      onInput: this.onInput,
      onBlur: this.onBlur,
      type: this.getInputType(),
      readOnly: !this.component.isEditable,
      disabled: !this.component.isEnabled,
      required: this.component.isRequired,
      autoComplete: (
        // Prevent browser from auto-filling the wrong password. Chrome in particular guesses the autofill
        // value and generally gets it wrong because there is no username field associated with this
        // value. Also we do not store passwords in plain-text so this value should never be pre-populated.
        this.component?.contentType === eContentType.ContentPassword ? "new-password" : ""
      )
    };
    if (this.getInputType() === "text") {
      inputProps.pattern = this.component.getAttribute("mask");
      inputProps.size = this.component.size;
    }
    if (this.getInputType() === "number") {
      inputProps.min = this.state.min;
      inputProps.max = this.state.max;
      inputProps.step = this.state.step;
    }
    return /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        ...inputProps
      }
    );
  }
};

// src/ExtendedInputLegacy.tsx
var extendedinput = class extends FCMLegacy {
  constructor(props) {
    super(props);
  }
  componentUpdated(changeDetected) {
    if (this.childComponent && this.childComponent.componentUpdated) {
      this.childComponent.componentUpdated();
    }
  }
  render() {
    return /* @__PURE__ */ React3.createElement("div", { className: "mw-input has-outcomes form-group" }, /* @__PURE__ */ React3.createElement("label", { htmlFor: this.id }, this.label), /* @__PURE__ */ React3.createElement(
      _extendedinput,
      {
        key: this.id,
        parent: this,
        ref: (element) => {
          this.childComponent = element;
        }
      }
    ), /* @__PURE__ */ React3.createElement("span", { className: "help-block" }, this.validationMessage), /* @__PURE__ */ React3.createElement("span", { className: "help-block" }, this.helpInfo));
  }
};
manywho.component.register("extendedinput", extendedinput);
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
