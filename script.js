document.addEventListener("DOMContentLoaded", function () {

  AOS.init({
    duration: 800, 
    once: true,
    offset: 100
  });

  emailjs.init('xTIfJ0y7qTAEUy_dM');

  typeEffect();
  initSkillsAnimation();
  initStatsCounter();
  initParticles();
  initVanillaTilt();
  hidePreloader();
});

function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1000);
  }
}

function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
}

function initVanillaTilt() {
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }
}

const name = "Dafa Alfiansyah"; 
let i = 0;
let isDeleting = false;
let typedName;

function typeEffect() {
  typedName = document.getElementById("typed-name");
  if (!typedName) return;

  let speed = 100;

  if (isDeleting) {
    typedName.textContent = name.substring(0, i--);
    speed = 50;
  } else {
    typedName.textContent = name.substring(0, i++);
  }

  if (!isDeleting && i > name.length) {
    isDeleting = true;
    speed = 2000;
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

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
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function initStatsCounter() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;

    const statsSection = document.getElementById('stats');
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      hasAnimated = true;
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target + '+';
          }
        };
        updateCount();
      });
    }
  };

  window.addEventListener('scroll', animateCounters);
  animateCounters();
}

function initSkillsAnimation() {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  let hasAnimated = false;

  const animateSkills = () => {
    if (hasAnimated) return;

    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      hasAnimated = true;
      progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        setTimeout(() => {
          bar.style.width = percent + '%';
        }, 200);
      });
    }
  };

  window.addEventListener('scroll', animateSkills);
  animateSkills();
}

const projects = [
  {
    title: "Portofolio Pertama",
    image: "image/proyek.webp",
    description: "Website portfolio dengan design modern dan interaktif. Menggunakan HTML, CSS, JavaScript dan Bootstrap untuk membuat tampilan yang responsif dan menarik.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "Tools DDoS",
    image: "image/proyek2.webp",
    description: "Tools Yang di buat menggunakan Javascript, Nodejs dan Json.",
    tech: ["Javascript", "Nodejs", "Json"]
  }
];

function openModal(index) {
  const modal = document.getElementById('projectModal');
  const project = projects[index];
  
  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  
  const techHtml = project.tech.map(tech => 
    `<span class="badge bg-primary me-2">${tech}</span>`
  ).join('');
  document.getElementById('modalTech').innerHTML = techHtml;
  
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
}

document.getElementById('projectModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const btn = this.querySelector('.button');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
  btn.disabled = true;

  emailjs.send("service_3su5dhh", "template_q3b4ivo", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
    btn.style.background = '#28a745';
    
    this.reset();
    
    showNotification('Pesan berhasil dikirim! 🎉', 'success');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  })
  .catch(error => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    showNotification('Gagal mengirim pesan. Coba lagi! ❌', 'error');
  });
});

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : '#dc3545'};
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

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

  chatBody.scrollTop = chatBody.scrollHeight;

  const typingMsg = document.createElement('div');
  typingMsg.className = 'ai-message typing';
  typingMsg.textContent = 'AI sedang mengetik';
  chatBody.appendChild(typingMsg);
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    chatBody.removeChild(typingMsg);
    const aiReply = getAIResponse(text);
    
    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-message';
    chatBody.appendChild(aiMsg);
    
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < aiReply.length) {
        aiMsg.textContent += aiReply.charAt(charIndex);
        charIndex++;
        chatBody.scrollTop = chatBody.scrollHeight;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
  }, 1000);
}

sendBtn.onclick = sendMessage;
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

function getAIResponse(text) {
  text = text.toLowerCase();
  
  if (text.includes('halo') || text.includes('hai') || text.includes('hi')) {
    return 'Hai juga! Senang bertemu denganmu! 😄 Ada yang bisa aku bantu?';
  }
  if (text.includes('info gombal')) {
    return 'Oke siap! Kamu star ya? (coba ketik "iya") ⭐';
  }
  if (text.includes('iya')) {
    return 'Pantesan... Soalnya kamu star in my heart! 😘🤭💖';
  }
  if (text.includes('portfolio') || text.includes('portofolio')) {
    return 'Ini portofolio Dafa! Silakan jelajahi projectnya yang keren-keren 😉';
  }
  if (text.includes('skill') || text.includes('keahlian')) {
    return 'Dafa menguasai HTML, CSS, JavaScript, Python, dan masih banyak lagi! Scroll ke bawah untuk lihat detailnya 💻';
  }
  if (text.includes('kontak') || text.includes('contact')) {
    return 'Kamu bisa hubungi Dafa lewat form kontak di bawah, atau DM langsung ke Instagram @dafa_alf1 📱';
  }
  if (text.includes('hobi')) {
    return 'Dafa suka main game, ngoding, dengerin musik, dan main sepak bola! ⚽🎮';
  }
  if (text.includes('umur') || text.includes('usia')) {
    return 'Dafa masih 15 tahun tapi udah jago ngoding loh! 🚀';
  }
  if (text.includes('terima kasih') || text.includes('thanks')) {
    return 'Sama-sama! Senang bisa membantu 😊';
  }
  if (text.includes('bye') || text.includes('dadah')) {
    return 'Dadah! Jangan lupa mampir lagi ya 👋';
  }
  
  return 'Hmm... aku belum ngerti maksudmu 😅 Coba tanya yang lain atau ketik "info gombal" untuk fun fact!';
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);