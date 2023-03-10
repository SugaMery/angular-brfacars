/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var q, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
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

function t(a) {
    return ea(a())
}
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});

function fa(a, b) {
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
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Array.prototype.includes", function(a) {
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
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var u = this || self;

function v(a, b) {
    a = a.split(".");
    b = b || u;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ha() {}

function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ja(a, b, c) {
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

function ka(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
    return ka.apply(null, arguments)
}

function w(a, b) {
    a = a.split(".");
    var c = u;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ea = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.mb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function na(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, na);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.qa = b)
}
ma(na, Error);
na.prototype.name = "CustomError";

function oa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function pa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function qa(a, b) {
    for (let d = 1; d < arguments.length; d++) {
        const e = arguments[d];
        var c = typeof e;
        c = "object" != c ? c : e ? Array.isArray(e) ? "array" : c : "null";
        if ("array" == c || "object" == c && "number" == typeof e.length) {
            c = a.length || 0;
            const f = e.length || 0;
            a.length = c + f;
            for (let g = 0; g < f; g++) a[c + g] = e[g]
        } else a.push(e)
    }
};

function ra(a) {
    for (const b in a) return !1;
    return !0
}

function sa(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = sa(a[c]);
    return b
}
const ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function ua(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < ta.length; f++) c = ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function va() {}

function wa(a) {
    return new va(xa, a)
}
var xa = {};
wa("");
var ya = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function za() {
    var a = u.navigator;
    return a && (a = a.userAgent) ? a : ""
}

function y(a) {
    return -1 != za().indexOf(a)
};

function Aa() {
    return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
};
var z = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ba(a) {
    return a ? decodeURI(a) : a
}

function Ca(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ca(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Da(a) {
    var b = [],
        c;
    for (c in a) Ca(c, a[c], b);
    return b.join("&")
};

function Ea(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function Fa() {
    return Error("Failed to read varint, encoding is invalid.")
};

function Ga(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Ha;
const Ia = "undefined" !== typeof TextDecoder;
!y("Android") || Aa();
Aa();
var Ja = y("Safari") && !(Aa() || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Ka = {},
    La = null;

function Ma(a, b) {
    void 0 === b && (b = 0);
    Na();
    b = Ka[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            m = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + m + g + h + k
    }
    m = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            m = a[e + 1], k = b[(m & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | m >> 4] + k + d
    }
    return c.join("")
}

function Oa(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Pa(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Pa(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var m = a.charAt(d++),
                l = La[m];
            if (null != l) return l;
            if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
        }
        return k
    }
    Na();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Na() {
    if (!La) {
        La = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Ka[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === La[f] && (La[f] = e)
            }
        }
    }
};
var Qa = "function" === typeof Uint8Array;

function Ra(a) {
    return Qa && null != a && a instanceof Uint8Array
}
let Sa;
var Ta = class {
    constructor(a) {
        this.h = a;
        if (null !== a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    isEmpty() {
        return null == this.h
    }
};
const Ua = "function" === typeof Uint8Array.prototype.slice;

function Va(a) {
    if (a.constructor === Uint8Array) return a;
    if (a.constructor === ArrayBuffer) return new Uint8Array(a);
    if (a.constructor === Array) return new Uint8Array(a);
    if (a.constructor === String) return Oa(a);
    if (a.constructor === Ta) {
        if (a.isEmpty()) a = Sa || (Sa = new Uint8Array(0));
        else {
            var b = Uint8Array;
            var c = a.h;
            c = null == c || Ra(c) ? c : "string" === typeof c ? Oa(c) : null;
            a = new b(a.h = c)
        }
        return a
    }
    if (a instanceof Uint8Array) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers");
};

function Wa(a, b) {
    a.j = Va(b);
    a.l = 0;
    a.i = a.j.length;
    a.h = a.l
}

function Xa(a) {
    if (a.h > a.i) throw Error(`Tried to read past the end of the data ${a.h} > ${a.i}`);
}

function Ya(a) {
    const b = a.j;
    let c = b[a.h + 0],
        d = c & 127;
    if (128 > c) return a.h += 1, Xa(a), d;
    c = b[a.h + 1];
    d |= (c & 127) << 7;
    if (128 > c) return a.h += 2, Xa(a), d;
    c = b[a.h + 2];
    d |= (c & 127) << 14;
    if (128 > c) return a.h += 3, Xa(a), d;
    c = b[a.h + 3];
    d |= (c & 127) << 21;
    if (128 > c) return a.h += 4, Xa(a), d;
    c = b[a.h + 4];
    d |= (c & 15) << 28;
    if (128 > c) return a.h += 5, Xa(a), d >>> 0;
    a.h += 5;
    if (128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++]) throw Fa();
    Xa(a);
    return d
}
var Za = class {
        constructor(a, {
            J: b = !1
        } = {}) {
            this.j = null;
            this.h = this.i = this.l = 0;
            this.J = b;
            a && Wa(this, a)
        }
        clear() {
            this.j = null;
            this.h = this.i = this.l = 0;
            this.J = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            this.h += a;
            Xa(this)
        }
    },
    $a = [];

function ab(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.l = a.h.h;
    var c = Ya(a.h);
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw Ea(c, a.l);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.l})`);
    a.j = b;
    a.i = c;
    return !0
}

function bb(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) bb(a);
            else a: {
                a = a.h;
                var b = a.h;
                for (let c = 0; 10 > c; c++) {
                    if (0 === (a.j[b] & 128)) {
                        a.h = b + 1;
                        Xa(a);
                        break a
                    }
                    b++
                }
                throw Fa();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? bb(a) : (b = Ya(a.h), a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.j;
            do {
                if (!ab(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.j != b) throw Error("Unmatched end-group tag");
                    break
                }
                bb(a)
            } while (1);
            break;
        default:
            throw Ea(a.i, a.l);
    }
}
var cb = class {
        constructor(a) {
            var {
                J: b = !1,
                ga: c = !1
            } = {};
            this.m = {
                J: b
            };
            this.ga = c;
            var d = this.m;
            if ($a.length) {
                const e = $a.pop();
                d && (e.J = d.J);
                a && Wa(e, a);
                a = e
            } else a = new Za(a, d);
            this.h = a;
            this.l = this.h.h;
            this.i = this.j = -1
        }
        reset() {
            this.h.reset();
            this.l = this.h.h;
            this.i = this.j = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    db = [];
const eb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

function fb(a) {
    if (Array.isArray(a)) {
        let b;
        eb ? b = a[eb] : b = a.h;
        a = !!((null == b ? 0 : b) & 1)
    } else a = !1;
    return a
}

function gb(a) {
    Object.isFrozen(a) || (eb ? a[eb] |= 1 : void 0 !== a.h ? a.h |= 1 : Object.defineProperties(a, {
        h: {
            value: 1,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }));
    return a
};

function hb(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let ib;
class jb {
    constructor(a, b, c, d) {
        var e = kb;
        this.i = a;
        this.fieldName = b;
        this.h = c;
        this.isRepeated = d;
        this.j = e
    }
};

function lb(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a)) {
                if (Ra(a)) return Ma(a);
                if (a instanceof Ta) {
                    if (a.isEmpty()) a = "";
                    else {
                        var b = a.h;
                        b = null == b || "string" === typeof b ? b : Qa && b instanceof Uint8Array ? Ma(b) : null;
                        a = a.h = b
                    }
                    return a
                }
            }
    }
    return a
};

function mb(a, b) {
    if (null != a) {
        if (Array.isArray(a)) a = nb(a, b);
        else if (hb(a)) {
            const c = {};
            for (let d in a) c[d] = mb(a[d], b);
            a = c
        } else a = b(a);
        return a
    }
}

function nb(a, b) {
    const c = a.slice();
    for (let d = 0; d < c.length; d++) c[d] = mb(c[d], b);
    fb(a) && gb(c);
    return c
}

function ob(a) {
    if (a && "object" == typeof a && a.toJSON) return a.toJSON();
    a = lb(a);
    return Array.isArray(a) ? nb(a, ob) : a
}

function pb(a) {
    return Ra(a) ? new Uint8Array(a) : a
};
let qb;

function A(a, b, c) {
    var d = qb;
    qb = null;
    a || (a = d);
    d = this.constructor.ma;
    a || (a = d ? [d] : []);
    this.j = (d ? 0 : -1) - (this.constructor.tb || 0);
    this.h = void 0;
    this.u = a;
    a: {
        d = this.u.length;a = d - 1;
        if (d && (d = this.u[a], hb(d))) {
            this.l = a - this.j;
            this.i = d;
            break a
        }
        void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.i = void 0) : this.l = Number.MAX_VALUE
    }
    if (c)
        for (b = 0; b < c.length; b++)
            if (a = c[b], a < this.l) a += this.j, (d = this.u[a]) ? Array.isArray(d) && gb(d) : this.u[a] = rb;
            else {
                d = this.i || (this.i = this.u[this.l + this.j] = {});
                let e = d[a];
                e ? Array.isArray(e) &&
                    gb(e) : d[a] = rb
            }
}
const rb = Object.freeze(gb([]));

function B(a, b, c = !1) {
    return -1 === b ? null : b >= a.l ? a.i ? a.i[b] : void 0 : c && a.i && (c = a.i[b], null != c) ? c : a.u[b + a.j]
}

function sb(a, b, c = !1) {
    let d = B(a, b, c);
    null == d && (d = rb);
    d === rb && (d = gb(d.slice()), C(a, b, d, c));
    return d
}

function C(a, b, c, d = !1) {
    b < a.l && !d ? a.u[b + a.j] = c : (a.i || (a.i = a.u[a.l + a.j] = {}))[b] = c;
    return a
}

function tb(a, b, c, d) {
    (c = ub(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), C(a, c, void 0));
    return C(a, b, d)
}

function ub(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
        const e = b[d];
        null != B(a, e) && (0 !== c && C(a, c, void 0, !1, !0), c = e)
    }
    return c
}

function vb(a, b, c, d, e = !1) {
    if (-1 === c) return null;
    a.h || (a.h = {});
    const f = a.h[c];
    if (f) return f;
    e = B(a, c, e);
    if (null == e && !d) return f;
    b = new b(e);
    return a.h[c] = b
}

function wb(a, b, c, d = !1) {
    a.h || (a.h = {});
    let e = a.h[c];
    if (!e) {
        d = sb(a, c, d);
        e = [];
        for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
        a.h[c] = e
    }
    return e
}

function D(a, b, c, d = !1) {
    a.h || (a.h = {});
    let e = c ? c.u : c;
    a.h[b] = c;
    return C(a, b, e, d)
}

function xb(a, b, c) {
    var d = yb;
    a.h || (a.h = {});
    let e = c ? c.u : c;
    a.h[b] = c;
    tb(a, b, d, e)
}

function zb(a, b, c, d, e) {
    const f = wb(a, c, b, !1);
    c = d ? d : new c;
    a = sb(a, b);
    void 0 != e ? (f.splice(e, 0, c), a.splice(e, 0, c.u)) : (f.push(c), a.push(c.u));
    return c
}
A.prototype.toJSON = function() {
    const a = Ab(this.u);
    return ib ? a : nb(a, ob)
};

function Bb(a, b) {
    return lb(b)
}

function Cb(a) {
    ib = !0;
    try {
        return JSON.stringify(a.toJSON(), Bb)
    } finally {
        ib = !1
    }
}

function Ab(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && fb(h) && !h.length ? h = null : h = Ab(h);
            h != e && (d = !0)
        } else if (g === a.length - 1 && hb(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let m in f) {
                    let l = f[m];
                    if (Array.isArray(l)) {
                        let p = l;
                        Array.isArray(l) && fb(l) && !l.length ? l = null : l = Ab(l);
                        l != p && (k = !0)
                    }
                    null != l ? e[m] = l : k = !0
                }
                if (k) {
                    for (let m in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[g] = h)
    }
    if (!d) return a;
    b || (b = a.slice(0, c));
    f && b.push(f);
    return b
}
A.prototype.clone = function() {
    var a = this.constructor,
        b = nb(this.u, pb);
    qb = b;
    a = new a(b);
    qb = null;
    Db(a, this);
    return a
};

function Db(a, b) {
    b.m && (a.m = b.m.slice());
    const c = b.h;
    if (c) {
        b = b.i;
        for (let f in c) {
            const g = c[f];
            if (g) {
                var d = !(!b || !b[f]),
                    e = +f;
                if (Array.isArray(g)) {
                    if (g.length)
                        for (d = wb(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Db(d[e], g[e])
                } else(d = vb(a, g.constructor, e, void 0, d)) && Db(d, g)
            }
        }
    }
};
const Eb = Symbol();

function Fb(a, b, c) {
    return a[Eb] || (a[Eb] = (d, e) => b(d, e, c))
}

function Gb(a) {
    let b = a[Eb];
    if (!b) {
        const c = Hb(a);
        b = (d, e) => Ib(d, e, c);
        a[Eb] = b
    }
    return b
}

function Jb(a) {
    var b = a.nb;
    if (b) return Gb(b);
    if (b = a.vb) return Fb(a.ta.h, b, a.ub)
}

function Kb(a) {
    const b = Jb(a),
        c = a.ta,
        d = a.Ab.T;
    return b ? (e, f) => d(e, f, c, b) : (e, f) => d(e, f, c)
}
const Lb = Symbol();

function Mb(a, b) {
    a[0] = b
}

function Nb(a, b, c, d) {
    const e = c.T;
    a[b] = d ? (f, g, h) => e(f, g, h, d) : e
}

function Ob(a, b, c, d, e, f) {
    const g = c.T,
        h = Gb(e);
    a[b] = (k, m, l) => g(k, m, l, d, h, f)
}

function Pb(a, b, c, d, e, f, g) {
    const h = c.T,
        k = Fb(d, e, f);
    a[b] = (m, l, p) => h(m, l, p, d, k, g)
}

function Hb(a) {
    var b = a[Lb];
    if (!b) {
        b = a[Lb] = {};
        var c = Mb,
            d = Nb,
            e = Ob,
            f = Pb;
        a = a();
        let h = 0;
        a.length && "number" !== typeof a[0] && (c(b, a[0]), h++);
        for (; h < a.length;) {
            c = a[h++];
            for (var g = h + 1; g < a.length && "number" !== typeof a[g];) g++;
            const k = a[h++];
            g -= h;
            switch (g) {
                case 0:
                    d(b, c, k);
                    break;
                case 1:
                    d(b, c, k, a[h++]);
                    break;
                case 2:
                    e(b, c, k, a[h++], a[h++]);
                    break;
                case 3:
                    g = a[h++];
                    const m = a[h++],
                        l = a[h++];
                    Array.isArray(l) ? e(b, c, k, g, m, l) : f(b, c, k, g, m, l);
                    break;
                case 4:
                    f(b, c, k, a[h++], a[h++], a[h++], a[h++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " +
                        g);
            }
        }
    }
    return b
}

function Ib(a, b, c) {
    for (; ab(b) && 4 != b.i;) {
        var d = b.j,
            e = c[d];
        if (!e) {
            var f = c[0];
            f && (f = f[d]) && (e = c[d] = Kb(f))
        }
        if (!e || !e(b, a, d)) {
            e = b;
            d = a;
            var g = e.l;
            bb(e);
            e.ga || (f = e.h.j, e = e.h.h, e = g === e ? Sa || (Sa = new Uint8Array(0)) : Ua ? f.slice(g, e) : new Uint8Array(f.subarray(g, e)), (f = d.m) ? f.push(e) : d.m = [e])
        }
    }
    return a
}
var Sb = a => {
    var b = Qb,
        c = Rb;
    if (db.length) {
        const e = db.pop();
        if (a) {
            var d = e;
            Wa(d.h, a);
            d.j = -1;
            d.i = -1
        }
        a = e
    } else a = new cb(a);
    try {
        return Ib(new b, a, Hb(c))
    } finally {
        a.h.clear(), a.j = -1, a.i = -1, 100 > db.length && db.push(a)
    }
};

function Tb(a, b) {
    return {
        T: a,
        Gb: b
    }
}
var Ub = Tb(function(a, b, c) {
        if (2 !== a.i) return !1;
        var d = C,
            e = Ya(a.h);
        a = a.h;
        var f = a.h;
        a.h += e;
        Xa(a);
        a = a.j;
        var g;
        if (Ia)(g = Ha) || (g = Ha = new TextDecoder("utf-8", {
            fatal: !1
        })), g = g.decode(a.subarray(f, f + e));
        else {
            e = f + e;
            const k = [];
            let m = null;
            let l, p;
            for (; f < e;) {
                var h = a[f++];
                128 > h ? k.push(h) : 224 > h ? f >= e ? k.push(65533) : (l = a[f++], 194 > h || 128 !== (l & 192) ? (f--, k.push(65533)) : k.push((h & 31) << 6 | l & 63)) : 240 > h ? f >= e - 1 ? k.push(65533) : (l = a[f++], 128 !== (l & 192) || 224 === h && 160 > l || 237 === h && 160 <= l || 128 !== ((g = a[f++]) & 192) ? (f--, k.push(65533)) :
                    k.push((h & 15) << 12 | (l & 63) << 6 | g & 63)) : 244 >= h ? f >= e - 2 ? k.push(65533) : (l = a[f++], 128 !== (l & 192) || 0 !== (h << 28) + (l - 144) >> 30 || 128 !== ((g = a[f++]) & 192) || 128 !== ((p = a[f++]) & 192) ? (f--, k.push(65533)) : (h = (h & 7) << 18 | (l & 63) << 12 | (g & 63) << 6 | p & 63, h -= 65536, k.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : k.push(65533);
                8192 <= k.length && (m = Ga(m, k), k.length = 0)
            }
            g = Ga(m, k)
        }
        d(b, c, g);
        return !0
    }, function(a, b, c) {
        a.i(c, B(b, c))
    }),
    Vb = Tb(function(a, b, c, d, e) {
        if (2 !== a.i) return !1;
        var f = zb(b, c, d);
        b = a.h.i;
        c = Ya(a.h);
        d = a.h.h + c;
        a.h.i = d;
        e(f, a);
        e = d - a.h.h;
        if (0 !== e) throw Error("Message parsing ended unexpectedly. Expected to read " + `${c} bytes, instead read ${c-e} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
        a.h.h = d;
        a.h.i = b;
        return !0
    }, function(a, b, c, d, e) {
        a.h(c, wb(b, d, c), e)
    });

function kb(a, b) {
    const c = this.i;
    if (this.isRepeated) {
        let d;
        if (b) {
            d = gb([]);
            for (let e = 0; e < b.length; e++) d[e] = b[e].u;
            a.h || (a.h = {});
            a.h[c] = b
        } else a.h && (a.h[c] = void 0), d = rb;
        a = C(a, c, d, !0)
    } else a = D(a, c, b, !0);
    return a
};
wa("csi.gstatic.com");
wa("googleads.g.doubleclick.net");
wa("partner.googleadservices.com");
wa("pubads.g.doubleclick.net");
wa("securepubads.g.doubleclick.net");
wa("tpc.googlesyndication.com");
/*

 SPDX-License-Identifier: Apache-2.0
*/
function Wb(a) {
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
var Xb = "client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" ");

function Yb() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        l = m = 0
    }

    function b(p) {
        for (var r = g, n = 0; 64 > n; n += 4) r[n / 4] = p[n] << 24 | p[n + 1] << 16 | p[n + 2] << 8 | p[n + 3];
        for (n = 16; 80 > n; n++) p = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], r[n] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var x = e[1],
            G = e[2],
            H = e[3],
            O = e[4];
        for (n = 0; 80 > n; n++) {
            if (40 > n)
                if (20 > n) {
                    var P = H ^ x & (G ^ H);
                    var la = 1518500249
                } else P = x ^ G ^ H, la = 1859775393;
            else 60 > n ? (P = x & G | H & (x | G), la = 2400959708) : (P = x ^ G ^ H, la = 3395469782);
            P = ((p << 5 | p >>> 27) & 4294967295) + P + O + la + r[n] & 4294967295;
            O = H;
            H = G;
            G = (x << 30 | x >>> 2) & 4294967295;
            x = p;
            p = P
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + x & 4294967295;
        e[2] = e[2] + G & 4294967295;
        e[3] = e[3] + H & 4294967295;
        e[4] = e[4] + O & 4294967295
    }

    function c(p, r) {
        if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var n = [], x = 0, G = p.length; x < G; ++x) n.push(p.charCodeAt(x));
            p = n
        }
        r || (r = p.length);
        n = 0;
        if (0 == m)
            for (; n + 64 < r;) b(p.slice(n, n + 64)), n += 64, l += 64;
        for (; n < r;)
            if (f[m++] = p[n++], l++, 64 == m)
                for (m = 0, b(f); n + 64 < r;) b(p.slice(n, n + 64)), n += 64, l += 64
    }

    function d() {
        var p = [],
            r = 8 * l;
        56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
        for (var n = 63; 56 <= n; n--) f[n] = r & 255, r >>>= 8;
        b(f);
        for (n = r = 0; 5 > n; n++)
            for (var x = 24; 0 <= x; x -= 8) p[r++] = e[n] >> x & 255;
        return p
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var m, l;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ra: function() {
            for (var p = d(), r = "", n = 0; n < p.length; n++) r += "0123456789ABCDEF".charAt(Math.floor(p[n] / 16)) + "0123456789ABCDEF".charAt(p[n] % 16);
            return r
        }
    }
};

function Zb(a, b, c) {
    var d = String(u.location.href);
    return d && a && b ? [b, $b(Wb(d), a, c || null)].join(" ") : null
}

function $b(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], oa(d, function(h) {
        e.push(h)
    }), ac(e.join(" "));
    var f = [],
        g = [];
    oa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    oa(d, function(h) {
        e.push(h)
    });
    a = ac(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function ac(a) {
    var b = Yb();
    b.update(a);
    return b.ra().toLowerCase()
};
const bc = {};

function cc() {
    this.h = document || {
        cookie: ""
    }
}
q = cc.prototype;
q.isEnabled = function() {
    if (!u.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        la: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
q.set = function(a, b, c) {
    let d;
    var e = !1;
    let f;
    if ("object" === typeof c) {
        f = c.Eb;
        e = c.Fb || !1;
        d = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.la
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    c = d ? ";domain=" + d : "";
    g = g ? ";path=" + g : "";
    e = e ? ";secure" : "";
    h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
    this.h.cookie = a + "=" + b + c + g + h + e + (null != f ? ";samesite=" +
        f : "")
};
q.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = ya(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
q.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        la: 0,
        path: b,
        domain: c
    });
    return d
};
q.isEmpty = function() {
    return !this.h.cookie
};
q.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = ya(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function dc() {
    return !!bc.FPA_SAMESITE_PHASE2_MOD || !1
}

function ec(a, b, c, d) {
    (a = u[a]) || (a = (new cc).get(b));
    return a ? Zb(a, c, d) : null
}

function fc() {
    var a = [],
        b = Wb(String(u.location.href));
    const c = [];
    var d = u.__SAPISID || u.__APISID || u.__3PSAPISID || u.__OVERRIDE_SID;
    dc() && (d = d || u.__1PSAPISID);
    if (d) var e = !0;
    else e = new cc, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), dc() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? u.__SAPISID : u.__APISID, d || (d = new cc, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? Zb(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && dc() && ((b = ec("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = ec("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};

function gc() {
    this.j = this.j;
    this.l = this.l
}
gc.prototype.j = !1;
gc.prototype.dispose = function() {
    this.j || (this.j = !0, this.V())
};
gc.prototype.V = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};

function hc(a) {
    var b = v("window.location.href");
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
        var e = a.fileName || a.filename || a.sourceURL || u.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = ic(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, jc[c]) c = jc[c];
                else {
                    c = String(c);
                    if (!jc[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        jc[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = jc[c]
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

function ic(a, b) {
    b || (b = {});
    b[kc(a)] = !0;
    var c = a.stack || "";
    (a = a.qa) && !b[kc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += ic(a, b));
    return c
}

function kc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var jc = {};

function lc(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
var mc = class {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function nc(a) {
    u.setTimeout(() => {
        throw a;
    }, 0)
};
class oc {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = pc.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var pc = new mc(() => new qc, a => a.reset());
class qc {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};

function rc(a, b) {
    sc || tc();
    uc || (sc(), uc = !0);
    vc.add(a, b)
}
var sc;

function tc() {
    var a = u.Promise.resolve(void 0);
    sc = function() {
        a.then(wc)
    }
}
var uc = !1,
    vc = new oc;

function wc() {
    for (var a; a = vc.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            nc(b)
        }
        lc(pc, a)
    }
    uc = !1
};
class xc {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.reject = b
        })
    }
};

function E(a) {
    this.h = 0;
    this.C = void 0;
    this.l = this.i = this.j = null;
    this.m = this.o = !1;
    if (a != ha) try {
        var b = this;
        a.call(void 0, function(c) {
            yc(b, 2, c)
        }, function(c) {
            yc(b, 3, c)
        })
    } catch (c) {
        yc(this, 3, c)
    }
}

function zc() {
    this.next = this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
zc.prototype.reset = function() {
    this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
};
var Ac = new mc(function() {
    return new zc
}, function(a) {
    a.reset()
});

function Bc(a, b, c) {
    var d = Ac.get();
    d.i = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function Cc(a) {
    if (a instanceof E) return a;
    var b = new E(ha);
    yc(b, 2, a);
    return b
}
E.prototype.then = function(a, b, c) {
    return Dc(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
E.prototype.$goog_Thenable = !0;
q = E.prototype;
q.Ha = function(a, b) {
    return Dc(this, null, a, b)
};
q.catch = E.prototype.Ha;
q.cancel = function(a) {
    if (0 == this.h) {
        var b = new Ec(a);
        rc(function() {
            Fc(this, b)
        }, this)
    }
};

function Fc(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? Fc(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Gc(c), Hc(c, e, 3, b)))
            }
            a.j = null
        } else yc(a, 3, b)
}

function Ic(a, b) {
    a.i || 2 != a.h && 3 != a.h || Jc(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function Dc(a, b, c, d) {
    var e = Bc(null, null, null);
    e.h = new E(function(f, g) {
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
                void 0 === k && h instanceof Ec ? g(h) : f(k)
            } catch (m) {
                g(m)
            }
        } : g
    });
    e.h.j = a;
    Ic(a, e);
    return e.h
}
q.Ia = function(a) {
    this.h = 0;
    yc(this, 2, a)
};
q.Ja = function(a) {
    this.h = 0;
    yc(this, 3, a)
};

function yc(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.Ia,
                f = a.Ja;
            if (d instanceof E) {
                Ic(d, Bc(e || ha, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (m) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Kc(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (m) {
                        f.call(a, m);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.C = c, a.h = b, a.j = null, Jc(a), 3 != b || c instanceof Ec || Lc(a, c))
    }
}

function Kc(a, b, c, d, e) {
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

function Jc(a) {
    a.o || (a.o = !0, rc(a.sa, a))
}

function Gc(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
q.sa = function() {
    for (var a; a = Gc(this);) Hc(this, a, this.h, this.C);
    this.o = !1
};

function Hc(a, b, c, d) {
    if (3 == c && b.onRejected && !b.j)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, Mc(b, c, d);
    else try {
        b.j ? b.i.call(b.context) : Mc(b, c, d)
    } catch (e) {
        Nc.call(null, e)
    }
    lc(Ac, b)
}

function Mc(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function Lc(a, b) {
    a.m = !0;
    rc(function() {
        a.m && Nc.call(null, b)
    })
}
var Nc = nc;

function Ec(a) {
    na.call(this, a)
}
ma(Ec, na);
Ec.prototype.name = "cancel";

function F(a) {
    gc.call(this);
    this.C = 1;
    this.m = [];
    this.o = 0;
    this.h = [];
    this.i = {};
    this.M = !!a
}
ma(F, gc);
q = F.prototype;
q.subscribe = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.C;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.C = e + 3;
    d.push(e);
    return e
};
q.ca = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        if (0 != this.o) this.m.push(a), this.h[a + 1] = ha;
        else {
            if (c) {
                var d = Array.prototype.indexOf.call(c, a, void 0);
                0 <= d && Array.prototype.splice.call(c, d, 1)
            }
            delete this.h[a];
            delete this.h[a + 1];
            delete this.h[a + 2]
        }
    }
    return !!b
};
q.Z = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.M)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Oc(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.o++;
                try {
                    for (e = 0, f = c.length; e < f && !this.j; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.o--, 0 < this.m.length && 0 == this.o)
                        for (; c = this.m.pop();) this.ca(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Oc(a, b, c) {
    rc(function() {
        a.apply(b, c)
    })
}
q.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.ca, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
q.V = function() {
    F.Ea.V.call(this);
    this.clear();
    this.m.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Pc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Rc = class extends A {
        constructor(a) {
            super(a)
        }
        getKey() {
            return B(this, 1)
        }
        ia() {
            return B(this, 2 === ub(this, Qc) ? 2 : -1)
        }
        setValue(a) {
            return tb(this, 2, Qc, a)
        }
    },
    Qc = [2, 3, 4, 5, 6];
var Sc = class extends A {
    constructor(a) {
        super(a)
    }
};
var Uc = class extends A {
        constructor() {
            super(void 0, -1, Tc)
        }
        getPlayerType() {
            return B(this, 36)
        }
        setHomeGroupInfo(a) {
            return D(this, 81, a)
        }
    },
    Tc = [9, 66, 24, 32, 86, 100, 101];
var Wc = class extends A {
        constructor() {
            super(void 0, -1, Vc)
        }
    },
    Vc = [15, 26, 28];
var Xc = class extends A {
    constructor(a) {
        super(a)
    }
    setToken(a) {
        return C(this, 2, a)
    }
};
var Zc = class extends A {
        constructor(a) {
            super(a, -1, Yc)
        }
        setSafetyMode(a) {
            return C(this, 5, a)
        }
    },
    Yc = [12];
var ad = class extends A {
        constructor(a) {
            super(a, -1, $c)
        }
    },
    $c = [12];
var bd = class extends A {
    constructor(a) {
        super(a)
    }
};
var cd = {
    eb: 0,
    Oa: 1,
    Ua: 2,
    Va: 4,
    ab: 8,
    Wa: 16,
    Xa: 32,
    cb: 64,
    bb: 128,
    Qa: 256,
    Sa: 512,
    Za: 1024,
    Ra: 2048,
    Ta: 4096,
    Pa: 8192,
    Ya: 16384
};

function dd(a, b) {
    D(a, 1, b)
}
var ed = class extends A {
    constructor() {
        super(void 0)
    }
    B(a) {
        C(this, 2, a)
    }
};

function fd(a, b) {
    D(a, 1, b)
}
var gd = class extends A {
    constructor() {
        super(void 0)
    }
};

function hd(a, b) {
    D(a, 2, b)
}
var jd = class extends A {
        constructor() {
            super(void 0, -1, id)
        }
        B(a) {
            C(this, 1, a)
        }
    },
    id = [3];
var kd = class extends A {
    constructor() {
        super(void 0)
    }
    B(a) {
        C(this, 1, a)
    }
};
var ld = class extends A {
    constructor() {
        super(void 0)
    }
    B(a) {
        C(this, 1, a)
    }
};
var md = class extends A {
    constructor() {
        super(void 0)
    }
    B(a) {
        C(this, 1, a)
    }
};
var nd = class extends A {
    constructor() {
        super(void 0)
    }
};
var od = class extends A {
    constructor() {
        super(void 0)
    }
};
var pd = class extends A {
        constructor(a) {
            super(a, 421)
        }
    },
    yb = [23, 24, 11, 6, 7, 5, 2, 3, 20, 21, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 157, 158, 159, 163, 164, 168, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 201, 203, 204, 205, 206, 258, 259, 260, 261, 209, 226, 227, 232, 233, 234, 240, 247, 248, 251, 254, 255, 270, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328, 330, 331, 332, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355,
        356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 388, 389, 403, 412, 413, 414, 415, 416, 417, 418, 419, 420, 117
    ];
var qd = class extends A {
    constructor() {
        super(void 0)
    }
};
var sd = class extends A {
        constructor() {
            super(void 0)
        }
        setVideoId(a) {
            return tb(this, 1, rd, a)
        }
        getPlaylistId() {
            return B(this, 2 === ub(this, rd) ? 2 : -1)
        }
    },
    rd = [1, 2];
var ud = class extends A {
        constructor() {
            super(void 0, -1, td)
        }
    },
    td = [3];
var vd = ["notification/convert_endpoint_to_url"],
    wd = ["notification/record_interactions"],
    xd = ["notification_registration/set_registration"];
var yd = class extends A {
    constructor(a) {
        super(a, 1)
    }
};
var zd = class extends A {
        constructor(a) {
            super(a)
        }
    },
    Ad = function(a, b, c, d, e = 0) {
        return new jb(a, b, c, e)
    }(406606992, {
        rb: 0
    }, zd, void 0);
var Bd = class extends zd {};
var Cd, Dd, Ed;
const Fd = u.window,
    I = (null === (Cd = null === Fd || void 0 === Fd ? void 0 : Fd.yt) || void 0 === Cd ? void 0 : Cd.config_) || (null === (Dd = null === Fd || void 0 === Fd ? void 0 : Fd.ytcfg) || void 0 === Dd ? void 0 : Dd.data_) || {},
    Gd = (null === (Ed = null === Fd || void 0 === Fd ? void 0 : Fd.ytcfg) || void 0 === Ed ? void 0 : Ed.obfuscatedData_) || [];
let Hd = new class extends yd {}(Gd);
const Id = I.EXPERIMENT_FLAGS;
if (!Id || !Id.jspb_i18n_extension) {
    var Jd = new Bd;
    Ad.j(Hd, Jd)
}
w("yt.config_", I);
w("yt.configJspb_", Gd);

function J(...a) {
    a = arguments;
    1 < a.length ? I[a[0]] = a[1] : 1 === a.length && Object.assign(I, a[0])
}

function K(a, b) {
    return a in I ? I[a] : b
};

function L(a) {
    a = Kd(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function Ld(a, b) {
    a = Kd(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function Md() {
    return K("EXPERIMENTS_TOKEN", "")
}

function Kd(a) {
    const b = K("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : K("EXPERIMENT_FLAGS", {})[a]
}

function Nd() {
    const a = [],
        b = K("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c in b) a.push({
        key: c,
        value: String(b[c])
    });
    c = K("EXPERIMENT_FLAGS", {});
    for (let d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
let Od = 0;
w("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++Od));
const Pd = [];

function Qd(a) {
    Pd.forEach(b => b(a))
}

function Rd(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Sd(b)
        }
    } : a
}

function Sd(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = K("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), J("ERRORS", b));
    Qd(a)
}

function Td(a) {
    var b = v("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = K("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), J("ERRORS", b))
};
w("ytEventsEventsListeners", u.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", u.ytEventsEventsCounter || {
    count: 0
});

function Ud(a, b) {
    "function" === typeof a && (a = Rd(a));
    return window.setTimeout(a, b)
};

function Vd(a, b) {
    Wd(a, 2, b)
}
var Xd = class {
    h(a) {
        Wd(a, 1, void 0)
    }
};

function Wd(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = v("yt.scheduler.instance.addJob");
    d ? d(a, b, c) : void 0 === c ? a() : Ud(a, c || 0)
}
var Yd = class extends Xd {
    start() {
        const a = v("yt.scheduler.instance.start");
        a && a()
    }
};
Yd.h || (Yd.h = new Yd);
var Zd = Yd.h;

function $d() {
    const a = v("_lact", window);
    var b;
    null == a ? b = -1 : b = Math.max(Date.now() - a, 0);
    return b
};
const ae = /^[\w.]*$/,
    be = {
        q: !0,
        search_query: !0
    };

function ce(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = de(h[0] || ""),
                m = de(h[1] || "");
            k in c ? Array.isArray(c[k]) ? qa(c[k], m) : c[k] = [c[k], m] : c[k] = m
        } catch (k) {
            var d = k,
                e = h[0];
            const m = String(ce);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: ee == m ? "unchanged" : m
            }];
            be.hasOwnProperty(e) || Td(d)
        }
    }
    return c
}
const ee = String(ce);

function fe(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return ce(a, "&")
}

function ge(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = fe(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Da(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.substr(0, f), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function he(a) {
    if (!b) var b = window.location.href;
    const c = a.match(z)[1] || null,
        d = Ba(a.match(z)[3] || null);
    c && d ? (a = a.match(z), b = b.match(z), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ba(b.match(z)[3] || null) == d && (Number(b.match(z)[4] || null) || null) == (Number(a.match(z)[4] || null) || null) : !0;
    return a
}

function de(a) {
    return a && a.match(ae) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
Date.now();
[...Xb];
let ie = !1;

function je(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = ke(a, b);
    const d = le(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || u;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                m = l => {
                    l = l || {};
                    k ? b.onSuccess && b.onSuccess.call(e, l, h) : b.onError && b.onError.call(e, l, h);
                    b.onFinish && b.onFinish.call(e, l, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(m, function() {
                m(null)
            }): m(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    b.onFetchTimeout && 0 < b.timeout && (g = Ud(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || u))
    }, b.timeout))
}

function ke(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = K("XSRF_FIELD_NAME", void 0);
    if (b = b.urlParams) b[c] && delete b[c], a = ge(a, b || {}, !0);
    return a
}

function le(a, b) {
    const c = K("XSRF_FIELD_NAME", void 0),
        d = K("XSRF_TOKEN", void 0);
    var e = b.postBody || "",
        f = b.postParams;
    const g = K("XSRF_FIELD_NAME", void 0);
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ba(a.match(z)[3] || null) && !b.withCredentials && Ba(a.match(z)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    f && "string" === typeof e && (e = fe(e), ua(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
        JSON.stringify(e) : Da(e));
    f = e || f && !ra(f);
    !ie && f && "POST" != b.method && (ie = !0, Sd(Error("AJAX request with postData should use POST")));
    return e
};
u.ytPubsubPubsubInstance || new F;
const me = window;
var M = me.ytcsi && me.ytcsi.now ? me.ytcsi.now : me.performance && me.performance.timing && me.performance.now && me.performance.timing.navigationStart ? () => me.performance.timing.navigationStart + me.performance.now() : () => (new Date).getTime();
const ne = Ld("initial_gel_batch_timeout", 2E3),
    oe = Math.pow(2, 16) - 1;
let N = void 0;
class pe {
    constructor() {
        this.j = this.h = this.i = 0
    }
}
const qe = new pe,
    re = new pe;
let se = !0;
const te = u.ytLoggingTransportGELQueue_ || new Map,
    ue = u.ytLoggingTransportGELProtoQueue_ || new Map,
    ve = u.ytLoggingTransportTokensToCttTargetIds_ || {},
    we = u.ytLoggingTransportTokensToJspbCttTargetIds_ || {};

function xe(a, b) {
    if ("log_event" === a.endpoint) {
        var c = ye(a),
            d = te.get(c) || [];
        te.set(c, d);
        d.push(a.payload);
        ze(b, d, c)
    }
}

function Ae(a, b) {
    if ("log_event" === a.endpoint) {
        var c = ye(a, !0),
            d = ue.get(c) || [];
        ue.set(c, d);
        d.push(a.payload);
        ze(b, d, c, !0)
    }
}

function ze(a, b, c, d = !1) {
    a && (N = new a);
    a = Ld("tvhtml5_logging_max_batch") || Ld("web_logging_max_batch") || 100;
    const e = M(),
        f = d ? re.j : qe.j;
    b.length >= a ? Be({
        writeThenSend: !0
    }, L("flush_only_full_queue") ? c : void 0, d) : 10 <= e - f && (Ce(d), d ? re.j = e : qe.j = e)
}

function De(a, b) {
    if ("log_event" === a.endpoint) {
        var c = ye(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (N = new b);
        return new E(e => {
            N && N.isReady() ? Ee(d, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Fe(a, b) {
    if ("log_event" === a.endpoint) {
        var c = ye(a, !0),
            d = new Map;
        d.set(c, [a.payload]);
        b && (N = new b);
        return new E(e => {
            N && N.isReady() ? Ge(d, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function ye(a, b = !1) {
    var c = "";
    if (a.K) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new sd;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && tb(d, 2, rd, c.playlistId);
            we[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), ve[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function Be(a = {}, b, c = !1) {
    new E(d => {
        c ? (window.clearTimeout(re.i), window.clearTimeout(re.h), re.h = 0) : (window.clearTimeout(qe.i), window.clearTimeout(qe.h), qe.h = 0);
        if (N && N.isReady())
            if (void 0 !== b)
                if (c) {
                    var e = new Map,
                        f = ue.get(b) || [];
                    e.set(b, f);
                    Ge(e, d, a);
                    ue.delete(b)
                } else e = new Map, f = te.get(b) || [], e.set(b, f), Ee(e, d, a), te.delete(b);
        else c ? (Ge(ue, d, a), ue.clear()) : (Ee(te, d, a), te.clear());
        else Ce(c), d()
    })
}

function Ce(a = !1) {
    if (L("web_gel_timeout_cap") && (!a && !qe.h || a && !re.h)) {
        var b = Ud(() => {
            Be({
                writeThenSend: !0
            }, void 0, a)
        }, 6E4);
        a ? re.h = b : qe.h = b
    }
    window.clearTimeout(a ? re.i : qe.i);
    b = K("LOGGING_BATCH_TIMEOUT", Ld("web_gel_debounce_ms", 1E4));
    L("shorten_initial_gel_batch_timeout") && se && (b = ne);
    b = Ud(() => {
        Be({
            writeThenSend: !0
        }, void 0, a)
    }, b);
    a ? re.i = b : qe.i = b
}

function Ee(a, b, c = {}, d) {
    var e = N;
    const f = Math.round(M());
    let g = a.size;
    for (const [m, l] of a) {
        var h = m,
            k = l;
        a = sa({
            context: He(e.config_ || Ie())
        });
        a.events = k;
        (k = ve[h]) && Je(a, h, k);
        delete ve[h];
        h = "visitorOnlyApprovedKey" === h;
        Ke(a, f, h);
        Le(c);
        Me(e, a, Ne(c, h, () => {
            g--;
            g || b()
        }, () => {
            g--;
            g || b()
        }, d));
        se = !1
    }
}

function Ge(a, b, c = {}, d) {
    var e = N;
    const f = Math.round(M());
    let g = a.size;
    for (const [l, p] of a) {
        var h = l,
            k = p;
        a = new ud;
        var m = Oe(e.config_ || Ie());
        D(a, 1, m);
        for (m = 0; m < k.length; m++) zb(a, 3, pd, k[m], void 0);
        (k = we[h]) && Pe(a, h, k);
        delete we[h];
        h = "visitorOnlyApprovedKey" === h;
        Qe(a, f, h);
        Le(c);
        a = Cb(a);
        h = Ne(c, h, () => {
            g--;
            g || b()
        }, () => {
            g--;
            g || b()
        }, d);
        h.headers = {
            "Content-Type": "application/json+protobuf"
        };
        h.postBodyFormat = "JSPB";
        h.postBody = a;
        Me(e, "", h);
        se = !1
    }
}

function Le(a) {
    L("always_send_and_write") && (a.writeThenSend = !1)
}

function Ne(a, b, c, d, e) {
    return {
        retry: !0,
        onSuccess: c,
        onError: d,
        wb: a,
        K: b,
        ob: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: ""
    }
}

function Ke(a, b, c) {
    a.requestTimeMs = String(b);
    L("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = K("EVENT_ID", void 0)) && (c = Re(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function Qe(a, b, c) {
    C(a, 2, b);
    if (!c && (b = K("EVENT_ID", void 0))) {
        c = Re();
        const d = new qd;
        C(d, 1, b);
        C(d, 2, c);
        D(a, 5, d)
    }
}

function Re() {
    let a = K("BATCH_CLIENT_COUNTER", void 0) || 0;
    a || (a = Math.floor(Math.random() * oe / 2));
    a++;
    a > oe && (a = 1);
    J("BATCH_CLIENT_COUNTER", a);
    return a
}

function Je(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
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

function Pe(a, b, c) {
    let d;
    if (B(c, 1 === ub(c, rd) ? 1 : -1)) d = 1;
    else if (c.getPlaylistId()) d = 2;
    else return;
    D(a, 4, c);
    a = vb(a, ad, 1) || new ad;
    c = vb(a, Zc, 3) || new Zc;
    const e = new Xc;
    e.setToken(b);
    C(e, 1, d);
    zb(c, 12, Xc, e, void 0);
    D(a, 3, c)
};
const Se = u.ytLoggingGelSequenceIdObj_ || {};

function Q(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || M());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = $d();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    L("log_sequence_info_on_gel_web") && d.A && (a = e.context, b = d.A, b = {
        index: Te(b),
        groupKey: b
    }, a.sequence = b, d.ha && delete Se[d.A]);
    (d.Da ? De : xe)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        K: d.K
    }, c)
}

function Te(a) {
    Se[a] = a in Se ? Se[a] + 1 : 0;
    return Se[a]
};
w("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});

function Ue() {
    return "INNERTUBE_API_KEY" in I && "INNERTUBE_API_VERSION" in I
}

function Ie() {
    return {
        innertubeApiKey: K("INNERTUBE_API_KEY", void 0),
        innertubeApiVersion: K("INNERTUBE_API_VERSION", void 0),
        W: K("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        wa: K("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        xa: K("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: K("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
        ka: K("INNERTUBE_CONTEXT_HL", void 0),
        ja: K("INNERTUBE_CONTEXT_GL", void 0),
        ya: K("INNERTUBE_HOST_OVERRIDE", void 0) || "",
        Aa: !!K("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        za: !!K("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: K("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
    }
}

function He(a) {
    const b = {
        client: {
            hl: a.ka,
            gl: a.ja,
            clientName: a.wa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.W
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = u.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = Md();
    "" !== c && (b.client.experimentsToken = c);
    c = Nd();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    Ve(a, void 0, b);
    K("DELEGATED_SESSION_ID") && !L("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: K("DELEGATED_SESSION_ID")
    });
    a = Object;
    c = a.assign;
    var d = b.client,
        e = K("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(fe(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion = k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function Oe(a) {
    const b = new ad,
        c = new Uc;
    C(c, 1, a.ka);
    C(c, 2, a.ja);
    C(c, 16, a.xa);
    C(c, 17, a.innertubeContextClientVersion);
    if (a.W) {
        var d = a.W,
            e = new Sc;
        d.coldConfigData && C(e, 1, d.coldConfigData);
        d.appInstallData && C(e, 6, d.appInstallData);
        d.coldHashData && C(e, 3, d.coldHashData);
        d.hotHashData && C(e, 5, d.hotHashData);
        D(c, 62, e)
    }(d = u.devicePixelRatio) && 1 != d && C(c, 65, d);
    d = Md();
    "" !== d && C(c, 54, d);
    d = Nd();
    if (0 < d.length) {
        e = new Wc;
        for (let f = 0; f < d.length; f++) {
            const g = new Rc;
            C(g, 1, d[f].key);
            g.setValue(d[f].value);
            zb(e, 15, Rc, g,
                void 0)
        }
        D(b, 5, e)
    }
    Ve(a, c);
    K("DELEGATED_SESSION_ID") && !L("pageid_as_header_web") && (a = new Zc, C(a, 3, K("DELEGATED_SESSION_ID")));
    a = K("DEVICE", "");
    for (const [f, g] of Object.entries(fe(a))) a = f, d = g, "cbrand" === a ? C(c, 12, d) : "cmodel" === a ? C(c, 13, d) : "cbr" === a ? C(c, 87, d) : "cbrver" === a ? C(c, 88, d) : "cos" === a ? C(c, 18, d) : "cosver" === a ? C(c, 19, d) : "cplatform" === a && C(c, 42, d);
    D(b, 1, c);
    return b
}

function Ve(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = vb(b, Sc, 62)) ? d : new Sc;
            C(c, 6, a.appInstallData);
            D(b, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function We(a, b, c = {}) {
    const d = {
        "X-Goog-Visitor-Id": c.visitorData || K("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.lb || K("AUTHORIZATION")) || (a ? b = `Bearer ${v("gapi.auth.getToken")().kb}` : b = fc());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = K("SESSION_INDEX", 0), L("pageid_as_header_web") && (d["X-Goog-PageId"] = K("DELEGATED_SESSION_ID")));
    return d
};
const Xe = [];
let Ye, Ze = !1;

function $e(a) {
    Ze || (Ye ? Ye.handleError(a) : (Xe.push({
        type: "ERROR",
        payload: a
    }), 10 < Xe.length && Xe.shift()))
}

function af(a, b) {
    Ze || (Ye ? Ye.O(a, b) : (Xe.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < Xe.length && Xe.shift()))
};
var R = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};

function bf() {
    if (void 0 !== K("DATASYNC_ID", void 0)) return K("DATASYNC_ID", void 0);
    throw new R("Datasync ID not set", "unknown");
};

function cf(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function df(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const ef = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    ff = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    gf = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var S = class extends R {
        constructor(a, b = {}, c = ef[a], d = ff[a], e = gf[a]) {
            super(c, Object.assign({
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, S.prototype)
        }
    },
    hf = class extends S {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, ef.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, hf.prototype)
        }
    },
    jf = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, jf.prototype)
        }
    };
const kf = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function lf(a, b, c, d) {
    b = df(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof S) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new S("QUOTA_EXCEEDED", a);
    if (Ja && "UnknownError" === e.name) return new S("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof jf) return new S("MISSING_INDEX", Object.assign(Object.assign({}, a), {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && kf.some(f => e.message.includes(f))) return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new S("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign(Object.assign({}, a), {
        name: "IdbError",
        xb: e.name
    })];
    e.level = "WARNING";
    return e
}

function mf(a, b, c) {
    return new S("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function nf(a) {
    if (!a) throw Error();
    throw a;
}

function of (a) {
    return a
}
var pf = class {
    constructor(a) {
        this.h = a
    }
};

function rf(a) {
    return new T(new pf((b, c) => {
        a instanceof T ? a.then(b, c) : b(a)
    }))
}

function sf(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof T ? tf(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function uf(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof T ? tf(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function tf(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof T ? tf(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var T = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new T(new pf((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) rf(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static reject(a) {
        return new T(new pf((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null !== a && void 0 !== a ? a : of ,
            d = null !== b && void 0 !== b ? b : nf;
        return new T(new pf((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                sf(this, this, c, e, f)
            }), this.onRejected.push(() => {
                uf(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? sf(this, this, c, e, f) : "REJECTED" === this.state.status && uf(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function vf(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function wf(a) {
    return new Promise((b, c) => {
        vf(a, b, c)
    })
}

function U(a) {
    return new T(new pf((b, c) => {
        vf(a, b, c)
    }))
};

function xf(a, b) {
    return new T(new pf((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function V(a, b, c, d) {
    return t(function*() {
        const e = {
            mode: "readonly",
            H: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.H ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const m = Math.round(M());
            try {
                const l = a.h.transaction(b, e.mode);
                var k = d;
                const p = new yf(l),
                    r = yield zf(p, k), n = Math.round(M());
                Af(a, m, n, g, void 0, b.join(), e);
                return r
            } catch (l) {
                k = Math.round(M());
                const p = lf(l, a.h.name, b.join(), a.h.version);
                if (p instanceof S && !p.h || g >= f) Af(a, m, k, g, p, b.join(), e),
                    h = p
            }
        }
        return Promise.reject(h)
    })
}

function Bf(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Cf(a)
}

function Df(a, b, c, d) {
    return V(a, [b], {
        mode: "readwrite",
        H: !0
    }, e => {
        e = e.objectStore(b);
        return U(e.h.put(c, d))
    })
}

function Af(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof S && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && af("QUOTA_EXCEEDED", {
        dbName: df(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof S && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), af("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Ef(a, !1, d, f, b, g.tag), $e(e)) : Ef(a, !0, d, f, b, g.tag)
}

function Ef(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    af("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Ff = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(M());
        this.i = !1
    }
    add(a, b, c) {
        return V(this, [a], {
            mode: "readwrite",
            H: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return V(this, [a], {
            mode: "readwrite",
            H: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return V(this, [a], {
            mode: "readonly",
            H: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return V(this, [a], {
            mode: "readwrite",
            H: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return V(this, [a], {
            mode: "readonly",
            H: !0
        }, c => c.objectStore(a).get(b))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Gf(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Hf(a).then(d => xf(d, c))
}

function If(a, b) {
    return Gf(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var Cf = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return U(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return U(this.h.clear()).then(() => {})
    }
    count(a) {
        return U(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? If(this, a) : U(this.h.delete(a))
    }
    get(a) {
        return U(this.h.get(a))
    }
    index(a) {
        try {
            return new Jf(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new jf(a, this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function zf(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var yf = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = S;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new S("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Cf(a), this.j.set(a, b));
        return b
    }
};

function Kf(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Hf(a).then(f => xf(f, c))
}
var Jf = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return U(this.h.count(a))
    }
    delete(a) {
        return Kf(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return U(this.h.get(a))
    }
    getKey(a) {
        return U(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Hf(a) {
    return U(a).then(b => b ? new Lf(a, b) : null)
}
var Lf = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Hf(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Hf(this.request)
    }
    delete() {
        return U(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    ia() {
        return this.cursor.value
    }
    update(a) {
        return U(this.cursor.update(a))
    }
};

function Mf(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.Ga,
            m = c.upgrade,
            l = c.closed;
        let p;
        const r = () => {
            p || (p = new Ff(f.result, {
                closed: l
            }));
            return p
        };
        f.addEventListener("upgradeneeded", n => {
            try {
                if (null === n.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                n.dataLoss && "none" !== n.dataLoss && af("IDB_DATA_CORRUPTED", {
                    reason: n.dataLossMessage || "unknown reason",
                    dbName: df(a)
                });
                const x = r(),
                    G = new yf(f.transaction);
                m && m(x, H => n.oldVersion < H && n.newVersion >= H, G);
                G.done.catch(H => {
                    e(H)
                })
            } catch (x) {
                e(x)
            }
        });
        f.addEventListener("success", () => {
            const n = f.result;
            h && n.addEventListener("versionchange", () => {
                h(r())
            });
            n.addEventListener("close", () => {
                af("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: df(a),
                    dbVersion: n.version
                });
                k && k()
            });
            d(r())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Nf(a, b, c = {}) {
    return Mf(a, b, c)
}

function Of(a, b = {}) {
    return t(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.blocked;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield wf(c)
        } catch (c) {
            throw lf(c, a, "", -1);
        }
    })
};

function Pf(a) {
    return new Promise(b => {
        Vd(() => {
            b()
        }, a)
    })
}

function Qf(a, b) {
    return new S("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function Rf(a) {
    if (!a.l) throw Qf(a);
    if (a.h) return a.h;
    let b;
    const c = () => {
            a.h === b && (a.h = void 0)
        },
        d = {
            blocking: f => {
                f.close()
            },
            closed: c,
            Ga: c,
            upgrade: a.options.upgrade
        },
        e = () => t(function*() {
            var f, g, h = null !== (f = Error().stack) && void 0 !== f ? f : "";
            try {
                const l = yield a.j(a.name, a.options.version, d);
                var k = l,
                    m = a.options;
                const p = [];
                for (const r of Object.keys(m.L)) {
                    const {
                        N: n,
                        Bb: x = Number.MAX_VALUE
                    } = m.L[r];
                    !(k.h.version >= n) || k.h.version >= x || k.h.objectStoreNames.contains(r) || p.push(r)
                }
                if (0 !== p.length) {
                    const r = Object.keys(a.options.L),
                        n = l.objectStoreNames();
                    if (a.o < Ld("ytidb_reopen_db_retries", 0)) return a.o++, l.close(), $e(new S("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                        dbName: a.name,
                        expectedObjectStores: r,
                        foundObjectStores: n
                    })), e();
                    if (a.m < Ld("ytidb_remake_db_retries", 1)) return a.m++, L("ytidb_remake_db_enable_backoff_delay") && (yield Pf(a.i), a.i *= 2), yield a.delete(), $e(new S("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                        dbName: a.name,
                        expectedObjectStores: r,
                        foundObjectStores: n
                    })), e();
                    throw new hf(n, r);
                }
                return l
            } catch (l) {
                if (l instanceof DOMException ? "VersionError" === l.name : "DOMError" in self && l instanceof DOMError ? "VersionError" === l.name : l instanceof Object && "message" in l &&
                    "An attempt was made to open a database using a lower version than the existing version." === l.message) {
                    h = yield a.j(a.name, void 0, Object.assign(Object.assign({}, d), {
                        upgrade: void 0
                    }));
                    k = h.h.version;
                    if (void 0 !== a.options.version && k > a.options.version + 1) throw h.close(), a.l = !1, Qf(a, k);
                    return h
                }
                c();
                l instanceof Error && !L("ytidb_async_stack_killswitch") && (l.stack = `${l.stack}\n${h.substring(h.indexOf("\n")+1)}`);
                throw lf(l, a.name, "", null !== (g = a.options.version) && void 0 !== g ? g : -1);
            }
        });
    b = e();
    a.h = b;
    return a.h
}

function Sf(a, b) {
    if (!b) throw mf("openWithToken", df(a.name));
    return Rf(a)
}
var Tf = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.l = !0;
        this.o = this.m = 0;
        this.i = 500
    }
    j(a, b, c = {}) {
        return Nf(a, b, c)
    }
    delete(a = {}) {
        return Of(this.name, a)
    }
};
const Uf = new Tf("YtIdbMeta", {
    L: {
        databases: {
            N: 1
        }
    },
    upgrade(a, b) {
        b(1) && Bf(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Vf(a, b) {
    return t(function*() {
        return V(yield Sf(Uf, b), ["databases"], {
            H: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return U(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function Wf(a, b) {
    return t(function*() {
        if (a) return (yield Sf(Uf, b)).delete("databases", a)
    })
};
let Xf;
const Yf = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function Zf() {
    return t(function*() {
        return !0
    })
}

function $f() {
    if (void 0 !== Xf) return Xf;
    Ze = !0;
    return Xf = Zf().then(a => {
        Ze = !1;
        return a
    })
}

function ag() {
    const a = v("ytglobal.idbToken_") || void 0;
    return a ? Promise.resolve(a) : $f().then(b => {
        (b = b ? Yf : void 0) && w("ytglobal.idbToken_", b);
        return b
    })
};
new xc;

function bg(a) {
    try {
        bf();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new S("AUTH_INVALID", {
        dbName: a
    }), $e(a), a;
    b = bf();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function cg(a, b, c, d) {
    return t(function*() {
        var e, f = null !== (e = Error().stack) && void 0 !== e ? e : "",
            g = yield ag();
        if (!g) throw g = mf("openDbImpl", a, b), L("ytidb_async_stack_killswitch") || (g.stack = `${g.stack}\n${f.substring(f.indexOf("\n")+1)}`), $e(g), g;
        cf(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : bg(a);
        try {
            return yield Vf(f, g), yield Nf(f.actualName, b, d)
        } catch (h) {
            try {
                yield Wf(f.actualName, g)
            } catch (k) {}
            throw h;
        }
    })
}

function dg(a, b, c = {}) {
    return cg(a, b, !1, c)
}

function eg(a, b, c = {}) {
    return cg(a, b, !0, c)
}

function fg(a, b = {}) {
    return t(function*() {
        const c = yield ag();
        if (c) {
            cf(a);
            var d = bg(a);
            yield Of(d.actualName, b);
            yield Wf(d.actualName, c)
        }
    })
}

function gg(a, b = {}) {
    return t(function*() {
        const c = yield ag();
        c && (cf(a), yield Of(a, b), yield Wf(a, c))
    })
};

function hg(a) {
    this.version = 1;
    this.args = a
};

function ig() {
    var a = jg;
    this.topic = "screen-created";
    this.h = a
}
ig.prototype.toString = function() {
    return this.topic
};
const kg = v("ytPubsub2Pubsub2Instance") || new F;
F.prototype.subscribe = F.prototype.subscribe;
F.prototype.unsubscribeByKey = F.prototype.ca;
F.prototype.publish = F.prototype.Z;
F.prototype.clear = F.prototype.clear;
w("ytPubsub2Pubsub2Instance", kg);
const lg = v("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", lg);
const mg = v("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", mg);
const ng = v("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", ng);
w("ytPubsub2Pubsub2SkipSubKey", null);

function og(a) {
    var b = pg;
    const c = qg();
    c && c.publish.call(c, b.toString(), b, a)
}

function rg(a) {
    var b = pg;
    const c = qg();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = v("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (lg[d]) try {
                if (f && b instanceof ig && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.oa) {
                            const n = new h;
                            h.oa = n.version
                        }
                        var m = h.oa
                    } catch (n) {}
                    if (!m || k.version != m) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        m = Reflect;
                        var l = m.construct; {
                            var p = k.args;
                            const n = p.length;
                            if (0 < n) {
                                const x = Array(n);
                                for (k = 0; k < n; k++) x[k] = p[k];
                                var r = x
                            } else r = []
                        }
                        f = l.call(m, h, r)
                    } catch (n) {
                        throw n.message = "yt.pubsub2.Data.deserialize(): " + n.message, n;
                    }
                } catch (n) {
                    throw n.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + n.message, n;
                }
                a.call(window, f)
            } catch (n) {
                Sd(n)
            }
        }, ng[b.toString()] ? v("yt.scheduler.instance") ? Zd.h(g) : Ud(g, 0) : g())
    });
    lg[d] = !0;
    mg[b.toString()] || (mg[b.toString()] = []);
    mg[b.toString()].push(d);
    return d
}

function sg() {
    var a = tg;
    const b = rg(function(c) {
        a.apply(void 0, arguments);
        ug(b)
    });
    return b
}

function ug(a) {
    const b = qg();
    b && ("number" === typeof a && (a = [a]), oa(a, c => {
        b.unsubscribeByKey(c);
        delete lg[c]
    }))
}

function qg() {
    return v("ytPubsub2Pubsub2Instance")
};

function vg(a, b) {
    let c;
    return () => {
        c || (c = new wg(a, b));
        return c
    }
}
var wg = class extends Tf {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        cf(a)
    }
    j(a, b, c = {}) {
        return (this.options.aa ? eg : dg)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.aa ? gg : fg)(this.name, a)
    }
};
const xg = ["client.name", "client.version"];

function yg(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? xg.includes(b.key) : !1);
    return a
};
var zg;
zg = vg("ServiceWorkerLogsDatabase", {
    L: {
        SWHealthLog: {
            N: 1
        }
    },
    aa: !0,
    upgrade: (a, b) => {
        b(1) && Bf(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Ag(a, b) {
    return t(function*() {
        var c = yield Sf(zg(), b), d = K("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = yg(e.clientError));
        e.interface = d;
        return Df(c, "SWHealthLog", e)
    })
};
const Bg = u.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    potentialEsfErrorCounter: 0
};
w("ytNetworklessLoggingInitializationOptions", Bg);

function Me(a, b, c) {
    !K("VISITOR_DATA") && .01 > Math.random() && Td(new R("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!a.isReady()) throw a = new R("innertube xhrclient not ready", "log_event", b, c), Sd(a), a;
    const d = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (l, p) => {
            if (c.onSuccess) c.onSuccess(p)
        },
        onFetchSuccess: l => {
            if (c.onSuccess) c.onSuccess(l)
        },
        onError: (l, p) => {
            if (c.onError) c.onError(p)
        },
        onFetchError: l => {
            if (c.onError) c.onError(l)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    d.headers["Content-Type"] || (d.headers["Content-Type"] = "application/json");
    b = "";
    var e = a.config_.ya;
    e && (b = e);
    e = We(a.config_.Aa || !1, b, c);
    Object.assign(d.headers, e);
    (e = d.headers.Authorization) && !b && (d.headers["x-origin"] = window.location.origin);
    const f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.za && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    const k = ge(`${b}${f}`, g || {}, !0),
        m = () => {
            try {
                je(k,
                    d)
            } catch (l) {
                if ("InvalidAccessError" == l.name) Td(Error("An extension is blocking network request."));
                else throw l;
            }
        };
    !L("use_new_nwl") && v("ytNetworklessLoggingInitializationOptions") && Bg.isNwlInitialized ? $f().then(l => {
        m(l)
    }) : m(!1)
}
class Cg {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Ue() && (this.config_ = Ie())
    }
    isReady() {
        !this.config_ && Ue() && (this.config_ = Ie());
        return !!this.config_
    }
};
let Dg = Cg;

function W(a, b, c = {}) {
    let d = Dg;
    K("ytLoggingEventsDefaultDisabled", !1) && Dg == Cg && (d = null);
    Q(a, b, d, c)
};
let Eg = Date.now().toString();
var Fg;
let Gg = u.ytLoggingDocDocumentNonce_;
if (!Gg) {
    var Hg;
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            const d = Array(16),
                e = new Uint8Array(16);
            window.crypto.getRandomValues(e);
            for (let f = 0; f < d.length; f++) d[f] = e[f];
            Hg = d;
            break a
        } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++) c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (Eg) {
            let d = 1;
            for (let e = 0; e < Eg.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ Eg.charCodeAt(e), d++
        }
        Hg = c
    }
    const a = Hg,
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
        63));
    Gg = b.join("")
}
Fg = Gg;
let Ig = Cg;
var Jg = {
    Ma: 0,
    Ka: 1,
    La: 2,
    fb: 3,
    Na: 4,
    jb: 5,
    gb: 6,
    ib: 7,
    hb: 8,
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
let Kg = 1;

function Lg(a) {
    const b = Kg++;
    return new Mg({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    })
}

function Ng(a, b) {
    return new Mg({
        veType: a,
        youtubeData: b,
        jspbYoutubeData: void 0
    })
}
var Mg = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        return a
    }
    getAsJspb() {
        const a = new bd;
        void 0 !== this.h.trackingParams ? C(a, 1, this.h.trackingParams) :
            (void 0 !== this.h.veType && C(a, 2, this.h.veType), void 0 !== this.h.veCounter && C(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && C(a, 3, this.h.elementIndex));
        if (void 0 !== this.h.dataElement) {
            var b = this.h.dataElement.getAsJspb();
            D(a, 7, b)
        }
        void 0 !== this.h.youtubeData && D(a, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams && !!this.h.veType
    }
};

function Og(a = 0) {
    return 0 == a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function Pg(a = 0) {
    return 0 == a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Qg(a = 0) {
    return K(Pg(a), void 0)
}

function Rg(a = 0) {
    return (a = Qg(a)) ? Ng(a) : null
}

function Sg() {
    let a = K("csn-to-ctt-auth-info");
    a || (a = {}, J("csn-to-ctt-auth-info", a));
    return a
}

function X(a = 0) {
    let b = K(Og(a));
    if (!b && !K("USE_CSN_FALLBACK", !0)) return null;
    b || !L("use_undefined_csn_any_layer") && 0 != a || (b = "UNDEFINED_CSN");
    return b ? b : null
}

function Tg(a, b, c) {
    const d = Sg();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function Ug(a) {
    return Sg()[a]
}

function Vg(a, b, c = 0, d) {
    if (a !== K(Og(c)) || b !== K(Pg(c))) Tg(a, d, c), J(Og(c), a), J(Pg(c), b), b = () => {
        setTimeout(() => {
            if (a) {
                const e = {
                    clientDocumentNonce: Fg,
                    clientScreenNonce: a
                };
                L("use_default_heartbeat_client") ? W("foregroundHeartbeatScreenAssociated", e) : Q("foregroundHeartbeatScreenAssociated", e, Ig)
            }
        }, 0)
    }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b()
};
const Wg = [{
    Y: a => `Cannot read property '${a.key}'`,
    S: {
        Error: [{
            v: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            v: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            v: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            v: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            v: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            v: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            v: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    Y: a => `Cannot call '${a.key}'`,
    S: {
        TypeError: [{
            v: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            v: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            v: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            v: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            v: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            v: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    Y: a => `${a.key} is not defined`,
    S: {
        ReferenceError: [{
            v: /(.*) is not defined/,
            groups: ["key"]
        }, {
            v: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var Yg = {
    G: [],
    D: [{
        pa: Xg,
        weight: 500
    }]
};

function Xg(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function Zg() {
    if (!$g) {
        var a = $g = new ah;
        a.G.length = 0;
        a.D.length = 0;
        bh(a, Yg)
    }
    return $g
}

function bh(a, b) {
    b.G && a.G.push.apply(a.G, b.G);
    b.D && a.D.push.apply(a.D, b.D)
}
var ah = class {
        constructor() {
            this.D = [];
            this.G = []
        }
    },
    $g;
const ch = new F;

function dh(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = eh(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = eh(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = eh(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function eh(a) {
    let b = a(),
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

function fh(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += gh(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = dh(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? gh(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += gh(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = hh(a), d += c[b].length;
    else c[b] = hh(a), d += c[b].length;
    return d
}

function gh(a, b, c, d) {
    c += `.${a}`;
    a = hh(b);
    d[c] = a;
    return c.length + a.length
}

function hh(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};
var ih = new Set,
    jh = 0,
    kh = 0,
    lh = 0,
    mh = [];
const nh = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function oh(a) {
    ph(a)
}

function qh(a) {
    ph(a, "WARNING")
}

function ph(a, b = "ERROR") {
    var c = {};
    c.name = K("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = K("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
    rh(a, c || {}, b)
}

function rh(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (L("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= jh)) {
            d = mh;
            var e = hc(a);
            const G = e.message || "Unknown Error",
                H = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${H}: ${G}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let O = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(O = fh(a.args[h], `params.${h}`, b, O), 500 <= O); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const P = a.params;
                if ("object" === typeof a.params)
                    for (h in P) {
                        if (!P[h]) continue;
                        const la = `params.${h}`,
                            qf = hh(P[h]);
                        b[la] = qf;
                        O += la.length + qf.length;
                        if (500 < O) break
                    } else b.params = hh(P)
            }
            if (d.length)
                for (h = 0; h < d.length && !(O = fh(d[h], `params.context.${h}`, b, O), 500 <= O); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: G,
                name: H,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = Zg();d = b;
                for (k of a.G)
                    if (d.message && d.message.match(k.Ba)) {
                        k = k.weight;
                        break a
                    }
                for (var m of a.D)
                    if (m.pa(d)) {
                        k =
                            m.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var l of Wg)
                if (l.S[k.name]) {
                    m = l.S[k.name];
                    for (var p of m)
                        if (m = k.message.match(p.v)) {
                            k.params["params.error.original"] = m[0];
                            a = p.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = m[d + 1], k.params[`params.error.${a[d]}`] = m[d + 1];
                            k.message = l.Y(b);
                            break
                        }
                }
            k.params || (k.params = {});
            l = Zg();
            k.params["params.errorServiceSignature"] = `msg=${l.G.length}&cb=${l.D.length}`;
            k.params["params.serviceWorker"] = "true";
            u.document && u.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            wa("sample").constructor !== va && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !ih.has(k.message)) {
                "ERROR" === c ? (ch.Z("handleError", k), L("record_app_crashed_web") && 0 === lh && 1 === k.sampleWeight && (lh++, l = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, L("report_client_error_with_app_crash_ks") || (l.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: k.message
                            }
                        }
                    }
                }), W("appCrashed",
                    l)), kh++) : "WARNING" === c && ch.Z("handleWarning", k);
                b: {
                    for (r of nh)
                        if ((l = za()) && 0 <= l.toLowerCase().indexOf(r.toLowerCase())) {
                            var r = !0;
                            break b
                        }
                    r = !1
                }
                if (r) var n = void 0;
                else {
                    l = {
                        stackTrace: k.stack
                    };
                    k.fileName && (l.filename = k.fileName);
                    r = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                    0 !== r.length && (1 !== r.length || isNaN(Number(r[0])) ? 2 !== r.length || isNaN(Number(r[0])) || isNaN(Number(r[1])) || (l.lineNumber = Number(r[0]), l.columnNumber = Number(r[1])) : l.lineNumber = Number(r[0]));
                    r = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: k.message,
                        errorClassName: k.name,
                        sampleWeight: k.sampleWeight
                    };
                    "ERROR" === c ? r.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && (r.level = "ERROR_LEVEL_WARNNING");
                    l = {
                        isObfuscated: !0,
                        browserStackInfo: l
                    };
                    p = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    K("FEXP_EXPERIMENTS") && (p.experimentIds = K("FEXP_EXPERIMENTS"));
                    m = K("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0);
                    a = I.EXPERIMENT_FLAGS;
                    if ((!a || !a.web_disable_gel_stp_ecatcher_killswitch) && m)
                        for (var x of Object.keys(m)) p.kvPairs.push({
                            key: x,
                            value: String(m[x])
                        });
                    if (x = k.params)
                        for (n of Object.keys(x)) p.kvPairs.push({
                            key: `client.${n}`,
                            value: String(x[n])
                        });
                    n = K("SERVER_NAME", void 0);
                    x = K("SERVER_VERSION", void 0);
                    n && x && (p.kvPairs.push({
                        key: "server.name",
                        value: n
                    }), p.kvPairs.push({
                        key: "server.version",
                        value: x
                    }));
                    n = {
                        errorMetadata: p,
                        stackTrace: l,
                        logMessage: r
                    }
                }
                n && (W("clientError", n), ("ERROR" === c || L("errors_flush_gel_always_killswitch")) && Be());
                try {
                    ih.add(k.message)
                } catch (P) {}
                jh++
            }
        }
    }
};
const sh = u.ytLoggingGelSequenceIdObj_ || {};

function th(a, b, c = {}) {
    var d = Math.round(c.timestamp || M());
    C(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
    var e = $d();
    d = new od;
    C(d, 1, c.timestamp || !isFinite(e) ? -1 : e);
    if (L("log_sequence_info_on_gel_web") && c.A) {
        e = c.A;
        const f = Te(e),
            g = new nd;
        C(g, 2, f);
        C(g, 1, e);
        D(d, 3, g);
        c.ha && delete sh[c.A]
    }
    D(a, 33, d);
    (c.Da ? Fe : Ae)({
        endpoint: "log_event",
        payload: a,
        cttAuthInfo: c.cttAuthInfo,
        K: c.K
    }, b)
};

function uh(a, b = {}) {
    let c = !1;
    K("ytLoggingEventsDefaultDisabled", !1) && Dg === Cg && (c = !0);
    th(a, c ? null : Dg, b)
};

function vh(a, b, c) {
    const d = new pd;
    xb(d, 72, a);
    c ? th(d, c, b) : uh(d, b)
}

function wh(a, b, c) {
    const d = new pd;
    xb(d, 73, a);
    c ? th(d, c, b) : uh(d, b)
}

function xh(a, b, c) {
    const d = new pd;
    xb(d, 78, a);
    c ? th(d, c, b) : uh(d, b)
}

function yh(a, b, c) {
    const d = new pd;
    xb(d, 208, a);
    c ? th(d, c, b) : uh(d, b)
}

function zh(a, b, c) {
    const d = new pd;
    xb(d, 156, a);
    c ? th(d, c, b) : uh(d, b)
}

function Ah(a, b, c) {
    const d = new pd;
    xb(d, 215, a);
    c ? th(d, c, b) : uh(d, b)
};
class jg extends hg {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const pg = new ig,
    Bh = [];
let Dh = Ch,
    Eh = 0;

function Fh(a, b, c, d, e, f, g) {
    const h = Dh();
    f = Ng(b, f);
    e = {
        cttAuthInfo: e,
        A: h
    };
    const k = () => {
        qh(new R("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (L("il_via_jspb")) {
        const m = new ed;
        m.B(h);
        dd(m, f.getAsJspb());
        c && c.visualElement ? (f = new gd, c.clientScreenNonce && C(f, 2, c.clientScreenNonce), fd(f, c.visualElement.getAsJspb()), g && C(f, 4, cd[g]), D(m, 5, f)) : c && k();
        d && C(m, 3, d);
        zh(m, e, a)
    } else f = {
        csn: h,
        pageVe: f.getAsJson()
    }, c && c.visualElement ? (f.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    }, g && (f.implicitGesture.gestureType = g)) : c && k(), d && (f.cloneCsn = d), a ? Q("screenCreated", f, a, e) : W("screenCreated", f, e);
    og(new jg(h));
    return h
}

function Gh(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: Ug(b),
            A: b
        };
    for (const g of d) d = g.getAsJson(), (ra(d) || !d.trackingParams && !d.veType) && qh(Error("Child VE logged with no data"));
    if (L("il_via_jspb")) {
        const g = new jd;
        g.B(b);
        hd(g, c.getAsJspb());
        pa(e, h => {
            h = h.getAsJspb();
            zb(g, 3, bd, h, void 0)
        });
        "UNDEFINED_CSN" == b ? Y("visualElementAttached", g, f) : Ah(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: pa(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" == b ? Y("visualElementAttached", c, f) : a ? Q("visualElementAttached", c, a, f) : W("visualElementAttached", c, f)
}

function Hh(a, b, c, d) {
    const e = {
        cttAuthInfo: Ug(b),
        A: b
    };
    L("il_via_jspb") ? (d = new ld, d.B(b), c = c.getAsJspb(), D(d, 2, c), C(d, 4, 1), "UNDEFINED_CSN" == b ? Y("visualElementShown", d, e) : vh(d, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (c.clientData = d), "UNDEFINED_CSN" == b ? Y("visualElementShown", c, e) : a ? Q("visualElementShown", c, a, e) : W("visualElementShown", c, e))
}

function Ih(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: Ug(b),
        A: b,
        ha: d
    };
    L("il_via_jspb") ? (e = new ld, e.B(b), c = c.getAsJspb(), D(e, 2, c), C(e, 4, d ? 16 : 8), "UNDEFINED_CSN" == b ? Y("visualElementHidden", e, f) : wh(e, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" == b ? Y("visualElementHidden", d, f) : a ? Q("visualElementHidden", d, a, f) : W("visualElementHidden", d, f))
}

function Jh(a, b, c, d) {
    var e = "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = {
        cttAuthInfo: Ug(b),
        A: b
    };
    L("il_via_jspb") ? (d = new kd, d.B(b), c = c.getAsJspb(), D(d, 2, c), C(d, 4, cd[e]), "UNDEFINED_CSN" == b ? Y("visualElementGestured", d, f) : xh(d, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    }, d && (e.clientData = d), "UNDEFINED_CSN" == b ? Y("visualElementGestured", e, f) : a ? Q("visualElementGestured", e, a, f) : W("visualElementGestured", e, f))
}

function Ch() {
    for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return Ma(b, 3)
}

function Y(a, b, c) {
    Bh.push({
        payloadName: a,
        payload: b,
        options: c
    });
    Eh || (Eh = sg())
}

function tg(a) {
    if (Bh) {
        for (let b of Bh)
            if (b.payload)
                if (L("il_via_jspb")) switch (b.payload.B(a.csn), b.payloadName) {
                    case "screenCreated":
                        zh(b.payload, b.options);
                        break;
                    case "visualElementAttached":
                        Ah(b.payload, b.options);
                        break;
                    case "visualElementShown":
                        vh(b.payload, b.options);
                        break;
                    case "visualElementHidden":
                        wh(b.payload, b.options);
                        break;
                    case "visualElementGestured":
                        xh(b.payload, b.options);
                        break;
                    case "visualElementStateChanged":
                        yh(b.payload, b.options);
                        break;
                    default:
                        qh(new R("flushQueue unable to map payloadName to JSPB setter"))
                } else b.payload.csn =
                    a.csn, Q(b.payloadName, b.payload, null, b.options);
        Bh.length = 0
    }
    Eh = 0
};

function Kh(a, b) {
    return b.data && b.data.loggingDirectives ? b.data.loggingDirectives.trackingParams || "" : b.data && b.data.trackingParams || ""
}

function Lh(a, b) {
    const c = X(void 0);
    return null !== a.j && c != a.j ? (qh(new R("VisibilityLogger called before newScreen()", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: c
    })), null) : c
}

function Mh(a) {
    return parseInt(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "", 10) || 1
}

function Nh(a, b) {
    var c = Kh(0, b),
        d = b.visualElement ? b.visualElement : c;
    const e = a.m.has(d),
        f = a.i.get(d);
    a.m.add(d);
    a.i.set(d, !0);
    b.h && !e && b.h();
    if (c || b.visualElement)
        if (d = Lh(a, b)) {
            var g = !(!b.data || !b.data.loggingDirectives);
            if (Mh(b) || g) {
                c = b.visualElement ? b.visualElement : new Mg({
                    trackingParams: c
                });
                var h = b.i;
                g || e ? Mh(b) & 4 ? f || (a = a.h, b = {
                    cttAuthInfo: Ug(d),
                    A: d
                }, L("il_via_jspb") ? (h = new ld, h.B(d), c = c.getAsJspb(), D(h, 2, c), C(h, 4, 4), "UNDEFINED_CSN" == d ? Y("visualElementShown", h, b) : vh(h, b, a)) : (c = {
                    csn: d,
                    ve: c.getAsJson(),
                    eventType: 4
                }, h && (c.clientData = h), "UNDEFINED_CSN" == d ? Y("visualElementShown", c, b) : a ? Q("visualElementShown", c, a, b) : W("visualElementShown", c, b))) : Mh(b) & 1 && !e && Hh(a.h, d, c, h) : Hh(a.h, d, c, h)
            }
        }
}
class Oh {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.i = new Map;
        this.j = null;
        this.h = Cg
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.i.clear();
        this.j = null
    }
}(function() {
    var a = Oh;
    a.X = void 0;
    a.s = function() {
        return a.X ? a.X : a.X = new a
    }
})();
var Ph = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Qh = ["notifications_register", "notifications_check_registration"];
let Rh = null;

function Z(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Sh().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Th() {
    return Z("IndexedDBCheck", "testing IndexedDB").then(() => Uh("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Uh(a) {
    const b = new R("Error accessing DB");
    return Sh().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Sh() {
    return Rh ? Promise.resolve(Rh) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Rh = d, a(Rh);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Sh()
        };
        c.onupgradeneeded = Vh
    })
}

function Vh(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Wh = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Xh(a) {
    if (1 === a.length) return a[0];
    var b = Wh.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Wh).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Yh(a) {
    return `/youtubei/v1/${Xh(a)}`
};
const Zh = window;
class $h {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var ai = Zh.performance || Zh.mozPerformance || Zh.msPerformance || Zh.webkitPerformance || new $h;
ka(ai.clearResourceTimings || ai.webkitClearResourceTimings || ai.mozClearResourceTimings || ai.msClearResourceTimings || ai.oClearResourceTimings || ha, ai);
w("ytLoggingLatencyUsageStats_", u.ytLoggingLatencyUsageStats_ || {});

function bi() {
    ci.h || (ci.h = new ci);
    return ci.h
}

function di(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.j = () => {
        ei(a, b, c);
        var d = Rg(c.layer);
        if (d) {
            for (var e of a.m) fi(a, e[0], e[1] || d, c.layer);
            for (const k of a.C) {
                e = X(0);
                var f = k[0] || Rg(0);
                if (e && f) {
                    d = a.client;
                    var g = f,
                        h = k[1];
                    f = {
                        cttAuthInfo: Ug(e),
                        A: e
                    };
                    L("il_via_jspb") ? (h = new md, h.B(e), g = g.getAsJspb(), D(h, 2, g), "UNDEFINED_CSN" == e ? Y("visualElementStateChanged", h, f) : yh(h, f, d)) : (g = {
                        csn: e,
                        ve: g.getAsJson(),
                        clientData: h
                    }, "UNDEFINED_CSN" == e ? Y("visualElementStateChanged", g, f) : d ? Q("visualElementStateChanged", g, d, f) : W("visualElementStateChanged",
                        g, f))
                }
            }
        }
    };
    X(c.layer) || a.j();
    if (c.fa)
        for (const d of c.fa) gi(a, d, c.layer);
    else ph(Error("Delayed screen needs a data promise."))
}

function ei(a, b, c = {}) {
    c.layer || (c.layer = 0);
    var d = void 0 !== c.Ca ? c.Ca : c.layer;
    var e = X(d);
    d = Rg(d);
    let f;
    d && (void 0 !== c.parentCsn ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && "UNDEFINED_CSN" !== e && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const h = K("EVENT_ID");
    "UNDEFINED_CSN" === e && h && (g = {
        servletData: {
            serializedServletEventId: h
        }
    });
    let k;
    try {
        k = Fh(a.client, b, f, c.ea, c.cttAuthInfo, g, c.sb)
    } catch (l) {
        a = l;
        c = [{
            Db: b,
            rootVe: d,
            parentVisualElement: void 0,
            qb: e,
            yb: f,
            ea: c.ea
        }];
        a.args || (a.args = []);
        a.args.push(...c);
        ph(l);
        return
    }
    Vg(k, b, c.layer, c.cttAuthInfo);
    if ((b = e && "UNDEFINED_CSN" !== e && d) && !(b = L("screen_manager_skip_hide_killswitch"))) {
        a: {
            for (m of Object.values(Jg))
                if (X(m) == e) {
                    var m = !0;
                    break a
                }
            m = !1
        }
        b = !m
    }
    b && Ih(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = k || "");
    d = Oh.s();
    d.clear();
    d.j = X();
    d = Rg(c.layer);
    e && "UNDEFINED_CSN" !== e && d && (L("web_mark_root_visible") || L("music_web_mark_root_visible")) && Hh(void 0, k, d, void 0);
    a.i.delete(c.layer || 0);
    a.j = void 0;
    for (const [l, p] of a.M) e =
        l, p.has(c.layer) && d && fi(a, e, d, c.layer);
    for (c = 0; c < a.l.length; c++) {
        e = a.l[c];
        try {
            e()
        } catch (l) {
            ph(l)
        }
    }
    a.l.length = 0;
    for (c = 0; c < a.o.length; c++) {
        e = a.o[c];
        try {
            e()
        } catch (l) {
            ph(l)
        }
    }
}

function hi(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    [28631].includes(b) || (qh(new R("createClientScreen() called with a non-page VE", b)), b = 83769);
    c.isHistoryNavigation || a.h.push({
        rootVe: b,
        key: c.key || ""
    });
    a.m = [];
    a.C = [];
    c.fa ? di(a, b, c) : ei(a, b, c)
}

function gi(a, b, c = 0) {
    b.then(d => {
        var e, f;
        a.i.has(c) && a.j && a.j();
        const g = X(c),
            h = Rg(c);
        g && h && ((null === (e = null === d || void 0 === d ? void 0 : d.response) || void 0 === e ? 0 : e.trackingParams) && Gh(a.client, g, h, [new Mg({
            trackingParams: d.response.trackingParams
        })]), (null === (f = null === d || void 0 === d ? void 0 : d.playerResponse) || void 0 === f ? 0 : f.trackingParams) && Gh(a.client, g, h, [new Mg({
            trackingParams: d.playerResponse.trackingParams
        })]))
    })
}

function fi(a, b, c, d = 0) {
    if (a.i.has(d)) a.m.push([b, c]);
    else {
        var e = X(d);
        c = c || Rg(d);
        e && c && Gh(a.client, e, c, [b])
    }
}

function ii(a, b) {
    b = new Mg({
        trackingParams: b
    });
    fi(a, b, void 0, 8);
    return b
}

function ji(a, b, c = 0) {
    (c = X(c)) && Jh(a.client, c, b, void 0)
}

function ki(a, b, c, d = 0) {
    if (!b) return !1;
    d = X(d);
    if (!d) return !1;
    Jh(a.client, d, new Mg({
        trackingParams: b
    }), c);
    return !0
}

function li(a, b) {
    const c = b.va && b.va();
    b.visualElement ? ji(a, b.visualElement, c) : (b = Kh(Oh.s(), b), ki(a, b, void 0, c))
}
var ci = class {
    constructor() {
        this.m = [];
        this.C = [];
        this.h = [];
        this.l = [];
        this.o = [];
        this.i = new Set;
        this.M = new Map
    }
    clickCommand(a, b, c = 0) {
        return ki(this, a.clickTrackingParams, b, c)
    }
};
var mi = class extends A {
    constructor(a) {
        super(a)
    }
};
var ni = class extends A {
    constructor(a) {
        super(a)
    }
};
ni.ma = "yt.sw.adr";

function oi(a) {
    return t(function*() {
        var b = yield u.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new ni).constructor.ma) {
                    b = new ni(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function pi(a = !1) {
    const b = qi.h;
    return t(function*() {
        if (a || !b.h) b.h = oi(b).then(b.j).catch(c => {
            delete b.h;
            ph(c)
        });
        return b.h
    })
}
var qi = class {
    constructor() {
        this.i = `${self.location.origin}/sw.js_data`
    }
    j(a) {
        const b = vb(a, mi, 2);
        if (b) {
            const c = B(b, 5);
            c && (u.__SAPISID = c);
            null != B(b, 7) && J("VISITOR_DATA", B(b, 7));
            null != B(b, 4) && J("SESSION_INDEX", String(B(b, 4)));
            null != B(b, 8) && J("DELEGATED_SESSION_ID", B(b, 8))
        }
        return a
    }
};

function ri(a) {
    const b = {};
    var c = fc();
    c && (b.Authorization = c, c = a = null === a || void 0 === a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(K("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), b["X-Goog-AuthUser"] = c, "INNERTUBE_HOST_OVERRIDE" in I || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in I && (b["X-Goog-PageId"] = K("DELEGATED_SESSION_ID")));
    return b
}
var si = class {
    constructor() {
        this.Fa = !0
    }
};
var ti = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function ui(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var vi = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        var c, d, e;
        b = (null === (d = null === (c = b.I.context) || void 0 === c ? void 0 : c.request) || void 0 === d ? void 0 : d.consistencyTokenJars) || [];
        if (a = null === (e = a.responseContext) || void 0 === e ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            ui(this, a)
        }
    }
};

function wi() {
    var a = K("INNERTUBE_CONTEXT");
    if (!a) return ph(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = sa(a);
    L("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Md();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    vi.h || (vi.h = new vi);
    b = vi.h.h;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign(Object.assign({}, a.request), {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};

function xi(a) {
    var b = a;
    if (a = K("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(z);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var yi = class {};
const zi = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends yi {})
};

function Ai(a) {
    var b = {
        pb: {}
    };
    si.h || (si.h = new si);
    var c = si.h;
    if (void 0 !== Bi.h) {
        const d = Bi.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new R("InnerTubeTransportService is already initialized", a);
    } else Bi.h = new Bi(b, a, c)
}

function Ci(a, b, c) {
    return t(function*() {
        var d;
        if (a.j.Fa) {
            const e = null === (d = null === b || void 0 === b ? void 0 : b.da) || void 0 === d ? void 0 : d.sessionIndex;
            d = ri({
                sessionIndex: e
            });
            d = Object.assign(Object.assign({}, Di(c)), d)
        } else d = Ei(b, c);
        return d
    })
}

function Fi(a, b, c) {
    return t(function*() {
        var d, e, f, g;
        const h = null === (d = b.config) || void 0 === d ? void 0 : d.Cb;
        if (h && a.h.has(h) && L("web_memoize_inflight_requests")) return a.h.get(h);
        if (null === (e = null === b || void 0 === b ? void 0 : b.I) || void 0 === e ? 0 : e.context)
            for (var k of []) k.zb(b.I.context);
        if (null === (f = a.i) || void 0 === f ? 0 : f.l(b.input, b.I)) return a.i.j(b.input, b.I);
        k = JSON.stringify(b.I);
        b.U = Object.assign(Object.assign({}, b.U), {
            headers: c
        });
        let m = Object.assign({}, b.U);
        "POST" === b.U.method && (m = Object.assign(Object.assign({},
            m), {
            body: k
        }));
        k = a.l.fetch(b.input, m, b.config);
        h && a.h.set(h, k);
        k = yield k;
        h && a.h.has(h) && a.h.delete(h);
        !k && (null === (g = a.i) || void 0 === g ? 0 : g.h(b.input, b.I)) && (k = yield a.i.i(b.input, b.I));
        return k
    })
}

function Gi(a, b, c) {
    var d = {
        da: {
            identity: ti
        }
    };
    b.context || (b.context = wi());
    return new E(e => t(function*() {
        var f = xi(c);
        f = he(f) ? "same-origin" : "cors";
        f = yield Ci(a, d, f);
        var g = xi(c);
        var h = {};
        K("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null === f || void 0 === f ? 0 : f.Authorization) || (h.key = K("INNERTUBE_API_KEY"));
        L("json_condensed_response") && (h.prettyPrint = "false");
        g = ge(g, h || {}, !1);
        h = {
            method: "POST",
            mode: he(g) ? "same-origin" : "cors",
            credentials: he(g) ? "same-origin" : "include"
        };
        e(Fi(a, {
                input: g,
                U: h,
                I: b,
                config: d
            },
            f))
    }))
}

function Ei(a, b) {
    return t(function*() {
        var c, d = {
            sessionIndex: null === (c = null === a || void 0 === a ? void 0 : a.da) || void 0 === c ? void 0 : c.sessionIndex
        };
        d = yield Cc(ri(d));
        return Promise.resolve(Object.assign(Object.assign({}, Di(b)), d))
    })
}

function Di(a) {
    const b = {
            "Content-Type": "application/json"
        },
        c = K("VISITOR_DATA");
    c && (b["X-Goog-Visitor-Id"] = c);
    "cors" !== a && ((a = K("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = K("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = K("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), L("forward_domain_admin_state_on_embeds") && (a = K("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var Bi = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ba || (a.ba = {});
        a.ba = Object.assign(Object.assign({}, zi), a.ba)
    }
};
let Hi;

function Ii() {
    Hi || (Ai({
        fetch: (a, b) => Cc(fetch(new Request(a, b)))
    }), Hi = Bi.h);
    return Hi
};

function Ji(a) {
    return t(function*() {
        yield Ki();
        qh(a)
    })
}

function Li(a) {
    t(function*() {
        var b = yield ag();
        b ? yield Ag(a, b): (yield pi(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && W(b.payloadName, b.payload))
    })
}

function Ki() {
    return t(function*() {
        try {
            yield pi()
        } catch (a) {}
    })
};
const Mi = {
    granted: "GRANTED",
    denied: "DENIED",
    unknown: "UNKNOWN"
};

function Ni(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (Z("IDToken", b), Oi()) : "notifications_check_registration" === a && Pi(b)
}

function Qi() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Ri(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Si(a) {
    return t(function*() {
        const b = Ri(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Yh(vd);
        return Ti().then(e => Gi(e, c, d).then(f => {
            f.json().then(g => {
                if (!g || !g.endpointUrl) return Promise.resolve();
                a.payload.chrome.postedEndpoint && Ui(a.payload.chrome.postedEndpoint);
                return Vi(a, g.endpointUrl)
            })
        }))
    })
}

function Wi(a, b) {
    var c = X(8);
    return null != c && b ? `${a}&parentCsn=${c}&parentTrackingParams=${b}` : a
}

function Vi(a, b) {
    var c;
    a.deviceId && Z("DeviceId", a.deviceId);
    a.timestampSec && Z("TimestampLowerBound", a.timestampSec);
    const d = a.payload.chrome,
        e = bi();
    hi(e);
    const f = null === (c = d.postedEndpoint) || void 0 === c ? void 0 : c.clickTrackingParams;
    if (f) {
        var g = ii(e, f);
        var h = Lg(82046);
        var k = Lg(74726);
        fi(e, h, g, 8);
        fi(e, k, g, 8);
        g = {
            na: 8,
            visualElement: g
        };
        k = {
            na: 8,
            visualElement: h
        };
        h = {
            na: 8,
            visualElement: h
        }
    }
    const m = {
        body: d.body,
        icon: d.iconUrl,
        data: {
            nav: Wi(b, f),
            id: d.notificationId,
            attributionTag: d.attributionTag,
            clickEndpoint: d.clickEndpoint,
            parentElement: g,
            cancelElement: k,
            dismissalElement: h,
            isDismissed: !0
        },
        tag: d.notificationTag || d.title + d.body + d.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(d.title, m).then(() => {
        var l, p, r;
        (null === (l = m.data) || void 0 === l ? 0 : l.parentElement) && Nh(Oh.s(), m.data.parentElement);
        (null === (p = m.data) || void 0 === p ? 0 : p.cancelElement) && Nh(Oh.s(), m.data.cancelElement);
        (null === (r = m.data) || void 0 === r ? 0 : r.dismissalElement) && Nh(Oh.s(), m.data.dismissalElement);
        Xi(a.displayCap)
    }).catch(() => {})
}

function Ui(a) {
    if (!a.recordNotificationInteractionsEndpoint) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest
        },
        c = Yh(wd);
    return Ti().then(d => Gi(d, b, c))
}

function Xi(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        var c;
        for (let d = 0; d < b.length - a; d++) b[d].data.isDismissed = !1, b[d].close(), (null === (c = b[d].data) || void 0 === c ? 0 : c.cancelElement) && li(bi(), b[d].data.cancelElement)
    })
}

function Pi(a) {
    const b = [Yi(a), Uh("RegistrationTimestamp").then(Zi), $i(), aj(), bj()];
    Promise.all(b).catch(() => {
        Z("IDToken", a);
        Oi();
        return Promise.resolve()
    })
}

function Zi(a) {
    a = a || 0;
    return 9E7 >= Date.now() - a ? Promise.resolve() : Promise.reject()
}

function Yi(a) {
    return Uh("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function $i() {
    return Uh("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function aj() {
    return Uh("Endpoint").then(a => cj().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function bj() {
    return Uh("application_server_key").then(a => dj().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function ej() {
    var a = Notification.permission;
    if (Mi[a]) return Mi[a]
}

function Oi() {
    Z("RegistrationTimestamp", 0);
    Promise.all([cj(), fj(), gj(), dj()]).then(([a, b, c, d]) => {
        b = b ? Ph(b) : null;
        c = c ? Ph(c) : null;
        d = d ? Ma(new Uint8Array(d), 4) : null;
        hj(a, b, c, d)
    }).catch(() => {
        hj()
    })
}

function hj(a = null, b = null, c = null, d = null) {
    Th().then(e => {
        e && (Z("Endpoint", a), Z("P256dhKey", b), Z("AuthKey", c), Z("application_server_key", d), Z("Permission", Notification.permission), Promise.all([Uh("DeviceId"), Uh("NotificationsDisabled")]).then(([f, g]) => {
            if (null !== f && void 0 !== f) var h = f;
            else {
                f = [];
                var k;
                h = h || Pc.length;
                for (k = 0; 256 > k; k++) f[k] = Pc[0 | Math.random() * h];
                h = f.join("")
            }
            ij(h, null !== a && void 0 !== a ? a : void 0, null !== b && void 0 !== b ? b : void 0, null !== c && void 0 !== c ? c : void 0, null !== d && void 0 !== d ? d : void 0, null !==
                g && void 0 !== g ? g : void 0)
        }))
    })
}

function ij(a, b, c, d, e, f) {
    t(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: ej()
                    }
                }
            },
            h = Yh(xd);
        return Ti().then(k => Gi(k, g, h).then(() => {
            Z("DeviceId", a);
            Z("RegistrationTimestamp", Date.now());
            Z("TimestampLowerBound", Date.now())
        }, m => {
            Ji(m)
        }))
    })
}

function cj() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function fj() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function gj() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function dj() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Ti() {
    return t(function*() {
        try {
            return yield pi(!0), Ii()
        } catch (a) {
            return yield Ji(a), Promise.reject(a)
        }
    })
};
let jj = void 0;

function kj(a) {
    return t(function*() {
        jj || (jj = yield a.open("yt-appshell-assets"));
        return jj
    })
}

function lj(a, b) {
    return t(function*() {
        const c = yield kj(a), d = b.map(e => mj(c, e));
        return Promise.all(d)
    })
}

function nj(a, b) {
    return t(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function oj(a, b) {
    return t(function*() {
        const c = yield kj(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function pj(a, b, c) {
    return t(function*() {
        yield(yield kj(a)).put(b, c)
    })
}

function qj(a, b) {
    t(function*() {
        yield(yield kj(a)).delete(b)
    })
}

function mj(a, b) {
    return t(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var rj;
rj = vg("yt-serviceworker-metadata", {
    L: {
        auth: {
            N: 1
        },
        ["resource-manifest-assets"]: {
            N: 2
        }
    },
    aa: !0,
    upgrade(a, b) {
        b(1) && Bf(a, "resource-manifest-assets");
        b(2) && Bf(a, "auth")
    },
    version: 2
});
let sj = null;

function tj(a) {
    return Sf(rj(), a)
}

function uj() {
    const a = Date.now();
    return IDBKeyRange.bound(0, a)
}

function vj(a, b) {
    return t(function*() {
        yield V(yield tj(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return U(d.h.put(b, e)).then(() => {
                sj = e;
                let f = !0;
                return Gf(d, {
                    query: uj(),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function wj(a, b) {
    return t(function*() {
        let c = !1,
            d = 0;
        yield V(yield tj(a.token), ["resource-manifest-assets"], "readonly", e => Gf(e.objectStore("resource-manifest-assets"), {
            query: uj(),
            direction: "prev"
        }, f => {
            if (f.ia().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function xj(a) {
    return t(function*() {
        sj || (yield V(yield tj(a.token), ["resource-manifest-assets"], "readonly", b => Gf(b.objectStore("resource-manifest-assets"), {
            query: uj(),
            direction: "prev"
        }, c => {
            sj = c.getKey()
        })));
        return sj
    })
}
var yj = class {
    constructor(a) {
        this.token = a
    }
    static s() {
        return t(function*() {
            const a = yield ag();
            if (a) return yj.h || (yj.h = new yj(a)), yj.h
        })
    }
};

function zj(a, b) {
    return t(function*() {
        yield Df(yield tj(a.token), "auth", b, "shell_identifier_key")
    })
}

function Aj(a) {
    return t(function*() {
        return (yield(yield tj(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function Bj(a) {
    return t(function*() {
        yield(yield tj(a.token)).clear("auth")
    })
}
var Cj = class {
    constructor(a) {
        this.token = a
    }
    static s() {
        return t(function*() {
            const a = yield ag();
            if (a) return Cj.h || (Cj.h = new Cj(a)), Cj.h
        })
    }
};

function Dj() {
    t(function*() {
        const a = yield Cj.s();
        a && (yield Bj(a))
    })
};

function Ej() {
    return [1, Ub]
}
var Fj = class extends A {
    constructor(a) {
        super(a)
    }
};

function Rb() {
    return [1, Vb, Fj, Ej]
}
var Qb = class extends A {
        constructor(a) {
            super(a, -1, Gj)
        }
    },
    Gj = [1];

function Hj(a) {
    return t(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(Ij(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function Ij(a) {
    return wb(Sb(decodeURIComponent(a)), Fj, 1).reduce((b, c) => {
        (c = B(c, 1)) && b.push(c);
        return b
    }, [])
};

function Jj(a) {
    return t(function*() {
        const b = yield pi();
        if (b && null != B(b, 3)) {
            var c = yield Cj.s();
            c && (c = yield Aj(c), B(b, 3) !== c && (qj(a.h, a.i), Dj()))
        }
    })
}

function Kj(a) {
    return t(function*() {
        let b, c;
        try {
            c = yield Lj(a.j), b = yield Hj(c), yield lj(a.h, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield Mj(), yield pj(a.h, a.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield Nj(a, b, a.i)
        } catch (d) {}
        return Promise.resolve()
    })
}

function Oj(a) {
    return t(function*() {
        yield Jj(a);
        return Kj(a)
    })
}

function Lj(a) {
    return t(function*() {
        try {
            return yield u.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function Mj() {
    return t(function*() {
        var a = yield pi();
        let b;
        a && null != B(a, 3) && (b = B(a, 3));
        return b ? (a = yield Cj.s()) ? Promise.resolve(zj(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function Nj(a, b, c) {
    return t(function*() {
        const d = yield yj.s();
        if (d) try {
            yield vj(d, b)
        } catch (e) {
            yield Ji(e)
        }
        b.push(c);
        try {
            yield oj(a.h, b)
        } catch (e) {
            yield Ji(e)
        }
        return Promise.resolve()
    })
}

function Pj(a, b) {
    return t(function*() {
        return nj(a.h, b)
    })
}

function Qj(a) {
    return t(function*() {
        return nj(a.h, a.i)
    })
}
var Rj = class {
    constructor() {
        var a = self.location.origin + "/app_shell",
            b = self.location.origin + "/app_shell_home";
        this.h = self.caches;
        this.j = a;
        this.i = b
    }
};

function Sj(a, b) {
    return t(function*() {
        const c = b.request,
            d = yield Pj(a.h, c.url);
        if (d) return Li({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: M()
        }), d;
        Tj(c);
        return Uj(b)
    })
}

function Vj(a, b) {
    return t(function*() {
        const c = yield Wj(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield Qj(a.h);
        if (d) return Xj(a), d;
        Yj(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Zj(a, b) {
    b = new URL(b);
    if (!a.i.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.l)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function ak(a, b) {
    return t(function*() {
        const c = yield Qj(a.h);
        if (!c) return Yj(a), Uj(b);
        Xj(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(M() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return c;
        d = yield Wj(b);
        return d.response && d.response.ok ? d.response : c
    })
}

function Uj(a) {
    return Promise.resolve(a.preloadResponse).then(b => b || u.fetch(a.request))
}

function Tj(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    yj.s().then(c => {
        if (c) {
            var d = xj(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = wj(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                Ji(e)
            }).finally(() => {
                Li({
                    appShellAssetLoadReport: b,
                    timestamp: M()
                })
            })
        } else Li({
            appShellAssetLoadReport: b,
            timestamp: M()
        })
    })
}

function Xj(a) {
    Li({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !0
        },
        timestamp: M()
    })
}

function Yj(a) {
    Li({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !1
        },
        timestamp: M()
    })
}

function Wj(a) {
    return t(function*() {
        try {
            return {
                response: yield Uj(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}
var gk = class {
    constructor() {
        var a = bk,
            b = ck,
            c = dk,
            d = ek;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        for (var f of Xb) e.push({
            key: f
        });
        f = fk();
        this.h = a;
        this.m = b;
        this.o = c;
        this.i = d;
        this.l = e;
        this.j = f
    }
};
var ek = ["/", "/feed/downloads"];
const hk = [/^\/$/, /^\/feed\/downloads$/],
    ik = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function fk() {
    return new RegExp((L("kevlar_sw_app_wide_fallback") ? ik : hk).map(a => a.source).join("|"))
}
var ck = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,
    dk = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var jk = class {
    constructor() {
        var a = bk,
            b = new gk;
        this.h = self;
        this.i = a;
        this.m = b;
        this.M = Qh
    }
    init() {
        this.h.oninstall = this.o.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.C.bind(this)
    }
    o(a) {
        this.h.skipWaiting();
        const b = Oj(this.i).catch(c => {
            Ji(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()];
        this.h.registration.navigationPreload && b.push(this.h.registration.navigationPreload.enable());
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        const b = this;
        return t(function*() {
            var c = b.m,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.o.test(e.url)) qi.h && (delete qi.h.h, u.__SAPISID = void 0, J("VISITOR_DATA", void 0), J("SESSION_INDEX", void 0), J("DELEGATED_SESSION_ID", void 0)), d = a.respondWith, c = c.h, qj(c.h, c.i), Dj(), c = Uj(a), d.call(a, c);
            else if (c.m.test(e.url)) a.respondWith(Sj(c,
                a));
            else if ("navigate" === e.mode) {
                if (L("sw_nav_request_network_first")) {
                    var f = new URL(e.url);
                    f = c.j.test(f.pathname)
                } else f = !1;
                f ? a.respondWith(Vj(c, a)) : Zj(c, e.url) ? a.respondWith(ak(c, a)) : d && a.respondWith(Uj(a))
            }
        })
    }
    C(a) {
        const b = a.data;
        this.M.includes(b.type) ? Ni(a) : "refresh_shell" === b.type && Kj(this.i).catch(c => {
            Ji(c)
        })
    }
};
var kk = class {
    static s() {
        let a = v("ytglobal.storage_");
        a || (a = new kk, w("ytglobal.storage_", a));
        return a
    }
    estimate() {
        return t(function*() {
            var a, b;
            const c = navigator;
            if (null === (a = c.storage) || void 0 === a ? 0 : a.estimate) return c.storage.estimate();
            if (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota) return lk()
        })
    }
};

function lk() {
    const a = navigator;
    return new Promise((b, c) => {
        var d;
        null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
w("ytglobal.storageClass_", kk);

function mk(a, b) {
    kk.s().estimate().then(c => {
        c = Object.assign(Object.assign({}, b), {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: nk(null === c || void 0 === c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: nk(null === c || void 0 === c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class ok {
    constructor() {
        var a = pk;
        this.handleError = qk;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= Ld("ytidb_transaction_ended_event_rate_limit", .02)
    }
    O(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                L("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                L("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                mk(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign(Object.assign({}, b), {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function nk(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
bh(Zg(), {
    G: [{
        Ba: /Failed to fetch/,
        weight: 500
    }],
    D: []
});
var {
    handleError: qk = oh,
    O: pk = W
} = {
    handleError: function(a) {
        return t(function*() {
            yield Ki();
            ph(a)
        })
    },
    O: function(a, b) {
        return t(function*() {
            yield Ki();
            W(a, b)
        })
    }
};
for (Ye = new ok; 0 < Xe.length;) {
    const a = Xe.shift();
    switch (a.type) {
        case "ERROR":
            Ye.handleError(a.payload);
            break;
        case "EVENT":
            Ye.O(a.eventType, a.payload)
    }
}
qi.h = new qi;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Ui(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    a = a.notification.data;
    if (null === a || void 0 === a ? 0 : a.parentElement) {
        a.isDismissed && (null === a || void 0 === a ? 0 : a.dismissalElement) && li(bi(), a.dismissalElement);
        var b = Oh.s(),
            c = a.parentElement,
            d = Kh(0, c);
        a = c.visualElement ? c.visualElement : d;
        var e = b.l.has(a);
        const f = b.i.get(a);
        b.l.add(a);
        b.i.set(a, !1);
        !1 !== f && (d || c.visualElement) && (!(a = Lh(b, c)) || !Mh(c) && c.data && c.data.loggingDirectives || (d = c.visualElement ? c.visualElement : new Mg({
                trackingParams: d
            }), Mh(c) & 8 ? Ih(b.h, a, d) : Mh(c) &
            2 && !e && (b = b.h, c = {
                cttAuthInfo: Ug(a),
                A: a
            }, L("il_via_jspb") ? (e = new ld, e.B(a), d = d.getAsJspb(), D(e, 2, d), C(e, 4, 2), "UNDEFINED_CSN" == a ? Y("visualElementHidden", e, c) : wh(e, c, b)) : (d = {
                csn: a,
                ve: d.getAsJson(),
                eventType: 2
            }, "UNDEFINED_CSN" == a ? Y("visualElementHidden", d, c) : b ? Q("visualElementHidden", d, b, c) : W("visualElementHidden", d, c)))))
    }
};
self.onpush = function(a) {
    a.waitUntil(Uh("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Si(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(Qi())
};
self.onpushsubscriptionchange = function() {
    Oi()
};
const bk = new Rj;
(new jk).init();