import api from './api';
import type {
  Employee,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
  EmployeeFilters,
  PaginatedResponse,
  Permission,
} from '../types';

export const employeeService = {
  getAll: async (filters?: EmployeeFilters): Promise<PaginatedResponse<Employee>> => {
    const params = new URLSearchParams();
    if (filters?.email) params.append('email', filters.email);
    if (filters?.name) params.append('name', filters.name);
    if (filters?.position) params.append('position', filters.position);
    if (filters?.page !== undefined) params.append('page', String(filters.page));
    if (filters?.size !== undefined) params.append('size', String(filters.size));

    const response = await api.get<PaginatedResponse<Employee>>('/employees', { params });
    return response.data;
  },

  getById: async (id: number): Promise<Employee> => {
    const response = await api.get<Employee>(`/employees/${id}`);
    return response.data;
  },

  create: async (data: CreateEmployeeRequest): Promise<Employee> => {
    const response = await api.post<Employee>('/employees', data);
    return response.data;
  },

  update: async (id: number, data: UpdateEmployeeRequest): Promise<Employee> => {
    const response = await api.put<Employee>(`/employees/${id}`, data);
    return response.data;
  },

  updateStatus: async (id: number, isActive: boolean): Promise<Employee> => {
    const response = await api.patch<Employee>(`/employees/${id}/status`, { isActive });
    return response.data;
  },

  updatePermissions: async (id: number, permissions: Permission[]): Promise<Employee> => {
    const response = await api.put<Employee>(`/employees/${id}/permissions`, { permissions });
    return response.data;
  },
};
