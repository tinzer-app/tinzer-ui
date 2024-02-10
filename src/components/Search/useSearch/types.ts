export interface SearchConfig {
  placeholder?: string;
  delayMs?: number;
}

export type OnChange = (newValue: string) => void;

export interface UseSearchParams {
  /**
   * необходимо мемоизировать для корректной работы
   */
  onChange: OnChange;
  config?: SearchConfig;
}
