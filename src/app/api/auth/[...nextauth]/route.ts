import { authOptions } from "@/server/auth";
import { type RouteHandler } from "@/types/next";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions) as RouteHandler<{ nextauth: string[] }>;

export const GET = handler;
export const POST = handler;
