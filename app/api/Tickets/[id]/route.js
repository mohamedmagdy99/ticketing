import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json(
      {
        status: "success",
        message: "found Ticket",
        foundTicket,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "failed",
        message: "didn't find the ticket",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      {
        status: "success",
        message: "ticket deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: "Error",
        error,
      },
      { status: 500 }
    );
  }
}
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json(
      {
        status: "success",
        message: "ticket updated",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        message: "Error",
        error,
      },
      { status: 500 }
    );
  }
}
