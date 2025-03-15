import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    const car = await prisma.car.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json({ car });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(error.message);
  }
}

export async function GET(req) {
  try {
    const car = await prisma.car.findMany();
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}
