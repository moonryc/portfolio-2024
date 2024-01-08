import { useBoolean } from 'react-use';
import { useMemo } from 'react';

export const useAdvancedToggle = (value: boolean) => {
  const [isTrue, toggle] = useBoolean(value);

  return useMemo(
    () =>
      [
        isTrue,
        {
          toggle,
          toggleOn: () => toggle(true),
          toggleOff: () => toggle(false)
        }
      ] as const,
    [isTrue, toggle]
  );
};
