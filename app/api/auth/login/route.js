import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  // 🔐 simple admin check
  if (email !== "admin@gmail.com" || password !== "123456") {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = signToken({ email });

  const response = NextResponse.json({
    message: "Login success",
  });

  // ✅ VERY IMPORTANT SETTINGS
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: false, // ⚠️ true only in production (https)
    sameSite: "lax",
    path: "/", // ✅ must
  });

  return response;
}