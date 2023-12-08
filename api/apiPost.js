import { useMutation } from 'react-query';
import axios from 'axios';

const BASE_URL = 'https://pacodofrevoapi1-6ka9yo5l.b4a.run';

export const enviarDadosParaBackend = async (dados) => {
  const response = await axios.post(`${BASE_URL}/associations`, dados);

  if (!response.data) {
    throw new Error('Erro ao enviar dados para o backend');
  }

  return response.data;
};

const ApiPost = () => {
  return useMutation(enviarDadosParaBackend);
};

export default ApiPost;