import { STATE_TAX, REGISTRY_TAXES, MaritalStatusDiscount } from '../configuration/CalculatorConstants';
import { MaritalStatusType, LocationType } from '../configuration/FormConstants';

interface Good {
    type: string;
    value: string;
    location: LocationType;
    acquiredAfterUnion: string;
}

interface FormData {
    maritalStatus: MaritalStatusType;
    stateOfResidence: LocationType;
    goods: Good[];
}

interface TaxBreakdown {
    ITCMD: {
        Taxes: number;
    };
    Notary: number;
    Fees: number;
    Total: number;
}

interface CostBreakdown {
    Taxes: TaxBreakdown;
    Notary: number;
    Fees: number;
    Total: number;
}

interface CalculationResult {
    HERDEI: {
        estimatedCosts: CostBreakdown;
    };
    Others: {
        estimatedCosts: CostBreakdown;
    };
    Comparison: {
        totalDifference: {
            amount: number;
            percentage: number;
        };
    };
}

export const calculateTaxes = (formData: FormData): CalculationResult => {
    const { maritalStatus, stateOfResidence, goods } = formData;
    console.log(maritalStatus, stateOfResidence, goods);
    let totalStateTax = 0;
    let mostExpensiveProperty = 0;
    let numberOfProperties = 0;
    let totalPropertyValue = 0;

    goods.forEach(good => {
        let value = parseFloat(good.value) || 0;
        totalPropertyValue += value;
        const location = good.type === "Imóvel" ? good.location : stateOfResidence;
        
        // Apply marital status discount to the value if applicable
        const discount = MaritalStatusDiscount(maritalStatus, good.acquiredAfterUnion);
        value = value * (1 - discount);
        
        const itcdmStateTaxRate = calculateITMCDTaxRateByState(location, value);
        const goodTax = value * itcdmStateTaxRate;
        totalStateTax += goodTax;

        if (good.type === "Imóvel") {
            numberOfProperties++;
            if (value > mostExpensiveProperty) {
                mostExpensiveProperty = value;
            }
        }
    });

    // Calculate registry fees
    let registryFee = 0;
    goods.forEach(good => {
        registryFee += calculateRegistryFee(parseFloat(good.value) || 0, good.type);
    });
    
    // Base calculations for traditional service
    const othersTaxes = totalStateTax;
    const othersNotary = registryFee;
    const othersFees = totalPropertyValue * 0.05; // 5% of total property value

    // Herdei calculations with discounts
    const herdeiTaxes = totalStateTax;
    const herdeiNotary = registryFee * 0.52;
    const herdeiFees = othersFees * 0.45; // 45% of others' fees

    // Calculate totals
    const herdeiTotal = herdeiTaxes + herdeiNotary + herdeiFees;
    const othersTotal = othersTaxes + othersNotary + othersFees;

    // Calculate difference
    const difference = othersTotal - herdeiTotal;
    const percentageDiff = (difference / othersTotal) * 100;

    return {
        HERDEI: {
            estimatedCosts: {
                Taxes: {
                    ITCMD: {
                        Taxes: Math.round(herdeiTaxes)
                    },
                    Notary: Math.round(herdeiNotary),
                    Fees: Math.round(herdeiFees),
                    Total: Math.round(herdeiTotal)
                },
                Notary: Math.round(herdeiNotary),
                Fees: Math.round(herdeiFees),
                Total: Math.round(herdeiTotal)
            }
        },
        Others: {
            estimatedCosts: {
                Taxes: {
                    ITCMD: {
                        Taxes: Math.round(othersTaxes)
                    },
                    Notary: Math.round(othersNotary),
                    Fees: Math.round(othersFees),
                    Total: Math.round(othersTotal)
                },
                Notary: Math.round(othersNotary),
                Fees: Math.round(othersFees),
                Total: Math.round(othersTotal)
            }
        },
        Comparison: {
            totalDifference: {
                amount: Math.round(difference),
                percentage: Math.round(percentageDiff * 100) / 100
            }
        }
    };
};

function calculateRegistryFee(value: number, type: string): number {
    // Don't apply registry fee for bank accounts and other non-property items
    if (type === "Conta bancária" || type === "Outros investimentos" || type === "Outros" || type === "Móvel") {
        return 0;
    }

    const ranges = Object.keys(REGISTRY_TAXES.VALUE)
        .map(Number)
        .sort((a, b) => a - b);
    
    let fee = REGISTRY_TAXES.VALUE[0];
    
    for (let i = 0; i < ranges.length - 1; i++) {
        if (value >= ranges[i] && value < ranges[i + 1]) {
            fee = REGISTRY_TAXES.VALUE[ranges[i] as keyof typeof REGISTRY_TAXES.VALUE];
            break;
        }
    }

    if (value >= ranges[ranges.length - 1]) {
        fee = REGISTRY_TAXES.VALUE[ranges[ranges.length - 1] as keyof typeof REGISTRY_TAXES.VALUE];
    }

    return fee;
}

function calculateITMCDTaxRateByState(state: string, value: number): number {
    const stateTax = STATE_TAX[state as keyof typeof STATE_TAX];
    if (!stateTax || !('ITCMD' in stateTax)) {
        return 0.04;
    }

    const brackets = Object.keys(stateTax.ITCMD)
        .map(Number)
        .filter(key => !isNaN(key))
        .sort((a, b) => a - b);
    
    // Start with the base rate
    let rate = stateTax.ITCMD["0" as keyof typeof stateTax.ITCMD];
    
    // Find the highest bracket that's less than or equal to the value
    for (let i = brackets.length - 1; i >= 0; i--) {
        if (value >= brackets[i]) {
            rate = stateTax.ITCMD[brackets[i].toString() as keyof typeof stateTax.ITCMD];
            break;
        }
    }
    
    return rate;
} 