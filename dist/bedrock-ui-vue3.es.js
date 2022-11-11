import { defineComponent as ue, openBlock as ce, createElementBlock as fe, toDisplayString as Be, ref as jt, createVNode as pt, unref as Fe, createElementVNode as Ge, pushScopeId as Vt, popScopeId as Yt, computed as Xt } from "vue";
import mt from "primevue/button";
const qt = /* @__PURE__ */ ue({
  __name: "ComponentA",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(r) {
    return (n, o) => (ce(), fe("div", null, "hello " + Be(r.msg), 1));
  }
}), Kt = (r) => (Vt("data-v-0a6c624a"), r = r(), Yt(), r), Zt = { class: "flex align-content-center flex-wrap counter" }, Jt = /* @__PURE__ */ Kt(() => /* @__PURE__ */ Ge("div", { class: "flex align-items-center justify-content-center" }, "Counter:", -1)), Qt = { class: "flex align-items-center justify-content-center count" }, er = /* @__PURE__ */ ue({
  __name: "ComponentB",
  setup(r) {
    const n = jt(0);
    return (o, l) => (ce(), fe("div", Zt, [
      Jt,
      pt(Fe(mt), {
        icon: "pi pi-plus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: l[0] || (l[0] = (c) => n.value++)
      }),
      Ge("span", Qt, Be(n.value), 1),
      pt(Fe(mt), {
        icon: "pi pi-minus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: l[1] || (l[1] = (c) => n.value--)
      })
    ]));
  }
});
const tr = (r, n) => {
  const o = r.__vccOpts || r;
  for (const [l, c] of n)
    o[l] = c;
  return o;
}, rr = /* @__PURE__ */ tr(er, [["__scopeId", "data-v-0a6c624a"]]), nr = { class: "y-test" }, ar = /* @__PURE__ */ ue({
  __name: "ComponentC",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(r) {
    return (n, o) => (ce(), fe("div", nr, "ccccccc " + Be(r.msg), 1));
  }
});
/*! @license DOMPurify 2.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.1/LICENSE */
function I(r) {
  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, I(r);
}
function Ue(r, n) {
  return Ue = Object.setPrototypeOf || function(l, c) {
    return l.__proto__ = c, l;
  }, Ue(r, n);
}
function or() {
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
function ie(r, n, o) {
  return or() ? ie = Reflect.construct : ie = function(c, R, D) {
    var L = [null];
    L.push.apply(L, R);
    var W = Function.bind.apply(c, L), $ = new W();
    return D && Ue($, D.prototype), $;
  }, ie.apply(null, arguments);
}
function S(r) {
  return ir(r) || lr(r) || sr(r) || ur();
}
function ir(r) {
  if (Array.isArray(r))
    return He(r);
}
function lr(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function sr(r, n) {
  if (!!r) {
    if (typeof r == "string")
      return He(r, n);
    var o = Object.prototype.toString.call(r).slice(8, -1);
    if (o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set")
      return Array.from(r);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return He(r, n);
  }
}
function He(r, n) {
  (n == null || n > r.length) && (n = r.length);
  for (var o = 0, l = new Array(n); o < n; o++)
    l[o] = r[o];
  return l;
}
function ur() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cr = Object.hasOwnProperty, dt = Object.setPrototypeOf, fr = Object.isFrozen, pr = Object.getPrototypeOf, mr = Object.getOwnPropertyDescriptor, A = Object.freeze, O = Object.seal, dr = Object.create, gt = typeof Reflect < "u" && Reflect, se = gt.apply, ze = gt.construct;
se || (se = function(n, o, l) {
  return n.apply(o, l);
});
A || (A = function(n) {
  return n;
});
O || (O = function(n) {
  return n;
});
ze || (ze = function(n, o) {
  return ie(n, S(o));
});
var _r = g(Array.prototype.forEach), _t = g(Array.prototype.pop), X = g(Array.prototype.push), le = g(String.prototype.toLowerCase), Ce = g(String.prototype.toString), vr = g(String.prototype.match), b = g(String.prototype.replace), Tr = g(String.prototype.indexOf), hr = g(String.prototype.trim), h = g(RegExp.prototype.test), we = Ar(TypeError);
function g(r) {
  return function(n) {
    for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      l[c - 1] = arguments[c];
    return se(r, n, l);
  };
}
function Ar(r) {
  return function() {
    for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
      o[l] = arguments[l];
    return ze(r, o);
  };
}
function s(r, n, o) {
  o = o || le, dt && dt(r, null);
  for (var l = n.length; l--; ) {
    var c = n[l];
    if (typeof c == "string") {
      var R = o(c);
      R !== c && (fr(n) || (n[l] = R), c = R);
    }
    r[c] = !0;
  }
  return r;
}
function P(r) {
  var n = dr(null), o;
  for (o in r)
    se(cr, r, [o]) && (n[o] = r[o]);
  return n;
}
function ae(r, n) {
  for (; r !== null; ) {
    var o = mr(r, n);
    if (o) {
      if (o.get)
        return g(o.get);
      if (typeof o.value == "function")
        return g(o.value);
    }
    r = pr(r);
  }
  function l(c) {
    return console.warn("fallback value for", c), null;
  }
  return l;
}
var vt = A(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ie = A(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xe = A(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Er = A(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ke = A(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), gr = A(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Tt = A(["#text"]), ht = A(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Pe = A(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), At = A(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), oe = A(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), yr = O(/\{\{[\w\W]*|[\w\W]*\}\}/gm), br = O(/<%[\w\W]*|[\w\W]*%>/gm), Sr = O(/\${[\w\W]*}/gm), Or = O(/^data-[\-\w.\u00B7-\uFFFF]/), Rr = O(/^aria-[\-\w]+$/), Lr = O(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), Nr = O(/^(?:\w+script|data):/i), Dr = O(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), Mr = O(/^html$/i), Cr = function() {
  return typeof window > "u" ? null : window;
}, wr = function(n, o) {
  if (I(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var l = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (l = o.currentScript.getAttribute(c));
  var R = "dompurify" + (l ? "#" + l : "");
  try {
    return n.createPolicy(R, {
      createHTML: function(L) {
        return L;
      },
      createScriptURL: function(L) {
        return L;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function yt() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cr(), n = function(e) {
    return yt(e);
  };
  if (n.version = "2.4.1", n.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = r.document, l = r.document, c = r.DocumentFragment, R = r.HTMLTemplateElement, D = r.Node, L = r.Element, W = r.NodeFilter, $ = r.NamedNodeMap, bt = $ === void 0 ? r.NamedNodeMap || r.MozNamedAttrMap : $, St = r.HTMLFormElement, Ot = r.DOMParser, q = r.trustedTypes, K = L.prototype, Rt = ae(K, "cloneNode"), Lt = ae(K, "nextSibling"), Nt = ae(K, "childNodes"), pe = ae(K, "parentNode");
  if (typeof R == "function") {
    var me = l.createElement("template");
    me.content && me.content.ownerDocument && (l = me.content.ownerDocument);
  }
  var y = wr(q, o), We = y ? y.createHTML("") : "", Z = l, de = Z.implementation, Dt = Z.createNodeIterator, Mt = Z.createDocumentFragment, Ct = Z.getElementsByTagName, wt = o.importNode, $e = {};
  try {
    $e = P(l).documentMode ? l.documentMode : {};
  } catch {
  }
  var N = {};
  n.isSupported = typeof pe == "function" && de && typeof de.createHTMLDocument < "u" && $e !== 9;
  var _e = yr, ve = br, Te = Sr, It = Or, xt = Rr, kt = Nr, je = Dr, he = Lr, p = null, Ve = s({}, [].concat(S(vt), S(Ie), S(xe), S(ke), S(Tt))), _ = null, Ye = s({}, [].concat(S(ht), S(Pe), S(At), S(oe))), f = Object.seal(Object.create(null, {
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
  })), j = null, Ae = null, Xe = !0, Ee = !0, qe = !1, F = !1, x = !1, ge = !1, ye = !1, U = !1, J = !1, Q = !1, Ke = !0, Ze = !1, Pt = "user-content-", be = !0, V = !1, H = {}, z = null, Je = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Qe = null, et = s({}, ["audio", "video", "img", "source", "image", "track"]), Se = null, tt = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ee = "http://www.w3.org/1998/Math/MathML", te = "http://www.w3.org/2000/svg", M = "http://www.w3.org/1999/xhtml", B = M, Oe = !1, Re = null, Ft = s({}, [ee, te, M], Ce), k, Ut = ["application/xhtml+xml", "text/html"], Ht = "text/html", m, G = null, zt = l.createElement("form"), rt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Le = function(e) {
    G && G === e || ((!e || I(e) !== "object") && (e = {}), e = P(e), k = Ut.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? k = Ht : k = e.PARSER_MEDIA_TYPE, m = k === "application/xhtml+xml" ? Ce : le, p = "ALLOWED_TAGS" in e ? s({}, e.ALLOWED_TAGS, m) : Ve, _ = "ALLOWED_ATTR" in e ? s({}, e.ALLOWED_ATTR, m) : Ye, Re = "ALLOWED_NAMESPACES" in e ? s({}, e.ALLOWED_NAMESPACES, Ce) : Ft, Se = "ADD_URI_SAFE_ATTR" in e ? s(
      P(tt),
      e.ADD_URI_SAFE_ATTR,
      m
    ) : tt, Qe = "ADD_DATA_URI_TAGS" in e ? s(
      P(et),
      e.ADD_DATA_URI_TAGS,
      m
    ) : et, z = "FORBID_CONTENTS" in e ? s({}, e.FORBID_CONTENTS, m) : Je, j = "FORBID_TAGS" in e ? s({}, e.FORBID_TAGS, m) : {}, Ae = "FORBID_ATTR" in e ? s({}, e.FORBID_ATTR, m) : {}, H = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Xe = e.ALLOW_ARIA_ATTR !== !1, Ee = e.ALLOW_DATA_ATTR !== !1, qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, F = e.SAFE_FOR_TEMPLATES || !1, x = e.WHOLE_DOCUMENT || !1, U = e.RETURN_DOM || !1, J = e.RETURN_DOM_FRAGMENT || !1, Q = e.RETURN_TRUSTED_TYPE || !1, ye = e.FORCE_BODY || !1, Ke = e.SANITIZE_DOM !== !1, Ze = e.SANITIZE_NAMED_PROPS || !1, be = e.KEEP_CONTENT !== !1, V = e.IN_PLACE || !1, he = e.ALLOWED_URI_REGEXP || he, B = e.NAMESPACE || M, e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), F && (Ee = !1), J && (U = !0), H && (p = s({}, S(Tt)), _ = [], H.html === !0 && (s(p, vt), s(_, ht)), H.svg === !0 && (s(p, Ie), s(_, Pe), s(_, oe)), H.svgFilters === !0 && (s(p, xe), s(_, Pe), s(_, oe)), H.mathMl === !0 && (s(p, ke), s(_, At), s(_, oe))), e.ADD_TAGS && (p === Ve && (p = P(p)), s(p, e.ADD_TAGS, m)), e.ADD_ATTR && (_ === Ye && (_ = P(_)), s(_, e.ADD_ATTR, m)), e.ADD_URI_SAFE_ATTR && s(Se, e.ADD_URI_SAFE_ATTR, m), e.FORBID_CONTENTS && (z === Je && (z = P(z)), s(z, e.FORBID_CONTENTS, m)), be && (p["#text"] = !0), x && s(p, ["html", "head", "body"]), p.table && (s(p, ["tbody"]), delete j.tbody), A && A(e), G = e);
  }, nt = s({}, ["mi", "mo", "mn", "ms", "mtext"]), at = s({}, ["foreignobject", "desc", "title", "annotation-xml"]), Bt = s({}, ["title", "style", "font", "a", "script"]), re = s({}, Ie);
  s(re, xe), s(re, Er);
  var Ne = s({}, ke);
  s(Ne, gr);
  var Gt = function(e) {
    var t = pe(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: B,
      tagName: "template"
    });
    var a = le(e.tagName), u = le(t.tagName);
    return Re[e.namespaceURI] ? e.namespaceURI === te ? t.namespaceURI === M ? a === "svg" : t.namespaceURI === ee ? a === "svg" && (u === "annotation-xml" || nt[u]) : Boolean(re[a]) : e.namespaceURI === ee ? t.namespaceURI === M ? a === "math" : t.namespaceURI === te ? a === "math" && at[u] : Boolean(Ne[a]) : e.namespaceURI === M ? t.namespaceURI === te && !at[u] || t.namespaceURI === ee && !nt[u] ? !1 : !Ne[a] && (Bt[a] || !re[a]) : !!(k === "application/xhtml+xml" && Re[e.namespaceURI]) : !1;
  }, C = function(e) {
    X(n.removed, {
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
  }, De = function(e, t) {
    try {
      X(n.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      X(n.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is" && !_[e])
      if (U || J)
        try {
          C(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, ot = function(e) {
    var t, a;
    if (ye)
      e = "<remove></remove>" + e;
    else {
      var u = vr(e, /^[\r\n\t ]+/);
      a = u && u[0];
    }
    k === "application/xhtml+xml" && B === M && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var E = y ? y.createHTML(e) : e;
    if (B === M)
      try {
        t = new Ot().parseFromString(E, k);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = de.createDocument(B, "template", null);
      try {
        t.documentElement.innerHTML = Oe ? "" : E;
      } catch {
      }
    }
    var T = t.body || t.documentElement;
    return e && a && T.insertBefore(l.createTextNode(a), T.childNodes[0] || null), B === M ? Ct.call(t, x ? "html" : "body")[0] : x ? t.documentElement : T;
  }, it = function(e) {
    return Dt.call(
      e.ownerDocument || e,
      e,
      W.SHOW_ELEMENT | W.SHOW_COMMENT | W.SHOW_TEXT,
      null,
      !1
    );
  }, Wt = function(e) {
    return e instanceof St && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof bt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Y = function(e) {
    return I(D) === "object" ? e instanceof D : e && I(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, w = function(e, t, a) {
    !N[e] || _r(N[e], function(u) {
      u.call(n, t, a, G);
    });
  }, lt = function(e) {
    var t;
    if (w("beforeSanitizeElements", e, null), Wt(e) || h(/[\u0080-\uFFFF]/, e.nodeName))
      return C(e), !0;
    var a = m(e.nodeName);
    if (w("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: p
    }), e.hasChildNodes() && !Y(e.firstElementChild) && (!Y(e.content) || !Y(e.content.firstElementChild)) && h(/<[/\w]/g, e.innerHTML) && h(/<[/\w]/g, e.textContent) || a === "select" && h(/<template/i, e.innerHTML))
      return C(e), !0;
    if (!p[a] || j[a]) {
      if (!j[a] && ut(a) && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, a) || f.tagNameCheck instanceof Function && f.tagNameCheck(a)))
        return !1;
      if (be && !z[a]) {
        var u = pe(e) || e.parentNode, E = Nt(e) || e.childNodes;
        if (E && u)
          for (var T = E.length, v = T - 1; v >= 0; --v)
            u.insertBefore(Rt(E[v], !0), Lt(e));
      }
      return C(e), !0;
    }
    return e instanceof L && !Gt(e) || (a === "noscript" || a === "noembed") && h(/<\/no(script|embed)/i, e.innerHTML) ? (C(e), !0) : (F && e.nodeType === 3 && (t = e.textContent, t = b(t, _e, " "), t = b(t, ve, " "), t = b(t, Te, " "), e.textContent !== t && (X(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), w("afterSanitizeElements", e, null), !1);
  }, st = function(e, t, a) {
    if (Ke && (t === "id" || t === "name") && (a in l || a in zt))
      return !1;
    if (!(Ee && !Ae[t] && h(It, t))) {
      if (!(Xe && h(xt, t))) {
        if (!_[t] || Ae[t]) {
          if (!(ut(e) && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && h(f.attributeNameCheck, t) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(t)) || t === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && h(f.tagNameCheck, a) || f.tagNameCheck instanceof Function && f.tagNameCheck(a))))
            return !1;
        } else if (!Se[t]) {
          if (!h(he, b(a, je, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Tr(a, "data:") === 0 && Qe[e])) {
              if (!(qe && !h(kt, b(a, je, "")))) {
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
    var t, a, u, E;
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
        t = T[E];
        var ne = t, d = ne.name, Me = ne.namespaceURI;
        if (a = d === "value" ? t.value : hr(t.value), u = m(d), v.attrName = u, v.attrValue = a, v.keepAttr = !0, v.forceKeepAttr = void 0, w("uponSanitizeAttribute", e, v), a = v.attrValue, !v.forceKeepAttr && (De(d, e), !!v.keepAttr)) {
          if (h(/\/>/i, a)) {
            De(d, e);
            continue;
          }
          F && (a = b(a, _e, " "), a = b(a, ve, " "), a = b(a, Te, " "));
          var ft = m(e.nodeName);
          if (!!st(ft, u, a)) {
            if (Ze && (u === "id" || u === "name") && (De(d, e), a = Pt + a), y && I(q) === "object" && typeof q.getAttributeType == "function" && !Me)
              switch (q.getAttributeType(ft, u)) {
                case "TrustedHTML":
                  a = y.createHTML(a);
                  break;
                case "TrustedScriptURL":
                  a = y.createScriptURL(a);
                  break;
              }
            try {
              Me ? e.setAttributeNS(Me, d, a) : e.setAttribute(d, a), _t(n.removed);
            } catch {
            }
          }
        }
      }
      w("afterSanitizeAttributes", e, null);
    }
  }, $t = function i(e) {
    var t, a = it(e);
    for (w("beforeSanitizeShadowDOM", e, null); t = a.nextNode(); )
      w("uponSanitizeShadowNode", t, null), !lt(t) && (t.content instanceof c && i(t.content), ct(t));
    w("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(i) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t, a, u, E, T;
    if (Oe = !i, Oe && (i = "<!-->"), typeof i != "string" && !Y(i)) {
      if (typeof i.toString != "function")
        throw we("toString is not a function");
      if (i = i.toString(), typeof i != "string")
        throw we("dirty is not a string, aborting");
    }
    if (!n.isSupported) {
      if (I(r.toStaticHTML) === "object" || typeof r.toStaticHTML == "function") {
        if (typeof i == "string")
          return r.toStaticHTML(i);
        if (Y(i))
          return r.toStaticHTML(i.outerHTML);
      }
      return i;
    }
    if (ge || Le(e), n.removed = [], typeof i == "string" && (V = !1), V) {
      if (i.nodeName) {
        var v = m(i.nodeName);
        if (!p[v] || j[v])
          throw we("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (i instanceof D)
      t = ot("<!---->"), a = t.ownerDocument.importNode(i, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? t = a : t.appendChild(a);
    else {
      if (!U && !F && !x && i.indexOf("<") === -1)
        return y && Q ? y.createHTML(i) : i;
      if (t = ot(i), !t)
        return U ? null : Q ? We : "";
    }
    t && ye && C(t.firstChild);
    for (var ne = it(V ? i : t); u = ne.nextNode(); )
      u.nodeType === 3 && u === E || lt(u) || (u.content instanceof c && $t(u.content), ct(u), E = u);
    if (E = null, V)
      return i;
    if (U) {
      if (J)
        for (T = Mt.call(t.ownerDocument); t.firstChild; )
          T.appendChild(t.firstChild);
      else
        T = t;
      return _.shadowroot && (T = wt.call(o, T, !0)), T;
    }
    var d = x ? t.outerHTML : t.innerHTML;
    return x && p["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && h(Mr, t.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + d), F && (d = b(d, _e, " "), d = b(d, ve, " "), d = b(d, Te, " ")), y && Q ? y.createHTML(d) : d;
  }, n.setConfig = function(i) {
    Le(i), ge = !0;
  }, n.clearConfig = function() {
    G = null, ge = !1;
  }, n.isValidAttribute = function(i, e, t) {
    G || Le({});
    var a = m(i), u = m(e);
    return st(a, u, t);
  }, n.addHook = function(i, e) {
    typeof e == "function" && (N[i] = N[i] || [], X(N[i], e));
  }, n.removeHook = function(i) {
    if (N[i])
      return _t(N[i]);
  }, n.removeHooks = function(i) {
    N[i] && (N[i] = []);
  }, n.removeAllHooks = function() {
    N = {};
  }, n;
}
var Ir = yt();
const xr = ["innerHTML"], kr = /* @__PURE__ */ ue({
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
  setup(r) {
    const n = r, o = Xt(() => Ir.sanitize(n.value, {
      ALLOWED_TAGS: n.allowedTags,
      ALLOWED_ATTR: n.allowedAttributes
    }));
    return (l, c) => (ce(), fe("div", null, [
      Ge("div", { innerHTML: Fe(o) }, null, 8, xr)
    ]));
  }
}), Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: qt,
  ComponentB: rr,
  ComponentC: ar,
  PurifiedHtml: kr
}, Symbol.toStringTag, { value: "Module" }));
function Pr(r) {
  Object.keys(Et).forEach(function(o) {
    r.component(o, Et[o]);
  });
}
const zr = { install: Pr };
export {
  qt as ComponentA,
  rr as ComponentB,
  ar as ComponentC,
  kr as PurifiedHtml,
  zr as default
};
