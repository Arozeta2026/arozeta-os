import { NextRequest, NextResponse } from "next/server";

import {
  getInvestments,
  createInvestment,
} from "@/services/investmentService";

export async function GET() {
  try {
    const investments = await getInvestments();

    return NextResponse.json({
      success: true,
      investments,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudieron obtener las inversiones.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const investment = await createInvestment({
      ticker: body.ticker,
      companyName: body.companyName,
      exchange: body.exchange,
      shares: Number(body.shares),
      averagePrice: Number(body.averagePrice),
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
        message: "No se pudo crear la inversión.",
      },
      {
        status: 500,
      }
    );
  }
}