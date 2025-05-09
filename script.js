AOS.init({
  delay: 100, 
  duration: 800,
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

  
