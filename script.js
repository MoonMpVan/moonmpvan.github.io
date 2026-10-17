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

  // 微信 QR 彈出
  const qrTrigger = document.getElementById("wechat-qr");
  const qrModal = document.getElementById("qr-modal");
  if (qrTrigger && qrModal) {
    const close = () => {
      qrModal.classList.remove("open");
      qrModal.setAttribute("aria-hidden", "true");
    };
    const open = () => {
      qrModal.classList.add("open");
      qrModal.setAttribute("aria-hidden", "false");
    };
    qrTrigger.addEventListener("click", open);
    qrTrigger.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
    qrModal.querySelector(".modal-backdrop").addEventListener("click", close);
    qrModal.querySelector("img").addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // 證照 carousel：大圖＋左右掣＋縮圖
  document.querySelectorAll(".carousel").forEach((root) => {
    const main = root.querySelector(".carousel-main-img");
    const caption = root.querySelector(".carousel-caption");
    const thumbs = [...root.querySelectorAll(".carousel-thumbs img")];
    if (!main || !thumbs.length) return;
    let idx = 0;
    const show = (i) => {
      idx = (i + thumbs.length) % thumbs.length;
      main.src = thumbs[idx].dataset.full || thumbs[idx].src;
      main.alt = thumbs[idx].alt;
      if (caption) caption.textContent = thumbs[idx].dataset.label || "";
      thumbs.forEach((t, j) => t.classList.toggle("active", j === idx));
    };
    root.querySelector(".carousel-prev").addEventListener("click", () => show(idx - 1));
    root.querySelector(".carousel-next").addEventListener("click", () => show(idx + 1));
    thumbs.forEach((t, j) => t.addEventListener("click", () => show(j)));
  });
});
