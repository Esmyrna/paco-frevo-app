import axios from 'axios';

const BASE_URL = 'https://pacodofrevoapi1-6ka9yo5l.b4a.run';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchAssociations = async (page = 1, pageSize = 10) => {
  try {
    const response = await api.get(`/associations/paged?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching associations:', error);
    throw error;  
  }
};

export const deleteAssociation = async (id) => {
  try {
    console.log(id);
    const response = await api.delete(`/associations/id/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting association:', error);
    throw error;
  }
};
