export const PI_TAXES = {
  ITCMD: {
    RANGE: [
      { MIN: 0, MAX: 94800, RATE: 0.02 },
      { MIN: 94800, MAX: 2370000, RATE: 0.04 },
      { MIN: 2370000, MAX: Infinity, RATE: 0.06 }
    ]
  }
}
