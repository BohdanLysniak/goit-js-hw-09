import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),s=t.elements.email,l=t.elements.message,a="feedback-form-state",e=JSON.parse(localStorage.getItem(a));s.value=e&&e.email?e.email:"";l.value=e&&e.message?e.message:"";t.addEventListener("input",m);function m(){const o={email:s.value.trim(),message:l.value.trim()};localStorage.setItem(a,JSON.stringify(o))}t.addEventListener("submit",o=>{o.preventDefault(),s.value.trim()!==""&&l.value.trim()!==""?(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),t.reset()):alert("Заповніть всі поля!")});
//# sourceMappingURL=commonHelpers2.js.map