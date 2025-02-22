import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client"; // Ensure this is correct

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const response = await client.create({
      _type: "order",
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
    });

    return NextResponse.json({ success: true, data: response }, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 });
  }
}
