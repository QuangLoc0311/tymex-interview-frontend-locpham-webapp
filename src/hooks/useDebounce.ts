import { useEffect, useState } from "react";

/**
 * Use this custom hook to debounce the change of a value.
 *
 * @param value The value to watch for changes.
 * @param delay The delay before updating the debounched value.
 * @returns The debounched value.
 */
export const useDebounce = (value: string, delay: number): unknown => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
};
