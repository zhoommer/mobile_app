import { ExpenseResponse } from "@/types/api/response/expense";
import axiosClient from "../axiosInstance";

export class ExpenseService {
  private client = axiosClient;

  async getAll(token: string): Promise<ExpenseResponse[]> {
    const response = await this.client.get<ExpenseResponse[]>("/expense/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
