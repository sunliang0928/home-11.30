"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "function" == typeof define && define.amd ? define(function () {
    return e(t);
  }) : e(t);
}(void 0, function (c) {
  var Uj,
      d = function () {
    var u,
        a,
        l,
        i,
        s,
        n,
        r = [],
        o = r.concat,
        h = r.filter,
        f = r.slice,
        p = c.document,
        d = {},
        e = {},
        m = {
      "column-count": 1,
      columns: 1,
      "font-weight": 1,
      "line-height": 1,
      opacity: 1,
      "z-index": 1,
      zoom: 1
    },
        v = /^\s*<(\w+|!)[^>]*>/,
        g = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        j = /^(?:body|html)$/i,
        x = /([A-Z])/g,
        b = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        t = p.createElement("table"),
        $ = p.createElement("tr"),
        E = {
      tr: p.createElement("tbody"),
      tbody: t,
      thead: t,
      tfoot: t,
      td: $,
      th: $,
      "*": p.createElement("div")
    },
        w = /complete|loaded|interactive/,
        T = /^[\w-]*$/,
        S = {},
        C = S.toString,
        B = {},
        N = p.createElement("div"),
        O = {
      tabindex: "tabIndex",
      readonly: "readOnly",
      for: "htmlFor",
      class: "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
        P = Array.isArray || function (t) {
      return t instanceof Array;
    };

    function D(t) {
      return null == t ? String(t) : S[C.call(t)] || "object";
    }

    function M(t) {
      return "function" == D(t);
    }

    function F(t) {
      return null != t && t == t.window;
    }

    function L(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE;
    }

    function A(t) {
      return "object" == D(t);
    }

    function Y(t) {
      return A(t) && !F(t) && Object.getPrototypeOf(t) == Object.prototype;
    }

    function R(t) {
      var e = !!t && "length" in t && t.length,
          n = l.type(t);
      return "function" != n && !F(t) && ("array" == n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
    }

    function _(t) {
      return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }

    function U(t) {
      return t in e ? e[t] : e[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
    }

    function k(t, e) {
      return "number" != typeof e || m[_(t)] ? e : e + "px";
    }

    function Z(t) {
      return "children" in t ? f.call(t.children) : l.map(t.childNodes, function (t) {
        if (1 == t.nodeType) return t;
      });
    }

    function V(t, e) {
      var n,
          i = t ? t.length : 0;

      for (n = 0; n < i; n++) {
        this[n] = t[n];
      }

      this.length = i, this.selector = e || "";
    }

    function z(t, e) {
      return null == e ? l(t) : l(t).filter(e);
    }

    function H(t, e, n, i) {
      return M(e) ? e.call(t, n, i) : e;
    }

    function I(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
    }

    function q(t, e) {
      var n = t.className || "",
          i = n && n.baseVal !== u;
      if (e === u) return i ? n.baseVal : n;
      i ? n.baseVal = e : t.className = e;
    }

    function W(e) {
      try {
        return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? l.parseJSON(e) : e) : e;
      } catch (t) {
        return e;
      }
    }

    return B.matches = function (t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;
      var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
      if (n) return n.call(t, e);
      var i,
          r = t.parentNode,
          o = !r;
      return o && (r = N).appendChild(t), i = ~B.qsa(r, e).indexOf(t), o && N.removeChild(t), i;
    }, s = function s(t) {
      return t.replace(/-+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : "";
      });
    }, n = function n(_n) {
      return h.call(_n, function (t, e) {
        return _n.indexOf(t) == e;
      });
    }, B.fragment = function (t, e, n) {
      var i, r, o;
      return g.test(t) && (i = l(p.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(y, "<$1></$2>")), e === u && (e = v.test(t) && RegExp.$1), e in E || (e = "*"), (o = E[e]).innerHTML = "" + t, i = l.each(f.call(o.childNodes), function () {
        o.removeChild(this);
      })), Y(n) && (r = l(i), l.each(n, function (t, e) {
        -1 < b.indexOf(t) ? r[t](e) : r.attr(t, e);
      })), i;
    }, B.Z = function (t, e) {
      return new V(t, e);
    }, B.isZ = function (t) {
      return t instanceof B.Z;
    }, B.init = function (t, e) {
      var n, i;
      if (!t) return B.Z();
      if ("string" == typeof t) {
        if ("<" == (t = t.trim())[0] && v.test(t)) n = B.fragment(t, RegExp.$1, e), t = null;else {
          if (e !== u) return l(e).find(t);
          n = B.qsa(p, t);
        }
      } else {
        if (M(t)) return l(p).ready(t);
        if (B.isZ(t)) return t;
        if (P(t)) i = t, n = h.call(i, function (t) {
          return null != t;
        });else if (A(t)) n = [t], t = null;else if (v.test(t)) n = B.fragment(t.trim(), RegExp.$1, e), t = null;else {
          if (e !== u) return l(e).find(t);
          n = B.qsa(p, t);
        }
      }
      return B.Z(n, t);
    }, (l = function l(t, e) {
      return B.init(t, e);
    }).extend = function (e) {
      var n,
          t = f.call(arguments, 1);
      return "boolean" == typeof e && (n = e, e = t.shift()), t.forEach(function (t) {
        !function t(e, n, i) {
          for (a in n) {
            i && (Y(n[a]) || P(n[a])) ? (Y(n[a]) && !Y(e[a]) && (e[a] = {}), P(n[a]) && !P(e[a]) && (e[a] = []), t(e[a], n[a], i)) : n[a] !== u && (e[a] = n[a]);
          }
        }(e, t, n);
      }), e;
    }, B.qsa = function (t, e) {
      var n,
          i = "#" == e[0],
          r = !i && "." == e[0],
          o = i || r ? e.slice(1) : e,
          a = T.test(o);
      return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : f.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
    }, l.contains = p.documentElement.contains ? function (t, e) {
      return t !== e && t.contains(e);
    } : function (t, e) {
      for (; e && (e = e.parentNode);) {
        if (e === t) return !0;
      }

      return !1;
    }, l.type = D, l.isFunction = M, l.isWindow = F, l.isArray = P, l.isPlainObject = Y, l.isEmptyObject = function (t) {
      var e;

      for (e in t) {
        return !1;
      }

      return !0;
    }, l.isNumeric = function (t) {
      var e = Number(t),
          n = _typeof(t);

      return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1;
    }, l.inArray = function (t, e, n) {
      return r.indexOf.call(e, t, n);
    }, l.camelCase = s, l.trim = function (t) {
      return null == t ? "" : String.prototype.trim.call(t);
    }, l.uuid = 0, l.support = {}, l.expr = {}, l.noop = function () {}, l.map = function (t, e) {
      var n,
          i,
          r,
          o,
          a = [];
      if (R(t)) for (i = 0; i < t.length; i++) {
        null != (n = e(t[i], i)) && a.push(n);
      } else for (r in t) {
        null != (n = e(t[r], r)) && a.push(n);
      }
      return 0 < (o = a).length ? l.fn.concat.apply([], o) : o;
    }, l.each = function (t, e) {
      var n, i;

      if (R(t)) {
        for (n = 0; n < t.length; n++) {
          if (!1 === e.call(t[n], n, t[n])) return t;
        }
      } else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) return t;
      }

      return t;
    }, l.grep = function (t, e) {
      return h.call(t, e);
    }, c.JSON && (l.parseJSON = JSON.parse), l.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
      S["[object " + e + "]"] = e.toLowerCase();
    }), l.fn = {
      constructor: B.Z,
      length: 0,
      forEach: r.forEach,
      reduce: r.reduce,
      push: r.push,
      sort: r.sort,
      splice: r.splice,
      indexOf: r.indexOf,
      concat: function concat() {
        var t,
            e,
            n = [];

        for (t = 0; t < arguments.length; t++) {
          e = arguments[t], n[t] = B.isZ(e) ? e.toArray() : e;
        }

        return o.apply(B.isZ(this) ? this.toArray() : this, n);
      },
      map: function map(n) {
        return l(l.map(this, function (t, e) {
          return n.call(t, e, t);
        }));
      },
      slice: function slice() {
        return l(f.apply(this, arguments));
      },
      ready: function ready(t) {
        return w.test(p.readyState) && p.body ? t(l) : p.addEventListener("DOMContentLoaded", function () {
          t(l);
        }, !1), this;
      },
      get: function get(t) {
        return t === u ? f.call(this) : this[0 <= t ? t : t + this.length];
      },
      toArray: function toArray() {
        return this.get();
      },
      size: function size() {
        return this.length;
      },
      remove: function remove() {
        return this.each(function () {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function each(n) {
        return r.every.call(this, function (t, e) {
          return !1 !== n.call(t, e, t);
        }), this;
      },
      filter: function filter(e) {
        return M(e) ? this.not(this.not(e)) : l(h.call(this, function (t) {
          return B.matches(t, e);
        }));
      },
      add: function add(t, e) {
        return l(n(this.concat(l(t, e))));
      },
      is: function is(t) {
        return 0 < this.length && B.matches(this[0], t);
      },
      not: function not(e) {
        var n = [];
        if (M(e) && e.call !== u) this.each(function (t) {
          e.call(this, t) || n.push(this);
        });else {
          var i = "string" == typeof e ? this.filter(e) : R(e) && M(e.item) ? f.call(e) : l(e);
          this.forEach(function (t) {
            i.indexOf(t) < 0 && n.push(t);
          });
        }
        return l(n);
      },
      has: function has(t) {
        return this.filter(function () {
          return A(t) ? l.contains(this, t) : l(this).find(t).size();
        });
      },
      eq: function eq(t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      },
      first: function first() {
        var t = this[0];
        return t && !A(t) ? t : l(t);
      },
      last: function last() {
        var t = this[this.length - 1];
        return t && !A(t) ? t : l(t);
      },
      find: function find(t) {
        var n = this;
        return t ? "object" == _typeof(t) ? l(t).filter(function () {
          var e = this;
          return r.some.call(n, function (t) {
            return l.contains(t, e);
          });
        }) : 1 == this.length ? l(B.qsa(this[0], t)) : this.map(function () {
          return B.qsa(this, t);
        }) : l();
      },
      closest: function closest(n, i) {
        var r = [],
            o = "object" == _typeof(n) && l(n);
        return this.each(function (t, e) {
          for (; e && !(o ? 0 <= o.indexOf(e) : B.matches(e, n));) {
            e = e !== i && !L(e) && e.parentNode;
          }

          e && r.indexOf(e) < 0 && r.push(e);
        }), l(r);
      },
      parents: function parents(t) {
        for (var e = [], n = this; 0 < n.length;) {
          n = l.map(n, function (t) {
            if ((t = t.parentNode) && !L(t) && e.indexOf(t) < 0) return e.push(t), t;
          });
        }

        return z(e, t);
      },
      parent: function parent(t) {
        return z(n(this.pluck("parentNode")), t);
      },
      children: function children(t) {
        return z(this.map(function () {
          return Z(this);
        }), t);
      },
      contents: function contents() {
        return this.map(function () {
          return this.contentDocument || f.call(this.childNodes);
        });
      },
      siblings: function siblings(t) {
        return z(this.map(function (t, e) {
          return h.call(Z(e.parentNode), function (t) {
            return t !== e;
          });
        }), t);
      },
      empty: function empty() {
        return this.each(function () {
          this.innerHTML = "";
        });
      },
      pluck: function pluck(e) {
        return l.map(this, function (t) {
          return t[e];
        });
      },
      show: function show() {
        return this.each(function () {
          var t, e, n;
          "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, d[t] || (e = p.createElement(t), p.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), d[t] = n), d[t]));
        });
      },
      replaceWith: function replaceWith(t) {
        return this.before(t).remove();
      },
      wrap: function wrap(e) {
        var n = M(e);
        if (this[0] && !n) var i = l(e).get(0),
            r = i.parentNode || 1 < this.length;
        return this.each(function (t) {
          l(this).wrapAll(n ? e.call(this, t) : r ? i.cloneNode(!0) : i);
        });
      },
      wrapAll: function wrapAll(t) {
        if (this[0]) {
          var e;

          for (l(this[0]).before(t = l(t)); (e = t.children()).length;) {
            t = e.first();
          }

          l(t).append(this);
        }

        return this;
      },
      wrapInner: function wrapInner(r) {
        var o = M(r);
        return this.each(function (t) {
          var e = l(this),
              n = e.contents(),
              i = o ? r.call(this, t) : r;
          n.length ? n.wrapAll(i) : e.append(i);
        });
      },
      unwrap: function unwrap() {
        return this.parent().each(function () {
          l(this).replaceWith(l(this).children());
        }), this;
      },
      clone: function clone() {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      },
      hide: function hide() {
        return this.css("display", "none");
      },
      toggle: function toggle(e) {
        return this.each(function () {
          var t = l(this);
          (e === u ? "none" == t.css("display") : e) ? t.show() : t.hide();
        });
      },
      prev: function prev(t) {
        return l(this.pluck("previousElementSibling")).filter(t || "*");
      },
      next: function next(t) {
        return l(this.pluck("nextElementSibling")).filter(t || "*");
      },
      html: function html(n) {
        return 0 in arguments ? this.each(function (t) {
          var e = this.innerHTML;
          l(this).empty().append(H(this, n, t, e));
        }) : 0 in this ? this[0].innerHTML : null;
      },
      text: function text(n) {
        return 0 in arguments ? this.each(function (t) {
          var e = H(this, n, t, this.textContent);
          this.textContent = null == e ? "" : "" + e;
        }) : 0 in this ? this.pluck("textContent").join("") : null;
      },
      attr: function attr(e, n) {
        var t;
        return "string" != typeof e || 1 in arguments ? this.each(function (t) {
          if (1 === this.nodeType) if (A(e)) for (a in e) {
            I(this, a, e[a]);
          } else I(this, e, H(this, n, t, this.getAttribute(e)));
        }) : 0 in this && 1 == this[0].nodeType && null != (t = this[0].getAttribute(e)) ? t : u;
      },
      removeAttr: function removeAttr(t) {
        return this.each(function () {
          1 === this.nodeType && t.split(" ").forEach(function (t) {
            I(this, t);
          }, this);
        });
      },
      prop: function prop(e, n) {
        return e = O[e] || e, 1 in arguments ? this.each(function (t) {
          this[e] = H(this, n, t, this[e]);
        }) : this[0] && this[0][e];
      },
      removeProp: function removeProp(t) {
        return t = O[t] || t, this.each(function () {
          delete this[t];
        });
      },
      data: function data(t, e) {
        var n = "data-" + t.replace(x, "-$1").toLowerCase(),
            i = 1 in arguments ? this.attr(n, e) : this.attr(n);
        return null !== i ? W(i) : u;
      },
      val: function val(e) {
        return 0 in arguments ? (null == e && (e = ""), this.each(function (t) {
          this.value = H(this, e, t, this.value);
        })) : this[0] && (this[0].multiple ? l(this[0]).find("option").filter(function () {
          return this.selected;
        }).pluck("value") : this[0].value);
      },
      offset: function offset(o) {
        if (o) return this.each(function (t) {
          var e = l(this),
              n = H(this, o, t, e.offset()),
              i = e.offsetParent().offset(),
              r = {
            top: n.top - i.top,
            left: n.left - i.left
          };
          "static" == e.css("position") && (r.position = "relative"), e.css(r);
        });
        if (!this.length) return null;
        if (p.documentElement !== this[0] && !l.contains(p.documentElement, this[0])) return {
          top: 0,
          left: 0
        };
        var t = this[0].getBoundingClientRect();
        return {
          left: t.left + c.pageXOffset,
          top: t.top + c.pageYOffset,
          width: Math.round(t.width),
          height: Math.round(t.height)
        };
      },
      css: function css(t, e) {
        if (arguments.length < 2) {
          var n = this[0];

          if ("string" == typeof t) {
            if (!n) return;
            return n.style[s(t)] || getComputedStyle(n, "").getPropertyValue(t);
          }

          if (P(t)) {
            if (!n) return;
            var i = {},
                r = getComputedStyle(n, "");
            return l.each(t, function (t, e) {
              i[e] = n.style[s(e)] || r.getPropertyValue(e);
            }), i;
          }
        }

        var o = "";
        if ("string" == D(t)) e || 0 === e ? o = _(t) + ":" + k(t, e) : this.each(function () {
          this.style.removeProperty(_(t));
        });else for (a in t) {
          t[a] || 0 === t[a] ? o += _(a) + ":" + k(a, t[a]) + ";" : this.each(function () {
            this.style.removeProperty(_(a));
          });
        }
        return this.each(function () {
          this.style.cssText += ";" + o;
        });
      },
      index: function index(t) {
        return t ? this.indexOf(l(t)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function hasClass(t) {
        return !!t && r.some.call(this, function (t) {
          return this.test(q(t));
        }, U(t));
      },
      addClass: function addClass(n) {
        return n ? this.each(function (t) {
          if ("className" in this) {
            i = [];
            var e = q(this);
            H(this, n, t, e).split(/\s+/g).forEach(function (t) {
              l(this).hasClass(t) || i.push(t);
            }, this), i.length && q(this, e + (e ? " " : "") + i.join(" "));
          }
        }) : this;
      },
      removeClass: function removeClass(e) {
        return this.each(function (t) {
          if ("className" in this) {
            if (e === u) return q(this, "");
            i = q(this), H(this, e, t, i).split(/\s+/g).forEach(function (t) {
              i = i.replace(U(t), " ");
            }), q(this, i.trim());
          }
        });
      },
      toggleClass: function toggleClass(n, i) {
        return n ? this.each(function (t) {
          var e = l(this);
          H(this, n, t, q(this)).split(/\s+/g).forEach(function (t) {
            (i === u ? !e.hasClass(t) : i) ? e.addClass(t) : e.removeClass(t);
          });
        }) : this;
      },
      scrollTop: function scrollTop(t) {
        if (this.length) {
          var e = "scrollTop" in this[0];
          return t === u ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
            this.scrollTop = t;
          } : function () {
            this.scrollTo(this.scrollX, t);
          });
        }
      },
      scrollLeft: function scrollLeft(t) {
        if (this.length) {
          var e = "scrollLeft" in this[0];
          return t === u ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
            this.scrollLeft = t;
          } : function () {
            this.scrollTo(t, this.scrollY);
          });
        }
      },
      position: function position() {
        if (this.length) {
          var t = this[0],
              e = this.offsetParent(),
              n = this.offset(),
              i = j.test(e[0].nodeName) ? {
            top: 0,
            left: 0
          } : e.offset();
          return n.top -= parseFloat(l(t).css("margin-top")) || 0, n.left -= parseFloat(l(t).css("margin-left")) || 0, i.top += parseFloat(l(e[0]).css("border-top-width")) || 0, i.left += parseFloat(l(e[0]).css("border-left-width")) || 0, {
            top: n.top - i.top,
            left: n.left - i.left
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent || p.body; t && !j.test(t.nodeName) && "static" == l(t).css("position");) {
            t = t.offsetParent;
          }

          return t;
        });
      }
    }, l.fn.detach = l.fn.remove, ["width", "height"].forEach(function (i) {
      var r = i.replace(/./, function (t) {
        return t[0].toUpperCase();
      });

      l.fn[i] = function (e) {
        var t,
            n = this[0];
        return e === u ? F(n) ? n["inner" + r] : L(n) ? n.documentElement["scroll" + r] : (t = this.offset()) && t[i] : this.each(function (t) {
          (n = l(this)).css(i, H(this, e, t, n[i]()));
        });
      };
    }), ["after", "prepend", "before", "append"].forEach(function (e, a) {
      var s = a % 2;
      l.fn[e] = function () {
        var n,
            i,
            r = l.map(arguments, function (t) {
          var e = [];
          return "array" == (n = D(t)) ? (t.forEach(function (t) {
            return t.nodeType !== u ? e.push(t) : l.zepto.isZ(t) ? e = e.concat(t.get()) : void (e = e.concat(B.fragment(t)));
          }), e) : "object" == n || null == t ? t : B.fragment(t);
        }),
            o = 1 < this.length;
        return r.length < 1 ? this : this.each(function (t, e) {
          i = s ? e : e.parentNode, e = 0 == a ? e.nextSibling : 1 == a ? e.firstChild : 2 == a ? e : null;
          var n = l.contains(p.documentElement, i);
          r.forEach(function (t) {
            if (o) t = t.cloneNode(!0);else if (!i) return l(t).remove();
            i.insertBefore(t, e), n && function t(e, n) {
              n(e);

              for (var i = 0, r = e.childNodes.length; i < r; i++) {
                t(e.childNodes[i], n);
              }
            }(t, function (t) {
              if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                var e = t.ownerDocument ? t.ownerDocument.defaultView : c;
                e.eval.call(e, t.innerHTML);
              }
            });
          });
        });
      }, l.fn[s ? e + "To" : "insert" + (a ? "Before" : "After")] = function (t) {
        return l(t)[e](this), this;
      };
    }), B.Z.prototype = V.prototype = l.fn, B.uniq = n, B.deserializeValue = W, l.zepto = B, l;
  }();

  return c.Zepto = d, void 0 === c.$ && (c.$ = d), function (l) {
    var h,
        e = 1,
        u = Array.prototype.slice,
        f = l.isFunction,
        p = function p(t) {
      return "string" == typeof t;
    },
        d = {},
        o = {},
        n = "onfocusin" in c,
        i = {
      focus: "focusin",
      blur: "focusout"
    },
        m = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    };

    function v(t) {
      return t._zid || (t._zid = e++);
    }

    function a(t, e, n, i) {
      if ((e = g(e)).ns) var r = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
      var o;
      return (d[v(t)] || []).filter(function (t) {
        return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || v(t.fn) === v(n)) && (!i || t.sel == i);
      });
    }

    function g(t) {
      var e = ("" + t).split(".");
      return {
        e: e[0],
        ns: e.slice(1).sort().join(" ")
      };
    }

    function y(t, e) {
      return t.del && !n && t.e in i || !!e;
    }

    function j(t) {
      return m[t] || n && i[t] || t;
    }

    function x(r, t, e, o, a, s, c) {
      var n = v(r),
          u = d[n] || (d[n] = []);
      t.split(/\s/).forEach(function (t) {
        if ("ready" == t) return l(document).ready(e);
        var n = g(t);
        n.fn = e, n.sel = a, n.e in m && (e = function e(t) {
          var e = t.relatedTarget;
          if (!e || e !== this && !l.contains(this, e)) return n.fn.apply(this, arguments);
        });
        var i = (n.del = s) || e;
        n.proxy = function (t) {
          if (!(t = E(t)).isImmediatePropagationStopped()) {
            t.data = o;
            var e = i.apply(r, t._args == h ? [t] : [t].concat(t._args));
            return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
          }
        }, n.i = u.length, u.push(n), "addEventListener" in r && r.addEventListener(j(n.e), n.proxy, y(n, c));
      });
    }

    function b(e, t, n, i, r) {
      var o = v(e);
      (t || "").split(/\s/).forEach(function (t) {
        a(e, t, n, i).forEach(function (t) {
          delete d[o][t.i], "removeEventListener" in e && e.removeEventListener(j(t.e), t.proxy, y(t, r));
        });
      });
    }

    o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", l.event = {
      add: x,
      remove: b
    }, l.proxy = function (t, e) {
      var n = 2 in arguments && u.call(arguments, 2);

      if (f(t)) {
        var i = function i() {
          return t.apply(e, n ? n.concat(u.call(arguments)) : arguments);
        };

        return i._zid = v(t), i;
      }

      if (p(e)) return n ? (n.unshift(t[e], t), l.proxy.apply(null, n)) : l.proxy(t[e], t);
      throw new TypeError("expected function");
    }, l.fn.bind = function (t, e, n) {
      return this.on(t, e, n);
    }, l.fn.unbind = function (t, e) {
      return this.off(t, e);
    }, l.fn.one = function (t, e, n, i) {
      return this.on(t, e, n, i, 1);
    };

    var s = function s() {
      return !0;
    },
        $ = function $() {
      return !1;
    },
        r = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        t = {
      preventDefault: "isDefaultPrevented",
      stopImmediatePropagation: "isImmediatePropagationStopped",
      stopPropagation: "isPropagationStopped"
    };

    function E(i, r) {
      return !r && i.isDefaultPrevented || (r || (r = i), l.each(t, function (t, e) {
        var n = r[t];
        i[t] = function () {
          return this[e] = s, n && n.apply(r, arguments);
        }, i[e] = $;
      }), i.timeStamp || (i.timeStamp = Date.now()), (r.defaultPrevented !== h ? r.defaultPrevented : "returnValue" in r ? !1 === r.returnValue : r.getPreventDefault && r.getPreventDefault()) && (i.isDefaultPrevented = s)), i;
    }

    function w(t) {
      var e,
          n = {
        originalEvent: t
      };

      for (e in t) {
        r.test(e) || t[e] === h || (n[e] = t[e]);
      }

      return E(n, t);
    }

    l.fn.delegate = function (t, e, n) {
      return this.on(e, t, n);
    }, l.fn.undelegate = function (t, e, n) {
      return this.off(e, t, n);
    }, l.fn.live = function (t, e) {
      return l(document.body).delegate(this.selector, t, e), this;
    }, l.fn.die = function (t, e) {
      return l(document.body).undelegate(this.selector, t, e), this;
    }, l.fn.on = function (e, r, n, o, a) {
      var s,
          c,
          i = this;
      return e && !p(e) ? (l.each(e, function (t, e) {
        i.on(t, r, n, e, a);
      }), i) : (p(r) || f(o) || !1 === o || (o = n, n = r, r = h), o !== h && !1 !== n || (o = n, n = h), !1 === o && (o = $), i.each(function (t, i) {
        a && (s = function s(t) {
          return b(i, t.type, o), o.apply(this, arguments);
        }), r && (c = function c(t) {
          var e,
              n = l(t.target).closest(r, i).get(0);
          if (n && n !== i) return e = l.extend(w(t), {
            currentTarget: n,
            liveFired: i
          }), (s || o).apply(n, [e].concat(u.call(arguments, 1)));
        }), x(i, e, o, n, r, c || s);
      }));
    }, l.fn.off = function (t, n, e) {
      var i = this;
      return t && !p(t) ? (l.each(t, function (t, e) {
        i.off(t, n, e);
      }), i) : (p(n) || f(e) || !1 === e || (e = n, n = h), !1 === e && (e = $), i.each(function () {
        b(this, t, e, n);
      }));
    }, l.fn.trigger = function (t, e) {
      return (t = p(t) || l.isPlainObject(t) ? l.Event(t) : E(t))._args = e, this.each(function () {
        t.type in i && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : l(this).triggerHandler(t, e);
      });
    }, l.fn.triggerHandler = function (n, i) {
      var r, o;
      return this.each(function (t, e) {
        (r = w(p(n) ? l.Event(n) : n))._args = i, r.target = e, l.each(a(e, n.type || n), function (t, e) {
          if (o = e.proxy(r), r.isImmediatePropagationStopped()) return !1;
        });
      }), o;
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
      l.fn[e] = function (t) {
        return 0 in arguments ? this.bind(e, t) : this.trigger(e);
      };
    }), l.Event = function (t, e) {
      p(t) || (t = (e = t).type);
      var n = document.createEvent(o[t] || "Events"),
          i = !0;
      if (e) for (var r in e) {
        "bubbles" == r ? i = !!e[r] : n[r] = e[r];
      }
      return n.initEvent(t, i, !0), E(n);
    };
  }(d), function (Bh) {
    var Eh,
        Fh,
        Ch = +new Date(),
        Dh = c.document,
        Gh = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hh = /^(?:text|application)\/javascript/i,
        Ih = /^(?:text|application)\/xml/i,
        Jh = "application/json",
        Kh = "text/html",
        Lh = /^\s*$/,
        Mh = Dh.createElement("a");

    function Oh(t, e, n, i) {
      if (t.global) return r = e || Dh, o = n, a = i, s = Bh.Event(o), Bh(r).trigger(s, a), !s.isDefaultPrevented();
      var r, o, a, s;
    }

    function Rh(t, e) {
      var n = e.context;
      if (!1 === e.beforeSend.call(n, t, e) || !1 === Oh(e, n, "ajaxBeforeSend", [t, e])) return !1;
      Oh(e, n, "ajaxSend", [t, e]);
    }

    function Sh(t, e, n, i) {
      var r = n.context,
          o = "success";
      n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), Oh(n, r, "ajaxSuccess", [e, n, t]), Uh(o, e, n);
    }

    function Th(t, e, n, i, r) {
      var o = i.context;
      i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), Oh(i, o, "ajaxError", [n, i, t || e]), Uh(e, n, i);
    }

    function Uh(t, e, n) {
      var i,
          r = n.context;
      n.complete.call(r, e, t), Oh(n, r, "ajaxComplete", [e, n]), (i = n).global && ! --Bh.active && Oh(i, null, "ajaxStop");
    }

    function Wh() {}

    function Yh(t, e) {
      return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
    }

    function $h(t, e, n, i) {
      return Bh.isFunction(e) && (i = n, n = e, e = void 0), Bh.isFunction(n) || (i = n, n = void 0), {
        url: t,
        data: e,
        success: n,
        dataType: i
      };
    }

    Mh.href = c.location.href, Bh.active = 0, Bh.ajaxJSONP = function (n, i) {
      if (!("type" in n)) return Bh.ajax(n);

      var r,
          o,
          t = n.jsonpCallback,
          a = (Bh.isFunction(t) ? t() : t) || "Zepto" + Ch++,
          s = Dh.createElement("script"),
          u = c[a],
          e = function e(t) {
        Bh(s).triggerHandler("error", t || "abort");
      },
          l = {
        abort: e
      };

      return i && i.promise(l), Bh(s).on("load error", function (t, e) {
        clearTimeout(o), Bh(s).off().remove(), "error" != t.type && r ? Sh(r[0], l, n, i) : Th(null, e || "error", l, n, i), c[a] = u, r && Bh.isFunction(u) && u(r[0]), u = r = void 0;
      }), !1 === Rh(l, n) ? e("abort") : (c[a] = function () {
        r = arguments;
      }, s.src = n.url.replace(/\?(.+)=\?/, "?$1=" + a), Dh.head.appendChild(s), 0 < n.timeout && (o = setTimeout(function () {
        e("timeout");
      }, n.timeout))), l;
    }, Bh.ajaxSettings = {
      type: "GET",
      beforeSend: Wh,
      success: Wh,
      error: Wh,
      complete: Wh,
      context: null,
      global: !0,
      xhr: function xhr() {
        return new c.XMLHttpRequest();
      },
      accepts: {
        script: "text/javascript, application/javascript, application/x-javascript",
        json: Jh,
        xml: "application/xml, text/xml",
        html: Kh,
        text: "text/plain"
      },
      crossDomain: !1,
      timeout: 0,
      processData: !0,
      cache: !0,
      dataFilter: Wh
    }, Bh.ajax = function (Zi) {
      var aj,
          bj,
          ji,
          Yi,
          $i = Bh.extend({}, Zi || {}),
          _i = Bh.Deferred && Bh.Deferred();

      for (Eh in Bh.ajaxSettings) {
        void 0 === $i[Eh] && ($i[Eh] = Bh.ajaxSettings[Eh]);
      }

      (ji = $i).global && 0 == Bh.active++ && Oh(ji, null, "ajaxStart"), $i.crossDomain || ((aj = Dh.createElement("a")).href = $i.url, aj.href = aj.href, $i.crossDomain = Mh.protocol + "//" + Mh.host != aj.protocol + "//" + aj.host), $i.url || ($i.url = c.location.toString()), -1 < (bj = $i.url.indexOf("#")) && ($i.url = $i.url.slice(0, bj)), (Yi = $i).processData && Yi.data && "string" != Bh.type(Yi.data) && (Yi.data = Bh.param(Yi.data, Yi.traditional)), !Yi.data || Yi.type && "GET" != Yi.type.toUpperCase() && "jsonp" != Yi.dataType || (Yi.url = Yh(Yi.url, Yi.data), Yi.data = void 0);
      var cj = $i.dataType,
          dj = /\?.+=\?/.test($i.url);
      if (dj && (cj = "jsonp"), !1 !== $i.cache && (Zi && !0 === Zi.cache || "script" != cj && "jsonp" != cj) || ($i.url = Yh($i.url, "_=" + Date.now())), "jsonp" == cj) return dj || ($i.url = Yh($i.url, $i.jsonp ? $i.jsonp + "=?" : !1 === $i.jsonp ? "" : "callback=?")), Bh.ajaxJSONP($i, _i);

      var kj,
          ej = $i.accepts[cj],
          fj = {},
          gj = function gj(t, e) {
        fj[t.toLowerCase()] = [t, e];
      },
          hj = /^([\w-]+:)\/\//.test($i.url) ? RegExp.$1 : c.location.protocol,
          ij = $i.xhr(),
          jj = ij.setRequestHeader;

      if (_i && _i.promise(ij), $i.crossDomain || gj("X-Requested-With", "XMLHttpRequest"), gj("Accept", ej || "*/*"), (ej = $i.mimeType || ej) && (-1 < ej.indexOf(",") && (ej = ej.split(",", 2)[0]), ij.overrideMimeType && ij.overrideMimeType(ej)), ($i.contentType || !1 !== $i.contentType && $i.data && "GET" != $i.type.toUpperCase()) && gj("Content-Type", $i.contentType || "application/x-www-form-urlencoded"), $i.headers) for (Fh in $i.headers) {
        gj(Fh, $i.headers[Fh]);
      }
      if (ij.setRequestHeader = gj, !(ij.onreadystatechange = function () {
        if (4 == ij.readyState) {
          ij.onreadystatechange = Wh, clearTimeout(kj);
          var oj,
              pj = !1;

          if (200 <= ij.status && ij.status < 300 || 304 == ij.status || 0 == ij.status && "file:" == hj) {
            if (cj = cj || ((Vi = $i.mimeType || ij.getResponseHeader("content-type")) && (Vi = Vi.split(";", 2)[0]), Vi && (Vi == Kh ? "html" : Vi == Jh ? "json" : Hh.test(Vi) ? "script" : Ih.test(Vi) && "xml") || "text"), "arraybuffer" == ij.responseType || "blob" == ij.responseType) oj = ij.response;else {
              oj = ij.responseText;

              try {
                oj = function (t, e, n) {
                  if (n.dataFilter == Wh) return t;
                  var i = n.context;
                  return n.dataFilter.call(i, t, e);
                }(oj, cj, $i), "script" == cj ? eval(oj) : "xml" == cj ? oj = ij.responseXML : "json" == cj && (oj = Lh.test(oj) ? null : Bh.parseJSON(oj));
              } catch (t) {
                pj = t;
              }

              if (pj) return Th(pj, "parsererror", ij, $i, _i);
            }
            Sh(oj, ij, $i, _i);
          } else Th(ij.statusText || null, ij.status ? "error" : "abort", ij, $i, _i);
        }

        var Vi;
      }) === Rh(ij, $i)) return ij.abort(), Th(null, "abort", ij, $i, _i), ij;
      var lj = !("async" in $i) || $i.async;
      if (ij.open($i.type, $i.url, lj, $i.username, $i.password), $i.xhrFields) for (Fh in $i.xhrFields) {
        ij[Fh] = $i.xhrFields[Fh];
      }

      for (Fh in fj) {
        jj.apply(ij, fj[Fh]);
      }

      return 0 < $i.timeout && (kj = setTimeout(function () {
        ij.onreadystatechange = Wh, ij.abort(), Th(null, "timeout", ij, $i, _i);
      }, $i.timeout)), ij.send($i.data ? $i.data : null), ij;
    }, Bh.get = function () {
      return Bh.ajax($h.apply(null, arguments));
    }, Bh.post = function () {
      var t = $h.apply(null, arguments);
      return t.type = "POST", Bh.ajax(t);
    }, Bh.getJSON = function () {
      var t = $h.apply(null, arguments);
      return t.dataType = "json", Bh.ajax(t);
    }, Bh.fn.load = function (t, e, n) {
      if (!this.length) return this;
      var i,
          r = this,
          o = t.split(/\s/),
          a = $h(t, e, n),
          s = a.success;
      return 1 < o.length && (a.url = o[0], i = o[1]), a.success = function (t) {
        r.html(i ? Bh("<div>").html(t.replace(Gh, "")).find(i) : t), s && s.apply(r, arguments);
      }, Bh.ajax(a), this;
    };
    var _h = encodeURIComponent;

    Bh.param = function (t, e) {
      var n = [];
      return n.add = function (t, e) {
        Bh.isFunction(e) && (e = e()), null == e && (e = ""), this.push(_h(t) + "=" + _h(e));
      }, function n(i, t, r, o) {
        var a,
            s = Bh.isArray(t),
            c = Bh.isPlainObject(t);
        Bh.each(t, function (t, e) {
          a = Bh.type(e), o && (t = r ? o : o + "[" + (c || "object" == a || "array" == a ? t : "") + "]"), !o && s ? i.add(e.name, e.value) : "array" == a || !r && "object" == a ? n(i, e, r, t) : i.add(t, e);
        });
      }(n, t, e), n.join("&").replace(/%20/g, "+");
    };
  }(d), (Uj = d).fn.serializeArray = function () {
    var n,
        i,
        e = [],
        r = function r(t) {
      if (t.forEach) return t.forEach(r);
      e.push({
        name: n,
        value: t
      });
    };

    return this[0] && Uj.each(this[0].elements, function (t, e) {
      i = e.type, (n = e.name) && "fieldset" != e.nodeName.toLowerCase() && !e.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && ("radio" != i && "checkbox" != i || e.checked) && r(Uj(e).val());
    }), e;
  }, Uj.fn.serialize = function () {
    var e = [];
    return this.serializeArray().forEach(function (t) {
      e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value));
    }), e.join("&");
  }, Uj.fn.submit = function (t) {
    if (0 in arguments) this.bind("submit", t);else if (this.length) {
      var e = Uj.Event("submit");
      this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit();
    }
    return this;
  }, function () {
    try {
      getComputedStyle(void 0);
    } catch (t) {
      var n = getComputedStyle;

      c.getComputedStyle = function (t, e) {
        try {
          return n(t, e);
        } catch (t) {
          return null;
        }
      };
    }
  }(), d;
}), function (s) {
  var c,
      u,
      l,
      h,
      f,
      p,
      d,
      m,
      v,
      g = {},
      y = !1;

  function j() {
    h = null, g.last && (g.el.trigger("longTap"), g = {});
  }

  function x() {
    h && clearTimeout(h), h = null;
  }

  function b() {
    c && clearTimeout(c), u && clearTimeout(u), l && clearTimeout(l), h && clearTimeout(h), c = u = l = h = null, g = {};
  }

  function $(t) {
    return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary;
  }

  function E(t, e) {
    return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e;
  }

  function t(t) {
    var e,
        n,
        i,
        r,
        o = 0,
        a = 0;
    y && (s(document).off(v.down, p).off(v.up, d).off(v.move, m).off(v.cancel, b), s(window).off("scroll", b), b(), y = !1), (v = t && "down" in t ? t : "ontouchstart" in document ? {
      down: "touchstart",
      up: "touchend",
      move: "touchmove",
      cancel: "touchcancel"
    } : "onpointerdown" in document ? {
      down: "pointerdown",
      up: "pointerup",
      move: "pointermove",
      cancel: "pointercancel"
    } : "onmspointerdown" in document && {
      down: "MSPointerDown",
      up: "MSPointerUp",
      move: "MSPointerMove",
      cancel: "MSPointerCancel"
    }) && ("MSGesture" in window && ((f = new MSGesture()).target = document.body, s(document).bind("MSGestureEnd", function (t) {
      var e = 1 < t.velocityX ? "Right" : t.velocityX < -1 ? "Left" : 1 < t.velocityY ? "Down" : t.velocityY < -1 ? "Up" : null;
      e && (g.el.trigger("swipe"), g.el.trigger("swipe" + e));
    })), p = function p(t) {
      (r = E(t, "down")) && !$(t) || (i = r ? t : t.touches[0], t.touches && 1 === t.touches.length && g.x2 && (g.x2 = void 0, g.y2 = void 0), e = Date.now(), n = e - (g.last || e), g.el = s("tagName" in i.target ? i.target : i.target.parentNode), c && clearTimeout(c), g.x1 = i.pageX, g.y1 = i.pageY, 0 < n && n <= 250 && (g.isDoubleTap = !0), g.last = e, h = setTimeout(j, 750), f && r && f.addPointer(t.pointerId));
    }, m = function m(t) {
      (r = E(t, "move")) && !$(t) || (i = r ? t : t.touches[0], x(), g.x2 = i.pageX, g.y2 = i.pageY, o += Math.abs(g.x1 - g.x2), a += Math.abs(g.y1 - g.y2));
    }, d = function d(t) {
      (r = E(t, "up")) && !$(t) || (x(), g.x2 && 30 < Math.abs(g.x1 - g.x2) || g.y2 && 30 < Math.abs(g.y1 - g.y2) ? l = setTimeout(function () {
        var t, e, n, i;
        g.el && (g.el.trigger("swipe"), g.el.trigger("swipe" + (t = g.x1, e = g.x2, n = g.y1, i = g.y2, Math.abs(t - e) >= Math.abs(n - i) ? 0 < t - e ? "Left" : "Right" : 0 < n - i ? "Up" : "Down"))), g = {};
      }, 0) : "last" in g && (o < 30 && a < 30 ? u = setTimeout(function () {
        var t = s.Event("tap");
        t.cancelTouch = b, g.el && g.el.trigger(t), g.isDoubleTap ? (g.el && g.el.trigger("doubleTap"), g = {}) : c = setTimeout(function () {
          c = null, g.el && g.el.trigger("singleTap"), g = {};
        }, 250);
      }, 0) : g = {}), o = a = 0);
    }, s(document).on(v.up, d).on(v.down, p).on(v.move, m), s(document).on(v.cancel, b), s(window).on("scroll", b), y = !0);
  }

  ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
    s.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), s.touch = {
    setup: t
  }, s(document).ready(t);
}(Zepto);