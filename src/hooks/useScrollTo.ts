import { useCallback } from 'react';

interface UseScrollToOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export function useScrollTo(options: UseScrollToOptions = {}) {
  const { offset = 80, behavior = 'smooth' } = options;

  const scrollTo = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });
      }
    },
    [offset, behavior]
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [behavior]);

  return { scrollTo, scrollToTop };
}