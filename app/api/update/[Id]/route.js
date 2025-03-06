import db from "@/lib/db";
import { NextResponse } from "next/server";

// get by id
export async function GET(req, { params }) {
  try {
    const { Id } = await params;
    console.log(Id);
    return NextResponse.json("hrel");
  } catch (error) {
    return NextResponse.json(error);
  }
  // try {
  //   const car = await db.car.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });
  //   return NextResponse.json(car);
  // } catch (error) {
  //   return NextResponse.json(error);
  // }
}
