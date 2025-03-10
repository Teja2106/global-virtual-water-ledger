import { ID, Account, Databases } from "appwrite";
import { account, databases } from "../config/appwrite";

interface AuthResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class AppwriteService {
  private account: Account;
  private databases: Databases;

  constructor() {
    this.account = account;
    this.databases = databases;
  }

  async createAccount(
    email: string,
    password: string,
    name?: string
  ): Promise<AuthResponse> {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      return {
        success: true,
        data: user,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const session = await this.account.createEmailSession(email, password);
      return {
        success: true,
        data: session,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async logout(): Promise<AuthResponse> {
    try {
      await this.account.deleteSession("current");
      return {
        success: true,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async getCurrentUser(): Promise<AuthResponse> {
    try {
      const user = await this.account.get();
      return {
        success: true,
        data: user,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const user = await this.account.get();
      return !!user;
    } catch {
      return false;
    }
  }

  async updateUserName(name: string): Promise<AuthResponse> {
    try {
      const user = await this.account.updateName(name);
      return {
        success: true,
        data: user,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

export const appwriteService = new AppwriteService();
