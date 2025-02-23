export const MA_TAXES = {
  ITCMD: {
    0: 0.03, // 3% até 300.000
    300000: 0.04, // 4% de 300.000 até 600.000
    600000: 0.05, // 5% de 600.000 até 900.000
    900000: 0.06, // 6% de 900.000 até 1.200.000
    1200000: 0.07 // 7% acima de 1.200.000
  }
}
