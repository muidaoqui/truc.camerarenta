// utils/calcPrice.js

export const calcPrice = (pricing, startDate, endDate, rentalType) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffHours = (end - start) / (1000 * 60 * 60);
  const diffDays = Math.ceil(diffHours / 24);

  if (rentalType === "6h") return pricing.sixHours;
  if (rentalType === "1d") return pricing.oneDay;
  if (rentalType === "2d") return pricing.twoDays;

  // custom (>= 3 ngày)
  if (diffDays >= 3) {
    return pricing.twoDays + (diffDays - 2) * pricing.fromDay3;
  }

  return 0;
};