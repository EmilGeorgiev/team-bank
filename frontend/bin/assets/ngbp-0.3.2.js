/**
 * ngbp - v0.3.2 - 2014-10-28
 * https://github.com/ngbp/ngbp
 *
 * Copyright (c) 2014 Josh David Miller
 * Licensed MIT <https://raw.github.com/ngbp/ngbp/master/LICENSE>
 */
!function (a, b, c) {
    "use strict";
    function d(a) {
        return function () {
            var b, c, d = arguments[0], e = "[" + (a ? a + ":" : "") + d + "] ", f = arguments[1], g = arguments, h = function (a) {
                return"function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
            };
            for (b = e + f.replace(/\{\d+\}/g, function (a) {
                var b, c = +a.slice(1, -1);
                return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a
            }), b = b + "\nhttp://errors.angularjs.org/1.2.25/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++)b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
            return new Error(b)
        }
    }

    function e(a) {
        if (null == a || z(a))return!1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || Cd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d;
        if (a)if (x(a))for (d in a)"prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d); else if (Cd(a) || e(a))for (d = 0; d < a.length; d++)b.call(c, a[d], d); else if (a.forEach && a.forEach !== f)a.forEach(b, c); else for (d in a)a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a
    }

    function g(a) {
        var b = [];
        for (var c in a)a.hasOwnProperty(c) && b.push(c);
        return b.sort()
    }

    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++)b.call(c, a[d[e]], d[e]);
        return d
    }

    function i(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function j() {
        for (var a, b = Bd.length; b;) {
            if (b--, a = Bd[b].charCodeAt(0), 57 == a)return Bd[b] = "A", Bd.join("");
            if (90 != a)return Bd[b] = String.fromCharCode(a + 1), Bd.join("");
            Bd[b] = "0"
        }
        return Bd.unshift("0"), Bd.join("")
    }

    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function l(a) {
        var b = a.$$hashKey;
        return f(arguments, function (b) {
            b !== a && f(b, function (b, c) {
                a[c] = b
            })
        }), k(a, b), a
    }

    function m(a) {
        return parseInt(a, 10)
    }

    function n(a, b) {
        return l(new (l(function () {
        }, {prototype: a})), b)
    }

    function o() {
    }

    function p(a) {
        return a
    }

    function q(a) {
        return function () {
            return a
        }
    }

    function r(a) {
        return"undefined" == typeof a
    }

    function s(a) {
        return"undefined" != typeof a
    }

    function t(a) {
        return null != a && "object" == typeof a
    }

    function u(a) {
        return"string" == typeof a
    }

    function v(a) {
        return"number" == typeof a
    }

    function w(a) {
        return"[object Date]" === yd.call(a)
    }

    function x(a) {
        return"function" == typeof a
    }

    function y(a) {
        return"[object RegExp]" === yd.call(a)
    }

    function z(a) {
        return a && a.document && a.location && a.alert && a.setInterval
    }

    function A(a) {
        return a && a.$evalAsync && a.$watch
    }

    function B(a) {
        return"[object File]" === yd.call(a)
    }

    function C(a) {
        return"[object Blob]" === yd.call(a)
    }

    function D(a) {
        return a && x(a.then)
    }

    function E(a) {
        return!(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function F(a, b, c) {
        var d = [];
        return f(a, function (a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d
    }

    function G(a, b) {
        return-1 != H(a, b)
    }

    function H(a, b) {
        if (a.indexOf)return a.indexOf(b);
        for (var c = 0; c < a.length; c++)if (b === a[c])return c;
        return-1
    }

    function I(a, b) {
        var c = H(a, b);
        return c >= 0 && a.splice(c, 1), b
    }

    function J(a, b, c, d) {
        if (z(a) || A(a))throw zd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b)throw zd("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], t(a)) {
                var e = H(c, a);
                if (-1 !== e)return d[e];
                c.push(a), d.push(b)
            }
            var g;
            if (Cd(a)) {
                b.length = 0;
                for (var h = 0; h < a.length; h++)g = J(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
            } else {
                var i = b.$$hashKey;
                Cd(b) ? b.length = 0 : f(b, function (a, c) {
                    delete b[c]
                });
                for (var j in a)g = J(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g;
                k(b, i)
            }
        } else b = a, a && (Cd(a) ? b = J(a, [], c, d) : w(a) ? b = new Date(a.getTime()) : y(a) ? (b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex) : t(a) && (b = J(a, {}, c, d)));
        return b
    }

    function K(a, b) {
        if (Cd(a)) {
            b = b || [];
            for (var c = 0; c < a.length; c++)b[c] = a[c]
        } else if (t(a)) {
            b = b || {};
            for (var d in a)!nd.call(a, d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d])
        }
        return b || a
    }

    function L(a, b) {
        if (a === b)return!0;
        if (null === a || null === b)return!1;
        if (a !== a && b !== b)return!0;
        var d, e, f, g = typeof a, h = typeof b;
        if (g == h && "object" == g) {
            if (!Cd(a)) {
                if (w(a))return w(b) ? isNaN(a.getTime()) && isNaN(b.getTime()) || a.getTime() === b.getTime() : !1;
                if (y(a) && y(b))return a.toString() == b.toString();
                if (A(a) || A(b) || z(a) || z(b) || Cd(b))return!1;
                f = {};
                for (e in a)if ("$" !== e.charAt(0) && !x(a[e])) {
                    if (!L(a[e], b[e]))return!1;
                    f[e] = !0
                }
                for (e in b)if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e]))return!1;
                return!0
            }
            if (!Cd(b))return!1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++)if (!L(a[e], b[e]))return!1;
                return!0
            }
        }
        return!1
    }

    function M(a, b, c) {
        return a.concat(wd.call(b, c))
    }

    function N(a, b) {
        return wd.call(a, b || 0)
    }

    function O(a, b) {
        var c = arguments.length > 2 ? N(arguments, 2) : [];
        return!x(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, c.concat(wd.call(arguments, 0))) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function P(a, d) {
        var e = d;
        return"string" == typeof a && "$" === a.charAt(0) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
    }

    function Q(a, b) {
        return"undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null)
    }

    function R(a) {
        return u(a) ? JSON.parse(a) : a
    }

    function S(a) {
        if ("function" == typeof a)a = !0; else if (a && 0 !== a.length) {
            var b = md("" + a);
            a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
        } else a = !1;
        return a
    }

    function T(a) {
        a = sd(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var c = 3, d = sd("<div>").append(a).html();
        try {
            return a[0].nodeType === c ? md(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return"<" + md(b)
            })
        } catch (b) {
            return md(d)
        }
    }

    function U(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function V(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function (a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                var e = s(b[1]) ? U(b[1]) : !0;
                nd.call(d, c) ? Cd(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }), d
    }

    function W(a) {
        var b = [];
        return f(a, function (a, c) {
            Cd(a) ? f(a, function (a) {
                b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
    }

    function Z(a, c) {
        function d(a) {
            a && h.push(a)
        }

        var e, g, h = [a], i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i, function (c) {
            i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
        }), f(h, function (a) {
            if (!e) {
                var b = " " + a.className + " ", c = j.exec(b);
                c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function (b) {
                    !e && i[b.name] && (e = a, g = b.value)
                })
            }
        }), e && c(e, g ? [g] : [])
    }

    function $(c, d) {
        var e = function () {
            if (c = sd(c), c.injector()) {
                var a = c[0] === b ? "document" : T(c);
                throw zd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            d = d || [], d.unshift(["$provide", function (a) {
                a.value("$rootElement", c)
            }]), d.unshift("ng");
            var e = Hb(d);
            return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d), c(b)(a)
                })
            }]), e
        }, g = /^NG_DEFER_BOOTSTRAP!/;
        return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(Ad.resumeBootstrap = function (a) {
            f(a, function (a) {
                d.push(a)
            }), e()
        }))
    }

    function _(a, b) {
        return b = b || "_", a.replace(Fd, function (a, c) {
            return(c ? b : "") + a.toLowerCase()
        })
    }

    function ab() {
        td = a.jQuery, td && td.fn.on ? (sd = td, l(td.fn, {scope: Td.scope, isolateScope: Td.isolateScope, controller: Td.controller, injector: Td.injector, inheritedData: Td.inheritedData}), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : sd = ob, Ad.element = sd
    }

    function bb(a, b, c) {
        if (!a)throw zd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function cb(a, b, c) {
        return c && Cd(a) && (a = a[a.length - 1]), bb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function db(a, b) {
        if ("hasOwnProperty" === a)throw zd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function eb(a, b, c) {
        if (!b)return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)d = e[h], a && (a = (f = a)[d]);
        return!c && x(a) ? O(f, a) : a
    }

    function fb(a) {
        var b = a[0], c = a[a.length - 1];
        if (b === c)return sd(b);
        var d = b, e = [d];
        do {
            if (d = d.nextSibling, !d)break;
            e.push(d)
        } while (d !== c);
        return sd(e)
    }

    function gb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function () {
            var a = {};
            return function (d, f, g) {
                var h = function (a, b) {
                    if ("hasOwnProperty" === a)throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
                    function a(a, c, d) {
                        return function () {
                            return b[d || "push"]([a, c, arguments]), i
                        }
                    }

                    if (!f)throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [], e = [], h = a("$injector", "invoke"), i = {_invokeQueue: b, _runBlocks: e, requires: f, name: d, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animateProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: h, run: function (a) {
                        return e.push(a), this
                    }};
                    return g && h(g), i
                })
            }
        })
    }

    function hb(b) {
        l(b, {bootstrap: $, copy: J, extend: l, equals: L, element: sd, forEach: f, injector: Hb, noop: o, bind: O, toJson: Q, fromJson: R, identity: p, isUndefined: r, isDefined: s, isString: u, isFunction: x, isObject: t, isNumber: v, isElement: E, isArray: Cd, version: Gd, isDate: w, lowercase: md, uppercase: od, callbacks: {counter: 0}, $$minErr: d, $$csp: Ed}), ud = gb(a);
        try {
            ud("ngLocale")
        } catch (c) {
            ud("ngLocale", []).provider("$locale", cc)
        }
        ud("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Cc}), a.provider("$compile", Ob).directive({a: Ce, input: Ne, textarea: Ne, form: Ge, script: wf, select: zf, style: Bf, option: Af, ngBind: Ze, ngBindHtml: _e, ngBindTemplate: $e, ngClass: af, ngClassEven: cf, ngClassOdd: bf, ngCloak: df, ngController: ef, ngForm: He, ngHide: qf, ngIf: hf, ngInclude: jf, ngInit: lf, ngNonBindable: mf, ngPluralize: nf, ngRepeat: of, ngShow: pf, ngStyle: rf, ngSwitch: sf, ngSwitchWhen: tf, ngSwitchDefault: uf, ngOptions: yf, ngTransclude: vf, ngModel: Te, ngList: We, ngChange: Ue, required: Ve, ngRequired: Ve, ngValue: Ye}).directive({ngInclude: kf}).directive(De).directive(ff), a.provider({$anchorScroll: Ib, $animate: ae, $browser: Lb, $cacheFactory: Mb, $controller: Rb, $document: Sb, $exceptionHandler: Tb, $filter: Nc, $interpolate: ac, $interval: bc, $http: Yb, $httpBackend: $b, $location: pc, $log: qc, $parse: xc, $rootScope: Bc, $q: yc, $sce: Hc, $sceDelegate: Gc, $sniffer: Ic, $templateCache: Nb, $timeout: Jc, $window: Mc, $$rAF: Ac, $$asyncCallback: Jb})
        }])
    }

    function ib() {
        return++Id
    }

    function jb(a) {
        return a.replace(Ld, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Md, "Moz$1")
    }

    function kb(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this], n = b;
            if (!d || null != a)for (; m.length;)for (e = m.shift(), g = 0, h = e.length; h > g; g++)for (i = sd(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++)m.push(td(l[j]));
            return f.apply(this, arguments)
        }

        var f = td.fn[a];
        f = f.$original || f, e.$original = f, td.fn[a] = e
    }

    function lb(a) {
        return!Pd.test(a)
    }

    function mb(a, b) {
        var c, d, e, f, g, h, i = b.createDocumentFragment(), j = [];
        if (lb(a))j.push(b.createTextNode(a)); else {
            for (c = i.appendChild(b.createElement("div")), d = (Qd.exec(a) || ["", ""])[1].toLowerCase(), e = Sd[d] || Sd._default, c.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(Rd, "<$1></$2>") + e[2], c.removeChild(c.firstChild), f = e[0]; f--;)c = c.lastChild;
            for (g = 0, h = c.childNodes.length; h > g; ++g)j.push(c.childNodes[g]);
            c = i.firstChild, c.textContent = ""
        }
        return i.textContent = "", i.innerHTML = "", j
    }

    function nb(a, c) {
        c = c || b;
        var d;
        return(d = Od.exec(a)) ? [c.createElement(d[1])] : mb(a, c)
    }

    function ob(a) {
        if (a instanceof ob)return a;
        if (u(a) && (a = Dd(a)), !(this instanceof ob)) {
            if (u(a) && "<" != a.charAt(0))throw Nd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new ob(a)
        }
        if (u(a)) {
            yb(this, nb(a));
            var c = sd(b.createDocumentFragment());
            c.append(this)
        } else yb(this, a)
    }

    function pb(a) {
        return a.cloneNode(!0)
    }

    function qb(a) {
        sb(a);
        for (var b = 0, c = a.childNodes || []; b < c.length; b++)qb(c[b])
    }

    function rb(a, b, c, d) {
        if (s(d))throw Nd("offargs", "jqLite#off() does not support the `selector` argument");
        var e = tb(a, "events"), g = tb(a, "handle");
        g && (r(b) ? f(e, function (b, c) {
            Kd(a, c, b), delete e[c]
        }) : f(b.split(" "), function (b) {
            r(c) ? (Kd(a, b, e[b]), delete e[b]) : I(e[b] || [], c)
        }))
    }

    function sb(a, b) {
        var d = a.ng339, e = Hd[d];
        if (e) {
            if (b)return void delete Hd[d].data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), rb(a)), delete Hd[d], a.ng339 = c
        }
    }

    function tb(a, b, c) {
        var d = a.ng339, e = Hd[d || -1];
        return s(c) ? (e || (a.ng339 = d = ib(), e = Hd[d] = {}), void(e[b] = c)) : e && e[b]
    }

    function ub(a, b, c) {
        var d = tb(a, "data"), e = s(c), f = !e && s(b), g = f && !t(b);
        if (d || g || tb(a, "data", d = {}), e)d[b] = c; else {
            if (!f)return d;
            if (g)return d && d[b];
            l(d, b)
        }
    }

    function vb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function wb(a, b) {
        b && a.setAttribute && f(b.split(" "), function (b) {
            a.setAttribute("class", Dd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Dd(b) + " ", " ")))
        })
    }

    function xb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function (a) {
                a = Dd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", Dd(c))
        }
    }

    function yb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || z(b) ? [b] : b;
            for (var c = 0; c < b.length; c++)a.push(b[c])
        }
    }

    function zb(a, b) {
        return Ab(a, "$" + (b || "ngController") + "Controller")
    }

    function Ab(a, b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (var e = Cd(b) ? b : [b]; a;) {
            for (var f = 0, g = e.length; g > f; f++)if ((d = sd.data(a, e[f])) !== c)return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function Bb(a) {
        for (var b = 0, c = a.childNodes; b < c.length; b++)qb(c[b]);
        for (; a.firstChild;)a.removeChild(a.firstChild)
    }

    function Cb(a, b) {
        var c = Ud[b.toLowerCase()];
        return c && Vd[a.nodeName] && c
    }

    function Db(a, c) {
        var d = function (d, e) {
            if (d.preventDefault || (d.preventDefault = function () {
                d.returnValue = !1
            }), d.stopPropagation || (d.stopPropagation = function () {
                d.cancelBubble = !0
            }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function () {
                    d.defaultPrevented = !0, g.call(d)
                }, d.defaultPrevented = !1
            }
            d.isDefaultPrevented = function () {
                return d.defaultPrevented || d.returnValue === !1
            };
            var h = K(c[e || d.type] || []);
            f(h, function (b) {
                b.call(a, d)
            }), 8 >= rd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
        };
        return d.elem = a, d
    }

    function Eb(a, b) {
        var d, e = typeof a;
        return"function" == e || "object" == e && null !== a ? "function" == typeof(d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = (b || j)()) : d = a, e + ":" + d
    }

    function Fb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function () {
                return++c
            }
        }
        f(a, this.put, this)
    }

    function Gb(a) {
        var b, c, d, e;
        return"function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Zd, ""), d = c.match(Wd), f(d[1].split(Xd), function (a) {
            a.replace(Yd, function (a, c, d) {
                b.push(d)
            })
        })), a.$inject = b) : Cd(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0), b
    }

    function Hb(a) {
        function b(a) {
            return function (b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c)
            }
        }

        function c(a, b) {
            if (db(a, "service"), (x(b) || Cd(b)) && (b = v.instantiate(b)), !b.$get)throw $d("pget", "Provider '{0}' must define $get factory method.", a);
            return s[a + n] = b
        }

        function d(a, b) {
            return c(a, {$get: b})
        }

        function e(a, b) {
            return d(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }

        function g(a, b) {
            return d(a, q(b))
        }

        function h(a, b) {
            db(a, "constant"), s[a] = b, w[a] = b
        }

        function j(a, b) {
            var c = v.get(a + n), d = c.$get;
            c.$get = function () {
                var a = y.invoke(d, c);
                return y.invoke(b, null, {$delegate: a})
            }
        }

        function k(a) {
            var b, c, d, e, g = [];
            return f(a, function (a) {
                if (!r.get(a)) {
                    r.put(a, !0);
                    try {
                        if (u(a))for (b = ud(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                            var f = c[d], h = v.get(f[0]);
                            h[f[1]].apply(h, f[2])
                        } else x(a) ? g.push(v.invoke(a)) : Cd(a) ? g.push(v.invoke(a)) : cb(a, "module")
                    } catch (i) {
                        throw Cd(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), $d("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
                    }
                }
            }), g
        }

        function l(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === m)throw $d("cdep", "Circular dependency found: {0}", c + " <- " + p.join(" <- "));
                    return a[c]
                }
                try {
                    return p.unshift(c), a[c] = m, a[c] = b(c)
                } catch (d) {
                    throw a[c] === m && delete a[c], d
                } finally {
                    p.shift()
                }
            }

            function d(a, b, d) {
                var e, f, g, h = [], i = Gb(a);
                for (f = 0, e = i.length; e > f; f++) {
                    if (g = i[f], "string" != typeof g)throw $d("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
                    h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
                }
                return Cd(a) && (a = a[e]), a.apply(b, h)
            }

            function e(a, b) {
                var c, e, f = function () {
                };
                return f.prototype = (Cd(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || x(e) ? e : c
            }

            return{invoke: d, instantiate: e, get: c, annotate: Gb, has: function (b) {
                return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
            }}
        }

        var m = {}, n = "Provider", p = [], r = new Fb([], !0), s = {$provide: {provider: b(c), factory: b(d), service: b(e), value: b(g), constant: b(h), decorator: j}}, v = s.$injector = l(s, function () {
            throw $d("unpr", "Unknown provider: {0}", p.join(" <- "))
        }), w = {}, y = w.$injector = l(w, function (a) {
            var b = v.get(a + n);
            return y.invoke(b.$get, b)
        });
        return f(k(a), function (a) {
            y.invoke(a || o)
        }), y
    }

    function Ib() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
            function e(a) {
                var b = null;
                return f(a, function (a) {
                    b || "a" !== md(a.nodeName) || (b = a)
                }), b
            }

            function g() {
                var a, d = c.hash();
                d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
            }

            var h = b.document;
            return a && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(g)
            }), g
        }]
    }

    function Jb() {
        this.$get = ["$$rAF", "$timeout", function (a, b) {
            return a.supported ? function (b) {
                return a(b)
            } : function (a) {
                return b(a, 0, !1)
            }
        }]
    }

    function Kb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, N(arguments, 1))
            } finally {
                if (s--, 0 === s)for (; t.length;)try {
                    t.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function h(a, b) {
            !function c() {
                f(w, function (a) {
                    a()
                }), v = b(c, a)
            }()
        }

        function i() {
            z = null, x != j.url() && (x = j.url(), f(A, function (a) {
                a(j.url())
            }))
        }

        var j = this, k = b[0], l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, q = {};
        j.isMock = !1;
        var s = 0, t = [];
        j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function () {
            s++
        }, j.notifyWhenNoOutstandingRequests = function (a) {
            f(w, function (a) {
                a()
            }), 0 === s ? a() : t.push(a)
        };
        var v, w = [];
        j.addPollFn = function (a) {
            return r(v) && h(100, n), w.push(a), a
        };
        var x = l.href, y = b.find("base"), z = null;
        j.url = function (b, c) {
            if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
                if (x == b)return;
                return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
            }
            return z || l.href.replace(/%27/g, "'")
        };
        var A = [], B = !1;
        j.onUrlChange = function (b) {
            return B || (e.history && sd(a).on("popstate", i), e.hashchange ? sd(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
        }, j.$$checkUrlChange = i, j.baseHref = function () {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var C = {}, D = "", E = j.baseHref();
        j.cookies = function (a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (k.cookie !== D)for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++)g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
                return C
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, j.defer = function (a, b) {
            var c;
            return s++, c = n(function () {
                delete q[c], g(a)
            }, b || 0), q[c] = !0, c
        }, j.defer.cancel = function (a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1
        }
    }

    function Lb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
            return new Kb(a, d, b, c)
        }]
    }

    function Mb() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b)throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = l({}, c, {id: a}), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {put: function (a, b) {
                    if (j < Number.MAX_VALUE) {
                        var c = k[a] || (k[a] = {key: a});
                        e(c)
                    }
                    if (!r(b))return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                }, get: function (a) {
                    if (j < Number.MAX_VALUE) {
                        var b = k[a];
                        if (!b)return;
                        e(b)
                    }
                    return i[a]
                }, remove: function (a) {
                    if (j < Number.MAX_VALUE) {
                        var b = k[a];
                        if (!b)return;
                        b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                    }
                    delete i[a], g--
                }, removeAll: function () {
                    i = {}, g = 0, k = {}, m = n = null
                }, destroy: function () {
                    i = null, h = null, k = null, delete b[a]
                }, info: function () {
                    return l({}, h, {size: g})
                }}
            }

            var b = {};
            return a.info = function () {
                var a = {};
                return f(b, function (b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function (a) {
                return b[a]
            }, a
        }
    }

    function Nb() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Ob(a, d) {
        var e = {}, g = "Directive", h = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, j = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, k = /^(on[a-z]+|formaction)$/;
        this.directive = function m(b, c) {
            return db(b, "directive"), u(b) ? (bb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                return f(e[b], function (e, f) {
                    try {
                        var g = a.invoke(e);
                        x(g) ? g = {compile: q(g)} : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g)
                    } catch (h) {
                        c(h)
                    }
                }), d
            }])), e[b].push(c)) : f(b, i(m)), this
        }, this.aHrefSanitizationWhitelist = function (a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, d, i, m, o, q, r, s, v, w, y, z) {
            function A(a, b, c, d, e) {
                a instanceof sd || (a = sd(a)), f(a, function (b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = sd(b).wrap("<span></span>").parent()[0])
                });
                var g = C(a, b, a, c, d, e);
                return B(a, "ng-scope"), function (b, c, d, e) {
                    bb(b, "scope");
                    var h = c ? Td.clone.call(a) : a;
                    f(d, function (a, b) {
                        h.data("$" + b + "Controller", a)
                    });
                    for (var i = 0, j = h.length; j > i; i++) {
                        var k = h[i], l = k.nodeType;
                        (1 === l || 9 === l) && h.eq(i).data("$scope", b)
                    }
                    return c && c(h, b), g && g(b, h, h, e), h
                }
            }

            function B(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function C(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, p = d.length, q = new Array(p);
                    for (k = 0; p > k; k++)q[k] = d[k];
                    for (k = 0, m = 0, l = o.length; l > k; m++)i = q[m], g = o[k++], h = o[k++], g ? (g.scope ? (j = a.$new(), sd.data(i, "$scope", j)) : j = a, n = g.transcludeOnThisElement ? D(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? D(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                }

                for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++)i = new X, j = E(a[p], [], i, 0 === p ? e : c, f), k = j.length ? H(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && B(i.$$element, "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : C(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), o.push(k, m), n = n || k || m, g = null;
                return n ? h : null
            }

            function D(a, b, c) {
                var d = function (d, e, f) {
                    var g = !1;
                    d || (d = a.$new(), d.$$transcluded = !0, g = !0);
                    var h = b(d, e, f, c);
                    return g && h.on("$destroy", function () {
                        d.$destroy()
                    }), h
                };
                return d
            }

            function E(a, b, c, d, e) {
                var f, g, i = a.nodeType, k = c.$attr;
                switch (i) {
                    case 1:
                        J(b, Pb(vd(a).toLowerCase()), "E", d, e);
                        for (var l, m, n, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                            var v = !1, w = !1;
                            if (l = r[s], !rd || rd >= 8 || l.specified) {
                                m = l.name, p = Dd(l.value), o = Pb(m), (q = ab.test(o)) && (m = _(o.substr(6), "-"));
                                var x = o.replace(/(Start|End)$/, "");
                                o === x + "Start" && (v = m, w = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Pb(m.toLowerCase()), k[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Cb(a, n) && (c[n] = !0)), U(a, b, p, n), J(b, n, "A", d, e, v, w)
                            }
                        }
                        if (g = a.className, u(g) && "" !== g)for (; f = j.exec(g);)n = Pb(f[2]), J(b, n, "C", d, e) && (c[n] = Dd(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case 3:
                        R(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            f = h.exec(a.nodeValue), f && (n = Pb(f[1]), J(b, n, "M", d, e) && (c[n] = Dd(f[2])))
                        } catch (y) {
                        }
                }
                return b.sort(P), b
            }

            function F(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw be("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return sd(d)
            }

            function G(a, b, c) {
                return function (d, e, f, g, h) {
                    return e = F(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function H(a, e, g, h, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = G(a, c, d)), a.require = w.require, a.directiveName = y, (P === w || w.$$isolateScope) && (a = W(a, {isolateScope: !0})), l.push(a)), b && (c && (b = G(b, c, d)), b.require = w.require, b.directiveName = y, (P === w || w.$$isolateScope) && (b = W(b, {isolateScope: !0})), m.push(b))
                }

                function p(a, b, c, d) {
                    var e, g = "data", h = !1;
                    if (u(b)) {
                        for (; "^" == (e = b.charAt(0)) || "?" == e;)b = b.substr(1), "^" == e && (g = "inheritedData"), h = h || "?" == e;
                        if (e = null, d && "data" === g && (e = d[b]), e = e || c[g]("$" + b + "Controller"), !e && !h)throw be("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                        return e
                    }
                    return Cd(b) && (e = [], f(b, function (b) {
                        e.push(p(a, b, c, d))
                    })), e
                }

                function s(a, b, h, j, k) {
                    function n(a, b) {
                        var d;
                        return arguments.length < 2 && (b = a, a = c), Z && (d = z), k(a, b, d)
                    }

                    var o, s, t, u, v, w, x, y, z = {};
                    if (o = e === h ? g : K(g, new X(sd(h), g.$attr)), s = o.$$element, P) {
                        var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        x = b.$new(!0), !R || R !== P && R !== P.$$originalDirective ? s.data("$isolateScopeNoTemplate", x) : s.data("$isolateScope", x), B(s, "ng-isolate-scope"), f(P.scope, function (a, c) {
                            var e, f, g, h, i = a.match(A) || [], j = i[3] || c, k = "?" == i[2], l = i[1];
                            switch (x.$$isolateBindings[c] = l + j, l) {
                                case"@":
                                    o.$observe(j, function (a) {
                                        x[c] = a
                                    }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
                                    break;
                                case"=":
                                    if (k && !o[j])return;
                                    f = q(o[j]), h = f.literal ? L : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    }, g = f.assign || function () {
                                        throw e = x[c] = f(b), be("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], P.name)
                                    }, e = x[c] = f(b), x.$watch(function () {
                                        var a = f(b);
                                        return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a
                                    }, null, f.literal);
                                    break;
                                case"&":
                                    f = q(o[j]), x[c] = function (a) {
                                        return f(b, a)
                                    };
                                    break;
                                default:
                                    throw be("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", P.name, c, a)
                            }
                        })
                    }
                    for (y = k && n, J && f(J, function (a) {
                        var c, d = {$scope: a === P || a.$$isolateScope ? x : b, $element: s, $attrs: o, $transclude: y};
                        w = a.controller, "@" == w && (w = o[a.name]), c = r(w, d), z[a.name] = c, Z || s.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
                    }), t = 0, u = l.length; u > t; t++)try {
                        v = l[t], v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
                    } catch (C) {
                        i(C, T(s))
                    }
                    var D = b;
                    for (P && (P.template || null === P.templateUrl) && (D = x), a && a(D, h.childNodes, c, k), t = m.length - 1; t >= 0; t--)try {
                        v = m[t], v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
                    } catch (C) {
                        i(C, T(s))
                    }
                }

                n = n || {};
                for (var v, w, y, z, C, D, H = -Number.MAX_VALUE, J = n.controllerDirectives, P = n.newIsolateScopeDirective, R = n.templateDirective, S = n.nonTlbTranscludeDirective, U = !1, Y = !1, Z = n.hasElementTranscludeDirective, _ = g.$$element = sd(e), ab = k, bb = h, cb = 0, db = a.length; db > cb; cb++) {
                    w = a[cb];
                    var eb = w.$$start, fb = w.$$end;
                    if (eb && (_ = F(e, eb, fb)), z = c, H > w.priority)break;
                    if ((D = w.scope) && (v = v || w, w.templateUrl || (Q("new/isolated scope", P, w, _), t(D) && (P = w))), y = w.name, !w.templateUrl && w.controller && (D = w.controller, J = J || {}, Q("'" + y + "' controller", J[y], w, _), J[y] = w), (D = w.transclude) && (U = !0, w.$$tlb || (Q("transclusion", S, w, _), S = w), "element" == D ? (Z = !0, H = w.priority, z = _, _ = g.$$element = sd(b.createComment(" " + y + ": " + g[y] + " ")), e = _[0], V(j, N(z), e), bb = A(z, h, H, ab && ab.name, {nonTlbTranscludeDirective: S})) : (z = sd(pb(e)).contents(), _.empty(), bb = A(z, h))), w.template)if (Y = !0, Q("template", R, w, _), R = w, D = x(w.template) ? w.template(_, g) : w.template, D = $(D), w.replace) {
                        if (ab = w, z = lb(D) ? [] : sd(Dd(D)), e = z[0], 1 != z.length || 1 !== e.nodeType)throw be("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
                        V(j, _, e);
                        var gb = {$attr: {}}, hb = E(e, [], gb), ib = a.splice(cb + 1, a.length - (cb + 1));
                        P && I(hb), a = a.concat(hb).concat(ib), M(g, gb), db = a.length
                    } else _.html(D);
                    if (w.templateUrl)Y = !0, Q("template", R, w, _), R = w, w.replace && (ab = w), s = O(a.splice(cb, a.length - cb), _, g, j, U && bb, l, m, {controllerDirectives: J, newIsolateScopeDirective: P, templateDirective: R, nonTlbTranscludeDirective: S}), db = a.length; else if (w.compile)try {
                        C = w.compile(_, g, bb), x(C) ? o(null, C, eb, fb) : C && o(C.pre, C.post, eb, fb)
                    } catch (jb) {
                        i(jb, T(_))
                    }
                    w.terminal && (s.terminal = !0, H = Math.max(H, w.priority))
                }
                return s.scope = v && v.scope === !0, s.transcludeOnThisElement = U, s.templateOnThisElement = Y, s.transclude = bb, n.hasElementTranscludeDirective = Z, s
            }

            function I(a) {
                for (var b = 0, c = a.length; c > b; b++)a[b] = n(a[b], {$$isolateScope: !0})
            }

            function J(b, d, f, h, j, k, l) {
                if (d === j)return null;
                var m = null;
                if (e.hasOwnProperty(d))for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++)try {
                    o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {$$start: k, $$end: l})), b.push(o), m = o)
                } catch (s) {
                    i(s)
                }
                return m
            }

            function M(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function (b, f) {
                    "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function O(a, b, c, d, e, g, h, i) {
                var j, k, n = [], p = b[0], q = a.shift(), r = l({}, q, {templateUrl: null, transclude: null, replace: null, $$originalDirective: q}), s = x(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
                return b.empty(), m.get(w.getTrustedResourceUrl(s), {cache: o}).success(function (l) {
                    var m, o, u, v;
                    if (l = $(l), q.replace) {
                        if (u = lb(l) ? [] : sd(Dd(l)), m = u[0], 1 != u.length || 1 !== m.nodeType)throw be("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
                        o = {$attr: {}}, V(d, b, m);
                        var w = E(m, [], o);
                        t(q.scope) && I(w), a = w.concat(a), M(c, o)
                    } else m = p, b.html(l);
                    for (a.unshift(r), j = H(a, m, c, e, b, q, g, h, i), f(d, function (a, c) {
                        a == m && (d[c] = b[0])
                    }), k = C(b[0].childNodes, e); n.length;) {
                        var x = n.shift(), y = n.shift(), z = n.shift(), A = n.shift(), F = b[0];
                        if (y !== p) {
                            var G = y.className;
                            i.hasElementTranscludeDirective && q.replace || (F = pb(m)), V(z, sd(y), F), B(sd(F), G)
                        }
                        v = j.transcludeOnThisElement ? D(x, j.transclude, A) : A, j(k, x, F, d, v)
                    }
                    n = null
                }).error(function (a, b, c, d) {
                    throw be("tpload", "Failed to load template: {0}", d.url)
                }), function (a, b, c, d, e) {
                    var f = e;
                    n ? (n.push(b), n.push(c), n.push(d), n.push(f)) : (j.transcludeOnThisElement && (f = D(b, j.transclude, e)), j(k, b, c, d, f))
                }
            }

            function P(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Q(a, b, c, d) {
                if (b)throw be("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
            }

            function R(a, b) {
                var c = d(b, !0);
                c && a.push({priority: 0, compile: function (a) {
                    var b = a.parent(), d = b.length;
                    return d && B(a.parent(), "ng-binding"), function (a, b) {
                        var e = b.parent(), f = e.data("$binding") || [];
                        f.push(c), e.data("$binding", f), d || B(e, "ng-binding"), a.$watch(c, function (a) {
                            b[0].nodeValue = a
                        })
                    }
                }})
            }

            function S(a, b) {
                if ("srcdoc" == b)return w.HTML;
                var c = vd(a);
                return"xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? w.RESOURCE_URL : void 0
            }

            function U(a, b, c, e) {
                var f = d(c, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === vd(a))throw be("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                    b.push({priority: 100, compile: function () {
                        return{pre: function (b, c, g) {
                            var h = g.$$observers || (g.$$observers = {});
                            if (k.test(e))throw be("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                            f = d(g[e], !0, S(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function (a, b) {
                                "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                            }))
                        }}
                    }})
                }
            }

            function V(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a)for (e = 0, f = a.length; f > e; e++)if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1;
                    break
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), d[sd.expando] = g[sd.expando];
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    sd(p).remove(), m.appendChild(p), delete c[n]
                }
                c[0] = d, c.length = 1
            }

            function W(a, b) {
                return l(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            var X = function (a, b) {
                this.$$element = a, this.$attr = b || {}
            };
            X.prototype = {$normalize: Pb, $addClass: function (a) {
                a && a.length > 0 && y.addClass(this.$$element, a)
            }, $removeClass: function (a) {
                a && a.length > 0 && y.removeClass(this.$$element, a)
            }, $updateClass: function (a, b) {
                var c = Qb(a, b), d = Qb(b, a);
                0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d)
            }, $set: function (a, b, d, e) {
                var g, h = Cb(this.$$element[0], a);
                h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))), g = vd(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = z(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                var j = this.$$observers;
                j && f(j[a], function (a) {
                    try {
                        a(b)
                    } catch (c) {
                        i(c)
                    }
                })
            }, $observe: function (a, b) {
                var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                return e.push(b), s.$evalAsync(function () {
                    e.$$inter || b(c[a])
                }), b
            }};
            var Y = d.startSymbol(), Z = d.endSymbol(), $ = "{{" == Y || "}}" == Z ? p : function (a) {
                return a.replace(/\{\{/g, Y).replace(/}}/g, Z)
            }, ab = /^ngAttr[A-Z]/;
            return A
        }]
    }

    function Pb(a) {
        return jb(a.replace(ce, ""))
    }

    function Qb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a:for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function Rb() {
        var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (b, c) {
            db(b, "controller"), t(b) ? l(a, b) : a[b] = c
        }, this.$get = ["$injector", "$window", function (c, e) {
            return function (f, g) {
                var h, i, j, k;
                if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
                    if (!g || "object" != typeof g.$scope)throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                    g.$scope[k] = h
                }
                return h
            }
        }]
    }

    function Sb() {
        this.$get = ["$window", function (a) {
            return sd(a.document)
        }]
    }

    function Tb() {
        this.$get = ["$log", function (a) {
            return function () {
                a.error.apply(a, arguments)
            }
        }]
    }

    function Ub(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"), function (a) {
            d = a.indexOf(":"), b = md(Dd(a.substr(0, d))), c = Dd(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
        }), e) : e
    }

    function Vb(a) {
        var b = t(a) ? a : c;
        return function (c) {
            return b || (b = Ub(a)), c ? b[md(c)] || null : b
        }
    }

    function Wb(a, b, c) {
        return x(c) ? c(a, b) : (f(c, function (c) {
            a = c(a, b)
        }), a)
    }

    function Xb(a) {
        return a >= 200 && 300 > a
    }

    function Yb() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = {"Content-Type": "application/json;charset=utf-8"}, g = this.defaults = {transformResponse: [function (c) {
            return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))), c
        }], transformRequest: [function (a) {
            return!t(a) || B(a) || C(a) ? a : Q(a)
        }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: K(e), put: K(e), patch: K(e)}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, i = this.interceptors = [], j = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, d, e, k, m) {
            function n(a) {
                function b(a) {
                    var b = l({}, a, {data: Wb(a.data, a.headers, e.transformResponse)});
                    return Xb(a.status) ? b : k.reject(b)
                }

                function d(a) {
                    function b(a) {
                        var b;
                        f(a, function (c, d) {
                            x(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                        })
                    }

                    var c, d, e, h = g.headers, i = l({}, a.headers);
                    h = l({}, h.common, h[md(a.method)]);
                    a:for (c in h) {
                        d = md(c);
                        for (e in i)if (md(e) === d)continue a;
                        i[c] = h[c]
                    }
                    return b(i), i
                }

                var e = {method: "get", transformRequest: g.transformRequest, transformResponse: g.transformResponse}, h = d(a);
                l(e, a), e.headers = h, e.method = od(e.method);
                var i = function (a) {
                    h = a.headers;
                    var c = Wb(a.data, Vb(h), a.transformRequest);
                    return r(c) && f(h, function (a, b) {
                        "content-type" === md(b) && delete h[b]
                    }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, c, h).then(b, b)
                }, j = [i, c], m = k.when(e);
                for (f(z, function (a) {
                    (a.request || a.requestError) && j.unshift(a.request, a.requestError), (a.response || a.responseError) && j.push(a.response, a.responseError)
                }); j.length;) {
                    var n = j.shift(), o = j.shift();
                    m = m.then(n, o)
                }
                return m.success = function (a) {
                    return m.then(function (b) {
                        a(b.data, b.status, b.headers, e)
                    }), m
                }, m.error = function (a) {
                    return m.then(null, function (b) {
                        a(b.data, b.status, b.headers, e)
                    }), m
                }, m
            }

            function o() {
                f(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(l(c || {}, {method: a, url: b}))
                    }
                })
            }

            function p() {
                f(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(l(d || {}, {method: a, url: b, data: c}))
                    }
                })
            }

            function q(d, f, h) {
                function i(a, b, c, d) {
                    m && (Xb(a) ? m.put(u, [a, b, Ub(c), d]) : m.remove(u)), j(b, a, c, d), e.$$phase || e.$apply()
                }

                function j(a, b, c, e) {
                    b = Math.max(b, 0), (Xb(b) ? p.resolve : p.reject)({data: a, status: b, headers: Vb(c), config: d, statusText: e})
                }

                function l() {
                    var a = H(n.pendingRequests, d);
                    -1 !== a && n.pendingRequests.splice(a, 1)
                }

                var m, o, p = k.defer(), q = p.promise, u = v(d.url, d.params);
                if (n.pendingRequests.push(d), q.then(l, l), !d.cache && !g.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (m = t(d.cache) ? d.cache : t(g.cache) ? g.cache : y), m)if (o = m.get(u), s(o)) {
                    if (D(o))return o.then(l, l), o;
                    Cd(o) ? j(o[1], o[0], K(o[2]), o[3]) : j(o, 200, {}, "OK")
                } else m.put(u, q);
                if (r(o)) {
                    var w = Lc(d.url) ? b.cookies()[d.xsrfCookieName || g.xsrfCookieName] : c;
                    w && (h[d.xsrfHeaderName || g.xsrfHeaderName] = w), a(d.method, u, f, i, h, d.timeout, d.withCredentials, d.responseType)
                }
                return q
            }

            function v(a, b) {
                if (!b)return a;
                var c = [];
                return h(b, function (a, b) {
                    null === a || r(a) || (Cd(a) || (a = [a]), f(a, function (a) {
                        t(a) && (a = w(a) ? a.toISOString() : Q(a)), c.push(Y(b) + "=" + Y(a))
                    }))
                }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
            }

            var y = d("$http"), z = [];
            return f(i, function (a) {
                z.unshift(u(a) ? m.get(a) : m.invoke(a))
            }), f(j, function (a, b) {
                var c = u(a) ? m.get(a) : m.invoke(a);
                z.splice(b, 0, {response: function (a) {
                    return c(k.when(a))
                }, responseError: function (a) {
                    return c(k.reject(a))
                }})
            }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
        }]
    }

    function Zb(b) {
        if (8 >= rd && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest))return new a.ActiveXObject("Microsoft.XMLHTTP");
        if (a.XMLHttpRequest)return new a.XMLHttpRequest;
        throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
    }

    function $b() {
        this.$get = ["$browser", "$window", "$document", function (a, b, c) {
            return _b(a, Zb, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function _b(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"), g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function (a) {
                Kd(f, "load", g), Kd(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {type: "error"}), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, Jd(f, "load", g), Jd(f, "error", g), 8 >= rd && (f.onreadystatechange = function () {
                u(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({type: "load"}))
            }), e.body.appendChild(f), g
        }

        var h = -1;
        return function (e, i, j, k, l, m, n, p) {
            function q() {
                t = h, v && v(), w && w.abort()
            }

            function r(b, d, e, f, g) {
                y && c.cancel(y), v = w = null, 0 === d && (d = e ? 200 : "file" == Kc(i).protocol ? 404 : 0), d = 1223 === d ? 204 : d, g = g || "", b(d, e, f, g), a.$$completeOutstandingRequest(o)
            }

            var t;
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == md(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function (a) {
                    d[u].data = a, d[u].called = !0
                };
                var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function (a, b) {
                    r(k, a, d[u].data, "", b), d[u] = o
                })
            } else {
                var w = b(e);
                if (w.open(e, i, !0), f(l, function (a, b) {
                    s(a) && w.setRequestHeader(b, a)
                }), w.onreadystatechange = function () {
                    if (w && 4 == w.readyState) {
                        var a = null, b = null, c = "";
                        t !== h && (a = w.getAllResponseHeaders(), b = "response"in w ? w.response : w.responseText), t === h && 10 > rd || (c = w.statusText), r(k, t || w.status, b, a, c)
                    }
                }, n && (w.withCredentials = !0), p)try {
                    w.responseType = p
                } catch (x) {
                    if ("json" !== p)throw x
                }
                w.send(j || null)
            }
            if (m > 0)var y = c(q, m); else D(m) && m.then(q)
        }
    }

    function ac() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(f, i, j) {
                for (var k, l, m, n, o = 0, p = [], q = f.length, r = !1, s = []; q > o;)-1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, r = !0) : (o != q && p.push(f.substring(o)), o = q);
                if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1)throw de("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                return!i || r ? (s.length = q, m = function (a) {
                    try {
                        for (var b, c = 0, g = q; g > c; c++) {
                            if ("function" == typeof(b = p[c]))if (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null == b)b = ""; else switch (typeof b) {
                                case"string":
                                    break;
                                case"number":
                                    b = "" + b;
                                    break;
                                default:
                                    b = Q(b)
                            }
                            s[c] = b
                        }
                        return s.join("")
                    } catch (h) {
                        var i = de("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
                        d(i)
                    }
                }, m.exp = f, m.parts = p, m) : void 0
            }

            var g = a.length, h = b.length;
            return f.startSymbol = function () {
                return a
            }, f.endSymbol = function () {
                return b
            }, f
        }]
    }

    function bc() {
        this.$get = ["$rootScope", "$window", "$q", function (a, b, c) {
            function d(d, f, g, h) {
                var i = b.setInterval, j = b.clearInterval, k = c.defer(), l = k.promise, m = 0, n = s(h) && !h;
                return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function () {
                    k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
                }, f), e[l.$$intervalId] = k, l
            }

            var e = {};
            return d.cancel = function (a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
            }, d
        }]
    }

    function cc() {
        this.$get = function () {
            return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
                {minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
                {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3}
            ], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (a) {
                return 1 === a ? "one" : "other"
            }}
        }
    }

    function dc(a) {
        for (var b = a.split("/"), c = b.length; c--;)b[c] = X(b[c]);
        return b.join("/")
    }

    function ec(a, b, c) {
        var d = Kc(a, c);
        b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || fe[d.protocol] || null
    }

    function fc(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var e = Kc(a, c);
        b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function gc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function hc(a) {
        var b = a.indexOf("#");
        return-1 == b ? a : a.substr(0, b)
    }

    function ic(a) {
        return a.substr(0, hc(a).lastIndexOf("/") + 1)
    }

    function jc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function kc(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = ic(a);
        ec(a, this, a), this.$$parse = function (b) {
            var c = gc(d, b);
            if (!u(c))throw ge("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
            fc(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var a = W(this.$$search), b = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$rewrite = function (e) {
            var f, g;
            return(f = gc(a, e)) !== c ? (g = f, (f = gc(b, f)) !== c ? d + (gc("/", f) || f) : a + g) : (f = gc(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
        }
    }

    function lc(a, b) {
        var c = ic(a);
        ec(a, this, a), this.$$parse = function (d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }

            var f = gc(a, d) || gc(c, d), g = "#" == f.charAt(0) ? gc(b, f) : this.$$html5 ? f : "";
            if (!u(g))throw ge("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
            fc(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose()
        }, this.$$compose = function () {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$rewrite = function (b) {
            return hc(a) == hc(b) ? b : void 0
        }
    }

    function mc(a, b) {
        this.$$html5 = !0, lc.apply(this, arguments);
        var c = ic(a);
        this.$$rewrite = function (d) {
            var e;
            return a == hc(d) ? d : (e = gc(c, d)) ? a + b + e : c === d + "/" ? c : void 0
        }, this.$$compose = function () {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
        }
    }

    function nc(a) {
        return function () {
            return this[a]
        }
    }

    function oc(a, b) {
        return function (c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function pc() {
        var b = "", c = !1;
        this.hashPrefix = function (a) {
            return s(a) ? (b = a, this) : b
        }, this.html5Mode = function (a) {
            return s(a) ? (c = a, this) : c
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (d, e, f, g) {
            function h(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
            }

            var i, j, k, l = e.baseHref(), m = e.url();
            c ? (k = jc(m) + (l || "/"), j = f.history ? kc : mc) : (k = hc(m), j = lc), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m));
            var n = /^\s*(javascript|mailto):/i;
            g.on("click", function (c) {
                if (!c.ctrlKey && !c.metaKey && 2 != c.which) {
                    for (var f = sd(c.target); "a" !== md(f[0].nodeName);)if (f[0] === g[0] || !(f = f.parent())[0])return;
                    var h = f.prop("href");
                    if (t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Kc(h.animVal).href), !n.test(h)) {
                        if (j === mc) {
                            var l = f.attr("href") || f.attr("xlink:href");
                            if (l && l.indexOf("://") < 0) {
                                var m = "#" + b;
                                if ("/" == l[0])h = k + m + l; else if ("#" == l[0])h = k + m + (i.path() || "/") + l; else {
                                    var o = i.path().split("/"), p = l.split("/");
                                    2 !== o.length || o[1] || (o.length = 1);
                                    for (var q = 0; q < p.length; q++)"." != p[q] && (".." == p[q] ? o.pop() : p[q].length && o.push(p[q]));
                                    h = k + m + o.join("/")
                                }
                            }
                        }
                        var r = i.$$rewrite(h);
                        h && !f.attr("target") && r && !c.isDefaultPrevented() && (c.preventDefault(), r != e.url() && (i.$$parse(r), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function (a) {
                i.absUrl() != a && (d.$evalAsync(function () {
                    var b = i.absUrl();
                    i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b)
                }), d.$$phase || d.$digest())
            });
            var o = 0;
            return d.$watch(function () {
                var a = e.url(), b = i.$$replace;
                return o && a == i.absUrl() || (o++, d.$evalAsync(function () {
                    d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                })), i.$$replace = !1, o
            }), i
        }]
    }

    function qc() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.$get = ["$window", function (c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o, g = !1;
                try {
                    g = !!e.apply
                } catch (h) {
                }
                return g ? function () {
                    var a = [];
                    return f(arguments, function (b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return{log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                var c = e("debug");
                return function () {
                    a && c.apply(b, arguments)
                }
            }()}
        }]
    }

    function rc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw ie("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }

    function sc(a, b) {
        if (a) {
            if (a.constructor === a)throw ie("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.document && a.location && a.alert && a.setInterval)throw ie("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw ie("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object)throw ie("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function tc(a, b) {
        if (a) {
            if (a.constructor === a)throw ie("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === ke || a === le || me && a === me)throw ie("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }

    function uc(a, b, d, e, f) {
        sc(a, e), f = f || {};
        for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
            g = rc(h.shift(), e);
            var j = sc(a[g], e);
            j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (he(e), "$$v"in a || !function (a) {
                a.then(function (b) {
                    a.$$v = b
                })
            }(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
        }
        return g = rc(h.shift(), e), sc(a[g], e), a[g] = d, d
    }

    function vc(a, b, d, e, f, g, h) {
        return rc(a, g), rc(b, g), rc(d, g), rc(e, g), rc(f, g), h.unwrapPromises ? function (h, i) {
            var j, k = i && i.hasOwnProperty(a) ? i : h;
            return null == k ? k : (k = k[a], k && k.then && (he(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), b ? null == k ? c : (k = k[b], k && k.then && (he(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), d ? null == k ? c : (k = k[d], k && k.then && (he(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), e ? null == k ? c : (k = k[e], k && k.then && (he(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), f ? null == k ? c : (k = k[f], k && k.then && (he(g), "$$v"in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), k) : k) : k) : k) : k)
        } : function (g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i)
        }
    }

    function wc(a, b, d) {
        if (re.hasOwnProperty(a))return re[a];
        var e, g = a.split("."), h = g.length;
        if (b.csp)e = 6 > h ? vc(g[0], g[1], g[2], g[3], g[4], d, b) : function (a, e) {
            var f, i = 0;
            do f = vc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
            return f
        }; else {
            var i = "var p;\n";
            f(g, function (a, c) {
                rc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
            }), i += "return s;";
            var j = new Function("s", "k", "pw", i);
            j.toString = q(i), e = b.unwrapPromises ? function (a, b) {
                return j(a, b, he)
            } : j
        }
        return"hasOwnProperty" !== a && (re[a] = e), e
    }

    function xc() {
        var a = {}, b = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
        this.unwrapPromises = function (a) {
            return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
        }, this.logPromiseWarnings = function (a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
            return b.csp = d.csp, he = function (a) {
                b.logPromiseWarnings && !je.hasOwnProperty(a) && (je[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            }, function (d) {
                var e;
                switch (typeof d) {
                    case"string":
                        if (a.hasOwnProperty(d))return a[d];
                        var f = new pe(b), g = new qe(f, c, b);
                        return e = g.parse(d), "hasOwnProperty" !== d && (a[d] = e), e;
                    case"function":
                        return d;
                    default:
                        return o
                }
            }
        }]
    }

    function yc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return zc(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function zc(a, b) {
        function d(a) {
            return a
        }

        function e(a) {
            return j(a)
        }

        function g(a) {
            var b = h(), c = 0, d = Cd(a) ? [] : {};
            return f(a, function (a, e) {
                c++, i(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }

        var h = function () {
            var f, g, j = [];
            return g = {resolve: function (b) {
                if (j) {
                    var d = j;
                    j = c, f = i(b), d.length && a(function () {
                        for (var a, b = 0, c = d.length; c > b; b++)a = d[b], f.then(a[0], a[1], a[2])
                    })
                }
            }, reject: function (a) {
                g.resolve(k(a))
            }, notify: function (b) {
                if (j) {
                    var c = j;
                    j.length && a(function () {
                        for (var a, d = 0, e = c.length; e > d; d++)a = c[d], a[2](b)
                    })
                }
            }, promise: {then: function (a, c, g) {
                var i = h(), k = function (c) {
                    try {
                        i.resolve((x(a) ? a : d)(c))
                    } catch (e) {
                        i.reject(e), b(e)
                    }
                }, l = function (a) {
                    try {
                        i.resolve((x(c) ? c : e)(a))
                    } catch (d) {
                        i.reject(d), b(d)
                    }
                }, m = function (a) {
                    try {
                        i.notify((x(g) ? g : d)(a))
                    } catch (c) {
                        b(c)
                    }
                };
                return j ? j.push([k, l, m]) : f.then(k, l, m), i.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a) {
                function b(a, b) {
                    var c = h();
                    return b ? c.resolve(a) : c.reject(a), c.promise
                }

                function c(c, e) {
                    var f = null;
                    try {
                        f = (a || d)()
                    } catch (g) {
                        return b(g, !1)
                    }
                    return D(f) ? f.then(function () {
                        return b(c, e)
                    }, function (a) {
                        return b(a, !1)
                    }) : b(c, e)
                }

                return this.then(function (a) {
                    return c(a, !0)
                }, function (a) {
                    return c(a, !1)
                })
            }}}
        }, i = function (b) {
            return D(b) ? b : {then: function (c) {
                var d = h();
                return a(function () {
                    d.resolve(c(b))
                }), d.promise
            }}
        }, j = function (a) {
            var b = h();
            return b.reject(a), b.promise
        }, k = function (c) {
            return{then: function (d, f) {
                var g = h();
                return a(function () {
                    try {
                        g.resolve((x(f) ? f : e)(c))
                    } catch (a) {
                        g.reject(a), b(a)
                    }
                }), g.promise
            }}
        }, l = function (c, f, g, k) {
            var l, m = h(), n = function (a) {
                try {
                    return(x(f) ? f : d)(a)
                } catch (c) {
                    return b(c), j(c)
                }
            }, o = function (a) {
                try {
                    return(x(g) ? g : e)(a)
                } catch (c) {
                    return b(c), j(c)
                }
            }, p = function (a) {
                try {
                    return(x(k) ? k : d)(a)
                } catch (c) {
                    b(c)
                }
            };
            return a(function () {
                i(c).then(function (a) {
                    l || (l = !0, m.resolve(i(a).then(n, o, p)))
                }, function (a) {
                    l || (l = !0, m.resolve(o(a)))
                }, function (a) {
                    l || m.notify(p(a))
                })
            }), m.promise
        };
        return{defer: h, reject: j, when: l, all: g}
    }

    function Ac() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                var b = c(a);
                return function () {
                    d(b)
                }
            } : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c)
                }
            };
            return f.supported = e, f
        }]
    }

    function Bc() {
        var a = 10, b = d("$rootScope"), c = null;
        this.digestTtl = function (b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, g, h, i) {
            function k() {
                this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }

            function l(a) {
                if (r.$$phase)throw b("inprog", "{0} already in progress", r.$$phase);
                r.$$phase = a
            }

            function m() {
                r.$$phase = null
            }

            function n(a, b) {
                var c = h(a);
                return cb(c, b), c
            }

            function p(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function q() {
            }

            k.prototype = {constructor: k, $new: function (a) {
                var b;
                return a ? (b = new k, b.$root = this.$root, b.$$asyncQueue = this.$$asyncQueue, b.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$childScopeClass = null
                }, this.$$childScopeClass.prototype = this), b = new this.$$childScopeClass), b["this"] = b, b.$parent = this, b.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = b, this.$$childTail = b) : this.$$childHead = this.$$childTail = b, b
            }, $watch: function (a, b, d) {
                var e = this, f = n(a, "watch"), g = e.$$watchers, h = {fn: b, last: q, get: f, exp: a, eq: !!d};
                if (c = null, !x(b)) {
                    var i = n(b || o, "listener");
                    h.fn = function (a, b, c) {
                        i(c)
                    }
                }
                if ("string" == typeof a && f.constant) {
                    var j = h.fn;
                    h.fn = function (a, b, c) {
                        j.call(this, a, b, c), I(g, h)
                    }
                }
                return g || (g = e.$$watchers = []), g.unshift(h), function () {
                    I(g, h), c = null
                }
            }, $watchCollection: function (a, b) {
                function c() {
                    f = m(j);
                    var a, b, c;
                    if (t(f))if (e(f)) {
                        g !== n && (g = n, q = g.length = 0, l++), a = f.length, q !== a && (l++, g.length = q = a);
                        for (var d = 0; a > d; d++)c = g[d] !== g[d] && f[d] !== f[d], c || g[d] === f[d] || (l++, g[d] = f[d])
                    } else {
                        g !== o && (g = o = {}, q = 0, l++), a = 0;
                        for (b in f)f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? (c = g[b] !== g[b] && f[b] !== f[b], c || g[b] === f[b] || (l++, g[b] = f[b])) : (q++, g[b] = f[b], l++));
                        if (q > a) {
                            l++;
                            for (b in g)g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b])
                        }
                    } else g !== f && (g = f, l++);
                    return l
                }

                function d() {
                    if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k)if (t(f))if (e(f)) {
                        i = new Array(f.length);
                        for (var a = 0; a < f.length; a++)i[a] = f[a]
                    } else {
                        i = {};
                        for (var c in f)nd.call(f, c) && (i[c] = f[c])
                    } else i = f
                }

                var f, g, i, j = this, k = b.length > 1, l = 0, m = h(a), n = [], o = {}, p = !0, q = 0;
                return this.$watch(c, d)
            }, $digest: function () {
                var d, e, f, h, j, k, n, o, p, r, s, t = this.$$asyncQueue, u = this.$$postDigestQueue, v = a, w = this, y = [];
                l("$digest"), i.$$checkUrlChange(), c = null;
                do {
                    for (k = !1, o = w; t.length;) {
                        try {
                            s = t.shift(), s.scope.$eval(s.expression)
                        } catch (z) {
                            m(), g(z)
                        }
                        c = null
                    }
                    a:do {
                        if (h = o.$$watchers)for (j = h.length; j--;)try {
                            if (d = h[j])if ((e = d.get(o)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                if (d === c) {
                                    k = !1;
                                    break a
                                }
                            } else k = !0, c = d, d.last = d.eq ? J(e, null) : e, d.fn(e, f === q ? e : f, o), 5 > v && (p = 4 - v, y[p] || (y[p] = []), r = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, r += "; newVal: " + Q(e) + "; oldVal: " + Q(f), y[p].push(r))
                        } catch (z) {
                            m(), g(z)
                        }
                        if (!(n = o.$$childHead || o !== w && o.$$nextSibling))for (; o !== w && !(n = o.$$nextSibling);)o = o.$parent
                    } while (o = n);
                    if ((k || t.length) && !v--)throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(y))
                } while (k || t.length);
                for (m(); u.length;)try {
                    u.shift()()
                } catch (z) {
                    g(z)
                }
            }, $destroy: function () {
                if (!this.$$destroyed) {
                    var a = this.$parent;
                    this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r && (f(this.$$listenerCount, O(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function () {
                        return o
                    })
                }
            }, $eval: function (a, b) {
                return h(a)(this, b)
            }, $evalAsync: function (a) {
                r.$$phase || r.$$asyncQueue.length || i.defer(function () {
                    r.$$asyncQueue.length && r.$digest()
                }), this.$$asyncQueue.push({scope: this, expression: a})
            }, $$postDigest: function (a) {
                this.$$postDigestQueue.push(a)
            }, $apply: function (a) {
                try {
                    return l("$apply"), this.$eval(a)
                } catch (b) {
                    g(b)
                } finally {
                    m();
                    try {
                        r.$digest()
                    } catch (b) {
                        throw g(b), b
                    }
                }
            }, $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []), c.push(b);
                var d = this;
                do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                var e = this;
                return function () {
                    c[H(c, b)] = null, p(e, 1, a)
                }
            }, $emit: function (a) {
                var b, c, d, e = [], f = this, h = !1, i = {name: a, targetScope: f, stopPropagation: function () {
                    h = !0
                }, preventDefault: function () {
                    i.defaultPrevented = !0
                }, defaultPrevented: !1}, j = M([i], arguments, 1);
                do {
                    for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)if (b[c])try {
                        b[c].apply(null, j)
                    } catch (k) {
                        g(k)
                    } else b.splice(c, 1), c--, d--;
                    if (h)return i;
                    f = f.$parent
                } while (f);
                return i
            }, $broadcast: function (a) {
                for (var b, c, d, e = this, f = e, h = e, i = {name: a, targetScope: e, preventDefault: function () {
                    i.defaultPrevented = !0
                }, defaultPrevented: !1}, j = M([i], arguments, 1); f = h;) {
                    for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)if (b[c])try {
                        b[c].apply(null, j)
                    } catch (k) {
                        g(k)
                    } else b.splice(c, 1), c--, d--;
                    if (!(h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling))for (; f !== e && !(h = f.$$nextSibling);)f = f.$parent
                }
                return i
            }};
            var r = new k;
            return r
        }]
    }

    function Cc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (b = a, this) : b
        }, this.$get = function () {
            return function (c, d) {
                var e, f = d ? b : a;
                return rd && !(rd >= 8) || (e = Kc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
            }
        }
    }

    function Dc(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }

    function Ec(a) {
        if ("self" === a)return a;
        if (u(a)) {
            if (a.indexOf("***") > -1)throw se("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Dc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (y(a))return new RegExp("^" + a.source + "$");
        throw se("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Fc(a) {
        var b = [];
        return s(a) && f(a, function (a) {
            b.push(Ec(a))
        }), b
    }

    function Gc() {
        this.SCE_CONTEXTS = te;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            return arguments.length && (a = Fc(b)), a
        }, this.resourceUrlBlacklist = function (a) {
            return arguments.length && (b = Fc(a)), b
        }, this.$get = ["$injector", function (d) {
            function e(a, b) {
                return"self" === a ? Lc(b) : !!a.exec(b.href)
            }

            function f(c) {
                var d, f, g = Kc(c.toString()), h = !1;
                for (d = 0, f = a.length; f > d; d++)if (e(a[d], g)) {
                    h = !0;
                    break
                }
                if (h)for (d = 0, f = b.length; f > d; d++)if (e(b[d], g)) {
                    h = !1;
                    break
                }
                return h
            }

            function g(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d)throw se("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || b === c || "" === b)return b;
                if ("string" != typeof b)throw se("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new d(b)
            }

            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue() : a
            }

            function j(a, b) {
                if (null === b || b === c || "" === b)return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d)return b.$$unwrapTrustedValue();
                if (a === te.RESOURCE_URL) {
                    if (f(b))return b;
                    throw se("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === te.HTML)return k(b);
                throw se("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var k = function () {
                throw se("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            d.has("$sanitize") && (k = d.get("$sanitize"));
            var l = g(), m = {};
            return m[te.HTML] = g(l), m[te.CSS] = g(l), m[te.URL] = g(l), m[te.JS] = g(l), m[te.RESOURCE_URL] = g(m[te.URL]), {trustAs: h, getTrusted: j, valueOf: i}
        }]
    }

    function Hc() {
        var a = !0;
        this.enabled = function (b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (b, c, d) {
            if (a && c.msie && c.msieDocumentMode < 8)throw se("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var e = K(te);
            e.isEnabled = function () {
                return a
            }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function (a, b) {
                return b
            }, e.valueOf = p), e.parseAs = function (a, c) {
                var d = b(c);
                return d.literal && d.constant ? d : function (b, c) {
                    return e.getTrusted(a, d(b, c))
                }
            };
            var g = e.parseAs, h = e.getTrusted, i = e.trustAs;
            return f(te, function (a, b) {
                var c = md(b);
                e[jb("parse_as_" + c)] = function (b) {
                    return g(a, b)
                }, e[jb("get_trusted_" + c)] = function (b) {
                    return h(a, b)
                }, e[jb("trust_as_" + c)] = function (b) {
                    return i(a, b)
                }
            }), e
        }]
    }

    function Ic() {
        this.$get = ["$window", "$document", function (a, b) {
            var c, d, e = {}, f = m((/android (\d+)/.exec(md((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = h.documentMode, j = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = h.body && h.body.style, l = !1, n = !1;
            if (k) {
                for (var o in k)if (d = j.exec(o)) {
                    c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break
                }
                c || (c = "WebkitOpacity"in k && "webkit"), l = !!("transition"in k || c + "Transition"in k), n = !!("animation"in k || c + "Animation"in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
            }
            return{history: !(!a.history || !a.history.pushState || 4 > f || g), hashchange: "onhashchange"in a && (!i || i > 7), hasEvent: function (a) {
                if ("input" == a && 9 == rd)return!1;
                if (r(e[a])) {
                    var b = h.createElement("div");
                    e[a] = "on" + a in b
                }
                return e[a]
            }, csp: Ed(), vendorPrefix: c, transitions: l, animations: n, android: f, msie: rd, msieDocumentMode: i}
        }]
    }

    function Jc() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (a, b, c, d) {
            function e(e, g, h) {
                var i, j = c.defer(), k = j.promise, l = s(h) && !h;
                return i = b.defer(function () {
                    try {
                        j.resolve(e())
                    } catch (b) {
                        j.reject(b), d(b)
                    } finally {
                        delete f[k.$$timeoutId]
                    }
                    l || a.$apply()
                }, g), k.$$timeoutId = i, f[i] = j, k
            }

            var f = {};
            return e.cancel = function (a) {
                return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, e
        }]
    }

    function Kc(a) {
        var b = a;
        return rd && (ue.setAttribute("href", b), b = ue.href), ue.setAttribute("href", b), {href: ue.href, protocol: ue.protocol ? ue.protocol.replace(/:$/, "") : "", host: ue.host, search: ue.search ? ue.search.replace(/^\?/, "") : "", hash: ue.hash ? ue.hash.replace(/^#/, "") : "", hostname: ue.hostname, port: ue.port, pathname: "/" === ue.pathname.charAt(0) ? ue.pathname : "/" + ue.pathname}
    }

    function Lc(a) {
        var b = u(a) ? Kc(a) : a;
        return b.protocol === ve.protocol && b.host === ve.host
    }

    function Mc() {
        this.$get = q(a)
    }

    function Nc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function (a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }

        var c = "Filter";
        this.register = b, this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }], b("currency", Pc), b("date", Xc), b("filter", Oc), b("json", Yc), b("limitTo", Zc), b("lowercase", Ae), b("number", Qc), b("orderBy", $c), b("uppercase", Be)
    }

    function Oc() {
        return function (a, b, c) {
            if (!Cd(a))return a;
            var d = typeof c, e = [];
            e.check = function (a) {
                for (var b = 0; b < e.length; b++)if (!e[b](a))return!1;
                return!0
            }, "function" !== d && (c = "boolean" === d && c ? function (a, b) {
                return Ad.equals(a, b)
            } : function (a, b) {
                if (a && b && "object" == typeof a && "object" == typeof b) {
                    for (var d in a)if ("$" !== d.charAt(0) && nd.call(a, d) && c(a[d], b[d]))return!0;
                    return!1
                }
                return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
            });
            var f = function (a, b) {
                if ("string" == typeof b && "!" === b.charAt(0))return!f(a, b.substr(1));
                switch (typeof a) {
                    case"boolean":
                    case"number":
                    case"string":
                        return c(a, b);
                    case"object":
                        switch (typeof b) {
                            case"object":
                                return c(a, b);
                            default:
                                for (var d in a)if ("$" !== d.charAt(0) && f(a[d], b))return!0
                        }
                        return!1;
                    case"array":
                        for (var e = 0; e < a.length; e++)if (f(a[e], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof b) {
                case"boolean":
                case"number":
                case"string":
                    b = {$: b};
                case"object":
                    for (var g in b)!function (a) {
                        "undefined" != typeof b[a] && e.push(function (c) {
                            return f("$" == a ? c : c && c[a], b[a])
                        })
                    }(g);
                    break;
                case"function":
                    e.push(b);
                    break;
                default:
                    return a
            }
            for (var h = [], i = 0; i < a.length; i++) {
                var j = a[i];
                e.check(j) && h.push(j)
            }
            return h
        }
    }

    function Pc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return r(c) && (c = b.CURRENCY_SYM), Rc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
        }
    }

    function Qc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return Rc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Rc(a, b, c, d, e) {
        if (null == a || !isFinite(a) || t(a))return"";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0)
        }
        if (j)e > 0 && a > -1 && 1 > a && (h = a.toFixed(e)); else {
            var l = (g.split(we)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e), 0 === a && (f = !1);
            var m = ("" + a).split(we), n = m[0];
            m = m[1] || "";
            var o, p = 0, q = b.lgSize, s = b.gSize;
            if (n.length >= q + s)for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
            for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
            for (; m.length < e;)m += "0";
            e && "0" !== e && (h += d + m.substr(0, e))
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
    }

    function Sc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;)a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function Tc(a, b, c, d) {
        return c = c || 0, function (e) {
            var f = e["get" + a]();
            return(c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Sc(f, b, d)
        }
    }

    function Uc(a, b) {
        return function (c, d) {
            var e = c["get" + a](), f = od(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Vc(a) {
        var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
        return c += Sc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Sc(Math.abs(b % 60), 2)
    }

    function Wc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Xc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d) {
            var e, g, h = "", i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ze.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))return c;
            for (; d;)g = ye.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
            return f(i, function (b) {
                e = xe[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), h
        }
    }

    function Yc() {
        return function (a) {
            return Q(a, !0)
        }
    }

    function Zc() {
        return function (a, b) {
            if (!Cd(a) && !u(a))return a;
            if (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a))return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++)e.push(a[c]);
            return e
        }
    }

    function $c(a) {
        return function (b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }

            function g(a, b) {
                return S(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function h(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (w(a) && w(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }

            if (!e(b))return b;
            if (!c)return b;
            c = Cd(c) ? c : [c], c = F(c, function (b) {
                var c = !1, d = b || p;
                if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b), d.constant)) {
                    var e = d();
                    return g(function (a, b) {
                        return h(a[e], b[e])
                    }, c)
                }
                return g(function (a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            for (var i = [], j = 0; j < b.length; j++)i.push(b[j]);
            return i.sort(g(f, d))
        }
    }

    function _c(a) {
        return x(a) && (a = {link: a}), a.restrict = a.restrict || "AC", q(a)
    }

    function ad(a, b, c, d) {
        function e(b, c) {
            c = c ? "-" + _(c, "-") : "", d.setClass(a, (b ? Oe : Pe) + c, (b ? Pe : Oe) + c)
        }

        var g = this, h = a.parent().controller("form") || Ee, i = 0, j = g.$error = {}, k = [];
        g.$name = b.name || b.ngForm, g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, h.$addControl(g), a.addClass(Qe), e(!0), g.$addControl = function (a) {
            db(a.$name, "input"), k.push(a), a.$name && (g[a.$name] = a)
        }, g.$removeControl = function (a) {
            a.$name && g[a.$name] === a && delete g[a.$name], f(j, function (b, c) {
                g.$setValidity(c, !0, a)
            }), I(k, a)
        }, g.$setValidity = function (a, b, c) {
            var d = j[a];
            if (b)d && (I(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g))); else {
                if (i || e(b), d) {
                    if (G(d, c))return
                } else j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
                d.push(c), g.$valid = !1, g.$invalid = !0
            }
        }, g.$setDirty = function () {
            d.removeClass(a, Qe), d.addClass(a, Re), g.$dirty = !0, g.$pristine = !1, h.$setDirty()
        }, g.$setPristine = function () {
            d.removeClass(a, Re), d.addClass(a, Qe), g.$dirty = !1, g.$pristine = !0, f(k, function (a) {
                a.$setPristine()
            })
        }
    }

    function bd(a, b, d, e) {
        return a.$setValidity(b, d), d ? e : c
    }

    function cd(a, b) {
        var c, d;
        if (b)for (c = 0; c < b.length; ++c)if (d = b[c], a[d])return!0;
        return!1
    }

    function dd(a, b, c, d, e) {
        if (t(e)) {
            a.$$hasNativeValidators = !0;
            var f = function (f) {
                return a.$error[b] || cd(e, d) || !cd(e, c) ? f : void a.$setValidity(b, !1)
            };
            a.$parsers.push(f)
        }
    }

    function ed(a, b, c, e, f, g) {
        var h = b.prop(ld), i = b[0].placeholder, j = {}, k = md(b[0].type);
        if (e.$$validityState = h, !f.android) {
            var l = !1;
            b.on("compositionstart", function () {
                l = !0
            }), b.on("compositionend", function () {
                l = !1, n()
            })
        }
        var n = function (d) {
            if (!l) {
                var f = b.val();
                if (rd && "input" === (d || j).type && b[0].placeholder !== i)return void(i = b[0].placeholder);
                "password" !== k && S(c.ngTrim || "T") && (f = Dd(f));
                var g = h && e.$$hasNativeValidators;
                (e.$viewValue !== f || "" === f && g) && (a.$root.$$phase ? e.$setViewValue(f) : a.$apply(function () {
                    e.$setViewValue(f)
                }))
            }
        };
        if (f.hasEvent("input"))b.on("input", n); else {
            var o, p = function () {
                o || (o = g.defer(function () {
                    n(), o = null
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || p()
            }), f.hasEvent("paste") && b.on("paste cut", p)
        }
        b.on("change", n), e.$render = function () {
            b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue)
        };
        var q, r, s = c.ngPattern;
        if (s) {
            var t = function (a, b) {
                return bd(e, "pattern", e.$isEmpty(b) || a.test(b), b)
            };
            r = s.match(/^\/(.*)\/([gim]*)$/), r ? (s = new RegExp(r[1], r[2]), q = function (a) {
                return t(s, a)
            }) : q = function (c) {
                var e = a.$eval(s);
                if (!e || !e.test)throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, T(b));
                return t(e, c)
            }, e.$formatters.push(q), e.$parsers.push(q)
        }
        if (c.ngMinlength) {
            var u = m(c.ngMinlength), v = function (a) {
                return bd(e, "minlength", e.$isEmpty(a) || a.length >= u, a)
            };
            e.$parsers.push(v), e.$formatters.push(v)
        }
        if (c.ngMaxlength) {
            var w = m(c.ngMaxlength), x = function (a) {
                return bd(e, "maxlength", e.$isEmpty(a) || a.length <= w, a)
            };
            e.$parsers.push(x), e.$formatters.push(x)
        }
    }

    function fd(a, b, d, e, f, g) {
        if (ed(a, b, d, e, f, g), e.$parsers.push(function (a) {
            var b = e.$isEmpty(a);
            return b || Ke.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
        }), dd(e, "number", Me, null, e.$$validityState), e.$formatters.push(function (a) {
            return e.$isEmpty(a) ? "" : "" + a
        }), d.min) {
            var h = function (a) {
                var b = parseFloat(d.min);
                return bd(e, "min", e.$isEmpty(a) || a >= b, a)
            };
            e.$parsers.push(h), e.$formatters.push(h)
        }
        if (d.max) {
            var i = function (a) {
                var b = parseFloat(d.max);
                return bd(e, "max", e.$isEmpty(a) || b >= a, a)
            };
            e.$parsers.push(i), e.$formatters.push(i)
        }
        e.$formatters.push(function (a) {
            return bd(e, "number", e.$isEmpty(a) || v(a), a)
        })
    }

    function gd(a, b, c, d, e, f) {
        ed(a, b, c, d, e, f);
        var g = function (a) {
            return bd(d, "url", d.$isEmpty(a) || Ie.test(a), a)
        };
        d.$formatters.push(g), d.$parsers.push(g)
    }

    function hd(a, b, c, d, e, f) {
        ed(a, b, c, d, e, f);
        var g = function (a) {
            return bd(d, "email", d.$isEmpty(a) || Je.test(a), a)
        };
        d.$formatters.push(g), d.$parsers.push(g)
    }

    function id(a, b, c, d) {
        r(c.name) && b.attr("name", j()), b.on("click", function () {
            b[0].checked && a.$apply(function () {
                d.$setViewValue(c.value)
            })
        }), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function jd(a, b, c, d) {
        var e = c.ngTrueValue, f = c.ngFalseValue;
        u(e) || (e = !0), u(f) || (f = !1), b.on("click", function () {
            a.$apply(function () {
                d.$setViewValue(b[0].checked)
            })
        }), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function (a) {
            return a !== e
        }, d.$formatters.push(function (a) {
            return a === e
        }), d.$parsers.push(function (a) {
            return a ? e : f
        })
    }

    function kd(a, b) {
        return a = "ngClass" + a, ["$animate", function (c) {
            function d(a, b) {
                var c = [];
                a:for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)if (e == b[f])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (Cd(a))return a;
                if (u(a))return a.split(" ");
                if (t(a)) {
                    var b = [];
                    return f(a, function (a, c) {
                        a && (b = b.concat(c.split(" ")))
                    }), b
                }
                return a
            }

            return{restrict: "AC", link: function (g, h, i) {
                function j(a) {
                    var b = l(a, 1);
                    i.$addClass(b)
                }

                function k(a) {
                    var b = l(a, -1);
                    i.$removeClass(b)
                }

                function l(a, b) {
                    var c = h.data("$classCounts") || {}, d = [];
                    return f(a, function (a) {
                        (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                    }), h.data("$classCounts", c), d.join(" ")
                }

                function m(a, b) {
                    var e = d(b, a), f = d(a, b);
                    f = l(f, -1), e = l(e, 1), 0 === e.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, e) : c.setClass(h, e, f)
                }

                function n(a) {
                    if (b === !0 || g.$index % 2 === b) {
                        var c = e(a || []);
                        if (o) {
                            if (!L(a, o)) {
                                var d = e(o);
                                m(d, c)
                            }
                        } else j(c)
                    }
                    o = K(a)
                }

                var o;
                g.$watch(i[a], n, !0), i.$observe("class", function () {
                    n(g.$eval(i[a]))
                }), "ngClass" !== a && g.$watch("$index", function (c, d) {
                    var f = 1 & c;
                    if (f !== (1 & d)) {
                        var h = e(g.$eval(i[a]));
                        f === b ? j(h) : k(h)
                    }
                })
            }}
        }]
    }

    var ld = "validity", md = function (a) {
        return u(a) ? a.toLowerCase() : a
    }, nd = Object.prototype.hasOwnProperty, od = function (a) {
        return u(a) ? a.toUpperCase() : a
    }, pd = function (a) {
        return u(a) ? a.replace(/[A-Z]/g, function (a) {
            return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
    }, qd = function (a) {
        return u(a) ? a.replace(/[a-z]/g, function (a) {
            return String.fromCharCode(-33 & a.charCodeAt(0))
        }) : a
    };
    "i" !== "I".toLowerCase() && (md = pd, od = qd);
    var rd, sd, td, ud, vd, wd = [].slice, xd = [].push, yd = Object.prototype.toString, zd = d("ng"), Ad = a.angular || (a.angular = {}), Bd = ["0", "0", "0"];
    rd = m((/msie (\d+)/.exec(md(navigator.userAgent)) || [])[1]), isNaN(rd) && (rd = m((/trident\/.*; rv:(\d+)/.exec(md(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
    var Cd = function () {
        return x(Array.isArray) ? Array.isArray : function (a) {
            return"[object Array]" === yd.call(a)
        }
    }(), Dd = function () {
        return String.prototype.trim ? function (a) {
            return u(a) ? a.trim() : a
        } : function (a) {
            return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
        }
    }();
    vd = 9 > rd ? function (a) {
        return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? od(a.scopeName + ":" + a.nodeName) : a.nodeName
    } : function (a) {
        return a.nodeName ? a.nodeName : a[0].nodeName
    };
    var Ed = function () {
        if (s(Ed.isActive_))return Ed.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a)try {
            new Function("")
        } catch (c) {
            a = !0
        }
        return Ed.isActive_ = a
    }, Fd = /[A-Z]/g, Gd = {full: "1.2.25", major: 1, minor: 2, dot: 25, codeName: "hypnotic-gesticulation"};
    ob.expando = "ng339";
    var Hd = ob.cache = {}, Id = 1, Jd = a.document.addEventListener ? function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : function (a, b, c) {
        a.attachEvent("on" + b, c)
    }, Kd = a.document.removeEventListener ? function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent("on" + b, c)
    }, Ld = (ob._data = function (a) {
        return this.cache[a[this.expando]] || {}
    }, /([\:\-\_]+(.))/g), Md = /^moz([A-Z])/, Nd = d("jqLite"), Od = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Pd = /<|&#?\w+;/, Qd = /<([\w:]+)/, Rd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Sd = {option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Sd.optgroup = Sd.option, Sd.tbody = Sd.tfoot = Sd.colgroup = Sd.caption = Sd.thead, Sd.th = Sd.td;
    var Td = ob.prototype = {ready: function (c) {
        function d() {
            e || (e = !0, c())
        }

        var e = !1;
        "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ob(a).on("load", d))
    }, toString: function () {
        var a = [];
        return f(this, function (b) {
            a.push("" + b)
        }), "[" + a.join(", ") + "]"
    }, eq: function (a) {
        return sd(a >= 0 ? this[a] : this[this.length + a])
    }, length: 0, push: xd, sort: [].sort, splice: [].splice}, Ud = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
        Ud[md(a)] = a
    });
    var Vd = {};
    f("input,select,option,textarea,button,form,details".split(","), function (a) {
        Vd[od(a)] = !0
    }), f({data: ub, removeData: sb}, function (a, b) {
        ob[b] = a
    }), f({data: ub, inheritedData: Ab, scope: function (a) {
        return sd.data(a, "$scope") || Ab(a.parentNode || a, ["$isolateScope", "$scope"])
    }, isolateScope: function (a) {
        return sd.data(a, "$isolateScope") || sd.data(a, "$isolateScopeNoTemplate")
    }, controller: zb, injector: function (a) {
        return Ab(a, "$injector")
    }, removeAttr: function (a, b) {
        a.removeAttribute(b)
    }, hasClass: vb, css: function (a, b, d) {
        if (b = jb(b), !s(d)) {
            var e;
            return 8 >= rd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= rd && (e = "" === e ? c : e), e
        }
        a.style[b] = d
    }, attr: function (a, b, d) {
        var e = md(b);
        if (Ud[e]) {
            if (!s(d))return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
            d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
        } else if (s(d))a.setAttribute(b, d); else if (a.getAttribute) {
            var f = a.getAttribute(b, 2);
            return null === f ? c : f
        }
    }, prop: function (a, b, c) {
        return s(c) ? void(a[b] = c) : a[b]
    }, text: function () {
        function a(a, c) {
            var d = b[a.nodeType];
            return r(c) ? d ? a[d] : "" : void(a[d] = c)
        }

        var b = [];
        return 9 > rd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
    }(), val: function (a, b) {
        if (r(b)) {
            if ("SELECT" === vd(a) && a.multiple) {
                var c = [];
                return f(a.options, function (a) {
                    a.selected && c.push(a.value || a.text)
                }), 0 === c.length ? null : c
            }
            return a.value
        }
        a.value = b
    }, html: function (a, b) {
        if (r(b))return a.innerHTML;
        for (var c = 0, d = a.childNodes; c < d.length; c++)qb(d[c]);
        a.innerHTML = b
    }, empty: Bb}, function (a, b) {
        ob.prototype[b] = function (b, d) {
            var e, f, g = this.length;
            if (a !== Bb && (2 == a.length && a !== vb && a !== zb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++)if (a === ub)a(this[e], b); else for (f in b)a(this[e], f, b[f]);
                    return this
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k
                }
                return h
            }
            for (e = 0; g > e; e++)a(this[e], b, d);
            return this
        }
    }), f({removeData: sb, dealoc: qb, on: function Cf(a, c, d, e) {
        if (s(e))throw Nd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
        var g = tb(a, "events"), h = tb(a, "handle");
        g || tb(a, "events", g = {}), h || tb(a, "handle", h = Db(a, g)), f(c.split(" "), function (c) {
            var e = g[c];
            if (!e) {
                if ("mouseenter" == c || "mouseleave" == c) {
                    var f = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b)for (; b = b.parentNode;)if (b === a)return!0;
                        return!1
                    };
                    g[c] = [];
                    var i = {mouseleave: "mouseout", mouseenter: "mouseover"};
                    Cf(a, i[c], function (a) {
                        var b = this, d = a.relatedTarget;
                        (!d || d !== b && !f(b, d)) && h(a, c)
                    })
                } else Jd(a, c, h), g[c] = [];
                e = g[c]
            }
            e.push(d)
        })
    }, off: rb, one: function (a, b, c) {
        a = sd(a), a.on(b, function d() {
            a.off(b, c), a.off(b, d)
        }), a.on(b, c)
    }, replaceWith: function (a, b) {
        var c, d = a.parentNode;
        qb(a), f(new ob(b), function (b) {
            c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
        })
    }, children: function (a) {
        var b = [];
        return f(a.childNodes, function (a) {
            1 === a.nodeType && b.push(a)
        }), b
    }, contents: function (a) {
        return a.contentDocument || a.childNodes || []
    }, append: function (a, b) {
        f(new ob(b), function (b) {
            (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
        })
    }, prepend: function (a, b) {
        if (1 === a.nodeType) {
            var c = a.firstChild;
            f(new ob(b), function (b) {
                a.insertBefore(b, c)
            })
        }
    }, wrap: function (a, b) {
        b = sd(b)[0];
        var c = a.parentNode;
        c && c.replaceChild(b, a), b.appendChild(a)
    }, remove: function (a) {
        qb(a);
        var b = a.parentNode;
        b && b.removeChild(a)
    }, after: function (a, b) {
        var c = a, d = a.parentNode;
        f(new ob(b), function (a) {
            d.insertBefore(a, c.nextSibling), c = a
        })
    }, addClass: xb, removeClass: wb, toggleClass: function (a, b, c) {
        b && f(b.split(" "), function (b) {
            var d = c;
            r(d) && (d = !vb(a, b)), (d ? xb : wb)(a, b)
        })
    }, parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    }, next: function (a) {
        if (a.nextElementSibling)return a.nextElementSibling;
        for (var b = a.nextSibling; null != b && 1 !== b.nodeType;)b = b.nextSibling;
        return b
    }, find: function (a, b) {
        return a.getElementsByTagName ? a.getElementsByTagName(b) : []
    }, clone: pb, triggerHandler: function (a, b, c) {
        var d, e, g, h = b.type || b, i = (tb(a, "events") || {})[h];
        i && (d = {preventDefault: function () {
            this.defaultPrevented = !0
        }, isDefaultPrevented: function () {
            return this.defaultPrevented === !0
        }, stopPropagation: o, type: h, target: a}, b.type && (d = l(d, b)), e = K(i), g = c ? [d].concat(c) : [d], f(e, function (b) {
            b.apply(a, g)
        }))
    }}, function (a, b) {
        ob.prototype[b] = function (b, c, d) {
            for (var e, f = 0; f < this.length; f++)r(e) ? (e = a(this[f], b, c, d), s(e) && (e = sd(e))) : yb(e, a(this[f], b, c, d));
            return s(e) ? e : this
        }, ob.prototype.bind = ob.prototype.on, ob.prototype.unbind = ob.prototype.off
    }), Fb.prototype = {put: function (a, b) {
        this[Eb(a, this.nextUid)] = b
    }, get: function (a) {
        return this[Eb(a, this.nextUid)]
    }, remove: function (a) {
        var b = this[a = Eb(a, this.nextUid)];
        return delete this[a], b
    }};
    var Wd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Xd = /,/, Yd = /^\s*(_?)(\S+?)\1\s*$/, Zd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, $d = d("$injector"), _d = d("$animate"), ae = ["$provide", function (a) {
        this.$$selectors = {}, this.register = function (b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0))throw _d("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
            this.$$selectors[b.substr(1)] = d, a.factory(d, c)
        }, this.classNameFilter = function (a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
        }, this.$get = ["$timeout", "$$asyncCallback", function (a, b) {
            function c(a) {
                a && b(a)
            }

            return{enter: function (a, b, d, e) {
                d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)), c(e)
            }, leave: function (a, b) {
                a.remove(), c(b)
            }, move: function (a, b, c, d) {
                this.enter(a, b, c, d)
            }, addClass: function (a, b, d) {
                b = u(b) ? b : Cd(b) ? b.join(" ") : "", f(a, function (a) {
                    xb(a, b)
                }), c(d)
            }, removeClass: function (a, b, d) {
                b = u(b) ? b : Cd(b) ? b.join(" ") : "", f(a, function (a) {
                    wb(a, b)
                }), c(d)
            }, setClass: function (a, b, d, e) {
                f(a, function (a) {
                    xb(a, b), wb(a, d)
                }), c(e)
            }, enabled: o}
        }]
    }], be = d("$compile");
    Ob.$inject = ["$provide", "$$sanitizeUriProvider"];
    var ce = /^(x[\:\-_]|data[\:\-_])/i, de = d("$interpolate"), ee = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, fe = {http: 80, https: 443, ftp: 21}, ge = d("$location");
    mc.prototype = lc.prototype = kc.prototype = {$$html5: !1, $$replace: !1, absUrl: nc("$$absUrl"), url: function (a) {
        if (r(a))return this.$$url;
        var b = ee.exec(a);
        return b[1] && this.path(decodeURIComponent(b[1])), (b[2] || b[1]) && this.search(b[3] || ""), this.hash(b[5] || ""), this
    }, protocol: nc("$$protocol"), host: nc("$$host"), port: nc("$$port"), path: oc("$$path", function (a) {
        return a = a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
    }), search: function (a, b) {
        switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (u(a) || v(a))a = a.toString(), this.$$search = V(a); else {
                    if (!t(a))throw ge("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    f(a, function (b, c) {
                        null == b && delete a[c]
                    }), this.$$search = a
                }
                break;
            default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
        }
        return this.$$compose(), this
    }, hash: oc("$$hash", function (a) {
        return a ? a.toString() : ""
    }), replace: function () {
        return this.$$replace = !0, this
    }};
    var he, ie = d("$parse"), je = {}, ke = Function.prototype.call, le = Function.prototype.apply, me = Function.prototype.bind, ne = {"null": function () {
        return null
    }, "true": function () {
        return!0
    }, "false": function () {
        return!1
    }, undefined: o, "+": function (a, b, d, e) {
        return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
    }, "-": function (a, b, c, d) {
        return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
    }, "*": function (a, b, c, d) {
        return c(a, b) * d(a, b)
    }, "/": function (a, b, c, d) {
        return c(a, b) / d(a, b)
    }, "%": function (a, b, c, d) {
        return c(a, b) % d(a, b)
    }, "^": function (a, b, c, d) {
        return c(a, b) ^ d(a, b)
    }, "=": o, "===": function (a, b, c, d) {
        return c(a, b) === d(a, b)
    }, "!==": function (a, b, c, d) {
        return c(a, b) !== d(a, b)
    }, "==": function (a, b, c, d) {
        return c(a, b) == d(a, b)
    }, "!=": function (a, b, c, d) {
        return c(a, b) != d(a, b)
    }, "<": function (a, b, c, d) {
        return c(a, b) < d(a, b)
    }, ">": function (a, b, c, d) {
        return c(a, b) > d(a, b)
    }, "<=": function (a, b, c, d) {
        return c(a, b) <= d(a, b)
    }, ">=": function (a, b, c, d) {
        return c(a, b) >= d(a, b)
    }, "&&": function (a, b, c, d) {
        return c(a, b) && d(a, b)
    }, "||": function (a, b, c, d) {
        return c(a, b) || d(a, b)
    }, "&": function (a, b, c, d) {
        return c(a, b) & d(a, b)
    }, "|": function (a, b, c, d) {
        return d(a, b)(a, b, c(a, b))
    }, "!": function (a, b, c) {
        return!c(a, b)
    }}, oe = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, pe = function (a) {
        this.options = a
    };
    pe.prototype = {constructor: pe, lex: function (a) {
        for (this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
            if (this.ch = this.text.charAt(this.index), this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent(); else if (this.is("(){}[].,;:?"))this.tokens.push({index: this.index, text: this.ch}), this.index++; else {
                if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue
                }
                var b = this.ch + this.peek(), d = b + this.peek(2), e = ne[this.ch], f = ne[b], g = ne[d];
                g ? (this.tokens.push({index: this.index, text: d, fn: g}), this.index += 3) : f ? (this.tokens.push({index: this.index, text: b, fn: f}), this.index += 2) : e ? (this.tokens.push({index: this.index, text: this.ch, fn: e}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            this.lastCh = this.ch
        }
        return this.tokens
    }, is: function (a) {
        return-1 !== a.indexOf(this.ch)
    }, was: function (a) {
        return-1 !== a.indexOf(this.lastCh)
    }, peek: function (a) {
        var b = a || 1;
        return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
    }, isNumber: function (a) {
        return a >= "0" && "9" >= a
    }, isWhitespace: function (a) {
        return" " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
    }, isIdent: function (a) {
        return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
        return"-" === a || "+" === a || this.isNumber(a)
    }, throwError: function (a, b, c) {
        c = c || this.index;
        var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
        throw ie("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
    }, readNumber: function () {
        for (var a = "", b = this.index; this.index < this.text.length;) {
            var c = md(this.text.charAt(this.index));
            if ("." == c || this.isNumber(c))a += c; else {
                var d = this.peek();
                if ("e" == c && this.isExpOperator(d))a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))a += c; else {
                    if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))break;
                    this.throwError("Invalid exponent")
                }
            }
            this.index++
        }
        a = 1 * a, this.tokens.push({index: b, text: a, literal: !0, constant: !0, fn: function () {
            return a
        }})
    }, readIdent: function () {
        for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));)"." === d && (a = this.index), f += d, this.index++;
        if (a)for (b = this.index; b < this.text.length;) {
            if (d = this.text.charAt(b), "(" === d) {
                c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
                break
            }
            if (!this.isWhitespace(d))break;
            b++
        }
        var h = {index: g, text: f};
        if (ne.hasOwnProperty(f))h.fn = ne[f], h.literal = !0, h.constant = !0; else {
            var i = wc(f, this.options, this.text);
            h.fn = l(function (a, b) {
                return i(a, b)
            }, {assign: function (a, b) {
                return uc(a, f, b, e.text, e.options)
            }})
        }
        this.tokens.push(h), c && (this.tokens.push({index: a, text: "."}), this.tokens.push({index: a + 1, text: c}))
    }, readString: function (a) {
        var b = this.index;
        this.index++;
        for (var c = "", d = a, e = !1; this.index < this.text.length;) {
            var f = this.text.charAt(this.index);
            if (d += f, e) {
                if ("u" === f) {
                    var g = this.text.substring(this.index + 1, this.index + 5);
                    g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                } else {
                    var h = oe[f];
                    c += h || f
                }
                e = !1
            } else if ("\\" === f)e = !0; else {
                if (f === a)return this.index++, void this.tokens.push({index: b, text: d, string: c, literal: !0, constant: !0, fn: function () {
                    return c
                }});
                c += f
            }
            this.index++
        }
        this.throwError("Unterminated quote", b)
    }};
    var qe = function (a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c
    };
    qe.ZERO = l(function () {
        return 0
    }, {constant: !0}), qe.prototype = {constructor: qe, parse: function (a) {
        this.text = a, this.tokens = this.lexer.lex(a);
        var b = this.statements();
        return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b
    }, primary: function () {
        var a;
        if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a = this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
            var b = this.expect();
            a = b.fn, a || this.throwError("not a primary expression", b), a.literal = !!b.literal, a.constant = !!b.constant
        }
        for (var c, d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
        return a
    }, throwError: function (a, b) {
        throw ie("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
    }, peekToken: function () {
        if (0 === this.tokens.length)throw ie("ueoe", "Unexpected end of expression: {0}", this.text);
        return this.tokens[0]
    }, peek: function (a, b, c, d) {
        if (this.tokens.length > 0) {
            var e = this.tokens[0], f = e.text;
            if (f === a || f === b || f === c || f === d || !a && !b && !c && !d)return e
        }
        return!1
    }, expect: function (a, b, c, d) {
        var e = this.peek(a, b, c, d);
        return e ? (this.tokens.shift(), e) : !1
    }, consume: function (a) {
        this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
    }, unaryFn: function (a, b) {
        return l(function (c, d) {
            return a(c, d, b)
        }, {constant: b.constant})
    }, ternaryFn: function (a, b, c) {
        return l(function (d, e) {
            return a(d, e) ? b(d, e) : c(d, e)
        }, {constant: a.constant && b.constant && c.constant})
    }, binaryFn: function (a, b, c) {
        return l(function (d, e) {
            return b(d, e, a, c)
        }, {constant: a.constant && c.constant})
    }, statements: function () {
        for (var a = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (b, c) {
            for (var d, e = 0; e < a.length; e++) {
                var f = a[e];
                f && (d = f(b, c))
            }
            return d
        }
    }, filterChain: function () {
        for (var a, b = this.expression(); ;) {
            if (!(a = this.expect("|")))return b;
            b = this.binaryFn(b, a.fn, this.filter())
        }
    }, filter: function () {
        for (var a = this.expect(), b = this.$filter(a.text), c = []; ;) {
            if (!(a = this.expect(":"))) {
                var d = function (a, d, e) {
                    for (var f = [e], g = 0; g < c.length; g++)f.push(c[g](a, d));
                    return b.apply(a, f)
                };
                return function () {
                    return d
                }
            }
            c.push(this.expression())
        }
    }, expression: function () {
        return this.assignment()
    }, assignment: function () {
        var a, b, c = this.ternary();
        return(b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function (b, d) {
            return c.assign(b, a(b, d), d)
        }) : c
    }, ternary: function () {
        var a, b, c = this.logicalOR();
        return(b = this.expect("?")) ? (a = this.assignment(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.assignment()) : void this.throwError("expected :", b)) : c
    }, logicalOR: function () {
        for (var a, b = this.logicalAND(); ;) {
            if (!(a = this.expect("||")))return b;
            b = this.binaryFn(b, a.fn, this.logicalAND())
        }
    }, logicalAND: function () {
        var a, b = this.equality();
        return(a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
    }, equality: function () {
        var a, b = this.relational();
        return(a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
    }, relational: function () {
        var a, b = this.additive();
        return(a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
    }, additive: function () {
        for (var a, b = this.multiplicative(); a = this.expect("+", "-");)b = this.binaryFn(b, a.fn, this.multiplicative());
        return b
    }, multiplicative: function () {
        for (var a, b = this.unary(); a = this.expect("*", "/", "%");)b = this.binaryFn(b, a.fn, this.unary());
        return b
    }, unary: function () {
        var a;
        return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(qe.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
    }, fieldAccess: function (a) {
        var b = this, c = this.expect().text, d = wc(c, this.options, this.text);
        return l(function (b, c, e) {
            return d(e || a(b, c))
        }, {assign: function (d, e, f) {
            var g = a(d, f);
            return g || a.assign(d, g = {}), uc(g, c, e, b.text, b.options)
        }})
    }, objectIndex: function (a) {
        var b = this, d = this.expression();
        return this.consume("]"), l(function (e, f) {
            var g, h, i = a(e, f), j = d(e, f);
            return rc(j, b.text), i ? (g = sc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v"in g || (h.$$v = c, h.then(function (a) {
                h.$$v = a
            })), g = g.$$v), g) : c
        }, {assign: function (c, e, f) {
            var g = rc(d(c, f), b.text), h = sc(a(c, f), b.text);
            return h || a.assign(c, h = {}), h[g] = e
        }})
    }, functionCall: function (a, b) {
        var c = [];
        if (")" !== this.peekToken().text)do c.push(this.expression()); while (this.expect(","));
        this.consume(")");
        var d = this;
        return function (e, f) {
            for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++)g.push(sc(c[i](e, f), d.text));
            var j = a(e, f, h) || o;
            sc(h, d.text), tc(j, d.text);
            var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
            return sc(k, d.text)
        }
    }, arrayDeclaration: function () {
        var a = [], b = !0;
        if ("]" !== this.peekToken().text)do {
            if (this.peek("]"))break;
            var c = this.expression();
            a.push(c), c.constant || (b = !1)
        } while (this.expect(","));
        return this.consume("]"), l(function (b, c) {
            for (var d = [], e = 0; e < a.length; e++)d.push(a[e](b, c));
            return d
        }, {literal: !0, constant: b})
    }, object: function () {
        var a = [], b = !0;
        if ("}" !== this.peekToken().text)do {
            if (this.peek("}"))break;
            var c = this.expect(), d = c.string || c.text;
            this.consume(":");
            var e = this.expression();
            a.push({key: d, value: e}), e.constant || (b = !1)
        } while (this.expect(","));
        return this.consume("}"), l(function (b, c) {
            for (var d = {}, e = 0; e < a.length; e++) {
                var f = a[e];
                d[f.key] = f.value(b, c)
            }
            return d
        }, {literal: !0, constant: b})
    }};
    var re = {}, se = d("$sce"), te = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, ue = b.createElement("a"), ve = Kc(a.location.href, !0);
    Nc.$inject = ["$provide"], Pc.$inject = ["$locale"], Qc.$inject = ["$locale"];
    var we = ".", xe = {yyyy: Tc("FullYear", 4), yy: Tc("FullYear", 2, 0, !0), y: Tc("FullYear", 1), MMMM: Uc("Month"), MMM: Uc("Month", !0), MM: Tc("Month", 2, 1), M: Tc("Month", 1, 1), dd: Tc("Date", 2), d: Tc("Date", 1), HH: Tc("Hours", 2), H: Tc("Hours", 1), hh: Tc("Hours", 2, -12), h: Tc("Hours", 1, -12), mm: Tc("Minutes", 2), m: Tc("Minutes", 1), ss: Tc("Seconds", 2), s: Tc("Seconds", 1), sss: Tc("Milliseconds", 3), EEEE: Uc("Day"), EEE: Uc("Day", !0), a: Wc, Z: Vc}, ye = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, ze = /^\-?\d+$/;
    Xc.$inject = ["$locale"];
    var Ae = q(md), Be = q(od);
    $c.$inject = ["$parse"];
    var Ce = q({restrict: "E", compile: function (a, c) {
        return 8 >= rd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.xlinkHref || c.name ? void 0 : function (a, b) {
            var c = "[object SVGAnimatedString]" === yd.call(b.prop("href")) ? "xlink:href" : "href";
            b.on("click", function (a) {
                b.attr(c) || a.preventDefault()
            })
        }
    }}), De = {};
    f(Ud, function (a, b) {
        if ("multiple" != a) {
            var c = Pb("ng-" + b);
            De[c] = function () {
                return{priority: 100, link: function (a, d, e) {
                    a.$watch(e[c], function (a) {
                        e.$set(b, !!a)
                    })
                }}
            }
        }
    }), f(["src", "srcset", "href"], function (a) {
        var b = Pb("ng-" + a);
        De[b] = function () {
            return{priority: 99, link: function (c, d, e) {
                var f = a, g = a;
                "href" === a && "[object SVGAnimatedString]" === yd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
                    return b ? (e.$set(g, b), void(rd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                })
            }}
        }
    });
    var Ee = {$addControl: o, $removeControl: o, $setValidity: o, $setDirty: o, $setPristine: o};
    ad.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Fe = function (a) {
        return["$timeout", function (b) {
            var d = {name: "form", restrict: a ? "EAC" : "E", controller: ad, compile: function () {
                return{pre: function (a, d, e, f) {
                    if (!e.action) {
                        var g = function (a) {
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                        };
                        Jd(d[0], "submit", g), d.on("$destroy", function () {
                            b(function () {
                                Kd(d[0], "submit", g)
                            }, 0, !1)
                        })
                    }
                    var h = d.parent().controller("form"), i = e.name || e.ngForm;
                    i && uc(a, i, f, i), h && d.on("$destroy", function () {
                        h.$removeControl(f), i && uc(a, i, c, i), l(f, Ee)
                    })
                }}
            }};
            return d
        }]
    }, Ge = Fe(), He = Fe(!0), Ie = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Je = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Ke = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Le = {text: ed, number: fd, url: gd, email: hd, radio: id, checkbox: jd, hidden: o, button: o, submit: o, reset: o, file: o}, Me = ["badInput"], Ne = ["$browser", "$sniffer", function (a, b) {
        return{restrict: "E", require: "?ngModel", link: function (c, d, e, f) {
            f && (Le[md(e.type)] || Le.text)(c, d, e, f, b, a)
        }}
    }], Oe = "ng-valid", Pe = "ng-invalid", Qe = "ng-pristine", Re = "ng-dirty", Se = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (a, b, c, e, g, h) {
        function i(a, b) {
            b = b ? "-" + _(b, "-") : "", h.removeClass(e, (a ? Pe : Oe) + b), h.addClass(e, (a ? Oe : Pe) + b)
        }

        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
        var j = g(c.ngModel), k = j.assign;
        if (!k)throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
        this.$render = o, this.$isEmpty = function (a) {
            return r(a) || "" === a || null === a || a !== a
        };
        var l = e.inheritedData("$formController") || Ee, m = 0, n = this.$error = {};
        e.addClass(Qe), i(!0), this.$setValidity = function (a, b) {
            n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this))
        }, this.$setPristine = function () {
            this.$dirty = !1, this.$pristine = !0, h.removeClass(e, Re), h.addClass(e, Qe)
        }, this.$setViewValue = function (c) {
            this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Qe), h.addClass(e, Re), l.$setDirty()), f(this.$parsers, function (a) {
                c = a(c)
            }), this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (c) {
                    b(c)
                }
            }))
        };
        var p = this;
        a.$watch(function () {
            var b = j(a);
            if (p.$modelValue !== b) {
                var c = p.$formatters, d = c.length;
                for (p.$modelValue = b; d--;)b = c[d](b);
                p.$viewValue !== b && (p.$viewValue = b, p.$render())
            }
            return b
        })
    }], Te = function () {
        return{require: ["ngModel", "^?form"], controller: Se, link: function (a, b, c, d) {
            var e = d[0], f = d[1] || Ee;
            f.$addControl(e), a.$on("$destroy", function () {
                f.$removeControl(e)
            })
        }}
    }, Ue = q({require: "ngModel", link: function (a, b, c, d) {
        d.$viewChangeListeners.push(function () {
            a.$eval(c.ngChange)
        })
    }}), Ve = function () {
        return{require: "?ngModel", link: function (a, b, c, d) {
            if (d) {
                c.required = !0;
                var e = function (a) {
                    return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
                };
                d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function () {
                    e(d.$viewValue)
                })
            }
        }}
    }, We = function () {
        return{require: "ngModel", link: function (a, b, d, e) {
            var g = /\/(.*)\//.exec(d.ngList), h = g && new RegExp(g[1]) || d.ngList || ",", i = function (a) {
                if (!r(a)) {
                    var b = [];
                    return a && f(a.split(h), function (a) {
                        a && b.push(Dd(a))
                    }), b
                }
            };
            e.$parsers.push(i), e.$formatters.push(function (a) {
                return Cd(a) ? a.join(", ") : c
            }), e.$isEmpty = function (a) {
                return!a || !a.length
            }
        }}
    }, Xe = /^(true|false|\d+)$/, Ye = function () {
        return{priority: 100, compile: function (a, b) {
            return Xe.test(b.ngValue) ? function (a, b, c) {
                c.$set("value", a.$eval(c.ngValue))
            } : function (a, b, c) {
                a.$watch(c.ngValue, function (a) {
                    c.$set("value", a)
                })
            }
        }}
    }, Ze = _c({compile: function (a) {
        return a.addClass("ng-binding"), function (a, b, d) {
            b.data("$binding", d.ngBind), a.$watch(d.ngBind, function (a) {
                b.text(a == c ? "" : a)
            })
        }
    }}), $e = ["$interpolate", function (a) {
        return function (b, c, d) {
            var e = a(c.attr(d.$attr.ngBindTemplate));
            c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function (a) {
                c.text(a)
            })
        }
    }], _e = ["$sce", "$parse", function (a, b) {
        return{compile: function (c) {
            return c.addClass("ng-binding"), function (c, d, e) {
                function f() {
                    return(g(c) || "").toString()
                }

                d.data("$binding", e.ngBindHtml);
                var g = b(e.ngBindHtml);
                c.$watch(f, function () {
                    d.html(a.getTrustedHtml(g(c)) || "")
                })
            }
        }}
    }], af = kd("", !0), bf = kd("Odd", 0), cf = kd("Even", 1), df = _c({compile: function (a, b) {
        b.$set("ngCloak", c), a.removeClass("ng-cloak")
    }}), ef = [function () {
        return{scope: !0, controller: "@", priority: 500}
    }], ff = {}, gf = {blur: !0, focus: !0};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = Pb("ng-" + a);
        ff[b] = ["$parse", "$rootScope", function (c, d) {
            return{compile: function (e, f) {
                var g = c(f[b]);
                return function (b, c) {
                    c.on(a, function (c) {
                        var e = function () {
                            g(b, {$event: c})
                        };
                        gf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                    })
                }
            }}
        }]
    });
    var hf = ["$animate", function (a) {
        return{transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, f, g) {
            var h, i, j;
            c.$watch(e.ngIf, function (f) {
                S(f) ? i || (i = c.$new(), g(i, function (c) {
                    c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {clone: c}, a.enter(c, d.parent(), d)
                })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = fb(h.clone), a.leave(j, function () {
                    j = null
                }), h = null))
            })
        }}
    }], jf = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (a, b, c, d, e) {
        return{restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: Ad.noop, compile: function (f, g) {
            var h = g.ngInclude || g.src, i = g.onload || "", j = g.autoscroll;
            return function (f, g, k, l, m) {
                var n, o, p, q = 0, r = function () {
                    o && (o.remove(), o = null), n && (n.$destroy(), n = null), p && (d.leave(p, function () {
                        o = null
                    }), o = p, p = null)
                };
                f.$watch(e.parseAsResourceUrl(h), function (e) {
                    var h = function () {
                        !s(j) || j && !f.$eval(j) || c()
                    }, k = ++q;
                    e ? (a.get(e, {cache: b}).success(function (a) {
                        if (k === q) {
                            var b = f.$new();
                            l.template = a;
                            var c = m(b, function (a) {
                                r(), d.enter(a, null, g, h)
                            });
                            n = b, p = c, n.$emit("$includeContentLoaded"), f.$eval(i)
                        }
                    }).error(function () {
                        k === q && r()
                    }), f.$emit("$includeContentRequested")) : (r(), l.template = null)
                })
            }
        }}
    }], kf = ["$compile", function (a) {
        return{restrict: "ECA", priority: -400, require: "ngInclude", link: function (b, c, d, e) {
            c.html(e.template), a(c.contents())(b)
        }}
    }], lf = _c({priority: 450, compile: function () {
        return{pre: function (a, b, c) {
            a.$eval(c.ngInit)
        }}
    }}), mf = _c({terminal: !0, priority: 1e3}), nf = ["$locale", "$interpolate", function (a, b) {
        var c = /{}/g;
        return{restrict: "EA", link: function (d, e, g) {
            var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
            f(g, function (a, b) {
                o.test(b) && (k[md(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
            }), f(k, function (a, d) {
                l[d] = b(a.replace(c, m + h + "-" + j + n))
            }), d.$watch(function () {
                var b = parseFloat(d.$eval(h));
                return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
            }, function (a) {
                e.text(a)
            })
        }}
    }], of = ["$parse", "$animate", function (a, c) {
        function g(a) {
            return a.clone[0]
        }

        function h(a) {
            return a.clone[a.clone.length - 1]
        }

        var i = "$$NG_REMOVED", j = d("ngRepeat");
        return{transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function (d, k, l, m, n) {
            var o, p, q, r, s, t, u, v, w, x = l.ngRepeat, y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), z = {$id: Eb};
            if (!y)throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
            if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function (a, b, c) {
                return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z)
            }) : (r = function (a, b) {
                return Eb(b)
            }, s = function (a) {
                return a
            }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y)throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
            v = y[3] || y[1], w = y[2];
            var A = {};
            d.$watchCollection(u, function (a) {
                var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0], G = {}, H = [];
                if (e(a))C = a, B = q || r; else {
                    B = q || s, C = [];
                    for (u in a)a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
                    C.sort()
                }
                for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), db(z, "`track by` id"), A.hasOwnProperty(z))D = A[z], delete A[z], G[z] = D, H[l] = D; else {
                    if (G.hasOwnProperty(z))throw f(H, function (a) {
                        a && a.scope && (A[a.id] = a)
                    }), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", x, z, Q(y));
                    H[l] = {id: z}, G[z] = !1
                }
                for (u in A)A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E, function (a) {
                    a[i] = !0
                }), D.scope.$destroy());
                for (l = 0, m = C.length; m > l; l++) {
                    if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                        t = D.scope, o = F;
                        do o = o.nextSibling; while (o && o[i]);
                        g(D) != o && c.move(fb(D.clone), null, sd(F)), F = h(D)
                    } else t = d.$new();
                    t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function (a) {
                        a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, sd(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D
                    })
                }
                A = G
            })
        }}
    }], pf = ["$animate", function (a) {
        return function (b, c, d) {
            b.$watch(d.ngShow, function (b) {
                a[S(b) ? "removeClass" : "addClass"](c, "ng-hide")
            })
        }
    }], qf = ["$animate", function (a) {
        return function (b, c, d) {
            b.$watch(d.ngHide, function (b) {
                a[S(b) ? "addClass" : "removeClass"](c, "ng-hide")
            })
        }
    }], rf = _c(function (a, b, c) {
        a.$watch(c.ngStyle, function (a, c) {
            c && a !== c && f(c, function (a, c) {
                b.css(c, "")
            }), a && b.css(a)
        }, !0)
    }), sf = ["$animate", function (a) {
        return{restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
            this.cases = {}
        }], link: function (b, c, d, e) {
            var g = d.ngSwitch || d.on, h = [], i = [], j = [], k = [];
            b.$watch(g, function (c) {
                var g, l;
                for (g = 0, l = j.length; l > g; ++g)j[g].remove();
                for (j.length = 0, g = 0, l = k.length; l > g; ++g) {
                    var m = i[g];
                    k[g].$destroy(), j[g] = m, a.leave(m, function () {
                        j.splice(g, 1)
                    })
                }
                i.length = 0, k.length = 0, (h = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(h, function (c) {
                    var d = b.$new();
                    k.push(d), c.transclude(d, function (b) {
                        var d = c.element;
                        i.push(b), a.enter(b, d.parent(), d)
                    })
                }))
            })
        }}
    }], tf = _c({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, b, c, d, e) {
        d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({transclude: e, element: b})
    }}), uf = _c({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, b, c, d, e) {
        d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e, element: b})
    }}), vf = _c({link: function (a, b, c, e, f) {
        if (!f)throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
        f(function (a) {
            b.empty(), b.append(a)
        })
    }}), wf = ["$templateCache", function (a) {
        return{restrict: "E", terminal: !0, compile: function (b, c) {
            if ("text/ng-template" == c.type) {
                var d = c.id, e = b[0].text;
                a.put(d, e)
            }
        }}
    }], xf = d("ngOptions"), yf = q({terminal: !0}), zf = ["$compile", "$parse", function (a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {$setViewValue: o};
        return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, b, c) {
            var d, e, f = this, g = {}, i = h;
            f.databound = c.ngModel, f.init = function (a, b, c) {
                i = a, d = b, e = c
            }, f.addOption = function (b) {
                db(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
            }, f.removeOption = function (a) {
                this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
            }, f.renderUnknownOption = function (b) {
                var c = "? " + Eb(b) + " ?";
                e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
            }, f.hasOption = function (a) {
                return g.hasOwnProperty(a)
            }, b.$on("$destroy", function () {
                f.renderUnknownOption = o
            })
        }], link: function (h, i, j, k) {
            function l(a, b, c, d) {
                c.$render = function () {
                    var a = c.$viewValue;
                    d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                }, b.on("change", function () {
                    a.$apply(function () {
                        y.parent() && y.remove(), c.$setViewValue(b.val())
                    })
                })
            }

            function m(a, b, c) {
                var d;
                c.$render = function () {
                    var a = new Fb(c.$viewValue);
                    f(b.find("option"), function (b) {
                        b.selected = s(a.get(b.value))
                    })
                }, a.$watch(function () {
                    L(d, c.$viewValue) || (d = K(c.$viewValue), c.$render())
                }), b.on("change", function () {
                    a.$apply(function () {
                        var a = [];
                        f(b.find("option"), function (b) {
                            b.selected && a.push(b.value)
                        }), c.$setViewValue(a)
                    })
                })
            }

            function n(b, f, h) {
                function i() {
                    var a = !1;
                    if (t) {
                        var c = h.$modelValue;
                        if (y && Cd(c)) {
                            a = new Fb([]);
                            for (var d = {}, e = 0; e < c.length; e++)d[m] = c[e], a.put(y(b, d), c[e])
                        } else a = new Fb(c)
                    }
                    return a
                }

                function j() {
                    var a, c, d, e, j, k, r, u, A, B, C, D, E, F, G, H = {"": []}, I = [""], J = h.$modelValue, K = q(b) || [], L = n ? g(K) : K, M = {}, N = i();
                    for (C = 0; A = L.length, A > C; C++) {
                        if (r = C, n) {
                            if (r = L[C], "$" === r.charAt(0))continue;
                            M[n] = r
                        }
                        if (M[m] = K[r], a = o(b, M) || "", (c = H[a]) || (c = H[a] = [], I.push(a)), t)D = s(N.remove(y ? y(b, M) : p(b, M))); else {
                            if (y) {
                                var O = {};
                                O[m] = J, D = y(b, O) === y(b, M)
                            } else D = J === p(b, M);
                            N = N || D
                        }
                        G = l(b, M), G = s(G) ? G : "", c.push({id: y ? y(b, M) : n ? L[C] : C, label: G, selected: D})
                    }
                    for (t || (v || null === J ? H[""].unshift({id: "", label: "", selected: !N}) : N || H[""].unshift({id: "?", label: "", selected: !0})), B = 0, u = I.length; u > B; B++) {
                        for (a = I[B], c = H[a], z.length <= B ? (e = {element: x.clone().attr("label", a), label: c.label}, j = [e], z.push(j), f.append(e.element)) : (j = z[B], e = j[0], e.label != a && e.element.attr("label", e.label = a)), E = null, C = 0, A = c.length; A > C; C++)d = c[C], (k = j[C + 1]) ? (E = k.element, k.label !== d.label && E.text(k.label = d.label), k.id !== d.id && E.val(k.id = d.id), E[0].selected !== d.selected && (E.prop("selected", k.selected = d.selected), rd && E.prop("selected", k.selected))) : ("" === d.id && v ? F = v : (F = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).text(d.label), j.push(k = {element: F, label: d.label, id: d.id, selected: d.selected}), E ? E.after(F) : e.element.append(F), E = F);
                        for (C++; j.length > C;)j.pop().element.remove()
                    }
                    for (; z.length > B;)z.pop()[0].element.remove()
                }

                var k;
                if (!(k = u.match(e)))throw xf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
                var l = d(k[2] || k[1]), m = k[4] || k[6], n = k[5], o = d(k[3] || ""), p = d(k[2] ? k[1] : m), q = d(k[7]), r = k[8], y = r ? d(k[8]) : null, z = [
                    [
                        {element: f, label: ""}
                    ]
                ];
                v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function () {
                    b.$apply(function () {
                        var a, d, e, g, i, k, l, o, r, s = q(b) || [], u = {};
                        if (t) {
                            for (e = [], k = 0, o = z.length; o > k; k++)for (a = z[k], i = 1, l = a.length; l > i; i++)if ((g = a[i].element)[0].selected) {
                                if (d = g.val(), n && (u[n] = d), y)for (r = 0; r < s.length && (u[m] = s[r], y(b, u) != d); r++); else u[m] = s[d];
                                e.push(p(b, u))
                            }
                        } else if (d = f.val(), "?" == d)e = c; else if ("" === d)e = null; else if (y) {
                            for (r = 0; r < s.length; r++)if (u[m] = s[r], y(b, u) == d) {
                                e = p(b, u);
                                break
                            }
                        } else u[m] = s[d], n && (u[n] = d), e = p(b, u);
                        h.$setViewValue(e), j()
                    })
                }), h.$render = j, b.$watchCollection(q, j), b.$watchCollection(function () {
                    var a = {}, c = q(b);
                    if (c) {
                        for (var d = new Array(c.length), e = 0, f = c.length; f > e; e++)a[m] = c[e], d[e] = l(b, a);
                        return d
                    }
                }, j), t && b.$watchCollection(function () {
                    return h.$modelValue
                }, j)
            }

            if (k[1]) {
                for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = sd(b.createElement("option")), x = sd(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++)if ("" === A[z].value) {
                    o = v = A.eq(z);
                    break
                }
                p.init(q, v, y), t && (q.$isEmpty = function (a) {
                    return!a || 0 === a.length
                }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
            }
        }}
    }], Af = ["$interpolate", function (a) {
        var b = {addOption: o, removeOption: o};
        return{restrict: "E", priority: 100, compile: function (c, d) {
            if (r(d.value)) {
                var e = a(c.text(), !0);
                e || d.$set("value", c.text())
            }
            return function (a, c, d) {
                var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function (a, b) {
                    d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
                }) : h.addOption(d.value), c.on("$destroy", function () {
                    h.removeOption(d.value)
                })
            }
        }}
    }], Bf = q({restrict: "E", terminal: !0});
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ab(), hb(Ad), void sd(b).ready(function () {
        Z(b, $)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/popup.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (a, b, c) {
    function d(a) {
        for (var b in a)if (void 0 !== f.style[b])return a[b]
    }

    var e = function (d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function () {
            c.$apply(function () {
                d.unbind(i, j), h.resolve(d)
            })
        };
        return i && d.bind(i, j), b(function () {
            angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
        }), h.promise.cancel = function () {
            i && d.unbind(i, j), h.reject("Transition cancelled")
        }, h.promise
    }, f = document.createElement("trans"), g = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}, h = {WebkitTransition: "webkitAnimationEnd", MozTransition: "animationend", OTransition: "oAnimationEnd", transition: "animationend"};
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function (a) {
    return{link: function (b, c, d) {
        function e(b) {
            function d() {
                j === e && (j = void 0)
            }

            var e = a(c, b);
            return j && j.cancel(), j = e, e.then(d, d), e
        }

        function f() {
            k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({height: c[0].scrollHeight + "px"}).then(g))
        }

        function g() {
            c.removeClass("collapsing"), c.addClass("collapse in"), c.css({height: "auto"})
        }

        function h() {
            k ? (k = !1, i(), c.css({height: 0})) : (c.css({height: c[0].scrollHeight + "px"}), c[0].offsetWidth, c.removeClass("collapse in").addClass("collapsing"), e({height: 0}).then(i))
        }

        function i() {
            c.removeClass("collapsing"), c.addClass("collapse")
        }

        var j, k = !0;
        b.$watch(d.collapse, function (a) {
            a ? h() : f()
        })
    }}
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (a, b, c) {
    this.groups = [], this.closeOthers = function (d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function (a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function (a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function () {
            b.removeGroup(a)
        })
    }, this.removeGroup = function (a) {
        var b = this.groups.indexOf(a);
        -1 !== b && this.groups.splice(this.groups.indexOf(a), 1)
    }
}]).directive("accordion", function () {
    return{restrict: "EA", controller: "AccordionController", transclude: !0, replace: !1, templateUrl: "template/accordion/accordion.html"}
}).directive("accordionGroup", ["$parse", function (a) {
    return{require: "^accordion", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/accordion/accordion-group.html", scope: {heading: "@"}, controller: function () {
        this.setHeading = function (a) {
            this.heading = a
        }
    }, link: function (b, c, d, e) {
        var f, g;
        e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$parent.$watch(f, function (a) {
            b.isOpen = !!a
        })), b.$watch("isOpen", function (a) {
            a && e.closeOthers(b), g && g(b.$parent, a)
        })
    }}
}]).directive("accordionHeading", function () {
    return{restrict: "EA", transclude: !0, template: "", replace: !0, require: "^accordionGroup", compile: function (a, b, c) {
        return function (a, b, d, e) {
            e.setHeading(c(a, function () {
            }))
        }
    }}
}).directive("accordionTransclude", function () {
    return{require: "^accordionGroup", link: function (a, b, c, d) {
        a.$watch(function () {
            return d[c.accordionTransclude]
        }, function (a) {
            a && (b.html(""), b.append(a))
        })
    }}
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (a, b) {
    a.closeable = "close"in b
}]).directive("alert", function () {
    return{restrict: "EA", controller: "AlertController", templateUrl: "template/alert/alert.html", transclude: !0, replace: !0, scope: {type: "=", close: "&"}}
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
    return function (a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {activeClass: "active", toggleEvent: "click"}).controller("ButtonsController", ["buttonConfig", function (a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function () {
    return{require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
        var e = d[0], f = d[1];
        f.$render = function () {
            b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
        }, b.bind(e.toggleEvent, function () {
            b.hasClass(e.activeClass) || a.$apply(function () {
                f.$setViewValue(a.$eval(c.btnRadio)), f.$render()
            })
        })
    }}
}).directive("btnCheckbox", function () {
    return{require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
        function e() {
            return g(c.btnCheckboxTrue, !0)
        }

        function f() {
            return g(c.btnCheckboxFalse, !1)
        }

        function g(b, c) {
            var d = a.$eval(b);
            return angular.isDefined(d) ? d : c
        }

        var h = d[0], i = d[1];
        i.$render = function () {
            b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
        }, b.bind(h.toggleEvent, function () {
            a.$apply(function () {
                i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
            })
        })
    }}
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", "$q", function (a, b, c) {
    function d() {
        e();
        var c = +a.interval;
        !isNaN(c) && c >= 0 && (g = b(f, c))
    }

    function e() {
        g && (b.cancel(g), g = null)
    }

    function f() {
        h ? (a.next(), d()) : a.pause()
    }

    var g, h, i = this, j = i.slides = [], k = -1;
    i.currentSlide = null;
    var l = !1;
    i.select = function (e, f) {
        function g() {
            l || (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element ? (e.$element.addClass(f), e.$element[0].offsetWidth, angular.forEach(j, function (a) {
                angular.extend(a, {direction: "", entering: !1, leaving: !1, active: !1})
            }), angular.extend(e, {direction: f, active: !0, entering: !0}), angular.extend(i.currentSlide || {}, {direction: f, leaving: !0}), a.$currentTransition = c(e.$element, {}), function (b, c) {
                a.$currentTransition.then(function () {
                    h(b, c)
                }, function () {
                    h(b, c)
                })
            }(e, i.currentSlide)) : h(e, i.currentSlide), i.currentSlide = e, k = m, d())
        }

        function h(b, c) {
            angular.extend(b, {direction: "", active: !0, leaving: !1, entering: !1}), angular.extend(c || {}, {direction: "", active: !1, leaving: !1, entering: !1}), a.$currentTransition = null
        }

        var m = j.indexOf(e);
        void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
    }, a.$on("$destroy", function () {
        l = !0
    }), i.indexOfSlide = function (a) {
        return j.indexOf(a)
    }, a.next = function () {
        var b = (k + 1) % j.length;
        return a.$currentTransition ? void 0 : i.select(j[b], "next")
    }, a.prev = function () {
        var b = 0 > k - 1 ? j.length - 1 : k - 1;
        return a.$currentTransition ? void 0 : i.select(j[b], "prev")
    }, a.select = function (a) {
        i.select(a)
    }, a.isActive = function (a) {
        return i.currentSlide === a
    }, a.slides = function () {
        return j
    }, a.$watch("interval", d), a.$on("$destroy", e), a.play = function () {
        h || (h = !0, d())
    }, a.pause = function () {
        a.noPause || (h = !1, e())
    }, i.addSlide = function (b, c) {
        b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
    }, i.removeSlide = function (a) {
        var b = j.indexOf(a);
        j.splice(b, 1), j.length > 0 && a.active ? i.select(b >= j.length ? j[b - 1] : j[b]) : k > b && k--
    }
}]).directive("carousel", [function () {
    return{restrict: "EA", transclude: !0, replace: !0, controller: "CarouselController", require: "carousel", templateUrl: "template/carousel/carousel.html", scope: {interval: "=", noTransition: "=", noPause: "="}}
}]).directive("slide", ["$parse", function (a) {
    return{require: "^carousel", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/carousel/slide.html", scope: {}, link: function (b, c, d, e) {
        if (d.active) {
            var f = a(d.active), g = f.assign, h = b.active = f(b.$parent);
            b.$watch(function () {
                var a = f(b.$parent);
                return a !== b.active && (a !== h ? h = b.active = a : g(b.$parent, a = h = b.active)), a
            })
        }
        e.addSlide(b, c), b.$on("$destroy", function () {
            e.removeSlide(b)
        }), b.$watch("active", function (a) {
            a && e.select(b)
        })
    }}
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return"static" === (c(a, "position") || "static")
    }

    var e = function (b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)e = e.offsetParent;
        return e || c
    };
    return{position: function (b) {
        var c = this.offset(b), d = {top: 0, left: 0}, f = e(b[0]);
        f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
        var g = b[0].getBoundingClientRect();
        return{width: g.width || b.prop("offsetWidth"), height: g.height || b.prop("offsetHeight"), top: c.top - d.top, left: c.left - d.left}
    }, offset: function (c) {
        var d = c[0].getBoundingClientRect();
        return{width: d.width || c.prop("offsetWidth"), height: d.height || c.prop("offsetHeight"), top: d.top + (b.pageYOffset || a[0].body.scrollTop || a[0].documentElement.scrollTop), left: d.left + (b.pageXOffset || a[0].body.scrollLeft || a[0].documentElement.scrollLeft)}
    }}
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.position"]).constant("datepickerConfig", {dayFormat: "dd", monthFormat: "MMMM", yearFormat: "yyyy", dayHeaderFormat: "EEE", dayTitleFormat: "MMMM yyyy", monthTitleFormat: "yyyy", showWeeks: !0, startingDay: 0, yearRange: 20, minDate: null, maxDate: null}).controller("DatepickerController", ["$scope", "$attrs", "dateFilter", "datepickerConfig", function (a, b, c, d) {
    function e(b, c) {
        return angular.isDefined(b) ? a.$parent.$eval(b) : c
    }

    function f(a, b) {
        return new Date(a, b, 0).getDate()
    }

    function g(a, b) {
        for (var c = new Array(b), d = a, e = 0; b > e;)c[e++] = new Date(d), d.setDate(d.getDate() + 1);
        return c
    }

    function h(a, b, d, e) {
        return{date: a, label: c(a, b), selected: !!d, secondary: !!e}
    }

    var i = {day: e(b.dayFormat, d.dayFormat), month: e(b.monthFormat, d.monthFormat), year: e(b.yearFormat, d.yearFormat), dayHeader: e(b.dayHeaderFormat, d.dayHeaderFormat), dayTitle: e(b.dayTitleFormat, d.dayTitleFormat), monthTitle: e(b.monthTitleFormat, d.monthTitleFormat)}, j = e(b.startingDay, d.startingDay), k = e(b.yearRange, d.yearRange);
    this.minDate = d.minDate ? new Date(d.minDate) : null, this.maxDate = d.maxDate ? new Date(d.maxDate) : null, this.modes = [
        {name: "day", getVisibleDates: function (a, b) {
            var d = a.getFullYear(), e = a.getMonth(), k = new Date(d, e, 1), l = j - k.getDay(), m = l > 0 ? 7 - l : -l, n = new Date(k), o = 0;
            m > 0 && (n.setDate(-m + 1), o += m), o += f(d, e + 1), o += (7 - o % 7) % 7;
            for (var p = g(n, o), q = new Array(7), r = 0; o > r; r++) {
                var s = new Date(p[r]);
                p[r] = h(s, i.day, b && b.getDate() === s.getDate() && b.getMonth() === s.getMonth() && b.getFullYear() === s.getFullYear(), s.getMonth() !== e)
            }
            for (var t = 0; 7 > t; t++)q[t] = c(p[t].date, i.dayHeader);
            return{objects: p, title: c(a, i.dayTitle), labels: q}
        }, compare: function (a, b) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
        }, split: 7, step: {months: 1}},
        {name: "month", getVisibleDates: function (a, b) {
            for (var d = new Array(12), e = a.getFullYear(), f = 0; 12 > f; f++) {
                var g = new Date(e, f, 1);
                d[f] = h(g, i.month, b && b.getMonth() === f && b.getFullYear() === e)
            }
            return{objects: d, title: c(a, i.monthTitle)}
        }, compare: function (a, b) {
            return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
        }, split: 3, step: {years: 1}},
        {name: "year", getVisibleDates: function (a, b) {
            for (var c = new Array(k), d = a.getFullYear(), e = parseInt((d - 1) / k, 10) * k + 1, f = 0; k > f; f++) {
                var g = new Date(e + f, 0, 1);
                c[f] = h(g, i.year, b && b.getFullYear() === g.getFullYear())
            }
            return{objects: c, title: [c[0].label, c[k - 1].label].join(" - ")}
        }, compare: function (a, b) {
            return a.getFullYear() - b.getFullYear()
        }, split: 5, step: {years: k}}
    ], this.isDisabled = function (b, c) {
        var d = this.modes[c || 0];
        return this.minDate && d.compare(b, this.minDate) < 0 || this.maxDate && d.compare(b, this.maxDate) > 0 || a.dateDisabled && a.dateDisabled({date: b, mode: d.name})
    }
}]).directive("datepicker", ["dateFilter", "$parse", "datepickerConfig", "$log", function (a, b, c, d) {
    return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/datepicker.html", scope: {dateDisabled: "&"}, require: ["datepicker", "?^ngModel"], controller: "DatepickerController", link: function (a, e, f, g) {
        function h() {
            a.showWeekNumbers = 0 === o && q
        }

        function i(a, b) {
            for (var c = []; a.length > 0;)c.push(a.splice(0, b));
            return c
        }

        function j(b) {
            var c = null, e = !0;
            n.$modelValue && (c = new Date(n.$modelValue), isNaN(c) ? (e = !1, d.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : b && (p = c)), n.$setValidity("date", e);
            var f = m.modes[o], g = f.getVisibleDates(p, c);
            angular.forEach(g.objects, function (a) {
                a.disabled = m.isDisabled(a.date, o)
            }), n.$setValidity("date-disabled", !c || !m.isDisabled(c)), a.rows = i(g.objects, f.split), a.labels = g.labels || [], a.title = g.title
        }

        function k(a) {
            o = a, h(), j()
        }

        function l(a) {
            var b = new Date(a);
            b.setDate(b.getDate() + 4 - (b.getDay() || 7));
            var c = b.getTime();
            return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
        }

        var m = g[0], n = g[1];
        if (n) {
            var o = 0, p = new Date, q = c.showWeeks;
            f.showWeeks ? a.$parent.$watch(b(f.showWeeks), function (a) {
                q = !!a, h()
            }) : h(), f.min && a.$parent.$watch(b(f.min), function (a) {
                m.minDate = a ? new Date(a) : null, j()
            }), f.max && a.$parent.$watch(b(f.max), function (a) {
                m.maxDate = a ? new Date(a) : null, j()
            }), n.$render = function () {
                j(!0)
            }, a.select = function (a) {
                if (0 === o) {
                    var b = n.$modelValue ? new Date(n.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                    b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), n.$setViewValue(b), j(!0)
                } else p = a, k(o - 1)
            }, a.move = function (a) {
                var b = m.modes[o].step;
                p.setMonth(p.getMonth() + a * (b.months || 0)), p.setFullYear(p.getFullYear() + a * (b.years || 0)), j()
            }, a.toggleMode = function () {
                k((o + 1) % m.modes.length)
            }, a.getWeekNumber = function (b) {
                return 0 === o && a.showWeekNumbers && 7 === b.length ? l(b[0].date) : null
            }
        }
    }}
}]).constant("datepickerPopupConfig", {dateFormat: "yyyy-MM-dd", currentText: "Today", toggleWeeksText: "Weeks", clearText: "Clear", closeText: "Done", closeOnDateSelection: !0, appendToBody: !1, showButtonBar: !0}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "datepickerPopupConfig", "datepickerConfig", function (a, b, c, d, e, f, g) {
    return{restrict: "EA", require: "ngModel", link: function (h, i, j, k) {
        function l(a) {
            u ? u(h, !!a) : q.isOpen = !!a
        }

        function m(a) {
            if (a) {
                if (angular.isDate(a))return k.$setValidity("date", !0), a;
                if (angular.isString(a)) {
                    var b = new Date(a);
                    return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                }
                return void k.$setValidity("date", !1)
            }
            return k.$setValidity("date", !0), null
        }

        function n(a, c, d) {
            a && (h.$watch(b(a), function (a) {
                q[c] = a
            }), y.attr(d || c, c))
        }

        function o() {
            q.position = s ? d.offset(i) : d.position(i), q.position.top = q.position.top + i.prop("offsetHeight")
        }

        var p, q = h.$new(), r = angular.isDefined(j.closeOnDateSelection) ? h.$eval(j.closeOnDateSelection) : f.closeOnDateSelection, s = angular.isDefined(j.datepickerAppendToBody) ? h.$eval(j.datepickerAppendToBody) : f.appendToBody;
        j.$observe("datepickerPopup", function (a) {
            p = a || f.dateFormat, k.$render()
        }), q.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$eval(j.showButtonBar) : f.showButtonBar, h.$on("$destroy", function () {
            C.remove(), q.$destroy()
        }), j.$observe("currentText", function (a) {
            q.currentText = angular.isDefined(a) ? a : f.currentText
        }), j.$observe("toggleWeeksText", function (a) {
            q.toggleWeeksText = angular.isDefined(a) ? a : f.toggleWeeksText
        }), j.$observe("clearText", function (a) {
            q.clearText = angular.isDefined(a) ? a : f.clearText
        }), j.$observe("closeText", function (a) {
            q.closeText = angular.isDefined(a) ? a : f.closeText
        });
        var t, u;
        j.isOpen && (t = b(j.isOpen), u = t.assign, h.$watch(t, function (a) {
            q.isOpen = !!a
        })), q.isOpen = t ? t(h) : !1;
        var v = function (a) {
            q.isOpen && a.target !== i[0] && q.$apply(function () {
                l(!1)
            })
        }, w = function () {
            q.$apply(function () {
                l(!0)
            })
        }, x = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
        x.attr({"ng-model": "date", "ng-change": "dateSelection()"});
        var y = angular.element(x.children()[0]), z = {};
        j.datepickerOptions && (z = h.$eval(j.datepickerOptions), y.attr(angular.extend({}, z))), k.$parsers.unshift(m), q.dateSelection = function (a) {
            angular.isDefined(a) && (q.date = a), k.$setViewValue(q.date), k.$render(), r && l(!1)
        }, i.bind("input change keyup", function () {
            q.$apply(function () {
                q.date = k.$modelValue
            })
        }), k.$render = function () {
            var a = k.$viewValue ? e(k.$viewValue, p) : "";
            i.val(a), q.date = k.$modelValue
        }, n(j.min, "min"), n(j.max, "max"), j.showWeeks ? n(j.showWeeks, "showWeeks", "show-weeks") : (q.showWeeks = "show-weeks"in z ? z["show-weeks"] : g.showWeeks, y.attr("show-weeks", "showWeeks")), j.dateDisabled && y.attr("date-disabled", j.dateDisabled);
        var A = !1, B = !1;
        q.$watch("isOpen", function (a) {
            a ? (o(), c.bind("click", v), B && i.unbind("focus", w), i[0].focus(), A = !0) : (A && c.unbind("click", v), i.bind("focus", w), B = !0), u && u(h, a)
        }), q.today = function () {
            q.dateSelection(new Date)
        }, q.clear = function () {
            q.dateSelection(null)
        };
        var C = a(x)(q);
        s ? c.find("body").append(C) : i.after(C)
    }}
}]).directive("datepickerPopupWrap", function () {
    return{restrict: "EA", replace: !0, transclude: !0, templateUrl: "template/datepicker/popup.html", link: function (a, b) {
        b.bind("click", function (a) {
            a.preventDefault(), a.stopPropagation()
        })
    }}
}), angular.module("ui.bootstrap.dropdownToggle", []).directive("dropdownToggle", ["$document", "$location", function (a) {
    var b = null, c = angular.noop;
    return{restrict: "CA", link: function (d, e) {
        d.$watch("$location.path", function () {
            c()
        }), e.parent().bind("click", function () {
            c()
        }), e.bind("click", function (d) {
            var f = e === b;
            d.preventDefault(), d.stopPropagation(), b && c(), f || e.hasClass("disabled") || e.prop("disabled") || (e.parent().addClass("open"), b = e, c = function (d) {
                d && (d.preventDefault(), d.stopPropagation()), a.unbind("click", c), e.parent().removeClass("open"), c = angular.noop, b = null
            }, a.bind("click", c))
        })
    }}
}]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
    return{createNew: function () {
        var a = [];
        return{add: function (b, c) {
            a.push({key: b, value: c})
        }, get: function (b) {
            for (var c = 0; c < a.length; c++)if (b == a[c].key)return a[c]
        }, keys: function () {
            for (var b = [], c = 0; c < a.length; c++)b.push(a[c].key);
            return b
        }, top: function () {
            return a[a.length - 1]
        }, remove: function (b) {
            for (var c = -1, d = 0; d < a.length; d++)if (b == a[d].key) {
                c = d;
                break
            }
            return a.splice(c, 1)[0]
        }, removeTop: function () {
            return a.splice(a.length - 1, 1)[0]
        }, length: function () {
            return a.length
        }}
    }}
}).directive("modalBackdrop", ["$timeout", function (a) {
    return{restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function (b) {
        b.animate = !1, a(function () {
            b.animate = !0
        })
    }}
}]).directive("modalWindow", ["$modalStack", "$timeout", function (a, b) {
    return{restrict: "EA", scope: {index: "@", animate: "="}, replace: !0, transclude: !0, templateUrl: "template/modal/window.html", link: function (c, d, e) {
        c.windowClass = e.windowClass || "", b(function () {
            c.animate = !0, d[0].focus()
        }), c.close = function (b) {
            var c = a.getTop();
            c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
        }
    }}
}]).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (a, b, c, d, e, f) {
    function g() {
        for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)n.get(b[c]).value.backdrop && (a = c);
        return a
    }

    function h(a) {
        var b = c.find("body").eq(0), d = n.get(a).value;
        n.remove(a), j(d.modalDomEl, d.modalScope, 300, i), b.toggleClass(m, n.length() > 0)
    }

    function i() {
        if (k && -1 == g()) {
            var a = l;
            j(k, l, 150, function () {
                a.$destroy(), a = null
            }), k = void 0, l = void 0
        }
    }

    function j(c, d, e, f) {
        function g() {
            g.done || (g.done = !0, c.remove(), f && f())
        }

        d.animate = !1;
        var h = a.transitionEndEventName;
        if (h) {
            var i = b(g, e);
            c.bind(h, function () {
                b.cancel(i), g(), d.$apply()
            })
        } else b(g, 0)
    }

    var k, l, m = "modal-open", n = f.createNew(), o = {};
    return e.$watch(g, function (a) {
        l && (l.index = a)
    }), c.bind("keydown", function (a) {
        var b;
        27 === a.which && (b = n.top(), b && b.value.keyboard && e.$apply(function () {
            o.dismiss(b.key)
        }))
    }), o.open = function (a, b) {
        n.add(a, {deferred: b.deferred, modalScope: b.scope, backdrop: b.backdrop, keyboard: b.keyboard});
        var f = c.find("body").eq(0), h = g();
        h >= 0 && !k && (l = e.$new(!0), l.index = h, k = d("<div modal-backdrop></div>")(l), f.append(k));
        var i = angular.element("<div modal-window></div>");
        i.attr("window-class", b.windowClass), i.attr("index", n.length() - 1), i.attr("animate", "animate"), i.html(b.content);
        var j = d(i)(b.scope);
        n.top().value.modalDomEl = j, f.append(j), f.addClass(m)
    }, o.close = function (a, b) {
        var c = n.get(a).value;
        c && (c.deferred.resolve(b), h(a))
    }, o.dismiss = function (a, b) {
        var c = n.get(a).value;
        c && (c.deferred.reject(b), h(a))
    }, o.dismissAll = function (a) {
        for (var b = this.getTop(); b;)this.dismiss(b.key, a), b = this.getTop()
    }, o.getTop = function () {
        return n.top()
    }, o
}]).provider("$modal", function () {
    var a = {options: {backdrop: !0, keyboard: !0}, $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function (b, c, d, e, f, g, h) {
        function i(a) {
            return a.template ? d.when(a.template) : e.get(a.templateUrl, {cache: f}).then(function (a) {
                return a.data
            })
        }

        function j(a) {
            var c = [];
            return angular.forEach(a, function (a) {
                (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
            }), c
        }

        var k = {};
        return k.open = function (b) {
            var e = d.defer(), f = d.defer(), k = {result: e.promise, opened: f.promise, close: function (a) {
                h.close(k, a)
            }, dismiss: function (a) {
                h.dismiss(k, a)
            }};
            if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)throw new Error("One of template or templateUrl options is required.");
            var l = d.all([i(b)].concat(j(b.resolve)));
            return l.then(function (a) {
                var d = (b.scope || c).$new();
                d.$close = k.close, d.$dismiss = k.dismiss;
                var f, i = {}, j = 1;
                b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
                    i[c] = a[j++]
                }), f = g(b.controller, i)), h.open(k, {scope: d, deferred: e, content: a[0], backdrop: b.backdrop, keyboard: b.keyboard, windowClass: b.windowClass})
            }, function (a) {
                e.reject(a)
            }), l.then(function () {
                f.resolve(!0)
            }, function () {
                f.reject(!1)
            }), k
        }, k
    }]};
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", "$interpolate", function (a, b, c, d) {
    var e = this, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function (d) {
        b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
            e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages()
        }) : this.itemsPerPage = d
    }, this.noPrevious = function () {
        return 1 === this.page
    }, this.noNext = function () {
        return this.page === a.totalPages
    }, this.isActive = function (a) {
        return this.page === a
    }, this.calculateTotalPages = function () {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1)
    }, this.getAttributeValue = function (b, c, e) {
        return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c
    }, this.render = function () {
        this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages))
    }, a.selectPage = function (b) {
        !e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({page: b}))
    }, a.$watch("page", function () {
        e.render()
    }), a.$watch("totalItems", function () {
        a.totalPages = e.calculateTotalPages()
    }), a.$watch("totalPages", function (b) {
        f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render()
    })
}]).constant("paginationConfig", {itemsPerPage: 10, boundaryLinks: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0}).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
    return{restrict: "EA", scope: {page: "=", totalItems: "=", onSelectPage: " &"}, controller: "PaginationController", templateUrl: "template/pagination/pagination.html", replace: !0, link: function (c, d, e, f) {
        function g(a, b, c, d) {
            return{number: a, text: b, active: c, disabled: d}
        }

        var h, i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks), j = f.getAttributeValue(e.directionLinks, b.directionLinks), k = f.getAttributeValue(e.firstText, b.firstText, !0), l = f.getAttributeValue(e.previousText, b.previousText, !0), m = f.getAttributeValue(e.nextText, b.nextText, !0), n = f.getAttributeValue(e.lastText, b.lastText, !0), o = f.getAttributeValue(e.rotate, b.rotate);
        f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
            h = parseInt(a, 10), f.render()
        }), f.getPages = function (a, b) {
            var c = [], d = 1, e = b, p = angular.isDefined(h) && b > h;
            p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));
            for (var q = d; e >= q; q++) {
                var r = g(q, q, f.isActive(q), !1);
                c.push(r)
            }
            if (p && !o) {
                if (d > 1) {
                    var s = g(d - 1, "...", !1, !1);
                    c.unshift(s)
                }
                if (b > e) {
                    var t = g(e + 1, "...", !1, !1);
                    c.push(t)
                }
            }
            if (j) {
                var u = g(a - 1, l, !1, f.noPrevious());
                c.unshift(u);
                var v = g(a + 1, m, !1, f.noNext());
                c.push(v)
            }
            if (i) {
                var w = g(1, k, !1, f.noPrevious());
                c.unshift(w);
                var x = g(b, n, !1, f.noNext());
                c.push(x)
            }
            return c
        }
    }}
}]).constant("pagerConfig", {itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0}).directive("pager", ["pagerConfig", function (a) {
    return{restrict: "EA", scope: {page: "=", totalItems: "=", onSelectPage: " &"}, controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function (b, c, d, e) {
        function f(a, b, c, d, e) {
            return{number: a, text: b, disabled: c, previous: i && d, next: i && e}
        }

        var g = e.getAttributeValue(d.previousText, a.previousText, !0), h = e.getAttributeValue(d.nextText, a.nextText, !0), i = e.getAttributeValue(d.align, a.align);
        e.init(a.itemsPerPage), e.getPages = function (a) {
            return[f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0)]
        }
    }}
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
    function a(a) {
        var b = /[A-Z]/g, c = "-";
        return a.replace(b, function (a, b) {
            return(b ? c : "") + a.toLowerCase()
        })
    }

    var b = {placement: "top", animation: !0, popupDelay: 0}, c = {mouseenter: "mouseleave", click: "click", focus: "blur"}, d = {};
    this.options = function (a) {
        angular.extend(d, a)
    }, this.setTriggers = function (a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function (e, f, g, h, i, j, k) {
        return function (e, l, m) {
            function n(a) {
                var b = a || o.trigger || m, d = c[b] || b;
                return{show: b, hide: d}
            }

            var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
            return{restrict: "EA", scope: !0, compile: function () {
                var a = f(s);
                return function (b, c, d) {
                    function f() {
                        b.tt_isOpen ? m() : k()
                    }

                    function k() {
                        (!z || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? (v = g(p, b.tt_popupDelay, !1), v.then(function (a) {
                            a()
                        })) : p()())
                    }

                    function m() {
                        b.$apply(function () {
                            q()
                        })
                    }

                    function p() {
                        return b.tt_content ? (r(), u && g.cancel(u), t.css({top: 0, left: 0, display: "block"}), w ? i.find("body").append(t) : c.after(t), A(), b.tt_isOpen = !0, b.$digest(), A) : angular.noop
                    }

                    function q() {
                        b.tt_isOpen = !1, g.cancel(v), b.tt_animation ? u = g(s, 500) : s()
                    }

                    function r() {
                        t && s(), t = a(b, function () {
                        }), b.$digest()
                    }

                    function s() {
                        t && (t.remove(), t = null)
                    }

                    var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = !1, z = angular.isDefined(d[l + "Enable"]), A = function () {
                        var a, d, e, f;
                        switch (a = w ? j.offset(c) : j.position(c), d = t.prop("offsetWidth"), e = t.prop("offsetHeight"), b.tt_placement) {
                            case"right":
                                f = {top: a.top + a.height / 2 - e / 2, left: a.left + a.width};
                                break;
                            case"bottom":
                                f = {top: a.top + a.height, left: a.left + a.width / 2 - d / 2};
                                break;
                            case"left":
                                f = {top: a.top + a.height / 2 - e / 2, left: a.left - d};
                                break;
                            default:
                                f = {top: a.top - e, left: a.left + a.width / 2 - d / 2}
                        }
                        f.top += "px", f.left += "px", t.css(f)
                    };
                    b.tt_isOpen = !1, d.$observe(e, function (a) {
                        b.tt_content = a, !a && b.tt_isOpen && q()
                    }), d.$observe(l + "Title", function (a) {
                        b.tt_title = a
                    }), d.$observe(l + "Placement", function (a) {
                        b.tt_placement = angular.isDefined(a) ? a : o.placement
                    }), d.$observe(l + "PopupDelay", function (a) {
                        var c = parseInt(a, 10);
                        b.tt_popupDelay = isNaN(c) ? o.popupDelay : c
                    });
                    var B = function () {
                        y && (c.unbind(x.show, k), c.unbind(x.hide, m))
                    };
                    d.$observe(l + "Trigger", function (a) {
                        B(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m)), y = !0
                    });
                    var C = b.$eval(d[l + "Animation"]);
                    b.tt_animation = angular.isDefined(C) ? !!C : o.animation, d.$observe(l + "AppendToBody", function (a) {
                        w = angular.isDefined(a) ? h(a)(b) : w
                    }), w && b.$on("$locationChangeSuccess", function () {
                        b.tt_isOpen && q()
                    }), b.$on("$destroy", function () {
                        g.cancel(u), g.cancel(v), B(), s()
                    })
                }
            }}
        }
    }]
}).directive("tooltipPopup", function () {
    return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-popup.html"}
}).directive("tooltip", ["$tooltip", function (a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function () {
    return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"}
}).directive("tooltipHtmlUnsafe", ["$tooltip", function (a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
    return{restrict: "EA", replace: !0, scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/popover/popover.html"}
}).directive("popover", ["$tooltip", function (a) {
    return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", ["ui.bootstrap.transition"]).constant("progressConfig", {animate: !0, max: 100}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", "$transition", function (a, b, c, d) {
    var e = this, f = [], g = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, h = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.addBar = function (a, b) {
        var c = 0, d = a.$parent.$index;
        angular.isDefined(d) && f[d] && (c = f[d].value), f.push(a), this.update(b, a.value, c), a.$watch("value", function (a, c) {
            a !== c && e.update(b, a, c)
        }), a.$on("$destroy", function () {
            e.removeBar(a)
        })
    }, this.update = function (a, b, c) {
        var e = this.getPercentage(b);
        h ? (a.css("width", this.getPercentage(c) + "%"), d(a, {width: e + "%"})) : a.css({transition: "none", width: e + "%"})
    }, this.removeBar = function (a) {
        f.splice(f.indexOf(a), 1)
    }, this.getPercentage = function (a) {
        return Math.round(100 * a / g)
    }
}]).directive("progress", function () {
    return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", require: "progress", scope: {}, template: '<div class="progress" ng-transclude></div>'}
}).directive("bar", function () {
    return{restrict: "EA", replace: !0, transclude: !0, require: "^progress", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/bar.html", link: function (a, b, c, d) {
        d.addBar(a, b)
    }}
}).directive("progressbar", function () {
    return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/progressbar.html", link: function (a, b, c, d) {
        d.addBar(a, angular.element(b.children()[0]))
    }}
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {max: 5, stateOn: null, stateOff: null}).controller("RatingController", ["$scope", "$attrs", "$parse", "ratingConfig", function (a, b, c, d) {
    this.maxRange = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : d.max, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : d.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : d.stateOff, this.createRateObjects = function (a) {
        for (var b = {stateOn: this.stateOn, stateOff: this.stateOff}, c = 0, d = a.length; d > c; c++)a[c] = angular.extend({index: c}, b, a[c]);
        return a
    }, a.range = this.createRateObjects(angular.isDefined(b.ratingStates) ? angular.copy(a.$parent.$eval(b.ratingStates)) : new Array(this.maxRange)), a.rate = function (b) {
        a.value === b || a.readonly || (a.value = b)
    }, a.enter = function (b) {
        a.readonly || (a.val = b), a.onHover({value: b})
    }, a.reset = function () {
        a.val = angular.copy(a.value), a.onLeave()
    }, a.$watch("value", function (b) {
        a.val = b
    }), a.readonly = !1, b.readonly && a.$parent.$watch(c(b.readonly), function (b) {
        a.readonly = !!b
    })
}]).directive("rating", function () {
    return{restrict: "EA", scope: {value: "=", onHover: "&", onLeave: "&"}, controller: "RatingController", templateUrl: "template/rating/rating.html", replace: !0}
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function (a) {
        angular.forEach(c, function (a) {
            a.active = !1
        }), a.active = !0
    }, b.addTab = function (a) {
        c.push(a), (1 === c.length || a.active) && b.select(a)
    }, b.removeTab = function (a) {
        var d = c.indexOf(a);
        if (a.active && c.length > 1) {
            var e = d == c.length - 1 ? d - 1 : d + 1;
            b.select(c[e])
        }
        c.splice(d, 1)
    }
}]).directive("tabset", function () {
    return{restrict: "EA", transclude: !0, replace: !0, scope: {}, controller: "TabsetController", templateUrl: "template/tabs/tabset.html", link: function (a, b, c) {
        a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1, a.type = angular.isDefined(c.type) ? a.$parent.$eval(c.type) : "tabs"
    }}
}).directive("tab", ["$parse", function (a) {
    return{require: "^tabset", restrict: "EA", replace: !0, templateUrl: "template/tabs/tab.html", transclude: !0, scope: {heading: "@", onSelect: "&select", onDeselect: "&deselect"}, controller: function () {
    }, compile: function (b, c, d) {
        return function (b, c, e, f) {
            var g, h;
            e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function (a, c) {
                a !== c && (b.active = !!a)
            }), b.active = g(b.$parent)) : h = g = angular.noop, b.$watch("active", function (a) {
                h(b.$parent, a), a ? (f.select(b), b.onSelect()) : b.onDeselect()
            }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
                b.disabled = !!a
            }), b.select = function () {
                b.disabled || (b.active = !0)
            }, f.addTab(b), b.$on("$destroy", function () {
                f.removeTab(b)
            }), b.$transcludeFn = d
        }
    }}
}]).directive("tabHeadingTransclude", [function () {
    return{restrict: "A", require: "^tab", link: function (a, b) {
        a.$watch("headingElement", function (a) {
            a && (b.html(""), b.append(a))
        })
    }}
}]).directive("tabContentTransclude", function () {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }

    return{restrict: "A", require: "^tabset", link: function (b, c, d) {
        var e = b.$eval(d.tabContentTransclude);
        e.$transcludeFn(e.$parent, function (b) {
            angular.forEach(b, function (b) {
                a(b) ? e.headingElement = b : c.append(b)
            })
        })
    }}
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {hourStep: 1, minuteStep: 1, showMeridian: !0, meridians: null, readonlyInput: !1, mousewheel: !0}).directive("timepicker", ["$parse", "$log", "timepickerConfig", "$locale", function (a, b, c, d) {
    return{restrict: "EA", require: "?^ngModel", replace: !0, scope: {}, templateUrl: "template/timepicker/timepicker.html", link: function (e, f, g, h) {
        function i() {
            var a = parseInt(e.hours, 10), b = e.showMeridian ? a > 0 && 13 > a : a >= 0 && 24 > a;
            return b ? (e.showMeridian && (12 === a && (a = 0), e.meridian === q[1] && (a += 12)), a) : void 0
        }

        function j() {
            var a = parseInt(e.minutes, 10);
            return a >= 0 && 60 > a ? a : void 0
        }

        function k(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }

        function l(a) {
            m(), h.$setViewValue(new Date(p)), n(a)
        }

        function m() {
            h.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1
        }

        function n(a) {
            var b = p.getHours(), c = p.getMinutes();
            e.showMeridian && (b = 0 === b || 12 === b ? 12 : b % 12), e.hours = "h" === a ? b : k(b), e.minutes = "m" === a ? c : k(c), e.meridian = p.getHours() < 12 ? q[0] : q[1]
        }

        function o(a) {
            var b = new Date(p.getTime() + 6e4 * a);
            p.setHours(b.getHours(), b.getMinutes()), l()
        }

        if (h) {
            var p = new Date, q = angular.isDefined(g.meridians) ? e.$parent.$eval(g.meridians) : c.meridians || d.DATETIME_FORMATS.AMPMS, r = c.hourStep;
            g.hourStep && e.$parent.$watch(a(g.hourStep), function (a) {
                r = parseInt(a, 10)
            });
            var s = c.minuteStep;
            g.minuteStep && e.$parent.$watch(a(g.minuteStep), function (a) {
                s = parseInt(a, 10)
            }), e.showMeridian = c.showMeridian, g.showMeridian && e.$parent.$watch(a(g.showMeridian), function (a) {
                if (e.showMeridian = !!a, h.$error.time) {
                    var b = i(), c = j();
                    angular.isDefined(b) && angular.isDefined(c) && (p.setHours(b), l())
                } else n()
            });
            var t = f.find("input"), u = t.eq(0), v = t.eq(1), w = angular.isDefined(g.mousewheel) ? e.$eval(g.mousewheel) : c.mousewheel;
            if (w) {
                var x = function (a) {
                    a.originalEvent && (a = a.originalEvent);
                    var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                    return a.detail || b > 0
                };
                u.bind("mousewheel wheel", function (a) {
                    e.$apply(x(a) ? e.incrementHours() : e.decrementHours()), a.preventDefault()
                }), v.bind("mousewheel wheel", function (a) {
                    e.$apply(x(a) ? e.incrementMinutes() : e.decrementMinutes()), a.preventDefault()
                })
            }
            if (e.readonlyInput = angular.isDefined(g.readonlyInput) ? e.$eval(g.readonlyInput) : c.readonlyInput, e.readonlyInput)e.updateHours = angular.noop, e.updateMinutes = angular.noop; else {
                var y = function (a, b) {
                    h.$setViewValue(null), h.$setValidity("time", !1), angular.isDefined(a) && (e.invalidHours = a), angular.isDefined(b) && (e.invalidMinutes = b)
                };
                e.updateHours = function () {
                    var a = i();
                    angular.isDefined(a) ? (p.setHours(a), l("h")) : y(!0)
                }, u.bind("blur", function () {
                    !e.validHours && e.hours < 10 && e.$apply(function () {
                        e.hours = k(e.hours)
                    })
                }), e.updateMinutes = function () {
                    var a = j();
                    angular.isDefined(a) ? (p.setMinutes(a), l("m")) : y(void 0, !0)
                }, v.bind("blur", function () {
                    !e.invalidMinutes && e.minutes < 10 && e.$apply(function () {
                        e.minutes = k(e.minutes)
                    })
                })
            }
            h.$render = function () {
                var a = h.$modelValue ? new Date(h.$modelValue) : null;
                isNaN(a) ? (h.$setValidity("time", !1), b.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (p = a), m(), n())
            }, e.incrementHours = function () {
                o(60 * r)
            }, e.decrementHours = function () {
                o(60 * -r)
            }, e.incrementMinutes = function () {
                o(s)
            }, e.decrementMinutes = function () {
                o(-s)
            }, e.toggleMeridian = function () {
                o(720 * (p.getHours() < 12 ? 1 : -1))
            }
        }
    }}
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (a) {
    var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return{parse: function (c) {
        var d = c.match(b);
        if (!d)throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
        return{itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1])}
    }}
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return{require: "ngModel", link: function (i, j, k, l) {
        var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? b(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = angular.element("<div typeahead-popup></div>");
        w.attr({matches: "matches", active: "activeIdx", select: "select(activeIdx)", query: "query", position: "position"}), angular.isDefined(k.typeaheadTemplateUrl) && w.attr("template-url", k.typeaheadTemplateUrl);
        var x = i.$new();
        i.$on("$destroy", function () {
            x.$destroy()
        });
        var y = function () {
            x.matches = [], x.activeIdx = -1
        }, z = function (a) {
            var b = {$viewValue: a};
            q(i, !0), c.when(v.source(i, b)).then(function (c) {
                if (a === l.$viewValue && m) {
                    if (c.length > 0) {
                        x.activeIdx = 0, x.matches.length = 0;
                        for (var d = 0; d < c.length; d++)b[v.itemName] = c[d], x.matches.push({label: v.viewMapper(x, b), model: c[d]});
                        x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight")
                    } else y();
                    q(i, !1)
                }
            }, function () {
                y(), q(i, !1)
            })
        };
        y(), x.query = void 0;
        var A;
        l.$parsers.unshift(function (a) {
            return m = !0, a && a.length >= n ? o > 0 ? (A && d.cancel(A), A = d(function () {
                z(a)
            }, o)) : z(a) : (q(i, !1), y()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
        }), l.$formatters.push(function (a) {
            var b, c, d = {};
            return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
        }), x.select = function (a) {
            var b, c, d = {};
            d[v.itemName] = c = x.matches[a].model, b = v.modelMapper(i, d), u(i, b), l.$setValidity("editable", !0), r(i, {$item: c, $model: b, $label: v.viewMapper(i, d)}), y(), j[0].focus()
        }, j.bind("keydown", function (a) {
            0 !== x.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function () {
                x.select(x.activeIdx)
            }) : 27 === a.which && (a.stopPropagation(), y(), x.$digest()))
        }), j.bind("blur", function () {
            m = !1
        });
        var B = function (a) {
            j[0] !== a.target && (y(), x.$digest())
        };
        e.bind("click", B), i.$on("$destroy", function () {
            e.unbind("click", B)
        });
        var C = a(w)(x);
        t ? e.find("body").append(C) : j.after(C)
    }}
}]).directive("typeaheadPopup", function () {
    return{restrict: "EA", scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"}, replace: !0, templateUrl: "template/typeahead/typeahead-popup.html", link: function (a, b, c) {
        a.templateUrl = c.templateUrl, a.isOpen = function () {
            return a.matches.length > 0
        }, a.isActive = function (b) {
            return a.active == b
        }, a.selectActive = function (b) {
            a.active = b
        }, a.selectMatch = function (b) {
            a.select({activeIdx: b})
        }
    }}
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (a, b, c, d) {
    return{restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (e, f, g) {
        var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
        a.get(h, {cache: b}).success(function (a) {
            f.replaceWith(c(a.trim())(e))
        })
    }}
}]).filter("typeaheadHighlight", function () {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    return function (b, c) {
        return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (a) {
    a.put("template/alert/alert.html", "<div class='alert' ng-class='\"alert-\" + (type || \"warning\")'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (a) {
    a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/datepicker.html", '<table>\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr ng-show="labels.length > 0" class="h6">\n      <th ng-show="showWeekNumbers" class="text-center">#</th>\n      <th ng-repeat="label in labels" class="text-center">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n	<li ng-transclude></li>\n" + '	<li ng-show="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="today()">{{currentText}}</button>\n			<button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function (a) {
    a.put("template/modal/window.html", '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (a) {
    a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()">\n    <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset-titles.html", []).run(["$templateCache", function (a) {
    a.put("template/tabs/tabset-titles.html", "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (a) {
    a.put("template/tabs/tabset.html", '\n<div class="tabbable">\n  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
    a.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]), angular.module("placeholders", ["placeholders.img", "placeholders.txt"]), angular.module("placeholders.img", []).directive("phImg", function () {
    return{restrict: "A", scope: {dimensions: "@phImg"}, link: function (a, b) {
        function c() {
            var b = [a.size.h, a.size.w].sort(), c = Math.round(b[1] / 16);
            return Math.max(f.text_size, c)
        }

        function d() {
            e = e || document.createElement("canvas");
            var b, d, g = e.getContext("2d");
            return e.width = a.size.w, e.height = a.size.h, g.fillStyle = f.fill_color, g.fillRect(0, 0, a.size.w, a.size.h), b = c(), d = a.dimensions, g.fillStyle = f.text_color, g.textAlign = "center", g.textBaseline = "middle", g.font = "bold " + b + "pt sans-serif", g.measureText(d).width / a.size.w > 1 && (b = f.text_size / (g.measureText(d).width / a.size.w), g.font = "bold " + b + "pt sans-serif"), g.fillText(a.dimensions, a.size.w / 2, a.size.h / 2), e.toDataURL("image/png")
        }

        var e, f = {text_size: 10, fill_color: "#EEEEEE", text_color: "#AAAAAA"};
        a.$watch("dimensions", function () {
            if (angular.isDefined(a.dimensions)) {
                var c, e = a.dimensions.match(/^(\d+)x(\d+)$/);
                return e ? (a.size = {w: e[1], h: e[2]}, b.prop("title", a.dimensions), b.prop("alt", a.dimensions), c = d(), "IMG" === b.prop("tagName") ? b.prop("src", c) : b.css("background-image", 'url("' + c + '")'), void 0) : void console.error("Expected '000x000'. Got " + a.dimensions)
            }
        })
    }}
}), angular.module("placeholders.txt", []).factory("TextGeneratorService", function () {
    function a(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }

    var b = ["lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem", "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit", "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc", "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi", "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie", "gravida", "dictum"];
    return{createSentence: function (c) {
        var d, e;
        return c = c || a(5, 20), d = a(0, b.length - c - 1), e = b.slice(d, d + c).join(" ").replace(/\,$/g, "") + ".", e = e.charAt(0).toUpperCase() + e.slice(1)
    }, createSentences: function (b) {
        var c = [], d = 0;
        for (b = b || a(3, 5), d = 0; b > d; d++)c.push(this.createSentence());
        return c.join(" ")
    }, createParagraph: function (a) {
        var b = this.createSentences(a);
        return"<p>" + b + "</p>"
    }, createParagraphs: function (b, c) {
        var d = [], e = 0;
        for (b = b || a(3, 7), e = 0; b > e; e++)d.push(this.createParagraph(c));
        return d.join("\n")
    }}
}).directive("phTxt", ["TextGeneratorService", function (a) {
    return{restrict: "EA", controller: ["$scope", "$element", "$attrs", function (b, c, d) {
        function e() {
            var b;
            b = g || !f ? a.createParagraphs(g, f) : a.createSentences(f), c.html(b)
        }

        var f, g;
        d.$observe("phTxt", function (a) {
            var b, c;
            b = a.match(/(\d+)p/), c = a.match(/(\d+)s/), g = null !== b ? parseInt(b[1], 10) : !1, f = null !== c ? parseInt(c[1], 10) : !1, e()
        }), d.phTxt || e()
    }]}
}]), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
    "use strict";
    function d(a, b) {
        return J(new (J(function () {
        }, {prototype: a})), b)
    }

    function e(a) {
        return I(arguments, function (b) {
            b !== a && I(b, function (b, c) {
                a.hasOwnProperty(c) || (a[c] = b)
            })
        }), a
    }

    function f(a, b) {
        var c = [];
        for (var d in a.path) {
            if (a.path[d] !== b.path[d])break;
            c.push(a.path[d])
        }
        return c
    }

    function g(a) {
        if (Object.keys)return Object.keys(a);
        var c = [];
        return b.forEach(a, function (a, b) {
            c.push(b)
        }), c
    }

    function h(a, b) {
        if (Array.prototype.indexOf)return a.indexOf(b, Number(arguments[2]) || 0);
        var c = a.length >>> 0, d = Number(arguments[2]) || 0;
        for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)if (d in a && a[d] === b)return d;
        return-1
    }

    function i(a, b, c, d) {
        var e, i = f(c, d), j = {}, k = [];
        for (var l in i)if (i[l].params && (e = g(i[l].params), e.length))for (var m in e)h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
        return J({}, j, b)
    }

    function j(a, b, c) {
        if (!c) {
            c = [];
            for (var d in a)c.push(d)
        }
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (a[f] != b[f])return!1
        }
        return!0
    }

    function k(a, b) {
        var c = {};
        return I(a, function (a) {
            c[a] = b[a]
        }), c
    }

    function l(a, b) {
        var d = 1, f = 2, g = {}, h = [], i = g, j = J(a.when(g), {$$promises: g, $$values: g});
        this.study = function (g) {
            function k(a, c) {
                if (o[c] !== f) {
                    if (n.push(c), o[c] === d)throw n.splice(0, n.indexOf(c)), new Error("Cyclic dependency: " + n.join(" -> "));
                    if (o[c] = d, F(a))m.push(c, [function () {
                        return b.get(a)
                    }], h); else {
                        var e = b.annotate(a);
                        I(e, function (a) {
                            a !== c && g.hasOwnProperty(a) && k(g[a], a)
                        }), m.push(c, a, e)
                    }
                    n.pop(), o[c] = f
                }
            }

            function l(a) {
                return G(a) && a.then && a.$$promises
            }

            if (!G(g))throw new Error("'invocables' must be an object");
            var m = [], n = [], o = {};
            return I(g, k), g = n = o = null, function (d, f, g) {
                function h() {
                    --s || (t || e(r, f.$$values), p.$$values = r, p.$$promises = !0, delete p.$$inheritedValues, o.resolve(r))
                }

                function k(a) {
                    p.$$failure = a, o.reject(a)
                }

                function n(c, e, f) {
                    function i(a) {
                        l.reject(a), k(a)
                    }

                    function j() {
                        if (!D(p.$$failure))try {
                            l.resolve(b.invoke(e, g, r)), l.promise.then(function (a) {
                                r[c] = a, h()
                            }, i)
                        } catch (a) {
                            i(a)
                        }
                    }

                    var l = a.defer(), m = 0;
                    I(f, function (a) {
                        q.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, q[a].then(function (b) {
                            r[a] = b, --m || j()
                        }, i))
                    }), m || j(), q[c] = l.promise
                }

                if (l(d) && g === c && (g = f, f = d, d = null), d) {
                    if (!G(d))throw new Error("'locals' must be an object")
                } else d = i;
                if (f) {
                    if (!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else f = j;
                var o = a.defer(), p = o.promise, q = p.$$promises = {}, r = J({}, d), s = 1 + m.length / 3, t = !1;
                if (D(f.$$failure))return k(f.$$failure), p;
                f.$$inheritedValues && e(r, f.$$inheritedValues), f.$$values ? (t = e(r, f.$$values), p.$$inheritedValues = f.$$values, h()) : (f.$$inheritedValues && (p.$$inheritedValues = f.$$inheritedValues), J(q, f.$$promises), f.then(h, k));
                for (var u = 0, v = m.length; v > u; u += 3)d.hasOwnProperty(m[u]) ? h() : n(m[u], m[u + 1], m[u + 2]);
                return p
            }
        }, this.resolve = function (a, b, c, d) {
            return this.study(a)(b, c, d)
        }
    }

    function m(a, b, c) {
        this.fromConfig = function (a, b, c) {
            return D(a.template) ? this.fromString(a.template, b) : D(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : D(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
        }, this.fromString = function (a, b) {
            return E(a) ? a(b) : a
        }, this.fromUrl = function (c, d) {
            return E(c) && (c = c(d)), null == c ? null : a.get(c, {cache: b}).then(function (a) {
                return a.data
            })
        }, this.fromProvider = function (a, b, d) {
            return c.invoke(a, null, d || {params: b})
        }
    }

    function n(a, d) {
        function e(a) {
            return D(a) ? this.type.decode(a) : p.$$getDefaultValue(this)
        }

        function f(b, c, d) {
            if (!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
            if (n[b])throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
            n[b] = J({type: c || new o, $value: e}, d)
        }

        function g(a, b, c) {
            var d = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!b)return d;
            var e = c ? "?" : "";
            return d + e + "(" + b + ")" + e
        }

        function h(a) {
            if (!d.params || !d.params[a])return{};
            var b = d.params[a];
            return G(b) ? b : {value: b}
        }

        d = b.isObject(d) ? d : {};
        var i, j = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, k = "^", l = 0, m = this.segments = [], n = this.params = {};
        this.source = a;
        for (var q, r, s, t, u; (i = j.exec(a)) && (q = i[2] || i[3], r = i[4] || ("*" == i[1] ? ".*" : "[^/]*"), s = a.substring(l, i.index), t = this.$types[r] || new o({pattern: new RegExp(r)}), u = h(q), !(s.indexOf("?") >= 0));)k += g(s, t.$subPattern(), D(u.value)), f(q, t, u), m.push(s), l = j.lastIndex;
        s = a.substring(l);
        var v = s.indexOf("?");
        if (v >= 0) {
            var w = this.sourceSearch = s.substring(v);
            s = s.substring(0, v), this.sourcePath = a.substring(0, l + v), I(w.substring(1).split(/[&?]/), function (a) {
                f(a, null, h(a))
            })
        } else this.sourcePath = a, this.sourceSearch = "";
        k += g(s) + (d.strict === !1 ? "/?" : "") + "$", m.push(s), this.regexp = new RegExp(k, d.caseInsensitive ? "i" : c), this.prefix = m[0]
    }

    function o(a) {
        J(this, a)
    }

    function p() {
        function a() {
            return{strict: f, caseInsensitive: e}
        }

        function b(a) {
            return E(a) || H(a) && E(a[a.length - 1])
        }

        function c() {
            I(h, function (a) {
                if (n.prototype.$types[a.name])throw new Error("A type named '" + a.name + "' has already been defined.");
                var c = new o(b(a.def) ? d.invoke(a.def) : a.def);
                n.prototype.$types[a.name] = c
            })
        }

        var d, e = !1, f = !0, g = !0, h = [], i = {"int": {decode: function (a) {
            return parseInt(a, 10)
        }, is: function (a) {
            return D(a) ? this.decode(a.toString()) === a : !1
        }, pattern: /\d+/}, bool: {encode: function (a) {
            return a ? 1 : 0
        }, decode: function (a) {
            return 0 === parseInt(a, 10) ? !1 : !0
        }, is: function (a) {
            return a === !0 || a === !1
        }, pattern: /0|1/}, string: {pattern: /[^\/]*/}, date: {equals: function (a, b) {
            return a.toISOString() === b.toISOString()
        }, decode: function (a) {
            return new Date(a)
        }, encode: function (a) {
            return[a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-")
        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/}};
        p.$$getDefaultValue = function (a) {
            if (!b(a.value))return a.value;
            if (!d)throw new Error("Injectable functions cannot be called at configuration time");
            return d.invoke(a.value)
        }, this.caseInsensitive = function (a) {
            e = a
        }, this.strictMode = function (a) {
            f = a
        }, this.compile = function (b, c) {
            return new n(b, J(a(), c))
        }, this.isMatcher = function (a) {
            if (!G(a))return!1;
            var b = !0;
            return I(n.prototype, function (c, d) {
                E(c) && (b = b && D(a[d]) && E(a[d]))
            }), b
        }, this.type = function (a, b) {
            return D(b) ? (h.push({name: a, def: b}), g || c(), this) : n.prototype.$types[a]
        }, this.$get = ["$injector", function (a) {
            return d = a, g = !1, n.prototype.$types = {}, c(), I(i, function (a, b) {
                n.prototype.$types[b] || (n.prototype.$types[b] = new o(a))
            }), this
        }]
    }

    function q(a, b) {
        function d(a) {
            var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
            return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
        }

        function e(a, b) {
            return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
                return b["$" === c ? 0 : Number(c)]
            })
        }

        function f(a, b, c) {
            if (!c)return!1;
            var d = a.invoke(b, b, {$match: c});
            return D(d) ? d : !0
        }

        function g(b, c, d, e) {
            function f(a, b, c) {
                return"/" === m ? a : b ? m.slice(0, -1) + a : c ? m.slice(1) + a : a
            }

            function g(a) {
                function c(a) {
                    var c = a(d, b);
                    return c ? (F(c) && b.replace().url(c), !0) : !1
                }

                if (!a || !a.defaultPrevented) {
                    var e, f = i.length;
                    for (e = 0; f > e; e++)if (c(i[e]))return;
                    j && c(j)
                }
            }

            function l() {
                return h = h || c.$on("$locationChangeSuccess", g)
            }

            var m = e.baseHref(), n = b.url();
            return k || l(), {sync: function () {
                g()
            }, listen: function () {
                return l()
            }, update: function (a) {
                return a ? void(n = b.url()) : void(b.url() !== n && (b.url(n), b.replace()))
            }, push: function (a, c, d) {
                b.url(a.format(c || {})), d && d.replace && b.replace()
            }, href: function (c, d, e) {
                if (!c.validates(d))return null;
                var g = a.html5Mode(), h = c.format(d);
                if (e = e || {}, g || null === h || (h = "#" + a.hashPrefix() + h), h = f(h, g, e.absolute), !e.absolute || !h)return h;
                var i = !g && h ? "/" : "", j = b.port();
                return j = 80 === j || 443 === j ? "" : ":" + j, [b.protocol(), "://", b.host(), j, i, h].join("")
            }}
        }

        var h, i = [], j = null, k = !1;
        this.rule = function (a) {
            if (!E(a))throw new Error("'rule' must be a function");
            return i.push(a), this
        }, this.otherwise = function (a) {
            if (F(a)) {
                var b = a;
                a = function () {
                    return b
                }
            } else if (!E(a))throw new Error("'rule' must be a function");
            return j = a, this
        }, this.when = function (a, c) {
            var g, h = F(c);
            if (F(a) && (a = b.compile(a)), !h && !E(c) && !H(c))throw new Error("invalid 'handler' in when()");
            var i = {matcher: function (a, c) {
                return h && (g = b.compile(c), c = ["$match", function (a) {
                    return g.format(a)
                }]), J(function (b, d) {
                    return f(b, c, a.exec(d.path(), d.search()))
                }, {prefix: F(a.prefix) ? a.prefix : ""})
            }, regex: function (a, b) {
                if (a.global || a.sticky)throw new Error("when() RegExp must not be global or sticky");
                return h && (g = b, b = ["$match", function (a) {
                    return e(g, a)
                }]), J(function (c, d) {
                    return f(c, b, a.exec(d.path()))
                }, {prefix: d(a)})
            }}, j = {matcher: b.isMatcher(a), regex: a instanceof RegExp};
            for (var k in j)if (j[k])return this.rule(i[k](a, c));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (a) {
            a === c && (a = !0), k = a
        }, this.$get = g, g.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }

    function r(a, e) {
        function f(a) {
            return 0 === a.indexOf(".") || 0 === a.indexOf("^")
        }

        function h(a, b) {
            if (!a)return c;
            var d = F(a), e = d ? a : a.name, g = f(e);
            if (g) {
                if (!b)throw new Error("No reference point given for path '" + e + "'");
                for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)if ("" !== h[i] || 0 !== i) {
                    if ("^" !== h[i])break;
                    if (!k.parent)throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                    k = k.parent
                } else k = b;
                h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
            }
            var l = v[e];
            return!l || !d && (d || l !== a && l.self !== a) ? c : l
        }

        function l(a, b) {
            w[a] || (w[a] = []), w[a].push(b)
        }

        function m(b) {
            b = d(b, {self: b, resolve: b.resolve || {}, toString: function () {
                return this.name
            }});
            var c = b.name;
            if (!F(c) || c.indexOf("@") >= 0)throw new Error("State must have a valid name");
            if (v.hasOwnProperty(c))throw new Error("State '" + c + "'' is already defined");
            var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : F(b.parent) ? b.parent : "";
            if (e && !v[e])return l(e, b.self);
            for (var f in y)E(y[f]) && (b[f] = y[f](b, y.$delegates[f]));
            if (v[c] = b, !b[x] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
                u.$current.navigable == b && j(a, c) || u.transitionTo(b, a, {location: !1})
            }]), w[c])for (var g = 0; g < w[c].length; g++)m(w[c][g]);
            return b
        }

        function n(a) {
            return a.indexOf("*") > -1
        }

        function o(a) {
            var b = a.split("."), c = u.$current.name.split(".");
            if ("**" === b[0] && (c = c.slice(c.indexOf(b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(c.indexOf(b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length)return!1;
            for (var d = 0, e = b.length; e > d; d++)"*" === b[d] && (c[d] = "*");
            return c.join("") === b.join("")
        }

        function p(a, b) {
            return F(a) && !D(b) ? y[a] : E(b) && F(a) ? (y[a] && !y.$delegates[a] && (y.$delegates[a] = y[a]), y[a] = b, this) : this
        }

        function q(a, b) {
            return G(a) ? b = a : b.name = a, m(b), this
        }

        function r(a, e, f, l, m, p, q) {
            function r(b, c, d, f) {
                var g = a.$broadcast("$stateNotFound", b, c, d);
                if (g.defaultPrevented)return q.update(), A;
                if (!g.retry)return null;
                if (f.$retry)return q.update(), B;
                var h = u.transition = e.when(g.retry);
                return h.then(function () {
                    return h !== u.transition ? y : (b.options.$retry = !0, u.transitionTo(b.to, b.toParams, b.options))
                }, function () {
                    return A
                }), q.update(), h
            }

            function w(a, c, d, h, i) {
                var j = d ? c : k(g(a.params), c), n = {$stateParams: j};
                i.resolve = m.resolve(a.resolve, n, i.resolve, a);
                var o = [i.resolve.then(function (a) {
                    i.globals = a
                })];
                return h && o.push(h), I(a.views, function (c, d) {
                    var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
                    e.$template = [function () {
                        return f.load(d, {view: c, locals: n, params: j}) || ""
                    }], o.push(m.resolve(e, n, i.resolve, a).then(function (f) {
                        if (E(c.controllerProvider) || H(c.controllerProvider)) {
                            var g = b.extend({}, e, n);
                            f.$$controller = l.invoke(c.controllerProvider, null, g)
                        } else f.$$controller = c.controller;
                        f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f
                    }))
                }), e.all(o).then(function () {
                    return i
                })
            }

            var y = e.reject(new Error("transition superseded")), z = e.reject(new Error("transition prevented")), A = e.reject(new Error("transition aborted")), B = e.reject(new Error("transition failed"));
            return t.locals = {resolve: null, globals: {$stateParams: {}}}, u = {params: {}, current: t.self, $current: t, transition: null}, u.reload = function () {
                u.transitionTo(u.current, p, {reload: !0, inherit: !1, notify: !1})
            }, u.go = function (a, b, c) {
                return u.transitionTo(a, b, J({inherit: !0, relative: u.$current}, c))
            }, u.transitionTo = function (b, c, f) {
                c = c || {}, f = J({location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1}, f || {});
                var m, n = u.$current, o = u.params, v = n.path, A = h(b, f.relative);
                if (!D(A)) {
                    var B = {to: b, toParams: c, options: f}, C = r(B, n.self, o, f);
                    if (C)return C;
                    if (b = B.to, c = B.toParams, f = B.options, A = h(b, f.relative), !D(A)) {
                        if (!f.relative)throw new Error("No such state '" + b + "'");
                        throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                    }
                }
                if (A[x])throw new Error("Cannot transition to abstract state '" + b + "'");
                f.inherit && (c = i(p, c || {}, u.$current, A)), b = A;
                var E = b.path, F = 0, G = E[F], H = t.locals, I = [];
                if (!f.reload)for (; G && G === v[F] && j(c, o, G.ownParams);)H = I[F] = G.locals, F++, G = E[F];
                if (s(b, n, H, f))return b.self.reloadOnSearch !== !1 && q.update(), u.transition = null, e.when(u.current);
                if (c = k(g(b.params), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, n.self, o).defaultPrevented)return q.update(), z;
                for (var L = e.when(H), M = F; M < E.length; M++, G = E[M])H = I[M] = d(H), L = w(G, c, G === b, L, H);
                var N = u.transition = L.then(function () {
                    var d, e, g;
                    if (u.transition !== N)return y;
                    for (d = v.length - 1; d >= F; d--)g = v[d], g.self.onExit && l.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                    for (d = F; d < E.length; d++)e = E[d], e.locals = I[d], e.self.onEnter && l.invoke(e.self.onEnter, e.self, e.locals.globals);
                    return u.transition !== N ? y : (u.$current = b, u.current = b.self, u.params = c, K(u.params, p), u.transition = null, f.location && b.navigable && q.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {replace: "replace" === f.location}), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, n.self, o), q.update(!0), u.current)
                }, function (d) {
                    return u.transition !== N ? y : (u.transition = null, m = a.$broadcast("$stateChangeError", b.self, c, n.self, o, d), m.defaultPrevented || q.update(), e.reject(d))
                });
                return N
            }, u.is = function (a, d) {
                var e = h(a);
                return D(e) ? u.$current !== e ? !1 : D(d) && null !== d ? b.equals(p, d) : !0 : c
            }, u.includes = function (a, b) {
                if (F(a) && n(a)) {
                    if (!o(a))return!1;
                    a = u.$current.name
                }
                var d = h(a);
                return D(d) ? D(u.$current.includes[d.name]) ? j(b, p) : !1 : c
            }, u.href = function (a, b, c) {
                c = J({lossy: !0, inherit: !0, absolute: !1, relative: u.$current}, c || {});
                var d = h(a, c.relative);
                if (!D(d))return null;
                c.inherit && (b = i(p, b || {}, u.$current, d));
                var e = d && c.lossy ? d.navigable : d;
                return e && e.url ? q.href(e.url, k(g(d.params), b || {}), {absolute: c.absolute}) : null
            }, u.get = function (a, b) {
                if (0 === arguments.length)return g(v).map(function (a) {
                    return v[a].self
                });
                var c = h(a, b);
                return c && c.self ? c.self : null
            }, u
        }

        function s(a, b, c, d) {
            return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0
        }

        var t, u, v = {}, w = {}, x = "abstract", y = {parent: function (a) {
            if (D(a.parent) && a.parent)return h(a.parent);
            var b = /^(.+)\.[^.]+$/.exec(a.name);
            return b ? h(b[1]) : t
        }, data: function (a) {
            return a.parent && a.parent.data && (a.data = a.self.data = J({}, a.parent.data, a.data)), a.data
        }, url: function (a) {
            var b = a.url, c = {params: a.params || {}};
            if (F(b))return"^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || t).url.concat(b, c);
            if (!b || e.isMatcher(b))return b;
            throw new Error("Invalid url '" + b + "' in state '" + a + "'")
        }, navigable: function (a) {
            return a.url ? a : a.parent ? a.parent.navigable : null
        }, params: function (a) {
            return a.params ? a.params : a.url ? a.url.params : a.parent.params
        }, views: function (a) {
            var b = {};
            return I(D(a.views) ? a.views : {"": a}, function (c, d) {
                d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
            }), b
        }, ownParams: function (a) {
            if (a.params = a.params || {}, !a.parent)return g(a.params);
            var b = {};
            I(a.params, function (a, c) {
                b[c] = !0
            }), I(a.parent.params, function (c, d) {
                if (!b[d])throw new Error("Missing required parameter '" + d + "' in state '" + a.name + "'");
                b[d] = !1
            });
            var c = [];
            return I(b, function (a, b) {
                a && c.push(b)
            }), c
        }, path: function (a) {
            return a.parent ? a.parent.path.concat(a) : []
        }, includes: function (a) {
            var b = a.parent ? J({}, a.parent.includes) : {};
            return b[a.name] = !0, b
        }, $delegates: {}};
        t = m({name: "", url: "^", views: null, "abstract": !0}), t.navigable = null, this.decorator = p, this.state = q, this.$get = r, r.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter"]
    }

    function s() {
        function a(a, b) {
            return{load: function (c, d) {
                var e, f = {template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {}};
                return d = J(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
            }}
        }

        this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
    }

    function t() {
        var a = !1;
        this.useAnchorScroll = function () {
            a = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
            return a ? b : function (a) {
                c(function () {
                    a[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function u(a, c, d) {
        function e() {
            return c.has ? function (a) {
                return c.has(a) ? c.get(a) : null
            } : function (a) {
                try {
                    return c.get(a)
                } catch (b) {
                    return null
                }
            }
        }

        function f(a, b) {
            var c = function () {
                return{enter: function (a, b, c) {
                    b.after(a), c()
                }, leave: function (a, b) {
                    a.remove(), b()
                }}
            };
            if (i)return{enter: function (a, b, c) {
                i.enter(a, null, b, c)
            }, leave: function (a, b) {
                i.leave(a, b)
            }};
            if (h) {
                var d = h && h(b, a);
                return{enter: function (a, b, c) {
                    d.enter(a, null, b), c()
                }, leave: function (a, b) {
                    d.leave(a), b()
                }}
            }
            return c()
        }

        var g = e(), h = g("$animator"), i = g("$animate"), j = {restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function (c, e, g) {
            return function (c, e, h) {
                function i() {
                    k && (k.remove(), k = null), m && (m.$destroy(), m = null), l && (q.leave(l, function () {
                        k = null
                    }), k = l, l = null)
                }

                function j(f) {
                    var j, k = w(h, e.inheritedData("$uiView")), r = k && a.$current && a.$current.locals[k];
                    if (f || r !== n) {
                        j = c.$new(), n = a.$current.locals[k];
                        var s = g(j, function (a) {
                            q.enter(a, e, function () {
                                (b.isDefined(p) && !p || c.$eval(p)) && d(a)
                            }), i()
                        });
                        l = s, m = j, m.$emit("$viewContentLoaded"), m.$eval(o)
                    }
                }

                var k, l, m, n, o = h.onload || "", p = h.autoscroll, q = f(h, c);
                c.$on("$stateChangeSuccess", function () {
                    j(!1)
                }), c.$on("$viewContentLoading", function () {
                    j(!1)
                }), j(!0)
            }
        }};
        return j
    }

    function v(a, b, c) {
        return{restrict: "ECA", priority: -400, compile: function (d) {
            var e = d.html();
            return function (d, f, g) {
                var h = c.$current, i = w(g, f.inheritedData("$uiView")), j = h && h.locals[i];
                if (j) {
                    f.data("$uiView", {name: i, state: j.$$state}), f.html(j.$template ? j.$template : e);
                    var k = a(f.contents());
                    if (j.$$controller) {
                        j.$scope = d;
                        var l = b(j.$$controller, j);
                        j.$$controllerAs && (d[j.$$controllerAs] = l), f.data("$ngControllerController", l), f.children().data("$ngControllerController", l)
                    }
                    k(d)
                }
            }
        }}
    }

    function w(a, b) {
        var c = a.uiView || a.name || "";
        return c.indexOf("@") >= 0 ? c : c + "@" + (b ? b.state.name : "")
    }

    function x(a, b) {
        var c, d = a.match(/^\s*({[^}]*})\s*$/);
        if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length)throw new Error("Invalid state ref '" + a + "'");
        return{state: c[1], paramExpr: c[3] || null}
    }

    function y(a) {
        var b = a.parent().inheritedData("$uiView");
        return b && b.state && b.state.name ? b.state : void 0
    }

    function z(a, c) {
        var d = ["location", "inherit", "reload"];
        return{restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (e, f, g, h) {
            var i = x(g.uiSref, a.current.name), j = null, k = y(f) || a.$current, l = "FORM" === f[0].nodeName, m = l ? "action" : "href", n = !0, o = {relative: k, inherit: !0}, p = e.$eval(g.uiSrefOpts) || {};
            b.forEach(d, function (a) {
                a in p && (o[a] = p[a])
            });
            var q = function (b) {
                if (b && (j = b), n) {
                    var c = a.href(i.state, j, o), d = h[1] || h[0];
                    return d && d.$$setStateInfo(i.state, j), null === c ? (n = !1, !1) : void(f[0][m] = c)
                }
            };
            i.paramExpr && (e.$watch(i.paramExpr, function (a) {
                a !== j && q(a)
            }, !0), j = e.$eval(i.paramExpr)), q(), l || f.bind("click", function (b) {
                var d = b.which || b.button;
                if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
                    var e = c(function () {
                        a.go(i.state, j, o)
                    });
                    b.preventDefault(), b.preventDefault = function () {
                        c.cancel(e)
                    }
                }
            })
        }}
    }

    function A(a, b, c) {
        return{restrict: "A", controller: ["$scope", "$element", "$attrs", function (d, e, f) {
            function g() {
                h() ? e.addClass(m) : e.removeClass(m)
            }

            function h() {
                return"undefined" != typeof f.uiSrefActiveEq ? a.$current.self === k && i() : a.includes(k.name) && i()
            }

            function i() {
                return!l || j(l, b)
            }

            var k, l, m;
            m = c(f.uiSrefActiveEq || f.uiSrefActive || "", !1)(d), this.$$setStateInfo = function (b, c) {
                k = a.get(b, y(e)), l = c, g()
            }, d.$on("$stateChangeSuccess", g)
        }]}
    }

    function B(a) {
        return function (b) {
            return a.is(b)
        }
    }

    function C(a) {
        return function (b) {
            return a.includes(b)
        }
    }

    var D = b.isDefined, E = b.isFunction, F = b.isString, G = b.isObject, H = b.isArray, I = b.forEach, J = b.extend, K = b.copy;
    b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), l.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", l), m.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", m), n.prototype.concat = function (a, b) {
        return new n(this.sourcePath + a + this.sourceSearch, b)
    }, n.prototype.toString = function () {
        return this.source
    }, n.prototype.exec = function (a, b) {
        var c = this.regexp.exec(a);
        if (!c)return null;
        b = b || {};
        var d, e, f, g = this.parameters(), h = g.length, i = this.segments.length - 1, j = {};
        if (i !== c.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (d = 0; i > d; d++)f = g[d], e = this.params[f], j[f] = e.$value(c[d + 1]);
        for (; h > d; d++)f = g[d], e = this.params[f], j[f] = e.$value(b[f]);
        return j
    }, n.prototype.parameters = function (a) {
        return D(a) ? this.params[a] || null : g(this.params)
    }, n.prototype.validates = function (a) {
        var b, c, d = !0, e = this;
        return I(a, function (a, f) {
            e.params[f] && (c = e.params[f], b = !a && D(c.value), d = d && (b || c.type.is(a)))
        }), d
    }, n.prototype.format = function (a) {
        var b = this.segments, c = this.parameters();
        if (!a)return b.join("").replace("//", "/");
        var d, e, f, g, h, i, j = b.length - 1, k = c.length, l = b[0];
        if (!this.validates(a))return null;
        for (d = 0; j > d; d++)g = c[d], f = a[g], h = this.params[g], (D(f) || "/" !== b[d] && "/" !== b[d + 1]) && (null != f && (l += encodeURIComponent(h.type.encode(f))), l += b[d + 1]);
        for (; k > d; d++)g = c[d], f = a[g], null != f && (i = H(f), i && (f = f.map(encodeURIComponent).join("&" + g + "=")), l += (e ? "&" : "?") + g + "=" + (i ? f : encodeURIComponent(f)), e = !0);
        return l
    }, n.prototype.$types = {}, o.prototype.is = function () {
        return!0
    }, o.prototype.encode = function (a) {
        return a
    }, o.prototype.decode = function (a) {
        return a
    }, o.prototype.equals = function (a, b) {
        return a == b
    }, o.prototype.$subPattern = function () {
        var a = this.pattern.toString();
        return a.substr(1, a.length - 2)
    }, o.prototype.pattern = /.*/, b.module("ui.router.util").provider("$urlMatcherFactory", p), q.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", q), r.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", r), s.$inject = [], b.module("ui.router.state").provider("$view", s), b.module("ui.router.state").provider("$uiViewScroll", t), u.$inject = ["$state", "$injector", "$uiViewScroll"], v.$inject = ["$compile", "$controller", "$state"], b.module("ui.router.state").directive("uiView", u), b.module("ui.router.state").directive("uiView", v), z.$inject = ["$state", "$timeout"], A.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", z).directive("uiSrefActive", A).directive("uiSrefActiveEq", A), B.$inject = ["$state"], C.$inject = ["$state"], b.module("ui.router.state").filter("isState", B).filter("includedByState", C)
}(window, window.angular), function (a, b) {
    b.module("team-bank", ["templates-app", "templates-common", "ui.router", "transaction"]).config(["$urlRouterProvider", function (a) {
        a.otherwise("transaction")
    }]).service("logoutService", ["requestService", function (a) {
        return{logout: function () {
            return a.sendRequest("POST", "/logout")
        }}
    }]).controller("LogoutCtrl", ["$scope", "windowService", "logoutService", function (a, b, c) {
        a.logout = function () {
            c.logout().then(function () {
                b.redirect()
            })
        }
    }]), b.module("transaction", ["ui.router"]).config(["$stateProvider", "$httpProvider", function (a, b) {
        a.state("transaction", {url: "/transaction", views: {main: {templateUrl: "transaction/transaction.tpl.html", controller: "TransactionCtrl"}}, data: {pageTitle: "Transaction"}}), b.interceptors.push("interceptor")
    }]).service("requestService", ["$http", "$q", function (a, b) {
        return{sendRequest: function (c, d, e) {
            var f = b.defer();
            return a({method: c, url: d, data: e}).success(function (a) {
                f.resolve(a)
            }), f.promise
        }}
    }]).service("bankService", ["requestService", function (a) {
        return{fetchCurrentAmount: function () {
            return a.sendRequest("GET", "/amount")
        }, deposit: function (b) {
            return a.sendRequest("POST", "/amount/deposit", {amount: b})
        }, withdraw: function (b) {
            return a.sendRequest("POST", "/amount/withdraw", {amount: b})
        }}
    }]).service("interceptor", ["$q", "windowService", "$rootScope", function (a, b, c) {
        return{responseError: function (d) {
            return 401 === d.status && b.redirect(), c.$emit("error", d.data), a.reject(d)
        }, response: function (b) {
            return c.$emit("status", b.data.message), a.when(b)
        }}
    }]).service("windowService", ["$window", function (a) {
        return{redirect: function () {
            a.location.href = "/login"
        }}
    }]).controller("TransactionCtrl", ["$scope", "$state", "bankService", function (a, b, c) {
        a.navigateToTransaction = function () {
            b.go("transaction")
        }, c.fetchCurrentAmount().then(function (b) {
            a.currentAmount = b
        }), a.deposit = function (b) {
            c.deposit(b).then(function (b) {
                a.currentAmount = b.amount
            })
        }, a.withdraw = function (b) {
            c.withdraw(b).then(function (b) {
                a.currentAmount = b.amount
            })
        }
    }]).controller("NotificationCtrl", ["$scope", "$rootScope", "$timeout", function (a, b, c) {
        function d() {
            c(function () {
                a.message = ""
            }, 3e3)
        }

        b.$on("error", function (b, c) {
            a.message = c, d()
        }), b.$on("status", function (b, c) {
            a.message = c, d()
        })
    }]), b.module("templates-app", ["transaction/transaction.tpl.html"]), b.module("transaction/transaction.tpl.html", []).run(["$templateCache", function (a) {
        a.put("transaction/transaction.tpl.html", '<div ng-controller="TransactionCtrl" align="center">\n\n    <div class="container">\n        <div class="col-sm-4 col-sm-offset-4">\n            <form class="css-form" name="transaction" ng-submit="create()" novalidate>\n                <span style="color: #3333ff" ng-controller="NotificationCtrl">{{message}}</span>\n                <br/>\n\n                <div>Balance:</div>\n                <div>{{currentAmount}} $</div>\n                <div class="form-group">\n\n                    <input type="text"\n                           name="price_field"\n                           class="form-control"\n                           ng-model="amount"\n                           required\n                           placeholder="amount greater than 1"\n                           ng-pattern="/^[1-9][0-9]*(\\.[0-9]{1,2})?$/">\n\n                    <button type="button"\n                            class="btn btn-primary btn-xs"\n                            ng-disabled="transaction.price_field.$invalid"\n                            ng-click="deposit(amount)">Deposit\n                    </button>\n                    <div class="divider"></div>\n                    <button type="button"\n                            class="btn btn-primary btn-xs"\n                            ng-disabled="transaction.price_field.$invalid"\n                            ng-click="withdraw(amount)">Withdraw\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n</div>')
    }]), b.module("templates-common", [])
}(window, window.angular);