(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);

    function p(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    p("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });

    function ea(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function q(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ia(a) {
        if (!(a instanceof Array)) {
            a = q(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ja = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ka = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ja(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pa = la;

    function r(a, b) {
        a.prototype = ja(b.prototype);
        a.prototype.constructor = a;
        if (pa) pa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Z = b.prototype
    }

    function qa() {
        this.D = !1;
        this.l = null;
        this.i = void 0;
        this.h = 1;
        this.o = this.m = 0;
        this.A = this.j = null
    }

    function ra(a) {
        if (a.D) throw new TypeError("Generator is already running");
        a.D = !0
    }
    qa.prototype.u = function(a) {
        this.i = a
    };

    function sa(a, b) {
        a.j = {
            zb: b,
            Db: !0
        };
        a.h = a.m || a.o
    }
    qa.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.h = this.o
    };

    function v(a, b, c) {
        a.h = c;
        return {
            value: b
        }
    }
    qa.prototype.s = function(a) {
        this.h = a
    };

    function ta(a, b, c) {
        a.m = b;
        void 0 != c && (a.o = c)
    }

    function ua(a, b) {
        a.h = b;
        a.m = 0
    }

    function va(a) {
        a.m = 0;
        var b = a.j.zb;
        a.j = null;
        return b
    }

    function wa(a) {
        a.A = [a.j];
        a.m = 0;
        a.o = 0
    }

    function xa(a) {
        var b = a.A.splice(0)[0];
        (b = a.j = a.j || b) ? b.Db ? a.h = a.m || a.o : void 0 != b.s && a.o < b.s ? (a.h = b.s, a.j = null) : a.h = a.o: a.h = 0
    }

    function ya(a) {
        this.h = new qa;
        this.i = a
    }

    function za(a, b) {
        ra(a.h);
        var c = a.h.l;
        if (c) return Aa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return Ba(a)
    }

    function Aa(a, b, c, d) {
        try {
            var e = b.call(a.h.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.h.D = !1, e;
            var f = e.value
        } catch (g) {
            return a.h.l = null, sa(a.h, g), Ba(a)
        }
        a.h.l = null;
        d.call(a.h, f);
        return Ba(a)
    }

    function Ba(a) {
        for (; a.h.h;) try {
            var b = a.i(a.h);
            if (b) return a.h.D = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.h.i = void 0, sa(a.h, c)
        }
        a.h.D = !1;
        if (a.h.j) {
            b = a.h.j;
            a.h.j = null;
            if (b.Db) throw b.zb;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ca(a) {
        this.next = function(b) {
            ra(a.h);
            a.h.l ? b = Aa(a, a.h.l.next, b, a.h.u) : (a.h.u(b), b = Ba(a));
            return b
        };
        this.throw = function(b) {
            ra(a.h);
            a.h.l ? b = Aa(a, a.h.l["throw"], b, a.h.u) : (sa(a.h, b), b = Ba(a));
            return b
        };
        this.return = function(b) {
            return za(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Da(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function w(a) {
        return Da(new Ca(new ya(a)))
    }

    function Ea() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    p("Reflect", function(a) {
        return a ? a : {}
    });
    p("Reflect.construct", function() {
        return ka
    });
    p("Reflect.setPrototypeOf", function(a) {
        return a ? a : pa ? function(b, c) {
            try {
                return pa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    p("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.D = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.o()
                })
            }
            this.h.push(g)
        };
        var e = da.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.o = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.l(m)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(m) {
                return function(n) {
                    k || (k = !0, m.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.S),
                reject: g(this.o)
            }
        };
        b.prototype.S = function(g) {
            if (g === this) this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.ga(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.L(g) : this.m(g)
            }
        };
        b.prototype.L = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.o(k);
                return
            }
            "function" == typeof h ? this.sa(h, g) : this.m(g)
        };
        b.prototype.o = function(g) {
            this.u(2, g)
        };
        b.prototype.m = function(g) {
            this.u(1, g)
        };
        b.prototype.u = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.Y();
            this.A()
        };
        b.prototype.Y = function() {
            var g = this;
            e(function() {
                if (g.K()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.K = function() {
            if (this.D) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.j;
            return k(g)
        };
        b.prototype.A = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.ga = function(g) {
            var h = this.l();
            g.Ma(h.resolve, h.reject)
        };
        b.prototype.sa = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        };
        b.prototype.then = function(g, h) {
            function k(y, u) {
                return "function" == typeof y ? function(C) {
                    try {
                        m(y(C))
                    } catch (D) {
                        n(D)
                    }
                } : u
            }
            var m, n, t = new b(function(y, u) {
                m = y;
                n = u
            });
            this.Ma(k(g, m), k(h, n));
            return t
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Ma = function(g, h) {
            function k() {
                switch (m.h) {
                    case 1:
                        g(m.j);
                        break;
                    case 2:
                        h(m.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.h);
                }
            }
            var m = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.D = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var m = q(g), n = m.next(); !n.done; n = m.next()) d(n.value).Ma(h, k)
            })
        };
        b.all = function(g) {
            var h = q(g),
                k = h.next();
            return k.done ? d([]) : new b(function(m, n) {
                function t(C) {
                    return function(D) {
                        y[C] = D;
                        u--;
                        0 == u && m(y)
                    }
                }
                var y = [],
                    u = 0;
                do y.push(void 0), u++, d(k.value).Ma(t(y.length - 1), n), k = h.next(); while (!k.done)
            })
        };
        return b
    });

    function Fa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    p("WeakMap", function(a) {
        function b(k) {
            this.h = (h += Math.random() + 1).toString();
            if (k) {
                k = q(k);
                for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(k) {
            var m = typeof k;
            return "object" === m && null !== k || "function" === m
        }

        function e(k) {
            if (!Fa(k, g)) {
                var m = new c;
                ba(k, g, {
                    value: m
                })
            }
        }

        function f(k) {
            var m = Object[k];
            m && (Object[k] = function(n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && e(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [k, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(k) || 3 != n.get(m)) return !1;
                    n.delete(k);
                    n.set(m, 4);
                    return !n.has(k) && 4 == n.get(m)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, m) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!Fa(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.h] = m;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && Fa(k, g) ? k[g][this.h] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && Fa(k, g) && Fa(k[g], this.h)
        };
        b.prototype.delete = function(k) {
            return d(k) && Fa(k, g) && Fa(k[g], this.h) ? delete k[g][this.h] : !1
        };
        return b
    });
    p("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, k) {
            var m = h.h;
            return ea(function() {
                if (m) {
                    for (; m.head != h.h;) m = m.previous;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: k(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var m = k && typeof k;
            "object" == m || "function" == m ? f.has(k) ? m = f.get(k) : (m = "" + ++g, f.set(k, m)) : m = "p_" + k;
            var n = h.data_[m];
            if (n && Fa(h.data_, m))
                for (h = 0; h < n.length; h++) {
                    var t = n[h];
                    if (k !== k && t.key !== t.key || k === t.key) return {
                        id: m,
                        list: n,
                        index: h,
                        entry: t
                    }
                }
            return {
                id: m,
                list: n,
                index: -1,
                entry: void 0
            }
        }

        function e(h) {
            this.data_ = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = q(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(q([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var m = k.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.data_[m.id] = []);
            m.entry ? m.entry.value = k : (m.entry = {
                next: this.h,
                previous: this.h.previous,
                head: this.h,
                key: h,
                value: k
            }, m.list.push(m.entry), this.h.previous.next = m.entry, this.h.previous = m.entry, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.data_ = {};
            this.h = this.h.previous = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).entry
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });

    function Ga(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    p("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    p("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });

    function Ha(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("Object.setPrototypeOf", function(a) {
        return a || pa
    });
    var Ia = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Fa(d, e) && (a[e] = d[e])
        }
        return a
    };
    p("Object.assign", function(a) {
        return a || Ia
    });
    p("Set", function(a) {
        function b(c) {
            this.h = new Map;
            if (c) {
                c = q(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(q([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return this.h.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Fa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ha(this, function(b) {
                return b
            })
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return c
            })
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ga(this, b, "includes").indexOf(b, c || 0)
        }
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    p("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Fa(b, d) && c.push(b[d]);
            return c
        }
    });
    var x = this || self;

    function z(a, b, c) {
        a = a.split(".");
        c = c || x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function A(a, b) {
        a = a.split(".");
        b = b || x;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Ja() {}

    function Ka(a) {
        a.oa = void 0;
        a.getInstance = function() {
            return a.oa ? a.oa : a.oa = new a
        }
    }

    function La(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ma(a) {
        var b = La(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Na(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Oa(a) {
        return Object.prototype.hasOwnProperty.call(a, Pa) && a[Pa] || (a[Pa] = ++Qa)
    }
    var Pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Qa = 0;

    function Ra(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Sa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ta(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ta = Ra : Ta = Sa;
        return Ta.apply(null, arguments)
    }

    function Ua(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Va(a, b) {
        z(a, b, void 0)
    }

    function Wa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Z = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.oo = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Xa(a) {
        return a
    };

    function Ya(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.Tb = b)
    }
    Wa(Ya, Error);
    Ya.prototype.name = "CustomError";

    function $a(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.j = !b && /[?&]ae=1(&|$)/.test(a);
        this.l = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.h = /[?&]adurl=([^&]*)/.exec(a)) && this.h[1]) {
            try {
                var c = decodeURIComponent(this.h[1])
            } catch (d) {
                c = null
            }
            this.i = c
        }
    };

    function ab(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var bb = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        cb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        db = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        eb = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        fb = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            cb(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        };

    function gb(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ib(a, b) {
        b = bb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function jb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function kb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ma(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };

    function lb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function mb(a) {
        var b = nb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function ob(a) {
        for (var b in a) return !1;
        return !0
    }

    function pb(a, b) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = !0
    }

    function qb() {
        var a = B("PLAYER_VARS", {});
        return null !== a && "privembed" in a ? a.privembed : !1
    }

    function rb(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    }

    function sb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }

    function tb(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = tb(a[c]);
        return b
    }
    var ub = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function vb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ub.length; f++) c = ub[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var wb;

    function xb() {
        if (void 0 === wb) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Xa,
                        createScript: Xa,
                        createScriptURL: Xa
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                wb = a
            } else wb = a
        }
        return wb
    };

    function yb(a, b) {
        this.h = a === zb && b || ""
    }
    yb.prototype.ja = !0;
    yb.prototype.ia = function() {
        return this.h
    };

    function Ab(a) {
        return new yb(zb, a)
    }
    var zb = {};
    Ab("");
    var Bb = {};

    function Cb(a) {
        this.h = Bb === Bb ? a : "";
        this.ja = !0
    }
    Cb.prototype.ia = function() {
        return this.h.toString()
    };
    Cb.prototype.toString = function() {
        return this.h.toString()
    };

    function Db(a, b) {
        this.h = b === Eb ? a : ""
    }
    l = Db.prototype;
    l.ja = !0;
    l.ia = function() {
        return this.h.toString()
    };
    l.gb = !0;
    l.ab = function() {
        return 1
    };
    l.toString = function() {
        return this.h + ""
    };

    function Fb(a) {
        if (a instanceof Db && a.constructor === Db) return a.h;
        La(a);
        return "type_error:TrustedResourceUrl"
    }
    var Eb = {};

    function Gb(a) {
        var b = xb();
        a = b ? b.createScriptURL(a) : a;
        return new Db(a, Eb)
    };
    var Hb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ib = /&/g,
        Jb = /</g,
        Kb = />/g,
        Lb = /"/g,
        Mb = /'/g,
        Nb = /\x00/g,
        Ob = /[\x00&<>"']/;

    function Pb(a, b) {
        this.h = b === Qb ? a : ""
    }
    l = Pb.prototype;
    l.ja = !0;
    l.ia = function() {
        return this.h.toString()
    };
    l.gb = !0;
    l.ab = function() {
        return 1
    };
    l.toString = function() {
        return this.h.toString()
    };

    function Rb(a) {
        if (a instanceof Pb && a.constructor === Pb) return a.h;
        La(a);
        return "type_error:SafeUrl"
    }
    var Sb = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        Tb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ub = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Qb = {},
        Vb = new Pb("about:invalid#zClosurez", Qb);

    function Wb() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function E(a) {
        return -1 != Wb().indexOf(a)
    };

    function Xb() {
        return (E("Chrome") || E("CriOS")) && !E("Edge") || E("Silk")
    };
    var Yb = {};

    function Zb(a, b, c) {
        this.h = c === Yb ? a : "";
        this.i = b;
        this.ja = this.gb = !0
    }
    Zb.prototype.ab = function() {
        return this.i
    };
    Zb.prototype.ia = function() {
        return this.h.toString()
    };
    Zb.prototype.toString = function() {
        return this.h.toString()
    };

    function $b(a, b) {
        var c = xb();
        a = c ? c.createHTML(a) : a;
        return new Zb(a, b, Yb)
    };

    function ac(a, b) {
        b instanceof Pb || b instanceof Pb || (b = "object" == typeof b && b.ja ? b.ia() : String(b), Ub.test(b) || (b = "about:invalid#zClosurez"), b = new Pb(b, Qb));
        a.href = Rb(b)
    }

    function bc(a, b) {
        a.rel = "stylesheet";
        a.href = Fb(b).toString();
        (b = cc('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }

    function dc() {
        return cc("script[nonce]", void 0)
    }
    var ec = /^[\w+/_-]+[=]{0,2}$/;

    function cc(a, b) {
        b = (b || x).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ec.test(a) ? a : "" : ""
    };

    function fc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };
    var gc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function hc(a) {
        return a ? decodeURI(a) : a
    }

    function ic(a) {
        return hc(a.match(gc)[3] || null)
    }

    function jc(a) {
        var b = a.match(gc);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function kc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) kc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function lc(a) {
        var b = [],
            c;
        for (c in a) kc(c, a[c], b);
        return b.join("&")
    }

    function mc(a, b) {
        b = lc(b);
        if (b) {
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            b = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        } else b = a;
        return b
    }
    var nc = /#|$/;

    function oc() {
        return E("iPhone") && !E("iPod") && !E("iPad")
    };

    function pc(a) {
        pc[" "](a);
        return a
    }
    pc[" "] = Ja;
    var qc = E("Opera"),
        rc = E("Trident") || E("MSIE"),
        sc = E("Edge"),
        tc = E("Gecko") && !(-1 != Wb().toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        uc = -1 != Wb().toLowerCase().indexOf("webkit") && !E("Edge"),
        vc = E("Android");

    function wc() {
        var a = x.document;
        return a ? a.documentMode : void 0
    }
    var xc;
    a: {
        var yc = "",
            zc = function() {
                var a = Wb();
                if (tc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (sc) return /Edge\/([\d\.]+)/.exec(a);
                if (rc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (uc) return /WebKit\/(\S+)/.exec(a);
                if (qc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        zc && (yc = zc ? zc[1] : "");
        if (rc) {
            var Ac = wc();
            if (null != Ac && Ac > parseFloat(yc)) {
                xc = String(Ac);
                break a
            }
        }
        xc = yc
    }
    var Bc = xc,
        Cc;
    if (x.document && rc) {
        var Dc = wc();
        Cc = Dc ? Dc : parseInt(Bc, 10) || void 0
    } else Cc = void 0;
    var Ec = Cc;
    var Fc = oc() || E("iPod"),
        Gc = E("iPad");
    !E("Android") || Xb();
    Xb();
    var Hc = E("Safari") && !(Xb() || E("Coast") || E("Opera") || E("Edge") || E("Edg/") || E("OPR") || E("Firefox") || E("FxiOS") || E("Silk") || E("Android")) && !(oc() || E("iPad") || E("iPod"));
    var Ic = {},
        Jc = null;

    function Kc(a, b) {
        Ma(a);
        void 0 === b && (b = 0);
        if (!Jc) {
            Jc = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Ic[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Jc[h] && (Jc[h] = g)
                }
            }
        }
        b = Ic[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                m = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | m >> 4];
            m = b[(m & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = "" + g + k + m + h
        }
        g = 0;
        h = d;
        switch (a.length -
            f) {
            case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var Lc = "function" === typeof Uint8Array;
    var Mc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function Nc(a) {
        Object.isFrozen(a) || (Mc ? a[Mc] |= 1 : void 0 !== a.h ? a.h |= 1 : Object.defineProperties(a, {
            h: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function Oc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Pc;

    function Qc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && Lc && null != a && a instanceof Uint8Array) return Kc(a)
        }
        return a
    };

    function Rc(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Sc(a, b);
            else if (Oc(a)) {
                var c = {},
                    d;
                for (d in a) c[d] = Rc(a[d], b);
                a = c
            } else a = b(a);
            return a
        }
    }

    function Sc(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Rc(c[d], b);
        if (Array.isArray(a)) {
            var e;
            Mc ? e = a[Mc] : e = a.h;
            a = !!((null == e ? 0 : e) & 1)
        } else a = !1;
        a && Nc(c);
        return c
    }

    function Tc(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Qc(a);
        return Array.isArray(a) ? Sc(a, Tc) : a
    }

    function Uc(a) {
        return Lc && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };
    var Vc;

    function F(a, b, c) {
        var d = Vc;
        Vc = null;
        a || (a = d);
        d = this.constructor.wo;
        a || (a = d ? [d] : []);
        this.j = (d ? 0 : -1) - (this.constructor.uo || 0);
        this.h = void 0;
        this.N = a;
        a: {
            d = this.N.length;a = d - 1;
            if (d && (d = this.N[a], Oc(d))) {
                this.l = a - this.j;
                this.i = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.i = void 0) : this.l = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.l) a += this.j, (d = this.N[a]) ? Array.isArray(d) && Nc(d) : this.N[a] = Wc;
                else {
                    d = this.i || (this.i = this.N[this.l + this.j] = {});
                    var e = d[a];
                    e ? Array.isArray(e) &&
                        Nc(e) : d[a] = Wc
                }
    }
    var Wc = Object.freeze(Nc([]));

    function Xc(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b], null != c) ? c : a.N[b + a.j]
    }

    function Yc(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = Xc(a, b, c);
        null == d && (d = Wc);
        d === Wc && (d = Nc(d.slice()), G(a, b, d, c));
        return d
    }

    function G(a, b, c, d) {
        b < a.l && (void 0 === d || !d) ? a.N[b + a.j] = c : (a.i || (a.i = a.N[a.l + a.j] = {}))[b] = c;
        return a
    }

    function Zc(a, b, c, d) {
        (c = $c(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), G(a, c, void 0));
        return G(a, b, d)
    }

    function $c(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != Xc(a, e) && (0 !== c && G(a, c, void 0, !1), c = e)
        }
        return c
    }

    function ad(a, b, c, d, e) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        var f = a.h[c];
        if (f) return f;
        e = Xc(a, c, void 0 === e ? !1 : e);
        if (null == e && !d) return f;
        b = new b(e);
        return a.h[c] = b
    }

    function bd(a, b, c, d) {
        a.h || (a.h = {});
        var e = a.h[c];
        if (!e) {
            d = Yc(a, c, void 0 === d ? !1 : d);
            e = [];
            for (var f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.h[c] = e
        }
        return e
    }

    function H(a, b, c, d) {
        a.h || (a.h = {});
        var e = c ? c.N : c;
        a.h[b] = c;
        return G(a, b, e, void 0 === d ? !1 : d)
    }

    function cd(a, b, c) {
        var d = dd;
        a.h || (a.h = {});
        var e = c ? c.N : c;
        a.h[b] = c;
        Zc(a, b, d, e)
    }

    function ed(a, b, c, d) {
        var e = bd(a, c, b, void 0 === e ? !1 : e);
        c = d ? d : new c;
        a = Yc(a, b);
        e.push(c);
        a.push(c.N)
    }
    F.prototype.toJSON = function() {
        var a = this.N;
        return Pc ? a : Sc(a, Tc)
    };

    function fd(a, b) {
        return Qc(b)
    }
    F.prototype.toString = function() {
        return this.N.toString()
    };
    F.prototype.clone = function() {
        var a = this.constructor,
            b;
        Vc = b = Sc(this.N, Uc);
        a = new a(b);
        Vc = null;
        gd(a, this);
        return a
    };

    function gd(a, b) {
        b.o && (a.o = b.o.slice());
        var c = b.h;
        if (c) {
            b = b.i;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        g = +d;
                    if (Array.isArray(e)) {
                        if (e.length)
                            for (f = bd(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) gd(f[g], e[g])
                    } else(f = ad(a, e.constructor, g, void 0, f)) && gd(f, e)
                }
            }
        }
    };

    function hd(a, b) {
        var c = this.h;
        if (this.isRepeated) {
            var d = !0;
            d = void 0 === d ? !1 : d;
            if (b) {
                var e = Nc([]);
                for (var f = 0; f < b.length; f++) e[f] = b[f].N;
                a.h || (a.h = {});
                a.h[c] = b
            } else a.h && (a.h[c] = void 0), e = Wc;
            a = G(a, c, e, d)
        } else a = H(a, c, b, !0);
        return a
    };

    function id() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function jd(a) {
        this.i = !1;
        var b = a.program;
        a = a.globalName;
        var c = new id;
        this.j = c.promise;
        this.l = q((0, x[a].a)(b, function(d, e) {
            Promise.resolve().then(function() {
                c.resolve({
                    Sb: d,
                    Ac: e
                })
            })
        }, !0)).next().value;
        this.zc = c.promise.then(function() {})
    }
    jd.prototype.snapshot = function(a) {
        if (this.i) throw Error("Already disposed");
        return this.j.then(function(b) {
            var c = b.Sb;
            return new Promise(function(d) {
                c(function(e) {
                    d(e)
                }, [a.ub,
                    a.Bc
                ])
            })
        })
    };
    jd.prototype.Nb = function(a) {
        if (this.i) throw Error("Already disposed");
        return this.l([a.ub, a.Bc])
    };
    jd.prototype.dispose = function() {
        this.i = !0;
        this.j.then(function(a) {
            (a = a.Ac) && a()
        })
    };
    jd.prototype.h = function() {
        return this.i
    };
    var kd = window;
    Ab("csi.gstatic.com");
    Ab("googleads.g.doubleclick.net");
    Ab("partner.googleadservices.com");
    Ab("pubads.g.doubleclick.net");
    Ab("securepubads.g.doubleclick.net");
    Ab("tpc.googlesyndication.com");
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ld = {};

    function md() {}

    function nd(a) {
        this.h = a
    }
    r(nd, md);
    nd.prototype.toString = function() {
        return this.h
    };
    var od = new nd("about:invalid#zTSz", ld);

    function pd(a) {
        if (a instanceof md)
            if (a instanceof nd) a = a.h;
            else throw Error("");
        else a = Rb(a);
        return a
    };

    function qd(a, b) {
        a.src = Fb(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function rd(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    l = rd.prototype;
    l.clone = function() {
        return new rd(this.x, this.y)
    };
    l.equals = function(a) {
        return a instanceof rd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    l.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function sd(a, b) {
        this.width = a;
        this.height = b
    }
    l = sd.prototype;
    l.clone = function() {
        return new sd(this.width, this.height)
    };
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function td(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function ud(a, b) {
        lb(b, function(c, d) {
            c && "object" == typeof c && c.ja && (c = c.ia());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : vd.hasOwnProperty(d) ? a.setAttribute(vd[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var vd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function wd(a, b, c) {
        var d = arguments,
            e = document,
            f = d[1],
            g = xd(e, String(d[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : ud(g, f));
        2 < d.length && yd(e, g, d);
        return g
    }

    function yd(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            if (!Ma(f) || Na(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Na(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                cb(g ? jb(f) : f, d)
            }
        }
    }

    function xd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function zd(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };

    function Bd(a) {
        var b = Cd;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b)
    }

    function Dd() {
        var a = [];
        Bd(function(b) {
            a.push(b)
        });
        return a
    }
    var Cd = {
            Qc: "allow-forms",
            Rc: "allow-modals",
            Sc: "allow-orientation-lock",
            Tc: "allow-pointer-lock",
            Uc: "allow-popups",
            Vc: "allow-popups-to-escape-sandbox",
            Wc: "allow-presentation",
            Xc: "allow-same-origin",
            Yc: "allow-scripts",
            Zc: "allow-top-navigation",
            bd: "allow-top-navigation-by-user-activation"
        },
        Ed = ab(function() {
            return Dd()
        });

    function Fd() {
        var a = Gd(),
            b = {};
        cb(Ed(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function Gd() {
        var a = void 0 === a ? document : a;
        return a.createElement("iframe")
    };

    function Hd(a) {
        this.isValid = a
    }

    function Id(a) {
        return new Hd(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Jd = [Id("data"), Id("http"), Id("https"), Id("mailto"), Id("ftp"), new Hd(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Kd(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    };
    var Ld = (new Date).getTime();
    var Md = new function(a, b) {
        this.flag = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1959);

    function Nd(a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
            c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };

    function Od() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0
        }

        function b(t) {
            for (var y = g, u = 0; 64 > u; u += 4) y[u / 4] = t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3];
            for (u = 16; 80 > u; u++) t = y[u - 3] ^ y[u - 8] ^ y[u - 14] ^ y[u - 16], y[u] = (t << 1 | t >>> 31) & 4294967295;
            t = e[0];
            var C = e[1],
                D = e[2],
                L = e[3],
                O = e[4];
            for (u = 0; 80 > u; u++) {
                if (40 > u)
                    if (20 > u) {
                        var R = L ^ C & (D ^ L);
                        var V = 1518500249
                    } else R = C ^ D ^ L, V = 1859775393;
                else 60 > u ? (R = C & D | L & (C | D), V = 2400959708) : (R = C ^ D ^ L, V = 3395469782);
                R = ((t << 5 | t >>> 27) & 4294967295) + R + O + V + y[u] & 4294967295;
                O = L;
                L = D;
                D = (C << 30 | C >>> 2) & 4294967295;
                C = t;
                t = R
            }
            e[0] = e[0] + t & 4294967295;
            e[1] = e[1] + C & 4294967295;
            e[2] =
                e[2] + D & 4294967295;
            e[3] = e[3] + L & 4294967295;
            e[4] = e[4] + O & 4294967295
        }

        function c(t, y) {
            if ("string" === typeof t) {
                t = unescape(encodeURIComponent(t));
                for (var u = [], C = 0, D = t.length; C < D; ++C) u.push(t.charCodeAt(C));
                t = u
            }
            y || (y = t.length);
            u = 0;
            if (0 == m)
                for (; u + 64 < y;) b(t.slice(u, u + 64)), u += 64, n += 64;
            for (; u < y;)
                if (f[m++] = t[u++], n++, 64 == m)
                    for (m = 0, b(f); u + 64 < y;) b(t.slice(u, u + 64)), u += 64, n += 64
        }

        function d() {
            var t = [],
                y = 8 * n;
            56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
            for (var u = 63; 56 <= u; u--) f[u] = y & 255, y >>>= 8;
            b(f);
            for (u = y = 0; 5 > u; u++)
                for (var C = 24; 0 <= C; C -= 8) t[y++] = e[u] >> C & 255;
            return t
        }
        for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Wb: function() {
                for (var t = d(), y = "", u = 0; u < t.length; u++) y += "0123456789ABCDEF".charAt(Math.floor(t[u] / 16)) + "0123456789ABCDEF".charAt(t[u] % 16);
                return y
            }
        }
    };

    function Pd(a, b, c) {
        var d = String(x.location.href);
        return d && a && b ? [b, Qd(Nd(d), a, c || null)].join(" ") : null
    }

    function Qd(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], cb(d, function(h) {
            e.push(h)
        }), Rd(e.join(" "));
        var f = [],
            g = [];
        cb(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        cb(d, function(h) {
            e.push(h)
        });
        a = Rd(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function Rd(a) {
        var b = Od();
        b.update(a);
        return b.Wb().toLowerCase()
    };
    var Sd = {};

    function Td(a) {
        this.h = a || {
            cookie: ""
        }
    }
    l = Td.prototype;
    l.isEnabled = function() {
        if (!x.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            Sa: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Do;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Sa
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.h.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Hb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Sa: 0,
            path: b,
            domain: c
        });
        return d
    };
    l.eb = function() {
        return Ud(this).keys
    };
    l.isEmpty = function() {
        return !this.h.cookie
    };
    l.clear = function() {
        for (var a = Ud(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function Ud(a) {
        a = (a.h.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Hb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var Vd = new Td("undefined" == typeof document ? null : document);

    function Wd(a) {
        return !!Sd.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }

    function Xd(a) {
        a = void 0 === a ? !1 : a;
        var b = x.__SAPISID || x.__APISID || x.__3PSAPISID || x.__OVERRIDE_SID;
        Wd(a) && (b = b || x.__1PSAPISID);
        if (b) return !0;
        var c = new Td(document);
        b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID");
        Wd(a) && (b = b || c.get("__Secure-1PAPISID"));
        return !!b
    }

    function Yd(a, b, c, d) {
        (a = x[a]) || (a = (new Td(document)).get(b));
        return a ? Pd(a, c, d) : null
    }

    function Zd(a) {
        var b = void 0 === b ? !1 : b;
        var c = Nd(String(x.location.href)),
            d = [];
        if (Xd(b)) {
            c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:");
            var e = c ? x.__SAPISID : x.__APISID;
            e || (e = new Td(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"));
            (e = e ? Pd(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
            c && Wd(b) && ((b = Yd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = Yd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a))
        }
        return 0 ==
            d.length ? null : d.join(" ")
    };

    function $d(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };

    function ae(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            Ma(d) ? ae.apply(null, d) : $d(d)
        }
    };

    function I() {
        this.D = this.D;
        this.o = this.o
    }
    I.prototype.D = !1;
    I.prototype.h = function() {
        return this.D
    };
    I.prototype.dispose = function() {
        this.D || (this.D = !0, this.H())
    };

    function be(a, b) {
        a.D ? b() : (a.o || (a.o = []), a.o.push(b))
    }
    I.prototype.H = function() {
        if (this.o)
            for (; this.o.length;) this.o.shift()()
    };

    function ce(a, b) {
        this.type = a;
        this.h = this.target = b;
        this.defaultPrevented = this.j = !1
    }
    ce.prototype.stopPropagation = function() {
        this.j = !0
    };
    ce.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };

    function de(a) {
        var b = A("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (g) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || x.$googDebugFname || b
        } catch (g) {
            e = "Not available", c = !0
        }
        b = ee(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message;
            if (null ==
                c) {
                if (a.constructor && a.constructor instanceof Function) {
                    if (a.constructor.name) c = a.constructor.name;
                    else if (c = a.constructor, fe[c]) c = fe[c];
                    else {
                        c = String(c);
                        if (!fe[c]) {
                            var f = /function\s+([^\(]+)/m.exec(c);
                            fe[c] = f ? f[1] : "[Anonymous]"
                        }
                        c = fe[c]
                    }
                    c = 'Unknown Error of type "' + c + '"'
                } else c = "Unknown Error of unknown type";
                "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
            }
            return {
                message: c,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: b || "Not available"
            }
        }
        a.stack =
            b;
        return {
            message: a.message,
            name: a.name,
            lineNumber: a.lineNumber,
            fileName: a.fileName,
            stack: a.stack
        }
    }

    function ee(a, b) {
        b || (b = {});
        b[ge(a)] = !0;
        var c = a.stack || "";
        (a = a.Tb) && !b[ge(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += ee(a, b));
        return c
    }

    function ge(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    }
    var fe = {};
    var he = function() {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            x.addEventListener("test", Ja, b), x.removeEventListener("test", Ja, b)
        } catch (c) {}
        return a
    }();

    function ie(a, b) {
        ce.call(this, a ? a.type : "");
        this.relatedTarget = this.h = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        a && this.init(a, b)
    }
    Wa(ie, ce);
    var je = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    ie.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.h = b;
        if (b = a.relatedTarget) {
            if (tc) {
                a: {
                    try {
                        pc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
            0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : je[a.pointerType] || "";
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && ie.Z.preventDefault.call(this)
    };
    ie.prototype.stopPropagation = function() {
        ie.Z.stopPropagation.call(this);
        this.i.stopPropagation ? this.i.stopPropagation() : this.i.cancelBubble = !0
    };
    ie.prototype.preventDefault = function() {
        ie.Z.preventDefault.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var ke = "closure_listenable_" + (1E6 * Math.random() | 0);
    var le = 0;

    function me(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Pa = e;
        this.key = ++le;
        this.Ca = this.La = !1
    }

    function ne(a) {
        a.Ca = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Pa = null
    };

    function oe(a) {
        this.src = a;
        this.listeners = {};
        this.h = 0
    }
    oe.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.h++);
        var g = pe(a, b, d, e); - 1 < g ? (b = a[g], c || (b.La = !1)) : (b = new me(b, this.src, f, !!d, e), b.La = c, a.push(b));
        return b
    };
    oe.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = pe(e, b, c, d);
        return -1 < b ? (ne(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.h--), !0) : !1
    };

    function qe(a, b) {
        var c = b.type;
        c in a.listeners && ib(a.listeners[c], b) && (ne(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.h--))
    }

    function pe(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ca && f.listener == b && f.capture == !!c && f.Pa == d) return e
        }
        return -1
    };
    var re = "closure_lm_" + (1E6 * Math.random() | 0),
        se = {},
        te = 0;

    function ue(a, b, c, d, e) {
        if (d && d.once) ve(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) ue(a, b[f], c, d, e);
        else c = we(c), a && a[ke] ? a.ba(b, c, Na(d) ? !!d.capture : !!d, e) : xe(a, b, c, !1, d, e)
    }

    function xe(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Na(e) ? !!e.capture : !!e,
            h = ye(a);
        h || (a[re] = h = new oe(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = ze();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) he || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Ae(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            te++
        }
    }

    function ze() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Be;
        return a
    }

    function ve(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) ve(a, b[f], c, d, e);
        else c = we(c), a && a[ke] ? a.i.add(String(b), c, !0, Na(d) ? !!d.capture : !!d, e) : xe(a, b, c, !0, d, e)
    }

    function Ce(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ce(a, b[f], c, d, e);
        else(d = Na(d) ? !!d.capture : !!d, c = we(c), a && a[ke]) ? a.i.remove(String(b), c, d, e) : a && (a = ye(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = pe(b, c, d, e)), (c = -1 < a ? b[a] : null) && De(c))
    }

    function De(a) {
        if ("number" !== typeof a && a && !a.Ca) {
            var b = a.src;
            if (b && b[ke]) qe(b.i, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ae(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                te--;
                (c = ye(b)) ? (qe(c, a), 0 == c.h && (c.src = null, b[re] = null)) : ne(a)
            }
        }
    }

    function Ae(a) {
        return a in se ? se[a] : se[a] = "on" + a
    }

    function Be(a, b) {
        if (a.Ca) a = !0;
        else {
            b = new ie(b, this);
            var c = a.listener,
                d = a.Pa || a.src;
            a.La && De(a);
            a = c.call(d, b)
        }
        return a
    }

    function ye(a) {
        a = a[re];
        return a instanceof oe ? a : null
    }
    var Ee = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function we(a) {
        if ("function" === typeof a) return a;
        a[Ee] || (a[Ee] = function(b) {
            return a.handleEvent(b)
        });
        return a[Ee]
    };

    function Fe() {
        I.call(this);
        this.i = new oe(this);
        this.Y = this;
        this.K = null
    }
    Wa(Fe, I);
    Fe.prototype[ke] = !0;
    Fe.prototype.addEventListener = function(a, b, c, d) {
        ue(this, a, b, c, d)
    };
    Fe.prototype.removeEventListener = function(a, b, c, d) {
        Ce(this, a, b, c, d)
    };

    function Ge(a, b) {
        var c = a.K;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.K) d.push(c), ++e
        }
        a = a.Y;
        c = b.type || b;
        "string" === typeof b ? b = new ce(b, a) : b instanceof ce ? b.target = b.target || a : (e = b, b = new ce(c, a), vb(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.j && 0 <= f; f--) {
                var g = b.h = d[f];
                e = He(g, c, !0, b) && e
            }
        b.j || (g = b.h = a, e = He(g, c, !0, b) && e, b.j || (e = He(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.j && f < d.length; f++) g = b.h = d[f], e = He(g, c, !1, b) && e
    }
    Fe.prototype.H = function() {
        Fe.Z.H.call(this);
        if (this.i) {
            var a = this.i,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, ne(d[e]);
                delete a.listeners[c];
                a.h--
            }
        }
        this.K = null
    };
    Fe.prototype.ba = function(a, b, c, d) {
        return this.i.add(String(a), b, !1, c, d)
    };

    function He(a, b, c, d) {
        b = a.i.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ca && g.capture == c) {
                var h = g.listener,
                    k = g.Pa || g.src;
                g.La && qe(a.i, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function Ie(a) {
        var b, c;
        Fe.call(this);
        var d = this;
        this.A = this.l = 0;
        this.V = null !== a && void 0 !== a ? a : {
            M: function(e, f) {
                return setTimeout(e, f)
            },
            U: clearTimeout
        };
        this.j = null !== (c = null === (b = window.navigator) || void 0 === b ? void 0 : b.onLine) && void 0 !== c ? c : !0;
        this.m = function() {
            return w(function(e) {
                return v(e, Je(d), 0)
            })
        };
        window.addEventListener("offline", this.m);
        window.addEventListener("online", this.m);
        this.A || Ke(this)
    }
    r(Ie, Fe);
    Ie.prototype.dispose = function() {
        window.removeEventListener("offline", this.m);
        window.removeEventListener("online", this.m);
        this.V.U(this.A);
        delete Ie.h
    };
    Ie.prototype.G = function() {
        return this.j
    };

    function Ke(a) {
        a.A = a.V.M(function() {
            var b;
            return w(function(c) {
                if (1 == c.h) return a.j ? (null === (b = window.navigator) || void 0 === b ? 0 : b.onLine) ? c.s(3) : v(c, Je(a), 3) : v(c, Je(a), 3);
                Ke(a);
                c.h = 0
            })
        }, 3E4)
    }

    function Je(a, b) {
        return a.u ? a.u : a.u = new Promise(function(c) {
            var d, e, f;
            return w(function(g) {
                switch (g.h) {
                    case 1:
                        return d = window.AbortController ? new window.AbortController : void 0, e = null === d || void 0 === d ? void 0 : d.signal, f = !1, ta(g, 2, 3), d && (a.l = a.V.M(function() {
                            d.abort()
                        }, b || 2E4)), v(g, fetch("/generate_204", {
                            method: "HEAD",
                            signal: e
                        }), 5);
                    case 5:
                        f = !0;
                    case 3:
                        wa(g);
                        a.u = void 0;
                        a.l && (a.V.U(a.l), a.l = 0);
                        f !== a.j && (a.j = f, a.j ? Ge(a, "networkstatus-online") : Ge(a, "networkstatus-offline"));
                        c(f);
                        xa(g);
                        break;
                    case 2:
                        va(g), f = !1, g.s(3)
                }
            })
        })
    };
    var Le = {
        Vn: "WEB_DISPLAY_MODE_UNKNOWN",
        Rn: "WEB_DISPLAY_MODE_BROWSER",
        Tn: "WEB_DISPLAY_MODE_MINIMAL_UI",
        Un: "WEB_DISPLAY_MODE_STANDALONE",
        Sn: "WEB_DISPLAY_MODE_FULLSCREEN"
    };

    function Me() {
        this.data_ = [];
        this.h = -1
    }
    Me.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.data_[a] != b && (this.data_[a] = b, this.h = -1)
    };
    Me.prototype.get = function(a) {
        return !!this.data_[a]
    };

    function Ne(a) {
        -1 == a.h && (a.h = fb(a.data_, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.h
    };

    function Oe() {
        var a = {};
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        }
    };

    function Pe(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    Pe.prototype.get = function() {
        if (0 < this.i) {
            this.i--;
            var a = this.h;
            this.h = a.next;
            a.next = null
        } else a = this.j();
        return a
    };

    function Qe(a, b) {
        a.l(b);
        100 > a.i && (a.i++, b.next = a.h, a.h = b)
    };
    var Re;

    function Se() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
            var e = xd(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Ta(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.sb;
                    c.sb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    sb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            x.setTimeout(e, 0)
        }
    };

    function Te(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Ue() {
        this.i = this.h = null
    }
    Ue.prototype.add = function(a, b) {
        var c = Ve.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    };
    Ue.prototype.remove = function() {
        var a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    };
    var Ve = new Pe(function() {
        return new We
    }, function(a) {
        return a.reset()
    });

    function We() {
        this.next = this.scope = this.h = null
    }
    We.prototype.set = function(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    };
    We.prototype.reset = function() {
        this.next = this.scope = this.h = null
    };

    function Xe(a, b) {
        Ye || Ze();
        $e || (Ye(), $e = !0);
        af.add(a, b)
    }
    var Ye;

    function Ze() {
        if (x.Promise && x.Promise.resolve) {
            var a = x.Promise.resolve(void 0);
            Ye = function() {
                a.then(bf)
            }
        } else Ye = function() {
            var b = bf;
            "function" !== typeof x.setImmediate || x.Window && x.Window.prototype && !E("Edge") && x.Window.prototype.setImmediate == x.setImmediate ? (Re || (Re = Se()), Re(b)) : x.setImmediate(b)
        }
    }
    var $e = !1,
        af = new Ue;

    function bf() {
        for (var a; a = af.remove();) {
            try {
                a.h.call(a.scope)
            } catch (b) {
                Te(b)
            }
            Qe(Ve, a)
        }
        $e = !1
    };

    function cf(a, b) {
        this.h = a[x.Symbol.iterator]();
        this.i = b;
        this.j = 0
    }
    cf.prototype[Symbol.iterator] = function() {
        return this
    };
    cf.prototype.next = function() {
        var a = this.h.next();
        return {
            value: a.done ? void 0 : this.i.call(void 0, a.value, this.j++),
            done: a.done
        }
    };

    function df(a, b) {
        return new cf(a, b)
    };

    function ef() {
        this.blockSize = -1
    };

    function ff() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.h = [];
        this.o = [];
        this.m = [];
        this.j = [];
        this.j[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.j[a] = 0;
        this.l = this.i = 0;
        this.reset()
    }
    Wa(ff, ef);
    ff.prototype.reset = function() {
        this.h[0] = 1732584193;
        this.h[1] = 4023233417;
        this.h[2] = 2562383102;
        this.h[3] = 271733878;
        this.h[4] = 3285377520;
        this.l = this.i = 0
    };

    function gf(a, b, c) {
        c || (c = 0);
        var d = a.m;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.h[0];
        c = a.h[1];
        var g = a.h[2],
            h = a.h[3],
            k = a.h[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var m = 1518500249
                } else f = c ^ g ^ h, m = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), m = 2400959708) :
                (f = c ^ g ^ h, m = 3395469782);
            f = (b << 5 | b >>> 27) + f + k + m + d[e] & 4294967295;
            k = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.h[0] = a.h[0] + b & 4294967295;
        a.h[1] = a.h[1] + c & 4294967295;
        a.h[2] = a.h[2] + g & 4294967295;
        a.h[3] = a.h[3] + h & 4294967295;
        a.h[4] = a.h[4] + k & 4294967295
    }
    ff.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.o, f = this.i; d < b;) {
                if (0 == f)
                    for (; d <= c;) gf(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            gf(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                gf(this, e);
                                f = 0;
                                break
                            }
            }
            this.i = f;
            this.l += b
        }
    };
    ff.prototype.digest = function() {
        var a = [],
            b = 8 * this.l;
        56 > this.i ? this.update(this.j, 56 - this.i) : this.update(this.j, this.blockSize - (this.i - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.o[c] = b & 255, b /= 256;
        gf(this, this.o);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.h[c] >> d & 255, ++b;
        return a
    };

    function hf(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function jf(a, b) {
        "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }

    function kf(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : hf(a).match(/\S+/g) || [], b = 0 <= bb(a, b));
        return b
    }

    function lf() {
        var a = document.body;
        a.classList ? a.classList.remove("inverted-hdpi") : kf(a, "inverted-hdpi") && jf(a, Array.prototype.filter.call(a.classList ? a.classList : hf(a).match(/\S+/g) || [], function(b) {
            return "inverted-hdpi" != b
        }).join(" "))
    };
    var mf = "StopIteration" in x ? x.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function nf() {}
    nf.prototype.da = function() {
        throw mf;
    };
    nf.prototype.next = function() {
        return of
    };
    var of = {
        done: !0,
        value: void 0
    };

    function pf(a) {
        return {
            value: a,
            done: !1
        }
    }

    function qf(a) {
        if (a.done) throw mf;
        return a.value
    }
    nf.prototype.T = function() {
        return this
    };

    function rf(a) {
        if (a instanceof sf || a instanceof tf || a instanceof uf) return a;
        if ("function" == typeof a.da) return new sf(function() {
            return vf(a)
        });
        if ("function" == typeof a[Symbol.iterator]) return new sf(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.T) return new sf(function() {
            return vf(a.T())
        });
        throw Error("Not an iterator or iterable.");
    }

    function vf(a) {
        if (!(a instanceof nf)) return a;
        var b = !1;
        return {
            next: function() {
                for (var c; !b;) try {
                    c = a.da();
                    break
                } catch (d) {
                    if (d !== mf) throw d;
                    b = !0
                }
                return {
                    value: c,
                    done: b
                }
            }
        }
    }

    function sf(a) {
        this.h = a
    }
    sf.prototype.T = function() {
        return new tf(this.h())
    };
    sf.prototype[Symbol.iterator] = function() {
        return new uf(this.h())
    };
    sf.prototype.i = function() {
        return new uf(this.h())
    };

    function tf(a) {
        this.h = a
    }
    r(tf, nf);
    tf.prototype.da = function() {
        var a = this.h.next();
        if (a.done) throw mf;
        return a.value
    };
    tf.prototype.next = function() {
        return this.h.next()
    };
    tf.prototype[Symbol.iterator] = function() {
        return new uf(this.h)
    };
    tf.prototype.i = function() {
        return new uf(this.h)
    };

    function uf(a) {
        sf.call(this, function() {
            return a
        });
        this.j = a
    }
    r(uf, sf);
    uf.prototype.next = function() {
        return this.j.next()
    };

    function wf(a, b) {
        this.i = {};
        this.h = [];
        this.la = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof wf)
                for (c = a.eb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    l = wf.prototype;
    l.eb = function() {
        xf(this);
        return this.h.concat()
    };
    l.has = function(a) {
        return yf(this.i, a)
    };
    l.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || zf;
        xf(this);
        for (var c, d = 0; c = this.h[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };

    function zf(a, b) {
        return a === b
    }
    l.isEmpty = function() {
        return 0 == this.size
    };
    l.clear = function() {
        this.i = {};
        this.la = this.size = this.h.length = 0
    };
    l.remove = function(a) {
        return this.delete(a)
    };
    l.delete = function(a) {
        return yf(this.i, a) ? (delete this.i[a], --this.size, this.la++, this.h.length > 2 * this.size && xf(this), !0) : !1
    };

    function xf(a) {
        if (a.size != a.h.length) {
            for (var b = 0, c = 0; b < a.h.length;) {
                var d = a.h[b];
                yf(a.i, d) && (a.h[c++] = d);
                b++
            }
            a.h.length = c
        }
        if (a.size != a.h.length) {
            var e = {};
            for (c = b = 0; b < a.h.length;) d = a.h[b], yf(e, d) || (a.h[c++] = d, e[d] = 1), b++;
            a.h.length = c
        }
    }
    l.get = function(a, b) {
        return yf(this.i, a) ? this.i[a] : b
    };
    l.set = function(a, b) {
        yf(this.i, a) || (this.size += 1, this.h.push(a), this.la++);
        this.i[a] = b
    };
    l.forEach = function(a, b) {
        for (var c = this.eb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.clone = function() {
        return new wf(this)
    };
    l.keys = function() {
        return rf(this.T(!0)).i()
    };
    l.values = function() {
        return rf(this.T(!1)).i()
    };
    l.entries = function() {
        var a = this;
        return df(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    l.T = function(a) {
        xf(this);
        var b = 0,
            c = this.la,
            d = this,
            e = new nf;
        e.next = function() {
            if (c != d.la) throw Error("The map has changed since the iterator was created");
            if (b >= d.h.length) return of;
            var g = d.h[b++];
            return pf(a ? g : d.i[g])
        };
        var f = e.next;
        e.da = function() {
            return qf(f.call(e))
        };
        return e
    };

    function yf(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Af(a) {
        Bf();
        return Gb(a)
    }
    var Bf = Ja;

    function Cf(a) {
        var b = [];
        Df(new Ef, a, b);
        return b.join("")
    }

    function Ef() {}

    function Df(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Df(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Ff(d, c), c.push(":"), Df(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Ff(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) &&
                        !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Gf = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Hf = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Ff(a, b) {
        b.push('"', a.replace(Hf, function(c) {
            var d = Gf[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Gf[c] = d);
            return d
        }), '"')
    };

    function If(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Jf(a) {
        this.h = 0;
        this.D = void 0;
        this.l = this.i = this.j = null;
        this.o = this.m = !1;
        if (a != Ja) try {
            var b = this;
            a.call(void 0, function(c) {
                Kf(b, 2, c)
            }, function(c) {
                Kf(b, 3, c)
            })
        } catch (c) {
            Kf(this, 3, c)
        }
    }

    function Lf() {
        this.next = this.context = this.onRejected = this.i = this.h = null;
        this.j = !1
    }
    Lf.prototype.reset = function() {
        this.context = this.onRejected = this.i = this.h = null;
        this.j = !1
    };
    var Mf = new Pe(function() {
        return new Lf
    }, function(a) {
        a.reset()
    });

    function Nf(a, b, c) {
        var d = Mf.get();
        d.i = a;
        d.onRejected = b;
        d.context = c;
        return d
    }

    function Of(a) {
        return new Jf(function(b, c) {
            c(a)
        })
    }
    Jf.prototype.then = function(a, b, c) {
        return Pf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Jf.prototype.$goog_Thenable = !0;

    function Qf(a, b) {
        return Pf(a, null, b, void 0)
    }
    Jf.prototype.cancel = function(a) {
        if (0 == this.h) {
            var b = new Rf(a);
            Xe(function() {
                Sf(this, b)
            }, this)
        }
    };

    function Sf(a, b) {
        if (0 == a.h)
            if (a.j) {
                var c = a.j;
                if (c.i) {
                    for (var d = 0, e = null, f = null, g = c.i; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.h && 1 == d ? Sf(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Tf(c), Uf(c, e, 3, b)))
                }
                a.j = null
            } else Kf(a, 3, b)
    }

    function Vf(a, b) {
        a.i || 2 != a.h && 3 != a.h || Wf(a);
        a.l ? a.l.next = b : a.i = b;
        a.l = b
    }

    function Pf(a, b, c, d) {
        var e = Nf(null, null, null);
        e.h = new Jf(function(f, g) {
            e.i = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.onRejected = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof Rf ? g(h) : f(k)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.h.j = a;
        Vf(a, e);
        return e.h
    }
    Jf.prototype.A = function(a) {
        this.h = 0;
        Kf(this, 2, a)
    };
    Jf.prototype.K = function(a) {
        this.h = 0;
        Kf(this, 3, a)
    };

    function Kf(a, b, c) {
        if (0 == a.h) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.h = 1;
            a: {
                var d = c,
                    e = a.A,
                    f = a.K;
                if (d instanceof Jf) {
                    Vf(d, Nf(e || Ja, f || null, a));
                    var g = !0
                } else if (If(d)) d.then(e, f, a),
                g = !0;
                else {
                    if (Na(d)) try {
                        var h = d.then;
                        if ("function" === typeof h) {
                            Xf(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (k) {
                        f.call(a, k);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.D = c, a.h = b, a.j = null, Wf(a), 3 != b || c instanceof Rf || Yf(a, c))
        }
    }

    function Xf(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function Wf(a) {
        a.m || (a.m = !0, Xe(a.u, a))
    }

    function Tf(a) {
        var b = null;
        a.i && (b = a.i, a.i = b.next, b.next = null);
        a.i || (a.l = null);
        return b
    }
    Jf.prototype.u = function() {
        for (var a; a = Tf(this);) Uf(this, a, this.h, this.D);
        this.m = !1
    };

    function Uf(a, b, c, d) {
        if (3 == c && b.onRejected && !b.j)
            for (; a && a.o; a = a.j) a.o = !1;
        if (b.h) b.h.j = null, Zf(b, c, d);
        else try {
            b.j ? b.i.call(b.context) : Zf(b, c, d)
        } catch (e) {
            $f.call(null, e)
        }
        Qe(Mf, b)
    }

    function Zf(a, b, c) {
        2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    }

    function Yf(a, b) {
        a.o = !0;
        Xe(function() {
            a.o && $f.call(null, b)
        })
    }
    var $f = Te;

    function Rf(a) {
        Ya.call(this, a)
    }
    Wa(Rf, Ya);
    Rf.prototype.name = "cancel";

    function J(a) {
        I.call(this);
        this.u = 1;
        this.l = [];
        this.m = 0;
        this.i = [];
        this.j = {};
        this.A = !!a
    }
    Wa(J, I);
    l = J.prototype;
    l.subscribe = function(a, b, c) {
        var d = this.j[a];
        d || (d = this.j[a] = []);
        var e = this.u;
        this.i[e] = a;
        this.i[e + 1] = b;
        this.i[e + 2] = c;
        this.u = e + 3;
        d.push(e);
        return e
    };

    function ag(a, b, c, d) {
        if (b = a.j[b]) {
            var e = a.i;
            (b = b.find(function(f) {
                return e[f + 1] == c && e[f + 2] == d
            })) && a.ya(b)
        }
    }
    l.ya = function(a) {
        var b = this.i[a];
        if (b) {
            var c = this.j[b];
            0 != this.m ? (this.l.push(a), this.i[a + 1] = Ja) : (c && ib(c, a), delete this.i[a], delete this.i[a + 1], delete this.i[a + 2])
        }
        return !!b
    };
    l.ma = function(a, b) {
        var c = this.j[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.A)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    bg(this.i[g + 1], this.i[g + 2], d)
                } else {
                    this.m++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.h(); e++) g = c[e], this.i[g + 1].apply(this.i[g + 2], d)
                    } finally {
                        if (this.m--, 0 < this.l.length && 0 == this.m)
                            for (; c = this.l.pop();) this.ya(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function bg(a, b, c) {
        Xe(function() {
            a.apply(b, c)
        })
    }
    l.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.ya, this), delete this.j[a])
        } else this.i.length = 0, this.j = {}
    };
    l.H = function() {
        J.Z.H.call(this);
        this.clear();
        this.l.length = 0
    };

    function cg(a) {
        this.h = a
    }
    cg.prototype.set = function(a, b) {
        void 0 === b ? this.h.remove(a) : this.h.set(a, Cf(b))
    };
    cg.prototype.get = function(a) {
        try {
            var b = this.h.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    cg.prototype.remove = function(a) {
        this.h.remove(a)
    };

    function dg(a) {
        this.h = a
    }
    Wa(dg, cg);

    function eg(a) {
        this.data = a
    }

    function fg(a) {
        return void 0 === a || a instanceof eg ? a : new eg(a)
    }
    dg.prototype.set = function(a, b) {
        dg.Z.set.call(this, a, fg(b))
    };
    dg.prototype.i = function(a) {
        a = dg.Z.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    dg.prototype.get = function(a) {
        if (a = this.i(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function gg(a) {
        this.h = a
    }
    Wa(gg, dg);
    gg.prototype.set = function(a, b, c) {
        if (b = fg(b)) {
            if (c) {
                if (c < Date.now()) {
                    gg.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Date.now()
        }
        gg.Z.set.call(this, a, b)
    };
    gg.prototype.i = function(a) {
        var b = gg.Z.i.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Date.now() || c && c > Date.now()) gg.prototype.remove.call(this, a);
            else return b
        }
    };

    function hg() {};

    function ig() {}
    Wa(ig, hg);
    ig.prototype[Symbol.iterator] = function() {
        return rf(this.T(!0)).i()
    };
    ig.prototype.clear = function() {
        var a = Array.from(this);
        a = q(a);
        for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value)
    };

    function jg(a) {
        this.h = a
    }
    Wa(jg, ig);
    l = jg.prototype;
    l.isAvailable = function() {
        if (!this.h) return !1;
        try {
            return this.h.setItem("__sak", "1"), this.h.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    l.set = function(a, b) {
        try {
            this.h.setItem(a, b)
        } catch (c) {
            if (0 == this.h.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    l.get = function(a) {
        a = this.h.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    l.remove = function(a) {
        this.h.removeItem(a)
    };
    l.T = function(a) {
        var b = 0,
            c = this.h,
            d = new nf;
        d.next = function() {
            if (b >= c.length) return of;
            var f = c.key(b++);
            if (a) return pf(f);
            f = c.getItem(f);
            if ("string" !== typeof f) throw "Storage mechanism: Invalid value was encountered";
            return pf(f)
        };
        var e = d.next;
        d.da = function() {
            return qf(e.call(d))
        };
        return d
    };
    l.clear = function() {
        this.h.clear()
    };
    l.key = function(a) {
        return this.h.key(a)
    };

    function kg() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.h = a
    }
    Wa(kg, jg);

    function lg(a, b) {
        this.i = a;
        this.h = null;
        var c;
        if (c = rc) c = !(9 <= Number(Ec));
        if (c) {
            mg || (mg = new wf);
            this.h = mg.get(a);
            this.h || (b ? this.h = document.getElementById(b) : (this.h = document.createElement("userdata"), this.h.addBehavior("#default#userData"), document.body.appendChild(this.h)), mg.set(a, this.h));
            try {
                this.h.load(this.i)
            } catch (d) {
                this.h = null
            }
        }
    }
    Wa(lg, ig);
    var ng = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        mg = null;

    function og(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return ng[b]
        })
    }
    l = lg.prototype;
    l.isAvailable = function() {
        return !!this.h
    };
    l.set = function(a, b) {
        this.h.setAttribute(og(a), b);
        pg(this)
    };
    l.get = function(a) {
        a = this.h.getAttribute(og(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    l.remove = function(a) {
        this.h.removeAttribute(og(a));
        pg(this)
    };
    l.T = function(a) {
        var b = 0,
            c = this.h.XMLDocument.documentElement.attributes,
            d = new nf;
        d.next = function() {
            if (b >= c.length) return of;
            var f = c[b++];
            if (a) return pf(decodeURIComponent(f.nodeName.replace(/\./g, "%")).substr(1));
            f = f.nodeValue;
            if ("string" !== typeof f) throw "Storage mechanism: Invalid value was encountered";
            return pf(f)
        };
        var e = d.next;
        d.da = function() {
            return qf(e.call(d))
        };
        return d
    };
    l.clear = function() {
        for (var a = this.h.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        pg(this)
    };

    function pg(a) {
        try {
            a.h.save(a.i)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function qg(a, b) {
        this.i = a;
        this.h = b + "::"
    }
    Wa(qg, ig);
    qg.prototype.set = function(a, b) {
        this.i.set(this.h + a, b)
    };
    qg.prototype.get = function(a) {
        return this.i.get(this.h + a)
    };
    qg.prototype.remove = function(a) {
        this.i.remove(this.h + a)
    };
    qg.prototype.T = function(a) {
        var b = this.i.T(!0),
            c = this,
            d = new nf;
        d.next = function() {
            try {
                var f = b.da()
            } catch (g) {
                if (g === mf) return of;
                throw g;
            }
            for (; f.substr(0, c.h.length) != c.h;) try {
                f = b.da()
            } catch (g) {
                if (g === mf) return of;
                throw g;
            }
            return pf(a ? f.substr(c.h.length) : c.i.get(f))
        };
        var e = d.next;
        d.da = function() {
            return qf(e.call(d))
        };
        return d
    };

    function rg(a) {
        F.call(this, a)
    }
    r(rg, F);
    rg.prototype.getKey = function() {
        return Xc(this, 1)
    };
    rg.prototype.getValue = function() {
        return Xc(this, 2 === $c(this, sg) ? 2 : -1)
    };
    rg.prototype.setValue = function(a) {
        return Zc(this, 2, sg, a)
    };
    var sg = [2, 3, 4, 5, 6];

    function tg(a) {
        F.call(this, a)
    }
    r(tg, F);

    function ug(a) {
        F.call(this, a)
    }
    r(ug, F);

    function vg(a) {
        F.call(this, a)
    }
    r(vg, F);

    function wg(a) {
        F.call(this, a, -1, xg)
    }
    r(wg, F);
    wg.prototype.getPlayerType = function() {
        return Xc(this, 36)
    };
    wg.prototype.setHomeGroupInfo = function(a) {
        return H(this, 81, a)
    };
    var xg = [9, 66, 24, 32, 86, 100, 101];

    function yg(a) {
        F.call(this, a, -1, zg)
    }
    r(yg, F);
    var zg = [15, 26, 28];

    function Ag(a) {
        F.call(this, a)
    }
    r(Ag, F);
    Ag.prototype.setToken = function(a) {
        return G(this, 2, a)
    };

    function Bg(a) {
        F.call(this, a, -1, Cg)
    }
    r(Bg, F);
    Bg.prototype.setSafetyMode = function(a) {
        return G(this, 5, a)
    };
    var Cg = [12];

    function Dg(a) {
        F.call(this, a, -1, Eg)
    }
    r(Dg, F);
    var Eg = [12];

    function Fg(a) {
        F.call(this, a)
    }
    r(Fg, F);
    var Gg = {
        sh: 0,
        dh: 1,
        jh: 2,
        kh: 4,
        ph: 8,
        lh: 16,
        mh: 32,
        rh: 64,
        qh: 128,
        fh: 256,
        hh: 512,
        oh: 1024,
        gh: 2048,
        ih: 4096,
        eh: 8192,
        nh: 16384
    };

    function Hg(a) {
        F.call(this, a)
    }
    r(Hg, F);

    function Ig(a, b) {
        H(a, 1, b)
    }
    Hg.prototype.X = function(a) {
        G(this, 2, a)
    };

    function Jg(a) {
        F.call(this, a)
    }
    r(Jg, F);

    function Kg(a, b) {
        H(a, 1, b)
    };

    function Lg(a) {
        F.call(this, a, -1, Mg)
    }
    r(Lg, F);
    Lg.prototype.X = function(a) {
        G(this, 1, a)
    };

    function Ng(a, b) {
        H(a, 2, b)
    }
    var Mg = [3];

    function Og(a) {
        F.call(this, a)
    }
    r(Og, F);
    Og.prototype.X = function(a) {
        G(this, 1, a)
    };

    function Pg(a) {
        F.call(this, a)
    }
    r(Pg, F);
    Pg.prototype.X = function(a) {
        G(this, 1, a)
    };

    function Qg(a) {
        F.call(this, a)
    }
    r(Qg, F);
    Qg.prototype.X = function(a) {
        G(this, 1, a)
    };

    function Rg(a) {
        F.call(this, a)
    }
    r(Rg, F);

    function Sg(a) {
        F.call(this, a)
    }
    r(Sg, F);

    function Tg(a) {
        F.call(this, a, -1, Ug)
    }
    r(Tg, F);
    Tg.prototype.getPlayerType = function() {
        var a = Xc(this, 7);
        return null == a ? 0 : a
    };
    Tg.prototype.setVideoId = function(a) {
        return G(this, 19, a)
    };

    function Vg(a) {
        F.call(this, a)
    }
    r(Vg, F);
    Vg.prototype.getId = function() {
        var a = Xc(this, 2);
        return null == a ? "" : a
    };
    var Ug = [83, 68];

    function Wg(a) {
        F.call(this, a)
    }
    r(Wg, F);

    function Xg(a) {
        F.call(this, a)
    }
    r(Xg, F);

    function Yg(a) {
        F.call(this, a)
    }
    r(Yg, F);

    function Zg(a) {
        F.call(this, a, 421)
    }
    r(Zg, F);
    var dd = [23, 24, 11, 6, 7, 5, 2, 3, 20, 21, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 157, 158, 159, 163, 164, 168, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 201, 203, 204, 205, 206, 258, 259, 260, 261, 209, 226, 227, 232, 233, 234, 240, 247, 248, 251, 254, 255, 270, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328, 330, 331, 332, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375,
        378, 380, 381, 388, 389, 403, 412, 413, 414, 415, 416, 417, 418, 419, 420, 117
    ];

    function $g(a) {
        F.call(this, a)
    }
    r($g, F);

    function ah(a) {
        F.call(this, a)
    }
    r(ah, F);
    ah.prototype.setVideoId = function(a) {
        return Zc(this, 1, bh, a)
    };
    ah.prototype.getPlaylistId = function() {
        return Xc(this, 2 === $c(this, bh) ? 2 : -1)
    };
    var bh = [1, 2];

    function ch(a) {
        F.call(this, a, -1, dh)
    }
    r(ch, F);
    var dh = [3];

    function eh(a) {
        F.call(this, a, 1)
    }
    r(eh, F);

    function fh(a) {
        F.call(this, a)
    }
    r(fh, F);
    var gh;
    gh = new function(a, b, c, d) {
        this.h = a;
        this.fieldName = b;
        this.isRepeated = d;
        this.i = hd
    }(406606992, {
        so: 0
    }, fh, 0);

    function hh() {
        fh.apply(this, arguments)
    }
    r(hh, fh);

    function ih(a, b) {
        1 < b.length ? a[b[0]] = b[1] : 1 === b.length && Object.assign(a, b[0])
    };
    var jh, kh, lh, mh = x.window,
        nh = (null === (jh = null === mh || void 0 === mh ? void 0 : mh.yt) || void 0 === jh ? void 0 : jh.config_) || (null === (kh = null === mh || void 0 === mh ? void 0 : mh.ytcfg) || void 0 === kh ? void 0 : kh.data_) || {},
        oh = (null === (lh = null === mh || void 0 === mh ? void 0 : mh.ytcfg) || void 0 === lh ? void 0 : lh.obfuscatedData_) || [];

    function ph() {
        eh.apply(this, arguments)
    }
    r(ph, eh);
    var qh = new ph(oh),
        rh = nh.EXPERIMENT_FLAGS;
    if (!rh || !rh.jspb_i18n_extension) {
        var sh = new hh;
        gh.i(qh, sh)
    }
    z("yt.config_", nh, void 0);
    z("yt.configJspb_", oh, void 0);

    function th() {
        ih(nh, arguments)
    }

    function B(a, b) {
        return a in nh ? nh[a] : b
    }

    function uh(a) {
        return B(a, void 0)
    };

    function K(a) {
        a = vh(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function wh(a, b) {
        a = vh(a);
        return void 0 === a && void 0 !== b ? b : Number(a || 0)
    }

    function xh() {
        return B("EXPERIMENTS_TOKEN", "")
    }

    function vh(a) {
        var b = B("EXPERIMENTS_FORCED_FLAGS", {});
        return void 0 !== b[a] ? b[a] : B("EXPERIMENT_FLAGS", {})[a]
    }

    function yh() {
        var a = [],
            b = B("EXPERIMENTS_FORCED_FLAGS", {});
        for (c in b) a.push({
            key: c,
            value: String(b[c])
        });
        var c = B("EXPERIMENT_FLAGS", {});
        for (var d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };
    var zh = {
            appSettingsCaptured: !0,
            visualElementAttached: !0,
            visualElementGestured: !0,
            visualElementHidden: !0,
            visualElementShown: !0,
            flowEvent: !0,
            visualElementStateChanged: !0,
            playbackAssociated: !0,
            youThere: !0,
            accountStateChangeSignedIn: !0,
            accountStateChangeSignedOut: !0
        },
        Ah = {
            latencyActionBaselined: !0,
            latencyActionInfo: !0,
            latencyActionTicked: !0,
            bedrockRepetitiveActionTimed: !0,
            adsClientStateChange: !0,
            streamzIncremented: !0,
            mdxDialAdditionalDataUpdateEvent: !0,
            tvhtml5WatchKeyEvent: !0,
            tvhtml5VideoSeek: !0,
            tokenRefreshEvent: !0,
            adNotify: !0,
            adNotifyFilled: !0,
            tvhtml5LaunchUrlComponentChanged: !0,
            bedrockResourceConsumptionSnapshot: !0,
            deviceStartupMetrics: !0,
            mdxSignIn: !0,
            tvhtml5KeyboardLogging: !0,
            tvhtml5StartupSoundEvent: !0,
            tvhtml5LiveChatStatus: !0,
            tvhtml5DeviceStorageStatus: !0,
            tvhtml5LocalStorage: !0,
            directSignInEvent: !0,
            finalPayload: !0,
            tvhtml5SearchCompleted: !0,
            tvhtml5KeyboardPerformance: !0,
            adNotifyFailure: !0,
            latencyActionSpan: !0,
            tvhtml5AccountDialogOpened: !0,
            tvhtml5ApiTest: !0
        };
    var Bh = 0,
        Ch = uc ? "webkit" : tc ? "moz" : rc ? "ms" : qc ? "o" : "";
    z("ytDomDomGetNextId", A("ytDomDomGetNextId") || function() {
        return ++Bh
    }, void 0);
    var Dh = [];

    function Eh(a) {
        Dh.forEach(function(b) {
            return b(a)
        })
    }

    function Fh(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                Gh(b)
            }
        } : a
    }

    function Gh(a, b, c, d) {
        var e = A("yt.logging.errors.log");
        e ? e(a, "ERROR", b, c, d) : (e = B("ERRORS", []), e.push([a, "ERROR", b, c, d]), th("ERRORS", e));
        Eh(a)
    }

    function Hh(a, b, c, d) {
        var e = A("yt.logging.errors.log");
        e ? e(a, "WARNING", b, c, d) : (e = B("ERRORS", []), e.push([a, "WARNING", b, c, d]), th("ERRORS", e))
    };
    var Ih = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };

    function Jh(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in Ih || (this[b] = a[b]);
                this.scale = a.scale;
                this.rotation = a.rotation;
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ? d : null
                } catch (e) {
                    d = null
                } else "mouseover" == this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.h = a.pageX;
                this.i = a.pageY
            }
        } catch (e) {}
    }

    function Kh(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.h = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.i = a.clientY + b
        }
    }
    Jh.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    Jh.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    Jh.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var nb = x.ytEventsEventsListeners || {};
    z("ytEventsEventsListeners", nb, void 0);
    var Lh = x.ytEventsEventsCounter || {
        count: 0
    };
    z("ytEventsEventsCounter", Lh, void 0);

    function Mh(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return mb(function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = Na(e[4]) && Na(d) && rb(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }
    var Nh = ab(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Oh(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = Mh(a, b, c, d);
        if (e) return e;
        e = ++Lh.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var g = f ? function(h) {
            h = new Jh(h);
            if (!zd(h.relatedTarget, function(k) {
                    return k == a
                })) return h.currentTarget = a, h.type = b, c.call(a, h)
        } : function(h) {
            h = new Jh(h);
            h.currentTarget = a;
            return c.call(a, h)
        };
        g = Fh(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), Nh() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        nb[e] = [a, b, c, g, d];
        return e
    }

    function Ph(a) {
        a && ("string" == typeof a && (a = [a]), cb(a, function(b) {
            if (b in nb) {
                var c = nb[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? Nh() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete nb[b]
            }
        }))
    };
    var Qh = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };

    function Rh(a, b) {
        "function" === typeof a && (a = Fh(a));
        return window.setTimeout(a, b)
    }

    function Sh(a) {
        window.clearTimeout(a)
    };

    function Th(a) {
        this.K = a;
        this.i = null;
        this.m = 0;
        this.A = null;
        this.u = 0;
        this.j = [];
        for (a = 0; 4 > a; a++) this.j.push(0);
        this.l = 0;
        this.S = Oh(window, "mousemove", Ta(this.Y, this));
        a = Ta(this.L, this);
        "function" === typeof a && (a = Fh(a));
        this.ga = window.setInterval(a, 25)
    }
    Wa(Th, I);
    Th.prototype.Y = function(a) {
        void 0 === a.h && Kh(a);
        var b = a.h;
        void 0 === a.i && Kh(a);
        this.i = new rd(b, a.i)
    };
    Th.prototype.L = function() {
        if (this.i) {
            var a = Qh();
            if (0 != this.m) {
                var b = this.A,
                    c = this.i,
                    d = b.x - c.x;
                b = b.y - c.y;
                d = Math.sqrt(d * d + b * b) / (a - this.m);
                this.j[this.l] = .5 < Math.abs((d - this.u) / this.u) ? 1 : 0;
                for (c = b = 0; 4 > c; c++) b += this.j[c] || 0;
                3 <= b && this.K();
                this.u = d
            }
            this.m = a;
            this.A = this.i;
            this.l = (this.l + 1) % 4
        }
    };
    Th.prototype.H = function() {
        window.clearInterval(this.ga);
        Ph(this.S)
    };

    function Uh() {}

    function Vh(a, b) {
        return Wh(a, 0, b)
    }
    Uh.prototype.M = function(a, b) {
        return Wh(a, 1, b)
    };

    function Xh(a, b) {
        Wh(a, 2, b)
    }

    function Yh(a) {
        var b = A("yt.scheduler.instance.addImmediateJob");
        b ? b(a) : a()
    };

    function Zh() {
        Uh.apply(this, arguments)
    }
    r(Zh, Uh);

    function $h() {
        Zh.h || (Zh.h = new Zh);
        return Zh.h
    }

    function Wh(a, b, c) {
        void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
        var d = A("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : Rh(a, c || 0)
    }
    Zh.prototype.U = function(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = A("yt.scheduler.instance.cancelJob");
            b ? b(a) : Sh(a)
        }
    };
    Zh.prototype.start = function() {
        var a = A("yt.scheduler.instance.start");
        a && a()
    };
    Zh.prototype.pause = function() {
        var a = A("yt.scheduler.instance.pause");
        a && a()
    };
    var ai = $h();
    var bi = {};

    function ci(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.kc ? !1 : b.kc;
        b = void 0 === b.Yb ? !0 : b.Yb;
        if (null == A("_lact", window)) {
            var c = parseInt(B("LACT"), 10);
            c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
            z("_lact", c, window);
            z("_fact", c, window); - 1 == c && di();
            Oh(document, "keydown", di);
            Oh(document, "keyup", di);
            Oh(document, "mousedown", di);
            Oh(document, "mouseup", di);
            a ? Oh(window, "touchmove", function() {
                ei("touchmove", 200)
            }, {
                passive: !0
            }) : (Oh(window, "resize", function() {
                ei("resize", 200)
            }), b && Oh(window, "scroll", function() {
                ei("scroll", 200)
            }));
            new Th(function() {
                ei("mouse", 100)
            });
            Oh(document, "touchstart", di, {
                passive: !0
            });
            Oh(document, "touchend", di, {
                passive: !0
            })
        }
    }

    function ei(a, b) {
        bi[a] || (bi[a] = !0, ai.M(function() {
            di();
            bi[a] = !1
        }, b))
    }

    function di() {
        null == A("_lact", window) && ci();
        var a = Date.now();
        z("_lact", a, window); - 1 == A("_fact", window) && z("_fact", a, window);
        (a = A("ytglobal.ytUtilActivityCallback_")) && a()
    }

    function fi() {
        var a = A("_lact", window);
        return null == a ? -1 : Math.max(Date.now() - a, 0)
    };

    function gi() {
        var a = hi;
        A("yt.ads.biscotti.getId_") || z("yt.ads.biscotti.getId_", a, void 0)
    }

    function ii(a) {
        z("yt.ads.biscotti.lastId_", a, void 0)
    };
    var ji = /^[\w.]*$/,
        ki = {
            q: !0,
            search_query: !0
        };

    function li(a, b) {
        b = a.split(b);
        for (var c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d].split("=");
            if (1 == f.length && f[0] || 2 == f.length) try {
                var g = mi(f[0] || ""),
                    h = mi(f[1] || "");
                g in c ? Array.isArray(c[g]) ? kb(c[g], h) : c[g] = [c[g], h] : c[g] = h
            } catch (t) {
                var k = t,
                    m = f[0],
                    n = String(li);
                k.args = [{
                    key: m,
                    value: f[1],
                    query: a,
                    method: ni == n ? "unchanged" : n
                }];
                ki.hasOwnProperty(m) || Hh(k)
            }
        }
        return c
    }
    var ni = String(li);

    function oi(a) {
        var b = [];
        lb(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Array.isArray(c) ? f = c : f = [c];
            cb(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function pi(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return li(a, "&")
    }

    function qi(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), pi(1 < a.length ? a[1] : a[0])) : {}
    }

    function ri(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = pi(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        return mc(a, e) + d
    }

    function si(a) {
        if (!b) var b = window.location.href;
        var c = a.match(gc)[1] || null,
            d = ic(a);
        c && d ? (a = a.match(gc), b = b.match(gc), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? ic(b) == d && (Number(b.match(gc)[4] || null) || null) == (Number(a.match(gc)[4] || null) || null) : !0;
        return a
    }

    function mi(a) {
        return a && a.match(ji) ? a : decodeURIComponent(a.replace(/\+/g, " "))
    };

    function ti(a) {
        var b = ui;
        a = void 0 === a ? A("yt.ads.biscotti.lastId_") || "" : a;
        var c = Object,
            d = c.assign,
            e = {};
        e.dt = Ld;
        e.flash = "0";
        a: {
            try {
                var f = b.h.top.location.href
            } catch (hb) {
                f = 2;
                break a
            }
            f = f ? f === b.i.location.href ? 0 : 1 : 2
        }
        e = (e.frm = f, e);
        try {
            e.u_tz = -(new Date).getTimezoneOffset();
            var g = void 0 === g ? kd : g;
            try {
                var h = g.history.length
            } catch (hb) {
                h = 0
            }
            e.u_his = h;
            var k;
            e.u_h = null == (k = kd.screen) ? void 0 : k.height;
            var m;
            e.u_w = null == (m = kd.screen) ? void 0 : m.width;
            var n;
            e.u_ah = null == (n = kd.screen) ? void 0 : n.availHeight;
            var t;
            e.u_aw =
                null == (t = kd.screen) ? void 0 : t.availWidth;
            var y;
            e.u_cd = null == (y = kd.screen) ? void 0 : y.colorDepth
        } catch (hb) {}
        h = b.h;
        try {
            var u = h.screenX;
            var C = h.screenY
        } catch (hb) {}
        try {
            var D = h.outerWidth;
            var L = h.outerHeight
        } catch (hb) {}
        try {
            var O = h.innerWidth;
            var R = h.innerHeight
        } catch (hb) {}
        try {
            var V = h.screenLeft;
            var Z = h.screenTop
        } catch (hb) {}
        try {
            O = h.innerWidth, R = h.innerHeight
        } catch (hb) {}
        try {
            var Ad = h.screen.availWidth;
            var fa = h.screen.availTop
        } catch (hb) {}
        u = [V, Z, u, C, Ad, fa, D, L, O, R];
        try {
            var X = (b.h.top || window).document,
                ha = "CSS1Compat" ==
                X.compatMode ? X.documentElement : X.body;
            var Za = (new sd(ha.clientWidth, ha.clientHeight)).round()
        } catch (hb) {
            Za = new sd(-12245933, -12245933)
        }
        X = Za;
        Za = {};
        ha = new Me;
        x.SVGElement && x.document.createElementNS && ha.set(0);
        C = Fd();
        C["allow-top-navigation-by-user-activation"] && ha.set(1);
        C["allow-popups-to-escape-sandbox"] && ha.set(2);
        x.crypto && x.crypto.subtle && ha.set(3);
        x.TextDecoder && x.TextEncoder && ha.set(4);
        ha = Ne(ha);
        Za.bc = ha;
        Za.bih = X.height;
        Za.biw = X.width;
        Za.brdim = u.join();
        b = b.i;
        X = "oa";
        Oe.oa && Oe.hasOwnProperty(X) ?
            X = Oe.oa : (ha = new Oe, Oe.oa = ha, Oe.hasOwnProperty(X), X = ha);
        b = (Za.vis = X.C(Md.flag, Md.defaultValue) && b.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, Za.wgl = !!kd.WebGLRenderingContext, Za);
        c = d.call(c, e, b);
        c.ca_type = "image";
        a && (c.bid = a);
        return c
    }
    var ui = new function() {
        var a = window.document;
        this.h = window;
        this.i = a
    };
    z("yt.ads_.signals_.getAdSignalsString", function(a) {
        return oi(ti(a))
    }, void 0);
    Date.now();
    var vi = "XMLHttpRequest" in x ? function() {
        return new XMLHttpRequest
    } : null;

    function wi() {
        if (!vi) return null;
        var a = vi();
        return "open" in a ? a : null
    }

    function xi(a) {
        switch (a && "status" in a ? a.status : -1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                return !0;
            default:
                return !1
        }
    };
    var yi = {
            Authorization: "AUTHORIZATION",
            "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
            "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
            "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
            "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
            "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
            "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
            "X-YouTube-Device": "DEVICE",
            "X-Youtube-Identity-Token": "ID_TOKEN",
            "X-YouTube-Page-CL": "PAGE_CL",
            "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
            "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
        },
        zi = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),
        Ai = !1;

    function Bi(a, b) {
        b = void 0 === b ? {} : b;
        var c = si(a),
            d = K("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in yi) {
            var f = B(yi[e]);
            !f || !c && ic(a) || d && void 0 !== b[e] || (b[e] = f)
        }
        if (c || !ic(a)) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        if (c || !ic(a)) {
            try {
                var g = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (h) {}
            g && (b["X-YouTube-Time-Zone"] = g)
        }
        if (c || !ic(a)) b["X-YouTube-Ad-Signals"] = oi(ti(void 0));
        return b
    }

    function Ci(a) {
        var b = window.location.search,
            c = ic(a);
        K("debug_handle_relative_url_for_query_forward_killswitch") || c || !si(a) || (c = document.location.hostname);
        var d = hc(a.match(gc)[5] || null);
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = pi(b),
            f = {};
        cb(zi, function(g) {
            e[g] && (f[g] = e[g])
        });
        return ri(a, f || {}, !1)
    }

    function Di(a, b) {
        var c = b.format || "JSON";
        a = Ei(a, b);
        var d = Fi(a, b),
            e = !1,
            f = Gi(a, function(k) {
                    if (!e) {
                        e = !0;
                        h && Sh(h);
                        var m = xi(k),
                            n = null,
                            t = 400 <= k.status && 500 > k.status,
                            y = 500 <= k.status && 600 > k.status;
                        if (m || t || y) n = Hi(a, c, k, b.convertToSafeHtml);
                        if (m) a: if (k && 204 == k.status) m = !0;
                            else {
                                switch (c) {
                                    case "XML":
                                        m = 0 == parseInt(n && n.return_code, 10);
                                        break a;
                                    case "RAW":
                                        m = !0;
                                        break a
                                }
                                m = !!n
                            }
                        n = n || {};
                        t = b.context || x;
                        m ? b.onSuccess && b.onSuccess.call(t, k, n) : b.onError && b.onError.call(t, k, n);
                        b.onFinish && b.onFinish.call(t, k, n)
                    }
                }, b.method,
                d, b.headers, b.responseType, b.withCredentials);
        if (b.onTimeout && 0 < b.timeout) {
            var g = b.onTimeout;
            var h = Rh(function() {
                e || (e = !0, f.abort(), Sh(h), g.call(b.context || x, f))
            }, b.timeout)
        }
        return f
    }

    function Ei(a, b) {
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = B("XSRF_FIELD_NAME", void 0);
        if (b = b.urlParams) b[c] && delete b[c], a = ri(a, b || {}, !0);
        return a
    }

    function Fi(a, b) {
        var c = B("XSRF_FIELD_NAME", void 0),
            d = B("XSRF_TOKEN", void 0),
            e = b.postBody || "",
            f = b.postParams,
            g = uh("XSRF_FIELD_NAME"),
            h;
        b.headers && (h = b.headers["Content-Type"]);
        b.excludeXsrf || ic(a) && !b.withCredentials && ic(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
        f && "string" === typeof e && (e = pi(e), vb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : lc(e));
        f = e || f && !ob(f);
        !Ai && f && "POST" !=
            b.method && (Ai = !0, Gh(Error("AJAX request with postData should use POST")));
        return e
    }

    function Hi(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = c.responseText
                } catch (g) {
                    throw d = Error("Error reading responseText"), d.params = a, Hh(d), g;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? Ii(a) : null) e = {}, cb(a.getElementsByTagName("*"), function(g) {
                    e[g.tagName] = Ji(g)
                })
        }
        d && Ki(e);
        return e
    }

    function Ki(a) {
        if (Na(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c);
                if (c) {
                    c = b;
                    Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");
                    var d = $b(a[b], null);
                    a[c] = d
                } else Ki(a[b])
            }
    }

    function Ii(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function Ji(a) {
        var b = "";
        cb(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    }

    function Gi(a, b, c, d, e, f, g) {
        function h() {
            4 == (k && "readyState" in k ? k.readyState : 0) && b && Fh(b)(k)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var k = wi();
        if (!k) return null;
        "onloadend" in k ? k.addEventListener("loadend", h, !1) : k.onreadystatechange = h;
        K("debug_forward_web_query_parameters") && (a = Ci(a));
        k.open(c, a, !0);
        f && (k.responseType = f);
        g && (k.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = Bi(a, e))
            for (var m in e) k.setRequestHeader(m, e[m]), "content-type" == m.toLowerCase() && (c = !1);
        c && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    };
    var Li = Fc || Gc;

    function Mi(a) {
        var b = Wb();
        return b ? 0 <= b.toLowerCase().indexOf(a) : !1
    };
    var Ni = {},
        Oi = 0;

    function Pi(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        if (a)
            if (c && !Mi("cobalt")) {
                if (a) {
                    a instanceof Pb || (a = "object" == typeof a && a.ja ? a.ia() : String(a), Ub.test(a) ? a = new Pb(a, Qb) : (a = String(a), a = a.replace(/(%0A|%0D)/g, ""), a = (b = a.match(Tb)) && Sb.test(b[1]) ? new Pb(a, Qb) : null));
                    b = Rb(a || Vb);
                    if ("about:invalid#zClosurez" === b || b.startsWith("data")) a = "";
                    else {
                        if (b instanceof Zb) a = b;
                        else {
                            var f = "object" == typeof b;
                            a = null;
                            f && b.gb && (a = b.ab());
                            b = f && b.ja ? b.ia() : String(b);
                            Ob.test(b) && (-1 != b.indexOf("&") && (b = b.replace(Ib, "&amp;")), -1 !=
                                b.indexOf("<") && (b = b.replace(Jb, "&lt;")), -1 != b.indexOf(">") && (b = b.replace(Kb, "&gt;")), -1 != b.indexOf('"') && (b = b.replace(Lb, "&quot;")), -1 != b.indexOf("'") && (b = b.replace(Mb, "&#39;")), -1 != b.indexOf("\x00") && (b = b.replace(Nb, "&#0;")));
                            a = $b(b, a)
                        }
                        a instanceof Zb && a.constructor === Zb ? a = a.h : (La(a), a = "type_error:SafeHtml");
                        a = encodeURIComponent(String(Cf(a.toString())))
                    }
                    /^[\s\xa0]*$/.test(a) || (a = wd("IFRAME", {
                        src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
                        style: "display:none"
                    }), (9 == a.nodeType ? a : a.ownerDocument ||
                        a.document).body.appendChild(a))
                }
            } else if (e) Gi(a, b, "POST", e, d);
        else if (B("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || d) Gi(a, b, "GET", "", d);
        else {
            b: {
                try {
                    var g = new $a({
                        url: a
                    });
                    if (g.j && g.i || g.l) {
                        var h = hc(a.match(gc)[5] || null),
                            k;
                        if (!(k = !h || !h.endsWith("/aclk"))) {
                            var m = a.search(nc);
                            d: {
                                for (c = 0; 0 <= (c = a.indexOf("ri", c)) && c < m;) {
                                    var n = a.charCodeAt(c - 1);
                                    if (38 == n || 63 == n) {
                                        var t = a.charCodeAt(c + 2);
                                        if (!t || 61 == t || 38 == t || 35 == t) {
                                            var y = c;
                                            break d
                                        }
                                    }
                                    c += 3
                                }
                                y = -1
                            }
                            if (0 > y) var u = null;
                            else {
                                var C = a.indexOf("&", y);
                                if (0 > C || C > m) C = m;
                                y += 3;
                                u = decodeURIComponent(a.substr(y, C - y).replace(/\+/g, " "))
                            }
                            k = "1" !== u
                        }
                        f = !k;
                        break b
                    }
                } catch (D) {}
                f = !1
            }
            f ? Qi(a) ? (b && b(), f = !0) : f = !1 : f = !1;f || Ri(a, b)
        }
    }

    function Si() {
        var a = void 0 === a ? "" : a;
        Qi("/generate_204", a) || Pi("/generate_204", void 0, void 0, void 0, a)
    }

    function Qi(a, b) {
        try {
            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, void 0 === b ? "" : b)) return !0
        } catch (c) {}
        return !1
    }

    function Ri(a, b) {
        var c = new Image,
            d = "" + Oi++;
        Ni[d] = c;
        c.onload = c.onerror = function() {
            b && Ni[d] && b();
            delete Ni[d]
        };
        c.src = a
    };
    var Ti = x.ytPubsubPubsubInstance || new J,
        Ui = x.ytPubsubPubsubSubscribedKeys || {},
        Vi = x.ytPubsubPubsubTopicToKeys || {},
        Wi = x.ytPubsubPubsubIsSynchronous || {};

    function Xi(a, b) {
        var c = Yi();
        if (c && b) {
            var d = c.subscribe(a, function() {
                var e = arguments;
                var f = function() {
                    Ui[d] && b.apply && "function" == typeof b.apply && b.apply(window, e)
                };
                try {
                    Wi[a] ? f() : Rh(f, 0)
                } catch (g) {
                    Gh(g)
                }
            }, void 0);
            Ui[d] = !0;
            Vi[a] || (Vi[a] = []);
            Vi[a].push(d);
            return d
        }
        return 0
    }

    function Zi(a) {
        var b = Yi();
        b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), cb(a, function(c) {
            b.unsubscribeByKey(c);
            delete Ui[c]
        }))
    }

    function $i(a, b) {
        var c = Yi();
        c && c.publish.apply(c, arguments)
    }

    function aj(a) {
        var b = Yi();
        if (b)
            if (b.clear(a), a) bj(a);
            else
                for (var c in Vi) bj(c)
    }

    function Yi() {
        return x.ytPubsubPubsubInstance
    }

    function bj(a) {
        Vi[a] && (a = Vi[a], cb(a, function(b) {
            Ui[b] && delete Ui[b]
        }), a.length = 0)
    }
    J.prototype.subscribe = J.prototype.subscribe;
    J.prototype.unsubscribeByKey = J.prototype.ya;
    J.prototype.publish = J.prototype.ma;
    J.prototype.clear = J.prototype.clear;
    z("ytPubsubPubsubInstance", Ti, void 0);
    z("ytPubsubPubsubTopicToKeys", Vi, void 0);
    z("ytPubsubPubsubIsSynchronous", Wi, void 0);
    z("ytPubsubPubsubSubscribedKeys", Ui, void 0);
    var cj = window,
        M = cj.ytcsi && cj.ytcsi.now ? cj.ytcsi.now : cj.performance && cj.performance.timing && cj.performance.now && cj.performance.timing.navigationStart ? function() {
            return cj.performance.timing.navigationStart + cj.performance.now()
        } : function() {
            return (new Date).getTime()
        };
    var dj = wh("initial_gel_batch_timeout", 2E3),
        ej = Math.pow(2, 16) - 1,
        fj = void 0;

    function gj() {
        this.j = this.h = this.i = 0
    }
    var hj = new gj,
        ij = new gj,
        jj = !0,
        kj = x.ytLoggingTransportGELQueue_ || new Map;
    z("ytLoggingTransportGELQueue_", kj, void 0);
    var lj = x.ytLoggingTransportGELProtoQueue_ || new Map;
    z("ytLoggingTransportGELProtoQueue_", lj, void 0);
    var mj = x.ytLoggingTransportTokensToCttTargetIds_ || {};
    z("ytLoggingTransportTokensToCttTargetIds_", mj, void 0);
    var nj = x.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
    z("ytLoggingTransportTokensToJspbCttTargetIds_", nj, void 0);

    function oj(a, b) {
        if ("log_event" === a.endpoint) {
            var c = pj(a),
                d = kj.get(c) || [];
            kj.set(c, d);
            d.push(a.payload);
            qj(b, d, c)
        }
    }

    function rj(a, b) {
        if ("log_event" === a.endpoint) {
            var c = pj(a, !0),
                d = lj.get(c) || [];
            lj.set(c, d);
            d.push(a.payload);
            qj(b, d, c, !0)
        }
    }

    function qj(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a && (fj = new a);
        a = wh("tvhtml5_logging_max_batch") || wh("web_logging_max_batch") || 100;
        var e = M(),
            f = d ? ij.j : hj.j;
        b.length >= a ? sj({
            writeThenSend: !0
        }, K("flush_only_full_queue") ? c : void 0, d) : 10 <= e - f && (tj(d), d ? ij.j = e : hj.j = e)
    }

    function uj(a, b) {
        if ("log_event" === a.endpoint) {
            var c = pj(a),
                d = new Map;
            d.set(c, [a.payload]);
            b && (fj = new b);
            return new Jf(function(e) {
                fj && fj.isReady() ? vj(d, e, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function wj(a, b) {
        if ("log_event" === a.endpoint) {
            var c = pj(a, !0),
                d = new Map;
            d.set(c, [a.payload]);
            b && (fj = new b);
            return new Jf(function(e) {
                fj && fj.isReady() ? xj(d, e, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function pj(a, b) {
        var c = "";
        if (a.za) c = "visitorOnlyApprovedKey";
        else if (a.cttAuthInfo) {
            if (void 0 === b ? 0 : b) {
                b = a.cttAuthInfo.token;
                c = a.cttAuthInfo;
                var d = new ah;
                c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Zc(d, 2, bh, c.playlistId);
                nj[b] = d
            } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), mj[a.cttAuthInfo.token] = c;
            c = a.cttAuthInfo.token
        }
        return c
    }

    function sj(a, b, c) {
        a = void 0 === a ? {} : a;
        c = void 0 === c ? !1 : c;
        new Jf(function(d) {
            c ? (Sh(ij.i), Sh(ij.h), ij.h = 0) : (Sh(hj.i), Sh(hj.h), hj.h = 0);
            if (fj && fj.isReady())
                if (void 0 !== b)
                    if (c) {
                        var e = new Map,
                            f = lj.get(b) || [];
                        e.set(b, f);
                        xj(e, d, a);
                        lj.delete(b)
                    } else e = new Map, f = kj.get(b) || [], e.set(b, f), vj(e, d, a), kj.delete(b);
            else c ? (xj(lj, d, a), lj.clear()) : (vj(kj, d, a), kj.clear());
            else tj(c), d()
        })
    }

    function tj(a) {
        a = void 0 === a ? !1 : a;
        if (K("web_gel_timeout_cap") && (!a && !hj.h || a && !ij.h)) {
            var b = Rh(function() {
                sj({
                    writeThenSend: !0
                }, void 0, a)
            }, 6E4);
            a ? ij.h = b : hj.h = b
        }
        Sh(a ? ij.i : hj.i);
        b = B("LOGGING_BATCH_TIMEOUT", wh("web_gel_debounce_ms", 1E4));
        K("shorten_initial_gel_batch_timeout") && jj && (b = dj);
        b = Rh(function() {
            sj({
                writeThenSend: !0
            }, void 0, a)
        }, b);
        a ? ij.i = b : hj.i = b
    }

    function vj(a, b, c, d) {
        var e = fj;
        c = void 0 === c ? {} : c;
        var f = Math.round(M()),
            g = a.size;
        a = q(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            var k = q(h.value);
            h = k.next().value;
            var m = k = k.next().value;
            k = tb({
                context: yj(e.config_ || zj())
            });
            k.events = m;
            (m = mj[h]) && Aj(k, h, m);
            delete mj[h];
            h = "visitorOnlyApprovedKey" === h;
            Bj(k, f, h);
            Cj(c);
            K("send_beacon_before_gel") && window.navigator && window.navigator.sendBeacon && !c.writeThenSend && Si();
            Dj(e, "log_event", k, Ej(c, h, function() {
                g--;
                g || b()
            }, function() {
                g--;
                g || b()
            }, d));
            jj = !1
        }
    }

    function xj(a, b, c, d) {
        var e = fj;
        c = void 0 === c ? {} : c;
        var f = Math.round(M()),
            g = a.size;
        a = q(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            var k = q(h.value);
            h = k.next().value;
            var m = k = k.next().value;
            k = new ch;
            var n = Fj(e.config_ || zj());
            H(k, 1, n);
            for (n = 0; n < m.length; n++) ed(k, 3, Zg, m[n]);
            (m = nj[h]) && Gj(k, h, m);
            delete nj[h];
            h = "visitorOnlyApprovedKey" === h;
            Hj(k, f, h);
            Cj(c);
            a: {
                Pc = !0;
                try {
                    var t = JSON.stringify(k.toJSON(), fd);
                    break a
                } finally {
                    Pc = !1
                }
                t = void 0
            }
            k = t;
            h = Ej(c, h, function() {
                g--;
                g || b()
            }, function() {
                g--;
                g || b()
            }, d);
            h.headers = {
                "Content-Type": "application/json+protobuf"
            };
            h.postBodyFormat = "JSPB";
            h.postBody = k;
            Dj(e, "log_event", "", h);
            jj = !1
        }
    }

    function Cj(a) {
        K("always_send_and_write") && (a.writeThenSend = !1)
    }

    function Ej(a, b, c, d, e) {
        return {
            retry: !0,
            onSuccess: c,
            onError: d,
            Fb: a,
            za: b,
            po: !!e,
            headers: {},
            postBodyFormat: "",
            postBody: ""
        }
    }

    function Bj(a, b, c) {
        a.requestTimeMs = String(b);
        K("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        !c && (b = B("EVENT_ID", void 0)) && (c = Ij(), a.serializedClientEventId = {
            serializedEventId: b,
            clientCounter: String(c)
        })
    }

    function Hj(a, b, c) {
        G(a, 2, b);
        if (!c && (b = B("EVENT_ID", void 0))) {
            c = Ij();
            var d = new $g;
            G(d, 1, b);
            G(d, 2, c);
            H(a, 5, d)
        }
    }

    function Ij() {
        var a = B("BATCH_CLIENT_COUNTER", void 0) || 0;
        a || (a = Math.floor(Math.random() * ej / 2));
        a++;
        a > ej && (a = 1);
        th("BATCH_CLIENT_COUNTER", a);
        return a
    }

    function Aj(a, b, c) {
        if (c.videoId) var d = "VIDEO";
        else if (c.playlistId) d = "PLAYLIST";
        else return;
        a.credentialTransferTokenTargetId = c;
        a.context = a.context || {};
        a.context.user = a.context.user || {};
        a.context.user.credentialTransferTokens = [{
            token: b,
            scope: d
        }]
    }

    function Gj(a, b, c) {
        if (Xc(c, 1 === $c(c, bh) ? 1 : -1)) var d = 1;
        else if (c.getPlaylistId()) d = 2;
        else return;
        H(a, 4, c);
        a = ad(a, Dg, 1) || new Dg;
        c = ad(a, Bg, 3) || new Bg;
        var e = new Ag;
        e.setToken(b);
        G(e, 1, d);
        ed(c, 12, Ag, e);
        H(a, 3, c)
    };
    var Jj = x.ytLoggingGelSequenceIdObj_ || {};
    z("ytLoggingGelSequenceIdObj_", Jj, void 0);

    function Kj(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (K("lr_drop_other_and_business_payloads")) {
            if (Ah[a] || zh[a]) return
        } else if (K("lr_drop_other_payloads") && Ah[a]) return;
        var e = {},
            f = Math.round(d.timestamp || M());
        e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
        e[a] = b;
        a = fi();
        e.context = {
            lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
        };
        K("log_sequence_info_on_gel_web") && d.W && (a = e.context, b = d.W, b = {
            index: Lj(b),
            groupKey: b
        }, a.sequence = b, d.yb && delete Jj[d.W]);
        (d.sc ? uj : oj)({
            endpoint: "log_event",
            payload: e,
            cttAuthInfo: d.cttAuthInfo,
            za: d.za
        }, c)
    }

    function Lj(a) {
        Jj[a] = a in Jj ? Jj[a] + 1 : 0;
        return Jj[a]
    };

    function Mj(a) {
        var b = this;
        this.h = void 0;
        a.addEventListener("beforeinstallprompt", function(c) {
            c.preventDefault();
            b.h = c
        })
    }

    function Nj() {
        if (!x.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
        try {
            return x.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : x.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : x.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : x.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
        } catch (a) {
            return "WEB_DISPLAY_MODE_UNKNOWN"
        }
    }

    function Oj() {
        var a = Nj();
        a = Object.keys(Le).indexOf(a);
        return -1 === a ? null : a
    };

    function Pj(a, b, c, d, e) {
        Vd.set("" + a, b, {
            Sa: c,
            path: "/",
            domain: void 0 === d ? "youtube.com" : d,
            secure: void 0 === e ? !1 : e
        })
    }

    function Qj(a) {
        return Vd.get("" + a, void 0)
    }

    function Rj() {
        if (!Vd.isEnabled()) return !1;
        if (!Vd.isEmpty()) return !0;
        Vd.set("TESTCOOKIESENABLED", "1", {
            Sa: 60
        });
        if ("1" !== Vd.get("TESTCOOKIESENABLED")) return !1;
        Vd.remove("TESTCOOKIESENABLED");
        return !0
    };
    var Sj = A("ytglobal.prefsUserPrefsPrefs_") || {};
    z("ytglobal.prefsUserPrefsPrefs_", Sj, void 0);

    function Tj() {
        this.h = B("ALT_PREF_COOKIE_NAME", "PREF");
        this.i = B("ALT_PREF_COOKIE_DOMAIN", "youtube.com");
        var a = Qj(this.h);
        if (a) {
            a = decodeURIComponent(a).split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (Sj[d] = c.toString())
            }
        }
    }
    Tj.prototype.get = function(a, b) {
        Uj(a);
        Vj(a);
        a = void 0 !== Sj[a] ? Sj[a].toString() : null;
        return null != a ? a : b ? b : ""
    };
    Tj.prototype.set = function(a, b) {
        Uj(a);
        Vj(a);
        if (null == b) throw Error("ExpectedNotNull");
        Sj[a] = b.toString()
    };

    function Wj(a) {
        return !!((Xj("f" + (Math.floor(a / 31) + 1)) || 0) & 1 << a % 31)
    }
    Tj.prototype.remove = function(a) {
        Uj(a);
        Vj(a);
        delete Sj[a]
    };
    Tj.prototype.clear = function() {
        for (var a in Sj) delete Sj[a]
    };

    function Vj(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw Error("ExpectedRegexMatch: " + a);
    }

    function Uj(a) {
        if (!/^\w+$/.test(a)) throw Error("ExpectedRegexMismatch: " + a);
    }

    function Xj(a) {
        a = void 0 !== Sj[a] ? Sj[a].toString() : null;
        return null != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null
    }
    Ka(Tj);
    var Yj = {
            bluetooth: "CONN_DISCO",
            cellular: "CONN_CELLULAR_UNKNOWN",
            ethernet: "CONN_WIFI",
            none: "CONN_NONE",
            wifi: "CONN_WIFI",
            wimax: "CONN_CELLULAR_4G",
            other: "CONN_UNKNOWN",
            unknown: "CONN_UNKNOWN",
            "slow-2g": "CONN_CELLULAR_2G",
            "2g": "CONN_CELLULAR_2G",
            "3g": "CONN_CELLULAR_3G",
            "4g": "CONN_CELLULAR_4G"
        },
        Zj = {
            CONN_DEFAULT: 0,
            CONN_UNKNOWN: 1,
            CONN_NONE: 2,
            CONN_WIFI: 3,
            CONN_CELLULAR_2G: 4,
            CONN_CELLULAR_3G: 5,
            CONN_CELLULAR_4G: 6,
            CONN_CELLULAR_UNKNOWN: 7,
            CONN_DISCO: 8,
            CONN_CELLULAR_5G: 9,
            CONN_WIFI_METERED: 10,
            CONN_CELLULAR_5G_SA: 11,
            CONN_CELLULAR_5G_NSA: 12,
            CONN_INVALID: 31
        },
        ak = {
            EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
            EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
            EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
            EFFECTIVE_CONNECTION_TYPE_2G: 3,
            EFFECTIVE_CONNECTION_TYPE_3G: 4,
            EFFECTIVE_CONNECTION_TYPE_4G: 5
        },
        bk = {
            "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
            "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
            "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
            "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
        };

    function ck() {
        var a = x.navigator;
        return a ? a.connection : void 0
    }

    function dk() {
        var a = ck();
        if (a) {
            var b = Yj[a.type || "unknown"] || "CONN_UNKNOWN";
            a = Yj[a.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === b && "CONN_UNKNOWN" !== a && (b = a);
            if ("CONN_UNKNOWN" !== b) return b;
            if ("CONN_UNKNOWN" !== a) return a
        }
    }

    function ek() {
        var a = ck();
        if (null !== a && void 0 !== a && a.effectiveType) return bk.hasOwnProperty(a.effectiveType) ? bk[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN"
    };

    function fk() {
        return "INNERTUBE_API_KEY" in nh && "INNERTUBE_API_VERSION" in nh
    }

    function zj() {
        return {
            innertubeApiKey: B("INNERTUBE_API_KEY", void 0),
            innertubeApiVersion: B("INNERTUBE_API_VERSION", void 0),
            hb: B("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            ib: B("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            ac: B("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
            innertubeContextClientVersion: B("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
            Cb: B("INNERTUBE_CONTEXT_HL", void 0),
            Bb: B("INNERTUBE_CONTEXT_GL", void 0),
            cc: B("INNERTUBE_HOST_OVERRIDE", void 0) || "",
            ec: !!B("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            dc: !!B("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
            appInstallData: B("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
        }
    }

    function yj(a) {
        var b = {
            client: {
                hl: a.Cb,
                gl: a.Bb,
                clientName: a.ib,
                clientVersion: a.innertubeContextClientVersion,
                configInfo: a.hb
            }
        };
        navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
        var c = x.devicePixelRatio;
        c && 1 != c && (b.client.screenDensityFloat = String(c));
        c = xh();
        "" !== c && (b.client.experimentsToken = c);
        c = yh();
        0 < c.length && (b.request = {
            internalExperimentFlags: c
        });
        gk(a, void 0, b);
        hk(a, void 0, b);
        ik(void 0, b);
        jk(a, void 0, b);
        kk(void 0, b);
        B("DELEGATED_SESSION_ID") && !K("pageid_as_header_web") && (b.user = {
            onBehalfOfUser: B("DELEGATED_SESSION_ID")
        });
        a = Object;
        c = a.assign;
        for (var d = b.client, e = {}, f = q(Object.entries(pi(B("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) {
            var h = q(g.value);
            g = h.next().value;
            h = h.next().value;
            "cbrand" === g ? e.deviceMake = h : "cmodel" === g ? e.deviceModel = h : "cbr" === g ? e.browserName = h : "cbrver" === g ? e.browserVersion = h : "cos" === g ? e.osName = h : "cosver" === g ? e.osVersion = h : "cplatform" === g && (e.platform = h)
        }
        b.client = c.call(a, d, e);
        return b
    }

    function Fj(a) {
        var b = new Dg,
            c = new wg;
        G(c, 1, a.Cb);
        G(c, 2, a.Bb);
        G(c, 16, a.ac);
        G(c, 17, a.innertubeContextClientVersion);
        if (a.hb) {
            var d = a.hb,
                e = new tg;
            d.coldConfigData && G(e, 1, d.coldConfigData);
            d.appInstallData && G(e, 6, d.appInstallData);
            d.coldHashData && G(e, 3, d.coldHashData);
            d.hotHashData && G(e, 5, d.hotHashData);
            H(c, 62, e)
        }(d = x.devicePixelRatio) && 1 != d && G(c, 65, d);
        d = xh();
        "" !== d && G(c, 54, d);
        d = yh();
        if (0 < d.length) {
            e = new yg;
            for (var f = 0; f < d.length; f++) {
                var g = new rg;
                G(g, 1, d[f].key);
                g.setValue(d[f].value);
                ed(e, 15, rg, g)
            }
            H(b,
                5, e)
        }
        gk(a, c);
        hk(a, c);
        ik(c);
        jk(a, c);
        kk(c);
        B("DELEGATED_SESSION_ID") && !K("pageid_as_header_web") && (a = new Bg, G(a, 3, B("DELEGATED_SESSION_ID")));
        a = q(Object.entries(pi(B("DEVICE", ""))));
        for (d = a.next(); !d.done; d = a.next()) e = q(d.value), d = e.next().value, e = e.next().value, "cbrand" === d ? G(c, 12, e) : "cmodel" === d ? G(c, 13, e) : "cbr" === d ? G(c, 87, e) : "cbrver" === d ? G(c, 88, e) : "cos" === d ? G(c, 18, e) : "cosver" === d ? G(c, 19, e) : "cplatform" === d && G(c, 42, e);
        H(b, 1, c);
        return b
    }

    function gk(a, b, c) {
        a = a.ib;
        if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
            if (b) {
                c = ad(b, ug, 96) || new ug;
                var d = Oj();
                null !== d && G(c, 3, d);
                H(b, 96, c)
            } else c && (c.client.mainAppWebInfo = null != (d = c.client.mainAppWebInfo) ? d : {}, c.client.mainAppWebInfo.webDisplayMode = Nj())
    }

    function hk(a, b, c) {
        a = a.ib;
        if (("WEB_REMIX" === a || 76 === a) && !K("music_web_display_mode_killswitch"))
            if (b) {
                var d;
                c = null != (d = ad(b, vg, 70)) ? d : new vg;
                d = Oj();
                null !== d && G(c, 10, d);
                H(b, 70, c)
            } else if (c) {
            var e;
            c.client.Eb = null != (e = c.client.Eb) ? e : {};
            c.client.Eb.webDisplayMode = Nj()
        }
    }

    function ik(a, b) {
        var c;
        if (K("web_log_memory_total_kbytes") && (null == (c = x.navigator) ? 0 : c.deviceMemory)) {
            var d;
            c = null == (d = x.navigator) ? void 0 : d.deviceMemory;
            a ? G(a, 95, 1E6 * c) : b && (b.client.memoryTotalKbytes = "" + 1E6 * c)
        }
    }

    function jk(a, b, c) {
        if (a.appInstallData)
            if (b) {
                var d;
                c = null != (d = ad(b, tg, 62)) ? d : new tg;
                G(c, 6, a.appInstallData);
                H(b, 62, c)
            } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
    }

    function kk(a, b) {
        var c = dk();
        c && (a ? G(a, 61, Zj[c]) : b && (b.client.connectionType = c));
        K("web_log_effective_connection_type") && (c = ek()) && (a ? G(a, 94, ak[c]) : b && (b.client.effectiveConnectionType = c))
    }

    function lk(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {
            "X-Goog-Visitor-Id": c.visitorData || B("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        (b = c.no || B("AUTHORIZATION")) || (a ? b = "Bearer " + A("gapi.auth.getToken")().mo : b = Zd([]));
        b && (d.Authorization = b, d["X-Goog-AuthUser"] = B("SESSION_INDEX", 0), K("pageid_as_header_web") && (d["X-Goog-PageId"] = B("DELEGATED_SESSION_ID")));
        return d
    };

    function mk(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = Zd();
        if (b) {
            var c = new ff;
            c.update(B("INNERTUBE_API_KEY", void 0));
            c.update(b);
            a.hash = Kc(c.digest(), 3)
        }
        return a
    };

    function nk(a) {
        var b = new kg;
        (b = b.isAvailable() ? a ? new qg(b, a) : b : null) || (a = new lg(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.h = (a = b) ? new gg(a) : null;
        this.i = document.domain || window.location.hostname
    }
    nk.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.h) try {
            this.h.set(a, b, Date.now() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(Cf(b))
        } catch (f) {
            return
        } else e = escape(b);
        Pj(a, e, c, this.i)
    };
    nk.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.h;
        if (!d) try {
            c = this.h.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = Qj(a)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    nk.prototype.remove = function(a) {
        this.h && this.h.remove(a);
        var b = this.i;
        Vd.remove("" + a, "/", void 0 === b ? "youtube.com" : b)
    };
    var ok;

    function pk() {
        ok || (ok = new nk("yt.innertube"));
        return ok
    }

    function qk(a, b, c, d) {
        if (d) return null;
        d = pk().get("nextId", !0) || 1;
        var e = pk().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: mk(c),
            requestTime: Math.round(M())
        };
        pk().set("nextId", d + 1, 86400, !0);
        pk().set("requests", e, 86400, !0);
        return d
    }

    function rk(a) {
        var b = pk().get("requests", !0) || {};
        delete b[a];
        pk().set("requests", b, 86400, !0)
    }

    function sk(a) {
        var b = pk().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round(M()) - d.requestTime)) {
                    var e = d.authState,
                        f = mk(lk(!1));
                    rb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(M())), Dj(a, d.method, e, {}));
                    delete b[c]
                }
            }
            pk().set("requests", b, 86400, !0)
        }
    };
    var tk = function() {
        var a;
        return function() {
            a || (a = new nk("ytidb"));
            return a
        }
    }();

    function uk() {
        var a;
        return null === (a = tk()) || void 0 === a ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0)
    };
    var vk = [],
        wk, xk = !1;

    function yk() {
        var a = {};
        for (wk = new zk(void 0 === a.handleError ? Ak : a.handleError, void 0 === a.logEvent ? Bk : a.logEvent); 0 < vk.length;) switch (a = vk.shift(), a.type) {
            case "ERROR":
                wk.handleError(a.payload);
                break;
            case "EVENT":
                wk.logEvent(a.eventType, a.payload)
        }
    }

    function Ck(a) {
        xk || (wk ? wk.handleError(a) : (vk.push({
            type: "ERROR",
            payload: a
        }), 10 < vk.length && vk.shift()))
    }

    function Dk(a, b) {
        xk || (wk ? wk.logEvent(a, b) : (vk.push({
            type: "EVENT",
            eventType: a,
            payload: b
        }), 10 < vk.length && vk.shift()))
    };

    function Ek(a) {
        var b = Ea.apply(1, arguments);
        var c = Error.call(this, a);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.args = [].concat(ia(b))
    }
    r(Ek, Error);

    function Fk() {
        try {
            return Gk(), !0
        } catch (a) {
            return !1
        }
    }

    function Gk() {
        if (void 0 !== B("DATASYNC_ID", void 0)) return B("DATASYNC_ID", void 0);
        throw new Ek("Datasync ID not set", "unknown");
    };

    function Hk(a) {
        if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
    }

    function Ik(a) {
        return a.substr(0, a.indexOf(":")) || a
    };
    var Jk = {},
        Kk = (Jk.AUTH_INVALID = "No user identifier specified.", Jk.EXPLICIT_ABORT = "Transaction was explicitly aborted.", Jk.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", Jk.MISSING_INDEX = "Index not created.", Jk.MISSING_OBJECT_STORES = "Object stores not created.", Jk.DB_DELETED_BY_MISSING_OBJECT_STORES = "Database is deleted because expected object stores were not created.", Jk.DB_REOPENED_BY_MISSING_OBJECT_STORES = "Database is reopened because expected object stores were not created.", Jk.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.",
            Jk.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", Jk.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", Jk.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", Jk.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", Jk),
        Lk = {},
        Mk = (Lk.AUTH_INVALID = "ERROR", Lk.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", Lk.EXPLICIT_ABORT = "IGNORED", Lk.IDB_NOT_SUPPORTED = "ERROR", Lk.MISSING_INDEX =
            "WARNING", Lk.MISSING_OBJECT_STORES = "ERROR", Lk.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING", Lk.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING", Lk.QUOTA_EXCEEDED = "WARNING", Lk.QUOTA_MAYBE_EXCEEDED = "WARNING", Lk.UNKNOWN_ABORT = "WARNING", Lk.INCOMPATIBLE_DB_VERSION = "WARNING", Lk),
        Nk = {},
        Ok = (Nk.AUTH_INVALID = !1, Nk.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, Nk.EXPLICIT_ABORT = !1, Nk.IDB_NOT_SUPPORTED = !1, Nk.MISSING_INDEX = !1, Nk.MISSING_OBJECT_STORES = !1, Nk.DB_DELETED_BY_MISSING_OBJECT_STORES = !1, Nk.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1, Nk.QUOTA_EXCEEDED = !1, Nk.QUOTA_MAYBE_EXCEEDED = !0, Nk.UNKNOWN_ABORT = !0, Nk.INCOMPATIBLE_DB_VERSION = !1, Nk);

    function Pk(a, b, c, d, e) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? Kk[a] : c;
        d = void 0 === d ? Mk[a] : d;
        e = void 0 === e ? Ok[a] : e;
        Ek.call(this, c, Object.assign({
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.h = e;
        Object.setPrototypeOf(this, Pk.prototype)
    }
    r(Pk, Ek);

    function Qk(a, b) {
        Pk.call(this, "MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, Kk.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, Qk.prototype)
    }
    r(Qk, Pk);

    function Rk(a, b) {
        var c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, Rk.prototype)
    }
    r(Rk, Error);
    var Sk = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

    function Tk(a, b, c, d) {
        b = Ik(b);
        var e = a instanceof Error ? a : Error("Unexpected error: " + a);
        if (e instanceof Pk) return e;
        a = {
            objectStoreNames: c,
            dbName: b,
            dbVersion: d
        };
        if ("QuotaExceededError" === e.name) return new Pk("QUOTA_EXCEEDED", a);
        if (Hc && "UnknownError" === e.name) return new Pk("QUOTA_MAYBE_EXCEEDED", a);
        if (e instanceof Rk) return new Pk("MISSING_INDEX", Object.assign(Object.assign({}, a), {
            objectStore: e.objectStore,
            index: e.index
        }));
        if ("InvalidStateError" === e.name && Sk.some(function(f) {
                return e.message.includes(f)
            })) return new Pk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            a);
        if ("AbortError" === e.name) return new Pk("UNKNOWN_ABORT", a, e.message);
        e.args = [Object.assign(Object.assign({}, a), {
            name: "IdbError",
            Gb: e.name
        })];
        e.level = "WARNING";
        return e
    }

    function Uk(a, b, c) {
        var d = uk();
        return new Pk("IDB_NOT_SUPPORTED", {
            context: {
                caller: a,
                publicName: b,
                version: c,
                hasSucceededOnce: null === d || void 0 === d ? void 0 : d.hasSucceededOnce
            }
        })
    };

    function Vk(a) {
        if (!a) throw Error();
        throw a;
    }

    function Wk(a) {
        return a
    }

    function Xk(a) {
        this.h = a
    }

    function Yk(a) {
        function b(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "REJECTED",
                    reason: e
                };
                e = q(d.onRejected);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }

        function c(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "FULFILLED",
                    value: e
                };
                e = q(d.h);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }
        var d = this;
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        a = a.h;
        try {
            a(c, b)
        } catch (e) {
            b(e)
        }
    }
    Yk.all = function(a) {
        return new Yk(new Xk(function(b, c) {
            var d = [],
                e = a.length;
            0 === e && b(d);
            for (var f = {
                    ra: 0
                }; f.ra < a.length; f = {
                    ra: f.ra
                }, ++f.ra) Zk(Yk.resolve(a[f.ra]).then(function(g) {
                return function(h) {
                    d[g.ra] = h;
                    e--;
                    0 === e && b(d)
                }
            }(f)), function(g) {
                c(g)
            })
        }))
    };
    Yk.resolve = function(a) {
        return new Yk(new Xk(function(b, c) {
            a instanceof Yk ? a.then(b, c) : b(a)
        }))
    };
    Yk.reject = function(a) {
        return new Yk(new Xk(function(b, c) {
            c(a)
        }))
    };
    Yk.prototype.then = function(a, b) {
        var c = this,
            d = null !== a && void 0 !== a ? a : Wk,
            e = null !== b && void 0 !== b ? b : Vk;
        return new Yk(new Xk(function(f, g) {
            "PENDING" === c.state.status ? (c.h.push(function() {
                $k(c, c, d, f, g)
            }), c.onRejected.push(function() {
                al(c, c, e, f, g)
            })) : "FULFILLED" === c.state.status ? $k(c, c, d, f, g) : "REJECTED" === c.state.status && al(c, c, e, f, g)
        }))
    };

    function Zk(a, b) {
        a.then(void 0, b)
    }

    function $k(a, b, c, d, e) {
        try {
            if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
            var f = c(a.state.value);
            f instanceof Yk ? bl(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function al(a, b, c, d, e) {
        try {
            if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
            var f = c(a.state.reason);
            f instanceof Yk ? bl(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function bl(a, b, c, d, e) {
        b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function(f) {
            f instanceof Yk ? bl(a, b, f, d, e) : d(f)
        }, function(f) {
            e(f)
        })
    };

    function cl(a, b, c) {
        function d() {
            c(a.error);
            f()
        }

        function e() {
            b(a.result);
            f()
        }

        function f() {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", d)
            } catch (g) {}
        }
        a.addEventListener("success", e);
        a.addEventListener("error", d)
    }

    function dl(a) {
        return new Promise(function(b, c) {
            cl(a, b, c)
        })
    }

    function el(a) {
        return new Yk(new Xk(function(b, c) {
            cl(a, b, c)
        }))
    };

    function fl(a, b) {
        return new Yk(new Xk(function(c, d) {
            function e() {
                var f = a ? b(a) : null;
                f ? f.then(function(g) {
                    a = g;
                    e()
                }, d) : c()
            }
            e()
        }))
    };

    function gl(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(M());
        this.i = !1
    }
    l = gl.prototype;
    l.add = function(a, b, c) {
        return hl(this, [a], {
            mode: "readwrite",
            O: !0
        }, function(d) {
            return d.objectStore(a).add(b, c)
        })
    };
    l.clear = function(a) {
        return hl(this, [a], {
            mode: "readwrite",
            O: !0
        }, function(b) {
            return b.objectStore(a).clear()
        })
    };
    l.close = function() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    };
    l.count = function(a, b) {
        return hl(this, [a], {
            mode: "readonly",
            O: !0
        }, function(c) {
            return c.objectStore(a).count(b)
        })
    };

    function il(a, b, c) {
        a = a.h.createObjectStore(b, c);
        return new jl(a)
    }
    l.delete = function(a, b) {
        return hl(this, [a], {
            mode: "readwrite",
            O: !0
        }, function(c) {
            return c.objectStore(a).delete(b)
        })
    };
    l.get = function(a, b) {
        return hl(this, [a], {
            mode: "readonly",
            O: !0
        }, function(c) {
            return c.objectStore(a).get(b)
        })
    };

    function kl(a, b) {
        return hl(a, ["LogsRequestsStore"], {
            mode: "readwrite",
            O: !0
        }, function(c) {
            c = c.objectStore("LogsRequestsStore");
            return el(c.h.put(b, void 0))
        })
    }
    l.objectStoreNames = function() {
        return Array.from(this.h.objectStoreNames)
    };

    function hl(a, b, c, d) {
        var e, f, g, h, k, m, n, t, y, u, C, D;
        return w(function(L) {
            switch (L.h) {
                case 1:
                    var O = {
                        mode: "readonly",
                        O: !1,
                        tag: "IDB_TRANSACTION_TAG_UNKNOWN"
                    };
                    "string" === typeof c ? O.mode = c : Object.assign(O, c);
                    e = O;
                    a.transactionCount++;
                    f = e.O ? 3 : 1;
                    g = 0;
                case 2:
                    if (h) {
                        L.s(3);
                        break
                    }
                    g++;
                    k = Math.round(M());
                    ta(L, 4);
                    m = a.h.transaction(b, e.mode);
                    O = new ll(m);
                    O = ml(O, d);
                    return v(L, O, 6);
                case 6:
                    return n = L.i, t = Math.round(M()), nl(a, k, t, g, void 0, b.join(), e), L.return(n);
                case 4:
                    y = va(L);
                    u = Math.round(M());
                    C = Tk(y, a.h.name, b.join(), a.h.version);
                    if ((D = C instanceof Pk && !C.h) || g >= f) nl(a, k, u, g, C, b.join(), e), h = C;
                    L.s(2);
                    break;
                case 3:
                    return L.return(Promise.reject(h))
            }
        })
    }

    function nl(a, b, c, d, e, f, g) {
        b = c - b;
        e ? (e instanceof Pk && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && Dk("QUOTA_EXCEEDED", {
            dbName: Ik(a.h.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode
        }), e instanceof Pk && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), Dk("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c
        }), a.i = !0), ol(a, !1, d, f, b, g.tag), Ck(e)) : ol(a, !0, d, f, b, g.tag)
    }

    function ol(a, b, c, d, e, f) {
        Dk("TRANSACTION_ENDED", {
            objectStoreNames: d,
            connectionHasUnknownAbortedTransaction: a.i,
            duration: e,
            isSuccessful: b,
            tryCount: c,
            tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
        })
    }
    l.getName = function() {
        return this.h.name
    };

    function jl(a) {
        this.h = a
    }
    l = jl.prototype;
    l.add = function(a, b) {
        return el(this.h.add(a, b))
    };
    l.autoIncrement = function() {
        return this.h.autoIncrement
    };
    l.clear = function() {
        return el(this.h.clear()).then(function() {})
    };
    l.count = function(a) {
        return el(this.h.count(a))
    };

    function pl(a, b) {
        return ql(a, {
            query: b
        }, function(c) {
            return c.delete().then(function() {
                return c.continue()
            })
        }).then(function() {})
    }
    l.delete = function(a) {
        return a instanceof IDBKeyRange ? pl(this, a) : el(this.h.delete(a))
    };
    l.get = function(a) {
        return el(this.h.get(a))
    };
    l.index = function(a) {
        try {
            return new rl(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Rk(a, this.h.name);
            throw b;
        }
    };
    l.getName = function() {
        return this.h.name
    };
    l.keyPath = function() {
        return this.h.keyPath
    };

    function ql(a, b, c) {
        a = a.h.openCursor(b.query, b.direction);
        return sl(a).then(function(d) {
            return fl(d, c)
        })
    }

    function ll(a) {
        var b = this;
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise(function(c, d) {
            b.h.addEventListener("complete", function() {
                c()
            });
            b.h.addEventListener("error", function(e) {
                e.currentTarget === e.target && d(b.h.error)
            });
            b.h.addEventListener("abort", function() {
                var e = b.h.error;
                if (e) d(e);
                else if (!b.i) {
                    e = Pk;
                    for (var f = b.h.objectStoreNames, g = [], h = 0; h < f.length; h++) {
                        var k = f.item(h);
                        if (null === k) throw Error("Invariant: item in DOMStringList is null");
                        g.push(k)
                    }
                    e = new e("UNKNOWN_ABORT", {
                        objectStoreNames: g.join(),
                        dbName: b.h.db.name,
                        mode: b.h.mode
                    });
                    d(e)
                }
            })
        })
    }

    function ml(a, b) {
        var c = new Promise(function(d, e) {
            try {
                Zk(b(a).then(function(f) {
                    d(f)
                }), e)
            } catch (f) {
                e(f), a.abort()
            }
        });
        return Promise.all([c, a.done]).then(function(d) {
            return q(d).next().value
        })
    }
    ll.prototype.abort = function() {
        this.h.abort();
        this.i = !0;
        throw new Pk("EXPLICIT_ABORT");
    };
    ll.prototype.objectStore = function(a) {
        a = this.h.objectStore(a);
        var b = this.j.get(a);
        b || (b = new jl(a), this.j.set(a, b));
        return b
    };

    function rl(a) {
        this.h = a
    }
    l = rl.prototype;
    l.count = function(a) {
        return el(this.h.count(a))
    };
    l.delete = function(a) {
        return tl(this, {
            query: a
        }, function(b) {
            return b.delete().then(function() {
                return b.continue()
            })
        })
    };
    l.get = function(a) {
        return el(this.h.get(a))
    };
    l.getKey = function(a) {
        return el(this.h.getKey(a))
    };
    l.keyPath = function() {
        return this.h.keyPath
    };
    l.unique = function() {
        return this.h.unique
    };

    function tl(a, b, c) {
        a = a.h.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction);
        return sl(a).then(function(d) {
            return fl(d, c)
        })
    }

    function ul(a, b) {
        this.request = a;
        this.cursor = b
    }

    function sl(a) {
        return el(a).then(function(b) {
            return b ? new ul(a, b) : null
        })
    }
    l = ul.prototype;
    l.advance = function(a) {
        this.cursor.advance(a);
        return sl(this.request)
    };
    l.continue = function(a) {
        this.cursor.continue(a);
        return sl(this.request)
    };
    l.delete = function() {
        return el(this.cursor.delete()).then(function() {})
    };
    l.getKey = function() {
        return this.cursor.key
    };
    l.getValue = function() {
        return this.cursor.value
    };
    l.update = function(a) {
        return el(this.cursor.update(a))
    };

    function vl(a, b, c) {
        return new Promise(function(d, e) {
            function f() {
                y || (y = new gl(g.result, {
                    closed: t
                }));
                return y
            }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
            var h = c.blocked,
                k = c.blocking,
                m = c.Dc,
                n = c.upgrade,
                t = c.closed,
                y;
            g.addEventListener("upgradeneeded", function(u) {
                try {
                    if (null === u.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                    if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                    u.dataLoss && "none" !== u.dataLoss && Dk("IDB_DATA_CORRUPTED", {
                        reason: u.dataLossMessage || "unknown reason",
                        dbName: Ik(a)
                    });
                    var C = f(),
                        D = new ll(g.transaction);
                    n && n(C, function(L) {
                        return u.oldVersion < L && u.newVersion >= L
                    }, D);
                    D.done.catch(function(L) {
                        e(L)
                    })
                } catch (L) {
                    e(L)
                }
            });
            g.addEventListener("success", function() {
                var u = g.result;
                k && u.addEventListener("versionchange", function() {
                    k(f())
                });
                u.addEventListener("close", function() {
                    Dk("IDB_UNEXPECTEDLY_CLOSED", {
                        dbName: Ik(a),
                        dbVersion: u.version
                    });
                    m && m()
                });
                d(f())
            });
            g.addEventListener("error", function() {
                e(g.error)
            });
            h && g.addEventListener("blocked", function() {
                h()
            })
        })
    }

    function wl(a, b, c) {
        c = void 0 === c ? {} : c;
        return vl(a, b, c)
    }

    function xl(a, b) {
        b = void 0 === b ? {} : b;
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.h) return ta(g, 2), c = self.indexedDB.deleteDatabase(a), d = b, (e = d.blocked) && c.addEventListener("blocked", function() {
                e()
            }), v(g, dl(c), 4);
            if (2 != g.h) return ua(g, 0);
            f = va(g);
            throw Tk(f, a, "", -1);
        })
    };

    function yl(a) {
        return new Promise(function(b) {
            Xh(function() {
                b()
            }, a)
        })
    }

    function zl(a, b) {
        this.name = a;
        this.options = b;
        this.l = !0;
        this.m = this.o = 0;
        this.i = 500
    }
    zl.prototype.j = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return wl(a, b, c)
    };
    zl.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return xl(this.name, a)
    };

    function Al(a, b) {
        return new Pk("INCOMPATIBLE_DB_VERSION", {
            dbName: a.name,
            oldVersion: a.options.version,
            newVersion: b
        })
    }

    function Bl(a, b) {
        if (!b) throw Uk("openWithToken", Ik(a.name));
        return a.open()
    }
    zl.prototype.open = function() {
        function a() {
            var f, g, h, k, m, n, t, y, u, C;
            return w(function(D) {
                switch (D.h) {
                    case 1:
                        return h = null !== (f = Error().stack) && void 0 !== f ? f : "", ta(D, 2), v(D, c.j(c.name, c.options.version, e), 4);
                    case 4:
                        k = D.i;
                        for (var L = c.options, O = [], R = q(Object.keys(L.Ba)), V = R.next(); !V.done; V = R.next()) {
                            V = V.value;
                            var Z = L.Ba[V],
                                Ad = void 0 === Z.mc ? Number.MAX_VALUE : Z.mc;
                            !(k.h.version >= Z.Za) || k.h.version >= Ad || k.h.objectStoreNames.contains(V) || O.push(V)
                        }
                        m = O;
                        if (0 === m.length) {
                            D.s(5);
                            break
                        }
                        n = Object.keys(c.options.Ba);
                        t = k.objectStoreNames();
                        if (c.m < wh("ytidb_reopen_db_retries", 0)) return c.m++, k.close(), Ck(new Pk("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                            dbName: c.name,
                            expectedObjectStores: n,
                            foundObjectStores: t
                        })), D.return(a());
                        if (!(c.o < wh("ytidb_remake_db_retries", 1))) {
                            D.s(6);
                            break
                        }
                        c.o++;
                        if (!K("ytidb_remake_db_enable_backoff_delay")) {
                            D.s(7);
                            break
                        }
                        return v(D, yl(c.i), 8);
                    case 8:
                        c.i *= 2;
                    case 7:
                        return v(D, c.delete(), 9);
                    case 9:
                        return Ck(new Pk("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: c.name,
                                expectedObjectStores: n,
                                foundObjectStores: t
                            })),
                            D.return(a());
                    case 6:
                        throw new Qk(t, n);
                    case 5:
                        return D.return(k);
                    case 2:
                        y = va(D);
                        if (y instanceof DOMException ? "VersionError" !== y.name : "DOMError" in self && y instanceof DOMError ? "VersionError" !== y.name : !(y instanceof Object && "message" in y) || "An attempt was made to open a database using a lower version than the existing version." !== y.message) {
                            D.s(10);
                            break
                        }
                        return v(D, c.j(c.name, void 0, Object.assign(Object.assign({}, e), {
                            upgrade: void 0
                        })), 11);
                    case 11:
                        u = D.i;
                        C = u.h.version;
                        if (void 0 !== c.options.version && C >
                            c.options.version + 1) throw u.close(), c.l = !1, Al(c, C);
                        return D.return(u);
                    case 10:
                        throw b(), y instanceof Error && !K("ytidb_async_stack_killswitch") && (y.stack = y.stack + "\n" + h.substring(h.indexOf("\n") + 1)), Tk(y, c.name, "", null !== (g = c.options.version) && void 0 !== g ? g : -1);
                }
            })
        }

        function b() {
            c.h === d && (c.h = void 0)
        }
        var c = this;
        if (!this.l) throw Al(this);
        if (this.h) return this.h;
        var d, e = {
            blocking: function(f) {
                f.close()
            },
            closed: b,
            Dc: b,
            upgrade: this.options.upgrade
        };
        return this.h = d = a()
    };
    var Cl = new zl("YtIdbMeta", {
        Ba: {
            databases: {
                Za: 1
            }
        },
        upgrade: function(a, b) {
            b(1) && il(a, "databases", {
                keyPath: "actualName"
            })
        }
    });

    function Dl(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return v(d, Bl(Cl, b), 2);
            c = d.i;
            return d.return(hl(c, ["databases"], {
                O: !0,
                mode: "readwrite"
            }, function(e) {
                var f = e.objectStore("databases");
                return f.get(a.actualName).then(function(g) {
                    if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) return el(f.h.put(a, void 0)).then(function() {})
                })
            }))
        })
    }

    function El(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return a ? v(d, Bl(Cl, b), 2) : d.return();
            c = d.i;
            return d.return(c.delete("databases", a))
        })
    }

    function Fl(a, b) {
        var c, d;
        return w(function(e) {
            return 1 == e.h ? (c = [], v(e, Bl(Cl, b), 2)) : 3 != e.h ? (d = e.i, v(e, hl(d, ["databases"], {
                O: !0,
                mode: "readonly"
            }, function(f) {
                c.length = 0;
                return ql(f.objectStore("databases"), {}, function(g) {
                    a(g.getValue()) && c.push(g.getValue());
                    return g.continue()
                })
            }), 3)) : e.return(c)
        })
    }

    function Gl(a) {
        return Fl(function(b) {
            return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier
        }, a)
    }

    function Hl(a, b) {
        return Fl(function(c) {
            return void 0 !== c.userIdentifier && !a.includes(c.userIdentifier)
        }, b)
    };
    var Il, Jl = new function() {}(new function() {});

    function Kl() {
        var a, b, c;
        return w(function(d) {
            switch (d.h) {
                case 1:
                    a = uk();
                    if (null === a || void 0 === a ? 0 : a.hasSucceededOnce) return d.return(!0);
                    var e;
                    if (e = Li) e = /WebKit\/([0-9]+)/.exec(Wb()), e = !!(e && 600 <= parseInt(e[1], 10));
                    e && (e = /WebKit\/([0-9]+)/.exec(Wb()), e = !(e && 602 <= parseInt(e[1], 10)));
                    if (e || sc) return d.return(!1);
                    try {
                        if (b = self, !(b.indexedDB && b.IDBIndex && b.IDBKeyRange && b.IDBObjectStore)) return d.return(!1)
                    } catch (f) {
                        return d.return(!1)
                    }
                    if (!("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype)) return d.return(!1);
                    ta(d, 2);
                    c = {
                        actualName: "yt-idb-test-do-not-use",
                        publicName: "yt-idb-test-do-not-use",
                        userIdentifier: void 0
                    };
                    return v(d, Dl(c, Jl), 4);
                case 4:
                    return v(d, El("yt-idb-test-do-not-use", Jl), 5);
                case 5:
                    return d.return(!0);
                case 2:
                    return va(d), d.return(!1)
            }
        })
    }

    function Ll() {
        if (void 0 !== Il) return Il;
        xk = !0;
        return Il = Kl().then(function(a) {
            xk = !1;
            var b, c;
            null !== (b = tk()) && void 0 !== b && b.h && (b = uk(), b = {
                hasSucceededOnce: (null === b || void 0 === b ? void 0 : b.hasSucceededOnce) || a
            }, null === (c = tk()) || void 0 === c ? void 0 : c.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0));
            return a
        })
    }

    function Ml() {
        return A("ytglobal.idbToken_") || void 0
    }

    function Nl() {
        var a = Ml();
        return a ? Promise.resolve(a) : Ll().then(function(b) {
            (b = b ? Jl : void 0) && z("ytglobal.idbToken_", b, void 0);
            return b
        })
    };
    var Ol = 0;

    function Pl(a) {
        Ol || (Ol = ai.M(function() {
            var b, c, d, e, f;
            return w(function(g) {
                switch (g.h) {
                    case 1:
                        return v(g, Nl(), 2);
                    case 2:
                        b = g.i;
                        if (!b) return g.return();
                        c = !0;
                        ta(g, 3);
                        return v(g, Hl(a, b), 5);
                    case 5:
                        d = g.i;
                        if (!d.length) {
                            c = !1;
                            g.s(6);
                            break
                        }
                        e = d[0];
                        return v(g, xl(e.actualName), 7);
                    case 7:
                        return v(g, El(e.actualName, b), 6);
                    case 6:
                        ua(g, 4);
                        break;
                    case 3:
                        f = va(g), Ck(f), c = !1;
                    case 4:
                        ai.U(Ol), Ol = 0, c && Pl(a), g.h = 0
                }
            })
        }))
    }
    new id;

    function Ql(a) {
        if (!Fk()) throw a = new Pk("AUTH_INVALID", {
            dbName: a
        }), Ck(a), a;
        var b = Gk();
        return {
            actualName: a + ":" + b,
            publicName: a,
            userIdentifier: b
        }
    }

    function Rl(a, b, c, d) {
        var e, f, g, h, k, m;
        return w(function(n) {
            switch (n.h) {
                case 1:
                    return f = null !== (e = Error().stack) && void 0 !== e ? e : "", v(n, Nl(), 2);
                case 2:
                    g = n.i;
                    if (!g) throw h = Uk("openDbImpl", a, b), K("ytidb_async_stack_killswitch") || (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)), Ck(h), h;
                    Hk(a);
                    k = c ? {
                        actualName: a,
                        publicName: a,
                        userIdentifier: void 0
                    } : Ql(a);
                    ta(n, 3);
                    return v(n, Dl(k, g), 5);
                case 5:
                    return v(n, wl(k.actualName, b, d), 6);
                case 6:
                    return n.return(n.i);
                case 3:
                    return m = va(n), ta(n, 7), v(n, El(k.actualName,
                        g), 9);
                case 9:
                    ua(n, 8);
                    break;
                case 7:
                    va(n);
                case 8:
                    throw m;
            }
        })
    }

    function Sl(a, b, c) {
        c = void 0 === c ? {} : c;
        return Rl(a, b, !1, c)
    }

    function Tl(a, b, c) {
        c = void 0 === c ? {} : c;
        return Rl(a, b, !0, c)
    }

    function Ul(a, b) {
        b = void 0 === b ? {} : b;
        var c, d;
        return w(function(e) {
            if (1 == e.h) return v(e, Nl(), 2);
            if (3 != e.h) {
                c = e.i;
                if (!c) return e.return();
                Hk(a);
                d = Ql(a);
                return v(e, xl(d.actualName, b), 3)
            }
            return v(e, El(d.actualName, c), 0)
        })
    }

    function Vl(a, b, c) {
        a = a.map(function(d) {
            return w(function(e) {
                return 1 == e.h ? v(e, xl(d.actualName, b), 2) : v(e, El(d.actualName, c), 0)
            })
        });
        return Promise.all(a).then(function() {})
    }

    function Wl() {
        var a = void 0 === a ? {} : a;
        var b, c;
        return w(function(d) {
            if (1 == d.h) return v(d, Nl(), 2);
            if (3 != d.h) {
                b = d.i;
                if (!b) return d.return();
                Hk("LogsDatabaseV2");
                return v(d, Gl(b), 3)
            }
            c = d.i;
            return v(d, Vl(c, a, b), 0)
        })
    }

    function Xl(a, b) {
        b = void 0 === b ? {} : b;
        var c;
        return w(function(d) {
            if (1 == d.h) return v(d, Nl(), 2);
            if (3 != d.h) {
                c = d.i;
                if (!c) return d.return();
                Hk(a);
                return v(d, xl(a, b), 3)
            }
            return v(d, El(a, c), 0)
        })
    };

    function Yl(a) {
        var b, c, d, e, f, g, h, k;
        this.h = !1;
        this.potentialEsfErrorCounter = this.i = 0;
        this.handleError = function() {};
        this.va = function() {};
        this.now = Date.now;
        this.Aa = !1;
        this.Ob = null !== (b = a.Ob) && void 0 !== b ? b : 100;
        this.Lb = null !== (c = a.Lb) && void 0 !== c ? c : 1;
        this.Jb = null !== (d = a.Jb) && void 0 !== d ? d : 2592E6;
        this.Hb = null !== (e = a.Hb) && void 0 !== e ? e : 12E4;
        this.Kb = null !== (f = a.Kb) && void 0 !== f ? f : 5E3;
        this.v = null !== (g = a.v) && void 0 !== g ? g : void 0;
        this.Oa = !!a.Oa;
        this.Na = null !== (h = a.Na) && void 0 !== h ? h : .1;
        this.Ua = null !== (k = a.Ua) && void 0 !== k ? k : 10;
        a.handleError && (this.handleError = a.handleError);
        a.va && (this.va = a.va);
        a.Aa && (this.Aa = a.Aa);
        this.C = a.C;
        this.V = a.V;
        this.J = a.J;
        this.I = a.I;
        this.ea = a.ea;
        this.mb = a.mb;
        this.lb = a.lb;
        this.v && (!this.C || this.C("networkless_logging")) && Zl(this)
    }

    function Zl(a) {
        return w(function(b) {
            if (1 == b.h) return !a.v || a.Aa ? b.return() : a.Oa && Math.random() <= a.Na ? v(b, a.J.Ub(a.v), 2) : b.s(2);
            $l(a);
            a.I.G() && a.Ea();
            a.I.ba(a.mb, a.Ea.bind(a));
            a.I.ba(a.lb, a.rb.bind(a));
            a.h = !0;
            b.h = 0
        })
    }
    l = Yl.prototype;
    l.writeThenSend = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (this.v && this.h) {
            var d = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.J.set(d, this.v).then(function(e) {
                d.id = e;
                c.I.G() && am(c, d)
            }).catch(function(e) {
                am(c, d);
                bm(c, e)
            })
        } else this.ea(a, b)
    };
    l.sendThenWrite = function(a, b, c) {
        var d = this;
        b = void 0 === b ? {} : b;
        if (this.v && this.h) {
            var e = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.C && this.C("nwl_skip_retry") && (e.skipRetry = c);
            if (this.I.G() || this.C && this.C("nwl_aggressive_send_then_write") && !e.skipRetry) {
                if (!e.skipRetry) {
                    var f = b.onError ? b.onError : function() {};
                    b.onError = function(g, h) {
                        return w(function(k) {
                            if (1 == k.h) return v(k, d.J.set(e, d.v).catch(function(m) {
                                bm(d, m)
                            }), 2);
                            f(g, h);
                            k.h = 0
                        })
                    }
                }
                this.ea(a, b, e.skipRetry)
            } else this.J.set(e, this.v).catch(function(g) {
                d.ea(a, b, e.skipRetry);
                bm(d, g)
            })
        } else this.ea(a, b, this.C && this.C("nwl_skip_retry") && c)
    };
    l.sendAndWrite = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (this.v && this.h) {
            var d = {
                    url: a,
                    options: b,
                    timestamp: this.now(),
                    status: "NEW",
                    sendCount: 0
                },
                e = !1,
                f = b.onSuccess ? b.onSuccess : function() {};
            d.options.onSuccess = function(g, h) {
                void 0 !== d.id ? c.J.ta(d.id, c.v) : e = !0;
                c.I.ca && c.C && c.C("vss_network_hint") && c.I.ca(!0);
                f(g, h)
            };
            this.ea(d.url, d.options);
            this.J.set(d, this.v).then(function(g) {
                d.id = g;
                e && c.J.ta(d.id, c.v)
            }).catch(function(g) {
                bm(c, g)
            })
        } else this.ea(a, b)
    };
    l.Ea = function() {
        var a = this;
        if (!this.v) throw Uk("throttleSend");
        this.i || (this.i = this.V.M(function() {
            var b;
            return w(function(c) {
                if (1 == c.h) return v(c, a.J.Ab("NEW", a.v), 2);
                if (3 != c.h) return b = c.i, b ? v(c, am(a, b), 3) : (a.rb(), c.return());
                a.i && (a.i = 0, a.Ea());
                c.h = 0
            })
        }, this.Ob))
    };
    l.rb = function() {
        this.V.U(this.i);
        this.i = 0
    };

    function am(a, b) {
        var c, d;
        return w(function(e) {
            switch (e.h) {
                case 1:
                    if (!a.v) throw c = Uk("immediateSend"), c;
                    if (void 0 === b.id) {
                        e.s(2);
                        break
                    }
                    return v(e, a.J.fc(b.id, a.v), 3);
                case 3:
                    (d = e.i) ? b = d: a.va(Error("The request cannot be found in the database."));
                case 2:
                    if (cm(a, b, a.Jb)) {
                        e.s(4);
                        break
                    }
                    a.va(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === b.id) {
                        e.s(5);
                        break
                    }
                    return v(e, a.J.ta(b.id, a.v), 5);
                case 5:
                    return e.return();
                case 4:
                    b.skipRetry || (b = dm(a, b));
                    if (!b) {
                        e.s(0);
                        break
                    }
                    if (!b.skipRetry ||
                        void 0 === b.id) {
                        e.s(8);
                        break
                    }
                    return v(e, a.J.ta(b.id, a.v), 8);
                case 8:
                    a.ea(b.url, b.options, !!b.skipRetry), e.h = 0
            }
        })
    }

    function dm(a, b) {
        if (!a.v) throw Uk("updateRequestHandlers");
        var c = b.options.onError ? b.options.onError : function() {};
        b.options.onError = function(e, f) {
            var g;
            return w(function(h) {
                switch (h.h) {
                    case 1:
                        g = em(f);
                        if (!(a.C && a.C("nwl_consider_error_code") && g || a.C && !a.C("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.Ua)) {
                            h.s(2);
                            break
                        }
                        if (!a.I.fa) {
                            h.s(3);
                            break
                        }
                        return v(h, a.I.fa(), 3);
                    case 3:
                        if (a.I.G()) {
                            h.s(2);
                            break
                        }
                        c(e, f);
                        if (!a.C || !a.C("nwl_consider_error_code") || void 0 === (null === b || void 0 === b ? void 0 : b.id)) {
                            h.s(6);
                            break
                        }
                        return v(h, a.J.nb(b.id, a.v, !1), 6);
                    case 6:
                        return h.return();
                    case 2:
                        if (a.C && a.C("nwl_consider_error_code") &&
                            !g && a.potentialEsfErrorCounter > a.Ua) return h.return();
                        a.potentialEsfErrorCounter++;
                        if (void 0 === (null === b || void 0 === b ? void 0 : b.id)) {
                            h.s(8);
                            break
                        }
                        return b.sendCount < a.Lb ? v(h, a.J.nb(b.id, a.v), 12) : v(h, a.J.ta(b.id, a.v), 8);
                    case 12:
                        a.V.M(function() {
                            a.I.G() && a.Ea()
                        }, a.Kb);
                    case 8:
                        c(e, f), h.h = 0
                }
            })
        };
        var d = b.options.onSuccess ? b.options.onSuccess : function() {};
        b.options.onSuccess = function(e, f) {
            return w(function(g) {
                if (1 == g.h) return void 0 === (null === b || void 0 === b ? void 0 : b.id) ? g.s(2) : v(g, a.J.ta(b.id, a.v), 2);
                a.I.ca && a.C && a.C("vss_network_hint") && a.I.ca(!0);
                d(e, f);
                g.h = 0
            })
        };
        return b
    }

    function cm(a, b, c) {
        b = b.timestamp;
        return a.now() - b >= c ? !1 : !0
    }

    function $l(a) {
        if (!a.v) throw Uk("retryQueuedRequests");
        a.J.Ab("QUEUED", a.v).then(function(b) {
            b && !cm(a, b, a.Hb) ? a.V.M(function() {
                return w(function(c) {
                    if (1 == c.h) return void 0 === b.id ? c.s(2) : v(c, a.J.nb(b.id, a.v), 2);
                    $l(a);
                    c.h = 0
                })
            }) : a.I.G() && a.Ea()
        })
    }

    function bm(a, b) {
        a.Pb && !a.I.G() ? a.Pb(b) : a.handleError(b)
    }

    function em(a) {
        var b;
        return (a = null === (b = null === a || void 0 === a ? void 0 : a.error) || void 0 === b ? void 0 : b.code) && 400 <= a && 599 >= a ? !1 : !0
    };

    function fm(a, b) {
        this.version = a;
        this.args = b
    };

    function gm(a, b) {
        this.topic = a;
        this.h = b
    }
    gm.prototype.toString = function() {
        return this.topic
    };
    var hm = A("ytPubsub2Pubsub2Instance") || new J;
    J.prototype.subscribe = J.prototype.subscribe;
    J.prototype.unsubscribeByKey = J.prototype.ya;
    J.prototype.publish = J.prototype.ma;
    J.prototype.clear = J.prototype.clear;
    z("ytPubsub2Pubsub2Instance", hm, void 0);
    var im = A("ytPubsub2Pubsub2SubscribedKeys") || {};
    z("ytPubsub2Pubsub2SubscribedKeys", im, void 0);
    var jm = A("ytPubsub2Pubsub2TopicToKeys") || {};
    z("ytPubsub2Pubsub2TopicToKeys", jm, void 0);
    var km = A("ytPubsub2Pubsub2IsAsync") || {};
    z("ytPubsub2Pubsub2IsAsync", km, void 0);
    z("ytPubsub2Pubsub2SkipSubKey", null, void 0);

    function lm(a, b) {
        var c = mm();
        c && c.publish.call(c, a.toString(), a, b)
    }

    function nm(a) {
        var b = om,
            c = mm();
        if (!c) return 0;
        var d = c.subscribe(b.toString(), function(e, f) {
            var g = A("ytPubsub2Pubsub2SkipSubKey");
            g && g == d || (g = function() {
                if (im[d]) try {
                    if (f && b instanceof gm && b != e) try {
                        var h = b.h,
                            k = f;
                        if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                        try {
                            if (!h.la) {
                                var m = new h;
                                h.la = m.version
                            }
                            var n = h.la
                        } catch (t) {}
                        if (!n || k.version != n) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                        try {
                            f = Reflect.construct(h,
                                jb(k.args))
                        } catch (t) {
                            throw t.message = "yt.pubsub2.Data.deserialize(): " + t.message, t;
                        }
                    } catch (t) {
                        throw t.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + t.message, t;
                    }
                    a.call(window, f)
                } catch (t) {
                    Gh(t)
                }
            }, km[b.toString()] ? A("yt.scheduler.instance") ? ai.M(g) : Rh(g, 0) : g())
        });
        im[d] = !0;
        jm[b.toString()] || (jm[b.toString()] = []);
        jm[b.toString()].push(d);
        return d
    }

    function pm() {
        var a = qm,
            b = nm(function(c) {
                a.apply(void 0, arguments);
                rm(b)
            });
        return b
    }

    function rm(a) {
        var b = mm();
        b && ("number" === typeof a && (a = [a]), cb(a, function(c) {
            b.unsubscribeByKey(c);
            delete im[c]
        }))
    }

    function mm() {
        return A("ytPubsub2Pubsub2Instance")
    };

    function sm(a, b) {
        zl.call(this, a, b);
        this.options = b;
        Hk(a)
    }
    r(sm, zl);

    function tm(a, b) {
        var c;
        return function() {
            c || (c = new sm(a, b));
            return c
        }
    }
    sm.prototype.j = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return (this.options.ob ? Tl : Sl)(a, b, Object.assign({}, c))
    };
    sm.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return (this.options.ob ? Xl : Ul)(this.name, a)
    };

    function um(a, b) {
        return tm(a, b)
    };
    var vm;

    function wm() {
        if (vm) return vm();
        var a = {};
        vm = um("LogsDatabaseV2", {
            Ba: (a.LogsRequestsStore = {
                Za: 2
            }, a),
            ob: !1,
            upgrade: function(b, c, d) {
                c(2) && il(b, "LogsRequestsStore", {
                    keyPath: "id",
                    autoIncrement: !0
                });
                c(3);
                c(5) && (d = d.objectStore("LogsRequestsStore"), d.h.indexNames.contains("newRequest") && d.h.deleteIndex("newRequest"), d.h.createIndex("newRequestV2", ["status", "interface", "timestamp"], {
                    unique: !1
                }));
                c(7) && b.h.objectStoreNames.contains("sapisid") && b.h.deleteObjectStore("sapisid");
                c(9) && b.h.objectStoreNames.contains("SWHealthLog") && b.h.deleteObjectStore("SWHealthLog")
            },
            version: 9
        });
        return vm()
    };

    function xm(a) {
        return Bl(wm(), a)
    }

    function ym(a, b) {
        var c, d, e, f;
        return w(function(g) {
            if (1 == g.h) return c = {
                startTime: M(),
                transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
            }, v(g, xm(b), 2);
            if (3 != g.h) return d = g.i, e = Object.assign(Object.assign({}, a), {
                options: JSON.parse(JSON.stringify(a.options)),
                interface: B("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            }), v(g, kl(d, e), 3);
            f = g.i;
            c.Ec = M();
            zm(c);
            return g.return(f)
        })
    }

    function Am(a, b) {
        var c, d, e, f, g, h, k;
        return w(function(m) {
            if (1 == m.h) return c = {
                startTime: M(),
                transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
            }, v(m, xm(b), 2);
            if (3 != m.h) return d = m.i, e = B("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = [a, e, 0], g = [a, e, M()], h = IDBKeyRange.bound(f, g), k = void 0, v(m, hl(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                O: !0
            }, function(n) {
                return tl(n.objectStore("LogsRequestsStore").index("newRequestV2"), {
                    query: h,
                    direction: "prev"
                }, function(t) {
                    t.getValue() && (k = t.getValue(), "NEW" === a && (k.status = "QUEUED",
                        t.update(k)))
                })
            }), 3);
            c.Ec = M();
            zm(c);
            return m.return(k)
        })
    }

    function Bm(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return v(d, xm(b), 2);
            c = d.i;
            return d.return(hl(c, ["LogsRequestsStore"], {
                mode: "readwrite",
                O: !0
            }, function(e) {
                var f = e.objectStore("LogsRequestsStore");
                return f.get(a).then(function(g) {
                    if (g) return g.status = "QUEUED", el(f.h.put(g, void 0)).then(function() {
                        return g
                    })
                })
            }))
        })
    }

    function Cm(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d;
        return w(function(e) {
            if (1 == e.h) return v(e, xm(b), 2);
            d = e.i;
            return e.return(hl(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                O: !0
            }, function(f) {
                var g = f.objectStore("LogsRequestsStore");
                return g.get(a).then(function(h) {
                    return h ? (h.status = "NEW", c && (h.sendCount += 1), el(g.h.put(h, void 0)).then(function() {
                        return h
                    })) : Yk.resolve(void 0)
                })
            }))
        })
    }

    function Dm(a, b) {
        var c;
        return w(function(d) {
            if (1 == d.h) return v(d, xm(b), 2);
            c = d.i;
            return d.return(c.delete("LogsRequestsStore", a))
        })
    }

    function Em(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.h) return v(d, xm(a), 2);
            b = d.i;
            c = M() - 2592E6;
            return v(d, hl(b, ["LogsRequestsStore"], {
                mode: "readwrite",
                O: !0
            }, function(e) {
                return ql(e.objectStore("LogsRequestsStore"), {}, function(f) {
                    if (f.getValue().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Fm() {
        return w(function(a) {
            return v(a, Wl(), 0)
        })
    }

    function zm(a) {
        K("nwl_csi_killswitch") || .01 >= Math.random() && lm("nwl_transaction_latency_payload", a)
    };
    var Gm = {},
        Hm = um("ServiceWorkerLogsDatabase", {
            Ba: (Gm.SWHealthLog = {
                Za: 1
            }, Gm),
            ob: !0,
            upgrade: function(a, b) {
                b(1) && il(a, "SWHealthLog", {
                    keyPath: "id",
                    autoIncrement: !0
                }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
                    unique: !1
                })
            },
            version: 1
        });

    function Im(a) {
        return Bl(Hm(), a)
    }

    function Jm(a) {
        var b, c;
        return w(function(d) {
            if (1 == d.h) return v(d, Im(a), 2);
            b = d.i;
            c = M() - 2592E6;
            return v(d, hl(b, ["SWHealthLog"], {
                mode: "readwrite",
                O: !0
            }, function(e) {
                return ql(e.objectStore("SWHealthLog"), {}, function(f) {
                    if (f.getValue().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Km(a) {
        var b;
        return w(function(c) {
            if (1 == c.h) return v(c, Im(a), 2);
            b = c.i;
            return v(c, b.clear("SWHealthLog"), 0)
        })
    };

    function Lm() {
        this.h = new Map;
        this.i = !1
    }

    function Mm() {
        if (!Lm.h) {
            var a = A("yt.networkRequestMonitor.instance") || new Lm;
            z("yt.networkRequestMonitor.instance", a, void 0);
            Lm.h = a
        }
        return Lm.h
    }
    Lm.prototype.requestComplete = function(a, b) {
        b && (this.i = !0);
        a = this.removeParams(a);
        this.h.get(a) || this.h.set(a, b)
    };
    Lm.prototype.isEndpointCFR = function(a) {
        a = this.removeParams(a);
        return (a = this.h.get(a)) ? !1 : !1 === a && this.i ? !0 : null
    };
    Lm.prototype.removeParams = function(a) {
        return a.split("?")[0]
    };
    Lm.prototype.removeParams = Lm.prototype.removeParams;
    Lm.prototype.isEndpointCFR = Lm.prototype.isEndpointCFR;
    Lm.prototype.requestComplete = Lm.prototype.requestComplete;
    Lm.getInstance = Mm;
    var Nm;

    function Om() {
        Nm || (Nm = new nk("yt.offline"));
        return Nm
    }

    function Pm(a) {
        if (K("offline_error_handling")) {
            var b = Om().get("errors", !0) || {};
            b[a.message] = {
                name: a.name,
                stack: a.stack
            };
            a.level && (b[a.message].level = a.level);
            Om().set("errors", b, 2592E3, !0)
        }
    }

    function Qm() {
        if (K("offline_error_handling")) {
            var a = Om().get("errors", !0);
            if (a) {
                for (var b in a)
                    if (a[b]) {
                        var c = new Ek(b, "sent via offline_errors");
                        c.name = a[b].name;
                        c.stack = a[b].stack;
                        c.level = a[b].level;
                        Gh(c)
                    }
                Om().set("errors", {}, 2592E3, !0)
            }
        }
    };
    var Rm = wh("network_polling_interval", 3E4);

    function N() {
        Fe.call(this);
        this.L = 0;
        this.S = this.m = !1;
        this.l = this.fb();
        K("use_shared_nsm") ? (Ie.h || (Ie.h = new Ie(ai)), this.j = Ie.h) : (Sm(this), Tm(this))
    }
    r(N, Fe);

    function Um() {
        if (!N.h) {
            var a = A("yt.networkStatusManager.instance") || new N;
            z("yt.networkStatusManager.instance", a, void 0);
            N.h = a
        }
        return N.h
    }
    l = N.prototype;
    l.G = function() {
        var a;
        return K("use_shared_nsm") && this.j ? null === (a = this.j) || void 0 === a ? void 0 : a.G() : this.l
    };
    l.ca = function(a) {
        var b;
        K("use_shared_nsm") && this.j ? null === (b = this.j) || void 0 === b ? void 0 : b.j = a : a !== this.l && (this.l = a)
    };
    l.hc = function(a) {
        !K("use_shared_nsm") && (this.m = !0, void 0 === a ? 0 : a) && (this.L || Vm(this))
    };
    l.fb = function() {
        var a = window.navigator.onLine;
        return void 0 === a ? !0 : a
    };
    l.Xb = function() {
        this.S = !0
    };
    l.ba = function(a, b) {
        return K("use_shared_nsm") && this.j ? this.j.ba(a, b) : Fe.prototype.ba.call(this, a, b)
    };

    function Tm(a) {
        window.addEventListener("online", function() {
            return w(function(b) {
                if (1 == b.h) return v(b, a.fa(), 2);
                a.S && Qm();
                b.h = 0
            })
        })
    }

    function Sm(a) {
        window.addEventListener("offline", function() {
            return w(function(b) {
                return v(b, a.fa(), 0)
            })
        })
    }

    function Vm(a) {
        a.L = Vh(function() {
            return w(function(b) {
                if (1 == b.h) return a.l ? a.fb() || !a.m ? b.s(3) : v(b, a.fa(), 3) : v(b, a.fa(), 3);
                Vm(a);
                b.h = 0
            })
        }, Rm)
    }
    l.fa = function(a) {
        var b = this;
        if (K("use_shared_nsm") && this.j) {
            var c = Je(this.j, a);
            c.then(function(d) {
                K("use_cfr_monitor") && Mm().requestComplete("generate_204", d)
            });
            return c
        }
        return this.u ? this.u : this.u = new Promise(function(d) {
            var e, f, g;
            return w(function(h) {
                switch (h.h) {
                    case 1:
                        return e = window.AbortController ? new window.AbortController : void 0, f = null === e || void 0 === e ? void 0 : e.signal, g = !1, ta(h, 2, 3), e && (b.A = ai.M(function() {
                            e.abort()
                        }, a || 2E4)), v(h, fetch("/generate_204", {
                            method: "HEAD",
                            signal: f
                        }), 5);
                    case 5:
                        g = !0;
                    case 3:
                        wa(h);
                        K("use_cfr_monitor") && Mm().requestComplete("generate_204", g);
                        b.u = void 0;
                        b.A && ai.U(b.A);
                        g !== b.l && (b.l = g, b.l && b.m ? Ge(b, "ytnetworkstatus-online") : b.m && Ge(b, "ytnetworkstatus-offline"));
                        d(g);
                        xa(h);
                        break;
                    case 2:
                        va(h), g = !1, h.s(3)
                }
            })
        })
    };
    N.prototype.sendNetworkCheckRequest = N.prototype.fa;
    N.prototype.listen = N.prototype.ba;
    N.prototype.enableErrorFlushing = N.prototype.Xb;
    N.prototype.getWindowStatus = N.prototype.fb;
    N.prototype.monitorNetworkStatusChange = N.prototype.hc;
    N.prototype.networkStatusHint = N.prototype.ca;
    N.prototype.isNetworkAvailable = N.prototype.G;
    N.getInstance = Um;

    function Wm(a) {
        a = void 0 === a ? {} : a;
        Fe.call(this);
        var b = this;
        this.l = this.L = 0;
        this.m = "ytnetworkstatus-offline";
        this.u = "ytnetworkstatus-online";
        K("use_shared_nsm") && (this.m = "networkstatus-offline", this.u = "networkstatus-online");
        this.j = Um();
        var c = A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);
        c && c(a.xb);
        a.Ra && !K("use_shared_nsm") && (c = A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j)) && c();
        if (c = A("yt.networkStatusManager.instance.listen").bind(this.j)) a.Wa ?
            (this.Wa = a.Wa, c(this.u, function() {
                Xm(b, "publicytnetworkstatus-online");
                K("use_shared_nsm") && a.Ra && Qm()
            }), c(this.m, function() {
                Xm(b, "publicytnetworkstatus-offline")
            })) : (c(this.u, function() {
                Ge(b, "publicytnetworkstatus-online");
                K("use_shared_nsm") && a.Ra && Qm()
            }), c(this.m, function() {
                Ge(b, "publicytnetworkstatus-offline")
            }))
    }
    r(Wm, Fe);
    Wm.prototype.G = function() {
        var a = A("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.j)() : !0
    };
    Wm.prototype.ca = function(a) {
        var b = A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);
        b && b(a)
    };
    Wm.prototype.fa = function(a) {
        var b = this,
            c;
        return w(function(d) {
            c = A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);
            return K("skip_network_check_if_cfr") && Mm().isEndpointCFR("generate_204") ? d.return(new Promise(function(e) {
                var f;
                b.ca((null === (f = window.navigator) || void 0 === f ? void 0 : f.onLine) || !0);
                e(b.G())
            })) : c ? d.return(c(a)) : d.return(!0)
        })
    };

    function Xm(a, b) {
        a.Wa ? a.l ? (ai.U(a.L), a.L = ai.M(function() {
            a.A !== b && (Ge(a, b), a.A = b, a.l = M())
        }, a.Wa - (M() - a.l))) : (Ge(a, b), a.A = b, a.l = M()) : Ge(a, b)
    };
    var Ym;

    function Zm() {
        Yl.call(this, {
            J: {
                Ub: Em,
                ta: Dm,
                Ab: Am,
                fc: Bm,
                nb: Cm,
                set: ym
            },
            I: $m(),
            handleError: Gh,
            va: Hh,
            ea: an,
            now: M,
            Pb: Pm,
            V: $h(),
            mb: "publicytnetworkstatus-online",
            lb: "publicytnetworkstatus-offline",
            Oa: !0,
            Na: .1,
            Ua: wh("potential_esf_error_limit", 10),
            C: K,
            Aa: !Fk()
        });
        this.j = new id;
        this.Oa && Math.random() <= this.Na && this.v && Jm(this.v);
        K("networkless_immediately_drop_sw_health_store") && bn(this);
        K("networkless_immediately_drop_all_requests") && Fm();
        Xl("LogsDatabaseV2")
    }
    r(Zm, Yl);

    function cn() {
        var a = A("yt.networklessRequestController.instance");
        a || (a = new Zm, z("yt.networklessRequestController.instance", a, void 0), K("networkless_logging") && Nl().then(function(b) {
            return w(function(c) {
                if (1 == c.h) return a.v = b, v(c, Zl(a), 2);
                a.j.resolve();
                c.h = 0
            })
        }));
        return a
    }
    Zm.prototype.writeThenSend = function(a, b) {
        b || (b = {});
        Fk() || (this.h = !1);
        Yl.prototype.writeThenSend.call(this, a, b)
    };
    Zm.prototype.sendThenWrite = function(a, b, c) {
        b || (b = {});
        Fk() || (this.h = !1);
        Yl.prototype.sendThenWrite.call(this, a, b, c)
    };
    Zm.prototype.sendAndWrite = function(a, b) {
        b || (b = {});
        Fk() || (this.h = !1);
        Yl.prototype.sendAndWrite.call(this, a, b)
    };
    Zm.prototype.awaitInitialization = function() {
        return this.j.promise
    };

    function bn(a) {
        var b;
        w(function(c) {
            if (!a.v) throw b = Uk("clearSWHealthLogsDb"), b;
            return c.return(Km(a.v).catch(function(d) {
                a.handleError(d)
            }))
        })
    }

    function an(a, b, c) {
        K("use_cfr_monitor") && dn(a, b);
        var d;
        if (null === (d = b.postParams) || void 0 === d ? 0 : d.requestTimeMs) b.postParams.requestTimeMs = Math.round(M());
        c && 0 === Object.keys(b).length ? Pi(a) : Di(a, b)
    }

    function $m() {
        Ym || (Ym = new Wm({
            Ra: !0,
            xb: !0
        }));
        return Ym
    }

    function dn(a, b) {
        var c = b.onError ? b.onError : function() {};
        b.onError = function(e, f) {
            Mm().requestComplete(a, !1);
            c(e, f)
        };
        var d = b.onSuccess ? b.onSuccess : function() {};
        b.onSuccess = function(e, f) {
            Mm().requestComplete(a, !0);
            d(e, f)
        }
    };
    var en = !1,
        fn = 0,
        gn = 0,
        hn, jn = x.ytNetworklessLoggingInitializationOptions || {
            isNwlInitialized: en,
            potentialEsfErrorCounter: gn
        };
    z("ytNetworklessLoggingInitializationOptions", jn, void 0);

    function kn() {
        var a;
        w(function(b) {
            switch (b.h) {
                case 1:
                    return v(b, Nl(), 2);
                case 2:
                    a = b.i;
                    if (!a || !Fk() && !K("nwl_init_require_datasync_id_killswitch")) {
                        b.s(0);
                        break
                    }
                    en = !0;
                    jn.isNwlInitialized = en;
                    return v(b, Xl("LogsDatabaseV2"), 4);
                case 4:
                    if (!(.1 >= Math.random())) {
                        b.s(5);
                        break
                    }
                    return v(b, Em(a), 6);
                case 6:
                    return v(b, Jm(a), 5);
                case 5:
                    ln();
                    mn().G() && nn();
                    mn().ba("publicytnetworkstatus-online", nn);
                    mn().ba("publicytnetworkstatus-offline", on);
                    if (!K("networkless_immediately_drop_sw_health_store")) {
                        b.s(8);
                        break
                    }
                    return v(b,
                        pn(), 8);
                case 8:
                    if (K("networkless_immediately_drop_all_requests")) return v(b, Fm(), 0);
                    b.s(0)
            }
        })
    }

    function qn(a, b) {
        function c(d) {
            var e = mn().G();
            if (!rn() || !d || e && K("vss_networkless_bypass_write")) sn(a, b);
            else {
                var f = {
                    url: a,
                    options: b,
                    timestamp: M(),
                    status: "NEW",
                    sendCount: 0
                };
                ym(f, d).then(function(g) {
                    f.id = g;
                    mn().G() && tn(f)
                }).catch(function(g) {
                    tn(f);
                    mn().G() ? Gh(g) : Pm(g)
                })
            }
        }
        b = void 0 === b ? {} : b;
        K("skip_is_supported_killswitch") ? Nl().then(function(d) {
            c(d)
        }) : c(Ml())
    }

    function un(a, b) {
        function c(d) {
            if (rn() && d) {
                var e = {
                        url: a,
                        options: b,
                        timestamp: M(),
                        status: "NEW",
                        sendCount: 0
                    },
                    f = !1,
                    g = b.onSuccess ? b.onSuccess : function() {};
                e.options.onSuccess = function(k, m) {
                    K("use_cfr_monitor") && Mm().requestComplete(e.url, !0);
                    void 0 !== e.id ? Dm(e.id, d) : f = !0;
                    K("vss_network_hint") && mn().ca(!0);
                    g(k, m)
                };
                if (K("use_cfr_monitor")) {
                    var h = b.onError ? b.onError : function() {};
                    e.options.onError = function(k, m) {
                        Mm().requestComplete(e.url, !1);
                        h(k, m)
                    }
                }
                sn(e.url, e.options);
                ym(e, d).then(function(k) {
                    e.id = k;
                    f && Dm(e.id, d)
                }).catch(function(k) {
                    mn().G() ? Gh(k) : Pm(k)
                })
            } else sn(a, b)
        }
        b = void 0 === b ? {} : b;
        K("skip_is_supported_killswitch") ? Nl().then(function(d) {
            c(d)
        }) : c(Ml())
    }

    function nn() {
        var a = Ml();
        if (!a) throw Uk("throttleSend");
        fn || (fn = ai.M(function() {
            var b;
            return w(function(c) {
                if (1 == c.h) return v(c, Am("NEW", a), 2);
                if (3 != c.h) return b = c.i, b ? v(c, tn(b), 3) : (on(), c.return());
                fn && (fn = 0, nn());
                c.h = 0
            })
        }, 100))
    }

    function on() {
        ai.U(fn);
        fn = 0
    }

    function tn(a) {
        var b, c, d;
        return w(function(e) {
            switch (e.h) {
                case 1:
                    b = Ml();
                    if (!b) throw c = Uk("immediateSend"), c;
                    if (void 0 === a.id) {
                        e.s(2);
                        break
                    }
                    return v(e, Bm(a.id, b), 3);
                case 3:
                    (d = e.i) ? a = d: Hh(Error("The request cannot be found in the database."));
                case 2:
                    if (vn(a, 2592E6)) {
                        e.s(4);
                        break
                    }
                    Hh(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === a.id) {
                        e.s(5);
                        break
                    }
                    return v(e, Dm(a.id, b), 5);
                case 5:
                    return e.return();
                case 4:
                    a.skipRetry || (a = wn(a));
                    var f = a,
                        g, h;
                    if (null === (h = null === (g = null ===
                            f || void 0 === f ? void 0 : f.options) || void 0 === g ? void 0 : g.postParams) || void 0 === h ? 0 : h.requestTimeMs) f.options.postParams.requestTimeMs = Math.round(M());
                    a = f;
                    if (!a) {
                        e.s(0);
                        break
                    }
                    if (!a.skipRetry || void 0 === a.id) {
                        e.s(8);
                        break
                    }
                    return v(e, Dm(a.id, b), 8);
                case 8:
                    sn(a.url, a.options, !!a.skipRetry), e.h = 0
            }
        })
    }

    function wn(a) {
        var b = Ml();
        if (!b) throw Uk("updateRequestHandlers");
        var c = a.options.onError ? a.options.onError : function() {};
        a.options.onError = function(e, f) {
            var g;
            return w(function(h) {
                switch (h.h) {
                    case 1:
                        K("use_cfr_monitor") && Mm().requestComplete(a.url, !1);
                        g = em(f);
                        if (!(K("nwl_consider_error_code") && g || !K("nwl_consider_error_code") && xn() <= wh("potential_esf_error_limit", 10))) {
                            h.s(2);
                            break
                        }
                        if (K("skip_checking_network_on_cfr_failure") && (!K("skip_checking_network_on_cfr_failure") || Mm().isEndpointCFR(a.url))) {
                            h.s(3);
                            break
                        }
                        return v(h, mn().fa(), 3);
                    case 3:
                        if (mn().G()) {
                            h.s(2);
                            break
                        }
                        c(e, f);
                        if (!K("nwl_consider_error_code") || void 0 ===
                            (null === a || void 0 === a ? void 0 : a.id)) {
                            h.s(6);
                            break
                        }
                        return v(h, Cm(a.id, b, !1), 6);
                    case 6:
                        return h.return();
                    case 2:
                        if (K("nwl_consider_error_code") && !g && xn() > wh("potential_esf_error_limit", 10)) return h.return();
                        A("ytNetworklessLoggingInitializationOptions") && jn.potentialEsfErrorCounter++;
                        gn++;
                        if (void 0 === (null === a || void 0 === a ? void 0 : a.id)) {
                            h.s(8);
                            break
                        }
                        return 1 > a.sendCount ? v(h, Cm(a.id, b), 12) : v(h, Dm(a.id, b), 8);
                    case 12:
                        ai.M(function() {
                            mn().G() && nn()
                        }, 5E3);
                    case 8:
                        c(e, f), h.h = 0
                }
            })
        };
        var d = a.options.onSuccess ? a.options.onSuccess : function() {};
        a.options.onSuccess = function(e, f) {
            return w(function(g) {
                if (1 == g.h) return K("use_cfr_monitor") && Mm().requestComplete(a.url, !0), void 0 === (null === a || void 0 === a ? void 0 : a.id) ? g.s(2) : v(g, Dm(a.id, b), 2);
                K("vss_network_hint") && mn().ca(!0);
                d(e, f);
                g.h = 0
            })
        };
        return a
    }

    function vn(a, b) {
        a = a.timestamp;
        return M() - a >= b ? !1 : !0
    }

    function ln() {
        var a = Ml();
        if (!a) throw Uk("retryQueuedRequests");
        Am("QUEUED", a).then(function(b) {
            b && !vn(b, 12E4) ? ai.M(function() {
                return w(function(c) {
                    if (1 == c.h) return void 0 === b.id ? c.s(2) : v(c, Cm(b.id, a), 2);
                    ln();
                    c.h = 0
                })
            }) : mn().G() && nn()
        })
    }

    function pn() {
        var a, b;
        return w(function(c) {
            a = Ml();
            if (!a) throw b = Uk("clearSWHealthLogsDb"), b;
            return c.return(Km(a).catch(function(d) {
                Gh(d)
            }))
        })
    }

    function mn() {
        if (K("use_new_nwl")) return $m();
        hn || (hn = new Wm({
            Ra: !0,
            xb: !0
        }));
        return hn
    }

    function sn(a, b, c) {
        c && 0 === Object.keys(b).length ? Pi(a) : Di(a, b)
    }

    function rn() {
        return A("ytNetworklessLoggingInitializationOptions") ? jn.isNwlInitialized : en
    }

    function xn() {
        return A("ytNetworklessLoggingInitializationOptions") ? jn.potentialEsfErrorCounter : gn
    };

    function yn(a) {
        var b = this;
        this.config_ = null;
        a ? this.config_ = a : fk() && (this.config_ = zj());
        Vh(function() {
            sk(b)
        }, 5E3)
    }
    yn.prototype.isReady = function() {
        !this.config_ && fk() && (this.config_ = zj());
        return !!this.config_
    };

    function Dj(a, b, c, d) {
        function e(C) {
            C = void 0 === C ? !1 : C;
            var D;
            if (d.retry && "www.youtube-nocookie.com" != h && (C || K("skip_ls_gel_retry") || "application/json" !== g.headers["Content-Type"] || (D = qk(b, c, m, k)), D)) {
                var L = g.onSuccess,
                    O = g.onFetchSuccess;
                g.onSuccess = function(R, V) {
                    rk(D);
                    L(R, V)
                };
                c.onFetchSuccess = function(R, V) {
                    rk(D);
                    O(R, V)
                }
            }
            try {
                C && d.retry && !d.Fb.bypassNetworkless ? (g.method = "POST", d.Fb.writeThenSend ? K("use_new_nwl") ? cn().writeThenSend(u, g) : qn(u, g) : K("use_new_nwl") ? cn().sendAndWrite(u, g) : un(u, g)) : (g.method = "POST", g.postParams || (g.postParams = {}), Di(u, g))
            } catch (R) {
                if ("InvalidAccessError" == R.name) D && (rk(D), D = 0), Hh(Error("An extension is blocking network request."));
                else throw R;
            }
            D && Vh(function() {
                sk(a)
            }, 5E3)
        }!B("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && Hh(new Ek("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var f = new Ek("innertube xhrclient not ready", b, c, d);
            Gh(f);
            throw f;
        }
        var g = {
            headers: d.headers || {},
            method: "POST",
            postParams: c,
            postBody: d.postBody,
            postBodyFormat: d.postBodyFormat || "JSON",
            onTimeout: function() {
                d.onTimeout()
            },
            onFetchTimeout: d.onTimeout,
            onSuccess: function(C, D) {
                if (d.onSuccess) d.onSuccess(D)
            },
            onFetchSuccess: function(C) {
                if (d.onSuccess) d.onSuccess(C)
            },
            onError: function(C, D) {
                if (d.onError) d.onError(D)
            },
            onFetchError: function(C) {
                if (d.onError) d.onError(C)
            },
            timeout: d.timeout,
            withCredentials: !0
        };
        g.headers["Content-Type"] || (g.headers["Content-Type"] = "application/json");
        var h = "";
        (f = a.config_.cc) && (h = f);
        var k = a.config_.ec || !1,
            m = lk(k, h, d);
        Object.assign(g.headers, m);
        (f = g.headers.Authorization) && !h && (g.headers["x-origin"] = window.location.origin);
        var n = "/youtubei/" + a.config_.innertubeApiVersion + "/" + b,
            t = {
                alt: "json"
            },
            y = a.config_.dc && f;
        y = y && f.startsWith("Bearer");
        y || (t.key = a.config_.innertubeApiKey);
        var u = ri("" + h + n, t || {}, !0);
        K("use_new_nwl") && cn().h || !K("use_new_nwl") &&
            rn() ? Ll().then(function(C) {
                e(C)
            }) : e(!1)
    };

    function Bk(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = yn;
        B("ytLoggingEventsDefaultDisabled", !1) && yn == yn && (d = null);
        Kj(a, b, d, c)
    };
    var zn = [{
        kb: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        Ta: {
            Error: [{
                regexp: /(Permission denied) to access property "([^']+)"/,
                groups: ["reason", "key"]
            }],
            TypeError: [{
                regexp: /Cannot read property '([^']+)' of (null|undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
                groups: ["value", "key"]
            }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, {
                regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
                groups: ["key"]
            }, {
                regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
                groups: ["key", "value"]
            }, {
                regexp: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
                groups: ["value", "base", "key"]
            }]
        }
    }, {
        kb: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        Ta: {
            TypeError: [{
                regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                regexp: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                regexp: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, {
                regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }]
        }
    }, {
        kb: function(a) {
            return a.key + " is not defined"
        },
        Ta: {
            ReferenceError: [{
                regexp: /(.*) is not defined/,
                groups: ["key"]
            }, {
                regexp: /Can't find variable: (.*)/,
                groups: ["key"]
            }]
        }
    }];
    var Bn = {
        ka: [],
        ha: [{
            na: An,
            weight: 500
        }]
    };

    function An(a) {
        if ("JavaException" === a.name) return !0;
        a = a.stack;
        return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
    };

    function Cn() {
        this.ha = [];
        this.ka = []
    }
    var Dn;

    function En() {
        if (!Dn) {
            var a = Dn = new Cn;
            a.ka.length = 0;
            a.ha.length = 0;
            Bn.ka && a.ka.push.apply(a.ka, Bn.ka);
            Bn.ha && a.ha.push.apply(a.ha, Bn.ha)
        }
        return Dn
    };
    var Fn = new J;

    function Gn(a) {
        function b() {
            return a.charCodeAt(d++)
        }
        var c = a.length,
            d = 0;
        do {
            var e = Hn(b);
            if (Infinity === e) break;
            var f = e >> 3;
            switch (e & 7) {
                case 0:
                    e = Hn(b);
                    if (2 === f) return e;
                    break;
                case 1:
                    if (2 === f) return;
                    d += 8;
                    break;
                case 2:
                    e = Hn(b);
                    if (2 === f) return a.substr(d, e);
                    d += e;
                    break;
                case 5:
                    if (2 === f) return;
                    d += 4;
                    break;
                default:
                    return
            }
        } while (d < c)
    }

    function Hn(a) {
        var b = a(),
            c = b & 127;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 7;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 14;
        if (128 > b) return c;
        b = a();
        return 128 > b ? c | (b & 127) << 21 : Infinity
    };

    function In(a, b, c, d) {
        if (a)
            if (Array.isArray(a)) {
                var e = d;
                for (d = 0; d < a.length && !(a[d] && (e += Jn(d, a[d], b, c), 500 < e)); d++);
                d = e
            } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = a[e];
                    var g = b;
                    var h = c;
                    g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = Gn(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? Jn(e + ".ve", f, g, h) : 0;
                    d += g;
                    d += Jn(e, a[e], b, c);
                    if (500 < d) break
                }
            } else c[b] = Kn(a), d += c[b].length;
        else c[b] = Kn(a), d += c[b].length;
        return d
    }

    function Jn(a, b, c, d) {
        c += "." + a;
        a = Kn(b);
        d[c] = a;
        return c.length + a.length
    }

    function Kn(a) {
        try {
            return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
        } catch (b) {
            return "unable to serialize " + typeof a + " (" + b.message + ")"
        }
    };
    var Ln = new Set,
        Mn = 0,
        Nn = 0,
        On = 0,
        Pn = [],
        Qn = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

    function Ak(a) {
        Rn(a)
    }

    function Sn(a) {
        Rn(a, "WARNING")
    }

    function Rn(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        f.name = c || B("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
        f.version = d || B("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
        c = f || {};
        b = void 0 === b ? "ERROR" : b;
        b = void 0 === b ? "ERROR" : b;
        if (a && (a.hasOwnProperty("level") && a.level && (b = a.level), K("console_log_js_exceptions") && (d = [], d.push("Name: " + a.name), d.push("Message: " + a.message), a.hasOwnProperty("params") && d.push("Error Params: " + JSON.stringify(a.params)), a.hasOwnProperty("args") && d.push("Error args: " + JSON.stringify(a.args)), d.push("File name: " +
                a.fileName), d.push("Stacktrace: " + a.stack), window.console.log(d.join("\n"), a)), !(5 <= Mn))) {
            d = Pn;
            var g = de(a);
            e = g.message || "Unknown Error";
            f = g.name || "UnknownError";
            var h = g.stack || a.i || "Not available";
            if (h.startsWith(f + ": " + e)) {
                var k = h.split("\n");
                k.shift();
                h = k.join("\n")
            }
            k = g.lineNumber || "Not available";
            g = g.fileName || "Not available";
            var m = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var n = 0; n < a.args.length && !(m = In(a.args[n], "params." + n, c, m), 500 <= m); n++);
            else if (a.hasOwnProperty("params") &&
                a.params) {
                var t = a.params;
                if ("object" === typeof a.params)
                    for (n in t) {
                        if (t[n]) {
                            var y = "params." + n,
                                u = Kn(t[n]);
                            c[y] = u;
                            m += y.length + u.length;
                            if (500 < m) break
                        }
                    } else c.params = Kn(t)
            }
            if (d.length)
                for (n = 0; n < d.length && !(m = In(d[n], "params.context." + n, c, m), 500 <= m); n++);
            navigator.vendor && !c.hasOwnProperty("vendor") && (c["device.vendor"] = navigator.vendor);
            n = {
                message: e,
                name: f,
                lineNumber: k,
                fileName: g,
                stack: h,
                params: c,
                sampleWeight: 1
            };
            c = Number(a.columnNumber);
            isNaN(c) || (n.lineNumber = n.lineNumber + ":" + c);
            if ("IGNORED" === a.level) a =
                0;
            else a: {
                a = En();c = q(a.ka);
                for (d = c.next(); !d.done; d = c.next())
                    if (d = d.value, n.message && n.message.match(d.xo)) {
                        a = d.weight;
                        break a
                    }
                a = q(a.ha);
                for (c = a.next(); !c.done; c = a.next())
                    if (c = c.value, c.na(n)) {
                        a = c.weight;
                        break a
                    }
                a = 1
            }
            n.sampleWeight = a;
            a = q(zn);
            for (c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.Ta[n.name])
                    for (e = q(c.Ta[n.name]), d = e.next(); !d.done; d = e.next())
                        if (f = d.value, d = n.message.match(f.regexp)) {
                            n.params["params.error.original"] = d[0];
                            e = f.groups;
                            f = {};
                            for (k = 0; k < e.length; k++) f[e[k]] = d[k + 1], n.params["params.error." +
                                e[k]] = d[k + 1];
                            n.message = c.kb(f);
                            break
                        }
            n.params || (n.params = {});
            a = En();
            n.params["params.errorServiceSignature"] = "msg=" + a.ka.length + "&cb=" + a.ha.length;
            n.params["params.serviceWorker"] = "false";
            x.document && x.document.querySelectorAll && (n.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
            Ab("sample").constructor !== yb && (n.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(n);
            if (0 !== n.sampleWeight && !Ln.has(n.message)) {
                "ERROR" ===
                b ? (Fn.ma("handleError", n), K("record_app_crashed_web") && 0 === On && 1 === n.sampleWeight && (On++, a = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, K("report_client_error_with_app_crash_ks") || (a.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: n.message
                            }
                        }
                    }
                }), Bk("appCrashed", a)), Nn++) : "WARNING" === b && Fn.ma("handleWarning", n);
                if (K("kevlar_gel_error_routing")) {
                    a = b;
                    b: {
                        c = q(Qn);
                        for (d = c.next(); !d.done; d = c.next())
                            if (Mi(d.value.toLowerCase())) {
                                c = !0;
                                break b
                            }
                        c = !1
                    }
                    if (c) c = void 0;
                    else {
                        d = {
                            stackTrace: n.stack
                        };
                        n.fileName &&
                            (d.filename = n.fileName);
                        c = n.lineNumber && n.lineNumber.split ? n.lineNumber.split(":") : [];
                        0 !== c.length && (1 !== c.length || isNaN(Number(c[0])) ? 2 !== c.length || isNaN(Number(c[0])) || isNaN(Number(c[1])) || (d.lineNumber = Number(c[0]), d.columnNumber = Number(c[1])) : d.lineNumber = Number(c[0]));
                        c = {
                            level: "ERROR_LEVEL_UNKNOWN",
                            message: n.message,
                            errorClassName: n.name,
                            sampleWeight: n.sampleWeight
                        };
                        "ERROR" === a ? c.level = "ERROR_LEVEL_ERROR" : "WARNING" === a && (c.level = "ERROR_LEVEL_WARNNING");
                        d = {
                            isObfuscated: !0,
                            browserStackInfo: d
                        };
                        e = {
                            pageUrl: window.location.href,
                            kvPairs: []
                        };
                        B("FEXP_EXPERIMENTS") && (e.experimentIds = B("FEXP_EXPERIMENTS"));
                        f = B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0);
                        k = nh.EXPERIMENT_FLAGS;
                        if ((!k || !k.web_disable_gel_stp_ecatcher_killswitch) && f)
                            for (g = q(Object.keys(f)), k = g.next(); !k.done; k = g.next()) k = k.value, e.kvPairs.push({
                                key: k,
                                value: String(f[k])
                            });
                        if (f = n.params)
                            for (g = q(Object.keys(f)), k = g.next(); !k.done; k = g.next()) k = k.value, e.kvPairs.push({
                                key: "client." + k,
                                value: String(f[k])
                            });
                        f = uh("SERVER_NAME");
                        k = uh("SERVER_VERSION");
                        f && k && (e.kvPairs.push({
                            key: "server.name",
                            value: f
                        }), e.kvPairs.push({
                            key: "server.version",
                            value: k
                        }));
                        c = {
                            errorMetadata: e,
                            stackTrace: d,
                            logMessage: c
                        }
                    }
                    c && (Bk("clientError", c), ("ERROR" === a || K("errors_flush_gel_always_killswitch")) && sj())
                }
                if (!K("suppress_error_204_logging")) {
                    a = n.params || {};
                    b = {
                        urlParams: {
                            a: "logerror",
                            t: "jserror",
                            type: n.name,
                            msg: n.message.substr(0, 250),
                            line: n.lineNumber,
                            level: b,
                            "client.name": a.name
                        },
                        postParams: {
                            url: B("PAGE_NAME", window.location.href),
                            file: n.fileName
                        },
                        method: "POST"
                    };
                    a.version &&
                        (b["client.version"] = a.version);
                    if (b.postParams) {
                        n.stack && (b.postParams.stack = n.stack);
                        c = q(Object.keys(a));
                        for (d = c.next(); !d.done; d = c.next()) d = d.value, b.postParams["client." + d] = a[d];
                        if (a = B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0))
                            for (c = q(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b.postParams[d] = a[d];
                        a = B("SERVER_NAME", void 0);
                        c = B("SERVER_VERSION", void 0);
                        a && c && (b.postParams["server.name"] = a, b.postParams["server.version"] = c)
                    }
                    Di(B("ECATCHER_REPORT_HOST", "") + "/error_204", b)
                }
                try {
                    Ln.add(n.message)
                } catch (C) {}
                Mn++
            }
        }
    }

    function Tn(a) {
        var b = Ea.apply(1, arguments),
            c = a;
        c.args || (c.args = []);
        c.args.push.apply(c.args, ia(b))
    };

    function Un() {
        this.register = new Map
    }

    function Vn(a) {
        a = q(a.register.values());
        for (var b = a.next(); !b.done; b = a.next()) b.value.Ao("ABORTED")
    }
    Un.prototype.clear = function() {
        Vn(this);
        this.register.clear()
    };
    var Wn = new Un;
    var Xn = Date.now().toString();

    function Yn() {
        a: {
            if (window.crypto && window.crypto.getRandomValues) try {
                var a = Array(16),
                    b = new Uint8Array(16);
                window.crypto.getRandomValues(b);
                for (var c = 0; c < a.length; c++) a[c] = b[c];
                var d = a;
                break a
            } catch (e) {}
            d = Array(16);
            for (a = 0; 16 > a; a++) {
                b = Date.now();
                for (c = 0; c < b % 23; c++) d[a] = Math.random();
                d[a] = Math.floor(256 * Math.random())
            }
            if (Xn)
                for (a = 1, b = 0; b < Xn.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ Xn.charCodeAt(b), a++
        }
        a = [];
        for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] & 63));
        return a.join("")
    };
    var Zn, $n = x.ytLoggingDocDocumentNonce_;
    $n || ($n = Yn(), Va("ytLoggingDocDocumentNonce_", $n));
    Zn = $n;
    var ao = {
        og: 0,
        rd: 1,
        zd: 2,
        Pj: 3,
        qg: 4,
        Kn: 5,
        Fk: 6,
        em: 7,
        Gl: 8,
        0: "DEFAULT",
        1: "CHAT",
        2: "CONVERSATIONS",
        3: "MINIPLAYER",
        4: "DIALOG",
        5: "VOZ",
        6: "MUSIC_WATCH_TABS",
        7: "SHARE",
        8: "PUSH_NOTIFICATIONS"
    };

    function bo(a) {
        this.h = a
    }

    function co(a) {
        return new bo({
            trackingParams: a
        })
    }

    function eo(a, b) {
        return new bo({
            veType: a,
            youtubeData: b,
            jspbYoutubeData: void 0
        })
    }
    bo.prototype.getAsJson = function() {
        var a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        return a
    };
    bo.prototype.getAsJspb = function() {
        var a = new Fg;
        void 0 !== this.h.trackingParams ? G(a, 1, this.h.trackingParams) : (void 0 !== this.h.veType && G(a, 2, this.h.veType), void 0 !== this.h.veCounter && G(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && G(a, 3, this.h.elementIndex));
        if (void 0 !== this.h.dataElement) {
            var b = this.h.dataElement.getAsJspb();
            H(a, 7, b)
        }
        void 0 !== this.h.youtubeData && H(a, 8, this.h.jspbYoutubeData);
        return a
    };
    bo.prototype.toString = function() {
        return JSON.stringify(this.getAsJson())
    };
    bo.prototype.isClientVe = function() {
        return !this.h.trackingParams && !!this.h.veType
    };

    function fo(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "client-screen-nonce" : "client-screen-nonce." + a
    }

    function go(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
    }

    function ho(a) {
        return B(go(void 0 === a ? 0 : a), void 0)
    }
    z("yt_logging_screen.getRootVeType", ho, void 0);

    function io(a) {
        return (a = ho(void 0 === a ? 0 : a)) ? eo(a) : null
    }

    function jo() {
        var a = B("csn-to-ctt-auth-info");
        a || (a = {}, th("csn-to-ctt-auth-info", a));
        return a
    }

    function ko(a) {
        a = void 0 === a ? 0 : a;
        var b = B(fo(a));
        if (!b && !B("USE_CSN_FALLBACK", !0)) return null;
        b || !K("use_undefined_csn_any_layer") && 0 != a || (b = "UNDEFINED_CSN");
        return b ? b : null
    }
    z("yt_logging_screen.getCurrentCsn", ko, void 0);

    function lo(a, b, c) {
        var d = jo();
        (c = ko(c)) && delete d[c];
        b && (d[a] = b)
    }

    function mo(a) {
        return jo()[a]
    }
    z("yt_logging_screen.getCttAuthInfo", mo, void 0);

    function no(a, b, c, d) {
        c = void 0 === c ? 0 : c;
        if (a !== B(fo(c)) || b !== B(go(c))) lo(a, d, c), th(fo(c), a), th(go(c), b), b = function() {
            setTimeout(function() {
                if (a) {
                    var e = {
                        clientDocumentNonce: Zn,
                        clientScreenNonce: a
                    };
                    K("use_default_heartbeat_client") ? Bk("foregroundHeartbeatScreenAssociated", e) : Kj("foregroundHeartbeatScreenAssociated", e, yn)
                }
            }, 0)
        }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b()
    }
    z("yt_logging_screen.setCurrentScreen", no, void 0);
    var oo = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    z("yt.msgs_", oo, void 0);

    function po(a) {
        ih(oo, arguments)
    };
    var qo = {
        qd: 3611,
        Fc: 27686,
        Gc: 85013,
        Hc: 23462,
        Jc: 42016,
        Kc: 62407,
        Lc: 26926,
        Ic: 43781,
        Mc: 51236,
        Nc: 79148,
        Oc: 50160,
        Pc: 77504,
        cd: 87907,
        dd: 18630,
        ed: 54445,
        fd: 80935,
        gd: 105675,
        hd: 37521,
        jd: 47786,
        kd: 98349,
        ld: 123695,
        md: 6827,
        nd: 29434,
        od: 7282,
        pd: 124448,
        td: 32276,
        sd: 76278,
        ud: 93911,
        vd: 106531,
        wd: 27259,
        xd: 27262,
        yd: 27263,
        Ad: 21759,
        Bd: 27107,
        Cd: 62936,
        Dd: 49568,
        Ed: 38408,
        Fd: 80637,
        Gd: 68727,
        Hd: 68728,
        Id: 80353,
        Jd: 80356,
        Kd: 74610,
        Ld: 45707,
        Md: 83962,
        Nd: 83970,
        Od: 46713,
        Pd: 89711,
        Qd: 74612,
        Rd: 93265,
        Sd: 74611,
        Td: 131380,
        Vd: 128979,
        Wd: 139311,
        Xd: 128978,
        Ud: 131391,
        Yd: 105350,
        ae: 139312,
        be: 134800,
        Zd: 131392,
        de: 113533,
        ee: 93252,
        ge: 99357,
        ie: 94521,
        je: 114252,
        ke: 113532,
        le: 94522,
        he: 94583,
        me: 88E3,
        ne: 139580,
        oe: 93253,
        pe: 93254,
        qe: 94387,
        re: 94388,
        se: 93255,
        te: 97424,
        ce: 72502,
        ue: 110111,
        we: 76019,
        ye: 117092,
        ze: 117093,
        xe: 89431,
        Ae: 110466,
        Be: 77240,
        Ce: 60508,
        De: 137401,
        Ee: 137402,
        Fe: 137046,
        Ge: 73393,
        He: 113534,
        Ie: 92098,
        Je: 131381,
        Ke: 84517,
        Le: 83759,
        Me: 80357,
        Ne: 86113,
        Oe: 72598,
        Pe: 72733,
        Qe: 107349,
        Re: 124275,
        Se: 118203,
        Te: 133275,
        Ue: 133274,
        Ve: 133272,
        We: 133273,
        Xe: 133276,
        Ye: 143247,
        Ze: 143248,
        af: 143249,
        bf: 143250,
        cf: 143251,
        ef: 117431,
        df: 133797,
        ff: 128572,
        gf: 133405,
        hf: 117429,
        jf: 117430,
        kf: 117432,
        lf: 120080,
        mf: 117259,
        nf: 121692,
        pf: 132972,
        qf: 133051,
        rf: 133658,
        sf: 132971,
        tf: 97615,
        vf: 143359,
        uf: 143356,
        xf: 143361,
        wf: 143358,
        zf: 143360,
        yf: 143357,
        Af: 142303,
        Bf: 143353,
        Cf: 143354,
        Df: 143355,
        Ef: 31402,
        Gf: 133624,
        Hf: 133623,
        If: 133622,
        Ff: 133621,
        Jf: 84774,
        Kf: 95117,
        Lf: 98930,
        Mf: 98931,
        Nf: 98932,
        Of: 43347,
        Pf: 129889,
        Qf: 45474,
        Rf: 100352,
        Sf: 84758,
        Tf: 98443,
        Uf: 117985,
        Vf: 74613,
        Wf: 74614,
        Xf: 64502,
        Yf: 136032,
        Zf: 74615,
        ag: 74616,
        cg: 122224,
        dg: 74617,
        eg: 77820,
        fg: 74618,
        gg: 93278,
        hg: 93274,
        ig: 93275,
        jg: 93276,
        kg: 22110,
        lg: 29433,
        mg: 133798,
        ng: 132295,
        pg: 120541,
        rg: 82047,
        sg: 113550,
        tg: 75836,
        ug: 75837,
        vg: 42352,
        wg: 84512,
        xg: 76065,
        yg: 75989,
        zg: 16623,
        Ag: 32594,
        Bg: 27240,
        Cg: 32633,
        Dg: 74858,
        Fg: 3945,
        Eg: 16989,
        Gg: 45520,
        Hg: 25488,
        Ig: 25492,
        Jg: 25494,
        Kg: 55760,
        Lg: 14057,
        Mg: 18451,
        Ng: 57204,
        Og: 57203,
        Pg: 17897,
        Qg: 57205,
        Rg: 18198,
        Sg: 17898,
        Tg: 17909,
        Ug: 43980,
        Vg: 46220,
        Wg: 11721,
        Xg: 49954,
        Yg: 96369,
        Zg: 3854,
        ah: 56251,
        bh: 25624,
        th: 16906,
        uh: 99999,
        vh: 68172,
        wh: 27068,
        xh: 47973,
        yh: 72773,
        zh: 26970,
        Ah: 26971,
        Bh: 96805,
        Ch: 17752,
        Dh: 73233,
        Eh: 109512,
        Fh: 22256,
        Gh: 14115,
        Hh: 22696,
        Ih: 89278,
        Jh: 89277,
        Kh: 109513,
        Lh: 43278,
        Mh: 43459,
        Nh: 43464,
        Oh: 89279,
        Ph: 43717,
        Qh: 55764,
        Rh: 22255,
        Sh: 89281,
        Th: 40963,
        Uh: 43277,
        Vh: 43442,
        Wh: 91824,
        Xh: 120137,
        Yh: 96367,
        Zh: 36850,
        ai: 72694,
        bi: 37414,
        ci: 36851,
        fi: 124863,
        di: 121343,
        gi: 73491,
        hi: 54473,
        ii: 43375,
        ji: 46674,
        ki: 143815,
        li: 139095,
        mi: 32473,
        ni: 72901,
        oi: 72906,
        ri: 50947,
        si: 50612,
        ti: 50613,
        vi: 50942,
        wi: 84938,
        xi: 84943,
        yi: 84939,
        zi: 84941,
        Ai: 84944,
        Bi: 84940,
        Ci: 84942,
        Di: 35585,
        Ei: 51926,
        Fi: 79983,
        Gi: 63238,
        Hi: 18921,
        Ii: 63241,
        Ji: 57893,
        Ki: 41182,
        Li: 135732,
        Mi: 33424,
        Ni: 22207,
        Oi: 42993,
        Pi: 36229,
        Qi: 22206,
        Ri: 22205,
        Si: 18993,
        Ti: 19001,
        Ui: 18990,
        Vi: 18991,
        Wi: 18997,
        Xi: 18725,
        Yi: 19003,
        Zi: 36874,
        aj: 44763,
        bj: 33427,
        cj: 67793,
        dj: 22182,
        ej: 37091,
        fj: 34650,
        gj: 50617,
        hj: 47261,
        ij: 22287,
        jj: 25144,
        kj: 97917,
        lj: 62397,
        mj: 125598,
        nj: 137935,
        oj: 36961,
        pj: 108035,
        qj: 27426,
        rj: 27857,
        sj: 27846,
        tj: 27854,
        uj: 69692,
        vj: 61411,
        wj: 39299,
        xj: 38696,
        yj: 62520,
        zj: 36382,
        Aj: 108701,
        Bj: 50663,
        Cj: 36387,
        Dj: 14908,
        Ej: 37533,
        Fj: 105443,
        Gj: 61635,
        Hj: 62274,
        Ij: 133818,
        Jj: 65702,
        Kj: 65703,
        Lj: 65701,
        Mj: 76256,
        Nj: 37671,
        Oj: 49953,
        Qj: 36216,
        Rj: 28237,
        Sj: 39553,
        Tj: 29222,
        Uj: 26107,
        Vj: 38050,
        Wj: 26108,
        Yj: 120745,
        Xj: 26109,
        Zj: 26110,
        ak: 66881,
        bk: 28236,
        ck: 14586,
        dk: 57929,
        ek: 74723,
        fk: 44098,
        gk: 44099,
        jk: 23528,
        kk: 61699,
        hk: 134104,
        ik: 134103,
        lk: 59149,
        mk: 101951,
        nk: 97346,
        pk: 118051,
        qk: 95102,
        rk: 64882,
        sk: 119505,
        tk: 63595,
        uk: 63349,
        vk: 95101,
        wk: 75240,
        xk: 27039,
        yk: 68823,
        zk: 21537,
        Ak: 83464,
        Bk: 75707,
        Ck: 83113,
        Dk: 101952,
        Ek: 101953,
        Gk: 79610,
        Hk: 125755,
        Ik: 24402,
        Jk: 24400,
        Kk: 32925,
        Lk: 57173,
        Mk: 122502,
        Nk: 138480,
        Ok: 64423,
        Pk: 64424,
        Qk: 33986,
        Rk: 100828,
        Sk: 129089,
        Tk: 21409,
        Xk: 135155,
        Yk: 135156,
        Zk: 135157,
        al: 135158,
        bl: 135159,
        dl: 135160,
        fl: 135161,
        il: 135162,
        jl: 135163,
        kl: 135164,
        ll: 135165,
        ml: 135166,
        Uk: 11070,
        Vk: 11074,
        Wk: 17880,
        nl: 14001,
        pl: 30709,
        ql: 30707,
        rl: 30711,
        sl: 30710,
        ul: 30708,
        ol: 26984,
        vl: 63648,
        wl: 63649,
        xl: 51879,
        yl: 111059,
        zl: 5754,
        Al: 20445,
        Cl: 130975,
        Bl: 130976,
        Dl: 110386,
        El: 113746,
        Fl: 66557,
        Hl: 17310,
        Il: 28631,
        Jl: 21589,
        Kl: 68012,
        Ll: 60480,
        Ml: 138664,
        Nl: 141121,
        Ol: 31571,
        Pl: 141978,
        Ql: 76980,
        Rl: 41577,
        Sl: 45469,
        Tl: 38669,
        Ul: 13768,
        Vl: 13777,
        Wl: 141842,
        Xl: 62985,
        Yl: 4724,
        Zl: 59369,
        am: 43927,
        bm: 43928,
        cm: 12924,
        dm: 100355,
        gm: 56219,
        hm: 27669,
        im: 10337,
        fm: 47896,
        jm: 122629,
        lm: 139723,
        km: 139722,
        mm: 121258,
        nm: 107598,
        om: 127991,
        pm: 96639,
        qm: 107536,
        rm: 130169,
        sm: 96661,
        tm: 96658,
        um: 116646,
        vm: 121122,
        wm: 96660,
        xm: 127738,
        ym: 127083,
        zm: 104443,
        Am: 96659,
        Bm: 106442,
        Cm: 134840,
        Dm: 63667,
        Em: 63668,
        Fm: 63669,
        Gm: 130686,
        Hm: 78314,
        Im: 55761,
        Jm: 127098,
        Km: 134841,
        Lm: 96368,
        Mm: 67374,
        Nm: 48992,
        Om: 49956,
        Pm: 31961,
        Qm: 26388,
        Rm: 23811,
        Sm: 5E4,
        Tm: 126250,
        Um: 96370,
        Vm: 47355,
        Wm: 47356,
        Xm: 37935,
        Ym: 45521,
        Zm: 21760,
        an: 83769,
        bn: 49977,
        cn: 49974,
        dn: 93497,
        en: 93498,
        fn: 34325,
        gn: 140759,
        hn: 115803,
        jn: 123707,
        kn: 100081,
        ln: 35309,
        mn: 68314,
        nn: 25602,
        pn: 100339,
        qn: 143516,
        rn: 59018,
        sn: 18248,
        tn: 50625,
        un: 9729,
        vn: 37168,
        wn: 37169,
        xn: 21667,
        yn: 16749,
        zn: 18635,
        An: 39305,
        Bn: 18046,
        Cn: 53969,
        Dn: 8213,
        En: 93926,
        Fn: 102852,
        Gn: 110099,
        Hn: 22678,
        In: 69076,
        Jn: 137575,
        Ln: 139224,
        Mn: 100856,
        Nn: 17736,
        On: 3832,
        Pn: 55759,
        Qn: 64031,
        Wn: 93044,
        Xn: 93045,
        Yn: 34388,
        Zn: 17657,
        ao: 17655,
        bo: 39579,
        co: 39578,
        eo: 77448,
        fo: 8196,
        ho: 11357,
        jo: 69877,
        ko: 8197,
        lo: 82039
    };

    function ro() {
        var a = sb(so),
            b;
        return Qf(new Jf(function(c, d) {
            a.onSuccess = function(e) {
                xi(e) ? c(new to(e)) : d(new uo("Request failed, status=" + (e && "status" in e ? e.status : -1), "net.badstatus", e))
            };
            a.onError = function(e) {
                d(new uo("Unknown request error", "net.unknown", e))
            };
            a.onTimeout = function(e) {
                d(new uo("Request timed out", "net.timeout", e))
            };
            b = Di("//googleads.g.doubleclick.net/pagead/id", a)
        }), function(c) {
            c instanceof Rf && b.abort();
            return Of(c)
        })
    }

    function uo(a, b, c) {
        Ya.call(this, a + ", errorCode=" + b);
        this.errorCode = b;
        this.xhr = c;
        this.name = "PromiseAjaxError"
    }
    r(uo, Ya);

    function to(a) {
        this.xhr = a
    };

    function vo() {
        this.i = 0;
        this.h = null
    }
    vo.prototype.then = function(a, b, c) {
        return 1 === this.i && a ? (a = a.call(c, this.h), If(a) ? a : wo(a)) : 2 === this.i && b ? (a = b.call(c, this.h), If(a) ? a : xo(a)) : this
    };
    vo.prototype.getValue = function() {
        return this.h
    };
    vo.prototype.$goog_Thenable = !0;

    function xo(a) {
        var b = new vo;
        a = void 0 === a ? null : a;
        b.i = 2;
        b.h = void 0 === a ? null : a;
        return b
    }

    function wo(a) {
        var b = new vo;
        a = void 0 === a ? null : a;
        b.i = 1;
        b.h = void 0 === a ? null : a;
        return b
    };

    function yo() {
        if (Xd()) return !0;
        var a = B("INNERTUBE_CLIENT_NAME");
        return !a || "WEB" !== a && "MWEB" !== a || Li && Mi("applewebkit") && !Mi("version") && (!Mi("safari") || Mi("gsa/")) || vc && Mi("version/") ? !0 : (a = Qj("CONSENT")) ? a.startsWith("YES+") : !0
    };

    function zo(a) {
        Ya.call(this, a.message || a.description || a.name);
        this.isMissing = a instanceof Ao;
        this.isTimeout = a instanceof uo && "net.timeout" == a.errorCode;
        this.isCanceled = a instanceof Rf
    }
    r(zo, Ya);
    zo.prototype.name = "BiscottiError";

    function Ao() {
        Ya.call(this, "Biscotti ID is missing from server")
    }
    r(Ao, Ya);
    Ao.prototype.name = "BiscottiMissingError";
    var so = {
            format: "RAW",
            method: "GET",
            timeout: 5E3,
            withCredentials: !0
        },
        Bo = null;

    function hi() {
        if (K("disable_biscotti_fetch_entirely_for_all_web_clients")) return Of(Error("Biscotti id fetching has been disabled entirely."));
        if (!yo()) return Of(Error("User has not consented - not fetching biscotti id."));
        if ("1" == qb()) return Of(Error("Biscotti ID is not available in private embed mode"));
        Bo || (Bo = Qf(ro().then(Co), function(a) {
            return Do(2, a)
        }));
        return Bo
    }

    function Co(a) {
        a = a.xhr.responseText;
        if (0 != a.lastIndexOf(")]}'", 0)) throw new Ao;
        a = JSON.parse(a.substr(4));
        if (1 < (a.type || 1)) throw new Ao;
        a = a.id;
        ii(a);
        Bo = wo(a);
        Eo(18E5, 2);
        return a
    }

    function Do(a, b) {
        b = new zo(b);
        ii("");
        Bo = xo(b);
        0 < a && Eo(12E4, a - 1);
        throw b;
    }

    function Eo(a, b) {
        Rh(function() {
            Qf(ro().then(Co, function(c) {
                return Do(b, c)
            }), Ja)
        }, a)
    }

    function Fo() {
        try {
            var a = A("yt.ads.biscotti.getId_");
            return a ? a() : hi()
        } catch (b) {
            return Of(b)
        }
    };

    function Go(a) {
        if ("1" != qb()) {
            a && gi();
            try {
                Fo().then(function() {}, function() {}), Rh(Go, 18E5)
            } catch (b) {
                Gh(b)
            }
        }
    };

    function Ho() {
        this.Cc = !0
    }

    function Io(a) {
        var b = {},
            c = Zd([]);
        c && (b.Authorization = c, c = a = null === a || void 0 === a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(B("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), b["X-Goog-AuthUser"] = c, "INNERTUBE_HOST_OVERRIDE" in nh || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in nh && (b["X-Goog-PageId"] = B("DELEGATED_SESSION_ID")));
        return b
    };
    var Jo = {
        identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
    };
    var Ko = new Map([
            ["dark", "USER_INTERFACE_THEME_DARK"],
            ["light", "USER_INTERFACE_THEME_LIGHT"]
        ]),
        Lo = ["/fashion", "/feed/fashion_destination", "/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"];

    function Mo() {
        var a = void 0 === a ? window.location.href : a;
        if (K("kevlar_disable_theme_param")) return null;
        var b = hc(a.match(gc)[5] || null);
        if (No(b)) return "USER_INTERFACE_THEME_DARK";
        try {
            var c = qi(a).theme;
            return Ko.get(c) || null
        } catch (d) {}
        return null
    }

    function No(a) {
        var b = Lo.map(function(c) {
            return c.toLowerCase()
        });
        return !K("disable_dark_fashion_destination_launch") && b.some(function(c) {
            return a.toLowerCase().startsWith(c)
        }) ? !0 : !1
    };

    function Oo() {
        this.h = {};
        if (this.i = Rj()) {
            var a = Qj("CONSISTENCY");
            a && Po(this, {
                encryptedTokenJarContents: a
            })
        }
    }
    Oo.prototype.handleResponse = function(a, b) {
        var c, d, e;
        b = (null === (d = null === (c = b.aa.context) || void 0 === c ? void 0 : c.request) || void 0 === d ? void 0 : d.consistencyTokenJars) || [];
        (a = null === (e = a.responseContext) || void 0 === e ? void 0 : e.consistencyTokenJar) && this.replace(b, a)
    };
    Oo.prototype.replace = function(a, b) {
        a = q(a);
        for (var c = a.next(); !c.done; c = a.next()) delete this.h[c.value.encryptedTokenJarContents];
        Po(this, b)
    };

    function Po(a, b) {
        if (b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds)) {
            var c = Number(b.expirationSeconds);
            setTimeout(function() {
                delete a.h[b.encryptedTokenJarContents]
            }, 1E3 * c);
            a.i && Pj("CONSISTENCY", b.encryptedTokenJarContents, c, void 0, !0)
        }
    };
    var Qo = window.location.hostname.split(".").slice(-2).join(".");

    function Ro() {
        var a = B("LOCATION_PLAYABILITY_TOKEN");
        "TVHTML5" === B("INNERTUBE_CLIENT_NAME") && (this.h = So(this)) && (a = this.h.get("yt-location-playability-token"));
        a && (this.locationPlayabilityToken = a, this.i = void 0)
    }
    var To;
    Ro.getInstance = function() {
        To = A("yt.clientLocationService.instance");
        To || (To = new Ro, z("yt.clientLocationService.instance", To, void 0));
        return To
    };
    Ro.prototype.setLocationOnInnerTubeContext = function(a) {
        a.client || (a.client = {});
        this.i ? (a.client.locationInfo || (a.client.locationInfo = {}), a.client.locationInfo.latitudeE7 = 1E7 * this.i.coords.latitude, a.client.locationInfo.longitudeE7 = 1E7 * this.i.coords.longitude, a.client.locationInfo.horizontalAccuracyMeters = this.i.coords.accuracy, a.client.locationInfo.forceLocationPlayabilityTokenRefresh = !0) : this.locationPlayabilityToken && (a.client.locationPlayabilityToken = this.locationPlayabilityToken)
    };
    Ro.prototype.handleResponse = function(a) {
        var b;
        a = null === (b = a.responseContext) || void 0 === b ? void 0 : b.locationPlayabilityToken;
        void 0 !== a && (this.locationPlayabilityToken = a, this.i = void 0, "TVHTML5" === B("INNERTUBE_CLIENT_NAME") ? (this.h = So(this)) && this.h.set("yt-location-playability-token", a, 15552E3) : Pj("YT_CL", JSON.stringify({
            vo: a
        }), 15552E3, Qo, !0))
    };

    function So(a) {
        return void 0 === a.h ? new nk("yt-client-location") : a.h
    }
    Ro.prototype.getCurrentPositionFromGeolocation = function() {
        var a = this;
        if (!(navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) || !K("web_enable_browser_geolocation_api") && !K("enable_handoff_location_2fa_on_mweb")) return Promise.reject(Error("Geolocation unsupported"));
        var b = !1,
            c = 1E4;
        K("enable_handoff_location_2fa_on_mweb") && (b = !0, c = 15E3);
        return new Promise(function(d, e) {
            navigator.geolocation.getCurrentPosition(function(f) {
                a.i = f;
                d(f)
            }, function(f) {
                e(f)
            }, {
                enableHighAccuracy: b,
                maximumAge: 0,
                timeout: c
            })
        })
    };
    Ro.prototype.createUnpluggedLocationInfo = function(a) {
        var b = {};
        a = a.coords;
        if (null === a || void 0 === a ? 0 : a.latitude) b.latitudeE7 = Math.floor(1E7 * a.latitude);
        if (null === a || void 0 === a ? 0 : a.longitude) b.longitudeE7 = Math.floor(1E7 * a.longitude);
        if (null === a || void 0 === a ? 0 : a.accuracy) b.locationRadiusMeters = Math.round(a.accuracy);
        return b
    };

    function Uo(a, b) {
        var c, d;
        if ((null === (c = a.signalServiceEndpoint) || void 0 === c ? 0 : c.signal) && b.Da) {
            var e = b.Da[a.signalServiceEndpoint.signal];
            if (e) return e()
        }
        if ((null === (d = a.continuationCommand) || void 0 === d ? 0 : d.request) && b.Vb && (e = b.Vb[a.continuationCommand.request])) return e();
        for (var f in a)
            if (b.tb[f] && (a = b.tb[f])) return a()
    };

    function Vo(a) {
        return function() {
            return new a
        }
    };
    var Wo = {},
        Xo = (Wo.WEB_UNPLUGGED = "^unplugged/", Wo.WEB_UNPLUGGED_ONBOARDING = "^unplugged/", Wo.WEB_UNPLUGGED_OPS = "^unplugged/", Wo.WEB_UNPLUGGED_PUBLIC = "^unplugged/", Wo.WEB_CREATOR = "^creator/", Wo.WEB_KIDS = "^kids/", Wo.WEB_EXPERIMENTS = "^experiments/", Wo.WEB_MUSIC = "^music/", Wo.WEB_REMIX = "^music/", Wo.WEB_MUSIC_EMBEDDED_PLAYER = "^music/", Wo.WEB_MUSIC_EMBEDDED_PLAYER = "^main_app/|^sfv/", Wo);

    function Yo(a) {
        var b = void 0 === b ? "UNKNOWN_INTERFACE" : b;
        if (1 === a.length) return a[0];
        var c = Xo[b];
        if (c) {
            var d = new RegExp(c),
                e = q(a);
            for (c = e.next(); !c.done; c = e.next())
                if (c = c.value, d.exec(c)) return c
        }
        var f = [];
        Object.entries(Xo).forEach(function(g) {
            var h = q(g);
            g = h.next().value;
            h = h.next().value;
            b !== g && f.push(h)
        });
        d = new RegExp(f.join("|"));
        a.sort(function(g, h) {
            return g.length - h.length
        });
        e = q(a);
        for (c = e.next(); !c.done; c = e.next())
            if (c = c.value, !d.exec(c)) return c;
        return a[0]
    };

    function Zo(a, b) {
        return {
            method: void 0 === b ? "POST" : b,
            mode: si(a) ? "same-origin" : "cors",
            credentials: si(a) ? "same-origin" : "include"
        }
    };

    function $o() {}
    $o.prototype.o = function(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? Jo : c;
        var d;
        var e = a.clickTrackingParams,
            f = this.l,
            g = !1;
        g = void 0 === g ? !1 : g;
        f = void 0 === f ? !1 : f;
        var h = B("INNERTUBE_CONTEXT");
        if (h) {
            h = tb(h);
            K("web_no_tracking_params_in_shell_killswitch") || delete h.clickTracking;
            var k, m;
            h.client || (h.client = {});
            var n = h.client;
            "MWEB" === n.clientName && (n.clientFormFactor = B("IS_TABLET") ? "LARGE_FORM_FACTOR" : "SMALL_FORM_FACTOR");
            n.screenWidthPoints = window.innerWidth;
            n.screenHeightPoints = window.innerHeight;
            n.screenPixelDensity =
                Math.round(window.devicePixelRatio || 1);
            n.screenDensityFloat = window.devicePixelRatio || 1;
            n.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
            var t = void 0 === t ? !1 : t;
            Tj.getInstance();
            var y = "USER_INTERFACE_THEME_LIGHT";
            Wj(165) ? y = "USER_INTERFACE_THEME_DARK" : Wj(174) ? y = "USER_INTERFACE_THEME_LIGHT" : !K("kevlar_legacy_browsers") && window.matchMedia && window.matchMedia("(prefers-color-scheme)").matches && window.matchMedia("(prefers-color-scheme: dark)").matches && (y = "USER_INTERFACE_THEME_DARK");
            t = t ? y : Mo() ||
                y;
            n.userInterfaceTheme = t;
            if (!g) {
                if (t = dk()) n.connectionType = t;
                K("web_log_effective_connection_type") && (t = ek()) && (h.client.effectiveConnectionType = t)
            }
            K("web_log_memory_total_kbytes") && (null === (k = x.navigator) || void 0 === k ? 0 : k.deviceMemory) && (k = null === (m = x.navigator) || void 0 === m ? void 0 : m.deviceMemory, h.client.memoryTotalKbytes = "" + 1E6 * k);
            m = qi(x.location.href);
            !K("web_populate_internal_geo_killswitch") && m.internalcountrycode && (n.internalGeo = m.internalcountrycode);
            "MWEB" === n.clientName || "WEB" === n.clientName ?
                (n.mainAppWebInfo = {
                    graftUrl: x.location.href
                }, K("kevlar_woffle") && Mj.h && (n.mainAppWebInfo.pwaInstallabilityStatus = Mj.h.h ? "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED" : "PWA_INSTALLABILITY_STATUS_UNKNOWN"), n.mainAppWebInfo.webDisplayMode = Nj(), n.mainAppWebInfo.isWebNativeShareAvailable = navigator && void 0 !== navigator.share) : "TVHTML5" === n.clientName && (!K("web_lr_app_quality_killswitch") && (m = B("LIVING_ROOM_APP_QUALITY")) && (n.tvAppInfo = Object.assign(n.tvAppInfo || {}, {
                    appQuality: m
                })), m = B("LIVING_ROOM_CERTIFICATION_SCOPE")) &&
                (n.tvAppInfo = Object.assign(n.tvAppInfo || {}, {
                    certificationScope: m
                }));
            if (!K("web_populate_time_zone_itc_killswitch")) {
                b: {
                    if ("undefined" !== typeof Intl) try {
                        var u = (new Intl.DateTimeFormat).resolvedOptions().timeZone;
                        break b
                    } catch (ha) {}
                    u = void 0
                }
                u && (n.timeZone = u)
            }(u = xh()) ? n.experimentsToken = u: delete n.experimentsToken;
            u = yh();
            Oo.h || (Oo.h = new Oo);
            n = Oo.h.h;
            m = [];
            k = 0;
            for (var C in n) m[k++] = n[C];
            h.request = Object.assign(Object.assign({}, h.request), {
                internalExperimentFlags: u,
                consistencyTokenJars: m
            });
            !K("web_prequest_context_killswitch") &&
                (C = B("INNERTUBE_CONTEXT_PREQUEST_CONTEXT")) && (h.request.externalPrequestContext = C);
            u = Tj.getInstance();
            C = Wj(58);
            u = u.get("gsml", "");
            h.user = Object.assign({}, h.user);
            C && (h.user.enableSafetyMode = C);
            u && (h.user.lockedSafetyMode = !0);
            K("warm_op_csn_cleanup") ? f && (g = ko()) && (h.clientScreenNonce = g) : !g && (g = ko()) && (h.clientScreenNonce = g);
            e && (h.clickTracking = {
                clickTrackingParams: e
            });
            if (e = A("yt.mdx.remote.remoteClient_")) h.remoteClient = e;
            K("web_enable_client_location_service") && Ro.getInstance().setLocationOnInnerTubeContext(h);
            try {
                var D = ti(void 0),
                    L = D.bid;
                delete D.bid;
                h.adSignalsInfo = {
                    params: [],
                    bid: L
                };
                for (var O = q(Object.entries(D)), R = O.next(); !R.done; R = O.next()) {
                    var V = q(R.value),
                        Z = V.next().value,
                        Ad = V.next().value;
                    D = Z;
                    L = Ad;
                    null === (d = h.adSignalsInfo.params) || void 0 === d ? void 0 : d.push({
                        key: D,
                        value: "" + L
                    })
                }
            } catch (ha) {
                Rn(ha)
            }
            d = h
        } else Rn(Error("Error: No InnerTubeContext shell provided in ytconfig.")), d = {};
        d = {
            context: d
        };
        if (O = this.h(a)) {
            this.i(d, O, b);
            var fa, X;
            b = "/youtubei/v1/" + Yo(this.j());
            (a = null === (X = null === (fa = a.commandMetadata) ||
                void 0 === fa ? void 0 : fa.webCommandMetadata) || void 0 === X ? void 0 : X.apiUrl) && (b = a);
            fa = b;
            (X = B("INNERTUBE_HOST_OVERRIDE")) && (fa = String(X) + String(jc(fa)));
            X = {};
            X.key = B("INNERTUBE_API_KEY");
            K("json_condensed_response") && (X.prettyPrint = "false");
            fa = ri(fa, X || {}, !1);
            fa = {
                input: fa,
                wa: Zo(fa),
                aa: d,
                config: Object.assign({}, void 0)
            };
            fa.config.Ka ? fa.config.Ka.identity = c : fa.config.Ka = {
                identity: c
            };
            return fa
        }
        Rn(new Ek("Error: Failed to create Request from Command.", a))
    };
    da.Object.defineProperties($o.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function ap() {}
    r(ap, $o);
    ap.prototype.o = function() {
        return {
            input: "/getDatasyncIdsEndpoint",
            wa: Zo("/getDatasyncIdsEndpoint", "GET"),
            aa: {}
        }
    };
    ap.prototype.j = function() {
        return []
    };
    ap.prototype.h = function() {};
    ap.prototype.i = function() {};
    var bp = {},
        cp = (bp.GET_DATASYNC_IDS = Vo(ap), bp);

    function dp(a) {
        var b = Ea.apply(1, arguments);
        if (!ep(a) || b.some(function(e) {
                return !ep(e)
            })) throw Error("Only objects may be merged.");
        var c = a;
        b = q(b);
        for (var d = b.next(); !d.done; d = b.next()) fp(c, d.value);
        return c
    }

    function fp(a, b) {
        for (var c in b)
            if (ep(b[c])) {
                if (c in a && !ep(a[c])) throw Error("Cannot merge an object into a non-object.");
                c in a || (a[c] = {});
                fp(a[c], b[c])
            } else if (gp(b[c])) {
            if (c in a && !gp(a[c])) throw Error("Cannot merge an array into a non-array.");
            c in a || (a[c] = []);
            hp(a[c], b[c])
        } else a[c] = b[c];
        return a
    }

    function hp(a, b) {
        b = q(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, ep(c) ? a.push(fp({}, c)) : gp(c) ? a.push(hp([], c)) : a.push(c);
        return a
    }

    function ep(a) {
        return "object" === typeof a && !Array.isArray(a)
    }

    function gp(a) {
        return "object" === typeof a && Array.isArray(a)
    };

    function ip(a, b) {
        fm.call(this, 1, arguments);
        this.timer = b
    }
    r(ip, fm);
    var jp = new gm("aft-recorded", ip);
    var kp = window;

    function lp() {
        this.timing = {};
        this.clearResourceTimings = function() {};
        this.webkitClearResourceTimings = function() {};
        this.mozClearResourceTimings = function() {};
        this.msClearResourceTimings = function() {};
        this.oClearResourceTimings = function() {}
    }
    var P = kp.performance || kp.mozPerformance || kp.msPerformance || kp.webkitPerformance || new lp;
    var mp = !1,
        np = {
            'script[name="scheduler/scheduler"]': "sj",
            'script[name="player/base"]': "pj",
            'link[rel="stylesheet"][name="www-player"]': "pc",
            'link[rel="stylesheet"][name="player/www-player"]': "pc",
            'script[name="desktop_polymer/desktop_polymer"]': "dpj",
            'link[rel="import"][name="desktop_polymer"]': "dph",
            'script[name="mobile-c3"]': "mcj",
            'link[rel="stylesheet"][name="mobile-c3"]': "mcc",
            'script[name="player-plasma-ias-phone/base"]': "mcppj",
            'script[name="player-plasma-ias-tablet/base"]': "mcptj",
            'link[rel="stylesheet"][name="mobile-polymer-player-ias"]': "mcpc",
            'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]': "mcpsc",
            'script[name="mobile_blazer_core_mod"]': "mbcj",
            'link[rel="stylesheet"][name="mobile_blazer_css"]': "mbc",
            'script[name="mobile_blazer_logged_in_users_mod"]': "mbliuj",
            'script[name="mobile_blazer_logged_out_users_mod"]': "mblouj",
            'script[name="mobile_blazer_noncore_mod"]': "mbnj",
            "#player_css": "mbpc",
            'script[name="mobile_blazer_desktopplayer_mod"]': "mbpj",
            'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]': "mbtc",
            'script[name="mobile_blazer_watch_mod"]': "mbwj"
        },
        op = Ta(P.clearResourceTimings || P.webkitClearResourceTimings || P.mozClearResourceTimings || P.msClearResourceTimings || P.oClearResourceTimings || Ja, P);

    function pp(a) {
        var b = qp(a);
        if (b.aft) return b.aft;
        a = B((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = a.length, d = 0; d < c; d++) {
            var e = b[a[d]];
            if (e) return e
        }
        return NaN
    }

    function rp() {
        var a;
        if (K("csi_use_performance_navigation_timing")) {
            var b, c, d, e = null === (d = null === (c = null === (b = null === (a = null === P || void 0 === P ? void 0 : P.getEntriesByType) || void 0 === a ? void 0 : a.call(P, "navigation")) || void 0 === b ? void 0 : b[0]) || void 0 === c ? void 0 : c.toJSON) || void 0 === d ? void 0 : d.call(c);
            e ? (e.requestStart = sp(e.requestStart), e.responseEnd = sp(e.responseEnd), e.redirectStart = sp(e.redirectStart), e.redirectEnd = sp(e.redirectEnd), e.domainLookupEnd = sp(e.domainLookupEnd), e.connectStart = sp(e.connectStart),
                e.connectEnd = sp(e.connectEnd), e.responseStart = sp(e.responseStart), e.secureConnectionStart = sp(e.secureConnectionStart), e.domainLookupStart = sp(e.domainLookupStart), e.isPerformanceNavigationTiming = !0, a = e) : a = P.timing
        } else a = P.timing;
        return a
    }

    function tp() {
        return K("csi_use_time_origin") && P.timeOrigin ? Math.floor(P.timeOrigin) : P.timing.navigationStart
    }

    function sp(a) {
        return Math.round(tp() + a)
    }

    function up(a) {
        z("ytglobal.timing" + (a || "") + "ready_", !0, void 0)
    }

    function vp(a) {
        return A("ytcsi." + (a || "") + "data_") || wp(a)
    }

    function xp(a) {
        a = vp(a);
        a.info || (a.info = {});
        return a.info
    }

    function qp(a) {
        a = vp(a);
        a.tick || (a.tick = {});
        return a.tick
    }

    function yp(a) {
        a = vp(a);
        if (a.gel) {
            var b = a.gel;
            b.gelInfos || (b.gelInfos = {});
            b.gelTicks || (b.gelTicks = {})
        } else a.gel = {
            gelTicks: {},
            gelInfos: {}
        };
        return a.gel
    }

    function zp(a) {
        a = yp(a);
        a.gelInfos || (a.gelInfos = {});
        return a.gelInfos
    }

    function Ap(a) {
        var b = vp(a).nonce;
        b || (b = Yn(), vp(a).nonce = b);
        return b
    }

    function wp(a) {
        var b = {
            tick: {},
            info: {}
        };
        z("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    }

    function Bp(a) {
        var b = qp(a || ""),
            c = pp(a);
        c && !mp && (lm(jp, new ip(Math.round(c - b._start), a)), mp = !0)
    }

    function Cp(a, b) {
        for (var c = q(Object.keys(b)), d = c.next(); !d.done; d = c.next())
            if (d = d.value, !Object.keys(a).includes(d) || "object" === typeof b[d] && !Cp(a[d], b[d])) return !1;
        return !0
    };

    function Dp() {
        if (P.getEntriesByType) {
            var a = P.getEntriesByType("paint");
            if (a = gb(a, function(b) {
                    return "first-paint" === b.name
                })) return sp(a.startTime)
        }
        a = P.timing;
        return a.ic ? Math.max(0, a.ic) : 0
    };

    function Ep() {
        var a = A("ytcsi.debug");
        a || (a = [], z("ytcsi.debug", a, void 0), z("ytcsi.reference", {}, void 0));
        return a
    }

    function Fp(a) {
        a = a || "";
        var b = Gp();
        if (b[a]) return b[a];
        var c = Ep(),
            d = {
                timerName: a,
                info: {},
                tick: {},
                span: {},
                jspbInfo: []
            };
        c.push(d);
        return b[a] = d
    }

    function Gp() {
        var a = A("ytcsi.reference");
        if (a) return a;
        Ep();
        return A("ytcsi.reference")
    };
    var Q = {},
        Hp = (Q.auto_search = "LATENCY_ACTION_AUTO_SEARCH", Q.ad_to_ad = "LATENCY_ACTION_AD_TO_AD", Q.ad_to_video = "LATENCY_ACTION_AD_TO_VIDEO", Q["analytics.explore"] = "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE", Q.app_startup = "LATENCY_ACTION_APP_STARTUP", Q["artist.analytics"] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS", Q["artist.events"] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS", Q["artist.presskit"] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE", Q.browse = "LATENCY_ACTION_BROWSE", Q.cast_splash = "LATENCY_ACTION_CAST_SPLASH",
            Q.channels = "LATENCY_ACTION_CHANNELS", Q.creator_channel_dashboard = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD", Q["channel.analytics"] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS", Q["channel.comments"] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS", Q["channel.content"] = "LATENCY_ACTION_CREATOR_POST_LIST", Q["channel.copyright"] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT", Q["channel.editing"] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING", Q["channel.monetization"] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION", Q["channel.music"] =
            "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC", Q["channel.playlists"] = "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS", Q["channel.translations"] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS", Q["channel.videos"] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS", Q["channel.live_streaming"] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING", Q.chips = "LATENCY_ACTION_CHIPS", Q["dialog.copyright_strikes"] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES", Q["dialog.uploads"] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS", Q.direct_playback = "LATENCY_ACTION_DIRECT_PLAYBACK",
            Q.embed = "LATENCY_ACTION_EMBED", Q.entity_key_serialization_perf = "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF", Q.entity_key_deserialization_perf = "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF", Q.explore = "LATENCY_ACTION_EXPLORE", Q.home = "LATENCY_ACTION_HOME", Q.library = "LATENCY_ACTION_LIBRARY", Q.live = "LATENCY_ACTION_LIVE", Q.live_pagination = "LATENCY_ACTION_LIVE_PAGINATION", Q.onboarding = "LATENCY_ACTION_ONBOARDING", Q.parent_profile_settings = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS", Q.parent_tools_collection =
            "LATENCY_ACTION_PARENT_TOOLS_COLLECTION", Q.parent_tools_dashboard = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD", Q.player_att = "LATENCY_ACTION_PLAYER_ATTESTATION", Q["post.comments"] = "LATENCY_ACTION_CREATOR_POST_COMMENTS", Q["post.edit"] = "LATENCY_ACTION_CREATOR_POST_EDIT", Q.prebuffer = "LATENCY_ACTION_PREBUFFER", Q.prefetch = "LATENCY_ACTION_PREFETCH", Q.profile_settings = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS", Q.profile_switcher = "LATENCY_ACTION_LOGIN", Q.reel_watch = "LATENCY_ACTION_REEL_WATCH", Q.results = "LATENCY_ACTION_RESULTS",
            Q.search_ui = "LATENCY_ACTION_SEARCH_UI", Q.search_suggest = "LATENCY_ACTION_SUGGEST", Q.search_zero_state = "LATENCY_ACTION_SEARCH_ZERO_STATE", Q.secret_code = "LATENCY_ACTION_KIDS_SECRET_CODE", Q.seek = "LATENCY_ACTION_PLAYER_SEEK", Q.settings = "LATENCY_ACTION_SETTINGS", Q.tenx = "LATENCY_ACTION_TENX", Q.video_to_ad = "LATENCY_ACTION_VIDEO_TO_AD", Q.watch = "LATENCY_ACTION_WATCH", Q.watch_it_again = "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN", Q["watch,watch7"] = "LATENCY_ACTION_WATCH", Q["watch,watch7_html5"] = "LATENCY_ACTION_WATCH",
            Q["watch,watch7ad"] = "LATENCY_ACTION_WATCH", Q["watch,watch7ad_html5"] = "LATENCY_ACTION_WATCH", Q.wn_comments = "LATENCY_ACTION_LOAD_COMMENTS", Q.ww_rqs = "LATENCY_ACTION_WHO_IS_WATCHING", Q["video.analytics"] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS", Q["video.comments"] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS", Q["video.edit"] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT", Q["video.editor"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR", Q["video.editor_async"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC", Q["video.live_settings"] =
            "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS", Q["video.live_streaming"] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING", Q["video.monetization"] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION", Q["video.translations"] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS", Q.voice_assistant = "LATENCY_ACTION_VOICE_ASSISTANT", Q.cast_load_by_entity_to_watch = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH", Q.networkless_performance = "LATENCY_ACTION_NETWORKLESS_PERFORMANCE", Q),
        S = {},
        Ip = (S.ad_allowed = "adTypesAllowed", S.yt_abt = "adBreakType",
            S.ad_cpn = "adClientPlaybackNonce", S.ad_docid = "adVideoId", S.yt_ad_an = "adNetworks", S.ad_at = "adType", S.aida = "appInstallDataAgeMs", S.browse_id = "browseId", S.p = "httpProtocol", S.t = "transportProtocol", S.cs = "commandSource", S.cpn = "clientPlaybackNonce", S.ccs = "creatorInfo.creatorCanaryState", S.ctop = "creatorInfo.topEntityType", S.csn = "clientScreenNonce", S.docid = "videoId", S.GetHome_rid = "requestIds", S.GetSearch_rid = "requestIds", S.GetPlayer_rid = "requestIds", S.GetWatchNext_rid = "requestIds", S.GetBrowse_rid = "requestIds",
            S.GetLibrary_rid = "requestIds", S.is_continuation = "isContinuation", S.is_nav = "isNavigation", S.b_p = "kabukiInfo.browseParams", S.is_prefetch = "kabukiInfo.isPrefetch", S.is_secondary_nav = "kabukiInfo.isSecondaryNav", S.nav_type = "kabukiInfo.navigationType", S.prev_browse_id = "kabukiInfo.prevBrowseId", S.query_source = "kabukiInfo.querySource", S.voz_type = "kabukiInfo.vozType", S.yt_lt = "loadType", S.mver = "creatorInfo.measurementVersion", S.yt_ad = "isMonetized", S.nr = "webInfo.navigationReason", S.nrsu = "navigationRequestedSameUrl",
            S.ncnp = "webInfo.nonPreloadedNodeCount", S.pnt = "performanceNavigationTiming", S.prt = "playbackRequiresTap", S.plt = "playerInfo.playbackType", S.pis = "playerInfo.playerInitializedState", S.paused = "playerInfo.isPausedOnLoad", S.yt_pt = "playerType", S.fmt = "playerInfo.itag", S.yt_pl = "watchInfo.isPlaylist", S.yt_pre = "playerInfo.preloadType", S.yt_ad_pr = "prerollAllowed", S.pa = "previousAction", S.yt_red = "isRedSubscriber", S.rce = "mwebInfo.responseContentEncoding", S.rc = "resourceInfo.resourceCache", S.scrh = "screenHeight", S.scrw =
            "screenWidth", S.st = "serverTimeMs", S.ssdm = "shellStartupDurationMs", S.br_trs = "tvInfo.bedrockTriggerState", S.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", S.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", S.label = "tvInfo.label", S.is_mdx = "tvInfo.isMdx", S.preloaded = "tvInfo.isPreloaded", S.aac_type = "tvInfo.authAccessCredentialType", S.upg_player_vis = "playerInfo.visibilityState", S.query = "unpluggedInfo.query", S.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", S.yt_vst = "videoStreamType", S.vph =
            "viewportHeight", S.vpw = "viewportWidth", S.yt_vis = "isVisible", S.rcl = "mwebInfo.responseContentLength", S.GetSettings_rid = "requestIds", S.GetTrending_rid = "requestIds", S.GetMusicSearchSuggestions_rid = "requestIds", S.REQUEST_ID = "requestIds", S),
        Jp = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        Kp = {},
        Lp = (Kp.ccs = "CANARY_STATE_", Kp.mver = "MEASUREMENT_VERSION_", Kp.pis = "PLAYER_INITIALIZED_STATE_", Kp.yt_pt = "LATENCY_PLAYER_", Kp.pa = "LATENCY_ACTION_", Kp.ctop = "TOP_ENTITY_TYPE_", Kp.yt_vst = "VIDEO_STREAM_TYPE_", Kp),
        Mp = "all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");

    function Np(a) {
        return Hp[a] || "LATENCY_ACTION_UNKNOWN"
    }

    function Op(a, b, c) {
        c = yp(c);
        if (c.gelInfos) c.gelInfos[a] = !0;
        else {
            var d = {};
            c.gelInfos = (d[a] = !0, d)
        }
        if (a.match("_rid")) {
            var e = a.split("_rid")[0];
            a = "REQUEST_ID"
        }
        if (a in Ip) {
            c = Ip[a];
            0 <= bb(Jp, c) && (b = !!b);
            a in Lp && "string" === typeof b && (b = Lp[a] + b.toUpperCase());
            a = b;
            b = c.split(".");
            for (var f = d = {}, g = 0; g < b.length - 1; g++) {
                var h = b[g];
                f[h] = {};
                f = f[h]
            }
            f[b[b.length - 1]] = "requestIds" === c ? [{
                id: a,
                endpoint: e
            }] : a;
            return dp({}, d)
        }
        0 <= bb(Mp, a) || Sn(new Ek("Unknown label logged with GEL CSI", a))
    };
    var T = {
        LATENCY_ACTION_KIDS_PROFILE_SWITCHER: 90,
        LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER: 100,
        LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC: 46,
        LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR: 37,
        LATENCY_ACTION_SPINNER_DISPLAYED: 14,
        LATENCY_ACTION_PLAYABILITY_CHECK: 10,
        LATENCY_ACTION_PROCESS: 9,
        LATENCY_ACTION_APP_STARTUP: 5,
        LATENCY_ACTION_PLAYER_ROTATION: 150,
        LATENCY_ACTION_SHOPPING_IN_APP: 124,
        LATENCY_ACTION_PLAYER_ATTESTATION: 121,
        LATENCY_ACTION_PLAYER_SEEK: 119,
        LATENCY_ACTION_SUPER_STICKER_BUY_FLOW: 114,
        LATENCY_ACTION_BLOCKS_PERFORMANCE: 148,
        LATENCY_ACTION_ASSISTANT_QUERY: 138,
        LATENCY_ACTION_ASSISTANT_SETTINGS: 137,
        LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF: 129,
        LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF: 128,
        LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE: 127,
        LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION: 123,
        LATENCY_ACTION_NETWORKLESS_PERFORMANCE: 122,
        LATENCY_ACTION_DOWNLOADS_EXPANSION: 133,
        LATENCY_ACTION_ENTITY_TRANSFORM: 131,
        LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER: 96,
        LATENCY_ACTION_EMBEDS_SET_VIDEO: 95,
        LATENCY_ACTION_SETTINGS: 93,
        LATENCY_ACTION_ABANDONED_STARTUP: 81,
        LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY: 80,
        LATENCY_ACTION_MEDIA_BROWSER_SEARCH: 79,
        LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE: 78,
        LATENCY_ACTION_WHO_IS_WATCHING: 77,
        LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH: 76,
        LATENCY_ACTION_LITE_SWITCH_ACCOUNT: 73,
        LATENCY_ACTION_ELEMENTS_PERFORMANCE: 70,
        LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION: 69,
        LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION: 65,
        LATENCY_ACTION_OFFLINE_STORE_START: 61,
        LATENCY_ACTION_REEL_EDITOR: 58,
        LATENCY_ACTION_CHANNEL_SUBSCRIBE: 56,
        LATENCY_ACTION_CHANNEL_PREVIEW: 55,
        LATENCY_ACTION_PREFETCH: 52,
        LATENCY_ACTION_ABANDONED_WATCH: 45,
        LATENCY_ACTION_LOAD_COMMENT_REPLIES: 26,
        LATENCY_ACTION_LOAD_COMMENTS: 25,
        LATENCY_ACTION_EDIT_COMMENT: 24,
        LATENCY_ACTION_NEW_COMMENT: 23,
        LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING: 19,
        LATENCY_ACTION_EMBED: 18,
        LATENCY_ACTION_MDX_LAUNCH: 15,
        LATENCY_ACTION_RESOLVE_URL: 13,
        LATENCY_ACTION_CAST_SPLASH: 149,
        LATENCY_ACTION_MDX_CAST: 120,
        LATENCY_ACTION_MDX_COMMAND: 12,
        LATENCY_ACTION_REEL_SELECT_SEGMENT: 136,
        LATENCY_ACTION_ACCELERATED_EFFECTS: 145,
        LATENCY_ACTION_UPLOAD_AUDIO_MIXER: 147,
        LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING: 146,
        LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK: 130,
        LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD: 125,
        LATENCY_ACTION_SHORTS_GALLERY: 107,
        LATENCY_ACTION_SHORTS_TRIM: 105,
        LATENCY_ACTION_SHORTS_EDIT: 104,
        LATENCY_ACTION_SHORTS_CAMERA: 103,
        LATENCY_ACTION_PARENT_TOOLS_DASHBOARD: 102,
        LATENCY_ACTION_PARENT_TOOLS_COLLECTION: 101,
        LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS: 116,
        LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS: 115,
        LATENCY_ACTION_MUSIC_ALBUM_DETAIL: 72,
        LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL: 71,
        LATENCY_ACTION_CHIPS: 68,
        LATENCY_ACTION_SEARCH_ZERO_STATE: 67,
        LATENCY_ACTION_LIVE_PAGINATION: 117,
        LATENCY_ACTION_LIVE: 20,
        LATENCY_ACTION_PREBUFFER: 40,
        LATENCY_ACTION_TENX: 39,
        LATENCY_ACTION_KIDS_PROFILE_SETTINGS: 94,
        LATENCY_ACTION_KIDS_WATCH_IT_AGAIN: 92,
        LATENCY_ACTION_KIDS_SECRET_CODE: 91,
        LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS: 89,
        LATENCY_ACTION_KIDS_ONBOARDING: 88,
        LATENCY_ACTION_KIDS_VOICE_SEARCH: 82,
        LATENCY_ACTION_KIDS_CURATED_COLLECTION: 62,
        LATENCY_ACTION_KIDS_LIBRARY: 53,
        LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS: 38,
        LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION: 74,
        LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING: 141,
        LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS: 142,
        LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC: 51,
        LATENCY_ACTION_CREATOR_VIDEO_EDITOR: 50,
        LATENCY_ACTION_CREATOR_VIDEO_EDIT: 36,
        LATENCY_ACTION_CREATOR_VIDEO_COMMENTS: 34,
        LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS: 33,
        LATENCY_ACTION_CREATOR_POST_LIST: 112,
        LATENCY_ACTION_CREATOR_POST_EDIT: 110,
        LATENCY_ACTION_CREATOR_POST_COMMENTS: 111,
        LATENCY_ACTION_CREATOR_LIVE_STREAMING: 108,
        LATENCY_ACTION_CREATOR_DIALOG_UPLOADS: 86,
        LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES: 87,
        LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS: 32,
        LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS: 48,
        LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS: 139,
        LATENCY_ACTION_CREATOR_CHANNEL_MUSIC: 99,
        LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION: 43,
        LATENCY_ACTION_CREATOR_CHANNEL_EDITING: 113,
        LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD: 49,
        LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT: 44,
        LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS: 66,
        LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS: 31,
        LATENCY_ACTION_CREATOR_ARTIST_PROFILE: 85,
        LATENCY_ACTION_CREATOR_ARTIST_CONCERTS: 84,
        LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS: 83,
        LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE: 140,
        LATENCY_ACTION_STORYBOARD_THUMBNAILS: 118,
        LATENCY_ACTION_SEARCH_THUMBNAILS: 59,
        LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD: 54,
        LATENCY_ACTION_VOICE_ASSISTANT: 47,
        LATENCY_ACTION_SEARCH_UI: 35,
        LATENCY_ACTION_SUGGEST: 30,
        LATENCY_ACTION_AUTO_SEARCH: 126,
        LATENCY_ACTION_DOWNLOADS: 98,
        LATENCY_ACTION_EXPLORE: 75,
        LATENCY_ACTION_VIDEO_LIST: 63,
        LATENCY_ACTION_HOME_RESUME: 60,
        LATENCY_ACTION_SUBSCRIPTIONS_LIST: 57,
        LATENCY_ACTION_THUMBNAIL_LOAD: 42,
        LATENCY_ACTION_FIRST_THUMBNAIL_LOAD: 29,
        LATENCY_ACTION_SUBSCRIPTIONS_FEED: 109,
        LATENCY_ACTION_SUBSCRIPTIONS: 28,
        LATENCY_ACTION_TRENDING: 27,
        LATENCY_ACTION_LIBRARY: 21,
        LATENCY_ACTION_VIDEO_THUMBNAIL: 8,
        LATENCY_ACTION_SHOW_MORE: 7,
        LATENCY_ACTION_VIDEO_PREVIEW: 6,
        LATENCY_ACTION_PREBUFFER_VIDEO: 144,
        LATENCY_ACTION_PREFETCH_VIDEO: 143,
        LATENCY_ACTION_DIRECT_PLAYBACK: 132,
        LATENCY_ACTION_REEL_WATCH: 41,
        LATENCY_ACTION_AD_TO_AD: 22,
        LATENCY_ACTION_VIDEO_TO_AD: 17,
        LATENCY_ACTION_AD_TO_VIDEO: 16,
        LATENCY_ACTION_ONBOARDING: 135,
        LATENCY_ACTION_LOGIN: 97,
        LATENCY_ACTION_BROWSE: 11,
        LATENCY_ACTION_CHANNELS: 4,
        LATENCY_ACTION_WATCH: 3,
        LATENCY_ACTION_RESULTS: 2,
        LATENCY_ACTION_HOME: 1,
        LATENCY_ACTION_STARTUP: 106,
        LATENCY_ACTION_UNKNOWN: 0
    };
    T[T.LATENCY_ACTION_KIDS_PROFILE_SWITCHER] = "LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
    T[T.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER] = "LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";
    T[T.LATENCY_ACTION_SPINNER_DISPLAYED] = "LATENCY_ACTION_SPINNER_DISPLAYED";
    T[T.LATENCY_ACTION_PLAYABILITY_CHECK] = "LATENCY_ACTION_PLAYABILITY_CHECK";
    T[T.LATENCY_ACTION_PROCESS] = "LATENCY_ACTION_PROCESS";
    T[T.LATENCY_ACTION_APP_STARTUP] = "LATENCY_ACTION_APP_STARTUP";
    T[T.LATENCY_ACTION_PLAYER_ROTATION] = "LATENCY_ACTION_PLAYER_ROTATION";
    T[T.LATENCY_ACTION_SHOPPING_IN_APP] = "LATENCY_ACTION_SHOPPING_IN_APP";
    T[T.LATENCY_ACTION_PLAYER_ATTESTATION] = "LATENCY_ACTION_PLAYER_ATTESTATION";
    T[T.LATENCY_ACTION_PLAYER_SEEK] = "LATENCY_ACTION_PLAYER_SEEK";
    T[T.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW] = "LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
    T[T.LATENCY_ACTION_BLOCKS_PERFORMANCE] = "LATENCY_ACTION_BLOCKS_PERFORMANCE";
    T[T.LATENCY_ACTION_ASSISTANT_QUERY] = "LATENCY_ACTION_ASSISTANT_QUERY";
    T[T.LATENCY_ACTION_ASSISTANT_SETTINGS] = "LATENCY_ACTION_ASSISTANT_SETTINGS";
    T[T.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF] = "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
    T[T.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF] = "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
    T[T.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE] = "LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
    T[T.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION] = "LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
    T[T.LATENCY_ACTION_NETWORKLESS_PERFORMANCE] = "LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
    T[T.LATENCY_ACTION_DOWNLOADS_EXPANSION] = "LATENCY_ACTION_DOWNLOADS_EXPANSION";
    T[T.LATENCY_ACTION_ENTITY_TRANSFORM] = "LATENCY_ACTION_ENTITY_TRANSFORM";
    T[T.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER] = "LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
    T[T.LATENCY_ACTION_EMBEDS_SET_VIDEO] = "LATENCY_ACTION_EMBEDS_SET_VIDEO";
    T[T.LATENCY_ACTION_SETTINGS] = "LATENCY_ACTION_SETTINGS";
    T[T.LATENCY_ACTION_ABANDONED_STARTUP] = "LATENCY_ACTION_ABANDONED_STARTUP";
    T[T.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY] = "LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
    T[T.LATENCY_ACTION_MEDIA_BROWSER_SEARCH] = "LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
    T[T.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE] = "LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";
    T[T.LATENCY_ACTION_WHO_IS_WATCHING] = "LATENCY_ACTION_WHO_IS_WATCHING";
    T[T.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH] = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
    T[T.LATENCY_ACTION_LITE_SWITCH_ACCOUNT] = "LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
    T[T.LATENCY_ACTION_ELEMENTS_PERFORMANCE] = "LATENCY_ACTION_ELEMENTS_PERFORMANCE";
    T[T.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION] = "LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
    T[T.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION] = "LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";
    T[T.LATENCY_ACTION_OFFLINE_STORE_START] = "LATENCY_ACTION_OFFLINE_STORE_START";
    T[T.LATENCY_ACTION_REEL_EDITOR] = "LATENCY_ACTION_REEL_EDITOR";
    T[T.LATENCY_ACTION_CHANNEL_SUBSCRIBE] = "LATENCY_ACTION_CHANNEL_SUBSCRIBE";
    T[T.LATENCY_ACTION_CHANNEL_PREVIEW] = "LATENCY_ACTION_CHANNEL_PREVIEW";
    T[T.LATENCY_ACTION_PREFETCH] = "LATENCY_ACTION_PREFETCH";
    T[T.LATENCY_ACTION_ABANDONED_WATCH] = "LATENCY_ACTION_ABANDONED_WATCH";
    T[T.LATENCY_ACTION_LOAD_COMMENT_REPLIES] = "LATENCY_ACTION_LOAD_COMMENT_REPLIES";
    T[T.LATENCY_ACTION_LOAD_COMMENTS] = "LATENCY_ACTION_LOAD_COMMENTS";
    T[T.LATENCY_ACTION_EDIT_COMMENT] = "LATENCY_ACTION_EDIT_COMMENT";
    T[T.LATENCY_ACTION_NEW_COMMENT] = "LATENCY_ACTION_NEW_COMMENT";
    T[T.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING] = "LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";
    T[T.LATENCY_ACTION_EMBED] = "LATENCY_ACTION_EMBED";
    T[T.LATENCY_ACTION_MDX_LAUNCH] = "LATENCY_ACTION_MDX_LAUNCH";
    T[T.LATENCY_ACTION_RESOLVE_URL] = "LATENCY_ACTION_RESOLVE_URL";
    T[T.LATENCY_ACTION_CAST_SPLASH] = "LATENCY_ACTION_CAST_SPLASH";
    T[T.LATENCY_ACTION_MDX_CAST] = "LATENCY_ACTION_MDX_CAST";
    T[T.LATENCY_ACTION_MDX_COMMAND] = "LATENCY_ACTION_MDX_COMMAND";
    T[T.LATENCY_ACTION_REEL_SELECT_SEGMENT] = "LATENCY_ACTION_REEL_SELECT_SEGMENT";
    T[T.LATENCY_ACTION_ACCELERATED_EFFECTS] = "LATENCY_ACTION_ACCELERATED_EFFECTS";
    T[T.LATENCY_ACTION_UPLOAD_AUDIO_MIXER] = "LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
    T[T.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING] = "LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";
    T[T.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK] = "LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
    T[T.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD] = "LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
    T[T.LATENCY_ACTION_SHORTS_GALLERY] = "LATENCY_ACTION_SHORTS_GALLERY";
    T[T.LATENCY_ACTION_SHORTS_TRIM] = "LATENCY_ACTION_SHORTS_TRIM";
    T[T.LATENCY_ACTION_SHORTS_EDIT] = "LATENCY_ACTION_SHORTS_EDIT";
    T[T.LATENCY_ACTION_SHORTS_CAMERA] = "LATENCY_ACTION_SHORTS_CAMERA";
    T[T.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD] = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
    T[T.LATENCY_ACTION_PARENT_TOOLS_COLLECTION] = "LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
    T[T.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS] = "LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";
    T[T.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS] = "LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
    T[T.LATENCY_ACTION_MUSIC_ALBUM_DETAIL] = "LATENCY_ACTION_MUSIC_ALBUM_DETAIL";
    T[T.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL] = "LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
    T[T.LATENCY_ACTION_CHIPS] = "LATENCY_ACTION_CHIPS";
    T[T.LATENCY_ACTION_SEARCH_ZERO_STATE] = "LATENCY_ACTION_SEARCH_ZERO_STATE";
    T[T.LATENCY_ACTION_LIVE_PAGINATION] = "LATENCY_ACTION_LIVE_PAGINATION";
    T[T.LATENCY_ACTION_LIVE] = "LATENCY_ACTION_LIVE";
    T[T.LATENCY_ACTION_PREBUFFER] = "LATENCY_ACTION_PREBUFFER";
    T[T.LATENCY_ACTION_TENX] = "LATENCY_ACTION_TENX";
    T[T.LATENCY_ACTION_KIDS_PROFILE_SETTINGS] = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
    T[T.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN] = "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
    T[T.LATENCY_ACTION_KIDS_SECRET_CODE] = "LATENCY_ACTION_KIDS_SECRET_CODE";
    T[T.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS] = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
    T[T.LATENCY_ACTION_KIDS_ONBOARDING] = "LATENCY_ACTION_KIDS_ONBOARDING";
    T[T.LATENCY_ACTION_KIDS_VOICE_SEARCH] = "LATENCY_ACTION_KIDS_VOICE_SEARCH";
    T[T.LATENCY_ACTION_KIDS_CURATED_COLLECTION] = "LATENCY_ACTION_KIDS_CURATED_COLLECTION";
    T[T.LATENCY_ACTION_KIDS_LIBRARY] = "LATENCY_ACTION_KIDS_LIBRARY";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS] = "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC] = "LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_EDITOR] = "LATENCY_ACTION_CREATOR_VIDEO_EDITOR";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_EDIT] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
    T[T.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";
    T[T.LATENCY_ACTION_CREATOR_POST_LIST] = "LATENCY_ACTION_CREATOR_POST_LIST";
    T[T.LATENCY_ACTION_CREATOR_POST_EDIT] = "LATENCY_ACTION_CREATOR_POST_EDIT";
    T[T.LATENCY_ACTION_CREATOR_POST_COMMENTS] = "LATENCY_ACTION_CREATOR_POST_COMMENTS";
    T[T.LATENCY_ACTION_CREATOR_LIVE_STREAMING] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING";
    T[T.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
    T[T.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS] = "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_EDITING] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD] = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";
    T[T.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";
    T[T.LATENCY_ACTION_CREATOR_ARTIST_PROFILE] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
    T[T.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";
    T[T.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
    T[T.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE] = "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
    T[T.LATENCY_ACTION_STORYBOARD_THUMBNAILS] = "LATENCY_ACTION_STORYBOARD_THUMBNAILS";
    T[T.LATENCY_ACTION_SEARCH_THUMBNAILS] = "LATENCY_ACTION_SEARCH_THUMBNAILS";
    T[T.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD] = "LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
    T[T.LATENCY_ACTION_VOICE_ASSISTANT] = "LATENCY_ACTION_VOICE_ASSISTANT";
    T[T.LATENCY_ACTION_SEARCH_UI] = "LATENCY_ACTION_SEARCH_UI";
    T[T.LATENCY_ACTION_SUGGEST] = "LATENCY_ACTION_SUGGEST";
    T[T.LATENCY_ACTION_AUTO_SEARCH] = "LATENCY_ACTION_AUTO_SEARCH";
    T[T.LATENCY_ACTION_DOWNLOADS] = "LATENCY_ACTION_DOWNLOADS";
    T[T.LATENCY_ACTION_EXPLORE] = "LATENCY_ACTION_EXPLORE";
    T[T.LATENCY_ACTION_VIDEO_LIST] = "LATENCY_ACTION_VIDEO_LIST";
    T[T.LATENCY_ACTION_HOME_RESUME] = "LATENCY_ACTION_HOME_RESUME";
    T[T.LATENCY_ACTION_SUBSCRIPTIONS_LIST] = "LATENCY_ACTION_SUBSCRIPTIONS_LIST";
    T[T.LATENCY_ACTION_THUMBNAIL_LOAD] = "LATENCY_ACTION_THUMBNAIL_LOAD";
    T[T.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD] = "LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
    T[T.LATENCY_ACTION_SUBSCRIPTIONS_FEED] = "LATENCY_ACTION_SUBSCRIPTIONS_FEED";
    T[T.LATENCY_ACTION_SUBSCRIPTIONS] = "LATENCY_ACTION_SUBSCRIPTIONS";
    T[T.LATENCY_ACTION_TRENDING] = "LATENCY_ACTION_TRENDING";
    T[T.LATENCY_ACTION_LIBRARY] = "LATENCY_ACTION_LIBRARY";
    T[T.LATENCY_ACTION_VIDEO_THUMBNAIL] = "LATENCY_ACTION_VIDEO_THUMBNAIL";
    T[T.LATENCY_ACTION_SHOW_MORE] = "LATENCY_ACTION_SHOW_MORE";
    T[T.LATENCY_ACTION_VIDEO_PREVIEW] = "LATENCY_ACTION_VIDEO_PREVIEW";
    T[T.LATENCY_ACTION_PREBUFFER_VIDEO] = "LATENCY_ACTION_PREBUFFER_VIDEO";
    T[T.LATENCY_ACTION_PREFETCH_VIDEO] = "LATENCY_ACTION_PREFETCH_VIDEO";
    T[T.LATENCY_ACTION_DIRECT_PLAYBACK] = "LATENCY_ACTION_DIRECT_PLAYBACK";
    T[T.LATENCY_ACTION_REEL_WATCH] = "LATENCY_ACTION_REEL_WATCH";
    T[T.LATENCY_ACTION_AD_TO_AD] = "LATENCY_ACTION_AD_TO_AD";
    T[T.LATENCY_ACTION_VIDEO_TO_AD] = "LATENCY_ACTION_VIDEO_TO_AD";
    T[T.LATENCY_ACTION_AD_TO_VIDEO] = "LATENCY_ACTION_AD_TO_VIDEO";
    T[T.LATENCY_ACTION_ONBOARDING] = "LATENCY_ACTION_ONBOARDING";
    T[T.LATENCY_ACTION_LOGIN] = "LATENCY_ACTION_LOGIN";
    T[T.LATENCY_ACTION_BROWSE] = "LATENCY_ACTION_BROWSE";
    T[T.LATENCY_ACTION_CHANNELS] = "LATENCY_ACTION_CHANNELS";
    T[T.LATENCY_ACTION_WATCH] = "LATENCY_ACTION_WATCH";
    T[T.LATENCY_ACTION_RESULTS] = "LATENCY_ACTION_RESULTS";
    T[T.LATENCY_ACTION_HOME] = "LATENCY_ACTION_HOME";
    T[T.LATENCY_ACTION_STARTUP] = "LATENCY_ACTION_STARTUP";
    T[T.LATENCY_ACTION_UNKNOWN] = "LATENCY_ACTION_UNKNOWN";
    var Pp = {
        LATENCY_NETWORK_MOBILE: 2,
        LATENCY_NETWORK_WIFI: 1,
        LATENCY_NETWORK_UNKNOWN: 0
    };
    Pp[Pp.LATENCY_NETWORK_MOBILE] = "LATENCY_NETWORK_MOBILE";
    Pp[Pp.LATENCY_NETWORK_WIFI] = "LATENCY_NETWORK_WIFI";
    Pp[Pp.LATENCY_NETWORK_UNKNOWN] = "LATENCY_NETWORK_UNKNOWN";
    var U = {
        CONN_INVALID: 31,
        CONN_CELLULAR_5G_NSA: 12,
        CONN_CELLULAR_5G_SA: 11,
        CONN_WIFI_METERED: 10,
        CONN_CELLULAR_5G: 9,
        CONN_DISCO: 8,
        CONN_CELLULAR_UNKNOWN: 7,
        CONN_CELLULAR_4G: 6,
        CONN_CELLULAR_3G: 5,
        CONN_CELLULAR_2G: 4,
        CONN_WIFI: 3,
        CONN_NONE: 2,
        CONN_UNKNOWN: 1,
        CONN_DEFAULT: 0
    };
    U[U.CONN_INVALID] = "CONN_INVALID";
    U[U.CONN_CELLULAR_5G_NSA] = "CONN_CELLULAR_5G_NSA";
    U[U.CONN_CELLULAR_5G_SA] = "CONN_CELLULAR_5G_SA";
    U[U.CONN_WIFI_METERED] = "CONN_WIFI_METERED";
    U[U.CONN_CELLULAR_5G] = "CONN_CELLULAR_5G";
    U[U.CONN_DISCO] = "CONN_DISCO";
    U[U.CONN_CELLULAR_UNKNOWN] = "CONN_CELLULAR_UNKNOWN";
    U[U.CONN_CELLULAR_4G] = "CONN_CELLULAR_4G";
    U[U.CONN_CELLULAR_3G] = "CONN_CELLULAR_3G";
    U[U.CONN_CELLULAR_2G] = "CONN_CELLULAR_2G";
    U[U.CONN_WIFI] = "CONN_WIFI";
    U[U.CONN_NONE] = "CONN_NONE";
    U[U.CONN_UNKNOWN] = "CONN_UNKNOWN";
    U[U.CONN_DEFAULT] = "CONN_DEFAULT";
    var W = {
        DETAILED_NETWORK_TYPE_NR_NSA: 126,
        DETAILED_NETWORK_TYPE_NR_SA: 125,
        DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED: 124,
        DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT: 123,
        DETAILED_NETWORK_TYPE_DISCONNECTED: 122,
        DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN: 121,
        DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN: 120,
        DETAILED_NETWORK_TYPE_WIMAX: 119,
        DETAILED_NETWORK_TYPE_ETHERNET: 118,
        DETAILED_NETWORK_TYPE_BLUETOOTH: 117,
        DETAILED_NETWORK_TYPE_WIFI: 116,
        DETAILED_NETWORK_TYPE_LTE: 115,
        DETAILED_NETWORK_TYPE_HSPAP: 114,
        DETAILED_NETWORK_TYPE_EHRPD: 113,
        DETAILED_NETWORK_TYPE_EVDO_B: 112,
        DETAILED_NETWORK_TYPE_UMTS: 111,
        DETAILED_NETWORK_TYPE_IDEN: 110,
        DETAILED_NETWORK_TYPE_HSUPA: 109,
        DETAILED_NETWORK_TYPE_HSPA: 108,
        DETAILED_NETWORK_TYPE_HSDPA: 107,
        DETAILED_NETWORK_TYPE_EVDO_A: 106,
        DETAILED_NETWORK_TYPE_EVDO_0: 105,
        DETAILED_NETWORK_TYPE_CDMA: 104,
        DETAILED_NETWORK_TYPE_1_X_RTT: 103,
        DETAILED_NETWORK_TYPE_GPRS: 102,
        DETAILED_NETWORK_TYPE_EDGE: 101,
        DETAILED_NETWORK_TYPE_UNKNOWN: 0
    };
    W[W.DETAILED_NETWORK_TYPE_NR_NSA] = "DETAILED_NETWORK_TYPE_NR_NSA";
    W[W.DETAILED_NETWORK_TYPE_NR_SA] = "DETAILED_NETWORK_TYPE_NR_SA";
    W[W.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED] = "DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";
    W[W.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT] = "DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";
    W[W.DETAILED_NETWORK_TYPE_DISCONNECTED] = "DETAILED_NETWORK_TYPE_DISCONNECTED";
    W[W.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN] = "DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";
    W[W.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN] = "DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
    W[W.DETAILED_NETWORK_TYPE_WIMAX] = "DETAILED_NETWORK_TYPE_WIMAX";
    W[W.DETAILED_NETWORK_TYPE_ETHERNET] = "DETAILED_NETWORK_TYPE_ETHERNET";
    W[W.DETAILED_NETWORK_TYPE_BLUETOOTH] = "DETAILED_NETWORK_TYPE_BLUETOOTH";
    W[W.DETAILED_NETWORK_TYPE_WIFI] = "DETAILED_NETWORK_TYPE_WIFI";
    W[W.DETAILED_NETWORK_TYPE_LTE] = "DETAILED_NETWORK_TYPE_LTE";
    W[W.DETAILED_NETWORK_TYPE_HSPAP] = "DETAILED_NETWORK_TYPE_HSPAP";
    W[W.DETAILED_NETWORK_TYPE_EHRPD] = "DETAILED_NETWORK_TYPE_EHRPD";
    W[W.DETAILED_NETWORK_TYPE_EVDO_B] = "DETAILED_NETWORK_TYPE_EVDO_B";
    W[W.DETAILED_NETWORK_TYPE_UMTS] = "DETAILED_NETWORK_TYPE_UMTS";
    W[W.DETAILED_NETWORK_TYPE_IDEN] = "DETAILED_NETWORK_TYPE_IDEN";
    W[W.DETAILED_NETWORK_TYPE_HSUPA] = "DETAILED_NETWORK_TYPE_HSUPA";
    W[W.DETAILED_NETWORK_TYPE_HSPA] = "DETAILED_NETWORK_TYPE_HSPA";
    W[W.DETAILED_NETWORK_TYPE_HSDPA] = "DETAILED_NETWORK_TYPE_HSDPA";
    W[W.DETAILED_NETWORK_TYPE_EVDO_A] = "DETAILED_NETWORK_TYPE_EVDO_A";
    W[W.DETAILED_NETWORK_TYPE_EVDO_0] = "DETAILED_NETWORK_TYPE_EVDO_0";
    W[W.DETAILED_NETWORK_TYPE_CDMA] = "DETAILED_NETWORK_TYPE_CDMA";
    W[W.DETAILED_NETWORK_TYPE_1_X_RTT] = "DETAILED_NETWORK_TYPE_1_X_RTT";
    W[W.DETAILED_NETWORK_TYPE_GPRS] = "DETAILED_NETWORK_TYPE_GPRS";
    W[W.DETAILED_NETWORK_TYPE_EDGE] = "DETAILED_NETWORK_TYPE_EDGE";
    W[W.DETAILED_NETWORK_TYPE_UNKNOWN] = "DETAILED_NETWORK_TYPE_UNKNOWN";
    var Qp = {
        LATENCY_PLAYER_RTSP: 7,
        LATENCY_PLAYER_HTML5_INLINE: 6,
        LATENCY_PLAYER_HTML5_FULLSCREEN: 5,
        LATENCY_PLAYER_HTML5: 4,
        LATENCY_PLAYER_FRAMEWORK: 3,
        LATENCY_PLAYER_FLASH: 2,
        LATENCY_PLAYER_EXO: 1,
        LATENCY_PLAYER_UNKNOWN: 0
    };
    Qp[Qp.LATENCY_PLAYER_RTSP] = "LATENCY_PLAYER_RTSP";
    Qp[Qp.LATENCY_PLAYER_HTML5_INLINE] = "LATENCY_PLAYER_HTML5_INLINE";
    Qp[Qp.LATENCY_PLAYER_HTML5_FULLSCREEN] = "LATENCY_PLAYER_HTML5_FULLSCREEN";
    Qp[Qp.LATENCY_PLAYER_HTML5] = "LATENCY_PLAYER_HTML5";
    Qp[Qp.LATENCY_PLAYER_FRAMEWORK] = "LATENCY_PLAYER_FRAMEWORK";
    Qp[Qp.LATENCY_PLAYER_FLASH] = "LATENCY_PLAYER_FLASH";
    Qp[Qp.LATENCY_PLAYER_EXO] = "LATENCY_PLAYER_EXO";
    Qp[Qp.LATENCY_PLAYER_UNKNOWN] = "LATENCY_PLAYER_UNKNOWN";
    var Rp = {
        LATENCY_AD_BREAK_TYPE_POSTROLL: 3,
        LATENCY_AD_BREAK_TYPE_MIDROLL: 2,
        LATENCY_AD_BREAK_TYPE_PREROLL: 1,
        LATENCY_AD_BREAK_TYPE_UNKNOWN: 0
    };
    Rp[Rp.LATENCY_AD_BREAK_TYPE_POSTROLL] = "LATENCY_AD_BREAK_TYPE_POSTROLL";
    Rp[Rp.LATENCY_AD_BREAK_TYPE_MIDROLL] = "LATENCY_AD_BREAK_TYPE_MIDROLL";
    Rp[Rp.LATENCY_AD_BREAK_TYPE_PREROLL] = "LATENCY_AD_BREAK_TYPE_PREROLL";
    Rp[Rp.LATENCY_AD_BREAK_TYPE_UNKNOWN] = "LATENCY_AD_BREAK_TYPE_UNKNOWN";
    var Sp = {
        LATENCY_ACTION_ERROR_STARTUP_TIMEOUT: 1,
        LATENCY_ACTION_ERROR_UNSPECIFIED: 0
    };
    Sp[Sp.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT] = "LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";
    Sp[Sp.LATENCY_ACTION_ERROR_UNSPECIFIED] = "LATENCY_ACTION_ERROR_UNSPECIFIED";
    var Tp = {
        LIVE_STREAM_MODE_WINDOW: 5,
        LIVE_STREAM_MODE_POST: 4,
        LIVE_STREAM_MODE_LP: 3,
        LIVE_STREAM_MODE_LIVE: 2,
        LIVE_STREAM_MODE_DVR: 1,
        LIVE_STREAM_MODE_UNKNOWN: 0
    };
    Tp[Tp.LIVE_STREAM_MODE_WINDOW] = "LIVE_STREAM_MODE_WINDOW";
    Tp[Tp.LIVE_STREAM_MODE_POST] = "LIVE_STREAM_MODE_POST";
    Tp[Tp.LIVE_STREAM_MODE_LP] = "LIVE_STREAM_MODE_LP";
    Tp[Tp.LIVE_STREAM_MODE_LIVE] = "LIVE_STREAM_MODE_LIVE";
    Tp[Tp.LIVE_STREAM_MODE_DVR] = "LIVE_STREAM_MODE_DVR";
    Tp[Tp.LIVE_STREAM_MODE_UNKNOWN] = "LIVE_STREAM_MODE_UNKNOWN";
    var Up = {
        VIDEO_STREAM_TYPE_VOD: 3,
        VIDEO_STREAM_TYPE_DVR: 2,
        VIDEO_STREAM_TYPE_LIVE: 1,
        VIDEO_STREAM_TYPE_UNSPECIFIED: 0
    };
    Up[Up.VIDEO_STREAM_TYPE_VOD] = "VIDEO_STREAM_TYPE_VOD";
    Up[Up.VIDEO_STREAM_TYPE_DVR] = "VIDEO_STREAM_TYPE_DVR";
    Up[Up.VIDEO_STREAM_TYPE_LIVE] = "VIDEO_STREAM_TYPE_LIVE";
    Up[Up.VIDEO_STREAM_TYPE_UNSPECIFIED] = "VIDEO_STREAM_TYPE_UNSPECIFIED";
    var Vp = {
        YT_IDB_TRANSACTION_TYPE_READ: 2,
        YT_IDB_TRANSACTION_TYPE_WRITE: 1,
        YT_IDB_TRANSACTION_TYPE_UNKNOWN: 0
    };
    Vp[Vp.YT_IDB_TRANSACTION_TYPE_READ] = "YT_IDB_TRANSACTION_TYPE_READ";
    Vp[Vp.YT_IDB_TRANSACTION_TYPE_WRITE] = "YT_IDB_TRANSACTION_TYPE_WRITE";
    Vp[Vp.YT_IDB_TRANSACTION_TYPE_UNKNOWN] = "YT_IDB_TRANSACTION_TYPE_UNKNOWN";
    var Wp = {
        PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN: 2,
        PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT: 1,
        PLAYER_ROTATION_TYPE_UNKNOWN: 0
    };
    Wp[Wp.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN] = "PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
    Wp[Wp.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT] = "PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";
    Wp[Wp.PLAYER_ROTATION_TYPE_UNKNOWN] = "PLAYER_ROTATION_TYPE_UNKNOWN";
    var Xp = x.ytLoggingGelSequenceIdObj_ || {};
    z("ytLoggingGelSequenceIdObj_", Xp, void 0);

    function Yp(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = Math.round(c.timestamp || M());
        G(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
        var e = fi();
        d = new Yg;
        G(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
        if (K("log_sequence_info_on_gel_web") && c.W) {
            e = c.W;
            var f = Lj(e),
                g = new Xg;
            G(g, 2, f);
            G(g, 1, e);
            H(d, 3, g);
            c.yb && delete Xp[c.W]
        }
        H(a, 33, d);
        (c.sc ? wj : rj)({
            endpoint: "log_event",
            payload: a,
            cttAuthInfo: c.cttAuthInfo,
            za: c.za
        }, b)
    };

    function Zp(a, b) {
        b = void 0 === b ? {} : b;
        var c = !1;
        B("ytLoggingEventsDefaultDisabled", !1) && yn === yn && (c = !0);
        Yp(a, c ? null : yn, b)
    };

    function $p(a, b, c) {
        var d = new Zg;
        cd(d, 72, a);
        c ? Yp(d, c, b) : Zp(d, b)
    }

    function aq(a, b, c) {
        var d = new Zg;
        cd(d, 73, a);
        c ? Yp(d, c, b) : Zp(d, b)
    }

    function bq(a, b, c) {
        var d = new Zg;
        cd(d, 78, a);
        c ? Yp(d, c, b) : Zp(d, b)
    }

    function cq(a, b, c) {
        var d = new Zg;
        cd(d, 208, a);
        c ? Yp(d, c, b) : Zp(d, b)
    }

    function dq(a, b, c) {
        var d = new Zg;
        cd(d, 156, a);
        c ? Yp(d, c, b) : Zp(d, b)
    }

    function eq(a, b, c) {
        var d = new Zg;
        cd(d, 215, a);
        c ? Yp(d, c, b) : Zp(d, b)
    };
    var fq = x.ytLoggingLatencyUsageStats_ || {};
    z("ytLoggingLatencyUsageStats_", fq, void 0);

    function gq() {
        this.h = 0
    }

    function hq() {
        gq.h || (gq.h = new gq);
        return gq.h
    }
    gq.prototype.tick = function(a, b, c, d) {
        iq(this, "tick_" + a + "_" + b) || (c = {
            timestamp: c,
            cttAuthInfo: d
        }, K("web_csi_via_jspb") ? (d = new Wg, G(d, 1, a), G(d, 2, b), a = new Zg, cd(a, 5, d), Zp(a, c)) : Bk("latencyActionTicked", {
            tickName: a,
            clientActionNonce: b
        }, c))
    };
    gq.prototype.info = function(a, b, c) {
        var d = Object.keys(a).join("");
        iq(this, "info_" + d + "_" + b) || (a = Object.assign({}, a), a.clientActionNonce = b, Bk("latencyActionInfo", a, {
            cttAuthInfo: c
        }))
    };
    gq.prototype.jspbInfo = function(a, b, c) {
        for (var d = "", e = 0; e < a.toJSON().length; e++) void 0 !== a.toJSON()[e] && (d = 0 === e ? d.concat("" + e) : d.concat("_" + e));
        iq(this, "info_" + d + "_" + b) || (G(a, 2, b), b = {
            cttAuthInfo: c
        }, c = new Zg, cd(c, 7, a), Zp(c, b))
    };
    gq.prototype.span = function(a, b, c) {
        var d = Object.keys(a).join("");
        iq(this, "span_" + d + "_" + b) || (a.clientActionNonce = b, Bk("latencyActionSpan", a, {
            cttAuthInfo: c
        }))
    };

    function iq(a, b) {
        fq[b] = fq[b] || {
            count: 0
        };
        var c = fq[b];
        c.count++;
        c.time = M();
        a.h || (a.h = Vh(function() {
            var d = M(),
                e;
            for (e in fq) fq[e] && 6E4 < d - fq[e].time && delete fq[e];
            a && (a.h = 0)
        }, 5E3));
        return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new Ek("CSI data exceeded logging limit with key", b.split("_")), 0 <= b.indexOf("plev") || Sn(c)), !0) : !1
    };

    function jq() {
        var a = ["ol"];
        Fp("").info.actionType = "embed";
        a && th("TIMING_AFT_KEYS", a);
        th("TIMING_ACTION", "embed");
        a = B("TIMING_INFO", {});
        for (var b in a) a.hasOwnProperty(b) && kq(b, a[b]);
        b = {
            isNavigation: !0,
            actionType: Np(uh("TIMING_ACTION"))
        };
        if (a = uh("PREVIOUS_ACTION")) b.previousAction = Np(a);
        if (a = B("CLIENT_PROTOCOL")) b.httpProtocol = a;
        if (a = B("CLIENT_TRANSPORT")) b.transportProtocol = a;
        (a = ko()) && "UNDEFINED_CSN" !== a && (b.clientScreenNonce = a);
        a = lq();
        if (1 === a || -1 === a) b.isVisible = !0;
        a = xp();
        b.loadType = "cold";
        var c =
            rp(),
            d = tp();
        d && (Y("srt", c.responseStart), 1 !== a.prerender && Y("_start", d, void 0));
        a = Dp();
        0 < a && Y("fpt", a);
        a = rp();
        a.isPerformanceNavigationTiming && mq({
            performanceNavigationTiming: !0
        }, void 0);
        Y("nreqs", a.requestStart, void 0);
        Y("nress", a.responseStart, void 0);
        Y("nrese", a.responseEnd, void 0);
        0 < a.redirectEnd - a.redirectStart && (Y("nrs", a.redirectStart, void 0), Y("nre", a.redirectEnd, void 0));
        0 < a.domainLookupEnd - a.domainLookupStart && (Y("ndnss", a.domainLookupStart, void 0), Y("ndnse", a.domainLookupEnd, void 0));
        0 <
            a.connectEnd - a.connectStart && (Y("ntcps", a.connectStart, void 0), Y("ntcpe", a.connectEnd, void 0));
        a.secureConnectionStart >= tp() && 0 < a.connectEnd - a.secureConnectionStart && (Y("nstcps", a.secureConnectionStart, void 0), Y("ntcpe", a.connectEnd, void 0));
        P && "getEntriesByType" in P && nq();
        a = [];
        if (document.querySelector && P && P.getEntriesByName)
            for (var e in np) np.hasOwnProperty(e) && (c = np[e], oq(e, c) && a.push(c));
        if (0 < a.length)
            for (b.resourceInfo = [], e = q(a), a = e.next(); !a.done; a = e.next()) b.resourceInfo.push({
                resourceCache: a.value
            });
        mq(b);
        e = xp();
        b = zp();
        if ("cold" === e.yt_lt || "cold" === b.loadType) {
            a = qp();
            c = yp();
            c = c.gelTicks ? c.gelTicks : c.gelTicks = {};
            for (var f in a) f in c || Y(f, a[f]);
            f = {};
            a = !1;
            c = q(Object.keys(e));
            for (d = c.next(); !d.done; d = c.next()) d = d.value, (d = Op(d, e[d])) && !Cp(zp(void 0), d) && (dp(b, d), dp(f, d), a = !0);
            a && mq(f)
        }
        up();
        f = uh("TIMING_ACTION");
        A("ytglobal.timingready_") && f && "_start" in qp(void 0) && pp() && Bp()
    }

    function kq(a, b, c) {
        null !== b && (xp(c)[a] = b, (a = Op(a, b, c)) && mq(a, c))
    }

    function mq(a, b) {
        if (K("web_csi_via_jspb")) {
            var c = new Tg,
                d = Object.keys(a);
            a = Object.values(a);
            for (var e = 0; e < d.length; e++) switch (d[e]) {
                case "actionType":
                    G(c, 1, T[a[e]]);
                    break;
                case "clientActionNonce":
                    G(c, 2, a[e]);
                    break;
                case "clientScreenNonce":
                    G(c, 4, a[e]);
                    break;
                case "actionVisualElement":
                    H(c, 88, a[e]);
                    break;
                case "loadType":
                    G(c, 3, a[e]);
                    break;
                case "isFirstInstall":
                    G(c, 55, a[e]);
                    break;
                case "networkType":
                    G(c, 5, Pp[a[e]]);
                    break;
                case "connectionType":
                    G(c, 26, U[a[e]]);
                    break;
                case "detailedConnectionType":
                    G(c, 27, W[a[e]]);
                    break;
                case "isVisible":
                    G(c, 6, a[e]);
                    break;
                case "playerType":
                    G(c, 7, Qp[a[e]]);
                    break;
                case "clientPlaybackNonce":
                    G(c, 8, a[e]);
                    break;
                case "adClientPlaybackNonce":
                    G(c, 28, a[e]);
                    break;
                case "previousCpn":
                    G(c, 77, a[e]);
                    break;
                case "targetCpn":
                    G(c, 76, a[e]);
                    break;
                case "isMonetized":
                    G(c, 9, a[e]);
                    break;
                case "isPrerollAllowed":
                    G(c, 16, a[e]);
                    break;
                case "isPrerollShown":
                    G(c, 17, a[e]);
                    break;
                case "adType":
                    G(c, 12, a[e]);
                    break;
                case "adTypesAllowed":
                    G(c, 36, a[e]);
                    break;
                case "adNetworks":
                    G(c, 37, a[e]);
                    break;
                case "previousAction":
                    G(c,
                        13, T[a[e]]);
                    break;
                case "isRedSubscriber":
                    G(c, 14, a[e]);
                    break;
                case "serverTimeMs":
                    G(c, 15, a[e]);
                    break;
                case "spinnerInfo":
                    H(c, 18, a[e]);
                    break;
                case "videoId":
                    c.setVideoId(a[e]);
                    break;
                case "adVideoId":
                    G(c, 20, a[e]);
                    break;
                case "targetVideoId":
                    G(c, 78, a[e]);
                    break;
                case "adBreakType":
                    G(c, 21, Rp[a[e]]);
                    break;
                case "isNavigation":
                    G(c, 25, a[e]);
                    break;
                case "viewportHeight":
                    G(c, 29, a[e]);
                    break;
                case "viewportWidth":
                    G(c, 30, a[e]);
                    break;
                case "screenHeight":
                    G(c, 84, a[e]);
                    break;
                case "screenWidth":
                    G(c, 85, a[e]);
                    break;
                case "browseId":
                    G(c,
                        31, a[e]);
                    break;
                case "isCacheHit":
                    G(c, 32, a[e]);
                    break;
                case "httpProtocol":
                    G(c, 33, a[e]);
                    break;
                case "transportProtocol":
                    G(c, 34, a[e]);
                    break;
                case "searchQuery":
                    G(c, 41, a[e]);
                    break;
                case "isContinuation":
                    G(c, 42, a[e]);
                    break;
                case "availableProcessors":
                    G(c, 43, a[e]);
                    break;
                case "sdk":
                    G(c, 44, a[e]);
                    break;
                case "isLocalStream":
                    G(c, 45, a[e]);
                    break;
                case "navigationRequestedSameUrl":
                    G(c, 64, a[e]);
                    break;
                case "shellStartupDurationMs":
                    G(c, 70, a[e]);
                    break;
                case "appInstallDataAgeMs":
                    G(c, 73, a[e]);
                    break;
                case "latencyActionError":
                    G(c,
                        71, Sp[a[e]]);
                    break;
                case "actionStep":
                    G(c, 79, a[e]);
                    break;
                case "jsHeapSizeLimit":
                    G(c, 80, a[e]);
                    break;
                case "totalJsHeapSize":
                    G(c, 81, a[e]);
                    break;
                case "usedJsHeapSize":
                    G(c, 82, a[e]);
                    break;
                case "resourceInfo":
                    ed(c, 83, Sg, a[e]);
                    break;
                case "sourceVideoDurationMs":
                    G(c, 90, a[e]);
                    break;
                case "playerInfo":
                    H(c, 22, a[e]);
                    break;
                case "commentInfo":
                    H(c, 23, a[e]);
                    break;
                case "mdxInfo":
                    H(c, 24, a[e]);
                    break;
                case "watchInfo":
                    H(c, 35, a[e]);
                    break;
                case "adPrebufferedTimeSecs":
                    G(c, 39, a[e]);
                    break;
                case "thumbnailLoadInfo":
                    H(c, 40, a[e]);
                    break;
                case "creatorInfo":
                    H(c, 46, a[e]);
                    break;
                case "unpluggedInfo":
                    H(c, 50, a[e]);
                    break;
                case "isLivestream":
                    G(c, 47, a[e]);
                    break;
                case "liveStreamMode":
                    G(c, 91, Tp[a[e]]);
                    break;
                case "adCpn2":
                    G(c, 48, a[e]);
                    break;
                case "adDaiDriftMillis":
                    G(c, 49, a[e]);
                    break;
                case "videoStreamType":
                    G(c, 53, Up[a[e]]);
                    break;
                case "reelInfo":
                    H(c, 54, a[e]);
                    break;
                case "subscriptionsFeedInfo":
                    H(c, 72, a[e]);
                    break;
                case "playbackRequiresTap":
                    G(c, 56, a[e]);
                    break;
                case "requestIds":
                    ed(c, 68, Vg, a[e]);
                    break;
                case "mediaBrowserActionInfo":
                    H(c, 58, a[e]);
                    break;
                case "performanceNavigationTiming":
                    G(c, 67, a[e]);
                    break;
                case "musicLoadActionInfo":
                    H(c, 69, a[e]);
                    break;
                case "transactionType":
                    G(c, 74, Vp[a[e]]);
                    break;
                case "shoppingInfo":
                    H(c, 75, a[e]);
                    break;
                case "prefetchInfo":
                    H(c, 86, a[e]);
                    break;
                case "accelerationSession":
                    H(c, 87, a[e]);
                    break;
                case "playerRotationType":
                    G(c, 101, Wp[a[e]]);
                    break;
                case "webInfo":
                    H(c, 38, a[e]);
                    break;
                case "tvInfo":
                    H(c, 51, a[e]);
                    break;
                case "kabukiInfo":
                    H(c, 52, a[e]);
                    break;
                case "mwebInfo":
                    H(c, 59, a[e]);
                    break;
                case "musicInfo":
                    H(c, 65, a[e]);
                    break;
                case "allowedPreroll":
                    G(c, 10, a[e]);
                    break;
                case "shownPreroll":
                    G(c, 11, a[e]);
                    break;
                case "getHomeRequestId":
                    G(c, 57, a[e]);
                    break;
                case "getSearchRequestId":
                    G(c, 60, a[e]);
                    break;
                case "getPlayerRequestId":
                    G(c, 61, a[e]);
                    break;
                case "getWatchNextRequestId":
                    G(c, 62, a[e]);
                    break;
                case "getBrowseRequestId":
                    G(c, 63, a[e]);
                    break;
                case "getLibraryRequestId":
                    G(c, 66, a[e])
            }
            a = yp(b);
            a.jspbInfos || (a.jspbInfos = []);
            a.jspbInfos.push(c);
            Fp(b || "").jspbInfo.push(c);
            a = Ap(b);
            b = vp(b).cttAuthInfo;
            hq().jspbInfo(c, a, b)
        } else c = Fp(b || ""), dp(c.info,
            a), dp(zp(b), a), c = Ap(b), b = vp(b).cttAuthInfo, hq().info(a, c, b)
    }

    function Y(a, b, c) {
        if (!b && "_" !== a[0]) {
            var d = a;
            P.mark && (0 == d.lastIndexOf("mark_", 0) || (d = "mark_" + d), c && (d += " (" + c + ")"), P.mark(d))
        }
        Fp(c || "").tick[a] = b || M();
        d = yp(c);
        d.gelTicks && (d.gelTicks[a] = !0);
        d = qp(c);
        var e = b || M();
        d[a] = e;
        e = Ap(c);
        var f = vp(c).cttAuthInfo;
        if ("_start" === a) {
            var g = hq();
            iq(g, "baseline_" + e) || (b = {
                timestamp: b,
                cttAuthInfo: f
            }, K("web_csi_via_jspb") ? (f = new Rg, G(f, 1, e), e = new Zg, cd(e, 6, f), Zp(e, b)) : Bk("latencyActionBaselined", {
                clientActionNonce: e
            }, b))
        } else hq().tick(a, e, b, f);
        Bp(c);
        return d[a]
    }

    function pq() {
        var a = Ap(void 0);
        requestAnimationFrame(function() {
            setTimeout(function() {
                a === Ap(void 0) && Y("ol", void 0, void 0)
            }, 0)
        })
    }

    function lq() {
        var a = document;
        if ("visibilityState" in a) a = a.visibilityState;
        else {
            var b = Ch + "VisibilityState";
            a = b in a ? a[b] : void 0
        }
        switch (a) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3;
            default:
                return -1
        }
    }

    function oq(a, b) {
        a = document.querySelector(a);
        if (!a) return !1;
        var c = "",
            d = a.nodeName;
        "SCRIPT" === d ? (c = a.src, c || (c = a.getAttribute("data-timing-href")) && (c = window.location.protocol + c)) : "LINK" === d && (c = a.href);
        dc() && a.setAttribute("nonce", dc());
        return c ? (a = P.getEntriesByName(c)) && a[0] && (a = a[0], c = tp(), Y("rsf_" + b, c + Math.round(a.fetchStart)), Y("rse_" + b, c + Math.round(a.responseEnd)), void 0 !== a.transferSize && 0 === a.transferSize) ? !0 : !1 : !1
    }

    function nq() {
        var a = window.location.protocol,
            b = P.getEntriesByType("resource");
        b = db(b, function(c) {
            return 0 === c.name.indexOf(a + "//fonts.gstatic.com/s/")
        });
        (b = fb(b, function(c, d) {
            return d.duration > c.duration ? d : c
        }, {
            duration: 0
        })) && 0 < b.startTime && 0 < b.responseEnd && (Y("wffs", sp(b.startTime)), Y("wffe", sp(b.responseEnd)))
    }
    var qq = window;
    qq.ytcsi && (qq.ytcsi.info = kq, qq.ytcsi.tick = Y);

    function rq(a, b, c, d) {
        this.l = a;
        this.I = b;
        this.j = c;
        this.o = d;
        this.i = void 0;
        this.h = new Map;
        a.Da || (a.Da = {});
        a.Da = Object.assign(Object.assign({}, cp), a.Da)
    }

    function sq(a, b, c, d) {
        if (void 0 !== rq.h) {
            if (d = rq.h, a = [a !== d.l, b !== d.I, c !== d.j, !1, !1, void 0 !== d.i], a.some(function(e) {
                    return e
                })) throw new Ek("InnerTubeTransportService is already initialized", a);
        } else rq.h = new rq(a, b, c, d)
    }

    function tq() {
        var a = rq.h,
            b = {
                signalServiceEndpoint: {
                    signal: "GET_DATASYNC_IDS"
                }
            };
        var c = void 0 === c ? Jo : c;
        var d = Uo(b, a.l);
        if (!d) return Of(new Ek("Error: No request builder found for command.", b));
        var e = d.o(b, void 0, c);
        return e ? new Jf(function(f) {
            var g, h, k;
            return w(function(m) {
                if (1 == m.h) return h = "cors" === (null === (g = e.wa) || void 0 === g ? void 0 : g.mode) ? "cors" : void 0, v(m, uq(a, e.config, h), 2);
                k = m.i;
                f(vq(a, e, k));
                m.h = 0
            })
        }) : Of(new Ek("Error: Failed to build request for command.", b))
    }

    function vq(a, b, c) {
        var d, e, f, g, h, k, m, n, t, y, u, C, D, L, O, R, V;
        return w(function(Z) {
            switch (Z.h) {
                case 1:
                    Z.s(2);
                    break;
                case 3:
                    if ((m = Z.i) && !m.isExpired()) return Z.return(Promise.resolve(m.h()));
                case 2:
                    if ((n = null === (d = b.config) || void 0 === d ? void 0 : d.Bo) && a.h.has(n) && K("web_memoize_inflight_requests")) return Z.return(a.h.get(n));
                    if (null === (e = null === b || void 0 === b ? void 0 : b.aa) || void 0 === e ? 0 : e.context)
                        for (t = q([]), y = t.next(); !y.done; y = t.next()) u = y.value, u.zo(b.aa.context);
                    if (null === (f = a.i) || void 0 === f ? 0 : f.l(b.input,
                            b.aa)) return Z.return(a.i.j(b.input, b.aa));
                    C = JSON.stringify(b.aa);
                    b.wa = Object.assign(Object.assign({}, b.wa), {
                        headers: c
                    });
                    D = Object.assign({}, b.wa);
                    "POST" === b.wa.method && (D = Object.assign(Object.assign({}, D), {
                        body: C
                    }));
                    (null === (g = b.config) || void 0 === g ? 0 : g.nc) && Y(b.config.nc);
                    L = a.I.fetch(b.input, D, b.config);
                    n && a.h.set(n, L);
                    return v(Z, L, 4);
                case 4:
                    O = Z.i;
                    n && a.h.has(n) && a.h.delete(n);
                    (null === (h = b.config) || void 0 === h ? 0 : h.oc) && Y(b.config.oc);
                    if (O || null === (k = a.i) || void 0 === k || !k.h(b.input, b.aa)) {
                        Z.s(5);
                        break
                    }
                    return v(Z,
                        a.i.i(b.input, b.aa), 6);
                case 6:
                    O = Z.i;
                case 5:
                    if (O && a.o)
                        for (R = q(a.o), y = R.next(); !y.done; y = R.next()) V = y.value, V.handleResponse(O, b);
                    return Z.return(O)
            }
        })
    }

    function uq(a, b, c) {
        return w(function(d) {
            if (a.j.Cc) {
                var e = d.return,
                    f, g = null === (f = null === b || void 0 === b ? void 0 : b.Ka) || void 0 === f ? void 0 : f.sessionIndex;
                f = Io({
                    sessionIndex: g
                });
                f = Object.assign(Object.assign({}, wq(c)), f);
                d = e.call(d, f)
            } else d = d.return(xq(b, c));
            return d
        })
    }

    function xq(a, b) {
        var c, d, e;
        return w(function(f) {
            if (1 == f.h) {
                d = null === (c = null === a || void 0 === a ? void 0 : a.Ka) || void 0 === c ? void 0 : c.sessionIndex;
                var g = Io({
                    sessionIndex: d
                });
                if (!(g instanceof Jf)) {
                    var h = new Jf(Ja);
                    Kf(h, 2, g);
                    g = h
                }
                return v(f, g, 2)
            }
            e = f.i;
            return f.return(Promise.resolve(Object.assign(Object.assign({}, wq(b)), e)))
        })
    }

    function wq(a) {
        var b = {
                "Content-Type": "application/json"
            },
            c = B("VISITOR_DATA");
        c && (b["X-Goog-Visitor-Id"] = c);
        "cors" !== a && ((a = B("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = B("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = B("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), K("forward_domain_admin_state_on_embeds") && (a = B("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
        return b
    };
    var yq = ["share/get_web_player_share_panel"],
        zq = ["feedback"],
        Aq = ["notification/modify_channel_preference"],
        Bq = ["browse/edit_playlist"],
        Cq = ["subscription/subscribe"],
        Dq = ["subscription/unsubscribe"];

    function Eq() {}
    r(Eq, $o);
    Eq.prototype.j = function() {
        return Cq
    };
    Eq.prototype.h = function(a) {
        return a.subscribeEndpoint
    };
    Eq.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        b.channelIds && (a.channelIds = b.channelIds);
        b.siloName && (a.siloName = b.siloName);
        b.params && (a.params = b.params);
        c.botguardResponse && (a.botguardResponse = c.botguardResponse);
        c.feature && (a.clientFeature = c.feature)
    };
    da.Object.defineProperties(Eq.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Fq() {}
    r(Fq, $o);
    Fq.prototype.j = function() {
        return Dq
    };
    Fq.prototype.h = function(a) {
        return a.unsubscribeEndpoint
    };
    Fq.prototype.i = function(a, b) {
        b.channelIds && (a.channelIds = b.channelIds);
        b.siloName && (a.siloName = b.siloName);
        b.params && (a.params = b.params)
    };
    da.Object.defineProperties(Fq.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Gq() {}
    r(Gq, $o);
    Gq.prototype.j = function() {
        return zq
    };
    Gq.prototype.h = function(a) {
        return a.feedbackEndpoint
    };
    Gq.prototype.i = function(a, b, c) {
        a.feedbackTokens = [];
        b.feedbackToken && a.feedbackTokens.push(b.feedbackToken);
        if (b = b.cpn || c.cpn) a.feedbackContext = {
            cpn: b
        };
        a.isFeedbackTokenUnencrypted = !!c.is_feedback_token_unencrypted;
        a.shouldMerge = !1;
        c.extra_feedback_tokens && (a.shouldMerge = !0, a.feedbackTokens = a.feedbackTokens.concat(c.extra_feedback_tokens))
    };
    da.Object.defineProperties(Gq.prototype, {
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });

    function Hq() {}
    r(Hq, $o);
    Hq.prototype.j = function() {
        return Aq
    };
    Hq.prototype.h = function(a) {
        return a.modifyChannelNotificationPreferenceEndpoint
    };
    Hq.prototype.i = function(a, b) {
        b.params && (a.params = b.params);
        b.secondaryParams && (a.secondaryParams = b.secondaryParams)
    };

    function Iq() {}
    r(Iq, $o);
    Iq.prototype.j = function() {
        return Bq
    };
    Iq.prototype.h = function(a) {
        return a.playlistEditEndpoint
    };
    Iq.prototype.i = function(a, b) {
        b.actions && (a.actions = b.actions);
        b.params && (a.params = b.params);
        b.playlistId && (a.playlistId = b.playlistId)
    };

    function Jq() {}
    r(Jq, $o);
    Jq.prototype.j = function() {
        return yq
    };
    Jq.prototype.h = function(a) {
        return a.webPlayerShareEntityServiceEndpoint
    };
    Jq.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        b.serializedShareEntity && (a.serializedSharedEntity = b.serializedShareEntity);
        c.includeListId && (a.includeListId = !0)
    };

    function Kq() {}
    Kq.prototype.fetch = function(a, b) {
        var c = this,
            d, e, f;
        return w(function(g) {
            if (1 == g.h) {
                d = new window.Request(a, b);
                if (K("web_fetch_promise_cleanup_killswitch")) return g.return(Promise.resolve(fetch(d).then(function(h) {
                    return c.handleResponse(h)
                }).catch(function(h) {
                    Sn(h)
                })));
                ta(g, 3);
                return v(g, fetch(d), 5)
            }
            if (3 != g.h) return e = g.i, g.return(c.handleResponse(e));
            f = va(g);
            Sn(f);
            return g.return(void 0)
        })
    };
    Kq.prototype.handleResponse = function(a) {
        var b = a.text().then(function(c) {
            return JSON.parse(c.replace(")]}'", ""))
        });
        a.redirected || a.ok || (b = b.then(function(c) {
            Sn(new Ek("Error: API fetch failed", a.status, a.url, c));
            return Object.assign(Object.assign({}, c), {
                errorMetadata: {
                    status: a.status
                }
            })
        }));
        return b
    };
    var Lq;

    function Mq(a) {
        fm.call(this, 1, arguments);
        this.csn = a
    }
    r(Mq, fm);
    var om = new gm("screen-created", Mq),
        Nq = [],
        Pq = Oq,
        Qq = 0;

    function Rq(a, b, c, d, e, f, g) {
        function h() {
            Sn(new Ek("newScreen() parent element does not have a VE - rootVe", b))
        }
        var k = Pq();
        f = eo(b, f);
        e = {
            cttAuthInfo: e,
            W: k
        };
        if (K("il_via_jspb")) {
            var m = new Hg;
            m.X(k);
            Ig(m, f.getAsJspb());
            c && c.visualElement ? (f = new Jg, c.clientScreenNonce && G(f, 2, c.clientScreenNonce), Kg(f, c.visualElement.getAsJspb()), g && G(f, 4, Gg[g]), H(m, 5, f)) : c && h();
            d && G(m, 3, d);
            dq(m, e, a)
        } else f = {
            csn: k,
            pageVe: f.getAsJson()
        }, c && c.visualElement ? (f.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (f.implicitGesture.gestureType = g)) : c && h(), d && (f.cloneCsn = d), a ? Kj("screenCreated", f,
            a, e) : Bk("screenCreated", f, e);
        lm(om, new Mq(k));
        return k
    }

    function Sq(a, b, c, d) {
        var e = d.filter(function(k) {
                k.csn !== b ? (k.csn = b, k = !0) : k = !1;
                return k
            }),
            f = {
                cttAuthInfo: mo(b),
                W: b
            };
        d = q(d);
        for (var g = d.next(); !g.done; g = d.next()) g = g.value.getAsJson(), (ob(g) || !g.trackingParams && !g.veType) && Sn(Error("Child VE logged with no data"));
        if (K("il_via_jspb")) {
            var h = new Lg;
            h.X(b);
            Ng(h, c.getAsJspb());
            eb(e, function(k) {
                k = k.getAsJspb();
                ed(h, 3, Fg, k)
            });
            "UNDEFINED_CSN" == b ? Tq("visualElementAttached", h, f) : eq(h, f, a)
        } else c = {
            csn: b,
            parentVe: c.getAsJson(),
            childVes: eb(e, function(k) {
                return k.getAsJson()
            })
        }, "UNDEFINED_CSN" == b ? Tq("visualElementAttached", c, f) : a ? Kj("visualElementAttached", c, a, f) : Bk("visualElementAttached", c, f)
    }

    function Oq() {
        for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Kc(b, 3)
    }

    function Tq(a, b, c) {
        Nq.push({
            payloadName: a,
            payload: b,
            options: c
        });
        Qq || (Qq = pm())
    }

    function qm(a) {
        if (Nq) {
            for (var b = q(Nq), c = b.next(); !c.done; c = b.next())
                if (c = c.value, c.payload)
                    if (K("il_via_jspb")) switch (c.payload.X(a.csn), c.payloadName) {
                        case "screenCreated":
                            dq(c.payload, c.options);
                            break;
                        case "visualElementAttached":
                            eq(c.payload, c.options);
                            break;
                        case "visualElementShown":
                            $p(c.payload, c.options);
                            break;
                        case "visualElementHidden":
                            aq(c.payload, c.options);
                            break;
                        case "visualElementGestured":
                            bq(c.payload, c.options);
                            break;
                        case "visualElementStateChanged":
                            cq(c.payload, c.options);
                            break;
                        default:
                            Sn(new Ek("flushQueue unable to map payloadName to JSPB setter"))
                    } else c.payload.csn =
                        a.csn, Kj(c.payloadName, c.payload, null, c.options);
            Nq.length = 0
        }
        Qq = 0
    };

    function Uq() {
        this.i = new Set;
        this.h = new Set;
        this.j = new Map
    }
    Uq.prototype.clear = function() {
        this.i.clear();
        this.h.clear();
        this.j.clear()
    };
    Ka(Uq);

    function Vq() {
        this.o = [];
        this.D = [];
        this.h = [];
        this.l = [];
        this.m = [];
        this.i = new Set;
        this.u = new Map
    }

    function Wq(a, b, c) {
        c = void 0 === c ? 0 : c;
        b.then(function(d) {
            var e, f;
            a.i.has(c) && a.j && a.j();
            var g = ko(c),
                h = io(c);
            g && h && ((null === (e = null === d || void 0 === d ? void 0 : d.response) || void 0 === e ? 0 : e.trackingParams) && Sq(a.client, g, h, [co(d.response.trackingParams)]), (null === (f = null === d || void 0 === d ? void 0 : d.playerResponse) || void 0 === f ? 0 : f.trackingParams) && Sq(a.client, g, h, [co(d.playerResponse.trackingParams)]))
        })
    }

    function Xq(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        if (a.i.has(d)) a.o.push([b, c]);
        else {
            var e = ko(d);
            c = c || io(d);
            e && c && Sq(a.client, e, c, [b])
        }
    }
    Vq.prototype.clickCommand = function(a, b, c) {
        var d = a.clickTrackingParams;
        c = void 0 === c ? 0 : c;
        if (d)
            if (c = ko(void 0 === c ? 0 : c)) {
                a = this.client;
                var e = co(d);
                var f = "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
                d = {
                    cttAuthInfo: mo(c),
                    W: c
                };
                K("il_via_jspb") ? (b = new Og, b.X(c), e = e.getAsJspb(), H(b, 2, e), G(b, 4, Gg[f]), "UNDEFINED_CSN" == c ? Tq("visualElementGestured", b, d) : bq(b, d, a)) : (f = {
                    csn: c,
                    ve: e.getAsJson(),
                    gestureType: f
                }, b && (f.clientData = b), "UNDEFINED_CSN" == c ? Tq("visualElementGestured", f, d) : a ? Kj("visualElementGestured", f,
                    a, d) : Bk("visualElementGestured", f, d));
                b = !0
            } else b = !1;
        else b = !1;
        return b
    };

    function Yq(a, b, c) {
        c = void 0 === c ? {} : c;
        a.i.add(c.layer || 0);
        a.j = function() {
            Zq(a, b, c);
            var f = io(c.layer);
            if (f) {
                for (var g = q(a.o), h = g.next(); !h.done; h = g.next()) h = h.value, Xq(a, h[0], h[1] || f, c.layer);
                f = q(a.D);
                for (g = f.next(); !g.done; g = f.next()) {
                    var k = g.value;
                    g = void 0;
                    g = void 0 === g ? 0 : g;
                    h = ko(g);
                    var m = k[0] || io(g);
                    if (h && m) {
                        g = a.client;
                        var n = k[1];
                        k = {
                            cttAuthInfo: mo(h),
                            W: h
                        };
                        K("il_via_jspb") ? (n = new Qg, n.X(h), m = m.getAsJspb(), H(n, 2, m), "UNDEFINED_CSN" == h ? Tq("visualElementStateChanged", n, k) : cq(n, k, g)) : (m = {
                            csn: h,
                            ve: m.getAsJson(),
                            clientData: n
                        }, "UNDEFINED_CSN" == h ? Tq("visualElementStateChanged", m, k) : g ? Kj("visualElementStateChanged", m, g, k) : Bk("visualElementStateChanged", m, k))
                    }
                }
            }
        };
        ko(c.layer) || a.j();
        if (c.wb)
            for (var d = q(c.wb), e = d.next(); !e.done; e = d.next()) Wq(a, e.value, c.layer);
        else Rn(Error("Delayed screen needs a data promise."))
    }

    function Zq(a, b, c) {
        c = void 0 === c ? {} : c;
        c.layer || (c.layer = 0);
        var d = void 0 !== c.jc ? c.jc : c.layer;
        var e = ko(d);
        d = io(d);
        var f;
        d && (void 0 !== c.parentCsn ? f = {
            clientScreenNonce: c.parentCsn,
            visualElement: d
        } : e && "UNDEFINED_CSN" !== e && (f = {
            clientScreenNonce: e,
            visualElement: d
        }));
        var g, h = B("EVENT_ID");
        "UNDEFINED_CSN" === e && h && (g = {
            servletData: {
                serializedServletEventId: h
            }
        });
        try {
            var k = Rq(a.client, b, f, c.vb, c.cttAuthInfo, g, c.to)
        } catch (m) {
            Tn(m, {
                Co: b,
                rootVe: d,
                parentVisualElement: void 0,
                qo: e,
                yo: f,
                vb: c.vb
            });
            Rn(m);
            return
        }
        no(k, b,
            c.layer, c.cttAuthInfo);
        if ((b = e && "UNDEFINED_CSN" !== e && d) && !(b = K("screen_manager_skip_hide_killswitch"))) {
            a: {
                b = q(Object.values(ao));
                for (f = b.next(); !f.done; f = b.next())
                    if (ko(f.value) == e) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            b = !b
        }
        b && (b = a.client, g = !0, h = (g = void 0 === g ? !1 : g) ? 16 : 8, f = {
            cttAuthInfo: mo(e),
            W: e,
            yb: g
        }, K("il_via_jspb") ? (h = new Pg, h.X(e), d = d.getAsJspb(), H(h, 2, d), G(h, 4, g ? 16 : 8), "UNDEFINED_CSN" == e ? Tq("visualElementHidden", h, f) : aq(h, f, b)) : (d = {
            csn: e,
            ve: d.getAsJson(),
            eventType: h
        }, "UNDEFINED_CSN" == e ? Tq("visualElementHidden",
            d, f) : b ? Kj("visualElementHidden", d, b, f) : Bk("visualElementHidden", d, f)));
        a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
        mq({
            clientScreenNonce: k
        });
        Uq.getInstance().clear();
        d = io(c.layer);
        e && "UNDEFINED_CSN" !== e && d && (K("web_mark_root_visible") || K("music_web_mark_root_visible")) && (e = k, k = {
            cttAuthInfo: mo(e),
            W: e
        }, K("il_via_jspb") ? (b = new Pg, b.X(e), f = d.getAsJspb(), H(b, 2, f), G(b, 4, 1), "UNDEFINED_CSN" == e ? Tq("visualElementShown", b, k) : $p(b, k, void 0)) : (b = {
                csn: e,
                ve: d.getAsJson(),
                eventType: 1
            },
            "UNDEFINED_CSN" == e ? Tq("visualElementShown", b, k) : Bk("visualElementShown", b, k)));
        a.i.delete(c.layer || 0);
        a.j = void 0;
        e = q(a.u);
        for (k = e.next(); !k.done; k = e.next()) b = q(k.value), k = b.next().value, b = b.next().value, b.has(c.layer) && d && Xq(a, k, d, c.layer);
        for (c = 0; c < a.l.length; c++) {
            e = a.l[c];
            try {
                e()
            } catch (m) {
                Rn(m)
            }
        }
        for (c = a.l.length = 0; c < a.m.length; c++) {
            e = a.m[c];
            try {
                e()
            } catch (m) {
                Rn(m)
            }
        }
    };

    function $q() {
        var a;
        return w(function(b) {
            if (1 == b.h) return v(b, tq(), 2);
            if (a = b.i) return a.errorMetadata ? (Rn(Error("Datasync IDs fetch responded with " + a.errorMetadata.code + ": " + a.error)), b.return(void 0)) : b.return(a.ro);
            Sn(Error("Network request to get Datasync IDs failed."));
            return b.return(void 0)
        })
    };
    var ar = x.caches,
        br;

    function cr(a) {
        var b = a.indexOf(":");
        return -1 === b ? {
            Gb: a
        } : {
            Gb: a.substring(0, b),
            datasyncId: a.substring(b + 1)
        }
    }

    function dr() {
        return w(function(a) {
            if (void 0 !== br) return a.return(br);
            br = new Promise(function(b) {
                var c;
                return w(function(d) {
                    switch (d.h) {
                        case 1:
                            return ta(d, 2), v(d, ar.open("test-only"), 4);
                        case 4:
                            return v(d, ar.delete("test-only"), 5);
                        case 5:
                            ua(d, 3);
                            break;
                        case 2:
                            if (c = va(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return();
                        case 3:
                            b("caches" in window), d.h = 0
                    }
                })
            });
            return a.return(br)
        })
    }

    function er(a) {
        var b, c, d, e, f, g, h;
        w(function(k) {
            if (1 == k.h) return v(k, dr(), 2);
            if (3 != k.h) {
                if (!k.i) return k.return(!1);
                b = [];
                return v(k, ar.keys(), 3)
            }
            c = k.i;
            d = q(c);
            for (e = d.next(); !e.done; e = d.next()) f = e.value, g = cr(f), h = g.datasyncId, !h || a.includes(h) || b.push(ar.delete(f));
            return k.return(Promise.all(b).then(function(m) {
                return m.some(function(n) {
                    return n
                })
            }))
        })
    };

    function fr() {
        $q().then(function(a) {
            if (a && (Pl(a), er(a), K("clear_user_partitioned_ls"))) {
                var b = void 0 === b ? {} : b;
                "_start" in qp("cupls") && Y("aa", void 0, "cupls");
                var c = Gp();
                c.cupls && delete c.cupls;
                var d = {
                    timerName: "cupls",
                    info: {},
                    tick: {},
                    span: {},
                    jspbInfo: []
                };
                Ep().push(d);
                c.cupls = d;
                wp("cupls");
                op();
                vp("cupls").useGel = !0;
                Fp("cupls").info.actionType = "cupls";
                b.cttAuthInfo && (vp("cupls").cttAuthInfo = b.cttAuthInfo);
                th("cuplsTIMING_ACTION", "cupls");
                Y("_start", b.startTime, "cupls");
                b = {
                    actionType: Np("cupls")
                };
                (c =
                    ko()) && "UNDEFINED_CSN" !== c && (b.clientScreenNonce = c);
                mq(b, "cupls");
                up("cupls");
                Y("cuplss", void 0, "cupls");
                try {
                    try {
                        var e = !!self.localStorage
                    } catch (t) {
                        e = !1
                    }
                    if (e)
                        for (var f = Object.keys(window.localStorage), g = q(f), h = g.next(); !h.done; h = g.next()) {
                            var k = h.value;
                            var m = k.match(/(.*)::.*::.*/);
                            var n = null !== m ? m[1] : void 0;
                            e = n;
                            void 0 === e || a.includes(e) || self.localStorage.removeItem(k)
                        }
                    Y("cuplsc", void 0, "cupls")
                } catch (t) {
                    Rn(t), Y("cuplse", void 0, "cupls")
                }
            }
        })
    }

    function gr() {
        var a = new Wm;
        ai.M(function() {
            a.G() ? fr() : a.i.add("publicytnetworkstatus-online", fr, !0, void 0, void 0)
        })
    };

    function hr(a) {
        a && (a.dataset ? a.dataset[ir("loaded")] = "true" : a.setAttribute("data-loaded", "true"))
    }

    function jr(a, b) {
        return a ? a.dataset ? a.dataset[ir(b)] : a.getAttribute("data-" + b) : null
    }
    var kr = {};

    function ir(a) {
        return kr[a] || (kr[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    var lr = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        mr = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

    function nr(a, b, c) {
        c = void 0 === c ? null : c;
        if (window.spf && spf.script) {
            c = "";
            if (a) {
                var d = a.indexOf("jsbin/"),
                    e = a.lastIndexOf(".js"),
                    f = d + 6; - 1 < d && -1 < e && e > f && (c = a.substring(f, e), c = c.replace(lr, ""), c = c.replace(mr, ""), c = c.replace("debug-", ""), c = c.replace("tracing-", ""))
            }
            spf.script.load(a, c, b)
        } else or(a, b, c)
    }

    function or(a, b, c) {
        c = void 0 === c ? null : c;
        var d = pr(a),
            e = document.getElementById(d),
            f = e && jr(e, "loaded"),
            g = e && !f;
        f ? b && b() : (b && (f = Xi(d, b), b = "" + Oa(b), qr[b] = f), g || (e = rr(a, d, function() {
            jr(e, "loaded") || (hr(e), $i(d), Rh(Ua(aj, d), 0))
        }, c)))
    }

    function rr(a, b, c, d) {
        d = void 0 === d ? null : d;
        var e = xd(document, "SCRIPT");
        e.id = b;
        e.onload = function() {
            c && setTimeout(c, 0)
        };
        e.onreadystatechange = function() {
            switch (e.readyState) {
                case "loaded":
                case "complete":
                    e.onload()
            }
        };
        d && e.setAttribute("nonce", d);
        qd(e, Af(a));
        a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(e, a.firstChild);
        return e
    }

    function sr(a) {
        a = pr(a);
        var b = document.getElementById(a);
        b && (aj(a), b.parentNode.removeChild(b))
    }

    function tr(a, b) {
        a && b && (a = "" + Oa(b), (a = qr[a]) && Zi(a))
    }

    function pr(a) {
        var b = document.createElement("a");
        ac(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + fc(a)
    }
    var qr = {};
    var ur = [],
        vr = !1;

    function wr() {
        if (!K("disable_biscotti_fetch_for_ad_blocker_detection") && !K("disable_biscotti_fetch_entirely_for_all_web_clients") && yo() && "1" != qb()) {
            var a = function() {
                vr = !0;
                "google_ad_status" in window ? th("DCLKSTAT", 1) : th("DCLKSTAT", 2)
            };
            try {
                nr("//static.doubleclick.net/instream/ad_status.js", a)
            } catch (b) {}
            ur.push(ai.M(function() {
                if (!(vr || "google_ad_status" in window)) {
                    try {
                        tr("//static.doubleclick.net/instream/ad_status.js", a)
                    } catch (b) {}
                    vr = !0;
                    th("DCLKSTAT", 3)
                }
            }, 5E3))
        }
    }

    function xr() {
        var a = Number(B("DCLKSTAT", 0));
        return isNaN(a) ? 0 : a
    };

    function yr() {
        this.state = 1;
        this.h = null
    }
    l = yr.prototype;
    l.initialize = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e, f;
        if (a.program) {
            var g = null !== (e = a.interpreterScript) && void 0 !== e ? e : null,
                h = null !== (f = a.interpreterUrl) && void 0 !== f ? f : null;
            if (a.interpreterSafeScript) {
                g = a.interpreterSafeScript;
                Ab("From proto message. b/166824318");
                g = g.privateDoNotAccessOrElseSafeScriptWrappedValue || "";
                var k = xb();
                g = k ? k.createScript(g) : g;
                g = (new Cb(g)).toString()
            }
            a.interpreterSafeUrl && (h = a.interpreterSafeUrl, Ab("From proto message. b/166824318"), h = Gb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue || "").toString());
            zr(this, g, h, a.program, b, c, d)
        } else Sn(Error("Cannot initialize botguard without program"))
    };

    function zr(a, b, c, d, e, f, g) {
        g = void 0 === g ? !1 : g;
        c ? (a.state = 2, nr(c, function() {
            var h = 0 <= c.indexOf("/th/");
            (h ? window.trayride : window.botguard) ? Ar(a, d, !!g, h, e): (a.state = 3, sr(c), Sn(new Ek("Unable to load Botguard", "from " + c)))
        }, f)) : b && (f = xd(document, "SCRIPT"), f.textContent = b, f.nonce = dc(), document.head.appendChild(f), document.head.removeChild(f), ((b = b.includes("trayride")) ? window.trayride : window.botguard) ? Ar(a, d, !!g, b, e) : (a.state = 4, Sn(Error("Unable to load Botguard from JS"))))
    }
    l.isInitialized = function() {
        return !!this.h
    };
    l.getState = function() {
        return this.state
    };

    function Ar(a, b, c, d, e) {
        var f, g;
        a.state = 5;
        if (K("use_bg_facade"))
            if (c = d ? "trayride" : "botguard", window[c]) try {
                var h = new jd({
                    program: b,
                    globalName: c
                });
                h.zc.then(function() {
                    a.state = 6;
                    e && e(b)
                });
                Br(a, h)
            } catch (k) {
                k instanceof Error && (a.state = 7, Sn(k))
            } else a.state = 7, Sn(Error("VM not loaded, cannot start"));
            else if (h = d ? null === (f = window.trayride) || void 0 === f ? void 0 : f.ad : null === (g = window.botguard) || void 0 === g ? void 0 : g.bg)
            if (c) try {
                Br(a, new h(b, function() {
                    a.state = 6;
                    e && e(b)
                }))
            } catch (k) {
                a.state = 7, k instanceof Error && Sn(k)
            } else {
                try {
                    Br(a, new h(b)), a.state = 6
                } catch (k) {
                    a.state = 7, k instanceof Error && Sn(k)
                }
                e && e(b)
            } else a.state = 7, Sn(Error("Failed to finish initializing VM"))
    }
    l.invoke = function(a) {
        a = void 0 === a ? {} : a;
        if (this.h) {
            if (this.h.Nb) return this.h.Nb({
                ub: a
            });
            if (this.h.hot) return this.h.hot(void 0, void 0, a);
            if (this.h.invoke) return this.h.invoke(void 0, void 0, a);
            Sn(Error("VM has unknown interface"))
        }
        return null
    };
    l.dispose = function() {
        Br(this, null);
        this.state = 8
    };

    function Br(a, b) {
        $d(a.h);
        a.h = b
    };
    var Cr = new yr;

    function Dr() {
        return Cr.isInitialized()
    }

    function Er(a) {
        a = void 0 === a ? {} : a;
        return Cr.invoke(a)
    };

    function Fr(a) {
        var b = this;
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? $h() : d;
        this.l = c;
        this.j = d;
        this.i = new id;
        this.h = a;
        a = {};
        c = q(this.h.entries());
        for (d = c.next(); !d.done; a = {
                xa: a.xa,
                Fa: a.Fa
            }, d = c.next()) {
            var e = q(d.value);
            d = e.next().value;
            e = e.next().value;
            a.Fa = d;
            a.xa = e;
            d = function(f) {
                return function() {
                    f.xa.jb();
                    b.h[f.Fa].Va = !0;
                    b.h.every(function(g) {
                        return !0 === g.Va
                    }) && b.i.resolve()
                }
            }(a);
            e = Wh(d, Gr(this, a.xa));
            this.h[a.Fa] = Object.assign(Object.assign({}, a.xa), {
                jb: d,
                Qa: e
            })
        }
    }

    function Hr(a) {
        var b = Array.from(a.h.keys()).sort(function(d, e) {
            return Gr(a, a.h[e]) - Gr(a, a.h[d])
        });
        b = q(b);
        for (var c = b.next(); !c.done; c = b.next()) c = a.h[c.value], void 0 === c.Qa || c.Va || (a.j.U(c.Qa), Wh(c.jb, 10))
    }
    Fr.prototype.cancel = function() {
        for (var a = q(this.h), b = a.next(); !b.done; b = a.next()) b = b.value, void 0 === b.Qa || b.Va || this.j.U(b.Qa), b.Va = !0;
        this.i.resolve()
    };

    function Gr(a, b) {
        var c;
        return null !== (c = b.priority) && void 0 !== c ? c : a.l
    };

    function Ir(a) {
        this.state = a;
        this.plugins = [];
        this.m = void 0
    }
    Ir.prototype.install = function() {
        this.plugins.push.apply(this.plugins, ia(Ea.apply(0, arguments)))
    };
    Ir.prototype.transition = function(a, b) {
        var c = this,
            d = this.D.find(function(f) {
                return f.from === c.state && f.B === a
            });
        if (d) {
            this.j && (Hr(this.j), this.j = void 0);
            this.state = a;
            d = d.action.bind(this);
            var e = this.plugins.filter(function(f) {
                return f[a]
            }).map(function(f) {
                return f[a]
            });
            d(Jr(this, e, this.m), b)
        } else throw Error("no transition specified from " + this.state + " to " + a);
    };

    function Jr(a, b, c) {
        return function() {
            var d = Ea.apply(0, arguments),
                e = b.filter(function(k) {
                    var m;
                    return 10 === (null !== (m = null !== c && void 0 !== c ? c : k.priority) && void 0 !== m ? m : 0)
                }),
                f = b.filter(function(k) {
                    var m;
                    return 10 !== (null !== (m = null !== c && void 0 !== c ? c : k.priority) && void 0 !== m ? m : 0)
                });
            $h();
            var g = {};
            e = q(e);
            for (var h = e.next(); !h.done; g = {
                    Ga: g.Ga
                }, h = e.next()) g.Ga = h.value, Yh(function(k) {
                return function() {
                    k.Ga.na.apply(k.Ga, ia(d))
                }
            }(g));
            f = f.map(function(k) {
                var m;
                return {
                    jb: function() {
                        k.na.apply(k, ia(d))
                    },
                    priority: null !== (m = null !== c && void 0 !== c ? c : k.priority) && void 0 !== m ? m : 0
                }
            });
            f.length && (a.j = new Fr(f))
        }
    }
    da.Object.defineProperties(Ir.prototype, {
        currentState: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.state
            }
        }
    });

    function Kr(a) {
        Ir.call(this, void 0 === a ? "document_active" : a);
        var b = this;
        this.m = 10;
        this.h = new Map;
        this.D = [{
                from: "document_active",
                B: "document_disposed_preventable",
                action: this.u
            }, {
                from: "document_active",
                B: "document_disposed",
                action: this.l
            }, {
                from: "document_disposed_preventable",
                B: "document_disposed",
                action: this.l
            }, {
                from: "document_disposed_preventable",
                B: "flush_logs",
                action: this.o
            }, {
                from: "document_disposed_preventable",
                B: "document_active",
                action: this.i
            }, {
                from: "document_disposed",
                B: "flush_logs",
                action: this.o
            },
            {
                from: "document_disposed",
                B: "document_active",
                action: this.i
            }, {
                from: "document_disposed",
                B: "document_disposed",
                action: function() {}
            },
            {
                from: "flush_logs",
                B: "document_active",
                action: this.i
            }
        ];
        window.addEventListener("pagehide", function(c) {
            b.transition("document_disposed", c)
        });
        window.addEventListener("beforeunload", function(c) {
            b.transition("document_disposed_preventable", c)
        });
        K("teardown_lifecycle_skip_unload") || window.addEventListener("unload", function(c) {
            b.transition("document_disposed", c);
            b.h = new Map
        })
    }
    r(Kr, Ir);
    Kr.prototype.u = function(a, b) {
        if (!this.h.get("document_disposed_preventable") && (a(b), (null === b || void 0 === b ? 0 : b.defaultPrevented) || (null === b || void 0 === b ? 0 : b.returnValue))) {
            b.returnValue || (b.returnValue = !0);
            b.defaultPrevented || b.preventDefault();
            this.h = new Map;
            this.transition("document_active");
            return
        }
        this.h.set("document_disposed_preventable", !0);
        this.h.get("document_disposed") ? this.transition("flush_logs") : this.transition("document_disposed")
    };
    Kr.prototype.l = function(a, b) {
        this.h.get("document_disposed") ? this.transition("document_active") : (a(b), this.h.set("document_disposed", !0), this.transition("flush_logs"))
    };
    Kr.prototype.o = function(a, b) {
        a(b);
        this.transition("document_active")
    };
    Kr.prototype.i = function() {
        K("teardown_lifecycle_skip_unload") && (this.h = new Map)
    };

    function Lr(a) {
        Ir.call(this, void 0 === a ? "document_visibility_unknown" : a);
        var b = this;
        this.D = [{
                from: "document_visibility_unknown",
                B: "document_visible",
                action: this.i
            }, {
                from: "document_visibility_unknown",
                B: "document_hidden",
                action: this.h
            }, {
                from: "document_visibility_unknown",
                B: "document_foregrounded",
                action: this.o
            }, {
                from: "document_visibility_unknown",
                B: "document_backgrounded",
                action: this.l
            }, {
                from: "document_visible",
                B: "document_hidden",
                action: this.h
            }, {
                from: "document_visible",
                B: "document_foregrounded",
                action: this.o
            },
            {
                from: "document_visible",
                B: "document_visible",
                action: this.i
            }, {
                from: "document_foregrounded",
                B: "document_visible",
                action: this.i
            }, {
                from: "document_foregrounded",
                B: "document_hidden",
                action: this.h
            }, {
                from: "document_foregrounded",
                B: "document_foregrounded",
                action: this.o
            }, {
                from: "document_hidden",
                B: "document_visible",
                action: this.i
            }, {
                from: "document_hidden",
                B: "document_backgrounded",
                action: this.l
            }, {
                from: "document_hidden",
                B: "document_hidden",
                action: this.h
            }, {
                from: "document_backgrounded",
                B: "document_hidden",
                action: this.h
            },
            {
                from: "document_backgrounded",
                B: "document_backgrounded",
                action: this.l
            }, {
                from: "document_backgrounded",
                B: "document_visible",
                action: this.i
            }
        ];
        document.addEventListener("visibilitychange", function(c) {
            "visible" === document.visibilityState ? b.transition("document_visible", c) : b.transition("document_hidden", c)
        });
        K("visibility_lifecycles_dynamic_backgrounding") && (window.addEventListener("blur", function(c) {
            b.transition("document_backgrounded", c)
        }), window.addEventListener("focus", function(c) {
            b.transition("document_foregrounded", c)
        }))
    }
    r(Lr, Ir);
    Lr.prototype.i = function(a, b) {
        a(b);
        K("visibility_lifecycles_dynamic_backgrounding") && this.transition("document_foregrounded")
    };
    Lr.prototype.h = function(a, b) {
        a(b);
        K("visibility_lifecycles_dynamic_backgrounding") && this.transition("document_backgrounded")
    };
    Lr.prototype.l = function(a, b) {
        a(b)
    };
    Lr.prototype.o = function(a, b) {
        a(b)
    };

    function Mr() {
        this.h = new Kr;
        this.i = new Lr
    }
    Mr.prototype.install = function() {
        var a = Ea.apply(0, arguments);
        this.h.install.apply(this.h, ia(a));
        this.i.install.apply(this.i, ia(a))
    };

    function Nr() {
        Mr.call(this);
        var a = {};
        this.install((a.document_disposed = {
            na: this.j
        }, a));
        a = {};
        this.install((a.flush_logs = {
            na: this.l
        }, a))
    }
    var Or;
    r(Nr, Mr);
    Nr.prototype.l = function() {
        Bk("finalPayload", {
            csn: ko()
        })
    };
    Nr.prototype.j = function() {
        Vn(Wn)
    };

    function Pr() {}
    Pr.getInstance = function() {
        var a = A("ytglobal.storage_");
        a || (a = new Pr, z("ytglobal.storage_", a, void 0));
        return a
    };
    Pr.prototype.estimate = function() {
        var a, b, c;
        return w(function(d) {
            c = navigator;
            return (null === (a = c.storage) || void 0 === a ? 0 : a.estimate) ? d.return(c.storage.estimate()) : (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota) ? d.return(Qr()) : d.return()
        })
    };

    function Qr() {
        var a = navigator;
        return new Promise(function(b, c) {
            var d;
            null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota(function(e, f) {
                b({
                    usage: e,
                    quota: f
                })
            }, function(e) {
                c(e)
            }) : c(Error("webkitTemporaryStorage is not supported."))
        })
    }
    z("ytglobal.storageClass_", Pr, void 0);

    function zk(a, b) {
        var c = this;
        this.handleError = a;
        this.h = b;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", function() {
            c.i = !0
        });
        this.j = Math.random() <= wh("ytidb_transaction_ended_event_rate_limit", .02)
    }
    zk.prototype.logEvent = function(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                K("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                K("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Rr(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign(Object.assign({},
                    b), {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    };

    function Rr(a, b) {
        Pr.getInstance().estimate().then(function(c) {
            c = Object.assign(Object.assign({}, b), {
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                deviceStorageUsageMbytes: Sr(null === c || void 0 === c ? void 0 : c.usage),
                deviceStorageQuotaMbytes: Sr(null === c || void 0 === c ? void 0 : c.quota)
            });
            a.h("idbQuotaExceeded", c)
        })
    }

    function Sr(a) {
        return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
    };
    var Tr = window;

    function Ur() {
        var a = Tr.uaChPolyfill.state;
        if (0 === a.type) Bk("clientHintsPolyfillEvent", {
            clientHintsSupported: !1
        });
        else {
            var b = navigator.userAgent,
                c = void 0 !== a.syntheticUa && a.syntheticUa === b,
                d = {
                    clientHintsSupported: !0,
                    uaAccessedBeforePolyfill: a.didAccessUaBeforePolyfillAvailable,
                    syntheticUaMatches: c
                };
            a.didAccessUaBeforePolyfillAvailable && (d.uaAccessBeforePolyfillCount = a.uaAccessBeforePolyfillCount, a.firstAccessUaError && (d.firstUaAccessStack = String(a.firstAccessUaError.stack).replace(/\n/g, ""), Rn(a.firstAccessUaError)),
                d.polyfillAvailabilityDelayMs = a.polyfillAvailabilityDelay);
            Bk("clientHintsPolyfillEvent", d);
            c || (b = {
                syntheticUa: a.syntheticUa,
                ua: b
            }, b.brand = a.data.brands.map(function(e) {
                return '"' + e.brand + '"; v="' + e.version + '"'
            }), b.mobileness = a.data.mobile, a = a.data.values, a.architecture && (b.platformArchitecture = a.architecture), a.model && (b.model = a.model), a.platform && (b.platformBrand = a.platform), a.platformVersion && (b.platformVersion = a.platformVersion), a.uaFullVersion && (b.fullVersion = a.uaFullVersion), Bk("clientHintsPolyfillDiagnostics",
                b))
        }
    }
    var Vr = !1;

    function Wr() {
        var a;
        1 === (null === (a = Tr.uaChPolyfill) || void 0 === a ? void 0 : a.state.type) ? Vr || (Tr.uaChPolyfill.onReady = Wr, Vr = !0) : Tr.uaChPolyfill && Ur()
    };

    function Xr(a, b, c) {
        I.call(this);
        var d = this;
        c = c || B("POST_MESSAGE_ORIGIN", void 0) || window.document.location.protocol + "//" + window.document.location.hostname;
        this.j = b || null;
        this.K = "*";
        this.l = c;
        this.sessionId = null;
        this.channel = "widget";
        this.L = !!a;
        this.A = function(e) {
            a: if (!("*" != d.l && e.origin != d.l || d.j && e.source != d.j || "string" !== typeof e.data)) {
                try {
                    var f = JSON.parse(e.data)
                } catch (g) {
                    break a
                }
                if (!(null == f || d.L && (d.sessionId && d.sessionId != f.id || d.channel && d.channel != f.channel)) && f) switch (f.event) {
                    case "listening":
                        "null" !=
                        e.origin && (d.l = d.K = e.origin);
                        d.j = e.source;
                        d.sessionId = f.id;
                        d.i && (d.i(), d.i = null);
                        break;
                    case "command":
                        d.m && (!d.u || 0 <= bb(d.u, f.func)) && d.m(f.func, f.args, e.origin)
                }
            }
        };
        this.u = this.i = this.m = null;
        window.addEventListener("message", this.A)
    }
    r(Xr, I);
    Xr.prototype.sendMessage = function(a, b) {
        if (b = b || this.j) {
            this.sessionId && (a.id = this.sessionId);
            this.channel && (a.channel = this.channel);
            try {
                var c = JSON.stringify(a);
                b.postMessage(c, this.K)
            } catch (d) {
                Hh(d)
            }
        }
    };
    Xr.prototype.H = function() {
        window.removeEventListener("message", this.A);
        I.prototype.H.call(this)
    };

    function Yr() {
        this.i = [];
        this.isReady = !1;
        this.j = {};
        var a = this.h = new Xr(!!B("WIDGET_ID_ENFORCE")),
            b = this.lc.bind(this);
        a.m = b;
        a.u = null;
        this.h.channel = "widget";
        if (a = B("WIDGET_ID")) this.h.sessionId = a
    }
    l = Yr.prototype;
    l.lc = function(a, b, c) {
        "addEventListener" === a && b ? (a = b[0], this.j[a] || "onReady" === a || (this.addEventListener(a, Zr(this, a)), this.j[a] = !0)) : this.pb(a, b, c)
    };
    l.pb = function() {};

    function Zr(a, b) {
        return function(c) {
            return a.sendMessage(b, c)
        }
    }
    l.addEventListener = function() {};
    l.Zb = function() {
        this.isReady = !0;
        this.sendMessage("initialDelivery", this.cb());
        this.sendMessage("onReady");
        cb(this.i, this.Mb, this);
        this.i = []
    };
    l.cb = function() {
        return null
    };

    function $r(a, b) {
        a.sendMessage("infoDelivery", b)
    }
    l.Mb = function(a) {
        this.isReady ? this.h.sendMessage(a) : this.i.push(a)
    };
    l.sendMessage = function(a, b) {
        this.Mb({
            event: a,
            info: void 0 === b ? null : b
        })
    };
    l.dispose = function() {
        this.h = null
    };

    function as(a) {
        return (0 === a.search("cue") || 0 === a.search("load")) && "loadModule" !== a
    }

    function bs(a, b, c) {
        if ("string" === typeof a) return {
            videoId: a,
            startSeconds: b,
            suggestedQuality: c
        };
        b = ["endSeconds", "startSeconds", "mediaContentUrl", "suggestedQuality", "videoId"];
        c = {};
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            a[e] && (c[e] = a[e])
        }
        return c
    }

    function cs(a, b, c, d) {
        if (Na(a) && !Array.isArray(a)) {
            b = "playlist list listType index startSeconds suggestedQuality".split(" ");
            c = {};
            for (d = 0; d < b.length; d++) {
                var e = b[d];
                a[e] && (c[e] = a[e])
            }
            return c
        }
        b = {
            index: b,
            startSeconds: c,
            suggestedQuality: d
        };
        "string" === typeof a && 16 === a.length ? b.list = "PL" + a : b.playlist = a;
        return b
    };

    function ds(a) {
        Yr.call(this);
        this.listeners = [];
        this.api = a;
        this.addEventListener("onReady", this.onReady.bind(this));
        this.addEventListener("onVideoProgress", this.wc.bind(this));
        this.addEventListener("onVolumeChange", this.xc.bind(this));
        this.addEventListener("onApiChange", this.pc.bind(this));
        this.addEventListener("onPlaybackQualityChange", this.tc.bind(this));
        this.addEventListener("onPlaybackRateChange", this.uc.bind(this));
        this.addEventListener("onStateChange", this.vc.bind(this));
        this.addEventListener("onWebglSettingsChanged",
            this.yc.bind(this))
    }
    r(ds, Yr);
    l = ds.prototype;
    l.pb = function(a, b, c) {
        if (this.api.isExternalMethodAvailable(a, c)) {
            b = b || [];
            if (0 < b.length && as(a)) {
                var d = b;
                if (Na(d[0]) && !Array.isArray(d[0])) var e = d[0];
                else switch (e = {}, a) {
                    case "loadVideoById":
                    case "cueVideoById":
                        e = bs(d[0], void 0 !== d[1] ? Number(d[1]) : void 0, d[2]);
                        break;
                    case "loadVideoByUrl":
                    case "cueVideoByUrl":
                        e = d[0];
                        "string" === typeof e && (e = {
                            mediaContentUrl: e,
                            startSeconds: void 0 !== d[1] ? Number(d[1]) : void 0,
                            suggestedQuality: d[2]
                        });
                        b: {
                            if ((d = e.mediaContentUrl) && (d = /\/([ve]|embed)\/([^#?]+)/.exec(d)) && d[2]) {
                                d =
                                    d[2];
                                break b
                            }
                            d = null
                        }
                        e.videoId = d;
                        e = bs(e);
                        break;
                    case "loadPlaylist":
                    case "cuePlaylist":
                        e = cs(d[0], d[1], d[2], d[3])
                }
                b.length = 1;
                b[0] = e
            }
            this.api.handleExternalCall(a, b, c);
            as(a) && $r(this, this.cb())
        }
    };
    l.onReady = function() {
        var a = this.Zb.bind(this);
        this.h.i = a
    };
    l.addEventListener = function(a, b) {
        this.listeners.push({
            eventType: a,
            listener: b
        });
        this.api.addEventListener(a, b)
    };
    l.cb = function() {
        if (!this.api) return null;
        var a = this.api.getApiInterface();
        ib(a, "getVideoData");
        for (var b = {
                apiInterface: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            if (0 === e.search("get") || 0 === e.search("is")) {
                var f = 0;
                0 === e.search("get") ? f = 3 : 0 === e.search("is") && (f = 2);
                f = e.charAt(f).toLowerCase() + e.substr(f + 1);
                try {
                    var g = this.api[e]();
                    b[f] = g
                } catch (h) {}
            }
        }
        b.videoData = this.api.getVideoData();
        b.currentTimeLastUpdated_ = Date.now() / 1E3;
        return b
    };
    l.vc = function(a) {
        a = {
            playerState: a,
            currentTime: this.api.getCurrentTime(),
            duration: this.api.getDuration(),
            videoData: this.api.getVideoData(),
            videoStartBytes: 0,
            videoBytesTotal: this.api.getVideoBytesTotal(),
            videoLoadedFraction: this.api.getVideoLoadedFraction(),
            playbackQuality: this.api.getPlaybackQuality(),
            availableQualityLevels: this.api.getAvailableQualityLevels(),
            currentTimeLastUpdated_: Date.now() / 1E3,
            playbackRate: this.api.getPlaybackRate(),
            mediaReferenceTime: this.api.getMediaReferenceTime()
        };
        this.api.getVideoUrl &&
            (a.videoUrl = this.api.getVideoUrl());
        this.api.getVideoContentRect && (a.videoContentRect = this.api.getVideoContentRect());
        this.api.getProgressState && (a.progressState = this.api.getProgressState());
        this.api.getPlaylist && (a.playlist = this.api.getPlaylist());
        this.api.getPlaylistIndex && (a.playlistIndex = this.api.getPlaylistIndex());
        this.api.getStoryboardFormat && (a.storyboardFormat = this.api.getStoryboardFormat());
        $r(this, a)
    };
    l.tc = function(a) {
        $r(this, {
            playbackQuality: a
        })
    };
    l.uc = function(a) {
        $r(this, {
            playbackRate: a
        })
    };
    l.pc = function() {
        for (var a = this.api.getOptions(), b = {
                namespaces: a
            }, c = 0, d = a.length; c < d; c++) {
            var e = a[c],
                f = this.api.getOptions(e);
            b[e] = {
                options: f
            };
            for (var g = 0, h = f.length; g < h; g++) {
                var k = f[g],
                    m = this.api.getOption(e, k);
                b[e][k] = m
            }
        }
        this.sendMessage("apiInfoDelivery", b)
    };
    l.xc = function() {
        $r(this, {
            muted: this.api.isMuted(),
            volume: this.api.getVolume()
        })
    };
    l.wc = function(a) {
        a = {
            currentTime: a,
            videoBytesLoaded: this.api.getVideoBytesLoaded(),
            videoLoadedFraction: this.api.getVideoLoadedFraction(),
            currentTimeLastUpdated_: Date.now() / 1E3,
            playbackRate: this.api.getPlaybackRate(),
            mediaReferenceTime: this.api.getMediaReferenceTime()
        };
        this.api.getProgressState && (a.progressState = this.api.getProgressState());
        $r(this, a)
    };
    l.yc = function() {
        var a = {
            sphericalProperties: this.api.getSphericalProperties()
        };
        $r(this, a)
    };
    l.dispose = function() {
        Yr.prototype.dispose.call(this);
        for (var a = 0; a < this.listeners.length; a++) {
            var b = this.listeners[a];
            this.api.removeEventListener(b.eventType, b.listener)
        }
        this.listeners = []
    };

    function es(a) {
        I.call(this);
        this.i = {};
        this.started = !1;
        this.connection = a;
        this.connection.subscribe("command", this.Ib, this)
    }
    r(es, I);
    l = es.prototype;
    l.start = function() {
        this.started || this.h() || (this.started = !0, this.connection.qa("RECEIVING"))
    };
    l.qa = function(a, b) {
        this.started && !this.h() && this.connection.qa(a, b)
    };
    l.Ib = function(a, b, c) {
        if (this.started && !this.h()) {
            var d = b || {};
            switch (a) {
                case "addEventListener":
                    "string" === typeof d.event && this.addListener(d.event);
                    break;
                case "removeEventListener":
                    "string" === typeof d.event && this.removeListener(d.event);
                    break;
                default:
                    this.api.isReady() && this.api.isExternalMethodAvailable(a, c || null) && (b = fs(a, b || {}), c = this.api.handleExternalCall(a, b, c || null), (c = gs(a, c)) && this.qa(a, c))
            }
        }
    };
    l.addListener = function(a) {
        if (!(a in this.i)) {
            var b = this.qc.bind(this, a);
            this.i[a] = b;
            this.addEventListener(a, b)
        }
    };
    l.qc = function(a, b) {
        this.started && !this.h() && this.connection.qa(a, this.bb(a, b))
    };
    l.bb = function(a, b) {
        if (null != b) return {
            value: b
        }
    };
    l.removeListener = function(a) {
        a in this.i && (this.removeEventListener(a, this.i[a]), delete this.i[a])
    };
    l.H = function() {
        var a = this.connection;
        a.h() || ag(a.i, "command", this.Ib, this);
        this.connection = null;
        for (var b in this.i) this.i.hasOwnProperty(b) && this.removeListener(b);
        I.prototype.H.call(this)
    };

    function hs(a, b) {
        es.call(this, b);
        this.api = a;
        this.start()
    }
    r(hs, es);
    hs.prototype.addEventListener = function(a, b) {
        this.api.addEventListener(a, b)
    };
    hs.prototype.removeEventListener = function(a, b) {
        this.api.removeEventListener(a, b)
    };

    function fs(a, b) {
        switch (a) {
            case "loadVideoById":
                return a = bs(b), [a];
            case "cueVideoById":
                return a = bs(b), [a];
            case "loadVideoByPlayerVars":
                return [b];
            case "cueVideoByPlayerVars":
                return [b];
            case "loadPlaylist":
                return a = cs(b), [a];
            case "cuePlaylist":
                return a = cs(b), [a];
            case "seekTo":
                return [b.seconds, b.allowSeekAhead];
            case "playVideoAt":
                return [b.index];
            case "setVolume":
                return [b.volume];
            case "setPlaybackQuality":
                return [b.suggestedQuality];
            case "setPlaybackRate":
                return [b.suggestedRate];
            case "setLoop":
                return [b.loopPlaylists];
            case "setShuffle":
                return [b.shufflePlaylist];
            case "getOptions":
                return [b.module];
            case "getOption":
                return [b.module, b.option];
            case "setOption":
                return [b.module, b.option, b.value];
            case "handleGlobalKeyDown":
                return [b.keyCode, b.shiftKey, b.ctrlKey, b.altKey, b.metaKey, b.key, b.code]
        }
        return []
    }

    function gs(a, b) {
        switch (a) {
            case "isMuted":
                return {
                    muted: b
                };
            case "getVolume":
                return {
                    volume: b
                };
            case "getPlaybackRate":
                return {
                    playbackRate: b
                };
            case "getAvailablePlaybackRates":
                return {
                    availablePlaybackRates: b
                };
            case "getVideoLoadedFraction":
                return {
                    videoLoadedFraction: b
                };
            case "getPlayerState":
                return {
                    playerState: b
                };
            case "getCurrentTime":
                return {
                    currentTime: b
                };
            case "getPlaybackQuality":
                return {
                    playbackQuality: b
                };
            case "getAvailableQualityLevels":
                return {
                    availableQualityLevels: b
                };
            case "getDuration":
                return {
                    duration: b
                };
            case "getVideoUrl":
                return {
                    videoUrl: b
                };
            case "getVideoEmbedCode":
                return {
                    videoEmbedCode: b
                };
            case "getPlaylist":
                return {
                    playlist: b
                };
            case "getPlaylistIndex":
                return {
                    playlistIndex: b
                };
            case "getOptions":
                return {
                    options: b
                };
            case "getOption":
                return {
                    option: b
                }
        }
    }
    hs.prototype.bb = function(a, b) {
        switch (a) {
            case "onReady":
                return;
            case "onStateChange":
                return {
                    playerState: b
                };
            case "onPlaybackQualityChange":
                return {
                    playbackQuality: b
                };
            case "onPlaybackRateChange":
                return {
                    playbackRate: b
                };
            case "onError":
                return {
                    errorCode: b
                }
        }
        return es.prototype.bb.call(this, a, b)
    };
    hs.prototype.H = function() {
        es.prototype.H.call(this);
        delete this.api
    };

    function is(a) {
        a = void 0 === a ? !1 : a;
        I.call(this);
        this.i = new J(a);
        be(this, Ua($d, this.i))
    }
    Wa(is, I);
    is.prototype.subscribe = function(a, b, c) {
        return this.h() ? 0 : this.i.subscribe(a, b, c)
    };
    is.prototype.l = function(a, b) {
        this.h() || this.i.ma.apply(this.i, arguments)
    };

    function js(a, b, c) {
        is.call(this);
        this.j = a;
        this.destination = b;
        this.id = c
    }
    r(js, is);
    js.prototype.qa = function(a, b) {
        this.h() || this.j.qa(this.destination, this.id, a, b)
    };
    js.prototype.H = function() {
        this.destination = this.j = null;
        is.prototype.H.call(this)
    };

    function ks(a, b, c) {
        I.call(this);
        this.destination = a;
        this.origin = c;
        this.i = Oh(window, "message", this.j.bind(this));
        this.connection = new js(this, a, b);
        be(this, Ua($d, this.connection))
    }
    r(ks, I);
    ks.prototype.qa = function(a, b, c, d) {
        this.h() || a !== this.destination || (a = {
            id: b,
            command: c
        }, d && (a.data = d), this.destination.postMessage(Cf(a), this.origin))
    };
    ks.prototype.j = function(a) {
        var b;
        if (b = !this.h())
            if (b = a.origin === this.origin) a: {
                b = this.destination;do {
                    b: {
                        var c = a.source;do {
                            if (c === b) {
                                c = !0;
                                break b
                            }
                            if (c === c.parent) break;
                            c = c.parent
                        } while (null != c);c = !1
                    }
                    if (c) {
                        b = !0;
                        break a
                    }
                    b = b.opener
                } while (null != b);b = !1
            }
        if (b && (b = a.data, "string" === typeof b)) {
            try {
                b = JSON.parse(b)
            } catch (d) {
                return
            }
            b.command && (c = this.connection, c.h() || c.l("command", b.command, b.data, a.origin))
        }
    };
    ks.prototype.H = function() {
        Ph(this.i);
        this.destination = null;
        I.prototype.H.call(this)
    };

    function ls(a) {
        a = a || {};
        var b = {},
            c = {};
        this.url = a.url || "";
        this.args = a.args || sb(b);
        this.assets = a.assets || {};
        this.attrs = a.attrs || sb(c);
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    }
    ls.prototype.clone = function() {
        var a = new ls,
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "object" == La(c) ? a[b] = sb(c) : a[b] = c
            }
        return a
    };
    var ms = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;

    function ns(a) {
        a = a || "";
        if (window.spf) {
            var b = a.match(ms);
            spf.style.load(a, b ? b[1] : "", void 0)
        } else os(a)
    }

    function os(a) {
        var b = ps(a),
            c = document.getElementById(b),
            d = c && jr(c, "loaded");
        d || c && !d || (c = qs(a, b, function() {
            jr(c, "loaded") || (hr(c), $i(b), Rh(Ua(aj, b), 0))
        }))
    }

    function qs(a, b, c) {
        var d = document.createElement("link");
        d.id = b;
        d.onload = function() {
            c && setTimeout(c, 0)
        };
        a = Af(a);
        bc(d, a);
        (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
        return d
    }

    function ps(a) {
        var b = xd(document, "A");
        Ab("This URL is never added to the DOM");
        ac(b, new Pb(a, Qb));
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + fc(a)
    };

    function rs() {
        I.call(this);
        this.i = []
    }
    r(rs, I);
    rs.prototype.H = function() {
        for (; this.i.length;) {
            var a = this.i.pop();
            a.target.removeEventListener(a.name, a.na, void 0)
        }
        I.prototype.H.call(this)
    };

    function ss() {
        rs.apply(this, arguments)
    }
    r(ss, rs);

    function ts(a, b, c, d) {
        I.call(this);
        var e = this;
        this.L = b;
        this.webPlayerContextConfig = d;
        this.Xa = !1;
        this.api = {};
        this.Ha = this.u = null;
        this.S = new J;
        this.i = {};
        this.ga = this.Ia = this.elementId = this.Ya = this.config = null;
        this.Y = !1;
        this.l = this.A = null;
        this.Ja = {};
        this.Qb = ["onReady"];
        this.lastError = null;
        this.qb = NaN;
        this.K = {};
        this.Rb = new ss(this);
        this.sa = 0;
        this.j = this.m = a;
        be(this, Ua($d, this.S));
        us(this);
        vs(this);
        be(this, Ua($d, this.Rb));
        c ? this.sa = Rh(function() {
            e.loadNewVideoConfig(c)
        }, 0) : d && (ws(this), xs(this))
    }
    r(ts, I);
    l = ts.prototype;
    l.getId = function() {
        return this.L
    };
    l.loadNewVideoConfig = function(a) {
        if (!this.h()) {
            this.sa && (Sh(this.sa), this.sa = 0);
            var b = a || {};
            b instanceof ls || (b = new ls(b));
            this.config = b;
            this.setConfig(a);
            xs(this);
            this.isReady() && ys(this)
        }
    };

    function ws(a) {
        var b, c;
        a.webPlayerContextConfig ? c = a.webPlayerContextConfig.rootElementId : c = a.config.attrs.id;
        a.elementId = c || a.elementId;
        "video-player" === a.elementId && (a.elementId = a.L, a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.L : a.config.attrs.id = a.L);
        (null === (b = a.j) || void 0 === b ? void 0 : b.id) === a.elementId && (a.elementId += "-player", a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.elementId : a.config.attrs.id = a.elementId)
    }
    l.setConfig = function(a) {
        var b;
        this.Ya = a;
        this.config = zs(a);
        ws(this);
        this.Ia || (this.Ia = As(this, (null === (b = this.config.args) || void 0 === b ? void 0 : b.jsapicallback) || "onYouTubePlayerReady"));
        this.config.args ? this.config.args.jsapicallback = null : this.config.args = {
            jsapicallback: null
        };
        var c;
        if (null === (c = this.config) || void 0 === c ? 0 : c.attrs) a = this.config.attrs, (c = a.width) && this.j && (this.j.style.width = Kd(Number(c) || c)), (a = a.height) && this.j && (this.j.style.height = Kd(Number(a) || a))
    };

    function ys(a) {
        var b;
        a.config && !0 !== a.config.loaded && (a.config.loaded = !0, !a.config.args || "0" !== a.config.args.autoplay && 0 !== a.config.args.autoplay && !1 !== a.config.args.autoplay ? a.api.loadVideoByPlayerVars(null !== (b = a.config.args) && void 0 !== b ? b : null) : a.api.cueVideoByPlayerVars(a.config.args))
    }

    function Bs(a) {
        var b = !0,
            c = Cs(a);
        c && a.config && (a = Ds(a), b = jr(c, "version") === a);
        return b && !!A("yt.player.Application.create")
    }

    function xs(a) {
        if (!a.h() && !a.Y) {
            var b = Bs(a);
            if (b && "html5" === (Cs(a) ? "html5" : null)) a.ga = "html5", a.isReady() || Es(a);
            else if (Fs(a), a.ga = "html5", b && a.l && a.m) a.m.appendChild(a.l), Es(a);
            else {
                a.config && (a.config.loaded = !0);
                var c = !1;
                a.A = function() {
                    c = !0;
                    var d = Gs(a, "player_bootstrap_method") ? A("yt.player.Application.createAlternate") || A("yt.player.Application.create") : A("yt.player.Application.create");
                    var e = a.config ? zs(a.config) : void 0;
                    d && d(a.m, e, a.webPlayerContextConfig);
                    Es(a)
                };
                a.Y = !0;
                b ? a.A() : (nr(Ds(a), a.A), (b = Hs(a)) && ns(b), Is(a) && !c && z("yt.player.Application.create", null, void 0))
            }
        }
    }

    function Cs(a) {
        var b = td(a.elementId);
        !b && a.j && a.j.querySelector && (b = a.j.querySelector("#" + a.elementId));
        return b
    }

    function Es(a) {
        var b;
        if (!a.h()) {
            var c = Cs(a),
                d = !1;
            c && c.getApiInterface && c.getApiInterface() && (d = !0);
            d ? (a.Y = !1, !Gs(a, "html5_remove_not_servable_check_killswitch") && (null === c || void 0 === c ? 0 : c.isNotServable) && a.config && (null === c || void 0 === c ? 0 : c.isNotServable(null === (b = a.config.args) || void 0 === b ? void 0 : b.video_id)) || Js(a)) : a.qb = Rh(function() {
                Es(a)
            }, 50)
        }
    }

    function Js(a) {
        us(a);
        a.Xa = !0;
        var b = Cs(a);
        if (b) {
            a.u = Ks(a, b, "addEventListener");
            a.Ha = Ks(a, b, "removeEventListener");
            var c = b.getApiInterface();
            c = c.concat(b.getInternalApiInterface());
            for (var d = a.api, e = 0; e < c.length; e++) {
                var f = c[e];
                d[f] || (d[f] = Ks(a, b, f))
            }
        }
        for (var g in a.i) a.i.hasOwnProperty(g) && a.u && a.u(g, a.i[g]);
        ys(a);
        a.Ia && a.Ia(a.api);
        a.S.ma("onReady", a.api)
    }

    function Ks(a, b, c) {
        var d = b[c];
        return function() {
            var e = Ea.apply(0, arguments);
            try {
                return a.lastError = null, d.apply(b, e)
            } catch (f) {
                "sendAbandonmentPing" !== c && (f.params = c, a.lastError = f, Sn(f))
            }
        }
    }

    function us(a) {
        a.Xa = !1;
        if (a.Ha)
            for (var b in a.i) a.i.hasOwnProperty(b) && a.Ha(b, a.i[b]);
        for (var c in a.K) a.K.hasOwnProperty(c) && Sh(Number(c));
        a.K = {};
        a.u = null;
        a.Ha = null;
        b = a.api;
        for (var d in b) b.hasOwnProperty(d) && (b[d] = null);
        b.addEventListener = function(e, f) {
            a.addEventListener(e, f)
        };
        b.removeEventListener = function(e, f) {
            a.removeEventListener(e, f)
        };
        b.destroy = function() {
            a.dispose()
        };
        b.getLastError = function() {
            return a.getLastError()
        };
        b.getPlayerType = function() {
            return a.getPlayerType()
        };
        b.getCurrentVideoConfig = function() {
            return a.Ya
        };
        b.loadNewVideoConfig = function(e) {
            a.loadNewVideoConfig(e)
        };
        b.isReady = function() {
            return a.isReady()
        }
    }
    l.isReady = function() {
        return this.Xa
    };

    function vs(a) {
        a.addEventListener("WATCH_LATER_VIDEO_ADDED", function(b) {
            $i("WATCH_LATER_VIDEO_ADDED", b)
        });
        a.addEventListener("WATCH_LATER_VIDEO_REMOVED", function(b) {
            $i("WATCH_LATER_VIDEO_REMOVED", b)
        });
        a.addEventListener("onAdAnnounce", function(b) {
            $i("a11y-announce", b)
        })
    }
    l.addEventListener = function(a, b) {
        var c = this,
            d = As(this, b);
        d && (0 <= bb(this.Qb, a) || this.i[a] || (b = Ls(this, a), this.u && this.u(a, b)), this.S.subscribe(a, d), "onReady" === a && this.isReady() && Rh(function() {
            d(c.api)
        }, 0))
    };
    l.removeEventListener = function(a, b) {
        this.h() || (b = As(this, b)) && ag(this.S, a, b)
    };

    function As(a, b) {
        var c = b;
        if ("string" === typeof b) {
            if (a.Ja[b]) return a.Ja[b];
            c = function() {
                var d = Ea.apply(0, arguments),
                    e = A(b);
                if (e) try {
                    e.apply(x, d)
                } catch (f) {
                    Rn(f)
                }
            };
            a.Ja[b] = c
        }
        return c ? c : null
    }

    function Ls(a, b) {
        var c = "ytPlayer" + b + a.L;
        a.i[b] = c;
        x[c] = function(d) {
            var e = Rh(function() {
                if (!a.h()) {
                    a.S.ma(b, null !== d && void 0 !== d ? d : void 0);
                    var f = a.K,
                        g = String(e);
                    g in f && delete f[g]
                }
            }, 0);
            pb(a.K, String(e))
        };
        return c
    }
    l.getPlayerType = function() {
        return this.ga || (Cs(this) ? "html5" : null)
    };
    l.getLastError = function() {
        return this.lastError
    };

    function Fs(a) {
        a.cancel();
        us(a);
        a.ga = null;
        a.config && (a.config.loaded = !1);
        var b = Cs(a);
        b && (Bs(a) || !Is(a) ? a.l = b : (b && b.destroy && b.destroy(), a.l = null));
        if (a.m)
            for (a = a.m; b = a.firstChild;) a.removeChild(b)
    }
    l.cancel = function() {
        this.A && tr(Ds(this), this.A);
        Sh(this.qb);
        this.Y = !1
    };
    l.H = function() {
        Fs(this);
        if (this.l && this.config && this.l.destroy) try {
            this.l.destroy()
        } catch (b) {
            Rn(b)
        }
        this.Ja = null;
        for (var a in this.i) this.i.hasOwnProperty(a) && (x[this.i[a]] = null);
        this.Ya = this.config = this.api = null;
        delete this.m;
        delete this.j;
        I.prototype.H.call(this)
    };

    function Is(a) {
        var b, c;
        a = null === (c = null === (b = a.config) || void 0 === b ? void 0 : b.args) || void 0 === c ? void 0 : c.fflags;
        return !!a && -1 !== a.indexOf("player_destroy_old_version=true")
    }

    function Ds(a) {
        return a.webPlayerContextConfig ? a.webPlayerContextConfig.jsUrl : (a = a.config.assets) ? a.js : ""
    }

    function Hs(a) {
        return a.webPlayerContextConfig ? a.webPlayerContextConfig.cssUrl : (a = a.config.assets) ? a.css : ""
    }

    function Gs(a, b) {
        var c;
        if (a.webPlayerContextConfig) var d = a.webPlayerContextConfig.serializedExperimentFlags;
        else if (null === (c = a.config) || void 0 === c ? 0 : c.args) d = a.config.args.fflags;
        return "true" === li(d || "", "&")[b]
    }

    function zs(a) {
        for (var b = {}, c = q(Object.keys(a)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d];
            b[d] = "object" === typeof e ? sb(e) : e
        }
        return b
    };
    var Ms = {},
        Ns = "player_uid_" + (1E9 * Math.random() >>> 0);

    function Os(a, b, c) {
        var d = "player";
        c = void 0 === c ? !0 : c;
        d = "string" === typeof d ? td(d) : d;
        var e = Ns + "_" + Oa(d),
            f = Ms[e];
        if (f && c) return Ps(a, b) ? f.api.loadVideoByPlayerVars(a.args || null) : f.loadNewVideoConfig(a), f.api;
        f = new ts(d, e, a, b);
        Ms[e] = f;
        $i("player-added", f.api);
        be(f, function() {
            delete Ms[f.getId()]
        });
        return f.api
    }

    function Ps(a, b) {
        return b && b.serializedExperimentFlags ? b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true") : a && a.args && a.args.fflags ? a.args.fflags.includes("web_player_remove_playerproxy=true") : !1
    };
    var Qs = null,
        Rs = null,
        Ss = null;

    function Ts() {
        var a = Qs.getVideoData(1);
        a = a.title ? a.title + " - YouTube" : "YouTube";
        document.title !== a && (document.title = a)
    };

    function Us(a, b, c) {
        a = "ST-" + fc(a).toString(36);
        b = b ? lc(b) : "";
        c = c || 5;
        yo() && Pj(a, b, c)
    };

    function Vs(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? !1 : c;
        var d = B("EVENT_ID");
        d && (b.ei || (b.ei = d));
        if (b) {
            d = a;
            var e = void 0 === e ? !0 : e;
            var f = B("VALID_SESSION_TEMPDATA_DOMAINS", []),
                g = ic(window.location.href);
            g && f.push(g);
            g = ic(d);
            if (0 <= bb(f, g) || !g && 0 == d.lastIndexOf("/", 0))
                if (K("autoescape_tempdata_url") && (f = document.createElement("a"), ac(f, d), d = f.href), d && (d = jc(d), f = d.indexOf("#"), d = 0 > f ? d : d.substr(0, f)))
                    if (e && !b.csn && (b.itct || b.ved) && (b = Object.assign({
                            csn: ko()
                        }, b)), h) {
                        var h = parseInt(h, 10);
                        isFinite(h) && 0 < h &&
                            Us(d, b, h)
                    } else Us(d, b)
        }
        if (c) return !1;
        if ((window.ytspf || {}).enabled) spf.navigate(a);
        else {
            var k = void 0 === k ? {} : k;
            var m = void 0 === m ? "" : m;
            var n = void 0 === n ? window : n;
            c = n.location;
            a = mc(a, k) + m;
            var t = void 0 === t ? Jd : t;
            a: {
                t = void 0 === t ? Jd : t;
                for (k = 0; k < t.length; ++k)
                    if (m = t[k], m instanceof Hd && m.isValid(a)) {
                        t = new nd(a, ld);
                        break a
                    }
                t = void 0
            }
            c.href = pd(t || od)
        }
        return !0
    };
    z("yt.setConfig", th, void 0);
    z("yt.config.set", th, void 0);
    z("yt.setMsg", po, void 0);
    z("yt.msgs.set", po, void 0);
    z("yt.logging.errors.log", Rn, void 0);
    z("writeEmbed", function() {
        var a = B("PLAYER_CONFIG", void 0);
        if (!a) {
            var b = B("PLAYER_VARS", void 0);
            b && (a = {
                args: b
            })
        }
        Go(!0);
        "gvn" === a.args.ps && (document.body.style.backgroundColor = "transparent");
        a.attrs || (a.attrs = {
            width: "100%",
            height: "100%",
            id: "video-player"
        });
        var c = document.referrer;
        b = B("POST_MESSAGE_ORIGIN");
        window !== window.top && c && c !== document.URL && (a.args.loaderUrl = c);
        K("embeds_js_api_set_1p_cookie") && (c = qi(window.location.href), c.embedsTokenValue && (a.args.embedsTokenValue = c.embedsTokenValue));
        jq();
        if ((c = B("WEB_PLAYER_CONTEXT_CONFIGS", void 0)) && "WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER" in c) {
            c = c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
            if (!c.serializedForcedExperimentIds) {
                var d = qi(window.location.href);
                d.forced_experiments && (c.serializedForcedExperimentIds = d.forced_experiments)
            }
            Qs = Os(a, c, !1)
        } else Qs = Os(a);
        Qs.addEventListener("onVideoDataChange", Ts);
        a = B("POST_MESSAGE_ID", "player");
        B("ENABLE_JS_API") ? Ss = new ds(Qs) : B("ENABLE_POST_API") && "string" === typeof a && "string" === typeof b && (Rs = new ks(window.parent,
            a, b), Ss = new hs(Qs, Rs.connection));
        wr();
        K("ytidb_create_logger_embed_killswitch") || yk();
        K("flush_gel_on_teardown") && (a = {}, Or || (Or = new Nr), Or.install((a.flush_logs = {
            na: function() {
                sj()
            }
        }, a)));
        K("networkless_logging_web_embedded") && (K("embeds_web_enable_new_nwl") ? cn() : kn());
        K("embeds_enable_ua_ch_polyfill") && Wr();
        K("ytidb_clear_embedded_player") && ai.M(function() {
            if (!Lq) {
                var e = {
                        tb: {
                            feedbackEndpoint: Vo(Gq),
                            modifyChannelNotificationPreferenceEndpoint: Vo(Hq),
                            playlistEditEndpoint: Vo(Iq),
                            subscribeEndpoint: Vo(Eq),
                            unsubscribeEndpoint: Vo(Fq),
                            webPlayerShareEntityServiceEndpoint: Vo(Jq)
                        }
                    },
                    f = K("web_enable_client_location_service") ? Ro.getInstance() : void 0,
                    g = [];
                f && g.push(f);
                if (void 0 === h) {
                    Ho.h || (Ho.h =
                        new Ho);
                    var h = Ho.h
                }
                if (void 0 === k) {
                    Kq.h || (Kq.h = new Kq);
                    var k = Kq.h
                }
                sq(e, k, h, g);
                Lq = rq.h
            }
            gr()
        })
    }, void 0);
    var Ws = Fh(function() {
            pq();
            var a = Tj.getInstance(),
                b = Wj(119),
                c = 1 < window.devicePixelRatio;
            if (document.body && kf(document.body, "exp-invert-logo"))
                if (c && !kf(document.body, "inverted-hdpi")) {
                    var d = document.body;
                    if (d.classList) d.classList.add("inverted-hdpi");
                    else if (!kf(d, "inverted-hdpi")) {
                        var e = hf(d);
                        jf(d, e + (0 < e.length ? " inverted-hdpi" : "inverted-hdpi"))
                    }
                } else !c && kf(document.body, "inverted-hdpi") && lf();
            if (b != c) {
                b = "f" + (Math.floor(119 / 31) + 1);
                d = Xj(b) || 0;
                d = c ? d | 67108864 : d & -67108865;
                0 == d ? delete Sj[b] : (c = d.toString(16),
                    Sj[b] = c.toString());
                c = !0;
                K("web_secure_pref_cookie_killswitch") && (c = !1);
                b = a.h;
                d = [];
                for (var f in Sj) d.push(f + "=" + encodeURIComponent(String(Sj[f])));
                Pj(b, d.join("&"), 63072E3, a.i, c)
            }
            Vq.h || (Vq.h = new Vq);
            a = Vq.h;
            f = 16623;
            var g = void 0 === g ? {} : g;
            Object.values(qo).includes(f) || (Sn(new Ek("createClientScreen() called with a non-page VE", f)), f = 83769);
            g.isHistoryNavigation || a.h.push({
                rootVe: f,
                key: g.key || ""
            });
            a.o = [];
            a.D = [];
            g.wb ? Yq(a, f, g) : Zq(a, f, g)
        }),
        Xs = Fh(function() {
            Qs && Qs.sendAbandonmentPing && Qs.sendAbandonmentPing();
            B("PL_ATT") && Cr.dispose();
            for (var a = 0, b = ur.length; a < b; a++) ai.U(ur[a]);
            ur.length = 0;
            sr("//static.doubleclick.net/instream/ad_status.js");
            vr = !1;
            th("DCLKSTAT", 0);
            ae(Ss, Rs);
            Qs && (Qs.removeEventListener("onVideoDataChange", Ts), Qs.destroy())
        });
    window.addEventListener ? (window.addEventListener("load", Ws), window.addEventListener("unload", Xs)) : window.attachEvent && (window.attachEvent("onload", Ws), window.attachEvent("onunload", Xs));
    Va("yt.abuse.player.botguardInitialized", A("yt.abuse.player.botguardInitialized") || Dr);
    Va("yt.abuse.player.invokeBotguard", A("yt.abuse.player.invokeBotguard") || Er);
    Va("yt.abuse.dclkstatus.checkDclkStatus", A("yt.abuse.dclkstatus.checkDclkStatus") || xr);
    Va("yt.player.exports.navigate", A("yt.player.exports.navigate") || Vs);
    Va("yt.util.activity.init", A("yt.util.activity.init") || ci);
    Va("yt.util.activity.getTimeSinceActive", A("yt.util.activity.getTimeSinceActive") || fi);
    Va("yt.util.activity.setTimestamp", A("yt.util.activity.setTimestamp") || di);
}).call(this);