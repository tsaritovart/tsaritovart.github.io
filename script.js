document.documentElement.classList.add('is-loading');

requestAnimationFrame(() => requestAnimationFrame(() => {
  document.documentElement.classList.remove('is-loading');
  document.documentElement.classList.add('is-ready');
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const videos = [...document.querySelectorAll('[data-managed-video]')];

const syncVideo = (video, visible) => {
  if (reducedMotion.matches || !visible) {
    video.pause();
    return;
  }
  video.play().catch(() => {});
};

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => syncVideo(entry.target, entry.isIntersecting));
}, { rootMargin: '120px 0px', threshold: 0.08 });

videos.forEach((video) => videoObserver.observe(video));
reducedMotion.addEventListener('change', () => videos.forEach((video) => syncVideo(video, true)));

const liveBrowser = document.querySelector('[data-live-browser]');
const enterButton = document.querySelector('[data-browser-enter]');
const browserState = document.querySelector('[data-browser-state]');
const browserFrame = liveBrowser?.querySelector('iframe');

const captureLiveProjectScroll = () => {
  const frameWindow = browserFrame?.contentWindow;
  const frameDocument = browserFrame?.contentDocument;
  if (!frameWindow || !frameDocument || frameDocument.documentElement.dataset.portfolioScrollCapture) return;

  frameDocument.documentElement.dataset.portfolioScrollCapture = 'true';
  frameDocument.documentElement.style.overscrollBehavior = 'contain';
  frameDocument.documentElement.style.scrollBehavior = 'auto';
  if (frameDocument.body) {
    frameDocument.body.style.overscrollBehavior = 'contain';
    frameDocument.body.style.scrollBehavior = 'auto';
  }

  frameDocument.addEventListener('wheel', (event) => {
    event.preventDefault();
    const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? frameWindow.innerHeight : 1;
    const scrollingElement = frameDocument.scrollingElement || frameDocument.documentElement;
    scrollingElement.scrollTop += event.deltaY * scale * 2.4;
  }, { passive: false, capture: true });
};

enterButton?.addEventListener('click', () => {
  liveBrowser.classList.add('is-live');
  browserState.textContent = 'Live / scroll inside';
  const focusLiveProject = () => {
    enterButton.blur();
    if (browserFrame) browserFrame.tabIndex = 0;
    browserFrame?.focus({ preventScroll: true });
    browserFrame?.contentWindow?.focus();
    const frameRoot = browserFrame?.contentDocument?.documentElement;
    if (frameRoot) {
      frameRoot.tabIndex = -1;
      frameRoot.focus({ preventScroll: true });
    }
  };
  captureLiveProjectScroll();
  focusLiveProject();
  setTimeout(() => {
    captureLiveProjectScroll();
    focusLiveProject();
  }, 80);
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const createSwiper = (track, previous, next, kind) => {
  if (!track || typeof Swiper === 'undefined') return;
  const wrapper = document.createElement('div');
  wrapper.className = 'swiper-wrapper';
  [...track.children].forEach((media) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.append(media);
    wrapper.append(slide);
  });
  track.replaceChildren(wrapper);
  track.classList.add('swiper', `swiper--${kind}`);

  return new Swiper(track, {
    slidesPerView: 'auto',
    spaceBetween: kind === 'portrait' ? 16 : 24,
    speed: reducedMotion.matches ? 0 : 620,
    grabCursor: true,
    resistanceRatio: 0.72,
    watchOverflow: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: { prevEl: previous, nextEl: next },
    breakpoints: {
      0: { spaceBetween: 12 },
      700: { spaceBetween: kind === 'portrait' ? 16 : 24 }
    }
  });
};

document.querySelectorAll('.case').forEach((caseItem) => {
  createSwiper(
    caseItem.querySelector('.case-track'),
    caseItem.querySelector('[data-case-prev]'),
    caseItem.querySelector('[data-case-next]'),
    'case'
  );
});

createSwiper(
  document.querySelector('.portrait-track'),
  document.querySelector('[data-portrait-prev]'),
  document.querySelector('[data-portrait-next]'),
  'portrait'
);

const oralFeatureTrack = document.querySelector('.oral-feature-track');
if (oralFeatureTrack && typeof Swiper !== 'undefined') {
  new Swiper(oralFeatureTrack, {
    slidesPerView: 1,
    speed: reducedMotion.matches ? 0 : 620,
    grabCursor: oralFeatureTrack.querySelectorAll('.swiper-slide').length > 1,
    watchOverflow: true,
    keyboard: { enabled: true, onlyInViewport: true }
  });
}
