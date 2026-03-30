(function () {
  let isUserInteracting = false;
  let interactionTimer = null;


  const popupHTML = `
    <div id="globalCallPopup" class="global-call-popup">
      <div class="global-call-popup-box">
        <button class="global-popup-close" id="globalPopupClose" aria-label="Close popup">&times;</button>

        <div class="global-popup-icon">
          <i class="bi bi-telephone-fill"></i>
        </div>

        <h3>Call Support Team</h3>
        <p>
          Don’t waste time filling forms.<br>
          Call us now, clear all your doubts, and book your trip confidently.
        </p>

        <div class="global-popup-btns">
          <a href="tel:+919629808833" class="btn btn-brand w-100">
            <i class="bi bi-telephone me-2"></i>Call Now
          </a>
          <a href="https://wa.me/919629808833" target="_blank" class="btn btn-ghost w-100 mt-2">
            <i class="bi bi-whatsapp me-2"></i>WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  `;

  const popupCSS = `
    .global-call-popup{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,0.55);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
      z-index:99999;
      opacity:0;
      visibility:hidden;
      transition:all .3s ease;
    }

    .global-call-popup.show{
      opacity:1;
      visibility:visible;
    }

    .global-call-popup-box{
      position:relative;
      width:100%;
      max-width:380px;
      background:#f8f9fa;
      border-radius:24px;
      padding:30px 24px 24px;
      text-align:center;
      box-shadow:0 25px 60px rgba(0,0,0,.22);
      animation:globalPopupUp .35s ease;
    }

    @keyframes globalPopupUp{
      from{
        opacity:0;
        transform:translateY(30px) scale(.98);
      }
      to{
        opacity:1;
        transform:translateY(0) scale(1);
      }
    }

    .global-popup-close{
      position:absolute;
      top:10px;
      right:10px;
      width:34px;
      height:34px;
      border:none;
      border-radius:50%;
      background:#e9ecef;
      color:#111827;
      font-size:22px;
      line-height:1;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      transition:.2s ease;
    }

    .global-popup-close:hover{
      background:#dde2e6;
    }

    .global-popup-icon{
      width:72px;
      height:72px;
      margin:0 auto 16px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:28px;
      color:#fff;
      background:linear-gradient(135deg,#0d6efd,#20b2aa);
      box-shadow:0 12px 28px rgba(13,110,253,.28);
    }

    .global-call-popup-box h3{
      margin-bottom:10px;
      font-weight:700;
      color:#0f172a;
    }

    .global-call-popup-box p{
      margin-bottom:18px;
      color:#6b7280;
      font-size:15px;
      line-height:1.6;
    }

    .global-popup-btns .btn{
      border-radius:14px;
    }

    @media (max-width:576px){
      .global-call-popup-box{
        padding:28px 18px 20px;
        border-radius:20px;
      }

      .global-popup-icon{
        width:64px;
        height:64px;
        font-size:24px;
      }

      .global-call-popup-box p{
        font-size:14px;
      }
    }
  `;

  const style = document.createElement("style");
  style.innerHTML = popupCSS;
  document.head.appendChild(style);

  document.body.insertAdjacentHTML("beforeend", popupHTML);

  const popup = document.getElementById("globalCallPopup");
  const closeBtn = document.getElementById("globalPopupClose");

  function showPopup() {
    if (!isUserInteracting && !popup.classList.contains("show")) {
      popup.classList.add("show");
    }
  }

  function closePopup() {
    popup.classList.remove("show");
  }

  closeBtn.addEventListener("click", closePopup);

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

  function isFormField(el) {
    if (!el) return false;
    const tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  }

  document.addEventListener("focusin", function (e) {
    if (isFormField(e.target)) {
      isUserInteracting = true;
      closePopup();
      clearTimeout(interactionTimer);
    }
  });

  document.addEventListener("input", function (e) {
    if (isFormField(e.target)) {
      isUserInteracting = true;
      closePopup();
      clearTimeout(interactionTimer);

      interactionTimer = setTimeout(function () {
        isUserInteracting = false;
      }, 4000);
    }
  });

  document.addEventListener("focusout", function (e) {
    if (isFormField(e.target)) {
      clearTimeout(interactionTimer);

      interactionTimer = setTimeout(function () {
        isUserInteracting = false;
      }, 4000);
    }
  });

  setTimeout(showPopup, 5000);


})();
