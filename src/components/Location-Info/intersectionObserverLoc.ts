export const intersectionObserverLocation = (
  element: HTMLElement | null
): IntersectionObserver | null => {
  if (!element) return null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__bounceInRight"
          );
        }
      });
    },
    { threshold: 0.01 }
  );

  observer.observe(element);

  return observer;
};
