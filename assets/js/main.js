// Mobile menu
const menuBtn = document.querySelector('[data-menu-btn]');
const links = document.querySelector('[data-links]');
if (menuBtn && links) {
  menuBtn.addEventListener('click', () => {
    links.classList.toggle('mobile');
  });
}

// Products modal
const overlay = document.querySelector('[data-modal-overlay]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');
const modalImg = document.querySelector('[data-modal-img]');
const closeBtns = document.querySelectorAll('[data-modal-close]');
const productBtns = document.querySelectorAll('[data-product-open]');

function openModal({ title, desc, img, bullets }) {
  if (!overlay) return;
  modalTitle.textContent = title;
  modalText.innerHTML = `
    <p>${desc}</p>
    ${bullets?.length ? `<ul>${bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
  `;
  modalImg.src = img;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!overlay) return;
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

productBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal({
      title: btn.dataset.title,
      desc: btn.dataset.desc,
      img: btn.dataset.img,
      bullets: btn.dataset.bullets ? btn.dataset.bullets.split('|') : []
    });
  });
});

closeBtns.forEach(b => b.addEventListener('click', closeModal));
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}
