import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json(
      {
        status: "success",
        tickets,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: "something went wrong! please try again.",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json(
      {
        status: "success",
        ticketData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: "something went wrong! please try again.",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
