export const searchBar = {
  initial: {
    opacity: 0,
    top: "80px",
  },
  enter: {
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    opacity: 1,
    top: "60px",
  },
  exit: {
    opacity: 0,
    top: "80px",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
