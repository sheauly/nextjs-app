import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, password } = await req.json();
    if (!email || !password) {
        return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }
    const userCollection = dbConnect("users");
    const existing = await userCollection.findOne({ email });
    if (existing) {
        return NextResponse.json({ success: false, message: "User already exists" }, { status: 409 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userCollection.insertOne({ name, email, password: hashedPassword });
    return NextResponse.json({ success: true, insertedId: result.insertedId });
}
