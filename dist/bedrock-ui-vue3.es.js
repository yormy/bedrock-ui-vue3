import { defineComponent as s, openBlock as r, createElementBlock as p, toDisplayString as a, ref as f, createVNode as i, unref as l, createElementVNode as m, pushScopeId as d, popScopeId as g } from "vue";
import _ from "primevue/button";
const v = /* @__PURE__ */ s({
  __name: "ComponentA",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (e, n) => (r(), p("div", null, "hello " + a(t.msg), 1));
  }
}), C = (t) => (d("data-v-0a6c624a"), t = t(), g(), t), x = { class: "flex align-content-center flex-wrap counter" }, y = /* @__PURE__ */ C(() => /* @__PURE__ */ m("div", { class: "flex align-items-center justify-content-center" }, "Counter:", -1)), S = { class: "flex align-items-center justify-content-center count" }, h = /* @__PURE__ */ s({
  __name: "ComponentB",
  setup(t) {
    const e = f(0);
    return (n, o) => (r(), p("div", x, [
      y,
      i(l(_), {
        icon: "pi pi-plus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: o[0] || (o[0] = (c) => e.value++)
      }),
      m("span", S, a(e.value), 1),
      i(l(_), {
        icon: "pi pi-minus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: o[1] || (o[1] = (c) => e.value--)
      })
    ]));
  }
});
const j = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, c] of e)
    n[o] = c;
  return n;
}, b = /* @__PURE__ */ j(h, [["__scopeId", "data-v-0a6c624a"]]), B = { class: "y-test" }, k = /* @__PURE__ */ s({
  __name: "ComponentC",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    return (e, n) => (r(), p("div", B, "ccccccc " + a(t.msg), 1));
  }
}), u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: v,
  ComponentB: b,
  ComponentC: k
}, Symbol.toStringTag, { value: "Module" }));
function $(t) {
  Object.keys(u).forEach(function(n) {
    t.component(n, u[n]);
  });
}
const A = { install: $ };
export {
  v as ComponentA,
  b as ComponentB,
  k as ComponentC,
  A as default
};
