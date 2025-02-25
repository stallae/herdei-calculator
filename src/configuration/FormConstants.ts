export enum MaritalStatusType {
  SINGLE = "Solteiro(a)",
  WIDOWED = "Viúvo(a)",
  DIVORCED = "Divorciado(a)",
  UNIVERSAL = "União com comunhão universal de bens",
  PARTIAL = "União com comunhão parcial de bens",
  TOTAL_SEPARATION = "União com separação total de bens",
  MANDATORY = "União com separação obrigatória de bens",
  FINAL_PARTICIPATION = "União com participação final nos aquestos",
}

export enum LocationType {
  AC = "AC",
  AL = "AL",
  AP = "AP",
  AM = "AM",
  BA = "BA",
  CE = "CE",
  DF = "DF",
  ES = "ES",
  GO = "GO",
  MA = "MA",
  MT = "MT",
  MS = "MS",
  MG = "MG",
  PA = "PA",
  PB = "PB",
  PR = "PR",
  PE = "PE",
  PI = "PI",
  RJ = "RJ",
  RN = "RN",
  RS = "RS",
  RO = "RO",
  RR = "RR",
  SC = "SC",
  SP = "SP",
  SE = "SE",
  TO = "TO",
}

export const PropertyType = [
  "Imóvel",
  "Móvel",
  "Conta bancária",
  "Outros investimentos",
  "Outros",
];

export const MaritalStatus = Object.values(MaritalStatusType);
export const Location = Object.values(LocationType);
