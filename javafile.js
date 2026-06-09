/* ═══════════════════════════════════════════════════════════
   PRAVEEN.EDITS — Portfolio JavaScript
═══════════════════════════════════════════════════════════ */

// ─── Tab switching (global so inline on click can reach it) ──
function switchTab(target) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('tab-active', b.dataset.tab === target);
  });
  document.querySelectorAll('.tab-content').forEach(tc => {
    tc.classList.remove('tab-active-content');
  });
  const content = document.getElementById('tab-' + target);
  if (content) content.classList.add('tab-active-content');
}

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll ───────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ─── Mobile menu ─────────────────────────────────────────
  const burger   = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('open');
    });
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') navLinks.classList.remove('open');
    });
  }

  // ─── Tab buttons (also wired via data-tab for safety) ────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // ─── Hero video player simulation ────────────────────────
  const ctrlPlay     = document.getElementById('ctrlPlay');
  const playIcon     = document.getElementById('playIcon');
  const pauseIcon    = document.getElementById('pauseIcon');
  const progressFill = document.getElementById('progressFill');
  const timeLabel    = document.getElementById('timeLabel');
  const playOverlay  = document.getElementById('playOverlay');

  if (ctrlPlay && playOverlay) {
    let isPlaying = false;
    let progress  = 0;
    let animFrame;
    const totalSeconds = 167;

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
      if (progressFill) progressFill.style.width = `${progress}%`;
      if (timeLabel) timeLabel.textContent = `${formatTime(current)} / 2:47`;
      animFrame = requestAnimationFrame(tick);
    }

    function startPlay() {
      isPlaying = true;
      if (playIcon)  playIcon.style.display  = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      playOverlay.classList.add('hidden');
      animFrame = requestAnimationFrame(tick);
    }

    function stopPlay() {
      isPlaying = false;
      if (playIcon)  playIcon.style.display  = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
      playOverlay.classList.remove('hidden');
      cancelAnimationFrame(animFrame);
    }

    ctrlPlay.addEventListener('click',    () => isPlaying ? stopPlay() : startPlay());
    playOverlay.addEventListener('click', () => isPlaying ? stopPlay() : startPlay());
  }

  // ─── Contact form ─────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && submitBtn && formSuccess) {
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

  // ─── Active nav link on scroll ────────────────────────────
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchors.length) {
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
  }

  // ─── Back to top ──────────────────────────────────────────
  const backTop = document.getElementById('backTop');
  if (backTop) {
    backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
