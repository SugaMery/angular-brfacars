(function(g) {
    var window = this;
    'use strict';
    var UXa = function(a, b) {
            return g.Ye(a, b)
        },
        VXa = function(a, b) {
            b = b instanceof g.Yf ? b : g.hg(b, /^data:image\//i.test(b));
            a.src = g.Zf(b)
        },
        Y6 = function(a) {
            g.nl(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ta()).toString(36));
            return a
        },
        Z6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.sl(a.u, b, c)
        },
        WXa = function(a) {
            if (a === g.mp) throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
            throw a;
        },
        XXa = function(a) {
            if (a instanceof g.kp) return a;
            if ("function" == typeof a.Pg) return a.Pg(!1);
            if (g.Na(a)) {
                var b = 0,
                    c = new g.kp;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.j2;
                        if (b in a) return g.lp(a[b++]);
                        b++
                    }
                };
                var d = c.next;
                c.Nj = function() {
                    return g.np(d.call(c))
                };
                return c
            }
            throw Error("Not implemented");
        },
        YXa = function(a, b, c) {
            if (g.Na(a)) try {
                g.sc(a, b, c)
            } catch (e) {
                WXa(e)
            } else
                for (a = XXa(a);;) {
                    var d = void 0;
                    try {
                        d = a.Nj()
                    } catch (e) {
                        if (e === g.mp) break;
                        throw e;
                    }
                    try {
                        b.call(c, d, void 0, a)
                    } catch (e) {
                        WXa(e)
                    }
                }
        },
        ZXa = function(a, b) {
            var c = [];
            YXa(b, function(d) {
                try {
                    var e = g.Nr.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Qga(e) && c.push(d)
            }, a);
            return c
        },
        $Xa = function(a, b) {
            ZXa(a, b).forEach(function(c) {
                g.Nr.prototype.remove.call(this, c)
            }, a)
        },
        aYa = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        bYa = function(a, b) {
            g.ac(a, b) || a.push(b)
        },
        $6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        cYa = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        a7 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return cYa(a)
        },
        dYa = function(a, b, c, d) {
            var e = new g.fl(null, void 0);
            a && g.gl(e, a);
            b && g.hl(e, b);
            c && g.il(e, c);
            d && (e.K = d);
            return e
        },
        b7 = function(a, b) {
            g.Qu[a] = !0;
            var c = g.Ou();
            c && c.publish.apply(c, arguments);
            g.Qu[a] = !1
        },
        c7 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.vr;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", eYa(this, a.capabilities || ""), fYa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        eYa = function(a, b) {
            a.capabilities.clear();
            g.Gp(b.split(","), g.Sa(UXa, gYa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        fYa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        d7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        e7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        hYa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        iYa = function(a) {
            return new d7(a)
        },
        jYa = function(a) {
            return Array.isArray(a) ? g.co(a, iYa) : []
        },
        f7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        g7 = function(a) {
            return Array.isArray(a) ? "[" + g.co(a, f7).join(",") + "]" : "null"
        },
        h7 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        kYa = function(a) {
            return g.co(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        i7 = function(a, b) {
            return g.Wb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        j7 = function(a, b) {
            return g.Wb(a, function(c) {
                return e7(c, b)
            })
        },
        lYa = function() {
            var a = (0, g.ey)();
            a && $Xa(a, a.i.Pg(!0))
        },
        k7 = function() {
            var a = g.hy("yt-remote-connected-devices") || [];
            g.pc(a);
            return a
        },
        mYa = function(a) {
            if (g.bc(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.co(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        nYa = function(a) {
            g.gy("yt-remote-connected-devices", a, 86400)
        },
        m7 = function() {
            if (l7) return l7;
            var a = g.hy("yt-remote-device-id");
            a || (a = h7(), g.gy("yt-remote-device-id", a, 31536E3));
            for (var b = k7(), c = 1, d = a; g.ac(b, d);) c++, d = a + "#" + c;
            return l7 = d
        },
        n7 = function() {
            var a = k7(),
                b = m7();
            g.ac(a, b);
            g.jy() && g.rc(a, b);
            a = mYa(a);
            if (g.bc(a)) try {
                g.rka("remote_sid")
            } catch (c) {} else try {
                g.St("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        oYa = function() {
            return g.hy("yt-remote-session-browser-channel")
        },
        pYa = function() {
            return g.hy("yt-remote-local-screens") || []
        },
        qYa = function() {
            g.gy("yt-remote-lounge-token-expiration", !0, 86400)
        },
        rYa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.co(pYa(), function(d) {
                    return d.loungeToken
                }),
                c = g.co(a, function(d) {
                    return d.loungeToken
                });
            g.eo(c, function(d) {
                return !g.ac(b, d)
            }) && qYa();
            g.gy("yt-remote-local-screens", a, 31536E3)
        },
        sYa = function(a, b) {
            g.gy("yt-remote-session-browser-channel", a);
            g.gy("yt-remote-session-screen-id", b);
            a = k7();
            b = m7();
            g.ac(a, b) || a.push(b);
            nYa(a);
            n7()
        },
        o7 = function(a) {
            a || (g.iy("yt-remote-session-screen-id"), g.iy("yt-remote-session-video-id"));
            n7();
            a = k7();
            g.ec(a, m7());
            nYa(a)
        },
        tYa = function() {
            if (!p7) {
                var a = g.Wr();
                a && (p7 = new g.Kr(a))
            }
        },
        uYa = function() {
            tYa();
            return p7 ? !!p7.get("yt-remote-use-staging-server") : !1
        },
        q7 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        vYa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        wYa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        r7 = function(a) {
            a.length ? xYa(a.shift(), function() {
                r7(a)
            }) : s7()
        },
        yYa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        xYa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.zk(d, g.Ar(a));
            (document.head || document.documentElement).appendChild(d)
        },
        zYa = function() {
            var a = q7(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        s7 = function() {
            var a = wYa();
            a && a(!1, "No cast extension found")
        },
        t7 = function() {
            if (AYa) {
                var a = 2,
                    b = wYa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                xYa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", s7, c)
            }
        },
        BYa = function() {
            t7();
            var a = zYa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            r7(a)
        },
        DYa = function() {
            t7();
            var a = zYa();
            a.push.apply(a, g.u(CYa.map(yYa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            r7(a)
        },
        u7 = function(a, b, c) {
            g.I.call(this);
            this.J = null != c ? (0, g.Ra)(a, c) : a;
            this.ag = b;
            this.D = (0, g.Ra)(this.LR, this);
            this.i = !1;
            this.u = 0;
            this.B = this.Qb = null;
            this.C = []
        },
        v7 = function(a, b, c) {
            g.I.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.ag = b;
            this.B = null;
            this.i = !1;
            this.u = 0;
            this.Qb = null
        },
        w7 = function(a) {
            a.Qb = g.ni(function() {
                a.Qb = null;
                a.i && !a.u && (a.i = !1, w7(a))
            }, a.ag);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        x7 = function() {},
        y7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        A7 = function(a) {
            z7.dispatchEvent(new EYa(z7, a))
        },
        EYa = function(a, b) {
            g.Ee.call(this, "statevent", a);
            this.stat = b
        },
        B7 = function(a, b, c, d) {
            this.i = a;
            this.B = b;
            this.S = c;
            this.K = d || 1;
            this.u = 45E3;
            this.C = new g.tl(this);
            this.J = new g.mi;
            this.J.setInterval(250)
        },
        GYa = function(a, b, c) {
            a.mu = 1;
            a.zn = Y6(b.clone());
            a.Kq = c;
            a.D = !0;
            FYa(a, null)
        },
        C7 = function(a, b, c, d, e) {
            a.mu = 1;
            a.zn = Y6(b.clone());
            a.Kq = null;
            a.D = c;
            e && (a.HO = !1);
            FYa(a, d)
        },
        FYa = function(a, b) {
            a.Pt = Date.now();
            D7(a);
            a.Vo = a.zn.clone();
            Z6(a.Vo, "t", a.K);
            a.YB = 0;
            a.Qf = a.i.cE(a.i.Nx() ? b : null);
            0 < a.OC && (a.kB = new v7((0, g.Ra)(a.IP, a, a.Qf), a.OC));
            a.C.Ra(a.Qf, "readystatechange", a.MR);
            b = a.qp ? g.ef(a.qp) : {};
            a.Kq ? (a.VB = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Qf.send(a.Vo, a.VB, a.Kq, b)) : (a.VB = "GET", a.HO && !g.Ie && (b.Connection = "close"), a.Qf.send(a.Vo, a.VB, null, b));
            a.i.Oj(1)
        },
        IYa = function(a, b) {
            var c = a.YB,
                d = b.indexOf("\n", c);
            if (-1 == d) return E7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return HYa;
            d += 1;
            if (d + c > b.length) return E7;
            b = b.substr(d, c);
            a.YB = d + c;
            return b
        },
        KYa = function(a, b) {
            a.Pt = Date.now();
            D7(a);
            var c = b ? window.location.hostname : "";
            a.Vo = a.zn.clone();
            g.nl(a.Vo, "DOMAIN", c);
            g.nl(a.Vo, "t", a.K);
            try {
                a.fk = new ActiveXObject("htmlfile")
            } catch (m) {
                F7(a);
                a.pn = 7;
                A7(22);
                G7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in H7) f = H7[f];
                        else if (f in JYa) f = H7[f] = JYa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                H7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.wg(g.Qf("b/12014412"), d);
            a.fk.open();
            a.fk.write(g.sg(c));
            a.fk.close();
            a.fk.parentWindow.m = (0, g.Ra)(a.EX, a);
            a.fk.parentWindow.d = (0, g.Ra)(a.PN, a, !0);
            a.fk.parentWindow.rpcClose = (0, g.Ra)(a.PN, a, !1);
            c = a.fk.createElement("DIV");
            a.fk.parentWindow.document.body.appendChild(c);
            d = g.gg(a.Vo.toString());
            d = g.Ng(g.Zf(d));
            d = g.wg(g.Qf("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.yg(c, d);
            a.i.Oj(1)
        },
        D7 = function(a) {
            a.ZH = Date.now() +
                a.u;
            LYa(a, a.u)
        },
        LYa = function(a, b) {
            if (null != a.Du) throw Error("WatchDog timer not null");
            a.Du = y7((0, g.Ra)(a.LX, a), b)
        },
        I7 = function(a) {
            a.Du && (g.C.clearTimeout(a.Du), a.Du = null)
        },
        G7 = function(a) {
            a.i.zf() || a.Ip || a.i.Gy(a)
        },
        F7 = function(a) {
            I7(a);
            g.Be(a.kB);
            a.kB = null;
            a.J.stop();
            g.vl(a.C);
            if (a.Qf) {
                var b = a.Qf;
                a.Qf = null;
                b.abort();
                b.dispose()
            }
            a.fk && (a.fk = null)
        },
        J7 = function(a, b) {
            try {
                a.i.IN(a, b), a.i.Oj(4)
            } catch (c) {}
        },
        NYa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                MYa(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        NYa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        MYa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    K7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    K7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    K7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    K7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            VXa(d, a)
        },
        K7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        OYa = function(a) {
            this.i = a;
            this.u = new x7
        },
        PYa = function(a) {
            var b = L7(a.i, a.vv, "/mail/images/cleardot.gif");
            Y6(b);
            NYa(b.toString(), 5E3, (0, g.Ra)(a.qS, a), 3, 2E3);
            a.Oj(1)
        },
        N7 = function(a) {
            var b = a.i.X;
            if (null != b) A7(5), b ? (A7(11), M7(a.i, a, !1)) : (A7(12), M7(a.i, a, !0));
            else if (a.yh = new B7(a, void 0, void 0, void 0), a.yh.qp = a.PC, b = a.i, b = L7(b, b.Nx() ? a.Zu : null, a.QC), A7(5), !g.Jc || g.Cc(10)) Z6(b, "TYPE", "xmlhttp"), C7(a.yh, b, !1, a.Zu, !1);
            else {
                Z6(b, "TYPE", "html");
                var c = a.yh;
                a = !!a.Zu;
                c.mu = 3;
                c.zn = Y6(b.clone());
                KYa(c, a)
            }
        },
        O7 = function(a, b, c) {
            this.i = 1;
            this.u = [];
            this.C = [];
            this.D = new x7;
            this.S = a || null;
            this.X = null != b ? b : null;
            this.J = c || !1
        },
        QYa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        RYa = function(a, b, c, d) {
            g.Ee.call(this, "timingevent", a);
            this.size = b;
            this.Dx = d
        },
        SYa = function(a) {
            g.Ee.call(this, "serverreachability", a)
        },
        VYa = function(a) {
            TYa(a);
            if (3 == a.i) {
                var b = a.Qw++,
                    c = a.vz.clone();
                g.nl(c, "SID", a.B);
                g.nl(c, "RID", b);
                g.nl(c, "TYPE", "terminate");
                P7(a, c);
                b = new B7(a, a.B, b, void 0);
                b.mu = 2;
                b.zn = Y6(c.clone());
                VXa(new Image, b.zn.toString());
                b.Pt = Date.now();
                D7(b)
            }
            UYa(a)
        },
        WYa = function(a) {
            a.VS(1, 0);
            a.vz = L7(a, null, a.RC);
            Q7(a)
        },
        TYa = function(a) {
            a.Dn && (a.Dn.abort(), a.Dn = null);
            a.Re && (a.Re.cancel(), a.Re = null);
            a.Ul && (g.C.clearTimeout(a.Ul), a.Ul = null);
            R7(a);
            a.ah && (a.ah.cancel(), a.ah = null);
            a.Nn && (g.C.clearTimeout(a.Nn), a.Nn = null)
        },
        XYa = function(a, b) {
            if (0 == a.i) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new QYa(a.GU++, b));
            2 != a.i && 3 != a.i || Q7(a)
        },
        YYa = function(a) {
            var b = 0;
            a.Re && b++;
            a.ah && b++;
            return b
        },
        Q7 = function(a) {
            a.ah || a.Nn || (a.Nn = y7((0, g.Ra)(a.NN, a), 0), a.Ks = 0)
        },
        $Ya = function(a, b) {
            if (1 == a.i) {
                if (!b) {
                    a.Qw = Math.floor(1E5 * Math.random());
                    b = a.Qw++;
                    var c = new B7(a, "", b, void 0);
                    c.qp = a.yk;
                    var d = S7(a),
                        e = a.vz.clone();
                    g.nl(e, "RID", b);
                    g.nl(e, "CVER", "1");
                    P7(a, e);
                    GYa(c, e, d);
                    a.ah = c;
                    a.i = 2
                }
            } else 3 == a.i && (b ? ZYa(a, b) : 0 == a.u.length || a.ah || ZYa(a))
        },
        ZYa = function(a, b) {
            if (b)
                if (6 < a.Jp) {
                    a.u = a.C.concat(a.u);
                    a.C.length = 0;
                    var c = a.Qw - 1;
                    b = S7(a)
                } else c = b.S, b = b.Kq;
            else c = a.Qw++, b = S7(a);
            var d = a.vz.clone();
            g.nl(d, "SID", a.B);
            g.nl(d, "RID", c);
            g.nl(d, "AID", a.qt);
            P7(a, d);
            c = new B7(a, a.B, c, a.Ks + 1);
            c.qp = a.yk;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.ah = c;
            GYa(c, d, b)
        },
        P7 = function(a, b) {
            a.Rf && (a = a.Rf.gL()) && g.Oe(a, function(c, d) {
                g.nl(b, d, c)
            })
        },
        S7 = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Jp && 0 < b) {
                var d = a.u[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    xr: e.xr
                }, f++) {
                e.xr = a.u[f].i;
                var h = a.u[f].map;
                e.xr = 6 >= a.Jp ? f : e.xr - d;
                try {
                    g.Oe(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.xr + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.xr + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.u.splice(0, b));
            return c.join("&")
        },
        aZa = function(a) {
            a.Re || a.Ul || (a.K = 1, a.Ul = y7((0, g.Ra)(a.MN, a), 0), a.qs = 0)
        },
        T7 = function(a) {
            if (a.Re || a.Ul || 3 <= a.qs) return !1;
            a.K++;
            a.Ul = y7((0, g.Ra)(a.MN, a), bZa(a, a.qs));
            a.qs++;
            return !0
        },
        M7 = function(a, b, c) {
            a.TB = c;
            a.zk = b.Ll;
            a.J || WYa(a)
        },
        R7 = function(a) {
            null != a.Rp && (g.C.clearTimeout(a.Rp), a.Rp = null)
        },
        bZa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        U7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Rf && (c = null);
                var d = (0, g.Ra)(a.RY, a);
                c || (c = new g.fl("//www.google.com/images/cleardot.gif"), Y6(c));
                MYa(c.toString(), 1E4, d)
            } else A7(2);
            cZa(a, b)
        },
        cZa = function(a, b) {
            a.i = 0;
            a.Rf && a.Rf.tK(b);
            UYa(a);
            TYa(a)
        },
        UYa = function(a) {
            a.i = 0;
            a.zk = -1;
            if (a.Rf)
                if (0 == a.C.length && 0 == a.u.length) a.Rf.OD();
                else {
                    g.hc(a.C);
                    var b = g.hc(a.u);
                    a.C.length = 0;
                    a.u.length = 0;
                    a.Rf.OD(b)
                }
        },
        L7 = function(a, b, c) {
            var d = g.ol(c);
            if ("" != d.i) b && g.hl(d, b + "." + d.i), g.il(d, d.B);
            else {
                var e = window.location;
                d = dYa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Pv && g.Oe(a.Pv, function(f, h) {
                g.nl(d, h, f)
            });
            g.nl(d, "VER", a.Jp);
            P7(a, d);
            return d
        },
        dZa = function() {},
        eZa = function() {
            this.i = [];
            this.u = []
        },
        fZa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        V7 = function(a, b) {
            g.I.call(this);
            this.i = new g.L(this.vX, 0, this);
            g.J(this, this.i);
            this.ag = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Ra)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Ra)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        W7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.ya = a;
            this.J = b;
            this.B = new g.Jr;
            this.u = new V7(this.sY, this);
            this.i = null;
            this.Z = !1;
            this.D = null;
            this.X = "";
            this.S = this.C = 0;
            this.K = [];
            this.Aa = c;
            this.ma = d;
            this.Ba = e
        },
        gZa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.TB,
                sessionId: a.i.B,
                arrayId: a.i.qt
            }
        },
        hZa = function(a, b) {
            a.S = b || 0;
            a.u.stop();
            X7(a);
            a.i && (3 == a.i.getState() && $Ya(a.i), VYa(a.i));
            a.S = 0
        },
        Y7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        X7 = function(a) {
            if (a.i) {
                var b = a.ma(),
                    c = a.i.yk || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.yk = c
            }
        },
        Z7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.cj(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.dj(a) || "";
            a = g.xb();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.wb(a, "10.0") && (this.u = !1))
        },
        $7 = function(a, b) {
            var c = a.i;
            a.u && (c = "https://" + a.domain + a.port + a.i);
            return g.oj(c + b, {})
        },
        a8 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Sa(a.C, d, !0),
                onError: g.Sa(a.B, e),
                onTimeout: g.Sa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Jt(b, a)
        },
        lZa = function() {
            var a = iZa;
            jZa();
            b8.push(a);
            kZa()
        },
        c8 = function(a, b) {
            jZa();
            var c = mZa(a, String(b));
            g.bc(b8) ? nZa(c) : (kZa(), g.sc(b8, function(d) {
                d(c)
            }))
        },
        jZa = function() {
            b8 || (b8 = g.Ja("yt.mdx.remote.debug.handlers_") || [], g.Ia("yt.mdx.remote.debug.handlers_", b8, void 0))
        },
        nZa = function(a) {
            var b = (d8 + 1) % 50;
            d8 = b;
            e8[b] = a;
            f8 || (f8 = 49 == b)
        },
        kZa = function() {
            var a = b8;
            if (e8[0]) {
                var b = f8 ? d8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e8[b];
                    g.sc(a, function(d) {
                        d(c)
                    })
                } while (b != d8);
                e8 = Array(50);
                d8 = -1;
                f8 = !1
            }
        },
        mZa = function(a, b) {
            var c = (Date.now() - oZa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g8 = function(a) {
            g.qx.call(this);
            this.J = a;
            this.screens = []
        },
        pZa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        qZa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Gp(a.screens, function(f) {
                return !!i7(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = pZa(a, b[d]) || c;
            return c
        },
        rZa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Gp(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        h8 = function(a, b, c, d, e) {
            g.qx.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.i = null;
            this.Qb = NaN
        },
        j8 = function(a) {
            g8.call(this, "LocalScreenService");
            this.u = a;
            this.i = NaN;
            i8(this);
            this.info("Initializing with " + g7(this.screens))
        },
        sZa = function(a) {
            if (a.screens.length) {
                var b = g.co(a.screens, function(d) {
                        return d.id
                    }),
                    c = $7(a.u, "/pairing/get_lounge_token_batch");
                a8(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Ra)(a.vT, a), (0, g.Ra)(a.uT, a))
            }
        },
        i8 = function(a) {
            if (g.Q("deprecate_pair_servlet_enabled")) return qZa(a, []);
            var b = jYa(pYa());
            b = g.Gp(b, function(c) {
                return !c.uuid
            });
            return qZa(a, b)
        },
        k8 = function(a, b) {
            rYa(g.co(a.screens, hYa));
            b && qYa()
        },
        m8 = function(a, b) {
            g.qx.call(this);
            this.J = b;
            b = (b = g.hy("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.ac(b, h)
            }
            this.i = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            l8("Initialized with " + g.Ni(this.i))
        },
        n8 = function(a, b, c) {
            var d = $7(a.D, "/pairing/get_screen_availability");
            a8(a.D, d, {
                lounge_token: b.token
            }, (0, g.Ra)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Ra)(function() {
                c(!1)
            }, a))
        },
        o8 = function(a, b) {
            a: if ($6(b) != $6(a.i)) var c = !1;
                else {
                    c = g.We(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (l8("Updated online screens: " + g.Ni(a.i)), a.i = b, a.ea("screenChange"));tZa(a)
        },
        p8 = function(a) {
            isNaN(a.B) || g.Ft(a.B);
            a.B = g.Dt((0, g.Ra)(a.OG, a), 0 < a.C && a.C < g.Ta() ? 2E4 : 1E4)
        },
        l8 = function(a) {
            c8("OnlineScreenService", a)
        },
        uZa = function(a) {
            var b = {};
            g.sc(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.ze("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        tZa = function(a) {
            a = g.We(g.Pe(a.i, function(b) {
                return b
            }));
            g.pc(a);
            a.length ? g.gy("yt-remote-online-screen-ids", a.join(","), 60) : g.iy("yt-remote-online-screen-ids")
        },
        q8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g8.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.i = this.u = null;
            this.B = [];
            this.D = {};
            vZa(this)
        },
        xZa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Kh(),
                l = c ? j7(h, c) : null;
            c && (a.K || l) || (l = j7(h, b));
            if (l) {
                l.uuid = b;
                var m = r8(a, l);
                n8(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? wZa(a, c, (0, g.Ra)(function(n) {
                var p = r8(this, new d7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                n8(this.i, p, function(r) {
                    e(r ? p : null)
                })
            }, a), f) : e(null)
        },
        yZa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        zZa = function(a, b, c) {
            n8(a.i, b, c)
        },
        wZa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Jt($7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        AZa = function(a) {
            a.screens = a.u.Kh();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + g7(a.screens))
        },
        vZa = function(a) {
            s8(a);
            a.u = new j8(a.C);
            a.u.subscribe("screenChange", (0, g.Ra)(a.ET, a));
            AZa(a);
            a.K || (a.B = jYa(g.hy("yt-remote-automatic-screen-cache") || []));
            s8(a);
            a.info("Initializing automatic screens: " + g7(a.B));
            a.i = new m8(a.C, (0, g.Ra)(a.Kh, a, !0));
            a.i.subscribe("screenChange", (0, g.Ra)(function() {
                this.ea("onlineScreenChange")
            }, a))
        },
        r8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = j7(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || BZa(a));
            s8(a);
            a.D[b.uuid] = b.id;
            g.gy("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        BZa = function(a) {
            a = g.Gp(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.gy("yt-remote-automatic-screen-cache", g.co(a, hYa))
        },
        s8 = function(a) {
            a.D = g.hy("yt-remote-device-id-map") || {}
        },
        t8 = function(a, b, c) {
            g.qx.call(this);
            this.Ba = c;
            this.B = a;
            this.i = b;
            this.C = null
        },
        u8 = function(a, b) {
            a.C = b;
            a.ea("sessionScreen", a.C)
        },
        CZa = function(a, b) {
            a.C && (a.C.token = b, r8(a.B, a.C));
            a.ea("sessionScreen", a.C)
        },
        v8 = function(a, b) {
            c8(a.Ba, b)
        },
        w8 = function(a, b, c) {
            t8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.ma = (0, g.Ra)(this.jQ, this);
            this.Aa = (0, g.Ra)(this.QX, this);
            this.Z = g.Dt(function() {
                DZa(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.S = 0;
            this.ya = !1;
            this.X = "unknown"
        },
        x8 = function(a, b) {
            g.Ft(a.K);
            a.K = 0;
            0 == b ? EZa(a) : a.K = g.Dt(function() {
                EZa(a)
            }, b)
        },
        EZa = function(a) {
            FZa(a, "getLoungeToken");
            g.Ft(a.D);
            a.D = g.Dt(function() {
                GZa(a, null)
            }, 3E4)
        },
        FZa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Ni(void 0));
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ka, (0, g.Ra)(function() {
                v8(this, "Failed to send message: " + b + ".")
            }, a)) : v8(a, "Sending yt message without session: " + g.Ni(c))
        },
        y8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.tL(b, function(c) {
                u8(a, c)
            }, function() {
                return a.Dg()
            }, 5)) : a.Dg(Error("Waiting for session status timed out."))
        },
        IZa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new d7(b);
            HZa(a, d, function(e) {
                e ? (a.ya = !0, r8(a.B, d), u8(a, d), a.X = "unknown", x8(a, c)) : (g.lt(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Dg())
            }, 5)
        },
        DZa = function(a, b) {
            g.Ft(a.Z);
            a.Z = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? IZa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.lt(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), y8(a, b.screenId))) : (g.lt(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), y8(a, b.screenId)) : y8(a, b.screenId) : a.Dg(Error("Waiting for session status timed out."))
        },
        GZa = function(a, b) {
            g.Ft(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.X = c, x8(a, 3E4)) : (CZa(a, b.loungeToken), a.ya = !1, a.X = "unknown", x8(a, b.loungeTokenRefreshIntervalMs))
        },
        HZa = function(a, b, c, d) {
            g.Ft(a.J);
            a.J = 0;
            zZa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.Dt(function() {
                    HZa(a, b, c, d - 1)
                }, 300)
            })
        },
        JZa = function(a) {
            g.Ft(a.S);
            a.S = 0;
            g.Ft(a.J);
            a.J = 0;
            g.Ft(a.Z);
            a.Z = 0;
            g.Ft(a.D);
            a.D = 0;
            g.Ft(a.K);
            a.K = 0
        },
        z8 = function(a, b, c, d) {
            t8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.S = null;
            this.Aa = "";
            this.Na = c;
            this.Ka = null;
            this.Z = g.Ka;
            this.X = NaN;
            this.Ja = (0, g.Ra)(this.kQ, this);
            this.D = g.Ka;
            this.K = this.J = 0;
            this.ma = !1;
            this.ya = "unknown"
        },
        A8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        KZa = function(a) {
            a.D = a.B.uI(a.Aa, a.i.label, a.i.friendlyName, A8(a), function(b, c) {
                a.D = g.Ka;
                a.ma = !0;
                u8(a, b);
                "shortLived" == b.idType && 0 < c && B8(a, c)
            }, function(b) {
                a.D = g.Ka;
                a.Dg(b)
            })
        },
        LZa = function(a) {
            var b = {};
            b.pairingCode = a.Aa;
            b.theme = a.Na;
            uYa() && (b.env_useStageMdx = 1);
            return g.mj(b)
        },
        C8 = function(a) {
            return new Promise(function(b) {
                a.Aa = h7();
                if (a.Ka) {
                    var c = new chrome.cast.DialLaunchResponse(!0, LZa(a));
                    b(c);
                    KZa(a)
                } else a.Z = function() {
                    g.Ft(a.X);
                    a.Z = function() {};
                    a.X = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, LZa(a));
                    b(d);
                    KZa(a)
                }, a.X = g.Dt(function() {
                    a.Z()
                }, 100)
            })
        },
        NZa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new d7(b);
            return (new Promise(function(e) {
                MZa(a, d, function(f) {
                    f ? (a.ma = !0, r8(a.B, d), u8(a, d), B8(a, c)) : g.lt(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        OZa = function(a, b) {
            var c = a.S.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                xZa(a.B, c, b, d, function(f) {
                    f && f.token && u8(a, f);
                    e(f)
                }, function(f) {
                    v8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        MZa = function(a, b, c, d) {
            g.Ft(a.J);
            a.J = 0;
            zZa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.Dt(function() {
                    MZa(a, b, c, d - 1)
                }, 300)
            })
        },
        B8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            A8(a) && (g.Ft(a.K), a.K = 0, 0 == b ? PZa(a) : a.K = g.Dt(function() {
                PZa(a)
            }, b))
        },
        PZa = function(a) {
            A8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.ya = c, B8(a, 3E4)) : (a.ma = !1, a.ya = "unknown", CZa(a, b.loungeToken), B8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.ya = "noLoungeTokenResponse";
                B8(a, 3E4)
            })
        },
        QZa = function(a) {
            g.Ft(a.J);
            a.J = 0;
            g.Ft(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.Ft(a.X)
        },
        D8 = function(a, b) {
            t8.call(this, a, b, "ManualSession");
            this.u = g.Dt((0, g.Ra)(this.ut, this, null), 150)
        },
        E8 = function(a, b) {
            g.qx.call(this);
            this.config_ = b;
            this.u = a;
            this.S = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.X = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.i = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.Ra)(this.JW, this)
        },
        RZa = function(a, b) {
            return b ? g.Wb(a.B, function(c) {
                return e7(b, c.label)
            }, a) : null
        },
        F8 = function(a) {
            c8("Controller", a)
        },
        iZa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        G8 = function(a) {
            return a.K || !!a.B.length || !!a.i
        },
        H8 = function(a, b, c) {
            b != a.i && (g.Be(a.i), (a.i = b) ? (c ? a.ea("yt-remote-cast2-receiver-resumed",
                b.i) : a.ea("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.Ra)(a.LN, a, b)), b.subscribe("sessionFailed", function() {
                return SZa(a, b)
            }), b.getScreen() ? a.ea("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.ut(null)) : a.ea("yt-remote-cast2-session-change", null))
        },
        SZa = function(a, b) {
            a.i == b && a.ea("yt-remote-cast2-session-failed")
        },
        TZa = function(a) {
            var b = a.u.tI(),
                c = a.i && a.i.i;
            a = g.co(b, function(d) {
                c && e7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = RZa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        YZa = function(a, b, c, d) {
            d.disableCastApi ? I8("Cannot initialize because disabled by Mdx config.") : UZa() ? VZa(b, d) && (J8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? WZa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? WZa(a, c) : (K8("Failed to load cast API: " + f), L8(!1), J8(!1), g.iy("yt-remote-cast-available"), g.iy("yt-remote-cast-receiver"),
                    XZa(), c(!1))
            }, d.loadCastApiSetupScript ? g.ky("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= q7() && BYa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? s7() : 89 <= q7() ? DYa() : (t7(), r7(CYa.map(yYa))))) : I8("Cannot initialize because not running Chrome")
        },
        XZa = function() {
            I8("dispose");
            var a = M8();
            a && a.dispose();
            g.Ia("yt.mdx.remote.cloudview.instance_", null, void 0);
            ZZa(!1);
            g.Tu(N8);
            N8.length = 0
        },
        O8 = function() {
            return !!g.hy("yt-remote-cast-installed")
        },
        $Za = function() {
            var a = g.hy("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        a_a = function() {
            I8("clearCurrentReceiver");
            g.iy("yt-remote-cast-receiver")
        },
        b_a = function() {
            return O8() ? M8() ? M8().getCastSession() : (K8("getCastSelector: Cast is not initialized."), null) : (K8("getCastSelector: Cast API is not installed!"), null)
        },
        Q8 = function() {
            O8() ? M8() ? P8() ? (I8("Requesting cast selector."), M8().requestSession()) : (I8("Wait for cast API to be ready to request the session."), N8.push(g.Su("yt-remote-cast2-api-ready", Q8))) : K8("requestCastSelector: Cast is not initialized.") : K8("requestCastSelector: Cast API is not installed!")
        },
        R8 =
        function(a, b) {
            P8() ? M8().setConnectedScreenStatus(a, b) : K8("setConnectedScreenStatus called before ready.")
        },
        UZa = function() {
            var a = 0 <= g.xb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.Sz || a
        },
        c_a = function(a, b) {
            M8().init(a, b)
        },
        VZa = function(a, b) {
            var c = !1;
            M8() || (a = new E8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.gy("yt-remote-cast-available", d);
                b7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                I8("onReceiverSelected: " + d.friendlyName);
                g.gy("yt-remote-cast-receiver", d);
                b7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                I8("onReceiverResumed: " + d.friendlyName);
                g.gy("yt-remote-cast-receiver", d);
                b7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                I8("onSessionChange: " + f7(d));
                d || g.iy("yt-remote-cast-receiver");
                b7("yt-remote-cast2-session-change", d)
            }), g.Ia("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            I8("cloudview.createSingleton_: " + c);
            return c
        },
        M8 = function() {
            return g.Ja("yt.mdx.remote.cloudview.instance_")
        },
        WZa = function(a, b) {
            L8(!0);
            J8(!1);
            c_a(a, function(c) {
                c ? (ZZa(!0), g.Uu("yt-remote-cast2-api-ready")) : (K8("Failed to initialize cast API."), L8(!1), g.iy("yt-remote-cast-available"), g.iy("yt-remote-cast-receiver"), XZa());
                b(c)
            })
        },
        I8 = function(a) {
            c8("cloudview", a)
        },
        K8 = function(a) {
            c8("cloudview", a)
        },
        L8 = function(a) {
            I8("setCastInstalled_ " + a);
            g.gy("yt-remote-cast-installed", a)
        },
        P8 = function() {
            return !!g.Ja("yt.mdx.remote.cloudview.apiReady_")
        },
        ZZa = function(a) {
            I8("setApiReady_ " + a);
            g.Ia("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        J8 = function(a) {
            g.Ia("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        S8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.hasNext = this.Zk = !1;
            this.S = this.D = this.i = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        T8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Zk = !1;
            a.hasNext = !1;
            a.K = 0;
            a.J = g.Ta();
            a.C = 0;
            a.i = 0;
            a.D = 0;
            a.S = 0;
            a.B = NaN;
            a.u = !1
        },
        U8 = function(a) {
            return a.Jc() ? (g.Ta() - a.J) / 1E3 : 0
        },
        V8 = function(a, b) {
            a.K = b;
            a.J = g.Ta()
        },
        W8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ta() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        X8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && T8(a)
        },
        Y8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.ff(a.trackData);
            b.hasPrevious = a.Zk;
            b.hasNext = a.hasNext;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.i;
            b.duration = a.D;
            b.loadedTime = a.S;
            b.liveIngestionTime = a.B;
            return b
        },
        $8 = function(a, b) {
            g.qx.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new eZa;
            this.u = this.i = null;
            this.X = (0, g.Ra)(this.pV, this);
            this.K = (0, g.Ra)(this.Zw, this);
            this.S = (0, g.Ra)(this.oV, this);
            this.Z = (0, g.Ra)(this.wV, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.gH, this), d_a(this))) : c = 3;
            0 != c && (b ? this.gH(c) : g.Dt((0, g.Ra)(function() {
                this.gH(c)
            }, this), 0));
            (a = b_a()) && Z8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.Z)
        },
        a9 = function(a) {
            return new S8(a.C.getPlayerContextData())
        },
        d_a = function(a) {
            g.sc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Sa(this.HW, b), this))
            }, a)
        },
        e_a = function(a) {
            g.sc(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        b9 = function(a) {
            return 1 == a.getState()
        },
        c9 = function(a, b) {
            var c = a.D;
            50 > c.i.length + c.u.length && a.D.u.push(b)
        },
        e9 = function(a, b, c) {
            var d = a9(a);
            V8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            d9(a, d)
        },
        f9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        d9 = function(a, b) {
            e_a(a);
            a.C.setPlayerContextData(Y8(b));
            d_a(a)
        },
        Z8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.X), a.u.removeMediaListener(a.K), a.Zw(null));
            a.u = b;
            a.u && (c8("CP", "Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.X), a.u.addMediaListener(a.K), a.u.media.length && a.Zw(a.u.media[0]))
        },
        f_a = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = a9(a);
                b.contentId != d.videoId && c8("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                V8(d, a.i.getEstimatedTime());
                d9(a, d)
            } else c8("CP", "No cast media video. Ignoring state update.")
        },
        g9 = function(a, b, c) {
            return (0, g.Ra)(function(d) {
                this.ze("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.ze("Retrying " + b + " using MDx browser channel."), f9(this, b, c))
            }, a)
        },
        h9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.qx.call(this);
            var e = this;
            this.D = NaN;
            this.ya = !1;
            this.S = this.K = this.Z = this.ma = NaN;
            this.X = [];
            this.C = this.J = this.B = this.zc = this.i = null;
            this.Ja = a;
            this.Ba = d;
            this.X.push(g.wu(window, "beforeunload", function() {
                e.Gs(2)
            }));
            this.u = [];
            this.zc = new S8;
            this.Ka = b.id;
            this.Aa = b.idType;
            this.i = g_a(this, c);
            this.i.subscribe("handlerOpened", this.tV, this);
            this.i.subscribe("handlerClosed", this.qV, this);
            this.i.subscribe("handlerError", this.rV, this);
            this.i.subscribe("handlerMessage", this.sV, this);
            this.i.wB(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = this.zc.videoId;
                g.jy() && g.gy("yt-remote-session-video-id", f)
            }, this)
        },
        h_a = function(a) {
            return g.Wb(a.u, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        i9 = function(a) {
            c8("conn",
                a)
        },
        g_a = function(a, b) {
            return new W7($7(a.Ja, "/bc"), b, !1, function() {
                return a.yI()
            }, "shortLived" == a.Aa)
        },
        j9 = function(a, b) {
            a.ea("proxyStateChange", b)
        },
        i_a = function(a) {
            a.D = g.Dt(function() {
                i9("Connecting timeout");
                a.Gs(1)
            }, 2E4)
        },
        k9 = function(a) {
            g.Ft(a.D);
            a.D = NaN
        },
        l9 = function(a) {
            g.Ft(a.ma);
            a.ma = NaN
        },
        j_a = function(a) {
            m9(a);
            a.Z = g.Dt(function() {
                n9(a, "getNowPlaying")
            }, 2E4)
        },
        m9 = function(a) {
            g.Ft(a.Z);
            a.Z = NaN
        },
        l_a = function(a, b) {
            var c = null;
            if (b) {
                var d = h_a(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ia("yt.mdx.remote.remoteClient_", c, void 0);
            b && (k9(a), l9(a));
            c = Y7(a.i) && isNaN(a.D);
            b == c ? b && (j9(a, 1), n9(a, "getSubtitlesTrack")) : b ? (a.sL() && a.zc.reset(), j9(a, 1), n9(a, "getNowPlaying"), k_a(a)) : a.Gs(1)
        },
        m_a = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.zc.videoId && (g.af(b.params) ? a.zc.trackData = null : a.zc.trackData = b.params, a.ea("remotePlayerChange"))
        },
        n_a = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.zc.listId = b.params.listId || a.zc.listId;
            X8(a.zc, d, e);
            a.ea("remoteQueueChange", c)
        },
        p_a = function(a, b) {
            b.params = b.params || {};
            n_a(a, b, "NOW_PLAYING_MAY_CHANGE");
            o_a(a, b);
            a.ea("autoplayDismissed")
        },
        o_a = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            V8(a.zc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.zc.playerState && (c = -1E3);
            a.zc.playerState = c;
            c = Number(b.params.loadedTime);
            a.zc.S = isNaN(c) ? 0 : c;
            a.zc.Xj(Number(b.params.duration));
            c = a.zc;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.zc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.zc.playerState ? j_a(a) : m9(a);
            a.ea("remotePlayerChange")
        },
        q_a = function(a, b) {
            if (-1E3 != a.zc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.zc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                V8(a.zc, isNaN(b) ? 0 : b);
                a.ea("remotePlayerChange")
            }
        },
        r_a = function(a, b) {
            var c = "true" == b.params.muted;
            a.zc.volume = parseInt(b.params.volume, 10);
            a.zc.muted = c;
            a.ea("remotePlayerChange")
        },
        s_a = function(a, b) {
            a.J = b.params.videoId;
            a.ea("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        t_a = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.zc.Zk = "true" == b.params.hasPrevious;
            a.zc.hasNext = c;
            a.ea("previousNextChange")
        },
        k_a = function(a) {
            g.Ft(a.S);
            a.S = g.Dt(function() {
                a.Gs(1)
            }, 864E5)
        },
        n9 = function(a, b, c) {
            c ? i9("Sending: action=" + b + ", params=" + g.Ni(c)) : i9("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        o9 = function(a) {
            g8.call(this, "ScreenServiceProxy");
            this.Ye = a;
            this.i = [];
            this.i.push(this.Ye.$_s("screenChange", (0, g.Ra)(this.oQ, this)));
            this.i.push(this.Ye.$_s("onlineScreenChange", (0, g.Ra)(this.mW, this)))
        },
        x_a = function(a, b) {
            tYa();
            if (!p7 || !p7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                lYa();
                n7();
                p9 || (p9 = new Z7(b ? b.loungeApiHost : void 0), uYa() && (p9.i = "/api/loungedev"));
                q9 || (q9 = g.Ja("yt.mdx.remote.deferredProxies_") || [], g.Ia("yt.mdx.remote.deferredProxies_", q9, void 0));
                u_a();
                var c = r9();
                if (!c) {
                    var d = new q8(p9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ia("yt.mdx.remote.screenService_", d, void 0);
                    c = r9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ia("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    YZa(a, d, function(f) {
                        f ? s9() && R8(s9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            b7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ja("yt.mdx.remote.initialized_") && (g.Ia("yt.mdx.remote.initialized_", !0, void 0), t9("Initializing: " +
                        g.Ni(b)), u9.push(g.Su("yt-remote-cast2-api-ready", function() {
                        b7("yt-remote-api-ready")
                    })), u9.push(g.Su("yt-remote-cast2-availability-change", function() {
                        b7("yt-remote-receiver-availability-change")
                    })), u9.push(g.Su("yt-remote-cast2-receiver-selected", function() {
                        v9(null);
                        b7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), u9.push(g.Su("yt-remote-cast2-receiver-resumed", function() {
                        b7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), u9.push(g.Su("yt-remote-cast2-session-change", v_a)), u9.push(g.Su("yt-remote-connection-change", function(f) {
                        f ? R8(s9(), "YouTube TV") : w9() || (R8(null, null), a_a())
                    })), u9.push(g.Su("yt-remote-cast2-session-failed", function() {
                        b7("yt-remote-connection-failed")
                    })), a = x9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Q("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), t9(" -- with channel params: " + g.Ni(a)), a ? (g.gy("yt-remote-session-app", a.app), g.gy("yt-remote-session-name", a.name)) : (g.iy("yt-remote-session-app"), g.iy("yt-remote-session-name")), g.Ia("yt.mdx.remote.channelParams_", a, void 0), c.start(), s9() || w_a())
            }
        },
        y_a = function() {
            var a = r9().Ye.$_gos();
            var b = y9();
            b && z9() && (i7(a, b) || a.push(b));
            return kYa(a)
        },
        A9 = function() {
            var a = z_a();
            !a && O8() && $Za() && (a = {
                key: "cast-selector-receiver",
                name: $Za()
            });
            return a
        },
        z_a = function() {
            var a = y_a(),
                b = y9();
            b || (b = w9());
            return g.Wb(a, function(c) {
                return b && e7(b, c.key) ? !0 : !1
            })
        },
        y9 = function() {
            var a = s9();
            if (!a) return null;
            var b = r9().Kh();
            return j7(b, a)
        },
        v_a = function(a) {
            t9("remote.onCastSessionChange_: " + f7(a));
            if (a) {
                var b = y9();
                if (b && b.id == a.id) {
                    if (R8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) B9 && (B9.token = a), (b = z9()) && b.wB(a)
                } else b && C9(), D9(a, 1)
            } else z9() && C9()
        },
        C9 = function() {
            P8() ? M8().stopSession() : K8("stopSession called before API ready.");
            var a = z9();
            a && (a.disconnect(1), E9(null))
        },
        F9 = function() {
            var a = z9();
            return !!a && 3 != a.getProxyState()
        },
        t9 = function(a) {
            c8("remote", a)
        },
        r9 = function() {
            if (!G9) {
                var a = g.Ja("yt.mdx.remote.screenService_");
                G9 = a ? new o9(a) : null
            }
            return G9
        },
        s9 = function() {
            return g.Ja("yt.mdx.remote.currentScreenId_")
        },
        A_a = function(a) {
            g.Ia("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        B_a = function() {
            return g.Ja("yt.mdx.remote.connectData_")
        },
        v9 = function(a) {
            g.Ia("yt.mdx.remote.connectData_", a, void 0)
        },
        z9 = function() {
            return g.Ja("yt.mdx.remote.connection_")
        },
        E9 = function(a) {
            var b = z9();
            v9(null);
            a || A_a("");
            g.Ia("yt.mdx.remote.connection_", a, void 0);
            q9 && (g.sc(q9, function(c) {
                c(a)
            }), q9.length = 0);
            b && !a ? b7("yt-remote-connection-change", !1) : !b && a && b7("yt-remote-connection-change", !0)
        },
        w9 = function() {
            var a = g.jy();
            if (!a) return null;
            var b = r9();
            if (!b) return null;
            b = b.Kh();
            return j7(b, a)
        },
        D9 = function(a, b) {
            s9();
            y9() && y9();
            if (H9) B9 = a;
            else {
                A_a(a.id);
                var c = g.Ja("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new h9(p9, a, x9(), c);
                a.connect(b, B_a());
                a.subscribe("beforeDisconnect", function(d) {
                    b7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    z9() && (z9(), E9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = y9();
                    d && "shortLived" == d.idType && (P8() ? M8().handleBrowserChannelAuthError() : K8("refreshLoungeToken called before API ready."))
                });
                E9(a)
            }
        },
        w_a = function() {
            var a = w9();
            a ? (t9("Resume connection to: " + f7(a)), D9(a, 0)) : (o7(), a_a(), t9("Skipping connecting because no session screen found."))
        },
        u_a = function() {
            var a = x9();
            if (g.af(a)) {
                a = m7();
                var b = g.hy("yt-remote-session-name") || "",
                    c = g.hy("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ia("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        x9 = function() {
            return g.Ja("yt.mdx.remote.channelParams_") || {}
        },
        I9 = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.u = a;
            this.I = b;
            this.Xb = c;
            this.events = new g.pC(this);
            this.Z = this.events.T(this.I, "onVolumeChange", function(e) {
                C_a(d, e)
            });
            this.D = !1;
            this.J = new g.MI(64);
            this.i = new g.L(this.UO, 500, this);
            this.B = new g.L(this.VO, 1E3, this);
            this.S = new u7(this.kZ, 0, this);
            this.C = {};
            this.X = new g.L(this.AP, 1E3, this);
            this.K = new v7(this.seekTo, 1E3, this);
            this.ma = g.Ka;
            g.J(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.XV);
            this.events.T(b, "captionschanged", this.mV);
            this.events.T(b, "captionssettingschanged", this.aP);
            this.events.T(b, "videoplayerreset", this.PA);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Xb.PK()
            });
            a = this.Xb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.HN, this);
            a.subscribe("remotePlayerChange", this.gx, this);
            a.subscribe("remoteQueueChange", this.PA, this);
            a.subscribe("previousNextChange", this.EN, this);
            a.subscribe("nowAutoplaying", this.yN, this);
            a.subscribe("autoplayDismissed", this.bN, this);
            g.J(this, this.i);
            g.J(this, this.B);
            g.J(this, this.S);
            g.J(this, this.X);
            g.J(this, this.K);
            this.aP();
            this.PA();
            this.gx()
        },
        C_a = function(a, b) {
            if (J9(a)) {
                a.Xb.unsubscribe("remotePlayerChange", a.gx, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = a9(a.Xb);
                if (c !== d.volume || b !== d.muted) a.Xb.setVolume(c, b), a.X.start();
                a.Xb.subscribe("remotePlayerChange", a.gx, a)
            }
        },
        D_a = function(a) {
            a.Sb(0);
            a.i.stop();
            a.Yb(new g.MI(64))
        },
        K9 = function(a, b) {
            if (J9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.hf(c, b));
                a.Xb.xI(a.I.getVideoData(1).videoId, c);
                a.C = a9(a.Xb).trackData
            }
        },
        L9 = function(a, b) {
            var c = a.I.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Xb.playVideo(c.videoId, b, d, e, c.playerParams, c.Xa, aYa(c));
            a.Yb(new g.MI(1))
        },
        E_a = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    QL: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.D = !1) : (a.I.loadModule("captions"), a.D = !0)
            } else a.I.setOption("captions", "track", {})
        },
        J9 = function(a) {
            return a9(a.Xb).videoId === a.I.getVideoData(1).videoId
        },
        M9 = function() {
            g.V.call(this, {
                G: "div",
                L: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                V: [{
                    G: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                            G: "div",
                            L: "ytp-mdx-popup-title",
                            va: "Vous \u00eates d\u00e9connect\u00e9"
                        }, {
                            G: "div",
                            L: "ytp-mdx-popup-description",
                            va: "Les vid\u00e9os que vous visionnez peuvent \u00eatre ajout\u00e9es \u00e0 l'historique des vid\u00e9os regard\u00e9es sur votre t\u00e9l\u00e9viseur et avoir une influence sur les recommandations qui vous sont faites. Pour \u00e9viter ce probl\u00e8me, annulez et connectez-vous \u00e0 YouTube sur un ordinateur."
                        },
                        {
                            G: "div",
                            L: "ytp-mdx-privacy-popup-buttons",
                            V: [{
                                G: "button",
                                Ia: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                                va: "Annuler"
                            }, {
                                G: "button",
                                Ia: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                                va: "Confirmer"
                            }]
                        }
                    ]
                }]
            });
            this.i = new g.JK(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.i);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        N9 = function(a) {
            g.V.call(this, {
                G: "div",
                L: "ytp-remote",
                V: [{
                    G: "div",
                    L: "ytp-remote-display-status",
                    V: [{
                        G: "div",
                        L: "ytp-remote-display-status-icon",
                        V: [g.ZJ()]
                    }, {
                        G: "div",
                        L: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.JK(this, 250);
            g.J(this, this.i);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            F_a(this, a.Bb())
        },
        F_a = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.U(b, 128) ? g.fH("Erreur sur $RECEIVER_NAME", c) : b.Jc() || g.U(b, 4) ? g.fH("Lecture sur $RECEIVER_NAME", c) : g.fH("Connect\u00e9 \u00e0 $RECEIVER_NAME", c);
                a.Oa("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        O9 = function(a, b) {
            g.rP.call(this, "Lire sur", 0, a, b);
            this.I = a;
            this.So = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        P9 = function(a) {
            g.rM.call(this, a);
            this.ll = {
                key: h7(),
                name: "Cet ordinateur"
            };
            this.oi = null;
            this.subscriptions = [];
            this.AG = this.Xb = null;
            this.So = [this.ll];
            this.Fn = this.ll;
            this.Hd = new g.MI(64);
            this.pM = 0;
            this.Cf = -1;
            this.ox = !1;
            this.mx = this.Kt = null;
            if (!g.aE(this.player.U()) && !g.bE(this.player.U())) {
                a = this.player;
                var b = g.UL(a);
                b && (b = b.Wn()) && (b = new O9(a, b), g.J(this, b));
                b = new N9(a);
                g.J(this, b);
                g.dM(a, b.element, 4);
                this.Kt = new M9;
                g.J(this, this.Kt);
                g.dM(a, this.Kt.element, 4);
                this.ox = !!w9()
            }
        },
        Q9 = function(a) {
            a.mx && (a.player.removeEventListener("presentingplayerstatechange",
                a.mx), a.mx = null)
        },
        G_a = function(a, b, c) {
            a.Hd = c;
            a.player.ea("presentingplayerstatechange", new g.QG(c, b))
        },
        R9 = function(a, b) {
            if (b.key !== a.Fn.key)
                if (b.key === a.ll.key) C9();
                else {
                    var c;
                    (c = !a.player.U().N("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.ox || !a.Kt);
                    (c ? 0 : g.qE(a.player.U()) || g.tE(a.player.U())) && H_a(a);
                    a.Fn = b;
                    if (!a.player.U().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.bE(a.player.U())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().N("should_clear_video_data_on_player_cued_unstarted")) a =
                            null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.lM(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Xa,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = aYa(c)) && (a.locationInfo = c)
                        }
                        t9("Connecting to: " + g.Ni(b));
                        "cast-selector-receiver" == b.key ? (v9(a || null), b = a || null, P8() ? M8().setLaunchParams(b) : K8("setLaunchParams called before ready.")) : !a && F9() &&
                            s9() == b.key ? b7("yt-remote-connection-change", !0) : (C9(), v9(a || null), a = r9().Kh(), (b = j7(a, b.key)) && D9(b, 1))
                    }
                }
        },
        H_a = function(a) {
            a.player.Bb().Jc() ? a.player.pauseVideo() : (a.mx = function(b) {
                !a.ox && g.SG(b, 8) && (a.player.pauseVideo(), Q9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.mx));
            a.Kt && a.Kt.md();
            z9() || (H9 = !0)
        },
        JYa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        H7 = {
            "'": "\\'"
        },
        gYa = {
            G_: "atp",
            Vba: "ska",
            Aaa: "que",
            o9: "mus",
            Uba: "sus",
            a5: "dsp",
            Yaa: "seq",
            Q8: "mic",
            W3: "dpa",
            U_: "cds",
            m9: "mlm",
            T3: "dsdtr",
            U9: "ntb"
        };
    c7.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var p7, l7 = "",
        AYa = vYa("loadCastFramework") || vYa("loadCastApplicationFramework"),
        CYa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ua(u7, g.I);
    g.k = u7.prototype;
    g.k.KR = function(a) {
        this.C = arguments;
        this.i = !1;
        this.Qb ? this.B = g.Ta() + this.ag : this.Qb = g.ni(this.D, this.ag)
    };
    g.k.stop = function() {
        this.Qb && (g.C.clearTimeout(this.Qb), this.Qb = null);
        this.B = null;
        this.i = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.i && (this.i = !1, this.J.apply(null, this.C)))
    };
    g.k.xa = function() {
        this.stop();
        u7.ye.xa.call(this)
    };
    g.k.LR = function() {
        this.Qb && (g.C.clearTimeout(this.Qb), this.Qb = null);
        this.B ? (this.Qb = g.ni(this.D, this.B - g.Ta()), this.B = null) : this.u ? this.i = !0 : (this.i = !1, this.J.apply(null, this.C))
    };
    g.w(v7, g.I);
    g.k = v7.prototype;
    g.k.mJ = function(a) {
        this.B = arguments;
        this.Qb || this.u ? this.i = !0 : w7(this)
    };
    g.k.stop = function() {
        this.Qb && (g.C.clearTimeout(this.Qb), this.Qb = null, this.i = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.i || this.Qb || (this.i = !1, w7(this))
    };
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.stop()
    };
    x7.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    x7.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    var z7 = new g.Bf;
    g.w(EYa, g.Ee);
    g.k = B7.prototype;
    g.k.qp = null;
    g.k.Xm = !1;
    g.k.Du = null;
    g.k.ZH = null;
    g.k.Pt = null;
    g.k.mu = null;
    g.k.zn = null;
    g.k.Vo = null;
    g.k.Kq = null;
    g.k.Qf = null;
    g.k.YB = 0;
    g.k.fk = null;
    g.k.VB = null;
    g.k.pn = null;
    g.k.Yu = -1;
    g.k.HO = !0;
    g.k.Ip = !1;
    g.k.OC = 0;
    g.k.kB = null;
    var HYa = {},
        E7 = {};
    g.k = B7.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.MR = function(a) {
        a = a.target;
        var b = this.kB;
        b && 3 == g.Bj(a) ? b.mJ() : this.IP(a)
    };
    g.k.IP = function(a) {
        try {
            if (a == this.Qf) a: {
                var b = g.Bj(this.Qf),
                    c = this.Qf.u,
                    d = this.Qf.getStatus();
                if (g.Jc && !g.Cc(10) || g.Ie && !g.Ac("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Gj(this.Qf)) break a;this.Ip || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.Oj(3) : this.i.Oj(2));I7(this);
                var e = this.Qf.getStatus();this.Yu = e;
                var f = g.Gj(this.Qf);
                if (this.Xm = 200 == e) {
                    4 == b && F7(this);
                    if (this.D) {
                        for (a = !0; !this.Ip && this.YB < f.length;) {
                            var h = IYa(this, f);
                            if (h == E7) {
                                4 == b && (this.pn = 4, A7(15), a = !1);
                                break
                            } else if (h == HYa) {
                                this.pn = 4;
                                A7(16);
                                a = !1;
                                break
                            } else J7(this, h)
                        }
                        4 == b && 0 == f.length && (this.pn = 1, A7(17), a = !1);
                        this.Xm = this.Xm && a;
                        a || (F7(this), G7(this))
                    } else J7(this, f);
                    this.Xm && !this.Ip && (4 == b ? this.i.Gy(this) : (this.Xm = !1, D7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.pn = 3, A7(13)) : (this.pn = 0, A7(14)),
                F7(this),
                G7(this)
            }
        } catch (l) {
            this.Qf && g.Gj(this.Qf)
        } finally {}
    };
    g.k.EX = function(a) {
        y7((0, g.Ra)(this.DX, this, a), 0)
    };
    g.k.DX = function(a) {
        this.Ip || (I7(this), J7(this, a), D7(this))
    };
    g.k.PN = function(a) {
        y7((0, g.Ra)(this.CX, this, a), 0)
    };
    g.k.CX = function(a) {
        this.Ip || (F7(this), this.Xm = a, this.i.Gy(this), this.i.Oj(4))
    };
    g.k.cancel = function() {
        this.Ip = !0;
        F7(this)
    };
    g.k.LX = function() {
        this.Du = null;
        var a = Date.now();
        0 <= a - this.ZH ? (2 != this.mu && this.i.Oj(3), F7(this), this.pn = 2, A7(18), G7(this)) : LYa(this, this.ZH - a)
    };
    g.k.getLastError = function() {
        return this.pn
    };
    g.k = OYa.prototype;
    g.k.PC = null;
    g.k.yh = null;
    g.k.lB = !1;
    g.k.WO = null;
    g.k.sz = null;
    g.k.vF = null;
    g.k.QC = null;
    g.k.gi = null;
    g.k.Ll = -1;
    g.k.Zu = null;
    g.k.vv = null;
    g.k.connect = function(a) {
        this.QC = a;
        a = L7(this.i, null, this.QC);
        A7(3);
        this.WO = Date.now();
        var b = this.i.S;
        null != b ? (this.Zu = b[0], (this.vv = b[1]) ? (this.gi = 1, PYa(this)) : (this.gi = 2, N7(this))) : (Z6(a, "MODE", "init"), this.yh = new B7(this, void 0, void 0, void 0), this.yh.qp = this.PC, C7(this.yh, a, !1, null, !0), this.gi = 0)
    };
    g.k.qS = function(a) {
        if (a) this.gi = 2, N7(this);
        else {
            A7(4);
            var b = this.i;
            b.zk = b.Dn.Ll;
            U7(b, 9)
        }
        a && this.Oj(2)
    };
    g.k.cE = function(a) {
        return this.i.cE(a)
    };
    g.k.abort = function() {
        this.yh && (this.yh.cancel(), this.yh = null);
        this.Ll = -1
    };
    g.k.zf = function() {
        return !1
    };
    g.k.IN = function(a, b) {
        this.Ll = a.Yu;
        if (0 == this.gi)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.i;
                    a.zk = this.Ll;
                    U7(a, 2);
                    return
                }
                this.Zu = c[0];
                this.vv = c[1]
            } else a = this.i, a.zk = this.Ll, U7(a, 2);
        else if (2 == this.gi)
            if (this.lB) A7(7), this.vF = Date.now();
            else if ("11111" == b) {
            if (A7(6), this.lB = !0, this.sz = Date.now(), a = this.sz - this.WO, !g.Jc || g.Cc(10) || 500 > a) this.Ll = 200, this.yh.cancel(), A7(12), M7(this.i, this, !0)
        } else A7(8), this.sz = this.vF = Date.now(), this.lB = !1
    };
    g.k.Gy = function() {
        this.Ll = this.yh.Yu;
        if (this.yh.Xm) 0 == this.gi ? this.vv ? (this.gi = 1, PYa(this)) : (this.gi = 2, N7(this)) : 2 == this.gi && ((!g.Jc || g.Cc(10) ? !this.lB : 200 > this.vF - this.sz) ? (A7(11), M7(this.i, this, !1)) : (A7(12), M7(this.i, this, !0)));
        else {
            0 == this.gi ? A7(9) : 2 == this.gi && A7(10);
            var a = this.i;
            this.yh.getLastError();
            a.zk = this.Ll;
            U7(a, 2)
        }
    };
    g.k.Nx = function() {
        return this.i.Nx()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.Oj = function(a) {
        this.i.Oj(a)
    };
    g.k = O7.prototype;
    g.k.yk = null;
    g.k.Pv = null;
    g.k.ah = null;
    g.k.Re = null;
    g.k.RC = null;
    g.k.vz = null;
    g.k.dK = null;
    g.k.Hy = null;
    g.k.Qw = 0;
    g.k.GU = 0;
    g.k.Rf = null;
    g.k.Nn = null;
    g.k.Ul = null;
    g.k.Rp = null;
    g.k.Dn = null;
    g.k.TB = null;
    g.k.qt = -1;
    g.k.oM = -1;
    g.k.zk = -1;
    g.k.Ks = 0;
    g.k.qs = 0;
    g.k.Jp = 8;
    g.Ua(RYa, g.Ee);
    g.Ua(SYa, g.Ee);
    g.k = O7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        A7(0);
        this.RC = b;
        this.Pv = c || {};
        d && void 0 !== e && (this.Pv.OSID = d, this.Pv.OAID = e);
        this.J ? (y7((0, g.Ra)(this.zK, this, a), 100), WYa(this)) : this.zK(a)
    };
    g.k.zK = function(a) {
        this.Dn = new OYa(this);
        this.Dn.PC = this.yk;
        this.Dn.u = this.D;
        this.Dn.connect(a)
    };
    g.k.zf = function() {
        return 0 == this.i
    };
    g.k.getState = function() {
        return this.i
    };
    g.k.NN = function(a) {
        this.Nn = null;
        $Ya(this, a)
    };
    g.k.MN = function() {
        this.Ul = null;
        this.Re = new B7(this, this.B, "rpc", this.K);
        this.Re.qp = this.yk;
        this.Re.OC = 0;
        var a = this.dK.clone();
        g.nl(a, "RID", "rpc");
        g.nl(a, "SID", this.B);
        g.nl(a, "CI", this.TB ? "0" : "1");
        g.nl(a, "AID", this.qt);
        P7(this, a);
        if (!g.Jc || g.Cc(10)) g.nl(a, "TYPE", "xmlhttp"), C7(this.Re, a, !0, this.Hy, !1);
        else {
            g.nl(a, "TYPE", "html");
            var b = this.Re,
                c = !!this.Hy;
            b.mu = 3;
            b.zn = Y6(a.clone());
            KYa(b, c)
        }
    };
    g.k.IN = function(a, b) {
        if (0 != this.i && (this.Re == a || this.ah == a))
            if (this.zk = a.Yu, this.ah == a && 3 == this.i)
                if (7 < this.Jp) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Ul) {
                                if (this.Re)
                                    if (this.Re.Pt + 3E3 < this.ah.Pt) R7(this), this.Re.cancel(), this.Re = null;
                                    else break a;
                                T7(this);
                                A7(19)
                            }
                        }
                    else this.oM = a[1], 0 < this.oM - this.qt && 37500 > a[2] && this.TB && 0 == this.qs && !this.Rp && (this.Rp = y7((0, g.Ra)(this.jV, this), 6E3));
                    else U7(this, 11)
                } else null != b && U7(this, 11);
        else if (this.Re ==
            a && R7(this), !g.jb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.qt = c[0], c = c[1], 2 == this.i ? "c" == c[0] ? (this.B = c[1], this.Hy = c[2], c = c[3], null != c ? this.Jp = c : this.Jp = 6, this.i = 3, this.Rf && this.Rf.vK(), this.dK = L7(this, this.Nx() ? this.Hy : null, this.RC), aZa(this)) : "stop" == c[0] && U7(this, 7) : 3 == this.i && ("stop" == c[0] ? U7(this, 7) : "noop" != c[0] && this.Rf && this.Rf.uK(c), this.qs = 0)
    };
    g.k.jV = function() {
        null != this.Rp && (this.Rp = null, this.Re.cancel(), this.Re = null, T7(this), A7(20))
    };
    g.k.Gy = function(a) {
        if (this.Re == a) {
            R7(this);
            this.Re = null;
            var b = 2
        } else if (this.ah == a) this.ah = null, b = 1;
        else return;
        this.zk = a.Yu;
        if (0 != this.i)
            if (a.Xm)
                if (1 == b) {
                    b = Date.now() - a.Pt;
                    var c = z7;
                    c.dispatchEvent(new RYa(c, a.Kq ? a.Kq.length : 0, b, this.Ks));
                    Q7(this);
                    this.C.length = 0
                } else aZa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.zk)) {
                if (d = 1 == b) this.ah || this.Nn || 1 == this.i || 2 <= this.Ks ? d = !1 : (this.Nn = y7((0, g.Ra)(this.NN, this, a), bZa(this, this.Ks)), this.Ks++, d = !0);
                d = !(d || 2 == b && T7(this))
            }
            if (d) switch (c) {
                case 1:
                    U7(this,
                        5);
                    break;
                case 4:
                    U7(this, 10);
                    break;
                case 3:
                    U7(this, 6);
                    break;
                case 7:
                    U7(this, 12);
                    break;
                default:
                    U7(this, 2)
            }
        }
    };
    g.k.VS = function(a) {
        if (!g.ac(arguments, this.i)) throw Error("Unexpected channel state: " + this.i);
    };
    g.k.RY = function(a) {
        a ? A7(2) : (A7(1), cZa(this, 8))
    };
    g.k.cE = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.vj;
        a.S = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Rf && this.Rf.isActive(this)
    };
    g.k.Oj = function(a) {
        var b = z7;
        b.dispatchEvent(new SYa(b, a))
    };
    g.k.Nx = function() {
        return !(!g.Jc || g.Cc(10))
    };
    g.k = dZa.prototype;
    g.k.vK = function() {};
    g.k.uK = function() {};
    g.k.tK = function() {};
    g.k.OD = function() {};
    g.k.gL = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = eZa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.i = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.ac(this.i, a) || g.ac(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.WRa)(b, a);
        0 <= c ? (g.dc(b, c), b = !0) : b = !1;
        return b || g.ec(this.u, a)
    };
    g.k.Ci = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.Ua(V7, g.I);
    g.k = V7.prototype;
    g.k.vX = function() {
        this.ag = Math.min(3E5, 2 * this.ag);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.ag + 15E3 * Math.random();
        g.hr(this.i, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.ag = 5E3
    };
    g.Ua(W7, dZa);
    g.k = W7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.og = function(a) {
        return this.B.og(a)
    };
    g.k.ea = function(a, b) {
        return this.B.ea.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.Z || (this.Z = !0, g.Be(this.B), hZa(this), g.Be(this.u), this.u = null, this.ma = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.Z
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.X = "";
            this.u.stop();
            this.D = a || null;
            this.C = b || 0;
            a = this.ya + "/test";
            b = this.ya + "/bind";
            var d = new O7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Aa),
                e = this.i;
            e && (e.Rf = null);
            d.Rf = this;
            this.i = d;
            X7(this);
            if (this.i) {
                d = g.P("ID_TOKEN");
                var f = this.i.yk || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.yk = f
            }
            e ? (3 != e.getState() && 0 == YYa(e) || e.getState(), this.i.connect(a, b, this.J, e.B, e.qt)) : c ? this.i.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.i.connect(a, b, this.J)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.hf(a, b);
        this.u.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.K.push(a) : Y7(this) && (X7(this), XYa(this.i, a))
    };
    g.k.vK = function() {
        this.u.reset();
        this.D = null;
        this.C = 0;
        if (this.K.length) {
            var a = this.K;
            this.K = [];
            for (var b = 0, c = a.length; b < c; ++b) XYa(this.i, a[b])
        }
        this.ea("handlerOpened")
    };
    g.k.tK = function(a) {
        var b = 2 == a && 401 == this.i.zk;
        4 == a || b || this.u.start();
        this.ea("handlerError", a, b)
    };
    g.k.OD = function(a) {
        if (!this.u.isActive()) this.ea("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.K.push(d)
            }
    };
    g.k.gL = function() {
        var a = {
            v: 2
        };
        this.X && (a.gsessionid = this.X);
        0 != this.C && (a.ui = "" + this.C);
        0 != this.S && (a.ui = "" + this.S);
        this.D && g.hf(a, this.D);
        return a
    };
    g.k.uK = function(a) {
        "S" == a[0] ? this.X = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), VYa(this.i)) : this.ea("handlerMessage", new fZa(a[0], a[1]))
    };
    g.k.wB = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Ba && this.i) {
            var b = this.i.yk || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.yk = b
        }
    };
    g.k.sY = function() {
        this.u.isActive();
        0 == YYa(this.i) && this.connect(this.D, this.C)
    };
    Z7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    var oZa = Date.now(),
        b8 = null,
        e8 = Array(50),
        d8 = -1,
        f8 = !1;
    g.Ua(g8, g.qx);
    g8.prototype.Kh = function() {
        return this.screens
    };
    g8.prototype.contains = function(a) {
        return !!i7(this.screens, a)
    };
    g8.prototype.get = function(a) {
        return a ? j7(this.screens, a) : null
    };
    g8.prototype.info = function(a) {
        c8(this.J, a)
    };
    g.w(h8, g.qx);
    g.k = h8.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Qb) && this.aO()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Qb) || (g.Ft(this.Qb), this.Qb = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.qx.prototype.xa.call(this)
    };
    g.k.aO = function() {
        this.Qb = NaN;
        this.i = g.Jt($7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.Ra)(this.gQ, this),
            onError: (0, g.Ra)(this.fQ, this),
            onTimeout: (0, g.Ra)(this.hQ, this)
        })
    };
    g.k.gQ = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ea("pairingComplete", new d7(a), b)
    };
    g.k.fQ = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.u >= I_a.length ? this.ea("pairingFailed", Error("DIAL polling timed out")) : (a = I_a[this.u], this.Qb = g.Dt((0, g.Ra)(this.aO, this), a), this.u++) : this.ea("pairingFailed", Error("Server error " + a.status))
    };
    g.k.hQ = function() {
        this.i = null;
        this.ea("pairingFailed", Error("Server not responding"))
    };
    var I_a = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ua(j8, g8);
    g.k = j8.prototype;
    g.k.start = function() {
        i8(this) && this.ea("screenChange");
        !g.hy("yt-remote-lounge-token-expiration") && sZa(this);
        g.Ft(this.i);
        this.i = g.Dt((0, g.Ra)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        i8(this);
        pZa(this, a);
        k8(this, !1);
        this.ea("screenChange");
        b(a);
        a.token || sZa(this)
    };
    g.k.remove = function(a, b) {
        var c = i8(this);
        rZa(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.ea("screenChange")
    };
    g.k.RB = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ea("screenChange")
    };
    g.k.xa = function() {
        g.Ft(this.i);
        j8.ye.xa.call(this)
    };
    g.k.vT = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && c8(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.uT = function(a) {
        c8(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.w(m8, g.qx);
    g.k = m8.prototype;
    g.k.start = function() {
        var a = parseInt(g.hy("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Ta() - 144E5 < a ? 0 : a) ? p8(this): (this.C = g.Ta() + 3E5, g.gy("yt-remote-fast-check-period", this.C), this.OG())
    };
    g.k.isEmpty = function() {
        return g.af(this.i)
    };
    g.k.update = function() {
        l8("Updating availability on schedule.");
        var a = this.J(),
            b = g.Pe(this.i, function(c, d) {
                return c && !!j7(a, d)
            }, this);
        o8(this, b)
    };
    g.k.xa = function() {
        g.Ft(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.qx.prototype.xa.call(this)
    };
    g.k.OG = function() {
        g.Ft(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = uZa(this);
        if ($6(a)) {
            var b = $7(this.D, "/pairing/get_screen_availability");
            this.u = a8(this.D, b, {
                lounge_token: g.We(a).join(",")
            }, (0, g.Ra)(this.bX, this, a), (0, g.Ra)(this.aX, this))
        } else o8(this, {}), p8(this)
    };
    g.k.bX = function(a, b) {
        this.u = null;
        var c = g.We(uZa(this));
        if (g.qc(c, g.We(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            o8(this, c);
            p8(this)
        } else this.ze("Changing Screen set during request."), this.OG()
    };
    g.k.aX = function(a) {
        this.ze("Screen availability failed: " + a);
        this.u = null;
        p8(this)
    };
    g.k.ze = function(a) {
        c8("OnlineScreenService", a)
    };
    g.Ua(q8, g8);
    g.k = q8.prototype;
    g.k.start = function() {
        this.u.start();
        this.i.start();
        this.screens.length && (this.ea("screenChange"), this.i.isEmpty() || this.ea("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.i.update()
    };
    g.k.RB = function(a, b, c, d) {
        this.u.contains(a) ? this.u.RB(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c8(this.J, a), d(Error(a)))
    };
    g.k.Kh = function(a) {
        return a ? this.screens : g.gc(this.screens, g.Gp(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.tI = function() {
        return g.Gp(this.Kh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.uI = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new h8(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.Be(l);
            e(r8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.Be(l);
            f(m)
        });
        l.start();
        return (0, g.Ra)(l.stop, l)
    };
    g.k.iQ = function(a, b, c, d) {
        g.Jt($7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ra)(function(e, f) {
                e = new d7(f.screen || {});
                if (!e.name || yZa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); yZa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(r8(this, e))
            }, this),
            onError: (0, g.Ra)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ra)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.Be(this.u);
        g.Be(this.i);
        q8.ye.xa.call(this)
    };
    g.k.ET = function() {
        AZa(this);
        this.ea("screenChange");
        this.i.update()
    };
    q8.prototype.dispose = q8.prototype.dispose;
    g.Ua(t8, g.qx);
    g.k = t8.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.Dg = function(a) {
        this.isDisposed() || (a && (v8(this, "" + a), this.ea("sessionFailed")), this.C = null, this.ea("sessionScreen", null))
    };
    g.k.info = function(a) {
        c8(this.Ba, a)
    };
    g.k.vI = function() {
        return null
    };
    g.k.fH = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ra)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ra)(function() {
            v8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.fH("");
        t8.ye.xa.call(this)
    };
    g.w(w8, t8);
    g.k = w8.prototype;
    g.k.eH = function(a) {
        if (this.u) {
            if (this.u == a) return;
            v8(this, "Overriding cast session with new session object");
            JZa(this);
            this.ya = !1;
            this.X = "unknown";
            this.u.removeUpdateListener(this.ma);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa)
        }
        this.u = a;
        this.u.addUpdateListener(this.ma);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa);
        FZa(this, "getMdxSessionStatus")
    };
    g.k.ut = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ni(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.Ra)(function() {
            this.Dg()
        }, this), (0, g.Ra)(function() {
            this.Dg(Error("Failed to stop receiver app."))
        }, this)) : this.Dg(Error("Stopping cast device without session."))
    };
    g.k.fH = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        JZa(this);
        this.u && (this.u.removeUpdateListener(this.ma), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa));
        this.u = null;
        t8.prototype.xa.call(this)
    };
    g.k.QX = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = a7(b), g.Oa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Ni(b)), a) {
                    case "mdxSessionStatus":
                        DZa(this, b);
                        break;
                    case "loungeToken":
                        GZa(this, b);
                        break;
                    default:
                        v8(this, "Unknown youtube message: " + a)
                } else v8(this, "Unable to parse message.");
                else v8(this, "No data in message.")
    };
    g.k.tL = function(a, b, c, d) {
        g.Ft(this.S);
        this.S = 0;
        xZa(this.B, this.i.label, a, this.i.friendlyName, (0, g.Ra)(function(e) {
            e ? b(e) : 0 <= d ? (v8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.S = g.Dt((0, g.Ra)(this.tL, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.vI = function() {
        return this.u
    };
    g.k.jQ = function(a) {
        this.isDisposed() || a || (v8(this, "Cast session died."), this.Dg())
    };
    g.w(z8, t8);
    g.k = z8.prototype;
    g.k.eH = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Ja)
    };
    g.k.ut = function(a) {
        this.Ka = a;
        this.Z()
    };
    g.k.stop = function() {
        QZa(this);
        this.u ? this.u.stop((0, g.Ra)(this.Dg, this, null), (0, g.Ra)(this.Dg, this, "Failed to stop DIAL device.")) : this.Dg()
    };
    g.k.xa = function() {
        QZa(this);
        this.u && this.u.removeUpdateListener(this.Ja);
        this.u = null;
        t8.prototype.xa.call(this)
    };
    g.k.kQ = function(a) {
        this.isDisposed() || a || (v8(this, "DIAL session died."), this.D(), this.D = g.Ka, this.Dg())
    };
    g.w(D8, t8);
    D8.prototype.stop = function() {
        this.Dg()
    };
    D8.prototype.eH = function() {};
    D8.prototype.ut = function() {
        g.Ft(this.u);
        this.u = NaN;
        var a = j7(this.B.Kh(), this.i.label);
        a ? u8(this, a) : this.Dg(Error("No such screen"))
    };
    D8.prototype.xa = function() {
        g.Ft(this.u);
        this.u = NaN;
        t8.prototype.xa.call(this)
    };
    g.w(E8, g.qx);
    g.k = E8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.S, [chrome.cast.Capability.AUDIO_OUT]);
        this.X || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ra)(this.MW, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ra)(this.JN, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ra)(this.FV, this);
        chrome.cast.initialize(c, (0, g.Ra)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), lZa(), this.u.subscribe("onlineScreenChange", (0, g.Ra)(this.wI, this)), this.B = TZa(this), chrome.cast.setCustomReceivers(this.B, g.Ka, (0, g.Ra)(function(f) {
                this.ze("Failed to set initial custom receivers: " + g.Ni(f))
            }, this)), this.ea("yt-remote-cast2-availability-change", G8(this)), b(!0))
        }, this), (0, g.Ra)(function(f) {
            this.ze("Failed to initialize API: " + g.Ni(f));
            b(!1)
        }, this))
    };
    g.k.wY = function(a, b) {
        F8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) F8("Unsetting old screen status: " + this.i.i.friendlyName), H8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = j7(this.u.Kh(), a);
                if (!c) {
                    F8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    F8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = RZa(this, c);
                a || (F8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, g.Ka, (0, g.Ra)(function(d) {
                    this.ze("Failed to set initial custom receivers: " + g.Ni(d))
                }, this)));
                F8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                H8(this, new D8(this.u, a), !0)
            }
            this.i.fH(b)
        } else F8("setConnectedScreenStatus: no screen.")
    };
    g.k.xY = function(a) {
        this.isDisposed() ? this.ze("Setting connection data on disposed cast v2") : this.i ? this.i.ut(a) : this.ze("Setting connection data without a session")
    };
    g.k.mQ = function() {
        this.isDisposed() ? this.ze("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), H8(this, null)) : F8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ra)(this.JN, this), (0, g.Ra)(this.eX, this))
    };
    g.k.xa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Ra)(this.wI, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = iZa,
            b = g.Ja("yt.mdx.remote.debug.handlers_");
        g.ec(b || [], a);
        g.Be(this.i);
        g.qx.prototype.xa.call(this)
    };
    g.k.ze = function(a) {
        c8("Controller", a)
    };
    g.k.LN = function(a, b) {
        this.i == a && (b || H8(this, null), this.ea("yt-remote-cast2-session-change", b))
    };
    g.k.JW = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), F8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) F8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            F8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.ea("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            H8(this,
                                new D8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            H8(this, new z8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            H8(this, new w8(this.u, a, this.config_));
                            break;
                        default:
                            this.ze("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.ze("Stopping receiver w/o session: " + a.friendlyName)
            } else this.ze("onReceiverAction_ called without receiver.")
    };
    g.k.FV = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.ze("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.ze("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return F8("Reselecting dial screen."),
                this.ea("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.ze('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            H8(this, new z8(this.u, b, this.C, this.config_))
        }
        b = this.i;
        b.S = a;
        b.S.appState == chrome.cast.DialAppState.RUNNING ? (a = b.S.extraData || {}, c = a.screenId || null, A8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = NZa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.S.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.lt(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = OZa(b, c)) : a = OZa(b, c)) : a = C8(b);
        return a
    };
    g.k.JN = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            F8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) F8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), H8(this, new w8(this.u, c, this.config_), !0);
                    else {
                        this.ze("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.i.i,
                    e = j7(this.u.Kh(),
                        d.label);
                e && e7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (F8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.Be(this.i), this.i = new w8(this.u, c, this.config_), this.i.subscribe("sessionScreen", (0, g.Ra)(this.LN, this, this.i)), this.i.subscribe("sessionFailed", function() {
                    return SZa(b, b.i)
                }), this.i.ut(null));
                this.i.eH(a)
            }
        }
    };
    g.k.lQ = function() {
        return this.i ? this.i.vI() : null
    };
    g.k.eX = function(a) {
        this.isDisposed() || (this.ze("Failed to estabilish a session: " + g.Ni(a)), a.code != chrome.cast.ErrorCode.CANCEL && H8(this, null), this.ea("yt-remote-cast2-session-failed"))
    };
    g.k.MW = function(a) {
        F8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = G8(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            G8(this) != b && this.ea("yt-remote-cast2-availability-change", G8(this))
        }
    };
    g.k.wI = function() {
        this.isDisposed() || (this.B = TZa(this), F8("Updating custom receivers: " + g.Ni(this.B)), chrome.cast.setCustomReceivers(this.B, g.Ka, (0, g.Ra)(function() {
            this.ze("Failed to set custom receivers.")
        }, this)), this.ea("yt-remote-cast2-availability-change", G8(this)))
    };
    E8.prototype.setLaunchParams = E8.prototype.xY;
    E8.prototype.setConnectedScreenStatus = E8.prototype.wY;
    E8.prototype.stopSession = E8.prototype.mQ;
    E8.prototype.getCastSession = E8.prototype.lQ;
    E8.prototype.requestSession = E8.prototype.requestSession;
    E8.prototype.init = E8.prototype.init;
    E8.prototype.dispose = E8.prototype.dispose;
    var N8 = [];
    g.k = S8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        T8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Zk = a.hasPrevious, this.hasNext = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.S = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.Jc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Xj = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + U8(this) : this.D
    };
    g.k.clone = function() {
        return new S8(Y8(this))
    };
    g.w($8, g.qx);
    g.k = $8.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.play = function() {
        b9(this) ? (this.i ? this.i.play(null, g.Ka, g9(this, "play")) : f9(this, "play"), e9(this, 1, W8(a9(this))), this.ea("remotePlayerChange")) : c9(this, this.play)
    };
    g.k.pause = function() {
        b9(this) ? (this.i ? this.i.pause(null, g.Ka, g9(this, "pause")) : f9(this, "pause"), e9(this, 2, W8(a9(this))), this.ea("remotePlayerChange")) : c9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (b9(this)) {
            if (this.i) {
                var b = a9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Jc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ka, g9(this, "seekTo", {
                    newTime: a
                }))
            } else f9(this, "seekTo", {
                newTime: a
            });
            e9(this, 3, a);
            this.ea("remotePlayerChange")
        } else c9(this, g.Sa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (b9(this)) {
            this.i ? this.i.stop(null, g.Ka, g9(this, "stopVideo")) : f9(this, "stopVideo");
            var a = a9(this);
            a.index = -1;
            a.videoId = "";
            T8(a);
            d9(this, a);
            this.ea("remotePlayerChange")
        } else c9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Ra)(function() {
                        c8("CP", "set receiver volume: " + d)
                    }, this), (0, g.Ra)(function() {
                        this.ze("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Ra)(function() {
                    c8("CP", "set receiver muted: " + b)
                }, this), (0, g.Ra)(function() {
                    this.ze("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                f9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            d9(this, c)
        } else c9(this, g.Sa(this.setVolume, a, b))
    };
    g.k.xI = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Ni(b.style), g.hf(a, c.trackData));
            f9(this, "setSubtitlesTrack", a);
            d9(this, c)
        } else c9(this, g.Sa(this.xI, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        b9(this) ? (b = b.getLanguageInfo().getId(), f9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = a9(this), a.audioTrackId = b, d9(this, a)) : c9(this, g.Sa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = a9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        X8(l, a, c || 0);
        void 0 !== b && (V8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ni(h));
        f9(this, "setPlaylist", m);
        d || d9(this, l)
    };
    g.k.dB = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "previous")
        } else c9(this, g.Sa(this.dB, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "next")
        } else c9(this, g.Sa(this.nextVideo, a, b))
    };
    g.k.xs = function() {
        if (b9(this)) {
            f9(this, "clearPlaylist");
            var a = a9(this);
            a.reset();
            d9(this, a);
            this.ea("remotePlayerChange")
        } else c9(this, this.xs)
    };
    g.k.PK = function() {
        b9(this) ? f9(this, "dismissAutoplay") : c9(this, this.PK)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ea("proxyStateChange", a, this.B)
        }
        g.qx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        e_a(this);
        this.C = null;
        this.D.clear();
        Z8(this, null);
        g.qx.prototype.xa.call(this)
    };
    g.k.gH = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ea("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.i.length && (b.i = b.u, b.i.reverse(), b.u = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.HW = function(a, b) {
        this.ea(a, b)
    };
    g.k.pV = function(a) {
        if (!a) this.Zw(null), Z8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = a9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c8("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, d9(this, b)
        }
    };
    g.k.Zw = function(a) {
        c8("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.S);
        if (this.i = a) this.i.addUpdateListener(this.S), f_a(this), this.ea("remotePlayerChange")
    };
    g.k.oV = function(a) {
        a ? (f_a(this), this.ea("remotePlayerChange")) : this.Zw(null)
    };
    g.k.BH = function() {
        f9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.wV = function() {
        var a = b_a();
        a && Z8(this, a)
    };
    g.k.ze = function(a) {
        c8("CP", a)
    };
    g.w(h9, g.qx);
    g.k = h9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ba && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.zc.listId = c);
            this.zc.videoId = d;
            this.zc.index = l || 0;
            this.zc.state = 3;
            V8(this.zc,
                n);
            this.C = "UNSUPPORTED";
            c = this.Ba ? "setInitialState" : "setPlaylist";
            i9("Connecting with " + c + " and params: " + g.Ni(m));
            this.i.connect({
                method: c,
                params: g.Ni(m)
            }, a, oYa())
        } else i9("Connecting without params"), this.i.connect({}, a, oYa());
        i_a(this)
    };
    g.k.wB = function(a) {
        this.i.wB(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ia("yt.mdx.remote.remoteClient_", null, void 0), this.ea("beforeDispose"), j9(this, 3));
        g.qx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        k9(this);
        m9(this);
        l9(this);
        g.Ft(this.K);
        this.K = NaN;
        g.Ft(this.S);
        this.S = NaN;
        this.B = null;
        g.xu(this.X);
        this.X.length = 0;
        this.i.dispose();
        g.qx.prototype.xa.call(this);
        this.C = this.J = this.u = this.zc = this.i = null
    };
    g.k.tV = function() {
        var a = this;
        i9("Channel opened");
        this.ya && (this.ya = !1, l9(this), this.ma = g.Dt(function() {
            i9("Timing out waiting for a screen.");
            a.Gs(1)
        }, 15E3));
        sYa(gZa(this.i), this.Ka)
    };
    g.k.qV = function() {
        i9("Channel closed");
        isNaN(this.D) ? o7(!0) : o7();
        this.dispose()
    };
    g.k.rV = function(a, b) {
        o7();
        isNaN(this.hw()) ? (b && "shortLived" == this.Aa && this.ea("browserChannelAuthError", a), i9("Channel error: " + a + " without reconnection"), this.dispose()) : (this.ya = !0, i9("Channel error: " + a + " with reconnection in " + this.hw() + " ms"), j9(this, 2))
    };
    g.k.ZL = function(a) {
        if (!this.u || 0 === this.u.length) return !1;
        for (var b = g.q(this.u), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.sV = function(a) {
        a.params ? i9("Received: action=" + a.action + ", params=" + g.Ni(a.params)) : i9("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = a7(a.params.devices);
                this.u = g.co(a, function(c) {
                    return new c7(c)
                });
                a = !!g.Wb(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                l_a(this, a);
                a = this.ZL("mlm");
                this.ea("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.fc(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                l_a(this, !1);
                break;
            case "remoteConnected":
                var b = new c7(a7(a.params.device));
                g.Wb(this.u, function(c) {
                    return c.equals(b)
                }) || bYa(this.u, b);
                break;
            case "remoteDisconnected":
                b = new c7(a7(a.params.device));
                g.fc(this.u, function(c) {
                    return c.equals(b)
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                n_a(this, a, "QUEUE_MODIFIED");
                break;
            case "nowPlaying":
                p_a(this, a);
                break;
            case "onStateChange":
                o_a(this, a);
                break;
            case "onAdStateChange":
                q_a(this, a);
                break;
            case "onVolumeChanged":
                r_a(this, a);
                break;
            case "onSubtitlesTrackChanged":
                m_a(this, a);
                break;
            case "nowAutoplaying":
                s_a(this, a);
                break;
            case "autoplayDismissed":
                this.ea("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.J = a.params.videoId || null;
                this.ea("autoplayUpNext", this.J);
                break;
            case "onAutoplayModeChanged":
                this.C =
                    a.params.autoplayMode;
                this.ea("autoplayModeChange", this.C);
                "DISABLED" == this.C && this.ea("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                t_a(this, a);
                break;
            case "requestAssistedSignIn":
                this.ea("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.ea("loopModeChange", a.params.loopMode);
                break;
            default:
                i9("Unrecognized action: " + a.action)
        }
    };
    g.k.oT = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.hw()) ? Y7(this.i) && isNaN(this.D) && (a = 1) : a = 2);
        return a
    };
    g.k.Gs = function(a) {
        i9("Disconnecting with " + a);
        g.Ia("yt.mdx.remote.remoteClient_", null, void 0);
        k9(this);
        this.ea("beforeDisconnect", a);
        1 == a && o7();
        hZa(this.i, a);
        this.dispose()
    };
    g.k.mT = function() {
        var a = this.zc;
        this.B && (a = this.zc.clone(), X8(a, this.B, a.index));
        return Y8(a)
    };
    g.k.yY = function(a) {
        var b = this,
            c = new S8(a);
        c.videoId && c.videoId != this.zc.videoId && (this.B = c.videoId, g.Ft(this.K), this.K = g.Dt(function() {
            if (b.B) {
                var e = b.B;
                b.B = null;
                b.zc.videoId != e && n9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.zc.listId == c.listId && this.zc.videoId == c.videoId && this.zc.index == c.index || d.push("remoteQueueChange");
        this.zc.playerState == c.playerState && this.zc.volume == c.volume && this.zc.muted == c.muted && W8(this.zc) == W8(c) && g.Ni(this.zc.trackData) == g.Ni(c.trackData) || d.push("remotePlayerChange");
        this.zc.reset(a);
        g.sc(d, function(e) {
            this.ea(e)
        }, this)
    };
    g.k.sL = function() {
        var a = this.i.J.id,
            b = g.Wb(this.u, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.hw = function() {
        var a = this.i;
        return a.u.isActive() ? a.u.u - Date.now() : NaN
    };
    g.k.jT = function() {
        return this.C || "UNSUPPORTED"
    };
    g.k.kT = function() {
        return this.J || ""
    };
    g.k.nQ = function() {
        if (!isNaN(this.hw())) {
            var a = this.i.u;
            g.ir(a.i);
            a.start()
        }
    };
    g.k.vY = function(a, b) {
        n9(this, a, b);
        k_a(this)
    };
    g.k.yI = function() {
        var a = g.Tt("SID", "") || "",
            b = g.Tt("SAPISID", "") || "",
            c = g.Tt("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Fc(g.fb(a), 2);
        b = g.Fc(g.fb(b), 2);
        c = g.Fc(g.fb(c), 2);
        return g.Fc(g.fb(a + "," + b + "," + c), 2)
    };
    h9.prototype.subscribe = h9.prototype.subscribe;
    h9.prototype.unsubscribeByKey = h9.prototype.og;
    h9.prototype.getProxyState = h9.prototype.oT;
    h9.prototype.disconnect = h9.prototype.Gs;
    h9.prototype.getPlayerContextData = h9.prototype.mT;
    h9.prototype.setPlayerContextData = h9.prototype.yY;
    h9.prototype.getOtherConnectedRemoteId = h9.prototype.sL;
    h9.prototype.getReconnectTimeout = h9.prototype.hw;
    h9.prototype.getAutoplayMode = h9.prototype.jT;
    h9.prototype.getAutoplayVideoId = h9.prototype.kT;
    h9.prototype.reconnect = h9.prototype.nQ;
    h9.prototype.sendMessage = h9.prototype.vY;
    h9.prototype.getXsrfToken = h9.prototype.yI;
    h9.prototype.isCapabilitySupportedOnConnectedDevices = h9.prototype.ZL;
    g.w(o9, g8);
    g.k = o9.prototype;
    g.k.Kh = function(a) {
        return this.Ye.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Ye.$_c(a)
    };
    g.k.get = function(a) {
        return this.Ye.$_g(a)
    };
    g.k.start = function() {
        this.Ye.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Ye.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Ye.$_r(a, b, c)
    };
    g.k.RB = function(a, b, c, d) {
        this.Ye.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Ye.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Ye = null;
        g8.prototype.xa.call(this)
    };
    g.k.oQ = function() {
        this.ea("screenChange")
    };
    g.k.mW = function() {
        this.ea("onlineScreenChange")
    };
    q8.prototype.$_st = q8.prototype.start;
    q8.prototype.$_gspc = q8.prototype.iQ;
    q8.prototype.$_gsppc = q8.prototype.uI;
    q8.prototype.$_c = q8.prototype.contains;
    q8.prototype.$_g = q8.prototype.get;
    q8.prototype.$_a = q8.prototype.add;
    q8.prototype.$_un = q8.prototype.RB;
    q8.prototype.$_r = q8.prototype.remove;
    q8.prototype.$_gs = q8.prototype.Kh;
    q8.prototype.$_gos = q8.prototype.tI;
    q8.prototype.$_s = q8.prototype.subscribe;
    q8.prototype.$_ubk = q8.prototype.og;
    var B9 = null,
        H9 = !1,
        p9 = null,
        q9 = null,
        G9 = null,
        u9 = [];
    g.w(I9, g.I);
    g.k = I9.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.i.stop();
        this.B.stop();
        this.S.stop();
        this.ma();
        var a = this.Xb;
        a.unsubscribe("proxyStateChange", this.HN, this);
        a.unsubscribe("remotePlayerChange", this.gx, this);
        a.unsubscribe("remoteQueueChange", this.PA, this);
        a.unsubscribe("previousNextChange", this.EN, this);
        a.unsubscribe("nowAutoplaying", this.yN, this);
        a.unsubscribe("autoplayDismissed", this.bN, this);
        this.Xb = this.u = null
    };
    g.k.Gj = function(a) {
        var b = g.Ba.apply(1, arguments);
        if (2 != this.Xb.B)
            if (J9(this)) {
                var c = a;
                if (!a9(this.Xb).isAdPlaying() || "control_seek" !== c) switch (c) {
                    case "control_toggle_play_pause":
                        a9(this.Xb).Jc() ? this.Xb.pause() : this.Xb.play();
                        break;
                    case "control_play":
                        this.Xb.play();
                        break;
                    case "control_pause":
                        this.Xb.pause();
                        break;
                    case "control_seek":
                        this.K.mJ(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        K9(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.I.getCurrentTime();
                    L9(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    L9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    K9(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.mV = function(a) {
        this.S.KR(a)
    };
    g.k.kZ = function(a) {
        this.Gj("control_subtitles_set_track", g.af(a) ? null : a)
    };
    g.k.aP = function() {
        var a = this.I.getOption("captions", "track");
        g.af(a) || K9(this, a)
    };
    g.k.Sb = function(a) {
        this.u.Sb(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.XV = function() {
        g.af(this.C) || E_a(this, this.C);
        this.D = !1
    };
    g.k.HN = function(a, b) {
        this.B.stop();
        2 === b && this.VO()
    };
    g.k.gx = function() {
        if (J9(this)) {
            this.i.stop();
            var a = a9(this.Xb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.Cf = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.Cf = 0;
                    break;
                default:
                    this.u.Cf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Yb(new g.MI(8));
                    this.UO();
                    break;
                case 1085:
                case 3:
                    this.Yb(new g.MI(9));
                    break;
                case 1083:
                case 0:
                    this.Yb(new g.MI(2));
                    this.K.stop();
                    this.Sb(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Yb(new g.MI(4));
                    break;
                case 2:
                    this.Yb(new g.MI(4));
                    this.Sb(W8(a));
                    break;
                case -1:
                    this.Yb(new g.MI(64));
                    break;
                case -1E3:
                    this.Yb(new g.MI(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "Cette vid\u00e9o ne peut pas \u00eatre visionn\u00e9e \u00e0 distance."
                    }))
            }
            a = a9(this.Xb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, E_a(this, a));
            a = a9(this.Xb); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.X.isActive() || this.AP()
        } else D_a(this)
    };
    g.k.EN = function() {
        this.I.ea("mdxpreviousnextchange")
    };
    g.k.PA = function() {
        J9(this) || D_a(this)
    };
    g.k.yN = function(a) {
        isNaN(a) || this.I.ea("mdxnowautoplaying", a)
    };
    g.k.bN = function() {
        this.I.ea("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        J9(this) && this.Xb.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === a9(this.Xb).playerState ? L9(this, a) : b && this.Xb.seekTo(a)
    };
    g.k.AP = function() {
        var a = this;
        if (J9(this)) {
            var b = a9(this.Xb);
            this.events.yc(this.Z);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.Z = this.events.T(this.I, "onVolumeChange", function(c) {
                C_a(a, c)
            })
        }
    };
    g.k.UO = function() {
        this.i.stop();
        if (!this.Xb.isDisposed()) {
            var a = a9(this.Xb);
            a.Jc() && this.Yb(new g.MI(8));
            this.Sb(W8(a));
            this.i.start()
        }
    };
    g.k.VO = function() {
        this.B.stop();
        this.i.stop();
        var a = this.Xb.C.getReconnectTimeout();
        2 == this.Xb.B && !isNaN(a) && this.B.start()
    };
    g.k.Yb = function(a) {
        this.B.stop();
        var b = this.J;
        if (!g.cJ(b, a)) {
            var c = g.U(a, 2);
            c !== g.U(this.J, 2) && this.I.Vt(c);
            this.J = a;
            G_a(this.u, b, a)
        }
    };
    g.w(M9, g.V);
    M9.prototype.md = function() {
        this.i.show()
    };
    M9.prototype.Fb = function() {
        this.i.hide()
    };
    M9.prototype.u = function() {
        b7("mdx-privacy-popup-cancel");
        this.Fb()
    };
    M9.prototype.B = function() {
        b7("mdx-privacy-popup-confirm");
        this.Fb()
    };
    g.w(N9, g.V);
    N9.prototype.onStateChange = function(a) {
        F_a(this, a.state)
    };
    g.w(O9, g.rP);
    O9.prototype.D = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.So = g.tc(a, this.i, this), g.sP(this, g.co(a, this.i)), a = this.I.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.di(a), this.enable(!0)) : this.enable(!1)
    };
    O9.prototype.i = function(a) {
        return a.key
    };
    O9.prototype.xj = function(a) {
        return "cast-selector-receiver" === a ? "Caster sur\u2026" : this.So[a].name
    };
    O9.prototype.If = function(a) {
        g.rP.prototype.If.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.So[a]);
        this.sb.Fb()
    };
    g.w(P9, g.rM);
    g.k = P9.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.ZD(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        x_a(b, a);
        this.subscriptions.push(g.Su("yt-remote-before-disconnect", this.lV, this));
        this.subscriptions.push(g.Su("yt-remote-connection-change", this.NW, this));
        this.subscriptions.push(g.Su("yt-remote-receiver-availability-change", this.GN,
            this));
        this.subscriptions.push(g.Su("yt-remote-auto-connect", this.LW, this));
        this.subscriptions.push(g.Su("yt-remote-receiver-resumed", this.KW, this));
        this.subscriptions.push(g.Su("mdx-privacy-popup-confirm", this.cY, this));
        this.subscriptions.push(g.Su("mdx-privacy-popup-cancel", this.bY, this));
        this.GN()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.rM.prototype.load.call(this);
        this.oi = new I9(this, this.player, this.Xb);
        var a = (a = B_a()) ? a.currentTime : 0;
        var b = F9() ? new $8(z9(), void 0) : null;
        0 == a && b && (a = W8(a9(b)));
        0 !== a && this.Sb(a);
        G_a(this, this.Hd, this.Hd);
        this.player.yl(6)
    };
    g.k.unload = function() {
        this.player.ea("mdxautoplaycanceled");
        this.Fn = this.ll;
        g.Ce(this.oi, this.Xb);
        this.Xb = this.oi = null;
        g.rM.prototype.unload.call(this);
        this.player.yl(5);
        Q9(this)
    };
    g.k.xa = function() {
        g.Tu(this.subscriptions);
        g.rM.prototype.xa.call(this)
    };
    g.k.ol = function(a) {
        var b = g.Ba.apply(1, arguments);
        this.loaded && this.oi.Gj.apply(this.oi, [a].concat(g.u(b)))
    };
    g.k.getAdState = function() {
        return this.Cf
    };
    g.k.Zk = function() {
        return this.Xb ? a9(this.Xb).Zk : !1
    };
    g.k.hasNext = function() {
        return this.Xb ? a9(this.Xb).hasNext : !1
    };
    g.k.Sb = function(a, b) {
        this.pM = a || 0;
        this.player.ea("progresssync", a, b);
        this.player.Qa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.pM
    };
    g.k.getProgressState = function() {
        var a = a9(this.Xb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.U().N("web_player_mdx_allow_seeking_change_killswitch") ? this.player.mf() : !a.isAdPlaying() && this.player.mf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + U8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.i + U8(a) : a.i) - this.getCurrentTime(),
            loaded: a.S,
            seekableEnd: a.u ? a.i + U8(a) : a.i,
            seekableStart: 0 <
                a.C ? a.C + U8(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.Xb && this.Xb.nextVideo()
    };
    g.k.dB = function() {
        this.Xb && this.Xb.dB()
    };
    g.k.lV = function(a) {
        1 === a && (this.AG = this.Xb ? a9(this.Xb) : null)
    };
    g.k.NW = function() {
        var a = F9() ? new $8(z9(), void 0) : null;
        if (a) {
            var b = this.Fn;
            this.loaded && this.unload();
            this.Xb = a;
            this.AG = null;
            b.key !== this.ll.key && (this.Fn = b, this.load())
        } else g.Be(this.Xb), this.Xb = null, this.loaded && (this.unload(), (a = this.AG) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, W8(a)));
        this.player.ea("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.GN = function() {
        var a = [this.ll],
            b = a.concat,
            c = y_a();
        O8() && g.hy("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.So = b.call(a, c);
        a = A9() || this.ll;
        R9(this, a);
        this.player.Qa("onMdxReceiversChange")
    };
    g.k.LW = function() {
        var a = A9();
        R9(this, a)
    };
    g.k.KW = function() {
        this.Fn = A9()
    };
    g.k.cY = function() {
        this.ox = !0;
        Q9(this);
        H9 = !1;
        B9 && D9(B9, 1);
        B9 = null
    };
    g.k.bY = function() {
        this.ox = !1;
        Q9(this);
        R9(this, this.ll);
        this.Fn = this.ll;
        H9 = !1;
        B9 = null;
        this.player.playVideo()
    };
    g.k.tf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.So;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Q8() : R9(this, b)), this.loaded ? this.Fn : this.ll;
            case "quickCast":
                return 2 === this.So.length && "cast-selector-receiver" === this.So[1].key ? (b && Q8(), !0) : !1
        }
    };
    g.k.BH = function() {
        this.Xb.BH()
    };
    g.k.aj = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.qM("remote", P9);
})(_yt_player);