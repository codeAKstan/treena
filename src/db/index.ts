import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let dbInstance: ReturnType<typeof drizzle> | null = null;
let initError: Error | null = null;

const getDb = () => {
  if (dbInstance) return dbInstance;
  if (initError) throw initError;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    initError = new Error("DATABASE_URL is not set");
    throw initError;
  }

  const sql = postgres(connectionString);
  dbInstance = drizzle({ client: sql, schema });
  return dbInstance;
};

const db = new Proxy(
  {},
  {
    get(_target, prop) {
      return (getDb() as any)[prop];
    },
  }
) as ReturnType<typeof drizzle>;

export { getDb };
export default db;
