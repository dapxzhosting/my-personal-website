AOS.init({
  duration: 600,        
  easing: 'ease-in-out',
  once: true,            
  offset: 50            
});
(function() {
  emailjs.init('xTIfJ0y7qTAEUy_dM'); 
})();
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.send("service_3su5dhh", "template_q3b4ivo", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => alert("Pesan berhasil dikirim!"))
  .catch(error => alert("Gagal mengirim pesan: " + error));
});
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
})
window.addEventListener('beforeunload', function () {
  localStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('load', function () {
  const scrollPos = localStorage.getItem('scrollPos');
  if (scrollPos !== null) {
    window.scrollTo(0, parseInt(scrollPos, 10));
  }
});

  const name = "Dafa alfiansyah"; // Ganti dengan nama kamu
  const typedName = document.getElementById("typed-name");

  let i = 0;
  let isDeleting = false;

  function typeEffect() {
    let speed = 70;

    if (isDeleting) {
      typedName.textContent = name.substring(0, i--);
      speed = 50;
    } else {
      typedName.textContent = name.substring(0, i++);
    }

    if (!isDeleting && i > name.length) {
      isDeleting = true;
      speed = 400; 
    } else if (isDeleting && i === 0) {
      isDeleting = false;
      speed = 300; 
    }

    setTimeout(typeEffect, speed);
  }

  window.onload = typeEffect;

  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });