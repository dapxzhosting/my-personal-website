 document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 800, 
      once: true     
    });
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
const name = "Dafa alfiansyah"; 
let i = 0;
let isDeleting = false;
let loopCount = 0;
const maxLoops = 2;
let typedName;
function typeEffect() {
  if (!typedName) return;

  let speed = 50;

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

document.addEventListener("DOMContentLoaded", () => {
  typedName = document.getElementById("typed-name");
  if (typedName) typeEffect();

  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});
  const aiButton = document.getElementById('ai-button');
  const chatBox = document.getElementById('ai-chatbox');
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatBody = document.getElementById('chat-body');

  aiButton.onclick = () => {
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  };

  function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = text;
    chatBody.appendChild(userMsg);
    userInput.value = '';

    const aiReply = getAIResponse(text);

    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-message';
    aiMsg.textContent = aiReply;
    chatBody.appendChild(aiMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  sendBtn.onclick = sendMessage;
  userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });

  function getAIResponse(text) {
    text = text.toLowerCase();
    if (text.includes('halo')) return 'Hai juga! 😄';
    if (text.includes('info gombal')) return 'kamu star ya? (coba ketik "iya")';
    if (text.includes('iya')) return 'start in my hearth 😘🤭😜';
    if (text.includes('portfolio')) return 'Ini portofolioku! Silakan jelajahi 😉';
    return 'Hmm... aku belum ngerti maksudmu 😅';
  }