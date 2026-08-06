import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Recurrence, RecordStatus } from "@prisma/client";

export async function GET() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: {
        startDate: "desc",
      },
    });

    return NextResponse.json(expenses);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error obteniendo los gastos",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const expense = await prisma.expense.create({
      data: {
        concept: body.concepto,
        amount: Number(body.importe),

        recurrence: body.recurrencia as Recurrence,

        startDate: new Date(body.fechaInicio),

        endDate: body.fechaFin
          ? new Date(body.fechaFin)
          : null,

        status: RecordStatus.ACTIVE,

        notes: body.notes ?? null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        expense,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
  console.error("ERROR CREANDO GASTO:");
  console.error(error);

  return NextResponse.json(
    {
      success: false,
      message: error instanceof Error ? error.message : "Error desconocido",
      error,
    },
    {
      status: 500,
      }
    );
  }
}