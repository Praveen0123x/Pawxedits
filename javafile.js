/* ═══════════════════════════════════════════════════════════
   PRAVEEN.EDITS — Portfolio JavaScript
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll ─────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ─── Mobile menu ───────────────────────────────────────
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
  });
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') navLinks.classList.remove('open');
  });

  // ─── Reveal on scroll ──────────────────────────────────
  // Hero elements revealed immediately, everything else on scroll
  const heroReveals = document.querySelectorAll('#hero .reveal');
  heroReveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px 0px 0px' }
  );

  document.querySelectorAll('.reveal:not(#hero .reveal)').forEach(el => {
    revealObserver.observe(el);
  });

  // ─── Tab switching ─────────────────────────────────────
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('tab-active'));
      btn.classList.add('tab-active');

      tabContents.forEach(tc => tc.classList.remove('tab-active-content'));
      const targetContent = document.getElementById(`tab-${target}`);
      if (targetContent) {
        targetContent.classList.add('tab-active-content');
        // Reveal cards in newly shown tab
        targetContent.querySelectorAll('.reveal').forEach((el, i) => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 60 + i * 80);
        });
      }
    });
  });

  // ─── Hero video player simulation ──────────────────────
  const ctrlPlay    = document.getElementById('ctrlPlay');
  const playIcon    = document.getElementById('playIcon');
  const pauseIcon   = document.getElementById('pauseIcon');
  const progressFill = document.getElementById('progressFill');
  const timeLabel   = document.getElementById('timeLabel');
  const playOverlay = document.getElementById('playOverlay');

  if (ctrlPlay && playOverlay) {
    let isPlaying = false;
    let progress  = 0;
    let animFrame;
    const totalSeconds = 167; // 2:47

    function formatTime(secs) {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s.toString().padStart(2, '0')}`;
    }

    function tick() {
      if (!isPlaying) return;
      progress += 0.04;
      if (progress >= 100) { progress = 0; stopPlay(); return; }
      const current = (progress / 100) * totalSeconds;
      progressFill.style.width = `${progress}%`;
      timeLabel.textContent = `${formatTime(current)} / 2:47`;
      animFrame = requestAnimationFrame(tick);
    }

    function startPlay() {
      isPlaying = true;
      playIcon.style.display  = 'none';
      pauseIcon.style.display = 'block';
      playOverlay.classList.add('hidden');
      animFrame = requestAnimationFrame(tick);
    }

    function stopPlay() {
      isPlaying = false;
      playIcon.style.display  = 'block';
      pauseIcon.style.display = 'none';
      playOverlay.classList.remove('hidden');
      cancelAnimationFrame(animFrame);
    }

    ctrlPlay.addEventListener('click',    () => isPlaying ? stopPlay() : startPlay());
    playOverlay.addEventListener('click', () => isPlaying ? stopPlay() : startPlay());
  }

  // ─── Contact form ───────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name  = document.getElementById('fname').value.trim();
      const email = document.getElementById('femail').value.trim();
      const msg   = document.getElementById('fmsg').value.trim();
      if (!name || !email || !msg) return;

      submitBtn.textContent = 'Sending…';
      submitBtn.disabled    = true;

      setTimeout(() => {
        submitBtn.style.display = 'none';
        formSuccess.classList.add('show');
        contactForm.reset();
      }, 1200);
    });
  }

  // ─── Active nav link on scroll ─────────────────────────
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === `#${entry.target.id}`) {
              a.style.color = 'var(--text-white)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => sectionObserver.observe(s));

  // ─── Back to top ───────────────────────────────────────
  const backTop = document.getElementById('backTop');
  if (backTop) {
    backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}); // end DOMContentLoaded
