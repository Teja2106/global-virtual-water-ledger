import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("67ce8003001142178390"); // Set your project ID

export const account = new Account(client);
export const databases = new Databases(client);
