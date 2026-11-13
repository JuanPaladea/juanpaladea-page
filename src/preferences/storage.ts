export const read = <T,>(key: string, guard: (value: unknown) => value is T): T | null => {
  try {
    const stored = localStorage.getItem(key);
    return guard(stored) ? stored : null;
  } catch {
    // Private mode or blocked storage — fall back to defaults.
    return null;
  }
};

export const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Persisting is best-effort; the UI still works for this session.
  }
};
