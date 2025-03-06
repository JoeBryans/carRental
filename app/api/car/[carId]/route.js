import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { carId } = await params;
    // console.log(carId);

    const car = await db.car.findUnique({
      where: {
        id: carId,
      },
    });
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { carId } = await params;
    const car = await db.car.update({
      where: {
        id: carId,
      },

      data: {
        ...body,
      },
    });
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req, { params }) {
  try {
    const { carId } = await params;
    console.log(carId);
    const car = await db.car.delete({
      where: {
        id: carId,
      },
    });
    return NextResponse.json({ message: "car deleted" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
