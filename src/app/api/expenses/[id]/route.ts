import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Recurrence, RecordStatus } from "@prisma/client";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const expense = await prisma.expense.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!expense) {
      return NextResponse.json(
        {
          success: false,
          message: "Gasto no encontrado.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      expense,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error obteniendo el gasto.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const expense = await prisma.expense.update({
      where: {
        id: Number(id),
      },
      data: {
        concept: body.concept,
        amount: Number(body.amount),

        recurrence: body.recurrence as Recurrence,

        startDate: new Date(body.startDate),

        endDate: body.endDate
          ? new Date(body.endDate)
          : null,

        status: body.status as RecordStatus,

        notes: body.notes ?? null,
      },
    });

    return NextResponse.json({
      success: true,
      expense,
    });
  } catch (error) {
    console.error("PATCH EXPENSE ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Error actualizando el gasto.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    await prisma.expense.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("DELETE EXPENSE ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Error eliminando el gasto.",
      },
      {
        status: 500,
      }
    );
  }
}