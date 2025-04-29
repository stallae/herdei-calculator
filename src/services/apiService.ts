import { FormData } from '../types/calculator';

interface BackendPayload {
  cpf: string;
  fname: string;
  lname: string;
  password: string;
  percentage: number;
  profession: string;
  bio: string;
  role: string;
}

export const sendCalculationToBackend = async (formData: FormData, calculationResult: any) => {
  try {
    // Gerar senha aleatória
    const randomPassword = Math.random().toString(36).slice(-8);
    
    // Obter email do formData ou usar um valor padrão
    const email = formData.email || `user_${Date.now()}@herdei.com`;
    const firstName = formData.firstName || 'Cliente';
    const lastName = formData.lastName || 'Herdei';
    
    // Criar payload para o backend
    const payload: BackendPayload = {
      cpf: email, // Usando email no lugar do CPF
      fname: firstName,
      lname: lastName,
      password: randomPassword,
      percentage: calculationResult.Comparison.totalDifference.percentage,
      profession: 'Cliente',
      bio: `${email} | ${firstName} ${lastName} | ${formData.maritalStatus} | ${formData.stateOfResidence}`,
      role: 'CLIENT'
    };

    console.log('Enviando payload:', payload);

    const response = await fetch('https://herdei-backend-58499882258.us-central1.run.app/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar dados para o backend');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    throw error;
  }
}; 