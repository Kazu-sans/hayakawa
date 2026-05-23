/* =============================================
   早川タイル張工事 — contact.js
   Form validation
   ============================================= */

(function () {
  'use strict';

  const form    = document.getElementById('contactForm');
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  // Validation rules
  const rules = [
    { id: 'type',    errId: 'err-type',    fn: v => v ? '' : 'お問い合わせ種類を選択してください。' },
    { id: 'name',    errId: 'err-name',    fn: v => v.trim() ? '' : 'お名前を入力してください。' },
    { id: 'tel',     errId: 'err-tel',     fn: v => /^[\d\-+() ]{7,20}$/.test(v.trim()) ? '' : '正しい電話番号を入力してください。' },
    { id: 'email',   errId: 'err-email',   fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : '正しいメールアドレスを入力してください。' },
    { id: 'message', errId: 'err-message', fn: v => v.trim().length >= 10 ? '' : '10文字以上でご入力ください。' },
  ];
  const privacyEl  = document.getElementById('privacy');
  const privacyErr = document.getElementById('err-privacy');

  function validate(rule) {
    const el  = document.getElementById(rule.id);
    const err = document.getElementById(rule.errId);
    if (!el || !err) return true;
    const msg = rule.fn(el.value);
    err.textContent = msg;
    el.classList.toggle('err', !!msg);
    return !msg;
  }

  // Inline validation on blur
  rules.forEach(rule => {
    const el = document.getElementById(rule.id);
    if (el) el.addEventListener('blur', () => validate(rule));
  });

  // Form submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = rules.every(r => validate(r));

    // Privacy check
    if (!privacyEl.checked) {
      privacyErr.textContent = 'プライバシーポリシーへの同意が必要です。';
      ok = false;
    } else {
      privacyErr.textContent = '';
    }

    if (!ok) {
      const firstErr = form.querySelector('.err');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Submit (demo — replace with real API call)
    btn.disabled = true;
    btn.textContent = '送信中...';

    // Real implementation example:
    // fetch('/api/contact', { method:'POST', body: new FormData(form) })
    //   .then(() => { form.style.display='none'; success.style.display='block'; })
    //   .catch(() => { btn.disabled=false; btn.textContent='送信する'; });

    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1200);
  });

})();
