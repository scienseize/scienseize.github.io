// How the site's dialogs open and close. Each kind has its own motion, taken from what it shows:
//   project sheets, chapters of an old detective novel, turn in like a page from the book's spine;
//   photos, prints of the evidence, develop out of blank paper as in a darkroom tray;
//   posts, newspaper bulletins, slide up while the headline types in (the typing is in PostList).
// With reduced motion, dialogs open and close at once.
export const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

type Motion = { frames: Keyframe[]; options: KeyframeAnimationOptions };

// Open the dialog, then play `motion` on `el` (the dialog, or a part of it such as the photo).
export const show = (d: HTMLDialogElement, motion: Motion, el: Element = d) => {
  d.showModal();
  if (!calm()) el.animate(motion.frames, motion.options);
};

// Play `motion` on `el`, then close the dialog. A second call while it plays does nothing.
export const hide = (d: HTMLDialogElement, motion: Motion, el: Element = d) => {
  if (!d.open || d.dataset.closing) return;
  if (calm()) return d.close();
  d.dataset.closing = '1';
  const a = el.animate(motion.frames, { ...motion.options, fill: 'forwards' });
  a.onfinish = () => { delete d.dataset.closing; d.close(); a.cancel(); };
};

// Esc runs the dialog's own closing motion instead of closing at once.
export const closeOnEsc = (d: HTMLDialogElement, close: (d: HTMLDialogElement) => void) =>
  d.addEventListener('cancel', (e) => { e.preventDefault(); close(d); });

// Page turn: the sheet swings in about its left edge (the CSS sets transform-origin), a little past flat,
// then settles; closing turns it back.
const page = 'perspective(1800px) rotateY';
export const turnIn: Motion = {
  frames: [{ transform: `${page}(-100deg)`, opacity: 0.3 }, { transform: `${page}(5deg)`, opacity: 1, offset: 0.8 }, { transform: `${page}(0deg)` }],
  options: { duration: 750, easing: 'cubic-bezier(0.3, 0.8, 0.3, 1)' },
};
export const turnOut: Motion = {
  frames: [{ transform: `${page}(0deg)` }, { transform: `${page}(-100deg)`, opacity: 0 }],
  options: { duration: 420, easing: 'cubic-bezier(0.5, 0, 0.75, 0)' },
};

// Darkroom develop: the print starts as warm blank paper and the image rises into it; closing lifts it away.
export const develop: Motion = {
  frames: [
    { filter: 'brightness(2.4) sepia(1) contrast(0.25)' },
    { filter: 'brightness(2.4) sepia(1) contrast(0.25)', offset: 0.12 },
    { filter: 'brightness(1.3) sepia(0.6) contrast(0.7)', offset: 0.55 },
    { filter: 'none' },
  ],
  options: { duration: 1500, easing: 'ease-in' },
};
export const lift: Motion = { frames: [{ opacity: 1 }, { opacity: 0 }], options: { duration: 250, easing: 'ease-in' } };

// Bulletin: the newspaper page slides up from the bottom of the screen, and back down on close.
export const slideUp: Motion = {
  frames: [{ transform: 'translateY(100%)' }, { transform: 'none' }],
  options: { duration: 450, easing: 'cubic-bezier(0.2, 0.9, 0.2, 1)' },
};
export const slideDown: Motion = {
  frames: [{ transform: 'none' }, { transform: 'translateY(100%)' }],
  options: { duration: 300, easing: 'cubic-bezier(0.5, 0, 0.75, 0)' },
};
