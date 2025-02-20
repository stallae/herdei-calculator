import { calculatorResultsMock } from '../configuration/mock';

export const calculateTaxes = (formData) => {
    // const {
    //     maritalStatus,
    //     stateOfResidence,
    //     propertyType,
    //     propertyValue,
    //     propertyLocation,
    //     acquiredAfterUnion
    // } = formData;
    console.log(formData);

    // For now, just return mock data
    // In future this could use the form values to determine which result to return
    return calculatorResultsMock;
};