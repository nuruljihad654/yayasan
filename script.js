/* =============================
   SMOOTH SCROLL
============================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Tutup menu mobile setelah klik
    if (window.innerWidth < 900) {
      document.getElementById("nav-links").style.display = "none";
    }
  });
});

/* =============================
   MOBILE NAV TOGGLE
============================= */
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
  }
});

/* ============================
   BACK TO TOP BUTTON
============================ */
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  backTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ============================
   DROPDOWN MENU (Program/Kegiatan)
============================ */
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('show');
  });
});


/* ============================
   CONTACT FORM → WhatsApp + Email
============================ */
(function () {

  const form = document.getElementById('contact-form');
  if (!form) return;

  // DATA KONTAK
  const WHATSAPP_NUMBER = "6282247433423"; // format internasional
  const EMAIL_TO = "yayasannuruljihad654@gmail.com";

  function enc(x) {
    return encodeURIComponent(x || "");
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('cf-name').value.trim();
    const phone = document.getElementById('cf-phone').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !message) {
      alert("Mohon isi nama dan pesan.");
      return;
    }

    /* ======== WhatsApp Redirect ======== */
    const waText =
      `Halo, saya *${enc(name)}*%0A` +
      `Kontak: ${enc(phone)}%0A%0A` +
      `Pesan:%0A${enc(message)}`;

    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    window.open(waURL, "_blank");


    /* ======== Email Redirect ======== */
    const subject = `Pesan dari Website - ${name}`;
    const body =
      `Nama: ${name}%0A` +
      `Kontak: ${phone}%0A%0A` +
      `Pesan:%0A${message}`;

    const mailURL =
      `mailto:${EMAIL_TO}?subject=${enc(subject)}&body=${body}`;

    window.location.href = mailURL;

    /* Reset */
    form.reset();

    setTimeout(() => {
      alert("Pesan Anda diarahkan ke WhatsApp dan Email. Terima kasih!");
    }, 500);

  });

})();
