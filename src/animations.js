export const pageAnimation = (yVal = 0, xVal = 0) => ({
  hidden: {
    opacity: 0,
    y: yVal,
    x: xVal,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
});

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
};
