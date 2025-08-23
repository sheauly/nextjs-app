"use server";

import bcrypt from "bcrypt";
import { dbConnect, collectionsObj } from "@/lib/dbConnect";


// Use a users collection for user registration
const userCollection = dbConnect("users");

// Validation 
const { email, password } = payload;


if (!email || !password) return { success: false };
const user = await userCollection.findOne({ email: payload.email });

if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;
    return { success: acknowledged, insertedId };
}
return { success: false };

