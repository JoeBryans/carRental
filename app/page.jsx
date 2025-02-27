"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Model } from "@/components/Scene";
import Hero from "@/components/header/Hero";
import Slider from "@/components/header/galary";
import Filter from "@/components/header/Filter";
import { Card, CardHeader } from "@/components/ui/card";
import Container from "@/components/Container";
import WhyUse from "@/components/page/whyUse";
import Cars from "@/components/page/Cars";
import Testimoner from "@/components/page/Testimoner";
import Blogs from "@/components/page/Blog";
import PropertyCount from "@/components/page/propertyCount";
const Models = (props) => {
  const { scene } = useGLTF("/bmw_i8.glb");
  return <primitive object={scene} scale={2} {...props} />;
};
export default function Home() {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <div className="relative">
        <Filter />
      </div>
      <Container>
        <WhyUse />
        <div className="mb-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 border-1 rounded-lg my-4">
            <Card>
              <div className="relative">
                <Image
                  src="/img/download (5).jpg"
                  alt="bmw"
                  width={1000}
                  height={1000}
                />
                <Image
                  src="/img/key.jpg"
                  alt="bmw"
                  width={1000}
                  height={1000}
                  className="absolute top-28 w-[30%] right-0"
                />
              </div>
            </Card>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-muted-foreground text-center">
                Cross Country Drive
              </h2>
              <span className="text-xl font-semibold text-muted-foreground text-center">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross courntey advantures
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 border-1 rounded-lg mt-14">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-muted-foreground text-center">
                All Inclusive Pricing
              </h2>
              <span className="text-xl font-semibold text-muted-foreground text-center">
                Get everything ypu need in one convenient, transparent price
                with our all inclusive pricing police
              </span>
            </div>
            <Card>
              <div className="relative">
                <Image
                  src="/img/images.jpg"
                  alt="bmw"
                  width={800}
                  height={800}
                />
                <Image
                  src="/img/key.jpg"
                  alt="bmw"
                  width={1000}
                  height={1000}
                  className="absolute top-28 w-[30%] right-0"
                />
              </div>
            </Card>
          </div>
        </div>
        <Cars />
        <Testimoner />
      </Container>
      <PropertyCount />
      <Container>
        <Blogs />
      </Container>
    </div>
  );
}
