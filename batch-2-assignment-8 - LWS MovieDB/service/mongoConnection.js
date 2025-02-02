import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { connection: null, promise: null };
}

export async function connectMongoDB() {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
        throw new Error(
            "Please define the MONGO_URI environment variable inside .env"
        );
    }

    // Use cached connection if available
    if (cached.connection) {
        return cached.connection;
    }

    // If no cached promise, create a new one
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            console.log(`🚀 Connection to MongoDB Success`);
            return mongoose;
        });
    }

    try {
        cached.connection = await cached.promise;
    } catch (error) {
        cached.promise = null; // Reset promise for retry
        console.error(`❌ MongoDB connection failed:`, error);
        throw error; // Propagate error
    }

    return cached.connection;
}
