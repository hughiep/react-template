/**
 * Utility functions for number operations.
 * This module provides functions to format numbers, check if a number is even or odd,
 * and convert numbers to strings with specific formatting.
 */
export const formatNumber = (num: number | `${number}`): string => {
  return new Intl.NumberFormat().format(Number(num))
}
