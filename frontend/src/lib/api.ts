import axios from 'axios';
import { Group, GroupFilters, CreateGroupData, Game } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  // TODO: Add JWT token when auth is implemented
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const groupsApi = {
  // Get all groups with filters
  getGroups: async (filters: GroupFilters = {}): Promise<Group[]> => {
    const response = await api.get('/groups', { params: filters });
    return response.data;
  },

  // Get single group by ID
  getGroup: async (id: string): Promise<Group> => {
    const response = await api.get(`/groups/${id}`);
    return response.data;
  },

  // Create new group
  createGroup: async (data: CreateGroupData): Promise<Group> => {
    const response = await api.post('/groups', data);
    return response.data;
  },

  // Join group
  joinGroup: async (id: string): Promise<{ message: string }> => {
    const response = await api.post(`/groups/${id}/join`);
    return response.data;
  },

  // Leave group
  leaveGroup: async (id: string): Promise<{ message: string }> => {
    const response = await api.post(`/groups/${id}/leave`);
    return response.data;
  },

  // Delete group
  deleteGroup: async (id: string): Promise<{ message: string }> => {
    const response = await api.delete(`/groups/${id}`);
    return response.data;
  },
};

export const gamesApi = {
  // Get all games
  getGames: async (): Promise<Game[]> => {
    const response = await api.get('/games');
    return response.data;
  },

  // Get game by ID
  getGame: async (id: string): Promise<Game> => {
    const response = await api.get(`/games/${id}`);
    return response.data;
  },
};

export default api; 