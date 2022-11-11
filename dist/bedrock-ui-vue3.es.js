import { defineComponent as j, openBlock as F, createElementBlock as $, toDisplayString as Ge, ref as qt, createVNode as Ue, unref as fe, createElementVNode as We, pushScopeId as Xt, popScopeId as Kt, computed as gt, normalizeClass as Zt, createCommentVNode as Jt, createBlock as Qt, mergeProps as er } from "vue";
import mt from "primevue/button";
const tr = /* @__PURE__ */ j({
  __name: "ComponentA",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (n, o) => (F(), $("div", null, "hello " + Ge(t.msg), 1));
  }
}), rr = (t) => (Xt("data-v-0a6c624a"), t = t(), Kt(), t), nr = { class: "flex align-content-center flex-wrap counter" }, ar = /* @__PURE__ */ rr(() => /* @__PURE__ */ We("div", { class: "flex align-items-center justify-content-center" }, "Counter:", -1)), or = { class: "flex align-items-center justify-content-center count" }, ir = /* @__PURE__ */ j({
  __name: "ComponentB",
  setup(t) {
    const n = qt(0);
    return (o, l) => (F(), $("div", nr, [
      ar,
      Ue(fe(mt), {
        icon: "pi pi-plus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: l[0] || (l[0] = (c) => n.value++)
      }),
      We("span", or, Ge(n.value), 1),
      Ue(fe(mt), {
        icon: "pi pi-minus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: l[1] || (l[1] = (c) => n.value--)
      })
    ]));
  }
});
const lr = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [l, c] of n)
    o[l] = c;
  return o;
}, sr = /* @__PURE__ */ lr(ir, [["__scopeId", "data-v-0a6c624a"]]), ur = { class: "y-test" }, cr = /* @__PURE__ */ j({
  __name: "ComponentC",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (n, o) => (F(), $("div", ur, "ccccccc " + Ge(t.msg), 1));
  }
});
/*! @license DOMPurify 2.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.1/LICENSE */
function x(t) {
  return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, x(t);
}
function He(t, n) {
  return He = Object.setPrototypeOf || function(l, c) {
    return l.__proto__ = c, l;
  }, He(t, n);
}
function fr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ue(t, n, o) {
  return fr() ? ue = Reflect.construct : ue = function(c, R, N) {
    var D = [null];
    D.push.apply(D, R);
    var Y = Function.bind.apply(c, D), V = new Y();
    return N && He(V, N.prototype), V;
  }, ue.apply(null, arguments);
}
function S(t) {
  return pr(t) || mr(t) || dr(t) || _r();
}
function pr(t) {
  if (Array.isArray(t))
    return ze(t);
}
function mr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function dr(t, n) {
  if (!!t) {
    if (typeof t == "string")
      return ze(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set")
      return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return ze(t, n);
  }
}
function ze(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, l = new Array(n); o < n; o++)
    l[o] = t[o];
  return l;
}
function _r() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vr = Object.hasOwnProperty, dt = Object.setPrototypeOf, Tr = Object.isFrozen, hr = Object.getPrototypeOf, Ar = Object.getOwnPropertyDescriptor, A = Object.freeze, O = Object.seal, Er = Object.create, yt = typeof Reflect < "u" && Reflect, pe = yt.apply, Be = yt.construct;
pe || (pe = function(n, o, l) {
  return n.apply(o, l);
});
A || (A = function(n) {
  return n;
});
O || (O = function(n) {
  return n;
});
Be || (Be = function(n, o) {
  return ue(n, S(o));
});
var gr = g(Array.prototype.forEach), _t = g(Array.prototype.pop), Z = g(Array.prototype.push), ce = g(String.prototype.toLowerCase), we = g(String.prototype.toString), yr = g(String.prototype.match), b = g(String.prototype.replace), br = g(String.prototype.indexOf), Sr = g(String.prototype.trim), h = g(RegExp.prototype.test), xe = Or(TypeError);
function g(t) {
  return function(n) {
    for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      l[c - 1] = arguments[c];
    return pe(t, n, l);
  };
}
function Or(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
      o[l] = arguments[l];
    return Be(t, o);
  };
}
function s(t, n, o) {
  o = o || ce, dt && dt(t, null);
  for (var l = n.length; l--; ) {
    var c = n[l];
    if (typeof c == "string") {
      var R = o(c);
      R !== c && (Tr(n) || (n[l] = R), c = R);
    }
    t[c] = !0;
  }
  return t;
}
function P(t) {
  var n = Er(null), o;
  for (o in t)
    pe(vr, t, [o]) && (n[o] = t[o]);
  return n;
}
function le(t, n) {
  for (; t !== null; ) {
    var o = Ar(t, n);
    if (o) {
      if (o.get)
        return g(o.get);
      if (typeof o.value == "function")
        return g(o.value);
    }
    t = hr(t);
  }
  function l(c) {
    return console.warn("fallback value for", c), null;
  }
  return l;
}
var vt = A(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ie = A(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ke = A(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Rr = A(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pe = A(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Dr = A(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Tt = A(["#text"]), ht = A(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Fe = A(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), At = A(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), se = A(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lr = O(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Nr = O(/<%[\w\W]*|[\w\W]*%>/gm), Mr = O(/\${[\w\W]*}/gm), Cr = O(/^data-[\-\w.\u00B7-\uFFFF]/), wr = O(/^aria-[\-\w]+$/), xr = O(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), Ir = O(/^(?:\w+script|data):/i), kr = O(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), Pr = O(/^html$/i), Fr = function() {
  return typeof window > "u" ? null : window;
}, Ur = function(n, o) {
  if (x(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var l = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (l = o.currentScript.getAttribute(c));
  var R = "dompurify" + (l ? "#" + l : "");
  try {
    return n.createPolicy(R, {
      createHTML: function(D) {
        return D;
      },
      createScriptURL: function(D) {
        return D;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function bt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr(), n = function(e) {
    return bt(e);
  };
  if (n.version = "2.4.1", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, l = t.document, c = t.DocumentFragment, R = t.HTMLTemplateElement, N = t.Node, D = t.Element, Y = t.NodeFilter, V = t.NamedNodeMap, Rt = V === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : V, Dt = t.HTMLFormElement, Lt = t.DOMParser, J = t.trustedTypes, Q = D.prototype, Nt = le(Q, "cloneNode"), Mt = le(Q, "nextSibling"), Ct = le(Q, "childNodes"), me = le(Q, "parentNode");
  if (typeof R == "function") {
    var de = l.createElement("template");
    de.content && de.content.ownerDocument && (l = de.content.ownerDocument);
  }
  var y = Ur(J, o), $e = y ? y.createHTML("") : "", ee = l, _e = ee.implementation, wt = ee.createNodeIterator, xt = ee.createDocumentFragment, It = ee.getElementsByTagName, kt = o.importNode, je = {};
  try {
    je = P(l).documentMode ? l.documentMode : {};
  } catch {
  }
  var L = {};
  n.isSupported = typeof me == "function" && _e && typeof _e.createHTMLDocument < "u" && je !== 9;
  var ve = Lr, Te = Nr, he = Mr, Pt = Cr, Ft = wr, Ut = Ir, Ye = kr, Ae = xr, p = null, Ve = s({}, [].concat(S(vt), S(Ie), S(ke), S(Pe), S(Tt))), _ = null, qe = s({}, [].concat(S(ht), S(Fe), S(At), S(se))), f = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), q = null, Ee = null, Xe = !0, ge = !0, Ke = !1, U = !1, I = !1, ye = !1, be = !1, H = !1, te = !1, re = !1, Ze = !0, Je = !1, Ht = "user-content-", Se = !0, X = !1, z = {}, B = null, Qe = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), et = null, tt = s({}, ["audio", "video", "img", "source", "image", "track"]), Oe = null, rt = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ne = "http://www.w3.org/1998/Math/MathML", ae = "http://www.w3.org/2000/svg", M = "http://www.w3.org/1999/xhtml", G = M, Re = !1, De = null, zt = s({}, [ne, ae, M], we), k, Bt = ["application/xhtml+xml", "text/html"], Gt = "text/html", m, W = null, Wt = l.createElement("form"), nt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Le = function(e) {
    W && W === e || ((!e || x(e) !== "object") && (e = {}), e = P(e), k = Bt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? k = Gt : k = e.PARSER_MEDIA_TYPE, m = k === "application/xhtml+xml" ? we : ce, p = "ALLOWED_TAGS" in e ? s({}, e.ALLOWED_TAGS, m) : Ve, _ = "ALLOWED_ATTR" in e ? s({}, e.ALLOWED_ATTR, m) : qe, De = "ALLOWED_NAMESPACES" in e ? s({}, e.ALLOWED_NAMESPACES, we) : zt, Oe = "ADD_URI_SAFE_ATTR" in e ? s(
      P(rt),
      e.ADD_URI_SAFE_ATTR,
      m
    ) : rt, et = "ADD_DATA_URI_TAGS" in e ? s(
      P(tt),
      e.ADD_DATA_URI_TAGS,
      m
    ) : tt, B = "FORBID_CONTENTS" in e ? s({}, e.FORBID_CONTENTS, m) : Qe, q = "FORBID_TAGS" in e ? s({}, e.FORBID_TAGS, m) : {}, Ee = "FORBID_ATTR" in e ? s({}, e.FORBID_ATTR, m) : {}, z = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Xe = e.ALLOW_ARIA_ATTR !== !1, ge = e.ALLOW_DATA_ATTR !== !1, Ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1, U = e.SAFE_FOR_TEMPLATES || !1, I = e.WHOLE_DOCUMENT || !1, H = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, re = e.RETURN_TRUSTED_TYPE || !1, be = e.FORCE_BODY || !1, Ze = e.SANITIZE_DOM !== !1, Je = e.SANITIZE_NAMED_PROPS || !1, Se = e.KEEP_CONTENT !== !1, X = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, G = e.NAMESPACE || M, e.CUSTOM_ELEMENT_HANDLING && nt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && nt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), U && (ge = !1), te && (H = !0), z && (p = s({}, S(Tt)), _ = [], z.html === !0 && (s(p, vt), s(_, ht)), z.svg === !0 && (s(p, Ie), s(_, Fe), s(_, se)), z.svgFilters === !0 && (s(p, ke), s(_, Fe), s(_, se)), z.mathMl === !0 && (s(p, Pe), s(_, At), s(_, se))), e.ADD_TAGS && (p === Ve && (p = P(p)), s(p, e.ADD_TAGS, m)), e.ADD_ATTR && (_ === qe && (_ = P(_)), s(_, e.ADD_ATTR, m)), e.ADD_URI_SAFE_ATTR && s(Oe, e.ADD_URI_SAFE_ATTR, m), e.FORBID_CONTENTS && (B === Qe && (B = P(B)), s(B, e.FORBID_CONTENTS, m)), Se && (p["#text"] = !0), I && s(p, ["html", "head", "body"]), p.table && (s(p, ["tbody"]), delete q.tbody), A && A(e), W = e);
  }, at = s({}, ["mi", "mo", "mn", "ms", "mtext"]), ot = s({}, ["foreignobject", "desc", "title", "annotation-xml"]), $t = s({}, ["title", "style", "font", "a", "script"]), oe = s({}, Ie);
  s(oe, ke), s(oe, Rr);
  var Ne = s({}, Pe);
  s(Ne, Dr);
  var jt = function(e) {
    var r = me(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: G,
      tagName: "template"
    });
    var a = ce(e.tagName), u = ce(r.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === ae ? r.namespaceURI === M ? a === "svg" : r.namespaceURI === ne ? a === "svg" && (u === "annotation-xml" || at[u]) : Boolean(oe[a]) : e.namespaceURI === ne ? r.namespaceURI === M ? a === "math" : r.namespaceURI === ae ? a === "math" && ot[u] : Boolean(Ne[a]) : e.namespaceURI === M ? r.namespaceURI === ae && !ot[u] || r.namespaceURI === ne && !at[u] ? !1 : !Ne[a] && ($t[a] || !oe[a]) : !!(k === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
  }, C = function(e) {
    Z(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = $e;
      } catch {
        e.remove();
      }
    }
  }, Me = function(e, r) {
    try {
      Z(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      Z(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !_[e])
      if (H || te)
        try {
          C(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, it = function(e) {
    var r, a;
    if (be)
      e = "<remove></remove>" + e;
    else {
      var u = yr(e, /^[\r\n\t ]+/);
      a = u && u[0];
    }
    k === "application/xhtml+xml" && G === M && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var E = y ? y.createHTML(e) : e;
    if (G === M)
      try {
        r = new Lt().parseFromString(E, k);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = _e.createDocument(G, "template", null);
      try {
        r.documentElement.innerHTML = Re ? "" : E;
      } catch {
      }
    }
    var T = r.body || r.documentElement;
    return e && a && T.insertBefore(l.createTextNode(a), T.childNodes[0] || null), G === M ? It.call(r, I ? "html" : "body")[0] : I ? r.documentElement : T;
  }, lt = function(e) {
    return wt.call(
      e.ownerDocument || e,
      e,
      Y.SHOW_ELEMENT | Y.SHOW_COMMENT | Y.SHOW_TEXT,
      null,
      !1
    );
  }, Yt = function(e) {
    return e instanceof Dt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Rt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, K = function(e) {
    return x(N) === "object" ? e instanceof N : e && x(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, w = function(e, r, a) {
    !L[e] || gr(L[e], function(u) {
      u.call(n, r, a, W);
    });
  }, st = function(e) {
    var r;
    if (w("beforeSanitizeElements", e, null), Yt(e) || h(/[\u0080-\uFFFF]/, e.nodeName))
      return C(e), !0;
    var a = m(e.nodeName);
    if (w("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: p
    }), e.hasChildNodes() && !K(e.firstElementChild) && (!K(e.content) || !K(e.content.firstElementChild)) && h(/<[/\w]/g, e.innerHTML) && h(/<[/\w]/g, e.textContent) || a === "select" && h(/<template/i, e.innerHTML))
      return C(e), !0;
    if (!p[a] || q[a]) {
      if (!q[a] && ct(a) && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, a) || f.tagNameCheck instanceof Function && f.tagNameCheck(a)))
        return !1;
      if (Se && !B[a]) {
        var u = me(e) || e.parentNode, E = Ct(e) || e.childNodes;
        if (E && u)
          for (var T = E.length, v = T - 1; v >= 0; --v)
            u.insertBefore(Nt(E[v], !0), Mt(e));
      }
      return C(e), !0;
    }
    return e instanceof D && !jt(e) || (a === "noscript" || a === "noembed") && h(/<\/no(script|embed)/i, e.innerHTML) ? (C(e), !0) : (U && e.nodeType === 3 && (r = e.textContent, r = b(r, ve, " "), r = b(r, Te, " "), r = b(r, he, " "), e.textContent !== r && (Z(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), w("afterSanitizeElements", e, null), !1);
  }, ut = function(e, r, a) {
    if (Ze && (r === "id" || r === "name") && (a in l || a in Wt))
      return !1;
    if (!(ge && !Ee[r] && h(Pt, r))) {
      if (!(Xe && h(Ft, r))) {
        if (!_[r] || Ee[r]) {
          if (!(ct(e) && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && h(f.attributeNameCheck, r) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(r)) || r === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, a) || f.tagNameCheck instanceof Function && f.tagNameCheck(a))))
            return !1;
        } else if (!Oe[r]) {
          if (!h(Ae, b(a, Ye, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && br(a, "data:") === 0 && et[e])) {
              if (!(Ke && !h(Ut, b(a, Ye, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ct = function(e) {
    return e.indexOf("-") > 0;
  }, ft = function(e) {
    var r, a, u, E;
    w("beforeSanitizeAttributes", e, null);
    var T = e.attributes;
    if (!!T) {
      var v = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: _
      };
      for (E = T.length; E--; ) {
        r = T[E];
        var ie = r, d = ie.name, Ce = ie.namespaceURI;
        if (a = d === "value" ? r.value : Sr(r.value), u = m(d), v.attrName = u, v.attrValue = a, v.keepAttr = !0, v.forceKeepAttr = void 0, w("uponSanitizeAttribute", e, v), a = v.attrValue, !v.forceKeepAttr && (Me(d, e), !!v.keepAttr)) {
          if (h(/\/>/i, a)) {
            Me(d, e);
            continue;
          }
          U && (a = b(a, ve, " "), a = b(a, Te, " "), a = b(a, he, " "));
          var pt = m(e.nodeName);
          if (!!ut(pt, u, a)) {
            if (Je && (u === "id" || u === "name") && (Me(d, e), a = Ht + a), y && x(J) === "object" && typeof J.getAttributeType == "function" && !Ce)
              switch (J.getAttributeType(pt, u)) {
                case "TrustedHTML":
                  a = y.createHTML(a);
                  break;
                case "TrustedScriptURL":
                  a = y.createScriptURL(a);
                  break;
              }
            try {
              Ce ? e.setAttributeNS(Ce, d, a) : e.setAttribute(d, a), _t(n.removed);
            } catch {
            }
          }
        }
      }
      w("afterSanitizeAttributes", e, null);
    }
  }, Vt = function i(e) {
    var r, a = lt(e);
    for (w("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      w("uponSanitizeShadowNode", r, null), !st(r) && (r.content instanceof c && i(r.content), ft(r));
    w("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(i) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, u, E, T;
    if (Re = !i, Re && (i = "<!-->"), typeof i != "string" && !K(i)) {
      if (typeof i.toString != "function")
        throw xe("toString is not a function");
      if (i = i.toString(), typeof i != "string")
        throw xe("dirty is not a string, aborting");
    }
    if (!n.isSupported) {
      if (x(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof i == "string")
          return t.toStaticHTML(i);
        if (K(i))
          return t.toStaticHTML(i.outerHTML);
      }
      return i;
    }
    if (ye || Le(e), n.removed = [], typeof i == "string" && (X = !1), X) {
      if (i.nodeName) {
        var v = m(i.nodeName);
        if (!p[v] || q[v])
          throw xe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (i instanceof N)
      r = it("<!---->"), a = r.ownerDocument.importNode(i, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!H && !U && !I && i.indexOf("<") === -1)
        return y && re ? y.createHTML(i) : i;
      if (r = it(i), !r)
        return H ? null : re ? $e : "";
    }
    r && be && C(r.firstChild);
    for (var ie = lt(X ? i : r); u = ie.nextNode(); )
      u.nodeType === 3 && u === E || st(u) || (u.content instanceof c && Vt(u.content), ft(u), E = u);
    if (E = null, X)
      return i;
    if (H) {
      if (te)
        for (T = xt.call(r.ownerDocument); r.firstChild; )
          T.appendChild(r.firstChild);
      else
        T = r;
      return _.shadowroot && (T = kt.call(o, T, !0)), T;
    }
    var d = I ? r.outerHTML : r.innerHTML;
    return I && p["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && h(Pr, r.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + d), U && (d = b(d, ve, " "), d = b(d, Te, " "), d = b(d, he, " ")), y && re ? y.createHTML(d) : d;
  }, n.setConfig = function(i) {
    Le(i), ye = !0;
  }, n.clearConfig = function() {
    W = null, ye = !1;
  }, n.isValidAttribute = function(i, e, r) {
    W || Le({});
    var a = m(i), u = m(e);
    return ut(a, u, r);
  }, n.addHook = function(i, e) {
    typeof e == "function" && (L[i] = L[i] || [], Z(L[i], e));
  }, n.removeHook = function(i) {
    if (L[i])
      return _t(L[i]);
  }, n.removeHooks = function(i) {
    L[i] && (L[i] = []);
  }, n.removeAllHooks = function() {
    L = {};
  }, n;
}
var Hr = bt();
const zr = ["innerHTML"], St = /* @__PURE__ */ j({
  __name: "PurifiedHtml",
  props: {
    value: {
      type: String,
      default: "",
      required: !0
    },
    allowedTags: {
      type: Array,
      default: () => ["b", "i", "strong", "a", "ul", "ol", "li", "br"]
    },
    allowedAttributes: {
      type: Array,
      default: () => ["href", "target", "class"]
    }
  },
  setup(t) {
    const n = t, o = gt(() => Hr.sanitize(n.value, {
      ALLOWED_TAGS: n.allowedTags,
      ALLOWED_ATTR: n.allowedAttributes
    }));
    return (l, c) => (F(), $("div", null, [
      We("div", { innerHTML: fe(o) }, null, 8, zr)
    ]));
  }
}), Ot = /* @__PURE__ */ j({
  __name: "AlertText",
  props: {
    message: {
      type: String,
      default: "",
      required: !1
    },
    styling: {
      type: String,
      default: ""
    },
    alertBorder: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const n = t, o = gt(() => `${n.alertBorder} ${n.styling}`);
    return (l, c) => (F(), $("div", null, [
      t.message ? (F(), $("div", {
        key: 0,
        class: Zt(fe(o)),
        role: "alert"
      }, [
        Ue(St, { value: t.message }, null, 8, ["value"])
      ], 2)) : Jt("", !0)
    ]));
  }
}), Br = /* @__PURE__ */ j({
  __name: "AlertTextDanger",
  setup(t) {
    return (n, o) => (F(), Qt(Ot, er({ class: "is-danger" }, { ...n.$props, ...n.$attrs }), null, 16));
  }
}), Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: tr,
  ComponentB: sr,
  ComponentC: cr,
  YAlertText: Ot,
  YAlertTextDanger: Br,
  PurifiedHtml: St
}, Symbol.toStringTag, { value: "Module" }));
function Gr(t) {
  Object.keys(Et).forEach(function(o) {
    t.component(o, Et[o]);
  });
}
const Yr = { install: Gr };
export {
  tr as ComponentA,
  sr as ComponentB,
  cr as ComponentC,
  St as PurifiedHtml,
  Ot as YAlertText,
  Br as YAlertTextDanger,
  Yr as default
};
