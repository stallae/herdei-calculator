export const PA_TAXES = {
  ITCMD: {
    0: 0.02, // 2% até 72.000
    72000: 0.03, // 3% de 72.000 até 240.000
    240000: 0.04, // 4% de 240.000 até 720.000
    720000: 0.05, // 5% de 720.000 até 1.680.000
    1680000: 0.06, // 6% acima de 1.680.000
  },
};
