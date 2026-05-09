const scrollButton = document.querySelector('[data-scroll-target="workflow"]');
const score = document.querySelector('#score');

scrollButton?.addEventListener('click', () => {
  document.querySelector('#workflow')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

if (score) {
  let value = 68;
  const target = 82;
  const timer = window.setInterval(() => {
    value += 1;
    score.textContent = String(value);
    if (value >= target) window.clearInterval(timer);
  }, 32);
}
