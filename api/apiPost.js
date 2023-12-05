export const enviarDadosParaBackend = async (dados) => {
  const response = await fetch(`${BASE_URL}/associations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar dados para o backend');
  }

  return response.json();
};
