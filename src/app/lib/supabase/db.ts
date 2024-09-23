import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from 'dotenv';
import * as schema from "../../../../migrations/schema"
dotenv.config({ path: '.env' })

if (!process.env.DATABASE_URL) {
    console.log("cannot find database url")
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema })
const migrateDb = async () => {
    try {
        console.log('Migrating client')
        await migrateDb(db, {migrationsFolder:'migrations'})
        console.log("successfully migrated")
    } catch (error) {
       console.log("error in migrating client")
    }
}
migrateDb()
export default db;
