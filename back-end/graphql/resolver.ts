import { testSchema } from "./types";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

export const resolver = {
  hello: () => "Hello world",
  usersData: () => {
    return prisma.users.findMany();
  }
};
