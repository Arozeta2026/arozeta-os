import { NextRequest, NextResponse } from "next/server";

import {
  getInvestment,
  updateInvestment,
  deleteInvestment,
} from "@/services/investmentService";

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

    const investment = await getInvestment(Number(id));

    if (!investment) {
      return NextResponse.json(
        {
          success: false,
          message: "Inversión no encontrada.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      investment,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo obtener la inversión.",
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

    const investment = await updateInvestment(Number(id), {
      ticker: body.ticker,
      companyName: body.companyName,
      exchange: body.exchange,
      shares:
        body.shares !== undefined
          ? Number(body.shares)
          : undefined,
      averagePrice:
        body.averagePrice !== undefined
          ? Number(body.averagePrice)
          : undefined,
      currency: body.currency,
    });

    return NextResponse.json({
      success: true,
      investment,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo actualizar la inversión.",
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

    await deleteInvestment(Number(id));

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo eliminar la inversión.",
      },
      {
        status: 500,
      }
    );
  }
}