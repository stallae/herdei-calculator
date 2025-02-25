export const AC_TAXES = {
  ITCMD: {
    0: 0.04, // 4% up to 50,000
    50000: 0.04, // 4% 50,000-1,500,000
    1500000: 0.05, // 5% 1,500,000-2,500,000
    2500000: 0.06, // 6% 2,500,000-3,500,000
    3500000: 0.07, // 7% above 3,500,000
    COLLATERAL: 0.08, // 8% for collateral heirs
  },
};
