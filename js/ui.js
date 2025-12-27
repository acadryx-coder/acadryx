/* =======================================
   KIS Digital System — UI Helpers
   Purpose: reusable UI functions for modals, toasts, and loading indicators
   ======================================= */

/* ------------------------
   Toast Notification
------------------------ */
function showToast(message, type = "info", duration = 3000) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ------------------------
   Modal Helpers
------------------------ */
function showModal(title, content, onConfirm = null, onCancel = null) {
  let modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <h3 class="modal-title">${title}</h3>
      <div class="modal-body">${content}</div>
      <div class="modal-actions">
        <button class="modal-btn confirm-btn">Confirm</button>
        <button class="modal-btn cancel-btn">Cancel</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".confirm-btn").addEventListener("click", () => {
    if (onConfirm) onConfirm();
    modal.remove();
  });

  modal.querySelector(".cancel-btn").addEventListener("click", () => {
    if (onCancel) onCancel();
    modal.remove();
  });
}

/* ------------------------
   Loading Indicator
------------------------ */
function showLoading(message = "Loading...") {
  if (document.getElementById("loading-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "loading-overlay";
  overlay.innerHTML = `
    <div class="loading-spinner"></div>
    <p class="loading-text">${message}</p>
  `;
  document.body.appendChild(overlay);
}

function hideLoading() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.remove();
}

/* ------------------------
   Utility: Simple fade-in for elements
------------------------ */
function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.display = "block";
  let last = +new Date();
  const tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

/* ------------------------
   Utility: Simple fade-out for elements
------------------------ */
function fadeOut(element, duration = 300) {
  element.style.opacity = 1;
  let last = +new Date();
  const tick = function() {
    element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    } else {
      element.style.display = "none";
    }
  };
  tick();
    }
