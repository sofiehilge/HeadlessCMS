/*! For license information please see main.0f367f4d.js.LICENSE.txt */
(() => {
  var e = {
      524: function (e, t) {
        var n;
        !(function (r) {
          var a,
            o,
            i = "0.5.4",
            l = "hasOwnProperty",
            s = /[\.\/]/,
            u = /\s*,\s*/,
            c = function (e, t) {
              return e - t;
            },
            f = { n: {} },
            d = function () {
              for (var e = 0, t = this.length; e < t; e++)
                if ("undefined" != typeof this[e]) return this[e];
            },
            p = function () {
              for (var e = this.length; --e; )
                if ("undefined" != typeof this[e]) return this[e];
            },
            h = Object.prototype.toString,
            m = String,
            g =
              Array.isArray ||
              function (e) {
                return e instanceof Array || "[object Array]" == h.call(e);
              },
            v = function (e, t) {
              var n,
                r = o,
                i = Array.prototype.slice.call(arguments, 2),
                l = v.listeners(e),
                s = 0,
                u = [],
                f = {},
                h = [],
                m = a;
              (h.firstDefined = d), (h.lastDefined = p), (a = e), (o = 0);
              for (var g = 0, y = l.length; g < y; g++)
                "zIndex" in l[g] &&
                  (u.push(l[g].zIndex),
                  l[g].zIndex < 0 && (f[l[g].zIndex] = l[g]));
              for (u.sort(c); u[s] < 0; )
                if (((n = f[u[s++]]), h.push(n.apply(t, i)), o))
                  return (o = r), h;
              for (g = 0; g < y; g++)
                if ("zIndex" in (n = l[g]))
                  if (n.zIndex == u[s]) {
                    if ((h.push(n.apply(t, i)), o)) break;
                    do {
                      if (((n = f[u[++s]]) && h.push(n.apply(t, i)), o)) break;
                    } while (n);
                  } else f[n.zIndex] = n;
                else if ((h.push(n.apply(t, i)), o)) break;
              return (o = r), (a = m), h;
            };
          (v._events = f),
            (v.listeners = function (e) {
              var t,
                n,
                r,
                a,
                o,
                i,
                l,
                u,
                c = g(e) ? e : e.split(s),
                d = f,
                p = [d],
                h = [];
              for (a = 0, o = c.length; a < o; a++) {
                for (u = [], i = 0, l = p.length; i < l; i++)
                  for (n = [(d = p[i].n)[c[a]], d["*"]], r = 2; r--; )
                    (t = n[r]) && (u.push(t), (h = h.concat(t.f || [])));
                p = u;
              }
              return h;
            }),
            (v.separator = function (e) {
              e
                ? ((e =
                    "[" + (e = m(e).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]"),
                  (s = new RegExp(e)))
                : (s = /[\.\/]/);
            }),
            (v.on = function (e, t) {
              if ("function" != typeof t) return function () {};
              for (
                var n = g(e) ? (g(e[0]) ? e : [e]) : m(e).split(u),
                  r = 0,
                  a = n.length;
                r < a;
                r++
              )
                !(function (e) {
                  for (
                    var n,
                      r = g(e) ? e : m(e).split(s),
                      a = f,
                      o = 0,
                      i = r.length;
                    o < i;
                    o++
                  )
                    a =
                      ((a = a.n).hasOwnProperty(r[o]) && a[r[o]]) ||
                      (a[r[o]] = { n: {} });
                  for (a.f = a.f || [], o = 0, i = a.f.length; o < i; o++)
                    if (a.f[o] == t) {
                      n = !0;
                      break;
                    }
                  !n && a.f.push(t);
                })(n[r]);
              return function (e) {
                +e == +e && (t.zIndex = +e);
              };
            }),
            (v.f = function (e) {
              var t = [].slice.call(arguments, 1);
              return function () {
                v.apply(
                  null,
                  [e, null].concat(t).concat([].slice.call(arguments, 0)),
                );
              };
            }),
            (v.stop = function () {
              o = 1;
            }),
            (v.nt = function (e) {
              var t = g(a) ? a.join(".") : a;
              return e
                ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(t)
                : t;
            }),
            (v.nts = function () {
              return g(a) ? a : a.split(s);
            }),
            (v.off = v.unbind =
              function (e, t) {
                if (e) {
                  var n = g(e) ? (g(e[0]) ? e : [e]) : m(e).split(u);
                  if (n.length > 1)
                    for (var r = 0, a = n.length; r < a; r++) v.off(n[r], t);
                  else {
                    n = g(e) ? e : m(e).split(s);
                    var o,
                      i,
                      c,
                      d,
                      p,
                      h = [f],
                      y = [];
                    for (r = 0, a = n.length; r < a; r++)
                      for (d = 0; d < h.length; d += c.length - 2) {
                        if (((c = [d, 1]), (o = h[d].n), "*" != n[r]))
                          o[n[r]] &&
                            (c.push(o[n[r]]), y.unshift({ n: o, name: n[r] }));
                        else
                          for (i in o)
                            o[l](i) &&
                              (c.push(o[i]), y.unshift({ n: o, name: i }));
                        h.splice.apply(h, c);
                      }
                    for (r = 0, a = h.length; r < a; r++)
                      for (o = h[r]; o.n; ) {
                        if (t) {
                          if (o.f) {
                            for (d = 0, p = o.f.length; d < p; d++)
                              if (o.f[d] == t) {
                                o.f.splice(d, 1);
                                break;
                              }
                            !o.f.length && delete o.f;
                          }
                          for (i in o.n)
                            if (o.n[l](i) && o.n[i].f) {
                              var b = o.n[i].f;
                              for (d = 0, p = b.length; d < p; d++)
                                if (b[d] == t) {
                                  b.splice(d, 1);
                                  break;
                                }
                              !b.length && delete o.n[i].f;
                            }
                        } else
                          for (i in (delete o.f, o.n))
                            o.n[l](i) && o.n[i].f && delete o.n[i].f;
                        o = o.n;
                      }
                    e: for (r = 0, a = y.length; r < a; r++) {
                      for (i in (o = y[r]).n[o.name].f) continue e;
                      for (i in o.n[o.name].n) continue e;
                      delete o.n[o.name];
                    }
                  }
                } else v._events = f = { n: {} };
              }),
            (v.once = function (e, t) {
              var n = function () {
                return v.off(e, n), t.apply(this, arguments);
              };
              return v.on(e, n);
            }),
            (v.version = i),
            (v.toString = function () {
              return "You are running Eve " + i;
            }),
            (r.eve = v),
            e.exports
              ? (e.exports = v)
              : void 0 ===
                  (n = function () {
                    return v;
                  }.apply(t, [])) || (e.exports = n);
        })("undefined" != typeof window ? window : this);
      },
      497: (e, t, n) => {
        "use strict";
        var r = n(218);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      218: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      723: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            slide: n(147),
            stack: n(790),
            elastic: n(285),
            bubble: n(978),
            push: n(572),
            pushRotate: n(459),
            scaleDown: n(428),
            scaleRotate: n(991),
            fallDown: n(117),
            reveal: n(233),
          }),
          (e.exports = t.default);
      },
      996: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = n(43),
          l = o(i),
          s = o(n(173)),
          u = (function (e) {
            function t(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (function (e, t, n) {
                  for (var r = !0; r; ) {
                    var a = e,
                      o = t,
                      i = n;
                    (r = !1), null === a && (a = Function.prototype);
                    var l = Object.getOwnPropertyDescriptor(a, o);
                    if (void 0 !== l) {
                      if ("value" in l) return l.value;
                      var s = l.get;
                      if (void 0 === s) return;
                      return s.call(i);
                    }
                    var u = Object.getPrototypeOf(a);
                    if (null === u) return;
                    (e = u), (t = o), (n = i), (r = !0), (l = u = void 0);
                  }
                })(
                  Object.getPrototypeOf(t.prototype),
                  "constructor",
                  this,
                ).call(this, e),
                (this.state = { hover: !1 });
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t,
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              a(t, [
                {
                  key: "getLineStyle",
                  value: function (e) {
                    return r(
                      {
                        position: "absolute",
                        height: "20%",
                        left: 0,
                        right: 0,
                        top: 2 * e * 20 + "%",
                        opacity: this.state.hover ? 0.6 : 1,
                      },
                      this.state.hover && this.props.styles.bmBurgerBarsHover,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = void 0;
                    if (this.props.customIcon) {
                      var n = {
                        className: (
                          "bm-icon " +
                          (this.props.customIcon.props.className || "")
                        ).trim(),
                        style: r(
                          { width: "100%", height: "100%" },
                          this.props.styles.bmIcon,
                        ),
                      };
                      t = l.default.cloneElement(this.props.customIcon, n);
                    } else
                      t = l.default.createElement(
                        "span",
                        null,
                        [0, 1, 2].map(function (t) {
                          return l.default.createElement("span", {
                            key: t,
                            className: (
                              "bm-burger-bars " +
                              e.props.barClassName +
                              " " +
                              (e.state.hover ? "bm-burger-bars-hover" : "")
                            ).trim(),
                            style: r(
                              {},
                              e.getLineStyle(t),
                              e.props.styles.bmBurgerBars,
                            ),
                          });
                        }),
                      );
                    return l.default.createElement(
                      "div",
                      {
                        className: (
                          "bm-burger-button " + this.props.className
                        ).trim(),
                        style: r(
                          { zIndex: 1e3 },
                          this.props.styles.bmBurgerButton,
                        ),
                      },
                      l.default.createElement(
                        "button",
                        {
                          type: "button",
                          id: "react-burger-menu-btn",
                          onClick: this.props.onClick,
                          onMouseOver: function () {
                            e.setState({ hover: !0 }),
                              e.props.onIconHoverChange &&
                                e.props.onIconHoverChange({ isMouseIn: !0 });
                          },
                          onMouseOut: function () {
                            e.setState({ hover: !1 }),
                              e.props.onIconHoverChange &&
                                e.props.onIconHoverChange({ isMouseIn: !1 });
                          },
                          style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            zIndex: 1,
                            width: "100%",
                            height: "100%",
                            margin: 0,
                            padding: 0,
                            border: "none",
                            fontSize: 0,
                            background: "transparent",
                            cursor: "pointer",
                          },
                        },
                        "Open Menu",
                      ),
                      t,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component);
        (t.default = u),
          (u.propTypes = {
            barClassName: s.default.string,
            customIcon: s.default.element,
            styles: s.default.object,
          }),
          (u.defaultProps = { barClassName: "", className: "", styles: {} }),
          (e.exports = t.default);
      },
      103: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = n(43),
          l = o(i),
          s = o(n(173)),
          u = (function (e) {
            function t() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (function (e, t, n) {
                  for (var r = !0; r; ) {
                    var a = e,
                      o = t,
                      i = n;
                    (r = !1), null === a && (a = Function.prototype);
                    var l = Object.getOwnPropertyDescriptor(a, o);
                    if (void 0 !== l) {
                      if ("value" in l) return l.value;
                      var s = l.get;
                      if (void 0 === s) return;
                      return s.call(i);
                    }
                    var u = Object.getPrototypeOf(a);
                    if (null === u) return;
                    (e = u), (t = o), (n = i), (r = !0), (l = u = void 0);
                  }
                })(
                  Object.getPrototypeOf(t.prototype),
                  "constructor",
                  this,
                ).apply(this, arguments);
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t,
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              a(t, [
                {
                  key: "getCrossStyle",
                  value: function (e) {
                    return {
                      position: "absolute",
                      width: 3,
                      height: 14,
                      transform:
                        "before" === e ? "rotate(45deg)" : "rotate(-45deg)",
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this;
                    if (this.props.customIcon) {
                      var n = {
                        className: (
                          "bm-cross " +
                          (this.props.customIcon.props.className || "")
                        ).trim(),
                        style: r(
                          { width: "100%", height: "100%" },
                          this.props.styles.bmCross,
                        ),
                      };
                      e = l.default.cloneElement(this.props.customIcon, n);
                    } else
                      e = l.default.createElement(
                        "span",
                        {
                          style: {
                            position: "absolute",
                            top: "6px",
                            right: "14px",
                          },
                        },
                        ["before", "after"].map(function (e, n) {
                          return l.default.createElement("span", {
                            key: n,
                            className: (
                              "bm-cross " + t.props.crossClassName
                            ).trim(),
                            style: r(
                              {},
                              t.getCrossStyle(e),
                              t.props.styles.bmCross,
                            ),
                          });
                        }),
                      );
                    return l.default.createElement(
                      "div",
                      {
                        className: (
                          "bm-cross-button " + this.props.className
                        ).trim(),
                        style: r(
                          {},
                          {
                            position: "absolute",
                            width: 24,
                            height: 24,
                            right: 8,
                            top: 8,
                          },
                          this.props.styles.bmCrossButton,
                        ),
                      },
                      l.default.createElement(
                        "button",
                        r(
                          {
                            type: "button",
                            id: "react-burger-cross-btn",
                            onClick: this.props.onClick,
                            style: {
                              position: "absolute",
                              left: 0,
                              top: 0,
                              zIndex: 1,
                              width: "100%",
                              height: "100%",
                              margin: 0,
                              padding: 0,
                              border: "none",
                              fontSize: 0,
                              background: "transparent",
                              cursor: "pointer",
                            },
                          },
                          !this.props.isOpen && { tabIndex: -1 },
                        ),
                        "Close Menu",
                      ),
                      e,
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component);
        (t.default = u),
          (u.propTypes = {
            crossClassName: s.default.string,
            customIcon: s.default.element,
            isOpen: s.default.bool,
            styles: s.default.object,
          }),
          (u.defaultProps = {
            crossClassName: "",
            className: "",
            styles: {},
            isOpen: !1,
          }),
          (e.exports = t.default);
      },
      312: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.default = {
          overlay: function (e) {
            return {
              position: "fixed",
              zIndex: 1e3,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.3)",
              opacity: e ? 1 : 0,
              MozTransform: e ? "" : "translate3d(100%, 0, 0)",
              MsTransform: e ? "" : "translate3d(100%, 0, 0)",
              OTransform: e ? "" : "translate3d(100%, 0, 0)",
              WebkitTransform: e ? "" : "translate3d(100%, 0, 0)",
              transform: e ? "" : "translate3d(100%, 0, 0)",
              transition: e
                ? "opacity 0.3s"
                : "opacity 0.3s, transform 0s 0.3s",
            };
          },
          menuWrap: function (e, t, n) {
            return {
              position: "fixed",
              right: n ? 0 : "inherit",
              zIndex: 1100,
              width: t,
              height: "100%",
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              transform: e
                ? ""
                : n
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              transition: "all 0.5s",
            };
          },
          menu: function () {
            return {
              height: "100%",
              boxSizing: "border-box",
              overflow: "auto",
            };
          },
          itemList: function () {
            return { height: "100%" };
          },
          item: function () {
            return { display: "block" };
          },
        }),
          (e.exports = t.default);
      },
      767: (e, t) => {
        "use strict";
        function n() {
          var e = Array.from(
            document.getElementsByClassName("bm-item"),
          ).shift();
          e && e.focus();
        }
        function r() {
          var e = Array.from(document.getElementsByClassName("bm-item")).pop();
          e && e.focus();
        }
        function a() {
          var e = document.getElementById("react-burger-cross-btn");
          e && e.focus();
        }
        function o(e) {
          if (document.activeElement.className.includes("bm-item")) {
            var t = document.activeElement[e];
            t ? t.focus() : a();
          } else "previousElementSibling" === e ? r() : n();
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.focusOnFirstMenuItem = n),
          (t.focusOnLastMenuItem = r),
          (t.focusOnCrossButton = a),
          (t.focusOnMenuButton = function () {
            var e = document.getElementById("react-burger-menu-btn");
            e && e.focus();
          }),
          (t.focusOnMenuItem = o),
          (t.focusOnNextMenuItem = function () {
            o("nextElementSibling");
          }),
          (t.focusOnPreviousMenuItem = function () {
            o("previousElementSibling");
          });
      },
      535: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            var e = void 0;
            try {
              e = n(775);
            } finally {
              return e;
            }
          }),
          (e.exports = t.default);
      },
      650: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.pxToNum = function (e) {
          return parseInt(e.slice(0, -2), 10);
        };
      },
      370: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function (e, t) {
                var n = [],
                  r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(r = (i = l.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (s) {
                  (a = !0), (o = s);
                } finally {
                  try {
                    !r && l.return && l.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return n;
              })(e, t);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          },
          a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            };
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = o(n(43)),
          l = (o(n(950)), o(n(173))),
          s = o(n(312)),
          u = n(767),
          c = o(n(996)),
          f = o(n(103));
        (t.default = function (e) {
          if (!e) throw new Error("No styles supplied");
          var t = "ArrowDown",
            n = "ArrowUp";
          var o = function (o) {
            var l = i.default.useState(!1),
              d = r(l, 2),
              p = d[0],
              h = d[1],
              m = i.default.useRef(),
              g = i.default.useRef({}),
              v = (function (e) {
                var t = i.default.useRef(e);
                return (
                  i.default.useEffect(function () {
                    t.current = e;
                  }),
                  t.current
                );
              })(o.isOpen);
            function y() {
              var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0];
              (g.current = e),
                k(),
                setTimeout(function () {
                  h(function (t) {
                    return "undefined" !== typeof e.isOpen ? e.isOpen : !t;
                  });
                });
            }
            function b() {
              "function" === typeof o.onClose ? o.onClose() : y();
            }
            function w(e, t) {
              var n = o.width,
                r = o.right;
              return e(p, "string" !== typeof n ? n + "px" : n, r, t);
            }
            function x(t, n, r) {
              var i = "bm" + t.replace(t.charAt(0), t.charAt(0).toUpperCase()),
                l = s.default[t] ? w(s.default[t]) : {};
              return (
                e[t] && (l = a({}, l, w(e[t], n + 1))),
                o.styles[i] && (l = a({}, l, o.styles[i])),
                r && (l = a({}, l, r)),
                o.noTransition && delete l.transition,
                l
              );
            }
            function S(e, t, n) {
              var r = document.getElementById(e);
              if (r) {
                var a = w(t);
                for (var i in a)
                  a.hasOwnProperty(i) && (r.style[i] = n ? a[i] : "");
                var l = function (e) {
                  return (e.style["overflow-x"] = n ? "hidden" : "");
                };
                o.htmlClassName || l(document.querySelector("html")),
                  o.bodyClassName || l(document.querySelector("body"));
              } else console.error("Element with ID '" + e + "' not found");
            }
            function k() {
              var t =
                  arguments.length <= 0 ||
                  void 0 === arguments[0] ||
                  arguments[0],
                n = function (e, n) {
                  return e.classList[t ? "add" : "remove"](n);
                };
              o.htmlClassName &&
                n(document.querySelector("html"), o.htmlClassName),
                o.bodyClassName &&
                  n(document.querySelector("body"), o.bodyClassName),
                e.pageWrap && o.pageWrapId && S(o.pageWrapId, e.pageWrap, t),
                e.outerContainer &&
                  o.outerContainerId &&
                  S(o.outerContainerId, e.outerContainer, t);
              var r = document.querySelector(".bm-menu-wrap");
              r &&
                (t
                  ? r.removeAttribute("hidden")
                  : r.setAttribute("hidden", !0));
            }
            function E() {
              m.current && clearTimeout(m.current);
            }
            function C(e) {
              switch ((e = e || window.event).key) {
                case "Escape":
                  o.disableCloseOnEsc || (b(), (0, u.focusOnMenuButton)());
                  break;
                case t:
                  (0, u.focusOnNextMenuItem)();
                  break;
                case n:
                  (0, u.focusOnPreviousMenuItem)();
                  break;
                case "Home":
                  (0, u.focusOnFirstMenuItem)();
                  break;
                case "End":
                  (0, u.focusOnLastMenuItem)();
              }
            }
            function _(e) {
              if (
                (e = e || window.event).target ===
                document.getElementById("react-burger-menu-btn")
              )
                switch (e.key) {
                  case t:
                  case " ":
                    y();
                    break;
                  case n:
                    y({ focusOnLastItem: !0 });
                }
            }
            return (
              i.default.useEffect(function () {
                return (
                  o.isOpen && y({ isOpen: !0, noStateChange: !0 }),
                  function () {
                    k(!1), E();
                  }
                );
              }, []),
              i.default.useEffect(function () {
                "undefined" !== typeof o.isOpen &&
                o.isOpen !== p &&
                o.isOpen !== v
                  ? y()
                  : e.svg &&
                    (function () {
                      var t = document.getElementById("bm-morph-shape"),
                        n = e.svg.lib(t).select("path");
                      p
                        ? e.svg.animate(n)
                        : setTimeout(function () {
                            n.attr("d", e.svg.pathInitial);
                          }, 300);
                    })();
              }),
              i.default.useEffect(
                function () {
                  var e = g.current,
                    t = e.noStateChange,
                    n = e.focusOnLastItem;
                  t || o.onStateChange({ isOpen: p }),
                    o.disableAutoFocus ||
                      (p
                        ? n
                          ? (0, u.focusOnLastMenuItem)()
                          : (0, u.focusOnFirstMenuItem)()
                        : document.activeElement
                          ? document.activeElement.blur()
                          : document.body.blur()),
                    E(),
                    (m.current = setTimeout(function () {
                      (m.current = null), p || k(!1);
                    }, 500));
                  var r = p ? C : _,
                    a = o.customOnKeyDown || r;
                  return (
                    window.addEventListener("keydown", a),
                    function () {
                      window.removeEventListener("keydown", a);
                    }
                  );
                },
                [p],
              ),
              i.default.createElement(
                "div",
                null,
                !o.noOverlay &&
                  i.default.createElement("div", {
                    className: ("bm-overlay " + o.overlayClassName).trim(),
                    onClick: function () {
                      !0 === o.disableOverlayClick ||
                        ("function" === typeof o.disableOverlayClick &&
                          o.disableOverlayClick()) ||
                        b();
                    },
                    style: x("overlay"),
                  }),
                !1 !== o.customBurgerIcon &&
                  i.default.createElement(
                    "div",
                    { style: x("burgerIcon") },
                    i.default.createElement(c.default, {
                      onClick: function () {
                        "function" === typeof o.onOpen ? o.onOpen() : y();
                      },
                      styles: o.styles,
                      customIcon: o.customBurgerIcon,
                      className: o.burgerButtonClassName,
                      barClassName: o.burgerBarClassName,
                      onIconStateChange: o.onIconStateChange,
                    }),
                  ),
                i.default.createElement(
                  "div",
                  {
                    id: o.id,
                    className: ("bm-menu-wrap " + o.className).trim(),
                    style: x("menuWrap"),
                    "aria-hidden": !p,
                  },
                  e.svg &&
                    i.default.createElement(
                      "div",
                      {
                        id: "bm-morph-shape",
                        className: (
                          "bm-morph-shape " + o.morphShapeClassName
                        ).trim(),
                        style: x("morphShape"),
                      },
                      i.default.createElement(
                        "svg",
                        {
                          width: "100%",
                          height: "100%",
                          viewBox: "0 0 100 800",
                          preserveAspectRatio: "none",
                        },
                        i.default.createElement("path", {
                          d: e.svg.pathInitial,
                        }),
                      ),
                    ),
                  i.default.createElement(
                    "div",
                    {
                      className: ("bm-menu " + o.menuClassName).trim(),
                      style: x("menu"),
                    },
                    i.default.createElement(
                      o.itemListElement,
                      {
                        className: (
                          "bm-item-list " + o.itemListClassName
                        ).trim(),
                        style: x("itemList"),
                      },
                      i.default.Children.map(o.children, function (e, t) {
                        if (e) {
                          var n = [
                              "bm-item",
                              o.itemClassName,
                              e.props.className,
                            ]
                              .filter(function (e) {
                                return !!e;
                              })
                              .join(" "),
                            r = a(
                              {
                                key: t,
                                className: n,
                                style: x("item", t, e.props.style),
                              },
                              !p && { tabIndex: -1 },
                            );
                          return i.default.cloneElement(e, r);
                        }
                      }),
                    ),
                  ),
                  !1 !== o.customCrossIcon &&
                    i.default.createElement(
                      "div",
                      { style: x("closeButton") },
                      i.default.createElement(f.default, {
                        onClick: b,
                        styles: o.styles,
                        customIcon: o.customCrossIcon,
                        className: o.crossButtonClassName,
                        crossClassName: o.crossClassName,
                        isOpen: p,
                      }),
                    ),
                ),
              )
            );
          };
          return (
            (o.propTypes = {
              bodyClassName: l.default.string,
              burgerBarClassName: l.default.string,
              burgerButtonClassName: l.default.string,
              className: l.default.string,
              crossButtonClassName: l.default.string,
              crossClassName: l.default.string,
              customBurgerIcon: l.default.oneOfType([
                l.default.element,
                l.default.oneOf([!1]),
              ]),
              customCrossIcon: l.default.oneOfType([
                l.default.element,
                l.default.oneOf([!1]),
              ]),
              customOnKeyDown: l.default.func,
              disableAutoFocus: l.default.bool,
              disableCloseOnEsc: l.default.bool,
              disableOverlayClick: l.default.oneOfType([
                l.default.bool,
                l.default.func,
              ]),
              htmlClassName: l.default.string,
              id: l.default.string,
              isOpen: l.default.bool,
              itemClassName: l.default.string,
              itemListClassName: l.default.string,
              itemListElement: l.default.oneOf(["div", "nav"]),
              menuClassName: l.default.string,
              morphShapeClassName: l.default.string,
              noOverlay: l.default.bool,
              noTransition: l.default.bool,
              onClose: l.default.func,
              onIconHoverChange: l.default.func,
              onOpen: l.default.func,
              onStateChange: l.default.func,
              outerContainerId:
                e && e.outerContainer
                  ? l.default.string.isRequired
                  : l.default.string,
              overlayClassName: l.default.string,
              pageWrapId:
                e && e.pageWrap
                  ? l.default.string.isRequired
                  : l.default.string,
              right: l.default.bool,
              styles: l.default.object,
              width: l.default.oneOfType([l.default.number, l.default.string]),
            }),
            (o.defaultProps = {
              bodyClassName: "",
              burgerBarClassName: "",
              burgerButtonClassName: "",
              className: "",
              crossButtonClassName: "",
              crossClassName: "",
              disableAutoFocus: !1,
              disableCloseOnEsc: !1,
              htmlClassName: "",
              id: "",
              itemClassName: "",
              itemListClassName: "",
              menuClassName: "",
              morphShapeClassName: "",
              noOverlay: !1,
              noTransition: !1,
              onStateChange: function () {},
              outerContainerId: "",
              overlayClassName: "",
              pageWrapId: "",
              styles: {},
              width: 300,
              onIconHoverChange: function () {},
              itemListElement: "nav",
            }),
            o
          );
        }),
          (e.exports = t.default);
      },
      978: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(n(535)),
          o = r(n(370)),
          i = n(650),
          l = {
            svg: {
              lib: a.default,
              pathInitial:
                "M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",
              pathOpen:
                "M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",
              animate: function (e) {
                var t = 0,
                  n = this.pathOpen.split(";"),
                  r = n.length,
                  a = window.mina;
                !(function o() {
                  t > r - 1 ||
                    (e.animate(
                      { path: n[t] },
                      0 === t ? 400 : 500,
                      0 === t ? a.easein : a.elastic,
                      function () {
                        o();
                      },
                    ),
                    t++);
                })();
              },
            },
            morphShape: function (e, t, n) {
              return {
                position: "absolute",
                width: "100%",
                height: "100%",
                right: n ? "inherit" : 0,
                left: n ? 0 : "inherit",
                MozTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
                MsTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
                OTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
                WebkitTransform: n ? "rotateY(180deg)" : "rotateY(0deg)",
                transform: n ? "rotateY(180deg)" : "rotateY(0deg)",
              };
            },
            menuWrap: function (e, t, n) {
              return {
                MozTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                MsTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                OTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                WebkitTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                transform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                transition: e ? "transform 0.4s 0s" : "transform 0.4s",
              };
            },
            menu: function (e, t, n) {
              var r = (0, i.pxToNum)(t) - 140;
              return {
                position: "fixed",
                MozTransform: e
                  ? ""
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                MsTransform: e
                  ? ""
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                OTransform: e
                  ? ""
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                WebkitTransform: e
                  ? ""
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                transform: e
                  ? ""
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                transition: e
                  ? "opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)"
                  : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
                opacity: e ? 1 : 0,
              };
            },
            item: function (e, t, n, r) {
              var a = (0, i.pxToNum)(t) - 140;
              return {
                MozTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + a + ", 0, 0)"
                    : "translate3d(-" + a + ", 0, 0)",
                MsTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + a + ", 0, 0)"
                    : "translate3d(-" + a + ", 0, 0)",
                OTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + a + ", 0, 0)"
                    : "translate3d(-" + a + ", 0, 0)",
                WebkitTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + a + ", 0, 0)"
                    : "translate3d(-" + a + ", 0, 0)",
                transform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + a + ", 0, 0)"
                    : "translate3d(-" + a + ", 0, 0)",
                transition: e
                  ? "opacity 0.3s 0.4s, transform 0.3s 0.4s"
                  : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
                opacity: e ? 1 : 0,
              };
            },
            closeButton: function (e, t, n) {
              var r = (0, i.pxToNum)(t) - 140;
              return {
                MozTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                MsTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                OTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                WebkitTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                transform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(" + r + ", 0, 0)"
                    : "translate3d(-" + r + ", 0, 0)",
                transition: e
                  ? "opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)"
                  : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
                opacity: e ? 1 : 0,
              };
            },
          };
        (t.default = (0, o.default)(l)), (e.exports = t.default);
      },
      285: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(n(535)),
          o = r(n(370)),
          i = n(650),
          l = {
            svg: {
              lib: a.default,
              pathInitial:
                "M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",
              pathOpen: "M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",
              animate: function (e) {
                e.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
              },
            },
            morphShape: function (e, t, n) {
              return {
                position: "absolute",
                width: 120,
                height: "100%",
                right: n ? "inherit" : 0,
                left: n ? 0 : "inherit",
                MozTransform: n ? "rotateY(180deg)" : "",
                MsTransform: n ? "rotateY(180deg)" : "",
                OTransform: n ? "rotateY(180deg)" : "",
                WebkitTransform: n ? "rotateY(180deg)" : "",
                transform: n ? "rotateY(180deg)" : "",
              };
            },
            menuWrap: function (e, t, n) {
              return {
                MozTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                MsTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                OTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                WebkitTransform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                transform: e
                  ? "translate3d(0, 0, 0)"
                  : n
                    ? "translate3d(100%, 0, 0)"
                    : "translate3d(-100%, 0, 0)",
                transition: "all 0.3s",
              };
            },
            menu: function (e, t, n) {
              return {
                position: "fixed",
                right: n ? 0 : "inherit",
                width: (0, i.pxToNum)(t) - 120,
                whiteSpace: "nowrap",
                boxSizing: "border-box",
                overflow: "visible",
              };
            },
            itemList: function (e, t, n) {
              if (n)
                return {
                  position: "relative",
                  left: "-110px",
                  width: "170%",
                  overflow: "auto",
                };
            },
            pageWrap: function (e, t, n) {
              return {
                MozTransform: e
                  ? ""
                  : n
                    ? "translate3d(-100px, 0, 0)"
                    : "translate3d(100px, 0, 0)",
                MsTransform: e
                  ? ""
                  : n
                    ? "translate3d(-100px, 0, 0)"
                    : "translate3d(100px, 0, 0)",
                OTransform: e
                  ? ""
                  : n
                    ? "translate3d(-100px, 0, 0)"
                    : "translate3d(100px, 0, 0)",
                WebkitTransform: e
                  ? ""
                  : n
                    ? "translate3d(-100px, 0, 0)"
                    : "translate3d(100px, 0, 0)",
                transform: e
                  ? ""
                  : n
                    ? "translate3d(-100px, 0, 0)"
                    : "translate3d(100px, 0, 0)",
                transition: e ? "all 0.3s" : "all 0.3s 0.1s",
              };
            },
            outerContainer: function (e) {
              return { overflow: e ? "" : "hidden" };
            },
          };
        (t.default = (0, o.default)(l)), (e.exports = t.default);
      },
      117: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          menuWrap: function (e) {
            return {
              MozTransform: e ? "" : "translate3d(0, -100%, 0)",
              MsTransform: e ? "" : "translate3d(0, -100%, 0)",
              OTransform: e ? "" : "translate3d(0, -100%, 0)",
              WebkitTransform: e ? "" : "translate3d(0, -100%, 0)",
              transform: e ? "" : "translate3d(0, -100%, 0)",
              transition: "all 0.5s ease-in-out",
            };
          },
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              transform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              transition: "all 0.5s",
            };
          },
          outerContainer: function (e) {
            return {
              perspective: "1500px",
              perspectiveOrigin: "0% 50%",
              overflow: e ? "" : "hidden",
            };
          },
        })),
          (e.exports = t.default);
      },
      572: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              transform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              transition: "all 0.5s",
            };
          },
          outerContainer: function (e) {
            return { overflow: e ? "" : "hidden" };
          },
        })),
          (e.exports = t.default);
      },
      459: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
                  : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
                  : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
                  : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
                  : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
              transform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0) rotateY(15deg)"
                  : "translate3d(" + t + ", 0, 0) rotateY(-15deg)",
              transformOrigin: n ? "100% 50%" : "0% 50%",
              transformStyle: "preserve-3d",
              transition: "all 0.5s",
            };
          },
          outerContainer: function (e) {
            return { perspective: "1500px", overflow: e ? "" : "hidden" };
          },
        })),
          (e.exports = t.default);
      },
      233: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          menuWrap: function (e, t, n) {
            return {
              MozTransform: "translate3d(0, 0, 0)",
              MsTransform: "translate3d(0, 0, 0)",
              OTransform: "translate3d(0, 0, 0)",
              WebkitTransform: "translate3d(0, 0, 0)",
              transform: "translate3d(0, 0, 0)",
              zIndex: e ? 1e3 : -1,
            };
          },
          overlay: function (e, t, n) {
            return {
              zIndex: 1400,
              MozTransform: e
                ? n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              MsTransform: e
                ? n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              OTransform: e
                ? n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              WebkitTransform: e
                ? n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              transform: e
                ? n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              transition: "all 0.5s",
              visibility: e ? "visible" : "hidden",
            };
          },
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              transform: e
                ? ""
                : n
                  ? "translate3d(-" + t + ", 0, 0)"
                  : "translate3d(" + t + ", 0, 0)",
              transition: "all 0.5s",
              zIndex: 1200,
              position: "relative",
            };
          },
          burgerIcon: function (e, t, n) {
            return {
              MozTransform: e
                ? n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              MsTransform: e
                ? n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              OTransform: e
                ? n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              WebkitTransform: e
                ? n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              transform: e
                ? n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)"
                : "translate3d(0, 0, 0)",
              transition: "all 0.1s",
              position: "relative",
              zIndex: 1300,
            };
          },
          outerContainer: function (e) {
            return { overflow: e ? "" : "hidden" };
          },
        })),
          (e.exports = t.default);
      },
      428: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          pageWrap: function (e, t) {
            return {
              MozTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
              MsTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
              OTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
              WebkitTransform: e ? "" : "translate3d(0, 0, -" + t + ")",
              transform: e ? "" : "translate3d(0, 0, -" + t + ")",
              transformOrigin: "100%",
              transformStyle: "preserve-3d",
              transition: "all 0.5s",
            };
          },
          outerContainer: function () {
            return { perspective: "1500px" };
          },
        })),
          (e.exports = t.default);
      },
      991: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          pageWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
                  : "translate3d(100px, 0, -600px) rotateY(-20deg)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
                  : "translate3d(100px, 0, -600px) rotateY(-20deg)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
                  : "translate3d(100px, 0, -600px) rotateY(-20deg)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
                  : "translate3d(100px, 0, -600px) rotateY(-20deg)",
              transform: e
                ? ""
                : n
                  ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
                  : "translate3d(100px, 0, -600px) rotateY(-20deg)",
              transformStyle: "preserve-3d",
              transition: "all 0.5s",
              overflow: e ? "" : "hidden",
            };
          },
          outerContainer: function (e) {
            return { perspective: "1500px", overflow: e ? "" : "hidden" };
          },
        })),
          (e.exports = t.default);
      },
      147: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({})), (e.exports = t.default);
      },
      790: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          a = n(370),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.default = (0, o.default)({
          menuWrap: function (e, t, n) {
            return {
              MozTransform: e
                ? ""
                : n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)",
              MsTransform: e
                ? ""
                : n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)",
              OTransform: e
                ? ""
                : n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)",
              WebkitTransform: e
                ? ""
                : n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)",
              transform: e
                ? ""
                : n
                  ? "translate3d(" + t + ", 0, 0)"
                  : "translate3d(-" + t + ", 0, 0)",
              transition: e
                ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)"
                : "transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)",
            };
          },
          item: function (e, t, n, r) {
            return {
              MozTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
              MsTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
              OTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
              WebkitTransform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
              transform: e ? "" : "translate3d(0, " + 500 * r + "px, 0)",
              transition: e
                ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)"
                : "transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)",
            };
          },
        })),
          (e.exports = t.default);
      },
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          F = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
              ? e
              : null;
        }
        var j,
          L = Object.assign;
        function B(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var z = !1;
        function I(e, t) {
          if (!e || z) return "";
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case F:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = L(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Se) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Te() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Fe() {}
        var Ne = !1;
        function Pe(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (Ne = !1), (null !== ke || null !== Ee) && (Fe(), Te());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Me = !1;
          }
        function Ae(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Le = null,
          Be = !1,
          ze = null,
          Ie = {
            onError: function (e) {
              (je = !0), (Le = e);
            },
          };
        function Ue(e, t, n, r, a, o, i, l, s) {
          (je = !1), (Le = null), Ae.apply(Ie, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (He(e) !== e) throw Error(o(188));
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return We(a), e;
                    if (i === r) return We(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          St,
          kt,
          Et,
          Ct,
          _t = !1,
          Tt = [],
          Ot = null,
          Ft = null,
          Nt = null,
          Pt = new Map(),
          Rt = new Map(),
          Mt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              Ft = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Lt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function It() {
          (_t = !1),
            null !== Ot && Bt(Ot) && (Ot = null),
            null !== Ft && Bt(Ft) && (Ft = null),
            null !== Nt && Bt(Nt) && (Nt = null),
            Pt.forEach(zt),
            Rt.forEach(zt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function Ht(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Tt.length) {
            Ut(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Ut(Ot, e),
              null !== Ft && Ut(Ft, e),
              null !== Nt && Ut(Nt, e),
              Pt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Lt(n), null === n.blockedOn && Mt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Wt = !0;
        function qt(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function $t(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function Yt(e, t, n, r) {
          if (Wt) {
            var a = Gt(e, t, n, r);
            if (null === a) Wr(e, t, r, Qt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ot = jt(Ot, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ft = jt(Ft, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Nt = jt(Nt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Pt.set(o, jt(Pt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Rt.set(o, jt(Rt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Gt(e, t, n, r)) && Wr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Gt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            L(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = L({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = L({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(L({}, pn, { dataTransfer: 0 })),
          gn = an(L({}, fn, { relatedTarget: 0 })),
          vn = an(
            L({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = L({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(L({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var _n = L({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? Sn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Tn = an(_n),
          On = an(
            L({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Fn = an(
            L({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          Nn = an(
            L({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Pn = L({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Pn),
          Mn = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var jn = c && "TextEvent" in window && !An,
          Ln = c && (!Dn || (An && 8 < An && 11 >= An)),
          Bn = String.fromCharCode(32),
          zn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          _e(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Yn = null;
        function Qn(e) {
          Br(e, 0);
        }
        function Gn(e) {
          if (Y(wa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Yn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Yn)) {
            var t = [];
            qn(t, Yn, e, xe(e)), Pe(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Yn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = $r(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Cr(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var _r = Cr("animationend"),
          Tr = Cr("animationiteration"),
          Or = Cr("animationstart"),
          Fr = Cr("transitionend"),
          Nr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Rr(e, t) {
          Nr.set(e, t), s(t, [e]);
        }
        for (var Mr = 0; Mr < Pr.length; Mr++) {
          var Dr = Pr[Mr];
          Rr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Rr(_r, "onAnimationEnd"),
          Rr(Tr, "onAnimationIteration"),
          Rr(Or, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Fr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar),
          );
        function Lr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((Ue.apply(this, arguments), je)) {
                if (!je) throw Error(o(198));
                var c = Le;
                (je = !1), (Le = null), Be || ((Be = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Lr(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Lr(a, l, u), (o = s);
                }
            }
          }
          if (Be) throw ((e = ze), (Be = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (jr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = qt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var l = Nr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Fn;
                    break;
                  case _r:
                  case Tr:
                  case Or:
                    s = vn;
                    break;
                  case Fr:
                    s = Nn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = On;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Re(h, d)) &&
                        c.push(qr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (f = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : wa(s)),
                  (p = null == u ? l : wa(u)),
                  ((l = new c(m, h + "leave", s, n, a)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Yr(p)) h++;
                    for (p = 0, m = d; m; m = Yr(m)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (d = Yr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Yr(c)), (d = Yr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(i, l, s, c, !1),
                  null !== u && null !== f && Qr(i, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Kn;
              else if (Wn(l))
                if (Xn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? qn(i, g, n, a)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ln &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Hn = !0))),
                0 < (v = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zn = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Dn && In(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ln && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Br(i, t);
          });
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift(qr(e, o, a)),
              null != (o = Re(e, t)) && r.push(qr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Re(n, o)) && i.unshift(qr(n, s, l))
                : a || (null != (s = Re(n, o)) && i.push(qr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Kr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(la);
                  }
                : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          va = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > ka || ((e.current = Sa[ka]), (Sa[ka] = null), ka--);
        }
        function _a(e, t) {
          ka++, (Sa[ka] = e.current), (e.current = t);
        }
        var Ta = {},
          Oa = Ea(Ta),
          Fa = Ea(!1),
          Na = Ta;
        function Pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ma() {
          Ca(Fa), Ca(Oa);
        }
        function Da(e, t, n) {
          if (Oa.current !== Ta) throw Error(o(168));
          _a(Oa, t), _a(Fa, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
          return L({}, n, r);
        }
        function ja(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Na = Oa.current),
            _a(Oa, e),
            _a(Fa, Fa.current),
            !0
          );
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Aa(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Fa),
              Ca(Oa),
              _a(Oa, e))
            : Ca(Fa),
            _a(Fa, n);
        }
        var Ba = null,
          za = !1,
          Ia = !1;
        function Ua(e) {
          null === Ba ? (Ba = [e]) : Ba.push(e);
        }
        function Ha() {
          if (!Ia && null !== Ba) {
            Ia = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ba;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ba = null), (za = !1);
            } catch (a) {
              throw (null !== Ba && (Ba = Ba.slice(e + 1)), Ye(Ze, Ha), a);
            } finally {
              (bt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          qa = null,
          $a = 0,
          Ya = [],
          Qa = 0,
          Ga = null,
          Ka = 1,
          Xa = "";
        function Ja(e, t) {
          (Va[Wa++] = $a), (Va[Wa++] = qa), (qa = e), ($a = t);
        }
        function Za(e, t, n) {
          (Ya[Qa++] = Ka), (Ya[Qa++] = Xa), (Ya[Qa++] = Ga), (Ga = e);
          var r = Ka;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ka = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ka = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === qa; )
            (qa = Va[--Wa]), (Va[Wa] = null), ($a = Va[--Wa]), (Va[Wa] = null);
          for (; e === Ga; )
            (Ga = Ya[--Qa]),
              (Ya[Qa] = null),
              (Xa = Ya[--Qa]),
              (Ya[Qa] = null),
              (Ka = Ya[--Qa]),
              (Ya[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Pu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ka, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function yo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function bo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Lu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === R &&
                      bo(o) === t.type))
                ? (((r = a(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
                : (((r = Du(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Lu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Du(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              yo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : f(e, t, n, r, null);
              yo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              yo(t, r);
            }
            return null;
          }
          function m(a, o, l, s) {
            for (
              var u = null, c = null, f = o, m = (o = 0), g = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(a, f, l[m], s);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(a, f),
                (o = i(v, o, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (f = g);
            }
            if (m === l.length) return n(a, f), ao && Ja(a, m), u;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(a, l[m], s)) &&
                  ((o = i(f, o, m)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ao && Ja(a, m), u;
            }
            for (f = r(a, f); m < l.length; m++)
              null !== (g = h(f, a, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (o = i(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              u
            );
          }
          function g(a, l, s, u) {
            var c = A(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var f = (c = null), m = l, g = (l = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = i(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = v);
            }
            if (y.done) return n(a, m), ao && Ja(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = d(a, y.value, u)) &&
                  ((l = i(y, l, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ao && Ja(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, g),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            bo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = vo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((o = Au(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Du(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = vo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case S:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Bu(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case R:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, o, i, s);
              if (A(i)) return g(r, o, i, s);
              yo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Lu(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var xo = wo(!0),
          So = wo(!1),
          ko = Ea(null),
          Eo = null,
          Co = null,
          _o = null;
        function To() {
          _o = Co = Eo = null;
        }
        function Oo(e) {
          var t = ko.current;
          Ca(ko), (e._currentValue = t);
        }
        function Fo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function No(e, t) {
          (Eo = e),
            (_o = Co = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bl = !0), (e.firstContext = null));
        }
        function Po(e) {
          var t = e._currentValue;
          if (_o !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Co)
            ) {
              if (null === Eo) throw Error(o(308));
              (Co = e), (Eo.dependencies = { lanes: 0, firstContext: e });
            } else Co = Co.next = e;
          return t;
        }
        var Ro = null;
        function Mo(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function Do(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Mo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ao(e, r)
          );
        }
        function Ao(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var jo = !1;
        function Lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Bo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Io(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Os))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ao(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Mo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ao(e, n)
          );
        }
        function Uo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ho(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vo(e, t, n, r) {
          var a = e.updateQueue;
          jo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = L({}, f, d);
                      break e;
                    case 2:
                      jo = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (js |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Wo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var qo = {},
          $o = Ea(qo),
          Yo = Ea(qo),
          Qo = Ea(qo);
        function Go(e) {
          if (e === qo) throw Error(o(174));
          return e;
        }
        function Ko(e, t) {
          switch ((_a(Qo, t), _a(Yo, e), _a($o, qo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Ca($o), _a($o, t);
        }
        function Xo() {
          Ca($o), Ca(Yo), Ca(Qo);
        }
        function Jo(e) {
          Go(Qo.current);
          var t = Go($o.current),
            n = se(t, e.type);
          t !== n && (_a(Yo, e), _a($o, n));
        }
        function Zo(e) {
          Yo.current === e && (Ca($o), Ca(Yo));
        }
        var ei = Ea(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var ai = w.ReactCurrentDispatcher,
          oi = w.ReactCurrentBatchConfig,
          ii = 0,
          li = null,
          si = null,
          ui = null,
          ci = !1,
          fi = !1,
          di = 0,
          pi = 0;
        function hi() {
          throw Error(o(321));
        }
        function mi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, a, i) {
          if (
            ((ii = i),
            (li = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? Zi : el),
            (e = n(r, a)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (di = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (ui = si = null),
                (t.updateQueue = null),
                (ai.current = tl),
                (e = n(r, a));
            } while (fi);
          }
          if (
            ((ai.current = Ji),
            (t = null !== si && null !== si.next),
            (ii = 0),
            (ui = si = li = null),
            (ci = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function vi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function yi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ui ? (li.memoizedState = ui = e) : (ui = ui.next = e), ui
          );
        }
        function bi() {
          if (null === si) {
            var e = li.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = si.next;
          var t = null === ui ? li.memoizedState : ui.next;
          if (null !== t) (ui = t), (si = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (si = e).memoizedState,
              baseState: si.baseState,
              baseQueue: si.baseQueue,
              queue: si.queue,
              next: null,
            }),
              null === ui ? (li.memoizedState = ui = e) : (ui = ui.next = e);
          }
          return ui;
        }
        function wi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xi(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = si,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var f = c.lane;
              if ((ii & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (li.lanes |= f),
                  (js |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (li.lanes |= i), (js |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Si(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (bl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ki() {}
        function Ei(e, t) {
          var n = li,
            r = bi(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bl = !0)),
            (r = r.queue),
            ji(Ti.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ui && 1 & ui.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Pi(9, _i.bind(null, n, r, a, t), void 0, null),
              null === Fs)
            )
              throw Error(o(349));
            0 !== (30 & ii) || Ci(n, t, a);
          }
          return a;
        }
        function Ci(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function _i(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Oi(t) && Fi(e);
        }
        function Ti(e, t, n) {
          return n(function () {
            Oi(t) && Fi(e);
          });
        }
        function Oi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = Ao(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Ni(e) {
          var t = yi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Qi.bind(null, li, e)),
            [t.memoizedState, e]
          );
        }
        function Pi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Ri() {
          return bi().memoizedState;
        }
        function Mi(e, t, n, r) {
          var a = yi();
          (li.flags |= e),
            (a.memoizedState = Pi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Di(e, t, n, r) {
          var a = bi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== si) {
            var i = si.memoizedState;
            if (((o = i.destroy), null !== r && mi(r, i.deps)))
              return void (a.memoizedState = Pi(t, n, o, r));
          }
          (li.flags |= e), (a.memoizedState = Pi(1 | t, n, o, r));
        }
        function Ai(e, t) {
          return Mi(8390656, 8, e, t);
        }
        function ji(e, t) {
          return Di(2048, 8, e, t);
        }
        function Li(e, t) {
          return Di(4, 2, e, t);
        }
        function Bi(e, t) {
          return Di(4, 4, e, t);
        }
        function zi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Ii(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Di(4, 4, zi.bind(null, t, e), n)
          );
        }
        function Ui() {}
        function Hi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (bl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (li.lanes |= n), (js |= n), (e.baseState = !0)),
              t);
        }
        function qi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = oi.transition;
          oi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (oi.transition = r);
          }
        }
        function $i() {
          return bi().memoizedState;
        }
        function Yi(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Gi(e))
          )
            Ki(t, n);
          else if (null !== (n = Do(e, t, n, r))) {
            nu(n, e, r, eu()), Xi(n, t, r);
          }
        }
        function Qi(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Gi(e)) Ki(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Mo(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Do(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Xi(n, t, r));
          }
        }
        function Gi(e) {
          var t = e.alternate;
          return e === li || (null !== t && t === li);
        }
        function Ki(e, t) {
          fi = ci = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Ji = {
            readContext: Po,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Po,
            useCallback: function (e, t) {
              return (yi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Po,
            useEffect: Ai,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Mi(4194308, 4, zi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Mi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Mi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Yi.bind(null, li, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yi().memoizedState = e);
            },
            useState: Ni,
            useDebugValue: Ui,
            useDeferredValue: function (e) {
              return (yi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ni(!1),
                t = e[0];
              return (
                (e = qi.bind(null, e[1])), (yi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = li,
                a = yi();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Fs)) throw Error(o(349));
                0 !== (30 & ii) || Ci(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ai(Ti.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Pi(9, _i.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yi(),
                t = Fs.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - it(Ka) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Po,
            useCallback: Hi,
            useContext: Po,
            useEffect: ji,
            useImperativeHandle: Ii,
            useInsertionEffect: Li,
            useLayoutEffect: Bi,
            useMemo: Vi,
            useReducer: xi,
            useRef: Ri,
            useState: function () {
              return xi(wi);
            },
            useDebugValue: Ui,
            useDeferredValue: function (e) {
              return Wi(bi(), si.memoizedState, e);
            },
            useTransition: function () {
              return [xi(wi)[0], bi().memoizedState];
            },
            useMutableSource: ki,
            useSyncExternalStore: Ei,
            useId: $i,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Po,
            useCallback: Hi,
            useContext: Po,
            useEffect: ji,
            useImperativeHandle: Ii,
            useInsertionEffect: Li,
            useLayoutEffect: Bi,
            useMemo: Vi,
            useReducer: Si,
            useRef: Ri,
            useState: function () {
              return Si(wi);
            },
            useDebugValue: Ui,
            useDeferredValue: function (e) {
              var t = bi();
              return null === si
                ? (t.memoizedState = e)
                : Wi(t, si.memoizedState, e);
            },
            useTransition: function () {
              return [Si(wi)[0], bi().memoizedState];
            },
            useMutableSource: ki,
            useSyncExternalStore: Ei,
            useId: $i,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = L({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : L({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = zo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Io(e, o, a)) && (nu(t, e, a, r), Uo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = zo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Io(e, o, a)) && (nu(t, e, a, r), Uo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = zo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Io(e, a, r)) && (nu(t, e, r, n), Uo(t, e, r));
          },
        };
        function ol(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function il(e, t, n) {
          var r = !1,
            a = Ta,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Po(o))
              : ((a = Ra(t) ? Na : Oa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : Ta)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Po(o))
            : ((o = Ra(t) ? Na : Oa.current), (a.context = Pa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (rl(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && al.enqueueReplaceState(a, a.state, null),
              Vo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function cl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = zo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (qs = r)), fl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = zo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zo(-1, 1)).tag = 2), Io(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yl = w.ReactCurrentOwner,
          bl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : xo(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            No(t, a),
            (r = gi(e, t, n, r, o, a)),
            (n = vi()),
            null === e || bl
              ? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wl(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ru(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Du(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), kl(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Wl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wl(e, t, a);
              0 !== (131072 & e.flags) && (bl = !0);
            }
          }
          return _l(e, t, n, r, a);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _a(Ms, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _a(Ms, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                _a(Ms, Rs),
                (Rs |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _a(Ms, Rs),
              (Rs |= r);
          return wl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, a) {
          var o = Ra(n) ? Na : Oa.current;
          return (
            (o = Pa(t, o)),
            No(t, a),
            (n = gi(e, t, n, r, o, a)),
            (r = vi()),
            null === e || bl
              ? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wl(e, t, a))
          );
        }
        function Tl(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            ja(t);
          } else o = !1;
          if ((No(t, a), null === t.stateNode))
            Vl(e, t), il(t, n, r), sl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Po(u))
              : (u = Pa(t, (u = Ra(n) ? Na : Oa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && ll(t, i, r, u)),
              (jo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Vo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || d !== s || Fa.current || jo
                ? ("function" === typeof c &&
                    (rl(t, n, c, r), (s = t.memoizedState)),
                  (l = jo || ol(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Bo(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : nl(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Po(s))
                : (s = Pa(t, (s = Ra(n) ? Na : Oa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && ll(t, i, r, s)),
              (jo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Vo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Fa.current || jo
              ? ("function" === typeof p &&
                  (rl(t, n, p, r), (h = t.memoizedState)),
                (u = jo || ol(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ol(e, t, n, r, o, a);
        }
        function Ol(e, t, n, r, a, o) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && La(t, n, !1), Wl(e, t, o);
          (r = t.stateNode), (yl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, l, o)))
              : wl(e, t, l, o),
            (t.memoizedState = r.state),
            a && La(t, n, !0),
            t.child
          );
        }
        function Fl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            Ko(e, t.containerInfo);
        }
        function Nl(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Pl,
          Rl,
          Ml,
          Dl,
          Al = { dehydrated: null, treeContext: null, retryLane: 0 };
        function jl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ll(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ei.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            _a(ei, 1 & i),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = ju(s, a, 0, null)),
                      (e = Au(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = jl(n)),
                      (t.memoizedState = Al),
                      e)
                    : Bl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zl(e, t, l, (r = cl(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (a = t.mode),
                      (r = ju(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((i = Au(i, a, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && xo(t, e.child, null, l),
                      (t.child.memoizedState = jl(l)),
                      (t.memoizedState = Al),
                      i);
              if (0 === (1 & t.mode)) return zl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), zl(e, t, l, (r = cl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), bl || s)) {
                if (null !== (r = Fs)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ao(e, a), nu(r, e, a, -1));
                }
                return mu(), zl(e, t, l, (r = cl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ya[Qa++] = Ka),
                    (Ya[Qa++] = Xa),
                    (Ya[Qa++] = Ga),
                    (Ka = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = Bl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Mu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Mu(r, l))
                : ((l = Au(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? jl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Al),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Mu(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Bl(e, t) {
          return (
            ((t = ju(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function zl(e, t, n, r) {
          return (
            null !== r && mo(r),
            xo(t, e.child, null, n),
            ((e = Bl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Il(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Fo(e.return, t, n);
        }
        function Ul(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = ei.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Il(e, n, t);
                else if (19 === e.tag) Il(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_a(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ul(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ti(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ul(t, !0, n, null, o);
                break;
              case "together":
                Ul(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (js |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ql(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $l(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $l(t), null;
            case 1:
            case 17:
              return Ra(t.type) && Ma(), $l(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xo(),
                Ca(Fa),
                Ca(Oa),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (iu(oo), (oo = null)))),
                Rl(e, t),
                $l(t),
                null
              );
            case 5:
              Zo(t);
              var a = Go(Qo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ml(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return $l(t), null;
                }
                if (((e = Go($o.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      zr("cancel", r), zr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      zr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) zr(Ar[a], r);
                      break;
                    case "source":
                      zr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      zr("error", r), zr("load", r);
                      break;
                    case "details":
                      zr("toggle", r);
                      break;
                    case "input":
                      K(r, i), zr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        zr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), zr("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          zr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Pl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        zr("cancel", e), zr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) zr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        zr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        zr("error", e), zr("load", e), (a = r);
                        break;
                      case "details":
                        zr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = G(e, r)), zr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = L({}, r, { value: void 0 })),
                          zr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), zr("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : "children" === i
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && de(e, c)
                                : "number" === typeof c && de(e, "" + c)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c &&
                                    "onScroll" === i &&
                                    zr("scroll", e)
                                  : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $l(t), null;
            case 6:
              if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Go(Qo.current)), Go($o.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return $l(t), null;
            case 13:
              if (
                (Ca(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $l(t), (i = !1);
                } else null !== oo && (iu(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current)
                        ? 0 === Ds && (Ds = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $l(t),
                  null);
            case 4:
              return (
                Xo(),
                Rl(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                $l(t),
                null
              );
            case 10:
              return Oo(t.type._context), $l(t), null;
            case 19:
              if ((Ca(ei), null === (i = t.memoizedState))) return $l(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) ql(i, !1);
                else {
                  if (0 !== Ds || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ti(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return _a(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Hs &&
                    ((t.flags |= 128),
                    (r = !0),
                    ql(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      ql(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return $l(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      ql(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ei.current),
                  _a(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($l(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) &&
                    ($l(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $l(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ql(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xo(),
                Ca(Fa),
                Ca(Oa),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (Ca(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ei), null;
            case 4:
              return Xo(), null;
            case 10:
              return Oo(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Pl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Rl = function () {}),
          (Ml = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Go($o.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = L({}, a, { value: void 0 })),
                    (r = L({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                        ? ("string" !== typeof u && "number" !== typeof u) ||
                          (i = i || []).push(c, "" + u)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != u && "onScroll" === c && zr("scroll", e),
                              i || s === u || (i = []))
                            : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Dl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gl = !1,
          Kl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Kl || Zl(n, t);
            case 6:
              var r = cs,
                a = fs;
              (cs = null),
                ds(e, t, n),
                (fs = a),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ht(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (Zl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Kl = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(i, l, a), (cs = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Zl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                          ? fe(a, d)
                          : "children" === f
                            ? de(a, d)
                            : b(a, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Xe())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (c = Kl) || f), ms(t, e), (Kl = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : xs(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    us(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, ls(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Gl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Kl;
                l = Gl;
                var u = Kl;
                if (((Gl = i), (Kl = s) && !u))
                  for (Jl = a; null !== Jl; )
                    (s = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ss(a)
                        : null !== s
                          ? ((s.return = i), (Jl = s))
                          : Ss(a);
                for (; null !== o; ) (Jl = o), bs(o, t, n), (o = o.sibling);
                (Jl = a), (Gl = l), (Kl = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Jl = o))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Wo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ht(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Kl || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var ks,
          Es = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          _s = w.ReactCurrentOwner,
          Ts = w.ReactCurrentBatchConfig,
          Os = 0,
          Fs = null,
          Ns = null,
          Ps = 0,
          Rs = 0,
          Ms = Ea(0),
          Ds = 0,
          As = null,
          js = 0,
          Ls = 0,
          Bs = 0,
          zs = null,
          Is = null,
          Us = 0,
          Hs = 1 / 0,
          Vs = null,
          Ws = !1,
          qs = null,
          $s = null,
          Ys = !1,
          Qs = null,
          Gs = 0,
          Ks = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & Os) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Os) && 0 !== Ps
              ? Ps & -Ps
              : null !== go.transition
                ? (0 === Zs && (Zs = mt()), Zs)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Xs = null), Error(o(185)));
          vt(e, n, r),
            (0 !== (2 & Os) && e === Fs) ||
              (e === Fs && (0 === (2 & Os) && (Ls |= n), 4 === Ds && lu(e, Ps)),
              ru(e, r),
              1 === n &&
                0 === Os &&
                0 === (1 & t.mode) &&
                ((Hs = Xe() + 500), za && Ha()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Fs ? Ps : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (za = !0), Ua(e);
                  })(su.bind(null, e))
                : Ua(su.bind(null, e)),
                ia(function () {
                  0 === (6 & Os) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Fu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & Os))) throw Error(o(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = dt(e, e === Fs ? Ps : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Os;
            Os |= 2;
            var i = hu();
            for (
              (Fs === e && Ps === t) ||
              ((Vs = null), (Hs = Xe() + 500), du(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            To(),
              (Cs.current = i),
              (Os = a),
              null !== Ns ? (t = 0) : ((Fs = null), (Ps = 0), (t = Ds));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = As), du(e, 0), lu(e, r), ru(e, Xe()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = ou(e, i))),
                  1 === t))
              )
                throw ((n = As), du(e, 0), lu(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xu(e, Is, Vs);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, Is, Vs), t);
                    break;
                  }
                  xu(e, Is, Vs);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, Is, Vs), r);
                    break;
                  }
                  xu(e, Is, Vs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = zs;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Is), (Is = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Is ? (Is = e) : Is.push.apply(Is, e);
        }
        function lu(e, t) {
          for (
            t &= ~Bs,
              t &= ~Ls,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Os)) throw Error(o(327));
          Su();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = As), du(e, 0), lu(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, Is, Vs),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Os;
          Os |= 1;
          try {
            return e(t);
          } finally {
            0 === (Os = n) && ((Hs = Xe() + 500), za && Ha());
          }
        }
        function cu(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & Os) && Su();
          var t = Os;
          Os |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (Os = t)) && Ha();
          }
        }
        function fu() {
          (Rs = Ms.current), Ca(Ms);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ma();
                  break;
                case 3:
                  Xo(), Ca(Fa), Ca(Oa), ri();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Ca(ei);
                  break;
                case 10:
                  Oo(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Fs = e),
            (Ns = e = Mu(e.current, null)),
            (Ps = Rs = t),
            (Ds = 0),
            (As = null),
            (Bs = Ls = js = 0),
            (Is = zs = null),
            null !== Ro)
          ) {
            for (t = 0; t < Ro.length; t++)
              if (null !== (r = (n = Ro[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Ro = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ns;
            try {
              if ((To(), (ai.current = Ji), ci)) {
                for (var r = li.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ci = !1;
              }
              if (
                ((ii = 0),
                (ui = si = li = null),
                (fi = !1),
                (di = 0),
                (_s.current = null),
                null === n || null === n.return)
              ) {
                (Ds = 1), (As = t), (Ns = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ps),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && ml(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), mu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var v = gl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vl(v, l, s, 0, t),
                      mo(ul(u, s));
                    break e;
                  }
                }
                (i = u = ul(u, s)),
                  4 !== Ds && (Ds = 2),
                  null === zs ? (zs = [i]) : zs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ho(i, pl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $s || !$s.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ho(i, hl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (w) {
              (t = w), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = Ji), null === e ? Ji : e;
        }
        function mu() {
          (0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
            null === Fs ||
              (0 === (268435455 & js) && 0 === (268435455 & Ls)) ||
              lu(Fs, Ps);
        }
        function gu(e, t) {
          var n = Os;
          Os |= 2;
          var r = hu();
          for ((Fs === e && Ps === t) || ((Vs = null), du(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((To(), (Os = n), (Cs.current = r), null !== Ns))
            throw Error(o(261));
          return (Fs = null), (Ps = 0), Ds;
        }
        function vu() {
          for (; null !== Ns; ) bu(Ns);
        }
        function yu() {
          for (; null !== Ns && !Ge(); ) bu(Ns);
        }
        function bu(e) {
          var t = ks(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ns = t),
            (_s.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, Rs))) return void (Ns = n);
            } else {
              if (null !== (n = Ql(n, t)))
                return (n.flags &= 32767), void (Ns = n);
              if (null === e) return (Ds = 6), void (Ns = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === Ds && (Ds = 5);
        }
        function xu(e, t, n) {
          var r = bt,
            a = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Qs);
                if (0 !== (6 & Os)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Fs && ((Ns = Fs = null), (Ps = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Fu(tt, function () {
                      return Su(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ts.transition), (Ts.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Os;
                  (Os |= 4),
                    (_s.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : nl(t.type, g),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Eu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ke(),
                    (Os = s),
                    (bt = l),
                    (Ts.transition = i);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (Qs = e), (Gs = a)),
                  (i = e.pendingLanes),
                  0 === i && ($s = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ws) throw ((Ws = !1), (e = qs), (qs = null), e);
                0 !== (1 & Gs) && 0 !== e.tag && Su(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xs
                      ? Ks++
                      : ((Ks = 0), (Xs = e))
                    : (Ks = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (Ts.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Qs) {
            var e = wt(Gs),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Qs))
                var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Gs = 0), 0 !== (6 & Os)))
                  throw Error(o(331));
                var a = Os;
                for (Os |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((os(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jl = y);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (S) {
                          Eu(s, s.return, S);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Jl = x);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (
                  ((Os = a),
                  Ha(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          (e = Io(e, (t = pl(0, (t = ul(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $s || !$s.has(r)))
                ) {
                  (t = Io(t, (e = hl(t, (e = ul(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Fs === e &&
              (Ps & n) === n &&
              (4 === Ds ||
              (3 === Ds && (130023424 & Ps) === Ps && 500 > Xe() - Us)
                ? du(e, 0)
                : (Bs |= n)),
            ru(e, t);
        }
        function _u(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ao(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _u(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), _u(e, n);
        }
        function Fu(e, t) {
          return Ye(e, t);
        }
        function Nu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pu(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Du(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ru(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Au(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Pu(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case F:
                return (
                  ((e = Pu(13, n, t, a)).elementType = F), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = Pu(19, n, t, a)).elementType = N), (e.lanes = i), e
                );
              case M:
                return ju(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      l = 10;
                      break e;
                    case T:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case P:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = Pu(7, e, r, t)).lanes = n), e;
        }
        function ju(e, t, n, r) {
          return (
            ((e = Pu(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Lu(e, t, n) {
          return ((e = Pu(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = Pu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function zu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Iu(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new zu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Pu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Lo(o),
            e
          );
        }
        function Uu(e) {
          if (!e) return Ta;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return Aa(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Iu(n, r, !0, e, 0, o, 0, l, s)).context = Uu(null)),
            (n = e.current),
            ((o = zo((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Io(n, o, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            i = tu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Io(a, t, i)) && (nu(e, a, i, o), Uo(e, a, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Fa.current) bl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Fl(t), ho();
                        break;
                      case 5:
                        Jo(t);
                        break;
                      case 1:
                        Ra(t.type) && ja(t);
                        break;
                      case 4:
                        Ko(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        _a(ko, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ll(e, t, n)
                              : (_a(ei, 1 & ei.current),
                                null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        _a(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              bl = 0 !== (131072 & e.flags);
            }
          else (bl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vl(e, t), (e = t.pendingProps);
              var a = Pa(t, Oa.current);
              No(t, n), (a = gi(null, t, r, e, a, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((i = !0), ja(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Lo(t),
                    (a.updater = al),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    sl(t, r, e, n),
                    (t = Ol(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  a)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _l(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 3:
              e: {
                if ((Fl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Bo(e, t),
                  Vo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Nl(e, t, r, n, (a = ul(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Nl(e, t, r, n, (a = ul(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = So(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Jo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Ll(e, t, n);
            case 4:
              return (
                Ko(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  _a(ko, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Fa.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = zo(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Fo(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Fo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                No(t, n),
                (r = r((a = Po(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = nl((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = nl(r.type, a)), n)
              );
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : nl(r, a)),
                Vl(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), ja(t)) : (e = !1),
                No(t, n),
                il(t, r, a),
                sl(t, r, a, n),
                Ol(null, t, r, !0, e, n)
              );
            case 19:
              return Hl(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Yu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function Zu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Wu(i);
                l.call(e);
              };
            }
            Vu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Wu(i);
                    o.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Wu(s);
                  l.call(e);
                };
              }
              var s = Iu(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Vu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Wu(i);
        }
        (Gu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Vu(e, t, null, null);
          }),
          (Gu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Vu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Gu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Lt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & Os) && ((Hs = Xe() + 500), Ha()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ao(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Ao(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ao(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      Y(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = uu),
          (Fe = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, _e, Te, uu],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (ot = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Yu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Iu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Yu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: k.current,
          };
        }
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function O(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function F(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + O(s, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  F(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(T, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + O((l = e[u]), u);
              s += F(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += F((l = l.value), t, a, (c = o + O(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            F(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          M = { transition: null },
          D = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: k,
          };
        function A() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.act = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = A),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), M(S);
            else {
              var t = r(c);
              null !== t && D(x, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), g && ((g = !1), y(_), (_ = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !F()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && a(u),
                  w(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && D(x, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          C = null,
          _ = -1,
          T = 5,
          O = -1;
        function F() {
          return !(t.unstable_now() - O < T);
        }
        function N() {
          if (null !== C) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? k() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            R = P.port2;
          (P.port1.onmessage = N),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            v(N, 0);
          };
        function M(e) {
          (C = e), E || ((E = !0), k());
        }
        function D(e, n) {
          _ = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), M(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(_), (_ = -1)) : (g = !0), D(x, o - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), M(S))),
              e
            );
          }),
          (t.unstable_shouldYield = F),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
      775: function (e, t, n) {
        window.eve = n(524);
        var r = (function (e) {
            var t,
              n = {},
              r =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (e) {
                  return setTimeout(e, 16, new Date().getTime()), !0;
                },
              a =
                Array.isArray ||
                function (e) {
                  return (
                    e instanceof Array ||
                    "[object Array]" == Object.prototype.toString.call(e)
                  );
                },
              o = 0,
              i = "M" + (+new Date()).toString(36),
              l =
                Date.now ||
                function () {
                  return +new Date();
                },
              s = function (e) {
                var t = this;
                if (null == e) return t.s;
                var n = t.s - e;
                (t.b += t.dur * n), (t.B += t.dur * n), (t.s = e);
              },
              u = function (e) {
                if (null == e) return this.spd;
                this.spd = e;
              },
              c = function (e) {
                var t = this;
                if (null == e) return t.dur;
                (t.s = (t.s * e) / t.dur), (t.dur = e);
              },
              f = function () {
                var t = this;
                delete n[t.id], t.update(), e("mina.stop." + t.id, t);
              },
              d = function () {
                var e = this;
                e.pdif ||
                  (delete n[e.id], e.update(), (e.pdif = e.get() - e.b));
              },
              p = function () {
                var e = this;
                e.pdif &&
                  ((e.b = e.get() - e.pdif), delete e.pdif, (n[e.id] = e), m());
              },
              h = function () {
                var e,
                  t = this;
                if (a(t.start)) {
                  e = [];
                  for (var n = 0, r = t.start.length; n < r; n++)
                    e[n] =
                      +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s);
                } else e = +t.start + (t.end - t.start) * t.easing(t.s);
                t.set(e);
              },
              m = function (a) {
                if (a) {
                  var o = 0;
                  for (var i in n)
                    if (n.hasOwnProperty(i)) {
                      var l = n[i],
                        s = l.get();
                      o++,
                        (l.s = (s - l.b) / (l.dur / l.spd)),
                        l.s >= 1 &&
                          (delete n[i],
                          (l.s = 1),
                          o--,
                          (function (t) {
                            setTimeout(function () {
                              e("mina.finish." + t.id, t);
                            });
                          })(l)),
                        l.update();
                    }
                  t = !!o && r(m);
                } else t || (t = r(m));
              },
              g = function (e, t, r, a, l, v, y) {
                var b = {
                  id: i + (o++).toString(36),
                  start: e,
                  end: t,
                  b: r,
                  s: 0,
                  dur: a - r,
                  spd: 1,
                  get: l,
                  set: v,
                  easing: y || g.linear,
                  status: s,
                  speed: u,
                  duration: c,
                  stop: f,
                  pause: d,
                  resume: p,
                  update: h,
                };
                n[b.id] = b;
                var w,
                  x = 0;
                for (w in n) if (n.hasOwnProperty(w) && 2 == ++x) break;
                return 1 == x && m(), b;
              };
            return (
              (g.time = l),
              (g.getById = function (e) {
                return n[e] || null;
              }),
              (g.linear = function (e) {
                return e;
              }),
              (g.easeout = function (e) {
                return Math.pow(e, 1.7);
              }),
              (g.easein = function (e) {
                return Math.pow(e, 0.48);
              }),
              (g.easeinout = function (e) {
                if (1 == e) return 1;
                if (0 == e) return 0;
                var t = 0.48 - e / 1.04,
                  n = Math.sqrt(0.1734 + t * t),
                  r = n - t,
                  a = -n - t,
                  o =
                    Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) +
                    Math.pow(Math.abs(a), 1 / 3) * (a < 0 ? -1 : 1) +
                    0.5;
                return 3 * (1 - o) * o * o + o * o * o;
              }),
              (g.backin = function (e) {
                if (1 == e) return 1;
                var t = 1.70158;
                return e * e * ((t + 1) * e - t);
              }),
              (g.backout = function (e) {
                if (0 == e) return 0;
                var t = 1.70158;
                return (e -= 1) * e * ((t + 1) * e + t) + 1;
              }),
              (g.elastic = function (e) {
                return e == !!e
                  ? e
                  : Math.pow(2, -10 * e) *
                      Math.sin(((e - 0.075) * (2 * Math.PI)) / 0.3) +
                      1;
              }),
              (g.bounce = function (e) {
                var t = 7.5625,
                  n = 2.75;
                return e < 1 / n
                  ? t * e * e
                  : e < 2 / n
                    ? t * (e -= 1.5 / n) * e + 0.75
                    : e < 2.5 / n
                      ? t * (e -= 2.25 / n) * e + 0.9375
                      : t * (e -= 2.625 / n) * e + 0.984375;
              }),
              (window.mina = g),
              g
            );
          })("undefined" == typeof eve ? function () {} : eve),
          a = (function (e) {
            function t(e, r) {
              if (e) {
                if (e.nodeType) return V(e);
                if (T(e, "array") && t.set) return t.set.apply(t, e);
                if (e instanceof z) return e;
                if (null == r)
                  try {
                    return V((e = n.doc.querySelector(String(e))));
                  } catch (a) {
                    return null;
                  }
              }
              return new H(
                (e = null == e ? "100%" : e),
                (r = null == r ? "100%" : r),
              );
            }
            (t.version = "0.5.1"),
              (t.toString = function () {
                return "Snap v" + this.version;
              }),
              (t._ = {});
            var n = { win: e.window, doc: e.window.document };
            t._.glob = n;
            var r = "hasOwnProperty",
              a = String,
              o = parseFloat,
              i = parseInt,
              l = Math,
              s = l.max,
              u = l.min,
              c = l.abs,
              f = (l.pow, l.PI),
              d = (l.round, Object.prototype.toString),
              p =
                /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
              h = ((t._.separator = /[,\s]+/), /[\s]*,[\s]*/),
              m = { hs: 1, rg: 1 },
              v = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
              y = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
              b = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
              w = 0,
              x = "S" + (+new Date()).toString(36),
              S = function (e) {
                return (e && e.type ? e.type : "") + x + (w++).toString(36);
              },
              k = "http://www.w3.org/1999/xlink",
              E = "http://www.w3.org/2000/svg",
              C = {};
            t.url = function (e) {
              return "url('#" + e + "')";
            };
            function _(e, t) {
              if (t) {
                if (
                  ("#text" == e &&
                    (e = n.doc.createTextNode(t.text || t["#text"] || "")),
                  "#comment" == e &&
                    (e = n.doc.createComment(t.text || t["#text"] || "")),
                  "string" == typeof e && (e = _(e)),
                  "string" == typeof t)
                )
                  return 1 == e.nodeType
                    ? "xlink:" == t.substring(0, 6)
                      ? e.getAttributeNS(k, t.substring(6))
                      : "xml:" == t.substring(0, 4)
                        ? e.getAttributeNS(E, t.substring(4))
                        : e.getAttribute(t)
                    : "text" == t
                      ? e.nodeValue
                      : null;
                if (1 == e.nodeType) {
                  for (var o in t)
                    if (t[r](o)) {
                      var i = a(t[o]);
                      i
                        ? "xlink:" == o.substring(0, 6)
                          ? e.setAttributeNS(k, o.substring(6), i)
                          : "xml:" == o.substring(0, 4)
                            ? e.setAttributeNS(E, o.substring(4), i)
                            : e.setAttribute(o, i)
                        : e.removeAttribute(o);
                    }
                } else "text" in t && (e.nodeValue = t.text);
              } else e = n.doc.createElementNS(E, e);
              return e;
            }
            function T(e, t) {
              return "finite" == (t = a.prototype.toLowerCase.call(t))
                ? isFinite(e)
                : !(
                    "array" != t ||
                    !(e instanceof Array || (Array.isArray && Array.isArray(e)))
                  ) ||
                    ("null" == t && null === e) ||
                    (t == typeof e && null !== e) ||
                    ("object" == t && e === Object(e)) ||
                    d.call(e).slice(8, -1).toLowerCase() == t;
            }
            function O(e, t, n) {
              return function a() {
                var o = Array.prototype.slice.call(arguments, 0),
                  i = o.join("\u2400"),
                  l = (a.cache = a.cache || {}),
                  s = (a.count = a.count || []);
                return l[r](i)
                  ? ((function (e, t) {
                      for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return e.push(e.splice(n, 1)[0]);
                    })(s, i),
                    n ? n(l[i]) : l[i])
                  : (s.length >= 1e3 && delete l[s.shift()],
                    s.push(i),
                    (l[i] = e.apply(t, o)),
                    n ? n(l[i]) : l[i]);
              };
            }
            function F(e) {
              return ((e % 360) * f) / 180;
            }
            (t._.$ = _),
              (t._.id = S),
              (t.format = (function () {
                var e = /\{([^\}]+)\}/g,
                  t =
                    /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
                return function (n, r) {
                  return a(n).replace(e, function (e, n) {
                    return (function (e, n, r) {
                      var a = r;
                      return (
                        n.replace(t, function (e, t, n, r, o) {
                          (t = t || r),
                            a &&
                              (t in a && (a = a[t]),
                              "function" == typeof a && o && (a = a()));
                        }),
                        (a = (null == a || a == r ? e : a) + "")
                      );
                    })(e, n, r);
                  });
                };
              })()),
              (t._.clone = function e(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var n = new t.constructor();
                for (var a in t) t[r](a) && (n[a] = e(t[a]));
                return n;
              }),
              (t._.cacher = O),
              (t.rad = F),
              (t.deg = function (e) {
                return ((180 * e) / f) % 360;
              }),
              (t.sin = function (e) {
                return l.sin(t.rad(e));
              }),
              (t.tan = function (e) {
                return l.tan(t.rad(e));
              }),
              (t.cos = function (e) {
                return l.cos(t.rad(e));
              }),
              (t.asin = function (e) {
                return t.deg(l.asin(e));
              }),
              (t.acos = function (e) {
                return t.deg(l.acos(e));
              }),
              (t.atan = function (e) {
                return t.deg(l.atan(e));
              }),
              (t.atan2 = function (e) {
                return t.deg(l.atan2(e));
              }),
              (t.angle = function e(t, n, r, a, o, i) {
                if (null == o) {
                  var s = t - r,
                    u = n - a;
                  return s || u
                    ? (180 + (180 * l.atan2(-u, -s)) / f + 360) % 360
                    : 0;
                }
                return e(t, n, o, i) - e(r, a, o, i);
              }),
              (t.len = function (e, n, r, a) {
                return Math.sqrt(t.len2(e, n, r, a));
              }),
              (t.len2 = function (e, t, n, r) {
                return (e - n) * (e - n) + (t - r) * (t - r);
              }),
              (t.closestPoint = function (e, t, n) {
                function r(e) {
                  var r = e.x - t,
                    a = e.y - n;
                  return r * r + a * a;
                }
                for (
                  var a,
                    o,
                    i,
                    l,
                    s = e.node,
                    u = s.getTotalLength(),
                    c = (u / s.pathSegList.numberOfItems) * 0.125,
                    f = 1 / 0,
                    d = 0;
                  d <= u;
                  d += c
                )
                  (l = r((i = s.getPointAtLength(d)))) < f &&
                    ((a = i), (o = d), (f = l));
                for (c *= 0.5; c > 0.5; ) {
                  var p, h, m, g, v, y;
                  (m = o - c) >= 0 && (v = r((p = s.getPointAtLength(m)))) < f
                    ? ((a = p), (o = m), (f = v))
                    : (g = o + c) <= u &&
                        (y = r((h = s.getPointAtLength(g)))) < f
                      ? ((a = h), (o = g), (f = y))
                      : (c *= 0.5);
                }
                return (a = {
                  x: a.x,
                  y: a.y,
                  length: o,
                  distance: Math.sqrt(f),
                });
              }),
              (t.is = T),
              (t.snapTo = function (e, t, n) {
                if (((n = T(n, "finite") ? n : 10), T(e, "array"))) {
                  for (var r = e.length; r--; )
                    if (c(e[r] - t) <= n) return e[r];
                } else {
                  var a = t % (e = +e);
                  if (a < n) return t - a;
                  if (a > e - n) return t - a + e;
                }
                return t;
              }),
              (t.getRGB = O(function (e) {
                if (!e || (e = a(e)).indexOf("-") + 1)
                  return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: M,
                  };
                if ("none" == e)
                  return { r: -1, g: -1, b: -1, hex: "none", toString: M };
                if (
                  (!m[r](e.toLowerCase().substring(0, 2)) &&
                    "#" != e.charAt() &&
                    (e = N(e)),
                  !e)
                )
                  return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: M,
                  };
                var n,
                  c,
                  f,
                  d,
                  g,
                  v,
                  y = e.match(p);
                return y
                  ? (y[2] &&
                      ((f = i(y[2].substring(5), 16)),
                      (c = i(y[2].substring(3, 5), 16)),
                      (n = i(y[2].substring(1, 3), 16))),
                    y[3] &&
                      ((f = i((g = y[3].charAt(3)) + g, 16)),
                      (c = i((g = y[3].charAt(2)) + g, 16)),
                      (n = i((g = y[3].charAt(1)) + g, 16))),
                    y[4] &&
                      ((v = y[4].split(h)),
                      (n = o(v[0])),
                      "%" == v[0].slice(-1) && (n *= 2.55),
                      (c = o(v[1])),
                      "%" == v[1].slice(-1) && (c *= 2.55),
                      (f = o(v[2])),
                      "%" == v[2].slice(-1) && (f *= 2.55),
                      "rgba" == y[1].toLowerCase().slice(0, 4) && (d = o(v[3])),
                      v[3] && "%" == v[3].slice(-1) && (d /= 100)),
                    y[5]
                      ? ((v = y[5].split(h)),
                        (n = o(v[0])),
                        "%" == v[0].slice(-1) && (n /= 100),
                        (c = o(v[1])),
                        "%" == v[1].slice(-1) && (c /= 100),
                        (f = o(v[2])),
                        "%" == v[2].slice(-1) && (f /= 100),
                        ("deg" == v[0].slice(-3) || "\xb0" == v[0].slice(-1)) &&
                          (n /= 360),
                        "hsba" == y[1].toLowerCase().slice(0, 4) &&
                          (d = o(v[3])),
                        v[3] && "%" == v[3].slice(-1) && (d /= 100),
                        t.hsb2rgb(n, c, f, d))
                      : y[6]
                        ? ((v = y[6].split(h)),
                          (n = o(v[0])),
                          "%" == v[0].slice(-1) && (n /= 100),
                          (c = o(v[1])),
                          "%" == v[1].slice(-1) && (c /= 100),
                          (f = o(v[2])),
                          "%" == v[2].slice(-1) && (f /= 100),
                          ("deg" == v[0].slice(-3) ||
                            "\xb0" == v[0].slice(-1)) &&
                            (n /= 360),
                          "hsla" == y[1].toLowerCase().slice(0, 4) &&
                            (d = o(v[3])),
                          v[3] && "%" == v[3].slice(-1) && (d /= 100),
                          t.hsl2rgb(n, c, f, d))
                        : ((n = u(l.round(n), 255)),
                          (c = u(l.round(c), 255)),
                          (f = u(l.round(f), 255)),
                          (d = u(s(d, 0), 1)),
                          ((y = { r: n, g: c, b: f, toString: M }).hex =
                            "#" +
                            (16777216 | f | (c << 8) | (n << 16))
                              .toString(16)
                              .slice(1)),
                          (y.opacity = T(d, "finite") ? d : 1),
                          y))
                  : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: M };
              }, t)),
              (t.hsb = O(function (e, n, r) {
                return t.hsb2rgb(e, n, r).hex;
              })),
              (t.hsl = O(function (e, n, r) {
                return t.hsl2rgb(e, n, r).hex;
              })),
              (t.rgb = O(function (e, t, n, r) {
                if (T(r, "finite")) {
                  var a = l.round;
                  return "rgba(" + [a(e), a(t), a(n), +r.toFixed(2)] + ")";
                }
                return (
                  "#" +
                  (16777216 | n | (t << 8) | (e << 16)).toString(16).slice(1)
                );
              }));
            var N = function (e) {
                var t =
                    n.doc.getElementsByTagName("head")[0] ||
                    n.doc.getElementsByTagName("svg")[0],
                  r = "rgb(255, 0, 0)";
                return (
                  (N = O(function (e) {
                    if ("red" == e.toLowerCase()) return r;
                    (t.style.color = r), (t.style.color = e);
                    var a = n.doc.defaultView
                      .getComputedStyle(t, "")
                      .getPropertyValue("color");
                    return a == r ? null : a;
                  })),
                  N(e)
                );
              },
              P = function () {
                return "hsb(" + [this.h, this.s, this.b] + ")";
              },
              R = function () {
                return "hsl(" + [this.h, this.s, this.l] + ")";
              },
              M = function () {
                return 1 == this.opacity || null == this.opacity
                  ? this.hex
                  : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
              },
              D = function (e, n, r) {
                if (
                  (null == n &&
                    T(e, "object") &&
                    "r" in e &&
                    "g" in e &&
                    "b" in e &&
                    ((r = e.b), (n = e.g), (e = e.r)),
                  null == n && T(e, string))
                ) {
                  var a = t.getRGB(e);
                  (e = a.r), (n = a.g), (r = a.b);
                }
                return (
                  (e > 1 || n > 1 || r > 1) &&
                    ((e /= 255), (n /= 255), (r /= 255)),
                  [e, n, r]
                );
              },
              A = function (e, n, r, a) {
                var o = {
                  r: (e = l.round(255 * e)),
                  g: (n = l.round(255 * n)),
                  b: (r = l.round(255 * r)),
                  opacity: T(a, "finite") ? a : 1,
                  hex: t.rgb(e, n, r),
                  toString: M,
                };
                return T(a, "finite") && (o.opacity = a), o;
              };
            (t.color = function (e) {
              var n;
              return (
                T(e, "object") && "h" in e && "s" in e && "b" in e
                  ? ((n = t.hsb2rgb(e)),
                    (e.r = n.r),
                    (e.g = n.g),
                    (e.b = n.b),
                    (e.opacity = 1),
                    (e.hex = n.hex))
                  : T(e, "object") && "h" in e && "s" in e && "l" in e
                    ? ((n = t.hsl2rgb(e)),
                      (e.r = n.r),
                      (e.g = n.g),
                      (e.b = n.b),
                      (e.opacity = 1),
                      (e.hex = n.hex))
                    : (T(e, "string") && (e = t.getRGB(e)),
                      T(e, "object") &&
                      "r" in e &&
                      "g" in e &&
                      "b" in e &&
                      !("error" in e)
                        ? ((n = t.rgb2hsl(e)),
                          (e.h = n.h),
                          (e.s = n.s),
                          (e.l = n.l),
                          (n = t.rgb2hsb(e)),
                          (e.v = n.b))
                        : (((e = { hex: "none" }).r =
                            e.g =
                            e.b =
                            e.h =
                            e.s =
                            e.v =
                            e.l =
                              -1),
                          (e.error = 1))),
                (e.toString = M),
                e
              );
            }),
              (t.hsb2rgb = function (e, t, n, r) {
                var a, o, i, l, s;
                return (
                  T(e, "object") &&
                    "h" in e &&
                    "s" in e &&
                    "b" in e &&
                    ((n = e.b), (t = e.s), (r = e.o), (e = e.h)),
                  (l =
                    (s = n * t) *
                    (1 - c(((e = ((e *= 360) % 360) / 60) % 2) - 1))),
                  (a = o = i = n - s),
                  A(
                    (a += [s, l, 0, 0, l, s][(e = ~~e)]),
                    (o += [l, s, s, l, 0, 0][e]),
                    (i += [0, 0, l, s, s, l][e]),
                    r,
                  )
                );
              }),
              (t.hsl2rgb = function (e, t, n, r) {
                var a, o, i, l, s;
                return (
                  T(e, "object") &&
                    "h" in e &&
                    "s" in e &&
                    "l" in e &&
                    ((n = e.l), (t = e.s), (e = e.h)),
                  (e > 1 || t > 1 || n > 1) &&
                    ((e /= 360), (t /= 100), (n /= 100)),
                  (l =
                    (s = 2 * t * (n < 0.5 ? n : 1 - n)) *
                    (1 - c(((e = ((e *= 360) % 360) / 60) % 2) - 1))),
                  (a = o = i = n - s / 2),
                  A(
                    (a += [s, l, 0, 0, l, s][(e = ~~e)]),
                    (o += [l, s, s, l, 0, 0][e]),
                    (i += [0, 0, l, s, s, l][e]),
                    r,
                  )
                );
              }),
              (t.rgb2hsb = function (e, t, n) {
                var r, a;
                return (
                  (e = (n = D(e, t, n))[0]),
                  (t = n[1]),
                  (n = n[2]),
                  {
                    h:
                      ((((0 == (a = (r = s(e, t, n)) - u(e, t, n))
                        ? null
                        : r == e
                          ? (t - n) / a
                          : r == t
                            ? (n - e) / a + 2
                            : (e - t) / a + 4) +
                        360) %
                        6) *
                        60) /
                      360,
                    s: 0 == a ? 0 : a / r,
                    b: r,
                    toString: P,
                  }
                );
              }),
              (t.rgb2hsl = function (e, t, n) {
                var r, a, o, i;
                return (
                  (e = (n = D(e, t, n))[0]),
                  (t = n[1]),
                  (n = n[2]),
                  (r = ((a = s(e, t, n)) + (o = u(e, t, n))) / 2),
                  {
                    h:
                      ((((0 == (i = a - o)
                        ? null
                        : a == e
                          ? (t - n) / i
                          : a == t
                            ? (n - e) / i + 2
                            : (e - t) / i + 4) +
                        360) %
                        6) *
                        60) /
                      360,
                    s: 0 == i ? 0 : r < 0.5 ? i / (2 * r) : i / (2 - 2 * r),
                    l: r,
                    toString: R,
                  }
                );
              }),
              (t.parsePathString = function (e) {
                if (!e) return null;
                var n = t.path(e);
                if (n.arr) return t.path.clone(n.arr);
                var r = {
                    a: 7,
                    c: 6,
                    o: 2,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    u: 3,
                    z: 0,
                  },
                  o = [];
                return (
                  T(e, "array") && T(e[0], "array") && (o = t.path.clone(e)),
                  o.length ||
                    a(e).replace(v, function (e, t, n) {
                      var a = [],
                        i = t.toLowerCase();
                      if (
                        (n.replace(b, function (e, t) {
                          t && a.push(+t);
                        }),
                        "m" == i &&
                          a.length > 2 &&
                          (o.push([t].concat(a.splice(0, 2))),
                          (i = "l"),
                          (t = "m" == t ? "l" : "L")),
                        "o" == i && 1 == a.length && o.push([t, a[0]]),
                        "r" == i)
                      )
                        o.push([t].concat(a));
                      else
                        for (
                          ;
                          a.length >= r[i] &&
                          (o.push([t].concat(a.splice(0, r[i]))), r[i]);

                        );
                    }),
                  (o.toString = t.path.toString),
                  (n.arr = t.path.clone(o)),
                  o
                );
              });
            var j = (t.parseTransformString = function (e) {
              if (!e) return null;
              var n = [];
              return (
                T(e, "array") && T(e[0], "array") && (n = t.path.clone(e)),
                n.length ||
                  a(e).replace(y, function (e, t, r) {
                    var a = [];
                    t.toLowerCase();
                    r.replace(b, function (e, t) {
                      t && a.push(+t);
                    }),
                      n.push([t].concat(a));
                  }),
                (n.toString = t.path.toString),
                n
              );
            });
            (t._.svgTransform2string = function (e) {
              var t = [];
              return (
                (e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (e, n, r) {
                  return (
                    (r = r.split(/\s*,\s*|\s+/)),
                    "rotate" == n && 1 == r.length && r.push(0, 0),
                    "scale" == n &&
                      (r.length > 2
                        ? (r = r.slice(0, 2))
                        : 2 == r.length && r.push(0, 0),
                      1 == r.length && r.push(r[0], 0, 0)),
                    "skewX" == n
                      ? t.push(["m", 1, 0, l.tan(F(r[0])), 1, 0, 0])
                      : "skewY" == n
                        ? t.push(["m", 1, l.tan(F(r[0])), 0, 1, 0, 0])
                        : t.push([n.charAt(0)].concat(r)),
                    e
                  );
                })),
                t
              );
            }),
              (t._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
              (t._.transform2matrix = function (e, n) {
                var r = j(e),
                  o = new t.Matrix();
                if (r)
                  for (var i = 0, l = r.length; i < l; i++) {
                    var s,
                      u,
                      c,
                      f,
                      d,
                      p = r[i],
                      h = p.length,
                      m = a(p[0]).toLowerCase(),
                      g = p[0] != m,
                      v = g ? o.invert() : 0;
                    "t" == m && 2 == h
                      ? o.translate(p[1], 0)
                      : "t" == m && 3 == h
                        ? g
                          ? ((s = v.x(0, 0)),
                            (u = v.y(0, 0)),
                            (c = v.x(p[1], p[2])),
                            (f = v.y(p[1], p[2])),
                            o.translate(c - s, f - u))
                          : o.translate(p[1], p[2])
                        : "r" == m
                          ? 2 == h
                            ? ((d = d || n),
                              o.rotate(
                                p[1],
                                d.x + d.width / 2,
                                d.y + d.height / 2,
                              ))
                            : 4 == h &&
                              (g
                                ? ((c = v.x(p[2], p[3])),
                                  (f = v.y(p[2], p[3])),
                                  o.rotate(p[1], c, f))
                                : o.rotate(p[1], p[2], p[3]))
                          : "s" == m
                            ? 2 == h || 3 == h
                              ? ((d = d || n),
                                o.scale(
                                  p[1],
                                  p[h - 1],
                                  d.x + d.width / 2,
                                  d.y + d.height / 2,
                                ))
                              : 4 == h
                                ? g
                                  ? ((c = v.x(p[2], p[3])),
                                    (f = v.y(p[2], p[3])),
                                    o.scale(p[1], p[1], c, f))
                                  : o.scale(p[1], p[1], p[2], p[3])
                                : 5 == h &&
                                  (g
                                    ? ((c = v.x(p[3], p[4])),
                                      (f = v.y(p[3], p[4])),
                                      o.scale(p[1], p[2], c, f))
                                    : o.scale(p[1], p[2], p[3], p[4]))
                            : "m" == m &&
                              7 == h &&
                              o.add(p[1], p[2], p[3], p[4], p[5], p[6]);
                  }
                return o;
              }),
              (t._unit2px = function (e, t, n) {
                var r = L(e).node,
                  a = {},
                  o = r.querySelector(".svg---mgr");
                o ||
                  ((o = _("rect")),
                  _(o, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    class: "svg---mgr",
                    fill: "none",
                  }),
                  r.appendChild(o));
                function i(e) {
                  if (null == e) return "";
                  if (e == +e) return e;
                  _(o, { width: e });
                  try {
                    return o.getBBox().width;
                  } catch (t) {
                    return 0;
                  }
                }
                function l(e) {
                  if (null == e) return "";
                  if (e == +e) return e;
                  _(o, { height: e });
                  try {
                    return o.getBBox().height;
                  } catch (t) {
                    return 0;
                  }
                }
                function s(r, o) {
                  null == t
                    ? (a[r] = o(e.attr(r) || 0))
                    : r == t && (a = o(null == n ? e.attr(r) || 0 : n));
                }
                switch (e.type) {
                  case "rect":
                    s("rx", i), s("ry", l);
                  case "image":
                    s("width", i), s("height", l);
                  case "text":
                    s("x", i), s("y", l);
                    break;
                  case "circle":
                    s("cx", i), s("cy", l), s("r", i);
                    break;
                  case "ellipse":
                    s("cx", i), s("cy", l), s("rx", i), s("ry", l);
                    break;
                  case "line":
                    s("x1", i), s("x2", i), s("y1", l), s("y2", l);
                    break;
                  case "marker":
                    s("refX", i),
                      s("markerWidth", i),
                      s("refY", l),
                      s("markerHeight", l);
                    break;
                  case "radialGradient":
                    s("fx", i), s("fy", l);
                    break;
                  case "tspan":
                    s("dx", i), s("dy", l);
                    break;
                  default:
                    s(t, i);
                }
                return r.removeChild(o), a;
              });
            n.doc.contains || n.doc.compareDocumentPosition;
            function L(e) {
              return (
                (e.node.ownerSVGElement && V(e.node.ownerSVGElement)) ||
                t.select("svg")
              );
            }
            function B(e) {
              T(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
              for (var t = 0, n = 0, r = this.node; this[t]; ) delete this[t++];
              for (t = 0; t < e.length; t++)
                "set" == e[t].type
                  ? e[t].forEach(function (e) {
                      r.appendChild(e.node);
                    })
                  : r.appendChild(e[t].node);
              var a = r.childNodes;
              for (t = 0; t < a.length; t++) this[n++] = V(a[t]);
              return this;
            }
            function z(e) {
              if (e.snap in C) return C[e.snap];
              var t;
              try {
                t = e.ownerSVGElement;
              } catch (o) {}
              (this.node = e),
                t && (this.paper = new H(t)),
                (this.type = e.tagName || e.nodeName);
              var n = (this.id = S(this));
              if (
                ((this.anims = {}),
                (this._ = { transform: [] }),
                (e.snap = n),
                (C[n] = this),
                "g" == this.type && (this.add = B),
                this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
              )
                for (var a in H.prototype)
                  H.prototype[r](a) && (this[a] = H.prototype[a]);
            }
            function I(e) {
              this.node = e;
            }
            function U(e, t) {
              var n = _(e);
              return t.appendChild(n), V(n);
            }
            function H(e, t) {
              var a,
                o,
                i,
                l = H.prototype;
              if (e && e.tagName && "svg" == e.tagName.toLowerCase()) {
                if (e.snap in C) return C[e.snap];
                var s = e.ownerDocument;
                for (var u in ((a = new z(e)),
                (o = e.getElementsByTagName("desc")[0]),
                (i = e.getElementsByTagName("defs")[0]),
                o ||
                  ((o = _("desc")).appendChild(
                    s.createTextNode("Created with Snap"),
                  ),
                  a.node.appendChild(o)),
                i || ((i = _("defs")), a.node.appendChild(i)),
                (a.defs = i),
                l))
                  l[r](u) && (a[u] = l[u]);
                a.paper = a.root = a;
              } else
                _((a = U("svg", n.doc.body)).node, {
                  height: t,
                  version: 1.1,
                  width: e,
                  xmlns: E,
                });
              return a;
            }
            function V(e) {
              return e
                ? e instanceof z || e instanceof I
                  ? e
                  : e.tagName && "svg" == e.tagName.toLowerCase()
                    ? new H(e)
                    : e.tagName &&
                        "object" == e.tagName.toLowerCase() &&
                        "image/svg+xml" == e.type
                      ? new H(e.contentDocument.getElementsByTagName("svg")[0])
                      : new z(e)
                : e;
            }
            function W(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var a = { type: e[n].type, attr: e[n].attr() },
                  o = e[n].children();
                t.push(a), o.length && W(o, (a.childNodes = []));
              }
            }
            (t._.getSomeDefs = function (e) {
              var n =
                  (e.node.ownerSVGElement && V(e.node.ownerSVGElement)) ||
                  (e.node.parentNode && V(e.node.parentNode)) ||
                  t.select("svg") ||
                  t(0, 0),
                r = n.select("defs"),
                a = null != r && r.node;
              return a || (a = U("defs", n.node).node), a;
            }),
              (t._.getSomeSVG = L),
              (t.select = function (e) {
                return (
                  (e = a(e).replace(/([^\\]):/g, "$1\\:")),
                  V(n.doc.querySelector(e))
                );
              }),
              (t.selectAll = function (e) {
                for (
                  var r = n.doc.querySelectorAll(e),
                    a = (t.set || Array)(),
                    o = 0;
                  o < r.length;
                  o++
                )
                  a.push(V(r[o]));
                return a;
              }),
              setInterval(function () {
                for (var e in C)
                  if (C[r](e)) {
                    var t = C[e],
                      n = t.node;
                    (("svg" != t.type && !n.ownerSVGElement) ||
                      ("svg" == t.type &&
                        (!n.parentNode ||
                          ("ownerSVGElement" in n.parentNode &&
                            !n.ownerSVGElement)))) &&
                      delete C[e];
                  }
              }, 1e4),
              (z.prototype.attr = function (e, t) {
                var n = this,
                  a = n.node;
                if (!e) {
                  if (1 != a.nodeType) return { text: a.nodeValue };
                  for (
                    var o = a.attributes, i = {}, l = 0, s = o.length;
                    l < s;
                    l++
                  )
                    i[o[l].nodeName] = o[l].nodeValue;
                  return i;
                }
                if (T(e, "string")) {
                  if (!(arguments.length > 1))
                    return eve("snap.util.getattr." + e, n).firstDefined();
                  var u = {};
                  (u[e] = t), (e = u);
                }
                for (var c in e) e[r](c) && eve("snap.util.attr." + c, n, e[c]);
                return n;
              }),
              (t.parse = function (e) {
                var t = n.doc.createDocumentFragment(),
                  r = !0,
                  o = n.doc.createElement("div");
                if (
                  ((e = a(e)).match(/^\s*<\s*svg(?:\s|>)/) ||
                    ((e = "<svg>" + e + "</svg>"), (r = !1)),
                  (o.innerHTML = e),
                  (e = o.getElementsByTagName("svg")[0]))
                )
                  if (r) t = e;
                  else for (; e.firstChild; ) t.appendChild(e.firstChild);
                return new I(t);
              }),
              (t.fragment = function () {
                for (
                  var e = Array.prototype.slice.call(arguments, 0),
                    r = n.doc.createDocumentFragment(),
                    a = 0,
                    o = e.length;
                  a < o;
                  a++
                ) {
                  var i = e[a];
                  i.node && i.node.nodeType && r.appendChild(i.node),
                    i.nodeType && r.appendChild(i),
                    "string" == typeof i && r.appendChild(t.parse(i).node);
                }
                return new I(r);
              }),
              (t._.make = U),
              (t._.wrap = V),
              (H.prototype.el = function (e, t) {
                var n = U(e, this.node);
                return t && n.attr(t), n;
              }),
              (z.prototype.children = function () {
                for (
                  var e = [], n = this.node.childNodes, r = 0, a = n.length;
                  r < a;
                  r++
                )
                  e[r] = t(n[r]);
                return e;
              }),
              (z.prototype.toJSON = function () {
                var e = [];
                return W([this], e), e[0];
              }),
              eve.on("snap.util.getattr", function () {
                var e = eve.nt(),
                  t = (e = e.substring(e.lastIndexOf(".") + 1)).replace(
                    /[A-Z]/g,
                    function (e) {
                      return "-" + e.toLowerCase();
                    },
                  );
                return q[r](t)
                  ? this.node.ownerDocument.defaultView
                      .getComputedStyle(this.node, null)
                      .getPropertyValue(t)
                  : _(this.node, e);
              });
            var q = {
              "alignment-baseline": 0,
              "baseline-shift": 0,
              clip: 0,
              "clip-path": 0,
              "clip-rule": 0,
              color: 0,
              "color-interpolation": 0,
              "color-interpolation-filters": 0,
              "color-profile": 0,
              "color-rendering": 0,
              cursor: 0,
              direction: 0,
              display: 0,
              "dominant-baseline": 0,
              "enable-background": 0,
              fill: 0,
              "fill-opacity": 0,
              "fill-rule": 0,
              filter: 0,
              "flood-color": 0,
              "flood-opacity": 0,
              font: 0,
              "font-family": 0,
              "font-size": 0,
              "font-size-adjust": 0,
              "font-stretch": 0,
              "font-style": 0,
              "font-variant": 0,
              "font-weight": 0,
              "glyph-orientation-horizontal": 0,
              "glyph-orientation-vertical": 0,
              "image-rendering": 0,
              kerning: 0,
              "letter-spacing": 0,
              "lighting-color": 0,
              marker: 0,
              "marker-end": 0,
              "marker-mid": 0,
              "marker-start": 0,
              mask: 0,
              opacity: 0,
              overflow: 0,
              "pointer-events": 0,
              "shape-rendering": 0,
              "stop-color": 0,
              "stop-opacity": 0,
              stroke: 0,
              "stroke-dasharray": 0,
              "stroke-dashoffset": 0,
              "stroke-linecap": 0,
              "stroke-linejoin": 0,
              "stroke-miterlimit": 0,
              "stroke-opacity": 0,
              "stroke-width": 0,
              "text-anchor": 0,
              "text-decoration": 0,
              "text-rendering": 0,
              "unicode-bidi": 0,
              visibility: 0,
              "word-spacing": 0,
              "writing-mode": 0,
            };
            eve.on("snap.util.attr", function (e) {
              var t = eve.nt(),
                n = {};
              n[(t = t.substring(t.lastIndexOf(".") + 1))] = e;
              var a = t.replace(/-(\w)/gi, function (e, t) {
                  return t.toUpperCase();
                }),
                o = t.replace(/[A-Z]/g, function (e) {
                  return "-" + e.toLowerCase();
                });
              q[r](o)
                ? (this.node.style[a] = null == e ? "" : e)
                : _(this.node, n);
            }),
              H.prototype,
              (t.ajax = function (e, t, n, r) {
                var a = new XMLHttpRequest(),
                  o = S();
                if (a) {
                  if (T(t, "function")) (r = n), (n = t), (t = null);
                  else if (T(t, "object")) {
                    var i = [];
                    for (var l in t)
                      t.hasOwnProperty(l) &&
                        i.push(
                          encodeURIComponent(l) +
                            "=" +
                            encodeURIComponent(t[l]),
                        );
                    t = i.join("&");
                  }
                  return (
                    a.open(t ? "POST" : "GET", e, !0),
                    t &&
                      (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                      a.setRequestHeader(
                        "Content-type",
                        "application/x-www-form-urlencoded",
                      )),
                    n &&
                      (eve.once("snap.ajax." + o + ".0", n),
                      eve.once("snap.ajax." + o + ".200", n),
                      eve.once("snap.ajax." + o + ".304", n)),
                    (a.onreadystatechange = function () {
                      4 == a.readyState &&
                        eve("snap.ajax." + o + "." + a.status, r, a);
                    }),
                    4 == a.readyState ? a : (a.send(t), a)
                  );
                }
              }),
              (t.load = function (e, n, r) {
                t.ajax(e, function (e) {
                  var a = t.parse(e.responseText);
                  r ? n.call(r, a) : n(a);
                });
              });
            return (
              (t.getElementByPoint = function (e, t) {
                this.canvas;
                var r = n.doc.elementFromPoint(e, t);
                if (n.win.opera && "svg" == r.tagName) {
                  var a = (function (e) {
                      var t = e.getBoundingClientRect(),
                        n = e.ownerDocument,
                        r = n.body,
                        a = n.documentElement,
                        o = a.clientTop || r.clientTop || 0,
                        i = a.clientLeft || r.clientLeft || 0;
                      return {
                        y:
                          t.top +
                          (g.win.pageYOffset || a.scrollTop || r.scrollTop) -
                          o,
                        x:
                          t.left +
                          (g.win.pageXOffset || a.scrollLeft || r.scrollLeft) -
                          i,
                      };
                    })(r),
                    o = r.createSVGRect();
                  (o.x = e - a.x), (o.y = t - a.y), (o.width = o.height = 1);
                  var i = r.getIntersectionList(o, null);
                  i.length && (r = i[i.length - 1]);
                }
                return r ? V(r) : null;
              }),
              (t.plugin = function (e) {
                e(t, z, H, n, I);
              }),
              (n.win.Snap = t),
              t
            );
          })(window || this);
        a.plugin(function (e, t, n, r, a) {
          var o = t.prototype,
            i = e.is,
            l = String,
            s = e._unit2px,
            u = e._.$,
            c = e._.make,
            f = e._.getSomeDefs,
            d = e._.wrap;
          o.getBBox = function (t) {
            if ("tspan" == this.type)
              return e._.box(this.node.getClientRects().item(0));
            if (!e.Matrix || !e.path) return this.node.getBBox();
            var n = this,
              r = new e.Matrix();
            if (n.removed) return e._.box();
            for (; "use" == n.type; )
              if (
                (t ||
                  (r = r.add(
                    n
                      .transform()
                      .localMatrix.translate(
                        n.attr("x") || 0,
                        n.attr("y") || 0,
                      ),
                  )),
                n.original)
              )
                n = n.original;
              else {
                var a = n.attr("xlink:href");
                n = n.original = n.node.ownerDocument.getElementById(
                  a.substring(a.indexOf("#") + 1),
                );
              }
            var o = n._,
              i = e.path.get[n.type] || e.path.get.deflt;
            try {
              return t
                ? ((o.bboxwt = i
                    ? e.path.getBBox((n.realPath = i(n)))
                    : e._.box(n.node.getBBox())),
                  e._.box(o.bboxwt))
                : ((n.realPath = i(n)),
                  (n.matrix = n.transform().localMatrix),
                  (o.bbox = e.path.getBBox(
                    e.path.map(n.realPath, r.add(n.matrix)),
                  )),
                  e._.box(o.bbox));
            } catch (l) {
              return e._.box();
            }
          };
          var p = function () {
            return this.string;
          };
          function h(t, n) {
            if (null == n) {
              var r = !0;
              if (
                !(n =
                  "linearGradient" == t.type || "radialGradient" == t.type
                    ? t.node.getAttribute("gradientTransform")
                    : "pattern" == t.type
                      ? t.node.getAttribute("patternTransform")
                      : t.node.getAttribute("transform"))
              )
                return new e.Matrix();
              n = e._.svgTransform2string(n);
            } else
              (n = e._.rgTransform.test(n)
                ? l(n).replace(/\.{3}|\u2026/g, t._.transform || "")
                : e._.svgTransform2string(n)),
                i(n, "array") && (n = e.path ? e.path.toString.call(n) : l(n)),
                (t._.transform = n);
            var a = e._.transform2matrix(n, t.getBBox(1));
            if (r) return a;
            t.matrix = a;
          }
          (o.transform = function (t) {
            var n = this._;
            if (null == t) {
              for (
                var r,
                  a = this,
                  o = new e.Matrix(this.node.getCTM()),
                  i = h(this),
                  s = [i],
                  c = new e.Matrix(),
                  f = i.toTransformString(),
                  d = l(i) == l(this.matrix) ? l(n.transform) : f;
                "svg" != a.type && (a = a.parent());

              )
                s.push(h(a));
              for (r = s.length; r--; ) c.add(s[r]);
              return {
                string: d,
                globalMatrix: o,
                totalMatrix: c,
                localMatrix: i,
                diffMatrix: o.clone().add(i.invert()),
                global: o.toTransformString(),
                total: c.toTransformString(),
                local: f,
                toString: p,
              };
            }
            return (
              t instanceof e.Matrix
                ? ((this.matrix = t),
                  (this._.transform = t.toTransformString()))
                : h(this, t),
              this.node &&
                ("linearGradient" == this.type || "radialGradient" == this.type
                  ? u(this.node, { gradientTransform: this.matrix })
                  : "pattern" == this.type
                    ? u(this.node, { patternTransform: this.matrix })
                    : u(this.node, { transform: this.matrix })),
              this
            );
          }),
            (o.parent = function () {
              return d(this.node.parentNode);
            }),
            (o.append = o.add =
              function (e) {
                if (e) {
                  if ("set" == e.type) {
                    var t = this;
                    return (
                      e.forEach(function (e) {
                        t.add(e);
                      }),
                      this
                    );
                  }
                  (e = d(e)),
                    this.node.appendChild(e.node),
                    (e.paper = this.paper);
                }
                return this;
              }),
            (o.appendTo = function (e) {
              return e && (e = d(e)).append(this), this;
            }),
            (o.prepend = function (e) {
              if (e) {
                if ("set" == e.type) {
                  var t,
                    n = this;
                  return (
                    e.forEach(function (e) {
                      t ? t.after(e) : n.prepend(e), (t = e);
                    }),
                    this
                  );
                }
                var r = (e = d(e)).parent();
                this.node.insertBefore(e.node, this.node.firstChild),
                  this.add && this.add(),
                  (e.paper = this.paper),
                  this.parent() && this.parent().add(),
                  r && r.add();
              }
              return this;
            }),
            (o.prependTo = function (e) {
              return (e = d(e)).prepend(this), this;
            }),
            (o.before = function (e) {
              if ("set" == e.type) {
                var t = this;
                return (
                  e.forEach(function (e) {
                    var n = e.parent();
                    t.node.parentNode.insertBefore(e.node, t.node),
                      n && n.add();
                  }),
                  this.parent().add(),
                  this
                );
              }
              var n = (e = d(e)).parent();
              return (
                this.node.parentNode.insertBefore(e.node, this.node),
                this.parent() && this.parent().add(),
                n && n.add(),
                (e.paper = this.paper),
                this
              );
            }),
            (o.after = function (e) {
              var t = (e = d(e)).parent();
              return (
                this.node.nextSibling
                  ? this.node.parentNode.insertBefore(
                      e.node,
                      this.node.nextSibling,
                    )
                  : this.node.parentNode.appendChild(e.node),
                this.parent() && this.parent().add(),
                t && t.add(),
                (e.paper = this.paper),
                this
              );
            }),
            (o.insertBefore = function (e) {
              e = d(e);
              var t = this.parent();
              return (
                e.node.parentNode.insertBefore(this.node, e.node),
                (this.paper = e.paper),
                t && t.add(),
                e.parent() && e.parent().add(),
                this
              );
            }),
            (o.insertAfter = function (e) {
              e = d(e);
              var t = this.parent();
              return (
                e.node.parentNode.insertBefore(this.node, e.node.nextSibling),
                (this.paper = e.paper),
                t && t.add(),
                e.parent() && e.parent().add(),
                this
              );
            }),
            (o.remove = function () {
              var e = this.parent();
              return (
                this.node.parentNode &&
                  this.node.parentNode.removeChild(this.node),
                delete this.paper,
                (this.removed = !0),
                e && e.add(),
                this
              );
            }),
            (o.select = function (e) {
              return d(this.node.querySelector(e));
            }),
            (o.selectAll = function (t) {
              for (
                var n = this.node.querySelectorAll(t),
                  r = (e.set || Array)(),
                  a = 0;
                a < n.length;
                a++
              )
                r.push(d(n[a]));
              return r;
            }),
            (o.asPX = function (e, t) {
              return null == t && (t = this.attr(e)), +s(this, e, t);
            }),
            (o.use = function () {
              var e,
                t = this.node.id;
              return (
                t || ((t = this.id), u(this.node, { id: t })),
                (e =
                  "linearGradient" == this.type ||
                  "radialGradient" == this.type ||
                  "pattern" == this.type
                    ? c(this.type, this.node.parentNode)
                    : c("use", this.node.parentNode)),
                u(e.node, { "xlink:href": "#" + t }),
                (e.original = this),
                e
              );
            }),
            (o.clone = function () {
              var t = d(this.node.cloneNode(!0));
              return (
                u(t.node, "id") && u(t.node, { id: t.id }),
                (function (t) {
                  var n,
                    r = t.selectAll("*"),
                    a = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                    o = [],
                    i = {};
                  function l(t, n) {
                    var r = u(t.node, n);
                    (r = (r = r && r.match(a)) && r[2]) &&
                      "#" == r.charAt() &&
                      (r = r.substring(1)) &&
                      (i[r] = (i[r] || []).concat(function (r) {
                        var a = {};
                        (a[n] = e.url(r)), u(t.node, a);
                      }));
                  }
                  function s(e) {
                    var t = u(e.node, "xlink:href");
                    t &&
                      "#" == t.charAt() &&
                      (t = t.substring(1)) &&
                      (i[t] = (i[t] || []).concat(function (t) {
                        e.attr("xlink:href", "#" + t);
                      }));
                  }
                  for (var c = 0, f = r.length; c < f; c++) {
                    l((n = r[c]), "fill"),
                      l(n, "stroke"),
                      l(n, "filter"),
                      l(n, "mask"),
                      l(n, "clip-path"),
                      s(n);
                    var d = u(n.node, "id");
                    d &&
                      (u(n.node, { id: n.id }), o.push({ old: d, id: n.id }));
                  }
                  for (c = 0, f = o.length; c < f; c++) {
                    var p = i[o[c].old];
                    if (p)
                      for (var h = 0, m = p.length; h < m; h++) p[h](o[c].id);
                  }
                })(t),
                t.insertAfter(this),
                t
              );
            }),
            (o.toDefs = function () {
              return f(this).appendChild(this.node), this;
            }),
            (o.pattern = o.toPattern =
              function (e, t, n, r) {
                var a = c("pattern", f(this));
                return (
                  null == e && (e = this.getBBox()),
                  i(e, "object") &&
                    "x" in e &&
                    ((t = e.y), (n = e.width), (r = e.height), (e = e.x)),
                  u(a.node, {
                    x: e,
                    y: t,
                    width: n,
                    height: r,
                    patternUnits: "userSpaceOnUse",
                    id: a.id,
                    viewBox: [e, t, n, r].join(" "),
                  }),
                  a.node.appendChild(this.node),
                  a
                );
              }),
            (o.marker = function (e, t, n, r, a, o) {
              var l = c("marker", f(this));
              return (
                null == e && (e = this.getBBox()),
                i(e, "object") &&
                  "x" in e &&
                  ((t = e.y),
                  (n = e.width),
                  (r = e.height),
                  (a = e.refX || e.cx),
                  (o = e.refY || e.cy),
                  (e = e.x)),
                u(l.node, {
                  viewBox: [e, t, n, r].join(" "),
                  markerWidth: n,
                  markerHeight: r,
                  orient: "auto",
                  refX: a || 0,
                  refY: o || 0,
                  id: l.id,
                }),
                l.node.appendChild(this.node),
                l
              );
            });
          var m = {};
          function g(e) {
            return function () {
              var t = e ? "<" + this.type : "",
                n = this.node.attributes,
                r = this.node.childNodes;
              if (e)
                for (var a = 0, o = n.length; a < o; a++)
                  t +=
                    " " +
                    n[a].name +
                    '="' +
                    n[a].value.replace(/"/g, '\\"') +
                    '"';
              if (r.length) {
                for (e && (t += ">"), a = 0, o = r.length; a < o; a++)
                  3 == r[a].nodeType
                    ? (t += r[a].nodeValue)
                    : 1 == r[a].nodeType && (t += d(r[a]).toString());
                e && (t += "</" + this.type + ">");
              } else e && (t += "/>");
              return t;
            };
          }
          (o.data = function (t, n) {
            var r = (m[this.id] = m[this.id] || {});
            if (0 == arguments.length)
              return eve("snap.data.get." + this.id, this, r, null), r;
            if (1 == arguments.length) {
              if (e.is(t, "object")) {
                for (var a in t) t.hasOwnProperty(a) && this.data(a, t[a]);
                return this;
              }
              return eve("snap.data.get." + this.id, this, r[t], t), r[t];
            }
            return (
              (r[t] = n), eve("snap.data.set." + this.id, this, n, t), this
            );
          }),
            (o.removeData = function (e) {
              return (
                null == e
                  ? (m[this.id] = {})
                  : m[this.id] && delete m[this.id][e],
                this
              );
            }),
            (o.outerSVG = o.toString = g(1)),
            (o.innerSVG = g()),
            (o.toDataURL = function () {
              if (window && window.btoa) {
                var t = this.getBBox(),
                  n = e.format(
                    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
                    {
                      x: +t.x.toFixed(3),
                      y: +t.y.toFixed(3),
                      width: +t.width.toFixed(3),
                      height: +t.height.toFixed(3),
                      contents: this.outerSVG(),
                    },
                  );
                return (
                  "data:image/svg+xml;base64," +
                  btoa(unescape(encodeURIComponent(n)))
                );
              }
            }),
            (a.prototype.select = o.select),
            (a.prototype.selectAll = o.selectAll);
        }),
          a.plugin(function (e, t, n, r, a) {
            var o = Object.prototype.toString,
              i = String,
              l = Math;
            function s(e, t, n, r, a, i) {
              if (null == t && "[object SVGMatrix]" == o.call(e))
                return (
                  (this.a = e.a),
                  (this.b = e.b),
                  (this.c = e.c),
                  (this.d = e.d),
                  (this.e = e.e),
                  void (this.f = e.f)
                );
              null != e
                ? ((this.a = +e),
                  (this.b = +t),
                  (this.c = +n),
                  (this.d = +r),
                  (this.e = +a),
                  (this.f = +i))
                : ((this.a = 1),
                  (this.b = 0),
                  (this.c = 0),
                  (this.d = 1),
                  (this.e = 0),
                  (this.f = 0));
            }
            !(function (t) {
              function n(e) {
                return e[0] * e[0] + e[1] * e[1];
              }
              function r(e) {
                var t = l.sqrt(n(e));
                e[0] && (e[0] /= t), e[1] && (e[1] /= t);
              }
              (t.add = function (e, t, n, r, a, o) {
                if (e && e instanceof s)
                  return this.add(e.a, e.b, e.c, e.d, e.e, e.f);
                var i = e * this.a + t * this.c,
                  l = e * this.b + t * this.d;
                return (
                  (this.e += a * this.a + o * this.c),
                  (this.f += a * this.b + o * this.d),
                  (this.c = n * this.a + r * this.c),
                  (this.d = n * this.b + r * this.d),
                  (this.a = i),
                  (this.b = l),
                  this
                );
              }),
                (s.prototype.multLeft = function (e, t, n, r, a, o) {
                  if (e && e instanceof s)
                    return this.multLeft(e.a, e.b, e.c, e.d, e.e, e.f);
                  var i = e * this.a + n * this.b,
                    l = e * this.c + n * this.d,
                    u = e * this.e + n * this.f + a;
                  return (
                    (this.b = t * this.a + r * this.b),
                    (this.d = t * this.c + r * this.d),
                    (this.f = t * this.e + r * this.f + o),
                    (this.a = i),
                    (this.c = l),
                    (this.e = u),
                    this
                  );
                }),
                (t.invert = function () {
                  var e = this,
                    t = e.a * e.d - e.b * e.c;
                  return new s(
                    e.d / t,
                    -e.b / t,
                    -e.c / t,
                    e.a / t,
                    (e.c * e.f - e.d * e.e) / t,
                    (e.b * e.e - e.a * e.f) / t,
                  );
                }),
                (t.clone = function () {
                  return new s(this.a, this.b, this.c, this.d, this.e, this.f);
                }),
                (t.translate = function (e, t) {
                  return (
                    (this.e += e * this.a + t * this.c),
                    (this.f += e * this.b + t * this.d),
                    this
                  );
                }),
                (t.scale = function (e, t, n, r) {
                  return (
                    null == t && (t = e),
                    (n || r) && this.translate(n, r),
                    (this.a *= e),
                    (this.b *= e),
                    (this.c *= t),
                    (this.d *= t),
                    (n || r) && this.translate(-n, -r),
                    this
                  );
                }),
                (t.rotate = function (t, n, r) {
                  (t = e.rad(t)), (n = n || 0), (r = r || 0);
                  var a = +l.cos(t).toFixed(9),
                    o = +l.sin(t).toFixed(9);
                  return (
                    this.add(a, o, -o, a, n, r), this.add(1, 0, 0, 1, -n, -r)
                  );
                }),
                (t.skewX = function (e) {
                  return this.skew(e, 0);
                }),
                (t.skewY = function (e) {
                  return this.skew(0, e);
                }),
                (t.skew = function (t, n) {
                  (t = t || 0), (n = n || 0), (t = e.rad(t)), (n = e.rad(n));
                  var r = l.tan(t).toFixed(9),
                    a = l.tan(n).toFixed(9);
                  return this.add(1, a, r, 1, 0, 0);
                }),
                (t.x = function (e, t) {
                  return e * this.a + t * this.c + this.e;
                }),
                (t.y = function (e, t) {
                  return e * this.b + t * this.d + this.f;
                }),
                (t.get = function (e) {
                  return +this[i.fromCharCode(97 + e)].toFixed(4);
                }),
                (t.toString = function () {
                  return (
                    "matrix(" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ].join() +
                    ")"
                  );
                }),
                (t.offset = function () {
                  return [this.e.toFixed(4), this.f.toFixed(4)];
                }),
                (t.determinant = function () {
                  return this.a * this.d - this.b * this.c;
                }),
                (t.split = function () {
                  var t = {};
                  (t.dx = this.e), (t.dy = this.f);
                  var a = [
                    [this.a, this.b],
                    [this.c, this.d],
                  ];
                  (t.scalex = l.sqrt(n(a[0]))),
                    r(a[0]),
                    (t.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1]),
                    (a[1] = [
                      a[1][0] - a[0][0] * t.shear,
                      a[1][1] - a[0][1] * t.shear,
                    ]),
                    (t.scaley = l.sqrt(n(a[1]))),
                    r(a[1]),
                    (t.shear /= t.scaley),
                    this.determinant() < 0 && (t.scalex = -t.scalex);
                  var o = a[0][1],
                    i = a[1][1];
                  return (
                    i < 0
                      ? ((t.rotate = e.deg(l.acos(i))),
                        o < 0 && (t.rotate = 360 - t.rotate))
                      : (t.rotate = e.deg(l.asin(o))),
                    (t.isSimple =
                      !+t.shear.toFixed(9) &&
                      (t.scalex.toFixed(9) == t.scaley.toFixed(9) ||
                        !t.rotate)),
                    (t.isSuperSimple =
                      !+t.shear.toFixed(9) &&
                      t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                      !t.rotate),
                    (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                    t
                  );
                }),
                (t.toTransformString = function (e) {
                  var t = e || this.split();
                  return +t.shear.toFixed(9)
                    ? "m" +
                        [
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5),
                        ]
                    : ((t.scalex = +t.scalex.toFixed(4)),
                      (t.scaley = +t.scaley.toFixed(4)),
                      (t.rotate = +t.rotate.toFixed(4)),
                      (t.dx || t.dy
                        ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)]
                        : "") +
                        (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : "") +
                        (1 != t.scalex || 1 != t.scaley
                          ? "s" + [t.scalex, t.scaley, 0, 0]
                          : ""));
                });
            })(s.prototype),
              (e.Matrix = s),
              (e.matrix = function (e, t, n, r, a, o) {
                return new s(e, t, n, r, a, o);
              });
          }),
          a.plugin(function (e, t, n, r, a) {
            var o,
              i = e._.make,
              l = e._.wrap,
              s = e.is,
              u = e._.getSomeDefs,
              c = /^url\((['"]?)([^)]+)\1\)$/,
              f = e._.$,
              d = e.url,
              p = String,
              h = e._.separator;
            function m(n) {
              return function (r) {
                if (
                  (eve.stop(),
                  r instanceof a &&
                    1 == r.node.childNodes.length &&
                    ("radialGradient" == r.node.firstChild.tagName ||
                      "linearGradient" == r.node.firstChild.tagName ||
                      "pattern" == r.node.firstChild.tagName) &&
                    ((r = r.node.firstChild),
                    u(this).appendChild(r),
                    (r = l(r))),
                  r instanceof t)
                )
                  if (
                    "radialGradient" == r.type ||
                    "linearGradient" == r.type ||
                    "pattern" == r.type
                  ) {
                    r.node.id || f(r.node, { id: r.id });
                    var o = d(r.node.id);
                  } else o = r.attr(n);
                else if ((o = e.color(r)).error) {
                  var i = e(u(this).ownerSVGElement).gradient(r);
                  i
                    ? (i.node.id || f(i.node, { id: i.id }), (o = d(i.node.id)))
                    : (o = r);
                } else o = p(o);
                var s = {};
                (s[n] = o), f(this.node, s), (this.node.style[n] = "");
              };
            }
            (e.deurl = function (e) {
              var t = String(e).match(c);
              return t ? t[2] : e;
            }),
              eve.on("snap.util.attr.mask", function (e) {
                if (e instanceof t || e instanceof a) {
                  if (
                    (eve.stop(),
                    e instanceof a &&
                      1 == e.node.childNodes.length &&
                      ((e = e.node.firstChild),
                      u(this).appendChild(e),
                      (e = l(e))),
                    "mask" == e.type)
                  )
                    var n = e;
                  else (n = i("mask", u(this))).node.appendChild(e.node);
                  !n.node.id && f(n.node, { id: n.id }),
                    f(this.node, { mask: d(n.id) });
                }
              }),
              (o = function (e) {
                if (e instanceof t || e instanceof a) {
                  eve.stop();
                  for (var n, r = e.node; r; ) {
                    if ("clipPath" === r.nodeName) {
                      n = new t(r);
                      break;
                    }
                    if ("svg" === r.nodeName) {
                      n = void 0;
                      break;
                    }
                    r = r.parentNode;
                  }
                  n ||
                    ((n = i("clipPath", u(this))).node.appendChild(e.node),
                    !n.node.id && f(n.node, { id: n.id })),
                    f(this.node, { "clip-path": d(n.node.id || n.id) });
                }
              }),
              eve.on("snap.util.attr.clip", o),
              eve.on("snap.util.attr.clip-path", o),
              eve.on("snap.util.attr.clipPath", o),
              eve.on("snap.util.attr.fill", m("fill")),
              eve.on("snap.util.attr.stroke", m("stroke"));
            var g = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            function v(e) {
              eve.stop(),
                e == +e && (e += "px"),
                (this.node.style.fontSize = e);
            }
            function y(e) {
              for (
                var t = [], n = e.childNodes, r = 0, a = n.length;
                r < a;
                r++
              ) {
                var o = n[r];
                3 == o.nodeType && t.push(o.nodeValue),
                  "tspan" == o.tagName &&
                    (1 == o.childNodes.length && 3 == o.firstChild.nodeType
                      ? t.push(o.firstChild.nodeValue)
                      : t.push(y(o)));
              }
              return t;
            }
            function b() {
              return eve.stop(), this.node.style.fontSize;
            }
            eve.on("snap.util.grad.parse", function (e) {
              var t = (e = p(e)).match(g);
              if (!t) return null;
              var n = t[1],
                r = t[2],
                a = t[3];
              1 ==
                (r = r.split(/\s*,\s*/).map(function (e) {
                  return +e == e ? +e : e;
                })).length &&
                0 == r[0] &&
                (r = []);
              var o = (a = (a = a.split("-")).map(function (e) {
                  var t = { color: (e = e.split(":"))[0] };
                  return e[1] && (t.offset = parseFloat(e[1])), t;
                })).length,
                i = 0,
                l = 0;
              function s(e, t) {
                for (var n = (t - i) / (e - l), r = l; r < e; r++)
                  a[r].offset = +(+i + n * (r - l)).toFixed(2);
                (l = e), (i = t);
              }
              o--;
              for (var u = 0; u < o; u++) "offset" in a[u] && s(u, a[u].offset);
              return (
                (a[o].offset = a[o].offset || 100),
                s(o, a[o].offset),
                { type: n, params: r, stops: a }
              );
            }),
              eve.on("snap.util.attr.d", function (t) {
                eve.stop(),
                  s(t, "array") &&
                    s(t[0], "array") &&
                    (t = e.path.toString.call(t)),
                  (t = p(t)).match(/[ruo]/i) && (t = e.path.toAbsolute(t)),
                  f(this.node, { d: t });
              })(-1),
              eve.on("snap.util.attr.#text", function (e) {
                eve.stop(), (e = p(e));
                for (var t = r.doc.createTextNode(e); this.node.firstChild; )
                  this.node.removeChild(this.node.firstChild);
                this.node.appendChild(t);
              })(-1),
              eve.on("snap.util.attr.path", function (e) {
                eve.stop(), this.attr({ d: e });
              })(-1),
              eve.on("snap.util.attr.class", function (e) {
                eve.stop(), (this.node.className.baseVal = e);
              })(-1),
              eve.on("snap.util.attr.viewBox", function (e) {
                var t;
                (t =
                  s(e, "object") && "x" in e
                    ? [e.x, e.y, e.width, e.height].join(" ")
                    : s(e, "array")
                      ? e.join(" ")
                      : e),
                  f(this.node, { viewBox: t }),
                  eve.stop();
              })(-1),
              eve.on("snap.util.attr.transform", function (e) {
                this.transform(e), eve.stop();
              })(-1),
              eve.on("snap.util.attr.r", function (e) {
                "rect" == this.type &&
                  (eve.stop(), f(this.node, { rx: e, ry: e }));
              })(-1),
              eve.on("snap.util.attr.textpath", function (e) {
                if ((eve.stop(), "text" == this.type)) {
                  var n, r, a;
                  if (!e && this.textPath) {
                    for (r = this.textPath; r.node.firstChild; )
                      this.node.appendChild(r.node.firstChild);
                    return r.remove(), void delete this.textPath;
                  }
                  if (s(e, "string")) {
                    var o = u(this),
                      i = l(o.parentNode).path(e);
                    o.appendChild(i.node), (n = i.id), i.attr({ id: n });
                  } else
                    (e = l(e)) instanceof t &&
                      ((n = e.attr("id")) || ((n = e.id), e.attr({ id: n })));
                  if (n)
                    if (((r = this.textPath), (a = this.node), r))
                      r.attr({ "xlink:href": "#" + n });
                    else {
                      for (
                        r = f("textPath", { "xlink:href": "#" + n });
                        a.firstChild;

                      )
                        r.appendChild(a.firstChild);
                      a.appendChild(r), (this.textPath = l(r));
                    }
                }
              })(-1),
              eve.on("snap.util.attr.text", function (e) {
                if ("text" == this.type) {
                  for (
                    var t = this.node,
                      n = function (e) {
                        var t = f("tspan");
                        if (s(e, "array"))
                          for (var a = 0; a < e.length; a++)
                            t.appendChild(n(e[a]));
                        else t.appendChild(r.doc.createTextNode(e));
                        return t.normalize && t.normalize(), t;
                      };
                    t.firstChild;

                  )
                    t.removeChild(t.firstChild);
                  for (var a = n(e); a.firstChild; )
                    t.appendChild(a.firstChild);
                }
                eve.stop();
              })(-1),
              eve.on("snap.util.attr.fontSize", v)(-1),
              eve.on("snap.util.attr.font-size", v)(-1),
              eve.on("snap.util.getattr.transform", function () {
                return eve.stop(), this.transform();
              })(-1),
              eve.on("snap.util.getattr.textpath", function () {
                return eve.stop(), this.textPath;
              })(-1),
              (function () {
                function t(t) {
                  return function () {
                    eve.stop();
                    var n = r.doc.defaultView
                      .getComputedStyle(this.node, null)
                      .getPropertyValue("marker-" + t);
                    return "none" == n
                      ? n
                      : e(r.doc.getElementById(n.match(c)[1]));
                  };
                }
                function n(e) {
                  return function (t) {
                    eve.stop();
                    var n =
                      "marker" + e.charAt(0).toUpperCase() + e.substring(1);
                    if ("" != t && t) {
                      if ("marker" == t.type) {
                        var r = t.node.id;
                        return (
                          r || f(t.node, { id: t.id }),
                          void (this.node.style[n] = d(r))
                        );
                      }
                    } else this.node.style[n] = "none";
                  };
                }
                eve.on("snap.util.getattr.marker-end", t("end"))(-1),
                  eve.on("snap.util.getattr.markerEnd", t("end"))(-1),
                  eve.on("snap.util.getattr.marker-start", t("start"))(-1),
                  eve.on("snap.util.getattr.markerStart", t("start"))(-1),
                  eve.on("snap.util.getattr.marker-mid", t("mid"))(-1),
                  eve.on("snap.util.getattr.markerMid", t("mid"))(-1),
                  eve.on("snap.util.attr.marker-end", n("end"))(-1),
                  eve.on("snap.util.attr.markerEnd", n("end"))(-1),
                  eve.on("snap.util.attr.marker-start", n("start"))(-1),
                  eve.on("snap.util.attr.markerStart", n("start"))(-1),
                  eve.on("snap.util.attr.marker-mid", n("mid"))(-1),
                  eve.on("snap.util.attr.markerMid", n("mid"))(-1);
              })(),
              eve.on("snap.util.getattr.r", function () {
                if (
                  "rect" == this.type &&
                  f(this.node, "rx") == f(this.node, "ry")
                )
                  return eve.stop(), f(this.node, "rx");
              })(-1),
              eve.on("snap.util.getattr.text", function () {
                if ("text" == this.type || "tspan" == this.type) {
                  eve.stop();
                  var e = y(this.node);
                  return 1 == e.length ? e[0] : e;
                }
              })(-1),
              eve.on("snap.util.getattr.#text", function () {
                return this.node.textContent;
              })(-1),
              eve.on("snap.util.getattr.fill", function (t) {
                if (!t) {
                  eve.stop();
                  var n = eve(
                    "snap.util.getattr.fill",
                    this,
                    !0,
                  ).firstDefined();
                  return e(e.deurl(n)) || n;
                }
              })(-1),
              eve.on("snap.util.getattr.stroke", function (t) {
                if (!t) {
                  eve.stop();
                  var n = eve(
                    "snap.util.getattr.stroke",
                    this,
                    !0,
                  ).firstDefined();
                  return e(e.deurl(n)) || n;
                }
              })(-1),
              eve.on("snap.util.getattr.viewBox", function () {
                eve.stop();
                var t = f(this.node, "viewBox");
                return t
                  ? ((t = t.split(h)), e._.box(+t[0], +t[1], +t[2], +t[3]))
                  : void 0;
              })(-1),
              eve.on("snap.util.getattr.points", function () {
                var e = f(this.node, "points");
                return eve.stop(), e ? e.split(h) : void 0;
              })(-1),
              eve.on("snap.util.getattr.path", function () {
                var e = f(this.node, "d");
                return eve.stop(), e;
              })(-1),
              eve.on("snap.util.getattr.class", function () {
                return this.node.className.baseVal;
              })(-1),
              eve.on("snap.util.getattr.fontSize", b)(-1),
              eve.on("snap.util.getattr.font-size", b)(-1);
          }),
          a.plugin(function (e, t, n, r, a) {
            var o = /\S+/g,
              i = String,
              l = t.prototype;
            (l.addClass = function (e) {
              var t,
                n,
                r,
                a = i(e || "").match(o) || [],
                l = this.node,
                s = l.className.baseVal,
                u = s.match(o) || [];
              if (a.length) {
                for (t = 0; (n = a[t++]); ) ~u.indexOf(n) || u.push(n);
                s != (r = u.join(" ")) && (l.className.baseVal = r);
              }
              return this;
            }),
              (l.removeClass = function (e) {
                var t,
                  n,
                  r,
                  a,
                  l = i(e || "").match(o) || [],
                  s = this.node,
                  u = s.className.baseVal,
                  c = u.match(o) || [];
                if (c.length) {
                  for (t = 0; (r = l[t++]); )
                    ~(n = c.indexOf(r)) && c.splice(n, 1);
                  u != (a = c.join(" ")) && (s.className.baseVal = a);
                }
                return this;
              }),
              (l.hasClass = function (e) {
                return !!~(this.node.className.baseVal.match(o) || []).indexOf(
                  e,
                );
              }),
              (l.toggleClass = function (e, t) {
                if (null != t)
                  return t ? this.addClass(e) : this.removeClass(e);
                var n,
                  r,
                  a,
                  i,
                  l = (e || "").match(o) || [],
                  s = this.node,
                  u = s.className.baseVal,
                  c = u.match(o) || [];
                for (n = 0; (a = l[n++]); )
                  ~(r = c.indexOf(a)) ? c.splice(r, 1) : c.push(a);
                return (
                  u != (i = c.join(" ")) && (s.className.baseVal = i), this
                );
              });
          }),
          a.plugin(function (e, t, n, r, a) {
            var o = {
                "+": function (e, t) {
                  return e + t;
                },
                "-": function (e, t) {
                  return e - t;
                },
                "/": function (e, t) {
                  return e / t;
                },
                "*": function (e, t) {
                  return e * t;
                },
              },
              i = String,
              l = /[a-z]+$/i,
              s = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
            function u(e) {
              return e;
            }
            function c(e) {
              return function (t) {
                return +t.toFixed(3) + e;
              };
            }
            eve.on("snap.util.attr", function (e) {
              var t = i(e).match(s);
              if (t) {
                var n = eve.nt(),
                  r = n.substring(n.lastIndexOf(".") + 1),
                  a = this.attr(r),
                  u = {};
                eve.stop();
                var c = t[3] || "",
                  f = a.match(l),
                  d = o[t[1]];
                if (
                  (f && f == c
                    ? (e = d(parseFloat(a), +t[2]))
                    : ((a = this.asPX(r)),
                      (e = d(this.asPX(r), this.asPX(r, t[2] + c)))),
                  isNaN(a) || isNaN(e))
                )
                  return;
                (u[r] = e), this.attr(u);
              }
            })(-10),
              eve.on("snap.util.equal", function (e, t) {
                var n = i(this.attr(e) || ""),
                  r = i(t).match(s);
                if (r) {
                  eve.stop();
                  var a = r[3] || "",
                    f = n.match(l),
                    d = o[r[1]];
                  return f && f == a
                    ? {
                        from: parseFloat(n),
                        to: d(parseFloat(n), +r[2]),
                        f: c(f),
                      }
                    : {
                        from: (n = this.asPX(e)),
                        to: d(n, this.asPX(e, r[2] + a)),
                        f: u,
                      };
                }
              })(-10);
          }),
          a.plugin(function (e, t, n, r, a) {
            var o = n.prototype,
              i = e.is;
            (o.rect = function (e, t, n, r, a, o) {
              var l;
              return (
                null == o && (o = a),
                i(e, "object") && "[object Object]" == e
                  ? (l = e)
                  : null != e &&
                    ((l = { x: e, y: t, width: n, height: r }),
                    null != a && ((l.rx = a), (l.ry = o))),
                this.el("rect", l)
              );
            }),
              (o.circle = function (e, t, n) {
                var r;
                return (
                  i(e, "object") && "[object Object]" == e
                    ? (r = e)
                    : null != e && (r = { cx: e, cy: t, r: n }),
                  this.el("circle", r)
                );
              });
            var l = (function () {
              function e() {
                this.parentNode.removeChild(this);
              }
              return function (t, n) {
                var a = r.doc.createElement("img"),
                  o = r.doc.body;
                (a.style.cssText =
                  "position:absolute;left:-9999em;top:-9999em"),
                  (a.onload = function () {
                    n.call(a), (a.onload = a.onerror = null), o.removeChild(a);
                  }),
                  (a.onerror = e),
                  o.appendChild(a),
                  (a.src = t);
              };
            })();
            (o.image = function (t, n, r, a, o) {
              var s = this.el("image");
              if (i(t, "object") && "src" in t) s.attr(t);
              else if (null != t) {
                var u = { "xlink:href": t, preserveAspectRatio: "none" };
                null != n && null != r && ((u.x = n), (u.y = r)),
                  null != a && null != o
                    ? ((u.width = a), (u.height = o))
                    : l(t, function () {
                        e._.$(s.node, {
                          width: this.offsetWidth,
                          height: this.offsetHeight,
                        });
                      }),
                  e._.$(s.node, u);
              }
              return s;
            }),
              (o.ellipse = function (e, t, n, r) {
                var a;
                return (
                  i(e, "object") && "[object Object]" == e
                    ? (a = e)
                    : null != e && (a = { cx: e, cy: t, rx: n, ry: r }),
                  this.el("ellipse", a)
                );
              }),
              (o.path = function (e) {
                var t;
                return (
                  i(e, "object") && !i(e, "array")
                    ? (t = e)
                    : e && (t = { d: e }),
                  this.el("path", t)
                );
              }),
              (o.group = o.g =
                function (e) {
                  var t = this.el("g");
                  return (
                    1 == arguments.length && e && !e.type
                      ? t.attr(e)
                      : arguments.length &&
                        t.add(Array.prototype.slice.call(arguments, 0)),
                    t
                  );
                }),
              (o.svg = function (e, t, n, r, a, o, l, s) {
                var u = {};
                return (
                  i(e, "object") && null == t
                    ? (u = e)
                    : (null != e && (u.x = e),
                      null != t && (u.y = t),
                      null != n && (u.width = n),
                      null != r && (u.height = r),
                      null != a &&
                        null != o &&
                        null != l &&
                        null != s &&
                        (u.viewBox = [a, o, l, s])),
                  this.el("svg", u)
                );
              }),
              (o.mask = function (e) {
                var t = this.el("mask");
                return (
                  1 == arguments.length && e && !e.type
                    ? t.attr(e)
                    : arguments.length &&
                      t.add(Array.prototype.slice.call(arguments, 0)),
                  t
                );
              }),
              (o.ptrn = function (e, t, n, r, a, o, l, s) {
                if (i(e, "object")) var u = e;
                else
                  (u = { patternUnits: "userSpaceOnUse" }),
                    e && (u.x = e),
                    t && (u.y = t),
                    null != n && (u.width = n),
                    null != r && (u.height = r),
                    (u.viewBox =
                      null != a && null != o && null != l && null != s
                        ? [a, o, l, s]
                        : [e || 0, t || 0, n || 0, r || 0]);
                return this.el("pattern", u);
              }),
              (o.use = function (n) {
                return null != n
                  ? (n instanceof t &&
                      (n.attr("id") || n.attr({ id: e._.id(n) }),
                      (n = n.attr("id"))),
                    "#" == String(n).charAt() && (n = n.substring(1)),
                    this.el("use", { "xlink:href": "#" + n }))
                  : t.prototype.use.call(this);
              }),
              (o.symbol = function (e, t, n, r) {
                var a = {};
                return (
                  null != e &&
                    null != t &&
                    null != n &&
                    null != r &&
                    (a.viewBox = [e, t, n, r]),
                  this.el("symbol", a)
                );
              }),
              (o.text = function (e, t, n) {
                var r = {};
                return (
                  i(e, "object")
                    ? (r = e)
                    : null != e && (r = { x: e, y: t, text: n || "" }),
                  this.el("text", r)
                );
              }),
              (o.line = function (e, t, n, r) {
                var a = {};
                return (
                  i(e, "object")
                    ? (a = e)
                    : null != e && (a = { x1: e, x2: n, y1: t, y2: r }),
                  this.el("line", a)
                );
              }),
              (o.polyline = function (e) {
                arguments.length > 1 &&
                  (e = Array.prototype.slice.call(arguments, 0));
                var t = {};
                return (
                  i(e, "object") && !i(e, "array")
                    ? (t = e)
                    : null != e && (t = { points: e }),
                  this.el("polyline", t)
                );
              }),
              (o.polygon = function (e) {
                arguments.length > 1 &&
                  (e = Array.prototype.slice.call(arguments, 0));
                var t = {};
                return (
                  i(e, "object") && !i(e, "array")
                    ? (t = e)
                    : null != e && (t = { points: e }),
                  this.el("polygon", t)
                );
              }),
              (function () {
                var t = e._.$;
                function n() {
                  return this.selectAll("stop");
                }
                function r(n, r) {
                  var a = t("stop"),
                    o = { offset: +r + "%" };
                  (n = e.color(n)),
                    (o["stop-color"] = n.hex),
                    n.opacity < 1 && (o["stop-opacity"] = n.opacity),
                    t(a, o);
                  for (var i, l = this.stops(), s = 0; s < l.length; s++) {
                    if (parseFloat(l[s].attr("offset")) > r) {
                      this.node.insertBefore(a, l[s].node), (i = !0);
                      break;
                    }
                  }
                  return i || this.node.appendChild(a), this;
                }
                function a() {
                  if ("linearGradient" == this.type) {
                    var n = t(this.node, "x1") || 0,
                      r = t(this.node, "x2") || 1,
                      a = t(this.node, "y1") || 0,
                      o = t(this.node, "y2") || 0;
                    return e._.box(n, a, math.abs(r - n), math.abs(o - a));
                  }
                  var i = this.node.cx || 0.5,
                    l = this.node.cy || 0.5,
                    s = this.node.r || 0;
                  return e._.box(i - s, l - s, 2 * s, 2 * s);
                }
                function i(t) {
                  var n = t,
                    r = this.stops();
                  if (
                    ("string" == typeof t &&
                      (n = eve(
                        "snap.util.grad.parse",
                        null,
                        "l(0,0,0,1)" + t,
                      ).firstDefined().stops),
                    e.is(n, "array"))
                  ) {
                    for (var a = 0; a < r.length; a++)
                      if (n[a]) {
                        var o = e.color(n[a].color),
                          i = { offset: n[a].offset + "%" };
                        (i["stop-color"] = o.hex),
                          o.opacity < 1 && (i["stop-opacity"] = o.opacity),
                          r[a].attr(i);
                      } else r[a].remove();
                    for (a = r.length; a < n.length; a++)
                      this.addStop(n[a].color, n[a].offset);
                    return this;
                  }
                }
                function l(o, l, s, u, c) {
                  var f = e._.make("linearGradient", o);
                  return (
                    (f.stops = n),
                    (f.addStop = r),
                    (f.getBBox = a),
                    (f.setStops = i),
                    null != l && t(f.node, { x1: l, y1: s, x2: u, y2: c }),
                    f
                  );
                }
                function s(o, i, l, s, u, c) {
                  var f = e._.make("radialGradient", o);
                  return (
                    (f.stops = n),
                    (f.addStop = r),
                    (f.getBBox = a),
                    null != i && t(f.node, { cx: i, cy: l, r: s }),
                    null != u && null != c && t(f.node, { fx: u, fy: c }),
                    f
                  );
                }
                (o.gradient = function (e) {
                  return (function (e, n) {
                    var r,
                      a = eve("snap.util.grad.parse", null, n).firstDefined();
                    if (!a) return null;
                    a.params.unshift(e),
                      (r =
                        "l" == a.type.toLowerCase()
                          ? l.apply(0, a.params)
                          : s.apply(0, a.params)),
                      a.type != a.type.toLowerCase() &&
                        t(r.node, { gradientUnits: "userSpaceOnUse" });
                    for (var o = a.stops, i = o.length, u = 0; u < i; u++) {
                      var c = o[u];
                      r.addStop(c.color, c.offset);
                    }
                    return r;
                  })(this.defs, e);
                }),
                  (o.gradientLinear = function (e, t, n, r) {
                    return l(this.defs, e, t, n, r);
                  }),
                  (o.gradientRadial = function (e, t, n, r, a) {
                    return s(this.defs, e, t, n, r, a);
                  }),
                  (o.toString = function () {
                    var t,
                      n = this.node.ownerDocument,
                      r = n.createDocumentFragment(),
                      a = n.createElement("div"),
                      o = this.node.cloneNode(!0);
                    return (
                      r.appendChild(a),
                      a.appendChild(o),
                      e._.$(o, { xmlns: "http://www.w3.org/2000/svg" }),
                      (t = a.innerHTML),
                      r.removeChild(r.firstChild),
                      t
                    );
                  }),
                  (o.toDataURL = function () {
                    if (window && window.btoa)
                      return (
                        "data:image/svg+xml;base64," +
                        btoa(unescape(encodeURIComponent(this)))
                      );
                  }),
                  (o.clear = function () {
                    for (var e, t = this.node.firstChild; t; )
                      (e = t.nextSibling),
                        "defs" != t.tagName
                          ? t.parentNode.removeChild(t)
                          : o.clear.call({ node: t }),
                        (t = e);
                  });
              })();
          }),
          a.plugin(function (e, t, n, r) {
            var a = t.prototype,
              o = e.is,
              i = e._.clone,
              l = "hasOwnProperty",
              s = /,?([a-z]),?/gi,
              u = parseFloat,
              c = Math,
              f = c.PI,
              d = c.min,
              p = c.max,
              h = c.pow,
              m = c.abs;
            function g(e) {
              var t = (g.ps = g.ps || {});
              return (
                t[e] ? (t[e].sleep = 100) : (t[e] = { sleep: 100 }),
                setTimeout(function () {
                  for (var n in t)
                    t[l](n) &&
                      n != e &&
                      (t[n].sleep--, !t[n].sleep && delete t[n]);
                }),
                t[e]
              );
            }
            function v(e, t, n, r) {
              return (
                null == e && (e = t = n = r = 0),
                null == t &&
                  ((t = e.y), (n = e.width), (r = e.height), (e = e.x)),
                {
                  x: e,
                  y: t,
                  width: n,
                  w: n,
                  height: r,
                  h: r,
                  x2: e + n,
                  y2: t + r,
                  cx: e + n / 2,
                  cy: t + r / 2,
                  r1: c.min(n, r) / 2,
                  r2: c.max(n, r) / 2,
                  r0: c.sqrt(n * n + r * r) / 2,
                  path: A(e, t, n, r),
                  vb: [e, t, n, r].join(" "),
                }
              );
            }
            function y() {
              return this.join(",").replace(s, "$1");
            }
            function b(e) {
              var t = i(e);
              return (t.toString = y), t;
            }
            function w(e, t, n, r, a, o, i, l, s) {
              return null == s
                ? N(e, t, n, r, a, o, i, l)
                : C(
                    e,
                    t,
                    n,
                    r,
                    a,
                    o,
                    i,
                    l,
                    (function (e, t, n, r, a, o, i, l, s) {
                      if (s < 0 || N(e, t, n, r, a, o, i, l) < s) return;
                      var u,
                        c = 1,
                        f = c / 2,
                        d = c - f,
                        p = 0.01;
                      u = N(e, t, n, r, a, o, i, l, d);
                      for (; m(u - s) > p; )
                        u = N(
                          e,
                          t,
                          n,
                          r,
                          a,
                          o,
                          i,
                          l,
                          (d += (u < s ? 1 : -1) * (f /= 2)),
                        );
                      return d;
                    })(e, t, n, r, a, o, i, l, s),
                  );
            }
            function x(n, r) {
              function a(e) {
                return +(+e).toFixed(3);
              }
              return e._.cacher(
                function (e, o, i) {
                  e instanceof t && (e = e.attr("d"));
                  for (
                    var l,
                      s,
                      u,
                      c,
                      f,
                      d = "",
                      p = {},
                      h = 0,
                      m = 0,
                      g = (e = W(e)).length;
                    m < g;
                    m++
                  ) {
                    if ("M" == (u = e[m])[0]) (l = +u[1]), (s = +u[2]);
                    else {
                      if (
                        h + (c = w(l, s, u[1], u[2], u[3], u[4], u[5], u[6])) >
                        o
                      ) {
                        if (r && !p.start) {
                          if (
                            ((d += [
                              "C" +
                                a(
                                  (f = w(
                                    l,
                                    s,
                                    u[1],
                                    u[2],
                                    u[3],
                                    u[4],
                                    u[5],
                                    u[6],
                                    o - h,
                                  )).start.x,
                                ),
                              a(f.start.y),
                              a(f.m.x),
                              a(f.m.y),
                              a(f.x),
                              a(f.y),
                            ]),
                            i)
                          )
                            return d;
                          (p.start = d),
                            (d = [
                              "M" + a(f.x),
                              a(f.y) + "C" + a(f.n.x),
                              a(f.n.y),
                              a(f.end.x),
                              a(f.end.y),
                              a(u[5]),
                              a(u[6]),
                            ].join()),
                            (h += c),
                            (l = +u[5]),
                            (s = +u[6]);
                          continue;
                        }
                        if (!n && !r)
                          return (f = w(
                            l,
                            s,
                            u[1],
                            u[2],
                            u[3],
                            u[4],
                            u[5],
                            u[6],
                            o - h,
                          ));
                      }
                      (h += c), (l = +u[5]), (s = +u[6]);
                    }
                    d += u.shift() + u;
                  }
                  return (
                    (p.end = d),
                    (f = n
                      ? h
                      : r
                        ? p
                        : C(l, s, u[0], u[1], u[2], u[3], u[4], u[5], 1))
                  );
                },
                null,
                e._.clone,
              );
            }
            var S = x(1),
              k = x(),
              E = x(0, 1);
            function C(e, t, n, r, a, o, i, l, s) {
              var u = 1 - s,
                d = h(u, 3),
                p = h(u, 2),
                m = s * s,
                g = m * s,
                v = e + 2 * s * (n - e) + m * (a - 2 * n + e),
                y = t + 2 * s * (r - t) + m * (o - 2 * r + t),
                b = n + 2 * s * (a - n) + m * (i - 2 * a + n),
                w = r + 2 * s * (o - r) + m * (l - 2 * o + r);
              return {
                x: d * e + 3 * p * s * n + 3 * u * s * s * a + g * i,
                y: d * t + 3 * p * s * r + 3 * u * s * s * o + g * l,
                m: { x: v, y: y },
                n: { x: b, y: w },
                start: { x: u * e + s * n, y: u * t + s * r },
                end: { x: u * a + s * i, y: u * o + s * l },
                alpha: 90 - (180 * c.atan2(v - b, y - w)) / f,
              };
            }
            function _(t, n, r, a, o, i, l, s) {
              e.is(t, "array") || (t = [t, n, r, a, o, i, l, s]);
              var u = V.apply(null, t);
              return v(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y);
            }
            function T(e, t, n) {
              return (
                t >= e.x &&
                t <= e.x + e.width &&
                n >= e.y &&
                n <= e.y + e.height
              );
            }
            function O(e, t) {
              return (
                (e = v(e)),
                T((t = v(t)), e.x, e.y) ||
                  T(t, e.x2, e.y) ||
                  T(t, e.x, e.y2) ||
                  T(t, e.x2, e.y2) ||
                  T(e, t.x, t.y) ||
                  T(e, t.x2, t.y) ||
                  T(e, t.x, t.y2) ||
                  T(e, t.x2, t.y2) ||
                  (((e.x < t.x2 && e.x > t.x) || (t.x < e.x2 && t.x > e.x)) &&
                    ((e.y < t.y2 && e.y > t.y) || (t.y < e.y2 && t.y > e.y)))
              );
            }
            function F(e, t, n, r, a) {
              return (
                e *
                  (e * (-3 * t + 9 * n - 9 * r + 3 * a) +
                    6 * t -
                    12 * n +
                    6 * r) -
                3 * t +
                3 * n
              );
            }
            function N(e, t, n, r, a, o, i, l, s) {
              null == s && (s = 1);
              for (
                var u = (s = s > 1 ? 1 : s < 0 ? 0 : s) / 2,
                  f = [
                    -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
                    0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                  ],
                  d = [
                    0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601,
                    0.1601, 0.1069, 0.1069, 0.0472, 0.0472,
                  ],
                  p = 0,
                  h = 0;
                h < 12;
                h++
              ) {
                var m = u * f[h] + u,
                  g = F(m, e, n, a, i),
                  v = F(m, t, r, o, l),
                  y = g * g + v * v;
                p += d[h] * c.sqrt(y);
              }
              return u * p;
            }
            function P(e, t, n, r, a, o, i, l) {
              if (
                !(
                  p(e, n) < d(a, i) ||
                  d(e, n) > p(a, i) ||
                  p(t, r) < d(o, l) ||
                  d(t, r) > p(o, l)
                )
              ) {
                var s = (e - n) * (o - l) - (t - r) * (a - i);
                if (s) {
                  var u =
                      ((e * r - t * n) * (a - i) - (e - n) * (a * l - o * i)) /
                      s,
                    c =
                      ((e * r - t * n) * (o - l) - (t - r) * (a * l - o * i)) /
                      s,
                    f = +u.toFixed(2),
                    h = +c.toFixed(2);
                  if (
                    !(
                      f < +d(e, n).toFixed(2) ||
                      f > +p(e, n).toFixed(2) ||
                      f < +d(a, i).toFixed(2) ||
                      f > +p(a, i).toFixed(2) ||
                      h < +d(t, r).toFixed(2) ||
                      h > +p(t, r).toFixed(2) ||
                      h < +d(o, l).toFixed(2) ||
                      h > +p(o, l).toFixed(2)
                    )
                  )
                    return { x: u, y: c };
                }
              }
            }
            function R(e, t, n) {
              if (!O(_(e), _(t))) return n ? 0 : [];
              for (
                var r = ~~(N.apply(0, e) / 8),
                  a = ~~(N.apply(0, t) / 8),
                  o = [],
                  i = [],
                  l = {},
                  s = n ? 0 : [],
                  u = 0;
                u < r + 1;
                u++
              ) {
                var c = C.apply(0, e.concat(u / r));
                o.push({ x: c.x, y: c.y, t: u / r });
              }
              for (u = 0; u < a + 1; u++)
                (c = C.apply(0, t.concat(u / a))),
                  i.push({ x: c.x, y: c.y, t: u / a });
              for (u = 0; u < r; u++)
                for (var f = 0; f < a; f++) {
                  var d = o[u],
                    p = o[u + 1],
                    h = i[f],
                    g = i[f + 1],
                    v = m(p.x - d.x) < 0.001 ? "y" : "x",
                    y = m(g.x - h.x) < 0.001 ? "y" : "x",
                    b = P(d.x, d.y, p.x, p.y, h.x, h.y, g.x, g.y);
                  if (b) {
                    if (l[b.x.toFixed(4)] == b.y.toFixed(4)) continue;
                    l[b.x.toFixed(4)] = b.y.toFixed(4);
                    var w =
                        d.t + m((b[v] - d[v]) / (p[v] - d[v])) * (p.t - d.t),
                      x = h.t + m((b[y] - h[y]) / (g[y] - h[y])) * (g.t - h.t);
                    w >= 0 &&
                      w <= 1 &&
                      x >= 0 &&
                      x <= 1 &&
                      (n ? s++ : s.push({ x: b.x, y: b.y, t1: w, t2: x }));
                  }
                }
              return s;
            }
            function M(e, t, n) {
              (e = W(e)), (t = W(t));
              for (
                var r,
                  a,
                  o,
                  i,
                  l,
                  s,
                  u,
                  c,
                  f,
                  d,
                  p = n ? 0 : [],
                  h = 0,
                  m = e.length;
                h < m;
                h++
              ) {
                var g = e[h];
                if ("M" == g[0]) (r = l = g[1]), (a = s = g[2]);
                else {
                  "C" == g[0]
                    ? ((f = [r, a].concat(g.slice(1))), (r = f[6]), (a = f[7]))
                    : ((f = [r, a, r, a, l, s, l, s]), (r = l), (a = s));
                  for (var v = 0, y = t.length; v < y; v++) {
                    var b = t[v];
                    if ("M" == b[0]) (o = u = b[1]), (i = c = b[2]);
                    else {
                      "C" == b[0]
                        ? ((d = [o, i].concat(b.slice(1))),
                          (o = d[6]),
                          (i = d[7]))
                        : ((d = [o, i, o, i, u, c, u, c]), (o = u), (i = c));
                      var w = R(f, d, n);
                      if (n) p += w;
                      else {
                        for (var x = 0, S = w.length; x < S; x++)
                          (w[x].segment1 = h),
                            (w[x].segment2 = v),
                            (w[x].bez1 = f),
                            (w[x].bez2 = d);
                        p = p.concat(w);
                      }
                    }
                  }
                }
              }
              return p;
            }
            function D(e) {
              var t = g(e);
              if (t.bbox) return i(t.bbox);
              if (!e) return v();
              for (
                var n,
                  r = 0,
                  a = 0,
                  o = [],
                  l = [],
                  s = 0,
                  u = (e = W(e)).length;
                s < u;
                s++
              )
                if ("M" == (n = e[s])[0])
                  (r = n[1]), (a = n[2]), o.push(r), l.push(a);
                else {
                  var c = V(r, a, n[1], n[2], n[3], n[4], n[5], n[6]);
                  (o = o.concat(c.min.x, c.max.x)),
                    (l = l.concat(c.min.y, c.max.y)),
                    (r = n[5]),
                    (a = n[6]);
                }
              var f = d.apply(0, o),
                h = d.apply(0, l),
                m = v(f, h, p.apply(0, o) - f, p.apply(0, l) - h);
              return (t.bbox = i(m)), m;
            }
            function A(e, t, n, r, a) {
              if (a)
                return [
                  ["M", +e + +a, t],
                  ["l", n - 2 * a, 0],
                  ["a", a, a, 0, 0, 1, a, a],
                  ["l", 0, r - 2 * a],
                  ["a", a, a, 0, 0, 1, -a, a],
                  ["l", 2 * a - n, 0],
                  ["a", a, a, 0, 0, 1, -a, -a],
                  ["l", 0, 2 * a - r],
                  ["a", a, a, 0, 0, 1, a, -a],
                  ["z"],
                ];
              var o = [
                ["M", e, t],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"],
              ];
              return (o.toString = y), o;
            }
            function j(e, t, n, r, a) {
              if (
                (null == a && null == r && (r = n),
                (e = +e),
                (t = +t),
                (n = +n),
                (r = +r),
                null != a)
              )
                var o = Math.PI / 180,
                  i = e + n * Math.cos(-r * o),
                  l = e + n * Math.cos(-a * o),
                  s = [
                    ["M", i, t + n * Math.sin(-r * o)],
                    [
                      "A",
                      n,
                      n,
                      0,
                      +(a - r > 180),
                      0,
                      l,
                      t + n * Math.sin(-a * o),
                    ],
                  ];
              else
                s = [
                  ["M", e, t],
                  ["m", 0, -r],
                  ["a", n, r, 0, 1, 1, 0, 2 * r],
                  ["a", n, r, 0, 1, 1, 0, -2 * r],
                  ["z"],
                ];
              return (s.toString = y), s;
            }
            var L = e._unit2px,
              B = {
                path: function (e) {
                  return e.attr("path");
                },
                circle: function (e) {
                  var t = L(e);
                  return j(t.cx, t.cy, t.r);
                },
                ellipse: function (e) {
                  var t = L(e);
                  return j(t.cx || 0, t.cy || 0, t.rx, t.ry);
                },
                rect: function (e) {
                  var t = L(e);
                  return A(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry);
                },
                image: function (e) {
                  var t = L(e);
                  return A(t.x || 0, t.y || 0, t.width, t.height);
                },
                line: function (e) {
                  return (
                    "M" +
                    [
                      e.attr("x1") || 0,
                      e.attr("y1") || 0,
                      e.attr("x2"),
                      e.attr("y2"),
                    ]
                  );
                },
                polyline: function (e) {
                  return "M" + e.attr("points");
                },
                polygon: function (e) {
                  return "M" + e.attr("points") + "z";
                },
                deflt: function (e) {
                  var t = e.node.getBBox();
                  return A(t.x, t.y, t.width, t.height);
                },
              };
            function z(t) {
              var n = g(t);
              if (n.abs) return b(n.abs);
              if (
                ((o(t, "array") && o(t && t[0], "array")) ||
                  (t = e.parsePathString(t)),
                !t || !t.length)
              )
                return [["M", 0, 0]];
              var r,
                a = [],
                i = 0,
                l = 0,
                s = 0,
                u = 0,
                c = 0;
              "M" == t[0][0] &&
                ((s = i = +t[0][1]),
                (u = l = +t[0][2]),
                c++,
                (a[0] = ["M", i, l]));
              for (
                var f,
                  d,
                  p =
                    3 == t.length &&
                    "M" == t[0][0] &&
                    "R" == t[1][0].toUpperCase() &&
                    "Z" == t[2][0].toUpperCase(),
                  h = c,
                  m = t.length;
                h < m;
                h++
              ) {
                if ((a.push((f = [])), (r = (d = t[h])[0]) != r.toUpperCase()))
                  switch (((f[0] = r.toUpperCase()), f[0])) {
                    case "A":
                      (f[1] = d[1]),
                        (f[2] = d[2]),
                        (f[3] = d[3]),
                        (f[4] = d[4]),
                        (f[5] = d[5]),
                        (f[6] = +d[6] + i),
                        (f[7] = +d[7] + l);
                      break;
                    case "V":
                      f[1] = +d[1] + l;
                      break;
                    case "H":
                      f[1] = +d[1] + i;
                      break;
                    case "R":
                      for (
                        var v = [i, l].concat(d.slice(1)), w = 2, x = v.length;
                        w < x;
                        w++
                      )
                        (v[w] = +v[w] + i), (v[++w] = +v[w] + l);
                      a.pop(), (a = a.concat(q(v, p)));
                      break;
                    case "O":
                      a.pop(),
                        (v = j(i, l, d[1], d[2])).push(v[0]),
                        (a = a.concat(v));
                      break;
                    case "U":
                      a.pop(),
                        (a = a.concat(j(i, l, d[1], d[2], d[3]))),
                        (f = ["U"].concat(a[a.length - 1].slice(-2)));
                      break;
                    case "M":
                      (s = +d[1] + i), (u = +d[2] + l);
                    default:
                      for (w = 1, x = d.length; w < x; w++)
                        f[w] = +d[w] + (w % 2 ? i : l);
                  }
                else if ("R" == r)
                  (v = [i, l].concat(d.slice(1))),
                    a.pop(),
                    (a = a.concat(q(v, p))),
                    (f = ["R"].concat(d.slice(-2)));
                else if ("O" == r)
                  a.pop(),
                    (v = j(i, l, d[1], d[2])).push(v[0]),
                    (a = a.concat(v));
                else if ("U" == r)
                  a.pop(),
                    (a = a.concat(j(i, l, d[1], d[2], d[3]))),
                    (f = ["U"].concat(a[a.length - 1].slice(-2)));
                else for (var S = 0, k = d.length; S < k; S++) f[S] = d[S];
                if ("O" != (r = r.toUpperCase()))
                  switch (f[0]) {
                    case "Z":
                      (i = +s), (l = +u);
                      break;
                    case "H":
                      i = f[1];
                      break;
                    case "V":
                      l = f[1];
                      break;
                    case "M":
                      (s = f[f.length - 2]), (u = f[f.length - 1]);
                    default:
                      (i = f[f.length - 2]), (l = f[f.length - 1]);
                  }
              }
              return (a.toString = y), (n.abs = b(a)), a;
            }
            function I(e, t, n, r) {
              return [e, t, n, r, n, r];
            }
            function U(e, t, n, r, a, o) {
              var i = 1 / 3,
                l = 2 / 3;
              return [
                i * e + l * n,
                i * t + l * r,
                i * a + l * n,
                i * o + l * r,
                a,
                o,
              ];
            }
            function H(t, n, r, a, o, i, l, s, u, d) {
              var p,
                h = (120 * f) / 180,
                g = (f / 180) * (+o || 0),
                v = [],
                y = e._.cacher(function (e, t, n) {
                  return {
                    x: e * c.cos(n) - t * c.sin(n),
                    y: e * c.sin(n) + t * c.cos(n),
                  };
                });
              if (!r || !a) return [t, n, s, u, s, u];
              if (d) (T = d[0]), (O = d[1]), (C = d[2]), (_ = d[3]);
              else {
                (t = (p = y(t, n, -g)).x),
                  (n = p.y),
                  (s = (p = y(s, u, -g)).x),
                  (u = p.y);
                c.cos((f / 180) * o), c.sin((f / 180) * o);
                var b = (t - s) / 2,
                  w = (n - u) / 2,
                  x = (b * b) / (r * r) + (w * w) / (a * a);
                x > 1 && ((r *= x = c.sqrt(x)), (a *= x));
                var S = r * r,
                  k = a * a,
                  E =
                    (i == l ? -1 : 1) *
                    c.sqrt(
                      m(
                        (S * k - S * w * w - k * b * b) /
                          (S * w * w + k * b * b),
                      ),
                    ),
                  C = (E * r * w) / a + (t + s) / 2,
                  _ = (E * -a * b) / r + (n + u) / 2,
                  T = c.asin(((n - _) / a).toFixed(9)),
                  O = c.asin(((u - _) / a).toFixed(9));
                (T = t < C ? f - T : T) < 0 && (T = 2 * f + T),
                  (O = s < C ? f - O : O) < 0 && (O = 2 * f + O),
                  l && T > O && (T -= 2 * f),
                  !l && O > T && (O -= 2 * f);
              }
              var F = O - T;
              if (m(F) > h) {
                var N = O,
                  P = s,
                  R = u;
                (O = T + h * (l && O > T ? 1 : -1)),
                  (v = H(
                    (s = C + r * c.cos(O)),
                    (u = _ + a * c.sin(O)),
                    r,
                    a,
                    o,
                    0,
                    l,
                    P,
                    R,
                    [O, N, C, _],
                  ));
              }
              F = O - T;
              var M = c.cos(T),
                D = c.sin(T),
                A = c.cos(O),
                j = c.sin(O),
                L = c.tan(F / 4),
                B = (4 / 3) * r * L,
                z = (4 / 3) * a * L,
                I = [t, n],
                U = [t + B * D, n - z * M],
                V = [s + B * j, u - z * A],
                W = [s, u];
              if (((U[0] = 2 * I[0] - U[0]), (U[1] = 2 * I[1] - U[1]), d))
                return [U, V, W].concat(v);
              for (
                var q = [],
                  $ = 0,
                  Y = (v = [U, V, W].concat(v).join().split(",")).length;
                $ < Y;
                $++
              )
                q[$] = $ % 2 ? y(v[$ - 1], v[$], g).y : y(v[$], v[$ + 1], g).x;
              return q;
            }
            function V(e, t, n, r, a, o, i, l) {
              for (
                var s, u, f, h, g, v, y, b, w = [], x = [[], []], S = 0;
                S < 2;
                ++S
              )
                if (
                  (0 == S
                    ? ((u = 6 * e - 12 * n + 6 * a),
                      (s = -3 * e + 9 * n - 9 * a + 3 * i),
                      (f = 3 * n - 3 * e))
                    : ((u = 6 * t - 12 * r + 6 * o),
                      (s = -3 * t + 9 * r - 9 * o + 3 * l),
                      (f = 3 * r - 3 * t)),
                  m(s) < 1e-12)
                ) {
                  if (m(u) < 1e-12) continue;
                  0 < (h = -f / u) && h < 1 && w.push(h);
                } else
                  (y = u * u - 4 * f * s),
                    (b = c.sqrt(y)),
                    y < 0 ||
                      (0 < (g = (-u + b) / (2 * s)) && g < 1 && w.push(g),
                      0 < (v = (-u - b) / (2 * s)) && v < 1 && w.push(v));
              for (var k, E = w.length, C = E; E--; )
                (k = 1 - (h = w[E])),
                  (x[0][E] =
                    k * k * k * e +
                    3 * k * k * h * n +
                    3 * k * h * h * a +
                    h * h * h * i),
                  (x[1][E] =
                    k * k * k * t +
                    3 * k * k * h * r +
                    3 * k * h * h * o +
                    h * h * h * l);
              return (
                (x[0][C] = e),
                (x[1][C] = t),
                (x[0][C + 1] = i),
                (x[1][C + 1] = l),
                (x[0].length = x[1].length = C + 2),
                {
                  min: { x: d.apply(0, x[0]), y: d.apply(0, x[1]) },
                  max: { x: p.apply(0, x[0]), y: p.apply(0, x[1]) },
                }
              );
            }
            function W(e, t) {
              var n = !t && g(e);
              if (!t && n.curve) return b(n.curve);
              for (
                var r = z(e),
                  a = t && z(t),
                  o = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null,
                  },
                  i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null,
                  },
                  l = function (e, t, n) {
                    var r, a;
                    if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                    switch (
                      (!(e[0] in { T: 1, Q: 1 }) && (t.qx = t.qy = null), e[0])
                    ) {
                      case "M":
                        (t.X = e[1]), (t.Y = e[2]);
                        break;
                      case "A":
                        e = ["C"].concat(
                          H.apply(0, [t.x, t.y].concat(e.slice(1))),
                        );
                        break;
                      case "S":
                        "C" == n || "S" == n
                          ? ((r = 2 * t.x - t.bx), (a = 2 * t.y - t.by))
                          : ((r = t.x), (a = t.y)),
                          (e = ["C", r, a].concat(e.slice(1)));
                        break;
                      case "T":
                        "Q" == n || "T" == n
                          ? ((t.qx = 2 * t.x - t.qx), (t.qy = 2 * t.y - t.qy))
                          : ((t.qx = t.x), (t.qy = t.y)),
                          (e = ["C"].concat(
                            U(t.x, t.y, t.qx, t.qy, e[1], e[2]),
                          ));
                        break;
                      case "Q":
                        (t.qx = e[1]),
                          (t.qy = e[2]),
                          (e = ["C"].concat(
                            U(t.x, t.y, e[1], e[2], e[3], e[4]),
                          ));
                        break;
                      case "L":
                        e = ["C"].concat(I(t.x, t.y, e[1], e[2]));
                        break;
                      case "H":
                        e = ["C"].concat(I(t.x, t.y, e[1], t.y));
                        break;
                      case "V":
                        e = ["C"].concat(I(t.x, t.y, t.x, e[1]));
                        break;
                      case "Z":
                        e = ["C"].concat(I(t.x, t.y, t.X, t.Y));
                    }
                    return e;
                  },
                  s = function (e, t) {
                    if (e[t].length > 7) {
                      e[t].shift();
                      for (var n = e[t]; n.length; )
                        (f[t] = "A"),
                          a && (d[t] = "A"),
                          e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
                      e.splice(t, 1), (y = p(r.length, (a && a.length) || 0));
                    }
                  },
                  c = function (e, t, n, o, i) {
                    e &&
                      t &&
                      "M" == e[i][0] &&
                      "M" != t[i][0] &&
                      (t.splice(i, 0, ["M", o.x, o.y]),
                      (n.bx = 0),
                      (n.by = 0),
                      (n.x = e[i][1]),
                      (n.y = e[i][2]),
                      (y = p(r.length, (a && a.length) || 0)));
                  },
                  f = [],
                  d = [],
                  h = "",
                  m = "",
                  v = 0,
                  y = p(r.length, (a && a.length) || 0);
                v < y;
                v++
              ) {
                r[v] && (h = r[v][0]),
                  "C" != h && ((f[v] = h), v && (m = f[v - 1])),
                  (r[v] = l(r[v], o, m)),
                  "A" != f[v] && "C" == h && (f[v] = "C"),
                  s(r, v),
                  a &&
                    (a[v] && (h = a[v][0]),
                    "C" != h && ((d[v] = h), v && (m = d[v - 1])),
                    (a[v] = l(a[v], i, m)),
                    "A" != d[v] && "C" == h && (d[v] = "C"),
                    s(a, v)),
                  c(r, a, o, i, v),
                  c(a, r, i, o, v);
                var w = r[v],
                  x = a && a[v],
                  S = w.length,
                  k = a && x.length;
                (o.x = w[S - 2]),
                  (o.y = w[S - 1]),
                  (o.bx = u(w[S - 4]) || o.x),
                  (o.by = u(w[S - 3]) || o.y),
                  (i.bx = a && (u(x[k - 4]) || i.x)),
                  (i.by = a && (u(x[k - 3]) || i.y)),
                  (i.x = a && x[k - 2]),
                  (i.y = a && x[k - 1]);
              }
              return a || (n.curve = b(r)), a ? [r, a] : r;
            }
            function q(e, t) {
              for (var n = [], r = 0, a = e.length; a - 2 * !t > r; r += 2) {
                var o = [
                  { x: +e[r - 2], y: +e[r - 1] },
                  { x: +e[r], y: +e[r + 1] },
                  { x: +e[r + 2], y: +e[r + 3] },
                  { x: +e[r + 4], y: +e[r + 5] },
                ];
                t
                  ? r
                    ? a - 4 == r
                      ? (o[3] = { x: +e[0], y: +e[1] })
                      : a - 2 == r &&
                        ((o[2] = { x: +e[0], y: +e[1] }),
                        (o[3] = { x: +e[2], y: +e[3] }))
                    : (o[0] = { x: +e[a - 2], y: +e[a - 1] })
                  : a - 4 == r
                    ? (o[3] = o[2])
                    : r || (o[0] = { x: +e[r], y: +e[r + 1] }),
                  n.push([
                    "C",
                    (-o[0].x + 6 * o[1].x + o[2].x) / 6,
                    (-o[0].y + 6 * o[1].y + o[2].y) / 6,
                    (o[1].x + 6 * o[2].x - o[3].x) / 6,
                    (o[1].y + 6 * o[2].y - o[3].y) / 6,
                    o[2].x,
                    o[2].y,
                  ]);
              }
              return n;
            }
            (e.path = g),
              (e.path.getTotalLength = S),
              (e.path.getPointAtLength = k),
              (e.path.getSubpath = function (e, t, n) {
                if (this.getTotalLength(e) - n < 1e-6) return E(e, t).end;
                var r = E(e, n, 1);
                return t ? E(r, t).end : r;
              }),
              (a.getTotalLength = function () {
                if (this.node.getTotalLength) return this.node.getTotalLength();
              }),
              (a.getPointAtLength = function (e) {
                return k(this.attr("d"), e);
              }),
              (a.getSubpath = function (t, n) {
                return e.path.getSubpath(this.attr("d"), t, n);
              }),
              (e._.box = v),
              (e.path.findDotsAtSegment = C),
              (e.path.bezierBBox = _),
              (e.path.isPointInsideBBox = T),
              (e.closest = function (t, n, r, a) {
                for (
                  var o = 100,
                    i = v(t - o / 2, n - o / 2, o, o),
                    l = [],
                    s = r[0].hasOwnProperty("x")
                      ? function (e) {
                          return { x: r[e].x, y: r[e].y };
                        }
                      : function (e) {
                          return { x: r[e], y: a[e] };
                        },
                    u = 0;
                  o <= 1e6 && !u;

                ) {
                  for (var c = 0, f = r.length; c < f; c++) {
                    var d = s(c);
                    if (T(i, d.x, d.y)) {
                      u++, l.push(d);
                      break;
                    }
                  }
                  u || (i = v(t - (o *= 2) / 2, n - o / 2, o, o));
                }
                if (1e6 != o) {
                  var p,
                    h = 1 / 0;
                  for (c = 0, f = l.length; c < f; c++) {
                    var m = e.len(t, n, l[c].x, l[c].y);
                    h > m && ((h = m), (l[c].len = m), (p = l[c]));
                  }
                  return p;
                }
              }),
              (e.path.isBBoxIntersect = O),
              (e.path.intersection = function (e, t) {
                return M(e, t);
              }),
              (e.path.intersectionNumber = function (e, t) {
                return M(e, t, 1);
              }),
              (e.path.isPointInside = function (e, t, n) {
                var r = D(e);
                return (
                  T(r, t, n) &&
                  M(
                    e,
                    [
                      ["M", t, n],
                      ["H", r.x2 + 10],
                    ],
                    1,
                  ) %
                    2 ==
                    1
                );
              }),
              (e.path.getBBox = D),
              (e.path.get = B),
              (e.path.toRelative = function (t) {
                var n = g(t),
                  r = String.prototype.toLowerCase;
                if (n.rel) return b(n.rel);
                (e.is(t, "array") && e.is(t && t[0], "array")) ||
                  (t = e.parsePathString(t));
                var a = [],
                  o = 0,
                  i = 0,
                  l = 0,
                  s = 0,
                  u = 0;
                "M" == t[0][0] &&
                  ((l = o = t[0][1]),
                  (s = i = t[0][2]),
                  u++,
                  a.push(["M", o, i]));
                for (var c = u, f = t.length; c < f; c++) {
                  var d = (a[c] = []),
                    p = t[c];
                  if (p[0] != r.call(p[0]))
                    switch (((d[0] = r.call(p[0])), d[0])) {
                      case "a":
                        (d[1] = p[1]),
                          (d[2] = p[2]),
                          (d[3] = p[3]),
                          (d[4] = p[4]),
                          (d[5] = p[5]),
                          (d[6] = +(p[6] - o).toFixed(3)),
                          (d[7] = +(p[7] - i).toFixed(3));
                        break;
                      case "v":
                        d[1] = +(p[1] - i).toFixed(3);
                        break;
                      case "m":
                        (l = p[1]), (s = p[2]);
                      default:
                        for (var h = 1, m = p.length; h < m; h++)
                          d[h] = +(p[h] - (h % 2 ? o : i)).toFixed(3);
                    }
                  else {
                    (d = a[c] = []),
                      "m" == p[0] && ((l = p[1] + o), (s = p[2] + i));
                    for (var v = 0, w = p.length; v < w; v++) a[c][v] = p[v];
                  }
                  var x = a[c].length;
                  switch (a[c][0]) {
                    case "z":
                      (o = l), (i = s);
                      break;
                    case "h":
                      o += +a[c][x - 1];
                      break;
                    case "v":
                      i += +a[c][x - 1];
                      break;
                    default:
                      (o += +a[c][x - 2]), (i += +a[c][x - 1]);
                  }
                }
                return (a.toString = y), (n.rel = b(a)), a;
              }),
              (e.path.toAbsolute = z),
              (e.path.toCubic = W),
              (e.path.map = function (e, t) {
                if (!t) return e;
                var n, r, a, o, i, l, s;
                for (a = 0, i = (e = W(e)).length; a < i; a++)
                  for (o = 1, l = (s = e[a]).length; o < l; o += 2)
                    (n = t.x(s[o], s[o + 1])),
                      (r = t.y(s[o], s[o + 1])),
                      (s[o] = n),
                      (s[o + 1] = r);
                return e;
              }),
              (e.path.toString = y),
              (e.path.clone = b);
          }),
          a.plugin(function (e, t, n, a) {
            var o = Math.max,
              i = Math.min,
              l = function (e) {
                if (
                  ((this.items = []),
                  (this.bindings = {}),
                  (this.length = 0),
                  (this.type = "set"),
                  e)
                )
                  for (var t = 0, n = e.length; t < n; t++)
                    e[t] &&
                      ((this[this.items.length] = this.items[
                        this.items.length
                      ] =
                        e[t]),
                      this.length++);
              },
              s = l.prototype;
            (s.push = function () {
              for (var e, t, n = 0, r = arguments.length; n < r; n++)
                (e = arguments[n]) &&
                  ((this[(t = this.items.length)] = this.items[t] = e),
                  this.length++);
              return this;
            }),
              (s.pop = function () {
                return (
                  this.length && delete this[this.length--], this.items.pop()
                );
              }),
              (s.forEach = function (e, t) {
                for (var n = 0, r = this.items.length; n < r; n++)
                  if (!1 === e.call(t, this.items[n], n)) return this;
                return this;
              }),
              (s.animate = function (t, n, a, o) {
                "function" != typeof a || a.length || ((o = a), (a = r.linear)),
                  t instanceof e._.Animation &&
                    ((o = t.callback),
                    (a = t.easing),
                    (n = a.dur),
                    (t = t.attr));
                var i = arguments;
                if (e.is(t, "array") && e.is(i[i.length - 1], "array"))
                  var l = !0;
                var s,
                  u = function () {
                    s ? (this.b = s) : (s = this.b);
                  },
                  c = 0,
                  f = this,
                  d =
                    o &&
                    function () {
                      ++c == f.length && o.call(this);
                    };
                return this.forEach(function (e, r) {
                  eve.once("snap.animcreated." + e.id, u),
                    l
                      ? i[r] && e.animate.apply(e, i[r])
                      : e.animate(t, n, a, d);
                });
              }),
              (s.remove = function () {
                for (; this.length; ) this.pop().remove();
                return this;
              }),
              (s.bind = function (e, t, n) {
                var r = {};
                if ("function" == typeof t) this.bindings[e] = t;
                else {
                  var a = n || e;
                  this.bindings[e] = function (e) {
                    (r[a] = e), t.attr(r);
                  };
                }
                return this;
              }),
              (s.attr = function (e) {
                var t = {};
                for (var n in e)
                  this.bindings[n] ? this.bindings[n](e[n]) : (t[n] = e[n]);
                for (var r = 0, a = this.items.length; r < a; r++)
                  this.items[r].attr(t);
                return this;
              }),
              (s.clear = function () {
                for (; this.length; ) this.pop();
              }),
              (s.splice = function (e, t, n) {
                (e = e < 0 ? o(this.length + e, 0) : e),
                  (t = o(0, i(this.length - e, t)));
                var r,
                  a = [],
                  s = [],
                  u = [];
                for (r = 2; r < arguments.length; r++) u.push(arguments[r]);
                for (r = 0; r < t; r++) s.push(this[e + r]);
                for (; r < this.length - e; r++) a.push(this[e + r]);
                var c = u.length;
                for (r = 0; r < c + a.length; r++)
                  this.items[e + r] = this[e + r] = r < c ? u[r] : a[r - c];
                for (r = this.items.length = this.length -= t - c; this[r]; )
                  delete this[r++];
                return new l(s);
              }),
              (s.exclude = function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                  if (this[t] == e) return this.splice(t, 1), !0;
                return !1;
              }),
              (s.insertAfter = function (e) {
                for (var t = this.items.length; t--; )
                  this.items[t].insertAfter(e);
                return this;
              }),
              (s.getBBox = function () {
                for (
                  var e = [], t = [], n = [], r = [], a = this.items.length;
                  a--;

                )
                  if (!this.items[a].removed) {
                    var l = this.items[a].getBBox();
                    e.push(l.x),
                      t.push(l.y),
                      n.push(l.x + l.width),
                      r.push(l.y + l.height);
                  }
                return {
                  x: (e = i.apply(0, e)),
                  y: (t = i.apply(0, t)),
                  x2: (n = o.apply(0, n)),
                  y2: (r = o.apply(0, r)),
                  width: n - e,
                  height: r - t,
                  cx: e + (n - e) / 2,
                  cy: t + (r - t) / 2,
                };
              }),
              (s.clone = function (e) {
                e = new l();
                for (var t = 0, n = this.items.length; t < n; t++)
                  e.push(this.items[t].clone());
                return e;
              }),
              (s.toString = function () {
                return "Snap\u2018s set";
              }),
              (s.type = "set"),
              (e.Set = l),
              (e.set = function () {
                var e = new l();
                return (
                  arguments.length &&
                    e.push.apply(e, Array.prototype.slice.call(arguments, 0)),
                  e
                );
              });
          }),
          a.plugin(function (e, t, n, r) {
            var a = {},
              o = /[%a-z]+$/i,
              i = String;
            function l(e) {
              var t = e[0];
              switch (t.toLowerCase()) {
                case "t":
                  return [t, 0, 0];
                case "m":
                  return [t, 1, 0, 0, 1, 0, 0];
                case "r":
                  return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
                case "s":
                  return 5 == e.length
                    ? [t, 1, 1, e[3], e[4]]
                    : 3 == e.length
                      ? [t, 1, 1]
                      : [t, 1];
              }
            }
            function s(e) {
              return e;
            }
            function u(e) {
              return e.join(" ");
            }
            function c(t) {
              return e.rgb(t[0], t[1], t[2], t[3]);
            }
            function f(e) {
              var t,
                n,
                r,
                a,
                o,
                i,
                l = 0,
                s = [];
              for (t = 0, n = e.length; t < n; t++) {
                for (
                  o = "[", i = ['"' + e[t][0] + '"'], r = 1, a = e[t].length;
                  r < a;
                  r++
                )
                  i[r] = "val[" + l++ + "]";
                (o += i + "]"), (s[t] = o);
              }
              return Function(
                "val",
                "return Snap.path.toString.call([" + s + "])",
              );
            }
            function d(e) {
              for (var t = [], n = 0, r = e.length; n < r; n++)
                for (var a = 1, o = e[n].length; a < o; a++) t.push(e[n][a]);
              return t;
            }
            function p(e) {
              return isFinite(e);
            }
            (a.stroke = a.fill = "colour"),
              (t.prototype.equal = function (e, t) {
                return eve("snap.util.equal", this, e, t).firstDefined();
              }),
              eve.on("snap.util.equal", function (t, n) {
                var r,
                  h,
                  m = i(this.attr(t) || ""),
                  g = this;
                if ("colour" == a[t])
                  return (
                    (r = e.color(m)),
                    (h = e.color(n)),
                    {
                      from: [r.r, r.g, r.b, r.opacity],
                      to: [h.r, h.g, h.b, h.opacity],
                      f: c,
                    }
                  );
                if ("viewBox" == t)
                  return {
                    from: (r = this.attr(t).vb.split(" ").map(Number)),
                    to: (h = n.split(" ").map(Number)),
                    f: u,
                  };
                if (
                  "transform" == t ||
                  "gradientTransform" == t ||
                  "patternTransform" == t
                )
                  return (
                    "string" == typeof n &&
                      (n = i(n).replace(/\.{3}|\u2026/g, m)),
                    (function (t, n, r) {
                      (t = t || new e.Matrix()),
                        (n = n || new e.Matrix()),
                        (t =
                          e.parseTransformString(t.toTransformString()) || []),
                        (n =
                          e.parseTransformString(n.toTransformString()) || []);
                      for (
                        var a,
                          o,
                          i,
                          s,
                          u = Math.max(t.length, n.length),
                          c = [],
                          p = [],
                          h = 0;
                        h < u;
                        h++
                      ) {
                        if (
                          ((i = t[h] || l(n[h])),
                          (s = n[h] || l(i)),
                          i[0] != s[0] ||
                            ("r" == i[0].toLowerCase() &&
                              (i[2] != s[2] || i[3] != s[3])) ||
                            ("s" == i[0].toLowerCase() &&
                              (i[3] != s[3] || i[4] != s[4])))
                        ) {
                          (t = e._.transform2matrix(t, r())),
                            (n = e._.transform2matrix(n, r())),
                            (c = [["m", t.a, t.b, t.c, t.d, t.e, t.f]]),
                            (p = [["m", n.a, n.b, n.c, n.d, n.e, n.f]]);
                          break;
                        }
                        for (
                          c[h] = [],
                            p[h] = [],
                            a = 0,
                            o = Math.max(i.length, s.length);
                          a < o;
                          a++
                        )
                          a in i && (c[h][a] = i[a]),
                            a in s && (p[h][a] = s[a]);
                      }
                      return { from: d(c), to: d(p), f: f(c) };
                    })(
                      (m = this.matrix),
                      (n = e._.rgTransform.test(n)
                        ? e._.transform2matrix(n, this.getBBox())
                        : e._.transform2matrix(
                            e._.svgTransform2string(n),
                            this.getBBox(),
                          )),
                      function () {
                        return g.getBBox(1);
                      },
                    )
                  );
                if ("d" == t || "path" == t)
                  return {
                    from: d((r = e.path.toCubic(m, n))[0]),
                    to: d(r[1]),
                    f: f(r[0]),
                  };
                if ("points" == t)
                  return {
                    from: (r = i(m).split(e._.separator)),
                    to: (h = i(n).split(e._.separator)),
                    f: function (e) {
                      return e;
                    },
                  };
                if (p(m) && p(n))
                  return { from: parseFloat(m), to: parseFloat(n), f: s };
                var v,
                  y,
                  b,
                  w = m.match(o),
                  x = i(n).match(o);
                return w &&
                  ((y = w),
                  (b = x),
                  e.is(y, "array") &&
                    e.is(b, "array") &&
                    y.toString() == b.toString())
                  ? {
                      from: parseFloat(m),
                      to: parseFloat(n),
                      f:
                        ((v = w),
                        function (e) {
                          return +e.toFixed(3) + v;
                        }),
                    }
                  : { from: this.asPX(t), to: this.asPX(t, n), f: s };
              });
          }),
          a.plugin(function (e, t, n, r) {
            for (
              var a = t.prototype,
                o = ("createTouch" in r.doc),
                i = [
                  "click",
                  "dblclick",
                  "mousedown",
                  "mousemove",
                  "mouseout",
                  "mouseover",
                  "mouseup",
                  "touchstart",
                  "touchmove",
                  "touchend",
                  "touchcancel",
                ],
                l = {
                  mousedown: "touchstart",
                  mousemove: "touchmove",
                  mouseup: "touchend",
                },
                s = function (e, t) {
                  var n = "y" == e ? "scrollTop" : "scrollLeft",
                    a = t && t.node ? t.node.ownerDocument : r.doc;
                  return a[
                    (n in a.documentElement) ? "documentElement" : "body"
                  ][n];
                },
                u = function () {
                  return this.originalEvent.preventDefault();
                },
                c = function () {
                  return this.originalEvent.stopPropagation();
                },
                f = function (e, t, n, r) {
                  var a = o && l[t] ? l[t] : t,
                    i = function (a) {
                      var i = s("y", r),
                        f = s("x", r);
                      if (o && l.hasOwnProperty(t))
                        for (
                          var d = 0,
                            p = a.targetTouches && a.targetTouches.length;
                          d < p;
                          d++
                        )
                          if (
                            a.targetTouches[d].target == e ||
                            e.contains(a.targetTouches[d].target)
                          ) {
                            var h = a;
                            ((a = a.targetTouches[d]).originalEvent = h),
                              (a.preventDefault = u),
                              (a.stopPropagation = c);
                            break;
                          }
                      var m = a.clientX + f,
                        g = a.clientY + i;
                      return n.call(r, a, m, g);
                    };
                  return (
                    t !== a && e.addEventListener(t, i, !1),
                    e.addEventListener(a, i, !1),
                    function () {
                      return (
                        t !== a && e.removeEventListener(t, i, !1),
                        e.removeEventListener(a, i, !1),
                        !0
                      );
                    }
                  );
                },
                d = [],
                p = function (e) {
                  for (
                    var t,
                      n = e.clientX,
                      r = e.clientY,
                      a = s("y"),
                      i = s("x"),
                      l = d.length;
                    l--;

                  ) {
                    if (((t = d[l]), o)) {
                      for (var u, c = e.touches && e.touches.length; c--; )
                        if (
                          (u = e.touches[c]).identifier == t.el._drag.id ||
                          t.el.node.contains(u.target)
                        ) {
                          (n = u.clientX),
                            (r = u.clientY),
                            (e.originalEvent
                              ? e.originalEvent
                              : e
                            ).preventDefault();
                          break;
                        }
                    } else e.preventDefault();
                    var f = t.el.node;
                    f.nextSibling, f.parentNode, f.style.display;
                    (n += i),
                      (r += a),
                      eve(
                        "snap.drag.move." + t.el.id,
                        t.move_scope || t.el,
                        n - t.el._drag.x,
                        r - t.el._drag.y,
                        n,
                        r,
                        e,
                      );
                  }
                },
                h = function (t) {
                  e.unmousemove(p).unmouseup(h);
                  for (var n, r = d.length; r--; )
                    ((n = d[r]).el._drag = {}),
                      eve(
                        "snap.drag.end." + n.el.id,
                        n.end_scope || n.start_scope || n.move_scope || n.el,
                        t,
                      ),
                      eve.off("snap.drag.*." + n.el.id);
                  d = [];
                },
                m = i.length;
              m--;

            )
              !(function (t) {
                (e[t] = a[t] =
                  function (n, r) {
                    if (e.is(n, "function"))
                      (this.events = this.events || []),
                        this.events.push({
                          name: t,
                          f: n,
                          unbind: f(this.node || document, t, n, r || this),
                        });
                    else
                      for (var a = 0, o = this.events.length; a < o; a++)
                        if (this.events[a].name == t)
                          try {
                            this.events[a].f.call(this);
                          } catch (i) {}
                    return this;
                  }),
                  (e["un" + t] = a["un" + t] =
                    function (e) {
                      for (var n = this.events || [], r = n.length; r--; )
                        if (n[r].name == t && (n[r].f == e || !e))
                          return (
                            n[r].unbind(),
                            n.splice(r, 1),
                            !n.length && delete this.events,
                            this
                          );
                      return this;
                    });
              })(i[m]);
            (a.hover = function (e, t, n, r) {
              return this.mouseover(e, n).mouseout(t, r || n);
            }),
              (a.unhover = function (e, t) {
                return this.unmouseover(e).unmouseout(t);
              });
            var g = [];
            (a.drag = function (t, n, r, a, o, i) {
              var l,
                s = this;
              if (!arguments.length)
                return s.drag(
                  function (e, t) {
                    this.attr({ transform: l + (l ? "T" : "t") + [e, t] });
                  },
                  function () {
                    l = this.transform().local;
                  },
                );
              function u(l, u, c) {
                (l.originalEvent || l).preventDefault(),
                  (s._drag.x = u),
                  (s._drag.y = c),
                  (s._drag.id = l.identifier),
                  !d.length && e.mousemove(p).mouseup(h),
                  d.push({
                    el: s,
                    move_scope: a,
                    start_scope: o,
                    end_scope: i,
                  }),
                  n && eve.on("snap.drag.start." + s.id, n),
                  t && eve.on("snap.drag.move." + s.id, t),
                  r && eve.on("snap.drag.end." + s.id, r),
                  eve("snap.drag.start." + s.id, o || a || s, u, c, l);
              }
              function c(e, t, n) {
                eve("snap.draginit." + s.id, s, e, t, n);
              }
              return (
                eve.on("snap.draginit." + s.id, u),
                (s._drag = {}),
                g.push({ el: s, start: u, init: c }),
                s.mousedown(c),
                s
              );
            }),
              (a.undrag = function () {
                for (var t = g.length; t--; )
                  g[t].el == this &&
                    (this.unmousedown(g[t].init),
                    g.splice(t, 1),
                    eve.unbind("snap.drag.*." + this.id),
                    eve.unbind("snap.draginit." + this.id));
                return !g.length && e.unmousemove(p).unmouseup(h), this;
              });
          }),
          a.plugin(function (e, t, n, r) {
            t.prototype;
            var a = n.prototype,
              o = /^\s*url\((.+)\)/,
              i = String,
              l = e._.$;
            (e.filter = {}),
              (a.filter = function (n) {
                var r = this;
                "svg" != r.type && (r = r.paper);
                var a = e.parse(i(n)),
                  o = e._.id(),
                  s = (r.node.offsetWidth, r.node.offsetHeight, l("filter"));
                return (
                  l(s, { id: o, filterUnits: "userSpaceOnUse" }),
                  s.appendChild(a.node),
                  r.defs.appendChild(s),
                  new t(s)
                );
              }),
              eve.on("snap.util.getattr.filter", function () {
                eve.stop();
                var t = l(this.node, "filter");
                if (t) {
                  var n = i(t).match(o);
                  return n && e.select(n[1]);
                }
              }),
              eve.on("snap.util.attr.filter", function (n) {
                if (n instanceof t && "filter" == n.type) {
                  eve.stop();
                  var r = n.node.id;
                  r || (l(n.node, { id: n.id }), (r = n.id)),
                    l(this.node, { filter: e.url(r) });
                }
                (n && "none" != n) ||
                  (eve.stop(), this.node.removeAttribute("filter"));
              }),
              (e.filter.blur = function (t, n) {
                null == t && (t = 2);
                var r = null == n ? t : [t, n];
                return e.format('<feGaussianBlur stdDeviation="{def}"/>', {
                  def: r,
                });
              }),
              (e.filter.blur.toString = function () {
                return this();
              }),
              (e.filter.shadow = function (t, n, r, a, o) {
                return (
                  null == o &&
                    (null == a
                      ? ((o = r), (r = 4), (a = "#000"))
                      : ((o = a), (a = r), (r = 4))),
                  null == r && (r = 4),
                  null == o && (o = 1),
                  null == t && ((t = 0), (n = 2)),
                  null == n && (n = t),
                  (a = e.color(a)),
                  e.format(
                    '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                    { color: a, dx: t, dy: n, blur: r, opacity: o },
                  )
                );
              }),
              (e.filter.shadow.toString = function () {
                return this();
              }),
              (e.filter.grayscale = function (t) {
                return (
                  null == t && (t = 1),
                  e.format(
                    '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
                    {
                      a: 0.2126 + 0.7874 * (1 - t),
                      b: 0.7152 - 0.7152 * (1 - t),
                      c: 0.0722 - 0.0722 * (1 - t),
                      d: 0.2126 - 0.2126 * (1 - t),
                      e: 0.7152 + 0.2848 * (1 - t),
                      f: 0.0722 - 0.0722 * (1 - t),
                      g: 0.2126 - 0.2126 * (1 - t),
                      h: 0.0722 + 0.9278 * (1 - t),
                    },
                  )
                );
              }),
              (e.filter.grayscale.toString = function () {
                return this();
              }),
              (e.filter.sepia = function (t) {
                return (
                  null == t && (t = 1),
                  e.format(
                    '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
                    {
                      a: 0.393 + 0.607 * (1 - t),
                      b: 0.769 - 0.769 * (1 - t),
                      c: 0.189 - 0.189 * (1 - t),
                      d: 0.349 - 0.349 * (1 - t),
                      e: 0.686 + 0.314 * (1 - t),
                      f: 0.168 - 0.168 * (1 - t),
                      g: 0.272 - 0.272 * (1 - t),
                      h: 0.534 - 0.534 * (1 - t),
                      i: 0.131 + 0.869 * (1 - t),
                    },
                  )
                );
              }),
              (e.filter.sepia.toString = function () {
                return this();
              }),
              (e.filter.saturate = function (t) {
                return (
                  null == t && (t = 1),
                  e.format(
                    '<feColorMatrix type="saturate" values="{amount}"/>',
                    { amount: 1 - t },
                  )
                );
              }),
              (e.filter.saturate.toString = function () {
                return this();
              }),
              (e.filter.hueRotate = function (t) {
                return (
                  (t = t || 0),
                  e.format(
                    '<feColorMatrix type="hueRotate" values="{angle}"/>',
                    { angle: t },
                  )
                );
              }),
              (e.filter.hueRotate.toString = function () {
                return this();
              }),
              (e.filter.invert = function (t) {
                return (
                  null == t && (t = 1),
                  e.format(
                    '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                    { amount: t, amount2: 1 - t },
                  )
                );
              }),
              (e.filter.invert.toString = function () {
                return this();
              }),
              (e.filter.brightness = function (t) {
                return (
                  null == t && (t = 1),
                  e.format(
                    '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
                    { amount: t },
                  )
                );
              }),
              (e.filter.brightness.toString = function () {
                return this();
              }),
              (e.filter.contrast = function (t) {
                return (
                  null == t && (t = 1),
                  e.format(
                    '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                    { amount: t, amount2: 0.5 - t / 2 },
                  )
                );
              }),
              (e.filter.contrast.toString = function () {
                return this();
              });
          }),
          a.plugin(function (e, t, n, r, a) {
            var o = e._.box,
              i = e.is,
              l = /^[^a-z]*([tbmlrc])/i,
              s = function () {
                return "T" + this.dx + "," + this.dy;
              };
            (t.prototype.getAlign = function (e, t) {
              null == t && i(e, "string") && ((t = e), (e = null));
              var n = (e = e || this.paper).getBBox ? e.getBBox() : o(e),
                r = this.getBBox(),
                a = {};
              switch ((t = (t = t && t.match(l)) ? t[1].toLowerCase() : "c")) {
                case "t":
                  (a.dx = 0), (a.dy = n.y - r.y);
                  break;
                case "b":
                  (a.dx = 0), (a.dy = n.y2 - r.y2);
                  break;
                case "m":
                  (a.dx = 0), (a.dy = n.cy - r.cy);
                  break;
                case "l":
                  (a.dx = n.x - r.x), (a.dy = 0);
                  break;
                case "r":
                  (a.dx = n.x2 - r.x2), (a.dy = 0);
                  break;
                default:
                  (a.dx = n.cx - r.cx), (a.dy = 0);
              }
              return (a.toString = s), a;
            }),
              (t.prototype.align = function (e, t) {
                return this.transform("..." + this.getAlign(e, t));
              });
          }),
          a.plugin(function (e, t, n, a, o) {
            var i = t.prototype,
              l = e.is,
              s = String,
              u = "hasOwnProperty";
            function c(e, t, n) {
              return function (r) {
                var a = r.slice(e, t);
                return 1 == a.length && (a = a[0]), n ? n(a) : a;
              };
            }
            var f = function (e, t, n, a) {
              "function" != typeof n || n.length || ((a = n), (n = r.linear)),
                (this.attr = e),
                (this.dur = t),
                n && (this.easing = n),
                a && (this.callback = a);
            };
            (e._.Animation = f),
              (e.animation = function (e, t, n, r) {
                return new f(e, t, n, r);
              }),
              (i.inAnim = function () {
                var e = this,
                  t = [];
                for (var n in e.anims)
                  e.anims[u](n) &&
                    (function (e) {
                      t.push({
                        anim: new f(e._attrs, e.dur, e.easing, e._callback),
                        mina: e,
                        curStatus: e.status(),
                        status: function (t) {
                          return e.status(t);
                        },
                        stop: function () {
                          e.stop();
                        },
                      });
                    })(e.anims[n]);
                return t;
              }),
              (e.animate = function (e, t, n, a, o, i) {
                "function" != typeof o || o.length || ((i = o), (o = r.linear));
                var l = r.time(),
                  s = r(e, t, l, l + a, r.time, n, o);
                return i && eve.once("mina.finish." + s.id, i), s;
              }),
              (i.stop = function () {
                for (var e = this.inAnim(), t = 0, n = e.length; t < n; t++)
                  e[t].stop();
                return this;
              }),
              (i.animate = function (e, t, n, a) {
                "function" != typeof n || n.length || ((a = n), (n = r.linear)),
                  e instanceof f &&
                    ((a = e.callback),
                    (n = e.easing),
                    (t = e.dur),
                    (e = e.attr));
                var o,
                  i,
                  d,
                  p,
                  h = [],
                  m = [],
                  g = {},
                  v = this;
                for (var y in e)
                  if (e[u](y)) {
                    v.equal
                      ? ((o = (p = v.equal(y, s(e[y]))).from),
                        (i = p.to),
                        (d = p.f))
                      : ((o = +v.attr(y)), (i = +e[y]));
                    var b = l(o, "array") ? o.length : 1;
                    (g[y] = c(h.length, h.length + b, d)),
                      (h = h.concat(o)),
                      (m = m.concat(i));
                  }
                var w = r.time(),
                  x = r(
                    h,
                    m,
                    w,
                    w + t,
                    r.time,
                    function (e) {
                      var t = {};
                      for (var n in g) g[u](n) && (t[n] = g[n](e));
                      v.attr(t);
                    },
                    n,
                  );
                return (
                  (v.anims[x.id] = x),
                  (x._attrs = e),
                  (x._callback = a),
                  eve("snap.animcreated." + v.id, x),
                  eve.once("mina.finish." + x.id, function () {
                    eve.off("mina.*." + x.id),
                      delete v.anims[x.id],
                      a && a.call(v);
                  }),
                  eve.once("mina.stop." + x.id, function () {
                    eve.off("mina.*." + x.id), delete v.anims[x.id];
                  }),
                  v
                );
              });
          }),
          a.plugin(function (e, t, n, r) {
            function a(e) {
              e = e.split(/(?=#)/);
              var t = new String(e[5]);
              return (
                (t[50] = e[0]),
                (t[100] = e[1]),
                (t[200] = e[2]),
                (t[300] = e[3]),
                (t[400] = e[4]),
                (t[500] = e[5]),
                (t[600] = e[6]),
                (t[700] = e[7]),
                (t[800] = e[8]),
                (t[900] = e[9]),
                e[10] &&
                  ((t.A100 = e[10]),
                  (t.A200 = e[11]),
                  (t.A400 = e[12]),
                  (t.A700 = e[13])),
                t
              );
            }
            (e.mui = {}),
              (e.flat = {}),
              (e.mui.red = a(
                "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
              )),
              (e.mui.pink = a(
                "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
              )),
              (e.mui.purple = a(
                "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
              )),
              (e.mui.deeppurple = a(
                "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
              )),
              (e.mui.indigo = a(
                "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
              )),
              (e.mui.blue = a(
                "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
              )),
              (e.mui.lightblue = a(
                "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
              )),
              (e.mui.cyan = a(
                "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
              )),
              (e.mui.teal = a(
                "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
              )),
              (e.mui.green = a(
                "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
              )),
              (e.mui.lightgreen = a(
                "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
              )),
              (e.mui.lime = a(
                "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
              )),
              (e.mui.yellow = a(
                "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
              )),
              (e.mui.amber = a(
                "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
              )),
              (e.mui.orange = a(
                "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
              )),
              (e.mui.deeporange = a(
                "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
              )),
              (e.mui.brown = a(
                "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
              )),
              (e.mui.grey = a(
                "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
              )),
              (e.mui.bluegrey = a(
                "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238",
              )),
              (e.flat.turquoise = "#1abc9c"),
              (e.flat.greensea = "#16a085"),
              (e.flat.sunflower = "#f1c40f"),
              (e.flat.orange = "#f39c12"),
              (e.flat.emerland = "#2ecc71"),
              (e.flat.nephritis = "#27ae60"),
              (e.flat.carrot = "#e67e22"),
              (e.flat.pumpkin = "#d35400"),
              (e.flat.peterriver = "#3498db"),
              (e.flat.belizehole = "#2980b9"),
              (e.flat.alizarin = "#e74c3c"),
              (e.flat.pomegranate = "#c0392b"),
              (e.flat.amethyst = "#9b59b6"),
              (e.flat.wisteria = "#8e44ad"),
              (e.flat.clouds = "#ecf0f1"),
              (e.flat.silver = "#bdc3c7"),
              (e.flat.wetasphalt = "#34495e"),
              (e.flat.midnightblue = "#2c3e50"),
              (e.flat.concrete = "#95a5a6"),
              (e.flat.asbestos = "#7f8c8d"),
              (e.importMUIColors = function () {
                for (var t in e.mui)
                  e.mui.hasOwnProperty(t) && (window[t] = e.mui[t]);
              });
          }),
          (e.exports = a);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & a && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(o, i), o;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => wr,
          hasStandardBrowserEnv: () => Sr,
          hasStandardBrowserWebWorkerEnv: () => kr,
          navigator: () => xr,
          origin: () => Er,
        });
      var t,
        r = n(43),
        a = n.t(r, 2),
        o = n(391);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(t || (t = {}));
      const l = "popstate";
      function s(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function u(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function c(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          i(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? p(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function d(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function p(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function h(e, n, r, a) {
        void 0 === a && (a = {});
        let { window: o = document.defaultView, v5Compat: u = !1 } = a,
          p = o.history,
          h = t.Pop,
          m = null,
          g = v();
        function v() {
          return (p.state || { idx: null }).idx;
        }
        function y() {
          h = t.Pop;
          let e = v(),
            n = null == e ? null : e - g;
          (g = e), m && m({ action: h, location: w.location, delta: n });
        }
        function b(e) {
          let t =
              "null" !== o.location.origin
                ? o.location.origin
                : o.location.href,
            n = "string" === typeof e ? e : d(e);
          return (
            (n = n.replace(/ $/, "%20")),
            s(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), p.replaceState(i({}, p.state, { idx: g }), ""));
        let w = {
          get action() {
            return h;
          },
          get location() {
            return e(o, p);
          },
          listen(e) {
            if (m)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(l, y),
              (m = e),
              () => {
                o.removeEventListener(l, y), (m = null);
              }
            );
          },
          createHref: (e) => n(o, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, n) {
            h = t.Push;
            let a = f(w.location, e, n);
            r && r(a, e), (g = v() + 1);
            let i = c(a, g),
              l = w.createHref(a);
            try {
              p.pushState(i, "", l);
            } catch (s) {
              if (s instanceof DOMException && "DataCloneError" === s.name)
                throw s;
              o.location.assign(l);
            }
            u && m && m({ action: h, location: w.location, delta: 1 });
          },
          replace: function (e, n) {
            h = t.Replace;
            let a = f(w.location, e, n);
            r && r(a, e), (g = v());
            let o = c(a, g),
              i = w.createHref(a);
            p.replaceState(o, "", i),
              u && m && m({ action: h, location: w.location, delta: 0 });
          },
          go: (e) => p.go(e),
        };
        return w;
      }
      var m;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(m || (m = {}));
      const g = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function v(e, t, n, r) {
        return (
          void 0 === n && (n = []),
          void 0 === r && (r = {}),
          e.map((e, a) => {
            let o = [...n, String(a)],
              l = "string" === typeof e.id ? e.id : o.join("-");
            if (
              (s(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route",
              ),
              s(
                !r[l],
                'Found a route id collision on id "' +
                  l +
                  "\".  Route id's must be globally unique within Data Router usages",
              ),
              (function (e) {
                return !0 === e.index;
              })(e))
            ) {
              let n = i({}, e, t(e), { id: l });
              return (r[l] = n), n;
            }
            {
              let n = i({}, e, t(e), { id: l, children: void 0 });
              return (
                (r[l] = n),
                e.children && (n.children = v(e.children, t, o, r)),
                n
              );
            }
          })
        );
      }
      function y(e, t, n) {
        return void 0 === n && (n = "/"), b(e, t, n, !1);
      }
      function b(e, t, n, r) {
        let a = M(("string" === typeof t ? p(t) : t).pathname || "/", n);
        if (null == a) return null;
        let o = w(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(o);
        let i = null;
        for (let l = 0; null == i && l < o.length; ++l) {
          let e = R(a);
          i = N(o[l], e, r);
        }
        return i;
      }
      function w(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (s(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = B([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (s(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            w(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: F(l, e.index), routesMeta: u });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of x(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function x(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = x(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const S = /^:[\w-]+$/,
        k = 3,
        E = 2,
        C = 1,
        _ = 10,
        T = -2,
        O = (e) => "*" === e;
      function F(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(O) && (r += T),
          t && (r += E),
          n
            .filter((e) => !O(e))
            .reduce((e, t) => e + (S.test(t) ? k : "" === t ? C : _), r)
        );
      }
      function N(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          a = {},
          o = "/",
          i = [];
        for (let l = 0; l < r.length; ++l) {
          let e = r[l],
            s = l === r.length - 1,
            u = "/" === o ? t : t.slice(o.length) || "/",
            c = P(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
              u,
            ),
            f = e.route;
          if (
            (!c &&
              s &&
              n &&
              !r[r.length - 1].route.index &&
              (c = P(
                {
                  path: e.relativePath,
                  caseSensitive: e.caseSensitive,
                  end: !1,
                },
                u,
              )),
            !c)
          )
            return null;
          Object.assign(a, c.params),
            i.push({
              params: a,
              pathname: B([o, c.pathname]),
              pathnameBase: z(B([o, c.pathnameBase])),
              route: f,
            }),
            "/" !== c.pathnameBase && (o = B([o, c.pathnameBase]));
        }
        return i;
      }
      function P(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            u(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function R(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            u(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function M(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function D(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function A(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function j(e, t) {
        let n = A(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function L(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = p(e))
            : ((a = i({}, e)),
              s(
                !a.pathname || !a.pathname.includes("?"),
                D("?", "pathname", "search", a),
              ),
              s(
                !a.pathname || !a.pathname.includes("#"),
                D("#", "pathname", "hash", a),
              ),
              s(
                !a.search || !a.search.includes("#"),
                D("#", "search", "hash", a),
              ));
        let o,
          l = "" === e || "" === a.pathname,
          u = l ? "/" : a.pathname;
        if (null == u) o = n;
        else {
          let e = t.length - 1;
          if (!r && u.startsWith("..")) {
            let t = u.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let c = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? p(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: I(r), hash: U(a) };
          })(a, o),
          f = u && "/" !== u && u.endsWith("/"),
          d = (l || "." === u) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      const B = (e) => e.join("/").replace(/\/\/+/g, "/"),
        z = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        I = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        U = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      class H {
        constructor(e, t, n, r) {
          void 0 === r && (r = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = r),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n);
        }
      }
      function V(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        q = new Set(W),
        $ = ["get", ...W],
        Y = new Set($),
        Q = new Set([301, 302, 303, 307, 308]),
        G = new Set([307, 308]),
        K = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        X = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        J = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        Z = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ee = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
        te = "remix-router-transitions";
      function ne(e) {
        const n = e.window
            ? e.window
            : "undefined" !== typeof window
              ? window
              : void 0,
          r =
            "undefined" !== typeof n &&
            "undefined" !== typeof n.document &&
            "undefined" !== typeof n.document.createElement,
          a = !r;
        let o;
        if (
          (s(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter",
          ),
          e.mapRouteProperties)
        )
          o = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          o = (e) => ({ hasErrorBoundary: t(e) });
        } else o = ee;
        let l,
          c,
          d,
          p = {},
          h = v(e.routes, o, void 0, p),
          g = e.basename || "/",
          w = e.unstable_dataStrategy || fe,
          x = e.unstable_patchRoutesOnNavigation,
          S = i(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_partialHydration: !1,
              v7_prependBasename: !1,
              v7_relativeSplatPath: !1,
              v7_skipActionErrorRevalidation: !1,
            },
            e.future,
          ),
          k = null,
          E = new Set(),
          C = 1e3,
          _ = new Set(),
          T = null,
          O = null,
          F = null,
          N = null != e.hydrationData,
          P = y(h, e.history.location, g),
          R = null;
        if (null == P && !x) {
          let t = Ce(404, { pathname: e.history.location.pathname }),
            { matches: n, route: r } = Ee(h);
          (P = n), (R = { [r.id]: t });
        }
        if (P && !e.hydrationData) {
          dt(P, h, e.history.location.pathname).active && (P = null);
        }
        if (P)
          if (P.some((e) => e.route.lazy)) c = !1;
          else if (P.some((e) => e.route.loader))
            if (S.v7_partialHydration) {
              let t = e.hydrationData ? e.hydrationData.loaderData : null,
                n = e.hydrationData ? e.hydrationData.errors : null,
                r = (e) =>
                  !e.route.loader ||
                  (("function" !== typeof e.route.loader ||
                    !0 !== e.route.loader.hydrate) &&
                    ((t && void 0 !== t[e.route.id]) ||
                      (n && void 0 !== n[e.route.id])));
              if (n) {
                let e = P.findIndex((e) => void 0 !== n[e.route.id]);
                c = P.slice(0, e + 1).every(r);
              } else c = P.every(r);
            } else c = null != e.hydrationData;
          else c = !0;
        else if (((c = !1), (P = []), S.v7_partialHydration)) {
          let t = dt(null, h, e.history.location.pathname);
          t.active && t.matches && (P = t.matches);
        }
        let D,
          A,
          j = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: P,
            initialized: c,
            navigation: K,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || R,
            fetchers: new Map(),
            blockers: new Map(),
          },
          L = t.Pop,
          B = !1,
          z = !1,
          I = new Map(),
          U = null,
          H = !1,
          W = !1,
          q = [],
          $ = new Set(),
          Y = new Map(),
          Q = 0,
          ne = -1,
          oe = new Map(),
          le = new Set(),
          se = new Map(),
          ve = new Map(),
          ye = new Set(),
          be = new Map(),
          Te = new Map(),
          Re = new Map();
        function Me(e, t) {
          void 0 === t && (t = {}), (j = i({}, j, e));
          let n = [],
            r = [];
          S.v7_fetcherPersist &&
            j.fetchers.forEach((e, t) => {
              "idle" === e.state && (ye.has(t) ? r.push(t) : n.push(t));
            }),
            [...E].forEach((e) =>
              e(j, {
                deletedFetchers: r,
                unstable_viewTransitionOpts: t.viewTransitionOpts,
                unstable_flushSync: !0 === t.flushSync,
              }),
            ),
            S.v7_fetcherPersist &&
              (n.forEach((e) => j.fetchers.delete(e)), r.forEach((e) => Ze(e)));
        }
        function De(n, r, a) {
          var o, s;
          let u,
            { flushSync: c } = void 0 === a ? {} : a,
            f =
              null != j.actionData &&
              null != j.navigation.formMethod &&
              Ae(j.navigation.formMethod) &&
              "loading" === j.navigation.state &&
              !0 !== (null == (o = n.state) ? void 0 : o._isRedirect);
          u = r.actionData
            ? Object.keys(r.actionData).length > 0
              ? r.actionData
              : null
            : f
              ? j.actionData
              : null;
          let d = r.loaderData
              ? xe(j.loaderData, r.loaderData, r.matches || [], r.errors)
              : j.loaderData,
            p = j.blockers;
          p.size > 0 && ((p = new Map(p)), p.forEach((e, t) => p.set(t, J)));
          let m,
            g =
              !0 === B ||
              (null != j.navigation.formMethod &&
                Ae(j.navigation.formMethod) &&
                !0 !== (null == (s = n.state) ? void 0 : s._isRedirect));
          if (
            (l && ((h = l), (l = void 0)),
            H ||
              L === t.Pop ||
              (L === t.Push
                ? e.history.push(n, n.state)
                : L === t.Replace && e.history.replace(n, n.state)),
            L === t.Pop)
          ) {
            let e = I.get(j.location.pathname);
            e && e.has(n.pathname)
              ? (m = { currentLocation: j.location, nextLocation: n })
              : I.has(n.pathname) &&
                (m = { currentLocation: n, nextLocation: j.location });
          } else if (z) {
            let e = I.get(j.location.pathname);
            e
              ? e.add(n.pathname)
              : ((e = new Set([n.pathname])), I.set(j.location.pathname, e)),
              (m = { currentLocation: j.location, nextLocation: n });
          }
          Me(
            i({}, r, {
              actionData: u,
              loaderData: d,
              historyAction: L,
              location: n,
              initialized: !0,
              navigation: K,
              revalidation: "idle",
              restoreScrollPosition: ft(n, r.matches || j.matches),
              preventScrollReset: g,
              blockers: p,
            }),
            { viewTransitionOpts: m, flushSync: !0 === c },
          ),
            (L = t.Pop),
            (B = !1),
            (z = !1),
            (H = !1),
            (W = !1),
            (q = []);
        }
        async function ze(n, r, a) {
          D && D.abort(),
            (D = null),
            (L = n),
            (H = !0 === (a && a.startUninterruptedRevalidation)),
            (function (e, t) {
              if (T && F) {
                let n = ct(e, t);
                T[n] = F();
              }
            })(j.location, j.matches),
            (B = !0 === (a && a.preventScrollReset)),
            (z = !0 === (a && a.enableViewTransition));
          let o = l || h,
            s = a && a.overrideNavigation,
            u = y(o, r, g),
            c = !0 === (a && a.flushSync),
            f = dt(u, o, r.pathname);
          if ((f.active && f.matches && (u = f.matches), !u)) {
            let { error: e, notFoundMatches: t, route: n } = lt(r.pathname);
            return void De(
              r,
              { matches: t, loaderData: {}, errors: { [n.id]: e } },
              { flushSync: c },
            );
          }
          if (
            j.initialized &&
            !W &&
            (function (e, t) {
              if (e.pathname !== t.pathname || e.search !== t.search) return !1;
              if ("" === e.hash) return "" !== t.hash;
              if (e.hash === t.hash) return !0;
              if ("" !== t.hash) return !0;
              return !1;
            })(j.location, r) &&
            !(a && a.submission && Ae(a.submission.formMethod))
          )
            return void De(r, { matches: u }, { flushSync: c });
          D = new AbortController();
          let d,
            p = ge(e.history, r, D.signal, a && a.submission);
          if (a && a.pendingError)
            d = [ke(u).route.id, { type: m.error, error: a.pendingError }];
          else if (a && a.submission && Ae(a.submission.formMethod)) {
            let n = await (async function (e, n, r, a, o, i) {
              void 0 === i && (i = {});
              Ge();
              let l,
                s = (function (e, t) {
                  let n = {
                    state: "submitting",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text,
                  };
                  return n;
                })(n, r);
              if (
                (Me({ navigation: s }, { flushSync: !0 === i.flushSync }), o)
              ) {
                let t = await pt(a, n.pathname, e.signal);
                if ("aborted" === t.type) return { shortCircuited: !0 };
                if ("error" === t.type) {
                  let { boundaryId: e, error: r } = st(n.pathname, t);
                  return {
                    matches: t.partialMatches,
                    pendingActionResult: [e, { type: m.error, error: r }],
                  };
                }
                if (!t.matches) {
                  let {
                    notFoundMatches: e,
                    error: t,
                    route: r,
                  } = lt(n.pathname);
                  return {
                    matches: e,
                    pendingActionResult: [r.id, { type: m.error, error: t }],
                  };
                }
                a = t.matches;
              }
              let u = Ie(a, n);
              if (u.route.action || u.route.lazy) {
                if (
                  ((l = (await Ye("action", j, e, [u], a, null))[u.route.id]),
                  e.signal.aborted)
                )
                  return { shortCircuited: !0 };
              } else
                l = {
                  type: m.error,
                  error: Ce(405, {
                    method: e.method,
                    pathname: n.pathname,
                    routeId: u.route.id,
                  }),
                };
              if (Pe(l)) {
                let t;
                if (i && null != i.replace) t = i.replace;
                else {
                  t =
                    me(
                      l.response.headers.get("Location"),
                      new URL(e.url),
                      g,
                    ) ===
                    j.location.pathname + j.location.search;
                }
                return (
                  await $e(e, l, !0, { submission: r, replace: t }),
                  { shortCircuited: !0 }
                );
              }
              if (Fe(l)) throw Ce(400, { type: "defer-action" });
              if (Ne(l)) {
                let e = ke(a, u.route.id);
                return (
                  !0 !== (i && i.replace) && (L = t.Push),
                  { matches: a, pendingActionResult: [e.route.id, l] }
                );
              }
              return { matches: a, pendingActionResult: [u.route.id, l] };
            })(p, r, a.submission, u, f.active, {
              replace: a.replace,
              flushSync: c,
            });
            if (n.shortCircuited) return;
            if (n.pendingActionResult) {
              let [e, t] = n.pendingActionResult;
              if (Ne(t) && V(t.error) && 404 === t.error.status)
                return (
                  (D = null),
                  void De(r, {
                    matches: n.matches,
                    loaderData: {},
                    errors: { [e]: t.error },
                  })
                );
            }
            (u = n.matches || u),
              (d = n.pendingActionResult),
              (s = He(r, a.submission)),
              (c = !1),
              (f.active = !1),
              (p = ge(e.history, p.url, p.signal));
          }
          let {
            shortCircuited: v,
            matches: b,
            loaderData: w,
            errors: x,
          } = await (async function (t, n, r, a, o, s, u, c, f, d, p) {
            let m = o || He(n, s),
              v = s || u || Ue(m),
              y = !H && (!S.v7_partialHydration || !f);
            if (a) {
              if (y) {
                let e = qe(p);
                Me(
                  i({ navigation: m }, void 0 !== e ? { actionData: e } : {}),
                  { flushSync: d },
                );
              }
              let e = await pt(r, n.pathname, t.signal);
              if ("aborted" === e.type) return { shortCircuited: !0 };
              if ("error" === e.type) {
                let { boundaryId: t, error: r } = st(n.pathname, e);
                return {
                  matches: e.partialMatches,
                  loaderData: {},
                  errors: { [t]: r },
                };
              }
              if (!e.matches) {
                let { error: e, notFoundMatches: t, route: r } = lt(n.pathname);
                return { matches: t, loaderData: {}, errors: { [r.id]: e } };
              }
              r = e.matches;
            }
            let b = l || h,
              [w, x] = ie(
                e.history,
                j,
                r,
                v,
                n,
                S.v7_partialHydration && !0 === f,
                S.v7_skipActionErrorRevalidation,
                W,
                q,
                $,
                ye,
                se,
                le,
                b,
                g,
                p,
              );
            if (
              (ut(
                (e) =>
                  !(r && r.some((t) => t.route.id === e)) ||
                  (w && w.some((t) => t.route.id === e)),
              ),
              (ne = ++Q),
              0 === w.length && 0 === x.length)
            ) {
              let e = nt();
              return (
                De(
                  n,
                  i(
                    {
                      matches: r,
                      loaderData: {},
                      errors: p && Ne(p[1]) ? { [p[0]]: p[1].error } : null,
                    },
                    Se(p),
                    e ? { fetchers: new Map(j.fetchers) } : {},
                  ),
                  { flushSync: d },
                ),
                { shortCircuited: !0 }
              );
            }
            if (y) {
              let e = {};
              if (!a) {
                e.navigation = m;
                let t = qe(p);
                void 0 !== t && (e.actionData = t);
              }
              x.length > 0 &&
                (e.fetchers = (function (e) {
                  return (
                    e.forEach((e) => {
                      let t = j.fetchers.get(e.key),
                        n = Ve(void 0, t ? t.data : void 0);
                      j.fetchers.set(e.key, n);
                    }),
                    new Map(j.fetchers)
                  );
                })(x)),
                Me(e, { flushSync: d });
            }
            x.forEach((e) => {
              Y.has(e.key) && et(e.key),
                e.controller && Y.set(e.key, e.controller);
            });
            let k = () => x.forEach((e) => et(e.key));
            D && D.signal.addEventListener("abort", k);
            let { loaderResults: E, fetcherResults: C } = await Qe(
              j,
              r,
              w,
              x,
              t,
            );
            if (t.signal.aborted) return { shortCircuited: !0 };
            D && D.signal.removeEventListener("abort", k);
            x.forEach((e) => Y.delete(e.key));
            let _ = _e(E);
            if (_)
              return (
                await $e(t, _.result, !0, { replace: c }),
                { shortCircuited: !0 }
              );
            if (((_ = _e(C)), _))
              return (
                le.add(_.key),
                await $e(t, _.result, !0, { replace: c }),
                { shortCircuited: !0 }
              );
            let { loaderData: T, errors: O } = we(j, r, w, E, p, x, C, be);
            be.forEach((e, t) => {
              e.subscribe((n) => {
                (n || e.done) && be.delete(t);
              });
            }),
              S.v7_partialHydration &&
                f &&
                j.errors &&
                Object.entries(j.errors)
                  .filter((e) => {
                    let [t] = e;
                    return !w.some((e) => e.route.id === t);
                  })
                  .forEach((e) => {
                    let [t, n] = e;
                    O = Object.assign(O || {}, { [t]: n });
                  });
            let F = nt(),
              N = rt(ne),
              P = F || N || x.length > 0;
            return i(
              { matches: r, loaderData: T, errors: O },
              P ? { fetchers: new Map(j.fetchers) } : {},
            );
          })(
            p,
            r,
            u,
            f.active,
            s,
            a && a.submission,
            a && a.fetcherSubmission,
            a && a.replace,
            a && !0 === a.initialHydration,
            c,
            d,
          );
          v ||
            ((D = null),
            De(r, i({ matches: b || u }, Se(d), { loaderData: w, errors: x })));
        }
        function qe(e) {
          return e && !Ne(e[1])
            ? { [e[0]]: e[1].data }
            : j.actionData
              ? 0 === Object.keys(j.actionData).length
                ? null
                : j.actionData
              : void 0;
        }
        async function $e(a, o, l, u) {
          let {
            submission: c,
            fetcherSubmission: d,
            replace: p,
          } = void 0 === u ? {} : u;
          o.response.headers.has("X-Remix-Revalidate") && (W = !0);
          let h = o.response.headers.get("Location");
          s(h, "Expected a Location header on the redirect Response"),
            (h = me(h, new URL(a.url), g));
          let m = f(j.location, h, { _isRedirect: !0 });
          if (r) {
            let t = !1;
            if (o.response.headers.has("X-Remix-Reload-Document")) t = !0;
            else if (Z.test(h)) {
              const r = e.history.createURL(h);
              t = r.origin !== n.location.origin || null == M(r.pathname, g);
            }
            if (t)
              return void (p ? n.location.replace(h) : n.location.assign(h));
          }
          D = null;
          let v =
              !0 === p || o.response.headers.has("X-Remix-Replace")
                ? t.Replace
                : t.Push,
            { formMethod: y, formAction: b, formEncType: w } = j.navigation;
          !c && !d && y && b && w && (c = Ue(j.navigation));
          let x = c || d;
          if (G.has(o.response.status) && x && Ae(x.formMethod))
            await ze(v, m, {
              submission: i({}, x, { formAction: h }),
              preventScrollReset: B,
              enableViewTransition: l ? z : void 0,
            });
          else {
            let e = He(m, c);
            await ze(v, m, {
              overrideNavigation: e,
              fetcherSubmission: d,
              preventScrollReset: B,
              enableViewTransition: l ? z : void 0,
            });
          }
        }
        async function Ye(e, t, n, r, a, i) {
          let l,
            s = {};
          try {
            l = await de(w, e, t, n, r, a, i, p, o);
          } catch (u) {
            return (
              r.forEach((e) => {
                s[e.route.id] = { type: m.error, error: u };
              }),
              s
            );
          }
          for (let [o, c] of Object.entries(l))
            if (Oe(c)) {
              let e = c.result;
              s[o] = {
                type: m.redirect,
                response: he(e, n, o, a, g, S.v7_relativeSplatPath),
              };
            } else s[o] = await pe(c);
          return s;
        }
        async function Qe(t, n, r, a, o) {
          let i = t.matches,
            l = Ye("loader", t, o, r, n, null),
            s = Promise.all(
              a.map(async (n) => {
                if (n.matches && n.match && n.controller) {
                  let r = (
                    await Ye(
                      "loader",
                      t,
                      ge(e.history, n.path, n.controller.signal),
                      [n.match],
                      n.matches,
                      n.key,
                    )
                  )[n.match.route.id];
                  return { [n.key]: r };
                }
                return Promise.resolve({
                  [n.key]: {
                    type: m.error,
                    error: Ce(404, { pathname: n.path }),
                  },
                });
              }),
            ),
            u = await l,
            c = (await s).reduce((e, t) => Object.assign(e, t), {});
          return (
            await Promise.all([
              je(n, u, o.signal, i, t.loaderData),
              Le(n, c, a),
            ]),
            { loaderResults: u, fetcherResults: c }
          );
        }
        function Ge() {
          (W = !0),
            q.push(...ut()),
            se.forEach((e, t) => {
              Y.has(t) && ($.add(t), et(t));
            });
        }
        function Ke(e, t, n) {
          void 0 === n && (n = {}),
            j.fetchers.set(e, t),
            Me(
              { fetchers: new Map(j.fetchers) },
              { flushSync: !0 === (n && n.flushSync) },
            );
        }
        function Xe(e, t, n, r) {
          void 0 === r && (r = {});
          let a = ke(j.matches, t);
          Ze(e),
            Me(
              { errors: { [a.route.id]: n }, fetchers: new Map(j.fetchers) },
              { flushSync: !0 === (r && r.flushSync) },
            );
        }
        function Je(e) {
          return (
            S.v7_fetcherPersist &&
              (ve.set(e, (ve.get(e) || 0) + 1), ye.has(e) && ye.delete(e)),
            j.fetchers.get(e) || X
          );
        }
        function Ze(e) {
          let t = j.fetchers.get(e);
          !Y.has(e) || (t && "loading" === t.state && oe.has(e)) || et(e),
            se.delete(e),
            oe.delete(e),
            le.delete(e),
            ye.delete(e),
            $.delete(e),
            j.fetchers.delete(e);
        }
        function et(e) {
          let t = Y.get(e);
          s(t, "Expected fetch controller: " + e), t.abort(), Y.delete(e);
        }
        function tt(e) {
          for (let t of e) {
            let e = We(Je(t).data);
            j.fetchers.set(t, e);
          }
        }
        function nt() {
          let e = [],
            t = !1;
          for (let n of le) {
            let r = j.fetchers.get(n);
            s(r, "Expected fetcher: " + n),
              "loading" === r.state && (le.delete(n), e.push(n), (t = !0));
          }
          return tt(e), t;
        }
        function rt(e) {
          let t = [];
          for (let [n, r] of oe)
            if (r < e) {
              let e = j.fetchers.get(n);
              s(e, "Expected fetcher: " + n),
                "loading" === e.state && (et(n), oe.delete(n), t.push(n));
            }
          return tt(t), t.length > 0;
        }
        function at(e) {
          j.blockers.delete(e), Te.delete(e);
        }
        function ot(e, t) {
          let n = j.blockers.get(e) || J;
          s(
            ("unblocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "proceeding" === t.state) ||
              ("blocked" === n.state && "unblocked" === t.state) ||
              ("proceeding" === n.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + n.state + " -> " + t.state,
          );
          let r = new Map(j.blockers);
          r.set(e, t), Me({ blockers: r });
        }
        function it(e) {
          let { currentLocation: t, nextLocation: n, historyAction: r } = e;
          if (0 === Te.size) return;
          Te.size > 1 && u(!1, "A router only supports one blocker at a time");
          let a = Array.from(Te.entries()),
            [o, i] = a[a.length - 1],
            l = j.blockers.get(o);
          return l && "proceeding" === l.state
            ? void 0
            : i({ currentLocation: t, nextLocation: n, historyAction: r })
              ? o
              : void 0;
        }
        function lt(e) {
          let t = Ce(404, { pathname: e }),
            n = l || h,
            { matches: r, route: a } = Ee(n);
          return ut(), { notFoundMatches: r, route: a, error: t };
        }
        function st(e, t) {
          return {
            boundaryId: ke(t.partialMatches).route.id,
            error: Ce(400, {
              type: "route-discovery",
              pathname: e,
              message:
                null != t.error && "message" in t.error
                  ? t.error
                  : String(t.error),
            }),
          };
        }
        function ut(e) {
          let t = [];
          return (
            be.forEach((n, r) => {
              (e && !e(r)) || (n.cancel(), t.push(r), be.delete(r));
            }),
            t
          );
        }
        function ct(e, t) {
          if (O) {
            return (
              O(
                e,
                t.map((e) =>
                  (function (e, t) {
                    let { route: n, pathname: r, params: a } = e;
                    return {
                      id: n.id,
                      pathname: r,
                      params: a,
                      data: t[n.id],
                      handle: n.handle,
                    };
                  })(e, j.loaderData),
                ),
              ) || e.key
            );
          }
          return e.key;
        }
        function ft(e, t) {
          if (T) {
            let n = ct(e, t),
              r = T[n];
            if ("number" === typeof r) return r;
          }
          return null;
        }
        function dt(e, t, n) {
          if (x) {
            if (_.has(n)) return { active: !1, matches: e };
            if (!e) {
              return { active: !0, matches: b(t, n, g, !0) || [] };
            }
            if (Object.keys(e[0].params).length > 0) {
              return { active: !0, matches: b(t, n, g, !0) };
            }
          }
          return { active: !1, matches: null };
        }
        async function pt(e, t, n) {
          let r = e;
          for (;;) {
            let e = null == l,
              i = l || h;
            try {
              await ue(x, t, r, i, p, o, Re, n);
            } catch (a) {
              return { type: "error", error: a, partialMatches: r };
            } finally {
              e && (h = [...h]);
            }
            if (n.aborted) return { type: "aborted" };
            let s = y(i, t, g);
            if (s) return ht(t, _), { type: "success", matches: s };
            let u = b(i, t, g, !0);
            if (
              !u ||
              (r.length === u.length &&
                r.every((e, t) => e.route.id === u[t].route.id))
            )
              return ht(t, _), { type: "success", matches: null };
            r = u;
          }
        }
        function ht(e, t) {
          if (t.size >= C) {
            let e = t.values().next().value;
            t.delete(e);
          }
          t.add(e);
        }
        return (
          (d = {
            get basename() {
              return g;
            },
            get future() {
              return S;
            },
            get state() {
              return j;
            },
            get routes() {
              return h;
            },
            get window() {
              return n;
            },
            initialize: function () {
              if (
                ((k = e.history.listen((t) => {
                  let { action: n, location: r, delta: a } = t;
                  if (A) return A(), void (A = void 0);
                  u(
                    0 === Te.size || null != a,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
                  );
                  let o = it({
                    currentLocation: j.location,
                    nextLocation: r,
                    historyAction: n,
                  });
                  if (o && null != a) {
                    let t = new Promise((e) => {
                      A = e;
                    });
                    return (
                      e.history.go(-1 * a),
                      void ot(o, {
                        state: "blocked",
                        location: r,
                        proceed() {
                          ot(o, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: r,
                          }),
                            t.then(() => e.history.go(a));
                        },
                        reset() {
                          let e = new Map(j.blockers);
                          e.set(o, J), Me({ blockers: e });
                        },
                      })
                    );
                  }
                  return ze(n, r);
                })),
                r)
              ) {
                !(function (e, t) {
                  try {
                    let n = e.sessionStorage.getItem(te);
                    if (n) {
                      let e = JSON.parse(n);
                      for (let [n, r] of Object.entries(e || {}))
                        r && Array.isArray(r) && t.set(n, new Set(r || []));
                    }
                  } catch (n) {}
                })(n, I);
                let e = () =>
                  (function (e, t) {
                    if (t.size > 0) {
                      let r = {};
                      for (let [e, n] of t) r[e] = [...n];
                      try {
                        e.sessionStorage.setItem(te, JSON.stringify(r));
                      } catch (n) {
                        u(
                          !1,
                          "Failed to save applied view transitions in sessionStorage (" +
                            n +
                            ").",
                        );
                      }
                    }
                  })(n, I);
                n.addEventListener("pagehide", e),
                  (U = () => n.removeEventListener("pagehide", e));
              }
              return (
                j.initialized ||
                  ze(t.Pop, j.location, { initialHydration: !0 }),
                d
              );
            },
            subscribe: function (e) {
              return E.add(e), () => E.delete(e);
            },
            enableScrollRestoration: function (e, t, n) {
              if (
                ((T = e), (F = t), (O = n || null), !N && j.navigation === K)
              ) {
                N = !0;
                let e = ft(j.location, j.matches);
                null != e && Me({ restoreScrollPosition: e });
              }
              return () => {
                (T = null), (F = null), (O = null);
              };
            },
            navigate: async function n(r, a) {
              if ("number" === typeof r) return void e.history.go(r);
              let o = re(
                  j.location,
                  j.matches,
                  g,
                  S.v7_prependBasename,
                  r,
                  S.v7_relativeSplatPath,
                  null == a ? void 0 : a.fromRouteId,
                  null == a ? void 0 : a.relative,
                ),
                {
                  path: l,
                  submission: s,
                  error: u,
                } = ae(S.v7_normalizeFormMethod, !1, o, a),
                c = j.location,
                d = f(j.location, l, a && a.state);
              d = i({}, d, e.history.encodeLocation(d));
              let p = a && null != a.replace ? a.replace : void 0,
                h = t.Push;
              !0 === p
                ? (h = t.Replace)
                : !1 === p ||
                  (null != s &&
                    Ae(s.formMethod) &&
                    s.formAction === j.location.pathname + j.location.search &&
                    (h = t.Replace));
              let m =
                  a && "preventScrollReset" in a
                    ? !0 === a.preventScrollReset
                    : void 0,
                v = !0 === (a && a.unstable_flushSync),
                y = it({
                  currentLocation: c,
                  nextLocation: d,
                  historyAction: h,
                });
              if (!y)
                return await ze(h, d, {
                  submission: s,
                  pendingError: u,
                  preventScrollReset: m,
                  replace: a && a.replace,
                  enableViewTransition: a && a.unstable_viewTransition,
                  flushSync: v,
                });
              ot(y, {
                state: "blocked",
                location: d,
                proceed() {
                  ot(y, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: d,
                  }),
                    n(r, a);
                },
                reset() {
                  let e = new Map(j.blockers);
                  e.set(y, J), Me({ blockers: e });
                },
              });
            },
            fetch: function (t, n, r, o) {
              if (a)
                throw new Error(
                  "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
                );
              Y.has(t) && et(t);
              let i = !0 === (o && o.unstable_flushSync),
                u = l || h,
                c = re(
                  j.location,
                  j.matches,
                  g,
                  S.v7_prependBasename,
                  r,
                  S.v7_relativeSplatPath,
                  n,
                  null == o ? void 0 : o.relative,
                ),
                f = y(u, c, g),
                d = dt(f, u, c);
              if ((d.active && d.matches && (f = d.matches), !f))
                return void Xe(t, n, Ce(404, { pathname: c }), {
                  flushSync: i,
                });
              let {
                path: p,
                submission: m,
                error: v,
              } = ae(S.v7_normalizeFormMethod, !0, c, o);
              if (v) return void Xe(t, n, v, { flushSync: i });
              let b = Ie(f, p);
              (B = !0 === (o && o.preventScrollReset)),
                m && Ae(m.formMethod)
                  ? (async function (t, n, r, a, o, i, u, c) {
                      function f(e) {
                        if (!e.route.action && !e.route.lazy) {
                          let e = Ce(405, {
                            method: c.formMethod,
                            pathname: r,
                            routeId: n,
                          });
                          return Xe(t, n, e, { flushSync: u }), !0;
                        }
                        return !1;
                      }
                      if ((Ge(), se.delete(t), !i && f(a))) return;
                      let d = j.fetchers.get(t);
                      Ke(
                        t,
                        (function (e, t) {
                          let n = {
                            state: "submitting",
                            formMethod: e.formMethod,
                            formAction: e.formAction,
                            formEncType: e.formEncType,
                            formData: e.formData,
                            json: e.json,
                            text: e.text,
                            data: t ? t.data : void 0,
                          };
                          return n;
                        })(c, d),
                        { flushSync: u },
                      );
                      let p = new AbortController(),
                        m = ge(e.history, r, p.signal, c);
                      if (i) {
                        let e = await pt(o, r, m.signal);
                        if ("aborted" === e.type) return;
                        if ("error" === e.type) {
                          let { error: a } = st(r, e);
                          return void Xe(t, n, a, { flushSync: u });
                        }
                        if (!e.matches)
                          return void Xe(t, n, Ce(404, { pathname: r }), {
                            flushSync: u,
                          });
                        if (f((a = Ie((o = e.matches), r)))) return;
                      }
                      Y.set(t, p);
                      let v = Q,
                        b = await Ye("action", j, m, [a], o, t),
                        w = b[a.route.id];
                      if (m.signal.aborted)
                        return void (Y.get(t) === p && Y.delete(t));
                      if (S.v7_fetcherPersist && ye.has(t)) {
                        if (Pe(w) || Ne(w)) return void Ke(t, We(void 0));
                      } else {
                        if (Pe(w))
                          return (
                            Y.delete(t),
                            ne > v
                              ? void Ke(t, We(void 0))
                              : (le.add(t),
                                Ke(t, Ve(c)),
                                $e(m, w, !1, { fetcherSubmission: c }))
                          );
                        if (Ne(w)) return void Xe(t, n, w.error);
                      }
                      if (Fe(w)) throw Ce(400, { type: "defer-action" });
                      let x = j.navigation.location || j.location,
                        k = ge(e.history, x, p.signal),
                        E = l || h,
                        C =
                          "idle" !== j.navigation.state
                            ? y(E, j.navigation.location, g)
                            : j.matches;
                      s(C, "Didn't find any matches after fetcher action");
                      let _ = ++Q;
                      oe.set(t, _);
                      let T = Ve(c, w.data);
                      j.fetchers.set(t, T);
                      let [O, F] = ie(
                        e.history,
                        j,
                        C,
                        c,
                        x,
                        !1,
                        S.v7_skipActionErrorRevalidation,
                        W,
                        q,
                        $,
                        ye,
                        se,
                        le,
                        E,
                        g,
                        [a.route.id, w],
                      );
                      F.filter((e) => e.key !== t).forEach((e) => {
                        let t = e.key,
                          n = j.fetchers.get(t),
                          r = Ve(void 0, n ? n.data : void 0);
                        j.fetchers.set(t, r),
                          Y.has(t) && et(t),
                          e.controller && Y.set(t, e.controller);
                      }),
                        Me({ fetchers: new Map(j.fetchers) });
                      let N = () => F.forEach((e) => et(e.key));
                      p.signal.addEventListener("abort", N);
                      let { loaderResults: P, fetcherResults: R } = await Qe(
                        j,
                        C,
                        O,
                        F,
                        k,
                      );
                      if (p.signal.aborted) return;
                      p.signal.removeEventListener("abort", N),
                        oe.delete(t),
                        Y.delete(t),
                        F.forEach((e) => Y.delete(e.key));
                      let M = _e(P);
                      if (M) return $e(k, M.result, !1);
                      if (((M = _e(R)), M))
                        return le.add(M.key), $e(k, M.result, !1);
                      let { loaderData: A, errors: B } = we(
                        j,
                        C,
                        O,
                        P,
                        void 0,
                        F,
                        R,
                        be,
                      );
                      if (j.fetchers.has(t)) {
                        let e = We(w.data);
                        j.fetchers.set(t, e);
                      }
                      rt(_),
                        "loading" === j.navigation.state && _ > ne
                          ? (s(L, "Expected pending action"),
                            D && D.abort(),
                            De(j.navigation.location, {
                              matches: C,
                              loaderData: A,
                              errors: B,
                              fetchers: new Map(j.fetchers),
                            }))
                          : (Me({
                              errors: B,
                              loaderData: xe(j.loaderData, A, C, B),
                              fetchers: new Map(j.fetchers),
                            }),
                            (W = !1));
                    })(t, n, p, b, f, d.active, i, m)
                  : (se.set(t, { routeId: n, path: p }),
                    (async function (t, n, r, a, o, i, l, u) {
                      let c = j.fetchers.get(t);
                      Ke(t, Ve(u, c ? c.data : void 0), { flushSync: l });
                      let f = new AbortController(),
                        d = ge(e.history, r, f.signal);
                      if (i) {
                        let e = await pt(o, r, d.signal);
                        if ("aborted" === e.type) return;
                        if ("error" === e.type) {
                          let { error: a } = st(r, e);
                          return void Xe(t, n, a, { flushSync: l });
                        }
                        if (!e.matches)
                          return void Xe(t, n, Ce(404, { pathname: r }), {
                            flushSync: l,
                          });
                        a = Ie((o = e.matches), r);
                      }
                      Y.set(t, f);
                      let p = Q,
                        h = await Ye("loader", j, d, [a], o, t),
                        m = h[a.route.id];
                      Fe(m) && (m = (await Be(m, d.signal, !0)) || m);
                      Y.get(t) === f && Y.delete(t);
                      if (d.signal.aborted) return;
                      if (ye.has(t)) return void Ke(t, We(void 0));
                      if (Pe(m))
                        return ne > p
                          ? void Ke(t, We(void 0))
                          : (le.add(t), void (await $e(d, m, !1)));
                      if (Ne(m)) return void Xe(t, n, m.error);
                      s(!Fe(m), "Unhandled fetcher deferred data"),
                        Ke(t, We(m.data));
                    })(t, n, p, b, f, d.active, i, m));
            },
            revalidate: function () {
              Ge(),
                Me({ revalidation: "loading" }),
                "submitting" !== j.navigation.state &&
                  ("idle" !== j.navigation.state
                    ? ze(L || j.historyAction, j.navigation.location, {
                        overrideNavigation: j.navigation,
                        enableViewTransition: !0 === z,
                      })
                    : ze(j.historyAction, j.location, {
                        startUninterruptedRevalidation: !0,
                      }));
            },
            createHref: (t) => e.history.createHref(t),
            encodeLocation: (t) => e.history.encodeLocation(t),
            getFetcher: Je,
            deleteFetcher: function (e) {
              if (S.v7_fetcherPersist) {
                let t = (ve.get(e) || 0) - 1;
                t <= 0 ? (ve.delete(e), ye.add(e)) : ve.set(e, t);
              } else Ze(e);
              Me({ fetchers: new Map(j.fetchers) });
            },
            dispose: function () {
              k && k(),
                U && U(),
                E.clear(),
                D && D.abort(),
                j.fetchers.forEach((e, t) => Ze(t)),
                j.blockers.forEach((e, t) => at(t));
            },
            getBlocker: function (e, t) {
              let n = j.blockers.get(e) || J;
              return Te.get(e) !== t && Te.set(e, t), n;
            },
            deleteBlocker: at,
            patchRoutes: function (e, t) {
              let n = null == l;
              ce(e, t, l || h, p, o), n && ((h = [...h]), Me({}));
            },
            _internalFetchControllers: Y,
            _internalActiveDeferreds: be,
            _internalSetRoutes: function (e) {
              (p = {}), (l = v(e, o, void 0, p));
            },
          }),
          d
        );
      }
      Symbol("deferred");
      function re(e, t, n, r, a, o, i, l) {
        let s, u;
        if (i) {
          s = [];
          for (let e of t)
            if ((s.push(e), e.route.id === i)) {
              u = e;
              break;
            }
        } else (s = t), (u = t[t.length - 1]);
        let c = L(
          a || ".",
          j(s, o),
          M(e.pathname, n) || e.pathname,
          "path" === l,
        );
        return (
          null == a && ((c.search = e.search), (c.hash = e.hash)),
          (null != a && "" !== a && "." !== a) ||
            !u ||
            !u.route.index ||
            ze(c.search) ||
            (c.search = c.search
              ? c.search.replace(/^\?/, "?index&")
              : "?index"),
          r &&
            "/" !== n &&
            (c.pathname = "/" === c.pathname ? n : B([n, c.pathname])),
          d(c)
        );
      }
      function ae(e, t, n, r) {
        if (
          !r ||
          !(function (e) {
            return (
              null != e &&
              (("formData" in e && null != e.formData) ||
                ("body" in e && void 0 !== e.body))
            );
          })(r)
        )
          return { path: n };
        if (r.formMethod && !De(r.formMethod))
          return { path: n, error: Ce(405, { method: r.formMethod }) };
        let a,
          o,
          i = () => ({ path: n, error: Ce(400, { type: "invalid-body" }) }),
          l = r.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          c = Te(n);
        if (void 0 !== r.body) {
          if ("text/plain" === r.formEncType) {
            if (!Ae(u)) return i();
            let e =
              "string" === typeof r.body
                ? r.body
                : r.body instanceof FormData ||
                    r.body instanceof URLSearchParams
                  ? Array.from(r.body.entries()).reduce((e, t) => {
                      let [n, r] = t;
                      return "" + e + n + "=" + r + "\n";
                    }, "")
                  : String(r.body);
            return {
              path: n,
              submission: {
                formMethod: u,
                formAction: c,
                formEncType: r.formEncType,
                formData: void 0,
                json: void 0,
                text: e,
              },
            };
          }
          if ("application/json" === r.formEncType) {
            if (!Ae(u)) return i();
            try {
              let e = "string" === typeof r.body ? JSON.parse(r.body) : r.body;
              return {
                path: n,
                submission: {
                  formMethod: u,
                  formAction: c,
                  formEncType: r.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0,
                },
              };
            } catch (m) {
              return i();
            }
          }
        }
        if (
          (s(
            "function" === typeof FormData,
            "FormData is not available in this environment",
          ),
          r.formData)
        )
          (a = ve(r.formData)), (o = r.formData);
        else if (r.body instanceof FormData) (a = ve(r.body)), (o = r.body);
        else if (r.body instanceof URLSearchParams) (a = r.body), (o = ye(a));
        else if (null == r.body)
          (a = new URLSearchParams()), (o = new FormData());
        else
          try {
            (a = new URLSearchParams(r.body)), (o = ye(a));
          } catch (m) {
            return i();
          }
        let f = {
          formMethod: u,
          formAction: c,
          formEncType:
            (r && r.formEncType) || "application/x-www-form-urlencoded",
          formData: o,
          json: void 0,
          text: void 0,
        };
        if (Ae(f.formMethod)) return { path: n, submission: f };
        let h = p(n);
        return (
          t && h.search && ze(h.search) && a.append("index", ""),
          (h.search = "?" + a),
          { path: d(h), submission: f }
        );
      }
      function oe(e, t) {
        let n = e;
        if (t) {
          let r = e.findIndex((e) => e.route.id === t);
          r >= 0 && (n = e.slice(0, r));
        }
        return n;
      }
      function ie(e, t, n, r, a, o, l, s, u, c, f, d, p, h, m, g) {
        let v = g ? (Ne(g[1]) ? g[1].error : g[1].data) : void 0,
          b = e.createURL(t.location),
          w = e.createURL(a),
          x = g && Ne(g[1]) ? g[0] : void 0,
          S = x ? oe(n, x) : n,
          k = g ? g[1].statusCode : void 0,
          E = l && k && k >= 400,
          C = S.filter((e, n) => {
            let { route: a } = e;
            if (a.lazy) return !0;
            if (null == a.loader) return !1;
            if (o)
              return (
                !("function" === typeof a.loader && !a.loader.hydrate) ||
                (void 0 === t.loaderData[a.id] &&
                  (!t.errors || void 0 === t.errors[a.id]))
              );
            if (
              (function (e, t, n) {
                let r = !t || n.route.id !== t.route.id,
                  a = void 0 === e[n.route.id];
                return r || a;
              })(t.loaderData, t.matches[n], e) ||
              u.some((t) => t === e.route.id)
            )
              return !0;
            let l = t.matches[n],
              c = e;
            return se(
              e,
              i(
                {
                  currentUrl: b,
                  currentParams: l.params,
                  nextUrl: w,
                  nextParams: c.params,
                },
                r,
                {
                  actionResult: v,
                  actionStatus: k,
                  defaultShouldRevalidate:
                    !E &&
                    (s ||
                      b.pathname + b.search === w.pathname + w.search ||
                      b.search !== w.search ||
                      le(l, c)),
                },
              ),
            );
          }),
          _ = [];
        return (
          d.forEach((e, a) => {
            if (o || !n.some((t) => t.route.id === e.routeId) || f.has(a))
              return;
            let l = y(h, e.path, m);
            if (!l)
              return void _.push({
                key: a,
                routeId: e.routeId,
                path: e.path,
                matches: null,
                match: null,
                controller: null,
              });
            let u = t.fetchers.get(a),
              d = Ie(l, e.path),
              g = !1;
            p.has(a)
              ? (g = !1)
              : c.has(a)
                ? (c.delete(a), (g = !0))
                : (g =
                    u && "idle" !== u.state && void 0 === u.data
                      ? s
                      : se(
                          d,
                          i(
                            {
                              currentUrl: b,
                              currentParams:
                                t.matches[t.matches.length - 1].params,
                              nextUrl: w,
                              nextParams: n[n.length - 1].params,
                            },
                            r,
                            {
                              actionResult: v,
                              actionStatus: k,
                              defaultShouldRevalidate: !E && s,
                            },
                          ),
                        )),
              g &&
                _.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: l,
                  match: d,
                  controller: new AbortController(),
                });
          }),
          [C, _]
        );
      }
      function le(e, t) {
        let n = e.route.path;
        return (
          e.pathname !== t.pathname ||
          (null != n && n.endsWith("*") && e.params["*"] !== t.params["*"])
        );
      }
      function se(e, t) {
        if (e.route.shouldRevalidate) {
          let n = e.route.shouldRevalidate(t);
          if ("boolean" === typeof n) return n;
        }
        return t.defaultShouldRevalidate;
      }
      async function ue(e, t, n, r, a, o, i, l) {
        let s = [t, ...n.map((e) => e.route.id)].join("-");
        try {
          let c = i.get(s);
          c ||
            ((c = e({
              path: t,
              matches: n,
              patch: (e, t) => {
                l.aborted || ce(e, t, r, a, o);
              },
            })),
            i.set(s, c)),
            c &&
              "object" === typeof (u = c) &&
              null != u &&
              "then" in u &&
              (await c);
        } finally {
          i.delete(s);
        }
        var u;
      }
      function ce(e, t, n, r, a) {
        if (e) {
          var o;
          let n = r[e];
          s(n, "No route found to patch children into: routeId = " + e);
          let i = v(
            t,
            a,
            [
              e,
              "patch",
              String((null == (o = n.children) ? void 0 : o.length) || "0"),
            ],
            r,
          );
          n.children ? n.children.push(...i) : (n.children = i);
        } else {
          let e = v(t, a, ["patch", String(n.length || "0")], r);
          n.push(...e);
        }
      }
      async function fe(e) {
        let { matches: t } = e,
          n = t.filter((e) => e.shouldLoad);
        return (await Promise.all(n.map((e) => e.resolve()))).reduce(
          (e, t, r) => Object.assign(e, { [n[r].route.id]: t }),
          {},
        );
      }
      async function de(e, t, n, r, a, o, l, c, f, d) {
        let p = o.map((e) =>
            e.route.lazy
              ? (async function (e, t, n) {
                  if (!e.lazy) return;
                  let r = await e.lazy();
                  if (!e.lazy) return;
                  let a = n[e.id];
                  s(a, "No route found in manifest");
                  let o = {};
                  for (let i in r) {
                    let e = void 0 !== a[i] && "hasErrorBoundary" !== i;
                    u(
                      !e,
                      'Route "' +
                        a.id +
                        '" has a static property "' +
                        i +
                        '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                        i +
                        '" will be ignored.',
                    ),
                      e || g.has(i) || (o[i] = r[i]);
                  }
                  Object.assign(a, o),
                    Object.assign(a, i({}, t(a), { lazy: void 0 }));
                })(e.route, f, c)
              : void 0,
          ),
          h = o.map((e, n) => {
            let o = p[n],
              l = a.some((t) => t.route.id === e.route.id);
            return i({}, e, {
              shouldLoad: l,
              resolve: async (n) => (
                n &&
                  "GET" === r.method &&
                  (e.route.lazy || e.route.loader) &&
                  (l = !0),
                l
                  ? (async function (e, t, n, r, a, o) {
                      let i,
                        l,
                        u = (r) => {
                          let i,
                            s = new Promise((e, t) => (i = t));
                          (l = () => i()),
                            t.signal.addEventListener("abort", l);
                          let u = (a) =>
                              "function" !== typeof r
                                ? Promise.reject(
                                    new Error(
                                      'You cannot call the handler for a route which defines a boolean "' +
                                        e +
                                        '" [routeId: ' +
                                        n.route.id +
                                        "]",
                                    ),
                                  )
                                : r(
                                    {
                                      request: t,
                                      params: n.params,
                                      context: o,
                                    },
                                    ...(void 0 !== a ? [a] : []),
                                  ),
                            c = (async () => {
                              try {
                                return {
                                  type: "data",
                                  result: await (a ? a((e) => u(e)) : u()),
                                };
                              } catch (e) {
                                return { type: "error", result: e };
                              }
                            })();
                          return Promise.race([c, s]);
                        };
                      try {
                        let a = n.route[e];
                        if (r)
                          if (a) {
                            let e,
                              [t] = await Promise.all([
                                u(a).catch((t) => {
                                  e = t;
                                }),
                                r,
                              ]);
                            if (void 0 !== e) throw e;
                            i = t;
                          } else {
                            if ((await r, (a = n.route[e]), !a)) {
                              if ("action" === e) {
                                let e = new URL(t.url),
                                  r = e.pathname + e.search;
                                throw Ce(405, {
                                  method: t.method,
                                  pathname: r,
                                  routeId: n.route.id,
                                });
                              }
                              return { type: m.data, result: void 0 };
                            }
                            i = await u(a);
                          }
                        else {
                          if (!a) {
                            let e = new URL(t.url);
                            throw Ce(404, { pathname: e.pathname + e.search });
                          }
                          i = await u(a);
                        }
                        s(
                          void 0 !== i.result,
                          "You defined " +
                            ("action" === e ? "an action" : "a loader") +
                            ' for route "' +
                            n.route.id +
                            "\" but didn't return anything from your `" +
                            e +
                            "` function. Please return a value or `null`.",
                        );
                      } catch (c) {
                        return { type: m.error, result: c };
                      } finally {
                        l && t.signal.removeEventListener("abort", l);
                      }
                      return i;
                    })(t, r, e, o, n, d)
                  : Promise.resolve({ type: m.data, result: void 0 })
              ),
            });
          }),
          v = await e({
            matches: h,
            request: r,
            params: o[0].params,
            fetcherKey: l,
            context: d,
          });
        try {
          await Promise.all(p);
        } catch (y) {}
        return v;
      }
      async function pe(e) {
        let { result: t, type: n } = e;
        if (Me(t)) {
          let e;
          try {
            let n = t.headers.get("Content-Type");
            e =
              n && /\bapplication\/json\b/.test(n)
                ? null == t.body
                  ? null
                  : await t.json()
                : await t.text();
          } catch (u) {
            return { type: m.error, error: u };
          }
          return n === m.error
            ? {
                type: m.error,
                error: new H(t.status, t.statusText, e),
                statusCode: t.status,
                headers: t.headers,
              }
            : {
                type: m.data,
                data: e,
                statusCode: t.status,
                headers: t.headers,
              };
        }
        if (n === m.error) {
          if (Re(t)) {
            var r, a;
            if (t.data instanceof Error)
              return {
                type: m.error,
                error: t.data,
                statusCode: null == (a = t.init) ? void 0 : a.status,
              };
            t = new H(
              (null == (r = t.init) ? void 0 : r.status) || 500,
              void 0,
              t.data,
            );
          }
          return {
            type: m.error,
            error: t,
            statusCode: V(t) ? t.status : void 0,
          };
        }
        var o, i, l, s;
        return (function (e) {
          let t = e;
          return (
            t &&
            "object" === typeof t &&
            "object" === typeof t.data &&
            "function" === typeof t.subscribe &&
            "function" === typeof t.cancel &&
            "function" === typeof t.resolveData
          );
        })(t)
          ? {
              type: m.deferred,
              deferredData: t,
              statusCode: null == (o = t.init) ? void 0 : o.status,
              headers:
                (null == (i = t.init) ? void 0 : i.headers) &&
                new Headers(t.init.headers),
            }
          : Re(t)
            ? {
                type: m.data,
                data: t.data,
                statusCode: null == (l = t.init) ? void 0 : l.status,
                headers:
                  null != (s = t.init) && s.headers
                    ? new Headers(t.init.headers)
                    : void 0,
              }
            : { type: m.data, data: t };
      }
      function he(e, t, n, r, a, o) {
        let i = e.headers.get("Location");
        if (
          (s(
            i,
            "Redirects returned/thrown from loaders/actions must have a Location header",
          ),
          !Z.test(i))
        ) {
          let l = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
          (i = re(new URL(t.url), l, a, !0, i, o)),
            e.headers.set("Location", i);
        }
        return e;
      }
      function me(e, t, n) {
        if (Z.test(e)) {
          let r = e,
            a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            o = null != M(a.pathname, n);
          if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
        }
        return e;
      }
      function ge(e, t, n, r) {
        let a = e.createURL(Te(t)).toString(),
          o = { signal: n };
        if (r && Ae(r.formMethod)) {
          let { formMethod: e, formEncType: t } = r;
          (o.method = e.toUpperCase()),
            "application/json" === t
              ? ((o.headers = new Headers({ "Content-Type": t })),
                (o.body = JSON.stringify(r.json)))
              : "text/plain" === t
                ? (o.body = r.text)
                : "application/x-www-form-urlencoded" === t && r.formData
                  ? (o.body = ve(r.formData))
                  : (o.body = r.formData);
        }
        return new Request(a, o);
      }
      function ve(e) {
        let t = new URLSearchParams();
        for (let [n, r] of e.entries())
          t.append(n, "string" === typeof r ? r : r.name);
        return t;
      }
      function ye(e) {
        let t = new FormData();
        for (let [n, r] of e.entries()) t.append(n, r);
        return t;
      }
      function be(e, t, n, r, a) {
        let o,
          i = {},
          l = null,
          u = !1,
          c = {},
          f = n && Ne(n[1]) ? n[1].error : void 0;
        return (
          e.forEach((n) => {
            if (!(n.route.id in t)) return;
            let d = n.route.id,
              p = t[d];
            if (
              (s(!Pe(p), "Cannot handle redirect results in processLoaderData"),
              Ne(p))
            ) {
              let t = p.error;
              if ((void 0 !== f && ((t = f), (f = void 0)), (l = l || {}), a))
                l[d] = t;
              else {
                let n = ke(e, d);
                null == l[n.route.id] && (l[n.route.id] = t);
              }
              (i[d] = void 0),
                u || ((u = !0), (o = V(p.error) ? p.error.status : 500)),
                p.headers && (c[d] = p.headers);
            } else
              Fe(p)
                ? (r.set(d, p.deferredData),
                  (i[d] = p.deferredData.data),
                  null == p.statusCode ||
                    200 === p.statusCode ||
                    u ||
                    (o = p.statusCode),
                  p.headers && (c[d] = p.headers))
                : ((i[d] = p.data),
                  p.statusCode &&
                    200 !== p.statusCode &&
                    !u &&
                    (o = p.statusCode),
                  p.headers && (c[d] = p.headers));
          }),
          void 0 !== f && n && ((l = { [n[0]]: f }), (i[n[0]] = void 0)),
          { loaderData: i, errors: l, statusCode: o || 200, loaderHeaders: c }
        );
      }
      function we(e, t, n, r, a, o, l, u) {
        let { loaderData: c, errors: f } = be(t, r, a, u, !1);
        return (
          o.forEach((t) => {
            let { key: n, match: r, controller: a } = t,
              o = l[n];
            if (
              (s(o, "Did not find corresponding fetcher result"),
              !a || !a.signal.aborted)
            )
              if (Ne(o)) {
                let t = ke(e.matches, null == r ? void 0 : r.route.id);
                (f && f[t.route.id]) ||
                  (f = i({}, f, { [t.route.id]: o.error })),
                  e.fetchers.delete(n);
              } else if (Pe(o))
                s(!1, "Unhandled fetcher revalidation redirect");
              else if (Fe(o)) s(!1, "Unhandled fetcher deferred data");
              else {
                let t = We(o.data);
                e.fetchers.set(n, t);
              }
          }),
          { loaderData: c, errors: f }
        );
      }
      function xe(e, t, n, r) {
        let a = i({}, t);
        for (let o of n) {
          let n = o.route.id;
          if (
            (t.hasOwnProperty(n)
              ? void 0 !== t[n] && (a[n] = t[n])
              : void 0 !== e[n] && o.route.loader && (a[n] = e[n]),
            r && r.hasOwnProperty(n))
          )
            break;
        }
        return a;
      }
      function Se(e) {
        return e
          ? Ne(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
          : {};
      }
      function ke(e, t) {
        return (
          (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
        );
      }
      function Ee(e) {
        let t =
          1 === e.length
            ? e[0]
            : e.find((e) => e.index || !e.path || "/" === e.path) || {
                id: "__shim-error-route__",
              };
        return {
          matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
          route: t,
        };
      }
      function Ce(e, t) {
        let {
            pathname: n,
            routeId: r,
            method: a,
            type: o,
            message: i,
          } = void 0 === t ? {} : t,
          l = "Unknown Server Error",
          s = "Unknown @remix-run/router error";
        return (
          400 === e
            ? ((l = "Bad Request"),
              "route-discovery" === o
                ? (s =
                    'Unable to match URL "' +
                    n +
                    '" - the `unstable_patchRoutesOnNavigation()` function threw the following error:\n' +
                    i)
                : a && n && r
                  ? (s =
                      "You made a " +
                      a +
                      ' request to "' +
                      n +
                      '" but did not provide a `loader` for route "' +
                      r +
                      '", so there is no way to handle the request.')
                  : "defer-action" === o
                    ? (s = "defer() is not supported in actions")
                    : "invalid-body" === o &&
                      (s = "Unable to encode submission body"))
            : 403 === e
              ? ((l = "Forbidden"),
                (s = 'Route "' + r + '" does not match URL "' + n + '"'))
              : 404 === e
                ? ((l = "Not Found"), (s = 'No route matches URL "' + n + '"'))
                : 405 === e &&
                  ((l = "Method Not Allowed"),
                  a && n && r
                    ? (s =
                        "You made a " +
                        a.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but did not provide an `action` for route "' +
                        r +
                        '", so there is no way to handle the request.')
                    : a &&
                      (s = 'Invalid request method "' + a.toUpperCase() + '"')),
          new H(e || 500, l, new Error(s), !0)
        );
      }
      function _e(e) {
        let t = Object.entries(e);
        for (let n = t.length - 1; n >= 0; n--) {
          let [e, r] = t[n];
          if (Pe(r)) return { key: e, result: r };
        }
      }
      function Te(e) {
        return d(i({}, "string" === typeof e ? p(e) : e, { hash: "" }));
      }
      function Oe(e) {
        return Me(e.result) && Q.has(e.result.status);
      }
      function Fe(e) {
        return e.type === m.deferred;
      }
      function Ne(e) {
        return e.type === m.error;
      }
      function Pe(e) {
        return (e && e.type) === m.redirect;
      }
      function Re(e) {
        return (
          "object" === typeof e &&
          null != e &&
          "type" in e &&
          "data" in e &&
          "init" in e &&
          "DataWithResponseInit" === e.type
        );
      }
      function Me(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "object" === typeof e.headers &&
          "undefined" !== typeof e.body
        );
      }
      function De(e) {
        return Y.has(e.toLowerCase());
      }
      function Ae(e) {
        return q.has(e.toLowerCase());
      }
      async function je(e, t, n, r, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [l, s] = o[i],
            u = e.find((e) => (null == e ? void 0 : e.route.id) === l);
          if (!u) continue;
          let c = r.find((e) => e.route.id === u.route.id),
            f = null != c && !le(c, u) && void 0 !== (a && a[u.route.id]);
          Fe(s) &&
            f &&
            (await Be(s, n, !1).then((e) => {
              e && (t[l] = e);
            }));
        }
      }
      async function Le(e, t, n) {
        for (let r = 0; r < n.length; r++) {
          let { key: a, routeId: o, controller: i } = n[r],
            l = t[a];
          e.find((e) => (null == e ? void 0 : e.route.id) === o) &&
            Fe(l) &&
            (s(
              i,
              "Expected an AbortController for revalidating fetcher deferred result",
            ),
            await Be(l, i.signal, !0).then((e) => {
              e && (t[a] = e);
            }));
        }
      }
      async function Be(e, t, n) {
        if (
          (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))
        ) {
          if (n)
            try {
              return { type: m.data, data: e.deferredData.unwrappedData };
            } catch (r) {
              return { type: m.error, error: r };
            }
          return { type: m.data, data: e.deferredData.data };
        }
      }
      function ze(e) {
        return new URLSearchParams(e).getAll("index").some((e) => "" === e);
      }
      function Ie(e, t) {
        let n = "string" === typeof t ? p(t).search : t.search;
        if (e[e.length - 1].route.index && ze(n || "")) return e[e.length - 1];
        let r = A(e);
        return r[r.length - 1];
      }
      function Ue(e) {
        let {
          formMethod: t,
          formAction: n,
          formEncType: r,
          text: a,
          formData: o,
          json: i,
        } = e;
        if (t && n && r)
          return null != a
            ? {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: a,
              }
            : null != o
              ? {
                  formMethod: t,
                  formAction: n,
                  formEncType: r,
                  formData: o,
                  json: void 0,
                  text: void 0,
                }
              : void 0 !== i
                ? {
                    formMethod: t,
                    formAction: n,
                    formEncType: r,
                    formData: void 0,
                    json: i,
                    text: void 0,
                  }
                : void 0;
      }
      function He(e, t) {
        if (t) {
          return {
            state: "loading",
            location: e,
            formMethod: t.formMethod,
            formAction: t.formAction,
            formEncType: t.formEncType,
            formData: t.formData,
            json: t.json,
            text: t.text,
          };
        }
        return {
          state: "loading",
          location: e,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        };
      }
      function Ve(e, t) {
        if (e) {
          return {
            state: "loading",
            formMethod: e.formMethod,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formData: e.formData,
            json: e.json,
            text: e.text,
            data: t,
          };
        }
        return {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: t,
        };
      }
      function We(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        };
      }
      function qe() {
        return (
          (qe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          qe.apply(this, arguments)
        );
      }
      const $e = r.createContext(null);
      const Ye = r.createContext(null);
      const Qe = r.createContext(null);
      const Ge = r.createContext(null);
      const Ke = r.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1,
      });
      const Xe = r.createContext(null);
      function Je() {
        return null != r.useContext(Ge);
      }
      function Ze() {
        return Je() || s(!1), r.useContext(Ge).location;
      }
      function et(e) {
        r.useContext(Qe).static || r.useLayoutEffect(e);
      }
      function tt() {
        let { isDataRoute: e } = r.useContext(Ke);
        return e
          ? (function () {
              let { router: e } = dt(ct.UseNavigateStable),
                t = ht(ft.UseNavigateStable),
                n = r.useRef(!1);
              et(() => {
                n.current = !0;
              });
              let a = r.useCallback(
                function (r, a) {
                  void 0 === a && (a = {}),
                    n.current &&
                      ("number" === typeof r
                        ? e.navigate(r)
                        : e.navigate(r, qe({ fromRouteId: t }, a)));
                },
                [e, t],
              );
              return a;
            })()
          : (function () {
              Je() || s(!1);
              let e = r.useContext($e),
                { basename: t, future: n, navigator: a } = r.useContext(Qe),
                { matches: o } = r.useContext(Ke),
                { pathname: i } = Ze(),
                l = JSON.stringify(j(o, n.v7_relativeSplatPath)),
                u = r.useRef(!1);
              return (
                et(() => {
                  u.current = !0;
                }),
                r.useCallback(
                  function (n, r) {
                    if ((void 0 === r && (r = {}), !u.current)) return;
                    if ("number" === typeof n) return void a.go(n);
                    let o = L(n, JSON.parse(l), i, "path" === r.relative);
                    null == e &&
                      "/" !== t &&
                      (o.pathname =
                        "/" === o.pathname ? t : B([t, o.pathname])),
                      (r.replace ? a.replace : a.push)(o, r.state, r);
                  },
                  [t, a, l, i, e],
                )
              );
            })();
      }
      const nt = r.createContext(null);
      function rt(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { future: a } = r.useContext(Qe),
          { matches: o } = r.useContext(Ke),
          { pathname: i } = Ze(),
          l = JSON.stringify(j(o, a.v7_relativeSplatPath));
        return r.useMemo(
          () => L(e, JSON.parse(l), i, "path" === n),
          [e, l, i, n],
        );
      }
      function at(e, n, a, o) {
        Je() || s(!1);
        let { navigator: i } = r.useContext(Qe),
          { matches: l } = r.useContext(Ke),
          u = l[l.length - 1],
          c = u ? u.params : {},
          f = (u && u.pathname, u ? u.pathnameBase : "/");
        u && u.route;
        let d,
          h = Ze();
        if (n) {
          var m;
          let e = "string" === typeof n ? p(n) : n;
          "/" === f ||
            (null == (m = e.pathname) ? void 0 : m.startsWith(f)) ||
            s(!1),
            (d = e);
        } else d = h;
        let g = d.pathname || "/",
          v = g;
        if ("/" !== f) {
          let e = f.replace(/^\//, "").split("/");
          v = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let b = y(e, { pathname: v });
        let w = ut(
          b &&
            b.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: B([
                  f,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? f
                    : B([
                        f,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          l,
          a,
          o,
        );
        return n && w
          ? r.createElement(
              Ge.Provider,
              {
                value: {
                  location: qe(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    d,
                  ),
                  navigationType: t.Pop,
                },
              },
              w,
            )
          : w;
      }
      function ot() {
        let e = (function () {
            var e;
            let t = r.useContext(Xe),
              n = pt(ft.UseRouteError),
              a = ht(ft.UseRouteError);
            if (void 0 !== t) return t;
            return null == (e = n.errors) ? void 0 : e[a];
          })(),
          t = V(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("h2", null, "Unexpected Application Error!"),
          r.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? r.createElement("pre", { style: o }, n) : null,
          null,
        );
      }
      const it = r.createElement(ot, null);
      class lt extends r.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? r.createElement(
                Ke.Provider,
                { value: this.props.routeContext },
                r.createElement(Xe.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function st(e) {
        let { routeContext: t, match: n, children: a } = e,
          o = r.useContext($e);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
          r.createElement(Ke.Provider, { value: t }, a)
        );
      }
      function ut(e, t, n, a) {
        var o;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var i;
          if (!n) return null;
          if (n.errors) e = n.matches;
          else {
            if (
              !(
                null != (i = a) &&
                i.v7_partialHydration &&
                0 === t.length &&
                !n.initialized &&
                n.matches.length > 0
              )
            )
              return null;
            e = n.matches;
          }
        }
        let l = e,
          u = null == (o = n) ? void 0 : o.errors;
        if (null != u) {
          let e = l.findIndex(
            (e) =>
              e.route.id && void 0 !== (null == u ? void 0 : u[e.route.id]),
          );
          e >= 0 || s(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let c = !1,
          f = -1;
        if (n && a && a.v7_partialHydration)
          for (let r = 0; r < l.length; r++) {
            let e = l[r];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (f = r),
              e.route.id)
            ) {
              let { loaderData: t, errors: r } = n,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!r || void 0 === r[e.route.id]);
              if (e.route.lazy || a) {
                (c = !0), (l = f >= 0 ? l.slice(0, f + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, a, o) => {
          let i,
            s = !1,
            d = null,
            p = null;
          var h;
          n &&
            ((i = u && a.route.id ? u[a.route.id] : void 0),
            (d = a.route.errorElement || it),
            c &&
              (f < 0 && 0 === o
                ? ((h = "route-fallback"),
                  !1 || mt[h] || (mt[h] = !0),
                  (s = !0),
                  (p = null))
                : f === o &&
                  ((s = !0), (p = a.route.hydrateFallbackElement || null))));
          let m = t.concat(l.slice(0, o + 1)),
            g = () => {
              let t;
              return (
                (t = i
                  ? d
                  : s
                    ? p
                    : a.route.Component
                      ? r.createElement(a.route.Component, null)
                      : a.route.element
                        ? a.route.element
                        : e),
                r.createElement(st, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? r.createElement(lt, {
                location: n.location,
                revalidation: n.revalidation,
                component: d,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var ct = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(ct || {}),
        ft = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ft || {});
      function dt(e) {
        let t = r.useContext($e);
        return t || s(!1), t;
      }
      function pt(e) {
        let t = r.useContext(Ye);
        return t || s(!1), t;
      }
      function ht(e) {
        let t = (function () {
            let e = r.useContext(Ke);
            return e || s(!1), e;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || s(!1), n.route.id;
      }
      const mt = {};
      a.startTransition;
      function gt(e) {
        return (function (e) {
          let t = r.useContext(Ke).outlet;
          return t ? r.createElement(nt.Provider, { value: e }, t) : t;
        })(e.context);
      }
      function vt(e) {
        s(!1);
      }
      function yt(e) {
        let {
          basename: n = "/",
          children: a = null,
          location: o,
          navigationType: i = t.Pop,
          navigator: l,
          static: u = !1,
          future: c,
        } = e;
        Je() && s(!1);
        let f = n.replace(/^\/*/, "/"),
          d = r.useMemo(
            () => ({
              basename: f,
              navigator: l,
              static: u,
              future: qe({ v7_relativeSplatPath: !1 }, c),
            }),
            [f, c, l, u],
          );
        "string" === typeof o && (o = p(o));
        let {
            pathname: h = "/",
            search: m = "",
            hash: g = "",
            state: v = null,
            key: y = "default",
          } = o,
          b = r.useMemo(() => {
            let e = M(h, f);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: m,
                    hash: g,
                    state: v,
                    key: y,
                  },
                  navigationType: i,
                };
          }, [f, h, m, g, v, y, i]);
        return null == b
          ? null
          : r.createElement(
              Qe.Provider,
              { value: d },
              r.createElement(Ge.Provider, { children: a, value: b }),
            );
      }
      new Promise(() => {});
      r.Component;
      function bt(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          r.Children.forEach(e, (e, a) => {
            if (!r.isValidElement(e)) return;
            let o = [...t, a];
            if (e.type === r.Fragment)
              return void n.push.apply(n, bt(e.props.children, o));
            e.type !== vt && s(!1), e.props.index && e.props.children && s(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = bt(e.props.children, o)),
              n.push(i);
          }),
          n
        );
      }
      function wt(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
          e.Component &&
            Object.assign(t, {
              element: r.createElement(e.Component),
              Component: void 0,
            }),
          e.HydrateFallback &&
            Object.assign(t, {
              hydrateFallbackElement: r.createElement(e.HydrateFallback),
              HydrateFallback: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(t, {
              errorElement: r.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          t
        );
      }
      var xt = n(579);
      const St = function () {
        return (0, xt.jsx)(xt.Fragment, { children: (0, xt.jsx)(gt, {}) });
      };
      var kt = n(950),
        Et = n.t(kt, 2);
      function Ct() {
        return (
          (Ct = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ct.apply(this, arguments)
        );
      }
      function _t(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const Tt = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (Ba) {}
      function Ot() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Ct({}, t, { errors: Ft(t.errors) })), t;
      }
      function Ft(e) {
        if (!e) return null;
        let t = Object.entries(e),
          n = {};
        for (let [r, a] of t)
          if (a && "RouteErrorResponse" === a.__type)
            n[r] = new H(a.status, a.statusText, a.data, !0 === a.internal);
          else if (a && "Error" === a.__type) {
            if (a.__subType) {
              let e = window[a.__subType];
              if ("function" === typeof e)
                try {
                  let t = new e(a.message);
                  (t.stack = ""), (n[r] = t);
                } catch (Ba) {}
            }
            if (null == n[r]) {
              let e = new Error(a.message);
              (e.stack = ""), (n[r] = e);
            }
          } else n[r] = a;
        return n;
      }
      const Nt = r.createContext({ isTransitioning: !1 });
      const Pt = r.createContext(new Map());
      const Rt = a.startTransition,
        Mt = Et.flushSync;
      a.useId;
      function Dt(e) {
        Mt ? Mt(e) : e();
      }
      class At {
        constructor() {
          (this.status = "pending"),
            (this.promise = new Promise((e, t) => {
              (this.resolve = (t) => {
                "pending" === this.status && ((this.status = "resolved"), e(t));
              }),
                (this.reject = (e) => {
                  "pending" === this.status &&
                    ((this.status = "rejected"), t(e));
                });
            }));
        }
      }
      function jt(e) {
        let { fallbackElement: t, router: n, future: a } = e,
          [o, i] = r.useState(n.state),
          [l, s] = r.useState(),
          [u, c] = r.useState({ isTransitioning: !1 }),
          [f, d] = r.useState(),
          [p, h] = r.useState(),
          [m, g] = r.useState(),
          v = r.useRef(new Map()),
          { v7_startTransition: y } = a || {},
          b = r.useCallback(
            (e) => {
              y
                ? (function (e) {
                    Rt ? Rt(e) : e();
                  })(e)
                : e();
            },
            [y],
          ),
          w = r.useCallback(
            (e, t) => {
              let {
                deletedFetchers: r,
                unstable_flushSync: a,
                unstable_viewTransitionOpts: o,
              } = t;
              r.forEach((e) => v.current.delete(e)),
                e.fetchers.forEach((e, t) => {
                  void 0 !== e.data && v.current.set(t, e.data);
                });
              let l =
                null == n.window ||
                null == n.window.document ||
                "function" !== typeof n.window.document.startViewTransition;
              if (o && !l) {
                if (a) {
                  Dt(() => {
                    p && (f && f.resolve(), p.skipTransition()),
                      c({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: o.currentLocation,
                        nextLocation: o.nextLocation,
                      });
                  });
                  let t = n.window.document.startViewTransition(() => {
                    Dt(() => i(e));
                  });
                  return (
                    t.finished.finally(() => {
                      Dt(() => {
                        d(void 0),
                          h(void 0),
                          s(void 0),
                          c({ isTransitioning: !1 });
                      });
                    }),
                    void Dt(() => h(t))
                  );
                }
                p
                  ? (f && f.resolve(),
                    p.skipTransition(),
                    g({
                      state: e,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }))
                  : (s(e),
                    c({
                      isTransitioning: !0,
                      flushSync: !1,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }));
              } else a ? Dt(() => i(e)) : b(() => i(e));
            },
            [n.window, p, f, v, b],
          );
        r.useLayoutEffect(() => n.subscribe(w), [n, w]),
          r.useEffect(() => {
            u.isTransitioning && !u.flushSync && d(new At());
          }, [u]),
          r.useEffect(() => {
            if (f && l && n.window) {
              let e = l,
                t = f.promise,
                r = n.window.document.startViewTransition(async () => {
                  b(() => i(e)), await t;
                });
              r.finished.finally(() => {
                d(void 0), h(void 0), s(void 0), c({ isTransitioning: !1 });
              }),
                h(r);
            }
          }, [b, l, f, n.window]),
          r.useEffect(() => {
            f && l && o.location.key === l.location.key && f.resolve();
          }, [f, p, o.location, l]),
          r.useEffect(() => {
            !u.isTransitioning &&
              m &&
              (s(m.state),
              c({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: m.currentLocation,
                nextLocation: m.nextLocation,
              }),
              g(void 0));
          }, [u.isTransitioning, m]),
          r.useEffect(() => {}, []);
        let x = r.useMemo(
            () => ({
              createHref: n.createHref,
              encodeLocation: n.encodeLocation,
              go: (e) => n.navigate(e),
              push: (e, t, r) =>
                n.navigate(e, {
                  state: t,
                  preventScrollReset: null == r ? void 0 : r.preventScrollReset,
                }),
              replace: (e, t, r) =>
                n.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == r ? void 0 : r.preventScrollReset,
                }),
            }),
            [n],
          ),
          S = n.basename || "/",
          k = r.useMemo(
            () => ({ router: n, navigator: x, static: !1, basename: S }),
            [n, x, S],
          ),
          E = r.useMemo(
            () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
            [n.future.v7_relativeSplatPath],
          );
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            $e.Provider,
            { value: k },
            r.createElement(
              Ye.Provider,
              { value: o },
              r.createElement(
                Pt.Provider,
                { value: v.current },
                r.createElement(
                  Nt.Provider,
                  { value: u },
                  r.createElement(
                    yt,
                    {
                      basename: S,
                      location: o.location,
                      navigationType: o.historyAction,
                      navigator: x,
                      future: E,
                    },
                    o.initialized || n.future.v7_partialHydration
                      ? r.createElement(Lt, {
                          routes: n.routes,
                          future: n.future,
                          state: o,
                        })
                      : t,
                  ),
                ),
              ),
            ),
          ),
          null,
        );
      }
      const Lt = r.memo(Bt);
      function Bt(e) {
        let { routes: t, future: n, state: r } = e;
        return at(t, void 0, r, n);
      }
      const zt =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        It = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ut = r.forwardRef(function (e, t) {
          let n,
            {
              onClick: a,
              relative: o,
              reloadDocument: i,
              replace: l,
              state: u,
              target: c,
              to: f,
              preventScrollReset: p,
              unstable_viewTransition: h,
            } = e,
            m = _t(e, Tt),
            { basename: g } = r.useContext(Qe),
            v = !1;
          if ("string" === typeof f && It.test(f) && ((n = f), zt))
            try {
              let e = new URL(window.location.href),
                t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
                n = M(t.pathname, g);
              t.origin === e.origin && null != n
                ? (f = n + t.search + t.hash)
                : (v = !0);
            } catch (Ba) {}
          let y = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              Je() || s(!1);
              let { basename: a, navigator: o } = r.useContext(Qe),
                { hash: i, pathname: l, search: u } = rt(e, { relative: n }),
                c = l;
              return (
                "/" !== a && (c = "/" === l ? a : B([a, l])),
                o.createHref({ pathname: c, search: u, hash: i })
              );
            })(f, { relative: o }),
            b = (function (e, t) {
              let {
                  target: n,
                  replace: a,
                  state: o,
                  preventScrollReset: i,
                  relative: l,
                  unstable_viewTransition: s,
                } = void 0 === t ? {} : t,
                u = tt(),
                c = Ze(),
                f = rt(e, { relative: l });
              return r.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== a ? a : d(c) === d(f);
                    u(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: i,
                      relative: l,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, f, a, o, n, e, i, l, s],
              );
            })(f, {
              replace: l,
              state: u,
              target: c,
              preventScrollReset: p,
              relative: o,
              unstable_viewTransition: h,
            });
          return r.createElement(
            "a",
            Ct({}, m, {
              href: n || y,
              onClick:
                v || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: c,
            }),
          );
        });
      var Ht, Vt;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Ht || (Ht = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Vt || (Vt = {}));
      var Wt = n(723);
      const qt = () => {
          const [e, t] = (0, r.useState)(!1),
            n = () => {
              t(!e);
            };
          return (0, xt.jsxs)(Wt.stack, {
            width: "100%",
            isOpen: e,
            onStateChange: (e) => {
              t(e.isOpen);
            },
            children: [
              (0, xt.jsx)(Ut, { to: "/", onClick: n, children: "Hjem" }),
              (0, xt.jsx)(Ut, {
                to: "/groups",
                onClick: n,
                children: "Grupper",
              }),
              (0, xt.jsx)(Ut, {
                to: "/contact",
                onClick: n,
                children: "Kontakt",
              }),
            ],
          });
        },
        $t = n.p + "static/media/2cropped.dabf837a207c40e2be4f.png";
      var Yt = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Qt = r.createContext && r.createContext(Yt),
        Gt = ["attr", "size", "title"];
      function Kt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Xt() {
        return (
          (Xt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Xt.apply(this, arguments)
        );
      }
      function Jt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Jt(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Jt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function en(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == typeof t ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function tn(e) {
        return (
          e &&
          e.map((e, t) =>
            r.createElement(e.tag, Zt({ key: t }, e.attr), tn(e.child)),
          )
        );
      }
      function nn(e) {
        return (t) =>
          r.createElement(rn, Xt({ attr: Zt({}, e.attr) }, t), tn(e.child));
      }
      function rn(e) {
        var t = (t) => {
          var n,
            { attr: a, size: o, title: i } = e,
            l = Kt(e, Gt),
            s = o || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            r.createElement(
              "svg",
              Xt(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                l,
                {
                  className: n,
                  style: Zt(
                    Zt({ color: e.color || t.color }, t.style),
                    e.style,
                  ),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              i && r.createElement("title", null, i),
              e.children,
            )
          );
        };
        return void 0 !== Qt
          ? r.createElement(Qt.Consumer, null, (e) => t(e))
          : t(Yt);
      }
      function an(e) {
        return nn({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: { id: "Facebook" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z",
                  },
                  child: [],
                },
              ],
            },
          ],
        })(e);
      }
      function on(e) {
        return nn({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: { id: "Instagram" },
              child: [
                {
                  tag: "g",
                  attr: {},
                  child: [
                    {
                      tag: "path",
                      attr: {
                        d: "M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z",
                      },
                      child: [],
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z",
                      },
                      child: [],
                    },
                    {
                      tag: "circle",
                      attr: { cx: "17.2", cy: "6.83", r: "1.075" },
                      child: [],
                    },
                  ],
                },
              ],
            },
          ],
        })(e);
      }
      function ln(e) {
        return nn({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: { id: "Shopping_Cart" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z",
                  },
                  child: [],
                },
              ],
            },
          ],
        })(e);
      }
      const sn = () => {
          const [e, t] = (0, r.useState)(!1),
            n = () => {
              window.scrollY > 50 ? t(!0) : t(!1);
            };
          return (
            (0, r.useEffect)(
              () => (
                window.addEventListener("scroll", n),
                () => {
                  window.removeEventListener("scroll", n);
                }
              ),
              [],
            ),
            (0, xt.jsxs)("div", {
              className: `flex justify-between items-center ${e ? "bg-lightColor" : "bg-transparent"} sticky top-0 z-50 transition-colors duration-300`,
              children: [
                (0, xt.jsx)("div", {
                  className: "w-1/6 flex justify-start pl-6",
                  children: (0, xt.jsx)(qt, {}),
                }),
                (0, xt.jsx)(Ut, {
                  to: "/",
                  className: "flex justify-center",
                  children: (0, xt.jsx)("img", {
                    src: $t,
                    alt: "logo",
                    className: "mt-0 pt-0 ml-4",
                  }),
                }),
                (0, xt.jsx)("div", {
                  className: "max-w-[80%] flex justify-end pr-6",
                  children: (0, xt.jsx)(ln, {
                    className: "text-5xl text-primaryColor",
                  }),
                }),
              ],
            })
          );
        },
        un = n.p + "static/media/IMG_0298-min.d46afb7e51675fc54452.JPG",
        cn = n.p + "static/media/IMG_8257-min.c1a46f7529a6e5de4a05.JPG",
        fn = n.p + "static/media/IMG_8264-min.291f4cdc7d8b7236b3f6.JPG",
        dn = (e) => {
          let { title: t } = e;
          return (0, xt.jsx)("div", {
            className: "flex justify-center py-4",
            children: (0, xt.jsx)("h1", {
              className: "h1 text-primaryColor",
              color: "#472237",
              children: t,
            }),
          });
        },
        pn = () =>
          (0, xt.jsxs)("div", {
            className: "flex items-center justify-between mx-6 mt-4",
            children: [
              (0, xt.jsx)("div", {
                children: (0, xt.jsx)(Ut, {
                  to: "https://www.instagram.com/freeing.the.being/",
                  children: (0, xt.jsx)(on, {
                    className: "text-secondaryColor text-2xl",
                  }),
                }),
              }),
              (0, xt.jsx)(Ut, {
                to: "/contact",
                children: (0, xt.jsx)("h3", {
                  className: "text-primaryColor",
                  children: "Kontakt",
                }),
              }),
              (0, xt.jsx)("div", {
                children: (0, xt.jsx)("h3", {
                  className: "text-secondaryColor",
                  children: "Nyhedsbrev",
                }),
              }),
              (0, xt.jsx)(Ut, {
                to: "https://www.facebook.com/p/Mie-Dandanell-100071389505286/?locale=da_DK",
                children: (0, xt.jsx)(an, {
                  className: "text-secondaryColor text-2xl",
                }),
              }),
            ],
          }),
        hn = () =>
          (0, xt.jsxs)(xt.Fragment, {
            children: [
              (0, xt.jsx)(sn, {}),
              (0, xt.jsx)(dn, { title: "Mie Dandanell" }),
              (0, xt.jsx)("img", { src: un, alt: "portrait" }),
              (0, xt.jsx)("article", {
                className: "flex text-center",
                children: (0, xt.jsx)("p", {
                  className: "h3 text-secondaryColor mx-6 text-pretty mt-6",
                  children:
                    "Jeg st\xf8tter kvinder, der har f\xf8dselstraumer med at f\xe5 healet, forl\xf8st og bearbejdet deres oplevelser.",
                }),
              }),
              (0, xt.jsxs)("section", {
                children: [
                  (0, xt.jsx)("div", {
                    className: "py-4 text-center",
                    children: (0, xt.jsx)("h2", {
                      className: "h2  text-primaryColor",
                      children: "PodCast",
                    }),
                  }),
                  (0, xt.jsx)("img", { src: cn, alt: "carousell" }),
                ],
              }),
              (0, xt.jsxs)("section", {
                children: [
                  (0, xt.jsx)("div", {
                    className: "py-4 text-center",
                    children: (0, xt.jsx)("h2", {
                      className: "h2  text-primaryColor",
                      children: "Instagram",
                    }),
                  }),
                  (0, xt.jsx)("img", { src: fn, alt: "instaImage" }),
                ],
              }),
              (0, xt.jsx)(pn, {}),
            ],
          });
      function mn(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: gn } = Object.prototype,
        { getPrototypeOf: vn } = Object,
        yn =
          ((bn = Object.create(null)),
          (e) => {
            const t = gn.call(e);
            return bn[t] || (bn[t] = t.slice(8, -1).toLowerCase());
          });
      var bn;
      const wn = (e) => ((e = e.toLowerCase()), (t) => yn(t) === e),
        xn = (e) => (t) => typeof t === e,
        { isArray: Sn } = Array,
        kn = xn("undefined");
      const En = wn("ArrayBuffer");
      const Cn = xn("string"),
        _n = xn("function"),
        Tn = xn("number"),
        On = (e) => null !== e && "object" === typeof e,
        Fn = (e) => {
          if ("object" !== yn(e)) return !1;
          const t = vn(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Nn = wn("Date"),
        Pn = wn("File"),
        Rn = wn("Blob"),
        Mn = wn("FileList"),
        Dn = wn("URLSearchParams"),
        [An, jn, Ln, Bn] = [
          "ReadableStream",
          "Request",
          "Response",
          "Headers",
        ].map(wn);
      function zn(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), Sn(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function In(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const Un =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
              ? self
              : "undefined" !== typeof window
                ? window
                : global,
        Hn = (e) => !kn(e) && e !== Un;
      const Vn =
        ((Wn = "undefined" !== typeof Uint8Array && vn(Uint8Array)),
        (e) => Wn && e instanceof Wn);
      var Wn;
      const qn = wn("HTMLFormElement"),
        $n = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        Yn = wn("RegExp"),
        Qn = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          zn(n, (n, a) => {
            let o;
            !1 !== (o = t(n, a, e)) && (r[a] = o || n);
          }),
            Object.defineProperties(e, r);
        },
        Gn = "abcdefghijklmnopqrstuvwxyz",
        Kn = "0123456789",
        Xn = { DIGIT: Kn, ALPHA: Gn, ALPHA_DIGIT: Gn + Gn.toUpperCase() + Kn };
      const Jn = wn("AsyncFunction"),
        Zn = ((e, t) => {
          return e
            ? setImmediate
            : t
              ? ((n = `axios@${Math.random()}`),
                (r = []),
                Un.addEventListener(
                  "message",
                  (e) => {
                    let { source: t, data: a } = e;
                    t === Un && a === n && r.length && r.shift()();
                  },
                  !1,
                ),
                (e) => {
                  r.push(e), Un.postMessage(n, "*");
                })
              : (e) => setTimeout(e);
          var n, r;
        })("function" === typeof setImmediate, _n(Un.postMessage)),
        er =
          "undefined" !== typeof queueMicrotask
            ? queueMicrotask.bind(Un)
            : ("undefined" !== typeof process && process.nextTick) || Zn,
        tr = {
          isArray: Sn,
          isArrayBuffer: En,
          isBuffer: function (e) {
            return (
              null !== e &&
              !kn(e) &&
              null !== e.constructor &&
              !kn(e.constructor) &&
              _n(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (_n(e.append) &&
                  ("formdata" === (t = yn(e)) ||
                    ("object" === t &&
                      _n(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && En(e.buffer)),
              t
            );
          },
          isString: Cn,
          isNumber: Tn,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: On,
          isPlainObject: Fn,
          isReadableStream: An,
          isRequest: jn,
          isResponse: Ln,
          isHeaders: Bn,
          isUndefined: kn,
          isDate: Nn,
          isFile: Pn,
          isBlob: Rn,
          isRegExp: Yn,
          isFunction: _n,
          isStream: (e) => On(e) && _n(e.pipe),
          isURLSearchParams: Dn,
          isTypedArray: Vn,
          isFileList: Mn,
          forEach: zn,
          merge: function e() {
            const { caseless: t } = (Hn(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && In(n, a)) || a;
                Fn(n[o]) && Fn(r)
                  ? (n[o] = e(n[o], r))
                  : Fn(r)
                    ? (n[o] = e({}, r))
                    : Sn(r)
                      ? (n[o] = r.slice())
                      : (n[o] = r);
              };
            for (let a = 0, o = arguments.length; a < o; a++)
              arguments[a] && zn(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              zn(
                t,
                (t, r) => {
                  n && _n(t) ? (e[r] = mn(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r },
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, o, i;
            const l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && vn(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: yn,
          kindOfTest: wn,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (Sn(e)) return e;
            let t = e.length;
            if (!Tn(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: qn,
          hasOwnProperty: $n,
          hasOwnProp: $n,
          reduceDescriptors: Qn,
          freezeMethods: (e) => {
            Qn(e, (t, n) => {
              if (_n(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              _n(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'",
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return Sn(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: In,
          global: Un,
          isContextDefined: Hn,
          ALPHABET: Xn,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Xn.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              _n(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (On(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = Sn(e) ? [] : {};
                    return (
                      zn(e, (e, t) => {
                        const o = n(e, r + 1);
                        !kn(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: Jn,
          isThenable: (e) => e && (On(e) || _n(e)) && _n(e.then) && _n(e.catch),
          setImmediate: Zn,
          asap: er,
        };
      function nr(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a &&
            ((this.response = a), (this.status = a.status ? a.status : null));
      }
      tr.inherits(nr, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: tr.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      const rr = nr.prototype,
        ar = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        ar[e] = { value: e };
      }),
        Object.defineProperties(nr, ar),
        Object.defineProperty(rr, "isAxiosError", { value: !0 }),
        (nr.from = (e, t, n, r, a, o) => {
          const i = Object.create(rr);
          return (
            tr.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e,
            ),
            nr.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      const or = nr;
      function ir(e) {
        return tr.isPlainObject(e) || tr.isArray(e);
      }
      function lr(e) {
        return tr.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function sr(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = lr(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const ur = tr.toFlatObject(tr, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const cr = function (e, t, n) {
        if (!tr.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = tr.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !tr.isUndefined(t[e]);
            },
          )).metaTokens,
          a = n.visitor || u,
          o = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            tr.isSpecCompliantForm(t);
        if (!tr.isFunction(a))
          throw new TypeError("visitor must be a function");
        function s(e) {
          if (null === e) return "";
          if (tr.isDate(e)) return e.toISOString();
          if (!l && tr.isBlob(e))
            throw new or("Blob is not supported. Use a Buffer instead.");
          return tr.isArrayBuffer(e) || tr.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, n, a) {
          let l = e;
          if (e && !a && "object" === typeof e)
            if (tr.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (tr.isArray(e) &&
                (function (e) {
                  return tr.isArray(e) && !e.some(ir);
                })(e)) ||
              ((tr.isFileList(e) || tr.endsWith(n, "[]")) &&
                (l = tr.toArray(e)))
            )
              return (
                (n = lr(n)),
                l.forEach(function (e, r) {
                  !tr.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? sr([n], r, o) : null === i ? n : n + "[]",
                      s(e),
                    );
                }),
                !1
              );
          return !!ir(e) || (t.append(sr(a, n, o), s(e)), !1);
        }
        const c = [],
          f = Object.assign(ur, {
            defaultVisitor: u,
            convertValue: s,
            isVisitable: ir,
          });
        if (!tr.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!tr.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                tr.forEach(n, function (n, o) {
                  !0 ===
                    (!(tr.isUndefined(n) || null === n) &&
                      a.call(t, n, tr.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function fr(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function dr(e, t) {
        (this._pairs = []), e && cr(e, this, t);
      }
      const pr = dr.prototype;
      (pr.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (pr.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, fr);
              }
            : fr;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const hr = dr;
      function mr(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function gr(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || mr,
          a = n && n.serialize;
        let o;
        if (
          ((o = a
            ? a(t, n)
            : tr.isURLSearchParams(t)
              ? t.toString()
              : new hr(t, n).toString(r)),
          o)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
        }
        return e;
      }
      const vr = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            tr.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        yr = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        br = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : hr,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        wr = "undefined" !== typeof window && "undefined" !== typeof document,
        xr = ("object" === typeof navigator && navigator) || void 0,
        Sr =
          wr &&
          (!xr ||
            ["ReactNative", "NativeScript", "NS"].indexOf(xr.product) < 0),
        kr =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        Er = (wr && window.location.href) || "http://localhost",
        Cr = { ...e, ...br };
      const _r = function (e) {
        function t(e, n, r, a) {
          let o = e[a++];
          if ("__proto__" === o) return !0;
          const i = Number.isFinite(+o),
            l = a >= e.length;
          if (((o = !o && tr.isArray(r) ? r.length : o), l))
            return tr.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i;
          (r[o] && tr.isObject(r[o])) || (r[o] = []);
          return (
            t(e, n, r[o], a) &&
              tr.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i
          );
        }
        if (tr.isFormData(e) && tr.isFunction(e.entries)) {
          const n = {};
          return (
            tr.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return tr
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                })(e),
                r,
                n,
                0,
              );
            }),
            n
          );
        }
        return null;
      };
      const Tr = {
        transitional: yr,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = tr.isObject(e);
            a && tr.isHTMLForm(e) && (e = new FormData(e));
            if (tr.isFormData(e)) return r ? JSON.stringify(_r(e)) : e;
            if (
              tr.isArrayBuffer(e) ||
              tr.isBuffer(e) ||
              tr.isStream(e) ||
              tr.isFile(e) ||
              tr.isBlob(e) ||
              tr.isReadableStream(e)
            )
              return e;
            if (tr.isArrayBufferView(e)) return e.buffer;
            if (tr.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1,
                ),
                e.toString()
              );
            let o;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return cr(
                    e,
                    new Cr.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Cr.isNode && tr.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t,
                    ),
                  );
                })(e, this.formSerializer).toString();
              if (
                (o = tr.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return cr(
                  o ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer,
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (tr.isString(e))
                    try {
                      return (t || JSON.parse)(e), tr.trim(e);
                    } catch (Ba) {
                      if ("SyntaxError" !== Ba.name) throw Ba;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Tr.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (tr.isResponse(e) || tr.isReadableStream(e)) return e;
            if (e && tr.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (Ba) {
                if (n) {
                  if ("SyntaxError" === Ba.name)
                    throw or.from(
                      Ba,
                      or.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response,
                    );
                  throw Ba;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Cr.classes.FormData, Blob: Cr.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      tr.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Tr.headers[e] = {};
      });
      const Or = Tr,
        Fr = tr.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Nr = Symbol("internals");
      function Pr(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Rr(e) {
        return !1 === e || null == e
          ? e
          : tr.isArray(e)
            ? e.map(Rr)
            : String(e);
      }
      function Mr(e, t, n, r, a) {
        return tr.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            tr.isString(t)
              ? tr.isString(r)
                ? -1 !== t.indexOf(r)
                : tr.isRegExp(r)
                  ? r.test(t)
                  : void 0
              : void 0);
      }
      class Dr {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = Pr(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const o = tr.findKey(r, a);
            (!o ||
              void 0 === r[o] ||
              !0 === n ||
              (void 0 === n && !1 !== r[o])) &&
              (r[o || t] = Rr(e));
          }
          const o = (e, t) => tr.forEach(e, (e, n) => a(e, n, t));
          if (tr.isPlainObject(e) || e instanceof this.constructor) o(e, t);
          else if (
            tr.isString(e) &&
            (e = e.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
          )
            o(
              ((e) => {
                const t = {};
                let n, r, a;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (a = e.indexOf(":")),
                        (n = e.substring(0, a).trim().toLowerCase()),
                        (r = e.substring(a + 1).trim()),
                        !n ||
                          (t[n] && Fr[n]) ||
                          ("set-cookie" === n
                            ? t[n]
                              ? t[n].push(r)
                              : (t[n] = [r])
                            : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
                  t
                );
              })(e),
              t,
            );
          else if (tr.isHeaders(e))
            for (const [i, l] of e.entries()) a(l, i, n);
          else null != e && a(t, e, n);
          return this;
        }
        get(e, t) {
          if ((e = Pr(e))) {
            const n = tr.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (tr.isFunction(t)) return t.call(this, e, n);
              if (tr.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = Pr(e))) {
            const n = tr.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Mr(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = Pr(e))) {
              const a = tr.findKey(n, e);
              !a || (t && !Mr(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return tr.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Mr(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            tr.forEach(this, (r, a) => {
              const o = tr.findKey(n, a);
              if (o) return (t[o] = Rr(r)), void delete t[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n,
                      );
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = Rr(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            tr.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && tr.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[Nr] = this[Nr] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = Pr(e);
            t[r] ||
              (!(function (e, t) {
                const n = tr.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return tr.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Dr.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        tr.reduceDescriptors(Dr.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        tr.freezeMethods(Dr);
      const Ar = Dr;
      function jr(e, t) {
        const n = this || Or,
          r = t || n,
          a = Ar.from(r.headers);
        let o = r.data;
        return (
          tr.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Lr(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Br(e, t, n) {
        or.call(this, null == e ? "canceled" : e, or.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      tr.inherits(Br, or, { __CANCEL__: !0 });
      const zr = Br;
      function Ir(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? t(
              new or(
                "Request failed with status code " + n.status,
                [or.ERR_BAD_REQUEST, or.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n,
              ),
            )
          : e(n);
      }
      const Ur = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const s = Date.now(),
              u = r[i];
            a || (a = s), (n[o] = l), (r[o] = s);
            let c = i,
              f = 0;
            for (; c !== o; ) (f += n[c++]), (c %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), s - a < t))
              return;
            const d = u && s - u;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      };
      const Hr = function (e, t) {
          let n,
            r,
            a = 0,
            o = 1e3 / t;
          const i = function (t) {
            let o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Date.now();
            (a = o),
              (n = null),
              r && (clearTimeout(r), (r = null)),
              e.apply(null, t);
          };
          return [
            function () {
              const e = Date.now(),
                t = e - a;
              for (
                var l = arguments.length, s = new Array(l), u = 0;
                u < l;
                u++
              )
                s[u] = arguments[u];
              t >= o
                ? i(s, e)
                : ((n = s),
                  r ||
                    (r = setTimeout(() => {
                      (r = null), i(n);
                    }, o - t)));
            },
            () => n && i(n),
          ];
        },
        Vr = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            r = 0;
          const a = Ur(50, 250);
          return Hr((n) => {
            const o = n.loaded,
              i = n.lengthComputable ? n.total : void 0,
              l = o - r,
              s = a(l);
            r = o;
            e({
              loaded: o,
              total: i,
              progress: i ? o / i : void 0,
              bytes: l,
              rate: s || void 0,
              estimated: s && i && o <= i ? (i - o) / s : void 0,
              event: n,
              lengthComputable: null != i,
              [t ? "download" : "upload"]: !0,
            });
          }, n);
        },
        Wr = (e, t) => {
          const n = null != e;
          return [
            (r) => t[0]({ lengthComputable: n, total: e, loaded: r }),
            t[1],
          ];
        },
        qr = (e) =>
          function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return tr.asap(() => e(...n));
          },
        $r = Cr.hasStandardBrowserEnv
          ? (function () {
              const e =
                  Cr.navigator &&
                  /(msie|trident)/i.test(Cr.navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = tr.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        Yr = Cr.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, a, o) {
                const i = [e + "=" + encodeURIComponent(t)];
                tr.isNumber(n) &&
                  i.push("expires=" + new Date(n).toGMTString()),
                  tr.isString(r) && i.push("path=" + r),
                  tr.isString(a) && i.push("domain=" + a),
                  !0 === o && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read(e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function Qr(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Gr = (e) => (e instanceof Ar ? { ...e } : e);
      function Kr(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return tr.isPlainObject(e) && tr.isPlainObject(t)
            ? tr.merge.call({ caseless: n }, e, t)
            : tr.isPlainObject(t)
              ? tr.merge({}, t)
              : tr.isArray(t)
                ? t.slice()
                : t;
        }
        function a(e, t, n) {
          return tr.isUndefined(t)
            ? tr.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!tr.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return tr.isUndefined(t)
            ? tr.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        const s = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: (e, t) => a(Gr(e), Gr(t), !0),
        };
        return (
          tr.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const o = s[r] || a,
              i = o(e[r], t[r], r);
            (tr.isUndefined(i) && o !== l) || (n[r] = i);
          }),
          n
        );
      }
      const Xr = (e) => {
          const t = Kr({}, e);
          let n,
            {
              data: r,
              withXSRFToken: a,
              xsrfHeaderName: o,
              xsrfCookieName: i,
              headers: l,
              auth: s,
            } = t;
          if (
            ((t.headers = l = Ar.from(l)),
            (t.url = gr(Qr(t.baseURL, t.url), e.params, e.paramsSerializer)),
            s &&
              l.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (s.username || "") +
                      ":" +
                      (s.password
                        ? unescape(encodeURIComponent(s.password))
                        : ""),
                  ),
              ),
            tr.isFormData(r))
          )
            if (Cr.hasStandardBrowserEnv || Cr.hasStandardBrowserWebWorkerEnv)
              l.setContentType(void 0);
            else if (!1 !== (n = l.getContentType())) {
              const [e, ...t] = n
                ? n
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              l.setContentType([e || "multipart/form-data", ...t].join("; "));
            }
          if (
            Cr.hasStandardBrowserEnv &&
            (a && tr.isFunction(a) && (a = a(t)), a || (!1 !== a && $r(t.url)))
          ) {
            const e = o && i && Yr.read(i);
            e && l.set(o, e);
          }
          return t;
        },
        Jr =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              const r = Xr(e);
              let a = r.data;
              const o = Ar.from(r.headers).normalize();
              let i,
                l,
                s,
                u,
                c,
                {
                  responseType: f,
                  onUploadProgress: d,
                  onDownloadProgress: p,
                } = r;
              function h() {
                u && u(),
                  c && c(),
                  r.cancelToken && r.cancelToken.unsubscribe(i),
                  r.signal && r.signal.removeEventListener("abort", i);
              }
              let m = new XMLHttpRequest();
              function g() {
                if (!m) return;
                const r = Ar.from(
                  "getAllResponseHeaders" in m && m.getAllResponseHeaders(),
                );
                Ir(
                  function (e) {
                    t(e), h();
                  },
                  function (e) {
                    n(e), h();
                  },
                  {
                    data:
                      f && "text" !== f && "json" !== f
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: r,
                    config: e,
                    request: m,
                  },
                ),
                  (m = null);
              }
              m.open(r.method.toUpperCase(), r.url, !0),
                (m.timeout = r.timeout),
                "onloadend" in m
                  ? (m.onloadend = g)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf("file:"))) &&
                        setTimeout(g);
                    }),
                (m.onabort = function () {
                  m &&
                    (n(new or("Request aborted", or.ECONNABORTED, e, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  n(new or("Network Error", or.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = r.timeout
                    ? "timeout of " + r.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const a = r.transitional || yr;
                  r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                    n(
                      new or(
                        t,
                        a.clarifyTimeoutError ? or.ETIMEDOUT : or.ECONNABORTED,
                        e,
                        m,
                      ),
                    ),
                    (m = null);
                }),
                void 0 === a && o.setContentType(null),
                "setRequestHeader" in m &&
                  tr.forEach(o.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                tr.isUndefined(r.withCredentials) ||
                  (m.withCredentials = !!r.withCredentials),
                f && "json" !== f && (m.responseType = r.responseType),
                p && (([s, c] = Vr(p, !0)), m.addEventListener("progress", s)),
                d &&
                  m.upload &&
                  (([l, u] = Vr(d)),
                  m.upload.addEventListener("progress", l),
                  m.upload.addEventListener("loadend", u)),
                (r.cancelToken || r.signal) &&
                  ((i = (t) => {
                    m &&
                      (n(!t || t.type ? new zr(null, e, m) : t),
                      m.abort(),
                      (m = null));
                  }),
                  r.cancelToken && r.cancelToken.subscribe(i),
                  r.signal &&
                    (r.signal.aborted
                      ? i()
                      : r.signal.addEventListener("abort", i)));
              const v = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(r.url);
              v && -1 === Cr.protocols.indexOf(v)
                ? n(
                    new or(
                      "Unsupported protocol " + v + ":",
                      or.ERR_BAD_REQUEST,
                      e,
                    ),
                  )
                : m.send(a || null);
            });
          },
        Zr = (e, t) => {
          const { length: n } = (e = e ? e.filter(Boolean) : []);
          if (t || n) {
            let n,
              r = new AbortController();
            const a = function (e) {
              if (!n) {
                (n = !0), i();
                const t = e instanceof Error ? e : this.reason;
                r.abort(
                  t instanceof or
                    ? t
                    : new zr(t instanceof Error ? t.message : t),
                );
              }
            };
            let o =
              t &&
              setTimeout(() => {
                (o = null),
                  a(new or(`timeout ${t} of ms exceeded`, or.ETIMEDOUT));
              }, t);
            const i = () => {
              e &&
                (o && clearTimeout(o),
                (o = null),
                e.forEach((e) => {
                  e.unsubscribe
                    ? e.unsubscribe(a)
                    : e.removeEventListener("abort", a);
                }),
                (e = null));
            };
            e.forEach((e) => e.addEventListener("abort", a));
            const { signal: l } = r;
            return (l.unsubscribe = () => tr.asap(i)), l;
          }
        },
        ea = function* (e, t) {
          let n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let r,
            a = 0;
          for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
        },
        ta = async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          const t = e.getReader();
          try {
            for (;;) {
              const { done: e, value: n } = await t.read();
              if (e) break;
              yield n;
            }
          } finally {
            await t.cancel();
          }
        },
        na = (e, t, n, r) => {
          const a = (async function* (e, t) {
            for await (const n of ta(e)) yield* ea(n, t);
          })(e, t);
          let o,
            i = 0,
            l = (e) => {
              o || ((o = !0), r && r(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  const { done: t, value: r } = await a.next();
                  if (t) return l(), void e.close();
                  let o = r.byteLength;
                  if (n) {
                    let e = (i += o);
                    n(e);
                  }
                  e.enqueue(new Uint8Array(r));
                } catch (t) {
                  throw (l(t), t);
                }
              },
              cancel: (e) => (l(e), a.return()),
            },
            { highWaterMark: 2 },
          );
        },
        ra =
          "function" === typeof fetch &&
          "function" === typeof Request &&
          "function" === typeof Response,
        aa = ra && "function" === typeof ReadableStream,
        oa =
          ra &&
          ("function" === typeof TextEncoder
            ? ((ia = new TextEncoder()), (e) => ia.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
      var ia;
      const la = function (e) {
          try {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return !!e(...n);
          } catch (Ba) {
            return !1;
          }
        },
        sa =
          aa &&
          la(() => {
            let e = !1;
            const t = new Request(Cr.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (e = !0), "half";
              },
            }).headers.has("Content-Type");
            return e && !t;
          }),
        ua = aa && la(() => tr.isReadableStream(new Response("").body)),
        ca = { stream: ua && ((e) => e.body) };
      ra &&
        ((e) => {
          ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
            !ca[t] &&
              (ca[t] = tr.isFunction(e[t])
                ? (e) => e[t]()
                : (e, n) => {
                    throw new or(
                      `Response type '${t}' is not supported`,
                      or.ERR_NOT_SUPPORT,
                      n,
                    );
                  });
          });
        })(new Response());
      const fa = async (e, t) => {
          const n = tr.toFiniteNumber(e.getContentLength());
          return null == n
            ? (async (e) => {
                if (null == e) return 0;
                if (tr.isBlob(e)) return e.size;
                if (tr.isSpecCompliantForm(e)) {
                  const t = new Request(Cr.origin, { method: "POST", body: e });
                  return (await t.arrayBuffer()).byteLength;
                }
                return tr.isArrayBufferView(e) || tr.isArrayBuffer(e)
                  ? e.byteLength
                  : (tr.isURLSearchParams(e) && (e += ""),
                    tr.isString(e) ? (await oa(e)).byteLength : void 0);
              })(t)
            : n;
        },
        da =
          ra &&
          (async (e) => {
            let {
              url: t,
              method: n,
              data: r,
              signal: a,
              cancelToken: o,
              timeout: i,
              onDownloadProgress: l,
              onUploadProgress: s,
              responseType: u,
              headers: c,
              withCredentials: f = "same-origin",
              fetchOptions: d,
            } = Xr(e);
            u = u ? (u + "").toLowerCase() : "text";
            let p,
              h = Zr([a, o && o.toAbortSignal()], i);
            const m =
              h &&
              h.unsubscribe &&
              (() => {
                h.unsubscribe();
              });
            let g;
            try {
              if (
                s &&
                sa &&
                "get" !== n &&
                "head" !== n &&
                0 !== (g = await fa(c, r))
              ) {
                let e,
                  n = new Request(t, {
                    method: "POST",
                    body: r,
                    duplex: "half",
                  });
                if (
                  (tr.isFormData(r) &&
                    (e = n.headers.get("content-type")) &&
                    c.setContentType(e),
                  n.body)
                ) {
                  const [e, t] = Wr(g, Vr(qr(s)));
                  r = na(n.body, 65536, e, t);
                }
              }
              tr.isString(f) || (f = f ? "include" : "omit");
              const a = "credentials" in Request.prototype;
              p = new Request(t, {
                ...d,
                signal: h,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: r,
                duplex: "half",
                credentials: a ? f : void 0,
              });
              let o = await fetch(p);
              const i = ua && ("stream" === u || "response" === u);
              if (ua && (l || (i && m))) {
                const e = {};
                ["status", "statusText", "headers"].forEach((t) => {
                  e[t] = o[t];
                });
                const t = tr.toFiniteNumber(o.headers.get("content-length")),
                  [n, r] = (l && Wr(t, Vr(qr(l), !0))) || [];
                o = new Response(
                  na(o.body, 65536, n, () => {
                    r && r(), m && m();
                  }),
                  e,
                );
              }
              u = u || "text";
              let v = await ca[tr.findKey(ca, u) || "text"](o, e);
              return (
                !i && m && m(),
                await new Promise((t, n) => {
                  Ir(t, n, {
                    data: v,
                    headers: Ar.from(o.headers),
                    status: o.status,
                    statusText: o.statusText,
                    config: e,
                    request: p,
                  });
                })
              );
            } catch (v) {
              if (
                (m && m(),
                v && "TypeError" === v.name && /fetch/i.test(v.message))
              )
                throw Object.assign(
                  new or("Network Error", or.ERR_NETWORK, e, p),
                  { cause: v.cause || v },
                );
              throw or.from(v, v && v.code, e, p);
            }
          }),
        pa = { http: null, xhr: Jr, fetch: da };
      tr.forEach(pa, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (Ba) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const ha = (e) => `- ${e}`,
        ma = (e) => tr.isFunction(e) || null === e || !1 === e,
        ga = (e) => {
          e = tr.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let o = 0; o < t; o++) {
            let t;
            if (
              ((n = e[o]),
              (r = n),
              !ma(n) && ((r = pa[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new or(`Unknown adapter '${t}'`);
            if (r) break;
            a[t || "#" + o] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                `adapter ${t} ` +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(ha).join("\n")
                : " " + ha(e[0])
              : "as no adapter specified";
            throw new or(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT",
            );
          }
          return r;
        };
      function va(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new zr(null, e);
      }
      function ya(e) {
        va(e),
          (e.headers = Ar.from(e.headers)),
          (e.data = jr.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return ga(e.adapter || Or.adapter)(e).then(
          function (t) {
            return (
              va(e),
              (t.data = jr.call(e, e.transformResponse, t)),
              (t.headers = Ar.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Lr(t) ||
                (va(e),
                t &&
                  t.response &&
                  ((t.response.data = jr.call(
                    e,
                    e.transformResponse,
                    t.response,
                  )),
                  (t.response.headers = Ar.from(t.response.headers)))),
              Promise.reject(t)
            );
          },
        );
      }
      const ba = "1.7.7",
        wa = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          wa[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      const xa = {};
      wa.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.7.7] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, o) => {
          if (!1 === e)
            throw new or(
              r(a, " has been removed" + (t ? " in " + t : "")),
              or.ERR_DEPRECATED,
            );
          return (
            t &&
              !xa[a] &&
              ((xa[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(n, a, o)
          );
        };
      };
      const Sa = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new or(
                "options must be an object",
                or.ERR_BAD_OPTION_VALUE,
              );
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n)
                  throw new or(
                    "option " + o + " must be " + n,
                    or.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== n)
                throw new or("Unknown option " + o, or.ERR_BAD_OPTION);
            }
          },
          validators: wa,
        },
        ka = Sa.validators;
      class Ea {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new vr(), response: new vr() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack
                  ? t &&
                    !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                    (n.stack += "\n" + t)
                  : (n.stack = t);
              } catch (Ba) {}
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = Kr(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            Sa.assertOptions(
              n,
              {
                silentJSONParsing: ka.transitional(ka.boolean),
                forcedJSONParsing: ka.transitional(ka.boolean),
                clarifyTimeoutError: ka.transitional(ka.boolean),
              },
              !1,
            ),
            null != r &&
              (tr.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : Sa.assertOptions(
                    r,
                    { encode: ka.function, serialize: ka.function },
                    !0,
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && tr.merge(a.common, a[t.method]);
          a &&
            tr.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              },
            ),
            (t.headers = Ar.concat(o, a));
          const i = [];
          let l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const s = [];
          let u;
          this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
          });
          let c,
            f = 0;
          if (!l) {
            const e = [ya.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, s),
                c = e.length,
                u = Promise.resolve(t);
              f < c;

            )
              u = u.then(e[f++], e[f++]);
            return u;
          }
          c = i.length;
          let d = t;
          for (f = 0; f < c; ) {
            const e = i[f++],
              t = i[f++];
            try {
              d = e(d);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            u = ya.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          for (f = 0, c = s.length; f < c; ) u = u.then(s[f++], s[f++]);
          return u;
        }
        getUri(e) {
          return gr(
            Qr((e = Kr(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer,
          );
        }
      }
      tr.forEach(["delete", "get", "head", "options"], function (e) {
        Ea.prototype[e] = function (t, n) {
          return this.request(
            Kr(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
        tr.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Kr(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                }),
              );
            };
          }
          (Ea.prototype[e] = t()), (Ea.prototype[e + "Form"] = t(!0));
        });
      const Ca = Ea;
      class _a {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new zr(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          const e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new _a(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const Ta = _a;
      const Oa = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Oa).forEach((e) => {
        let [t, n] = e;
        Oa[n] = t;
      });
      const Fa = Oa;
      const Na = (function e(t) {
        const n = new Ca(t),
          r = mn(Ca.prototype.request, n);
        return (
          tr.extend(r, Ca.prototype, n, { allOwnKeys: !0 }),
          tr.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Kr(t, n));
          }),
          r
        );
      })(Or);
      (Na.Axios = Ca),
        (Na.CanceledError = zr),
        (Na.CancelToken = Ta),
        (Na.isCancel = Lr),
        (Na.VERSION = ba),
        (Na.toFormData = cr),
        (Na.AxiosError = or),
        (Na.Cancel = Na.CanceledError),
        (Na.all = function (e) {
          return Promise.all(e);
        }),
        (Na.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Na.isAxiosError = function (e) {
          return tr.isObject(e) && !0 === e.isAxiosError;
        }),
        (Na.mergeConfig = Kr),
        (Na.AxiosHeaders = Ar),
        (Na.formToJSON = (e) => _r(tr.isHTMLForm(e) ? new FormData(e) : e)),
        (Na.getAdapter = ga),
        (Na.HttpStatusCode = Fa),
        (Na.default = Na);
      const Pa = Na;
      const Ra = function () {
          const [e, t] = (0, r.useState)([]);
          return (
            (0, r.useEffect)(() => {
              Pa.get("http://localhost/wordpress/wp-json/wp/v2/posts?_embed")
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  console.error("Error fetching data: ", e);
                });
            }, []),
            (0, xt.jsxs)("div", {
              children: [
                (0, xt.jsx)(sn, {}),
                (0, xt.jsx)(dn, { title: "Grupper" }),
                e.map((e) =>
                  (0, xt.jsxs)(
                    "div",
                    {
                      className: "flex flex-col text-center",
                      children: [
                        (0, xt.jsx)("h2", {
                          className: "h2 text-primaryColor",
                          children: e.title.rendered,
                        }),
                        e._embedded &&
                          e._embedded["wp:featuredmedia"] &&
                          (0, xt.jsx)("img", {
                            src: e._embedded["wp:featuredmedia"][0].source_url,
                            alt: e.title.rendered,
                            className: "mx-auto mb-4",
                          }),
                        (0, xt.jsx)("div", {
                          className:
                            "h3 text-secondaryColor mx-6 text-pretty mt-6",
                          dangerouslySetInnerHTML: {
                            __html: e.content.rendered,
                          },
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            })
          );
        },
        Ma = n.p + "static/media/5898436.fcddfd76462b1cf0ad90.jpg",
        Da = (e) => {
          let { children: t } = e;
          return (0, xt.jsx)("div", {
            className: "bg-cover bg-center min-h-screen w-full",
            style: {
              backgroundImage: `url(${Ma})`,
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
            },
            children: t,
          });
        },
        Aa = () =>
          (0, xt.jsx)(xt.Fragment, {
            children: (0, xt.jsxs)(Da, {
              children: [
                (0, xt.jsx)(sn, {}),
                (0, xt.jsx)(dn, { title: "Kontakt" }),
              ],
            }),
          }),
        ja = () => (0, xt.jsx)("div", { children: "Error" }),
        La = (function (e, t) {
          return ne({
            basename: null == t ? void 0 : t.basename,
            future: Ct({}, null == t ? void 0 : t.future, {
              v7_prependBasename: !0,
            }),
            history:
              ((n = { window: null == t ? void 0 : t.window }),
              void 0 === n && (n = {}),
              h(
                function (e, t) {
                  let { pathname: n, search: r, hash: a } = e.location;
                  return f(
                    "",
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || "default",
                  );
                },
                function (e, t) {
                  return "string" === typeof t ? t : d(t);
                },
                null,
                n,
              )),
            hydrationData: (null == t ? void 0 : t.hydrationData) || Ot(),
            routes: e,
            mapRouteProperties: wt,
            unstable_dataStrategy: null == t ? void 0 : t.unstable_dataStrategy,
            unstable_patchRoutesOnNavigation:
              null == t ? void 0 : t.unstable_patchRoutesOnNavigation,
            window: null == t ? void 0 : t.window,
          }).initialize();
          var n;
        })(
          bt(
            (0, xt.jsxs)(vt, {
              path: "/",
              element: (0, xt.jsx)(St, {}),
              errorElement: (0, xt.jsx)(ja, {}),
              children: [
                (0, xt.jsx)(vt, { index: !0, element: (0, xt.jsx)(hn, {}) }),
                (0, xt.jsx)(vt, {
                  path: "/groups",
                  element: (0, xt.jsx)(Ra, {}),
                }),
                (0, xt.jsx)(vt, {
                  path: "/contact",
                  element: (0, xt.jsx)(Aa, {}),
                }),
                (0, xt.jsx)(vt, {
                  path: "/error",
                  element: (0, xt.jsx)(ja, {}),
                }),
              ],
            }),
          ),
        );
      o.createRoot(document.getElementById("root")).render(
        (0, xt.jsx)(r.StrictMode, {
          children: (0, xt.jsx)(Da, {
            children: (0, xt.jsx)(jt, { router: La }),
          }),
        }),
      );
    })();
})();
//# sourceMappingURL=main.0f367f4d.js.map
