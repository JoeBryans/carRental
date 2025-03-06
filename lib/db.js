import { PrismaClient } from "@prisma/client";

// const db = new PrismaClient();
let db;
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  db = global.prisma;
}

export default db;
