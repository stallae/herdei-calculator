import {AC_TAXES} from './TaxesByState/AC_TAXES';
import {AL_TAXES} from './TaxesByState/AL_TAXES';
import {AP_TAXES} from './TaxesByState/AP_TAXES';
import {AM_TAXES} from './TaxesByState/AM_TAXES';
import {BA_TAXES} from './TaxesByState/BA_TAXES';
import {CE_TAXES} from './TaxesByState/CE_TAXES';
import {DF_TAXES} from './TaxesByState/DF_TAXES';
import {ES_TAXES} from './TaxesByState/ES_TAXES';
import {GO_TAXES} from './TaxesByState/GO_TAXES';
import {MA_TAXES} from './TaxesByState/MA_TAXES';
import {MT_TAXES} from './TaxesByState/MT_TAXES';
import {MS_TAXES} from './TaxesByState/MS_TAXES';
import {MG_TAXES} from './TaxesByState/MG_TAXES';
import {PA_TAXES} from './TaxesByState/PA_TAXES';
import {PB_TAXES} from './TaxesByState/PB_TAXES';
import {PR_TAXES} from './TaxesByState/PR_TAXES';
import {PE_TAXES} from './TaxesByState/PE_TAXES';
import {PI_TAXES} from './TaxesByState/PI_TAXES';
import {RJ_TAXES} from './TaxesByState/RJ_TAXES';
import {RN_TAXES} from './TaxesByState/RN_TAXES';
import {RS_TAXES} from './TaxesByState/RS_TAXES';
import {RO_TAXES} from './TaxesByState/RO_TAXES';
import {RR_TAXES} from './TaxesByState/RR_TAXES';
import {SC_TAXES} from './TaxesByState/SC_TAXES';
import {SP_TAXES} from './TaxesByState/SP_TAXES';
import {SE_TAXES} from './TaxesByState/SE_TAXES';
import {TO_TAXES} from './TaxesByState/TO_TAXES';

export const MaritalStatusDiscount = (maritalStatus: string, acquiredAfterUnion: string): number => {

    const statusWithDiscount = [
        "União com comunhão universal de bens",
        "União com comunhão parcial de bens",
        "União com separação obrigatória de bens"
    ];

    return statusWithDiscount.includes(maritalStatus) && acquiredAfterUnion === "Sim" ? 0.5 : 0;
};

export const REGISTRY_TAXES = {
    VALUE: {
        0: 441.57,              // até R$ 9.118,22
        9118.23: 671.18,        // de R$ 9.118,23 até R$ 14.620,59
        14620.60: 1377.68,      // de R$ 14.620,60 até R$ 27.511,86
        27511.87: 1854.58,      // de R$ 27.511,87 até R$ 55.023,72
        55023.73: 1942.89,      // de R$ 55.023,73 até R$ 82.221,15
        82221.16: 2031.20,      // de R$ 82.221,16 até R$ 191.796,95
        191796.96: 2207.84,     // de R$ 191.796,96 até R$ 328.570,20
        328570.20: 2384.46,     // de R$ 328.570,20 até R$ 822.211,54
        822211.54: 2561.09,     // de R$ 822.211,54 até R$ 1.257.694,94
        1257684.95: 2737.71,    // de R$ 1.257.684,95 até R$ 1.729.316,79
        1729316.79: 2914.34     // acima de R$ 1.729.316,79
    },

};


export const STATE_TAX = {
    "AC": AC_TAXES,
    "AL": AL_TAXES,
    "AP": AP_TAXES,
    "AM": AM_TAXES,
    "BA": BA_TAXES,
    "CE": CE_TAXES,
    "DF": DF_TAXES,
    "ES": ES_TAXES,
    "GO": GO_TAXES,
    "MA": MA_TAXES,
    "MT": MT_TAXES,
    "MS": MS_TAXES,
    "MG": MG_TAXES,
    "PA": PA_TAXES,
    "PB": PB_TAXES,
    "PR": PR_TAXES,
    "PE": PE_TAXES,
    "PI": PI_TAXES,
    "RJ": RJ_TAXES,
    "RN": RN_TAXES,
    "RS": RS_TAXES,
    "RO": RO_TAXES,
    "RR": RR_TAXES,
    "SC": SC_TAXES,
    "SP": SP_TAXES,
    "SE": SE_TAXES,
    "TO": TO_TAXES
};
