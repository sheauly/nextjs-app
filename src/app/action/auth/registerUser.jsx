"use server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import { connection } from "next/server";

export const registerUser = async (payload) => {
    const productCollection = dbConnect(collectionName.productCollection);

    // Validation 
    const { email, password } = payload;

    if (!email || !password) return { success: false };
    const user = await productCollection.findOne({ email: payload.email });

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);

        payload.password = hashedPassword;
        const result = await productCollection.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return (acknowledged, insertedId)
    }
    return { success: false };

}