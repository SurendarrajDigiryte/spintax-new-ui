export const Constants = {
  MAX_RESULTS: 20 as const,
  MIN_RESULTS: 1 as const, // Minimum number of results
  API_BASE_URL: 'http://localhost:3000/api/spintax' as const,
  DEFAULT_RESULTS_COUNT: 3 as const,
};

export type ConstantsType = typeof Constants;