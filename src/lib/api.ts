import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5001',
  timeout: 30000, // 30 seconds timeout for file uploads
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('Making request to:', config.url);
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response received:', response.status);
    return response;
  },
  (error: AxiosError) => {
    console.error('Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API functions
export const uploadTemplate = async (file: File, placeholders: Record<string, string>) => {
  const formData = new FormData();
  formData.append('template', file);
  formData.append('placeholders', JSON.stringify(placeholders));
  
  return api.post('/upload', formData, {
    responseType: 'blob', // Important for file downloads
  });
};

export const checkHealth = async () => {
  return api.get('/health');
};

export default api; 