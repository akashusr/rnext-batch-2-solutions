import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";

export async function getUserByEmail(email) {
    await connectMongoDB();
    const response = await userModel
        .findOne({ email: email })
        .select(["name", "email", "image"]);
    return response;
}
