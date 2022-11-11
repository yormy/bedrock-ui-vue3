import { defineComponent as W, openBlock as $, createElementBlock as Z, toDisplayString as Ge, ref as Xt, createVNode as Ue, unref as fe, createElementVNode as Et, pushScopeId as Kt, popScopeId as Zt, computed as gt, normalizeClass as Jt, createCommentVNode as Qt, createBlock as er, mergeProps as tr, renderSlot as rr } from "vue";
import pt from "primevue/button";
const nr = /* @__PURE__ */ W({
  __name: "ComponentA",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (n, o) => ($(), Z("div", null, "hello " + Ge(t.msg), 1));
  }
}), ar = (t) => (Kt("data-v-0a6c624a"), t = t(), Zt(), t), or = { class: "flex align-content-center flex-wrap counter" }, ir = /* @__PURE__ */ ar(() => /* @__PURE__ */ Et("div", { class: "flex align-items-center justify-content-center" }, "Counter:", -1)), lr = { class: "flex align-items-center justify-content-center count" }, sr = /* @__PURE__ */ W({
  __name: "ComponentB",
  setup(t) {
    const n = Xt(0);
    return (o, l) => ($(), Z("div", or, [
      ir,
      Ue(fe(pt), {
        icon: "pi pi-plus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: l[0] || (l[0] = (c) => n.value++)
      }),
      Et("span", lr, Ge(n.value), 1),
      Ue(fe(pt), {
        icon: "pi pi-minus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: l[1] || (l[1] = (c) => n.value--)
      })
    ]));
  }
});
const yt = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [l, c] of n)
    o[l] = c;
  return o;
}, ur = /* @__PURE__ */ yt(sr, [["__scopeId", "data-v-0a6c624a"]]), cr = { class: "y-test" }, fr = /* @__PURE__ */ W({
  __name: "ComponentC",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (n, o) => ($(), Z("div", cr, "ccccccc " + Ge(t.msg), 1));
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
function pr() {
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
  return pr() ? ue = Reflect.construct : ue = function(c, R, N) {
    var D = [null];
    D.push.apply(D, R);
    var j = Function.bind.apply(c, D), Y = new j();
    return N && He(Y, N.prototype), Y;
  }, ue.apply(null, arguments);
}
function S(t) {
  return mr(t) || dr(t) || _r(t) || vr();
}
function mr(t) {
  if (Array.isArray(t))
    return ze(t);
}
function dr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function _r(t, n) {
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
function vr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tr = Object.hasOwnProperty, mt = Object.setPrototypeOf, hr = Object.isFrozen, Ar = Object.getPrototypeOf, Er = Object.getOwnPropertyDescriptor, A = Object.freeze, O = Object.seal, gr = Object.create, bt = typeof Reflect < "u" && Reflect, pe = bt.apply, Be = bt.construct;
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
var yr = g(Array.prototype.forEach), dt = g(Array.prototype.pop), K = g(Array.prototype.push), ce = g(String.prototype.toLowerCase), we = g(String.prototype.toString), br = g(String.prototype.match), b = g(String.prototype.replace), Sr = g(String.prototype.indexOf), Or = g(String.prototype.trim), h = g(RegExp.prototype.test), xe = Rr(TypeError);
function g(t) {
  return function(n) {
    for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      l[c - 1] = arguments[c];
    return pe(t, n, l);
  };
}
function Rr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
      o[l] = arguments[l];
    return Be(t, o);
  };
}
function s(t, n, o) {
  o = o || ce, mt && mt(t, null);
  for (var l = n.length; l--; ) {
    var c = n[l];
    if (typeof c == "string") {
      var R = o(c);
      R !== c && (hr(n) || (n[l] = R), c = R);
    }
    t[c] = !0;
  }
  return t;
}
function P(t) {
  var n = gr(null), o;
  for (o in t)
    pe(Tr, t, [o]) && (n[o] = t[o]);
  return n;
}
function le(t, n) {
  for (; t !== null; ) {
    var o = Er(t, n);
    if (o) {
      if (o.get)
        return g(o.get);
      if (typeof o.value == "function")
        return g(o.value);
    }
    t = Ar(t);
  }
  function l(c) {
    return console.warn("fallback value for", c), null;
  }
  return l;
}
var _t = A(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ie = A(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ke = A(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Dr = A(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pe = A(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Lr = A(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), vt = A(["#text"]), Tt = A(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Fe = A(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ht = A(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), se = A(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nr = O(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Mr = O(/<%[\w\W]*|[\w\W]*%>/gm), Cr = O(/\${[\w\W]*}/gm), wr = O(/^data-[\-\w.\u00B7-\uFFFF]/), xr = O(/^aria-[\-\w]+$/), Ir = O(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), kr = O(/^(?:\w+script|data):/i), Pr = O(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), Fr = O(/^html$/i), Ur = function() {
  return typeof window > "u" ? null : window;
}, Hr = function(n, o) {
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
function St() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ur(), n = function(e) {
    return St(e);
  };
  if (n.version = "2.4.1", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, l = t.document, c = t.DocumentFragment, R = t.HTMLTemplateElement, N = t.Node, D = t.Element, j = t.NodeFilter, Y = t.NamedNodeMap, Dt = Y === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : Y, Lt = t.HTMLFormElement, Nt = t.DOMParser, J = t.trustedTypes, Q = D.prototype, Mt = le(Q, "cloneNode"), Ct = le(Q, "nextSibling"), wt = le(Q, "childNodes"), me = le(Q, "parentNode");
  if (typeof R == "function") {
    var de = l.createElement("template");
    de.content && de.content.ownerDocument && (l = de.content.ownerDocument);
  }
  var y = Hr(J, o), We = y ? y.createHTML("") : "", ee = l, _e = ee.implementation, xt = ee.createNodeIterator, It = ee.createDocumentFragment, kt = ee.getElementsByTagName, Pt = o.importNode, $e = {};
  try {
    $e = P(l).documentMode ? l.documentMode : {};
  } catch {
  }
  var L = {};
  n.isSupported = typeof me == "function" && _e && typeof _e.createHTMLDocument < "u" && $e !== 9;
  var ve = Nr, Te = Mr, he = Cr, Ft = wr, Ut = xr, Ht = kr, je = Pr, Ae = Ir, p = null, Ye = s({}, [].concat(S(_t), S(Ie), S(ke), S(Pe), S(vt))), _ = null, Ve = s({}, [].concat(S(Tt), S(Fe), S(ht), S(se))), f = Object.seal(Object.create(null, {
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
  })), V = null, Ee = null, qe = !0, ge = !0, Xe = !1, F = !1, I = !1, ye = !1, be = !1, U = !1, te = !1, re = !1, Ke = !0, Ze = !1, zt = "user-content-", Se = !0, q = !1, H = {}, z = null, Je = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Qe = null, et = s({}, ["audio", "video", "img", "source", "image", "track"]), Oe = null, tt = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ne = "http://www.w3.org/1998/Math/MathML", ae = "http://www.w3.org/2000/svg", M = "http://www.w3.org/1999/xhtml", B = M, Re = !1, De = null, Bt = s({}, [ne, ae, M], we), k, Gt = ["application/xhtml+xml", "text/html"], Wt = "text/html", m, G = null, $t = l.createElement("form"), rt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Le = function(e) {
    G && G === e || ((!e || x(e) !== "object") && (e = {}), e = P(e), k = Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? k = Wt : k = e.PARSER_MEDIA_TYPE, m = k === "application/xhtml+xml" ? we : ce, p = "ALLOWED_TAGS" in e ? s({}, e.ALLOWED_TAGS, m) : Ye, _ = "ALLOWED_ATTR" in e ? s({}, e.ALLOWED_ATTR, m) : Ve, De = "ALLOWED_NAMESPACES" in e ? s({}, e.ALLOWED_NAMESPACES, we) : Bt, Oe = "ADD_URI_SAFE_ATTR" in e ? s(
      P(tt),
      e.ADD_URI_SAFE_ATTR,
      m
    ) : tt, Qe = "ADD_DATA_URI_TAGS" in e ? s(
      P(et),
      e.ADD_DATA_URI_TAGS,
      m
    ) : et, z = "FORBID_CONTENTS" in e ? s({}, e.FORBID_CONTENTS, m) : Je, V = "FORBID_TAGS" in e ? s({}, e.FORBID_TAGS, m) : {}, Ee = "FORBID_ATTR" in e ? s({}, e.FORBID_ATTR, m) : {}, H = "USE_PROFILES" in e ? e.USE_PROFILES : !1, qe = e.ALLOW_ARIA_ATTR !== !1, ge = e.ALLOW_DATA_ATTR !== !1, Xe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, F = e.SAFE_FOR_TEMPLATES || !1, I = e.WHOLE_DOCUMENT || !1, U = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, re = e.RETURN_TRUSTED_TYPE || !1, be = e.FORCE_BODY || !1, Ke = e.SANITIZE_DOM !== !1, Ze = e.SANITIZE_NAMED_PROPS || !1, Se = e.KEEP_CONTENT !== !1, q = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, B = e.NAMESPACE || M, e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), F && (ge = !1), te && (U = !0), H && (p = s({}, S(vt)), _ = [], H.html === !0 && (s(p, _t), s(_, Tt)), H.svg === !0 && (s(p, Ie), s(_, Fe), s(_, se)), H.svgFilters === !0 && (s(p, ke), s(_, Fe), s(_, se)), H.mathMl === !0 && (s(p, Pe), s(_, ht), s(_, se))), e.ADD_TAGS && (p === Ye && (p = P(p)), s(p, e.ADD_TAGS, m)), e.ADD_ATTR && (_ === Ve && (_ = P(_)), s(_, e.ADD_ATTR, m)), e.ADD_URI_SAFE_ATTR && s(Oe, e.ADD_URI_SAFE_ATTR, m), e.FORBID_CONTENTS && (z === Je && (z = P(z)), s(z, e.FORBID_CONTENTS, m)), Se && (p["#text"] = !0), I && s(p, ["html", "head", "body"]), p.table && (s(p, ["tbody"]), delete V.tbody), A && A(e), G = e);
  }, nt = s({}, ["mi", "mo", "mn", "ms", "mtext"]), at = s({}, ["foreignobject", "desc", "title", "annotation-xml"]), jt = s({}, ["title", "style", "font", "a", "script"]), oe = s({}, Ie);
  s(oe, ke), s(oe, Dr);
  var Ne = s({}, Pe);
  s(Ne, Lr);
  var Yt = function(e) {
    var r = me(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: B,
      tagName: "template"
    });
    var a = ce(e.tagName), u = ce(r.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === ae ? r.namespaceURI === M ? a === "svg" : r.namespaceURI === ne ? a === "svg" && (u === "annotation-xml" || nt[u]) : Boolean(oe[a]) : e.namespaceURI === ne ? r.namespaceURI === M ? a === "math" : r.namespaceURI === ae ? a === "math" && at[u] : Boolean(Ne[a]) : e.namespaceURI === M ? r.namespaceURI === ae && !at[u] || r.namespaceURI === ne && !nt[u] ? !1 : !Ne[a] && (jt[a] || !oe[a]) : !!(k === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
  }, C = function(e) {
    K(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = We;
      } catch {
        e.remove();
      }
    }
  }, Me = function(e, r) {
    try {
      K(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      K(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !_[e])
      if (U || te)
        try {
          C(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ot = function(e) {
    var r, a;
    if (be)
      e = "<remove></remove>" + e;
    else {
      var u = br(e, /^[\r\n\t ]+/);
      a = u && u[0];
    }
    k === "application/xhtml+xml" && B === M && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var E = y ? y.createHTML(e) : e;
    if (B === M)
      try {
        r = new Nt().parseFromString(E, k);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = _e.createDocument(B, "template", null);
      try {
        r.documentElement.innerHTML = Re ? "" : E;
      } catch {
      }
    }
    var T = r.body || r.documentElement;
    return e && a && T.insertBefore(l.createTextNode(a), T.childNodes[0] || null), B === M ? kt.call(r, I ? "html" : "body")[0] : I ? r.documentElement : T;
  }, it = function(e) {
    return xt.call(
      e.ownerDocument || e,
      e,
      j.SHOW_ELEMENT | j.SHOW_COMMENT | j.SHOW_TEXT,
      null,
      !1
    );
  }, Vt = function(e) {
    return e instanceof Lt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Dt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, X = function(e) {
    return x(N) === "object" ? e instanceof N : e && x(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, w = function(e, r, a) {
    !L[e] || yr(L[e], function(u) {
      u.call(n, r, a, G);
    });
  }, lt = function(e) {
    var r;
    if (w("beforeSanitizeElements", e, null), Vt(e) || h(/[\u0080-\uFFFF]/, e.nodeName))
      return C(e), !0;
    var a = m(e.nodeName);
    if (w("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: p
    }), e.hasChildNodes() && !X(e.firstElementChild) && (!X(e.content) || !X(e.content.firstElementChild)) && h(/<[/\w]/g, e.innerHTML) && h(/<[/\w]/g, e.textContent) || a === "select" && h(/<template/i, e.innerHTML))
      return C(e), !0;
    if (!p[a] || V[a]) {
      if (!V[a] && ut(a) && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, a) || f.tagNameCheck instanceof Function && f.tagNameCheck(a)))
        return !1;
      if (Se && !z[a]) {
        var u = me(e) || e.parentNode, E = wt(e) || e.childNodes;
        if (E && u)
          for (var T = E.length, v = T - 1; v >= 0; --v)
            u.insertBefore(Mt(E[v], !0), Ct(e));
      }
      return C(e), !0;
    }
    return e instanceof D && !Yt(e) || (a === "noscript" || a === "noembed") && h(/<\/no(script|embed)/i, e.innerHTML) ? (C(e), !0) : (F && e.nodeType === 3 && (r = e.textContent, r = b(r, ve, " "), r = b(r, Te, " "), r = b(r, he, " "), e.textContent !== r && (K(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), w("afterSanitizeElements", e, null), !1);
  }, st = function(e, r, a) {
    if (Ke && (r === "id" || r === "name") && (a in l || a in $t))
      return !1;
    if (!(ge && !Ee[r] && h(Ft, r))) {
      if (!(qe && h(Ut, r))) {
        if (!_[r] || Ee[r]) {
          if (!(ut(e) && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && h(f.attributeNameCheck, r) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(r)) || r === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, a) || f.tagNameCheck instanceof Function && f.tagNameCheck(a))))
            return !1;
        } else if (!Oe[r]) {
          if (!h(Ae, b(a, je, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && Sr(a, "data:") === 0 && Qe[e])) {
              if (!(Xe && !h(Ht, b(a, je, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ut = function(e) {
    return e.indexOf("-") > 0;
  }, ct = function(e) {
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
        if (a = d === "value" ? r.value : Or(r.value), u = m(d), v.attrName = u, v.attrValue = a, v.keepAttr = !0, v.forceKeepAttr = void 0, w("uponSanitizeAttribute", e, v), a = v.attrValue, !v.forceKeepAttr && (Me(d, e), !!v.keepAttr)) {
          if (h(/\/>/i, a)) {
            Me(d, e);
            continue;
          }
          F && (a = b(a, ve, " "), a = b(a, Te, " "), a = b(a, he, " "));
          var ft = m(e.nodeName);
          if (!!st(ft, u, a)) {
            if (Ze && (u === "id" || u === "name") && (Me(d, e), a = zt + a), y && x(J) === "object" && typeof J.getAttributeType == "function" && !Ce)
              switch (J.getAttributeType(ft, u)) {
                case "TrustedHTML":
                  a = y.createHTML(a);
                  break;
                case "TrustedScriptURL":
                  a = y.createScriptURL(a);
                  break;
              }
            try {
              Ce ? e.setAttributeNS(Ce, d, a) : e.setAttribute(d, a), dt(n.removed);
            } catch {
            }
          }
        }
      }
      w("afterSanitizeAttributes", e, null);
    }
  }, qt = function i(e) {
    var r, a = it(e);
    for (w("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      w("uponSanitizeShadowNode", r, null), !lt(r) && (r.content instanceof c && i(r.content), ct(r));
    w("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(i) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, u, E, T;
    if (Re = !i, Re && (i = "<!-->"), typeof i != "string" && !X(i)) {
      if (typeof i.toString != "function")
        throw xe("toString is not a function");
      if (i = i.toString(), typeof i != "string")
        throw xe("dirty is not a string, aborting");
    }
    if (!n.isSupported) {
      if (x(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof i == "string")
          return t.toStaticHTML(i);
        if (X(i))
          return t.toStaticHTML(i.outerHTML);
      }
      return i;
    }
    if (ye || Le(e), n.removed = [], typeof i == "string" && (q = !1), q) {
      if (i.nodeName) {
        var v = m(i.nodeName);
        if (!p[v] || V[v])
          throw xe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (i instanceof N)
      r = ot("<!---->"), a = r.ownerDocument.importNode(i, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!U && !F && !I && i.indexOf("<") === -1)
        return y && re ? y.createHTML(i) : i;
      if (r = ot(i), !r)
        return U ? null : re ? We : "";
    }
    r && be && C(r.firstChild);
    for (var ie = it(q ? i : r); u = ie.nextNode(); )
      u.nodeType === 3 && u === E || lt(u) || (u.content instanceof c && qt(u.content), ct(u), E = u);
    if (E = null, q)
      return i;
    if (U) {
      if (te)
        for (T = It.call(r.ownerDocument); r.firstChild; )
          T.appendChild(r.firstChild);
      else
        T = r;
      return _.shadowroot && (T = Pt.call(o, T, !0)), T;
    }
    var d = I ? r.outerHTML : r.innerHTML;
    return I && p["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && h(Fr, r.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + d), F && (d = b(d, ve, " "), d = b(d, Te, " "), d = b(d, he, " ")), y && re ? y.createHTML(d) : d;
  }, n.setConfig = function(i) {
    Le(i), ye = !0;
  }, n.clearConfig = function() {
    G = null, ye = !1;
  }, n.isValidAttribute = function(i, e, r) {
    G || Le({});
    var a = m(i), u = m(e);
    return st(a, u, r);
  }, n.addHook = function(i, e) {
    typeof e == "function" && (L[i] = L[i] || [], K(L[i], e));
  }, n.removeHook = function(i) {
    if (L[i])
      return dt(L[i]);
  }, n.removeHooks = function(i) {
    L[i] && (L[i] = []);
  }, n.removeAllHooks = function() {
    L = {};
  }, n;
}
var zr = St();
const Br = ["innerHTML"], Ot = /* @__PURE__ */ W({
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
    const n = t, o = gt(() => zr.sanitize(n.value, {
      ALLOWED_TAGS: n.allowedTags,
      ALLOWED_ATTR: n.allowedAttributes
    }));
    return (l, c) => ($(), Z("div", { innerHTML: fe(o) }, null, 8, Br));
  }
}), Rt = /* @__PURE__ */ W({
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
    return (l, c) => t.message ? ($(), Z("div", {
      key: 0,
      class: Jt(fe(o)),
      role: "alert"
    }, [
      Ue(Ot, { value: t.message }, null, 8, ["value"])
    ], 2)) : Qt("", !0);
  }
}), Gr = /* @__PURE__ */ W({
  __name: "AlertTextDanger",
  setup(t) {
    return (n, o) => ($(), er(Rt, tr({ class: "is-danger" }, { ...n.$props, ...n.$attrs }), null, 16));
  }
}), Wr = {};
function $r(t, n) {
  return rr(t.$slots, "default");
}
const jr = /* @__PURE__ */ yt(Wr, [["render", $r]]), At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: nr,
  ComponentB: ur,
  ComponentC: fr,
  YAlertText: Rt,
  YAlertTextDanger: Gr,
  PurifiedHtml: Ot,
  CleanDiv: jr
}, Symbol.toStringTag, { value: "Module" }));
function Yr(t) {
  Object.keys(At).forEach(function(o) {
    t.component(o, At[o]);
  });
}
const Kr = { install: Yr };
export {
  jr as CleanDiv,
  nr as ComponentA,
  ur as ComponentB,
  fr as ComponentC,
  Ot as PurifiedHtml,
  Rt as YAlertText,
  Gr as YAlertTextDanger,
  Kr as default
};
