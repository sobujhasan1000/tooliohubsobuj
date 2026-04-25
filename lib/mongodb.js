// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI;

// if (!MONGO_URI) {
//   throw new Error("Please add MONGO_URI in .env");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGO_URI, {
//       dbName: "toolssobuj",   // ✅ IMPORTANT FIX
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

// ✅ SAFE CHECK (no crash in scripts)
if (!MONGO_URI) {
  console.warn("⚠️ MONGO_URI not found in env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI missing. Check .env.local or dotenv config.");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      dbName: "toolssobuj",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
