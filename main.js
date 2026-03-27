// main.js — 명품공인중개사사무소

const backdrop = document.getElementById('modalBackdrop');
let currentModal = null;

function openModal(type) {
  closeModal();
  const modal = document.getElementById('modal-' + type);
  if (!modal) return;
  backdrop.classList.add('active');
  modal.classList.add('active');
  currentModal = modal;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (currentModal) {
    currentModal.classList.remove('active');
    currentModal = null;
  }
  backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function handleSubmit(e, modalId) {
  e.preventDefault();
  const modal = document.getElementById(modalId);
  const form = modal.querySelector('.modal-form');
  const success = modal.querySelector('.form-success');
  const btn = form.querySelector('.btn-submit');

  // ── Formspree 연동 시 아래 주석 해제 후 YOUR_ID 교체 ──
  // const data = new FormData(form);
  // fetch('https://formspree.io/f/YOUR_ID', {
  //   method: 'POST', body: data, headers: { Accept: 'application/json' }
  // }).then(res => {
  //   if (res.ok) showSuccess(form, success);
  //   else alert('전송 오류가 발생했습니다.');
  // });

  btn.textContent = '처리 중…';
  btn.disabled = true;
  setTimeout(() => showSuccess(form, success), 700);
}

function showSuccess(form, success) {
  form.style.display = 'none';
  success.classList.remove('hidden');
}
