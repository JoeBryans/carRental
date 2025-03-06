-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "brand" TEXT,
    "transmission" TEXT,
    "engine" TEXT,
    "gearbox" TEXT,
    "cylinders" TEXT,
    "doors" INTEGER,
    "seats" INTEGER,
    "petrol" TEXT,
    "model" TEXT,
    "year" TEXT,
    "mileage" TEXT,
    "features" TEXT[],

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
