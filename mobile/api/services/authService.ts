import axiosClient from "../axiosInstance";
import type { LoginRequest } from "@/types/api/request/loginRequest";
import { RegisterRequest } from "@/types/api/request/registerRequest";
import type { LoginResponse } from "@/types/api/response/login";

export class AuthService {
  private client = axiosClient;

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await this.client.post<LoginResponse>(
      "/auth/login/",
      credentials,
    );
    return response.data;
  }

  async register(credentials: RegisterRequest): Promise<{ message: string }> {
    const response = await this.client.post<{ message: string }>(
      "/auth/register/",
      credentials,
    );
    return response.data;
  }
}
