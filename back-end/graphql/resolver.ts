import { testSchema } from "./types";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

export const resolver = {
  Query: {
    userdata: async () => {
      try {
        const users = await prisma.users.findMany(); // Changed to plural
        return users || []; // Fallback empty array
      } catch (error) {
        console.error("Prisma error:", error);
        throw new Error("Failed to fetch users");
      }
    },
    hello: () => "Hello world"
  },
};
