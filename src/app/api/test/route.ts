import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const total = await prisma.income.count();

  return NextResponse.json({
    ok: true,
    income: total,
  });
}