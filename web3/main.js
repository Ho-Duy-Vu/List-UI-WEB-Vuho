// ===== Horizontal scroll buttons
const btnLeft  = document.querySelector('.left-btn');
const btnRight = document.querySelector('.right-btn');
const tabMenu  = document.querySelector('.tab-menu');

const iconVisibility = () => {
  const scrollLeftValue  = Math.ceil(tabMenu.scrollLeft);
  const scrollableWidth  = tabMenu.scrollWidth - tabMenu.clientWidth;
  btnLeft.style.display  = scrollLeftValue > 0 ? 'block' : 'none';
  btnRight.style.display = scrollableWidth > scrollLeftValue ? 'block' : 'none';
};

btnRight.addEventListener('click', () => {
  tabMenu.scrollLeft += 150;
  setTimeout(iconVisibility, 50);
});
btnLeft.addEventListener('click', () => {
  tabMenu.scrollLeft -= 150;
  setTimeout(iconVisibility, 50);
});

window.onload = () => {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth
      ? 'block' : 'none';
  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';
};

window.onresize = () => {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth
      ? 'block' : 'none';
  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';
  const scrollLeftValue = Math.round(tabMenu.scrollLeft);
  btnLeft.style.display = scrollLeftValue > 0 ? 'block' : 'none';
};

// ===== Draggable tab navigation
let activeDrag = false;
tabMenu.addEventListener('mousemove', (e) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= e.movementX;
  iconVisibility();
  tabMenu.classList.add('dragging');
});
document.addEventListener('mouseup', () => {
  activeDrag = false;
  tabMenu.classList.remove('dragging');
});
tabMenu.addEventListener('mousedown', () => { activeDrag = true; });

// ===== Switch tab content
const tabs    = document.querySelectorAll('.tab');
const tabBtns = document.querySelectorAll('.tab-btn');

const setActive = (i) => {
  tabBtns.forEach(btn => btn.classList.remove('active'));
  tabs.forEach(tab => tab.classList.remove('active'));
  tabBtns[i].classList.add('active');
  tabs[i].classList.add('active');
};

tabBtns.forEach((btn, i) => btn.addEventListener('click', () => setActive(i)));
