// 沐恩Moon 官網 — 小互動：表單送出提示
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  // 如果仲未換 Formspree ID，唔好真係 submit，彈個提示就算
  form.addEventListener("submit", (e) => {
    if (form.action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      alert("記得去 formspree.io 拎咗 form ID，換咗 action 先至會真係寄到 email！");
    }
  });
});
