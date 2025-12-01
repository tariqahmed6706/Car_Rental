// JavaScript Document

function openMenu() {
  const menu = document.getElementById("header-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  const close_feedback_with_menu = document.getElementById("Feedback-Popup");
  if (close_feedback_with_menu.style.display === "grid") {
    close_feedback_with_menu.style.display = "none";
  }
}

// for header button(a)

document.querySelectorAll(".my-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    link.classList.add("clicked");

    // بعد نص ثانية نشيل التأثير
    setTimeout(() => {
      link.classList.remove("clicked");

      // بعد 200 ملي ثانية كمان نعمل التحويل
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 25);
    }, 200); // التأثير يفضل نص ثانية
  });
});

function openfeedback() {
  document.getElementById("Feedback-Popup").style.display = "grid";
}
function closefeedback() {
  document.getElementById("Feedback-Popup").style.display = "none";
}

function switchtolightmode() {
  
}
function switchtodarkmode() {
  
}

// المودال و زرار القفل
const bookingModal = document.getElementById("booking-modal");
// نجيب كل الأزرار اللي بتفتح المودال
const bookingButtons = document.querySelectorAll(".booking-btn");

// لما ندوس على أي زرار
bookingButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // تأثير صغير على الزرار
    btn.classList.add("clicked");

    setTimeout(() => {
      btn.classList.remove("clicked");
      // نظهر المودال
      bookingModal.style.display = "flex";
    }, 150);
  });
});

function openBookingModal() {
  document.getElementById("booking-modal").style.display = "grid";
}
function closeBookingModal() {
  document.getElementById("booking-modal").style.display = "none";
}

const buttons = document.querySelectorAll("#booking-btn");
const modal = document.getElementById("booking-modal");
const closeBtn = document.querySelector(".close");

// دالة لإضافة التأثير
function addEffectAndAction(element, action) {
  element.classList.add("clicked");

  setTimeout(() => {
    element.classList.remove("clicked");

    setTimeout(() => {
      action();
    }, 200);
  }, 500);
}

// كل الأزرار تفتح المودال
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    addEffectAndAction(btn, () => {
      modal.style.display = "block";
    });
  });
});

// زرار الإغلاق (x)
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEffectAndAction(closeBtn, () => {
    modal.style.display = "none";
  });
});

// لو ضغط برة المودال يتقفل علطول
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
