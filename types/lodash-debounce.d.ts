declare module 'lodash/debounce' {
    import { DebouncedFunc } from 'lodash';
    function debounce<T extends (...args: any[]) => void>(
      func: T,
      wait?: number,
      options?: {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
      }
    ): DebouncedFunc<T>;
    export default debounce;
  }
  