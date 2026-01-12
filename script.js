document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800, 
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  emailjs.init('xTIfJ0y7qTAEUy_dM');

  typeEffect();
  initSkillsAnimation();
  initStatsCounter();
  initParticles();
  initVanillaTilt();
  initPreloader();
  initSmoothScroll();
  initScrollProgress();
  initCustomCursor();
  initFAB();
  initKeyboardNav();
  initSectionReveal();
  initMouseParticles();
  initParallax();
  initEasterEggs();
  initSkillBoxInteractions();
});

function createWelcomeAnimation() {
  showNotification('Selamat datang di Portofolio Dafa! 🎉', 'success');
  createConfetti();
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
let typingSpeed = 200;

function typeEffect() {
  const typedName = document.getElementById("typed-name");
  if (!typedName) return;

  if (!isDeleting) {
    typedName.textContent = name.substring(0, i + 1);
    i++;

    if (i === name.length) {
      setTimeout(() => isDeleting = true, 1000);
    }
  } else {
    typedName.textContent = name.substring(0, i - 1);
    i--;

    if (i === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 100);
}

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn?.querySelector("i");

if (toggleBtn && icon) {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  toggleBtn.addEventListener("click", () => {
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
      showNotification('Mode gelap diaktifkan 🌙', 'success');
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
      showNotification('Mode terang diaktifkan ☀️', 'success');
    }
  });
}

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
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

function initStatsCounter() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;

    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    
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
    if (!skillsSection) return;
    
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
    description: "Website portofolio dengan desain modern dan interaktif. Menggunakan HTML, CSS, JavaScript dan Bootstrap untuk membuat tampilan yang responsif dan menarik.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "Tools DDoS",
    image: "image/proyek2.webp",
    description: "Tools yang dibuat menggunakan Javascript, Nodejs dan Json.",
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
    `<span class="badge bg-primary me-2 mb-2">${tech}</span>`
  ).join('');
  document.getElementById('modalTech').innerHTML = techHtml;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('projectModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

function startGuessGame() {
  const gameContent = document.getElementById('gameContent');
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  
  gameContent.innerHTML = `
    <div class="game-container">
      <h3>🎲 Tebak Angka</h3>
      <p>Aku memikirkan angka antara 1-100. Bisakah kamu menebaknya?</p>
      <div class="game-stats">
        <p>Percobaan: <span id="attempts">0</span></p>
        <p id="hint">Silakan mulai menebak!</p>
      </div>
      <div class="game-input-group">
        <input type="number" id="guessInput" min="1" max="100" placeholder="Masukkan tebakan..." class="form-control">
        <button onclick="checkGuess(${secretNumber})" class="btn btn-primary mt-3">Tebak!</button>
      </div>
      <div id="guessResult" class="mt-3"></div>
    </div>
  `;
  
  document.getElementById('gameModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function checkGuess(secretNumber) {
  const guess = parseInt(document.getElementById('guessInput').value);
  const attemptsSpan = document.getElementById('attempts');
  const hint = document.getElementById('hint');
  const result = document.getElementById('guessResult');
  
  let attempts = parseInt(attemptsSpan.textContent) + 1;
  attemptsSpan.textContent = attempts;
  
  if (!guess || guess < 1 || guess > 100) {
    hint.textContent = 'Masukkan angka yang valid antara 1-100!';
    hint.style.color = '#f5576c';
    return;
  }
  
  if (guess === secretNumber) {
    result.innerHTML = `
      <div class="alert alert-success">
        🎉 Selamat! Kamu berhasil menebak angka ${secretNumber} dalam ${attempts} percobaan!
        <br><button onclick="startGuessGame()" class="btn btn-sm btn-success mt-2">Main Lagi</button>
      </div>
    `;
    createConfetti();

    const currentBest = localStorage.getItem('guessGameBest') || 999;
    if (attempts < currentBest) {
      localStorage.setItem('guessGameBest', attempts);
      showNotification(`Rekor baru! ${attempts} percobaan! 🏆`, 'success');
    }
  } else if (guess < secretNumber) {
    hint.textContent = '⬆️ Terlalu kecil! Coba angka yang lebih besar.';
    hint.style.color = '#4facfe';
  } else {
    hint.textContent = '⬇️ Terlalu besar! Coba angka yang lebih kecil.';
    hint.style.color = '#f093fb';
  }
}

function startQuiz() {
  const gameContent = document.getElementById('gameContent');
  const questions = [
    {
      question: "Berapa umur Dafa?",
      options: ["13 tahun", "14 tahun", "15 tahun", "16 tahun"],
      correct: 2
    },
    {
      question: "Apa bahasa pemrograman favorit Dafa?",
      options: ["Python", "Css", "JavaScript", "C++"],
      correct: 2
    },
    {
      question: "Hobi Dafa yang paling utama adalah?",
      options: ["Bermain Sepak Bola", "Main Game", "Ngoding", "Dengerin Musik"],
      correct: 1
    },
    {
      question: "Skill Dafa yang tertinggi adalah?",
      options: ["HTML (75%)", "GitHub (70%)", "Python (65%)", "JavaScript (65%)"],
      correct: 0
    },
    {
      question: "Tools editing video yang Dafa gunakan?",
      options: ["Adobe Premiere", "Final Cut Pro", "Alight Motion", "DaVinci Resolve"],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const q = questions[currentQuestion];
    gameContent.innerHTML = `
      <div class="game-container">
        <h3>📝 Kuis Tentang Dafa</h3>
        <div class="quiz-progress">
          <p>Pertanyaan ${currentQuestion + 1} dari ${questions.length}</p>
          <div class="progress">
            <div class="progress-bar" style="width: ${((currentQuestion + 1) / questions.length) * 100}%"></div>
          </div>
        </div>
        <div class="quiz-question">
          <h4>${q.question}</h4>
          <div class="quiz-options">
            ${q.options.map((opt, index) => `
              <button class="quiz-option btn btn-outline-primary w-100 mb-2" onclick="answerQuiz(${index}, ${q.correct})">${opt}</button>
            `).join('')}
          </div>
        </div>
        <p class="text-muted mt-3">Skor: ${score}/${questions.length}</p>
      </div>
    `;
  }
  
  window.answerQuiz = function(selected, correct) {
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(btn => btn.disabled = true);
    
    if (selected === correct) {
      buttons[selected].classList.remove('btn-outline-primary');
      buttons[selected].classList.add('btn-success');
      score++;
      showNotification('Benar! 🎉', 'success');
    } else {
      buttons[selected].classList.remove('btn-outline-primary');
      buttons[selected].classList.add('btn-danger');
      buttons[correct].classList.remove('btn-outline-primary');
      buttons[correct].classList.add('btn-success');
    }
    
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        showQuizResult();
      }
    }, 1500);
  };
  
  function showQuizResult() {
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
      message = '🏆 Sempurna! Kamu kenal banget sama aku!';
      createConfetti();
    } else if (percentage >= 80) {
      message = '🎉 Bagus! Kamu cukup kenal sama aku!';
    } else if (percentage >= 60) {
      message = '😊 Lumayan! Masih bisa lebih baik!';
    } else {
      message = '😅 Yah, kayaknya perlu kenalan lebih dalam deh!';
    }
    
    gameContent.innerHTML = `
      <div class="game-container text-center">
        <h3>📊 Hasil Kuis</h3>
        <div class="quiz-result">
          <h1 style="font-size: 60px; color: #667eea;">${score}/${questions.length}</h1>
          <p style="font-size: 24px;">${percentage}%</p>
          <p>${message}</p>
          <button onclick="startQuiz()" class="btn btn-primary">Main Lagi</button>
          <button onclick="closeGameModal()" class="btn btn-secondary">Tutup</button>
        </div>
      </div>
    `;
  }
  
  document.getElementById('gameModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  displayQuestion();
}

function startMemoryGame() {
  const gameContent = document.getElementById('gameContent');
  const icons = ['💻', '🎮', '⚽', '🎵', '🎨', '📱', '🚀', '⭐'];
  const cards = [...icons, ...icons].sort(() => Math.random() - 0.5);
  
  let flipped = [];
  let matched = 0;
  let moves = 0;
  
  gameContent.innerHTML = `
    <div class="game-container">
      <h3>🧠 Memory Game</h3>
      <p>Temukan pasangan kartu yang sama!</p>
      <div class="game-stats">
        <p>Gerakan: <span id="moves">0</span></p>
        <p>Cocok: <span id="matched">0</span>/${icons.length}</p>
      </div>
      <div class="memory-grid">
        ${cards.map((icon, index) => `
          <div class="memory-card" data-index="${index}" data-icon="${icon}" onclick="flipCard(this)">
            <div class="card-front">?</div>
            <div class="card-back">${icon}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  window.flipCard = function(card) {
    if (flipped.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    
    card.classList.add('flipped');
    flipped.push(card);
    
    if (flipped.length === 2) {
      moves++;
      document.getElementById('moves').textContent = moves;
      
      const [card1, card2] = flipped;
      if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matched++;
        document.getElementById('matched').textContent = matched;
        flipped = [];
        
        if (matched === icons.length) {
          setTimeout(() => {
            showNotification(`Selamat! Kamu menyelesaikan dalam ${moves} gerakan! 🎉`, 'success');
            createConfetti();
          }, 500);
        }
      } else {
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          flipped = [];
        }, 1000);
      }
    }
  };
  
  document.getElementById('gameModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGameModal() {
  const modal = document.getElementById('gameModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeGameModal();
    const chatbox = document.getElementById('ai-chatbox');
    if (chatbox && chatbox.classList.contains('show')) {
      chatbox.classList.remove('show');
    }
  }
});

const contactForm = document.getElementById('contact-form');
let formSubmitted = false;

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (formSubmitted) return;
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name.length < 3) {
      showNotification('Nama minimal 3 karakter! ⚠️', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showNotification('Email tidak valid! ⚠️', 'error');
      return;
    }
    
    if (message.length < 10) {
      showNotification('Pesan minimal 10 karakter! ⚠️', 'error');
      return;
    }
    
    formSubmitted = true;
    
    const btn = this.querySelector('.button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    btn.disabled = true;

    emailjs.send("service_3su5dhh", "template_q3b4ivo", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
      btn.style.background = '#28a745';
      
      this.reset();
      createConfetti();
      showNotification('Pesan berhasil dikirim! 🎉', 'success');
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        formSubmitted = false;
      }, 3000);
    })
    .catch(error => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      formSubmitted = false;
      showNotification('Gagal mengirim pesan. Coba lagi! ❌', 'error');
      console.error('EmailJS Error:', error);
    });
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('notification-exit');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        smoothScrollTo(targetPosition, 1000);
        
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse?.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
}

function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function initKeyboardNav() {
  document.addEventListener('keydown', function(e) {
    const scrollAmount = 100;
    switch(e.key) {
      case 'ArrowDown':
      case 'PageDown':
        if (!e.target.matches('input, textarea')) {
          e.preventDefault();
          smoothScrollTo(window.pageYOffset + scrollAmount, 300);
        }
        break;
      case 'ArrowUp':
      case 'PageUp':
        if (!e.target.matches('input, textarea')) {
          e.preventDefault();
          smoothScrollTo(window.pageYOffset - scrollAmount, 300);
        }
        break;
      case 'Home':
        if (!e.target.matches('input, textarea')) {
          e.preventDefault();
          smoothScrollTo(0, 500);
        }
        break;
      case 'End':
        if (!e.target.matches('input, textarea')) {
          e.preventDefault();
          smoothScrollTo(document.body.scrollHeight, 500);
        }
        break;
    }
  });
}

function initSectionReveal() {
  const revealSections = document.querySelectorAll('section');

  function revealOnScroll() {
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      if (sectionTop < windowHeight - revealPoint) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }

  revealSections.forEach(section => {
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', revealOnScroll);

  revealOnScroll();
}

function initCustomCursor() {
  if (window.innerWidth <= 1024) return;
  
  const cursor = document.createElement('div');
  const cursorFollower = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursorFollower.className = 'cursor-follower';
  document.body.appendChild(cursor);
  document.body.appendChild(cursorFollower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .project-card, .skill-box').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
      cursorFollower.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
      cursorFollower.classList.remove('cursor-hover');
    });
  });
}

function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

function createConfetti() {
  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
  }
}

function initFAB() {
  const fabMain = document.getElementById('fab-main');
  const fabOptions = document.querySelector('.fab-options');
  const fabShare = document.getElementById('fab-share');
  const fabTop = document.getElementById('fab-top');

  if (!fabMain) return;

  let fabOpen = false;

  fabMain.addEventListener('click', () => {
    fabOpen = !fabOpen;
    fabOptions.classList.toggle('open', fabOpen);
    fabMain.querySelector('i').style.transform =
      fabOpen ? 'rotate(45deg)' : 'rotate(0deg)';
  });

  if (fabShare) {
    fabShare.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: 'Portofolio Dafa',
          text: 'Lihat Portofolio Dafa Alfiansyah!',
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        showNotification('Link berhasil disalin! 📋', 'success');
      }
    });
  }

if (fabTop) {
    fabTop.addEventListener('click', () => {
      smoothScrollTo(0, 800);
    });
  }
}

function initMouseParticles() {
  if (window.innerWidth <= 768) return;

  let lastTime = 0;
  const throttle = 50;

  document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();
    if (currentTime - lastTime < throttle) return;
    lastTime = currentTime;

    const particle = document.createElement('div');
    particle.className = 'mouse-particle';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  });
}

function initParallax() {
  const parallaxElements = document.querySelectorAll('.hero-img, .stat-item');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((el, index) => {
      const speed = (index % 3 + 1) * 0.3;
      const yPos = -(scrolled * speed);
      if (scrolled < 1000) {
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
  });
}

function initEasterEggs() {
  const profileImg = document.querySelector('.hero-img');
  let clickCount = 0;
  
  if (profileImg) {
    profileImg.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 5) {
        createConfetti();
        showNotification('🎉 Rahasia terbuka! Kamu menemukan fitur tersembunyi!', 'success');
        profileImg.style.animation = 'spin 1s ease';
        setTimeout(() => {
          profileImg.style.animation = 'profileBounce 3s ease-in-out infinite';
        }, 1000);
        clickCount = 0;
      }
    });
  }
}

function initSkillBoxInteractions() {
  const skillBoxes = document.querySelectorAll('.skill-box');
  
  skillBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
      createSkillParticles(this);
    });
    
    box.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
    
    box.addEventListener('click', function(event) {
      const skillName = this.querySelector('.skill-name').textContent;
      const skillPercent = this.querySelector('.skill-percent').textContent;
      
      createRipple(this, event);
      showSkillNotification(skillName, skillPercent);
    });
  });

  function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
  
  function showSkillNotification(skillName, skillPercent) {
    const existingNotification = document.querySelector('.skill-notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = 'skill-notification';
    notification.innerHTML = `<i class="fas fa-code"></i><span>${skillName}: ${skillPercent}</span>`;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
  
  function createSkillParticles(element) {
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'skill-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      element.appendChild(particle);
      setTimeout(() => particle.remove(), 3000);
    }
  }
  
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const boxes = document.querySelectorAll('.skill-box:hover');
      boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        box.style.transform = `translateY(-15px) scale(1.03) rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg)`;
      });
    });
  }
  
  const skillsLink = document.querySelector('a[href="#skills"]');
  if (skillsLink) {
    skillsLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

function initPreloader() {
  const preloader = document.getElementById('preloader');
  
  if (preloader) {

    document.body.style.overflow = 'hidden';
    
    const countdownDiv = document.createElement('div');
    countdownDiv.className = 'countdown';
    const loaderContent = document.querySelector('.loader-content');
    if (loaderContent) {
      loaderContent.appendChild(countdownDiv);
    }

    let count = 3;
    
    setTimeout(() => {
      countdownDiv.classList.add('show');
      countdownDiv.textContent = count;
      
      const countdownInterval = setInterval(() => {
        count--;
        
        if (count > 0) {

          countdownDiv.textContent = count;
        } else if (count === 0) {

          countdownDiv.textContent = '🚀';
          
          const astronautContainer = document.querySelector('.astronaut-container');
          if (astronautContainer) {
            astronautContainer.classList.add('launching');
          }
        
          const loaderText = document.querySelector('.loader-text');
          if (loaderText) {
            loaderText.textContent = 'Meluncur ke angkasa... 🚀';
          }
        } else {
    
          clearInterval(countdownInterval);
          
          setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
              preloader.style.display = 'none';
              document.body.style.overflow = 'auto'; 
            }, 1000);
          }, 2500);
        }
      }, 1200);
    }, 1500);
  }
}