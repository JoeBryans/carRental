import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  let cars = {};
  const res = await fetch(`http://localhost:3000/api/car/${id}`);
  const data = await res.json();
  console.log(data);
  // (data);
  // cars.push(data);
  cars = data;

  console.log(cars);

  return (
    <div>
      <Container>
        <Card>
          <CardContent>
            <div>
              <Image src={cars.image} alt="image" width={500} height={500} />
            </div>
            <div></div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default page;
