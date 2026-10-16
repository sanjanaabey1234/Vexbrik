import { MongoClient } from "mongodb";

const globalForMongo = global as typeof globalThis & {
  mongoClient?: Promise<MongoClient>;
};

export default function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured.");
  const clientPromise = globalForMongo.mongoClient ?? new MongoClient(uri).connect();
  if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongoClient = clientPromise;
  }
  return clientPromise;
}
