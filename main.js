// JavaScript Document

function openMenu() {
  const menu = document.getElementById("header-menu");
  if(menu.style.display = menu.style.display === "flex" ) {
    menu.style.display = menu.style.display = "none";
  } else {
    menu.style.display = menu.style.display = "flex";
  }
}

document.querySelectorAll(".my-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    link.classList.add("clicked");
    setTimeout(() => {
      link.classList.remove("clicked");
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 25);
    }, 200);
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
const bookingModal = document.getElementById("booking-modal");
const bookingButtons = document.querySelectorAll(".booking-btn");

bookingButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
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

function addEffectAndAction(element, action) {
  element.classList.add("clicked");

  setTimeout(() => {
    element.classList.remove("clicked");

    setTimeout(() => {
      action();
    }, 200);
  }, 500);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    addEffectAndAction(btn, () => {
      modal.style.display = "block";
    });
  });
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEffectAndAction(closeBtn, () => {
    modal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
