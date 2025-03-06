import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const car = await db.car.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json({ car });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET(req) {
  try {
    const car = await db.car.findMany();
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}
