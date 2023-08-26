import { useEffect, DependencyList } from 'react';

export const useDebounceEffect = (
  fn: (it: DependencyList | undefined) => void,
  waitTime: number,
  deps?: DependencyList
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn.call(null, deps);
    }, waitTime);

    return () => {
      clearTimeout(timer);
    };
  }, [deps, fn, waitTime]);
};
